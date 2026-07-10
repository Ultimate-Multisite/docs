---
title: اؤدَمَه فیلدی و موشتری DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout فیلدی و موشتری DNS ایداره‌سی {#checkout-field-and-customer-dns-management}

## Domain Selection Checkout فیلدی {#the-domain-selection-checkout-field}

**Domain Selection** فیلدی، موشتری‌لره سایت‌لرینین domain-ینی نئجه آلاجاقلارینی سئچمک ایمکانی وئرن بیر checkout عنصریدیر. Domain ساتیشینی فعال ائتمک اوچون اونو ایسته‌دیگینیز checkout فورمونا آرتیرین.

### فیلدی checkout فورمونا آرتیرماق {#adding-the-field-to-a-checkout-form}

1. **Network Admin › Ultimate Multisite › Checkout Forms** بؤلومونه گئدین
2. بیر checkout فورمونو آچین یا یارادین
3. checkout دوزلدیجی‌سینده **Add Field** دویمه‌سینه باسین
4. فیلد لیستیندن **Domain Selection** سئچین
5. فیلد سئچنه‌کلرینی تنظیم ائدین (آشاغیدا باخین)
6. فورمو ساخلايین

### فیلد سئچنه‌کلری {#field-options}

**Domain مودلاری** — موشتری‌نین هانسی تب‌لری گؤره‌جه‌یینی سئچین. هر مود آیریجا فعال یا غیرفعال ائدیله بیلر:

| مود | نه ائدیر |
|---|---|
| **Subdomain** | موشتری شبکه‌نیزده پولسوز بیر subdomain ایشله‌دیر (مثلاً، `mysite.yournetwork.com`). اؤده‌مک لازم دئییل. |
| **Register New Domain** | موشتری یئنی domain آختاریر و اونو تنظیم ائتدیگینیز provider واسطه‌سیله قئید ائدیر. قیمت اوچون اویغون domain محصولونو ایشله‌دیر. |
| **Existing Domain** | موشتری اؤزونده اولان domain-ی map ائدیر. قئید پولی یوخدور. Domain خودکار اونون سایتینا map ائدیلیر. |

**Default mode** — هر اوچ مود فعال اولاندا هانسی تب اول آچیلسین. Domain قئیدینی اختیاری ساخلاماق اوچون **Subdomain** سئچین، یا ساتین‌آلمانی تشویق ائتمک اوچون **Register New Domain** سئچین.

**Domain product** — ایسته‌سه‌نیز بو فیلدی مشخص بیر domain محصولونا باغلایین. تنظیم ائدیلمه‌سه، addon موشتری‌نین آختاردیغی TLD-یه گؤره اویغون محصولو خودکار سئچیر.

### Registrant تماس فیلدلری {#registrant-contact-fields}

موشتری **Register New Domain** تبینی سئچنده، checkout فورمو registrant تماس فیلدلرینی اینلاین آرتیر:

- آد / سوی‌آد
- ایمیل آدرسی
- آدرس (سطر ۱، شهر، ایالت/استان، پست کودو، اؤلکه)
- تلفن نومره‌سی

بونلار بوتون registrar-لار طرفیندن لازم‌دیر و registration API چاغیریشی ائدیلمزدن قاباق یوخلانیر. تلفن نومره‌لری خودکار registrar-لارین گؤزله‌دیگی `+CC.NNN` بین‌المللی فورماتینا دؤندریلییر.

### خودکار یارادیلان سایت URL-ی {#auto-generated-site-url}

موشتری بیر domain قئید ائدن یا map ائدن زامان، سایت URL فیلدی سئچیلمیش domain-دن خودکار دولدورولور. موشتری‌لره آیری URL فیلدینی دولدورماق لازم دئییل.

### آختاریش رفتاری {#search-behaviour}

- Domain موجودلوغو موشتری یازدیقجا AJAX ایله real-time یوخلانیر
- ترجیح وئریلن domain موجود اولمایاندا آلترناتیو TLD تکلیف‌لری گؤستریلییر
- قیمت‌لر زنده آلینیر و آیدین گؤستریلییر (قئید قیمت‌ی، تمدید قیمت‌ی، اختیاری WHOIS gizlilik پولی)
- کوپن کودلاری domain محصوللارینا دا باشقا هر محصول کیمی تطبیق اولور

**آختاریش پاسخ‌سورعتینی تنظیم ائتمک:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Domain آختاریش فورمونا custom فیلدلر آرتیرماق:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## موشتری DNS ایداره‌سی {#customer-dns-management}

موشتری‌لر قئید اولموش domain-لری اوچون DNS record-لارینی **My Account** صفحه‌سینده، domain-لرینین گئردیسی آلتیندا ایداره ائده بیلرلر.

### پشتیبانی اولونان record نوعلاری {#supported-record-types}

| نوع | ایشلتمه |
|---|---|
| **A** | hostname-و IPv4 آدرسینه map ائدیر |
| **AAAA** | hostname-و IPv6 آدرسینه map ائدیر |
| **CNAME** | باشقا بیر hostname-ه اشاره ائدن alias یارادیر |
| **MX** | میل exchange سرورونو تنظیم ائدیر |
| **TXT** | SPF، DMARC، verification، یا باشقا متن record-لاری آرتیر |

### هانسی provider-لار DNS ایداره‌سینی پشتیبانی ائدیر؟ {#which-providers-support-dns-management}

DNS ایداره‌سی (record آرتیرماق، دوزلت‌مک، سیلمک) **OpenSRS**، **ResellerClub**، **Enom**، **HostAfrica** و **Openprovider** ایله موجوددور. **Hostinger** domain-لری Domain Seller واسطه‌سیله nameserver-لری ینیللیه بیلر؛ hosted domain-لر اوچون DNS record-لاری core Hostinger domain-mapping integration طرفیندن ایداره اولونور. Namecheap، GoDaddy و NameSilo domain-لری وضعیت و بیتمه بیلگی‌سینی گؤستریر، اما DNS مستقیم registrar-ین کنترل پانلینده ایداره اولونمالیدیر.

### Default DNS record-لاری {#default-dns-records}

بیر domain قئید اولوناندا خودکار تطبیق اولونان default DNS record-لارینی تنظیم ائده بیلرسینیز. **Settings › Domain Seller › Default DNS Records** بؤلومونه گئدین.

Default record دییرلری ایکی token-ی پشتیبانی ائدیر:

| Token | نه ایله عوض اولونور |
|---|---|
| `{DOMAIN}` | قئید اولموش domain آدی (مثلاً، `example.com`) |
| `{SITE_URL}` | موشتری‌نین سایتی اوچون WordPress سایت URL-ی |

**اؤرنک — apex domain و www-نو سرور IP-نیزه یؤنلدین:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS-ه باخماق و دوزلت‌مک {#admin-viewing-and-editing-dns}

Network admin-لر هر هانسی موشتری domain-ی اوچون DNS record-لارینا **Network Admin › Ultimate Multisite › Domains** ایچینده domain-ین دوزلت‌مه صفحه‌سیندن باخا و اونلاری دوزلده بیلرلر.
