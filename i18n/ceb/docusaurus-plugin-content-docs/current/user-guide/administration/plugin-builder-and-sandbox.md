---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Ang Gratis AI Agent v1.5.0 nagpaila sa **Plugin Builder & Sandbox System**, nga nagtugot sa AI assistant nga maghimo, mag-activate, ug magdumala og WordPress plugins sa imong network — tanan pinaagi sa usa ka luwas ug gipahinay nga sandbox environment.

## Overview

Ang Plugin Builder nagtugot sa AI assistant nga magsulat og custom WordPress plugins tubag sa mga natural language requests. Ang mga nahimo nga plugins gi-validate, gi-store, ug gi-activate sulod sa usa ka sandbox layer sa dili pa kini makaapekto sa functionality sa live site.

Mga gamit niini naglakip sa:

- Paghimo og lightweight utility plugins nga walay kinahanglanon nga developer involvement.
- Prototyping sa mga features nga nanginahanglan og WordPress hooks o custom post types.
- Paggawa og short-lived automation scripts para sa batch operations.

## Generating a Plugin via AI

Aron maghimo og plugin, buksan ang Gratis AI Agent chat interface ug i-describe kung unsa ang imong gikinahanglan. Pananglitan:

> "Create a plugin that adds a custom admin notice on the dashboard."

Ang AI magbuhat niini:

1. Maghimo og plugin PHP code gamit ang structured code generation.
2. Mag-validate sa output para sa syntax errors ug unsafe patterns.
3. I-save ang nahimong plugin sa sandbox store.
4. Magbalik og confirmation uban ang plugin slug ug usa ka **Activate in Sandbox** button.

Mahimo nimong pino ang resulta pinaagi sa pagpadayon sa istorya sulod sa parehas nga conversation thread sa dili pa kini ma-activate.

## Sandbox Activation

Ang pag-activate og nahimong plugin sa sandbox lain gikan sa pag-activate niini sa live network. Ang sandbox:

- Magpatakbo sa plugin sa usa ka isolated WordPress environment (wp-env).
- Kuhaon ang bisan unsang PHP errors, warnings, o hook conflicts.
- Magreport sa resulta sa activation balik sa chat interface.

Aron ma-activate ang usa ka plugin sa sandbox, i-click ang **Activate in Sandbox** button sa tubag sa AI chat, o gamita ang slash command:

```
/activate-plugin <plugin-slug>
```

Ang mensahe ng status magpamatud-an kung malampuson o mapakyas ang pag-activate. Kung mapakyas, ipakikita ang error log sa chat thread.

## Pamamahala sa mga Nabubuhat nga Plugin (Managing Generated Plugins)

Ang mga nabubuhat nga plugin makita sa **Gratis AI Agent → Plugin Builder → Manage Plugins**. Gikan niini mahimo nimo:

| Aksyon | Deskripsyon |
|---|---|
| **View source** | Tan-aw ang bug-os nga PHP code sa plugin. |
| **Re-activate in sandbox** | I-re-run ang sandbox activation check. |
| **Install on network** | I-deploy ang plugin sa live network (kinahanglan og manual nga pagpamatuod). |
| **Update** | Maghatag og bag-ong bersyon pinaagi sa AI, nga magpuli sa nag-una nga code. |
| **Delete** | Tangtangon ang plugin gikan sa sandbox store. I-deactivate kini sa tanang sites una. |

:::warning
Ang **Install on network** nag-deploy sa nabubuhat nga plugin ngadto sa imong live WordPress multisite. Huntaha ang code sa plugin sa dili pa magpadayon. Ang Gratis AI Agent magaputana og confirmation sa dili pa makompleto ang live install.
:::

## Pag-install sa Nabubuhat nga Plugin sa Network (Installing a Generated Plugin on the Network)

Kung malipayon ka na sa usa ka sandboxed plugin, mahimo nimo kining i-install sa live network:

1. Adto sa **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. I-click ang **Install on Network** tupad sa plugin nga gusto nimong i-deploy.
3. Ipamatuod ang dialog box. Ang plugin gi-install sa `wp-content/plugins/` ug gi-activate sa network.

Alternatibo, gamita ang slash command sa chat interface:

```
/install-plugin <plugin-slug>
```

## Mga Update sa Plugin (Plugin Updates)

Aron ma-update ang usa ka nabubuhat nga plugin, i-describe ang pagbag-o ngadto sa AI assistant sa bag-ong panag-istoryahanay:

> "Update ang dashboard-notice plugin aron ipakita lang ang notice sa mga administrator."

Ang AI maghimo og bag-ong bersyon, nga modapad sa sandbox uban sa kasamtang nga bersyon. I-review nimo ang diff ug i-confirm kini sa dili pa maaplay ang update.

## HookScanner Integration

Ang Plugin Builder naggamit og integrated nga **HookScanner** para ma-analyze ang mga hooks ug filters nga gi-register sa matag plugin nga gihimo. Ang output sa HookScanner ipakita sa chat response ug naglakip kini sa:

- Action hooks nga na-register (`add_action` calls).
- Filter hooks nga na-register (`add_filter` calls).
- Bisan unsa nga mga hook nga makita sa mga dependencies sa plugin (gi-skip ang `vendor/` ug `node_modules/` directories).

Kini makatabang nimo nga masabtan kung unsa ang pamaagi sa paglihok sa usa ka plugin sa dili pa kini i-activate.

## Security Considerations

- Ang mga gihatag nga plugins gipundo la sa lain gikan sa mga manually na-install nga plugins ug dili ma-access pinaagi sa standard WordPress plugin management screen hangtod nga ikaw mismo ang nag-install niini sa network.
- Ang sandbox naggamit og path validation para mapugngan ang directory traversal kung magmosulat og plugin files.
- Ang mga plugins nga adunay delikadong function calls (pananglitan, `eval`, `exec`, `system`) gi-flag panahon sa validation ug dili kini ma-activate.
