---
title: Birinchi Obunali Mahsulotingizni Yaratish
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Birinchi Obunali Mahsulotingizni Yaratish (v2) {#creating-your-first-subscription-product-v2}

_**MUHIM ESLATMA: Ushbu maqola faqat Ultimate Multisite 2.x versiyasi foydalanuvchilari uchun.**_ Agar siz 1.x versiyasidan foymanatgan bo'lsangiz, _**shu maqolani o'qing**_.

Tarmoqni ishga tushirish va potensial foydalanuvchilarga xizmatlaringizni sotishni boshlash uchun sizda turli obunali variantlar bo'lishi kerak. Bu mahsulotlarni qanday yaratasiz? Qanday turdagi mahsulotlarni taklif qilish mumkin? Ushbu maqolada biz mahsulotlar haqida bilishingiz kerak bo'lgan barcha narsalarni ko'rib chiqamiz.

## Mahsulot Turi {#product-type}

Ultimate Multisite bilan siz mijozlaringizga ikkita turdagi mahsulotlarni taklif qilishingiz mumkin: **reja** va **qo'shimchalar (Order Bump)**. Qo'shimchalar ikki turga bo'linishi mumkin: **paketlar** va **xizmatlar**. Ularning farqini va xususiyatlarini keyinchalik ko'rib chiqamiz.

  * **Rejalar**: Ultimate Multisite ning asosiy mahsuloti. Mijoz faqat reja bilan bog'langan bo'lsa, uning a'zosi bo'lishi mumkin. Reja sizning mijozlaringizga bir yoki undan ko'proq saytlarni (rejangiz konfiguratsiyasiga bog'liq) beradi va mahsulot tahrirlash sahifangizda belgilagan cheklovlar mavjud.

  * **Paketlar**: Ultimate Multisite rejalari funksionalligiga bevosita ta'sir qiladigan qo'shimchalar. Ular mijoz sotgan asl rejaning cheklovlarini o'zgartiradi yoki unga yangi resurslar, pluginlar yoki temalarni qo'shadi. Masalan, oddiy reja oyiga 1000 tashrifni ruxsat berishi mumkin va siz bu sonni 10 000 gacha kengaytirish imkonini beradigan paketni taklif qilishingiz mumkin.

  * **Xizmatlar**: Ultimate Multisite ning funksionalligiga ta'sir qilmaydigan qo'shimchalar. Bular mijoz sotgan reja bilan birga siz uning uchun amalga oshiradigan vazifalardir. Masalan, mijoz bitta saytga ruxsat beruvchi rejanotini sotib olishi va shu sayt dizaynini yaratish uchun qo'shimcha xizmat uchun pul to'lashim mumkin.

## Mahsulotlarni Boshqarish {#managing-products}

Ko'p odam uchun Ultimate Multisite-da **Products** (Mahsulotlar) yorlig'i (**Ultimate Multisite > Products**) odatdagi hosting muhitidagi rejalarga teng bo'lishi mumkin.

Ultimate Multisite ichida Products yorlig'i ma'lum bir mahsulot yoki xizmat uchun qo'llaniladigan tuzilma va cheklovlarni belgilaydi. Bunday tuzilmalar mahsulot yoki xizmat tavsifi, narx, soliqlar va ruxsatnomalar bilan bog'liq bo'ladi.

Bu qism Ultimate Multisitening muhim asosiy qismidir haqida tushunishingizga yordam beradi.

![Products list page](/img/config/products-list.png)

## Mahsulotlarni qo'shish {#adding-products}

Reja, paket yoki xizmatni belgilash uchun kirish nuqtasi **Ultimate Multisite > Products > Add Product** orqali amalga oshirilishi mumkin.

![Add Product button](/img/config/product-add-button.png)

Interfeysda ikkita asosiy bo'lim mavjud. Chap tomonda mahsulotni belgilashga yordam beradigan bir nechta yorliqlar (tabs) bor, o'ng tomonda esa mahsulotning asosiy narxini, faol holatini va mahsulot rasmini belgilash uchun bir nechta bo'limlar mavjud.

