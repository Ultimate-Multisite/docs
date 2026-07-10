---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Ipinakilala ng Gratis AI Agent v1.5.0 ang **Plugin Builder & Sandbox System**, na nagpapahintulot sa AI assistant na gumawa, mag-activate, at mag-manage ng WordPress plugins sa iyong network — lahat sa pamamagitan ng isang ligtas at hiwalay (isolated) na sandbox environment.

## Overview {#overview}

Pinapayagan ng Plugin Builder ang AI assistant na magsulat ng custom WordPress plugins bilang tugon sa mga request na nasa natural na wika. Ang mga nabuong plugin ay sinusuri, iniimbak, at ina-activate sa loob ng isang sandbox layer bago pa man ito makaapekto sa live site functionality.

Kasama rito ang mga gamit nito:

- Pagbuo ng mga lightweight utility plugins nang hindi na kailangan ng developer.
- Pag-prototype ng mga features na nangangailangan ng WordPress hooks o custom post types.
- Paglikha ng mga short-lived automation scripts para sa batch operations.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

Upang makabuo ng plugin, buksan ang chat interface ng Gratis AI Agent at ilarawan kung ano ang kailangan mo. Halimbawa:

> "Create a plugin that adds a custom admin notice on the dashboard."

Ang AI ay gagawa ng mga sumusunod:

1. Maglalabas ng PHP code ng plugin gamit ang structured code generation.
2. Susuriin ang output para sa mga syntax errors at mga hindi ligtas na pattern.
3. Ise-save ang nabuong plugin sa sandbox store.
4. Magbabalik ng kumpirmasyon kasama ang plugin slug at isang **Activate in Sandbox** button.

Maaari mong linawin pa ang resulta sa pamamagitan ng pagtatanong sa parehong conversation thread bago mo ito i-activate.

## Sandbox Activation {#sandbox-activation}

Ang pag-activate ng nabuong plugin sa sandbox ay iba sa pag-activate nito sa live network. Ang sandbox:

- Nagpapatakbo ng plugin sa isang isolated WordPress environment (wp-env).
- Kinukuha ang anumang PHP errors, warnings, o hook conflicts.
- Ibinabalik ang resulta ng activation sa chat interface.

Upang i-activate ang plugin sa sandbox, i-click ang **Activate in Sandbox** button sa AI chat response, o gamitin ang slash command:

```
/activate-plugin <plugin-slug>
```

Ang isang status message ang magkukumpirma kung nagtagumpay o nabigo ang activation. Kung may failure, ang error log ay ipapakita sa chat thread.

## Managing Generated Plugins {#managing-generated-plugins}

Ang mga nabuong plugin ay nakalista sa **Gratis AI Agent → Plugin Builder → Manage Plugins**. Mula sa screen na ito, maaari mong gawin ang mga sumusunod:

| Action | Description |
|---|---|
| **View source** | Tingnan ang buong PHP code ng plugin. |
| **Re-activate in sandbox** | Muling patakbuhin ang sandbox activation check. |
| **Install on network** | I-deploy ang plugin sa live network (nangangailangan ng manual confirmation). |
| **Update** | Magbigay ng bagong version sa pamamagitan ng AI, na papalit sa kasalukuyang code. |
| **Delete** | Tanggalin ang plugin mula sa sandbox store. Una itong i-deactivate sa lahat ng sites. |

:::warning
**Install on network** ang nagde-deploy ng nabuong plugin sa iyong live WordPress multisite. Balikan ang plugin code bago magpatuloy. Hihingi ng kumpirmasyon ang Gratis AI Agent bago makumpleto ang live install.
:::

## Installing a Generated Plugin on the Network {#installing-a-generated-plugin-on-the-network}

Kapag kuntento ka na sa isang sandboxed plugin, maaari mo itong i-install sa live network:

1. Pumunta sa **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. I-click ang **Install on Network** sa tabi ng plugin na gusto mong i-deploy.
3. Kumpirmahin ang dialog. Ang plugin ay i-iinstall sa `wp-content/plugins/` at network-activated.

Alternatibo, gamitin ang slash command sa chat interface:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

Upang i-update ang isang nabuong plugin, ilarawan ang pagbabago sa AI assistant sa isang bagong conversation:

> "Update the dashboard-notice plugin to only show the notice to administrators."

Ang AI ay gagawa ng bagong version, na lalabas sa sandbox kasabay ng kasalukuyang version. Ire-review mo ang diff at kumpirmahin bago ma-apply ang update.

## HookScanner Integration {#hookscanner-integration}

Gumagamit ang Plugin Builder ng isang integrated **HookScanner** para suriin ang mga hooks at filters na nairehistro ng bawat nabuong plugin. Ang output ng HookScanner ay ipinapakita sa chat response at kasama ang:

- Action hooks na nairehistro (`add_action` calls).
- Filter hooks na nairehistro (`add_filter` calls).
- Anumang hooks na natagpuan sa plugin dependencies (hindi kasama ang mga directory na `vendor/` at `node_modules/`).

Nakakatulong ito sa iyo na maunawaan ang pag-uugali ng isang plugin bago mo ito i-activate.

## Security Considerations {#security-considerations}

- Ang mga nabuong plugin ay iniimbak nang hiwalay mula sa mga mano-manong na-install na plugin at hindi maa-access sa standard WordPress plugin management screen hangga't hindi mo ito eksaktong ini-install sa network.
- Gumagamit ang sandbox ng path validation para maiwasan ang directory traversal kapag nagsusulat ng plugin files.
- Ang mga plugin na may mapanganib na function calls (hal., `eval`, `exec`, `system`) ay minamarkahan sa panahon ng validation at hindi ma-a-activate.
