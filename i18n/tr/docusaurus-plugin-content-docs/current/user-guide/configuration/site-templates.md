---
title: Site Şablonları
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Site Şablonları (v2)

_**NOT: Bu makale Ultimate Multisite 2.x sürümüne aittir. Eğer 1.x sürümünü kullanıyorsanız,**_ **bu makaleye bakın** _**.**_

Ultimate Multisite ile premium bir ağ oluştururken hedefimiz, müşterilerimize web sitelerini oluştururken esneklik ve farklı seçenekler sunarken mümkün olduğunca fazla süreci otomatikleştirmektir. Bu dengeyi sağlamanın kolay bir yolu, Ultimate Multisite Site Şablonları özelliğini kullanmaktır.

## Site Şablonu Nedir?

Adından da anlaşılacağı gibi, Site Şablonu ağınızda yeni siteler oluştururken temel olarak kullanılabilecek hazır bir site taslağıdır.

Bu, bir temel site oluşturabileceğiniz, farklı eklentileri etkinleştirebileceğiniz, aktif bir tema belirleyebileceğiniz ve dilediğiniz şekilde özelleştirebileceğiniz anlamına gelir. Ardından, müşteriniz yeni bir hesap oluşturduğunda, içinde anlamlı bir içerik olmayan varsayılan bir WordPress sitesi almak yerine, tüm özelleştirmeler ve içerikler hazır halde temel sitenizin bir kopyasını alacaktır.

Kulağa harika geliyor, peki yeni bir site şablonu nasıl oluşturabilirim? Olabildiğince basit.

## Yeni Site Şablonu Oluşturma ve Düzenleme

Site Şablonları ağınızdaki normal sitelerdir. Yeni bir şablon oluşturmak için **Ağ Yöneticisi > Ultimate Multisite > Siteler > Site Ekle** yolunu izleyebilirsiniz.

**![Siteler listesi sayfasındaki Site ekle düğmesi](/img/config/site-templates-list.png)**

Bu, **Site başlığı, Site Alan adı/yolu** ve **Site türü** bilgilerini soran bir modal pencere açacaktır. **Site Türü** açılır alanının altında **Site Şablonu** seçeneğini seçtiğinizden emin olun *.*

_![Site türü açılır menüsüyle site şablonu ekleme modalı](/img/config/site-templates-list.png)_

Formun alt kısmında bir **Siteyi Kopyala** aç/kapa düğmesi göreceksiniz. Bu, sıfırdan bir site şablonu oluşturmak yerine zaman kazanmanız için mevcut bir site şablonunu başlangıç noktası olarak kullanarak yeni bir site şablonu oluşturmanıza olanak tanır.

![Siteyi kopyala aç/kapa düğmesiyle site şablonu ekleme modalı](/img/config/site-templates-list.png)

### Site Şablonunun İçeriğini Özelleştirme

Site şablonunuzu özelleştirmek için ilgili sitenin yönetim paneline gidin ve gerekli değişiklikleri yapın. Yeni yazılar, sayfalar oluşturabilir, eklentileri etkinleştirebilir ve aktif temayı değiştirebilirsiniz. Hatta Özelleştirici'ye giderek her türlü özelleştirme seçeneğini değiştirebilirsiniz.

Bir müşteri bu Site Şablonuna dayalı yeni bir site oluşturduğunda tüm bu veriler kopyalanacaktır.

### Gelişmiş Seçenekler

Özel kodlama konusunda bilginiz varsa, yeni sitenin oluşturulmasından sonra bilgileri otomatik olarak değiştirmek için Ara ve Değiştir API'mizi kullanabilirsiniz. Bu, Hakkında sayfasındaki şirket adlarını değiştirmek, İletişim sayfasındaki e-posta adresini değiştirmek gibi durumlar için kullanışlıdır.

### Site Şablonlarını Kullanma

Peki, farklı tasarımlar, temalar ve ayarlarla bir dizi farklı Site Şablonu oluşturdunuz. Şimdi bunları ağınızda nasıl kullanışlı hale getireceksiniz?

Temel olarak, şimdi kullanabileceğiniz iki yaklaşım var (eş zamanlı olarak değil):

  * Her Planınıza bir Site Şablonu atama

**VEYA**

  * Müşterilerinizin kayıt sırasında site şablonlarını kendilerinin seçmesine izin verme.

