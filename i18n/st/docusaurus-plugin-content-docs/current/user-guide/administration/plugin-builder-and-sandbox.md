---
title: Mopolo ea ho hlalosa le ho fana ka tsela e ntlha
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 e le **Plugin Builder & Sandbox System**, seo e le AI assistant e fa, e fa, e fa WordPress plugins mo le network o lo e tatau — se fa mo le auala safe, e fa, e fa sandbox environment.

## Overview {#overview}

O Plugin Builder e fa i le AI assistant e fa custom WordPress plugins mo le auala natural language requests. O plugin ua faa fa'aalia ai, e fa, e fa, e fa validate, e fa, e fa, e fa store, e fa, e fa activate mo le sandbox layer i lea o le fa'aalia ai o le site e fa'aalia ai.

O fa'aalia ai o lo e fa:

- Fa'aalia plugin utility lightweight ua faa fa'aalia ai, se fa developer involvement.
- Prototyping features ua faa fa'aalia ai e talano WordPress hooks o custom post types.
- Fa'aalia automation scripts fa'aalia ai a le batch operations ua faa fa'aalia ai.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

Mo fa'aalia plugin, fa'aalia chat interface o Gratis AI Agent ma fa'aalia mo se mea e talano oe e mana'o. E fa'aalia ai:

> "Create a plugin that adds a custom admin notice on the dashboard."

O le AI e fa:

1. Fa'aalia plugin PHP code ua fa'aalia ai structured code generation.
2. Fa'aalia output mo syntax errors ma unsafe patterns.
3. Fa'aalia generated plugin i le sandbox store.
4. Fa'aalia confirmation ua fa'aalia ai o le plugin slug ma se **Activate in Sandbox** button.

E fa'aalia ai o lo e fa a fa'aalia ai mo le fa'aalia i le conversation thread ua fa'aalia ai.

## Sandbox Activation {#sandbox-activation}

O le fa'aalia plugin ua faa fa'aalia ai i le sandbox e fa'aalia ai se mea e fa'aalia ai i le network live. O le sandbox:

- Fa'aalia plugin i le isolated WordPress environment (wp-env).
- Fa'aalia PHP errors, warnings, o hook conflicts ua fa'aalia ai.
- Fa'aalia activation result i le chat interface.

Mo fa'aalia plugin i le sandbox, fa'aalia button **Activate in Sandbox** i le AI chat response, o fa'aalia command slash:

```
/activate-plugin <plugin-slug>
```

Se fa tsamoe le litlhare tse di bontšang kae e ne e fanele e fana kae kapa e ne e fane. Ka ho fana, log ya thuto (error log) e bontšwa mo tlhahlobo ya chat.

## Ho Dirisa Le Plugin Ye Afeletso (Managing Generated Plugins) {#managing-generated-plugins}

Plugins tse di fetileng (generated plugins) di leka mo **Gratis AI Agent → Plugin Builder → Manage Plugins**. Mo lapa le ka dira:

| Action | Leano la Boitshwaro (Description) |
|---|---|
| **View source** | Ho bala kopo ya PHP efeletso. |
| **Re-activate in sandbox** | Ho fana fa ho reka fa ho fetola e fane mo sandbox. |
| **Install on network** | Ho dira le plugin mo netefo ya live (ho hloka ho bona ka ho tsamaisa). |
| **Update** | Ho fana version e ntlha via AI, e tloha kopo e ntlha. |
| **Delete** | Ho laola le plugin mo sandbox store. Ho fetola e fane mo litlhare hlobo tse re kae. |

:::warning
**Install on network** ho dira le plugin ye afeletso mo WordPress multisite ya live ya hau. Re bala kopo ya plugin ka ntlha ka ho tsamaisa. Gratis AI Agent o tla re tšamisa ho bona fa e ne e fanele e fetola ka ho fana kae ho fana mo netefo.
:::

## Ho Fana Le Plugin Ye Afeletso Mo Netefo (Installing a Generated Plugin on the Network) {#installing-a-generated-plugin-on-the-network}

Ka nako le se fane le plugin ye sandbox, o ka e fana mo netefo ya live:

1. Laela **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Tsamaisa **Install on Network** mo kgolo ya plugin e ne e fanele e dira.
3. Re bona dialog. Le plugin e fetileng mo `wp-content/plugins/` le e fetileng mo netefo (network-activated).

Ka nako e ntlha, u ka u lebisa slash command mo interface ya chat:

```
/install-plugin <plugin-slug>
```

## Ho Fetola Plugins (Plugin Updates) {#plugin-updates}

Ho fetola plugin ye afeletso, re leka ho hlalosa liphaka tsa se fetileng sa AI assistant mo sohla tse ntlha:

> "Fetola dashboard-notice plugin e fane fa e tla bona notice e ntsha kwa administrators kae."

AI o fetola version e ntlha, e tla bona mo sandbox le version e ntlha. O bala diff (liphaka tsa liphaka) le ho tsamaisa ka nako le ho fetola.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder eba **HookScanner** e use ho go bona hooks le filters tse di tshego ke tse di tsamaisang ke plugin tse di fetileng. Output ya HookScanner e tla ba tshegile ke teng sa chat response le e tla fana ka:

- Action hooks tse di tsamaisang (`add_action` calls).
- Filter hooks tse di tsamaisang (`add_filter` calls).
- Leina leina la hooks tse di fetileng mo dependencies tsa plugin (e tla tsamaea directories tse di na le `vendor/` le `node_modules/`).

Tse tshego ho bona etsope ya plugin ka ntlha ea ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho e fana ka ho
