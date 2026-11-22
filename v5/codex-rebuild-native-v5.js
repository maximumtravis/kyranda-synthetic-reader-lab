// Kyranda Codex v5: Wix-hosted custom element candidate. No iframe.
// Native page scroll; staging-only bridge; backend remains authorization-gated.
const KYRANDA_V5_CSS = "\n:host{display:block;width:100%;height:auto;--paper:#faf8f2;--ink:#292824;--muted:#67665d;--line:#d6d1c5;--accent:#704b2c;--panel:#f0ece2;color:var(--ink);background:var(--paper);font-family:Arial,Helvetica,sans-serif}\n*{box-sizing:border-box}button,input,select{font:inherit;color:inherit}button{cursor:pointer}button,a{color:var(--accent)}\nbutton:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,summary:focus-visible{outline:3px solid #9c6c31;outline-offset:3px}\n#reader{max-width:1800px;margin:auto;padding:0 clamp(16px,3vw,52px) 28px}.skip-link{position:absolute;left:-10000px}.skip-link:focus{left:10px;top:10px;background:white;padding:12px;z-index:10}\n.offline-note{font-size:11px;letter-spacing:.05em;line-height:1.6;margin:0;padding:10px 0;color:#695b47;border-bottom:1px solid var(--line)}\n.masthead{display:flex;justify-content:space-between;align-items:center;padding:28px 0 24px}.eyebrow{text-transform:uppercase;font-size:10px;letter-spacing:.17em;color:var(--muted);font-weight:700;margin:0 0 10px}\n.brand{font:400 clamp(30px,3vw,48px)/1.1 Georgia,serif;letter-spacing:-.04em;margin:0}.brand span{color:var(--accent)}.tagline{font-size:13px;color:var(--muted);margin:10px 0 0}\n.seal{font:36px Georgia,serif;border:1px solid #b39b76;outline:1px solid #b39b76;outline-offset:5px;width:55px;height:55px;display:grid;place-items:center;color:var(--accent);margin:6px}\n.toolbar{display:grid;grid-template-columns:200px 210px minmax(180px,1fr);gap:18px;background:var(--panel);border-block:1px solid var(--line);padding:18px 20px;align-items:end}.toolbar label{display:block;font-size:11px;font-weight:700;color:#514c40}.toolbar select,.toolbar input{display:block;width:100%;min-width:0;height:40px;padding:8px 10px;background:#fffdf8;border:1px solid #c8c1b2;border-radius:3px;margin-top:7px}\n.wiki-layout{display:grid;grid-template-columns:220px minmax(0,1fr) 250px;grid-template-areas:'browse heading info' 'browse body info' 'browse related info';gap:0 24px;padding-top:30px;align-items:start}.browse{grid-area:browse;min-width:0;padding-right:16px;border-right:1px solid var(--line)}\n.sidebar-panel{position:sticky;top:16px;max-height:none;padding:14px;background:var(--paper);border:1px solid var(--line);border-radius:4px}.sidebar-panel details>summary{font:17px Georgia,serif;cursor:pointer;margin:14px 0}.sidebar-panel details>summary::marker{color:var(--accent)}\n.sidebar-panel ol,.sidebar-panel ul{list-style:none;padding:0;margin:0}.sidebar-panel ol{border-left:1px solid var(--line);padding-left:10px}.sidebar-panel li{margin:3px 0}.sidebar-panel a{display:block;text-decoration:none;font-size:13px;line-height:1.5;padding:7px 5px;overflow-wrap:anywhere}.sidebar-panel a:hover{text-decoration:underline}.sidebar-panel a[aria-current=\"location\"]{font-weight:700;background:var(--panel);border-left:3px solid var(--accent)}\n.back{border:0;background:transparent;padding:3px 0;text-align:left;font-size:13px;font-weight:700}.sidebar-panel h3{font:18px Georgia,serif;margin:20px 0 10px}.article-heading{grid-area:heading;min-width:0}.breadcrumbs{font-size:11px;line-height:1.7;color:var(--muted);margin-bottom:22px}\n.article-heading h2{font:400 clamp(28px,3vw,42px)/1.15 Georgia,serif;letter-spacing:-.025em;margin:0 0 18px;overflow-wrap:anywhere}.intro{font:18px/1.7 Georgia,serif;margin:0 0 20px;padding-bottom:20px;border-bottom:1px solid var(--line);overflow-wrap:anywhere}\n.article-body{grid-area:body;min-width:0;outline:none}.article-body h3{font:400 25px/1.3 Georgia,serif;margin:26px 0 13px;border-bottom:1px solid var(--line);padding-bottom:8px;scroll-margin-top:20px}.article-body p{font:17px/1.85 Georgia,serif;margin:0 0 17px;white-space:pre-line;overflow-wrap:anywhere}\n.directory{list-style:none;margin:0;padding:0}.directory li{padding:18px 0;border-bottom:1px solid var(--line)}.directory button{font:23px Georgia,serif;text-align:left;border:0;background:none;padding:0}.directory p{font:15px/1.65 Arial,sans-serif;margin:8px 0}.directory small{font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--muted)}\n.infobox{grid-area:info;min-width:0;background:#f2eee3;border:1px solid #c4b9a4}.infobox h3{font:22px/1.4 Georgia,serif;text-align:center;margin:0;padding:17px 12px;background:#e7dfcf;border-bottom:1px solid #c4b9a4}.infobox img{display:block;width:100%;height:auto;max-height:420px;object-fit:contain}.infobox figure{margin:0}.infobox figcaption{font-size:12px;line-height:1.5;padding:12px;border-bottom:1px solid var(--line)}.infobox .placeholder{font:italic 13px Georgia,serif;padding:30px 15px;text-align:center}\n.infobox dl{display:grid;grid-template-columns:1fr 1.4fr;font-size:12px;line-height:1.6;margin:0}.infobox dt,.infobox dd{margin:0;padding:11px 12px;border-bottom:1px solid var(--line);overflow-wrap:anywhere}.infobox dt{font-weight:bold}.related{grid-area:related;border-top:1px solid var(--line);padding-top:20px;margin-top:30px;min-width:0}.related:empty{display:none}.related h3{font:23px Georgia,serif}.related button{border:0;background:none;text-decoration:underline;padding:6px 12px 6px 0}.footer{border-top:1px solid var(--line);margin-top:35px;padding-top:12px;font-size:11px;line-height:1.8;color:var(--muted);display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap}\n.hidden{display:none!important}.article-body blockquote{font:italic 19px/1.7 Georgia,serif;margin:20px 0;padding:12px 20px;border-left:3px solid var(--accent);background:var(--panel)}\n.article-body blockquote cite{display:block;font:12px/1.7 Arial,sans-serif;margin-top:8px}.article-body figure{margin:22px 0}.article-body figure img{display:block;max-width:100%;height:auto;margin:auto}.article-body figcaption{color:var(--muted);font-size:12px;text-align:center;padding:8px}.article-body h4{font:600 18px Georgia,serif}.article-body li{line-height:1.6}.directory .article-link{display:block;margin-top:8px}.related .article-link{text-align:left}\n.sidebar-panel{max-height:none;overflow:visible}.sidebar-panel .back{display:block;width:100%;padding:9px 5px 13px;border-bottom:1px solid var(--line);font-size:13px}.sidebar-panel .back:hover{text-decoration:underline}\n.sidebar-panel details>summary{font-size:16px;line-height:1.4;margin:17px 0 10px}.sidebar-panel ol{margin-bottom:5px}.sidebar-panel a{border-radius:2px;transition:background-color .12s ease}.sidebar-panel a:hover,.sidebar-panel a:focus-visible{background:var(--panel)}\n.sidebar-panel h3{font-size:16px;line-height:1.3;margin:17px 0 11px}.sidebar-panel #directory-shortlist{border-left:1px solid var(--line);padding-left:10px}.sidebar-panel #directory-shortlist li{margin:0}.sidebar-panel #directory-shortlist a{display:flex;justify-content:space-between;gap:8px;align-items:baseline;padding:8px 5px;color:var(--ink)}.sidebar-panel #directory-shortlist a span{font-size:11px;color:var(--muted);white-space:nowrap}\n.directory-group{margin:8px 0 26px;scroll-margin-top:24px}.directory-group h3{display:flex;align-items:baseline;gap:12px;font:400 26px/1.25 Georgia,serif;margin:0;padding:0 0 10px;border-bottom:1px solid var(--line)}.directory-group h3 small{font:12px/1.3 Arial,sans-serif;color:var(--muted);letter-spacing:0;text-transform:none}.directory-group .directory{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,270px),1fr));column-gap:26px}.directory-group .directory li{padding:16px 0}.directory-group .directory button{font-size:20px;line-height:1.3}.directory-group .directory button:hover{text-decoration:underline}.directory-group .directory p{font-size:14px;line-height:1.6;margin:7px 0 0}\n.access-notice{padding:17px 20px;border-left:3px solid #9b7140;background:var(--panel);font:15px/1.7 Arial,sans-serif!important}.retry-button{padding:10px 17px;border:1px solid #a58d70;border-radius:3px;background:#fffdf8;font-weight:700}.retry-button:hover{background:#eee7d9}\n@media(max-width:1100px){.wiki-layout{grid-template-columns:185px minmax(0,1fr) 225px;gap:0 16px}.toolbar{grid-template-columns:1fr 1fr 2fr}}\n@media(max-width:820px){.wiki-layout{grid-template-columns:minmax(0,1fr);grid-template-areas:'heading' 'browse' 'body' 'info' 'related';gap:22px}.browse{border-right:0;padding-right:0}.sidebar-panel{position:relative;top:0;max-height:none;overflow:visible}.sidebar-panel #directory-shortlist{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:0 12px}.article-heading h2{font-size:32px}.infobox{width:100%;max-width:430px;justify-self:center}.infobox dl{grid-template-columns:1fr 1.8fr}.toolbar{grid-template-columns:1fr 1fr}.toolbar label:last-child{grid-column:1/-1}}\n@media(max-width:650px){.masthead{padding:22px 0}.seal{display:none}.intro{font-size:17px}.article-body p{font-size:16px}.article-body h3{font-size:23px}.infobox dl{grid-template-columns:1fr}.infobox dt{padding-bottom:3px;border-bottom:0}.infobox dd{padding-top:0}.footer{display:block}.footer span{display:block}}\n@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}\n\n\n.directory .expand-directory{font:700 13px Arial,sans-serif;padding:11px 14px;border:1px solid var(--line);border-radius:3px;background:var(--panel)}\n";
const KYRANDA_V5_MARKUP = "\n  <a class=\"skip-link\" href=\"#main-content\">Skip to article</a>\n  <div id=\"reader\">\n    <p class=\"offline-note\"><strong>ADMINISTRATOR STAGING</strong> · Isolated rebuild · No public route cutover · Episode 48 remains independently gated.</p>\n    <header class=\"masthead\">\n      <div><p class=\"eyebrow\">YOU'VE GOT TO BE CRITTING ME</p>\n        <h1 class=\"brand\">Kyranda <span>Codex</span></h1>\n        <p class=\"tagline\">An episode-aware campaign encyclopedia</p></div>\n      <div class=\"seal\" aria-hidden=\"true\">K</div>\n    </header>\n    <section class=\"toolbar\" aria-label=\"Reader preferences\">\n      <label>Campaign<select id=\"campaign\"><option value=\"main\">Main Campaign</option><option value=\"parental\">Parental Advisory</option></select></label>\n      <label>Last episode completed<select id=\"episode\"></select></label>\n      <label>Search the Codex<input id=\"search\" type=\"search\" placeholder=\"Search visible articles…\"></label>\n    </section>\n    <div class=\"wiki-layout\" id=\"layout\">\n      <nav class=\"browse\" aria-label=\"Article navigation\"><div class=\"sidebar-panel\">\n        <button id=\"all-articles\" class=\"back\" type=\"button\">← All Articles</button>\n        <details id=\"toc-collapse\" open><summary>On this page</summary><ol id=\"toc\"></ol></details>\n        <details id=\"directory-nav\" hidden open><summary>Browse categories</summary><ul id=\"directory-shortlist\"></ul></details>\n      </div></nav>\n      <header class=\"article-heading\"><div id=\"breadcrumbs\" class=\"breadcrumbs\">Kyranda Codex</div>\n        <p id=\"category\" class=\"eyebrow\"></p><h2 id=\"title\">Loading articles…</h2>\n        <p id=\"intro\" class=\"intro\"></p></header>\n      <main id=\"main-content\" class=\"article-body\" tabindex=\"-1\"><p>Loading selected content…</p></main>\n      <aside class=\"infobox\" id=\"infobox\" aria-label=\"Article information\"></aside>\n      <section class=\"related\" id=\"related\" aria-label=\"Related articles\"></section>\n    </div>\n    <footer class=\"footer\"><span id=\"state\" role=\"status\" aria-live=\"polite\"></span><span>Episode preferences control spoilers, not access to private material.</span></footer>\n  </div>\n";

