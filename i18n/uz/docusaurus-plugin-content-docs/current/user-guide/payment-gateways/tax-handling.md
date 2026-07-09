---
title: Soliqlarni boshqarish
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Soliqlarni boshqarish {#tax-handling}

Ultimate Multisite asosiy pluginimizga o‘rnatilgan soliq yig‘ish moduliga ega, shuning uchun rejalaringiz, paketlaringiz va xizmatlaringiz uchun savdo soliqlarini yig‘ishingiz kerak bo‘lsa, buni hech qanday qo‘shimchalar o‘rnatmasdan osonlik bilan amalga oshirishingiz mumkin.

Yevropada joylashgan kompaniyalar uchun biz **qo‘shimcha** taklif qilamiz; u **VAT** talablariga yaxshiroq rioya qilishni qo‘llab-quvvatlash uchun vositalar va funksiyalar qo‘shadi.

Ultimate Multisite sizning nomingizdan soliqlarni hukumatga topshirmaydi yoki o‘tkazmaydi; biz shunchaki tranzaksiya vaqtida tegishli soliqlarni yig‘ishingizga yordam beramiz. **Soliqlarni baribir o‘zingiz o‘tkazishingiz kerak bo‘ladi.**

## Soliq yig‘ishni yoqish {#enabling-tax-collection}

Soliq yig‘ish sukut bo‘yicha yoqilmagan. Uni yoqish uchun **Ultimate Multisite > Sozlamalar > Soliqlar** bo‘limiga o‘tishingiz va Enable Taxes sozlamasini yoqish uchun o‘zgartirgichni yoqishingiz kerak.

![Soliq sozlamalari sahifasining yuqorisidagi Enable Taxes o‘zgartirgichi](/img/config/settings-taxes-enable.png)

Soliq sozlamalari sahifasining to‘liq ko‘rinishi:

![Soliq sozlamalarining to‘liq sahifasi](/img/config/settings-taxes-full.png)

Alohida mahsulotlar uchun soliq sozlamalarini ham ko‘rishingiz mumkin:

![Mahsulotlar uchun soliq sozlamalari](/img/config/settings-taxes.png)

### Soliq kiritilmagan va soliq kiritilgan {#tax-excluded-vs-tax-included}

Sukut bo‘yicha barcha mahsulot narxlaringizga soliq kiritilmagan, ya’ni soliqlar mahsulot narxiga **kiritilmagan**. Agar mijoz ma’lum xarid uchun soliq to‘lashi kerakligini aniqlasak, soliqlarni oraliq jami summaning **ustiga** qo‘shamiz.

Agar soliqlar mahsulot narxiga kiritilgan bo‘lishini xohlasangiz, buni **Inclusive Tax** sozlamasini yoqish orqali qilishingiz mumkin.

![Enable Taxes sozlamasi ostidagi Inclusive Tax o‘zgartirgichi qatori](/img/config/settings-taxes-inclusive.png)

Kiritgan o‘zgarishlaringizni **saqlashni** unutmang.

###

## Soliq stavkalarini yaratish {#creating-tax-rates}

Soliq yig‘ishni yoqqaningizdan so‘ng, soliq stavkalari tahrirlagichimizdan foydalanib muayyan joylar uchun soliq stavkalarini yaratishingiz kerak bo‘ladi.

Tahrirlagichga Soliq sozlamalari sahifasining yon panelidagi **Soliq stavkalarini boshqarish** tugmasini bosish orqali kirishingiz mumkin.

![Sozlamalar sahifasidagi Soliq stavkalari panelida Soliq stavkalarini boshqarish havolasi](/img/config/settings-taxes-manage-rates.png)

Soliq stavkalari tahrirlagichi sahifasida **Yangi qator qo‘shish** tugmasini bosib yangi soliq stavkalarini qo‘shishingiz mumkin.

![Yuqorisida Yangi qator qo‘shish tugmasi bo‘lgan soliq stavkalari tahrirlagichi jadvali](/img/config/tax-rates-editor.png)

Har bir soliq stavkasiga **sarlavha** berishingiz kerak bo‘ladi (hisob-fakturalarda ishlatiladi). Keyin bu soliq undiriladigan **mamlakat**ni (majburiy), **shtat/viloyatni** va **shaharni** (ikkalasi ham ixtiyoriy) tanlashingiz mumkin. Oxirida **soliq stavkasini foizlarda** qo‘shing.

### Soliq kategoriyalari {#tax-categories}

Turli mahsulot turlari uchun turli soliq stavkalarini qo‘shish maqsadida bir nechta soliq kategoriyalarini ham yaratishingiz mumkin.

**Yangi soliq kategoriyasini qo‘shish** tugmasini bosing, so‘ng kategoriyangiz nomini yozing va **Yaratish**ni bosing.

![Soliq stavkalari tahrirlagichining yuqorisidagi Yangi soliq kategoriyasini qo‘shish tugmasi](/img/config/tax-categories-add.png)

![Kategoriya yaratish modalidagi Soliq kategoriyasi nomi kiritish maydoni](/img/config/tax-categories-create-modal.png)

Kategoriyalar bo‘ylab ko‘rish uchun **Almashtirish**ni bosing va yangi soliqlar qo‘shmoqchi bo‘lgan kategoriyani tanlang.

![Soliq kategoriyalari o‘rtasida almashtirish uchun Almashtirish ochiluvchi tugmasi](/img/config/tax-categories-switch.png)

![Mavjud kategoriyalarni ko‘rsatayotgan soliq kategoriyasi tanlagichi ochiluvchi ro‘yxati](/img/config/tax-categories-select.png)

Muayyan mahsulot uchun soliq kategoriyasini **Mahsulotni tahrirlash sahifasi**ga, keyin esa Soliqlar varag‘iga o‘tib belgilashingiz mumkin.

![Soliq kategoriyasi va soliqqa tortiladigan o‘zgartirgichi bo‘lgan mahsulot soliqlari varag‘i](/img/config/product-taxes.png)

O‘sha ekranning o‘zida **Soliqqa tortiladimi?** o‘zgartirgichini o‘chirib, Ultimate Multisite bu mahsulot uchun soliq yig‘masligi kerakligini bildirishingiz mumkin.

## Yevropa VAT qo‘llab-quvvatlashi {#european-vat-support}

Avval aytilganidek, Yevropa VAT qoidalari sababli qo‘shimcha talablarga ega bo‘lgan EUdagi mijozlar uchun qo‘shimchamiz mavjud.

VAT vositalarimiz bir nechta muhim narsalarda yordam beradi:

  * EU VAT stavkalarini oson yuklash;

  * VAT raqamini yig‘ish va tekshirish — hamda VATdan ozod subyektlar (masalan, haqiqiy VAT raqamlariga ega kompaniyalar) uchun teskari hisoblash;

Bu qo‘shimchani o‘rnatish uchun **Ultimate Multisite > Sozlamalar**ga o‘ting va keyin yon paneldagi **Qo‘shimchalarimizni tekshirish** havolasini bosing.

![Qo‘shimchalarimizni tekshirish havolasi bo‘lgan Sozlamalar sahifasi yon paneli](/img/config/settings-taxes-addons-link.png)

Qo‘shimchalar sahifamizga yo‘naltirilasiz. U yerda **Ultimate Multisite VAT qo‘shimchasi**ni qidirib, uni o‘rnatishingiz mumkin.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Keyin **Tarmoq administratori > Plaginlar**ga o‘ting va bu qo‘shimchani butun tarmoq bo‘yicha faollashtiring.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Agar **Soliq sozlamalari varag‘i**ga qaytsangiz, yangi opsiyalar mavjudligini ko‘rasiz. Yangi VAT vositalarini yoqish uchun **VAT qo‘llab-quvvatlashini yoqish** opsiyasini yoqing. Sozlamalaringizni **saqlashni** unutmang!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT soliq stavkalarini olish {#pulling-on-vat-tax-rates}

Integratsiyamiz qo‘shadigan vositalardan biri — EU a’zo davlatlari uchun soliq stavkalarini yuklash imkoniyatidir. Buni EU VAT qo‘llab-quvvatlashini yoqqandan so‘ng soliq stavkalari tahrirlagichi sahifasiga kirish orqali amalga oshirish mumkin.

Sahifaning pastki qismida VAT olish opsiyalarini ko‘rasiz. Stavka turini tanlab, **EU VAT stavkalarini yangilash** tugmasini bosish har bir EU a’zo davlati uchun soliq stavkalarini olib keladi va jadvalni avtomatik to‘ldiradi. Keyin uni faqat saqlashingiz kerak.

![Soliq stavkalari tahrirlagichining pastki qismidagi EU VAT stavkalarini yangilash tugmasi](/img/config/tax-rates-vat-pull.png)

Qiymatlarni olgandan keyin ularni tahrirlashingiz ham mumkin. Buni qilish uchun kerakli jadval qatorini oddiygina tahrirlang va yangi qiymatlarni saqlashni bosing.

### VAT tekshiruvi {#vat-validation}

VAT qo‘llab-quvvatlashi yoqilganda, Ultimate Multisite to‘lovni rasmiylashtirish formasiga, billing manzili maydoni ostiga qo‘shimcha maydon qo‘shadi. Maydon faqat EUda joylashgan mijozlar uchun ko‘rsatiladi.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite keyin VAT Numberni tekshiradi va agar u haqiqiy deb qaytsa, reverse charge mexanizmi qo‘llanadi hamda o‘sha buyurtmada soliq stavkasi 0% qilib belgilanadi.
