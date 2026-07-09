---
title: Sayt şablonları
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# سايت قالبleri (v2) {#site-templates-v2}

_**UYARI: Bu makale Ultimate Multisite sürüm 2.x'i ifade eder. Eğer siz 1.x sürümünü kullanıyorsanız,**_ **bu makaleye bakın.**_

Ultimate Multisite ile premium bir ağ oluşturmanın amacımız, mümkün olduğunca çok süreci otomatikleştirmek ve müşterilerimize web sitelerini oluştururken esneklik sağlamak ve onlara seçim yapmaları için farklı seçenekler sunmaktır. Bu dengeyi kurmanın kolay bir yolu da Ultimate Multisite Site Templates özelliğini kullanmaktır.

## Site Şablonu Nedir? {#what-is-a-site-template}

Adından da anlaşılacağı gibi, Site Template (Site Şablonu), ağınızda yeni siteler oluştururken temel olarak kullanılabilen bir başlangıç şablonudur.

Bu ne demek biliyor musunuz? Yani siz bir temel site oluşturabilir, farklı eklentileri etkinleştirebilir, aktif bir tema ayarlayabilir ve onu istediğiniz gibi özelleştirebilirsiniz. Sonra müşteriniz yeni bir hesap oluşturduğunda, içinde anlamlı içerik olmayan varsayılan bir WordPress sitesi yerine, tüm özelleştirmeler ve içerikler zaten yerleştirilmiş temel sitenizin bir kopyasını alır.

Bu harika geliyor, ama yeni bir site şablonu nasıl oluştururum? Bu mümkün olan en basit şeydir.

## Yeni Bir Site Şablonu Oluşturma ve Düzenleme {#creating-and-editing-a-new-site-template}

Site Template'ler ağınızdaki normal sitelerdir. Yeni bir şablon oluşturmak için sadece **Network Admin > Ultimate Multisite > Sites > Add Site** yolunu izleyebilirsiniz.

**![Sites list sayfasındaki site ekle butonu](/img/config/site-templates-list.png)**

Bu, size **Site başlığı, Site Alan Adı/yolu** ve **Site türü** soran bir modal pencere açacaktır. **Site Türü** açılır menüsünün altında **Site Template**'i seçtiğinizden emin olun.*

_![site türü açılır menüsü ile site şablonu ekleme modalı](/img/config/site-templates-list.png)_