#### Mod 1: Site Şablonu Ata

Bu modda, müşterileriniz hesap oluştururken bir şablon seçemez; bunun yerine her Planınızda hangi şablonun kullanılacağını siz belirlersiniz.

Bunu yapmak için **Ultimate Multisite > Ürünler > Düzenle** yolunu izlemeniz gerekir.

![Site şablonu atamak için ürün düzenleme](/img/config/product-site-templates.png)

Bu sizi **Ürün Düzenle** sayfasına getirecektir. **Ürün Seçenekleri** bölümünün altında **Site şablonu** sekmesini bulun ve açılır alandan **Site Şablonu Ata** seçeneğini seçin. Bu, mevcut site şablonlarının listesini getirecek ve ürüne özel yalnızca bir site şablonu seçmenize olanak tanıyacaktır.

![Site şablonu ata seçeneği ile ürün site şablonu sekmesi](/img/config/product-site-templates.png)

#### Mod 2: Mevcut Site Şablonlarından Seç

Bu modda, müşterilerinize kayıt sürecinde bir seçim hakkı verirsiniz. Ürün ayarlarında belirlediğiniz farklı site şablonları arasından seçim yapabileceklerdir. Seçilen ürün altında seçebilecekleri site şablonlarını sınırlama seçeneğiniz vardır. Bu, her ürün altında farklı site şablonu setlerine sahip olmanızı sağlar ve bu da daha yüksek fiyatlı bir ürün için farklı işlevleri ve özellikleri vurgulamak için idealdir.

**Ürün Düzenle** sayfasında, **Ürün Seçenekleri** bölümünün altında **Site şablonu** sekmesini bulun ve açılır alandan **Mevcut Site Şablonlarından Seç** seçeneğini seçin. Bu, mevcut site şablonlarının listesini getirecek ve kullanılabilir olmasını istediğiniz site şablonlarını seçmenize olanak tanıyacaktır. Bunu, Davranışını seçerek yapabilirsiniz: Site şablonunun listede yer almasını istiyorsanız **Kullanılabilir**. Site şablonunun seçenek olarak görünmemesini istiyorsanız _**Kullanılamaz**_. Ve listelenen site şablonlarından birinin varsayılan olarak seçili olmasını istiyorsanız **Önceden Seçili**.

![Davranış seçenekleriyle mevcut site şablonlarından seçim](/img/config/product-site-templates.png)

### Varsayılan Mod: Ödeme formunda site şablonu seçimi

Tüm site şablonlarınızın kayıt sırasında kullanılabilir olmasını istiyorsanız veya oluşturduğunuz her ürün altında site şablonları atama veya belirleme gibi ekstra işlerle uğraşmak istemiyorsanız, site şablonu seçimini **Ödeme Formunuz** altında ayarlayabilirsiniz. Bunu yapmak için **Ultimate Multisite > Ödeme Formları** yolunu izlemeniz yeterlidir. Ardından yapılandırmak istediğiniz formun altındaki **Düzenle** seçeneğine tıklayın.

![Ödeme formları listesi sayfası](/img/config/checkout-forms-list.png)

Bu, **Ödeme Formu Düzenle** sayfasını açacaktır. **Şablon Seçimi** alanını bulun ve altındaki **Düzenle** seçeneğine tıklayın.

![Şablon seçimi alanı ile ödeme formu düzenleyicisi](/img/config/checkout-form-editor.png)

Bir modal pencere görünecektir. **Şablon Siteleri** alanının altında kayıt sırasında kullanılabilir olmasını istediğiniz tüm site şablonlarını seçip listeleyebilirsiniz. Burada belirttiğiniz site şablonları, kullanıcının hangi ürünü seçtiğinden bağımsız olarak kullanılabilir olacaktır.

![Ödeme formu düzenleyicisinde şablon siteleri alanı](/img/config/checkout-form-step.png)

### Site Şablonu Seçenekleri

Ultimate Multisite ayarları altında açıp kapatabilceğiniz başka site şablonu işlevleri de mevcuttur.

![Ultimate Multisite ayarlarında site şablonu seçenekleri](/img/config/settings-sites.png)

#### Şablon Değiştirmeye İzin Ver

