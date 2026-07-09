---
title: Sarlavha domen qidiruvi
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header domen qidiruvi

Ultimate Multisite checkout ichida mijoz mavjud domenlardan tanlashi uchun avval domen qidiruvini boshlaydigan kichik header form kerak bo‘lganda ushbu sozlamadan foydalaning.

## Talablar

- Ultimate Multisite network-active.
- Multisite Ultimate Domain Seller network-active.
- Quyidagilarga ega kamida bitta faol domen ro‘yxatdan o‘tkazish mahsuloti:
  - `domain_provider` sozlangan provayderga o‘rnatilgan.
  - Qo‘llab-quvvatlanadigan TLDlar sozlangan, masalan `com`, `net` va `org`.
- **Domain Selection** maydonini o‘z ichiga olgan yaroqli checkout form.

## Checkout form

1. Ro‘yxatdan o‘tish sahifasi ishlatadigan checkout formni yarating yoki tahrirlang.
2. Oddiy talab qilinadigan checkout/account maydonlarini, jumladan **Username**ni qo‘shing. Faqat domen maydonidan iborat checkout form Ultimate Multisite validatsiyasi tomonidan rad etiladi.
3. **Domain Selection** maydonini qo‘shing.
4. Oqim bepul subdomenlar yoki mavjud domenlardan ko‘ra ro‘yxatdan o‘tkazilgan domenlarga qaratilishi kerak bo‘lsa, Domain Selection rejimini **Register Only** qilib o‘rnating.
5. Domen ro‘yxatdan o‘tkazish mahsulotini shu maydonga biriktiring.

Ro‘yxatdan o‘tish sahifasi checkout formni ko‘rsatishi kerak, masalan:

```text
[wu_checkout slug="domain-form"]
```

## Header form

Sayt headeriga kiritilgan qidiruv atamasini checkout sahifasiga `domain_name` sifatida yuboradigan kichik `GET` form qo‘shing:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Maxsus header JavaScriptda domenni oldindan tanlamang. Header faqat qidiruv atamasini uzatishi kerak. Domain Seller checkout skripti `?domain_name=example`ni o‘qiydi, checkout qidiruv oynasini to‘ldiradi va mijoz qaytarilgan domenlardan tanlashi uchun mavjudlik qidiruvini ishga tushiradi.

## Kutilgan xatti-harakat

Headerda `example` qidirilsa, quyidagini ochishi kerak:

```text
/register/?domain_name=example
```

Checkout keyin quyidagilar kabi tanlanadigan natijalarni ko‘rsatishi kerak:

- `example.com`
- `example.net`
- `example.org` mavjud emas
- provayder qo‘llab-quvvatlaydigan boshqa TLDlar

Mavjud natija tanlangandan so‘ng, buyurtma xulosasida domen ro‘yxatdan o‘tkazish mahsuloti va tanlangan domen nomi bo‘lishi kerak.

## Tekshirish

1. Bosh sahifani oching.
2. Yalang‘och nomni qidiring, masalan `example`.
3. Checkout URL `?domain_name=example`ni o‘z ichiga olganini tasdiqlang.
4. Checkout domen maydonida `example` borligini tasdiqlang.
5. Domen tanlovlari ro‘yxati paydo bo‘lganini tasdiqlang.
6. Mavjud domen uchun **Select**ni bosing.
7. Buyurtma xulosasida `Domain Registration - example.com` yoki tanlangan domen borligini tasdiqlang.

## Muammolarni bartaraf etish

- Agar ro‘yxat ko‘rinmasa, browser tarmoq tabida `admin-ajax.php?action=wu_domain_search`ni tekshiring va u bo‘sh bo‘lmagan `domains` yoki `results` qaytarishini tasdiqlang.
- Agar checkout form saqlash vaqtida validatsiyadan o‘tmasa, **Username** kabi talab qilinadigan account maydonlarini qo‘shing.
- Agar domenni tanlash savatni yangilamasa, `window.wu_checkout_form` mavjudligini va Domain Seller checkout assetlari checkout sahifasida yuklanganini tasdiqlang.
