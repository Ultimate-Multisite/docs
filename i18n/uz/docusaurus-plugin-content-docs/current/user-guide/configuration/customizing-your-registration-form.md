---
title: Ro‘yxatdan o‘tish formangizni moslashtirish
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Ro‘yxatdan o‘tish formingizni moslashtirish

WordPress platformasida qurilgan boshqa barcha SaaS'lardan tarmog‘ingiz o‘ziga xos ko‘rinishi uchun Ultimate Multisite ro‘yxatdan o‘tish va login sahifalaringizni **Checkout Forms** xususiyatimiz orqali moslashtirish imkonini beradi.

Ular yangi mijozlarni jalb qilishda turli yondashuvlarni sinab ko‘rish uchun oson va moslashuvchan usul bo‘lsa-da, asosan shaxsiylashtirilgan ro‘yxatdan o‘tish formalarini yaratish uchun ishlatiladi. Ushbu maqola buni qanday qilishingiz mumkinligini ko‘rsatishni maqsad qiladi.

## Login va ro‘yxatdan o‘tish sahifalari: {#login-and-registration-pages}

Ultimate Multisite o‘rnatilganda, u asosiy saytingizda avtomatik ravishda maxsus login va ro‘yxatdan o‘tish sahifalarini yaratadi. Ushbu standart sahifalarni istalgan vaqtda **Ultimate Multisite > Settings > Login & Registration** sahifangizga o‘tib o‘zgartirishingiz mumkin.

![Login va Ro‘yxatdan o‘tish sozlamalari sahifasi](/img/config/settings-general.png)

Mana login va ro‘yxatdan o‘tish sozlamalari sahifasining to‘liq ko‘rinishi:

![Login va Ro‘yxatdan o‘tish sozlamalarining to‘liq sahifasi](/img/config/settings-login-registration-full.png)

Keling, **Login & Registration** sahifasida moslashtirishingiz mumkin bo‘lgan har bir variantni ko‘rib chiqamiz:

  * **Ro‘yxatdan o‘tishni yoqish:** Bu variant tarmog‘ingizda ro‘yxatdan o‘tishni yoqadi yoki o‘chiradi. Agar u o‘chirilgan bo‘lsa, mijozlaringiz ro‘yxatdan o‘ta olmaydi va mahsulotlaringizga obuna bo‘la olmaydi.

  * **Email tasdiqlashni yoqish:** Agar bu variant yoqilgan bo‘lsa, bepul tarifga yoki sinov muddati bor pullik tarifga obuna bo‘lgan mijozlar tasdiqlash emailini oladi va veb-saytlari yaratilishi uchun tasdiqlash havolasini bosishi kerak bo‘ladi.

  * **Standart ro‘yxatdan o‘tish sahifasi:** Bu ro‘yxatdan o‘tish uchun standart sahifa. Bu sahifa veb-saytingizda e’lon qilingan bo‘lishi va unda ro‘yxatdan o‘tish formasi (checkout form deb ham ataladi) bo‘lishi kerak — bu yerda mijozlaringiz mahsulotlaringizga obuna bo‘ladi. Istaganingizcha ko‘p ro‘yxatdan o‘tish sahifalari va checkout formalar yaratishingiz mumkin, faqat checkout form shortcode'ini ro‘yxatdan o‘tish sahifasiga qo‘yishni unutmang, aks holda u ko‘rinmaydi.

  * **Maxsus login sahifasidan foydalanish:** Bu variant standart wp-login.php sahifasidan boshqa, moslashtirilgan login sahifasidan foydalanish imkonini beradi. Agar bu variant yoqilgan bo‘lsa, **Standart login sahifasi** variantida (darhol pastda) login uchun qaysi sahifa ishlatilishini tanlashingiz mumkin.

  * **Asl login url (wp-login.php) ni yashirish** : Agar asl login URL'ni yashirmoqchi bo‘lsangiz, bu variantni yoqishingiz mumkin. Bu brute-force hujumlarning oldini olish uchun foydali. Agar bu variant yoqilgan bo‘lsa, foydalanuvchi asl wp-login.php havolasiga kirishga uringanda Ultimate Multisite 404 xatosini ko‘rsatadi

  * **Sinxron sayt e’lon qilishni majburlash:** Mijoz tarmoqdagi mahsulotga obuna bo‘lgandan so‘ng, yangi kutilayotgan sayt haqiqiy tarmoq saytiga aylantirilishi kerak. E’lon qilish jarayoni Job Queue orqali asinxron tarzda amalga oshadi. E’lon qilish signup bilan bir xil so‘rovda amalga oshishini majburlash uchun bu variantni yoqing.

