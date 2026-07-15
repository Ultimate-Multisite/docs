---
title: Plugin Builder & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 nwere introduce the **Plugin Builder & Sandbox System**, nke na-eme AI assistant generate, activate, and manage WordPress plugins na-aka your network — onye ọ bụ na-akpọ na sandbox environment na-agbata.

## Overview {#overview}

The Plugin Builder na-eme AI assistant ịkpọ custom WordPress plugins na-akọwa akụkọ (natural language requests). Plugins nke a nwere ike ịchekwa, na-store, na-activate ọ bụ na-aka sandbox layer ma ọ bụrụ na ọ ga-agbata site live functionality.

Nche gị na-eme:

- Ịkpọ lightweight utility plugins mà nwere developer involvement.
- Prototyping features na-akọwa WordPress hooks ma custom post types.
- Ịkọwa automation scripts nke nwere ike ịrụ batch operations.

## Generating a Plugin via AI {#generating-a-plugin-via-ai}

Ọ bụrụ na ị kpọ akụkọ (generate) plugin, jikọ interface chat Gratis AI Agent ma gosi ọ bụ na ị chọrọ ihe. Ọ bụrụ na ọ bụ:

> "Create a plugin that adds a custom admin notice on the dashboard."

AI ga-agbata:

1. Produce plugin PHP code na-akọwa structured code generation.
2. Validate output na-eme syntax errors ma unsafe patterns.
3. Save generated plugin na sandbox store.
4. Return confirmation na-eme plugin slug na button **Activate in Sandbox**.

Ị ga-agbata ihe ọ bụ na ị kpọ akụkọ (refine) ọrụ ahụ ma ọ bụrụ na ị chọrọ, jikọ n'ime conversation thread ahụ ma ọ bụrụ na ị ga-activate.

## Sandbox Activation {#sandbox-activation}

Activating plugin nke a na sandbox bụ ihe dị iche iche na-eme activation ọ na network live. Sandbox na-eme:

- Run plugin na isolated WordPress environment (wp-env).
- Capture any PHP errors, warnings, or hook conflicts.
- Report result activation ahụ geri na chat interface.

Na-eme activation plugin na sandbox, jikọ button **Activate in Sandbox** na response AI chat, ma ọ bụ gụny command:

/activate-plugin <plugin-slug>
```

Mesej status akwazụrụ ọ bụ ka aka activation ya nwere ike ịbụka ma ọ bụ aka ọ na-achị. Ma ọ bụ ma ọ bụ maaka, ihe omume error ahụ ga-anọrọ m in chat thread.

## Ọrụ Plugin-ah Ana

Plugins-ah ana anọrọ n' **Gratis AI Agent → Plugin Builder → Manage Plugins**. From screen a bụ ị ga-anọchị:

| Action | Description |
|---|---|
| **View source** | Jiji ihe omume PHP plugin ahụ. |
| **Re-activate in sandbox** | Rere run check activation sandbox. |
| **Install on network** | Deploy plugin ahụ n' live network (nwere ike ịnweta ọ byọ). |
| **Update** | Biko ihe omume ọhụrụ via AI, ji gba ihe omume ebe a na-achị. |
| **Delete** | Abanye plugin ahụ n' sandbox store. Ji m dị afa ya n'aka sites ndị ọzọ ma ọ bụ site onye. |

:::warning
**Install on network** na-deploy plugin ah ana n' live WordPress multisite ha. Jiji ihe omume plugin ahụ ma ọ bụ ị gbanwe ka ọ ga-anọrọ. Gratis AI Agent ga-anọchị maka confirmation ma ọ bụrụ na ị ga-anọrọ install live.
:::

## Ọrụ Plugin Ana n' Network

Mgbe ị na-agba ọsọ na plugin ah ana sandbox, ị ga-anọchị ya n' network live:

1. Jiji **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Click **Install on Network** a n'plugin ị ga-anọrọ deploy.
3. Confirm dialog ahụ. Plugin ahụ ga-anọrọ `wp-content/plugins/` ma ọ bụ network-activated.

Ma ọ bụ, jiji slash command a n'chat interface:

```
/install-plugin <plugin-slug>
```

## Ọrụ Plugin

Iji gbanwe plugin ah ana, ji gba ihe omume ahụ na AI assistant n'new conversation:

> "Update the dashboard-notice plugin to only show the notice to administrators."

AI ga-anọrọ new version ahụ, nke ga-anọrọ n'sandbox a n'ime version ahụ na-achị. Jiji diff ahụ ma ọ bụ gbanwe ka ọ ga-anọrọ before update ahụ ga-anọrọ apply.

## Integration HookScanner

Plugin Builder na-enew **HookScanner** nwere n'imeye ya ịchekwa hooks na filters ndị bụrụ ọrụ na plugin ọ bụla ị chụrụ. Output nke HookScanner ga-eghị n'ime chat response ma na-anọcha:

- Action hooks (calls `add_action`).
- Filter hooks (calls `add_filter`).
- Ọ bụ onye hook ọ bụla nwere n'ime dependencies na plugin (ọga `vendor/` na `node_modules/` ga-eghị chọpụta).

Nke a ga-eme ka ị chụrụ ihe plugin ahụ ga-eme ma ọ bụrụ na ị chọrọ ịgbanwe ya.

## Nche Ihe Nche (Security Considerations)

- Plugins ndị a chụrụ nwere ike ịdị n'ime ọkụ ọtụtụ n'ime plugins ndị ọ bụla ị chọrọ, ma ọ bụ na-enwere ike ịle ha n'ime standard WordPress plugin management screen ma ọ bụrụ na ị chọrọ ịse ha n'ime network ahụ.
- Sandbox ahụ na-eme validation nke path (path validation) ka ọ ga-eghị chọpụta directory traversal mgbe ọ na-akọ plugin files.
- Plugins ndị nwere function calls dị ọnụ (dangerous function calls) (gịnị na ọ bụ `eval`, `exec`, `system`) ga-eghị ịdị n'ime validation ma ga-eghị ịse ha.
