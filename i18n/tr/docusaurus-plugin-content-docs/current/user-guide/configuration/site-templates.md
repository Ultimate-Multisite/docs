---
title: Site Şablonları
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Şablonları (v2)

_**NOT: Bu makale Ultimate Multisite sürüm 2.x ile ilgilidir. Sürüm 1.x kullanıyorsanız,**_ **bu makaleye bakın** _**.**_

Ultimate Multisite ile premium bir ağ oluştururken hedefimiz, müşterilerimize web sitelerini oluştururken esneklik ve aralarından seçim yapabilecekleri farklı seçenekler sunarken mümkün olduğunca çok süreci otomatikleştirmektir. Bu dengeyi sağlamanın kolay bir yolu, Ultimate Multisite Site Şablonları özelliğinden yararlanmaktır.

## Site Şablonu nedir? {#what-is-a-site-template}

Adından da anlaşılacağı gibi, Site Şablonu, ağınızda yeni siteler oluşturulurken temel olarak kullanılabilen hazır bir sitedir.

Bu, bir temel site oluşturabileceğiniz, farklı pluginleri etkinleştirebileceğiniz, etkin bir theme ayarlayabileceğiniz ve onu istediğiniz şekilde özelleştirebileceğiniz anlamına gelir. Ardından, müşteriniz yeni bir account oluşturduğunda, içinde anlamlı içerik olmayan varsayılan bir WordPress sitesi almak yerine, tüm özelleştirmeleri ve içerikleri zaten yerinde olan temel sitenizin bir kopyasını alır.

Kulağa harika geliyor, peki yeni bir site şablonunu nasıl oluştururum? Olabileceği kadar basittir.

## Yeni bir Site Şablonu Oluşturma ve Düzenleme {#creating-and-editing-a-new-site-template}

Site Şablonları, ağınızdaki normal sitelerden ibarettir. Yeni bir şablon oluşturmak için basitçe **Ağ Yöneticisi > Ultimate Multisite > Siteler > Site Ekle** bölümüne gidebilirsiniz.

**![Siteler listesi sayfasındaki site ekle düğmesi](/img/config/site-templates-list.png)**

Bu, **Site başlığı, Site domaini/yolu** ve **Site türü** için soracağı bir modal pencere açacaktır. **Site Türü** açılır alanının altında **Site Şablonu** seçtiğinizden emin olun *.*

_![Site türü açılır menüsü olan site şablonu ekleme modali](/img/config/site-templates-list.png)_

Şablonun neler içerdiğini açıklamak için müşteriye yönelik bir açıklama da ekleyebilirsiniz:

![Site şablonu düzenleme ekranındaki site şablonu açıklama alanı](/img/config/site-template-edit-description.png)

Formun alt kısmında bir **Siteyi Kopyala** açma/kapama anahtarı göreceksiniz. Bu, sıfırdan bir site şablonu oluşturmak yerine zamandan tasarruf etmenize yardımcı olmak için başlangıç noktanız olarak mevcut bir site şablonuna dayalı yeni bir site şablonu oluşturmanıza olanak tanır.

![Site kopyalama anahtarı olan site şablonu ekleme modali](/img/config/site-templates-list.png)

### Bir Site Şablonunun içeriklerini özelleştirme {#customizing-the-contents-of-a-site-template}

Site şablonunuzu özelleştirmek için basitçe dashboard paneline gidin ve ihtiyaç duyduğunuz değişiklikleri yapın. Yeni gönderiler, sayfalar oluşturabilir, pluginleri etkinleştirebilir ve etkin theme’i değiştirebilirsiniz. Hatta Özelleştirici’ye gidip her türlü özelleştirme seçeneğini değiştirebilirsiniz.

![Site şablonu düzenleme arayüzü](/img/config/site-template-edit.png)

Bir müşteri bu Site Şablonuna dayalı yeni bir site oluşturduğunda tüm bu veriler kopyalanacaktır.

### Gelişmiş Seçenekler {#advanced-options}

Özel kodlama konusunda yolunuzu biliyorsanız, yeni site oluşturulduktan sonra üzerindeki bilgileri otomatik olarak değiştirmek için Arama ve Değiştirme API’mizi kullanabilirsiniz. Bu, Hakkında sayfasındaki şirket adlarını değiştirmek, İletişim sayfasındaki iletişim e-postasını değiştirmek vb. şeyler için kullanışlıdır.

### Site Şablonlarını Kullanma {#using-site-templates}

Tamam, farklı tasarımlar, themeler ve ayarlarla bir sürü farklı Site Şablonu oluşturdunuz. Şimdi bunları ağınızda nasıl kullanışlı hale getirirsiniz?