Endi login va ro‘yxatdan o‘tish jarayoniga hali ham tegishli bo‘lgan boshqa variantlarni ko‘raylik. Ular xuddi shu Login & Registration sahifasida **Boshqa variantlar** ostida joylashgan:

  * **Standart rol:** Bu signup jarayonidan keyin mijozlaringiz veb-saytida ega bo‘ladigan rol.

  * **Jumper'ni yoqish:** Admin hududida Jumper yorlig‘ini yoqadi. Jumper administratorlarga har bir menyuni ko‘rib chiqmasdan Ultimate Multisite ekranlari, tarmoq obyektlari va boshqa qo‘llab-quvvatlanadigan manzillarga tez o‘tish imkonini beradi. Agar bu tezkor navigatsiya vositasini admin interfeysidan yashirishni afzal ko‘rsangiz, uni o‘chirib qo‘ying.

  * **Foydalanuvchilarni asosiy saytga ham qo‘shish:** Bu variantni yoqsangiz, signup jarayonidan keyin foydalanuvchi tarmog‘ingizning asosiy saytiga ham qo‘shiladi. Agar bu variantni yoqsangiz, ushbu foydalanuvchilarning veb-saytingizdagi **standart rol**ini belgilash varianti ham darhol pastda paydo bo‘ladi.

  * **Bir nechta Account'larni yoqish:** Foydalanuvchilarga tarmog‘ingizdagi turli saytlarda bir xil email manzili bilan account'larga ega bo‘lishga ruxsat beradi. Agar bu variant o‘chiq bo‘lsa, mijozlaringiz bir xil email manzili bilan tarmog‘ingizda ishlayotgan boshqa veb-saytlarda account yarata olmaydi.

Login va ro‘yxatdan o‘tishga oid moslashtirishingiz mumkin bo‘lgan barcha variantlar shular! Ularni tahrirlashni tugatgach, sozlamalaringizni saqlashni unutmang.

## Bir nechta ro‘yxatdan o‘tish formalaridan foydalanish: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 sizga turli maydonlar, taklifdagi mahsulotlar va hokazolar bilan istaganingizcha ko‘p forma yaratish imkonini beruvchi checkout form muharririni taklif qiladi.

Login va ro‘yxatdan o‘tish sahifalarining ikkalasi ham shortcode'lar bilan joylashtirilgan: login sahifasida **[wu_login_form]** va ro‘yxatdan o‘tish sahifasi uchun **[wu_checkout]**. Checkout formalarini qurish yoki yaratish orqali ro‘yxatdan o‘tish sahifasini yanada moslashtirishingiz mumkin.

Bu xususiyatga kirish uchun chap yon paneldagi **Checkout Forms** menyusiga o‘ting.

![Yon paneldagi Checkout Forms menyusi](/img/config/checkout-forms-list.png)

Bu sahifada sizda mavjud barcha checkout formalarni ko‘rishingiz mumkin.

Agar yangisini yaratmoqchi bo‘lsangiz, sahifaning yuqori qismidagi **Checkout Form qo‘shish** tugmasini bosing.

Boshlang‘ich nuqta sifatida ushbu uch variantdan birini tanlashingiz mumkin: bitta bosqich, ko‘p bosqichli yoki bo‘sh. Keyin **Muharrirga o‘tish** tugmasini bosing.

![Bitta bosqich, ko‘p bosqichli yoki bo‘sh variantlari bilan Checkout Form qo‘shish](/img/config/checkout-forms-list.png)

Shuningdek, mavjud formalaringizni nomi ostidagi variantlarni bosish orqali tahrirlashingiz yoki nusxalashingiz mumkin. U yerda formaning shortcode'ini nusxalash yoki formani o‘chirish variantlarini ham topasiz.

![Tahrirlash, nusxalash va o‘chirish bilan checkout form hover amallari](/img/config/checkout-form-hover-actions.png)

Agar bitta bosqich yoki ko‘p bosqichlini tanlasangiz, checkout form ishlashi uchun kerakli asosiy bosqichlar bilan oldindan to‘ldirilgan bo‘ladi. Keyin, xohlasangiz, unga qo‘shimcha bosqichlar qo‘shishingiz mumkin.

### Checkout Form'ni tahrirlash: {#editing-a-checkout-form}

Avval aytib o‘tganimizdek, turli maqsadlar uchun checkout formalar yaratishingiz mumkin. Bu misolda biz ro‘yxatdan o‘tish formasi ustida ishlaymiz.

