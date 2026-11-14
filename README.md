# Synthetic reader layout lab

This repository contains fictional test content and generic browser code only. It has no production configuration, backend connection, member data, CMS records, real articles, transcripts, credentials or private mappings.

The reader waits for a host `codex-init` message, locks that synthetic session and parent origin, and reports intrinsic `#reader` height. It supports fictional directory/article views, two sample collections, six sample episodes, search, delayed data-URI images and revisioned synthetic restore messages. It does not call a backend or navigate the surrounding webpage.

`fixture-manifest.json` identifies a proposed immutable asset URL and its SHA-256. The exact versioned reader was deployed and verified over HTTPS on November 14, 2026. See `hosting-verification.json` for the HTTP status, body digest and embedding headers. Never overwrite a versioned release asset with different bytes; create a new digest path instead.

Publishing configuration (now enabled):

1. Create a dedicated public repository named `kyranda-synthetic-reader-lab`, separate from any private development repository.
2. Push only this synthetic repository's reviewed files. Publish its main branch root through Pages. Do not publish another repository or add credentials to this one.
3. Require HTTPS and verify the exact versioned reader URL, HTTP status, content type, response digest and frame-related headers before embedding it.
4. An accessible Pages asset is not proof that a Wix parent permits embedding or reflows its footer. Those require a separate eligible Wix acceptance test.

`.nojekyll` allows these plain static files to be served without a site generator. `index.html` links to the reviewed release. Robots metadata requests no indexing; this is not authentication or a privacy boundary. Every file is intended to be safe for public viewing.

## Standalone acceptance

Open `standalone.html` for the fictional-only sandboxed URL-iframe harness. It uses the existing custom-element host and event/attribute adapter. Width buttons exercise 320 and 1240 CSS pixel reader widths. This is ordinary Chromium hosting acceptance, not Wix wrapper/footer or physical-mobile acceptance. Wix itself was not modified. The frame remains sandboxed without allow-same-origin; received messages are checked by source, opaque origin, session and allowed message types, with sequence/width/height validation for measurements.
