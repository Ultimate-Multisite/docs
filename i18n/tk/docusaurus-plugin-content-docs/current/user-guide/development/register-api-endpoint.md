---
title: API Uçun Düşdürme
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# The Ultimate Multisite Register API endpoint

Bu tutorialda siz Ultimate Multisite /register API endpointini ulanyp, şeýle bir täze müşderini siziň ulgamanyz üçin doly giriş prosesini nireden başlatyp biljekdigi we ony Zapier bilen nädip amala aşyryp biljekdigini öwrenip geçersiňiz.

Bu endpoint POST metodundan sagatlanýar we URL-de _**https://yoursite.com/wp-json/wu/v2/register**_ diýlip atlandyrylýar. Bu çağırmakda ulgamanyz içinde 4 proses amala aşyrylýar:

  * Täze WordPress ulanyjysy döredilýär ýa-da onuň ulanyjys ID arkaly tanalmagy bilen täze ulanyjy döredilýär.

  * Ultimate Multisite üçin täze Müşderi döredilýär ýa-da onuň müşderi ID arkaly tanalmagy bilen täze müşderi döredilýär.

  * WordPress ulgamaýnda täze site döredilýär.

  * Soňky netije hasyl etmegi üçin Ultimate Multisite üçin täze Üylyk (Membership) döredilýär.

Bu proses üçin size API belgileri (credentials) gerek bolar. Olaryny almak üçin, ağ administrator panelinize gidiň, **Ultimate Multisite > Settings** > **API & Webhooks**-a girip API Ayarlary (API Settings) bölümini tapyň.

