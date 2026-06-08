---
title: Site Templates
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# Site Templates (v2)

_**NOT: Bu makale Ultimate Multisite versiyon 2.x'i ele alıyor. Eğer 1.x versiyonunu kullanıyorsanız,**_ **bu makaleye bakın.**_

Ultimate Multisite ile premium bir ağ oluştururken amacımız, müşterilerimize web siteleri oluştururken esneklik ve farklı seçenekler sunarken, mümkün olduğunca çok süreci otomatik hale getirmek. Bu dengeyi sağlamanın kolay bir yolu da Ultimate Multisite Site Templates özelliğinden yararlanmaktır.

## Site Template Nedir?

Adından da anlaşılacağı gibi, Site Template, ağınızda yeni siteler oluşturulurken temel olarak kullanılabilecek bir şablon sitedir.

Bu şu anlama gelir: Bir temel site oluşturabilir, farklı plugin'leri etkinleştirebilir, aktif bir tema belirleyebilir ve istediğiniz gibi özelleştirebilirsiniz. Ardından, müşteriniz yeni bir hesap oluşturduğunda, içinde anlamlı içerik olmayan varsayılan bir WordPress sitesi almak yerine, tüm özelleştirmeler ve içerikler zaten yerleştirilmiş temel sitenizin bir kopyasını alacaktır.

Bu harika geliyor, ama yeni bir site template nasıl oluştururum? Yapması mümkün olduğunca basit.

## Site Template Oluşturma ve Düzenleme

Site Templates, ağınızdaki normal sitelerdir. Yeni bir şablon oluşturmak için sadece **Network Admin > Ultimate Multisite > Sites > Add Site** yolunu izleyebilirsiniz.

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Bu, **Site title, Site Domain/path** ve **Site type** bilgilerini isteyen bir modal pencere açacaktır. **Site Type** açılır menüsünde **Site Template** seçtiğinizden emin olun.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Ayrıca site template açıklamasını da görebilirsiniz:

![Site template description](/img/config/site-template-description.png)

Formun en altında bir **Copy Site** açma/kapama düğmesi göreceksiniz. Bu, sıfırdan bir site template oluşturmak yerine, mevcut bir site template'ini başlangıç noktası olarak kullanarak yeni bir site template oluşturmanıza olanak tanır ve bu sayede zaman kazanmanıza yardımcı olur.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Site Template İçeriğini Özelleştirme

Site template'inizi özelleştirmek için, sadece onun dashboard paneline gidip ihtiyacınız olan değişiklikleri yapmanız yeterlidir. Yeni gönderiler, sayfalar oluşturabilir, plugin'leri etkinleştirebilir ve aktif temayı değiştirebilirsiniz. Hatta Customizer'a giderek her türlü özelleştirme seçeneğini değiştirebilirsiniz.

![Site template edit interface](/img/config/site-template-edit.png)

Bu verilerin tamamı, bir müşteri bu Site Template'i temel alarak yeni bir site oluşturduğunda kopyalanacaktır.

### Gelişmiş Seçenekler

Eğer biraz özel kodlama bilginiz varsa, oluşturulduktan sonra yeni sitedeki bilgileri otomatik olarak değiştirmek için Search and Replace API'mizi kullanabilirsiniz. Bu, Hakkımızda sayfasındaki şirket adlarını değiştirmek, İletişim sayfasındaki e-posta adresini değiştirmek gibi şeyler için kullanışlıdır.

### Site Templates Kullanma

Tamam, farklı tasarımlar, temalar ve ayarlar içeren bir sürü Site Template oluşturdunuz. Peki, bunları ağınızda nasıl kullanışlı hale getireceksiniz?

Temelde kullanabileceğiniz iki yaklaşım var (aynı anda değil):

*   Her Planınıza bir Site Template atamak

**VEYA**

*   Müşterilerinizin kayıt sırasında site template'lerini kendilerinin seçmesine izin vermek.

#### Mod 1: Site Template Atama

Bu modda, müşterileriniz hesap oluştururken bir template seçemeyecek, bunun yerine hangi template'in hangi Planınızda kullanılacağını siz belirleyeceksiniz.

Bunu yapmak için **Ultimate Multisite > Products > Edit** yolunu izlemeniz gerekecek.

![Edit product to assign site template](/img/config/product-site-templates.png)

Bu sizi **Edit Product** sayfasına götürecektir. **Product Options** bölümünde, **Site template** sekmesini bulun ve açılır menüden **Assign Site** **Template** seçeneğini seçin. Bu, mevcut site template'lerinin listesini gösterecek ve ürüne özel sadece bir site template seçmenize olanak tanıyacaktır.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mod 2: Seçilebilir Site Template

Bu modda, müşterilerinize kayıt sırasında bir seçim hakkı vereceksiniz. Ürün ayarları altında tanımladığınız farklı site template'lerinden seçim yapabilecekler. Seçilen ürün altında hangi site template'lerinden seçim yapabileceklerini sınırlama seçeneğiniz de var. Bu, farklı işlevleri ve özellik setlerini vurgulamak istediğiniz daha yüksek fiyatlı bir ürün için idealdir.

