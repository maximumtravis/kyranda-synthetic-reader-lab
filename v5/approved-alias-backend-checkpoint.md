# V5 approved aliases: Wix backend installation checkpoint (not deployed)

Source review: Wix Classic Velo `backend/codexRebuildCore.js`, `backend/codexRebuildSourceAdapter.js`, `backend/codexRebuildStage.web.js`. Date: 2026-11-25.

## Verified current contract
- `projectArticle(article, episode, visibleArticles)` emits `id, slug, title, category, summary, sections, tableOfContents, infobox, media, relationships, items, related`. It does **not** emit `aliases`.
- `toArticle(...)` in `codexRebuildSourceAdapter.js` initializes the canonical article structure without an in-world alias list. Its `alias` argument is the opaque `r-...` public URL identifier, **not** a character nickname.
- The V5 frontend's `visibleApprovedAliases` expects `article.aliases` as `[{name, approved:true, revealEpisode}]`; absent or incomplete metadata intentionally fails closed.
- Existing authorized relationships are episode-filtered on the backend and projected as `{target,title,description}`. The repair branch adds an infobox Connections section using only target slugs in the selected response's visible index.

## Owner-approved alias candidates (all first revealed Episode 34)
- Malcius Sorrow: Travis
- Sefi: Marge; Margaret Smith
- Todd Van Wyk: Jean Picard
- Thormir Moonsight: Rimrot

## Required backend changes, to be prepared against a complete preserved Wix source snapshot
1. Add a separately named **in-world alias** array to a private, approved character source, keyed by canonical character ID, never by opaque URL alias or untrusted CMS strings. Preserve original source and tests before installing.
2. For each item require `approved === true`, nonempty bounded `name`, and integer `firstEpisode >= 1`. Do not incorporate unreviewed nicknames from prose or CMS.
3. In `projectArticle`, emit only aliases for the selected character where `approved === true && firstEpisode <= episode`, mapped to `{name, approved:true, revealEpisode:firstEpisode}`. Do not return future aliases in the payload.
4. Preserve existing title, section, item, relationship and link gating unchanged.
5. Confirm owner-approved identities and exact canonical IDs against the private manifest. Never guess IDs from display names.

## Test gates
- Episode 1 and 33: no Episode 34 aliases.
- Episode 34 and 48: the four approved character aliases appear only on their corresponding profiles.
- Episode changes and browser navigation must clear older authorized article data while the next request loads.
- No private Malcius backstory names or unrevealed lute name.
- Test real phone portrait location, Connections roles, navigation, inventory, selectors, layout and scrolling.
- Publish only through an explicit later Wix checkpoint. Main GitHub branch and Wix production remain untouched by this document.
