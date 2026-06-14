---
title: Mawu ya Plugin & Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 imafotera **Plugin Builder & Sandbox System**, imefotera kuti AI assistant ikwoneke (generate), ikawirira (activate), ndikuyendera (manage) WordPress plugins pa network yanu — zonse m'moyo wopangidwa, wosakhulupirika (safe), mu sandbox environment.

## Overview

Plugin Builder imefotera kuti AI assistant ikwoneke kupanga custom WordPress plugins m'moyo wopangidwa poyenera zolemba za chifukwa cha kukhulupirira (natural language requests). Plugins zomwe zimapangidwa zimapangidwa, zimaperekedwa (stored), ndikuyendera (activated) mu sandbox layer monga momwe zimapereka m'moyo wopangidwa.

Zomwe zimapangidwa ndi:

- Kupanga plugins zosavomerezeka (lightweight utility plugins) osati ndi onse m'moyo wa developer.
- Kukhudza (prototyping) zolemba zomwe zimafuna WordPress hooks kapena custom post types.
- Kupanga scripts za automation zomwe zimapereka kwa kusintha (batch operations).

## Generating a Plugin via AI

Kupanga plugin, ndikuyenera (open) chat interface ya Gratis AI Agent ndikufotera zomwe mukuwoneka. Mwachitsanzo:

> "Create a plugin that adds a custom admin notice on the dashboard."

AI imapangidwa kuti:

1. Yopanga code ya PHP ya plugin monga momwe imapangidwa ndi structured code generation.
2. Yowonjeza (validate) zofotokozera za syntax errors ndi patterns zomwe si zosavomerezeka (unsafe patterns).
3. Yoperekera (save) plugin yopangidwa ku sandbox store.
4. Yopereka chitsanzo cha kuyendera (confirmation) ndi slug ya plugin ndikubwera button ya **Activate in Sandbox**.

Mungathe kukhudza zinthu zomwe zimapangidwa m'moyo wosiyanasiyana poyenera kupita pa conversation thread mopambana poyendera.

## Sandbox Activation

Kuyendera (activating) plugin yopangidwa mu sandbox si momwe imefotera kuyendera pa network yomwe ikulimbikira (live network). Sandbox imapereka:

- Yopanga plugin m'moyo wopangidwa (isolated WordPress environment) (wp-env).
- Yowonjeza zolemba za PHP, warnings, kapena hook conflicts.
- Yoperekera zofotokozera za kuyendera mu chat interface.

Kuyendera plugin mu sandbox, ndikubwera button ya **Activate in Sandbox** m'moyo wa AI response, kapena kumakwera slash command:

/activate-plugin <plugin-slug>

Mawu nkhani wamwamba kuti kukhala m'moyo kapena kulandira. Mukati m'moyo, log ya chidziwika (error log) ulipangulira mu chat thread.

## Kufanana ndi Plugins Zomaliza

Plugins zomwe zimapangidwa zimapereka m'**Gratis AI Agent → Plugin Builder → Manage Plugins**. Kuchokera kwa skriniyi imeneyi, muli ndi ulemu wosonyeza:

| Action | Mwayi |
|---|---|
| **View source** | Kufuna kuona kodi ya PHP ya plugin yomwe yomwe. |
| **Re-activate in sandbox** | Kukhazikitsa pano m'sandbox kuti muwoneze kufufuza kuperekera. |
| **Install on network** | Kupereka plugin kwa wamwamba wanu (kufuna kukhala ndi kuyankha kwa munthu). |
| **Update** | Kupereka chinthu chathu chathu chathu kwa AI, kuti yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe yomwe

## HookScanner Integration

Plugin Builder imayita **HookScanner** yomwezi kuti akuthandizira kudzidza hooks ndi filters zomwe zikuyenera ndi plugin yomwe imapangidwa. Zomwe HookScanner idzakhala ndi zikuyenera zikuphedwa m'chat response ndipo zimapereka:

- Action hooks zomwe zikuyenera (calls za `add_action`).
- Filter hooks zomwe zikuyenera (calls za `add_filter`).
- Zomwe zikuphedwa m'plugin dependencies (imayamba kupeza ndalama zokhudzana ndi `vendor/` ndi `node_modules/` directories).

Izi zimapangidwa kuti muwone kuti plugin imapereka bwanji poyenera kuyesa.

## Security Considerations

- Plugins zomwe zimapangidwa zimapereka m'malo wosakhulupirika ndi plugins zomwe mumapereka m'malo, ndipo simapereka kupathandizidwa m'standard WordPress plugin management screen mpaka muli woyenera kuyesa m'malo wanu.
- Sandbox imapereka zokhudzana ndi directory kuti muchezi kudzera m'directory pamene mukuwerenga files za plugin.
- Plugins zomwe zimapereka functions zosakhulupirika (mwachitsanzo, `eval`, `exec`, `system`) zimapereka m'validation ndipo zimapereka kuyesa.
