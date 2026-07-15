---
title: Boshqaruv paneli integratsiyasini yaxshilash
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Control Panel Integratsiyasini Kuchaytirish

## Umumiy Ko'rinish {#overview}
Enhance — bu kuchli hosting avtomatlashtirish va boshqaruv imkoniyatlarini taqdim etadigan zamonaviy kontrol paneldir. Bu integratsiya Ultimate Multisite va Enhance Kontrol Paneli o'rtasida domenlarni avtomatik sinxronlash va SSL sertifikatlarini boshqarishni imkon beradi.

**Bog'liq Muzokara:** jamoatchilik maslahatlari va qo'shimcha ma'lumotlar uchun [GitHub Muzokarasi #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ni ko'ring.

## Xususiyatlar {#features}
- Ultimate Multisite da domenlar xarita qilinganida avtomatik domen sinxronlash
- DNS aniqlanganda LetsEncrypt orqali avtomatik SSL sertifikatini taqdim etish
- Subdomain rejimida ishlaydigan tarmoqlar uchun subdomain qo'llab-quvvatlash
- Xarita o'chirilganda domenlarni olib tashlash
- API ma'lumotlarini tekshirish uchun ulanishni sinovdan o'tkazish

## Talablar {#requirements}

### Tizim Talablari {#system-requirements}
- Enhance Kontrol Paneli o'rnatilgan va kirish mumkin bo'lishi kerak
- WordPress Multisite o'rnatilishi Enhance serverida joylashgan yoki unga ulanishda bo'lishi kerak
- Apache veb-server (Enhance hozirgi vaqtda Apache konfiguratsiyalarini qo'llab-quvvatlaydi; LiteSpeed Enterprise kamroq narxda mavjud)

### API Kirishiga {#api-access}
API tokenlarini yaratish uchun Enhance Kontrol Paneli administratoriga kirish huquqiga ega bo'lishingiz kerak.

## API Ma'lumotlaringizni Olish {#getting-your-api-credentials}

### 1. API Tokenini Yaratish {#1-create-an-api-token}

1. Administrator sifatida Enhance Kontrol Paneline tizimga kiring
2. navigatsiya menyusidagi **Settings** (Sozlamalar) tugmasiga bosing
3. **Access Tokens** (Kirish Tokenlari) qismiga o'ting
4. **Create Token** (Token yaratish) tugmasini bosing
5. tokenga tavsifli nom bering (masalan, "Ultimate Multisite Integratsiyasi")
6. **System Administrator** (Tizim administrator) rolini tayining
7. muddati uchun:
   - token hech qachon muddati bo'lmasligi kerak bo'lsa, bo'sh qoldiring
   - yoki xavfsizlik maqsadida aniq muddati belgilang
8. **Create** (Yaratish) tugmasini bosing

Yaratishdan so'ngin, sizning **Access Token** va **Organization ID** ko'rsatiladi. Buni darhol saqlab qo'ying, chunki token faqat bir marta ko'rsatiladi.

### 2. Organization ID-ni olish {#2-get-your-organization-id}

Organization ID Access Tokenlar sahifasida "Org ID: {your_id}" deb belgilangan ko'k ma'lumot qutisi ichida ko'rsatiladi.

Organization ID quyidagi formatdagi UUID (Universallydan identifikator) shaklida bo'ladi: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Mijozning Organization ID-sini quyidagicha ham topishingiz mumkin:
1. **Customers** sahifasiga o'ting
2. tegishli mijoz uchun **Manage customer** (mijozni boshqarish) tugmasini bosing
3. URL ko'rinishiga qarang - Organization ID `/customers/` dan keyingi alfanumerik belgilar hisoblanadi.

### 3. Server ID-ni olish {#3-get-your-server-id}

Server ID-ni topish uchun (domen operatsiyalari uchun kerak):

1. Enhance Control Panelda **Servers** (Serverlar) bo'limiga o'ting
2. WordPress o'rnatilgan server ustiga bosing
3. Server ID (UUID formatida) URL da yoki server ma'lumotlarida ko'rinadi
4. Alternativ ravishda, serverlarni ro'yxatdan o'tish uchun API dan foydalanishingiz mumkin:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID UUID formatida quyidagicha bo'ladi: `00000000-0000-0000-0000-000000000000`

### 4. API URL-ni olish {#4-get-your-api-url}

Sizning API URL-ingiz Enhance Control Panel URL'ingizga `/api/` qo'shilgan shakli bo'ladi:

```
https://your-enhance-panel.com/api/
```

**Muhim:** `/api/` yo'li shartdir. Odatdagi xatolar quyidagilardan iborat:
- Faqat domainni va `/api/` ni ishlatmaslik
- Xavfsizlik uchun HTTP o'rniga HTTPS dan foydalanmaslik (xavfsizlik uchun HTTPS talab qilinadi)

## Konfiguratsiya {#configuration}

### Talab qilinadigan konstantalar {#required-constants}

Quyidagi konstantalarni `wp-config.php` faylingizga qo'shing:

// Control Panel Integratsiyasini Kuchaytirish
define('WU_ENHANCE_API_TOKEN', 'sizning-bearer-token-ingizda');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'sizning-server-uuid-ingizda');

