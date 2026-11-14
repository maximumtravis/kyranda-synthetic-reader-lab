// PROPOSED CUSTOM-ELEMENT HOST. Local tests do not prove Wix wrapper/footer reflow.
(() => {
  const READER_URL = "https://maximumtravis.github.io/kyranda-synthetic-reader-lab/releases/9fb5143453085c8a39df0b86f1fdf8b48b52459f02dfe43d5d391634cbb95c91/reader.html";
  const MAX_HEIGHT = 200000;
  class CodexContentHost extends HTMLElement {
    static get observedAttributes() { return ['codex-host-message']; }
    constructor() {
      super();
      this.attachShadow({mode:'open'});
      this.receive = this.receive.bind(this);
    }
    connectedCallback() {
      if (this.frame) return;
      this.session = null; this.ready = false; this.lastSequence = 0; this.initial = null;
      this.style.display = 'block';
      const frame = document.createElement('iframe');
      frame.title = 'Kyranda Codex reader';
      // Opaque origin retains isolation. Only the baked-in, digest-pinned document runs.
      frame.setAttribute('sandbox','allow-scripts allow-popups allow-popups-to-escape-sandbox');
      frame.style.cssText = 'display:block;width:100%;border:0;height:600px';
      this.style.height = '600px'; // Failure fallback, not a measurement of the Wix page.
      this.frame = frame;
      window.addEventListener('message', this.receive);
      this.shadowRoot.replaceChildren(frame);
      frame.src = READER_URL;
      this.consume(this.getAttribute('codex-host-message'));
    }
    disconnectedCallback() {
      window.removeEventListener('message', this.receive);
      this.shadowRoot.replaceChildren();
      this.frame = null; this.initial = null; this.session = null; this.ready = false;
    }
    attributeChangedCallback(name, before, value) {
      if (value && value !== before) this.consume(value);
    }
    consume(value) {
      if (!this.frame || !value) return;
      let envelope;
      try { envelope = JSON.parse(value); } catch { return; }
      const m = envelope?.message;
      if (m?.version !== 1 || typeof m.session !== 'string' || !m.session || m.session.length > 200) return;
      if (m.type === 'codex-init') {
        if (this.session && this.session !== m.session) return;
        this.session = m.session; this.initial = m;
      } else if (!this.session || m.session !== this.session ||
        !['codex-response','codex-measure','codex-sync'].includes(m.type)) return;
      // Never retain an article response in an outer DOM attribute.
      this.removeAttribute('codex-host-message');
      if (this.ready) this.send(m);
    }
    send(message) {
      // '*' is required for this opaque-origin sandbox. Destination is this one
      // immutable srcdoc frame, never a navigable external URL or arbitrary window.
      this.frame.contentWindow.postMessage(message, '*');
    }
    receive(event) {
      if (!this.frame || event.source !== this.frame.contentWindow || event.origin !== 'null') return;
      const m = event.data;
      if (!m || m.version !== 1) return;
      if (m.type === 'codex-ready') {
        this.ready = true;
        if (this.initial) this.send(this.initial);
        this.emit(m); return;
      }
      if (!this.session || m.session !== this.session) return;
      if (m.type === 'codex-content-height') {
        if (!Number.isSafeInteger(m.sequence) || m.sequence <= this.lastSequence ||
            !Number.isSafeInteger(m.height) || m.height < 1 || m.height > MAX_HEIGHT ||
            !Number.isSafeInteger(m.width) || Math.abs(m.width - this.frame.clientWidth) > 1) return;
        this.lastSequence = m.sequence;
        this.frame.style.height = `${m.height}px`;
        this.style.height = `${m.height}px`;
        // Diagnostic says only our own box was sized, not that Wix reflowed.
        this.setAttribute('data-codex-height', String(m.height));
        return;
      }
      if (['codex-request','codex-route','codex-host-report','codex-location-check'].includes(m.type)) this.emit(m);
    }
    emit(message) {
      this.dispatchEvent(new CustomEvent('codex-message',{detail:{data:message}}));
    }
  }
  if (!customElements.get('kyranda-content-host'))
    customElements.define('kyranda-content-host', CodexContentHost);
})();
