---
title: Bir Planı Yükseltme
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Bir Planı Yükseltme (v2) {#upgrading-a-plan-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x ile ilgilidir.**_

Müşterileriniz planlarını istedikleri zaman yükseltebilir. Başka bir plana yükseltebilir veya ağınızda sunduğunuz ek hizmetleri ya da paketleri satın alabilirler.

Bu eğitimde, planlarını nasıl yükseltebileceklerini ve yükseltme sürecinden sonra ne olduğunu ele alacağız.

Planlarını yükseltmek için müşterileriniz Dashboard’a erişmeli ve **Account** sayfasına gitmelidir.

![Account menü bağlantısı görünen müşteri alt site Dashboard’u](/img/account-page/account-menu.png)

Account sayfasında, kendilerine mevcut üyelikleri ve bununla ilişkili plan gösterilir. Başka bir plana yükseltmek için **Your Membership** bölümünün sağ üst köşesindeki **Change** seçeneğine tıklamaları gerekir.

![Change düğmesi bulunan Account sayfası Your Membership kartı](/img/account-page/membership-change-button.png)

Mevcut tüm planların görüntüleneceği bir ödeme formuna yönlendirilirler.

Ayrıca, planı yükseltmek yerine yalnızca belirli bir hizmeti veya paketi (buradaki örneğimizde sınırsız ziyaret ya da disk alanı gibi) satın almak istemeleri durumunda **mevcut planları için kullanılabilir hizmetleri ve paketleri** de görebilirler.

![Müşteri tarafında mevcut planları ve paketleri gösteren yükseltme seçici](/img/account-page/upgrade-picker.png)

Satın almak istedikleri ürünü seçtikten sonra, mevcut herhangi bir kredi hariç, şu anda ne kadar ödeme yapmaları gerektiğini ve bir sonraki faturalandırma tarihinde ne kadar ücretlendirileceklerini görecekler.

Genellikle, ürün başka bir plansa ve ödeme bir üyelik ücreti arasında yapılacaksa, ilk planda ödenen tutar için bir kredi alırlar.

![Uygulanan krediyi ve sonraki faturalandırma tutarını gösteren yükseltme ödeme özeti](/img/account-page/upgrade-summary.png)

Mevcut abonelikte herhangi bir şeyi değiştirmeyecek bir plan veya paket seçerlerse, bunu açıklayan bir mesaj görürler.

![Seçilen planın aboneliği değiştirmediği durumdaki bildirim](/img/account-page/upgrade-no-change.png)

Ödeme tamamlandıktan sonra, yeni ürün(ler) müşterilerinizin hesabına eklenir ve yeni ürün(ler)in tüm limitleri veya özellikleri anında buna eklenir: ziyaretler, disk alanı, yazılar vb...

##

##

## Yükseltme ve Düşürme Yolları {#upgrade-and-downgrade-paths}

Ürünlerinizin her birinde bir **Up & Downgrades** sekmesi bulunur. Bu sekmedeki ilk seçenek **Plan Group** adlı bir alandır.

**Plan grupları**, belirli planların aynı “aileye” ait olduğunu Ultimate Multisite’a bildirmenizi ve bu nedenle yükseltme/düşürme yolu seçeneklerini oluşturmak için kullanılmaları gerektiğini sağlar.

![Plan Group alanı bulunan ürün düzenleme Up and Downgrades sekmesi](/img/config/product-upgrades-plan-group.png)

Örneğin, kullanılabilir bir **Free plan**, bir **Basic Plan** ve bir **Premium Plan**’ınız var. **Free Plan** kapsamındaki kullanıcıların yalnızca **Premium Plan**’a yükseltebilmesini ve “Basic Plan”ı bir yükseltme seçeneği olarak görmelerini istemiyorsunuz. Yapmanız gereken tek şey, aşağıdaki ekran görüntülerinde gösterildiği gibi hem Free hem de Premium planları için aynı plan grubu adını atamaktır.

![High End plan grubu atanmış Free Plan ürün sayfası](/img/config/product-upgrades-free.png)

![High End plan grubu atanmış Premium Plan ürün sayfası](/img/config/product-upgrades-premium.png)

Bunun yapması gereken şey, Ultimate Multisite’a ağda **High End** adlı bir plan “ailesi” olduğunu söylemektir. Yükseltmeler veya düşürmeler sunulurken, kullanıcıya yalnızca aynı aileden planlar bir seçenek olarak sunulur.