Ayrıca şablonun ne içerdiğini açıklamak için müşteriye yönelik bir açıklama da ekleyebilirsiniz:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Formun sonuna, siz **Copy Site** toggle switch'ini görseňiz. Bu sizga mavjud bir site template asosida yangi site template yaratish imkanı beradi, shunda boshidan boshlash o'rniga vaqtni tejashingiz mumkin.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Site Template mazmunini moslashtirish {#customizing-the-contents-of-a-site-template}

Site templateingizni moslashtirish uchun, uning dashboard paneliga kiring va kerakli o'zgarishlarni bering. Siz yangi postlar, sahifalar yaratishingiz, pluginlarni faollashtirishingiz va faol mavzuni (theme) o'zgartirishingiz mumkin. Hatto Customizerga borib barcha turdagi moslashtirish opsiyalarini o'zgartirishingiz ham mumkin.

![Site template edit interface](/img/config/site-template-edit.png)

Barcha bu ma'lumotlar, mijoz ushbu Site Template asosida yangi site yaratganida nusxalanadi.

### Kengaytirilgan opsiyalar {#advanced-options}

Agar siz ba'zi maxsus kodlash bilan tanish bo'lsangiz, siz yangi site yaratilgandan so'ng unga ma'lumotlarni avtomatik almashtirish uchun bizning Search and Replace API dan foydalanishingiz mumkin. Bu kompaniya nomlarini "About" sahifasida o'zgartirish yoki aloqa sahifasidagi kontakt elektron pochta manzilini almashtirish kabi narsalar uchun juda foydalidir.

### Site Template-lardan foydalanish {#using-site-templates}

Xo'sh, siz turli dizaynlar, mavzular va sozlamalarga ega ko'p turdagi Site Template yaratdingiz. Endi ularni o'zingizning tarmohingizda qanday foydali qilish mumkin?

Asosiy jihatdan, endi siz bitta vaqtda ikkita yondashuvdan foydalanishingiz mumkin (bir vaqtning o'zida emas):

  * Bitta Site Template-ni har biringizning Plansiga bog'lash.

**Yoki**

  * Mijozlarga ro'yxatdan o'tish paytida o'zlari site template-larni tanlash imkonini berish.

#### Rejim 1: Site Template taqsimlash {#mode-1-assign-site-template}

این حالت در این حالت، مشتریان شما وقتی حساب کاربری می‌سازند نمی‌تونن قالب انتخاب کنن، بلکه شما تعیین می‌کنید که هر پلن از سایت‌ها باید از کدام قالب استفاده کنه.

برای انجام این کار، باید به **Ultimate Multisite > Products > Edit** بروید.

![Edit product to assign site template](/img/config/product-site-templates.png)

این شما را به صفحه **Edit Product** می‌برد. در بخش **Product Options** (گزینه‌های محصول)، تب **Site template** (قالب سایت) را پیدا کنید و گزینه **Assign Site Template** (تخصیص قالب سایت) را از منوی کشویی انتخاب کنید. این کار لیست قالب‌های سایت موجود را باز می‌کند و به شما اجازه می‌دهد فقط یک قالب سایت اختصاصی برای آن محصول را انتخاب کنید.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### حالت ۲: انتخاب قالب سایت موجود {#mode-2-choose-available-site-template}

در این حالت، شما در طول فرآیند ثبت‌نام به مشتریان خود اجازه می‌دهید که انتخابی داشته باشند. آن‌ها می‌توانند از بین قالب‌های سایت مختلفی که تحت تنظیمات محصول تعریف کرده‌اید، یکی را انتخاب کنند. شما گزینه‌ای دارید که تعداد قالب‌های سایت قابل انتخاب توسط آن‌ها را تحت محصول انتخابی محدود کنید. این کار به شما اجازه می‌دهد مجموعه‌های مختلفی از قالب‌های سایت را برای هر محصول داشته باشید که برای برجسته کردن قابلیت‌ها و ویژگی‌های متفاوت در محصولات با قیمت بالاتر عالی است.

**Mahsulotni Tahrir Qiladigan Sahifada.** **Mahsulot Parametrleri** bo'limida, **Sayt shablonini (Site template)** tabiga kiring va menyudan **Mavjud sayt shablonini tanlash (Choose Available Site Template)** opsiyasini tanlang. Bu sizga mavjud sayt shablonlari ro'yxatini ochadi va qaysi sayt shablonini mavjud qilishni xohlasangiz, uni tanlashingiz mumkin. Buni uning xatti-harakatiga ko'ra qilishingiz mumkin: agar sayt shablonini ro'yxatda ko'rsatmoqchi bo'lsangiz **Mavjud (Available)** ni tanlang. Agar sayt shablonining variant sifatida ko'rsatilmasligini xohlasangiz esa **Mavjud emas (Not Available)** ni tanlang. Va agar ro'yxatdagi sayt shablonlardan birini boshlovchi tanlangan holda qoldirmoqchi bo'lsangiz, **Oldindan tanlangan (Pre-selected)** ni tanlang.

![Xatti-harakat variantlari bilan mavjud sayt shablonlarini tanlash](/img/config/product-site-templates.png)

### Default Rejim: To'lov shaklida sayt shablonini tanlash {#default-mode-site-template-selection-on-the-checkout-form}

Agar siz barcha sayt shablonlaringizni ro'yxatdan o'tish davomida mavjud qilishni xohlasangiz, yoki har bir mahsulot uchun qo'shilgan yoki aniqlangan sayt shablonlarni belgilash va shu kabi qo'shimcha ishlar qilishdan voz kechmoqchi bo'lsangiz. Unda siz oddiygina **To'lov shakli (Checkout Form)** ostidagi sayt shablon tanlovini sozlang. Buni qilish uchun **Ultimate Multisite > Checkout Forms** ga o'ting va sozlamoqchi bo'lgan shakl ostida **Tahrirlash (Edit)** tugmasini bosing.

Bu sizga **To'lov shaklini tahrirlash (Edit Checkout Form)** sahifasini ochadi. **Shablon tanlovi (Template Selection)** maydonini toping va uning ostidagi **Tahrirlash (Edit)** tugmasini bosing.

Modal oynasi chiqadi. **Shablon Saytlari (Template Sites)** maydonida ro'yxatdan o'tish davomida mavjud bo'lishini xohlagan barcha sayt shablonlarini tanlashingiz va ro'yxatga olishingiz mumkin. Siz bu yerda belgilagan sayt shablonlari foydalanuvchi qaysi mahsulotni tanlasa ham mavjud bo'ladi.

![To'lov shakli tahrirchisi maydonidagi shablon tanlovi](/img/config/checkout-form-template-step.png)

Frontendda, mijozlar to'lov jarayonida shablon tanlovchi orqali saytning boshlang'ich dizaynini tanlash imkoniyatiga ega bo'ladi.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### সাইট قالب Seçenekleri (Site Template Options) {#site-template-options}

Ultimate Multisite ayarlarında açıp kapatabileceğiniz başka site şablonu işlevleri de mevcuttur.

![Ultimate Multisite ayarlarındaki site şablonu seçenekleri](/img/config/settings-sites-templates-section.png)

#### Şablon Değiştirme İzni Verin (Allow Template Switching) {#allow-template-switching}

Bu seçeneği etkinleştirirseniz, müşteriler hesap ve site oluşturulduktan sonra kayıt işlemi sırasında seçtikleri şablonu değiştirebilirler. Bu, bir müşterinin bakış açısıyla faydalıdır çünkü daha sonra orijinal seçimlerinin kendi özel ihtiyaçları için en iyisi olmadığını fark ederlerse yeniden bir şablon seçmelerine olanak tanır.

#### Kullanıcıların Kendi Sitemlerini Şablon Olarak Kullanmasına İzin Verin (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Alt site kullanıcıları kendi sitelerini oluşturmak ve tasarlamak için zaman harcadıkları için, ağınızda başka bir alt site oluşturulduğunda mevcut site şablonlarından birini klonlayıp kullanmak isteyebilirler. Bu seçenek onlara bunu yapma imkanı verecektir.

#### Şablon Çoğaltılırken Medyayı Kopyalama (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Bu seçeneği işaretlerseniz, şablon sitesine yüklenen medyayı yeni oluşturulan siteye kopyalar. Bu, her bir planda geçersiz kılınabilir.

#### **Arama Motorlarının Site Şablonlarını İndekslemesini Engelleme (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Bu makalede tartıştığımız gibi site şablonları standart (boilerplate) olsa da ağınızın bir parçasıdır ve bu, arama motorlarının onları bulabilmesi anlamına gelir. Bu seçenek, arama motorlarının bunları indekslemesine izin vermemek için site şablonlarını gizlemenize olanak tanır.

## Otomatik Arama-Değiştirme ile Site Şablonlarını Önceden Doldurma (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite-inning eni eni qutul bir xususiyati, ro'yxatdan o'tish shakliga istal matn, ranglar va tanlovli maydonlarni qo'shish imkoniyatidir. Biz bu ma'lumotni yig'ib olganimizdan so'ng, uni tanlangan sayt shablonining ba'zi qismlaridagi kontentni oldindan to'ldirish uchun ishlatishimiz mumkin. Keyin yangi sayt e'lon qilindiqlarida Ultimate Multisite o'rniga joylashgan belgilarni ro'yxatdan o'tish paytida kiritilgan haqiqiy ma'lumot bilan almashtiradi.

Masalan, agar siz ro'yxatdan o'tish paytida foydalanuvchining kompaniya nomini olishni va kompaniya nomini avtomatik ravishda bosh sahifaga qo'yishni xohlasangiz. Shablon saytingizning bosh sahifasiga quyidagi kabi belgilarni (placeholders) qo'shishingiz kerak (belgilar ikki qavosh ichida joylashishi kerak - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Keyin, siz bu ma'lumotni yig'ib olish uchun o'tish shaklingizdagi mos keladigan ro'yxatdan o'tish maydonini qo'shishingiz mumkin. Shabloni tanlash uchun ishlatiladigan xudosh shakl editori sizga shablon tanlovchidan tashqari maxsus maydonlarni joylashtirish imkonini beradi:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Sizning mijozingiz esa ro'yxatdan o'tish paytida bu maydonni to'ldira oladi.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite esa foydalanuvchi tomonidan berilgan ma'lumotlar bilan belgilarni avtomatik ravishda almashtiradi.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "belgilar to'la sayt" muammosini hal qilish {#solving-the-template-full-of-placeholders-problem}

Barcha bu juda yaxshi, lekin biz noqulay bir muammo bilan duch kelamiz: endi sayt shablonlarimiz - ularni mijozlar tashrif buyurishi mumkin bo'lgan - ko'p ma'lumot bermaydigan chiroysiz belgilardan to'la.

اون مسأله‌ی حلش، ما اون yerlər üçin sahte qiymətlər təyin etmək imkanını təklif edirik və bu dəyərləri sizin müştəriləriniz saytları ziyarət edərkən şablon saytlarında axtarış və əvəzlik (search and replace) üçün istifadə edirik.

Şablon yer tutucular redaktörünə getmək üçün **Ultimate Multisite > Settings > Sites**-a keçin, sonra menyu panelində **Edit Placeholders** linkinə klikləyin.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Bu sizi yer tutucuların məzmun redaktörünə aparacaq; orada siz yer tutucuları və onların müvafiq məzmunlarını əlavə edə bilərsiniz.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
