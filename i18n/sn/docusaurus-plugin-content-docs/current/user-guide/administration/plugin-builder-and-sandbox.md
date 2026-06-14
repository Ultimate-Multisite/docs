---
title: Mbuilder uye Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 inoratira **Plugin Builder & Sandbox System**, inoramba kuti AI assistant iwe zvinogona kuita, kupa, uye kuramba (manage) WordPress plugins pamusoro pe network yako — zvose izvi zvichitika mumhando yakasimba, inosimbisa (isolated sandbox environment).

## Overview

Plugin Builder inoratira kuti AI assistant iwe dzinogona kuita, kunyora custom WordPress plugins nekuti munhu anogona kutaura. Plugins dzakagadzirwa dzine chidzidzo (validated), dziri mumapuro (stored), uye dziri kuita (activated) mu sandbox layer panguva yakasiyana-siyana pamba, panguva dziri kuita zvinhu pamusoro pe site yakanaka.

Zvinogona kushandiswa miviri:

- Kupa plugins dzinobatsira (utility plugins) dzinodzidzika pane kunzwisisa kwemumbe wenyu.
- Kuratidza (prototyping) zvinhu zvine kuita WordPress hooks kana custom post types.
- Kuratidza scripts dziri kudzidzika (automation scripts) dzinogona kutamba (batch operations).

## Generating a Plugin via AI

Kuti upereke plugins, tanga chat interface ya Gratis AI Agent uye ndizivisa zvinhu zvako. Sei, sei:

> "Create a plugin that adds a custom admin notice on the dashboard."

AI iwe dzichatanga kuita izvi:

1. Kupa code ye plugin PHP nekuita structured code generation.
2. Kuita validation yekuona errors dze syntax uye patterns dziri kuita zvinhu hazviri yakasimba (unsafe).
3. Kuramba (save) plugin yakagadzirwa mu sandbox store.
4. Kupa confirmation nekuti slug ye plugin uye button inosimbisa **Activate in Sandbox**.

Unogona kuratidza zvinoreva nekuita zvinhu pamusoro pe kunzwisisa munzvimbo yenyu panguva yakasiyana-siyana pamba chinoti.

## Sandbox Activation

Kuti upereke plugin yakagadzirwa mu sandbox kunosimbisa (activate) kunoenda kune kunosimbisa pamusoro pe network yakanaka. Sandbox inoratira izvi:

- Inogona kuita plugin mu WordPress environment inosimbiswa (wp-env).
- Inogona kutamba (capture) errors, warnings, kana hook conflicts dziri mumPHP.
- Inogona kupa result ye kunosimbisa panguva chat interface.

Kuti upereke plugin mu sandbox kunosimbisa, ndichivhara button inosimbisa **Activate in Sandbox** munzvimbo ya AI chat response, kana kuita slash command:

/activate-plugin <plugin-slug>
```

Mufundisi ya status inokumbutsana kungo akapfuura kana kungo akasikana. Kana kukaipa, log yechidzidzo (error log) dzakazviswa mu chat thread.

## Kuratidza Plugins dzakagadzirwa

Plugins dzakagadzirwa dziri kuita mupfumbiro we **Gratis AI Agent → Plugin Builder → Manage Plugins**. Kuita iye, unogona:

| Action | Chinyorwa |
|---|---|
| **View source** | Kuti uone kwerudziro (code) yese ye plugin PHP. |
| **Re-activate in sandbox** | Kuratidza chine chekugadzirwa kwe sandbox. |
| **Install on network** | Kutora plugin kuita mupfumbiro we WordPress wako wose (kunoda kunyora kune zvinhu zvinotariswa). |
| **Update** | Kuti unenge uipa chine chine chine, uye kuti iwe inenge yakagadzirwa neAI, inobata code yakanaka. |
| **Delete** | Kurarurudza plugin ku sandbox store. Inokutarisira (deactivates) kubva mu sites dzose pamwe. |

:::warning
**Install on network** inotora plugin yakagadzirwa kune WordPress multisite wako wose. Onge uone code ye plugin panguva unotsvaga kuenda mberi. Gratis AI Agent ichakubatsira kuti uone zvinhu zvinobata (confirmation) panguva unorega kutora mu live install.
:::

## Kuratidza Plugin Yakagadzirwa Kuita Mupfumbiro We Network

Kana uri kuita chokwadi neplugin yakagadzirwa kune sandbox, unogona kutorera kuita mupfumbiro we network:

1.enda ku **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2.Chibvumira **Install on Network** panguva uine plugin uinoda kutora.
3.Onge iye dialogi (dialog) yacho. Plugin inotora ku `wp-content/plugins/` uye inokwanisa mupfumbiro we network.

Kana uri kuita zvinhu zvakasiyana, shandisa slash command mu interface ye chat:

```
/install-plugin <plugin-slug>
```

## Kuratidza Updates Yechine Plugin

Kuti uratidze update yechine plugin yakagadzirwa, onge uingise chirevo chekuurudza ku AI assistant mu kuta chengetedzo chinobva:

> "Update dashboard-notice plugin kuti inoseerera kunoone notice kune administrators chete."

AI ichagadzira version yenyu yakare, inotarisirwa panguva sandbox pamwe neversion yakare. Onge uone diff (chinhu chinotarisirwa) uye onge uingise chine chine kuti update iwe ine kutora.

## HookScanner Integration

Plugin Builder inogona **HookScanner** inotora kuti iwe utsanidza hooks nefilters zvakaisangira neplugin dzakachengetedza. Zvinhu zvinotoro kuve mufaro mu response ya chat uye zvichiri kuita:

- Action hooks zvinotsanidzirwa (`add_action` calls).
- Filter hooks zvinotsanidzirwa (`add_filter` calls).
- Kuratidza hooks dzakaita kuti dzinowanikwa mumabhurangi (inotsvaga zvinhu mumabhurangi anogona kuita `vendor/` ne `node_modules/`).

Izvi zvinoita kuti uve munhu anoziva nzira inotora plugin pfungwa pakati pekuita iye.

## Security Considerations

- Plugins dzakachengetedza dziri kuitwa mune chakanangwa chakasiro (separate) kubva kweplugins dzinowanikwa nekuita zvako, uye hazi dzinogona kuone kana waziva vachivaka pane iwe munzvimbo yakasimba nekuti haunozivaka zvinokosha pamwe nemunhu.
- Sandbox inoshandisa validation ya path kuti isavimbise directory traversal (kuita zvinhu zvakaita kuti dzivaka files) kana kuita plugin files.
- Plugins dzinogona kuita zvinhu zvinodambudzika (kuti zvinhu zvakaita se `eval`, `exec`, `system`) dzine flagged during validation uye hazvazivaka.
