---
title: Ngā Whānau Whakawhanaungatanga o te Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Whānau Whakaiti: Whakawhanaungatanga me Whakahaere Te Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Te Superdav AI Agent v1.12.0 e te whakamōhaka iki iki i tētahi mahi nui, e tino pai ana ki te whakamahinga, e pēnei i te whaiaro i te chat interface hei whakawhanaunga me te whakahirahira i custom block themes.

## Whakawātea (Overview) {#overview}

Ngā mahi **scaffold-block-theme** me **activate-theme** e hiahia ana ki te whakamahi ngā agents hei:
- Whakawhanaunga i complete, production-ready block themes based paea o koe
- Whakahaere i ngā themes ki te wāhi o koe i runga i te site anō i roto i te wa, without manual intervention (without te whaiaro manu)
- Whakapehe i te whakapapa visua cohesive through guided design decisions (e whakaaro whakamahi i te whakaaro mō te whare).

## Whakawātea Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

Te mahi **scaffold-block-theme** e whakawhanaunga i tētahi new WordPress block theme ki te structure o te theme katoa, ā, me te whaiaro i:

- `theme.json` configuration me design tokens
- Block template files mō ngā layout common (whakamahi)
- Custom block styles me variations
- Theme metadata me support declarations

### He aha te whakamahi? (How to Invoke) {#how-to-invoke}

I tō chat ki te Superdav AI Agent, i taea ai koe te whaiaro i te whakawhanaungatanga o te theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Te agent i roto i te mahi:
1. Whakawātea ngā whakaaro visua o koe mō te whānau (gather your design preferences) i roto i te conversa
2. Whakawhanaunga i te structure theme katoa
3. Whakawhanaunga i ngā files theme katoa e pēnei ana
4. Whakahaere i te theme ki te whakamahi (prepare the theme for activation)

### Te whaiaro o te whakapoutanga (Expected Output) {#expected-output}

I roto i te wa kua whakatika i te mahi, i whakaatu koe:

- Confirmation (whakamārama) e te theme he pēnei ana
- Te ingoa o te theme me te wāhi (location)
- He summary o ngā design tokens e whakamahia (colors, typography, spacing)
- Status ready-to-activate (e mōhio ana ki te whakamahi)

Whakahaere pēnei:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Whakahaere i te Theme (Activate Theme) {#activate-theme}

Whakaritea i te **activate-theme** e whai i te wāhi o te wahi ahau (site) ki te theme hou tino whakamahinga ana, he pēnei i he theme e tino whakatō atu ana akorua.

### He aha te mea hei whakamahi? {#how-to-invoke-1}

I raro i te whakamahi i te theme, i taea ai koe te whakamahi i tana wāhi i runga i te wāhi ahau (site) i runga i te wāhi.

```
"Whakarite i te theme Modern Agency"
```

Kia whakarite i te theme eke atu ana:

```
"Whakatika ki te theme Twentytwentyfour"
```

### Te whaiaro e pēnei ai {#expected-output-1}

I roto i te wāhi e pēnei i te whakamahi, i tū mai i te whakaa:

- Whakamahinga o te theme eke atu ana
- Têni o te theme e pēnei (mō whakamārama)
- URL o te wāhi ahau (site) i tēnei wā
- Ngā whakamārama mō te whakarite o te theme

Whakawātea e pēnei:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Te whakatau i te mahi: Whakatō me Whakaritenga {#workflow-scaffold-and-activate}

He mahi pēnei i te whakamahi i ngā wāhi e pēnei i te tūnga e pēnei:

1. **Whakamārama te whakatō theme**: "Whakawārie theme block mō taku landing page SaaS"
2. **Te agent e whakatō te theme**: Whakawārie ngā files me ngā design tokens
3. **Whakawārie me whakaiti**: Whakarite ngā pēke o te design ki te whakaaro ana i te āhuatanga ahau
4. **Whakaritenga**: "Whakaritenga theme i tēnei wā"
5. **Whakawātea**: Pāinga i te wāhi ahau (site) mō te whakamārama i te design hou

## Design Tokens me te Whakahaere {#design-tokens-and-customization}

Ngā theme e whakatō ana i ngā WordPress design tokens (i roto i `theme.json`) mō:

- **Ngā rangi**: Primary, secondary, accent, neutral palette
- **Te reo**: Font families, sizes, weights, line heights
- **Te wā**: Padding, margin, gap scales
- **Ngā whero**: Radius me width tokens
- **Ngā pō**: Elevation levels

Ko ngā tokens ei te whakatū ana i `theme.json`, e tino tika ana ki te whakaiti i tō mātāpuna design katoa i tētahi file.

## Ngā Wāhi Whakarite me Ngā Whakamārama {#limitations-and-notes}

- Themes eka tū i `/wp-content/themes/` ā, me tino whai i ngā whakamāramatanga o WordPress.
- Ka tino āwhina te whakamōhaka (Activation) ki te site WordPress mo i roto i ngā whānau whānau (permissions) tika.
- He pēnei te whakamahi i kōrero PHP mō te themes; me te whakamahi plugin mo mahi nui.
- Ka tino pai akorero (Block themes) ki WordPress 5.9 ā, i runga i te ora.

## Whakamārama (Troubleshooting) {#troubleshooting}

**Ka kore te theme e tū i arahi i te whakamōhaka**
- Kia mārama ko te directory o te theme e pēnei ana me ngā whānau whānau tika.
- Kia whakaoti ko `theme.json` he JSON mōhio.
- Kia mārama ko te ingoa o te theme ka noho i te pēnei ana ki ngā themes e pai anō.

**Ka pēnei te whakamōhaka (Activation fails)**
- Kia mārama ko he tino whānau whānau administrator koe.
- Kia whakaoti ko te directory o te theme e tika ana ko e taea te ia te whakapā i WordPress.
- Kia hiahia i ngā error logs o WordPress mō whakamārama mō te pēnei.

**Ka kore ngā design tokens e whai anō**
- Kia mārama ko he tino tika te syntax o `theme.json`.
- Whakaora (Clear) akorero caching plugins katoa.
- Kia mārama ko te version o WordPress mo teina i te tokens e hiahia koe.

## Ngā mahi ā muri ake nei (Next Steps) {#next-steps}

I raro i te whakamōhaka o tō theme, ka taea e koe:
- Whai i te **Design System Aesthetics skill** mō te whakatipu i te typography, ngā rangi, me te spacing.
- Whakawāhi (Customize) ngā style o blocks i roto i te WordPress block editor.
- Whakarite CSS mō teina i te file `style.css` o tō theme.
- Whakawāhi (Create) mga template blocks mō ngā wāhi whānau tika.
