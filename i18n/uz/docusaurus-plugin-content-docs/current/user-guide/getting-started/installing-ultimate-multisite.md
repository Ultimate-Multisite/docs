---
title: Ultimate Multisite o'rnatish
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite'ı Kurma

:::note
Bu eğitim, WordPress Multisite'ın zaten kurulu ve yapılandırılmış olduğunu varsayar. Nasıl yapacağınızı öğrenmek için WP Beginner'ın [bu eğitimi](https://www.wpbeginner.com/glossary/multisite/) inceleyebilirsiniz.
:::

## Eklentiyi Kurma

Ultimate Multisite ücretsiz olarak [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) adresinde mevcuttur.

**Network Admin Dashboard**'unuzdan, **Plugins → Add New Plugin** (Eklentiler → Yeni Eklenti Ekle) yolunu izleyin.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

Arama çubuğuna **"Ultimate Multisite"** yazın (tam eşleşme için tırnak işaretleri kullanın), ilk sonuç olarak görünecektir. **Install Now** (Şimdi Kur) butonuna tıklayın.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Kurulum tamamlandıktan sonra, tüm ağınızda eklentiyi etkinleştirmek için **Network Activate** (Ağı Etkinleştir) butonuna tıklayın.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Etkinleştirmeden sonra, otomatik olarak Kurulum Sihirbazına yönlendirileceksiniz.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Kurulum Sihirbazı

Kurulum Sihirbazı, Ultimate Multisite'ı yaklaşık 10 dakikada yapılandırmanız için size rehberlik edecektir.

### Hoş Geldiniz

Başlamak için **Get Started** (Başlayın) butonuna tıklayın.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Kurulum Öncesi Kontroller

Bu adım, sistem bilgilerinizi ve WordPress kurulumunuzu kontrol ederek Ultimate Multisite'ın gereksinimlerini karşıladığından emin olur. Her şey yolundaysa, **Go to the Next Step** (Sonraki Adıma Geç) butonuna tıklayın.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Tarmoqni faollashtirish tugmasi (v2.6.1+)
Agar Ultimate Multisite o'rnatilgan bo'lsa, lekin **hali tarmoqga faollashtirilmagan** bo'lsa — masalan, tarmoq pluginlari ekranidan **Network Activate** o'rniga **Activate** (single-site) tugmasini bosgan bo'lsangiz — Pre-install Checks qadamida bu holatni aniqlab, sizga **Network Activate** tugmasi ko'rsatiladi.

**Network Activate** tugmasini bosish pluginni butun multisite tarmoq bo'ylab avtomatik faollashtiradi. Faollashtirilgandan so'ng, wizard normal ravishda o'rnatish qadamiga davom etadi. Faollashtirish holatini tuzish uchun siz wizarddan chiqishingiz shart emas.
:::

### O'rnatish

Installer kerakli ma'lumotlar bazasi jadvallarini yaratadi va Ultimate Multisite funksiyani bajarishi uchun zarur bo'lgan `sunrise.php` faylini o'rnatadi. Davom etish uchun **Install** tugmasini bosing.

![O'rnatish qadami ma'lumotlar bazasi jadvallari va sunrise.php ko'rsatilgan](/img/installation/wizard-installation.png)

### Sizning kompaniyangiz

Kompaniya ma'lumotlaringizni to'ldiring va default valyutani belgilang. Bu ma'lumotlar WaaS platformangiz davomida ishlatiladi. Barcha narsal tugagach **Continue** tugmasini bosing.

![Sizning kompaniyangiz konfiguratsiya qadami](/img/installation/wizard-your-company.png)

### Default kontent

Bu qadamda siz tayyorlangan shablonlarni, mahsulotlarni va boshqa boshlovchi kontentni o'rnatishingiz mumkin. Bu Ultimate Multisite xususiyatlari bilan tanishishning ajoyib yo'li. Default kontentni qo'shish uchun **Install** tugmasini bosing yoki boshidan boshlashni afzal ko'rsangiz bu qadamdan o'ting.

![Default kontent o'rnatish qadami](/img/installation/wizard-default-content.png)

### Tavsiya etilgan pluginlar

Tavsiya etilgan qo'shimcha pluginlarni ixtiyoriy o'rnating. Ularni qo'shish uchun **Install** tugmasini bosing yoki davom etish uchun tashlang.

![Tavsiya etilgan pluginlar qadami](/img/installation/wizard-recommended-plugins.png)

### Tayyormiz!

Endi barcha narsa tayyor! Sizning Ultimate Multisite o'rnatishingiz yakunlandi. Endi **Network Admin Dashboard** orqali veb-saytingizni "as a Service" (Xizmat sifatida) qurishni boshlashingiz mumkin.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

Endi zavqlanishga tayyormisiz!
