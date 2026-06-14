---
title: Wurin Bayarwa da DNS na Abokan Ciniki
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Management na Bayanin da Checkout da DNS

## Bayaninta da Zaɓar Domain

Bayaninta **Domain Selection** wani abu ne a cikin checkout wanda ke ba masu siyarwa zaɓi yadda za su samu domain ɗin wurin su. Ka ƙara shi a kowane shafin checkout don samar da sayarwawar domain.

### A ƙara bayanin a cikin shafin checkout

1. Zuwa **Network Admin › Ultimate Multisite › Checkout Forms**
2. Baka wani checkout form ko ka ƙirƙira wani.
3. A cikin editor na checkout, danna **Add Field**.
4. Zaɓi **Domain Selection** daga cikin babban rarrabun bayanan.
5. Ka tsara zaɓuwar bayani (ga kalli a ƙasa).
6. Ka rufe form ɗin.

### Zaɓuwar bayani

**Domain modes** — Zaɓi wanne tabben mai amfani da kai. Kowane mode zai iya samar da shi ko ba haka ba dangane da juna:

| Mode | Abin da yake yi |
|---|---|
| **Subdomain** | Masu siyarwa suna amfani da subdomain mai kyauta a cikin shafin ku (misali, `mysite.yournetwork.com`). Ba akwai bu kayi biya ba. |
| **Register New Domain** | Masu siyarwa suna neman domain na sabon kuma suna riƙafa shi ta hanyar wajen da kake tsara. Ana amfani da kayan ajiya (product) mai dacewa don farashin. |
| **Existing Domain** | Masu siyarwa suna haɗa domain ɗin da suke mallaka. Ba akwai kuɗin riƙafa ba. Domain ɗin zai haɗa kai tsaye da shafin su. |

**Default mode** — Idan an samar da dukkan takwomin modai uku, wanne tabben zai buɗe ta farko? Ka sanya shi zuwa **Subdomain** don a bar riƙafa sayarwar domain mai la'akari ba wajibi ne, ko ka sanya shi zuwa **Register New Domain** don ƙarfafa sayarwa.

**Domain product** — Zaɓi da kake so ka haɗa wannan bayanin da wani kayan ajiya (domain product) na musamman. Idan ba ka tsara shi ba, addon ɗin zai zaɓi kayan ajiya mai dacewa ne dangane da TLD da masu siyarwa ke neman.

### Bayanan addini na riƙafa (Registrant contact fields)

Idan wani mai siyarwa ya zaɓi tabben **Register New Domain**, form ɗin checkout zai ƙara bayanan addinin riƙafa a cikin shafin:

- Sunan farko / Wurin da ake kira
- Adadin imel (Email address)
- Wuri (line 1, birni, jihar/wurin siyasa, lambar tallafi, ƙasa)
- Lambar wuta

این موارد توسط همه ثبت‌کنندگان مورد نیاز هستند و قبل از فراخوانی API ثبت، تأیید می‌شوند. شماره تلفن‌ها به طور خودکار به فرمت بین‌المللی `+CC.NNN` که ثبت‌کنندگان انتظار دارند، قالب‌بندی می‌شوند.

### آدرس سایت خودکار

وقتی یک مشتری ثبت‌نام می‌کند یا یک دامنه را نگاشت (map) می‌کند، فیلد آدرس سایت به طور خودکار از دامنه انتخابی پر می‌شود. مشتریان نیازی به پر کردن یک فیلد جداگانه برای URL ندارند.

### رفتار جستجو

- در لحظه با استفاده از AJAX، در حالی که کاربر تایپ می‌کند، موجود بودن دامنه بررسی می‌شود.
- اگر دامنه مورد نظر در دسترس نباشد، پیشنهادهای TLD جایگزین نمایش داده می‌شوند.
- قیمت‌ها به صورت زنده دریافت و به وضوح نمایش داده می‌شوند (قیمت ثبت‌نام، قیمت تمدید، هزینه اختیاری حریم خصوصی WHOIS).
- کدهای کوپن دقیقاً مانند هر محصول دیگری روی محصولات دامنه اعمال می‌شوند.

**تنظیم پاسخگویی جستجو:**

```php
// افزایش تأخیر debounce (میلی‌ثانیه) برای کاهش فراخوانی‌های API در اتصالات کند
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // پیش‌فرض: 500
});
```

**افزودن فیلدهای سفارشی به فرم جستجوی دامنه:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'یادداشت‌های اضافی',
    ];
    return $fields;
});
```

---

## مدیریت DNS توسط مشتری

مشتریان می‌توانند رکورد‌های DNS را برای دامنه‌های ثبت شده خود از صفحه **My Account**، در زیر ورودی دامنه خود، مدیریت کنند.

### انواع رکوردهای پشتیبانی شده

| نوع | کاربرد |
|---|---|
| **A** | نگاشت نام میزبان به آدرس IPv4 |
| **AAAA** | نگاشت نام میزبان به آدرس IPv6 |
| **CNAME** | ایجاد یک نام مستعار که به نام میزبان دیگری اشاره می‌کند |
| **MX** | تنظیم سرور مبادله ایمیل |
| **TXT** | افزودن رکوردهای SPF، DMARC، تأیید یا سایر رکورد‌های متنی |

### کدام ارائه‌دهندگان مدیریت DNS را پشتیبانی می‌کنند؟

مدیریت DNS (افزودن، ویرایش، حذف رکوردها) با **OpenSRS**، **ResellerClub**، **Enom**، **HostAfrica** و **Openprovider** در دسترس است. دامنه‌های **Hostinger** می‌توانند نام سرورها را از طریق Domain Seller به‌روزرسانی کنند؛ رکوردهای DNS برای دامنه‌های میزبانی شده توسط یکپارچه‌سازی اصلی Hostinger مدیریت می‌شود. دامنه‌های Namecheap، GoDaddy و NameSilo وضعیت و اطلاعات انقضا را نمایش می‌دهند اما باید DNS مستقیماً در پنل کنترل ثبت‌کننده مدیریت شود.

### رکوردهای DNS پیش‌فرض

شما می‌توانید تنظیمات DNS پیش‌فرض را پیکربندی کنید که به طور خودکار زمانی اعمال می‌شوند که یک دامنه ثبت می‌گردد. به **Settings › Domain Seller › Default DNS Records** بروید.

مقادیر رکورد پیش‌فرض از دو توکن پشتیبانی می‌کنند:

| Token | جایگزین می‌شود با |
|---|---|
| `{DOMAIN}` | نام دامنه ثبت شده (مثلاً `example.com`) |
| `{SITE_URL}` | آدرس سایت وردپرسی برای سایت مشتری |

**مثال — اشاره به دامنه اصلی و www به آدرس IP سرور شما:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### مدیریت پنل کاربری: مشاهده و ویرایش DNS

مدیران شبکه می‌توانند رکوردهای DNS هر دامنه مشتری را از صفحه ویرایش آن در **Network Admin › Ultimate Multisite › Domains** مشاهده و ویرایش کنند.
