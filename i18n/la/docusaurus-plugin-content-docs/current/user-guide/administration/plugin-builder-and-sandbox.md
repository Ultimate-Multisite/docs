---
title: Construtor Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 introducit **Plugin Builder & Sandbox System**, quod permittit assistentem IA generare, activare et gestioni plugin WordPress in rete tua — omnia per unum safem, isolatum environment sandbox.

## Visio

Plugin Builder permittit assistantem IA scribere plugin WordPress customes in respondendi petitionibus linguae naturalis. Plugin generati sunt validi, conservati et activati intra layer sandbox antequam affectant aliquam functionem siti vivo.

Casus utilizandi includunt:

- Generare plugin utilitatis levis sine involucro developer.
- Prototyping (prototipum) proprietatum quae hook WordPress vel custom post types requirunt.
- Creare scripta automationis breves temporis ad operationes in serie.

## Generatio Pluginis per IA

Ad generationem pluginis, aperi interface chat Gratis AI Agent et descris what necesse. Pro exemplum:

> "Crea plugin qui notam admin customem in dashboard addit."

IA facsit:

1. Producere codicem PHP pluginis usque ad structuram generationis codicis.
2. Validare output pro erroribus sintaxis et patternibus insegne.
3. Conservare plugin generatum in deposito sandbox.
4. Redire confirmationem cum slug pluginis et boton **Activate in Sandbox**.

Resultatum potes refinari sequens in eadem thread conversationis antequam activare.

## Activatio Sandbox

Activatio pluginis generati in sandbox est distincta a activation in rete vivo. Sandbox:

- Plugin in environment WordPress isolato (wp-env) executat.
- Omnia errores PHP, warnings vel conflictus hook captat.
- Resultatum activationis redit in interface chat.

Ad activandam pluginum in sandbox, clica in boton **Activate in Sandbox** in responso chat IA, aut usa commandum slash:

/activate-plugin <plugin-slug>
```

Un message status te confirmat whether activatio successus est aut fallax. In casu fallacis, log error in thread chat exibitur.

## Administrare Plugin Generati

Plugin generati sunt in **Gratis AI Agent → Plugin Builder → Manage Plugins**. De hoc scriputo puedes:

| Actio | Descripcio |
|---|---|
| **View source** | Revidere codem PHP completem plugin. |
| **Re-activate in sandbox** | Redirectionem test activation sandbox. |
| **Install on network** | Deplomentum plugin in network activam (requirit confirmation manuali). |
| **Update** | Novi versionem via AI dare, codem existenti remplaens. |
| **Delete** | Plugin a stoc sandbox remove. Deactivat it omni sitis primum. |

:::warning
**Install on network** deploment plugin generatum in multisite WordPress activam tuam. Revidere codem plugin ante procedendum. Gratis AI Agent te pete confirmationem ante completum instalationem live.
:::

## Installare Plugin Generatum in Network

Cum satis est cum plugin in sandbox, puedes installare in network live:

1. Ibi ad **Gratis AI Agent → Plugin Builder → Manage Plugins** ire.
2. Facere clic in **Install on Network** apud plugin quod deplomenti vis.
3. Confirmare dialogum. Plugin in `wp-content/plugins/` et activat in network installatur.

Alternativ, usa command slash in interface chat:

```
/install-plugin <plugin-slug>
```

## Actualizatio Plugin

Ad actualizandum plugin generatum, descrie mutandum AI assistant in conversation novo:

> "Actualiza plugin dashboard-notice ut ostruam solum ad administratorum ostruam."

AI version novam generat, quae in sandbox cum versione currenti apparit. Diff revideris et confirmare ante quod actualizatio applicatur.

## Integrare HookScanner

El Plugin Builder utitur **HookScanner** integratum ad analysin hook et filter quos quicumque plugin generat. Output HookScanner ostenditur in responso chatu et includit:

- Action hooks registrati (`add_action` vocatio).
- Filter hooks registrati (`add_filter` vocatio).
- Quaeque hooks in dependenti plugin (directory `vendor/` et `node_modules/` ignoris sunt).

Hoc te ad comprehensionem comportamento pluginis antequam uti possimis adiuvat.

## Consideratio de Securitate

- Plugin generati separati sunt ab pluginibus manualiter installatis et non sunt accessibilia per screen gestionis pluginium WordPress usque ad hoc ut explicitemente in rete installatis sint.
- Sandbox usum validationem viae ad impedire traversal directorii cum scriptis pluginium.
- Pluginibus cum vocationibus functionis periculosis (e.g., `eval`, `exec`, `system`) flagri sunt durante validationem et non activabuntur.
