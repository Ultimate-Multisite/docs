---
title: Plugin Builder at Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Ang Gratis AI Agent v1.5.0 ay nagpapakilala ng **Plugin Builder & Sandbox System**, na nagbibigay-daan sa AI assistant na gumawa, mag-activate, at mag-manage ng WordPress plugins sa iyong network — lahat ito sa loob ng isang ligtas at hiwalay na sandbox environment.

## Overview {#overview}

Ang Plugin Builder ay nagpapahintulot sa AI assistant na magsulat ng custom na WordPress plugins bilang tugon sa mga natural language requests. Ang mga nabuong plugin ay binibigyan ng validation, iniimbak, at ina-activate sa loob ng isang sandbox layer bago pa man ito makaapekto sa functionality ng live site.

Mga halimbawa ng paggamit nito ay:

- Paglikha ng mga magaan na utility plugins nang walang pakikialam ng developer.
- Prototyping ng mga feature na nangangailangan ng WordPress hooks o custom post types.
- Paggawa ng maikling automation scripts para sa batch operations.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

Para gumawa ng plugin, buksan ang Gratis AI Agent chat interface at ilarawan kung ano ang kailangan mo. Halimbawa:

> "Gumawa ng plugin na nagdaragdag ng custom admin notice sa dashboard."

Ang AI ay gagawin ang mga sumusunod:

1. Maglalabas ng plugin PHP code gamit ang structured code generation.
2. Mag-validate ng output para sa syntax errors at hindi ligtas na pattern.
3. Isasa-save ang nabuong plugin sa sandbox store.
4. Magbabalik ng kumpirmasyon kasama ang plugin slug at isang **Activate in Sandbox** button.

Maaari mong mapino ang resulta sa pamamagitan ng pagtatanong pa sa parehong conversation thread bago i-activate.

## Sandbox Activation {#sandbox-activation}

Ang pag-activate ng nabuong plugin sa sandbox ay iba sa pag-activate nito sa live network. Ang sandbox:

- Pinapatakbo ang plugin sa isang isolated WordPress environment (wp-env).
- Kinukuha ang anumang PHP errors, warnings, o hook conflicts.
- Nag-uulat ng resulta ng activation pabalik sa chat interface.

Para i-activate ang isang plugin sa sandbox, i-click ang **Activate in Sandbox** button sa tugon ng AI chat, o gamitin ang slash command:

```
/activate-plugin <plugin-slug>
```

May magpakita ng mensahe ang status kung matagumpay o nabigo ang pag-activate. Kung hindi ito nagtagumpay, ipapakita ang error log sa chat thread.

## Pamamahala ng mga Nabuo na Plugin {#managing-generated-plugins}

Ang mga generated plugin ay makikita sa **Gratis AI Agent → Plugin Builder → Manage Plugins**. Mula sa screen na ito, maaari mong gawin ang mga sumusunod:

| Aksyon | Deskripsyon |
|---|---|
| **View source** | Tingnan ang buong PHP code ng plugin. |
| **Re-activate in sandbox** | Magpatakbo muli ng activation check sa sandbox. |
| **Install on network** | I-deploy ang plugin sa live network (nangangailangan ng manual na kumpirmasyon). |
| **Update** | Magbigay ng bagong bersyon gamit ang AI, na papalitan ang kasalukuyang code. |
| **Delete** | Tanggalin ang plugin mula sa sandbox store. I-deactivate muna ito sa lahat ng site. |

:::warning
Ang **Install on network** ay maglalagay ng generated plugin sa iyong live WordPress multisite. Suriin ang code ng plugin bago magpatuloy. Hihingi ang Gratis AI Agent ng kumpirmasyon bago tapusin ang live install.
:::

## Pag-install ng Generated Plugin sa Network {#installing-a-generated-plugin-on-the-network}

Kapag kuntento ka na sa isang sandboxed plugin, maaari mo itong i-install sa live network:

1. Pumunta sa **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. I-click ang **Install on Network** sa tabi ng plugin na gusto mong i-deploy.
3. Kumpirmahin ang dialog box. Ang plugin ay i-iinstall sa `wp-content/plugins/` at magiging aktibo sa network.

Bilang alternatibo, gamitin ang slash command sa chat interface:

```
/install-plugin <plugin-slug>
```

## Mga Update ng Plugin {#plugin-updates}

Para ma-update ang isang generated plugin, ilarawan ang pagbabago sa AI assistant sa isang bagong usapan:

> "I-update ang dashboard-notice plugin para ipakita lang ang notice sa mga administrator."

Ang AI ay gagawa ng bagong bersyon, na lalabas sa sandbox kasama ng kasalukuyang bersyon. Suriin mo ang diff at kumpirmahin bago i-apply ang update.

## HookScanner Integration {#hookscanner-integration}

Gumagamit ang Plugin Builder ng isang integrated na **HookScanner** para suriin ang mga hooks at filter na naka-register ng bawat plugin na ginawa nito. Ang output ng HookScanner ay ipapakita sa chat response at kasama dito:

- Mga action hooks na naka-register (`add_action` calls).
- Mga filter hooks na naka-register (`add_filter` calls).
- Anumang hooks na natagpuan sa mga dependency ng plugin (binibigyang-skip ang `vendor/` at `node_modules/` directories).

Nakakatulong ito para maintindihan mo ang pag-uugali ng isang plugin bago mo ito i-activate.

## Security Considerations {#security-considerations}

- Ang mga generated na plugin ay naka-store nang hiwalay mula sa mga manu-manong na naiinstall na plugin at hindi maa-access sa standard WordPress plugin management screen hangga't hindi mo sila eksaktong ini-install sa network.
- Gumagamit ang sandbox ng path validation para maiwasan ang directory traversal kapag nagsusulat ng mga file ng plugin.
- Ang mga plugin na may mapanganib na tawag sa function (halimbawa, `eval`, `exec`, `system`) ay itatala habang nagva-validate at hindi ito a-activate.
