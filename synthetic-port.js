// Same port interface as HtmlComponent; preserves the existing protected handler.
export function createCodexContentPort(element) {
  let serial = 0;
  return {
    postMessage(message) {
      element.setAttribute('codex-host-message', JSON.stringify({serial:++serial,message}));
    },
    onMessage(handler) {
      element.on('codex-message', event => handler({data:event?.detail?.data}));
      // Recover startup if the custom element connected before Velo subscribed.
      // The host retains init until its inner frame is actually ready.
      void handler({data:{type:'codex-ready',version:1}});
    }
  };
}