Checkout form muharririga o‘tgach, formangizga nom (faqat ichki ma’lumotnoma uchun ishlatiladi) va slug (masalan, shortcode'lar yaratish uchun ishlatiladi) bering.

![Ism va slug maydonlari bilan rasmiylashtirish formasi muharriri](/img/config/checkout-form-name-slug.png)

Formalar bosqichlar va maydonlardan iborat. **Yangi rasmiylashtirish bosqichini qo‘shish** tugmasini bosib yangi bosqich qo‘shishingiz mumkin.

![Yangi rasmiylashtirish bosqichini qo‘shish tugmasi](/img/config/checkout-form-add-step.png)

Modal oynaning birinchi varag‘ida formangiz bosqichi mazmunini to‘ldiring. Unga ID, nom va tavsif bering. Bu elementlar asosan ichki foydalanish uchun ishlatiladi.

![ID, nom va tavsif bilan rasmiylashtirish bosqichi mazmuni varag‘i](/img/config/checkout-form-step-content.png)

Keyin bosqich ko‘rinishini sozlang. **Har doim ko‘rsatish** , **Faqat tizimga kirgan foydalanuvchilar uchun ko‘rsatish** yoki **Faqat mehmonlar uchun ko‘rsatish** variantlaridan birini tanlashingiz mumkin.

![Rasmiylashtirish bosqichi ko‘rinish variantlari](/img/config/checkout-form-step-visibility.png)

Nihoyat, bosqich uslubini sozlang. Bular ixtiyoriy maydonlardir.

![Rasmiylashtirish bosqichi uslubi konfiguratsiyasi](/img/config/checkout-form-step-style.png)

Endi birinchi bosqichimizga maydonlar qo‘shish vaqti keldi. Shunchaki **Yangi maydon qo‘shish** tugmasini bosing va kerakli bo‘lim turini tanlang.

![Yangi maydon qo‘shish tugmasi](/img/config/checkout-form-add-field-button.png)![Maydon turi tanlash ochiladigan ro‘yxati](/img/config/checkout-form-field-type-dropdown.png)

Har bir maydon to‘ldirilishi kerak bo‘lgan turli parametrlarga ega. Bu birinchi kiritish uchun biz **Foydalanuvchi nomi** maydonini tanlaymiz.

![Foydalanuvchi nomi maydoni konfiguratsiyasi](/img/config/checkout-form-username-content.png)![Foydalanuvchi nomi maydoni parametrlari](/img/config/checkout-form-username-visibility.png)![Foydalanuvchi nomi maydoni qo‘shimcha sozlamalari](/img/config/checkout-form-username-style.png)

Kerak bo‘lgancha ko‘p bosqich va maydon qo‘shishingiz mumkin. Mijozlaringiz tanlashi uchun mahsulotlaringizni ko‘rsatish uchun Narxlar jadvali maydonidan foydalaning. Agar mijozlaringizga shablon tanlash imkonini bermoqchi bo‘lsangiz, Shablon tanlash maydonini qo‘shing. Va hokazo.

![Shablon tanlash maydoni bilan rasmiylashtirish formasi muharriri](/img/config/checkout-form-with-template-field.png)

_**Eslatma:** Agar rasmiylashtirish formasini yaratgandan keyin mahsulot yaratsangiz, mahsulotni Narxlar jadvali bo‘limiga qo‘shishingiz kerak bo‘ladi. Agar uni qo‘shmasangiz, mahsulot ro‘yxatdan o‘tish sahifasida mijozlaringizga ko‘rinmaydi._

_**Eslatma 2:** rasmiylashtirish formasini yaratish uchun foydalanuvchi nomi, email, parol, sayt sarlavhasi, sayt URL manzili, buyurtma xulosasi, to‘lov va yuborish tugmasi majburiy maydonlardir._

Rasmiylashtirish formasi ustida ishlayotganingizda, mijozlaringiz formani qanday ko‘rishini bilish uchun har doim Ko‘rib chiqish tugmasidan foydalanishingiz mumkin. Shuningdek, mavjud foydalanuvchi yoki tashrifchi sifatida ko‘rish rejimlari o‘rtasida almashishingiz mumkin.

![Rasmiylashtirish formasi muharriridagi Ko‘rib chiqish tugmasi](/img/config/checkout-form-preview-button.png)![Rasmiylashtirish formasini tashrifchi yoki mavjud foydalanuvchi sifatida ko‘rib chiqish](/img/config/checkout-form-preview-modal.png)

Nihoyat, **Kengaytirilgan parametrlar** bo‘limida **Rahmat** sahifasi uchun xabarni sozlashingiz, konversiyalarni kuzatish uchun snippetlar qo‘shishingiz, rasmiylashtirish formangizga maxsus CSS qo‘shishingiz yoki uni muayyan mamlakatlar bilan cheklashingiz mumkin.

![Rahmat sahifasi, konversiya kuzatuvi va maxsus CSS bilan Kengaytirilgan parametrlar](/img/config/checkout-form-advanced.png)

Shuningdek, o‘ng ustundagi ushbu parametrni yoqib-o‘chirib, rasmiylashtirish formangizni qo‘lda yoqishingiz yoki o‘chirishingiz, yoki formani butunlay o‘chirib tashlashingiz mumkin.

![Rasmiylashtirish formasi uchun faol holat tugmasi va o‘chirish parametri](/img/config/checkout-form-active.png)

Rasmiylashtirish formangizni saqlashni unutmang!

![Rasmiylashtirish formasini saqlash tugmasi](/img/config/checkout-form-save.png)

Formangiz shortcode’ini olish uchun **Shortcode yaratish** tugmasini bosing va modal oynada ko‘rsatilgan natijani nusxalang.

![Nusxalash uchun shortcode bilan Shortcode yaratish modali](/img/config/checkout-form-editor.png)

_**Eslatma:** Bu rasmiylashtirish formasini ro‘yxatdan o‘tish sahifangizga qo‘shish uchun ushbu shortcode’ni o‘sha sahifaga qo‘shishingiz kerak bo‘ladi._

## Mahsulotlar va shablonlarni URL parametrlari orqali oldindan tanlash: {#pre-selecting-products-and-templates-via-url-parameters}

Agar mahsulotlaringiz uchun moslashtirilgan narxlar jadvallarini yaratmoqchi va mijozingiz narxlar jadvali yoki shablonlar sahifasidan tanlagan mahsulot yoki shablonni rasmiylashtirish formasida oldindan tanlamoqchi bo‘lsangiz, buning uchun URL parametrlaridan foydalanishingiz mumkin.

### **Rejalar uchun:** {#for-plans}

**Ultimate Multisite > Mahsulotlar > Rejani tanlash** bo‘limiga o‘ting. Sahifaning yuqori qismida **Ulashiladigan havolani nusxalash uchun bosing** tugmasini ko‘rishingiz kerak. Bu aynan shu rejani rasmiylashtirish formangizda oldindan tanlash uchun foydalanishingiz mumkin bo‘lgan havola.

![Ulashiladigan havola tugmasi bilan mahsulot sahifasi](/img/config/products-list.png)

E’tibor bering, bu ulashiladigan havola faqat **Rejalar** uchun amal qiladi. Paketlar yoki xizmatlar uchun ulashiladigan havolalardan foydalana olmaysiz.

### Shablonlar uchun: {#for-templates}

Agar rasmiylashtirish formangizda sayt shablonlarini oldindan tanlamoqchi bo‘lsangiz, ro‘yxatdan o‘tish sahifangiz URL manzilida ushbu parametrdan foydalanishingiz mumkin: **?template_id=X**. "X" **sayt shabloni ID raqami** bilan almashtirilishi kerak. Bu raqamni olish uchun **Ultimate Multisite > Saytlar** bo‘limiga o‘ting.

Foydalanmoqchi bo‘lgan sayt shabloni ostidagi **Boshqarish** tugmasini bosing. Siz SITE ID raqamini ko‘rasiz. Rasmiylashtirish formangizda aynan shu sayt shablonini oldindan tanlash uchun shunchaki shu raqamdan foydalaning. Bu yerdagi holatimizda URL parametri **?template_id=2** bo‘ladi.

![Sayt shabloni ID raqamini ko‘rsatuvchi saytlar ro‘yxati](/img/config/site-templates-list.png)

Aytaylik, tarmoq veb-saytimiz [**www.mynetwork.com**](http://www.mynetwork.com), rasmiylashtirish formamiz joylashgan ro‘yxatdan o‘tish sahifamiz esa **/register** sahifasida. Ushbu sayt shabloni oldindan tanlangan to‘liq URL quyidagicha ko‘rinadi: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Agar xohlasangiz, rasmiylashtirish formangiz uchun mahsulotlar va shablonlarni birgalikda oldindan tanlashingiz ham mumkin. Buning uchun rejadagi ulashiladigan havolani nusxalab, oxiriga shablon parametrini qo‘yish kifoya. U quyidagicha ko‘rinadi: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
