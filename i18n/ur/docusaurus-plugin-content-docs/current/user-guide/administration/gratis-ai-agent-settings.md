---
title: Gratis AI Agent ترتیبات
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Gratis AI Agent کی ترتیبات {#gratis-ai-agent-settings}

Gratis AI Agent میں **ترتیبات → اعلیٰ** اسکرین بیک اینڈ انٹیگریشنز کے لیے منتظم سطح کی تشکیل فراہم کرتی ہے۔ یہ صفحہ فیڈبیک فارورڈنگ، تلاش فراہم کنندہ keys، منظم Superdav سروس سیٹ اپ، Google Calendar کنٹرولز، TextBee SMS ترتیبات، اور پورے نیٹ ورک کے feature flags کو دستاویزی شکل دیتا ہے۔

## ترتیبات تک رسائی {#accessing-settings}

1. WordPress ایڈمن میں، **Gratis AI Agent → ترتیبات** پر جائیں۔
2. **اعلیٰ** ٹیب پر کلک کریں۔

## فیڈبیک endpoint کی تشکیل {#feedback-endpoint-configuration}

فیڈبیک endpoint AI agent سے POST درخواستیں وصول کرتا ہے جب بھی کوئی صارف thumbs-down بٹن، auto-prompt بینر، یا `/report-issue` کمانڈ کے ذریعے فیڈبیک جمع کراتا ہے۔

| فیلڈ | تفصیل |
|---|---|
| **فیڈبیک endpoint URL** | وہ URL جو JSON باڈی کے ساتھ HTTP POST درخواستوں کے طور پر فیڈبیک جمع کرانے کی درخواستیں وصول کرتا ہے۔ |
| **Feedback API Key** | ہر فیڈبیک درخواست کے `Authorization` header میں بھیجا گیا bearer token۔ اگر آپ کے endpoint کو توثیق درکار نہیں تو خالی چھوڑ دیں۔ |

### متوقع JSON Payload {#expected-json-payload}

آپ کے فیڈبیک endpoint کو کم از کم درج ذیل فیلڈز کے ساتھ JSON باڈی قبول کرنی چاہیے:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

گفتگو کے سیاق و سباق کے مطابق payload میں اضافی فیلڈز موجود ہو سکتی ہیں۔

### `triage_category` اقدار {#triagecategory-values}

AI triage layer payload فارورڈ کرنے سے پہلے `triage_category` کو درج ذیل اقدار میں سے ایک تفویض کرتی ہے:

| قدر | مطلب |
|---|---|
| `factual_error` | اسسٹنٹ نے غلط حقائق پر مبنی معلومات فراہم کیں۔ |
| `unhelpful_answer` | جواب تکنیکی طور پر درست تھا لیکن مفید نہیں تھا۔ |
| `inappropriate_content` | جواب میں ایسا مواد شامل تھا جو صارفین کو نہیں دکھایا جانا چاہیے۔ |
| `other` | فیڈبیک کسی معروف زمرے سے مطابقت نہیں رکھتا تھا۔ |

### توثیق {#authentication}

اگر آپ کے endpoint کو توثیق درکار ہے تو **Feedback API Key** فیلڈ کو اپنے bearer token پر سیٹ کریں۔ agent بھیجتا ہے:

```
Authorization: Bearer <your-api-key>
```

اگر **Feedback API Key** فیلڈ خالی ہے تو کوئی `Authorization` header نہیں بھیجا جاتا۔

### فیڈبیک جمع کرنا غیر فعال کرنا {#disabling-feedback-collection}

**فیڈبیک endpoint URL** اور **Feedback API Key** دونوں فیلڈز خالی چھوڑ دیں۔ thumbs-down بٹن اور فیڈبیک UI صارفین کے لیے نظر آتے رہتے ہیں، لیکن جمع کرائی گئی چیزیں کسی بیرونی سروس کو فارورڈ نہیں کی جاتیں۔

## Brave Search API Key {#brave-search-api-key}

**اعلیٰ** ٹیب پر ہی، **Brave Search API Key** فیلڈ [انٹرنیٹ تلاش](../configuration/internet-search) کی صلاحیت فعال کرتی ہے۔

| فیلڈ | تفصیل |
|---|---|
| **Brave Search API Key** | Brave Search ڈویلپر dashboard سے آپ کی API key۔ AI assistant میں انٹرنیٹ تلاش فعال کرنے کے لیے درکار ہے۔ |

فیلڈ لیبل میں Brave Search API سائن اپ صفحے کا قابل کلک لنک شامل ہے۔ انٹرنیٹ تلاش غیر فعال کرنے کے لیے خالی چھوڑ دیں۔

اس خصوصیت پر آخری صارف کی دستاویزات کے لیے [انٹرنیٹ تلاش](../configuration/internet-search) دیکھیں۔

## منظم Superdav سروس {#managed-superdav-service}

Superdav AI Agent v1.18.0 معاونت یافتہ سائٹس کے لیے منظم Superdav سروس endpoints اور خودکار connection provisioning شامل کرتا ہے۔ یہ کنٹرولز اس وقت استعمال کریں جب آپ کی سائٹ کو دستی طور پر تشکیل دیے گئے service endpoint کے بجائے hosted provider سے connect ہونا چاہیے۔

| فیلڈ | تفصیل |
|---|---|
| **منظم Superdav سروس** | معاونت یافتہ سائٹس کے لیے hosted Superdav service connection فعال کرتی ہے۔ |
| **Connection مہیا کریں** | خودکار endpoint اور اسناد provisioning شروع کرتا ہے۔ سائٹ کے managed provider استعمال کرنے کی تصدیق کے بعد اسے استعمال کریں۔ |
| **Service Endpoint / Connection Status** | provisioning کے بعد موجودہ endpoint یا connection حالت دکھاتا ہے۔ |

provisioning کے بعد، ترتیبات محفوظ کریں اور managed-service workflows پر انحصار کرنے سے پہلے connection status کی تصدیق کریں۔ اگر provisioning ناکام ہو جائے تو دکھائی گئی retry رہنمائی کا جائزہ لیں اور تصدیق کریں کہ سائٹ کو hosted provider استعمال کرنے کی اجازت ہے۔

## Google Calendar کی تشکیل {#google-calendar-configuration}

جب Superdav AI Agent v1.18.0 calendar خصوصیات فعال ہوتی ہیں، agent تشکیل دیے گئے calendars اور event details پڑھ سکتا ہے۔ calendar tools پڑھنے پر مرکوز ہیں اور schedule-aware reminders، attendee follow-up، اور contact matching کے لیے مفید ہیں۔

| فیلڈ | تفصیل |
|---|---|
| **Google Calendar اسناد** | calendar data پڑھنے کے لیے درکار اسناد یا token connection محفوظ کرتا ہے۔ |
| **Calendar انتخاب** | محدود کرتا ہے کہ agent کون سے تشکیل دیے گئے calendars کا معائنہ کر سکتا ہے۔ |
| **Calendar Connection Status** | تصدیق کرتا ہے کہ آیا موجودہ اسناد calendars اور events پڑھ سکتی ہیں۔ |

calendar اسناد کو صرف ان calendars تک محدود رکھیں جن کی agent کو ضرورت ہے۔ اگر status expired token کی نشاندہی کرے تو اسناد کو دوبارہ connect یا rotate کریں۔

## TextBee SMS اطلاعات {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 تشکیل دیے گئے notification workflows کے لیے TextBee کو SMS provider کے طور پر شامل کرتا ہے۔ حساس یا صارفین کو دکھائے جانے والے پیغامات کے لیے SMS notifications کو انسانی approval gates کے ساتھ جوڑا جانا چاہیے۔

| فیلڈ | تفصیل |
|---|---|
| **TextBee API Key** | TextBee SMS provider کو درخواستوں کی توثیق کرتا ہے۔ |
| **TextBee Device / Sender** | جب provider کے لیے درکار ہو، outgoing messages کے لیے استعمال ہونے والا TextBee sender یا device منتخب کرتا ہے۔ |
| **SMS Notifications Enabled** | منظور شدہ workflows کو text-message notifications بھیجنے کی اجازت دیتا ہے۔ SMS sends روکنے کے لیے غیر فعال چھوڑ دیں۔ |

test message صرف منتظم کی ملکیت والے نمبر پر بھیجیں، پھر scheduled یا attendee-facing reminders فعال کرنے سے پہلے approval-gate رویے کی تصدیق کریں۔

## Feature Flags {#feature-flags}

v1.9.0 میں بھی متعارف کرایا گیا، **ترتیبات → Feature Flags** ٹیب اختیاری فعالیت کے لیے toggle switches فراہم کرتا ہے۔ ہر flag پورے نیٹ ورک میں یا تو فعال ہوتا ہے یا غیر فعال؛ اس وقت ہر سائٹ کے لیے الگ override موجود نہیں۔

### Feature Flags تک رسائی {#accessing-feature-flags}

1. WordPress ایڈمن میں، **Gratis AI Agent → ترتیبات** پر جائیں۔
2. **Feature Flags** ٹیب پر کلک کریں۔

### Access Control Flags {#access-control-flags}

| فلیگ | ڈیفالٹ | تفصیل |
|---|---|---|
| **منتظمین تک محدود کریں** | بند | فعال ہونے پر، صرف `administrator` کردار والے صارفین AI Agent چیٹ پینل کھول سکتے ہیں۔ باقی تمام کردار اس کے بجائے "اپنے administrator سے رابطہ کریں" پیغام دیکھتے ہیں۔ |
| **Network Admins تک محدود کریں** | بند | multisite نیٹ ورک پر فعال ہونے پر، صرف Super Admins ایجنٹ استعمال کر سکتے ہیں۔ انفرادی سائٹ ایڈمنز کو بلاک کر دیا جاتا ہے۔ اگر دونوں فعال ہوں تو "منتظمین تک محدود کریں" پر ترجیح لیتا ہے۔ |
| **Subscriber رسائی کی اجازت دیں** | بند | فعال ہونے پر، `subscriber` کردار والے صارفین چیٹ انٹرفیس استعمال کر سکتے ہیں لیکن صرف پڑھنے کی صلاحیتوں تک محدود ہوتے ہیں (کوئی پوسٹ تخلیق یا سیٹنگز کی تبدیلی نہیں)۔ |
| **غیر اراکین کے لیے غیر فعال کریں** | بند | Ultimate Multisite رکنیت کی حیثیت کے ساتھ ضم ہوتا ہے۔ فعال ہونے پر، چیٹ اُن سائٹس کے لیے چھپا دی جاتی ہے جن کی فعال رکنیت نہیں ہوتی۔ |

### برانڈنگ فلیگز {#branding-flags}

| فلیگ | ڈیفالٹ | تفصیل |
|---|---|---|
| **"Powered by Gratis AI Agent" فوٹر چھپائیں** | بند | چیٹ ویجٹ کے نیچے دکھائی جانے والی برانڈنگ نسبت کی سطر ہٹا دیتا ہے۔ white-label تعیناتیوں کے لیے تجویز کردہ۔ |
| **حسبِ ضرورت ایجنٹ کا نام** | *(خالی)* | چیٹ ہیڈر اور admin مینو میں ڈیفالٹ "Gratis AI Agent" لیبل کو آپ کے اپنے پروڈکٹ نام سے بدل دیتا ہے۔ ڈیفالٹ استعمال کرنے کے لیے خالی چھوڑیں۔ |
| **ایجنٹ چننے والا چھپائیں** | بند | فعال ہونے پر، صارفین پانچ بلٹ اِن ایجنٹس کے درمیان سوئچ نہیں کر سکتے۔ موجودہ ایجنٹ Settings → General میں ڈیفالٹ کے طور پر کنفیگر کردہ ایجنٹ پر مقرر رہتا ہے۔ |
| **سائٹ آئیکن کو چیٹ اوتار کے طور پر استعمال کریں** | بند | چیٹ ویجٹ ہیڈر میں ڈیفالٹ AI آئیکن کو WordPress سائٹ آئیکن سے بدل دیتا ہے (Appearance → Customize → Site Identity کے تحت سیٹ کیا گیا)۔ |

### آٹومیشن سیفٹی فلیگز {#automation-safety-flags}

Superdav AI Agent v1.18.0 محفوظ تر آٹومیشن رنز کے لیے انسانی منظوری کے گیٹس اور یاددہانی ریکارڈز متعارف کراتا ہے۔ یہ کنٹرولز نصب شدہ پیکیج کے مطابق فیچر فلیگز یا جدید آٹومیشن سیٹنگز میں ظاہر ہو سکتے ہیں۔

| فلیگ | ڈیفالٹ | تفصیل |
|---|---|---|
| **انسانی منظوری درکار ہے** | تجویز کردہ طور پر آن | حساس آٹومیشنز کو اُس وقت تک روکتا ہے جب تک کوئی مجاز صارف مجوزہ کارروائی کا جائزہ لے کر تصدیق نہ کر دے۔ |
| **یاددہانی کی نقل روکنا** | آن | بھیجی گئی یاددہانیوں کو ریکارڈ کرتا ہے تاکہ دوبارہ کوششیں یا شیڈول شدہ رنز ڈپلیکیٹ اطلاعات نہ بھیجیں۔ |
| **کیلنڈر ٹولز فعال کریں** | کنفیگر ہونے تک بند | ایجنٹ کو کنفیگر کردہ Google کیلنڈرز اور ایونٹس پڑھنے کی اجازت دیتا ہے۔ |
| **SMS اطلاعات فعال کریں** | کنفیگر ہونے تک بند | اسناد محفوظ ہونے کے بعد منظور شدہ ورک فلوز کو TextBee SMS اطلاعات بھیجنے کی اجازت دیتا ہے۔ |

### تبدیلیاں لاگو کرنا {#applying-changes}

کوئی بھی فلیگ ٹوگل کرنے کے بعد **سیٹنگز محفوظ کریں** پر کلک کریں۔ تبدیلیاں فوراً مؤثر ہو جاتی ہیں — کوئی cache flush یا plugin دوبارہ فعال کرنا درکار نہیں۔
