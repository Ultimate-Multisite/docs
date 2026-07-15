---
title: Domen sotuvchisi o‘zgarishlar jurnali
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller o‘zgarishlar jurnali

Versiya 1.3.0 - 2026-06-02 da chiqarilgan
- Yangi: HostAfrica reseller balansi juda kamayib ketganda network-admin ogohlantirishi qo‘shildi
- Yangi: Yangi ro‘yxatdan o‘tkazilgan domenlarni network sitega avtomatik xaritalash qo‘shildi
- Tuzatish: Ro‘yxatdan o‘tkazuvchi maydon talablari faqat yangi domen ro‘yxatdan o‘tkazilayotganda qo‘llandi
- Tuzatish: Balansni kuzatish bildirishnomalarini yopib qo‘yish mumkin qilindi
- Tuzatish: WooCommerce ro‘yxatdan o‘tkazuvchi billing tafsilotlari saqlanishi ta’minlandi
- Tuzatish: Ro‘yxatdan o‘tkazish vaqtida ro‘yxatdan o‘tkazuvchi aloqa talablari majburiy qilindi
- Tuzatish: Domen ro‘yxatdan o‘tkazish mahsulotlari 0% ustama bilan yaratilishining oldi olindi
- Tuzatish: Checkout sessiyasi oqimi davomida domen tanlovlari va narxlar saqlab qolindi
- Tuzatish: HostAfrica domen narxlari valyuta ko‘rsatilishi yaxshilandi
- Tuzatish: WP-core query-var nomuvofiqliklarining oldini olish uchun checkout form-action xatti-harakati yaxshilandi
- Yaxshilandi: Sozlash bo‘yicha ko‘rsatmada HostAfrica reseller konfiguratsiyasi hujjatlariga havola berildi

Versiya 1.2.0 - 2026-05-25 da chiqarilgan
- Yangi: HostAfrica checkout, sozlash ustasi, qidirish, TLD/narxlash, ro‘yxatdan o‘tkazish, yangilash, ko‘chirish, nameserver, DNS, EPP code, registrar lock va ID himoyasi qo‘llovi bilan domen sotish integratsiyasi sifatida qo‘shildi
- Yangi: Openprovider reseller narxlari, ro‘yxatdan o‘tkazish, yangilash, ko‘chirish, nameserver, DNS, EPP code, registrar lock, WHOIS privacy va TLD sinxronlash qo‘llovi bilan domen sotish integratsiyasi sifatida qo‘shildi
- Yangi: Hostinger mavjudlik tekshiruvlari, ro‘yxatdan o‘tkazish, nameserver yangilanishlari, registrar lock va WHOIS privacy uchun asosiy integratsiyadagi umumiy Hostinger API tokenidan foydalanadigan domen sotish integratsiyasi sifatida qo‘shildi
- Yaxshilandi: Dasturchilar integratsiyasi bo‘yicha ko‘rsatma uchun domen hayotiy sikli amali va filter docblocklari qo‘shildi
- Yaxshilandi: Addon readme faylida plugin moslik metama’lumotlari WordPress 7.0 ga yangilandi
- Yaxshilandi: Kelgusi relizlarni muvofiqlashtirish uchun ishlatiladigan rejalashtirish shablonlari yangilandi

Versiya 1.1.0 - 2026-05-08 da chiqarilgan
- Yangi: DNS yozuvi yaratish (add_dns_record) ResellerClub, Enom va OpenSRS registrarlari uchun joriy qilindi
- Tuzatish: Standart DNS Records parseri endi {DOMAIN} va {SITE_URL} tokenlariga toqat qiladi
- Tuzatish: Domain tanlash checkout maydoni sluglari site_url bilan to‘qnashuvning oldini olish uchun namespace qilindi

Versiya 1.0.8 - 2026-05-07 da chiqarilgan
- Tuzatish: ResellerClub domen narxlari endi to‘g‘ri API endpointdan jonli tannarx narxlarini oladi

