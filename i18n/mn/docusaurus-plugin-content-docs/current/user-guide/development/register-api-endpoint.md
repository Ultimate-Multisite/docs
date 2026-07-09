---
title: API endpoint-ийг бүртгэх
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API endpoint {#the-ultimate-multisite-register-api-endpoint}

Энэхүү тусламжтай материалд та Ultimate Multisite /register API endpoint-ийг ашиглан өөрийн сүлжээнд шинэ хэрэглэгч бүрт оруулах бүх анхан шатны үйл явцыг яаж хийхийг, мөн Zapier-ээр хэрхэн хийхийг сурч үзэх болно.

Энэ endpoint нь POST (POST) аргыг ашигладаг бөгөөд URL `_**https://yoursite.com/wp-json/wu/v2/register**_` -ээр дуудагддаг. Энэ дохиог таны сүлжээнд 4 үйл явц гүйцэтгэнэ:

  * Шинэ WordPress хэрэглэгч эсвэл хэрэглэгчийн ID-ээр түүнийг тодорхойлох замаар шинээр үүсгэнэ.

  * Ultimate Multisite-д шинэ Хэрэглэгч эсвэл хэрэглэгчийн ID-ээр түүнийг тодорхойлох замаар шинээр үүсгэнэ.

  * WordPress сүлжээнд шинэ сайт үүсгэнэ.

  * Эцэст нь, Ultimate Multisite-д шинэ Гишүүнчлэл (Membership) үүсгэнэ.

Энэхүү үйл явцад таны API credentials хэрэгтэй болно. Үүнийг авахын тулд таны сүлжээний администратор панельд орж, **Ultimate Multisite > Settings** > **API & Webhooks** руу очиж, API Settings хэсгийг хайвал олж авна уу.

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

API settings хуудсан бүр дэлгэрэнгүй үзүүлэлт:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** (API-г идэвхжүүлэх) -ийг сонгоод таны API credentials-ийг авна уу.

Одоо бид endpoint-ийг үзэж, дараа нь Zapier-д бүртгэл хийх үйлдлийг үүсгэе.

## Endpoint body parameters {#endpoint-body-parameters}

Endpoint руу илгээх шаардлагатай хамгийн бага мэдээллийн талаар ерөнхийдөө харъя. Энэ нийтлэл дууссаны дараа бид бүрэн дохиог үзэх болно.

### Customer {#customer}

Энэ нь Хэрэглэгч болон Ultimate Multisite-ийн Хэрэглэгчийг үүсгэх үйл явцад шаардлагатай мэдээлэл юм:

"customer_id" : integer

Танай сүлжээнд үүсгэсэн хэрэглэгчийн ID-г илгээх боломжтой. Хэрэв илгээхгүй бол доорх мэдээллийг ашиглан шинэ хэрэглэгч болон шинэ WordPress хэрэглэгчийг үүсгэнэ. Хэрэглэгчийн ID-г мөн ижил аргаар илгээж болно.

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Гишүүнчлэл (Membership)** {#membership}

Бидэнд энэ объект дотор зөвхөн Гишүүнчлэлийн Статус хэрэгтэй.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" - эдгээрээс аль нэгийг сонгоно }

### **Бараа (Products)** {#products}

Бараануудад танай сүлжээний 1 ба түүнээс дээш бүтээгдэхүүний ID-ийн массив өгөгдөнө. Анхаарна уу, энэ endpoint нь бараа үүсгэхгүй. Бараа үүсгэх endpoint-ийг Ultimate Multisite-ын documentation-ыг үзээд илүү сайн ойлгоорой.

**"products" : [1,2],**

### **Төлбөр (Payment)** {#payment}

Гишүүнчлэлийн шиг бидэнд зөвхөн статус хэрэгтэй.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" - эдгээрээс аль нэгийг сонгоно }**

### **Вэбсайт (Site)** {#site}

Мөн доторх Site объектод вэбсайтын URL болон Нэр (Title)-ийг дуусгахын тулд хэрэгтэй.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Register endpoint-ээс буцаагдах үр дүн нь шинээр үүссэн гишүүнчлэлийн мэдээллийн массив байх болно.

## Zapier-д үйлдлийг (action) үүсгэх {#creating-an-action-in-zapier}

Шинэ бөгөөд илүү хүчирхэг бүртгэл хийх endpoint-ийн нэвтрэлтээр та Zapier-д шинэ action-ыг ашиглаж эхлэх боломжтой болно.

Zapier-ийн шинэ хувилбараар юу хийж, яаж ашиглах талаар мэдэх үү? Үүнийг энд уншиж үзээрэй. (link?)

### Үйлдлийг үүсгэх {#creating-an-action}

Zapier-тэй registration endpoint-и хэрхэн ашиглахыг илүү сайн ойлгоход зориулж, бид Google Forms-той integration хийе. Энэ формоор мэдээлэл оруулахаа бүртэл, тухайн мэдээллийг form-ын хариулын хуудас (answer sheet)-т хадгаснаар Ultimate Multisite сүлжээнд шинэ гишүүнээр нэвтрэх үйл явц хийгдэнэ.

Google Forms-д сүлжээнд шинэ гишүүн үүсгэхэд шаардлагатай хамгийн бага талбаруудтай form үүсгээрэй.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Одоо Zapier-д шинэ Zap үүсгээд, өгөгдөл хадгалагдаж буй spreadsheet-тэй Google-ийн form-ыг холбоорой.

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

Бүх зүйл дууссан! Google Forms form нь Zapier-тэй холбогдсон бөгөөд сүлжээнд integration хийхэд бэлэн боллоо. Одоо Google Forms бүртэй холбогдох үйлдэл (Action)-т шилжих хэрэгтэй, энэ нь Google Forms-ийн бүртэл мэдээлэл оруулахаа бүрт гүйцэтгэгддэг Trigger-ээс үүснэ.

Ultimate Multisite app-ыг олж сонгоорой. Энэ төрлийн Zap-д Register (Бүртгүүлэх) оптийг сонгоно.

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

Энэ анхны алхам хийсний дараа, энэ Zap-тай холбогдох хаягийг сонгоорой.<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

Энэ бол бүх процессын хамгийн чухал хэсэг юм. Бид Google Forms-аас ирсэн талбаруудыг энэ нийт зүйлийн өмнөх хэсэгт харагдсан register endpoint-ийн шаардлагатай хамгийн бага талбаруудтай нь тохируулах ёстой.

Энэ жишээнд бид зөвхөн username (хэрэглэгчийн нэр), email, password (нууц үг), name (нэр) болон website-ийн URL-ийг тохируулах хэрэгтэй. Үлдсэн бүх зүйл нь өмнөх нийтлэлд харагдсан шиг урьдчилан тогтоосон бөгөөд энэ Google Forms-аар үүсгэгдсэн бүх гишүүдийн хувьд ижил төстэй продукт болон статусын загварыг дагах болно.

<!-- Скриншот недоступен: Сопоставление полей Zapier между Google Forms и конечной точкой регистрации Ultimate Multisite -->

Когда информация настроена, переходите к финальному тесту. На последнем экране вы увидите все поля, которые будут отправлены в конечную точку, их соответствующую информацию и поля, которые будут отправлены пустыми.<!-- Скриншот недоступен: Экран теста Zapier, показывающий все поля для отправки в конечную точку регистрации -->

Протестируйте свой новый Zap, и он должен завершиться успешно. Если произойдет какая-либо ошибка, проверьте все поля и убедитесь, что они отправляются правильно. Поскольку информации много, некоторые вещи могут незаметить.

### Полные параметры конечной точки {#complete-endpoint-parameters}

Вот полный вызов и все возможности полей, которые могут быть отправлены.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // одно из "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // одно из "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