![Product edit page overview](/img/config/product-edit-full.png)

### Tavsif (Description) {#description}

Asosiy mahsulot ma'lumotlari mahsulot nomi va tavsifi berish orqali belgilanishi mumkin. Bu identifikatorlar reja va narxni tanlash, fakturalar, yangilashlar va boshqa joylarda talab qilinadigan har qanday yerda ko'rsatiladi.

![Product description section](/img/config/product-description.png)

### Narx turi (Pricing Type) {#pricing-type}

Interfeysning o'ng tomonida asosiy narx belgilanishi mumkin.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite uchta turli narx turini qo'llab-quvvatlaydi. **paid** (to'langan) variant tarmoq administratoridan mahsulotning narxi va hisoboti chastotasi haqida ma'lumot so'raydi.

### Narx (Pricing) {#pricing}

Narx komponenti asosiy mahsulot narxini va hisoblash oralig'ini belgilaydi.

![Narxlash va saqlash bo'limi](/img/config/product-pricing-save.png)

shunday qilib, masalan, $29.99 narxi va 1 oylik sozlama bilan har oyda $29.99 to'lanadi. Shunga o'xshash tarzda, 3 oylik sozlama bilan $89.97 narxlisi har choraklik (quarter) ravishda shu miqdorda to'lanadi.

### To'lov sikllari {#billing-cycles}

To'lov sikllari bo'limi yuqorida aytilgan to'lov oralig'ining chastotasini belgilaydi va bu odatda shartnomalar yoki aniq muddatlar ko'rsatiladi.

![Narxlash va saqlash bo'limi](/img/config/product-pricing-save.png)

Masalan, 1 oylik oralig'li va 12 ta to'lov sikllari bilan $29.99 narxidagi mahsulot uchun har oyda $29.99 to'lanadi va bu mahsulot uchun keyingi 12 oy davomida amal qiladi. Boshqacha qilib aytganda, bunday sozlama 12 oylik muddatga $29.99 narxli aniq narxlash shartnomasi yaratadi va undan keyin to'lov tugaydi.

### Sinov muddati (Trial Period) {#trial-period}

Taklif sinovini yoqish orqali tarmoq administrator mahsulot uchun sinov muddatini belgilashi mumkin.

![Narxlash va saqlash bo'limi](/img/config/product-pricing-save.png)

Sinov muddati davomida mijozlar mahsulotdan bepul foydalanishlari mumkin va sinov muddati tugaguncha ularga hech qanday to'lov qo'yilmaydi.

### O'rnatish haqida to'lov (Setup Fee) {#setup-fee}

Shuningdek, siz o'zingizning rejaingizga o'rnatish haqida to'lovni qo'llashingiz mumkin.

![Narxlash va saqlash bo'limi](/img/config/product-pricing-save.png)

Bu shuni anglatadiki, mijozlar birinchi to'lovda (reja narxidan tashqari) ushbu bo'limda belgilagan haqga mos keladigan qo'shimcha miqdorni to'laydi.

### Faol (Active) {#active}

Faol (active) tugmasi mahsulot yangi ro'yxatdan olinayotgan mijozlar uchun mavjudligini samarali belgilaydi.

![Faol tugma](/img/config/product-active.png)

Agar bu reja uchun mavjud mijozlar bo'lsa, tugmani o'chirilgan (disabled) holatga qo'yish ushbu rejani faol holatlardan olib tashlaydi. **Reja uchun mavjud mijozlar yangi rejaga o'tmaguncha yoki rejadagi danlanmaguncha davomida hisoboti amalga oshiriladi.**

### Mahsulot rasmi {#product-image}

**Upload Image** tugmasi tarmoq administratoriga media kutubxonasidan mahsulot rasmini tanlash yoki yuklash imkonini beradi.

![Product image section](/img/config/product-image.png)

### O'chirish {#delete}

**Delete Product** tugmasi mahsulotni tizimdan o'chiradi. Mahsulot e'lon qilingandan so'ng paydo bo'ladi.

![Delete product section](/img/config/product-delete.png)

Boshqa o'chirishlardan farqli olingan holda, mahsulot hech qanday "sarif" holatiga qo'yilmaydi. Shuning uchun uni o'chirganidan so'ng harakatni qaytarib bo'lmaydi.

### Mahsulot opsiyalari {#product-options}

Asosiy darajadagi mahsulot ma'lumotlari belgilanganidan so'ng, mahsulot opsiyalari tarmoq administratoriga mahsulotning aniq xususiyatlarini yanada belgilashda yordam beradi.

#### Umumiy {#general}

**General** (Umumiy) tab mahsulotning boshqa barcha mahsulot-spesifik tablariga tegmaydigan umumiy xususiyatlarini belgilaydi.

![General tab](/img/config/product-general-tab.png)

O'zi tushunarli **product slug** (mahsulot slug) — bu mahsulotning Ultimate Multisite va boshqa URLlar qismlarida aniqlanishi uchun ishlatiladigan slugdir.

Ultimate Multisite Plan, Paket va Xizmat kabi bir nechta mahsulot turlarini qo'llab-quvvatlaydi. **Product Options** (Mahsulot opsiyalari) tablari belgilangan mahsulot turiga qarab dinamik ravishda o'zgaradi.

**Customer Role** (Mijoz roli) — bu sayt yaratilganda mijozga beriladigan rolini belgilaydi. Odatda, ko'pgina tarmoq administratorlari uchun bu Ultimate Multisite default yoki Administrator bo'ladi. Ultimate Multisite default roli **Ultimate Multisite > Settings > Login & Registration** (Ultimate Multisite > Sozlamalar > Kirish va ro'yxatdan o'tish) da belgilanishi mumkin.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Yangilash va Tushirish (Up & Downgrades) {#up--downgrades}

Bu tab foydalanuvchining o'ziga xos darajasi ichida mavjud bo'lgan yangilash va tushirish yo'llarini belgilaydi.

Bu tushunchani tushunish uchun, masalan, biror niche Ultimate Multisite o'rnatmasi mijozlariga o'quvni boshqarish yechimlarini taqdim etsin. Buni amalga oshirish uchun uchta reja (Asosiy, Plus va Premium) belgilangan bo'ladi va har bir reja uchun maxsus pluginlar faollashtiriladi (pluginlarni qanday faollashtirish haqida ko'proq ma'lumot uchun bu bo'limni keyinchida ko'ring).

Agar Ultimate Multisite o'rnatmasi biznes saytlar yoki elektron tijorat saytlarini ham xizmat qilsa, bu rejalarga mos keladigan boshqa pluginlar o'rnatilishi va faollashtirilishi talab qilinishi mumkin.

Shu nuqtada, eLearning mijozlarining elektron tijorat rejalari bilan o'tishini cheklash arzu moliyaviy jihatdan maqsadga xizmat qilmaydi va muammolarga olib kelishi mumkin, chunki bu rejalarning narxi va cheklovlari mos kelmasligi mumkin.

Shu sababli, mijozning yo'lini cheklash va hodisalarni oldini olish uchun tarmoq administrator bir plan guruhini belgilashi va shu guruh ichida mijoz o'tishi mumkin bo'lgan rejalarni aniqlashi mumkin.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Plan guruhini belgilash uchun **plan guruhlari** ro'yxatidagi mos keladigan rejalarni ko'rsating. **Mahsulot tartibi (product order)** esa rejalarning eng pastidan yuqoriga qanday tartiblanishi va ko'rsatilishi bilan belgilanadi.

Ultimate Multisite ham **order bump** funksiyasini o'z ichiga oladi, bu yerda mos keladigan qo'shimcha mahsulotlar va xizmatlar rejalarga qo'shilishi mumkin. Bular mijozga qo'shimcha narsalar sifatida taklif qilinadi va ular to'lov paytida yoki yangilash jarayonida rejalarga qo'shilishi mumkin.

#### Narx O'zgarishlari (Price Variations) {#price-variations}

Narxohlar narxining o'zgarishlari orqali tarmoq administrator doirasi muddatga qarab boshqa narx darajalarini belgilashi mumkin. Bu sozlama aylanish, choraklik, yillik yoki boshqa har qanday hisoblanish davri uchun bir xil mahsulotni taklif qilish imkonini beradi. Masalan, siz mahsulotni oyiga 29.99 dollar narxida belgilashingiz va yil uchun chegirmali variant sifatida 249.99 dollar narxda taklif qilishingiz mumkin.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Narx o'zgarishlarini yaratish uchun **Enable Price Variations** (Narx O'zgarishlarini Faollashtirish) tugmasini faollashtiring va **Add new Price Variation** (Yangi Narx O'zgarishini Qo'shish) tugmasini bosing.

![Product price variations](/img/config/product-price-variations.png)

O'zgarishni kiritish uchun o'zgarishning davrini, muddatini va narxini belgilang. Qo'shimcha o'zgarishlarni yana bir bor tugmani bosib kiritishingiz mumkin.

Masalan, agar asosiy mahsulot narxi oyiga 29.99 dollar bo'lsa, siz quyidagilarni qo'shishingiz mumkin:

  * **3 OY** uchun 79.99 dollar (oylik narxga kichik chegirma)
  * **1 YIL** uchun 249.99 dollar (yillik majburiyat uchun sezilarli chegirma)

:::tip Frontendda Hisoblanish Davri Tugmasini Ko'rsatish

Narx o'zgarishlari faqat frontend hisoboti (checkout)ga tugma yoki switch qo'shmaydi. Mijozlarga narx davrlari orasida o'tish imkonini berish uchun (masalan, Oylik / Yillik), siz hisoboti shaklingizga **Period Selection** (Davrni Tanlash) maydonini qo'shishingiz kerak. Bosqichma-bosqich ko'rsatmalar uchun [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) manbasiga qarang.
:::

#### Soliqlar (Taxes) {#taxes}

**Taxes** (Soliqlar) tab **Ultimate Multisite > Settings > Taxes** da belgilangan soliq sozlamalariga va aniqroq aytganda belgilangan soliq stavkalariga mos keladi. Soliqni faollashtirish va tegishli soliq stavkalarini belgilash uchun iltimos, [Ultimate Multisite: Settings] hujjatlaridan foydalaning.

![Taxes tab](/img/config/product-taxes.png)

Oldog'da biz Kaliforniya (AQSh)dagi mijozlar uchun 7.25% mahalliy soliq darajasini belgilagandik.

Soliq darajasi **Ultimate Multisite > Settings > Manage Tax Rates** da belgilanganidan so'ng, uni mahsulot darajasida tanlash mumkin bo'ladi.

![Taxes tab](/img/config/product-taxes.png)

Mahsulot soliqloq narsasi ekanligini ko'rsatish uchun **Is Taxable** (Soliqloq Narsa Ekanligi) tugmasini faollashtiring va tegishli soliq darajasini Soliq Kategoriyasi (Tax Category) menyusidan tanlang.

#### Sayt Shablonlari (Site Templates) {#site-templates}

Asosiy jihatdan, sayt shablonlari bu mijozning obuna boshida ularning saytiga nusxalangan to'liq WordPress veb-saytlari hisoblanadi.

![Site Templates tab](/img/config/product-site-templates.png)

Tarmoq administrator (network administrator) shablon saytni faollashtirilgan va sozlanmagan mavzular (themes), pluginlar va kontent bilan oddiy WordPress sayti sifatida yaratadi va konfiguratsiya qiladi. Shablon sayt mijozga harfiy nusxalangan holda beriladi.

Bu tab orqali tarmoq administrator yangi obuna paytida sayt shablonlari xatti-harakatini belgilashi mumkin. Bu reja uchun sayt shablonlaridan foydalanishni ta'minlash uchun **Allow Site Templates** (Sayt Shablonlarini Ruxsat Berish) tugmasini faollashtirilgan holatga qo'ying.

Agar **Allow Site Templates** o'chirilgan bo'lsa, mijozlar obuna shakli, baham ko'rish havolasi yoki URL parametrlari mavjud bo'lsa ham shablonlarni tanlay olmaydi. Ultimate Multisite endi mavjud kirish nuqtalari bo'ylab qatlamli (fallback) tizim orqali bu cheklanishni qo'llaydi: avvalo reja sozlamalari tekshiriladi, keyin baham ko'rish shakli shablonlari sozlamalari, so'ngra oldindan tanlangan yoki URL orqali berilgan shablonlar. Bu reja cheklovlarini bir xil saqlaydi va ularni taqdim etmasligi kerak bo'lgan mahsulotlar uchun shablonlar paydo bo'lishini oldini oladi.

**site template selection mode** (sayt shablonini tanlash rejimi) obuna jarayonida sayt shablonlari xatti-harakatini belgilaydi.

**D** **Default** sozlamasi checkout formidagi qadamlar bo‘yicha amalga oshiriladi. Agar tarmoq administratorida checkout jarayonida shablon tanlash bosqichini belgilagan bo‘lsa va bu bosqich shablonlar bilan belgilangan bo‘lsa, bu sozlama ushbu checkout bosqichidagi ko‘rsatmalarni hisobga oladi.

**A** **Site Template ni tayinlash** belgilangan shablonni tanlashni majbur qiladi. Natijada, checkout jarayonidagi har qanday shablon tanlash bosqichlari o‘chirib tashlanadi.

Oxirida, **C** **Available Site Templates (Mavjud Sayt Shablonlarini tanlash)** checkout bosqichida belgilangan shablonlarni bu sozlamada tanlangan shablonlar bilan ustuvor qiladi. Mijozning tanlovini osonlashtirish uchun oldindan tanlangan shablon ham belgilanishi mumkin.

Asosan, agar tarmoq administrator shablonni checkout bosqichlarida tanlashni xohlasa, ' _default_ ' sozlamasi yetarli bo‘ladi. Alternativ sifatida shablon tanlashni olib tashlash va uni reja sozlamalariga topshirish uchun ' _assign new template_ ' yoki ' _choose available site templates_ ' opsiyalari foydali bo‘lishi mumkin.

#### Saytlar (Sites) {#sites}

**Sites** tab Ultimate Multisite'ning cheklovlar funksionalligining bir qismidir.

![Sites tab](/img/config/product-sites.png)

Bu sozlama mijoz o‘z aʼzoligi doirasida yaratishi mumkin bo‘lgan saytlarning maksimal sonini belgilaydi.

Cheklovni faollashtirish uchun **limit sites** toggle (o‘giruvchi) ni faol holatga qo‘ying va **site allowance** maydonida saytlar maksimal sonini ko‘rsating.

#### Ziyaretlar (Visits) {#visits}

**Visits** tab Ultimate Multisite'ning cheklovlar tizimining yana bir qismidir. Bu sozlama mijoz saytiga kelgan noyob tashriflarni hisoblash va keyinchalik ularni cheklash imkonini beradi.

![Visits tab](/img/config/product-visits.png)

Marketing nuqtai nazaridan tarmoq (network) administratorlari bu sozlamadan foydalanib, mijozlarni cheklovlar yetishganda ularning rejasini yangilashga undash uchun foydalanishlari mumkin. Bu sozlama shuningdek, tizim resurslarini saqlab qolish uchun saytlarga ortiqcha trafikni cheklash va oldini olishda ham tarmoq administratoriga yordam beradi.

Bu funksiyadan foydalanish uchun **limit unique visits** (unikal tashriflar limiti) o'giruvchisini faol holatga qo'ying va **unique visits quota** (unikal tashriflar qotasi) maydonida maksimal unikal tashrifchilar sonini belgilang.

Bu limitga erishganidan so'ng, Ultimate Multisite mijozning saytiga xizmat qilishni to'xtatadi, lekin cheklovlar oshib ketgani haqida xabar beruvchi xabar ko'rsatmaydi.

#### Foydalanuvchilar (Users) {#users}

Ultimate Multisite'dagi 'Foydalanuvchilar' cheklovlari tarmoq administratoriga rolga yaratilishi va yuklanishi mumkin bo'lgan foydalanuvchilar sonini cheklash imkonini beradi.

![Users tab](/img/config/product-users.png)

Cheklovlar funksiyasidan foydalanish uchun **limit user** (foydalanuvchi limiti) o'giruvchisini o'ng tomonga surib faol holatga qo'ying.

Keyingi har bir cheklanadigan rol uchun uning yonidagi o'giruvchini faol holatga qo'ying va tegishli maydon ichida maksimal yuqori chegarani belgilang.

#### Post Turlari (Post Types) {#post-types}

**Post Types** (Post Turlari) yorlig'i tarmoq administratoriga WordPressdagi keng post turlari ro'yxatidagi batafsil cheklovlar qo'yish imkonini beradi.

![Post Types tab](/img/config/product-post-types.png)

WordPress tuzilishi tufayli, postlar va post turlari uning asosiy funksionalligining muhim qismi bo'lgani uchun Ultimate Multisite cheklov tizimi tarmoq administratoriga limitlarni o'rnatish va saqlashda yordam berish uchun mo'ljallangan.

Bu cheklovlar sub-tizimidan foydalanish uchun **limit post types** (post turlari limiti) o'giruvchisini o'ng tomonga surib faol holatga qo'ying.

Key type uchun cheklov qo'yish kerak bo'lsa, uni o'ngga surib yoqishingiz va tegishli maydon ichida maksimal chegarani belgilashingiz kerak.

#### Disk Bo'shlig'i (Disk Space) {#disk-space}

**Disk Bo'shlig'i** tabida tarmoq administratorlari mijozlar tomonidan qabul qilinadigan bo'shliq miqdorini cheklashi mumkin.

![Disk Space tab](/img/config/product-disk-space.png)

Odatda, WordPress multisite'da asosiy fayllar barcha saytlarda ulashgan bo'ladi va media fayllari hamda yuklamalar uchun yaratilgan alohida kataloglar mavjud bo'ladi, bu yerga ushbu sozlamalar va cheklovlar tatibiy.

Disk bo'shlig'i cheklovini faollashtirish uchun **limit disk size per site** (har sayt uchun disk hajmi limiti) tugmasini o'ngga surib uning faol holatiga qo'ying.

Keyin, megabaytlar birligida **disk space allowance** (disk bo'shlig'i ruxsat etilishi) maydonida maksimal yuqori chegarani belgilang.

#### Maxsus Domen (Custom Domain) {#custom-domain}

Bu opsiyani yoqib qo'yish orqali siz ushbu reja uchun maxsus domenlarni faqatgina qabul qilish imkonini berishingiz mumkin.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Temalar (Themes) {#themes}

Mahsulot sozlamalari ichidagi **Themes** (Temalar) tabida tarmoq administratorlari temalarni mijozlar uchun tanlash imkoniyati bilan mavjud qilishlari va shuningdek, temaning holatini majburiy ravishda belgilashni tanlash imkonini beradi.

![Themes tab](/img/config/product-themes.png)

_**Eslatma: Temalarni mijozlar uchun mavjud qilishdan oldin ularni tarmoq administrator tomonidan faollashtirish kerak.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

**Visibility** (Ko'rinuvchanlik) opsiyasi, sayt ichidagi **Appearance > Themes** (Ko'rinish > Temalar) tabida mijozning ushbu temaga qanday ko'rinishi aniqlanadi. Ushbu opsiyani **Hidden** (Yashirilgan) deb belgilash temani ko'rishdan olib tashlaydi va shuning uchun uni tanlash va faollashtirish imkoniyatini cheklaydi.

![Themes tab](/img/config/product-themes.png)

**Behavior** (Xulq-atvor) tanlovi tarmoq administratoriga mijoz sayti yaratilgandan so'ng temaning holatini belgilash imkonini beradi.

Mavjud holatda mavzu mijoz uchun o'z-o'zidan faollashtirish imkoniyati bilan taqdim etiladi. Aksincha, Mavjud bo'lmagan holat esa mijozdan mavzuni faollashtirish imkoniyatini olib tashlaydi. Oxirida, **Majburiy Faollashtirish** (Force Activate) opsiyasi mavzuni tanlash va faollashtirishni majburlaydi, shunda u sayt yaratilganda default sifatida belgilanishi mumkin.

#### Plugins {#plugins}

Themes yorlig'idan farqli o'laroq, Ultimate Multisite tarmoq administratoriga pluginlarni mijozlarga ko'rinishi va yangi sayt yaratilganda ularning holatini belgilash imkonini beradi.

![Plugins tab](/img/config/product-plugins.png)

**Ko'rinish** (visibility) menyusi orqali pluginni mijozning saytida Plugins menyusi opsiyasidan ko'rganida yaqin yoki yashirilgan bo'lishi mumkin.

Tarmoq administrator pluginlarning xatti-harakatini **xatti-harakatlar** (behavior) menyusidagi opsiyalardan foydalanib yanada o'zgartirishi mumkin.

![Plugins tab](/img/config/product-plugins.png)

**Default** tanlovi mijoz tomonidan tanlangan sayt shablonida belgilangan plugin holatini hurmat qiladi. Shunday qilib, shablonda faollashtirilgan pluginlar shablon mijozning saytiga nusxalansa ham faol bo'lib qoladi.

**Majburiy Faollashtirish** (Force Activate) pluginni sayt yaratilganda faol holatga qo'yadi va aksincha, **Majburiy Faollashtirmaslik** (Force Inactivate) pluginni sayt yaratilganda faollashtirmaydi. Bu ikki vaziyatda ham pluginning holati mijoz tomonidan o'z WordPress Plugins menyusi orqali qo'lda o'zgartirilishi mumkin.

**Force Activate & Lock** sozlamasi shunga o'xshash ishlaydi, lekin mijoz tomonidan plugin holatini o'zgartirishni oldini oladi. Shuning uchun Force Activate va Lock sozlamasi pluginni faol holatga majbur qiladi va mijozning uni faollashtirmasligini oldini oladi. O'xshash tarzda, **Force Inactivate & Lock** sozlamasi pluginni faol bo'lmagan holatga majbur qiladi va foydalanuvchining pluginni faollashtirmasligini oldini oladi.

Tarmoq administratorlari Force Activate & Lock va Force Inactivate & Lock sozlamalarini sayt shablonlari bilan birgalikda ko'rib chiqishni xohlaydigan bo'lishi mumkin, chunki bu sozlamalar tanlanganida shablon ichidagi plugin holatlari ta'sirga solishi mumkin.

#### Reset Cheklovlarini Nol Qilish (Reset Limitations) {#reset-limitations}

**Reset Limitations** yorlig'i mahsulotda belgilangan barcha maxsus cheklovlarni qayta tiklaydi. Cheklovlarni nolga keltirish uchun **reset limitations** tugmasiga bosing.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Harakatni tasdiqlash uchun o'ng tomondagi **confirm reset** togglini faol holatga surib, so'ngra **reset limitations** tugmasiga bosing.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Mahsulotni Tahrirlash, Ko'chirish yoki O'chirish {#edit-duplicate-or-delete-product}

Mavjud mahsulotlarni tahrirlash, ko'chirish yoki o'chirish uchun **Ultimate Multisite > Products** ga o'tib, mavjud mahsulot nomining ustiga kursorni olib yurishingiz mumkin.

![Product hover actions](/img/config/product-hover-actions.png)