![Ultimate Multisite'da API Ayarlary bölümi](/img/config/settings-api.png)

API ayarları sayjasynyň doly görnüşi şudur:

![API ayarları doly sayjasy](/img/config/settings-api-full.png)

**Enable API** (API-ny işleýärlikde saklamak) seçimi bilen API belgilerinizi alarsyň.

Indi, biz endpointi we soňra Zapierde ýaýratma (registration action) döredip görkezeli.

## Endpoint body parametrlary {#endpoint-body-parameters}

Endpointe göndermegiňiz gerek bolan iň az maglumatlaryň umumy görnüşini görjek. Bu makalanyň ahyrynda doly çağırma (full call) taparsyňyz.

### Customer {#customer}

User wepası we Ultimate Multisite Müşterisini döretmek üçin zerur bolan maglumatlar aşakdaky ýaly:

"customer_id" : integer

Siziň ulgamynda döredilen customer ID-sini göndermek mümkin. Eger size bu bermesek, aşakdaky maglumatlar täze customer we täze WordPress user döretmek üçin ulanylmaga başlanar. User ID-sini hem customer ID-si bilen aynı usulda göndermäge mümkinçiligi bar.

"customer" : { "user_id" : integer, "username" : "string", "password" : "string", "email" : "string" },

### **Membership** (Üylylyk) {#membership}

Bu obyekt içinde bizden zerur bolan birnäçe maglumat bar: Membership Status.

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" ýaly biri }

### **Products** (Ürünler) {#products}

Ürünlere şeýle bir ulgamyň (array) ýüklenir, bu ulgamda ulanylan ürün ID-leri şeýle 1 ýa-da ondan köp bolup biler. Dikkat edin, bu endpoint ürün döredip bilmez. Ürün döretmek barada has gowy düşüniş üçin Ultimate Multisite dokumentasiýasyny kontrol ediň.

**"products" : [1,2],**

### Ödeme (Payment) {#payment}

Membership bilen ýaly, bizde diňe status gerekdir.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" biri}**,

### Sahypa (Site) {#site}

Wejdeni ýapmak üçin biz sahypanyň URL-sini we Adyny hem Site objesi içinde gerekdiris.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Register endpoint-i hasaplaýan netije, täze döredilen membership maglumatlary bilen bir ulgam (array) boýunça berilipdir.

## Zapierde bir hereketi (action) döretmek {#creating-an-action-in-zapier}

Bu täze we hasap döretmek üçin güýçli bolan endpoint girizilmegi bilen siz Zapierde täze bir hili hem görmegiňiz mümkin boljakdyr.

Zapierin täze versiyasyny nähili ulanyp, ondan iň gowy faydalanmagyňyz barada bilmek isleýärsiňizmi? Ýerine ýetirip okap bilersiňiz. (link?)

### Hili döretmek {#creating-an-action}

Zapier bilen jemgyrdyrmak endpointini nähili ulanyp, onu has gowy görkezmek üçin Google Forms bilen integrasiýa döredip görüp bileris. Bu form her bir ýerine ýazylanda we maglumatlar formyň jogapçysyna saklandyrylsa, Ultimate Multisite ulgamynda täze üje (membership) döredilýär.

Google Formsda, ulgamda täze üje döretmek üçin zerur bolan iň az esasy ulanyşyklary bilen bir form döredip görüň.

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

Zapierde täze bir Zap döredip, bu formany Google-de, maglumatlar saklanan spreadsheet bilen baglantsaň.

<!-- Ekran görüntüsü ýok: Zapier triggerini Google Forms spreadsheetine baglantsaýan konfigurasiýa -->

Bitti! Google Forms formu Zapier bilen baglanyp we ulgam bilen integrasiýa etmek üçin taýyn. Indi, Google Forms her dolandygynda işe basýan Triggerden soň geljek Action-a geçeliň.

Yeni Ultimate Multisite app-ini tapyň we onu saýlaň. Bu tür Zap üçin "Register" (Gysgalaşdyrmak) opsiyasyny saýlaň.

<!-- Ekran görüntüsü ýok: Ultimate Multisite app bilen Register opsiyasy bilen Zapier action saýlamagy görkezýär -->

Bu ilkinji ädimden soň, bu Zap bilen baglanjak hasaby saýlaň.<!-- Screenshot unavailable: Ultimate Multisite üçin Zapier hasaby baglanyşygy ädimi -->

Bu prosesin iň duýgusal bölegi. Google Forms-dan gelip çykaran ulanyjylary (fields) bu wp-siteji (register endpoint) üçin zerur bolan aýratynli field-lar bilen deňeşdirmeli size gerekdiris. Bu makalanyň öňki böleginde görkezilen ýaly.

Bu mysalda, biz diňe ulanyjylar adyny (username), e-poçtasyny (email), paroluny (password), adyny (name) we wp-siteji URL-ini gurlamak gerekdiris. Beýleki ähli zatlar öňden kesgitlenip biler, şonda bu Google Forms bilen döredilen ähli üje (memberships) birme üçin we bir meýil (status) ulanyp biljekdigini üpjün edýär.

<!-- Screenshot unavailable: Google Forms we Ultimate Multisite register endpoint arasyndaky Zapier field mapping -->

Bellikleri sozlamagyňyz tamamlananda, soňky testden geçiň. Soňky ekranda siz endpoint-e gönd어lende boljak ähli ulanyjylary görýärsiňiz, olaryň özlerine degişli maglumatlary we boş ýerlere (empty) gönderiljek ulanyjylar barada maglumatlar.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Iň soňky zap-i test ediň we ol ägirtelipdir. Eger her bir ýerde hile bolsa, ähli ulanyjylary barlap görüň we olary düzgün göndermegini anyklap görüň. Maglumatlar köp bolmagy üçin, käbir zatlary ýatmak mümkin.

### Tam endpoint parametrlary {#complete-endpoint-parameters}

Bu ýerde doly çağırma (call) we göndermeli boljak ulanyjylar barada ähli mümkinçilikler görkezilendir.

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // birini "pending", "active", "trialing", "expired", "on-hold", "cancelled" olmaly, "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // birini "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