### Integratsiya Viloyatida Sozlash (Setup via Integration Wizard) {#setup-via-integration-wizard}

1. WordPress admin panelida **Ultimate Multisite** > **Settings** ga kiring
2. **Integrations** yorlig'iga o'ting
3. **Enhance Control Panel Integration** ni toping va **Configuration** tugmasini bosing
4. Wizard sizga sozlash jarayonida yo'l ko'rsatadi:
   - **1-qadam:** Kirish va xususiyatlar umumiy ko'rinishi
   - **2-qadam:** API ma'lumotlaringizni kiriting (Token, API URL, Server ID)
   - **3-qadam:** Bog'lanishni tekshirish
   - **4-qadam:** Ko'rib chiqish va faollashtirish

Siz quyidagilardan birini tanlashingiz mumkin:
- Wizardning sizning `wp-config.php` faylingizga konstantlarni avtomatik kiritishiga ruxsat berish
- Konstanta ta'riflarini nusxalab, ularni qo'lda qo'shish

## Qo'shimcha WordPress Sozlamalari (Additional WordPress Configuration) {#additional-wordpress-configuration}

Jamoatchilik fikrlariga asoslanib ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), siz quyidagi qo'shimcha sozlamalarni konfiguratsiya qilishingiz kerak bo'lishi mumkin:

### .htaccess Konfiguratsiyasi {#htaccess-configuration}

Agar domen xaritalashida muammolar yuz bersa:
1. Asl Enhance `.htaccess` faylini o'chiring
2. Uni standart WordPress Multisite `.htaccess` fayli bilan almashtiring

### Cookie Konstanta (Cookie Constants) {#cookie-constants}

Xarita qilingan domenlar bo'ylab to'g'ri cookie boshqarilishini ta'minlash uchun bu konstantlarni `wp-config.php` ga qo'shing:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Qanday Ishlaydi (How It Works) {#how-it-works}

### Domen Xaritasi Qilinganda (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. Foydalanuvchi Ultimate Multisite'da o'ziga xos domen (yoki subdomain rejimida yangi sayt yaratilsa) moslashuvni amalga oshiradi.
2. Integratsiya Enhance API-ga POST so'rovi yuboradi: `/servers/{server_id}/domains`
3. Enhance domenini sizning server konfiguratsiyangizga qo'shadi.
4. DNS sizning serveringizga aniqlanganida, Enhance avtomatik ravishda LetsEncrypt orqali SSL sertifikatini taqdim etadi.
5. Domen HTTPS bilan faollashadi.

### Domen Olib Tashlab Ketilganda {#when-a-domain-is-removed}

1. Ultimate Multisite'da domen moslashuvini o'chirasiz.
2. Integratsiya domen ID'sini topish uchun Enhance-ga so'rov yuboradi.
3. `/servers/{server_id}/domains/{domain_id}` manziliga DELETE so'rovi yuboriladi.
4. Enhance domenini sizning server konfiguratsiyangizdan olib tashlaydi.

### DNS va SSL Tekshiruvi {#dns-and-ssl-checking}

Ultimate Multisite ichida o'zida DNS va SSL tekshiruvlari mavjud:
- Siz **Domain Mapping Settings** (standart: 300 soniya/5 daqiqa)da tekshiruv oralig'ini sozlashim mumkin.
- Domenni faollashtirishdan oldin tizim DNS tarqalishini tekshiradi.
- SSL sertifikatining amal qilish muddati avtomatik tekshiriladi.
- Enhance SSL taqdimotini avtomatik boshqaradi, shuning uchun qo'lda SSL konfiguratsiyasi talab qilinmaydi.

## Sozlamani Tasdiqlash {#verifying-setup}

### Ulanishni Sinovdan O'tkazish {#test-the-connection}

