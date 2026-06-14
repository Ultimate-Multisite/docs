---
title: Üyeliğin Sona Ermesi ve Sayt Bloklama
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Üyeliğin Sona Ermesi ve Sayt Bloklanması

Bu bölümde, Ultimate Multisite'ta üyeliklerin ne zaman sona ereceğini ve sitenizin nasıl bloke edilebileceğini anlatacağız. Bu ayarları doğru yapmak, hem kullanıcı deneyimi hem de güvenlik açısından çok önemlidir.

## Üyelik Süreleri (Membership Expiration)

Üyeliğin süresi dolduğunda ne olacağını ayarlayabilirsiniz. Bunu yaparken iki ana seçeneğiniz var:

1. **Süresiz Üyelik:** Eğer üyelerinizin sürekli erişimine izin vermek istiyorsanız, bu ayarı aktif edebilirsiniz. Bu durumda üyelikler belirli bir tarihte sona ermez.
2. **Belirli Süreli Üyelik:** Belirli bir süre sonra üyeliğin otomatik olarak bitmesini isterseniz, bunu ayarlayabilirsiniz. Örneğin, aylık veya yıllık abonelikler için süreyi belirleyebilirsiniz.

Bu ayarları genellikle üyelik eklentinizin (membership plugin) yönetim panelinden yaparsınız. Burada her bir üyenin durumunu kontrol edebilir ve gerekli değişiklikleri uygulayabilirsiniz.

## Site Bloklama (Site Blocking)

Bazen belirli kullanıcıları veya tüm siteyi geçici olarak bloke etmeniz gerekebilir. Bu özellik, sitenizin güvenliğini sağlamak için çok kullanışlıdır.

**Nasıl Yapılır?**

1. **Kullanıcı Bazında Bloklama:** Belirli bir kullanıcıyı (örneğin, bir üyeyi) tamamen engellemek isterseniz, üyelik yönetim ekranından o kullanıcıya özel bir kısıtlama ekleyebilirsiniz. Bu, o kullanıcının sitenize giriş yapmasını veya belirli bölümlere erişmesini engelleyebilir.
2. **Site Genelinde Bloklama:** Eğer tüm siteyi geçici olarak durdurmak isterseniz (örneğin bakım yaparken), bu işlemi genellikle WordPress'in kendi ayarlarından veya kullandığınız güvenlik eklentisinin özelliklerinden yapabilirsiniz.

**Önemli Not:** Siteyi bloke ederken, hangi kullanıcıların ne zaman tekrar erişebileceğini de düşünmeniz gerekir. Bu tür işlemler yapmadan önce mutlaka yedek almayı unutmayın!

## Teknik Detaylar (Technical Details)

Bu ayarların arkasında genellikle PHP ve MySQL veritabanı işlemleri yatar. Üyelik durumlarını kontrol etmek için kullandığınız kod parçacıkları veya eklenti ayarları, bu süreci yönetir. Eğer özel bir kural eklemeniz gerekiyorsa, `functions.php` dosyasında veya ilgili hook'larda (kancalarda) değişiklik yapmanız gerekebilir.

Örneğin, bir üyenin üyeliği sona erdiğinde otomatik olarak profilini gizlemek için şöyle bir mantık kullanabilirsiniz:

```php
// Üyelik süresi dolduğunda kullanıcıyı otomatik olarak kısıtlama örneği
function check_membership_status() {
    if (is_user_logged_in()) {
        $user = wp_get_current_user();
        // Burada üyelik bitiş tarihini kontrol edebilirsiniz.
        // Örneğin, $expiry_date = get_user_meta($user->ID, 'membership_expiry', true);

        if (/* Üyelik süresi dolduysa */ true) {
            wp_redirect(get_permalink()); // Kullanıcıyı ana sayfaya yönlendir
            exit;
        }
    }
}
add_action('template_redirect', 'check_membership_status');
```

Bu ayarları yaparken her zaman dikkatli olun. Yanlış bir değişiklik, hem üyelerinizin mağdur olmasına hem de sitenizin çalışmamasına neden olabilir. Herhangi bir şüpheniz olduğunda, lütfen destek ekibimizle iletişime geçin!

Ultimate Multisite، üye olma süresinin bitmesi, deneme sürümlerinin sona ermesi ve ön yüz sitelerinin engellenmesi konularını nasıl ele aldığını bu rehberde anlatıyor. Bir üyeliğin aktif durumdan sona ermiş duruma geçmesine kadar olan yaşam döngüsünü, hangi ayarların sitelerin engellenip engellenmeyeceğini kontrol ettiğini ve bir üyelik süresi dolduktan sonra sitelerin hala erişilebilir olup olmadığını neye bakmanız gerektiğini kapsar.

