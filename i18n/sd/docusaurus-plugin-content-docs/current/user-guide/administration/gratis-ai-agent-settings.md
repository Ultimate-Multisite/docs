---
title: مفتوحی اي اي ايجنت جيٽنگ
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# مفت AI ایجن سیٹنگز

Gratis AI Agent ۾ **Settings → Advanced** سکرین توهان کي v1.5.0 کان شروع ٿيل بيك اينڊ انٽيغريشنز لاءِ ادميني سطح تي ڪيفيڪيشن (configuration) فراهم ڪري ٿو. هي صفحو **Feedback Endpoint** فیلڊز ۽ انهن جي توقع ڪيل فارميٽ جو بيان ڪري ٿو.

## Settings تک رسائي

1. WordPress admin ۾، **Gratis AI Agent → Settings** ڏانهان وڃو.
2. **Advanced** ٽاب تي ڪلڪ ڪريو.

## Feedback Endpoint کانفيڪيشن

Feedback endpoint انهن وقت POST requests وصول ڪري ٿو جڏهن ڪا صارف thumbs-down بٽون، آٽو-پروپمٽ بينر، يا `/report-issue` ڪمان استعمال ڪري feedback ڏيندي.

| فیلڊ | وضاحت |
|---|---|
| **Feedback Endpoint URL** | هي URL آهي جيڪو HTTP POST requests جي صورت ۾ JSON body سان feedback submissions وصول ڪري ٿو. |
| **Feedback API Key** | هي هر feedback request جي `Authorization` header ۾ هڪ bearer token طور ڇلائي ويندي آهي. جيڪڏهن توهان جي endpoint کي تصديق (authentication) جي ضرورت نه هجي ته ان کي خالي رکجو. |

### توقع ڪيل JSON Payload

توهان جي feedback endpoint کي هيٺ ڏنل فیلڊز سان گهٽ ۾ گهاٽ هيٺ ڏنل JSON body قبول ڪرڻو آهي:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

ڳالهه جي سياق (context) جي لحاظ کان payload ۾ اضافي فیلڊز موجود ٿي سگهن ٿا.

### `triage_category` جا قيمت (Values)

AI triage لير هيٺ ڏنل قيمتن مان هڪ کي `triage_category` کي مڪمل ڪرڻ کان اڳ payload کي فارورڊ ڪرڻ کان سواءِ مقرر ڪري ٿو:

| قيمت | مطلب |
|---|---|
| `factual_error` | اسستاوني طرفان غلط واقعي معلومات ڏني. |
| `unhelpful_answer` | جواب تقني طور صحيح هو پر مددگار نه هو. |
| `inappropriate_content` | جواب ۾ هيٺ ڏنل مواد شامل هو جو صارف کي ڏيکاري نه پڻي وڃي. |
| `other` | feedback ڪنه سمجهيل ڪٽي سان مطابقت نه رکيو. |

### تصديق (Authentication)

اگر آپ کا اینڈ پوائنٹ کسی تصدیق (authentication) کی مانگ کرتا ہے، تو **Feedback API Key** فیلڈ میں اپنا bearer token ڈال دیں۔ ایجنٹ یہ بھیجتا ہے:

```
Authorization: Bearer <your-api-key>
```

اگر **Feedback API Key** فیلڈ خالی ہو، تو کوئی `Authorization` ہیڈر نہیں بھیجا جاتا۔

### فیڈ بیک کلیکشن کو بند کرنا (Disabling Feedback Collection)

دونوں **Feedback Endpoint URL** اور **Feedback API Key** فیلڈز کو خالی چھوڑ دیں۔ تھمب ڈاؤن بٹن اور فیڈ بیک UI صارفین کے لیے نظر آتا رہے گا، لیکن جمع کرانے کی معلومات کسی بھی بیرونی سروس پر آگے نہیں بھیجی جائیں گی۔

## Brave Search API Key

اسی **Advanced** ٹیب میں، **Brave Search API Key** فیلڈ انٹرنیٹ سرچ کرنے کی صلاحیت [Internet Search](../configuration/internet-search) کو فعال کرتا ہے۔

