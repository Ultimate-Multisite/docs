---
title: ہیڈر ڈومین کی تلاش
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# ہیڈر ڈومین تلاش {#header-domain-search}

یہ سیٹ اپ اس وقت استعمال کریں جب آپ ایک چھوٹا ہیڈر فارم چاہتے ہوں جو ڈومین تلاش شروع کرے، پھر صارف کو Ultimate Multisite checkout کے اندر دستیاب ڈومینز میں سے انتخاب کرنے دے۔

## تقاضے {#requirements}

- Ultimate Multisite network-active۔
- Multisite Ultimate Domain Seller network-active۔
- کم از کم ایک فعال ڈومین رجسٹریشن پروڈکٹ جس میں:
  - `domain_provider` ایک ترتیب دیے گئے فراہم کنندہ پر سیٹ ہو۔
  - معاون TLDs ترتیب دیے گئے ہوں، مثلاً `com`، `net`، اور `org`۔
- ایک درست checkout فارم جس میں **ڈومین انتخاب** فیلڈ شامل ہو۔

## Checkout فارم {#checkout-form}

1. رجسٹریشن صفحے کے لیے استعمال ہونے والا checkout فارم بنائیں یا ترمیم کریں۔
2. عام مطلوبہ checkout/account فیلڈز شامل کریں، بشمول **Username**۔ صرف ڈومین فیلڈ پر مشتمل checkout فارم Ultimate Multisite توثیق کے ذریعے مسترد کر دیا جاتا ہے۔
3. ایک **ڈومین انتخاب** فیلڈ شامل کریں۔
4. جب فلو کا مقصد مفت سب ڈومینز یا موجودہ ڈومینز کے بجائے رجسٹرڈ ڈومینز پر توجہ دینا ہو تو Domain Selection موڈ کو **Register Only** پر سیٹ کریں۔
5. ڈومین رجسٹریشن پروڈکٹ کو اس فیلڈ سے منسلک کریں۔

رجسٹریشن صفحے کو checkout فارم رینڈر کرنا چاہیے، مثلاً:

```text
[wu_checkout slug="domain-form"]
```

## ہیڈر فارم {#header-form}

سائٹ ہیڈر میں ایک چھوٹا `GET` فارم شامل کریں جو داخل کیا گیا تلاش لفظ checkout صفحے کو `domain_name` کے طور پر بھیجے:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

کسٹم ہیڈر JavaScript میں ڈومین پہلے سے منتخب نہ کریں۔ ہیڈر کو صرف تلاش لفظ پاس کرنا چاہیے۔ Domain Seller checkout اسکرپٹ `?domain_name=example` پڑھتا ہے، checkout تلاش باکس بھرتا ہے، اور دستیابی کی تلاش چلاتا ہے تاکہ صارف واپس آئے ہوئے ڈومینز میں سے انتخاب کر سکے۔

## متوقع طرزِ عمل {#expected-behaviour}

ہیڈر میں `example` تلاش کرنے سے یہ کھلنا چاہیے:

```text
/register/?domain_name=example
```

اس کے بعد checkout کو قابلِ انتخاب نتائج دکھانے چاہییں جیسے:

- `example.com`
- `example.net`
- `example.org` دستیاب نہیں
- دیگر فراہم کنندہ کے معاون TLDs

دستیاب نتیجہ منتخب کرنے کے بعد، آرڈر خلاصے میں ڈومین رجسٹریشن پروڈکٹ اور منتخب ڈومین نام شامل ہونا چاہیے۔

## تصدیق {#verification}

1. ہوم صفحہ کھولیں۔
2. ایک سادہ نام تلاش کریں، مثلاً `example`۔
3. تصدیق کریں کہ checkout URL میں `?domain_name=example` شامل ہے۔
4. تصدیق کریں کہ checkout ڈومین فیلڈ میں `example` موجود ہے۔
5. تصدیق کریں کہ ڈومین انتخابوں کی فہرست ظاہر ہوتی ہے۔
6. دستیاب ڈومین کے لیے **Select** پر کلک کریں۔
7. تصدیق کریں کہ آرڈر خلاصے میں `Domain Registration - example.com` یا منتخب ڈومین موجود ہے۔

## مسئلہ حل کرنا {#troubleshooting}

- اگر کوئی فہرست ظاہر نہ ہو، تو براؤزر نیٹ ورک ٹیب میں `admin-ajax.php?action=wu_domain_search` چیک کریں اور تصدیق کریں کہ یہ غیر خالی `domains` یا `results` واپس کرتا ہے۔
- اگر checkout فارم محفوظ کرتے وقت توثیق میں ناکام ہو، تو مطلوبہ account فیلڈز جیسے **Username** شامل کریں۔
- اگر ڈومین منتخب کرنے سے cart اپ ڈیٹ نہیں ہوتا، تو تصدیق کریں کہ `window.wu_checkout_form` موجود ہے اور Domain Seller checkout اثاثے checkout صفحے پر لوڈ ہیں۔