## Üyeliq Durum Döngüsü

Ultimate Multisite'täk her bir üyelikda birinchi quyidagi holatlardan birida bo'ladi:

:::note Бێ گۆڕان ئەندامیتە ئازاد (Free memberships) ژیان بەردەوامن.

بێ گۆڕان ئەندامیتە ئازاد بە شێوەیەکی ئۆتۆماتیک وەک کاتی کۆتایی نایگۆڕێن. Ultimate Multisite ئەمە وەک دەستگەیشتنی بۆ ماوەیەکی تەواو (lifetime access) دەبینێت، بۆیە لە کاتی چاککردنەوەی کارکردنەکەدا (expiration checks) یان ئەگەر بەڕێوەبەری ئەو شێوازە بگۆڕیت یان کڕیارەکەت بۆ بەرنامەیەکی دیکە بدەیت، لەو لیستەدا نییە.

# Ultimate Multisite: WordPress Documentation

## Introduction

WordPress — bu web saytlar uchun juda mashhur va kuchli bir platform. Bu hujjatda sizga Ultimate Multisite dan foydalanish haqida kerakli barcha ma'lumotlarni beraman. Bu platformni qanday o'rnatishdan boshlab, uning asosiy funksionalliklari va kengaytirish usullari haqida tushunishingiz mumkin bo'ladi.

## Installation (O'rnatish)

WordPress ni o'rnatish juda oddiy jarayon. Quyidagi qadamlarni bajaring:

1. **Serverni tayyorlash:** Sizda PHP, MySQL va web server (masalan, Apache yoki Nginx) ishlayotgan bo'lishi kerak.
2. **WordPress fayllarini yuklash:** WordPress rasmiy saytidan barcha fayllarni yuklab oling.
3. **Database yaratish:** MySQL orqali yangi ma'lumotlar bazasini yarating.
4. **O'rnatish:** Fayllarni serveringizga joylashtiring va brauzer orqali WordPress sozlamalar sahifasiga kiring (odatda `sayt.com/wp-admin`).

## Core Concepts (Asosiy Tushunchalar)

WordPress ishlayotganini tushunish uchun ba'zi asosiy narsalarni bilishingiz kerak:

* **Posts (Postlar):** Bu sizning blog postlaringiz yoki ma'lumotli maqolalaringizdir.
* **Pages (Sahifalar):** Bu veb-saytingizdagi statik sahifalardir, masalan "Hakkimizda" yoki "Aloqa".
* **Users (Foydalanuvchilar):** Saytga kiradigan va uni boshqaradigan odamlar. Har bir foydalanuvchi o'z imkoniyatiga ega bo'ladi.
* **Themes (Temalar):** Bu saytingizning ko'rinishini belgilovchi dizayn qismlaridir. Ular saytga vizual jihatdan ko'rinish beradi.
* **Plugins (Plaginlar):** Bu WordPress funksiyalarini kengaytirish uchun ishlatiladigan dasturlar. Masalan, kontakt shakllari qo'shish yoki SEO optimallashtirish kabi narsalarni amalga oshiradi.

## Using Plugins (Plaginlardan Foydalanish)

Pluginlar — bu WordPressning eng katta kuchidir. Ular siz saytingizni o'zingiz istagan har qanday funksiyaga moslashtirishingiz mumkinligini anglatadi.

**Qanday qo'llash kerak?**

1. **Dashboard (Panel):** WordPress admin paneliga kirib, "Plugins" bo'limidan yangi pluginlarni toping va o'rnating.
2. **Custom Functionality:** Agar sizga ma'lum bir yangi funksiyaga ehtiyoj bo'lsa, ko'p plaginlar mavjud. Masalan, WooCommerce (tijorat uchun) yoki Yoast SEO kabi pluginlar juda foydali.

```php
// Bu yerda biz qandaydir maxsus kod yozishimiz mumkin.
// Masalan, sahifa yuklangandan keyin ma'lum bir funksiyani ishga tushirish.
function my_custom_action() {
    // Sizning o'zingizning logikangiz shu yerda bo'ladi.
}
```

## Multisite Setup (Multisite Sozlamalari)

Ultimate Multisite — bu bir serverda ko'p taqsimlangan saytlarni boshqarish imkonini beradi. Bu juda katta kuchli funksiya!

**Asosiy tushunchalar:**

