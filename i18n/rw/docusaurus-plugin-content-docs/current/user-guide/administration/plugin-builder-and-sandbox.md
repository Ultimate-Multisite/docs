---
title: Ubwuhanga bw'Urugero n'Urugero rwa Gukora
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 yitangira **Plugin Builder & Sandbox System**, uyu mufiti w'AI yashobora gukora, guhagarira, no gutera plugin za WordPress ku munsi yacu — cyane mu buryo bw'ubwumvikane kandi wifashishije sandbox environment.

## Uburyo Bwo Gushobora (Overview) {#overview}

Plugin Builder yitangira ubufasha bwa AI gukora plugin za WordPress zikoreshwa mu gihe cyo gutanga ibyo umuntu ashobora kuvuga mu buryo bw'ubwujubi (natural language requests). Plugin zikoreshwa zishoborwe, zishoborweho, kandi zishoborweho mu sandbox layer mbere yizera ko zishobora kwerekana ku site ya mbere.

Uburyo bwo gukoresha:

- Gukora plugin za utugushyira (utility plugins) zifite uburyo bw'ubwujubi nta mufiti w'ubwujubi ufite mu gihe cyo gutanga.
- Gutangira ibyo bikoreshwa (prototyping features) byumva uburyo bwo gukoresha WordPress hooks cyangwa custom post types.
- Gukora scripts zikoreshwa mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo mu gihe cyo gukora ibyo

```
/activate-plugin <plugin-slug>
```

Ururu wa status message itangira n'ubwo uburyo bw'ubwujaji bwa plugin yashobora gutungurwa cyangwa gufata. Mu gihe cy'ubwujaji, umugambi w'ibibazo (error log) ukarirwe mu chat thread.

## Gutera Plugin Zishobora Gutungurwa {#generating-a-plugin-via-ai}

Plugin zishobora gutungurwa zishobora kuboneka mu **Gratis AI Agent → Plugin Builder → Manage Plugins**. Ku gukoresha uburyo bwo, uza kuba ufite:

| Action | Uburyo bw'ubwujaji |
|---|---|
| **View source** | Gushyira umbwire wose w'ibyo plugin yashobora gutungurwa. |
| **Re-activate in sandbox** | Gutera cyane uburyo bwo gukoresha sandbox activation check. |
| **Install on network** | Gutera plugin ku rwego rwa mbere (live network) (bifasha gufata umwanya w'ubwujaji). |
| **Update** | Gufasha urugo rwa mbere mu gihe cy'umwujaji (AI), kugira ngo yogereze uburyo bwo gukoresha. |
| **Delete** | Gutera plugin ku sandbox store. Ufata ibyo bitangira mu gihe cyose. |

:::warning
**Install on network** itangira plugin yashobora gutungurwa ku WordPress multisite ya mbere yawe (live). Urashobora gushyira umbwire w'ibyo plugin bishobora gutungurwa mbere yemeza. Gratis AI Agent izakubwira ko uza gukorera ibyo bitangira mu gihe cyose.
:::

## Gutera Plugin Yashobora Gutungurwa Ku Rwego Rwa Mbere (Network) {#sandbox-activation}

Icyo ugomba gukora iyo wumva ko plugin yashobora gutungurwa mu sandbox, uza kuba ufite uburyo bwo kuyifata ku rwego rwa mbere:

1. Gukoresha **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Gukoresha **Install on Network** kera plugin wifuza gutera.
3. Gutangira dialogu (dialog) yemeza. Icyo plugin cyo gukora bitangira mu `wp-content/plugins/` kandi kitangira ku rwego rwa mbere.

Urugo rwa mbere, uza kuba ufite uburyo bwo gukoresha slash command mu chat interface:

```
/install-plugin <plugin-slug>
```

## Gutera Plugin {#managing-generated-plugins}

Kugera ku gutera plugin yashobora gutungurwa, ugomba kuvuga uburyo bwo guhindura mu kinyarwanda ku umugambi w'umwujaji (AI assistant) mu gihe cy'ubwujaji run cyaho:

> "Gihindura dashboard-notice plugin kugira ngo yorane gukoresha ibyo kuri administrators gusa."

Umugambi w'umwujaji uzera uburyo bwo gukoresha, kandi kugaragara mu sandbox n'ubwo uburyo bwa mbere. Uza gushyira umbwire (diff) kandi wemeza mbere y'ibyo gutera.

## HookScanner Integration {#installing-a-generated-plugin-on-the-network}

Plugin Builder yashobora gukoresha **HookScanner** yashobora kugenzura hooks n'filters zikoreshwa na plugin yose itangirirwe. Output ya HookScanner yorashwa mu chat response kandi yashobora gukoresha:

- Action hooks zikoreshwa (`add_action` calls).
- Filter hooks zikoreshwa (`add_filter` calls).
- Hooks yose zitangirirwe muza (yitangira `vendor/` n'node_modules/ directories).

Ibi bikunda kukufasha kumenya uburyo plugin yashobora gukora mbere yisaba.

## Security Considerations {#plugin-updates}

- Plugins zikoreshwa zishobora gushoborwa mu buryo bushobora (stored separately) ku rugero rwa plugins zikoreshwa cyangwa zikoreshwa n'umuntu wari yashyiraho, kandi zishobora guhindurwa mu gihe cyose cyane mu dashboard ya WordPress itarimo ukwihangira uburyo.
- Sandbox yashobora gukoresha ubushobozi bwo gukoresha amabwiriza (path validation) kugira ngo yitangire ibintu by'umwihariko (directory traversal) iyo yandika file za plugin.
- Plugins zikoreshwa zo mu gihe cyose zishobora gukoresha amafunzo yisobanura (dangerous function calls) (urugero: `eval`, `exec`, `system`) zishoborwa guhindurwa mu gihe cyo genzura kandi zizashobora guhindurwa.
