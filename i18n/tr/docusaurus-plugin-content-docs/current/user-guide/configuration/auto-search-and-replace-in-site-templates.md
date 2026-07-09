---
title: Site Şablonlarında Otomatik Ara ve Değiştir
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Site Şablonlarında Otomatik Arama ve Değiştirme (v2)

_**Bu eğitim WP UItimo version 2.x gerektirir.**_

Ultimate Multisite’ın en güçlü özelliklerinden biri, kayıt formuna isteğe bağlı metin, renk ve seçim alanları ekleyebilme olanağıdır. Bu verileri yakaladıktan sonra, seçilen site şablonunun belirli bölümlerindeki içeriği önceden doldurmak için kullanabiliriz. Ardından, yeni site yayımlandığında, Ultimate Multisite yer tutucuları kayıt sırasında girilen gerçek bilgilerle değiştirir.

Örneğin, şablon sitelerinizi yer tutucularla oluşturabilirsiniz. Yer tutucular çift süslü parantezlerle çevrelenmiş olarak eklenmelidir - {{placeholder_name}}.

Ardından, bu veriyi yakalamak için eşleşen bir kayıt alanı eklemeniz yeterlidir

Müşteriniz daha sonra kayıt sırasında bu alanı doldurabilir.

Ultimate Multisite daha sonra yer tutucuları müşteri tarafından sağlanan verilerle otomatik olarak değiştirir.

## **"yer tutucularla dolu şablon" sorununu çözme**

Bunların hepsi harika, ancak çirkin bir sorunla karşılaşırız: artık müşterilerimiz tarafından ziyaret edilebilen site şablonlarımız, pek bir şey anlatmayan çirkin yer tutucularla doludur.

Bunu çözmek için, yer tutucular için sahte değerler ayarlama seçeneği sunuyoruz ve müşterileriniz ziyaret ederken şablon sitelerdeki içeriklerini aramak ve değiştirmek için bu değerleri kullanıyoruz.

Şablon yer tutucuları düzenleyicisine **Ultimate Multisite > Ayarlar > Siteler** bölümüne giderek, Site Şablonu Seçenekleri alanına kaydırarak ve ardından **Yer Tutucuları Düzenle** bağlantısına tıklayarak erişebilirsiniz.

![Siteler ayarları sayfasındaki Site Şablonu Seçenekleri alanı](/img/config/settings-sites-templates-section.png)

Bu sizi yer tutucuların içerik düzenleyicisine götürür; burada yer tutucuları ve ilgili içeriklerini ekleyebilirsiniz.

![Şablon yer tutucuları düzenleyicisi giriş noktası](/img/config/settings-sites-templates-section.png)
