---
title: Sozlash va Provayder Konfiguratsiyasi
sidebar_position: 1
_i18n_hash: 854fd649457edceefde0eb8246446ebe
---
# Domain Seller: Sozlash va Providendorni Konfiguratsiya Qilish

Domain Seller qo'shimchasi barcha kerakli bosqichlarni o'tish uchun sizga yo'l ko'rsatadigan yo'naltirilgan sozlash wizard (o'rnatish dasturi) bilan yetkaziladi. Bu sahifa wizardning oqimini va keyinchalik provayderlarni qanday sozlash yoki qayta sozlash haqida ma'lumot beradi.

## Talablar

- **Multisite Ultimate** v2.4.12 yoki undan yuqori versiyasi, tarmoq orqali faollashtirilgan
- **PHP** 7.4+
- kamida bitta qo'llab-quvvatlanadigan registrar uchun API ma'lumotlari

## Birinchi ishga tushirish sozlash wizardi

Sozlash wizard birinchi marta pluginni tarmoq orqali faollashtirganda avtomatik ishga tushadi. U shuningdek, har qanday vaqt **Network Admin › Ultimate Multisite › Domain Seller Setup** orqali ham mavjud bo'ladi.

### 1-qadam — Provayderni tanlang

Bog'lanmoqchi bo'lgan registrar (ro'yxat beruvchi) ni tanlang. Qo'llab-quvvatlanadigan variantlar:

| Provayder | DNS boshqaruvi | WHOIS maxfiyligi |
|---|---|---|
| OpenSRS | Ha | Ha |
| Namecheap | Yo'q | Ha (WhoisGuard, bepul) |
| HostAfrica | Ha | Ha (ID himoyasi) |
| Openprovider | Ha | Ha |
| Hostinger | Mehmonli domenlar uchun asosiy Hostinger domen xaritasi orqali | Ha |
| GoDaddy | Yo'q | Yo'q |
| ResellerClub | Ha | Yo'q |
| NameSilo | Yo'q | Yo'q |
| Enom | Ha | Yo'q |

### 2-qadam — Ma'lumotlarni kiritish

Har bir provayderning ma'lumotlar maydonlari farqli:

**OpenSRS** — Foydalanuvchi nomi va maxfiy kalit (OpenSRS Reseller Control Panelidan)

**Namecheap** — Foydalanuvchi nomi va API kaliti (Account › Tools › API Access orqali)

**HostAfrica** — HostAfrica reseller moduli orqali domen resseller API manzil va ma'lumotlari. Hozircha alohida sandbox manzil hujjatlanmagan; jonli ro'yxatdan o'tishdan oldin xavfsiz o'qish-faqat (read-only) tekshiruvlar bilan sinab ko'ring.

**Openprovider** — API kirish faollashtirilgan foydalanuvchi nomi va paroli. Tanlovli sandbox rejimi Openprovider sandbox API dan foydalanadi, va ro'yxatdan o'tish uchun tanlovli default mijoz nomidan qayta foydalanish mumkin.

**Hostinger** — Asosiy Hostinger integratsiyasidan olingan ulangan (shared) Hostinger hPanel API token. Bu token asosiy domen xaritasi va Domen Satuvchisi ro'yxatdan o'tish operatsiyalarini amalga oshirish uchun ishlatiladi.

**GoDaddy** — API kaliti va siri (developer.godaddy.com dan)

**ResellerClub** — Reseller ID va API kaliti (ResellerClub boshqaruv panelidan)

**NameSilo** — API kaliti (namesilo.com › Account › API Manager dan)

**Enom** — Hisob ID va API token

Qo'llab-quvvatlash uchun, mavjud bo'lsa **Sandbox mode**ni tekshiring va operatsiyani haqiqiy muhitga o'tishdan oldin provayderning test muhitida sinab ko'ring.

### 3-qadam — Bog'lanishni tekshirish

**Test Connection** tugmasini bosing. Bu wizard ma'lumotlarni va ulanish holatini tasdiqlash uchun yengil API chaqiruvini yuboradi. Davom etishdan oldin har qanday ma'lumot muammolarini tuzating.

### 4-qadam — TLDlarni import qilish

Ulanilgan provayderdan barcha mavjud TLDlar va toppaqa narxlarni olish uchun **Import TLDs** tugmasini bosing. Bu domen mahsulotlari uchun ishlatiladigan TLD ro'yxatini to'ldiradi. Katta TLD katalogiga ega provayderlar uchun import 30–60 soniya davom etishi mumkin.

TLDlar har kuni bir marta jadvalga asoslangan cron job orqali avtomatik qayta sinxronizatsiya qilinadi.

### 5-qadam — Domen mahsulotini yaratish

Wizard 10% narx oshirilgan standart umumiy domen mahsulotini yaratadi. Siz buni darhol tahrirlashingiz yoki **Ultimate Multisite › Products** ostida qo'lda mahsulotlar yaratmasdan o'tkazishingiz mumkin.

To'liq mahsulot konfiguratsiyasi uchun [Domain Products and Pricing](./domain-products) manbasini ko'ring.

---

## Provayderni qayta sozlash

**Network Admin › Ultimate Multisite › Settings › Domain Seller** (yoki pluginlar ro'yxatida **Settings** tugmasini bosing).

Sozlamalar sahifasida quyidagilar mavjud:

- **Domain sotishini yoqish** — butun xususiyatni yoqish/o'chirish tugmasi
- **Default provayder** — domen qidiruvlari va yangi mahsulotlar uchun ishlatiladigan provayder
- **Qidiruvda maksimal TLDlar soni** — mijoz qidirsangiz, nechta TLDni tekshirishingiz kerak; yuqori qiymatlar ko'proq variantlarni ko'rsatadi, lekin sekinroq ishlaydi
- **Ma'lumotlarning mavjudligi (Availability cache) muddati** — mavjudlik va narx natijalarini qancha vaqt saqlash kerak; past qiymatlar aniqroq bo'ladi, ammo API chaqiruvlari ko'payadi
- **Domen mahsulotlarini boshqarish** — Mahsulotlar ro'yxatiga tezkor link

### Ikkinchi provayderni qo'shish

**Configure providers** tugmasini bosing va yangi registrar uchun wizardni yana ishga tushiring. Siz bir vaqtning o'zida ko'p provayderlarni sozlashim mumkin. Har bir domen mahsulotini aniq provayderga yuklang yoki defaultda qoldiring.

### TLDlarni qo'lda sinxron qilish

Sozlamalar sahifasida, mavjud bo'lgan har qanday provayder yonidagi **Sync TLDs** tugmasini bosing va eng yangi narxlarni olish uchun qayta ishga tushiring. Bu provayder ko'chirilgan yoki yangi TLDlar qo'shilganidan so'ng juda foydali bo'ladi.

---

## Loglar

Har bir provayder o'zining log kanaliiga yozadi. Loglarni **Network Admin › Ultimate Multisite › Logs** orqali ko'rish mumkin:

| Log kanali | Mazmun |
|---|---|
| `domain-seller-registration` | Barcha ro'yxatdan o'tish urinishlari (muvaffaqiyatli va muvaffaqiyatsiz) |
| `domain-seller-renewal` | Yangilash ishining natijalari |
| `domain-seller-opensrs` | OpenSRS API faoliyati (toza ma'lumotlar) |
| `domain-seller-namecheap` | Namecheap API faoliyati (toza ma'lumotlar) |
| `domain-seller-hostafrica` | HostAfrica API faoliyati (toza ma'lumotlar) |
| `domain-seller-openprovider` | Openprovider API faoliyati (toza ma'lumotlar) |
| `domain-seller-hostinger` | Hostinger API faoliyati (toza ma'lumotlar) |
| `domain-seller-godaddy` | GoDaddy API faoliyati (toza ma'lumotlar) |
| `domain-seller-resellerclub` | ResellerClub API faoliyati (toza ma'lumotlar) |
| `domain-seller-namesilo` | NameSilo API faoliyati (toza ma'lumotlar) |
| `domain-seller-enom` | Enom API faoliyati (toza ma'lumotlar) |

---

## Provayder imkoniyatlari haqida eslatmalar

Har bir registrar API barcha operatsiyalarni ko'rsatmaydi. Addon bu qo'llab-quvvatlanmagan operatsiyalarni jim qolmasdan, aniq adminga ko'rsatadigan xatoliklar bilan ko'rsatadi.

- **HostAfrica** eng keng qamrovli yangi reseller ish oqimini (lookup, TLD/narx sinxronizatsiyasi, ro'yxatdan o'tish, yangilash, o'tkazish, nameserverlarni yangilash, DNS yozuvlari, EPP kodlari, registrar bloklash va ID himoyasini) qo'llab-quvvatlaydi.
- **Openprovider** reseller narxidagi TLD sinxronizatsiyasi, ro'yxatdan o'tish, yangilash, o'tkazish, nameserverlarni yangilash, DNS zonalarini, EPP kodlarini, registrar bloklash va WHOIS maxfiyligini qo'llab-quvvatlaydi. U qisqa muddatli bearer token bilan autentifikatsiya qilinadi va addon uni avtomatik ravishda yangilaydi.
- **Hostinger** umumiy hPanel API tokeni orqali mavjudlikni qidirish, ro'yxatdan o'tish, portfel tekshiruvi, nameserverlarni yangilash, registrar bloklash va WHOIS maxfiyligini qo'llab-quvvatlaydi. Hostingerning ommaviy Domain API reseller/toqqizchilar narxlarini, kiruvchi o'tkazishni (inbound transfer), aniq yangilashni yoki EPP kodini olishni ko'rsatmaydi; yangilanishlar faqat avtomatik ravishda qayta yangilanadi.