// The native Wix element is stretched to full width with 40px desktop margins.
// Follow the Wix wrapper width instead of offsetting from its former 980px grid.
// On extra-wide displays, give all three columns more room while retaining a
// readable centered maximum; smaller desktop and mobile widths stay fluid.
const KYRANDA_V5_LAYOUT_OVERRIDE = `
:host {position:relative;left:0 !important;transform:none !important;width:100% !important;max-width:none !important}
#reader {max-width:2600px}
.sidebar-panel #toc {counter-reset:codex-section;padding-left:0;border-left:0}
.sidebar-panel #toc li {counter-increment:codex-section;margin:0}
.sidebar-panel #toc a {display:grid;grid-template-columns:2.2em minmax(0,1fr);gap:7px;
  border-left:2px solid var(--line);padding:9px 8px 9px 10px;color:var(--ink)}
.sidebar-panel #toc a::before {content:counter(codex-section,decimal-leading-zero);
  color:var(--muted);font:11px/1.8 Arial,sans-serif}
.sidebar-panel #toc a[aria-current="location"] {border-left-color:var(--accent);
  background:var(--panel);color:var(--accent)}
.article-body a.context-link,.intro a.context-link,.infobox a.context-link,
.directory a.context-link {color:#76502e;text-decoration:underline;
  text-decoration-color:#c6aa83;text-underline-offset:3px;text-decoration-thickness:1px}
.article-body a.context-link:hover,.intro a.context-link:hover,
.infobox a.context-link:hover,.directory a.context-link:hover {
  text-decoration-color:currentColor;background:#f0e9d8}
.infobox .alias-section {padding:15px 16px;border-bottom:1px solid var(--line);background:#f8f3e9}
.infobox .alias-section h4 {font:700 11px/1.4 Arial,sans-serif;
  text-transform:uppercase;letter-spacing:.11em;color:#66553e;margin:0 0 9px}
.infobox .alias-section ul {list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:7px}
.infobox .alias-section li {font:13px/1.5 Georgia,serif;color:#594129;
  background:#eee5d4;border:1px solid #d7c9b3;border-radius:3px;padding:5px 9px}
.infobox.compact-character h3 {padding-bottom:9px;border-bottom:0}
.infobox .character-kind {margin:0;padding:0 12px 14px;background:#e7dfcf;
  border-bottom:1px solid #c4b9a4;text-align:center;font:700 10px/1.5 Arial,sans-serif;
  letter-spacing:.13em;text-transform:uppercase;color:#66543e}
.infobox.compact-character dl {display:block;margin:0;padding:4px 16px 7px}
.infobox.compact-character dt {font:700 10px/1.4 Arial,sans-serif;
  text-transform:uppercase;letter-spacing:.1em;color:#615747;padding:12px 0 3px;border:0}
.infobox.compact-character dd {font:15px/1.5 Georgia,serif;
  padding:0 0 12px;border-bottom:1px solid var(--line)}
.infobox.compact-character dd:last-child {border-bottom:0;padding-bottom:7px}
.infobox.compact-character .alias-section {padding:15px 16px}
.sidebar-panel #toc.toc-episode-groups {border:0;padding:0;counter-reset:none}
.sidebar-panel #toc.toc-episode-groups>li {counter-increment:none;margin:0}
.sidebar-panel #toc .toc-episode-details {border-bottom:1px solid var(--line)}
.sidebar-panel #toc .toc-episode-details>summary {display:flex;align-items:center;
  justify-content:space-between;gap:5px;margin:0;padding:10px 5px;
  color:var(--ink);font:700 12px/1.5 Arial,sans-serif;list-style-position:inside}
.sidebar-panel #toc .toc-episode-details>summary:hover,
.sidebar-panel #toc .toc-episode-details[open]>summary {background:#f1ece2;color:var(--accent)}
.sidebar-panel #toc .toc-episode-count {font:11px/1.4 Arial,sans-serif;
  color:var(--muted);white-space:nowrap}
.sidebar-panel #toc .toc-episode-links {counter-reset:codex-section;
  margin:0 0 6px 6px;padding:0;border:0}
.sidebar-panel #toc .toc-episode-links li {counter-increment:codex-section}
.sidebar-panel #toc .toc-episode-links a {font-size:12px;padding:8px 5px 8px 8px}
.sidebar-panel #toc .toc-extra a {font-weight:700;margin-top:8px}
.sidebar-panel #toc .toc-extra a::before {content:'•';font-size:13px}
@media(max-width:820px){.sidebar-panel #toc a{padding-block:11px}}
`;

