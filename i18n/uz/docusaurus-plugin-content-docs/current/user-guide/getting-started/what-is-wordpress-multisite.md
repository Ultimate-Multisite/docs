---
title: WordPress Multisite nima?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite nima? {#what-is-wordpress-multisite}

WordPressning asosiy qismida "Multisite" degan xususiyat mavjud bo'lib, u 2010-yilda WordPress 3.0 ishga tushganda boshlanganidan kelib chiqadi. Shundan beri yangi xususiyatlarni joriy etish va xavfsizlikni mustahkamlash maqsadida bir nechta takomillashtirishlar o'tkazilgan.

Asosiy jihatdan, WordPress multisite quyidagicha tasvirlanishi mumkin: Bir universitet bitta WordPress o'rnatmasini saqlab qoladi, ammo har bir fakulteti o'zining alohida WordPress saytiga ega bo'ladi.

##

## WordPress Multisite aslida nima? {#what-exactly-is-wordpress-multisite}

Multisite — bu WordPressning bir nechta saytlarning yagona WordPress o'rnatmasidan foydalanishini ta'minlovchi xususiyatidir. Multisite faollashtirilganda, asl WordPress sayti odatda **saytlar tarmog'i** deb ataladigan narsani qo'llab-quvvatlash uchun o'zgartiriladi.

Bu tarmoq fayl tizimini (ya'ni **pluginlar va temalar ham ularning umumiy bo'ladi**), ma'lumotlar bazasini, WordPress asosiy fayllarini, wp-config.php va boshqalarni baham ko'radi.

Bu shuni anglatadiki, saytlar tarmog'idagi barcha saytlaringiz uchun WordPress, tema va pluginlarni faqat bir marta yangilash kerak, chunki ular fayl tizimida bir xil fayllarni qo'shadi.

Bu fakt multisitening asosiy afzalliklaridan biri bo'lib, siz boshqaradigan saytlar sonini oshirishingiz mumkin, ammo mijozlaringiz saytlarini saqlash uchun bajarishingiz kerak bo'lgan vazifalar sonini o'zgarmas holatda ushlab turishingiz mumkin.

##

## Subdomain yoki Subdirectory? {#subdomain-or-subdirectory}

WordPress multisite ishga tushirishning ikkita rejasi mavjud — va siz odatiy WordPress o'rnatmasini multisite o'rnatmasiga aylantirayotganda birini tanlashingiz kerak:

**Subdomain:** masalan, [site.domain.com](http://site.domain.com)

…yoki

**Subdirectory:** masalan, [yourdomain.com/site](http://yourdomain.com/site)

Har bir reja o'ziga xos afzallik va kamchiliklarga ega bo'lib, bu qarorni qabul qilishda siz e'tiborga olishingiz kerak.

Bir narsa muhim ahamiyatga ega ekanligini unutmang: qaror qabul qilganingizdan so'ng, tarmoqni subdirektoriyadan subdomainga yoki aksincha o'zgartirish juda qiyin bo'ladi – ayniqsa agar sizda allaqachon bir nechta saytlar yaratilgan bo'lsa.

Bu qaror qabul qilishdan oldin, e'tiborga olish kerak bo'lgan bir nechta nuqtalar quyidagilar:

**Subdirektoriyali Rejim (Subdirectory Mode)** sozlash va texnik jihatdan eng oson rejimdir. Bu shundaki, barcha saytlar asosan asosiy domen bilan bog'langan yo'llar (masalan, [yourdomain.com/subsite](http://yourdomain.com/subsite)) bo'ladi. Natijada, siz faqat asosiy domen uchun **bir SSL sertifikatiga** ega bo'lishingiz kifoya qiladi va bu butun tarmoqni qamrab oladi.

Shu bilan birga, uning URL tuzilishi tufayli Google va ko'plab boshqa qidiruv tizimlari subdirektoriyali tarmoqdagi barcha saytlarni bitta katta sayt deb bilishadi. Natijada, sizning mijozlaringiz tomonidan subsaytlarga qo'shilgan kontent asosiy sahifangiz SEO samarholiga ta'sir qilishi mumkin, masalan. Ta'sir darajasi bahsli bo'lib qoladi va bunday tartibni qo'llash SEO samarholigi uchun hatto foydali bo'lishi mumkinligi haqida argument mavjud.

**Subdomain Rejimi (Subdomain Mode)** sozlash biroz murakkabroq, ammo uning URL tuzilishi (masalan, [subsite.yournetwork.com](http://subsite.yournetwork.com)) odatda "ko'proq professional" ko'rinish beradi deb hisoblanadi.

Subdomain modini sozlashdagi asosiy muammolardan biri butun tarmoq uchun SSL qamrovidir (HTTPS). Bu shundaki, brauzerlar subdomainlarni alohida mavjudotlar deb hisoblaydi. Natijada, tarmoqingizdagi har bir subdomain uchun boshqa SSL sertifikatiga yoki **Wildcard SSL sertifikati** degan maxsus turdagi sertifikatmaga ehtiyoj sezishingiz mumkin. So'nggi yillarda hosting provayderlari va panellari SSL taqdimoti bo'yicha o'zlarini yaxshilashmoqda va ba'zilari bitta tugmani bosish bilan wildcard sertifikatlarni taklif qilishadi, bu esa ularning sozlash murakkabligi jihatidan ikkita rejim o'rtasidagi farqni yopib tashlaydi.

Subdirektoriy moddan (subdirectory mode) aksiga qarama-qarshi turib, subdomain asosidagi tarmoqdagi subsaitlar qidiruv tizimlari tomonidan alohida veb-saytlar sifatida ko'riladi, bu esa bitta subsaytda mavjud bo'lgan kontent boshqa subsaitlarning SEO samaradorligiga hech qanday ta'sir qilmaydi degani.

## Super Admin {#the-super-admin}

Bitta saytli WordPress o'rnatmalarida siz cheksiz miqdordagi foydalanuvchilarni qo'shishingiz va ularga turli foydalanuvchi rollari bilan turli ruxsatlarni berishingiz mumkin.

WordPress Multisite da yangi turdagi foydalanuvchi ochiladi: **super admin** – va yangi admin paneli ochiladi: **network admin panel**.

Nomi ko'rsatganidek, super admin tarmoq ustida kuchli qurollarga ega bo'ladi, chunki u barcha subsaitlarini, pluginlarni, temalarni, hamma narsani boshqarish imkoniyatiga ega!

Bitta saytli WordPress o'rnatmaning multisitega aylantirilganidan so'ng, bitta saytdagi asl admin avtomatik ravishda super adminlikka ko'tariladi.

Pluginlar va temalar faqatgina super adminlar tomonidan network admin panelidan o'rnatilishi yoki o'chirilishi mumkin. Subsite adminlari esa bu pluginlar yoki temalarni faollashtirish yoki o'chirishni tanlash imkoniyatiga ega, agar super admin tarmoqning biron bir pluginini faollashtirsa, bu har doim barcha subsaitlar uchun faol bo'lishini majbur qiladi.

_Izoh: Ko'r ko'ring, kimdir sizning tarmoqqa taklif qilsangiz va unga super admin statusini berganingiz, bu foydalanuvchiga tarmoqingiz bo'yicha to'liq nazorat beradi. Masalan, boshqa super adminlar hatto sizning super admin statusingizni olib tashlashi mumkin, bu esa sizni o'zingizning tarmoq administrator panelingizdan samarali chiqarib yuboradi. Ultimate Multisite mijozlari uchun qo'shimcha super adminlar nima qilishlari mumkinligi haqida batafsil nazoratga ega bo'lishini ta'minlash uchun biz Support Agents degan add-onni yaratganmiz. Bu add-on sizga tarmoqda vazifalarni bajarish uchun kerak bo'ladigan imkoniyatlarga ega bo'lgan faqatgina agentlar kabi boshqa turdagi foydalanuvchilarni yaratish imkonini beradi._

## Subsite'lar o'rtasida nima umumiy va nima umumiy emas {#what-is-shared-among-subsites-and-what-is-not}

Oldin aytib o'tganimizdek, WordPress multisite'ning asosiy afzalliklaridan biri shundaki, barcha subsaitlar bir xil konfiguratsiyalarni, asosiy fayllarni, temalarni, pluginlarni, WordPress asosiy fayllarini va boshqalar ularda baham ko'rishadi.

Biroq, har bir subsait uchun aniq chegaralangan elementlar mavjud.

- Masalan, har bir subsait o'ziga xos yuklash (uploads) papkasiga ega bo'ladi. Natijada, bitta subsait foydalanuvchilari tomonidan amalga oshirilgan yuklamalar boshqa subsaitda ishlatilmaydi.
- Har bir subsaitning o'ziga xos admin paneli mavjud va u super admin tomonidan tarmoqda faollashtirilmagan bo'lsa, pluginlar yoki temalarni faollashtirishi yoki o'chirish imkoniyatiga ega.
- Ko'pgina ma'lumotlar bazasi jadvallari har bir subsait uchun yaratiladi, bu esa postlar, izohlar, sahifalar, sozlamalar va boshqalar har bir subsaitga xos bo'lishini anglatadi.

## WordPress Multisite'da foydalanuvchilarni boshqarish {#user-management-on-wordpress-multisite}

WordPress multisite'dagi nozik mavzu — bu foydalanuvchilarni boshqarish. WordPress foydalanuvchisi jadvali barcha subsaitlar o'rtasida baham ko'riladigan kam sonli jadvallardan biridir.

Bu tartib siz tarmoq bilan nima qurmoqchi ekanligingizga qarab ba'zi muammolarni keltirib chiqarishi mumkin. Quyidagi misol eng dolzarb bo'lganini tushuntirishga yordam beradi:

Quyidagi senariy tasavvur qiling:

Siz WordPress multisite tarmog'ini yaratdingiz va e-commerce do'koni ochishni istagan odamlarga aylanish uchun oylik haq to'lashni taklif qilasiz.

Birinchi to'lovchi mijozingiz – Jon bo'ldi. Siz uning uchun tarmoqning bir sahifasini yaratdingiz, barcha kerakli pluginlarni o'rnatdingiz va undan do'konini boshqarishi uchun foydalanuvchi yaradingiz.

Keyin ikkinchi mijoz keldi – Alice. Siz uning uchun ham xuddi shunday qildingiz va endi u ham tarmoqning bir do'koniga ega bo'ldi.

Jon va Alice ham sizning mijozlaringiz, lekin ular bir-birini tanimaydilar. Bundan muhimi, agar ulardan biri boshqasining do'kon saytiga kirsa, bu do'kon o'sha tarmoqdagi sahifada joylashganligini bilish imkonsizdir.

Bir kuni Jon yangi poyabzal sotib olishga muhtoj bo'ldi va uni Alicening do'konida mukammal poyabzalni topdi. U xaridni yakunlashga urinayotganda, "elektron pochta allaqachon ishlatilmoqda" (email already in use) xatosi chiqdi, bu Jon uchun g'ayritabiiy edi, chunki u Alicening saytiga hech qachon birinchi marta kirganidan 100% aniq edi.

Bu yerda sodir bo'lgan narsa shundaki, Jonning foydalanuvchisi butun tarmoqda ulashgan bo'ladi va u Alicening saytida hisob ochishga urinayotganda, WordPress bir xil elektron pochta manziliga ega foydalanuvchi allaqachon mavjudligini aniqlab xato beradi.

_Eslatma: Biz bu qanday yomon bo'lishi mumkinligini tushundik, shuning uchun Ultimate Multisite’da odatiy foydalanuvchi tekshiruvlarini chetlab o'tadigan variant mavjud. Bu esa bir xil elektron pochta manzilidan ko'p hisob yaratishga imkon beradi. Har bir hisob subsite bilan bog'liq bo'ladi, shuning uchun to'qnashish xavfi minimal darajada ushlab turiladi. Yuqoridagi misolda Jon xato xabari olmasligi va o'sha poyabzalni muammosiz sotib olishi mumkin edi. Bu variant "Enable Multiple Accounts" (Ko'p Hisoblarni Faollashtirish) deb ataladi va Ultimate Multisite → Settings → Login & Registration orqali faollashtirilishi mumkin._

Hatto foydalanuvchi jadval ulashilgan bo'lsa ham, subsite administratorlari yoki super administratorlar orqali foydalanuvchilarni subsitega qo'shish va olib tashlash mumkin, shuningdek, ular turli subsite-larda turli foydalanuvchi rollariga ega bo'lishi mumkin.

## Ishlash samaradorligi haqida e'tibor bering {#performance-considerations}

WordPress multisite ko'p saytlarni qo'llab-quvvatlash bo'yicha juda kuchli hisoblanadi. Buni [WordPress.com](https://WordPress.com), Edublogs va Campuspress kabi xizmatlar ham multisite asosida ishlaydi va har bir hosting shaxsi minglab saytlarni joylashtiradi degan jihatdan tekshirish mumkin.

Nazariy jihatdan bitta WordPress multisite o'rnatmasida joylashtiriladigan maksimal sayt soni cheklovi yo'q, ammo amaliyotda siz qondiruvchi darajada ishlay oladigan saytlarning soni bir nechta turli omillarga bog'liq bo'lishi mumkin: saytlar qanchalik dinamik ekanligi, subsite uchun qaysi pluginlar mavjudligi va h.k.

Qoida sifatida, tarmoq shunchalik oddiy bo'lsa, shunchalik yaxshi. Kontent haqiqatdan ham dinamik bo'lmagan saytlarga (bu ularni kuchli caching strategiyalari uchun ajoyib nomzod qiladi) va pluginlar to'plamini iloji boricha yengil ushlab turish (faol pluginlar soni qanchalik kam bo'lsa, shunchalik yaxshi) siz joylashtirishingiz mumkin bo'lgan subsite sonini sezilarli darajada oshirishi mumkin.

Eng yaxshi jihati shundaki, bu hammasi WordPress ekanligi sababli, samaradorlikni oshirish uchun siz allaqachon biladigan va yoqtirgan vositalar multisite tarmog'i uchun ham ishlaydi.

Multisite uchun asosiy to'siq ma'lumotlar bazasi bo'lsa-da, boshqa hamma narsa to'g'ri sozlanishi ta'minlansa, siz unga e'tibor qaratishdan oldin bir nechta minglab saytlarni joylashtirishingiz mumkin. Hatto undan keyin ham (masalan, ma'lumotlar bazasi sharding yechimlari kabi) asta-sekin qo'shiladigan yechimlar mavjud.
