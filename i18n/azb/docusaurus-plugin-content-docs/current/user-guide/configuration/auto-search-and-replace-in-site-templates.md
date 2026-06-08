---
title: Avtomatiko Aram ve Değiştirme Site Şablonlarında
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Site Şablonlarında Otomatik Arama ve Değiştirme (v2)

_**Bu eğitim için WP UItimo sürüm 2.x gereklidir.**_

Ultimate Multisite'ın en güçlü özelliklerinden biri, kayıt formuna keyfi metin, renk ve seçilebilir alanlar ekleyebilmenizdir. Bu verileri yakaladıktan sonra, bu verileri seçilen site şablonlarının belirli kısımlarındaki içeriği doldurmak için kullanabiliriz. Ardından, yeni site yayınlandığında, Ultimate Multisite yer tutucuları (placeholder) kayıt sırasında girilen gerçek bilgilerle değiştirecektir.

Örneğin, şablon sitelerinizi yer tutucularla hazırlayabilirsiniz. Yer tutucular çift süslü parantezlerle - {{yer_tutucu_adı}} - çevrili olarak eklenmelidir.

Daha sonra, bu veriyi yakalamak için eşleşen bir kayıt alanı ekleyebilirsiniz.

Müşteriniz bu şekilde kayıt sırasında o alanı doldurabilecektir.

Ultimate Multisite de bu durumda yer tutucuları otomatik olarak müşterinin sağladığı verilerle değiştirecektir.

## **"Yer Tutucu Dolu Şablon" sorununu çözmek**

Bütün bunlar harika, ancak karşılaştığımız çirkin bir sorun var: Müşterilerimizin ziyaret edebileceği site şablonlarımız, çok fazla ve pek bir şey anlatmayan çirkin yer tutucularla dolu.

Bunu çözmek için, yer tutucular için sahte değerler belirleme seçeneği sunuyoruz ve bu değerleri, müşterileriniz siteyi ziyaret ederken şablon sitelerindeki içeriklerini arayıp değiştirmek için kullanıyoruz.

Yer tutucu düzenleyicisine **Ultimate Multisite > Ayarlar > Siteler** yolunu izleyerek ve ardından kenar çubuğunda (sidebar) Edit Placeholders bağlantısına tıklayarak ulaşabilirsiniz.

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

Bu sizi yer tutucuların içerik düzenleyicisine götürecek, burada yer tutucuları ve bunlara ait içerikleri ekleyebilirsiniz.

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