Bu seçeneği etkinleştirmek, müşterilerinizin hesap ve site oluşturulduktan sonra kayıt sürecinde seçtikleri şablonu değiştirmelerine olanak tanır. Bu, müşteri açısından faydalıdır çünkü ilk seçimlerinin kendi özel ihtiyaçları için en iyisi olmadığını daha sonra fark ettiklerinde şablonu yeniden seçmelerine olanak tanır.

#### Kullanıcıların Sitelerini Şablon Olarak Kullanmalarına İzin Ver

Alt site kullanıcıları kendi sitelerini oluşturmak ve tasarlamak için zaman harcadıkları için, ağınızda başka bir alt site oluştururken bunu klonlayıp mevcut site şablonlarından biri olarak kullanmak isteyebilirler. Bu seçenek bunu başarmalarına olanak tanır.

#### Şablon Çoğaltmasında Medyayı Kopyala

Bu seçeneği işaretlemek, şablon sitesine yüklenen medyayı yeni oluşturulan siteye kopyalar. Bu, her bir planda geçersiz kılınabilir.

#### **Arama Motorlarının Site Şablonlarını Dizine Eklemesini Engelle**

Bu makalede tartışıldığı gibi site şablonları taslak niteliğindedir ancak yine de ağınızın bir parçasıdır; bu da arama motorlarının bunları bulabileceği anlamına gelir. Bu seçenek, arama motorlarının bunları dizine eklemesini engellemek için site şablonlarını gizlemenize olanak tanır.

## Site Şablonlarını Otomatik Ara-ve-Değiştir ile Önceden Doldurma

Ultimate Multisite'ın en güçlü özelliklerinden biri, kayıt formuna isteğe bağlı metin, renk ve seçim alanları ekleme yeteneğidir. Bu verileri yakaladıktan sonra, seçilen site şablonunun belirli bölümlerindeki içeriği önceden doldurmak için kullanabiliriz. Ardından, yeni site yayınlanırken Ultimate Multisite, yer tutucuları kayıt sırasında girilen gerçek bilgilerle değiştirecektir.

Örneğin, kayıt sırasında son kullanıcınızın şirket adını almak ve şirket adını otomatik olarak ana sayfaya koymak istiyorsanız, şablon sitenizin ana sayfasına aşağıdaki görseldeki gibi yer tutucular eklemeniz gerekir (yer tutucular çift süslü parantezlerle çevrili olarak eklenmelidir - {{yer_tutucu_adi}}).

![Süslü parantez içinde yer tutucu metin bulunan ana sayfa](/img/config/site-templates-list.png)

Ardından, bu veriyi yakalamak için ödeme formunuza eşleşen bir kayıt alanı ekleyebilirsiniz:

![Eşleşen kayıt alanı bulunan ödeme formu](/img/config/checkout-form-editor.png)

Müşteriniz daha sonra kayıt sırasında bu alanı doldurabilecektir.

![Müşteri tarafından doldurulan kayıt alanı](/img/config/checkout-form-step.png)

![Kayıt formu önizlemesi](/img/config/checkout-form-editor.png)

Ultimate Multisite daha sonra yer tutucuları müşteri tarafından sağlanan verilerle otomatik olarak değiştirecektir.

![Sitede müşteri verileriyle değiştirilmiş yer tutucular](/img/config/site-templates-list.png)

### "Yer tutucularla dolu şablon" sorununu çözme

Tüm bunlar harika, ancak çirkin bir sorunla karşılaşıyoruz: artık müşterilerimiz tarafından ziyaret edilebilen site şablonlarımız, fazla bir şey anlatmayan çirkin yer tutucularla dolu.

Bunu çözmek için yer tutucular için sahte değerler ayarlama seçeneği sunuyoruz ve müşterileriniz ziyaret ederken şablon sitelerindeki içeriklerini aramak ve değiştirmek için bu değerleri kullanıyoruz.

**Ultimate Multisite > Ayarlar > Siteler** yolunu izleyerek ve ardından kenar çubuğundaki **Yer Tutucuları Düzenle** bağlantısına tıklayarak şablon yer tutucuları düzenleyicisine erişebilirsiniz.

![Siteler ayarları sayfası altındaki yer tutucu ayarları](/img/config/settings-sites.png)

Bu sizi yer tutucu içerik düzenleyicisine götürecektir; burada yer tutucuları ve ilgili içeriklerini ekleyebilirsiniz.

![Şablon yer tutucuları içerik düzenleyicisi](/img/config/settings-sites.png)
