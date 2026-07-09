---
title: Talaan ng Pagbabago
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Changelog

## 1.18.0 — Inilabas noong 2026-06-29

### Bago

- **Mga tool ng Google Calendar** — basahin ang naka-configure na mga calendar at event para sa mga automation na may kamalayan sa iskedyul
- **Pagmamapa ng contact at mga helper ng attendee** — itugma ang mga kalahok sa calendar sa mga user at contact ng site
- **Mga gate ng pag-apruba ng tao at mga record ng paalala** — i-pause ang mga automation para sa pagsusuri at iwasan ang dobleng notification
- **TextBee SMS provider** — magpadala ng naka-configure na mga notification na text-message sa pamamagitan ng TextBee
- **Advanced companion package** — magdagdag ng pinagkakatiwalaang-developer na filesystem, database, WP-CLI, REST dispatcher, plugin builder, git snapshot, pamamahala ng user, at mga benchmark tool na hiwalay na ipinamahagi mula sa WordPress.org build

### Pinahusay

- **Setup ng pinamamahalaang Superdav service** — magdagdag ng mga naka-host na service endpoint at awtomatikong paglalaan ng koneksyon para sa mga sinusuportahang site
- **Pag-package ng release** — bumuo ng hiwalay na core at Advanced ZIP, i-publish pareho sa GitHub, at ipadala lamang ang core package sa WordPress.org

### Naayos

- **Pagiging maaasahan ng AI request** — pahusayin ang pagpili ng model, mga timeout ng request, default na setup model, paghawak ng reasoning-text, at gabay sa retry para sa mga invalid na tool call
- **Pagpapatibay ng calendar at paalala** — patibayin ang mga Google Calendar token at deduplication ng paalala
- **Onboarding at pagpapatuloy ng pag-apruba** — ayusin ang mga paglulunsad ng onboarding sa frontend at mga pagpapatuloy ng nakumpirmang ability
- **Mga isyu sa review ng packaging sa WordPress.org** — tugunan ang feedback sa review ng packaging para sa core release

## 1.16.0 — Inilabas noong 2026-05-20

### Bago

- **Ability na Generate Logo SVG** — maaari na ngayong bumuo at mag-embed ang Theme Builder ng mga custom na logo SVG na may namespace-safe na sanitisation
- **Pag-upload ng larawan sa discovery interview** — kasama na ngayon sa discovery interview ng Theme Builder ang hakbang ng pag-upload ng larawan para sa mas mayamang konteksto ng disenyo
- **Ability na Validate Palette Contrast** — suriin ang mga pares ng kulay para sa pagsunod sa WCAG bago ilapat sa isang theme
- **Mga menu para sa hospitality** — maaari na ngayong bumuo ang Theme Builder ng mga naka-structure na pahina ng menu ng pagkain at inumin para sa mga negosyong hospitality
- **Pag-render ng preview sa desktop at mobile** — i-preview ang iyong disenyo sa desktop at mobile na mga device habang pumipili ng direksyon ng disenyo
- **Parameter ng navigation label** — sinusuportahan na ngayon ng Create Menu ability ang hiwalay na `navigation_label` na iba sa pamagat ng pahina
- **Availability ng Tier 1 tool** — ang sd-ai-agent/site-scrape ay isa na ngayong Tier 1 tool na available bilang default sa Theme Builder

### Naayos

- **Cache ng AI Client** — sinusuportahan na ngayon ng transients para sa cross-request persistence, na pumipigil sa pagkawala ng data sa mga matagalang agent task
- **Mga link ng aksyon sa plugin row** — itinama at pinalitan ang pangalan para sa kalinawan

## 1.10.0 — Inilabas noong 2026-05-05

### Bago

- **Tavily internet search** — idagdag ang Tavily bilang search provider para sa mas mayamang resulta ng paghahanap sa internet kasama ng Brave Search
- **Mga built-in skill na may kamalayan sa theme** — kasama na ngayon sa plugin ang mga gabay sa skill para sa Block Themes, Classic Themes, Kadence Blocks, at Kadence Theme
- **Ability ng contact form ng site builder** — magdagdag ng contact form sa anumang pahina direkta mula sa chat interface

### Pinahusay

- **Ni-refactor ang WooCommerce integration** — gumagamit na ngayon ng native WooCommerce APIs para sa mas mahusay na pagiging maaasahan at compatibility
- **Awtomatikong nagre-refresh ang listahan ng provider** — kapag anumang plugin ay na-activate o na-deactivate

### Naayos

- **navigate-to ability** — inayos ang infinite reload loop sa ilang admin page
- **list-posts ability** — tama na ngayong nire-resolve ang mga pangalan ng category at tag sa mga slug
- **WP-CLI commands** — ibinalik ang nawawalang mga namespace alias pagkatapos ng nakaraang refactor
- **Event automation** — maayos na hinahawakan ang mga site kung saan hindi pa nalilikha ang mga automation table
- **memory-save ability** — ginagamit na ngayon ang tamang namespace prefix sa system instruction builder
- **Mga scalar na resulta ng tool** — tama na ngayong naka-wrap bago ibalik sa AI
- **Mga statistic ng paggamit** — tama na ngayong hinahawakan ang legacy ability key format sa upgrade mula sa mas lumang mga version
