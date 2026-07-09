---
title: Buldair Phlagnan agus Sandbòt
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 le sgrann **Plugin Builder & Sandbox System**, a tha le le AI assistant e' sgoine a genaradh, a chlàradh, agus a' leidheachadh WordPress plugins ar eich sianal — a' leidheachadh a' cridheach, a' leidheachadh, agus a' leidheachadh an t-sianblàth (sandbox) a tha safe agus sealltainneachd.

## Aims {#overview}

Le Plugin Builder a' le AI assistant a' leidheachadh WordPress plugins ùr gu sònraichte a' leidheachadh a' leidheachadh a' leidheachadh ar cridhean luath. Tha na plugins a genaradh a' chlàradh, a' leidheachadh, agus a' leidheachadh san leidheachadh (sandbox) air a bhith a' leidheachadh gu bheil sinn a' chlàradh a' leidheachadh a' leidheachadh an t-sianblàth a tha.

Tha eigean a tha:

- A' leidheachadh plugins uileachdach (utility) gu leathanach gu fadaich a' leidheachadh de developer.
- A' chlàradh feàrrach (prototyping) de fìrinn a tha a' leidheachadh WordPress hooks no custom post types a' leidheachadh.
- A' leidheachadh scripte automation gu leathanach airson obair a' leidheachadh (batch operations).

## A' leidheachadh plugin gu AI {#generating-a-plugin-via-ai}

Tha eigean plugin a genaradh, le ghnìomh an t-sianblàth (sandbox) a tha a' leidheachadh air a chlàradh chat Gratis AI Agent agus a' leidheachadh gu sònraichte. Mar eisimpleir:

> "Creu plugin a leidheachadh notice admin ùr gu sònraichte ar dashboard."

Tha an AI a' leidheachadh:

1. A' leidheachadh code PHP air a leidheachadh code a' leidheachadh gu sònraichte.
2. A' chlàradh an t-sgrannach airson earrachdan syntax agus patternan a tha a' leidheachadh.
3. A' leidheachadh plugin a genaradh air an stoc (store) an t-sianblàth.
4. A' leidheachadh fhaighinn a' chlàradh le slug an plugin agus nútinn a' leidheachadh **Activate in Sandbox**.

Is eigean an t-sgrannach gu sònraichte a' leidheachadh a' leidheachadh a' leidheachadh air a leidheachadh a' leidheachadh a' leidheachadh a' leidheachadh a' leidheachadh a' leidheachadh a' leidheachadh.

## A' leidheachadh an t-sianblàth (Sandbox Activation) {#sandbox-activation}

A' leidheachadh plugin a genaradh san t-sianblàth tha fadaich air a leidheachadh a' leidheachadh a' leidheachadh a' leidheachadh a' leidheachadh a' leidheachadh ar an sianal luath. Tha an t-sianblàth:

- A' leidheachadh plugin san leidheachadh WordPress a tha sealltainneachd (wp-env).
- A' chlàradh earrachdan PHP, warnings, no hook conflicts gu sònraichte.
- A' leidheachadh an t-sgrannach a' leidheachadh air an sianal chat.

A' leidheachadh plugin san t-sianblàth, nútinn a' leidheachadh **Activate in Sandbox** ar an chlàradh chat AI, no aiguseach a' leidheachadh:

```gd
/activate-plugin <plugin-slug>
```

Se roinn a mhaighm airson a bhith agad air aithreachadh (activation) an plugin. Bidh meilinn còmhlaidh a stadf nan thaithedh (succeeded) no tha failte (failed). Mar a tha e failte, bidh log an t-earrachda (error log) a' chluaintean (chat thread) a' sgaidh.

## Am Paisachadh Plugin Aon Bhaighinn {#managing-generated-plugins}

Bidh pluginhean a bha agad air a bheach (generated plugins) a' sgaidh anns **Gratis AI Agent → Plugin Builder → Manage Plugins**. Frmuir seo leat eadar:

| Aithreach | Aon Bheagairt |
|---|---|
| **View source** | A' chluarach an code PHP den plugin gu latha. |
| **Re-activate in sandbox** | A' riinn aithreachadh (activation check) an sandbox. |
| **Install on network** | A' sgaidh an plugin air an t-seòl (live network) (a tha thuig a' chluarach). |
| **Update** | A' sgaidh cur fhaighinn ùr a tha thuig gu AI, a' leadh a code a tha ag obair. |
| **Delete** | A' tòisich an plugin air an storadh sandbox. Bidh e a' chluarach air a' seòl (sites) uile amair. |

:::warning
**Install on network** a sgaidh an plugin a bha agad air a bheach air an WordPress multisite agad. A' chluarach an code den plugin gu leith air a' dèanamh. Bidh Gratis AI Agent a' tòisich do chluarach air a bhith agad air a dhèanamh air a tha a' seòl (live install).
:::

## Am Paisachadh Plugin Aon Bhaighinn Air An Seòl {#installing-a-generated-plugin-on-the-network}

Nuair a tha thuig agad air an plugin a bha air a bheach anns an sandbox, leat e a sgaidh air an t-seòl:

1. Comas **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Clic air **Install on Network** a' chùl air an plugin a tha thuig a sgaidh.
3. A' chluarach an dialog. Bidh an plugin a' sgaidh air `wp-content/plugins/` agus a' seòl (network) a' chluarach.

Mar eòlas, guth an amair (slash command) anns an fhaighinn chat:

```
/install-plugin <plugin-slug>
```

## Am Paisachadh Pluginan {#plugin-updates}

 airson plugin a bha air a bheach a sgaidh, bidh thuig a' chluarach an cinnidh a' chùl air AI assistant anns an t-seann (new conversation):

> "Update the dashboard-notice plugin to only show the notice to administrators."

Bidh AI a' sgaidh cur fhaighinn ùr, a tha ag obair anns an sandbox a' chluarach air an sinne. Bidh thuig a' chluarach an diff agus a' chluarach air a bhith agad air a dhèanamh air an t-update.
```

## HookScanner Integration

A Plugin Builder aisthe **HookScanner** a' chluainn airson a' chluainn a tha a' leughadh agus a' faighinn (analyse) na hooks agus na filters a tha a' leughadh de chluainn a tha a' leughadh. Bhaidh an t-uisge HookScanner a' sgrùdadh anns an t-uisge chat agus beir a' chluainn:

- Hooks a' leughadh (calls `add_action`).
- Hooks filters a' leughadh (calls `add_filter`).
- Cùrsain a' fhadh a' leughadh anns na chluainn a tha a' leughadh (a thèid an t-dirictean `vendor/` agus `node_modules/`).

Tha seo a' toirt do cheannach a bhith a' faighinn de dhìreach a' chluainn a tha a' leughadh a dimint a' chluainn a tha a' leughadh.

## Security Considerations

- Tha na chluainn a tha a' leughadh a' sgrùdhadh air a' leughadh a' chluainn a tha a' leughadh agus tha a' leughadh gu fhaighinn an t-dirictean WordPress plugin management screen gu sònraichte a bhith a' leughadh na chluainn air an t-seòl.
- Tha an sandbox a' faighinn de dhìreachair (path validation) airson a' chluainn a tha a' leughadh a' leughadh dirictean gu sònraichte nuair a tha a' leughadh na fialtaiche chluainn.
- Tha na chluainn a tha a' leughadh a' leughadh fialtaiche a' leughadh (e.g., `eval`, `exec`, `system`) a' sgrùdhadh anns an t-dirictean agus chan eil iad a' leughadh.
