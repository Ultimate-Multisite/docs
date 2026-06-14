---
title: Domain xaritasi qanday sozlanadi
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Domenlarni Xarita Qilishni Sozlash (v2)

_**MUHIM Eslatma: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

Premium tarmoqning eng kuchli xususiyatlaridan biri — mijozlaringizga o'z sahifalarga yuqori darajadagi domen (top-level domain) qo'shish imkonini taklif qilishdir. Keyin, qaysi ko'proq professional ko'rinadi: [_**joesbikeshop.yournetwork.com**_ yoki [_**joesbikeshop.com**_? Shuning uchun Ultimate Multisite bu xususiyatni uchinchi tomon pluginidan foydalanishga hojat qilmaysiz, unda allaqachon mavjud holatda taklif qiladi.

## Domen xaritasi nima?

Nomida ko'rsatilganidek, domen xaritasi — Ultimate Multisite tomonidan maxsus domen so'rovi qabul qilish va uni tarmoqdagi tegishli sayt bilan bog'lash imkoniyatidir, shu domen qo'shilgan holda.

### Ultimate Multisite Tarmoqda domen xaritasi qanday sozlanadi

Domen xaritasi ishlashi uchun sizning tomoningizdan ba'zi sozlamalar talab etiladi. Xursandchilikka, Ultimate Multisite bu og'ir ishni avtomatlashtiradi va sizga talablarga oson mos kelish imkonini beradi.

Ultimate Multisite o'rnatilishi davomida, wizard (ko'rsatuvchi) **sunrise.php** faylini belgilangan papkaga avtomatik nusxalaydi va o'rnatadi. **Bu bosqich tugatilmaguncha wizard sizga keyingi qadamga o'tishga ruxsat bermaydi**.

<!-- Screenshot unavailable: Ultimate Multisite o'rnatish wizardi sunrise.php qadami bilan -->

Bu shuni anglatadiki, Ultimate Multisite o'rnatish wizardi tarmoqingizni sozlaganidan so'ng, siz darhol maxsus domen xaritasi qilishni boshlashingiz mumkin.

Eslatma: Ultimate Multisite'dagi domen xaritasi majburiy emas. Siz WordPress Multisite ning mahalliy domen xaritasi funksiyasidan yoki boshqa bir domen xaritasi yechimidan foydalanish imkoniyatiga ega bo'lsangiz ham, shunday qilib tanlov sizda.

Agar siz Ultimate Multisite domen xaritani boshqa domen xaritasi yechimlari uchun o'chirish kerak bo'lsa, buni **Ultimate Multisite > Settings > Domain Mapping** ichidagi sozlamalar orqali o'chirish mumkin.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Bu variantning oldida siz ham **Force Admin Redirect** (Adminni majburiy yo'naltirish) variantini ko'rishingiz mumkin. Bu variant siz mijozlarning o'zlarining maxsus domen va sousdomain orqali admin paneli bilan qaysi biri orqali kirishi mumkinligini boshqarish imkonini beradi.

