---
title: Webhooks
sidebar_position: 15
_i18n_hash: 2246e3cc1ed172d701d898e04088bf29
---
# Webhook'lara İlk Bakış (v2)

_**DİKKAT: Bu özellik veya makale ileri düzey kullanıcılar içindir.**_

Bir **webhook**, Ultimate Multisite gibi bir uygulamanın veya yazılımın, diğer uygulamalara gerçek zamanlı bilgi sağlamasının bir yoludur. Bir webhook, verileri veya yükleri (payload) bir şey gerçekleşir gerçekleşmez diğer uygulamalara iletir, bu da demektir ki **veriyi anında alırsınız.**

Bu, Ultimate Multisite'tan başka bir CRM'e veya sisteme belirli bir veri aktarmanız veya entegre etmeniz gerektiğinde çok işe yarar. Örneğin, yeni bir kullanıcı hesabı oluşturulduğunda kullanıcının adını ve e-posta adresini bir e-posta listesine göndermeniz gerekebilir.

## Webhook Nasıl Oluşturulur

Bir webhook oluşturmak için ağ yöneticisi dashboard'ınıza gidin. **Ultimate Multisite > Webhooks > Yeni Webhook Ekle** yolunu izleyin.

![Webhooks list page with Add New Webhook button](/img/admin/webhooks-list.png)

Ardından webhook yapılandırmasını düzenleyebilirsiniz:

![Webhook edit interface](/img/admin/webhook-edit.png)

Yeni bir webhook oluştururken sizden **Ad (Name), URL** ve **Olay (Event)** gibi bilgiler istenecektir. Webhook'unuz için istediğiniz herhangi bir adı kullanabilirsiniz. En önemli alanlar URL ve Olay'dır.

![New webhook form with Name, URL, and Event fields](/img/admin/webhooks-list.png)

URL, Ultimate Multisite'ın **yükü (payload) veya veriyi** göndereceği **hedef adresi (endpoint)** veya varış noktasıdır. Bu, veriyi alacak olan uygulamadır.

Zapier, kullanıcıların üçüncü taraf uygulamalarla entegrasyon yapmasını kolaylaştıran en yaygın çözümdür. Zapier gibi bir platform olmadan, veriyi yakalayıp işleyecek özel bir fonksiyon oluşturmanız gerekir. **Ultimate Multisite webhook'unu Zapier ile nasıl kullanacağınız** başlıklı makaleye bakabilirsiniz.

Bu makalede, bir webhook'un nasıl çalıştığı temel konseptine ve Ultimate Multisite'ta mevcut olan olaylara (events) bakacağız. Kod yazmadan bir hedef adres oluşturmamıza ve yükü yakalamamıza olanak tanıyan [requestbin.com](https://requestbin.com/) adlı üçüncü taraf bir site kullanacağız. _**Yasal Uyarı: Bu site sadece verinin alındığını gösterecektir.**_ Yük üzerinde herhangi bir işlem veya eylem yapılmayacaktır.

[requestbin.com](https://requestbin.com/) adresine gidin ve Create Request Bin butonuna tıklayın.

![RequestBin website Create Request Bin button](/img/admin/webhooks-list.png)

Bu butona tıkladıktan sonra, zaten bir hesabınız varsa giriş yapmanız veya yeni bir hesap oluşturmanız istenecektir. Eğer zaten bir hesabınız varsa, doğrudan dashboard'unuza yönlendirileceksiniz. Dashboard'larında, Ultimate Multisite webhook'unuzu oluştururken kullanabileceğiniz hedef adresi (endpoint) veya URL'yi hemen göreceksiniz.

![RequestBin dashboard showing the endpoint URL](/img/admin/webhooks-list.png)

URL'yi kopyalayıp Ultimate Multisite'a geri dönün. Hedef adresi URL alanına yapıştırın ve açılır menüden bir olay seçin. Bu örnekte, **Ödeme Alındı (Payment Received)** olayını seçeceğiz.

Bu olay, bir kullanıcı ödeme yaptığında tetiklenir. Mevcut tüm olaylar, açıklamaları ve yükleri sayfanın alt kısmında listelenmiştir. Webhook'u kaydetmek için **Yeni Webhook Ekle** butonuna tıklayın.

![Webhook configured with Payment Received event](/img/admin/webhooks-list.png)

Şimdi, oluşturduğumuz webhook'un çalışıp çalışmadığını görmek için bu hedef adrese bir test olayı gönderebiliriz. Bunu, oluşturduğumuz webhook'un altındaki **Test Olayı Gönder (Send Test Event)** butonuna tıklayarak yapabiliriz.

![Send Test Event option under the webhook](/img/admin/webhooks-list.png)

Bu, testin başarılı olduğunu belirten bir onay penceresi gösterir.

![Webhook test event successful confirmation](/img/admin/webhooks-list.png)

Şimdi _Requestbin_ sitesine geri dönersek, test verisi içeren bir yükün alındığını göreceğiz.

![RequestBin showing received webhook payload data](/img/admin/webhooks-list.png)

Bu, webhook'ların ve hedef adreslerin (endpoints) nasıl çalıştığının temel prensibidir. Eğer özel bir hedef adres oluşturacaksanız, Ultimate Multisite'tan aldığınız veriyi işlemek için özel bir fonksiyon oluşturmanız gerekecektir.
