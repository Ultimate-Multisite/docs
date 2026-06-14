---
title: Ultimate Multisite-ийг суулгах
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite суулгах

:::note
Энэ зааврыг ашиглахын тулд та WordPress Multisite суурьсан бөгөөд тохируулсан байх ёстой гэж үзэж байна. Хэрхэн хийхийг мэдэхийг хүсвэл WP Beginner-ийн [энэ зааврыг](https://www.wpbeginner.com/glossary/multisite/) үзээрэй.
:::

## Плагины суулгах

Ultimate Multisite нь [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) дээр үнэгүй байгаа.

Таны **Network Admin Dashboard**-д орж, **Plugins → Add New Plugin** руу очино.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** гэж хайхад (нарийвчлалтай тохирохын тулд дуугүйг ашиглана уу), хамгийн эхний үр дүнд гарна. **Install Now**-д дарна.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Суулгасны дараа, бүх сүлжээнд плагиныг идэвхжүүлэхийн тулд **Network Activate**-д дарна.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Идэвхжүүлсний дараа та автомат хэлбэрээр Setup Wizard руу чиглэгдэнэ.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard (Тохируулгын үйл явц)

Setup Wizard нь Ultimate Multisite-ийг ойролцоогоор 10 минутад тохируулах туслах болно.

### Тавтай морил

Эхлэхийн тулд **Get Started**-д дарна уу.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Суулгах өмнөх шалгалт

Энэ алхам нь таны систем мэдээлэл болон WordPress суулгалыг Ultimate Multisite-ийн шаардлагыг хангаж байгаа эсэхийг шалгана. Бүх зүйл сайн харагдаж байвал **Go to the Next Step** руу очдог.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate товч (v2.6.1+)
Хэрэв Ultimate Multisite суулгагдсан боловч **хагалсан биш** бол — жишээлбэл, сүлжээний плагины дэлгэцээс **Network Activate**-ыг бус, харин (single-site) **Activate**-ыг дарсан бол — Pre-install Checks алхам нь үүнийг илрүүлж, танд **Network Activate** товчийг харуулна.

**Network Activate**-ыг дарах нь плагиныг таны бүх multisite сүлжээнд автоматаар идэвхжүүлнэ. Идэвхжсэн дараа wizard нь суулгах алхам руу ердийн хэлбэрээр үргэлжилнэ. Идэвхжилтийн төлөвийг засахын тулд та wizard-ээ гарах шаардлагагүй.
:::

### Суулгалт (Installation)

Installer нь Ultimate Multisite ажиллахад шаардлагатай database tables болон `sunrise.php` файлыг үүсгэж суулгана. Үргэлжлүүлэхийн тулд **Install**-ыг дарна уу.

![Суулгалт алхам дээрх database tables ба sunrise.php файл](/img/installation/wizard-installation.png)

### Таны компани (Your Company)

Таны компанийн мэдээллийг оруулж, анхны валютыг тохируулна уу. Энэ мэдээллийг таны WaaS платформын туршид ашиглана. Гүйцэтгэсэн бол **Continue**-ыг дарна уу.

![Таны компанийн тохиргооны алхам](/img/installation/wizard-your-company.png)

### Анхны контент (Default Content)

Энэ алхам нь танд өмнө нь тодорхойлогдсон template, бүтээгдэхүүн болон бусад эхлэл дахь контентыг суулгах боломжийг олгоно. Энэ бол Ultimate Multisite-ийн онцлогийг тань таних хамгийн сайн арга юм. Анхны контент нэмэхийн тулд **Install**-ыг дарна, эсвэл бүрэн шинээр эхлэхийг хүсвэл энэ алхамд алгасаа болно.

![Анхны контенты суулгах алхам](/img/installation/wizard-default-content.png)

### Зөвлөмжтэй плагинууд (Recommended Plugins)

Хэрэв шаардлагатай бол зөвлөмжтэй хамтрагч плагинуудыг суулгана уу. Нэмэхээр **Install**-ыг дарна, эсвэл үргэлжлүүлэхийн тулд алгасаа болно.

![Зөвлөмжтэй плагинууд алхам](/img/installation/wizard-recommended-plugins.png)

### Бэлэн байна! (Ready!)

Энэ бол бүх зүйл дууссан! Таны Ultimate Multisite суулгалт дууссан. Одоо **Network Admin Dashboard**-аса таны Вэбсайт ашиглалтад бэлэн платформыг барьж эхлэх боломжтой.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Одоо таашаа тоглож үзээрэй!
