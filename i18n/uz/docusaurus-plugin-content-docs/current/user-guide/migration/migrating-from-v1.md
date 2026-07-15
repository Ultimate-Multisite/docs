---
title: V1 dan o'tkazish
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 dan o'tkazish (Migratsiya)

## Ultimate Multisite dastlabki 1.x versiyasidan 2.x versiyasi bilan almashtirildi. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite 2.0 va undan keyingi versiyalar kod bazasining to'liq qayta yozilganini anglatadi, bu esa eski versiya va yangi versiya o'rtasida juda kam umumiy narsalarni degani. Shu sababli, 1.x dan 2.x ga ko'tarish paytida ma'lumotlaringizni yangi versiyalar tushunadigan formatga migratsiya qilish kerak bo'ladi.

Xursandchilik bilan, Ultimate Multisite 2.0+ ning ichiga **migrator** (ma'lumotlarni o'tkazuvchi vosita) kiritilgan bo'lib, u eski versiyadan ma'lumotlarni aniqlash va ularni yangi formatga aylantirish imkoniyatiga ega. Bu migratsiya 2.0+ ning **Setup Wizard** (Sozlash asisti) davomida amalga oshiriladi.

Bu darsda migrator qanday ishlashini, muvaffaqiyatsizlik holatlarida nima qilish kerakligini va bu jarayon paytida yuzaga kelishi mumkin bo'lgan muammolarni qanday hal qilishni ko'rib chiqamiz.

_**MUHIM: 1.x versiyasidan 2.0 versiyasiga o'tkazishdan oldin sayt ma'lumotlar bazasining zaxirasini (backup) yaratganingizga ishonch hosil qiling**_

## Birinchi qadamlar {#first-steps}

Birinchi qadam — plugin .zip faylini yuklab olish va 2.0 versiyasini o'zingizning tarmoq administrator panelingizda o'rnatishdir.

Siz [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md) dan so'ng, tizim Multisite ning eski versiyada ishlayotganini avtomatik aniqlaydi va plugin sahifasining yuqori qismida bu xabarni ko'rasiz.

_**Eslatma:** Agar sizda Multisite ustida Ultimate Multisite 1.x o'rnatilgan bo'lsa, siz pluginni hozir yuklab olgan versiya bilan almashtirish imkoniyatiga ega bo'lasiz. Iltimos, **Replace current with uploaded** (Hozirgi bilan yuklangan bilan almashtirish) tugmasini bosing._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Keyingi sahifa sizga qaysi eski (legacy) add-onlarni versiya 1.x bilan o'rnatganingiz haqida ma'lumot beradi. U siz ishlatayotgan versiya versiya 2.0 bilan mos kelishini yoki migratsiyadan so'ng add-onni yangil versiyasini o'rnatishingiz kerakligini ko'rsatadigan ko'rsatmalar bilan jihozlangan bo'ladi.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Keyingi qadamga tayyor bo'lganingizda, **Upgrade qilishni yakunlash uchun Installer'ga tashrif buyuring** deb yozilgan tugmani bosishingiz mumkin.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Bu sizni bir nechta xush kelibsizlik xabarlari bilan kutib turadigan o'rnatish wizard sahifasiga olib boradi. Keyingi sahifaga o'tish uchun shunchaki **Get Started** tugmasini bosing.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** tugmasini bosgandan so'ng, siz Pre-install Checks_._ sahifasiga yo'naltirilishingiz mumkin. Bu sizga tizim ma'lumotlaringiz va WordPress o'rnatilishi haqida ma'lumot beradi va ular **Ultimate Multisite talablariga** mos kelishini aytib beradi.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Keyingi qadamda Ultimate Multisite litsenziya kalitni kiritishingiz va pluginni faollashtirishingiz kerak. Bu sizning saytingizdagi barcha xususiyatlar, jumladan add-onlar ham mavjud bo'lishini ta'minlaydi.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Kalitni kiritganingizdan so'ng, **Agree & Activate** tugmasini bosing.

Litsenziya faollashtirilgandan so'ng, siz keyingi sahifadagi **Install** tugmasini bosib haqiqiy o'rnatishni boshlashingiz mumkin. Bu versiya 2.0 ishlay olishi uchun zarur bo'lgan kerakli fayllarni va ma'lumotlar bazasini avtomatik yaratadi.

## Endirol, migratsiya {#now-the-migration}

Migratorda ichki xavfsizlik funksiyasi mavjud. U sizning butun multisite'ingizni tekshirib, Ultimate Multisite ma'lumotlaringiz hech qanday muammo bo'lmasdan migratsiya qilish mumkinligini ta'minlaydi. Jarayonni boshlash uchun **Run Check** tugmasini bosing.

Jarayonni tekshirgandan so'ng, siz ikki xil holat bilan yuzlanishingiz mumkin: natija xato bilan **yoki** xato bo'lmagan holda chiqishi mumkin.

### Xato bo'lgan holatda {#with-error}

Agar sizga xato xabari bersa, muammoni tuzishda yordam berishi uchun bizning texnik qo'llab-quvvatlash jamoasiga murojaat qilishingiz kerak bo'ladi. Tiket ochayotganda iltimos etingizki **xato logini taqdim etsangiz**. Logni yuklab olishingiz yoki qo'llab-quvvatlash jamoamiz bilan bog'lanish haqidagi linkga bosishingiz mumkin. Bu sizning sahifangizning o'ng tomonida yordam paneli ochiladi va unda tavsif ostida xato loglari allaqachon to'ldirilgan maydonlar bo'ladi.

_**Tizim xatoni topganligi sababli, 2.0 versiyasiga migratsiya qilish imkoniyatsiz bo'ladi. Shundan so'ng, xato tuzatilmaguncha tarmoqni ishlatishni davom ettirish uchun 1.x versiyasiga qaytishingiz mumkin.**_

### Xato bo'lmagan holatda {#without-error}

Agar tizim hech qanday xatoni topmasa, siz muvaffaqiyat xabarini va migratsiyani davom ettirishingiz mumkin bo'lgan pastki qismdagi **Migrate** tugmasini ko'rasiz. Bu sahifada oldindan tavsiya etiladigan narsa — keyingi qadamlar uchun ma'lumotlar bazasining zaxirasini yaratish kerakligini eslatiladi. Agar sizda allaqachon zaxira bo'lsa, **Migrate** tugmasini bosing.

Va bu shunchaki!

Siz avtorizatsiya qilingan sozlamalar (Wizard) orqali logotip va boshqa narsalarni o'z mavjud tarmoqning yangilash uchun davom etishingiz mumkin yoki Ultimate Multisite versiya 2.0 menyusi va uning yangi interfeysi bo'ylab sayr qilishni boshlashingiz mumkin. Keling, zavqlaningizni boshlang!
