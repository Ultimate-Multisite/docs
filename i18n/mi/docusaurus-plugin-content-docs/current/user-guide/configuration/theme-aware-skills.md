---
title: Kōrero Whakaaro-Awhi
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Kōrero Whakaaro o te Theme

Superdav AI Agent v1.10.0 e whero au ngā takawaahi hou mō te theme-aware skills (kōrero-whakaaro o te theme) i te whakamahinga, i te whai ake i te WordPress theme o koe. Ko ngā skills ei whakaatu i whakamahi manuia me ngā kaha whakahou kua whakatika ki te arhitektura me ngā āhuatanga o tō theme.

## He aha ngā Theme-Aware Skills?

Ngā theme-aware skills he mea nui (pre-configured knowledge bases) me ngā setu taonga (tool sets) e whai ake ai te AI assistant based ki te WordPress theme e hoki ana i runga i tō wāhi. I roto i te wā e whakatika i ngā theme, ko ngā skills e taea te whakamahi o te assistant e whakahou automatically — he mea nui ona koe e whakaoti manuia (no manual configuration).

Ko every skill e whai ana ki:

- **Documentation mō te theme** — ngā pouri mō te whakamahi me te whakaiti i te theme
- **References mō blocks me patterns** — ngā blocks, patterns, me ngā onohinako (design options) e taea te whakamahinga
- **Examples o te whakaiti** — ngā code snippets me ngā pattern o te whakatika mō ngā mahi whakahou (common tasks)
- **Best practices** — ngā whakaahuatanga mō te arhitektura me te workflow o te theme

## Ngā Theme-Aware Skills Eke i te Mahi

### Block Themes

**E tino whakamahia ana mō:** Ngā theme e whai i te arhitektura block-based (Full Site Editing) o te WordPress.

Ko te skill o Block Themes e whero au ngā pouri mō:

- Whakawhanainga me whakaiti i templates e whakamahi i te block editor
- Whakawhanainga me te mahi ana i block patterns me reusable blocks
- Whakaiti i ngā styles global me ngā settings o theme.json
- Whakawhanainga me ngā variations o theme blocks
- Whakawhanainga i mga block patterns mō tō wāhi

**E whakatika automatically i roto i:** Ko te theme e hoki ana (active theme) he heta block theme (supports `block-templates` feature).

### Classic Themes

**E tino whakamahia ana mō:** Ngā theme WordPress pūrere (traditional themes) e whai i PHP templates me te classic editor.

Ko te skill o Classic Themes e whero au ngā pouri mō:

Whakawhanaunganga me PHP template files me hooks
Whakawhanaunganga i te whakamahi o tāmpeletu PHP me hooks
Whakawhanaunganga i te whakaaturanga o te theme via te Customizer
Whakawhanaunganga i te whakamahi o widget areas me sidebars
Whakawhanaunganga i te whakamaoritanga CSS me te whakawhanake child theme
Whakawhanaunganga i te whakamārama o te hierarchy o te theme me ngā template tags

**E whaiwhai ana i te awhi:** Ko te theme active (non-block) o koe.

### Kadence Blocks

**E whaiwhai ana i:** Ngā wāhi whai anga (block-based design) o te site e hāpai i te plugin Kadence Blocks.

Ko te maharatanga Kadence Blocks e hiahia ana atu ki:

- Te whakamahi o te library o block advanced o Kadence (Hero, Testimonials, Pricing, etc.)
- Te whakarite o ngā whakaritenga o block Kadence me ngā opshona responsive
- Te whakamaoritanga o layouts manawa me ngā container blocks o Kadence
- Te whaiaro i ngā block Kadence ki te theme o koe
- Te whakamahi i te design system me ngā presets o Kadence

**E whaiwhai ana i te awhi:** Ko te plugin Kadence Blocks active (whakaahua) mo te site o koe.

### Kadence Theme

**E whaiwhai ana i:** Ngā wāhi whai anga (block-based design) me te whakamaoritanga o te theme e hāpai i te Kadence theme.

Ko te maharatanga Kadence Theme e hiahia ana atu ki:

- Te whakamaoritanga o te Kadence theme via global styles me theme.json
- Te whakamahi o ngā pattern me templates built-in o Kadence
- Te whakarite o ngā whakaritenga me ngā opshona o Kadence theme
- Te whakamaoritanga o ngā design manawa me te design system o Kadence
- Te whaiaro i te Kadence ki ngā plugin me ngā taonga whakahou (tools) whakahou

**E whaiwhai ana i te awhi:** Ko te Kadence theme ko te theme active (whakaahua) o koe.

## He aha ngā maharatanga e whaiwhai?

Ko te assistant e whakamārama anō i te theme active me ngā plugins e whakahou ana i roto i every message. Ko te skill e hiahia ana atu ki kohekohe theme-aware (e whai whakaaro ki te theme) e kaha, ko e whakawhanaunga ana ki te context o te assistant automatically. Ae, koe ka taea e koe te whakatau me te whakawhiti i ngā skills manually.

### Multiple Skills

Nōna whakatutai i te wāhi ahau (mō i roto i te wāhi ahau, he tino mō te site ahau) (mō taketake, he tino mō te site ahau).

### Whakaorero Te Theme

I roto i roto i te wā koe e whakawhiti i te theme ahau, ka whakahirahira ngā mahi o te assistant i runga i te message tēnei. Hei whakamārama, ko:

1. I roto i roto i te wā koe e whakamahi i te block theme me te **Block Themes** skill active (whakaae).
2. Ka whakawhiti atu ki te classic theme.
3. I roto i te message tēnei, ka whakahirahira ngā **Classic Themes** skill automatically, ā, ka whakatika ai te **Block Themes** skill.

## Whakarite Te Mahi me Ngā Theme-Aware Skills

Mō te whakamahi i te skill e whai whakaaro ki te theme (theme-aware skill), he tino tika ana koe ki mōhaka i te mea e tino e hiahia koe i te chat interface. Ka whai whakaaro ai te assistant ki te guidance o te skill ahau e tika ana automatically.

### Mahi Whakawātea (Example Prompts)

**Mō Block Themes:**
> "Whakawātea he hero section me image background me text i te whero (centered text) ka whakamahi i block patterns."

**Mō Classic Themes:**
> "Whakawātea area widget manawa ki te sidebar ka whakamahi i child theme."

**Mō Kadence Blocks:**
> "Whakawātea he testimonials section ka whakamahi i Kadence Testimonials block."

**Mō Kadence Theme:**
> "Whakarite te layout o te header me te styling o te navigation menu."

Ka whai whakaaro ai te assistant ki te guidance me ngā code examples e tino tika ana ki te theme ahau e active me ngā plugins ahau e whakamahi.

:::note
Ko ngā theme-aware skills ka whakahirahira automatically i Superdav AI Agent v1.10.0 me te ora hou. He tino nui te whakahaere (setup) me te whakarite (configuration).
