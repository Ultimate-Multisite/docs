---
title: Vergi Boshqaruvi
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Soliqni Boshqarzlik (Tax Handling)

Ultimate Multisite asosiy pluginimizga soliq yig'ish moduli kiritilgan bo'lgani uchun, agar siz o'zingizning rejalaringiz, paketlaringiz va xizmatlaringiz ustida sotuv soliqlarini yig'ishingiz kerak bo'lsa, hech qanday add-on o'rnatmasdan ovozlanishsiz bunga osonlik bilan erishishingiz mumkin.

Yevropa hududidagi kompaniyalar uchun biz **add-on** taklif qilamiz, bu VAT (Qiymat Qo'shimcha Soli) muammolarini yaxshiroq qo'llab-quvvatlash uchun vositalar va funksiyalarni qo'shadi.

Ultimate Multisite sizning nomidan hukumatga soliqlar topshirmaydi yoki yubormaydi; biz shunchaki siz harakat paytida tegishli soliqlar to'lashga yordam beramiz. **Siz hali ham soliqni o'zingiz to'lashingiz kerak bo'ladi.**

## Soliq Yig'ishni Faollashtirish (Enabling Tax Collection)

Soliq yig'ishi avtomatik ravishda faollashtirilgan emas. Uni faollashtirish uchun **Ultimate Multisite > Settings > Taxes** ga o'ting va "Enable Taxes" sozlamasini yoqing.

![Tax settings Enable Taxes toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

Soliq sozlamalar sahifasining to'liq ko'rinishi mana:

![Tax settings full page](/img/config/settings-taxes-full.png)

Shuningdek, siz individual mahsulotlar uchun soliq sozlamalarini ham ko'rishingiz mumkin:

![Tax settings for products](/img/config/settings-taxes.png)

### Soliqchi (Tax excluded vs. Tax included)

Asosiy holatda, barcha mahsulot narxlaringiz soliqdan chiqarilgan bo'ladi, bu esa soliqlar mahsulot narxiga **kiritilmagan** degani. Agar biz ma'lum bir xarid uchun mijozning soliq to'lashini talab qilsak, biz soliqni subtotal (ikki tomonlama summa) ustiga qo'shamiz.

Agar siz soliqni mahsulot narxiga kiritishni afzal ko'rsangiz, **Inclusive Tax** sozlamasini yoqib qo'yishingiz mumkin.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

O'zgartirgandek o'zgartirishlarni **saqlashni** unutmang.

###

## Soliq Darajalarini Yaratish (Creating Tax Rates)

Soliq yig'ishni faollashtirgandan so'ng, bizning soliq darajalar editoridan foydalanib aniq joylar uchun soliq darajalarini yaratishingiz kerak bo'ladi.

Siz sozlamalar sahifasining menyusi (sidebar) bo'yicha **Tax Rates** tugmasini bosib editorga kirishingiz mumkin.

![Settings sahifasidagi Tax Rates panelida Manage Tax Rates linki](/img/config/settings-taxes-manage-rates.png)

Tax rates editor sahifasida yangi Tax Rate qo'shish uchun **Add new Row** tugmasini bosing.

![Yuqoridagi Add new Row tugmasi bilan tax rates editor jadvali](/img/config/tax-rates-editor.png)

Har bir tax ratega (fakturalarda ishlatiladigan) **title** (unvon) berishingiz kerak. Keyin siz ushbu tax qaysi mamlakatda, qaysi viloyat va shaharda qo'llanilishini tanlashingiz mumkin (ikkalasi ixtiyoriy). Nihoyat, **tax rate ni foizlarda** qo'shing.

### Tax Kategoriyalari

Turli mahsulotlar uchun turli tax stavkalarini qo'shish uchun bir nechta Tax Category yaratishingiz ham mumkin.

**Add new Tax Category** ga bosing, keyin o'zingizning kategoriyangiz nomini yozing va **Create** tugmasini bosing.

![Tax rates editor yuqorisidagi Add new Tax Category tugmasi](/img/config/tax-categories-add.png)

![Kategoriya yaratish modalida Tax Category Name kiritish maydoni](/img/config/tax-categories-create-modal.png)

Kategoriyalar orasidan o'tish uchun **Switch** ni bosing va yangi taxlarni qo'shmoqchi bo'lgan kategoriyani tanlang.

![Tax categorylar orasidagi o'tish tugmasi](/img/config/tax-categories-switch.png)

![Mavjud kategoriyalarni ko'rsatuv Tax category tanlov menyusi](/img/config/tax-categories-select.png)

Ma'lum bir mahsulot uchun tax kategoriyasini belgilashni **Product edit page** ga o'tib, keyin Taxes (Soliqlar) yorlig'iga kiritishingiz mumkin.

![Tax category va soliqqa tushadigan holatni ko'rsatuv Product taxes tab](/img/config/product-taxes.png)

Ushbu ekranda esa **Is Taxable?** (Soliqlanishi mumkinmi?) tugmasini o'chirish orqali Ultimate Multisite ga ushbu mahsulotda soliq to'plash kerakligini aytishingiz mumkin.

## Yevropa BMT (VAT) Qo'llab-quvvatlash

Oldida aytganimizdek, Yevropa QST qoidalari tufayli qo'shimcha talablarga ega bo'lgan Yevropa mijozlar uchun bizda qo'shimcha xizmat mavjud.

Bizning QST vositalarimiz quyidagi muhim vazifalarda yordam beradi:

  * Yevropa QST darajalarini oson yuklash;

  * QST raqamini yig'ish va tasdiqlash — shuningdek, QST bekor qilinmagan tashkilotlar uchun (masalan, amal qiladigan QST raqamiga ega bo'lgan kompaniyalar kabi) teskari yuklash.

Bu qo'shimchani o'rnatish uchun **Ultimate Multisite > Settings** ga boring va keyin **Check our Add-ons** menyusi orqali berilgan linkni bosing.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Sizlar qo'shimchalar sahifasiga yo'naltirilgan bo'lasiz. U yerda siz **Ultimate Multisite VAT add-on**ni qidirib, uni o'rnatishingiz mumkin.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Keyin **Network Admin > Plugins** ga o'ting va bu qo'shimchani butun tarmoq uchun faollashtiring.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Agar siz **Tax Settings tab**ga qaytsangiz, yangi variantlar ko'rarsiz. Yangi QST vositalaridan foydalanish uchun **Enable VAT Support** opsiyasini yoqing. Sozlamalaringizni **saqlashni** unutmang!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### QST darajalarini yuklash

Bizning integratsiyamiz qo'shadigan vositalardan biri Yevropa a'zalar davlatlari uchun soliq darajalarini yuklash imkoniyatidir. Buni Yevropa QSTni faollashtirgandan so'ng soliq darajalari tahrir sahifasiga kirib amalga oshirish mumkin.

Sahifaning pastda QAM (VAT) tortishish variantlarini ko'rishingiz mumkin. Kurs turini tanlab, **Update EU VAT Rates** tugmasini bosganingizda, siz har bir Yevropa a'zasi uchun soliq stavkalarini o'z ichiga olgan jadvalni ochib, avtomatik to'ldirishingiz mumkin. Keyin faqat saqlashingiz kerak bo'ladi.

![Soliq stavkalari tahrirlash tugmasi sahifaning pastki qismida](/img/config/tax-rates-vat-pull.png)

Uni tortib olganingizdan so'ng qiymatlarni ham tahrirlashingiz mumkin. Buni qilish uchun kerakli jadval qatorini tahrirlab, yangi qiymatlarni saqlash tugmasini bosing.

### VAT Tasdiqlash

VAT qo'llab-quvvatlanishi yoqilganida Ultimate Multisite xaridlar shaklida faktura manzili maydonidan pastroq qo'shimcha maydonni qo'shadi. Bu maydon faqat Yevropa hududidagi mijozlar uchun ko'rinadi.

<!-- Screenshot unavailable: Xaridlar shaklidagi VAT raqami maydoni, faktura manzilidan pastda -->

Ultimate Multisite keyin VAT raqamini tasdiqlaydi va agar u to'g'ri bo'lsa, teskari yuklash mexanizmi qo'llaniladi va o'sha buyurtma uchun soliq stavkasi 0% ga sozlanadi.
