---
title: Orodha ya mabadiliko
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Historia ya Mabadiliko

## 1.16.0 — Iliachwa tarehe 2026-05-20

### Vipya

- **Uwezo wa Kuunda Logo SVG** — Theme Builder sasa inaweza kuunda na kuingiza (embed) SVG za logo maalum kwa usalama wa nafasi (namespace-safe sanitisation).
- **Kuupload Picha katika Mahojiano ya Kugundua (Discovery Interview)** — Theme Builder sasa ina hatua ya kuupload picha katika mahojiano yake ya kugundua, ili kupata muktadha wa kubuni (design context) wenye kina zaidi.
- **Uwezo wa Kuthibitisha Tofauti ya Rangi (Palette Contrast)** — Thibitisha rangi mbili kwa kufuata kanuni za WCAG kabla ya kuzitumia kwenye mada (theme).
- **Menyu za Hoteli/Ukarimu (Hospitality menus)** — Theme Builder sasa inaweza kuunda kurasa za menyu za chakula na vinywaji zenye muundo kwa ajili ya biashara za ukarimu.
- **Kuonyesha Muonekano wa Kompyuta na Simu (Desktop and mobile preview rendering)** — Onyesha muonekano wa ubunifu wako kwenye vifaa vya kompyuta na simu wakati unachagua mwelekeo wa kubuni.
- **Thamani ya Lebo ya Navigation (Navigation label parameter)** — Uwezo wa Kuunda Menyu sasa unasaidia `navigation_label` tofauti na kichwa cha ukurasa.
- **Upatikanaji wa Zana za Kiwango cha 1 (Tier 1 tool availability)** — sd-ai-agent/site-scrape sasa ni zana ya Kiwango cha 1 inayopatikana kwa msingi katika Theme Builder.

### Ziliyorekebishwa

- **Cache ya AI Client** — sasa inashikamana na *transients* kwa kudumisha data kati ya maombi (cross-request persistence), hivyo kuzuia kupotea kwa data wakati kazi za agent zinapochukua muda mrefu.
- **Viungo vya Kitendo kwenye Safu ya Plugin** — vimekurekebishwa na kubadilishwa jina kwa uwazi zaidi.

## 1.10.0 — Iliachwa tarehe 2026-05-05

### Vipya

- **Tafutano ya mtandao ya Tavily** — ongeza Tavily kama mtoa huduma wa utafutano ili kupata matokeo ya mtandao yenye kina zaidi pamoja na Brave Search.
- **Stadi za ndani zinazojua Mada (Theme-aware built-in skills)** — Block Themes, Classic Themes, Kadence Blocks, na Kadence Theme skill guides sasa zinajumuishwa na plugin.
- **Uwezo wa Fomu ya Mawasiliano ya Site Builder** — ongeza fomu ya mawasiliano kwenye ukurasa wowote moja kwa moja kutoka kwenye kiolesura cha chat.

### Zilizoboreshwa

- **Uunganishaji wa WooCommerce umeboreshwa (refactored)** — sasa unatumia API za asili za WooCommerce kwa uaminifu na uendano bora zaidi.
- **Orodha ya Mtoa Huduma inajirejesha kiotomatiki** — wakati plugin yoyote inawashiriwa au kuondolewa.

### Ziliyorekebishwa

- **uwezo wa navigate-to** — kurekebisha mzunguko wa kuingiza upya bila mwisho (infinite reload loop) kwenye kurasa zingine za admin.
- **uwezo wa list-posts** — sasa unarekebisha kwa usahihi majina ya makundi (category) na lebo (tag) kuwa slugs.
- **Amri za WP-CLI** — kurejesha alias za namespace zilizopotea baada ya kubadilisha muundo (refactor) wa awali.
- **Utoaji kazi kwa matukio (Event automation)** — inashughulikia kwa upole (gracefully) tovuti ambapo meza za utoaji kazi bado hazijaundwa.
- **uwezo wa memory-save** — sasa inatumia kiambatanisho sahihi cha nafasi (namespace prefix) katika muundo wa maelekezo ya mfumo (system instruction builder).
- **Matokeo ya zana za Scalar** — sasa yanawasilishwa kwa usahihi kabla ya kurudishwa kwa AI.
- **Takwimu za Matumizi** — sasa zinashughulikia kwa usahihi muundo wa kidondoo cha uwezo wa zamani (legacy ability key format) wakati wa kuboresha kutoka matoleo ya zamani.