Temel olarak, artık kullanabileceğiniz iki yaklaşım vardır (aynı anda değil):

  * Planlarınızın her birine bir Site Şablonu eklemek

**VEYA**

  * Müşterilerinizin kayıt sırasında site şablonlarını kendilerinin seçmesine izin vermek.

#### Mod 1: Site Şablonu Ata {#mode-1-assign-site-template}

Bu modda, müşterileriniz bir account oluşturduklarında şablon seçemez; bunun yerine, Planlarınızın her birinde hangi şablonun kullanılacağını siz tanımlarsınız.

Bunu yapmak için **Ultimate Multisite > Ürünler > Düzenle** bölümüne gitmeniz gerekir.

![Site şablonu atamak için ürünü düzenle](/img/config/product-site-templates.png)

Bu sizi **Ürünü Düzenle** sayfasına götürür. **Ürün Seçenekleri** bölümünün altında **Site şablonu** sekmesini bulun ve açılır alandan **Site Şablonu Ata** seçeneğini seçin. Bu, mevcut site şablonlarının listesini getirir ve ürüne adanmış yalnızca bir site şablonu seçmenize olanak tanır.

![Site şablonu ata seçeneği olan ürün site şablonu sekmesi](/img/config/product-site-templates.png)

#### Mod 2: Kullanılabilir Site Şablonunu Seç {#mode-2-choose-available-site-template}

Bu modda, kayıt sürecinde müşterilerinize bir seçim hakkı verirsiniz. Ürün ayarları altında tanımladığınız farklı site şablonları arasından seçim yapabilirler. Seçilen ürün altında seçebilecekleri site şablonunu sınırlama seçeneğiniz vardır. Bu, her ürün altında farklı site şablonu setlerine sahip olmanızı sağlar; bu da daha yüksek fiyatlı bir ürün için farklı işlevleri ve özellikleri öne çıkarmak açısından idealdir.

**Ürünü Düzenle** sayfasında. **Ürün Seçenekleri** bölümünün altında **Site şablonu** sekmesini bulun ve açılır alandan **Kullanılabilir Site Şablonunu Seç** seçeneğini seçin. Bu, mevcut site şablonlarının listesini getirir ve kullanılabilir olmasını istediğiniz site şablonunu seçmenize olanak tanır. Bunu Davranışını seçerek yapabilirsiniz: Site şablonunun listeye dahil edilmesini istiyorsanız **Kullanılabilir**. Site şablonunun bir seçenek olarak görünmemesini istiyorsanız _**Kullanılamaz**_. Ve listelenen site şablonlarından birinin varsayılan olarak seçili olmasını istiyorsanız **Önceden seçili**.

![Davranış seçenekleriyle kullanılabilir site şablonlarını seç](/img/config/product-site-templates.png)

### Varsayılan Mod: Checkout formunda site şablonu seçimi {#default-mode-site-template-selection-on-the-checkout-form}

Tüm site şablonlarınızın kayıt sırasında kullanılabilir olmasını istiyorsanız veya belki de oluşturduğunuz her ürün altında site şablonlarını atama ya da belirtme gibi ekstra işler yapmayı tercih etmiyorsanız. O zaman site şablonu seçimini basitçe **Checkout Formunuz** altında ayarlayabilirsiniz. Bunu yapmak için **Ultimate Multisite > Checkout Formları** bölümüne gidin ve yapılandırmak istediğiniz formun altındaki **Düzenle** seçeneğine tıklayın.

Bu, **Checkout Formunu Düzenle** sayfasını getirir. **Şablon Seçimi** alanını bulun ve altındaki **Düzenle** seçeneğine tıklayın.

Bir modal pencere görünecek. **Şablon Siteler** alanı altında, kayıt sırasında kullanılabilir olmasını istediğiniz tüm site şablonlarını seçebilir ve listeleyebilirsiniz. Buradan belirttiğiniz site şablonları, kullanıcı hangi ürünü seçmiş olursa olsun kullanılabilir olacaktır.

![Ödeme formu düzenleyicisindeki şablon seçim alanı](/img/config/checkout-form-template-step.png)

Ön yüzde, müşteriler ödeme sırasında şablon seçiciyi görür ve yeni siteleri için başlangıç tasarımını seçebilir.

![Kayıt sırasında ön yüzde şablon seçici](/img/config/frontend-template-chooser.png)

### Site Şablonu Seçenekleri {#site-template-options}

Ultimate Multisite ayarları altında açıp kapatabileceğiniz başka site şablonu işlevleri de mevcuttur.

![Ultimate Multisite ayarlarındaki site şablonu seçenekleri](/img/config/settings-sites-templates-section.png)

#### Şablon Değiştirmeye İzin Ver {#allow-template-switching}