**Edit Product** sayfasında. **Product Options** bölümünde, **Site template** sekmesini bulun ve açılır menüden **Choose Available Site Template** seçeneğini seçin. Bu, mevcut site template'lerinin listesini gösterecek ve kullanıma sunulmasını istediğiniz site template'ini seçmenize olanak tanıyacaktır. Bunu, site template'inin listede görünmesini istiyorsanız Davranış (Behavior) olarak: **Available** seçerek yapabilirsiniz. Site template'inin seçenek olarak görünmesini istemiyorsanız **Not Available** seçeneğini kullanın. Ve listelenen site template'lerinden birinin varsayılan olarak seçili olmasını istiyorsanız **Pre-selected** seçeneğini kullanın.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Varsayılan Mod: Ödeme Formunda Site Template Seçimi

Tüm site template'lerinizin kayıt sırasında kullanıma açık olmasını istiyorsanız, veya oluşturduğunuz her ürün altında site template atama veya belirtme gibi ek bir uğraş istemiyorsanız. O zaman site template seçimini doğrudan **Checkout Form**'unuzdan ayarlayabilirsiniz. Bunun için sadece **Ultimate Multisite > Checkout Forms** yolunu izlemeniz yeterli. Ardından yapılandırmak istediğiniz formun altında **Edit** düğmesine tıklayın.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Bu, **Edit Checkout Form** sayfasına götürecektir. **Template Selection** alanını bulun ve altında **Edit** düğmesine tıklayın.

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

Bir modal pencere açılacaktır. **Template Sites** alanının altında, kayıt sırasında kullanıma açık olmasını istediğiniz tüm site template'lerini seçip listeleyebilirsiniz. Buradan belirttiğiniz site template'leri, kullanıcının hangi ürünü seçtiğinden bağımsız olarak kullanıma açık olacaktır.

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Site Template Seçenekleri

Ultimate Multisite ayarları altında açıp kapatabileceğiniz başka site template işlevleri de bulunmaktadır.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Template Değiştirilmesine İzin Ver

Bu seçeneği etkinleştirmek, müşterilerinizin hesap ve site oluşturulduktan sonra kayıt sırasında seçtikleri template'i değiştirmesine olanak tanır. Bu, bir müşteri açısından kullanışlıdır çünkü daha sonra orijinal seçimlerinin kendi özel ihtiyaçları için en iyi olmadığını fark ederse bir template yeniden seçmesine izin verir.

#### Kullanıcıların Site'lerini Template Olarak Kullanmasına İzin Ver

Alt site kullanıcıları kendi sitelerini inşa etmek ve tasarlamak için zaman harcadıkları için, ağınızda başka bir alt site oluştururken kullanılabilecek site template'lerinden biri olarak bunu klonlayıp kullanmak isteyebilirler. Bu seçenek onlara bunu yapma imkanı sağlayacaktır.

#### Template Çoğaltılırken Medya Kopyalama

Bu seçeneği işaretlemek, template sitede yüklenen medyayı yeni oluşturulan siteye kopyalayacaktır. Bu, her bir planda geçersiz kılınabilir.

#### **Arama Motorlarının Site Template'lerini Dizine Eklemesini Önle**

Bu makalede tartışıldığı gibi site template'leri temel şablonlar olsa da yine ağınızın bir parçasıdır ve bu nedenle arama motorları tarafından bulunabilir durumdadır. Bu seçenek, site template'lerini gizleyerek arama motorlarının bunları dizine eklemesini engelleyecektir.

## Site Template'leri Otomatik Arama-Değiştir ile Ön Doldurma

Ultimate Multisite'ın en güçlü özelliklerinden biri, kayıt formuna keyfi metin, renk ve seçili alanlar ekleyebilme yeteneğidir. Bu verileri yakaladığımızda, seçilen site template'inin belirli kısımlarındaki içeriği önceden doldurmak için kullanabiliriz. Ardından, yeni site yayınlanırken, Ultimate Multisite yer tutucuları (placeholders) kayıt sırasında girilen gerçek bilgilerle değiştirecektir.

Örneğin, kayıt sırasında son kullanıcının şirket adını alıp, bu şirket adını otomatik olarak ana sayfada göstermek isterseniz. Template sitenizin ana sayfasında, aşağıdaki görseldeki gibi yer tutucuları eklemeniz gerekir (yer tutucular çift süslü parantezlerle - {{placeholder_name}} çevrili olmalıdır).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Ardından, bu veriyi yakalamak için ödeme formunuza eşleşen bir kayıt alanı ekleyebilirsiniz:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

Müşteriniz o zaman bu alanı kayıt sırasında doldurabilecektir.

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite daha sonra yer tutucuları otomatik olarak müşteri tarafından sağlanan verilerle değiştirecektir.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "Yer Tutucu Dolu Template" Sorununu Çözme

Bunların hepsi harika, ancak karşılaştığımız çirkin bir sorun var: şimdi site template'lerimiz - müşterilerimizin ziyaret edebileceği - çok fazla ve pek bir şey anlatmayan çirkin yer tutucu ile dolu.

Bunu çözmek için, yer tutucular için sahte değerler belirleme seçeneği sunuyoruz ve müşterileriniz ziyaret ederken bu değerleri kullanarak template sitelerindeki içeriklerini arayıp değiştiriyoruz.

Template yer tutucularının düzenleyicisine **Ultimate Multisite > Settings > Sites** yolunu izleyerek ve ardından kenar çubuğunda **Edit Placeholders** bağlantısına tıklayarak ulaşabilirsiniz.

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

Bu sizi yer tutucuların içerik düzenleyicisine götürecek, burada yer tutucuları ve ilgili içeriklerini ekleyebilirsiniz.

![Template placeholders content editor](/img/config/settings-sites.png)