* **Network Admin:** Barcha saytlarning umumiy sozlamalarini (masalan, domenlar, xavfsizlik) boshqaradigan asosiy panel.
* **Subsites (Qo'shimcha Saytlar):** Sizning asosiy saytingizdan alohida ishlaydigan kichik saytlar yaratishingiz mumkin. Har bir subsite o'z mustaqil ma'lumotlar bazasiga ega bo'ladi, lekin ular bitta "Network" ostasida joylashgan bo'ladi.

**Qadamlar:**

1. **Enable Multisite:** WordPress sozlamalaridan Multisite funksiyasini yoqing.
2. **Site Creation:** Yangi sayt yaratish uchun Network Admin orqali yangi subsite qo'shing.

## Custom Development (Maxsus Ishlash)

Agar sizga standart plaginlar bilan qoniqmasangiz, o'zingizning maxsus kodlaringizni yozishingiz mumkin. Bu ko'proq texnik bilim talab qiladi.

**Hooklar (Hooks):** WordPressda "hook" deb ataladigan joylar mavjud. Ular sizga ma'lum bir hodisa sodir bo'lganda o'zingizning kodlaringizni esa ishlatish imkonini beradi. Masalan, `wp_head` hooki sahifaning boshida barcha CSS va JavaScript fayllarini yuklash uchun juda foydali.

```php
/**
 * Sahifa yuklangandan keyin bajariladigan maxsus kod.
 */
add_action( 'wp_footer', 'my_custom_script' );

function my_custom_script() {
    // Bu yerda siz o'zingizning JavaScript kodlaringizni yozishingiz mumkin.
}
```

## Security Best Practices (Xavfsizlik Eng Amaliyotlari)

Saytingiz xavfsiz bo'lishi juda muhim. Quyidagi maslahatlarni bosing:

* **Regular Updates:** WordPress, temalar va plaginlarni doim yangilaytiring. Yangiliklar ko'pincha xavfsizlik kamchiliklarini tuzatadi.
* **Strong Passwords:** Barcha foydalanuvchilar uchun kuchli parol talab qiling.
* **Security Plugins:** Yoast Security yoki Wordfence kabi ishonchli security pluginlardan foydalaning.

## Conclusion (Xulosa)

Ultimate Multisite — bu juda keng imkoniyatlar beradigan vosita. Boshlang'ich sozlamalardan tortib, murakkab maxsus funksiyalarni yaratishgacha bo'lgan barcha narsalarni tushunishingiz mumkin. O'rganishdan charchamang va saytingizni o'z istagingizga moslashtiring!

| Status | Ma'nisi |
|---|---|
| **Pending** | Birinchi to'lov yoki elektron tasdiqlanishni kutmoqda |
| **Trialing** | Faol sinov muddati, hali hech qanday to'lov yig'ilmagan |
| **Active** | To'langan va hozirgi holatdagi |
| **On Hold** | Yangilash to'lovi kutib turibdi (faktura yaratilgan, to'lovni kutmoqda)

| **Sihap bo'lgan (Expired)** | Cheklov belgisi va muddat tugagan, yangilash qilmagan holatda |
| **Bekor qilingan (Cancelled)** | Mijoz yoki administrator tomonidan aniq bekor qilingan |

### A'zoliklar Qanday Tugadi (How Memberships Transition to Expired)