Bu seçeneği etkinleştirmek, müşterilerinizin hesap ve site oluşturulduktan sonra kayıt sürecinde seçtikleri şablonu değiştirmesine izin verir. Bu, müşterinin bakış açısından faydalıdır; çünkü daha sonra ilk seçimlerinin kendi özel ihtiyaçları için en iyi seçenek olmadığını fark ederlerse yeniden bir şablon seçmelerine olanak tanır.

#### Kullanıcıların Sitelerini şablon olarak kullanmasına izin ver {#allow-users-to-use-their-site-as-templates}

Alt site kullanıcıları kendi sitelerini oluşturmak ve tasarlamak için zaman harcadıklarından, ağınızda başka bir alt site oluştururken bunu klonlamak ve mevcut site şablonlarından biri olarak kullanmak isteyebilirler. Bu seçenek bunu yapmalarına izin verir.

#### Şablon Çoğaltmada Medyayı Kopyala {#copy-media-on-template-duplication}

Bu seçeneği işaretlemek, şablon sitesine yüklenen medyayı yeni oluşturulan siteye kopyalar. Bu, her plan için geçersiz kılınabilir.

#### **Arama Motorlarının Site Şablonlarını indekslemesini önle** {#prevent-search-engines-from-indexing-site-templates}

Bu makalede ele alınan site şablonları başlangıç içerikleridir, ancak yine de ağınızın bir parçasıdır; bu da arama motorlarının bulması için hâlâ erişilebilir olduğu anlamına gelir. Bu seçenek, site şablonlarını gizlemenize olanak tanır, böylece arama motorları onları indeksleyebilir.

## Otomatik arama ve değiştirme ile Site Şablonlarını önceden doldurma {#pre-populating-site-templates-with-auto-search-and-replace}

Ultimate Multisite’ın en güçlü özelliklerinden biri, kayıt formuna isteğe bağlı metin, renk ve seçim alanları ekleyebilme yeteneğidir. Bu verileri yakaladıktan sonra, seçilen site şablonunun belirli bölümlerindeki içeriği önceden doldurmak için kullanabiliriz. Ardından, yeni site yayımlanırken Ultimate Multisite yer tutucuları kayıt sırasında girilen gerçek bilgilerle değiştirir.

Örneğin, kayıt sırasında son kullanıcınızın şirket adını almak ve şirket adını otomatik olarak ana sayfaya koymak istediğinizi varsayalım. Şablon site ana sayfanıza, aşağıdaki görseldeki gibi yer tutucuları eklemeniz gerekir (yer tutucular çift süslü parantezlerle çevrelenerek eklenmelidir - {{placeholder_name}}).

![Süslü parantezler içinde yer tutucu metin bulunan ana sayfa](/img/config/site-templates-list.png)

Ardından, bu veriyi yakalamak için ödeme formunuza eşleşen bir kayıt alanı ekleyebilirsiniz. Şablon seçimi için kullanılan aynı ödeme formu düzenleyicisi, şablon seçicinin yanına özel alanlar yerleştirmenize olanak tanır:

![Ödeme formu düzenleyicisinde şablon seçimi ve kayıt alanları](/img/config/checkout-form-template-step.png)

Müşteriniz daha sonra kayıt sırasında bu alanı doldurabilecektir.

![Şablon seçicili ön yüz ödeme formu](/img/config/frontend-template-chooser.png)

Ultimate Multisite daha sonra yer tutucuları müşteri tarafından sağlanan verilerle otomatik olarak değiştirir.

![Sitede müşteri verileriyle değiştirilmiş yer tutucular](/img/config/site-templates-list.png)

### "Yer tutucularla dolu şablon" sorununu çözme {#solving-the-template-full-of-placeholders-problem}

Bunların hepsi harika, ancak çirkin bir sorunla karşılaşıyoruz: artık müşterilerimiz tarafından ziyaret edilebilen site şablonlarımız, pek bir şey anlatmayan çirkin yer tutucularla dolu.

Bunu çözmek için yer tutucular için sahte değerler belirleme seçeneği sunuyoruz ve müşterileriniz ziyaret ederken şablon sitelerdeki içerikleri arayıp değiştirmek için bu değerleri kullanıyoruz.

Şablon yer tutucuları düzenleyicisine **Ultimate Multisite > Settings > Sites** yoluna giderek ve ardından kenar çubuğunda **Yer Tutucuları Düzenle** bağlantısına tıklayarak erişebilirsiniz.

![Sites ayarları sayfası altındaki site şablonu ayarları](/img/config/settings-sites-templates-section.png)

Bu sizi, yer tutucuları ve ilgili içeriklerini ekleyebileceğiniz yer tutucu içerik düzenleyicisine götürür.

![Şablon yer tutucuları içerik düzenleyicisi giriş noktası](/img/config/settings-sites-templates-section.png)
