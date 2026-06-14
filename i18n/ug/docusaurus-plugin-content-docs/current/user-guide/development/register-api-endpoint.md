---
title: API uç noktasını kaydet
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite سجل API конектир

Bu dərslikdə siz Ultimate Multisite /register API конеktörünü necə istifadə edib, şəbəkənizdə yeni bir müştəri üçün tam giriş prosesini necə yaratacağınızı və bunu Zapier ilə necə etə biləcəyinizi öyrənəcəksiniz.

Bu endpoint POST usulini ishlatadi va `_**https://yoursite.com/wp-json/wu/v2/register**_` URL'i orqali chaqiriladi. Bu chaqiruvda sizning tarmog'ingizda 4 jarayon bajariladi:

* ي新しい ووردبريس (WordPress) المستخدم oluşturulur veya kullanıcı kimliği aracılığıyla tanımlanır.

* Ultimate Multisite'ta yeni bir Müşteri oluşturulur veya müşteri kimliği aracılığıyla tanımlanır.

* ووردبريس ağı üzerinde yeni bir site oluşturulur.

Энди, Ultimate Multisite'ta yangi bir Üy (Membership) yaratiladi.

هذه فرآیندە өчен API ахыятыгызны кабул итүңүз. Аларны алу үчүн, сеть администратор панелинге кириңиз, **Ultimate Multisite > Settings** > **API & Webhooks**-ка барылыңыз һәм API Арасындагы Аппарат (API) Рәсми бөлүмнөсүн карагыз.

