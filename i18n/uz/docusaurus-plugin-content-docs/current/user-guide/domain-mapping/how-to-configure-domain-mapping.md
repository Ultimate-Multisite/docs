---
title: Domen xaritalashni qanday sozlash mumkin
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domen xaritalashni qanday sozlash kerak (v2) {#how-to-configure-domain-mapping-v2}

_**MUHIM ESLATMA: Ushbu maqola Ultimate Multisite 2.x versiyasiga tegishli.**_

Premium tarmoqning eng kuchli xususiyatlaridan biri — mijozlarimizga o‘z saytlariga yuqori darajali domen ulash imkoniyatini berishdir. Axir, qaysi biri professionalroq ko‘rinadi: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) yoki [_**joesbikeshop.com**_](http://joesbikeshop.com)? Shu sababli Ultimate Multisite bu xususiyatni uchinchi tomon pluginlaridan foydalanish zaruratisiz, ichki tarzda taqdim etadi.

## Domen xaritalash nima? {#whats-domain-mapping}

Nomidan ko‘rinib turibdiki, domen xaritalash — Ultimate Multisite tomonidan taqdim etiladigan imkoniyat bo‘lib, maxsus domen uchun kelgan so‘rovni qabul qiladi va ushbu so‘rovni tarmoqdagi aynan shu domen ulangan mos saytga yo‘naltiradi.

### Ultimate Multisite tarmog‘ingizda domen xaritalashni qanday sozlash kerak {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domen xaritalash ishlashi uchun siz tomondan ba’zi sozlashlar talab etiladi. Yaxshiyamki, Ultimate Multisite murakkab ishlarni siz uchun avtomatlashtiradi, shunda talablarni oson bajarishingiz mumkin.

Ultimate Multisite o‘rnatilishi davomida ustasi **sunrise.php** faylini avtomatik ravishda belgilangan papkaga nusxalaydi va o‘rnatadi. **Bu qadam yakunlanmaguncha usta davom etishingizga ruxsat bermaydi**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Bu shuni anglatadiki, Ultimate Multisite o‘rnatish ustasi tarmog‘ingizni sozlashni yakunlagach, maxsus domenni darhol xaritalashni boshlashingiz mumkin.

E’tibor bering, Ultimate Multisite ichidagi domen xaritalash majburiy emas. Sizda WordPress Multisite’ning mahalliy domen xaritalash funksiyasidan yoki boshqa istalgan domen xaritalash yechimidan foydalanish imkoniyati bor.

Agar boshqa domen xaritalash yechimlariga yo‘l berish uchun Ultimate Multisite domen xaritalashini o‘chirib qo‘yishingiz kerak bo‘lsa, bu xususiyatni **Ultimate Multisite > Sozlamalar > Domen xaritalash** bo‘limida o‘chirishingiz mumkin.

![Admin yo‘naltirish, xaritalash xabari va DNS parametrlarini ko‘rsatadigan Domen xaritalash sozlamalari sahifasi](/img/config/domain-mapping-settings.png)

Ushbu parametrning aynan pastida **Admin yo‘naltirishni majburlash** parametrini ham ko‘rishingiz mumkin. Bu parametr mijozlaringiz o‘z admin dashboardlariga ham maxsus domeni, ham subdomeni orqali kira oladimi yoki faqat ulardan bittasi orqali kira oladimi — shuni boshqarish imkonini beradi.

Agar **Xaritalangan domenga majburiy yo‘naltirish** ni tanlasangiz, mijozlaringiz o‘z admin dashboardlariga faqat maxsus domenlari orqali kira oladi.

**Tarmoq domeniga majburiy yo‘naltirish** parametri esa buning butunlay teskarisini bajaradi — mijozlaringiz, hatto maxsus domenlari orqali kirishga urinsa ham, dashboardlariga faqat subdomenlari orqali kirishiga ruxsat beriladi.

**Admin qismiga ham xaritalangan domen domeni, ham tarmoq domeni orqali kirishga ruxsat berish** parametri esa ularga admin dashboardlariga ham subdomen, ham maxsus domen orqali kirish imkonini beradi.

![Uchta yo‘naltirish variantini ko‘rsatgan holda ochilgan Admin yo‘naltirish ochiluvchi ro‘yxati](/img/config/domain-mapping-redirect-options.png)

Maxsus domenni xaritalashning ikki usuli bor. Birinchisi — super admin sifatida tarmoq admin dashboardingizdan domen nomini xaritalash, ikkinchisi esa Account sahifasi ostidagi quyi sayt admin dashboardi orqali.

Ammo tarmog‘ingizdagi quyi saytlardan biriga maxsus domenni xaritalashni boshlashdan oldin, domen nomining **DNS sozlamalari** to‘g‘ri sozlanganiga ishonch hosil qilishingiz kerak bo‘ladi.

###

### Domen DNS sozlamalari to‘g‘ri sozlanganiga ishonch hosil qilish {#making-sure-the-domain-dns-settings-are-properly-configured}

Xaritalash ishlashi uchun xaritalashni rejalashtirayotgan domeningiz tarmog‘ingizning IP manziliga yo‘naltirilganiga ishonch hosil qilishingiz kerak. E’tibor bering, sizga tarmoq IP manzili kerak — Ultimate Multisite o‘rnatilgan domenning IP manzili — xaritalamoqchi bo‘lgan maxsus domenning IP manzili emas. Muayyan domenning IP manzilini qidirish uchun, masalan, [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) saytiga kirishni tavsiya qilamiz.

Domenni to‘g‘ri xaritalash uchun **DNS** konfiguratsiyangizda o‘sha **IP manzil**ga yo‘naltirilgan **A RECORD** qo‘shishingiz kerak. DNS boshqaruvi turli domen registratorlari orasida juda farq qiladi, ammo internetda bu mavzuni yoritgan ko‘plab qo‘llanmalar bor; XXXX sizning domen registratoringiz bo‘lgan holda “ _XXXX’da A Record yaratish_ ” deb qidirsangiz bo‘ladi (masalan: “ _GoDaddy’da_ _A Record yaratish_ ”).

Agar buni ishlatishda qiyinchilikka duch kelsangiz, **domen registratoringiz qo‘llab-quvvatlash xizmatiga murojaat qiling** va ular bu qismda sizga yordam bera oladi.

Agar mijozlaringizga o‘z domenlarini xaritalashga ruxsat berishni rejalashtirsangiz, ular bu qismdagi ishni o‘zlari bajarishlari kerak bo‘ladi. Agar ular A Record yarata olmasa, ularni o‘z registratorining qo‘llab-quvvatlash tizimiga yo‘naltiring.

### Maxsus domen nomini Super Admin sifatida xaritalash {#mapping-custom-domain-name-as-super-admin}

Tarmog‘ingizda super admin sifatida tizimga kirganingizda, **Ultimate Multisite > Domenlar** bo‘limiga o‘tib, maxsus domen nomlarini osongina qo‘shishingiz va boshqarishingiz mumkin.

![Ultimate Multisite ichidagi domenlar ro‘yxati sahifasi](/img/admin/domains-list.png)

Ushbu sahifada yuqoridagi **Domen qo‘shish** tugmasini bosishingiz mumkin va bu modal oynani ochadi; unda siz **maxsus domen nomi**ni, maxsus domen nomini qo‘llamoqchi bo‘lgan **quyi sayt**ni belgilab to‘ldirishingiz hamda uni **asosiy domen** nomi sifatida o‘rnatishni xohlaysizmi-yo‘qmi, shuni tanlashingiz mumkin (e’tibor bering, **bir quyi saytga bir nechta domen nomlarini xaritalashingiz** mumkin).

![Domen nomi, sayt tanlagichi va asosiy domen almashtirgichi bo‘lgan Domen qo‘shish modal oynasi](/img/admin/domain-add-modal.png)

Barcha ma’lumotlarni kiritganingizdan so‘ng, pastdagi **Mavjud domenni qo‘shish** tugmasini bosishingiz mumkin.

Bu maxsus domenning DNS ma’lumotlarini tekshirish va olish jarayonini boshlaydi. Jarayon qanday ketayotganini kuzatishingiz uchun sahifaning pastida log ham ko‘rasiz. Bu jarayon yakunlanishi uchun bir necha daqiqa vaqt olishi mumkin.

Ultimate Multisite v2.13.0 yangi site per-site domain sifatida ko‘rilishi kerak bo‘lgan hostda yaratilganda ichki domain yozuvini ham avtomatik yaratadi. Agar host networkning asosiy domaini yoki **Site URL** maydonida sozlangan umumiy checkout-form asosiy domainlaridan biri bo‘lsa, avtomatik mapped-domain yozuvi o‘tkazib yuboriladi, shunda umumiy asosiy domain undan foydalanadigan har bir site uchun mavjud bo‘lib qoladi.

Mijoz Domain Seller v1.3.0 yoki undan yangiroq versiya orqali yangi domain ro‘yxatdan o‘tkazganda, Ultimate Multisite ro‘yxatdan o‘tkazilgan domainni sukut bo‘yicha mijozning network siteiga avtomatik xaritalaydi. Administratorlar muvaffaqiyatli ro‘yxatdan o‘tkazishdan keyin, asosiy-domain belgisi, faollashtirish holati yoki SSL bilan ishlash kabi parametrlarni sozlamoqchi bo‘lmasalar, endi alohida mapped-domain yozuvini qo‘shishlari shart emas.

Agar hammasi to‘g‘ri sozlangan bo‘lsa, **Stage** yoki status **Checking DNS**dan **Ready**ga o‘zgarishi kerak.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Agar domain nomini bossangiz, uning ichida ayrim parametrlarni ko‘rishingiz mumkin. Keling, ularga qisqacha nazar tashlaymiz:

![Stage, site, active, primary va SSL almashtirgichlari bo‘lgan domain tafsilotlari sahifasi](/img/admin/domain-edit.png)

**Stage:** Bu domain turgan bosqich. Domainni birinchi qo‘shganingizda, u ehtimol **Checking DNS** bosqichida bo‘ladi. Jarayon DNS yozuvlarini tekshiradi va ularning to‘g‘ri ekanini tasdiqlaydi. Keyin domain **Checking SSL** bosqichiga o‘tkaziladi. Ultimate Multisite domainda SSL bor-yo‘qligini tekshiradi va domainingizni **Ready** yoki **Ready (without SSL)** sifatida tasniflaydi.

**Site:** Ushbu domain bilan bog‘langan subdomain. Xaritalangan domain aynan shu site kontentini ko‘rsatadi.

**Active:** Domainni faollashtirish yoki nofaol qilish uchun bu parametrni yoqish yoki o‘chirishingiz mumkin.

**Is Primary Domain?:** Mijozlaringiz har bir site uchun bittadan ortiq mapped domainlarga ega bo‘lishi mumkin. Bu aniq site uchun asosiy domain ekanini tanlash uchun ushbu parametrdan foydalaning.

**Is Secure?:** Ultimate Multisite domainni yoqishdan oldin unda SSL sertifikati bor-yo‘qligini tekshirsa ham, domainni SSL sertifikati bilan yoki usiz yuklashni qo‘lda tanlashingiz mumkin. E’tibor bering, agar website’da SSL sertifikati bo‘lmasa va siz uni SSL bilan majburan yuklashga urinsangiz, xatolar yuzaga kelishi mumkin.

### Maxsus domain nomini Subsite foydalanuvchisi sifatida xaritalash {#mapping-custom-domain-name-as-subsite-user}

Subsite administratorlari ham o‘z subsite admin dashboardidan maxsus domain nomlarini xaritalashi mumkin.

Avvalo, **Domain mapping** sozlamalari ostida ushbu parametrni yoqganingizga ishonch hosil qilishingiz kerak. Quyidagi skrinshotga qarang.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Bu parametrni **Plan** darajasida yoki **Ultimate Multisite > Products** dagi product parametrlarida ham belgilashingiz yoki sozlashingiz mumkin.

![Product tahrirlash sahifasidagi Maxsus domainlar bo‘limi](/img/config/product-custom-domains.png)

Ushbu parametrlardan biri yoqilganda va subsite foydalanuvchisiga maxsus domain nomlarini xaritalashga ruxsat berilganda, subsite foydalanuvchisi **Account** sahifasi ostida **Domains** deb nomlangan metaboxni ko‘rishi kerak.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Foydalanuvchi **Add Domain** tugmasini bosishi mumkin va bu ayrim ko‘rsatmalar bilan modal oynani ochadi.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Keyin foydalanuvchi **Next Step** tugmasini bosib, maxsus domain nomini qo‘shishga o‘tishi mumkin. Ular bu asosiy domain bo‘ladimi yoki yo‘qmi, shuni ham tanlashlari mumkin.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain**ni bosish maxsus domainning DNS ma’lumotlarini tekshirish va olish jarayonini boshlaydi.

### Domain sinxronlash haqida {#about-domain-syncing}

Domain sinxronlash — bu **domain mapping ishlashi uchun** Ultimate Multisite maxsus domain nomini hosting accountingizga add-on domain sifatida qo‘shadigan jarayon.

Agar hosting provayderingiz Ultimate Multisite domain mapping funksiyasi bilan integratsiyaga ega bo‘lsa, domain sinxronlash avtomatik sodir bo‘ladi. Hozirda bu hosting provayderlari _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ va _Cpanel._

Host-provider integratsiyasi faol bo‘lganda, Ultimate Multisite yangi yaratilgan sitelar uchun provider tomonidagi DNS yoki subdomain yaratish vazifasini navbatga ham qo‘shishi mumkin. Agar hech qanday integratsiya ushbu vazifani tinglamayotgan bo‘lsa, samarasiz navbat yozuvlaridan qochish uchun fon vazifasi o‘tkazib yuboriladi. Mapped domainlar uchun DNS va SSL tekshiruvlari odatiy domain-stage jarayoni orqali ishlashda davom etadi.

Bu integratsiyani Ultimate Multisite sozlamalarida **Integration** varag‘i ostida faollashtirishingiz kerak bo‘ladi.

![Hosting provayderlari ko‘rsatilgan Ultimate Multisite sozlamalaridagi Integratsiyalar varag‘i](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_E’tibor bering, agar hosting provayderingiz yuqorida tilga olingan provayderlardan biri bo‘lmasa, **domain nomini hosting accountingizga qo‘lda sinxronlashingiz yoki qo‘shishingiz kerak bo‘ladi**._
