---
title: مفت اے آئی ایجنٹ سیٹنگز
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Gratis AI Agent کی سیٹنگز

Gratis AI Agent میں **Settings → Advanced** سکرین ایڈمنسٹریٹر لیول کی کنفیگریشن فراہم کرتی ہے جو v1.5.0 میں شامل کی گئی تھی۔ یہ پیج **Feedback Endpoint** کے فیلڈز اور ان کے مطلوبہ فارمیٹ کی تفصیلات فراہم کرتا ہے۔

## سیٹنگز تک رسائی

1. WordPress admin میں، **Gratis AI Agent → Settings** پر جائیں۔
2. **Advanced** ٹیب پر کلک کریں۔

## Feedback Endpoint کی کنفیگریشن

یہ فیڈبیک اینڈ پوائنٹ (feedback endpoint) AI agent کو POST requests وصول کرتا ہے جب بھی کوئی صارف تھمز-ڈاؤن بٹن، آٹو-پراپٹ بینر، یا `/report-issue` کمانڈ کے ذریعے فیڈبیک جمع کراتا ہے۔

| Field | Description |
|---|---|
| **Feedback Endpoint URL** | وہ URL جو JSON body کے ساتھ HTTP POST requests کے ذریعے فیڈبیک جمع کرواتا ہے۔ |
| **Feedback API Key** | یہ ایک Bearer token ہے جو ہر فیڈبیک request کے `Authorization` header میں بھیجا جاتا ہے۔ اگر آپ کے اینڈ پوائنٹ کو Authentication کی ضرورت نہیں ہے تو اسے خالی چھوڑ دیں۔ |

### مطلوبہ JSON Payload

آپ کے فیڈبیک اینڈ پوائنٹ کو کم از کم درج ذیل فیلڈز کے ساتھ ایک JSON body قبول کرنا چاہیے۔:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

گفتگو کے سیاق و سباق (conversation context) کے لحاظ سے payload میں اضافی فیلڈز موجود ہو سکتے ہیں۔

### `triage_category` کی ویلیوز

AI triage layer payload کو آگے بھیجنے سے پہلے `triage_category` کو درج ذیل میں سے کوئی ایک ویلیو تفویض کرتا ہے:

| Value | Meaning |
|---|---|
| `factual_error` | اسسٹنٹ نے غلط حقائق پر مبنی معلومات فراہم کی ہے۔ |
| `unhelpful_answer` | جواب تکنیکی طور پر درست تھا لیکن کارآمد نہیں تھا۔ |
| `inappropriate_content` | جواب میں ایسا مواد شامل تھا جو صارفین کو نہیں دکھایا جانا چاہیے۔ |
| `other` | فیڈبیک کسی معلوم کیٹیگری سے مطابقت نہیں رکھتا۔ |

### Authentication

اگر آپ کے اینڈ پوائنٹ کو Authentication کی ضرورت ہے، تو **Feedback API Key** فیلڈ میں اپنا Bearer token سیٹ کریں۔ agent یہ بھیجے گا:

```
Authorization: Bearer <your-api-key>
```

اگر **Feedback API Key** فیلڈ خالی ہے، تو کوئی `Authorization` header نہیں بھیجا جائے گا۔

### فیڈبیک جمع کرنا بند کرنا (Disabling Feedback Collection)

**Feedback Endpoint URL** اور **Feedback API Key** دونوں فیلڈز کو خالی چھوڑ دیں۔ تھمز-ڈاؤن بٹن اور فیڈبیک UI صارفین کے لیے نظر آتے رہیں گے، لیکن جمع کرائے گئے ڈیٹا کو کسی بیرونی سروس پر بھیجا نہیں جائے گا۔

## Brave Search API Key

**Advanced** ٹیب پر، **Brave Search API Key** فیلڈ [Internet Search](../configuration/internet-search) کی صلاحیت کو فعال کرتا ہے۔

| Field | Description |
|---|---|
| **Brave Search API Key** | Brave Search developer dashboard سے آپ کی API key۔ AI assistant میں انٹرنیٹ سرچ کو فعال کرنے کے لیے ضروری ہے۔ |

