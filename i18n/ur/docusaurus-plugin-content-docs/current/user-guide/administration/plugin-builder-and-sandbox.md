---
title: پلاگ ان بلڈر اور سینڈ باکس
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 میں **Plugin Builder & Sandbox System** متعارف کرایا گیا ہے، جو AI assistant کو آپ کے network پر WordPress plugins بنانے، activate کرنے، اور manage کرنے کی سہولت دیتا ہے — یہ سب ایک محفوظ، الگ تھلگ (isolated) sandbox environment کے ذریعے ہوتا ہے۔

## Overview {#overview}

Plugin Builder AI assistant کو natural language requests کے جواب میں custom WordPress plugins لکھنے کے قابل بناتا ہے۔ جو plugins generate ہوتے ہیں، انہیں live site functionality پر اثر انداز ہونے سے پہلے ایک sandbox layer کے اندر validate کیا جاتا ہے، store کیا جاتا ہے، اور activate کیا جاتا ہے۔

اس کے استعمال کے کچھ طریقے یہ ہیں:

- بغیر developer کی مداخلت کے ہلکے پھلکے utility plugins بنانا۔
- ایسی خصوصیات (features) کا prototype بنانا جن کے لیے WordPress hooks یا custom post types کی ضرورت ہو۔
- batch operations کے لیے مختصر مدت کے automation scripts بنانا۔

## AI کے ذریعے Plugin generate کرنا {#generating-a-plugin-via-ai}

ایک plugin generate کرنے کے لیے، Gratis AI Agent کی chat interface کھولیں اور تفصیل بتائیں کہ آپ کو کیا چاہیے۔ مثال کے طور پر:

> "ایک plugin بنائیں جو dashboard پر ایک custom admin notice شامل کرے۔"

AI یہ کام کرے گا:

1. structured code generation کا استعمال کرتے ہوئے plugin کا PHP code تیار کرے گا۔
2. syntax errors اور unsafe patterns کے لیے output کو validate کرے گا۔
3. generate کیے گئے plugin کو sandbox store میں save کرے گا۔
4. plugin slug کے ساتھ ایک تصدیقی پیغام (confirmation) اور ایک **Activate in Sandbox** بٹن واپس کرے گا۔

activate کرنے سے پہلے آپ اسی conversation thread میں follow up کر کے result کو بہتر بنا سکتے ہیں۔

## Sandbox Activation {#sandbox-activation}

sandbox میں generate کیے گئے plugin کو activate کرنا، اسے live network پر activate کرنے سے مختلف ہے۔ sandbox:

- plugin کو ایک الگ تھلگ WordPress environment (wp-env) میں run کرتا ہے۔
- کسی بھی PHP errors، warnings، یا hook conflicts کو capture کرتا ہے۔
- activation ka result chat interface میں واپس رپورٹ کرتا ہے۔

sandbox میں plugin activate کرنے کے لیے، AI chat response میں موجود **Activate in Sandbox** بٹن پر کلک کریں، یا slash command استعمال کریں:

```
/activate-plugin <plugin-slug>
```

ایک status message تصدیق کرتا ہے کہ activation کامیاب ہوا یا ناکام۔ ناکامی کی صورت میں، error log chat thread میں دکھایا جاتا ہے۔

## Generated Plugins کو Manage کرنا {#managing-generated-plugins}

Generate کیے گئے plugins **Gratis AI Agent → Plugin Builder → Manage Plugins** میں درج ہوتے ہیں۔ اس screen سے آپ یہ کام کر سکتے ہیں:

| Action | Description |
|---|---|
| **View source** | مکمل plugin PHP code کا جائزہ لیں۔ |
| **Re-activate in sandbox** | sandbox activation check کو دوبارہ run کریں۔ |
| **Install on network** | plugin کو live network پر deploy کریں (manual confirmation درکار ہے)۔ |
| **Update** | AI کے ذریعے نیا version فراہم کریں، جو موجودہ code کو replace کر دے گا۔ |
| **Delete** | plugin کو sandbox store سے ہٹا دیں۔ پہلے تمام sites سے de-activate کر دے گا۔ |

:::warning
**Install on network** آپ کے live WordPress multisite پر generate کیے گئے plugin کو deploy کرتا ہے۔ آگے بڑھنے سے پہلے plugin code کا جائزہ ضرور لیں۔ Gratis AI Agent live install مکمل کرنے سے پہلے confirmation کے لیے پوچھے گا۔
:::

## Network پر Generated Plugin Install کرنا {#installing-a-generated-plugin-on-the-network}

جب آپ ایک sandboxed plugin سے مطمئن ہو جائیں، تو آپ اسے live network پر install کر سکتے ہیں:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** پر جائیں۔
2. اس plugin کے ساتھ **Install on Network** پر کلک کریں جسے آپ deploy کرنا چاہتے ہیں۔
3. dialog کی تصدیق کریں۔ plugin `wp-content/plugins/` میں install ہو جاتا ہے اور network-activated ہو جاتا ہے۔

یا، chat interface میں slash command استعمال کریں:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

ایک generate کیے گئے plugin کو update کرنے کے لیے، AI assistant کو ایک نئے conversation میں تبدیلی کی تفصیل بتائیں:

> "dashboard-notice plugin کو update کریں تاکہ notice صرف administrators کو نظر آئے۔"

AI ایک نیا version generate کرتا ہے، جو موجودہ version کے ساتھ sandbox میں ظاہر ہوتا ہے۔ آپ diff کا جائزہ لیتے ہیں اور update apply ہونے سے پہلے تصدیق کرتے ہیں۔

## HookScanner Integration {#hookscanner-integration}

Plugin Builder ہر generate کیے گئے plugin کے register کیے گئے hooks اور filters کا تجزیہ کرنے کے لیے ایک integrated **HookScanner** استعمال کرتا ہے۔ HookScanner کا output chat response میں دکھایا جاتا ہے اور اس میں شامل ہیں:

- Action hooks جو register ہوئے ہیں (`add_action` calls)۔
- Filter hooks جو register ہوئے ہیں (`add_filter` calls)۔
- plugin dependencies میں ملنے والے کوئی بھی hooks (یہ `vendor/` اور `node_modules/` directories کو skip کرتا ہے)۔

یہ آپ کو plugin کو activate کرنے سے پہلے اس کے behaviour کو سمجھنے میں مدد کرتا ہے۔

## Security Considerations {#security-considerations}

- Generate کیے گئے plugins کو manually install کیے گئے plugins سے الگ جگہ پر store کیا جاتا ہے اور جب تک آپ انہیں explicitly network پر install نہیں کرتے، تب تک وہ standard WordPress plugin management screen سے قابل رسائی نہیں ہوتے۔
- sandbox plugin files لکھنے کے وقت directory traversal کو روکنے کے لیے path validation استعمال کرتا ہے۔
- خطرناک function calls (جیسے `eval`, `exec`, `system`) والے plugins کو validation کے دوران flag کیا جاتا ہے اور انہیں activate نہیں کیا جا سکے گا۔
