---
title: Tohu Whakairo Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 pātata te **Plugin Builder & Sandbox System**, e tino kitea i te AI assistant ki te whakarataki, te whakamahi, me te whakamaoritanga o mga plugin WordPress mo te wāhi moe (network) mo te oe — he katoa i roto i te mōhiamo, ā, i te whare pātaka (sandbox environment) e haere mai.

## Overview

E tino whaihohonotanga ai i te Plugin Builder ki te AI assistant kia whakawhakarite ia i mga plugin WordPress mō te mea e hiahia ana koe i te reo whānui (natural language requests). E kitea, e whare pātaka (sandbox) mo te whakamārama, me te whakamahi i āhuatanga o WordPress, me te whakamahi i ahua post custom. Ka whakamaoritaki, ka whare pātaka, me te whakamahi i te plugin i te wāhi moe (live site functionality).

Ngā mea e taea te whakamahi ana:

- Whakarataki mga plugin mā te whakamahinga o āhuatanga māharitanga (utility plugins) i roto i te reo whānui, me te whakamahi i te whakaaturanga o te developer.
- Whakarite ngā āhuatanga e hiahia i WordPress hooks, me te custom post types.
- Whakarataki mga script automation kua whakarite mo ngā mahi nui (batch operations).

## Generating a Plugin via AI

Mo te whakarataki plugin, whakatika i te chat interface o Gratis AI Agent me whakatakita i te mea e hiahia ana koe. E tino kitea, e whakaaturai:

> "Whakarite plugin kua whāwharawhai (custom admin notice) mo te dashboard."

Ka whakatika ai te AI:

1. Whakarite te code PHP o te plugin ka whakamahi i structured code generation.
2. Whakamaoritaki te output mo ngā pakihi syntax me ngā āhuatanga e hiahia ana (unsafe patterns).
3. Whare pātaka (sandbox store) i te plugin kua whakatika.
4. Whakarite te whakamārama me te slug o te plugin me te button **Activate in Sandbox**.

Ka taea e koe te whai whakaaro ki te resulta e hoki mai i te whakatau i te whakataunga i te thread o te whaikōrero (conversation thread) i roto i te wāhi moe (before activating).

## Sandbox Activation

Te whakamahi i te plugin kua whakarataki i te sandbox he tino āhuatanga tahi ki te whakamahi i a ia i te network moe. Ka whakamaoritaki te sandbox:

- Whakarite te plugin i te mōhiamo o WordPress (wp-env).
- Whakamāua ngā puni PHP, warnings, me ngā hook conflicts katoa.
- Whakawātea te resulta o te whakamahi i te chat interface.

Mo te whakarataki i te plugin i te sandbox, whakatika i te button **Activate in Sandbox** i te whakatau o te AI chat, ka taea hoki te whakamahi i te slash command:

```
/activate-plugin <plugin-slug>
```

He whakamārama i te pēpi status (status message) mō āwhiaki i te whakatau a te plugin, me te whakaahuatanga o te pēpi e pēnei i te whakatutaku ana ahau. I roto i ngā pēpi e pēnei i te whakatutaku, ka whakaataki i te log o te pēpi i te chat thread.

## Whakawātea Plugin E Whakaritea (Managing Generated Plugins)

Ka whakatū i ngā plugin e whakawāritea i **Gratis AI Agent → Plugin Builder → Manage Plugins**. I tēnei screen, ka taea e koe:

| Arotake | Whakawātea |
|---|---|
| **View source** | Kia tino whakaoti te kōrero o te code PHP o te plugin. |
| **Re-activate in sandbox** | Whakarite atu i te whakamātautanga whakawātea (sandbox activation check). |
| **Install on network** | Whakarite i te plugin ki te wāhi whakatika (live network) (e pēnei i te whakaaahi manuia). |
| **Update** | Whakawhanaungatanga te wera hou via te AI, ka whakakihanga i te code e kino. |
| **Delete** | Whakamutunga te plugin mai i te store o te sandbox. Ka whakatū atu i te pēpi mai i ngā wāhi katoa i roto i te tīmatanga. |

:::warning
**Install on network** ka whakawāritea i te plugin e whakawāritea ki te WordPress multisite hou o koe. Kia whakaaro i te code o te plugin mō te whakamohana i te mahi. Ka whakatutaku te Gratis AI Agent mō te whakaaahi manuia mō te whakamārama i te install live.
:::

## Whakarite Plugin E Whakaritea I Te Wāhi Whakatika (Installing a Generated Plugin on the Network)

I roto i te wā e kua tino pai koe ki te plugin e pēnei i te sandbox, ka taea e koe te whakawārite i i te wāhi whakatika:

1. Pāinga ki **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Whakawatea **Install on Network** i runga i te plugin e tino pai ana mō te whakamahi.
3. Whakamārama te dialog. Ka whakawāritea te plugin ki `wp-content/plugins/` me ka whakatū atu i te network.

He heata hou: Whakarite te command slash i te interface o te chat:

```
/install-plugin <plugin-slug>
```

## Whakawhanaungatanga Plugin (Plugin Updates)

Mō te whakawhanaunga plugin e whakawāritea, whakatakino te pēpi atu ki te mahi o te AI assistant i te whakatau hou:

> "Whakawhanaunga te dashboard-notice plugin mō te whakaatu i te notice ki ngā administrator anake."

Ka whakawārite te AI wera hou, ka purutou i te sandbox i runga i te wera hou me te wera hou. Ka whakaaro koe i te diff (diff) me ka whakatū atu i te update i roto i te whakamahinga.

## Whakawhanaungatanga me HookScanner

Ko te Plugin Builder ana e whakamahi i te **HookScanner** whai mo te whakahaere i te kanohi, ki te whakamaoritanga i ngā hooks me ngā filters (whakamahinga) e whakahou mai e koe i roto i every plugin e whakatō. Ko whakaaturanga o te HookScanner e tino kitea ana i te chat response, ā, e whai ana atu ki:

- Ngā action hooks e whakahou (calls `add_action`).
- Ngā filter hooks e whakahou (calls `add_filter`).
- Ngā hooks katoa e pēnei i ngā plugin dependencies (e whakatika ai te directory `vendor/` me `node_modules/`).

Ko tēnei tino mārama ana atu ki a koe i te mahi o te plugin mō i roto i te whakawhanake i te whakamahi i i te whakamahi i i te plugin akorua.

## Ngā Tikanga Whakamahi (Security Considerations)

- Ko ngā plugins e whakatō ana e Plugin Builder e pēnei i te taumaha, ko e pēnei i ngā plugins e whakahou manuahi, ā, ka taea te whakawhanaunga ki te screen o te WordPress plugin management standard akorua ko i roto i te wā e whakatō atu i a koe i te whenua.
- Ko te sandbox ana e whakamahi i te path validation (whakawhanaungatanga o ngā wāhi) kia whakatika i ngā directory ki te whakaiti i te whakapā i ngā wāhi (directory traversal) i roto i te whakawhitanga o ngā file plugin.
- Ko ngā plugins e whai i ngā whakamahi funktiwha te pēnei i `eval`, `exec`, `system` (ngā funktiwha te pēnei), ka whakahou ana i te validation ko āhua, ā, kāore ia ka whakawhanaunga.