1. Integratsiya Wizardida **Test Connection** (Ulanishni sinovdan o'tkazish) bosqichidan foydalaning.
2. Plugin sizning serveringizdagi domenlarni ro'yxatlashga harakat qiladi.
3. Muvaqqat muvaffaqiyat xabari quyidagilarni tasdiqlaydi:
   - API ma'lumotlari to'g'ri
   - API URL'i kirish mumkin
   - Server ID haqiqiy
   - Ruxsatnomalar to'g'ri sozlangandi

### Domen Moslashganidan So'ng {#after-mapping-a-domain}

1. Ultimate Multisite'da sinov domenini moslang.
2. Ultimate Multisite loglarini tekshiring (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Enhance Control Panelida domen qo'shilganligini tasdiqlang:
   - **Servers** > **Your Server** > **Domains** ga kiring.
   - Yangi domen ro'yxatda paydo bo'lishi kerak.
4. DNS tarqalib ketgandan so'ng, SSL avtomatik taqdim etilganligini tekshiring.

## Muammolarni Qayta Ko'rish (Troubleshooting) {#troubleshooting}

### API Bog'liqliklari {#api-connection-issues}

**Xato: "Enhance APIga ulanishda muvaffaqiyatsiz bo'ldi"**
- `WU_ENHANCE_API_URL` oxirida `/api/` mavjudligini tekshiring.
- HTTP emas, balki HTTPS dan foydalanayotganingizga ishonch hosil qiling.
- Enhance paneli WordPress serveringizdan kirish mumkinligini tekshiring.
- Ulanishni bloklaydigan hech qanday firewall qoidasi borligini tekshiring.

**Xato: "Enhance API Token topilmadi"**
- `WU_ENHANCE_API_TOKEN` ning `wp-config.php` faylida e'lonlanganligini ta'minlang.
- Token Enhance ichida o'chirilmagan yoki muddati tugaganligini tekshiring.
- Token qiymatidagi yozuvdagi xatoliklarni tekshiring.

**Xato: "Server ID sozlanmagan"**
- `WU_ENHANCE_SERVER_ID` ning `wp-config.php` faylida e'lonlanganligini tekshiring.
- Server ID ning UUID formatiga mos kelishini ta'minlang.
- Serverning Enhance panelingizda mavjudligini tasdiqlang.

### Domen Qo'shilmagan {#domain-not-added}

**Loglarni tekshirish:**
1. **Ultimate Multisite** > **Logs** ga kiring.
2. **integration-enhance** bo'yicha filtrlashni tanlang.
3. Muammoni ko'rsatadigan xatolik xabarlarini qidiring.

**Keng tarqalgan sabablar:**
- Notuzkor domen nomi formatlari
- Domen allaqachon Enhance ichida mavjud bo'lishi
- API imkoniyatlari yetarli emasligi (tokenning System Administrator roli borligiga ishonch hosil qiling)
- Server ID ning Enhance dagi haqiqiy server bilan mos kelmasligi

### SSL Sertifikati Muammolari {#ssl-certificate-issues}

**SSL taqdim etilmayapti:**
- DNS serveringiz IP manziliga yo'naltirilganini tekshiring.
- Domen to'g'ri aniqlanib ekanligini tekshiring: `nslookup yourdomain.com`
- Enhance SSLni taqdim etishdan oldin DNS ning aniqlanishi kerak.
- SSL taqdim etilishi odatda DNS tarqalishidan so'ng 5-10 daqiqa vaqt oladi.
- SSL bilan bog'liq xatoliklar uchun Enhance Control Panel loglarini tekshiring.

**Enhance ichida qo'lda SSL muammolarini hal qilish:**
1. **Servers** > **Your Server** > **Domains** ga kiring.
2. Domeningizni toping va uning SSL holatini tekshiring.
3. Kerak bo'lsa, SSL taqdim etishni qo'lda boshlashingiz mumkin.

### DNS Tekshiruv Oralig'i {#dns-check-interval}

Agar domenlar yoki SSL sertifikatlari faollashishda juda uzoq vaqt olsayotgan bo'lsa:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** ga o'ting.
2. **DNS Check Interval** sozlamasini toping.
3. Uni standart 300 soniyadan (sekunddan) pastroq qiymatga (minimal: 10 soniya) sozlang.
4. **Eslatma:** Pastroq interval bu ko'proq tekshiruvlar degani, lekin server yuklamasi yuqori bo'lishi mumkin.

### Autentifikatsiya Xatoliklari {#authentication-errors}

**HTTP 401/403 xatolar:**
- Enhance ichida API tokeningizni qayta yaratib chiqing (Regenerate).
- Tokenning **System Administrator** roli borligini tekshiring.
- Token muddati tugamaganligini tekshiring.
- To'g'ri Tashkilot ID dan foydalanayotganingizga ishonch hosil qiling (garchi bu odatda URL da talab qilinmasa ham).

### Loglarni Tahlil Qilish {#log-analysis}

Tafsilotli loggingni yoqing:
```php
// Kuchaytirilgan xatoliklar uchun wp-config.php ga qo'shing
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Keyin loglarni quyidagi joylardan tekshiring:
- Ultimate Multisite loglari: **Ultimate Multisite** > **Logs**
- WordPress debug logi: `wp-content/debug.log`
- Enhance paneli loglari: Enhance'ning admin interfeysida mavjud

## API Ma'lumotnomasi {#api-reference}

### Autentifikatsiya {#authentication}
Barcha API so'rovlari Bearer token autentifikatsiyasidan foydalanadi:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Foydalaniladigan Umumiy Endpointlar {#common-endpoints-used}

**Serverlarni ro'yxatlash:**
```
GET /servers
```

**Serverda domenlarni ro'yxatlash:**
```
GET /servers/{server_id}/domains
```

**Domen qo'shish:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domenni o'chirish:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### To'liq API Dokumentatsiyasi {#full-api-documentation}
To'liq API dokumentatsiyasi: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Eng Yaxshi Amaliyotlar {#best-practices}

### Xavfsizlik (Security) {#security}
- **API tokenlarini hech qachon versiya boshqaruv tizimiga (version control) qo'ymang**
- Tokenlarni `wp-config.php` faylida saqlang, bu fayl Git dan tashqiri bo'lishi kerak
- Tegishli ruxsatnomalarga ega tokenlardan foydalaning (to'liq integratsiya uchun System Administrator)
- Prod muhitlari uchun token muddati tugash sanalarini belgilang
- Tokenlarni muntazam ravishda yangilang

### Ishlash samaradorligi (Performance) {#performance}
- Haddan tashqari ko'p API chaqiruvlardan saqlanish uchun standart DNS tekshiruvi oralig'ini (300 soniya) ishlating
- Katta miqdordagi domen operatsiyalarini amalga oshirishda Enhance server resurslarini kuzatib boring
- Bir vaqtning o'zida ko'p domenlarni xarita qilishni hisobga olgan holda domen qo'shishni ketma-ketlashtirishni ko'rib chiqing

### Monitoring (Nizolantirish) {#monitoring}
- Integratsiya xatolarini tekshirish uchun Ultimate Multisite loglarini muntazam tekshiring
- Domenlarni qo'shishdagi muvaffaqiyatsizliklar uchun monitoring tizimini sozlang
- SSL sertifikatlarining to'g'ri taqdim etilayotganligini tasdiqlang
- Enhance server quvvatini va domen cheklovlarini kuzatib boring

## Qo'shimcha resurslar (Additional Resources) {#additional-resources}

- **Enhance Rasmiy hujjatlari:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Hujjatlari:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Jamoatchilik forumi:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Diskussiyasi:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domen Xaritasi Qo'llanmasi:** "How to Configure Domain Mapping v2" wiki sahifasiga qarang

## Qo'llab-quvvatlash (Support) {#support}

Agar muammolarga duch kelsangiz:
1. Yuqoridagi Troubleshooting (Muammolarni hal qilish) bo'limini tekshiring
2. Ultimate Multisite loglarini ko'rib chiqing
3. [GitHub Diskussiyalaridan](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) foydalaning
4. panelga xos muammolar uchun Enhance yordamiga murojaat qiling
5. jamoatchilik yordami olish uchun batafsil xato loglari bilan yangi diskussiya oching

## Eslatmalar (Notes) {#notes}

Bu integratsiya faqat domen aliaslarini boshqaradi; SSLni Enhance avtomatik boshqaradi.
Integratsiya hem xususiy domen moslamalarini ham, subdomenli saytlarni ham qo'llab-quvvatlaydi.
Avtomatik www subdomeni yaratish Domain Mapping sozlamalarida konfiguratsiyalangan bo'ladi.
Enhance hozirda Apache konfiguratsiyalarini (LiteSpeed Enterprise mavjud) qo'llab-quvvatlaydi.
Ultimate Multisite dan domen olinishi Enhance dan domenni olib tashlasa-da, bog'liq SSL sertifikatlarini darhol o'chirmasligi mumkin.