| فیلڈ | تفصیل |
|---|---|
| **Brave Search API Key** | Brave Search ڈویلپر ڈیش بورڈ سے آپ کا API key۔ AI اسسٹنٹ میں انٹرنیٹ سرچ کے لیے ضروری ہے۔ |

فیلڈ کے لیبل میں Brave Search API سائن اپ پیج کا کلک کرنے والا لنک شامل ہے۔ انٹرنیٹ سرچ کو غیر فعال کرنے کے لیے اسے خالی چھوڑ دیں۔

اس فیچر پر اینڈ یوزر دستاویزات کے لیے [Internet Search](../configuration/internet-search) دیکھیں۔

## فیچر فلگز (Feature Flags)

یہ v1.9.0 میں بھی متعارف کرایا گیا ہے، **Settings → Feature Flags** ٹیب اختیاری فنکشنلٹی کے لیے ٹوگل سوئچز فراہم کرتا ہے۔ ہر فلگ یا تو پورے نیٹ ورک پر فعال ہوتا ہے یا غیر فعال؛ اس وقت سائٹ کے لحاظ سے کوئی اووررائڈ نہیں ہوتا۔

### فیچر فلگز تک رسائی (Accessing Feature Flags)

1. ورڈپریس ایڈمن میں، **Gratis AI Agent → Settings** پر جائیں۔
2. **Feature Flags** ٹیب پر کلک کریں۔

### ایکسس کنٹرول فلگز (Access Control Flags)

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | جڏهن هي آن ڪريو، صرف `administrator` رول وارن بس AI Agent چیٹ پینل کي खोल्न سکندا. ٻيا سڀ رول "Contact your administrator" جو پیغام ڏسندا آهن. |
| **Restrict to Network Admins** | Off | جڏهن هي multisite network تي آن ڪريو، صرف Super Admins ئي ايجن استعمال ڪري سگهن ٿا. انفرادي سائيٽ ادمينيشن کي روڪيو ويندو آهي. جيڪڏهن ٻئي ٻنهي آن آهن ته "Restrict to Administrators" کان وڌيڪ اهميت رکي ٿو. |
| **Allow Subscriber Access** | Off | جڏهن هي آن ڪريو، `subscriber` رول وارن چیٹ انٽر فیس کي استعمال ڪري سگهندا آهن پر انهن جي صلاحيت صرف پڙهڻ (read-only) تائين محدود آهي (پوس کرينا يا سیٹنگز بدلائڻ نه سکندا). |
| **Disable for Non-Members** | Off | هي Ultimate Multisite جي ممبرشپ جي حالت سان جڙيل آهي. جڏهن هي آن ڪريو، ان سائيٽن لاءِ چیٹ چھپائي ويندي آهي جن کي فعال ممبرشپ ناهي. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | چیٹ وِجٹ جي نچي ڏيڪر ڪيل برانڊنگ معلومات کي ختم ڪري ڇڏين ٿا. 화이트-ليبل (white-label) deployment لاءِ هي سفارش ڪئي ويندي آهي. |
| **Custom Agent Name** | *(blank)* | چیٹ هڊر ۽ ادمينيشن منيو ۾ default "Gratis AI Agent" جي جاءِ تي پنهنجي پروڊڪٽ جو نالو رکجو. blank ركهڻ بجي default استعمال ٿيندو. |
| **Hide Agent Picker** | Off | جڏهن هي آن ڪريو، صارف اڳتي واري پنج built-in ايجنن (agents) جو وچ ۾ بدل نه ڪري سگهندا. موجوده ايجن ان حد رکي ويندي آهي جيڪا Settings → General ۾ default طور تي ڪيئن مقرر ڪئي آهي. |
| **Use Site Icon as Chat Avatar** | Off | چیٹ وِجٽ هڊر ۾ default AI آئڪن جي جاءِ تي WordPress سائيٽ جو آئڪن رکجو (Appearance → Customize → Site Identity ۾ set ڪيل). |

### Applying Changes

هي ڪا به flag آن ڪرڻ کان پوءِ **Save Settings** ڇڪيو. تبديلين فوري اثر ٿينديون آهن — ڪنهن به cache کي صاف ڪرڻ يا plugin کي دوبارہ فعال ڪرڻ جي ضرورت نه آهي.