![Ultimate Multisite-ta API sozlamalari bo'limi](/img/config/settings-api.png)

Mana API sozlamalari sahifasining to'liq ko'rinishi:

![API sozlamalari to'liq sahifa](/img/config/settings-api-full.png)

**Enable API** (API ni faollashtirish) ni tanlang va o'zingizning API ma'lumotlaringizni (credentials) olib oling.

## Endpoint body parametrlari

Endpoint-e göndermemiz gereken asosan kerakli ma'lumotlarning qisqacha ko'rinishini ko'rib chiqamiz. Ushbu maqolaning oxirida siz butun chaqiruvni topasiz.

### Миջбүр (Customer)

Бу процесда İstifadəçi ва Ultimate Multisite Буйручуни ясаш учун зарур бўлган маълумотлар шу ерда берилган:

"customer_id" : integer

شەبەرگەدەرığınızدا yaratilgan müşteri ID'sini göndermek mümkün mü? Eğer gönderilmezse, aşağıdaki bilgiler yeni bir müşteri ve yeni bir WordPress kullanıcısı oluşturmak için kullanılacaktır. Kullanıcı ID'si de müşteri ID'si gibi aynı şekilde gönderilebilir.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Üyeliq (Membership)**

Bu obyekt ichinde bizga faqat Üyelik Holati (Membership Status) kerak.

"membership" { "status" : "string", // birincha "pending", "active", "trialing", "expired", "on-hold", "canceled" }

### **Mahsulotlar (Products)**

منتجە تۆڕinizden 1 və ya daha çox məhsul ID-lərindən oluşan bir massiv (array) verilir. Diqqət edin, bu endpoint məhsul yaratmaz. Məhsul yaratma endpointi haqqında daha yaxşı başa düşmək üçün Ultimate Multisite sənədlərinə baxın.

**"products" : [1,2],**

### Төлтирме (Payment)

Membership (Уضوлик) kabi, biz faqat holatını bilishimiz kifaye.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }**,

### Sayt (Site)

جس تالماقني سۆزنى قاپاڭ باشлаۇش ئۈچۈرۈش ئۈچۈن، ئۇنىڭدىكى وئب-سایتىن ئىچىدىكى URL ۋە سىزنىڭ تالماقنى (Title) ҳам Site ob'ektى ئىچیدا са츨امىز.

**"site" : { "site_url" : "string", "site_title" : "string" }**

سجل (register) эндпоинтидан олиш янги яратилган аъзо маълумотлари билан массив (array) кўринишида келиб тушади.

## Zapier-да ҳаракат (action) яратиш

Bu yangi va yanada mustahkam hisob yaratish nuqtasini kiritgan bilan, siz Zapierda yangi bir harakatdan foydalanish imkoniyatiga ega bo'lasiz.

Zapierning yangi versiyasi taklif qiladigan barcha narsalardan qanday foydalanish va zavqlanishni bilasizmi? Mana yerda ko'proq o'rganing. (link?)

### Action yaratish

Bu yerda WordPress'te bir "action" (hareket) qanday yaratilacağını tushuntiraman. Bu, siz saytingizdə müəyyən bir hadis baş verdikdə avtomatik olaraq baş verəcək bir əməliyyat deməkdir. Məsələn, bir istifadəçi form doldurduqda və ya bir səhifə yükləndikdə nə etmək istədiyinizi proqramlaşdırmaq olar.

**Action nima?**
Sadə desək, action, WordPress-in işləmə qaydasında müəyyən bir nöqtədə baş verən və həmin nöqtədən sonra əlavə kod yazmağa imkan verən bir funksiyadır. Bu, siz saytın davranışını dəyişmək üçün çox güclü alətdir.

**Action necə yaradılır?**
WordPress-də action yaratmaq üçün əsas üsul "hooks" (kancalar) istifadə etməkdir. Hooks, WordPress-in hazır koduna müəyyən nöqtələrdə siz öz kodunuzu asanlıqla qoşabileceğiniz yerlərdir.

1. **`functions.php` faylından istifadə:** Ən sadə yoldur. Saytınızın ana `functions.php` faylında funksiyalar yazaraq action yaratmaq olar.
2. **Plugin və ya Theme-də kod yazmaq:** Daha mürəkkəb əməliyyatlar üçün ayrı bir plugin və ya tema yaradaraq bu actionları yazmaq daha yaxşıdır.

**Nümunə: Bir səhifə yükləndikdə nə etmək istəyirsiniz?**
Diyərlər deyirlər ki, əgər siz hər dəfə bir səhifə yükləndikdə bir şey etmək istəyirsinizsə, bu üçün `wp_footer` kimi hazır action-lardan istifadə edə bilərsiniz.

```php
function my_custom_action() {
    // Buraya siz əlavə etmək istədiyiniz kodu yazın. Məsələn, bir JavaScript faylı yükləmək və s.
    echo '<script>console.log("Custom action executed!");</script>';
}

add_action('wp_footer', 'my_custom_action');
```

Bu kodda nə baş verir?
* `function my_custom_action()`: Bu, bizim əməliyyatımızı yerləşdirmək üçün bir funksiya (funksiya) yaradır.
* `add_action('wp_footer', 'my_custom_action');`: Bu hissə WordPress-ə deyir ki, `wp_footer` adlı action baş verdikdə, biz yuxarıda yazdığımız `my_custom_action` funksiyasını işlətməyimiz lazımdır.

**Action və Hook fərqi:**
Bu iki sözü çox vaxt qarışdırırlar, amma sadə bir fərqləri var:
* **Action (Harekət):** Bu, WordPress-in hazır kodunda baş verən müəyyən bir nöqtədir (məsələn, "səhifə yükləndikdə"). Action, siz bu nöqtədə özünüzü qoşursunuz.
* **Hook (Kanca):** Hook isə həmin action-un ətrafındakı müəyyən bir yerdir. Siz kodunuzu bu kancaya bağlayırsınız.

Yəni, `add_action()` funksiyası ilə siz bir "hook"a özünüzü qoşursunuz və bu hook aktiv olduqda, sizin yazdığınız kod (action) işləyir.

**Nəticə:**
Action yaratmaq üçün əsas məqam budur ki, WordPress-in hansı anda bir şey etmək istədiyinizi müəyyən edib, həmin anı tutan bir "hook"a öz funksiyanızı bağlamalısınız. Bu, saytınızın hər addımında sizə tam nəzarət verməyə imkan verir!

Zapier bilan qanday ishlatishni ko'rsatish uchun biz Google Forms bilan integratsiya yaratamiz. Bu forma har bir to'ldirilgan va ma'lumotlar formas javoblar yozuviga saqlangandan so'ng, Ultimate Multisite tarmog'ida yangi a'zo (membership) yaratiladi.

Google Forms'da ağa yeni bir üyelik oluşturmak için gerekli olan en az alanlarla bir form hazırlayın.

<!-- Ekran görüntüsü mevcut değil: Yeni bir üyelik oluşturma alanı içeren Google Forms formu -->

اینو در Zapier، یک Zap جدید بسازید و فرم ساخته شده رو به گوگل متصل کنید که داده‌ها توی اون اسپرده ذخیره می‌شن.

<!-- تصویر قابل مشاهده نیست: تنظیمات تریگر Zapier برای اتصال به صفحه گسترده فرم‌های گوگل -->

Google Forms formu Zapier bilen baglanip, tarapda ağ bilen integratsiya etmek üçin tayyormiz. Indi, Google Forms her dolgulananda işlenen Triggerden soň yuz berýän Action-a geçeli.

Ultimate Multisite uygulamasını bulun ve onu seçin. Bu tür bir Zap için Kayıt (Register) seçeneğini tercih edin.

Bu birinchi qadamdan keyin, bu Zap bilan bog'lanadigan hisobni tanlang.<!-- Ekran tasviri mavjud emas: Ultimate Multisite uchun Zapier hisobi ulash bosqichi -->

Bu jarayonning eng sezgir qismi. Biz Google Formidan kelgan maydonlarni ushbu maqolaning oldingi bo'limida ko'rsatilganidek ro'yxat (register) nuqtasi uchun zarur bo'lgan minimal maydonlar bilan moslashtirishimiz kerak.

Bu misalda biz faqat saytning foydalanıcı adı (username), e-posta adresi (email), şifre (password), adı (name) va URL'sini ayarlamamız kifayeti. Qolgan barcha narsalar oldindan belgilangan bo'ladi, shunda bu Google Forms orqali yaratilgan barcha aʼzoliklar bir xil mahsulot va holat namunasi bo'ladi.

<!-- スクリーンショットي उपलब्at эмас: Google Forms ва Ultimate Multisite регистр конектирләре арасындагы Zapier поле маппилара -->

Маlumatlar sozlandığında, ниҳоят тестга ўтинг. Охирги экранда сиз ререгистринг (endpoint)га юборилган барча майдонларни, уларнинг тегишли маълумотларини ва бўш юборилиши керак бўлган майдонларни кўрасиз.<!-- Скриншот мавжуд эмас: Zapier тест экрани реестр endpoint'га юборилиши керак бўлган барча майдонларни кўрсатади -->

ياڭ жаңы Zap-ınızı سېنىڭ، ئۇنىڭ муваффақиятли تاتق قىلىش كېرەك. ھەر қандай хато يرتса، барча талаبلارني текشاڭ ва ئۇلار тўғри يۈрдەنيلادۇми, текشاڭ. Кўп маълумат بارлиги сабабли، баъزماملاлар ئاغلىقدا قىلىپ كۆرمەڭ.

### Тام مالدى (Complete endpoint parameters)

هەر تامانî çağrı və göndərilə bilən sahələr haqqında bütün imkanlar aşağıdadır.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // birin "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : boolean, "country" : "string", "currency" : "string", "payment" { "status" : "string", // birin "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : boolean, "template_id" : "string" }
