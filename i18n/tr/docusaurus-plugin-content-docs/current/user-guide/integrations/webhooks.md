---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhook'lara İlk Bakış (v2)

_**DİKKAT: Bu özellik veya makale ileri düzey kullanıcılar içindir.**_

**Webhook**, Ultimate Multisite gibi bir uygulama veya yazılımın diğer uygulamalara anlık bilgi sağlamasının bir yoludur. Webhook, verileri veya yükleri (payload) olaylar gerçekleştiği anda diğer uygulamalara iletir; bu da **verileri anında almanız** anlamına gelir.

Bu özellik, Ultimate Multisite'tan bir CRM'e veya başka bir sisteme belirli verileri her olay tetiklendiğinde aktarmanız gerektiğinde oldukça kullanışlıdır. Örneğin, her yeni kullanıcı hesabı oluşturulduğunda kullanıcının adını ve e-posta adresini bir e-posta listesine göndermek isteyebilirsiniz.

## Webhook nasıl oluşturulur

Webhook oluşturmak için ağ yöneticisi kontrol panelinize gidin. **Ultimate Multisite > Webhooks > Add New Webhook** yolunu izleyin.

![Add New Webhook butonu bulunan Webhook listesi sayfası](/img/admin/webhooks-list.png)

Yeni bir webhook oluştururken **Name, URL** ve **Event** gibi bilgiler istenir. Webhook'unuz için istediğiniz herhangi bir ad kullanabilirsiniz. En önemli alanlar URL ve Event'tir.

![Name, URL ve Event alanları bulunan yeni webhook formu](/img/admin/webhooks-list.png)

URL, Ultimate Multisite'ın **yükü veya veriyi** göndereceği **uç nokta veya hedef adrestir**. Bu, veriyi alacak olan uygulamadır.

Zapier, kullanıcıların üçüncü taraf uygulamalarla entegrasyonu kolaylaştırmak için en sık kullandığı çözümdür. Zapier gibi bir platform olmadan, veriyi yakalayıp işleyecek özel bir fonksiyon oluşturmanız gerekir. **Ultimate Multisite webhook'unu Zapier ile nasıl kullanacağınızı** anlatan makaleye göz atabilirsiniz.

Bu makalede, webhook'un nasıl çalıştığına dair temel kavramı ve Ultimate Multisite'ta mevcut olan olayları inceleyeceğiz. [requestbin.com](https://requestbin.com/) adlı üçüncü taraf bir site kullanacağız. Bu site, herhangi bir kod yazmadan bir uç nokta oluşturmamıza ve yükü yakalamamıza olanak tanır. _**Not: Bu site yalnızca verinin alındığını gösterecektir.**_ Yük üzerinde herhangi bir işlem veya aksiyon yapılmayacaktır.

[requestbin.com](https://requestbin.com/) adresine gidin ve Create Request Bin butonuna tıklayın.

![RequestBin web sitesi Create Request Bin butonu](/img/admin/webhooks-list.png)

Butona tıkladıktan sonra, zaten bir hesabınız varsa giriş yapmanızı veya kayıt olmanızı isteyecektir. Hesabınız varsa sizi doğrudan kontrol paneline yönlendirecektir. Kontrol panelinde, Ultimate Multisite webhook'unuzu oluştururken kullanabileceğiniz uç nokta veya URL'yi hemen göreceksiniz.

![Uç nokta URL'sini gösteren RequestBin kontrol paneli](/img/admin/webhooks-list.png)

URL'yi kopyalayın ve Ultimate Multisite'a geri dönün. Uç noktayı URL alanına yapıştırın ve açılır menüden bir olay seçin. Bu örnekte **Payment Received** seçeneğini seçeceğiz.

Bu olay, bir kullanıcı ödeme yaptığında tetiklenir. Mevcut tüm olaylar, açıklamaları ve yükleri sayfanın altında listelenmiştir. Webhook'u kaydetmek için **Add New Webhook** butonuna tıklayın.

![Payment Received olayı ile yapılandırılmış webhook](/img/admin/webhooks-list.png)

Artık oluşturduğumuz webhook'un çalışıp çalışmadığını görmek için uç noktaya bir test olayı gönderebiliriz. Bunu, oluşturduğumuz webhook'un altındaki **Send Test Event** seçeneğine tıklayarak yapabiliriz.

![Webhook altındaki Send Test Event seçeneği](/img/admin/webhooks-list.png)

Bu işlem, testin başarılı olduğunu belirten bir onay penceresi gösterir.

![Webhook test olayı başarılı onayı](/img/admin/webhooks-list.png)

Şimdi _Requestbin_ sitesine geri dönersek, bazı test verileri içeren yükün alındığını göreceğiz.

![Alınan webhook yük verisini gösteren RequestBin](/img/admin/webhooks-list.png)

Bu, webhook ve uç noktaların nasıl çalıştığının temel prensibidir. Özel bir uç nokta oluşturacaksanız, Ultimate Multisite'tan aldığınız veriyi işlemek için özel bir fonksiyon yazmanız gerekecektir.
