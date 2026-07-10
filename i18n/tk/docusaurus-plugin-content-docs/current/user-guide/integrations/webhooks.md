---
title: Webhooklar
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooklar Üstü Bir Bakış (v2) {#a-first-look-on-webhooks-v2}

_**DİKKAT: Bu özellik veya makale yalnız ileri düzey kullanıcılar içindir.**_

**Webhook**, Ultimate Multisite gibi bir uygulama veya yazılımın diğer uygulamalara anlık bilgi sağlamasının bir yoludur. Webhook, veri veya yükleri olay gerçekleştiği anda başka uygulamalara gönderir, bu da demek oluyor ki siz **veriyi hemen alırsınız.**

Bu, her olay tetiklendiğinde Ultimate Multisite'dan başka bir CRM'e veya sisteme belirli verileri aktarmanız veya entegre etmeniz gerektiğinde faydalıdır. Örneğin, yeni bir kullanıcı hesabı oluşturulduğunda kullanıcının adını ve e-posta adresini bir e-posta listesine göndermeniz gerekebilir.

## Webhook Nasıl Oluşturulur {#how-to-create-a-webhook}

Webhook oluşturmak için ağ yöneticisi (network admin) panelinize gidin. **Ultimate Multisite > Webhooks > Yeni Webhook Ekle** seçeneğine tıklayın.

![Yeni Webhook Ekle butonu olan boş Webhooks listesi sayfası](/img/admin/webhooks-list-empty.png)

Daha sonra webhook yapılandırmasını düzenleyebilirsiniz:

![Ad, Olay ve URL alanları ile Yeni Webhook Ekle formu](/img/admin/webhook-add-modal.png)

Yeni bir webhook oluştururken **İsim (Name), URL** ve **Olay (Event)** gibi bilgilerden sorulacaksınız. Webhook'unuz için istediğiniz herhangi bir ismi kullanabilirsiniz. En önemli alanlar URL ve Olaydır.

![URL alanı ve yük önizlemesini gösteren Webhook düzenleme arayüzü](/img/admin/webhook-url-field.png)

URL, Ultimate Multisite'ın **yükü veya veriyi** göndereceği **uç nokta veya varış noktasıdır (endpoint or the destination)**. Veriyi alacak olan uygulama budur.

Zapier, üçüncü taraf uygulamalarla entegrasyonu kolaylaştırmak için kullanıcıların en çok kullandığı çözümdür. Zapier gibi bir platform olmadan, veriyi yakalayıp işleyecek özel bir fonksiyon manuel olarak oluşturmanız gerekecektir. **Ultimate Multisite webhook'unu Zapier ile nasıl kullanacağınız** hakkındaki bu makaleye bakın.

Bu makalede webhook'un temel tushunchagynyň nirede işlediğini we Ultimate Multisite-da bar bolan wariantlary nädip islendik barlap biljekdigimizi görkezeli. Biz [requestbin.com](https://requestbin.com) diýip üçinji tarapyndan bir saytdan peýda edilipdir. Bu sayt biz kod yazmaga gerek çekmeden endpoint döredip, payloady (matlamany) geçip biljekdigimizi üpjün edendir. _**Awararmak: bu diňe maglumatlary aldyryp-almadygyny görkezmek üçindir.**_ Payload bilen hiç hili işleme ýa-da hereket etme işlemegi ýok bolar.

[requestbin.com](https://requestbin.com) adresine gitdir we Create Request Bin (Soňky Soňky Soragy Dörediji) düwmenine basyň.

Şu düwmeni basandan soň, eger size hasap bar bolsa, giriş bermegi ýa-da hasap açmagy soraýar. Eger sizde hasap bar bolsa, sizi birleşdiripdirki dashboarda çykaryp biler. Olunça olaryň dashboardynda, Ultimate Multisite webhook-i döretmek üçin ulanyp biljek endpoint ýa-da URL-i hemen görersiňiz.

URL-i köçürip alyp, Ultimate Multisite-e geri dönsün. Endpointi URL ulanylyp biljek ulanyjy bilen we açyryp düşýän menüden bir warianty saýlaň. Bu mysalda biz **Payment Received** (Ödeme Alyn) diýip saýlaýarys.

Bu wariant her bir ulanyjynyň töleg edendiginde işe başlar. Bar bolan ähli wariantlar, olaryň düşündirişleri we payloadlary saytyň aşagynda listlenendir. Webhooky sazlamaç üçin **Add New Webhook** (New Webhook Goşmak) düwmenine basyp sazlanyp bilersiňiz.

![Webhook event dropdown with Payment Received selected](/img/admin/webhook-event-picker.png)

Şu wariant bilen test edip görüp bileris, ol döredipdirki webhook işledi-de dälmi diýmek üçin biz test wariantyny endpointe gönderebilenis. Bu, döredipdirki webhookyň işleýändigini görkezmek üçin ýapylýar. Döredipdirki webhookyň aşagynda **Send Test Event** (Test Wariant Göndermek) düwmenine basyp bilersiňiz.

![Webhooks list showing one configured webhook and Send Test action](/img/admin/webhooks-list-populated.png)

Bu, testin üstünlikli geçendigini aýdýan tassyklama penceresini görkezýär.

![Webhook test event result after sending a test payload](/img/admin/webhook-test-result.png)

Şeýle-de _Requestbin_ saytına girseňiz, ýük (payload) test düwüri bilen bilelik kabul edildiğini görersiňiz.

Bu webhook we endpointler nädip işleýändiginiň esasy prinsipi. Eger siz öz custom endpoint döredmek isleseňiz, Ultimate Multisite-dan alanyňyzy işlemek üçin custom funksiýa döretmeli bolarsyňyz.