اس فیلڈ کے لیبل میں Brave Search API کے sign-up پیج کا کلک کرنے والا لنک شامل ہے۔ انٹرنیٹ سرچ کو غیر فعال کرنے کے لیے اسے خالی چھوڑ دیں۔

اس فیچر پر end-user کی دستاویزات کے لیے [Internet Search](../configuration/internet-search) دیکھیں۔

## Feature Flags

v1.9.0 میں بھی متعارف کرایا گیا، **Settings → Feature Flags** ٹیب اختیاری فنکشنلٹی کے لیے ٹوگل سوئچ فراہم کرتا ہے۔ ہر flag یا تو network-wide فعال ہوتا ہے یا غیر فعال؛ اس وقت کوئی per-site override موجود نہیں ہے۔

### Feature Flags تک رسائی

1. WordPress admin میں، **Gratis AI Agent → Settings** پر جائیں۔
2. **Feature Flags** ٹیب پر کلک کریں۔

### Access Control Flags

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | جب یہ فعال ہوتا ہے، تو صرف `administrator` رول والے صارفین ہی AI Agent chat panel کھول سکتے ہیں۔ دیگر تمام رولز کو اس کے بجائے "Contact your administrator" کا پیغام نظر آئے گا۔ |
| **Restrict to Network Admins** | Off | جب یہ ایک multisite network پر فعال ہوتا ہے، تو صرف Super Admins ایجنٹ استعمال کر سکتے ہیں۔ انفرادی سائٹ ایڈمن بلاک ہو جاتے ہیں۔ اگر دونوں فعال ہوں تو یہ "Restrict to Administrators" پر ترجیح لے گا۔ |
| **Allow Subscriber Access** | Off | جب یہ فعال ہوتا ہے، تو `subscriber` رول والے صارفین چیٹ انٹرفیس استعمال کر سکتے ہیں لیکن وہ صرف پڑھنے کی صلاحیت (read-only abilities) تک محدود ہوں گے (کوئی پوسٹ بنانا یا سیٹنگز تبدیل کرنا نہیں)۔ |
| **Disable for Non-Members** | Off | Ultimate Multisite membership status کے ساتھ مربوط ہے۔ جب یہ فعال ہوتا ہے، تو ان سائٹس کے لیے چیٹ چھپ جاتی ہے جن کی کوئی فعال membership نہیں ہے۔ |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | چیٹ ویجٹ کے نچلے حصے میں دکھائی دینے والی برانڈنگ کی تفصیل کو ہٹا دیتا ہے۔ White-label deployments کے لیے تجویز کردہ۔ |
| **Custom Agent Name** | *(blank)* | چیٹ ہیڈر اور ایڈمن مینیو میں ڈیفالٹ "Gratis AI Agent" لیبل کو آپ کے اپنے پروڈکٹ کے نام سے بدل دیتا ہے۔ ڈیفالٹ استعمال کرنے کے لیے اسے خالی چھوڑ دیں۔ |
| **Hide Agent Picker** | Off | جب یہ فعال ہوتا ہے، تو صارفین پانچ بلٹ-ان ایجنٹس کے درمیان سوئچ نہیں کر سکتے۔ موجودہ ایجنٹ کو Settings → General میں جو ڈیفالٹ کے طور پر configure کیا گیا ہے، اسی پر مقرر کر دیا جاتا ہے۔ |
| **Use Site Icon as Chat Avatar** | Off | چیٹ ویجٹ ہیڈر میں ڈیفالٹ AI آئیکن کو WordPress سائٹ آئیکن (Appearance → Customize → Site Identity کے تحت سیٹ کیا گیا) سے بدل دیتا ہے۔ |

### تبدیلیاں لاگو کرنا

کسی بھی flag کو ٹوگل کرنے کے بعد **Save Settings** پر کلک کریں۔ تبدیلیاں فوری طور پر عمل میں آ جاتی ہیں — کسی cache flush یا plugin reactivation کی ضرورت نہیں ہے۔
