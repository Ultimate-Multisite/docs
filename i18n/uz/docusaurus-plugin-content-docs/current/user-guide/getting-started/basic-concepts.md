---
title: Asosiy tushunchalar
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Asosiy Tushunchalar {#basic-concepts}

Yangi WordPress Multisite foydalanuvchisi va Ultimate Multisite bilan yangi ish boshlagan biri uchun dastlab ko'p yangi so'zlar va iboralarni o'rganish kerak bo'ladi. Ularni o'rganish muhim vazifa, chunki siz platformani va uning butunligini qanday ishlashini tushunishingiz kerak bo'ladi.

Bu maqolada biz WordPressning ba'zi asosiy tushunchalarini aniqlashga va tushuntirishga harakat qilamiz. Ba'zilari foydalanuvchilar uchun, ba'zilari dasturchilar uchun, ba'zilari esa ikkalasi uchun muhimroq bo'ladi.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** — bu bitta WordPress paneli orqali bir nechta veb-saytlar tarmog'ini yaratishingiz va boshqarishingiz mumkin bo'lgan WordPress o'rnatmasi turidir. Siz saytlarning soni, xususiyatlari, temalari va foydalanuvchi rollari kabi hamma narsani boshqara olasiz. Yuzlab va minglab saytlar ham boshqarish mumkin.

## Tarmoq (Network) {#network}

WordPress terminologiyasida multisite tarmoqi — bu bir nechta **subsaytlarni** bitta paneldan boshqarishingiz mumkin bo'lgan joydir. Multisite tarmoqni yaratish hosting provayderlar orasida farqlanishi mumkin, ammo yakuniy natija odatda WordPressga bu maxsus rejimda ishlayotganini aytadigan **wp-config.php** faylidagi bir nechta qo'shimcha yo'riqlar bo'ladi.

Multisite tarmoqi va mustaqil (stand-alone) WordPress o'rnatmasi o'rtasidagi bir nechta aniq farqlar mavjud bo'lib, ularni qisqacha ko'rib chiqamiz.

## Ma'lumotlar bazasi (Database) {#database}

Ma'lumotlar bazasi — bu tuzilgan, tartibga solingan ma'lumotlar to'plamidir. Kompyuter terminologiyasida ma'lumotlar bazasi — bu ma'lumotlarni saqlash va tartibga solish uchun ishlatiladigan dasturdir. Buni ma'lumotlarni turli bo'limlarda "jadvallar" deb ataladigan faylkiptar sifatida tasavvur qiling.

WordPress Multisite bitta ma'lumotlar bazasidan foydalanadi va har bir subsayt o'ziga xos jadvallarga ega bo'ladi, blog ID (blog id) esa prefix ichida saqlanadi. Shunday qilib, siz tarmoq o'rnatmasini o'rnatganingizda va subsayt yaratganingizda, quyidagi jadvallaringiz bo'lishi kerak:

_wp_1_options_ \- birinchi subsayt uchun options jadvali

_wp_2_options_ \- ikkinchi subsayt uchun options jadvali

## Hosting provayderi {#hosting-provider}

Hosting provayderi — bu biznes va shaxslarga o'z veb-saytlarini World Wide Web orqali mavjud qilish imkonini beradigan kompaniya. Veb-hosting provayderlari taklif etadigan xizmatlar turli bo'lishi mumkin, ammo odatda ular veb-sayti dizayni, hostdagi saqlash maydoni va Internetga ulanishni o'z ichiga oladi.

## Domen {#domain}

Domen nomi — bu odamlar saytingizga kirish uchun ishlatadigan manzil. U veb brauzerga saytingizni qayerdan qidirish kerakligini aytadi. Ko'ch manzillik kabi, domen — bu odamlarning sizning veb-saytingizga onlayn qanday borishining yo'lidir. Va, do'koningiz oldida belgini bo'lish kabi. Agar bizning saytiga kirmoqchi bo'lsangiz, brauzeringizning manzil maydonchasida bizning veb-manzilimizni yozishingiz kerak bo'ladi, bu yerda [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, [**ultimatemultisite.com**](http://ultimatemultisite.com) domen nomidir.

## Subdomain {#subdomain}

Subdomain — bu asosiy domen ostidagi veb-saytlar tizimining bir turi, lekin veb-saytdagi kontentni tartiblash uchun papkalardan foydalanish o'rniga, u deyarli o'z sayti bo'lib turadi. U [**https://site1.domain.com/**](https://site1.domain.com/) ko'rinishida beriladi, bu yerda _site1_ subdomen nomi va [_domain.com_](http://domain.com) asosiy domenidir.

## Subdirectory {#subdirectory}

Subdirectory — bu ildiz domen ostidagi veb-saytlar tizimining bir turi bo'lib, u saytdagi kontentni tartiblash uchun papkalardan foydalanadi. Subdirectory — bu subpapka bilan bir xil bo'ladi va nomlarni o'zaro ishlatish mumkin. U [**https://domain.com/site1**](https://domain.com/site1) ko'rinishida beriladi, bu yerda _site1_ subdirectory nomi va [_domain.com_](http://domain.com) asosiy domenidir.

## Subsite {#subsite}

Subsite bu Multisite tarmog'ida yaratilgan bolalig'i (child) sayt turidir. Bu sizning WordPress Multisite o'rnatishingiz qanday sozlanganga qarab **subdomain** yoki **subdirectory** bo'lishi mumkin.

## Super Admin {#super-admin}

WordPress Super Admin — bu Multisite tarmog'idagi barcha subsaytlar bilan ishlash uchun to'liq imkoniyatlarga ega bo'lgan foydalanuvchi roli. Multisite foydalanuvchilari uchun bu siz WordPress o'rnatishingizga taqdim eta oladigan **eng yuqori darajadagi kirish** hisoblanadi.

## Plugin {#plugin}

Umumiy holda, plugin — bu WordPress saytingizga qo'shimcha funksionallik qo'shadigan kodlar to'plamidir. Bu login logotipini o'zgartirish kabi oddiy narsadan e-commerce funksionalligini qo'shish kabi murakkab bo'lishi mumkin. _Woocommerce va Contact Form_ pluginlari misollar hisoblanadi.

WordPress Multisite da, pluginlar faqat Super Admin tomonidan tarmoq administrator paneli orqali o'rnatilishi mumkin. Subsite Administratorlari esa faqat o'z subsayt ichida pluginlarni faollashtirib yoki bekor qilishlari mumkin.

## Themes {#themes}

WordPress temasi — bu saytning umumiy ko'rinishini belgilaydigan fayllar (grafikalar, uslubiy sahifalar va kod) guruhidir. U shrift uslubi, sahifa tuzilishi, ranglar kabi barcha front-end uslublarini ta'minlaydi.

Pluginlar bilan bir xil bo'lib, WordPress Multisite da temalar faqat Super Admin tomonidan o'rnatilishi mumkin va subsayt administratorlari esa ularni o'z subsayti darajasida faollashtirishi mumkin.

## Site Template {#site-template}

**Site Template** — bu tarmog'ingizda yangi saytlar yaratishda asos sifatida ishlatiladigan shablon (boilerplate) saytdir.

Bu shuni anglatadiki, siz asosiy saytni yaratishingiz, turli pluginlarni faollashtirishingiz, faol temani belgilashingiz va uni istalgan usulda moslashtirishingiz mumkin. Keyin, mijozingiz yangi akkaunt ochganda, unga ma'noli kontent bo'lmagan standart WordPress sayti emas, balki barcha moslashuvlar va kontentlar allaqachon mavjud bo'lgan asosiy saytingiz nusxasi beriladi.

## Domain Mapping {#domain-mapping}

WordPress bilan domen xaritasi (Domain mapping) foydalanuvchilarni veb-sayt manzil orqali to'g'ri hostga yo'naltirish usulidir. WordPress Multisite da subsaytlar subdirektoriy yoki subdomain yordamida yaratiladi. Domen xaritasi esa subsayt foydalanuvchilariga [**joesbikeshop.com**](http://joesbikeshop.com) kabi yuqori darajali domen (top-level domain) dan foydalanish imkonini beradi, bu ularning sayt manzilini yanada professional ko'rinishga keltiradi.

## SSL {#ssl}

SSL — **Secure Sockets Layer** ning qisqartmasi. Bu veb-saytning identifikatsiyasini tasdiqlaydigan va shifrlangan ulanishni faollashtiradigan raqamli sertifikatdir. Bugungi kunda bu internet ulanishini xavfsiz saqlash va ikki tizim orasida yuborilayotgan har qanday sezgir ma'lumotlarni himoya qilish uchun standart texnologiya sifatida ishlatiladi, jinoyatchilar tomonidan o'qilishi va tahrirlanishining oldini oladi, shu jumladan shaxsiy ma'lumotlar kabi potensial ma'lumotlar ham. Zamonaviy brauzerlar SSLni talab qiladi, bu esa veb-sayt yaratish va ishga tushirishda uning muhimligini belgilaydi.

## Media {#media}

Media — veb-sayt uchun rasmlar, audio, video va boshqa fayllardir.

Tarmoq saytlari WordPress Multisite da yagona ma'lumotlar bazasidan foydalanadi, ular media fayllari uchun fayl tizimida alohida yo'llarni saqlaydilar.

Standart WordPress joylashuvi (wp-content/uploads) o'zgarmaydi; ammo uning yo'li tarmoq saytining noyob IDsini aks ettirish uchun o'zgartiriladi. Natijada, tarmoq sayti uchun media fayllari wp-contents/uploads/site/[id] ko'rinishida paydo bo'ladi.

## Permalinks {#permalinks}

Permalinks — sizning individual blog postingiz yoki sahifangizning saytingizdagi doimiy URL'laridir. Permalinksga **pretty links** (chiroyli linklar) deb ham murojaat qilishadi. Default holatda, WordPress URL'lari quyidagicha ko'rinishdagi so'rov satri formatidan foydalanadi:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite bu WordPress pluginidir va WordPress Multisite kurulumları için tasarlanmıştır. Bu eklenti, WordPress kurulumunuzu [WordPress.com](https://WordPress.com) gibi premium bir ağ haline getirir; böylece müşteriler aylık, üç aylık veya yıllık ücretlerle site oluşturabilirler (ücretsiz planlar da oluşturabilirsiniz).

## Checkout Form (Ödeme Formu) {#checkout-form}

Checkout Form, Ultimate Multisite kaydı aracılığıyla alt site, üyelik ve kullanıcı hesaplarının oluşturulmasını içeren tek veya çok adımlı bir sipariş formudur. Kullanıcının kayıt işlemi sırasında doldurması gereken farklı alanlar ve ödeme formları içerir.

## Webhook (Webhook) {#webhook}

Webhook (web callback veya HTTP push API olarak da bilinir), bir uygulamanın diğer uygulamalara gerçek zamanlı bilgi sağlamasının bir yoludur. Bir webhook, veriyi anlık olarak diğer uygulamalara iletir, yani veriye hemen ulaşırsınız.

**Ultimate Multisite webhooks**, ağ yöneticilerinin Zapier ve IFTTT gibi hizmetlerle birlikte kullanıldığında tüm çılgın ama faydalı entegrasyonları yapmasına olanak tanıyan sonsuz olasılıklar açar.

## Events (Olaylar) {#events}

Event, bir kullanıcı veya başka bir kaynaktan gelen eylem sonucunda meydana gelen bir eylemdir; örneğin fare tıklaması gibi. Ultimate Multisite, tüm ağınız içinde gerçekleşen tüm olayların ve kayıtların bir kaydını tutar. Plan değişiklikleri gibi multisite'inizde gerçekleşen farklı aktiviteleri takip eder.