Versiya 1.0.7 - 2026-05-06 da chiqarilgan
* Tuzatish: ResellerClub test_connection zarur tlds parametrini yuboradi (#224)

Versiya 1.0.6 - 2026-05-05 da chiqarilgan
* Tuzatish: ResellerClub domen ro‘yxatdan o‘tkazishi endi yaxshilangan API javobi qayta ishlanishi va registrga asoslangan provider marshrutlash bilan to‘g‘ri ishlaydi
* Tuzatish: Register Domain admin sahifasi UX yaxshilanishlari
* Olib tashlandi: CyberPanel registrar integratsiyasi

Versiya 1.0.5 - 2026-04-02 da chiqarilgan
* Yangi: Domen ro‘yxatdan o‘tkazish va boshqarish uchun GoDaddy registrar integratsiyasi
* Yangi: NameSilo registrar integratsiyasi
* Yangi: ResellerClub registrar integratsiyasi
* Yangi: Domen xaridi va xaritalashda SES yuborish domenini avtomatik tasdiqlash
* Tuzatish: Test muhitida plugin konstantalari qayta ta’riflanishdan himoyalandi
* Tuzatish: MySQL flags install-wp-tests.sh faylida to‘g‘ri word-split qilinadi

Versiya 1.0.4 - 2026-03-14 da chiqarilgan
* **Tuzatish:** Ba’zi yetishmayotgan css assetlari
* **Tuzatish:** Mavjud bo‘lmagan tldlar bilan bog‘liq xato

Versiya 1.0.3 - 2026-03-09 da chiqarilgan
* **Tuzatish:** Checkout shortcode bilan legacy ro‘yxatdan o‘tish shablonidan foydalanganda Vue reaktiv xususiyat xatolari (domain_option, selected_domain, domain_provider)
* **Tuzatish:** Domen tanlash checkout maydonida subdomen kiritish maydonining noto‘g‘ri tekislanishi va matnning haddan tashqari kattaligi
* **Tuzatish:** Domen tanlash maydoni mavjud bo‘lganda "Your URL will be" oldindan ko‘rish bloki yashirildi

Versiya 1.0.2 - 2026-03-01 da chiqarilgan
* **Yaxshilandi:** Sozlamalar sahifasidan global ustama sozlamalari olib tashlandi — narxlash endi faqat har bir mahsulot bo‘yicha
* **Yaxshilandi:** Tez navigatsiya uchun sozlamalar sahifasiga "Domen mahsulotlarini boshqarish" havolasi qo‘shildi
* **Yaxshilandi:** Domen mahsuloti sozlamalari uchun maydon tavsiflari va tooltiplar aniqroq qilindi (catch-all va TLD-ga xos, ustama turlari, kirish narxlari)
* **Yaxshilandi:** Sozlamalar sahifasi bo‘ylab yaxshiroq tavsiflar (TLDlarni qidirish, yangilashlar, DNS, bildirishnomalar)

Versiya 1.0.1 - 2026-02-27 da chiqarilgan

* **Yangi:** Ommaviy narxlarni boshqarish uchun TLD import vositasi
* **Yangi:** Domen mahsulotlari uchun kirish narxlari qo‘llab-quvvatlashi
* **Yangi:** Cypress bilan E2E test to‘plami
* **Yangi:** Domen hayotiy sikli bildirishnomalari uchun email shablonlari
* **Yangi:** Admin domen ro‘yxatdan o‘tkazish modal oynasida sozlamalardan oldindan to‘ldirilgan ro‘yxatdan o‘tkazuvchi manzil maydonlari
* **Yangi:** Yozuv qo‘shish, tahrirlash va o‘chirish qo‘llab-quvvatlovi bilan mijoz DNS boshqaruv interfeysi
* **Yangi:** Avtomatik domen xaritalash bilan "O‘z domeningizni olib keling" checkout opsiyasi
* **Yangi:** Checkout paytida domen nomidan site URL manzilini avtomatik yaratish
* **Yangi:** Sozlamalarda standart nameserver va DNS yozuvi konfiguratsiyasi
* **Yangi:** Asosiy domen tahrirlash sahifasida domen ro‘yxatdan o‘tkazish tafsilotlari va DNS boshqaruvi
* **Yangi:** Setup wizard oqilona standartlar bilan standart domen mahsulotini avtomatik yaratadi
* **Yangi:** Barcha sozlangan provayderlar bo‘ylab cron orqali kundalik avtomatik TLD sinxronlash
* **Yangi:** Har bir mahsulot bo‘yicha konfiguratsiya bilan WHOIS maxfiylik himoyasi (doim yoqilgan, mijoz tanlovi yoki o‘chirilgan)
* **Yangi:** Narx ko‘rsatilishi va dark mode qo‘llab-quvvatlovi bilan WHOIS maxfiylik checkout checkboxi
* **Yangi:** Qo‘lda domen ro‘yxatdan o‘tkazish uchun Register Domain admin sahifasi
* **Yangi:** Ultimate Multisite yangilash serveri orqali avtomatik plugin yangilanishlari
* **Yangi:** Mahsulotlar ro‘yxati jadvalida binafsha badge uslubi bilan domen mahsulot turi filter tabi
* **Yangi:** Domen checkout formasida ro‘yxatdan o‘tkazuvchi aloqa maydonlari (ism, manzil, shahar, shtat, pochta indeksi, mamlakat, telefon)
* **Yangi:** Registrar API chaqirishdan oldin aniq xato xabarlari bilan ro‘yxatdan o‘tkazuvchi maydonlarini tekshirish
* **Yangi:** Domen ro‘yxatdan o‘tkazish hodisalari uchun provayderga xos log kanallari (masalan, domain-seller-namecheap.log)
* **Yangi:** Asosiy ro‘yxatdan o‘tish/signup checkout formasida ro‘yxatdan o‘tkazuvchi aloqa maydonlari (domen ro‘yxatdan o‘tkazilganda ko‘rsatiladi)
* **Yaxshilandi:** Domain Search checkout maydoni subdomain, ro‘yxatdan o‘tkazish va mavjud domen tablarini qo‘llab-quvvatlaydigan yagona Domain Selection maydoni bilan almashtirildi
* **Yaxshilandi:** Domen mahsulot sozlamalari asosiy widget tizimi orqali mahsulot tahrirlash sahifasida inline ko‘rsatiladi
* **Yaxshilandi:** Mijoz domen ma’lumotlari alohida metabox o‘rniga asosiy domen xaritalash widgetiga ulanadi
* **Yaxshilandi:** TLD import wizard barcha provayderlardan bir bosishli sinxronlashgacha soddalashtirildi
* **Yaxshilandi:** Namecheap domen mavjudligini tekshirish tezroq qidiruv uchun batch API chaqiruvidan foydalanadi
* **Yaxshilandi:** Namecheap narxlash API to‘g‘ri parametrlar va javob tahlilidan foydalanadi
* **Yaxshilandi:** TLD saqlash yagona network option ichida markazlashtirildi
* **Yaxshilandi:** DNS o‘zgarishlari, transferlar va konfiguratsiya qo‘llanishi uchun domen faoliyati loglanishi
* **Yaxshilandi:** Batch tekshiruv bilan IANA master ro‘yxatidan foydalanib OpenSRS uchun to‘liq TLD sinxronlash
* **Yaxshilandi:** Sahifalangan API so‘rovlari bilan Namecheap uchun to‘liq TLD sinxronlash
* **Yaxshilandi:** Eski provayder klasslari Integration Registry pattern bilan almashtirildi
* **Yaxshilandi:** DNS va transfer konfiguratsiyasi bilan sozlamalar paneli
* **Yaxshilandi:** Telefon raqamlari avtomatik ravishda +CC.NNN registrar formatiga keltiriladi
* **Yaxshilandi:** Telefon maydoni tekshiruvi yuborishdan oldin formatlash belgilarini olib tashlaydi
* **Yaxshilandi:** Versiya talabi aniqroq xabarnoma bilan Ultimate Multisite 2.4.12 ga oshirildi
* **Yaxshilandi:** CI workflow ham addon, ham asosiy plugin uchun to‘g‘ri checkoutdan foydalanadi
* **Yaxshilandi:** prepare_registrant_info() billing manzil fallbacki bilan checkoutda saqlangan foydalanuvchi metasidan o‘qiydi
* **Tuzatildi:** Checkout paytida tizimga kirmagan foydalanuvchilar uchun domen qidirish AJAX ishlamay qolishi
* **Tuzatildi:** Checkout paytida tizimga kirmagan foydalanuvchilar uchun domen narxlash AJAX ishlamay qolishi
* **Tuzatildi:** WP-CLI buyruqlari ishga tushirilganda Spyc klassining qayta e’lon qilinishi fatal errori
* **Tuzatildi:** Namecheap sandbox API timeouti juda qisqa
* **Tuzatildi:** Domen qidirish Select tugmasi matni yashil fonda ko‘rinmasligi
* **Tuzatildi:** Aloqa ma’lumotlari yetishmagani sababli "RegistrantFirstName is Missing" xatosi bilan domen ro‘yxatdan o‘tkazish muvaffaqiyatsiz bo‘lishi
* **Tuzatildi:** Checkout vaqtida site hali mavjud bo‘lmaganda blog_id=0 bilan domen yozuvi yaratilishi
* **Tuzatildi:** Standart TLDlar sozlamasi tahlil qilingan massiv o‘rniga satr sifatida qaytarilishi
* **Olib tashlandi:** Alohida Domain Management admin sahifasi — endi asosiy domen sahifalari orqali boshqariladi

Versiya 1.0.0 - 2025-09-28 da chiqarilgan

**Ultimate Multisite v2 uchun katta qayta yozish**

* **Yangi:** Zamonaviy PHP 7.4+ arxitekturasi bilan to‘liq qayta yozish
* **Yangi:** Ultimate Multisite v2 checkout tizimi bilan uzluksiz integratsiya
* **Yangi:** Moslashuvchan narxlash opsiyalari bilan domen mahsulot boshqaruvi
* **Yangi:** Bir nechta domen provayderlarini qo‘llab-quvvatlash arxitekturasi
* **Yangi:** Avtomatik yangilash va obuna integratsiyasi
* **Yangi:** Mijoz domen boshqaruv interfeysi
* **Yangi:** Admin domen monitoringi va loglar
* **Yangi:** Domen mahsulotlari uchun kupon qo‘llab-quvvatlovi
* **Yangi:** Keng qamrovli sozlamalar boshqaruvi
* **Yangi:** Dasturchilar uchun qulay kengaytiriladigan kod bazasi
* **Yaxshilandi:** To‘liq funksiya qo‘llab-quvvatlovi bilan OpenSRS provayderi yangilandi
* **Yaxshilandi:** Ultimate Multisite v2 bilan mos zamonaviy UI
* **Tuzatildi:** Barcha eskirgan v1 kodi v2 standartlariga yangilandi
* **Olib tashlandi:** Eski v1 mosligi (buzuvchi o‘zgarish)

### Oldingi versiyalar (v1 Legacy) {#previous-versions-v1-legacy}

### Versiya 0.0.3 - 20/08/2019 {#version-003---20082019}

* Tuzatildi: Groundhogg CRM bilan nomoslik
* Eslatma: Bu v1 bilan mos keladigan oxirgi reliz edi

### Versiya 0.0.2 - 07/12/2018 {#version-002---07122018}

* Tuzatildi: License Key maydoni olib tashlandi
* Tuzatildi: Feature plugin faol bo‘lganda reja tablari yo‘qligi
* Yaxshilandi: Ro‘yxatdan o‘tish maydoniga o‘tkazib yuborish tugmasi qo‘shildi

### Versiya 0.0.1 - Dastlabki reliz {#version-001---initial-release}

* WP Ultimo v1 uchun asosiy OpenSRS integratsiyasi
* Oddiy domen qidiruvi va ro‘yxatdan o‘tkazish
* Rejaga asoslangan domen ruxsatlari