Agar siz **Force redirect to mapped domain** (Xaritilgan domenga majburiy yo'naltirish) ni tanlasangiz, mijozlarning admin paneli faqat o'zlarining maxsus domenlari orqali kirishi mumkin bo'ladi.

**Force redirect to network domain** (Tarmoq domeniga majburiy yo'naltirish) variant esa teskarisini amalga oshiradi – ular maxsus domenlarida tizimga kirishga urinishsa ham, faqat sousdomainlari orqali panellarga kirishi mumkin bo'ladi.

Va **Allow access to the admin by both mapped domain domain and network domain** (Xaritilgan domen va tarmoq domeni orqali adminga kirishga ruxsat berish) variant ularga ham sousdomain, ham maxsus domen orqali panellarga kirish imkonini beradi.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Maxsus domenni xaritlashning ikki usuli bor. Birinchisi – tarmoq admin panelidan superadmin sifatida domen nomini xaritlash, ikkinchisi esa hisob sahifasidagi sousite admin paneli orqali amalga oshirishdir.

Lekin maxsus domenni tarmoqdagi biror sousitega xaritlashdan oldin, domen nomining **DNS sozlamalarining** to'g'ri konfiguratsiya qilingligiga ishonch hosil qilishingiz kerak.

###

### Domen DNS sozlamalarini to'g'ri konfiguratsiya qilish

Mapping ishlari ishlamasligi uchun siz rejalashtirayotgan domenning tarmoqning IP manziliga yo'naltirilganligini ta'minlashingiz kerak. Eslatma, sizga Tarmoq IP manzili kerak – bu Ultimate Multisite o'rnatilgan domenning IP manzili bo'lishi kerak, xohlagan domen uchun mo'ljallangan maxsus domen IP manzil emas. Ma'lum bir domen IP manzilini qidirish uchun biz [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) kabi joylarga borishingizni taklif qilamiz, masalan.

Domenni to'g'ri mapping qilish uchun siz **DNS** konfiguratsizga o'sha **IP manziliga** yo'naltirilgan **A RECORD** qo'shishingiz kerak. DNS boshqaruvi turli domen ro'yxatgiruvchilarda juda farq qiladi, ammo agar siz " _XXXX_ da A Record yaratish" deb qidirsangiz (masalan: " _GoDaddy_ da A Record yaratish"), bu mavzuni qamrab olgan ko'p tutoriallar onlaynda mavjud.

Agar buni ishlatishda muammolarga duch kelsangiz, **domen ro'yxatgiruvchining yordam xizmatiga murojaating**iz mumkin va ular sizga bu qismda yordam berishadi.

Agar mijozlaringiz o'z domenlarini mapping qilishga ruxsat etmoqchi bo'lsangiz, ular bu qismdagi ishni o'zlari bajarishi kerak bo'ladi. Agar ular A Record yaratishga qodirsiz deb hisoblasalar, ularni o'z ro'yxatgiruvchining yordam tizimiga yo'naltiring.

### Super Admin sifatida maxsus domen nomini mapping qilish

Tarmoqning super admini sifatida tizimga kirganingizda, siz **Ultimate Multisite > Domains** bo'limidan o'tib, maxsus domen nomlarini oson qo'shishingiz va boshqarishingiz mumkin.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Bu sahifada yuqoridagi **Add Domain** tugmasiga bosishingiz mumkin va bu sizga modal oynani ochadi. Bu yerda siz **custom domain name** (maxsus domen nomi), maxsus domen nomini qo'llashni istagan **subsite** (ikki qismdagi sayt) ni sozlab to'ldirishingiz va uni **primary domain** (asosiy domen) sifatida belgilash kerakmi yoki yo'qligini aniqlashingiz mumkin (e'tibor bering, bir subsitega **bir nechta domen nomlarini moslash** mumkin).

![Domain nomi, sayt tanlovchi va asosiy domen tugmasi bilan Add Domain modal](https://img/admin/domain-add-modal.png)

Barcha ma'lumotlarni kiritganingizdan so'ng, siz pastdagi **Add Existing Domain** tugmasiga bosishingiz mumkin.

Bu maxsus domenning DNS ma'lumotlarini tekshirish va olish jarayonini boshlaydi. Jarayonni qanday o'tishini kuzatib borishingiz uchun sahifaning pastki qismida log ham ko'rasiz. Bu jarayon tugash uchun bir nechta daqiqa vaqt olishi mumkin.

Ultimate Multisite v2.13.0 yangi sayt hosil qilindiqda, agar u hostda sayt sifatida ko'rilishi kerak bo'lgan ichki domen yozuvini avtomatik yaratadi. Agar host tarmoqning asosiy domeni yoki **Site URL** maydonida sozlangandek umumiy checkout-form bazaviy domenlardan biridir, avtomatik moslangan domen yozuvi o'tkazilmaydi, shunda bu umumiy bazaviy domen undan foydalanadigan har qanday sayt uchun mavjud bo'lib qoladi.

Agar hamma narsa to'g'ri sozlanib bo'lsa, **Stage** (Bosqich) yoki holat **Checking DNS** dan **Ready** ga o'zgarishi kerak.

![Domainlar ro'yxatida Checking DNS bosqichini ko'rsatuvchi Domain qator](https://img/admin/domain-stage-checking.png)

![Yashil holat indikatori bilan Ready bosqichini ko'rsatuvchi Domain qator](https://img/admin/domain-stage-ready.png)

Agar siz domen nomiga bosgan bo'lsangiz, unda uning ichidagi ba'zi opsiyalarni ko'rishingiz mumkin. Ularni tezda ko'rib chiqamiz:

![Bosqich, sayt, faol va asosiy domen tugmalarini ko'rsatuv Domain tafsilot sahifasi](https://img/admin/domain-edit.png)

**Bosq:** Bu, domenning qaysi bosqichda ekanligini ko'rsatadi. Domenni birinchi marta qo'shganingizda u asosan **DNS tekshirilayotgan** bosqichda bo'ladi. Jarayon DNS kirishlarini tekshirib, ular to'g'ri ekanligini tasdiqlaydi. Keyin domen **SSL tekshirilayotgan** bosqichga o'tadi. Ultimate Multisite domen SSL mavjudmi yoki yo'qligini tekshiradi va sizning domenini **Tayyor** yoki **Tayyor (SSLsiz)** deb tasniflaydi.

**Site:** Bu domen bilan bog'liq sousdomaindir. Xaritaga solingan domen ushbu aniq saytning mazmunini ko'rsatadi.

**Active:** Domenni faollashtirish yoki o'chirish uchun bu opsiyani yoqing yoki o'chiring.

**Is Primary Domain?:** Har bir sayt uchun mijozlaringiz bir nechta xaritaga solingan domenlariga ega bo'lishi mumkin. Bu aniq saytning asosiy domenni ekanligini tanlash uchun ushbu opsiyadan foydalaning.

**Is Secure?:** Ultimate Multisite domen SSL sertifikatiga ega ekanligini tekshirib, uni faollashtirishdan oldin tekshiradi, lekin siz qo'lda SSL sertifikati bilan yoki bilmasdan domenni yuklashni tanlashingiz mumkin. Eslatma: agar veb-saytda SSL sertifikati bo'lmasa va uni majburiy ravishda SSL bilan yuklamoqchi bo'lsangiz, bu xatoliklarga olib kelishi mumkin.

### Subsite foydalanuvchisi sifatida maxsus domen nomini xarita qilish

Subsite administratorlari ham o'zlarining subsite admin panelidan maxsus domen nomlarini xarita bera olishadi.

Avvalo, **Domain mapping** sozlamalarida bu opsiyani yoqganligiga ishonch hosil qiling. Quyidagi skrinshotga qarang.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Shuningdek, siz **Ultimate Multisite > Products** bo'yicha **Plan** darajasida yoki mahsulot opsiyalari orqali bu opsiyani sozlash yoki konfiguratsiya qilishlari mumkin.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Agar ushbu variantlardan biri yoqilgan bo'lsa va subsite foydalanuvchisiga maxsus domen nomlarini (custom domain names) xaritadan o'tkazish ruxsat etilsa, subsite foydalanuvchisi **Account** sahifasida **Domains** deb nomlangan metaboxni ko'rishi kerak.

<!-- Screenshot unavailable: Subsite Account sahifasidagi Domains metaboxining tasviri Add Domain tugmasi bilan -->

Foydalanuvchi **Add Domain** tugmasini bosishi mumkin va bu subsite foydalanuvchilari uchun ba'zi ko'rsatmalar bilan modal oynani ochadi.

<!-- Screenshot unavailable: Subsite foydalanuvchilari uchun DNS A-record ko'rsatmalarini ko'rsatadigan Add Domain modalining tasviri -->

Keyin foydalanuvchi **Next Step** tugmasini bosib, maxsus domen nomini qo'shish jarayoniga o'tishi mumkin. U shuningdek, bu asosiy (primary) domen bo'lishi kerakmi yoki emasligini tanlash imkoniyatiga ega.

<!-- Screenshot unavailable: Maxsus domen nomi maydoni va asosiy domenni o'chirish tugmasi bilan Add Domain shakli tasviri -->

<!-- Screenshot unavailable: DNS tekshiruvini boshlovchi Add Domain tasdiqlash bosqichi tasviri -->

**Add Domain** tugmasiga bosish maxsus domenning DNS ma'lumotlarini tekshirish va olish jarayonini boshlaydi.

### Domenlarni sinxronlash haqida

Domenlarni sinxronlash — bu Ultimate Multisite tomonidan maxsus domen nomini hosting hisobingizga qo'shimcha domen sifatida (add-on domain) qo'shish jarayoni bo'lib, **domen xaritasi ishlashi uchun** amalga oshiriladi.

Hosting provayderining Ultimate Multisite domen xaritasi funksiyasi bilan integratsiyalashgan bo'lsa, bu sinxronlash avtomatik ravishda sodir bo'ladi. Hozircha bular hosting provayderlari _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ va _Cpanel._

Hosting provayderi integratsiyasi faol bo'lganda, Ultimate Multisite yangi yaratilgan saytlar uchun provayder tomonidagi DNS yoki sousdomain yaratish vazifasini ham kuyga olish (enqueue) imkoniyatiga ega. Agar hech qaysi integratsiya ushbu vazifa uchun tinglamasa, no-op (no-operation) kuy kirishlarini oldini olish uchun fon ishchi vazifasi o'tkazilmaydi. Xaritilgan domenlar uchun DNS va SSL tekshiruvlari normal domen bosqichi jarayoni orqali davom etadi.

Ultimate Multisite sozlamalarida **Integration** (Integratsiya) yorlig'idan o'chirilgan bu integratsiyani faollashtirishingiz kerak.

![Ultimate Multisite sozlamalaridagi Integratsiyalar tabsi](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Integratsiyalar sozlamalari tabidagi hosting provayderlari konfiguratsiya linklari -->

_Eslatma: agar sizning hosting provayderingiz yuqorida sanab o'tilganlardan biri bo'lmasa, **siz domen nomini qo'lda sinxron qilishingiz yoki hosting hisobingizga qo'shishingiz kerak**._
