---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks'a İlk Bakış (v2) {#a-first-look-on-webhooks-v2}

_**DİKKAT: Bu özelliğin veya makalenin ileri düzey kullanıcılar için olduğunu unutmayın.**_

Bir **webhook**, Ultimate Multisite gibi bir uygulamanın veya yazılımın diğer uygulamalara gerçek zamanlı bilgi sağlamasının bir yoludur. Bir webhook, verileri veya payload'ları gerçekleştiği anda diğer uygulamalara iletir; yani **verileri hemen alırsınız.**

Ultimate Multisite'tan başka bir CRM'e veya sisteme, her etkinlik tetiklendiğinde belirli verileri entegre etmeniz veya aktarmanız gerekiyorsa bu yararlıdır. Örneğin, her yeni kullanıcı hesabı oluşturulduğunda kullanıcının adını ve e-posta adresini bir e-posta listesine göndermeniz gerekir.

## Bir webhook nasıl oluşturulur {#how-to-create-a-webhook}

Bir webhook oluşturmak için network admin dashboard'unuza gidin. **Ultimate Multisite > Webhooks > Add New Webhook** üzerine tıklayın.

![Add New Webhook düğmesi bulunan boş Webhooks liste sayfası](/img/admin/webhooks-list-empty.png)

Ardından webhook yapılandırmasını düzenleyebilirsiniz:

![Name, Event ve URL alanları bulunan Add New Webhook formu](/img/admin/webhook-add-modal.png)

Yeni bir webhook oluştururken sizden **Name, URL,** ve **Event** gibi bilgiler istenir. Webhook'unuz için istediğiniz herhangi bir adı kullanabilirsiniz. En önemli alanlar URL ve Event'tir.

![URL alanını ve payload önizlemesini gösteren webhook düzenleme arayüzü](/img/admin/webhook-url-field.png)

URL, Ultimate Multisite'ın **payload veya verileri** göndereceği **endpoint ya da hedef**tir. Bu, verileri alacak uygulamadır.

Zapier, kullanıcının 3. taraf uygulamalarla entegrasyonu kolaylaştırmak için kullandığı en yaygın çözümdür. Zapier gibi bir platform olmadan, verileri yakalayacak ve işleyecek özel bir işlevi manuel olarak oluşturmanız gerekir. **Ultimate Multisite webhook'unun Zapier ile nasıl kullanılacağı** hakkındaki bu makaleye bakın.

Bu makalede, bir webhook'un nasıl çalıştığının temel kavramına ve Ultimate Multisite içinde mevcut etkinliklere bakacağız. [requestbin.com](https://requestbin.com/) adlı 3. taraf bir site kullanacağız. Bu site, herhangi bir kodlama yapmadan bir endpoint oluşturmamıza ve payload'u yakalamamıza olanak tanır. _**Sorumluluk reddi: yapacağı tek şey, verilerin alındığını bize göstermektir.**_ Payload üzerinde herhangi bir işleme veya herhangi bir türde eylem yapılmayacaktır.

[requestbin.com](https://requestbin.com/) adresine gidin ve Create Request Bin'e tıklayın.

Bu düğmeye tıkladıktan sonra, zaten bir hesabınız varsa giriş yapmanızı veya kaydolmanızı isteyecektir. Zaten bir hesabınız varsa sizi doğrudan dashboard'larına yönlendirir. Dashboard'larında, Ultimate Multisite webhook'unuzu oluştururken kullanabileceğiniz endpoint'i veya URL'yi hemen göreceksiniz.

Devam edip URL'yi kopyalayın ve Ultimate Multisite'a geri dönün. Endpoint'i URL alanına yerleştirin ve açılır menüden bir etkinlik seçin. Bu örnekte **Payment Received** seçeceğiz.

Bu etkinlik, bir kullanıcı ödeme yaptığında tetiklenir. Mevcut tüm etkinlikler, açıklamaları ve payload'ları sayfanın altında listelenmiştir. Webhook'u kaydetmek için **Add New Webhook** düğmesine tıklayın.

![Payment Received seçili webhook etkinlik açılır menüsü](/img/admin/webhook-event-picker.png)

Oluşturduğumuz webhook'un çalışıp çalışmadığını görmemiz için artık endpoint'e bir test etkinliği gönderebiliriz. Bunu, oluşturduğumuz webhook'un altındaki **Send Test Event** seçeneğine tıklayarak yapabiliriz.

![Yapılandırılmış bir webhook ve Send Test eylemini gösteren Webhooks listesi](/img/admin/webhooks-list-populated.png)

Bu, testin başarılı olduğunu söyleyen bir onay penceresi gösterir.

![Bir test payload'u gönderdikten sonra webhook test etkinliği sonucu](/img/admin/webhook-test-result.png)

Şimdi _Requestbin_ sitesine geri dönersek, payload'un bazı test verilerini içererek alındığını göreceğiz.

Webhook ve endpoint'lerin nasıl çalıştığının temel ilkesi budur. Özel bir endpoint oluşturacaksanız, Ultimate Multisite'tan aldığınız verileri işlemek için özel bir işlev oluşturmanız gerekir.