Ultimate Multisite ҳар саат бир бор фонида текширув қилади, бунда улар чегараланган деб белгиланиши керак бўлган аъзоликка қаратилган. Бу текширув [Action Scheduler](https://actionscheduler.org/)дан (ўшақ WP-Cronдан тўғри эмас) ва `wu_membership_check` ташқи режалаштирилган ҳаракат сифатида ишлайди.

和قدار تاقيش (expiration check) دة افتراضي ٣ ڕۆژ گۆشەمه (grace period) آلیه (built-in grace period) دا دارا. ئەگەر `date_expiration` پاسی کردانndan ٣ ڕۆژدا، ئەڤە یەکێماری (membership) وەک `expired` نئەبێت تا ئەو کات. ئەڤە کارلەران بۆ ئەوەی پاشووی پارەدان (late payment) تەواو بکەن پێش ئەوەی وضعیتێن وان بگۆڕن، دەرفەت دابین دکەت.

:::info
3 günlük sona erme kerine sahip olma süresi, aşağıda anlatılan Frontend Block Grace Period ayarından ayrıdır. Sona erme kerine süresi, durumun aktif/beklemede halden sona ermiş hale gelmesini kontrol eder. Frontend block grace period ise durum değişmiş olduktan sonra sitenin ne zaman engelleneceğini kontrol eder.

#### Otomatik Yenilenen ve Otomatik Yenilenmeyen Üyelikler Arasındaki Farklar

Bu ayrım, sürenin ne zaman dolacağını anlamak için çok önemlidir:

**Ўзини автоматӣ қайта заявнамалар бўлмаган аъзолик (auto_renew = false):** Соатлик cron иши бунинг барча жараёнларини бажаради — у қайта заявнама тўловларини яратади, аъзоликни "тувқин" ҳолатига ўтказиб, тўлов олинмаган тақдирда уни вақти ўтган деб белгилайди.

**اوتوماتیک yenilenýan üyeliikler** (`auto_renew = true`): Cron-un sonlanma kontroli **bunları tamamen atlayar**. Ödeme ağ geçidi (Stripe, PayPal vb.) bir abonelik başarısız olduğunda veya iptal edildiğinde Ultimate Multisite'a webhook yoluyla haber vermesi beklenir. Eğer webhook alınmazsa -- yanlış yapılandırılmış bir uç nokta, bir ağ geçidi kesintisi veya sistem dışında iptal edilen bir abonelik nedeniyle -- üyelik son kullanma tarihi geçse bile sonsuza kadar `active` (aktif) kalabilir.

### قيد (Trials) کی آخری تاریخ کیا ہے؟

جب کسی ٹرائل ممبرشپ کا ٹرائل دورانیہ ختم ہو جاتا ہے، تو سسٹم یہ کرتا ہے:

١. Бүрингет (pending) yenileme to'lovini butun obunani miqdori bilan yaratadi.
٢. A'zolning holatini `trialing` dan `on-hold` ga o'tkazadi.
٣. Mijozga yangi yillik to'lov haqida xabar (notification) elektron pochta yuboradi.

هذه فرآیند عادی تاریخ انقضاء با زمان‌بندی ساعتی یکسان با بررسی‌های معمول است، اما **فقط برای اعضایی که خودکار تمدید نمی‌شوند**. برای آزمون‌هایی که خودکار تمدید می‌شوند، درگاه پرداخت مسئول انتقال از دوره آزمایشی به اشتراک پولی خواهد بود.

## Блок Ön Yüzə Giriş

Bu hissədə, WordPress dükkanınızın (frontend) bloklara necə giriş etdiyini və onların necə görünəcəyini tushuntiraman. Bu, siz saytınızda nə nêr ne tür elementler ko'rsatmoqchi ekanligini belgilash uchun muhimdir.

**Bloklar Nima?**

WordPress dükkanida bloklar (Blocks) bu saytingizning asosiy qurilish quismidir. Ular matn, rasm, tugmalar, formalar kabi har qanday vizual elementni o'z ichiga oladi va siz ularni bir-biriga joylashtirib, dizayn qila olasiz.

**Frontend Access (Ön Yüzga Kirish)**

"Block Frontend Access" deganda, biz bloklarning foydalanuvchilar ko'rganlari uchun qanday sozlamalar mavjudligini tushuntiramiz. Ya'ni, siz yaratgan har bir blokning saytda qaysi joyda va qanday ko'rinishda paydo bo'lishini boshqarish haqida gapiraman.

**Bloklarni Sozlash (Configuring Blocks)**

Har bir blok uchun alohida sozlamalar mavjud bo'ladi. Bu yerda siz quyidagilarni belgilaysiz:

*   **Ko'rinishi:** Blok qanday ko'rinadi? Matnmi, rasmmi yoki boshqa narsa?
*   **Joylashuvi (Placement):** Siz bu blokni saytning qaysi joyiga qo'ymoqchisiz? Masalan, asosiy sahifada, mijozlar ro'yxatida yoki mahsulot kartochkasida.

Masalan, siz bir "Mahsulot Kartochkasi" blokini yaratganingizda, uning sozlamalarida qaysi ma'lumot (rasm, narx, tavsif) ko'rsatilishi belgilangan bo'ladi.

**Hooklar va Eventlar (Hooks and Events)**

Ba'zan siz biror blokning ishini boshqa kod bilan bog'lash kerak bo'ladi. Buni "hook" deb ataladi. Hooklar orqali, blok yuklangandan keyin yoki ma'lum bir hodisa sodir bo'lganda (masalan, mijoz savdoni yakunlanganda), siz o'zingizning maxsus kodlaringizni ishga tushirishingiz mumkin.

```php
// Checkout tugaganidan so'ng bajariladigan maxsus mantiq
add_action( 'woocommerce_after_purchase', 'my_custom_block_logic' );

function my_custom_block_logic() {
    // Bu yerda blok bilan bog'liq maxsus kod yoziladi.
    echo '<p>Sizning mahsulotingiz muvaffaqiyatli sotib olindi!</p>';
}
```

Bu misolda, `woocommerce_after_purchase` hooki ishga tushganda, biz o'zimizning funksiyamizni chaqiramiz. Bu siz bloklaringiz bilan murakkab interfeyslar yaratishingiz mumkinligini bildiradi.

**Xulosa**

Blok frontend access — bu siz saytingizdagi har bir vizual element (blok) qanday ishlashi va foydalanuvchiga qanday ko'rinishi haqida to'liq nazorat olishingizni ta'minlaydi. Bu orqali siz dizayndagi har bir kichik jihatni aniq belgilashingiz mumkin.

Default olarak, bir üyelik süresi dolduğunda veya askıya alındığında, sadece wp-admin paneli kısıtlanır. Sitenin herkese açık ön yüzü ziyaretçiler için erişilebilir kalır. Herkesin erişimini de engellemek isterseniz, **Block Frontend Access** ayarını etkinleştirmeniz gerekir.

### Ayarları Yapılandırma

**Ultimate Multisite > Settings > Memberships** (Ultimate Multisite > Ayarlar > Üyelikler) bölümüne gidin ve **Block Frontend Access** (Ön Yüz Erişmesini Engelle) seçeneğini etkinleştirin.

![Membership blok frontend erişim ayarları gösteren blok ön yüz erişim ayarları](/img/config/settings-membership-block-frontend.png)

İşte üyelik ayarlar sayfasının tam görünümü:

![Membership settings full page](/img/config/settings-membership-full.png)

هذه سلوكني üç (üç) ارتباطли تنظیمي (setting) بويش (control) eder:

| Setting | Tavsif | Varsayılan Değer |
|---|---|---|
| **Block Frontend Access** | Ana anahtar ayar. Bu açık olduğunda, ağ sitelerinin üyeliği artık aktif olmadığında halka açık ön yüzünü engeller. | Kapalı |

| **Frontend Block Grace Period** | Üyeliq faoliyatni durdurganandan sonra bloklamadan önce kutman (bekleme) gün sayısı. Hemen bloklamak için `0` olarak ayarlayın. | 0 |

| **Frontend Block Page** | Сайт bloklananda ziyaretçileri yönlendirmek için ana sitede bir sayfadır. Ayarlanmazsa, ziyaretçiler genel bir "Sitenin kullanılamadığı" mesajını görürler. | None |

### Bir Site Bloklandığında Ziyaretçilerin Gördükleri

Frontend erişimi engellense, saytdagi ziyaratchilar ya quyidagi holatlardan biriga duch kelishadi:

١. **Frontend Block Page** دا تكئن تالغان سәхәсге йортма (агар дайрылган болса), вакь:
٢. **Башкы хабарламаны көрә:** "Бу сайт азыр бу вакытта бар" дип, администратор сайтыга китүчеге бағыланリンク (link) белән.

سایت yöneticileri hala giriş yapabilirler -- giriş sayfası asla engellenmez.

### Ne Engellenir ve Ne Zaman?

Engelleme davranışı üyelik durumuna bağlıdır:

| Üyelik Durumu | Ön Yüz Engellendi mi? | Lütuf Süresi Uygulandı mı? |
|---|---|---|
| Aktif | Hayır | -- |
| Deneme Aşamasında | **Hayır** (aşağıdaki notlara bakın) | -- |
| Beklemede | aktif olarak kabul ediliyor -- engellenmiyor | -- |

| Expired | **Ҳа**, агар "Block Frontend Access" включен болса | Ҳа |
| Cancelled | **Ҳа**, ҳар доим (созномалардан қатъий манъ) | **Йўқ** -- дарҳол блокланган |
| Pending | Учунлик текшируви орқали блокланмайди | -- |

:::warning試用 üyeler bloklanmaz
試用 süresi bitmiş olsa bile, `trialing` durumu olan bir üyelik ön yüzde **bloklanmayacaktır**. Deneme süresinin önce başka bir duruma (genellikle cron job aracılığıyla `on-hold` durumuna, sonra ödenmezse `expired` durumuna) geçmesi gerekir. Eğer geçiş yapmamış trialing üyeler görüyorsanız, lütfen aşağıdaki sorun giderme bölümünü kontrol edin.

# Ultimate Multisite İçin WordPress Dokümantasyonu

Bu doküman, Ultimate Multisite ile ilgili tüm bilgileri içerir. Bu rehber sayesinde sitenizi kurmak ve yönetmek çok kolay olacak.

## Kurulum

Sitenizi kurmaya başlamak için şu adımları takip edin:

1. **WordPress Kurulumu:** Öncelikle bir web hosting hizmeti almanız ve WordPress'i sunucunuza kurmanız gerekiyor.
2. **Ultimate Multisite Eklentisini Yükleme:** WordPress kontrol panelinize giriş yaptıktan sonra, eklentiler bölümünden Ultimate Multisite eklentisini indirip yükleyin.
3. **Ayarları Yapılandırma:** Kurulum tamamlandıktan sonra, eklentinin ayarlar menüsüne giderek istediğiniz site yapılandırmalarını yapın (örneğin, alt sitelerinin nasıl oluşturulacağı gibi).

## Temel Kavramlar

Bu dokümanda sıkça karşılaşacağınız bazı terimleri açıklayalım:

* **Multisite:** Tek bir ana yönetim altında birden fazla web sitesi çalıştırma sistemidir. Bu sayede tüm sitelerin ortak ayarlarını tek yerden yönetebilirsiniz.
* **Site (Site):** Multisite yapısı içinde oluşturduğunuz her bir bağımsız web sitesini ifade eder. Her sitenin kendine ait içeriği, teması ve ayarları olabilir.
* **Eklenti (Plugin):** WordPress'e yeni özellikler eklemek veya mevcut işlevleri değiştirmek için kullandığınız yazılımdır. Ultimate Multisite eklentisi bu yapıyı yönetmenizi sağlar.
* **Dashboard:** WordPress yönetim panelidir. Tüm sitenizin ayarlarını, içeriklerini ve kullanıcılarını buradan görebilirsiniz.

## Site Yönetimi

Sitenizi kurduktan sonra günlük yönetim işlemlerini nasıl yapacağınızı öğrenelim:

### Yeni Site Ekleme

Yeni bir alt site eklemek çok basit bir işlemdür:

1. WordPress kontrol panelinde, ilgili menüye gidin (genellikle "Network" veya "Sites" altında bulunur).
2. "Add New Site" (Yeni Site Ekle) seçeneğine tıklayın.
3. Yeni sitenizin adını ve gerekli ayarları girin.
4. Ayarları kaydedip yeni siteyi aktif hale getirin.

### Tema Yönetimi

Her sitenin kendine özgü bir görünümü olmalıdır:

* **Tema Seçimi:** Her site için ayrı bir tema seçebilirsiniz. Bu, her sitenin tasarımının birbirinden farklı olmasını sağlar.
* **Özelleştirme:** Temaları kullanarak sitenizin renklerini, yazı tiplerini ve düzenini kolayca değiştirebilirsiniz.

## Gelişmiş Özellikler

Ultimate Multisite'ın sunduğu bazı gelişmiş özellikleri:

### Kullanıcı Yönetimi

Tüm ağınızdaki kullanıcıları tek bir yerden yönetebilirsiniz. Bu sayede kimin hangi siteye erişebileceğini kontrol etmek çok pratik olur.

* **Kullanıcı Ekleme/Silme:** Yeni kullanıcılar oluşturabilir veya mevcut kullanıcıları silebilirsiniz.
* **Rol Tanımlama:** Kullanıcılara farklı yetkiler (örneğin, yönetici, editör) atayarak site içi erişimi sıkı bir şekilde kontrol edebilirsiniz.

### Veritabanı Yönetimi

Tüm sitelerin verileri tek bir yerde toplanır. Bu, yedekleme ve bakım işlemlerini çok kolaylaştırır. MySQL veritabanı yapısı sayesinde tüm ağınızın verilerini güvenle tutabilirsiniz.

## Teknik İpuçler

Teknik konulara biraz değinelim:

* **Hook Kullanımı:** WordPress'te belirli bir olaydan (event) önce veya sonra kod çalıştırmak istediğinizde "hook" kullanırsınız. Ultimate Multisite, bu hook'ları kullanarak sitenizin farklı yerlerinde özel işlevler eklemenize olanak tanır.
    ```php
    // Checkout tamamlandığında özel mantık
    add_action( 'woocommerce_thankyou', 'my_custom_checkout_logic' );

    function my_custom_checkout_logic() {
        // Buraya ödeme sonrası yapılacak özel kodlar yazılır
        echo '<p>Teşekkürler! Siparişiniz başarıyla alındı.</p>';
    }
    ```
* **PHP ve MySQL:** WordPress, PHP ile çalışır ve verileri MySQL veritabanında saklar. Bu iki teknolojiyi iyi bilmek, sitenizin performansını artırmak için önemlidir.

Bu dokümanda yer alan tüm bilgileri kullanarak Ultimate Multisite'ı en iyi şekilde kullanabilirsiniz. Başarılar dilerim!

:::note إشتراك سلب (Cancelled memberships) گرايس پیریودنی (grace period) رو دایم دور می‌کنه. هر وقت تاریخ انقضا از گذشته، اشتراک شما مسدود میشه، حتی اگه Block Frontend Access فعال باشه هم همینطور. این موضوع در مورد Block Frontend Access یا Grace Period برای اشتراک‌های لغو شده اعمال نمیشه.

## Sorun Giderme: Üyelik Süresi Dolduktan Sonra Sitelerin Erişilebilir Kalması

Bir üyelik süresi dolduktan sonra sitelerin hala herkese açık kalması durumunda, lütfen bu kontrolleri sırayla yapın:

### 1. Blok Ön Yüz Erişim Ayarının Etkin Olduğunu Kontrol Edin

**Ultimate Multisite > Settings > Memberships** بوйтиڭ، **Block Frontend Access** (Ön uçga kirishni bloklash) düğmeni açıq ekenligini tasdiqlayın. Bu sozlama **default olarak kapalıdır**, bu deməkdirki, bir üyelik faaliyetsizleşse, faqat wp-admin qadağandır.

### ٢. フロントエンド بلوкиnin گشط قيد (Grace Period)

هنا، biz sizden frontend bloklar üçin berilen gusht qidimini (grace period) tekshirip bering. Bu, bir narsa quralar bo'yicha qancha vaqt ichida ishlay olishi kerakligini ko'rsatadi.

Aynı ayarlarda **Frontend Block Grace Period** değerini kontrol edin. Eğer bu değer örneğin 7 gün olarak ayarlanmışsa, üyelik durumu zaten `expired` (süresi dolmuş) olsa bile, ön yüz (frontend) üyeliğin sona ermesinden 7 gün sonra kilitlenmeyecektir.

Üyeliğin faaliyetsiz hale gelmesinden sonra derhal engelleme yapmak istiyorsanız bunu `0` olarak ayarlayın.

### 3. Üyelik Durumunun Gerçekten Değiştiğini Onaylayın

**Ultimate Multisite > Memberships** بويشين (memberships) bölümüne gidin ve etkilenen üyelik durumunu kontrol edin. Eğer son kullanma tarihi geçmiş olmasına rağmen hala `active` (aktif) olarak görünüyorsa, durum geçişi gerçekleşmemiş demektir. Yaygın nedenler şunlardır:

**Üyeliğin avtomatik yenilenmesi**: Üye düzenleme sayfasındaki `auto_renew` alanını kontrol edin. Eğer avtomatik yenileme açıksa, son kullanma zamanı cron bu üyeyi atlar -- o, ödeme ağ geçidinin (payment gateway) başarısızlığı bildirmesine güvenir. Abonelik durumunun Ultimate Multisite'ta gösterilenle eşleşip eşleşmediğini kontrol etmek için ağ geçidi panelinizi (Stripe, PayPal) kontrol edin.

*Cron işi çalışmadı*: Keyingi qadamga bakın.

### 4. Action Scheduler'ın Çalışıp Çalışmadığını Kontrol Edin

Ultimate Multisite, cron işleri için Action Scheduler'ı kullanır. Network admin panelinde **Tools > Scheduled Actions** (Alətlər > Quraşdırılmış Hərəkətlər) bölümüne gidin və aşağıdakileri arayın:

**`wu_membership_check`** -- Бул бул ҳар саатда ишланадиган такрорланиб бажариладиган ҳаракат сифатида кўринади. Агар у бўлмаса, аъзолик текширувлари режалаштирилмагандир.

**`wu_async_mark_membership_as_expired`** -- Bunlar belgilangan üyelikləri sonlanmış (expired) olarak işaretlemek için ayrı görevlerdir. Burada başarısız işlemler görürseniz, bu mesajların neden hata verdiğini açıklayan hata mesajları içerebilir.

Əgər sizda qaldırılmış və ya başarısız olan əməliyyatlar görürsünüzsə, bu bir Action Scheduler problemi ola bilər. Ümumi səbəbləri bunlardır:

**`DISABLE_WP_CRON`** `true` olarak `wp-config.php` dosyasında ayarlanmış ve sistem düzeyinde bir cron alternatifi (replacement) kurulmamış durumda.
**Düşük site trafiği** -- WP-Cron sadece biri siteye geldiğinde çalışır.

Güvenilir cron çalıştırmasını sağlamak için bir sistem cron işi kurun:

```bash
# Her 5 dakikada bir wget orqali ishga tushirish uchun
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Yoki WP-CLI orqali
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Gateway Webhook Sorunlarını Kontrol Edin (Otomatik Yenilenen Üyelikler İçin)

Eğer üyelik otomatik yenileniyorsa ve gateway aboneliği iptal edilmiş veya başarısız olmuş olmasına rağmen Ultimate Multisite hala onu `aktif` olarak gösteriyorsa:

**Stripe**: Stripe Dashboard'a kiring > Customers (Müştərilər) bölümüne gidin we abunəlik holatını tek taseh edin. Sonra Developers (İnternet Geliştiriciləri) > Webhooks (Webhooklar) altında webhook son noktasının faaliyatedikligini yoxlayın. Bu endpoint sizin saytingize işarət etmeli we uğurlu çatdırılmaları göstermeli.

**PayPal**: Шахسار (subscription) holatingizni PayPal biznes hisobingizden tekkinlang va IPN/webhook yetibarligini tekkinlayin.

Əgər gateway (ödeme portalı) abunəni ləğv edilmiş kimi göstirsin, amma Ultimate Multisite bunu gösterməsə, bu deməkdir ki, webhook bildirişi itilmiş. Siz membership statusunu **Ultimate Multisite > Memberships > [Edit Membership]** yolundan əl ilə dəyişə bilərsiniz.

### ٦. ToExpire Etkisi Boşluk Zamanını Tekrarlaylik Seviyesinde Kontrol Edin

Bu kısımda, bir şeyin ne zaman sona ereceğini kontrol etmek için Cron seviyesindeki boşluk zamanı ayarlarını nasıl kullanacağınızı anlatacağım. Bu, özellikle belirli görevlerin veya işlemlerin ne kadar süreyle aktif kalması gerektiğini ayarlamak için önemlidir.

Cron tekshisi uchun o'zining osonlik davri (standart: 3 kun) mavjud, bu esa a'zolikni muddati tugagan deb belgilashdan oldin sodir bo'ladi. Bu frontend blokning osonlik davriga ajratilgan va alohida hisoblanadi. Sayt bloklanishga yetadigan umumiy vaqt quyidagicha bo'lishi mumkin:

**和قايي قيد (٣ گون) + فرونت إند بلاك وقيي قيد (شاخ تۇي링ىڭىزدىكى sozlamانڭىز) = ئوموملىدۇ قيد**

### ٧. Уضویتलाई يادانويس (Manually Expire a Membership)

مثال: ئاساس sozlamalar ва ٧ günlük "frontend grace period" bilen, `date_expiration`дан سونرا ve sayt haqiqatdan bloklanmasdan oldin ١٠ گونگча چيکساك بولishi mumkin.

Siteyi cron döngüsünü beklemeden hemen bloke etmek isterseniz, üyelik durumunu manuel olarak değiştirebilirsiniz:

١. **Ultimate Multisite > Memberships** بوйтиڭ.
٢. تأثيرlenen üyeleşme (membership) üzerine tıklayın.
٣. durumunu **Expired** (Süresi Dolmuş) veya **Cancelled** (İptal Edilmiş) olarak değiştirin.
٤. **Save** (Kaydet) butonuna basın.

Frontend blokı (frontend block) keyingi sayfa yüklenmesinden itibaren etki eder (süresi dolmuş üyelikler için Frontend Block Süre Sonu süresine tabi olur, iptal edilmiş üyelikler için ise hemen geçerli olur).

## Özet

Sürenin bitiş tarihinden site engellenmesine kadar olan tam zaman çizelgesi:

تاریخ انقضا (date_expiration) بگذرد
       |
       v
  [۳ روز کرون مهلت] <-- عضویت هنوز فعال/معلق نمایش داده می‌شود
       |
       v
  کرون وضعیت عضویت را "منقضی شده" علامت‌گذاری می‌کند
       |
       v
  [بلاک مهلت فرانت‌اند] <-- در تنظیمات > Memberships پیکربندی شده است
       |
       v
  صفحه اصلی سایت مسدود می‌شود

إلغیلغان üyeçliklar üçin yo'l qisqaro:

```text
  Membership cancelled
       |
       v
  date_expiration passes (no grace period)
       |
       v
  Site frontend is blocked immediately
```

## Developer Reference

Ах, бу hooklar ва filterlar сизга муддатни чеклаш ва блоклаш ҳақида ўзгартириш имконияти беради:

| Hook/Filter | Tavsif |
|---|---|
| `wu_membership_grace_period_days` | Üyeliği sona ermiş olarak işleme almadan önce kerahat süresini (grace period) gün sayını filtrləyin (default: 3) |

| `wu_schedule_membership_check_interval` | Üyeliğin tekabirini kontrol etme aralığını filtreler (varsayılan: 1 saat) |
| `wu_membership_renewal_days_before_expiring` | Yenileme ödemesi oluşturulmadan önce kaç gün kala yenileme yapacağını filtreler (varsayılan: 3) |

| `wu_blocked_site_reactivation_url` | Sayt bloklanmasi durumunda o'zgartirilgan qayta faollashtirish URL-ini berish uchun filtrlash |
| `wu_membership_is_active` | A'zo bo'lishning faol ekanligini tekshirish uchun filtrlash |

| `wu_membership_expired_check_query_params` | ��� membership'ler sona ermişlikni tapqan sorğu parametrlari (filter) |
| `wu_membership_trial_check_query_params` | ��� trial'ler sona ermişlikni tapqan sorğu parametrlari (filter) |
