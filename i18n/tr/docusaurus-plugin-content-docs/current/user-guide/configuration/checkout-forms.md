---
title: Ödeme Formları
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Ödeme Formları

Ödeme Formları, yeni müşterileri kazanmaya çalışırken farklı yaklaşımları denemenin kolay ve esnek bir yoludur.

Ultimate Multisite 2.0, istediğiniz kadar form oluşturmanıza olanak tanıyan bir Ödeme Formu düzenleyicisi sunar. Bu formları farklı alanlar, sunulan ürünler ve daha fazlasıyla özelleştirebilirsiniz.

Bu özelliğe erişmek için sol kenar çubuğundaki Ödeme Formları menüsüne gidin.

![Ödeme Formları listesi](/img/config/checkout-forms-list.png)

Bu sayfada sahip olduğunuz tüm ödeme formlarını görebilirsiniz.

Yeni bir form oluşturmak istiyorsanız, sayfanın üst kısmındaki Ödeme Formu Ekle butonuna tıklamanız yeterlidir.

Başlangıç noktası olarak şu üç seçenekten birini seçebilirsiniz: tek adımlı, çok adımlı veya boş. Ardından Düzenleyiciye Git'e tıklayın.

![Ödeme Formu düzenleyicisi](/img/config/checkout-form-editor.png)

Ayrıca mevcut formlarınızı, form adının altındaki seçeneklere tıklayarak düzenleyebilir veya kopyalayabilirsiniz. Burada formun kısa kodunu kopyalama veya formu silme seçeneklerini de bulabilirsiniz.

![Ödeme formu üzerine gelme eylemleri](/img/config/checkout-form-hover-actions.png)

### Ödeme Formunu Düzenleme

Farklı amaçlar için ödeme formları oluşturabilirsiniz. Bu örnekte bir kayıt formu üzerinde çalışacağız.

Ödeme formu düzenleyicisine gittikten sonra formunuza bir ad (yalnızca dahili referans için kullanılacak) ve bir slug (örneğin kısa kodlar oluşturmak için kullanılır) verin.

![Ödeme Formu düzenleyicisi](/img/config/checkout-form-editor.png)

Formlar adımlardan ve alanlardan oluşur. Yeni Ödeme Adımı Ekle'ye tıklayarak yeni bir adım ekleyebilirsiniz.

![Yeni Ödeme Adımı Ekle](/img/config/checkout-form-add-step.png)

Açılan pencerenin ilk sekmesinde form adımınızın içeriğini doldurun. Bir ID, ad ve açıklama girin. Bu öğeler çoğunlukla dahili olarak kullanılır.

![Ödeme formu adımı](/img/config/checkout-form-step.png)

Sonra, adımın görünürlüğünü ayarlayın. "Her zaman göster", "Yalnızca giriş yapmış kullanıcılara göster" veya "Yalnızca ziyaretçilere göster" seçeneklerinden birini seçebilirsiniz.

![Ödeme formu adımı](/img/config/checkout-form-step.png)

Son olarak, adım stilini yapılandırın. Bunlar isteğe bağlı alanlardır.

![Ödeme formu adımı](/img/config/checkout-form-step.png)

Şimdi ilk adımımıza alan ekleme zamanı. Yeni Alan Ekle'ye tıklayın ve istediğiniz bölüm türünü seçin.

![Alanlı ödeme formu adımı](/img/config/checkout-form-step.png)

Her alanın doldurulması gereken farklı parametreleri vardır. Bu ilk giriş için "Kullanıcı Adı" alanını seçeceğiz.

![Ödeme formu adımı](/img/config/checkout-form-step.png)

![Ödeme formu adımı](/img/config/checkout-form-step.png)

![Ödeme formu adımı](/img/config/checkout-form-step.png)

İhtiyacınız kadar adım ve alan ekleyebilirsiniz. Müşterilerinizin seçim yapması için ürünlerinizi görüntülemek istiyorsanız Fiyatlandırma Tablosu alanını kullanın. Müşterilerinizin bir şablon seçmesine izin vermek istiyorsanız Şablon Seçimi alanını ekleyin. Ve bu şekilde devam edebilirsiniz.

_**Not:** Bir ödeme formu oluşturmak için kullanıcı adı, e-posta, şifre, site başlığı, site URL'si, sipariş özeti, ödeme ve gönder butonu zorunlu alanlardır._

Ödeme formunuz üzerinde çalışırken, müşterilerinizin formu nasıl göreceğini görmek için her zaman Önizleme butonunu kullanabilirsiniz. Ayrıca mevcut kullanıcı veya ziyaretçi olarak görüntüleme arasında geçiş yapabilirsiniz.

![Ödeme Formu kaydet](/img/config/checkout-form-save.png)

![Ödeme Formu düzenleyicisi](/img/config/checkout-form-editor.png)

Son olarak, Gelişmiş Seçenekler bölümünde "Teşekkürler" sayfası için mesaj yapılandırabilir, dönüşümleri izlemek için kod parçacıkları ekleyebilir, ödeme formunuza özel CSS ekleyebilir veya formu belirli ülkelerle sınırlandırabilirsiniz.

![Gelişmiş Seçenekler](/img/config/checkout-form-advanced.png)

Ayrıca sağ sütundaki bu seçeneği açıp kapatarak ödeme formunuzu manuel olarak etkinleştirebilir veya devre dışı bırakabilir ya da formu kalıcı olarak silebilirsiniz.

![Aktif düğmesi](/img/config/checkout-form-active.png)

Ödeme formunuzu kaydetmeyi unutmayın!

![Kaydet butonu](/img/config/checkout-form-save.png)

Formunuzun kısa kodunu almak için Kısa Kod Oluştur'a tıklayın ve açılan pencerede gösterilen sonucu kopyalayın.

![Kısa kodlu kaydet butonu](/img/config/checkout-form-save.png)
