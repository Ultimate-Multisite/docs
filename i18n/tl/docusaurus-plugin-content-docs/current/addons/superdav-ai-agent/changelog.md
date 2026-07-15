---
title: Changelog
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Tala ng Pagbabago

## 1.18.0 — Inilabas noong 2026-06-29 {#1180--released-on-2026-06-29}

### Bago {#new}

- **Mga tool ng Google Calendar** — basahin ang mga naka-configure na kalendaryo at pangyayari para sa mga automation na may kamalayan sa iskedyul
- **Pagmamapa ng contact at mga pantulong para sa attendee** — itugma ang mga kalahok sa kalendaryo sa mga user at contact ng sityo
- **Mga gate ng pag-apruba ng tao at talaan ng paalala** — ihinto pansamantala ang mga automation para sa pagsusuri at iwasan ang dobleng abiso
- **TextBee SMS provider** — magpadala ng mga naka-configure na abiso sa text-message sa pamamagitan ng TextBee
- **Advanced na kasamang package** — magdagdag ng trusted-developer filesystem, database, WP-CLI, REST dispatcher, tagabuo ng pandagdag, git snapshot, pamamahala ng user, at benchmark tools na ipinapamahagi nang hiwalay mula sa build ng WordPress.org

### Pinahusay {#improved}

- **Pag-setup ng pinamamahalaang serbisyo ng Superdav** — magdagdag ng mga hosted service endpoint at awtomatikong connection provisioning para sa mga sinusuportahang sityo
- **Pagpapackage ng release** — bumuo ng magkahiwalay na core at Advanced ZIPs, i-publish ang dalawa sa GitHub, at ipadala lamang ang core package sa WordPress.org

### Naayos {#fixed}

- **Pagiging maaasahan ng AI request** — pahusayin ang pagpili ng modelo, request timeouts, default na setup model, paghawak ng reasoning-text, at gabay sa retry para sa mga invalid tool call
- **Pagpapatibay ng kalendaryo at paalala** — palakasin ang Google Calendar tokens at deduplication ng paalala
- **Onboarding at pagpapatuloy ng pag-apruba** — ayusin ang paglulunsad ng frontend onboarding at pagpapatuloy ng nakumpirmang kakayahan
- **Mga isyu sa pagsusuri ng packaging sa WordPress.org** — tugunan ang feedback sa pagsusuri ng packaging para sa core release

## 1.16.0 — Inilabas noong 2026-05-20 {#1160--released-on-2026-05-20}

### Bago {#new-1}

- **Kakayahang Generate Logo SVG** — makakagawa at makakapag-embed na ngayon ang Theme Builder ng mga custom logo SVG na may namespace-safe sanitisation
- **Pag-upload ng larawan sa discovery interview** — kasama na ngayon sa discovery interview ng Theme Builder ang hakbang sa pag-upload ng larawan para sa mas mayamang konteksto ng disenyo
- **Kakayahang Validate Palette Contrast** — suriin ang mga pares ng kulay para sa pagsunod sa WCAG bago ilapat sa isang tema
- **Mga menu para sa hospitality** — makakagawa na ngayon ang Theme Builder ng mga naka-istrukturang pahina ng menu ng pagkain at inumin para sa mga negosyong hospitality
- **Desktop at mobile preview rendering** — i-preview ang iyong disenyo sa desktop at mobile devices habang pumipili ng direksyon ng disenyo
- **Parameter ng navigation label** — sinusuportahan na ngayon ng kakayahang Create Menu ang hiwalay na `navigation_label` na iba sa pamagat ng pahina
- **Availability ng Tier 1 tool** — ang sd-ai-agent/site-scrape ay isa na ngayong Tier 1 tool na available bilang default sa Theme Builder

### Naayos {#fixed-1}

- **Cache ng AI Client** — sinusuportahan na ngayon ng transients para sa cross-request persistence, na pumipigil sa pagkawala ng datos sa mahahabang agent task
- **Mga link ng aksyon sa row ng pandagdag** — itinama at pinalitan ang pangalan para sa linaw

## 1.10.0 — Inilabas noong 2026-05-05 {#1100--released-on-2026-05-05}

### Bago {#new-2}

- **Paghahanap sa internet gamit ang Tavily** — idagdag ang Tavily bilang search provider para sa mas mayamang resulta ng paghahanap sa internet kasabay ng Brave Search
- **Mga built-in na kasanayang may kamalayan sa tema** — kasama na ngayon sa pandagdag ang mga gabay sa kasanayan para sa Block Themes, Classic Themes, Kadence Blocks, at Kadence Theme
- **Kakayahan sa contact form ng tagabuo ng sityo** — magdagdag ng contact form sa anumang pahina direkta mula sa chat interface

### Pinahusay {#improved-1}

- **Na-refactor ang integrasyon ng WooCommerce** — gumagamit na ngayon ng mga native WooCommerce API para sa mas mahusay na pagiging maaasahan at compatibility
- **Awtomatikong nagre-refresh ang listahan ng provider** — kapag may anumang pandagdag na na-activate o na-deactivate

### Naayos {#fixed-2}

- **kakayahang navigate-to** — inayos ang walang katapusang reload loop sa ilang admin page
- **kakayahang list-posts** — tama na ngayong nire-resolve ang mga pangalan ng kategorya at tag tungo sa slugs
- **Mga command ng WP-CLI** — ibinalik ang nawawalang namespace aliases pagkatapos ng nakaraang refactor
- **Automation ng event** — maayos na hinahawakan ang mga sityong hindi pa nagagawa ang automation tables
- **kakayahang memory-save** — ginagamit na ngayon ang tamang namespace prefix sa tagabuo ng system instruction
- **Mga resulta ng Scalar tool** — tama na ngayong na-wrap bago ibalik sa AI
- **Mga estadistika ng paggamit** — tama na ngayong hinahawakan ang legacy ability key format sa pag-upgrade mula sa mas lumang bersyon
