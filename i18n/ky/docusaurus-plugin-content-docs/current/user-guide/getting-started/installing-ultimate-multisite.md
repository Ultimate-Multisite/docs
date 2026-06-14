---
title: Ultimate Multisite орноо
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite'ı Kurma

:::note
Bu eğitim, WordPress Multisite'ın zaten kurulu ve yapılandırılmış olduğunu varsayar. Nasıl yapacağınızı öğrenmek için WP Beginner'ın [bu eğitimi](https://www.wpbeginner.com/glossary/multisite/) inceleyebilirsiniz.
:::

## Eklentiyi Kurma

Ultimate Multisite ücretsiz olarak [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) adresinde mevcuttur.

**Network Admin Dashboard**'unuzdan **Plugins → Add New Plugin** (Eklentiler → Yeni Eklenti Ekle) bölümüne gidin.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** diye aratın (tam eşleşme için tırnak işaretlerini kullanın), ilk sonuç olarak görünecektir. **Install Now** (Şimdi Kur) butonuna tıklayın.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

Kurulumdan sonra, tüm ağınızda eklentiyi etkinleştirmek için **Network Activate** (Ağı Etkinleştir) butonuna tıklayın.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

Etkinleştirmeden sonra, otomatik olarak Kurulum Sihirbazına yönlendirileceksiniz.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Kurulum Sihirbazı

Kurulum Sihirbazı Ultimate Multisite'ı yaklaşık 10 dakikada yapılandırmanız için size rehberlik edecektir.

### Hoş Geldiniz

Başlamak için **Get Started** (Başlayın) butonuna tıklayın.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Kurulum Öncesi Kontroller

Bu adım, sistem bilgilerinizi ve WordPress kurulumunuzu kontrol ederek Ultimate Multisite'ın gereksinimlerini karşıladığından emin olur. Her şeyin iyi göründüğünü düşünüyorsanız, **Go to the Next Step** (Bir Sonraki Adıma Geç) butonuna tıklayın.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate düğmeni (v2.6.1+)
Eğer Ultimate Multisite орнотулдуңуңуз орнотулса, бирок **азыркы учурда орнотулган болсо** — мисалы, орнотулгон плагиндердин экранынан **Network Activate** (орнотулгон сетка үчүн) эмес, **Activate** (бир сайт үчүн) баскып калтырган болсо — Pre-install Checks кадамы бул абалды аныктап, сизге **Network Activate** dü음үнү көрсөтөт.

**Network Activate**-га басуу плагиндерди сиздин бүтүндөй мультисайт сеткаңызга автоматтык түрдө иштетүү үчүн активдештирет. Активдештирилгенден кийин, wizards (жанагы программа) орнотуу кадамына кадимки ыраазычылык менен улантат. Активдештирүү абалын оңдоо үчүн wizardsдан чыгууңуз керек эмес.
:::

### Орнотуу

Инсталлятор зарыл болгон базалык таблицаларды түзөт жана Ultimate Multisite-тын иштөө үчүн керектүү `sunrise.php` файлына орнотат. Улантуу үчүн **Install**-га басыңыз.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Сиздин Компанияңыз

Компанияңыздын маалыматтарын толтуруп, дефолдук валютяңызды белгилеңиз. Бул маалымат WaaS платформаңызда бүтүндөй колдонулат. Аяктагандан кийин **Continue**-га басыңыз.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Дефолдук Мазмун

Бул кадамы сизге атайын жасалган шаблондорду, продукттарды жана башка баштапкы мазмунду орнотууга мүмкүндүк берет. Бул Ultimate Multisite'тын функциялары менен таанышуунун мыкты жолу. Дефолдук мазмунду кошуу үчүн **Install**-га басыңыз, же эгер сиз баштаннан жаңыдан баштоону кааласаңыз, бул кадамы өткөрүп жибере аласыз.

![Default content installation step](/img/installation/wizard-default-content.png)

### Сунушталган Плагиндер

Сунушталган келеттин плагиндерди опционалдуу орнотуңуз. Аларды кошуу үчүн **Install**-га басыңыз же улантуу үчүн өткөрүп жибере аласыз.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Даяр!

Сонун! Сиздин Ultimate Multisite орносоңуз аяктады. Эми **Network Admin Dashboard** аркылуу Веб-сайтты Сервис платформасы катары курууну баштасаңыз болот.

![Орнотуу аяктады - Даяр экран](/img/installation/wizard-ready.png)

![Ultimate Multisite активдүү Network Admin Dashboard](/img/installation/network-dashboard.png)

Эми ойноп көрүңүз!
