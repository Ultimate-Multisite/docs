---
title: مفتوح AI ايجنت جيٽنگ
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# مفت AI ایجن سیٹنگز

Gratis AI Agent دے **Settings → Advanced** سکرین وچ، آپ ایڈمنسٹریٹر لیول تے بیک اینڈ انٹیگریشنز لئی کنفیگریشن کر سکدے نیں جیہڑے v1.5.0 وچ شامل کیتھے گئے۔ ایہنا **Feedback Endpoint** فیلڈز تے اوہن جي متوقع فارمیٹ دی وضاحت کی گئی ہے۔

## سیٹنگز تک رسائی حاصل کرنا

1. WordPress admin وچ، **Gratis AI Agent → Settings** تک جاؤ۔
2. **Advanced** ٹیب تے کلک کرو۔

## Feedback Endpoint کنفیگریشن

Feedback endpoint توں AI agent لئی POST requests ملدے نیں جیہڑی ویلے کوئی صارف تھمب ڈاؤن بٹن (thumbs-down button)، آٹو پرامپٹ بینر، یا `/report-issue` کمانڈ دے ذریعے فیڈ بیک جمع کراتے۔

| فیلڈ | وضاحت |
|---|---|
| **Feedback Endpoint URL** | اوہ URL جیہڑا HTTP POST requests دے ذریعے JSON body نال فیڈ بیک جمع کرواتا ہے۔ |
| **Feedback API Key** | ہر فیڈ بیک ریکویسٹ دے `Authorization` header وچ بھیجی جانے والی bearer token۔ اگر آپ دے endpoint لئی کوئی تصدیق (authentication) نہیں چاہیدی توں، ایہہ خالی چھوڑ دو۔ |

### متوقع JSON Payload

تہاڈا feedback endpoint کم کرنے لئی JSON body قبول کرنا چاہندا اے جیہڑے کم از کم درج ذیل فیلڈز نال شامل ہووے چاہندے نیں:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

گھنچ (payload) وچ ہور فیلڈز موجود ہو سکدے نیں جیہڑے گالھ دے سیاق و سباق (conversation context) تے منحصر ہون گے۔

### `triage_category` ویلیوز

AI ٹریاج لیئر پلے آؤٹ آگے بھیجنے توں پہلے `triage_category` لئی درج ذیل وچوں کوئی اک ویلوی اسائن کردا اے:

| ویلوی | مطلب |
|---|---|
| `factual_error` | اسسٹنٹ نے غلط حقائق دی معلومات فراہم کی ہے۔ |
| `unhelpful_answer` | جواب تکنیکی طور تے صحیح سی، پر مددگار نہیں تھا۔ |
| `inappropriate_content` | جواب وچ ایسا مواد شامل تھا جو صارفین لئی دکھایا نہیں جانا چاہیدا۔ |
| `other` | فیڈ بیک کسی جانی ہوئی کیٹیگری نال میل نہیں کھاندا۔ |

### تصدیق (Authentication)

اگر آپ کا اینڈ پوائنٹ کسی تصدیق (authentication) کا مطالبہ کرتا ہے، تو **Feedback API Key** فیلڈ میں اپنا bearer token سیٹ کریں۔ ایجنٹ یہ بھیجتا ہے:

```
Authorization: Bearer <your-api-key>
```

اگر **Feedback API Key** فیلڈ خالی ہو، تو کوئی `Authorization` ہیڈر نہیں بھیجا جاتا۔

### فیڈ بیک کلیکشن کو بند کرنا (Disabling Feedback Collection)

دونوں **Feedback Endpoint URL** اور **Feedback API Key** فیلڈز کو خالی چھوڑ دیں۔ تھمب ڈاؤن بٹن اور فیڈ بیک UI صارفین کے لیے نظر آتے رہیں گے، لیکن جمع کرانے کی معلومات کسی بھی بیرونی سروس کو آگے نہیں بھیجی جائیں گی۔

## Brave Search API Key

اسی **Advanced** ٹیب میں، **Brave Search API Key** فیلڈ انٹرنیٹ سرچ کی صلاحیت [Internet Search](../configuration/internet-search) کو فعال کرتا ہے۔

| فیلڈ | تفصیل |
|---|---|
| **Brave Search API Key** | Brave Search ڈویلپر ڈیش بورڈ سے آپ کا API key۔ AI اسسٹنٹ میں انٹرنیٹ سرچ کو فعال کرنے کے لیے ضروری ہے۔ |

