---
title: Веб-хуки
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooklar Üzerine İlk Bakış (v2)

_**DİKKAT: Bu özellik veya makale ileri düzey kullanıcılar içindir.**_

**Webhook**, Ultimate Multisite gibi bir uygulamanın diğer uygulamalara gerçek zamanlı bilgi sağlamasının bir yoludur. Bir webhook, veri veya yükleri olay gerçekleştiği anda başka uygulamalara gönderir, yani siz **veriyi hemen alırsınız**.

Bu özellik, her olay tetiklendiğinde Ultimate Multisite'tan belirli verileri başka bir CRM'e veya sisteme entegre etmeniz veya aktarmanız gerektiğinde faydalıdır. Örneğin, yeni bir kullanıcı hesabı oluşturulduğunda kullanıcının adını ve e-posta adresini bir e-posta listesine göndermeniz gerekebilir.

## Webhook Nasıl Oluşturulur?

Bir webhook oluşturmak için ağ yöneticisi panonuza gidin. **Ultimate Multisite > Webhooks > Yeni Webhook Ekle** seçeneğine tıklayın.

![Yeni Webhook Ekle butonu olan boş Webhooks listesi sayfası](/img/admin/webhooks-list-empty.png)

Ardından webhook yapılandırmasını düzenleyebilirsiniz:

![Ad, Olay ve URL alanları ile Yeni Webhook Ekle formu](/img/admin/webhook-add-modal.png)

Yeni bir webhook oluştururken **Ad, URL** ve **Olay (Event)** gibi bilgilerden sorulacaksınız. Webhook'unuz için istediğiniz herhangi bir adı kullanabilirsiniz. En önemli alanlar URL ve Olaydır.

![URL alanı ve yük önizlemesini gösteren Webhook düzenleme arayüzü](/img/admin/webhook-url-field.png)

URL, Ultimate Multisite'ın **yükü veya veriyi** göndereceği **uç nokta veya hedef** demektir. Veriyi alacak olan uygulama budur.

Zapier, üçüncü taraf uygulamalarla entegrasyonu kolaylaştırmak için kullanıcıların en çok kullandığı çözümdür. Zapier gibi bir platform olmadan, veriyi yakalayıp işleyecek özel bir fonksiyon manuel olarak oluşturmanız gerekecektir. **Ultimate Multisite webhook'unu Zapier ile nasıl kullanacağınız** hakkındaki bu makaleye bakın.

Bu makalede webhook'un temel kavramını ve Ultimate Multisite'ta mevcut olan olayları inceleyeceğiz. Bunun için [requestbin.com](https://requestbin.com/) gibi üçüncü taraf bir site kullanacağız. Bu site bize kod yazmadan bir endpoint oluşturmamıza ve yükü (payload) yakalamamıza izin verecek. _**Önemli Uyarı: Yapacağı tek şey verinin alındığını bize göstermek olacaktır.**_ Yük üzerinde herhangi bir işlem veya türde bir eylem yapılmayacaktır.

[requestbin.com](https://requestbin.com/) adresine gidin ve Create Request Bin (İstek Kutusu Oluştur) butonuna tıklayın.

Bu butona tıkladıktan sonra, hesabınız varsa giriş yapmanızı veya kayıt olmanızı isteyecektir. Zaten bir hesabınız varsa sizi doğrudan panellerine yönlendirecektir. Panellerinde, Ultimate Multisite webhook'unuzu oluşturmak için kullanabileceğiniz endpoint'i veya URL'yi hemen göreceksiniz.

URL'yi kopyalayın ve Ultimate Multisite'a geri dönün. Endpoint'i URL alanına yerleştirin ve açılır menüden bir olay seçin. Bu örnekte **Payment Received** (Ödeme Alındı) olayını seçeceğiz.

Bu olay, bir kullanıcı ödeme yaptığında tetiklenir. Mevcut tüm olaylar, açıklamaları ve yükleri sayfanın en altında listelenmiştir. Webhook'u kaydetmek için **Add New Webhook** (Yeni Webhook Ekle) butonuna tıklayın.

![Payment Received seçili webhook olay açılır menüsü](/img/admin/webhook-event-picker.png)

Şimdi oluşturduğumuz webhook'un çalışıp çalışmadığını görmek için endpoint'e bir test olayı gönderebiliriz. Bunu, oluşturduğumuz webhook'un altında **Send Test Event** (Test Olayı Gönder) butonuna tıklayarak yapabiliriz.

![Yapılandırılmış bir webhook ve Test Eylemi gösteren Webhook listesi](/img/admin/webhooks-list-populated.png)

Bu, testin başarılı olduğunu söyleyen bir onay penceresi gösterir.

![Test yükü gönderildikten sonraki webhook test olayı sonucu](/img/admin/webhook-test-result.png)

Арада _Requestbin_ сайтына кайтарып барабыз, анда карасак, мынсы (payload) тест дерейлерле белән кабул иткәнен күрәбез.

Бу webhook һәм endpoint-лар ничек эшләвеге турында базалык принцип. Хәзерге Ultimate Multisite-дан алып китәргә теләктәгез, анда сиздерке керүче дерейне югалтма өчен кулланучы функция (custom function) ясау кирәк.