// A response belongs to one element instance, even when Wix remounts a reader
// before an earlier asynchronous backend call returns.
let kyrandaV5InstanceSerial = 0;
class KyrandaCodexNativeV5 extends HTMLElement {
  static get observedAttributes() { return ['codex-ready', 'codex-receipt', 'codex-result']; }
  constructor() {
    super();
    this._root = this.attachShadow({mode:'open'});
    this._started = false;
    this._diagnosticInstance = Date.now() * 1024 + (++kyrandaV5InstanceSerial % 1024);
  }
  _emitDiagnostic(phase, details = {}) {
    // Opt-in staging-only transport timing. Metadata never includes DTOs,
    // tokens, article text, identities or a backend response body.
    if (typeof location !== 'undefined' &&
        new URLSearchParams(location.search).get('kcPerf') === '1') {
      if (!this._timingStartedAt) this._timingStartedAt = Date.now();
      if (!this._timingEvents) this._timingEvents = [];
      this._timingEvents.push({
        ms: Date.now() - this._timingStartedAt,
        phase,
        id: Number.isSafeInteger(details.id) ? details.id : null,
        action: typeof details.action === 'string' ? details.action : null,
        elapsedMs: Number.isFinite(details.elapsedMs) ? details.elapsedMs : null
      });
      this.setAttribute('data-codex-perf',
        JSON.stringify(this._timingEvents.slice(-32)));
    }
    this.dispatchEvent(new CustomEvent('codex-diagnostic', {detail:{
      protocol:'kyranda-codex-rebuild-stage-v1',
      phase, instance:this._diagnosticInstance, ...details
    }}));
  }
  connectedCallback() {
    if (this.getAttribute('codex-ready') === '1') this._start();
  }
  attributeChangedCallback(name, oldValue, value) {
    if (name === 'codex-ready' && value === '1' && this.isConnected) this._start();
    if (name === 'codex-receipt' && value && oldValue !== value) {
      try {
        const message = JSON.parse(value);
        const matched = this._acceptReceipt?.(message) === true;
        this._emitDiagnostic('receipt-observed', {id:message?.id, matched});
      } catch {
        this._emitDiagnostic('receipt-parse-failed');
      }
    }
    if (name !== 'codex-result' || !value || oldValue === value) return;
    try {
      const message = JSON.parse(value);
      const matched = this._acceptResult?.(message) === true;
      this._emitDiagnostic('attribute-observed', {
        id:message?.id, characters:value.length, matched
      });
    } catch {
      this._emitDiagnostic('attribute-parse-failed', {characters:value.length});
    }
  }
  _start() {
    if (this._started) return;
    this._started = true;
    this._root.innerHTML = '<style>' + KYRANDA_V5_CSS + KYRANDA_V5_LAYOUT_OVERRIDE + '</style>' + KYRANDA_V5_MARKUP;
    this._abort = new AbortController();
    this._mount(this._root, this._abort);
    this._emitDiagnostic('started');
  }
  _mount(root, abort) {
    const host = this;
    
// Isolated Wix HTML component. It receives only administrator-authorized DTOs.
// No Wix CMS access, owner receipt, private source or API credential is in here.
const PROTOCOL = 'kyranda-codex-rebuild-stage-v1';
let serial = 0;
const inFlight = new Map();
host._acceptReceipt = message => {
  if (abort.signal.aborted || message?.protocol !== PROTOCOL ||
      message.kind !== 'receipt' ||
      !Number.isSafeInteger(message.instance) ||
      message.instance !== host._diagnosticInstance ||
      !Number.isSafeInteger(message.id)) return false;
  const request = inFlight.get(message.id);
  if (!request) return false;
  request.acknowledged = true;
  clearTimeout(request.receiptTimer);
  host._emitDiagnostic('request-received-by-wix', {
    id: message.id, action:request.action,
    elapsedMs:Date.now()-request.startedAt
  });
  return true;
};
host._acceptResult = message => {
  if (abort.signal.aborted) return false;
  if(message?.protocol !== PROTOCOL || message.kind !== 'result' ||
     !Number.isSafeInteger(message.id) ||
     !Number.isSafeInteger(message.instance) ||
     message.instance !== host._diagnosticInstance)return false;
  const request = inFlight.get(message.id);
  if(!request)return false;
  clearTimeout(request.timer);
  clearTimeout(request.receiptTimer);
  inFlight.delete(message.id);
  host._emitDiagnostic('request-acknowledged', {
    id:message.id,action:request.action,elapsedMs:Date.now()-request.startedAt
  });
  request.resolve(message.value);
  return true;
};
// A cold Wix Velo backend can take longer than eight seconds to acknowledge.
// Retrying that first request too early doubles the CMS verification work.
const REQUEST_TIMEOUT_MS = 20000;
// A receipt is transport-only, not authorization. A missed initial event can
// be resent quickly with its original ID without repeating backend work.
// The Wix page bridge deduplicates that ID until the result is delivered.
const RECEIPT_RETRY_MS = 1400;
const askPage = (action,payload) => new Promise((resolve,reject)=>{
  if (abort.signal.aborted) { reject(new Error('Reader disconnected')); return; }
  const id=++serial;
  const startedAt=Date.now();
  const timer=setTimeout(()=>{
    clearTimeout(inFlight.get(id)?.receiptTimer);
    inFlight.delete(id);
    host._emitDiagnostic('request-timeout', {id,action,elapsedMs:Date.now()-startedAt});
    reject(new Error('Stage timed out'));
  },REQUEST_TIMEOUT_MS);
  const detail={protocol:PROTOCOL,kind:'request',instance:host._diagnosticInstance,
    id,action,payload};
  const send=()=>host.dispatchEvent(new CustomEvent('codex-request',{detail}));
  const request={resolve,reject,timer,action,startedAt,
    acknowledged:false,receiptTimer:null,resends:0};
  const retryReceipt=()=>{
    if (abort.signal.aborted || inFlight.get(id)!==request || request.acknowledged ||
        request.resends>=2)return;
    request.resends++;
    host._emitDiagnostic('request-retransmitted',{id,action,resends:request.resends});
    send();
    request.receiptTimer=setTimeout(retryReceipt,RECEIPT_RETRY_MS);
  };
  inFlight.set(id,request);
  request.receiptTimer=setTimeout(retryReceipt,RECEIPT_RETRY_MS);
  host._emitDiagnostic('request-sent', {id,action});
  send();
});
// Wix can miss the first event immediately after onReady registration. Retry
// only an unacknowledged, read-only request; never retry an explicit denial.
async function askPageResilient(action,payload) {
  for (let attempt=1; attempt<=2; attempt++) {
    try { return await askPage(action,payload); }
    catch (error) {
      if (abort.signal.aborted || error?.message !== 'Stage timed out' || attempt===2) throw error;
      host._emitDiagnostic('request-retry', {action,nextAttempt:attempt+1});
    }
  }
}
abort.signal.addEventListener('abort', () => {
  for (const request of inFlight.values()) {
    clearTimeout(request.timer);
    clearTimeout(request.receiptTimer);
    request.reject(new Error('Reader disconnected'));
  }
  inFlight.clear();
}, {once:true});
const byId = id => root.getElementById(id);
const campaignControl = byId('campaign');
const episodeControl = byId('episode');
const searchControl = byId('search');
const title = byId('title');
const category = byId('category');
const intro = byId('intro');
const breadcrumbs = byId('breadcrumbs');
const articleBody = byId('main-content');
const toc = byId('toc');
const tocCollapse = byId('toc-collapse');
const directoryNav = byId('directory-nav');
const directoryShortlist = byId('directory-shortlist');
const infobox = byId('infobox');
const related = byId('related');
const status = byId('state');
let lastRequest = 0;
let lastEpisodeRequest = 0;
let searchTimer;
let activeHeadingIds = [];
let activeTocId = '';
const tocEpisodeGroups = new Map();
const compactNavigation = window.matchMedia('(max-width:820px)');

function setNavigationForViewport() {
  // Keep the full sidebar on desktop. On narrow screens, put the article first
  // and let readers reveal the category list or table of contents as needed.
  directoryNav.open = !compactNavigation.matches;
  tocCollapse.open = !compactNavigation.matches;
}
compactNavigation.addEventListener('change', setNavigationForViewport, {signal:abort.signal});
setNavigationForViewport();

const query = new URLSearchParams(location.search);
const state = {
  campaign: ['main', 'parental'].includes(query.get('campaign')) ? query.get('campaign') : 'main',
  episode: Number(query.get('through')) || 0,
  slug: /^r-[a-f0-9]{32}$/.test(query.get('slug') || '') ? query.get('slug') : '',
  search: (query.get('search') || '').slice(0, 120)
};

const element = (tag, className = '', content = '') => {
  const node = root.ownerDocument.createElement(tag);
  if (className) node.className = className;
  node.textContent = content;
  return node;
};

function encodeState() {
  const url = new URL(location.href);
  // Keep Wix's ?siteRevision=934 (and any other routing parameters) intact.
  for (const name of ['campaign','through','slug','search']) url.searchParams.delete(name);
  url.searchParams.set('campaign', state.campaign);
  url.searchParams.set('through', String(state.episode));
  if (state.slug) url.searchParams.set('slug', state.slug);
  if (state.search) url.searchParams.set('search', state.search);
  return url;
}

function updateUrl(replace = false) {
  // This changes only the HTML component's own same-origin URL, never Wix's
  // public /wiki route. Browser Back can then restore this reader's state.
  // Some Wix sandbox configurations restrict the History API: remain usable
  // without history rather than attempting a parent-frame navigation.
  try {
    const url = encodeState();
    if (replace) history.replaceState({codexStage: true}, '', url);
    else history.pushState({codexStage: true}, '', url);
  } catch { /* Restricted sandbox: safe in-page navigation still works. */ }
}

function selectArticle(slug) {
  if (!/^r-[a-f0-9]{32}$/.test(slug)) return;
  state.slug = slug;
  state.search = '';
  searchControl.value = '';
  updateUrl();
  void render();
  host.scrollIntoView({block:'start', behavior:'auto'});
}

function articleLink(slug, label) {
  const link = element('button', 'article-link', label);
  link.type = 'button';
  link.addEventListener('click', () => selectArticle(slug));
  return link;
}

// In-world aliases are *not* the opaque r- URL aliases used by Wix. An alias
// must be editorially approved, and its own first reveal episode must already
// have been reached. Missing approval/reveal metadata fails closed.
function visibleApprovedAliases(source, canonicalTitle = '') {
  if (!Array.isArray(source)) return [];
  const seen = new Set([String(canonicalTitle).toLowerCase()]);
  const visible = [];
  for (const record of source) {
    if (!record || typeof record !== 'object' || record.approved !== true ||
        !Number.isSafeInteger(record.revealEpisode) || record.revealEpisode < 1 ||
        record.revealEpisode > state.episode) continue;
    const name = record.name;
    if (typeof name !== 'string' || name.trim() !== name ||
        name.length < 2 || name.length > 120) continue;
    const key = name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    visible.push(name);
  }
  return visible;
}

// Only concise, episode-authorized biographical fields belong in character
// infoboxes. The full narrative, inventory, relationships and stats remain in
// the main article. Absent or placeholder metadata is never inferred.
const CHARACTER_FACT_FIELDS = [
  {label:'Played by', names:['played by','player','portrayed by']},
  {label:'Species', names:['species','race','ancestry']},
  {label:'Class', names:['class','character class']},
  {label:'Origin', names:['origin','hometown','place of origin']},
  {label:'Affiliation', names:['affiliation','affiliations','group']},
  {label:'First appearance', names:['first appearance','first seen','debut']}
];
function compactCharacterFacts(source) {
  if (!Array.isArray(source)) return [];
  const verified = new Map();
  for (const item of source) {
    if (!item || typeof item.label !== 'string' || typeof item.value !== 'string') continue;
    const name = item.label.trim().replace(/\s+/g, ' ').toLowerCase();
    const field = CHARACTER_FACT_FIELDS.find(candidate => candidate.names.includes(name));
    if (!field || verified.has(field.label)) continue;
    const value = item.value.trim();
    if (!value || value.length > 220 || /^(?:n\/?a|unknown|tbd|none|null|undefined|not known|not available|[-—])$/i.test(value)) continue;
    verified.set(field.label, value);
  }
  return CHARACTER_FACT_FIELDS.filter(field => verified.has(field.label))
    .map(field => ({label:field.label, value:verified.get(field.label)}));
}

// This list is supplied by the authorized episode-aware read. Never resolve
// text against a global index: later-episode names must not become links.
function contextualIndex(result) {
  const labels = new Map();
  for (const entry of result.entries || []) {
    if (!/^r-[a-f0-9]{32}$/.test(entry.slug || '')) continue;
    // Accept only explicit titles and vetted, episode-visible in-world aliases.
    // Do not fabricate synonyms or infer identity from narrative prose.
    const names = [entry.title, ...visibleApprovedAliases(entry.aliases, entry.title)];
    for (const name of names) {
      if (typeof name !== 'string' || name.trim() !== name ||
          name.length < 3 || name.length > 120) continue;
      const key = name.toLowerCase();
      if (!labels.has(key)) labels.set(key, entry);
      else if (labels.get(key)?.slug !== entry.slug) labels.set(key, null);
    }
  }
  const unique = [...labels.entries()].filter(([,entry]) => entry);
  if (!unique.length) return null;
  unique.sort((a,b) => b[0].length - a[0].length || a[0].localeCompare(b[0]));
  const escapeRegex = word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return {labels, pattern:new RegExp(unique.map(([name]) => escapeRegex(name)).join('|'), 'giu')};
}

function contextualLink(slug, label) {
  const anchor = element('a', 'context-link', label);
  const url = encodeState();
  url.searchParams.set('slug', slug);
  url.searchParams.delete('search');
  anchor.href = String(url);
  anchor.addEventListener('click', event => {
    // Let the browser handle open-in-new-tab, copying the URL and shortcuts.
    if (event.defaultPrevented || (event.button != null && event.button !== 0) ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    selectArticle(slug);
  });
  return anchor;
}

function appendContextualText(container, value, index, sourceSlug = '') {
  const content = String(value ?? '');
  if (!index || !content) { container.textContent = content; return; }
  container.replaceChildren();
  const expression = index.pattern;
  expression.lastIndex = 0;
  const isWord = character => /[\p{L}\p{M}\p{N}_]/u.test(character);
  let position = 0;
  for (const match of content.matchAll(expression)) {
    const start = match.index;
    const end = start + match[0].length;
    const target = index.labels.get(match[0].toLowerCase());
    if (!target || target.slug === sourceSlug ||
        (start > 0 && isWord(content[start - 1])) ||
        (end < content.length && isWord(content[end]))) continue;
    if (start > position) container.append(content.slice(position, start));
    container.append(contextualLink(target.slug, match[0]));
    position = end;
  }
  if (position < content.length) container.append(content.slice(position));
}

function renderDirectory(result) {
  breadcrumbs.textContent = state.campaign === 'main' ? 'Main Campaign' : 'Parental Advisory';
  title.textContent = 'All articles';
  category.textContent = 'Article directory';
  intro.textContent = `Discover articles available through Episode ${state.episode}.`;
  toc.replaceChildren();
  activeHeadingIds = [];
  activeTocId = '';
  tocEpisodeGroups.clear();
  toc.className = '';
  tocCollapse.hidden = true;
  directoryNav.hidden = false;
  const groups = new Map();
  const linkIndex = contextualIndex(result);
  for (const item of result.entries) {
    const topic = item.category || 'Other';
    if (!groups.has(topic)) groups.set(topic, []);
    groups.get(topic).push(item);
  }
  const sections = [];
  const topicLinks = [];
  const sortedTopics = [...groups.keys()].sort((a, b) => a.localeCompare(b));
  for (const [index, topic] of sortedTopics.entries()) {
    const members = groups.get(topic);
    const id = `topic-${index + 1}`;
    const section = element('section', 'directory-group');
    section.id = id;
    const heading = element('h3', '', topic);
    heading.append(element('small', '', `${members.length} ${members.length === 1 ? 'article' : 'articles'}`));
    const list = element('ul', 'directory');
    const initialLimit = compactNavigation.matches ? 6 : 12;
    const makeRow = item => {
      const row = element('li');
      row.append(articleLink(item.slug, item.title));
      if (item.summary) {
        const summary = element('p');
        appendContextualText(summary, item.summary, linkIndex, item.slug);
        row.append(summary);
      }
      return row;
    };
    function showRows(expanded) {
      list.replaceChildren(...(expanded ? members : members.slice(0, initialLimit)).map(makeRow));
      if (members.length > initialLimit) {
        const moreRow = element('li');
        const more = element('button', 'expand-directory', expanded
          ? 'Show fewer articles' : `Show ${members.length - initialLimit} more articles`);
        more.type = 'button';
        more.setAttribute('aria-expanded', String(expanded));
        more.addEventListener('click', () => showRows(!expanded));
        moreRow.append(more);
        list.append(moreRow);
      }
    }
    showRows(false);
    section.append(heading, list);
    sections.push(section);
    const navItem = element('li');
    const anchor = element('a', '', topic);
    anchor.href = `#${id}`;
    anchor.append(element('span', '', String(members.length)));
    anchor.addEventListener('click', event => {
      event.preventDefault();
      root.getElementById(id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
    navItem.append(anchor);
    topicLinks.push(navItem);
  }
  if (!sections.length) sections.push(element('p', '', 'No articles match this search at the selected episode.'));
  articleBody.replaceChildren(...sections);
  directoryShortlist.replaceChildren(...topicLinks);
  infobox.replaceChildren();
  infobox.hidden = true;
  related.replaceChildren();
}

function renderInfobox(article, linkIndex) {
  const isCharacter = ['Player character','Non-player character','Historical character'].includes(article.category);
  infobox.className = isCharacter ? 'infobox compact-character' : 'infobox';
  infobox.replaceChildren(element('h3', '', article.title));
  infobox.hidden = false;
  if (isCharacter) infobox.append(element('p', 'character-kind', article.category));
  const portrait = article.media?.[0];
  if (portrait) {
    const figure = element('figure');
    const image = root.ownerDocument.createElement('img');
    image.src = portrait.src;
    image.alt = portrait.alt;
    image.loading = 'lazy';
    figure.append(image);
    const credit = [portrait.caption, portrait.artistName && `Art: ${portrait.artistName}`].filter(Boolean).join(' · ');
    if (credit) figure.append(element('figcaption', '', credit));
    infobox.append(figure);
  }
  const facts = isCharacter
    ? compactCharacterFacts(article.infobox)
    : [{label: 'Article type', value: article.category}, ...(article.infobox || [])];
  if (facts.length) {
    const definition = element('dl');
    for (const fact of facts) {
      const description = element('dd');
      appendContextualText(description, fact.value, linkIndex, article.slug);
      definition.append(element('dt', '', fact.label), description);
    }
    infobox.append(definition);
  }
  if (isCharacter) {
    const aliases = visibleApprovedAliases(article.aliases, article.title);
    if (aliases.length) {
      const section = element('section', 'alias-section');
      section.setAttribute('aria-label', 'Known aliases');
      section.append(element('h4', '', 'Known aliases'));
      const list = element('ul');
      for (const alias of aliases) list.append(element('li', '', alias));
      section.append(list);
      infobox.append(section);
    }
  }
}

function createTocLink(item) {
  const li = element('li');
  const anchor = element('a', '', item.heading);
  anchor.href = `#${item.id}`;
  anchor.addEventListener('click', event => {
    event.preventDefault();
    root.getElementById(item.id)?.scrollIntoView({behavior:'smooth', block:'start'});
  });
  li.append(anchor);
  return li;
}

function renderArticleNavigation(article, tocLinks) {
  tocEpisodeGroups.clear();
  activeTocId = '';
  const sections = article.tableOfContents || [];
  const character = ['Player character','Non-player character','Historical character']
    .includes(article.category);
  const hasVerifiedEpisodes = sections.every(item =>
    Number.isSafeInteger(item.firstEpisode) && item.firstEpisode >= 1 &&
    item.firstEpisode <= state.episode);
  if (!character || sections.length < 8 || !hasVerifiedEpisodes) {
    toc.className = '';
    toc.replaceChildren(...tocLinks.map(createTocLink));
    return;
  }
  const byEpisode = new Map();
  for (const item of sections) {
    if (!byEpisode.has(item.firstEpisode)) byEpisode.set(item.firstEpisode, []);
    byEpisode.get(item.firstEpisode).push(item);
  }
  const rows = [];
  for (const [episode, items] of [...byEpisode.entries()].sort((a,b) => a[0]-b[0])) {
    const row = element('li', 'toc-episode');
    const disclosure = element('details', 'toc-episode-details');
    const summary = element('summary', '', `Episode ${episode}`);
    summary.append(element('span','toc-episode-count',
      `${items.length} ${items.length === 1 ? 'section' : 'sections'}`));
    const links = element('ol', 'toc-episode-links');
    links.append(...items.map(item => {
      tocEpisodeGroups.set(item.id, disclosure);
      return createTocLink(item);
    }));
    disclosure.append(summary, links);
    disclosure.addEventListener('toggle', () => {
      if (!disclosure.open) return;
      for (const other of new Set(tocEpisodeGroups.values())) {
        if (other !== disclosure) other.open = false;
      }
    });
    row.append(disclosure);
    rows.push(row);
  }
  for (const item of tocLinks.slice(sections.length)) {
    const row = createTocLink(item);
    row.className = 'toc-extra';
    rows.push(row);
  }
  toc.className = 'toc-episode-groups';
  toc.replaceChildren(...rows);
}

function renderArticle(result) {
  const article = result.article;
  const linkIndex = contextualIndex(result);
  breadcrumbs.textContent = `${state.campaign === 'main' ? 'Main Campaign' : 'Parental Advisory'} / ${article.category}`;
  category.textContent = article.category;
  title.textContent = article.title;
  appendContextualText(intro, article.summary, linkIndex, article.slug);
  directoryNav.hidden = true;
  tocCollapse.hidden = false;
  directoryShortlist.replaceChildren();
  const sections = [];
  for (const section of article.sections) {
    const container = element('section', 'content-section');
    const heading = element('h3', '', section.heading);
    heading.id = section.id;
    container.append(heading);
    for (const block of section.blocks) {
      if (block.type === 'paragraph') {
        const paragraph = element('p');
        appendContextualText(paragraph, block.text, linkIndex, article.slug);
        container.append(paragraph);
      }
      if (block.type === 'quote') {
        const quote = element('blockquote');
        appendContextualText(quote, block.text, linkIndex, article.slug);
        quote.append(element('cite', '', ` — ${block.speaker}${block.sourceEpisode ? ` (Episode ${block.sourceEpisode})` : ''}`));
        container.append(quote);
      }
      if (block.type === 'image') {
        const figure = element('figure');
        const image = root.ownerDocument.createElement('img');
        image.src = block.src;
        image.alt = block.alt;
        image.loading = 'lazy';
        figure.append(image, element('figcaption', '', [block.caption, block.credit].filter(Boolean).join(' · ')));
        container.append(figure);
      }
    }
    sections.push(container);
  }
  const current = article.items?.current || [];
  const former = article.items?.former || [];
  if (current.length || former.length) {
    const items = element('section', 'content-section');
    items.append(element('h3', '', 'Notable items'));
    items.querySelector('h3').id = 'notable-items';
    for (const [label, values] of [['Current', current], ['Former', former]]) {
      if (!values.length) continue;
      items.append(element('h4', '', label));
      const list = element('ul');
      for (const value of values) {
        const item = element('li');
        appendContextualText(item, value, linkIndex, article.slug);
        list.append(item);
      }
      items.append(list);
    }
    sections.push(items);
  }
  if (!sections.length) sections.push(element('p', '', 'No article sections available at this episode.'));
  articleBody.replaceChildren(...sections);
  const tocLinks = [...article.tableOfContents];
  if (current.length || former.length) tocLinks.push({id: 'notable-items', heading: 'Notable items'});
  renderArticleNavigation(article, tocLinks);
  activeHeadingIds = tocLinks.map(item => item.id);
  markActiveHeading();
  renderInfobox(article, linkIndex);
  related.replaceChildren();
  const unique = new Map();
  const visible = new Map(result.entries.map(entry => [entry.slug, entry]));
  for (const entry of [...(article.related || []), ...(article.relationships || [])]) {
    const slug = entry.slug || entry.target;
    if (visible.has(slug) && slug !== article.slug && !unique.has(slug))
      unique.set(slug, visible.get(slug).title);
  }
  if (unique.size) {
    related.append(element('h3', '', 'Related articles'));
    for (const [slug, label] of unique) related.append(articleLink(slug, label));
  }
}

function markActiveHeading() {
  let active = '';
  for (const id of activeHeadingIds) {
    const heading = root.getElementById(id);
    if (heading && heading.getBoundingClientRect().top <= 155) active = id;
  }
  if (!active) active = activeHeadingIds[0] || '';
  if (active && active !== activeTocId) {
    const group = tocEpisodeGroups.get(active);
    if (group && !group.open) {
      for (const other of new Set(tocEpisodeGroups.values())) other.open = false;
      group.open = true;
    }
    activeTocId = active;
  }
  for (const anchor of toc.querySelectorAll('a')) {
    if (active && anchor.getAttribute('href') === `#${active}`)
      anchor.setAttribute('aria-current', 'location');
    else anchor.removeAttribute('aria-current');
  }
}

function clearPrivateView() {
  toc.replaceChildren();
  activeHeadingIds = [];
  activeTocId = '';
  tocEpisodeGroups.clear();
  toc.className = '';
  directoryShortlist.replaceChildren();
  directoryNav.hidden = true;
  tocCollapse.hidden = true;
  infobox.replaceChildren();
  infobox.hidden = true;
  related.replaceChildren();
}

function showLoadingView() {
  // Invalidate the previous response and remove every previously authorized
  // article field before requesting another episode or campaign. A slow server
  // must never leave later-episode text visible under an earlier selection.
  const requestId = ++lastRequest;
  clearPrivateView();
  breadcrumbs.textContent = 'Kyranda Codex';
  category.textContent = '';
  title.textContent = state.slug ? 'Loading article…' : 'Loading articles…';
  intro.textContent = '';
  articleBody.replaceChildren(element('p', '', 'Loading selected content…'));
  status.textContent = 'Loading episode-safe content…';
  return requestId;
}

function showAccessUnavailable(error) {
  ++lastRequest;
  clearPrivateView();
  breadcrumbs.textContent = 'Administrator staging';
  category.textContent = 'Restricted access';
  const timedOut = error?.message === 'Stage timed out';
  title.textContent = timedOut ? 'Connection timed out' : 'Staging reader unavailable';
  intro.textContent = timedOut
    ? 'The staging service did not acknowledge the request after retrying.'
    : 'This session could not load the authorized staging reader.';
  const explanation = element('p', 'access-notice',
    'This preview is restricted to site administrators. A connection or backend error can also prevent loading. Please try again.');
  const retry = element('button', 'retry-button', 'Try again');
  retry.type = 'button';
  retry.addEventListener('click', () => { void initialize(); });
  articleBody.replaceChildren(explanation, retry);
  episodeControl.replaceChildren(element('option', '', 'Episodes unavailable'));
  campaignControl.disabled = true;
  episodeControl.disabled = true;
  searchControl.disabled = true;
  status.textContent = timedOut
    ? 'Staging transport timed out twice; no private content was loaded.'
    : 'Administrator access or episode availability could not be verified.';
}

async function initialize() {
  campaignControl.disabled = false;
  episodeControl.replaceChildren(element('option', '', 'Checking episodes…'));
  episodeControl.disabled = true;
  searchControl.disabled = false;
  showLoadingView();
  const initialRequestId = lastRequest;
  status.textContent = 'Checking staging access…';
  try {
    // A deep link already names its episode. A successful authorized read
    // includes the current maximumEpisode, so it can populate the selector
    // without first waiting for a separate episode-choices RPC.
    if (Number.isSafeInteger(state.episode) && state.episode >= 1) {
      const result = await askPageResilient('read', {campaign:state.campaign,
        episode:state.episode,slug:state.slug,search:state.search,category:''});
      // A campaign switch, search, or browser Back can supersede this request.
      if (abort.signal.aborted || initialRequestId !== lastRequest) return;
      if (result?.status === 'ready' &&
          Number.isSafeInteger(result.maximumEpisode) &&
          result.maximumEpisode >= state.episode) {
        populateEpisodeChoices(result.maximumEpisode);
        updateUrl(true);
        await render(result);
        return;
      }
    }
    if (!await loadEpisodes()) return;
    updateUrl(true);
    await render();
  } catch (error) {
    if (abort.signal.aborted) return;
    showAccessUnavailable(error);
  }
}

function populateEpisodeChoices(maximumEpisode) {
  if (!Number.isSafeInteger(maximumEpisode) || maximumEpisode < 1)
    throw new Error('Invalid episode availability');
  if (state.episode < 1 || state.episode > maximumEpisode) state.episode = maximumEpisode;
  episodeControl.replaceChildren(...Array.from({length: maximumEpisode}, (_, i) => {
    const choice = element('option', '', `Episode ${i + 1}`);
    choice.value = String(i + 1);
    return choice;
  }));
  episodeControl.value = String(state.episode);
  episodeControl.disabled = false;
}

async function loadEpisodes() {
  const episodeRequest = ++lastEpisodeRequest;
  const requestedCampaign = state.campaign;
  let response;
  try { response = await askPageResilient('episodes',{campaign:requestedCampaign}); }
  catch (error) {
    if (abort.signal.aborted) return false;
    if (episodeRequest !== lastEpisodeRequest || requestedCampaign !== state.campaign) return false;
    throw error;
  }
  // Rapid campaign/back navigation can make an older response arrive last.
  if (episodeRequest !== lastEpisodeRequest || requestedCampaign !== state.campaign) return false;
  populateEpisodeChoices(response?.maximumEpisode);
  return true;
}

async function render(preloadedResult) {
  const requestId = showLoadingView();
  try {
    const result = preloadedResult || await askPageResilient('read',{
      campaign:state.campaign,episode:state.episode,
      slug:state.slug,search:state.search,category:''});
    if (requestId !== lastRequest) return;
    if (result.status !== 'ready') {
      // A historical deep link can be unavailable at an earlier episode.
      // Keep it unavailable; never silently reveal an article at a later one.
      breadcrumbs.textContent = 'Kyranda Codex';
      category.textContent = '';
      title.textContent = 'Content unavailable';
      intro.textContent = 'This article is not available at the selected episode.';
      articleBody.replaceChildren(element('p', '', 'Choose another episode or return to all articles.'));
      clearPrivateView();
      status.textContent = 'Content unavailable; spoiler boundary preserved.';
      return;
    }
    if (result.article) renderArticle(result);
    else renderDirectory(result);
    host._emitDiagnostic('read-render-complete', {
      entryCount:result.entries.length, articlePresent:Boolean(result.article)
    });
    status.textContent = `${result.entries.length} visible articles · ${state.campaign === 'main' ? 'Main Campaign' : 'Parental Advisory'} through Episode ${state.episode}.`;
  } catch (error) {
    if (abort.signal.aborted) return;
    host._emitDiagnostic('read-render-error', {errorName:error?.name || 'Error'});
    if (requestId === lastRequest) showAccessUnavailable(error);
  }
}

byId('all-articles').addEventListener('click', () => {
  state.slug = '';
  state.search = '';
  searchControl.value = '';
  updateUrl();
  void render();
});
campaignControl.addEventListener('change', async () => {
  state.campaign = campaignControl.value;
  state.episode = 0;
  state.slug = '';
  state.search = '';
  searchControl.value = '';
  showLoadingView();
  try {if (!await loadEpisodes()) return;} catch (error) {showAccessUnavailable(error);return;}
  updateUrl();
  void render();
});
episodeControl.addEventListener('change', () => {
  state.episode = Number(episodeControl.value);
  updateUrl();
  void render();
});
searchControl.addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.search = searchControl.value.slice(0, 120);
    state.slug = '';
    updateUrl(true);
    void render();
  }, 170);
});
window.addEventListener('popstate', async () => {
  const params = new URLSearchParams(location.search);
  state.campaign = ['main', 'parental'].includes(params.get('campaign')) ? params.get('campaign') : 'main';
  state.episode = Number(params.get('through')) || 0;
  state.slug = /^r-[a-f0-9]{32}$/.test(params.get('slug') || '') ? params.get('slug') : '';
  state.search = (params.get('search') || '').slice(0, 120);
  campaignControl.value = state.campaign;
  searchControl.value = state.search;
  showLoadingView();
  try {if (await loadEpisodes()) void render();} catch (error) {showAccessUnavailable(error);}
}, {signal:abort.signal});
window.addEventListener('scroll', markActiveHeading, {passive:true,signal:abort.signal});

campaignControl.value = state.campaign;
searchControl.value = state.search;
void initialize();


  }
  disconnectedCallback() {
    this._emitDiagnostic('disconnected');
    this._abort?.abort();
    this._acceptResult = null;
    this._acceptReceipt = null;
    this._root.replaceChildren();
    this._started = false;
  }
}
if (!customElements.get('kyranda-codex-v5')) {
  customElements.define('kyranda-codex-v5', KyrandaCodexNativeV5);
}
// Wix Classic Editor sometimes persists the short tag on the hidden Test Site.
// Keep it as a staging-only alias while preserving the canonical tag elsewhere.
if (!customElements.get('kyranda-co')) {
  customElements.define('kyranda-co', class KyrandaCodexV5StagingAlias extends KyrandaCodexNativeV5 {});
}