فیلڈ کے لیبل میں Brave Search API سائن اپ پیج کا کلک ایبل لنک شامل ہے۔ انٹرنیٹ سرچ کو غیر فعال کرنے کے لیے اسے خالی چھوڑ دیں۔

اس فیچر پر اینڈ-یوزر دستاویزات کے لیے [Internet Search](../configuration/internet-search) دیکھیں۔

## فیچر فلگز (Feature Flags)

یہ v1.9.0 میں بھی متعارف کرایا گیا ہے، **Settings → Feature Flags** ٹیب اختیاری فنکشنلٹی کے لیے ٹوگل سوئچز فراہم کرتا ہے۔ ہر فلگ یا تو پورے نیٹ ورک پر فعال ہوتا ہے یا غیر فعال؛ اس وقت سائٹ کے لحاظ سے کوئی اووررائڈ نہیں ہوتا۔

### فیچر فلگز تک رسائی (Accessing Feature Flags)

1. ورڈپریس ایڈمن میں، **Gratis AI Agent → Settings** پر جائیں۔
2. **Feature Flags** ٹیب پر کلک کریں۔

### ایکسس کنٹرول فلگز (Access Control Flags)

| Flag | Default | Description |
|---|---|---|
| **Restrict to Administrators** | Off | جڏهن هي آن ڪريو، صرف `administrator` رول وارن بس AI Agent چیٹ پینل खोल्न سکون ٿا. ٻيا سڀ رول "Contact your administrator" جو ميساج ڏسندا رهندا. |
| **Restrict to Network Admins** | Off | جڏهن هي هڪ ملٽي سائيٽ نڪيت ۾ آن هجي، ته صرف Super Admins ئي ايجنت استعمال ڪري سگهون ٿا. انفرادي سائيٽ اڊمن کي روڪيو ويندو آهي. جيڪڏهن ٻئي ٻنيون آن هجن ته "Restrict to Administrators" کان وڌيڪ اهميت رکي ٿو. |
| **Allow Subscriber Access** | Off | جڏهن هي آن ڪريو، `subscriber` رول وارن چیٽ انٽرفيس استعمال ڪري سگهندا آهن پر انهن جي صلاحيت صرف پڙهڻ (read-only) تائين محدود هجي (پوس کري نه ڪرڻ يا هيٺيون گهٽ ڪرڻ کان سواءِ). |
| **Disable for Non-Members** | Off | Ultimate Multisite جي ممبرشپ جي حالت سان جڙيل آهي. جڏهن هي آن ڪريو، ان سائيٽن لاءِ چیٽ چھپائي ويندي آهي جن کي فعال ممبرشپ ناهي هجي. |

### Branding Flags

| Flag | Default | Description |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | چیٹ وِجٽ جي ذريعي ڏيڪي وڃڻ وارو برانڊنگ لائن جو نشان ختم ڪري ڇڏين. 화이트-ليبل (white-label) منصوبن لاءِ هي سفارش ڪئي ويندي آهي. |
| **Custom Agent Name** | *(blank)* | چیٹ هڊر ۽ اڊمن مينيٽ ۾ DEFAULT "Gratis AI Agent" جي جاءِ تي پنهنجي پروڊڪٽ جو نالو رکجو. جيڪڏهن هي خالی رهي، ته DEFAULT استعمال ٿيندو. |
| **Hide Agent Picker** | Off | جڏهن هي آن ڪريو، توکي اڳتي واري پنج built-in ايجنٽن (agents) جي وچ ۾ تبديل ڪرڻ کان روڪيو ويندو آهي. موجوده ايجنت ان شيءِ تي ختم ٿي ويندي آهي جيڪا Settings → General ۾ default طور تي ڪيئن رکي وئي آهي. |
| **Use Site Icon as Chat Avatar** | Off | چیٹ وِجٽ هڊر جي DEFAULT AI آئڪن کي WordPress سائيٽ آئڪن سان بدل ڏين (Appearance → Customize → Site Identity ۾ set ڪيل). |

### Applying Changes

ٻه هيءَ Flag مان ڪا به آن ڪرڻ کان پوءِ **Save Settings** تي کلڪ ڪريو. تبديلين فوري اثر ٿينديون آهن — ڪيئن ته هم فلش ڪرڻ يا plugin کي دوبارہ فعال ڪرڻ جي ضرورت ناهي.
