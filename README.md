# Synthetic reader layout lab

This repository contains fictional test content and generic browser code only. It has no production configuration, backend connection, member data, CMS records, real articles, transcripts, credentials or private mappings.

The reader waits for a host `codex-init` message, locks that synthetic session and parent origin, and reports intrinsic `#reader` height. It supports fictional directory/article views, two sample collections, six sample episodes, search, delayed data-URI images and revisioned synthetic restore messages. It does not call a backend or navigate the surrounding webpage.

`fixture-manifest.json` identifies a proposed immutable asset URL and its SHA-256. `deployed:false` and unverified fields are intentional until a real deployment is checked. Never overwrite a versioned release asset with different bytes; create a new digest path instead.

GitHub Pages setup, when authenticated repository administration is available:

1. Create a dedicated public repository named `kyranda-synthetic-reader-lab`, separate from any private development repository.
2. Push only this synthetic repository's reviewed files. Publish its main branch root through Pages. Do not publish another repository or add credentials to this one.
3. Require HTTPS and verify the exact versioned reader URL, HTTP status, content type, response digest and frame-related headers before embedding it.
4. An accessible Pages asset is not proof that a Wix parent permits embedding or reflows its footer. Those require a separate eligible Wix acceptance test.

`.nojekyll` allows these plain static files to be served without a site generator. `index.html` links to the reviewed release. Robots metadata requests no indexing; this is not authentication or a privacy boundary. Every file is intended to be safe for public viewing.
