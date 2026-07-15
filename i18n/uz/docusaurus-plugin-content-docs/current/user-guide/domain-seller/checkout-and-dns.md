---
title: To'lov maydoni va Mijoz DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Maydon va Mijoz DNS Boshqarzligini Boshqarish

## Domen Tanlash checkout maydoni {#the-domain-selection-checkout-field}

**Domain Selection** maydoni bu mijozlarga o'z veb-sayt domenini qanday olishlari haqida tanlov beradigan checkout elementidir. Domen sotishni faollashtirish uchun uni har qanday checkout formiga qo'shing.

### Maydonni checkout formiga qo'shish {#adding-the-field-to-a-checkout-form}

1. **Network Admin › Ultimate Multisite › Checkout Forms** ga o'ting
2. Checkout formini oching yoki yangi yarating
3. Checkout redaktorida **Add Field** (Maydon qo'shish) tugmasini bosing
4. Maydon ro'yxatidan **Domain Selection** ni tanlang
5. Maydon opsiyalarini sozlang (quyida ko'ring)
6. Formni saqlang

### Maydon opsiyalari {#field-options}

**Domain modlari** — Mijozlarning qaysi tablarni ko'rishini tanlang. Har bir model mustaqil ravishda faollashtirilishi yoki o'chirilishi mumkin:

| Model | Nima qiladi |
|---|---|
| **Subdomain** (Subdomen) | Mijoz tarmohingizda bepul subdomendan foydalanadi (masalan, `mysite.yournetwork.com`). To'lov talab qilinmaydi. |
| **Register New Domain** (Yangi domen ro'yxatdan o'tish) | Mijoz yangi domen qidiradi va uni siz sozlagan provayder orqali ro'yxatdan o'tadi. Narxlash uchun mos keladigan domen mahsulotidan foydalaniladi. |
| **Existing Domain** (Mavjud domen) | Mijoz o'ziga tegishli domen nomini bog'laydi. Ro'yxatdan o'tish haqida to'lov yo'q. Domen avtomatik ravishda ularning saytiga bog'lanadi. |

**Default model** (Standart model) — Uchta model ham faollashtirilgan bo'lsa, qaysi tab birinchi ochiladi? Domen ro'yxatdan o'tishni ixtiyor qilish uchun **Subdomain** ga sozlang yoki xarid qilishga undash uchun **Register New Domain** ga sozlang.

**Domain mahsuloti** — Bu maydonni ma'lum bir domen mahsulotiga tanlash imkoniyatini beradi. Agar belgilansangiz, qo'shimcha avtomatik ravishda mijoz qidirayotgan TLD (toplanuvchi domen kengaytmasi) asosida mos keladigan mahsulotni tanlaydi.

### Ro'yxatdagi kontakt ma'lumotlari maydonlari {#registrant-contact-fields}

Mijoz **Register New Domain** tabini tanlaganda, checkout formasi quyidagi kontakt maydonlarini avtomatik ravishda qo'shadi:

- Ism / Familiya
- Elektron pochta manzili
- Manzil (1-chi qator, shahar, viloyat/provinsiya, pochtomali kod, mamlakat)
- Telefon raqami

Bularlar barcha ro'yxat beruvchilar tomonidan talab qilinadi va ro'yxatdan o'tish API chaqirilishidan oldin tasdiqlanadi. Telefon raqamlari avtomatik ravishda ro'yxat beruvchilar kutiladigan `+CC.NNN` xalqaro formatiga moslashtiriladi.

### Avtomatik yaratilgan sayt URL-i {#auto-generated-site-url}

Mijoz ro'yxatdan o'tganida yoki domenni xarita qilsa, sayt URL maydoni tanlangan domenidan avtomatik to'ldirilib boriladi. Mijozlarning alohida URL maydonini to'ldirishga hojat yo'q.

### Qidiruv xatti-harakati {#search-behaviour}

- Domen mavjudligi mijoz harf yozganda AJAX orqali real vaqtda tekshiriladi
- Afzal domen mavjud bo'lmagan holda muqobil TLD takliflari ko'rsatiladi
- Narxlar jonli olinadi va aniq ko'rsatiladi (ro'yxatdan o'tish narxi, yangilash narxi, ixtiyoriy WHOIS maxfiylik haqidagi to'lov)
- Kupon kodlari boshqa har qanday mahsulot kabi domen mahsulotlariga ham qo'llaniladi

**Qidiruv javobdorligini sozlash:**

```php
// Sezonal aloqalarni kamaytirish uchun debounce kechikishini (millisekund) oshiring
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Domen qidiruv shakliga maxsus maydonlar qo'shish:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Qo'shimcha eslatmalar',
    ];
    return $fields;
});
```

---

## Mijoz DNS boshqaruvi {#customer-dns-management}

Mijozlar **Mening Hisobim** sahifasidan, o'z domenlari ostidagi kirish orqali ro'yxatdan o'tgan domenlar uchun DNS yozuvlarini boshqarishlari mumkin.

### Qo'llab-quvvatlanadigan yozuv turlari {#supported-record-types}

| Tur | Foydalanish |
|---|---|
| **A** | Hostnomani IPv4 manziliga moslash |
| **AAAA** | Hostnomani IPv6 manziliga moslash |
| **CNAME** | Boshqa hostnomaga ishora qiluvchi alias yaratish |
| **MX** | Xabar almashish serverini belgilash |
| **TXT** | SPF, DMARC, tasdiqlash yoki boshqa matn yozuvlarini qo'shish |

### DNS boshqaruvidan qaysi provayderlar qo'llab-quvvatlaydi? {#which-providers-support-dns-management}

DNS boshqarmasi (ro'yxatnomalarni qo'shish, tahrirlash, o'chirish) **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** va **Openprovider** bilan mavjud. **Hostinger** domenlari nom serverlarini Domen Sotuvchisi orqali yangilash mumkin; joylashtirilgan domenlar uchun DNS yozuvlari asosiy Hostinger domen-xaritma integratsiyasi tomonidan boshqariladi. Namecheap, GoDaddy va NameSilo domenlari holat va muddati ma'lumotlarini ko'rsatadi, ammo DNS to'g'ridan-to'g'ri ro'yxatnomachining boshqaruv paneli orqali boshqarilishi kerak.

### Default DNS yozuvlari {#default-dns-records}

Domen ro'yxatdan olinadigan va avtomatik qo'llaniladigan default DNS yozuvlarini sozlash mumkin. **Settings › Domain Seller › Default DNS Records** ga kiring.

Default yozuv qiymatlari ikki turdagi tokenlarni qo'llab-quvvatlaydi:

| Token | Almashtiriladi |
|---|---|
| `{DOMAIN}` | Ro'yxatdan olingan domen nomi (masalan, `example.com`) |
| `{SITE_URL}` | Mijozning sayti uchun WordPress sayt URL'si |

**Misol — apex domen va www ni server IP manzilingizga yo'naltirish:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS ko'rish va tahrirlash {#admin-viewing-and-editing-dns}

Tarmoq administratorlari har qanday mijoz domenining DNS yozuvlarini **Network Admin › Ultimate Multisite › Domains** dagi domen tahrirlash sahifasidan ko'rishi va tahrirlashi mumkin.
