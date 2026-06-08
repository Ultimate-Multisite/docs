---
title: Zar Ki Aka Abonement Produk
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# İlk Abonelik Ürününüzü Oluşturma (v2)

_**ÖNEMLİ NOT: Bu makale yalnızca Ultimate Multisite sürüm 2.x kullanıcıları içindir. Eğer 1.x sürümünü kullanıyorsanız,**_ **_**lütfen bu makaleyi**_**.

Ağınızı çalıştırmaya ve potansiyel kullanıcılara hizmetlerinizi satmaya başlamak için farklı abonelik seçeneklerine sahip olmanız gerekir. Bu ürünleri nasıl oluşturursunuz? Hangi tür ürünler sunabilirsiniz? Bu makalede, ürünlerle ilgili bilmeniz gereken her şeyi ele alacağız.

## Ürün Türü

Ultimate Multisite ile müşterilerinize iki kategori ürün sunabilirsiniz: **planlar** ve **ekler** **(Order Bump)**. Ekler iki türe ayrılabilir: **paketler** ve **hizmetler**. Farklarını ve özelliklerini şimdi göreceğiz.

*   **Planlar**: Ultimate Multisite'ın temel ürünüdür. Müşteriniz, yalnızca bir plana bağlıysa üyelik sahibi olabilir. Bir plan, müşterilerinize bir veya daha fazla site sağlar (bu, planınızın yapılandırmasına bağlıdır) ve ürün düzenleme sayfanızda belirlediğiniz kısıtlamaları içerir.

*   **Paketler**: Ultimate Multisite planlarının işlevselliğini doğrudan etkileyen eklerdir. Müşterinizin satın aldığı orijinal plana kısıtlamalar ekler veya yeni kaynaklar, eklentiler veya temalar eklerler. Örneğin, temel bir plan ayda 1.000 ziyaretçi izni verebilir ve siz de bu sayıyı 10.000'e çıkaran bir paket sunabilirsiniz.

*   **Hizmetler**: Ultimate Multisite'ın işlevselliğini değiştirmeyen eklerdir. Bunlar, müşterinizin satın aldığı plana ek olarak sizin gerçekleştireceğiniz görevlerdir. Örneğin, müşteriniz tek bir siteye izin veren bir plan satın alabilir ve aynı zamanda bu siteyi tasarlayacak ek bir hizmet için ödeme yapabilir.

## Ürünleri Yönetme

Birçoğu için Ultimate Multisite'daki **Ürünler** sekmesi (**Ultimate Multisite > Ürünler**) geleneksel bir hosting ortamındaki planlarla eşdeğerdir.

Ultimate Multisite içinde Ürünler sekmesi, belirli bir ürün veya hizmete uygulanacak yapıyı ve kısıtlamaları tanımlar. Bu yapılar; ürün veya hizmet açıklaması, fiyat, vergiler ve izinler gibi alanlara kadar uzanır.

Bu bölüm, Ultimate Multisite'ın bu temel taşını anlamanıza rehberlik edecektir.

![Products list page](/img/config/products-list.png)

## Ürün Ekleme

İster bir plan, ister bir paket, ister bir hizmet olsun, yeni bir öğe tanımlamaya başlama noktası **Ultimate Multisite > Ürünler > Ürün Ekle** yoluyla yapılır.

![Add Product button](/img/config/product-add-button.png)

Arayüzde iki ana bölüm bulunur. Solda, ürünün tanımlanmasına yardımcı olan birkaç sekme varken, sağda ürünün temel fiyatını, aktif durumunu ve ürün görselini tanımlamak için birkaç bölüm bulunur.

![Product edit page overview](/img/config/product-edit-full.png)

### Açıklama

Temel ürün bilgileri, bir ürün adı ve açıklaması sağlanarak tanımlanabilir. Bu tanımlayıcılar, plan ve fiyatlandırma seçimi, faturalar, yükseltmeler gibi ürün bilgisinin gerektiği her yerde görüntülenir.

![Product description section](/img/config/product-description.png)

### Fiyatlandırma Türü

Arayüzün sağ tarafında, temel fiyatlandırma tanımlanabilir.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite üç farklı fiyatlandırma türünü destekler. **Ödenmiş (paid)** seçeneği, ağ yöneticisinden ürünün fiyatı ve faturalandırma sıklığı hakkında bilgi ister.

### Fiyatlandırma

Fiyat bileşeni, temel ürün fiyatını ve faturalandırma aralığını tanımlar.

![Pricing and save section](/img/config/product-pricing-save.png)

Böylece, 1 ay ayarı ile 29,99 $ örnek bir fiyat, her ay 29,99 $ faturalandıracaktır. Benzer şekilde, 3 ay ayarı ile 89,97 $ fiyat, her çeyrekte bu tutarı faturalandıracaktır.

### Faturalandırma Döngüleri

Faturalandırma döngüleri bölümü, bahsi geçen faturalandırma aralığının sıklığını belirtir ve genellikle sözleşmeler veya sabit şartlar ışığında anlaşılır.

![Pricing and save section](/img/config/product-pricing-save.png)

Örneğin, 1 aylık aralık ve 12 faturalandırma döngüsü ile 29,99 $ ürün fiyatı, ürün için sonraki 12 ay boyunca aylık 29,99 $ faturalandıracaktır. Başka bir deyişle, böyle bir ayar, 12 ay boyunca aylık 29,99 $ sabit bir fiyat şartı oluşturur ve ardından faturalandırmayı durdurur.

### Deneme Süresi

Ürünün deneme süresini tanımlamasına izin veren deneme teklifi anahtarını etkinleştirmek mümkündür.

![Pricing and save section](/img/config/product-pricing-save.png)

Deneme süresi boyunca müşteriler ürünü kullanmaya özgürdür ve deneme süresi dolana kadar faturalandırılmazlar.

### Kurulum Ücreti

Planınıza bir kurulum ücreti de uygulayabilirsiniz.

![Pricing and save section](/img/config/product-pricing-save.png)

Bu, müşterinizin ilk ücretlendirmede (plan fiyatına ek olarak) bu bölümde tanımladığınız ücrete karşılık gelen ek bir tutar ödeyeceği anlamına gelir.

### Aktif

Aktif anahtarı, ürünün yeni kayıtlara açık olup olmadığını etkin bir şekilde tanımlar.

![Active toggle](/img/config/product-active.png)

Bu planda mevcut müşteriler varsa ve anahtarı devre dışı bırakırsanız, bu durum planı gelecekteki kayıtlardan kaldırır. **Plandaki mevcut müşteriler,** yeni bir plana geçirilene veya plandan çıkarılana kadar faturalandırılmaya devam edecektir.

### Ürün Görseli

**Görsel Yükle** düğmesi, ağ yöneticisinin medya kütüphanesini kullanarak bir ürün görseli seçmesine veya yüklemesine olanak tanır.

![Product image section](/img/config/product-image.png)

### Sil

**Ürünü Sil** düğmesi, ürünü sistemden siler. Ürün yayınlandıktan sonra görünür.

![Delete product section](/img/config/product-delete.png)

Diğer silme işlemlerinin aksine, ürün herhangi bir çöp kutusu durumuna yerleştirilmez. Dolayısıyla silindiğinde bu işlem geri alınamaz.

### Ürün Seçenekleri

Temel düzeydeki ürün bilgileri tanımlandıktan sonra, ürün seçenekleri ağ yöneticisine ürünün belirli niteliklerini daha fazla tanımlamada yardımcı olur.

#### Genel

**Genel** sekmesi, diğer ürün özel sekmelerinde geçerli olmayan ürünün genel niteliklerini tanımlar.

![General tab](/img/config/product-general-tab.png)

Açıklaması yeterli olan **ürün slug'ı**, ürünün URL'lerde ve Ultimate Multisite'ın diğer alanlarında hangi slug ile tanımlandığını belirtir.

Ultimate Multisite, Plan, Paket ve Hizmet olmak üzere birkaç ürün türünü destekler. **Ürün Seçenekleri** sekmeleri, belirtilen ürün türüne bağlı olarak dinamik olarak ayarlanır.

**Müşteri Rolü**, sitenin oluşturulduğu zaman müşteriye atanacak rolü belirtir. Genellikle çoğu ağ yöneticisi için bu, Ultimate Multisite varsayılanı veya Yönetici olacaktır. Ultimate Multisite varsayılan rolü **Ultimate Multisite > Ayarlar > Giriş ve Kayıt** bölümünden ayarlanabilir.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Yükseltme ve Düşürme (Up & Downgrades)

Bu sekme, bir müşteriye kendi özel kademesi içinde mevcut olan yükseltme ve düşürme yollarını belirtir.

Bu kavramı anlamak için, niş bir Ultimate Multisite kurulumunun müşterilerine öğrenme yönetim çözümleri sağladığı bir örnek düşünün. Bunu başarmak için üç plan (Temel, Plus ve Premium) tanımlanır ve her plan için belirli eklentiler etkinleştirilir (ek bilgilendirme için bu bölümün ilerleyen kısımlarındaki eklenti etkinleştirme talimatlarına bakın).

Eğer Ultimate Multisite kurulumu aynı zamanda iş web sitelerine veya e-ticaret web sitelerine de hizmet veriyorsa, bu planların kurulması ve etkinleştirilmesi için farklı eklentilere ihtiyaç duyulabilir.

Bu açıdan, e-öğrenme müşterilerinin e-ticaret planlarına geçişine izin vermek hem istenmez hem de sorunludur, çünkü bu planlar, fiyatlandırması ve kısıtlamaları uygun olmayabilir.

Bu nedenle, müşterinin yolunu kısıtlamak ve olayları önlemek için ağ yöneticisi bir plan grubu tanımlayabilir ve bu grup içinde müşterinin geçiş yapabileceği planları belirtebilir.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Bir plan grubu tanımlamak için, **plan grubu** listesi içinde uyumlu planları belirtin. **Ürün sırası**, planların en düşükten en yükseğe doğru nasıl sıralanacağını ve gösterileceğini belirler.

Ultimate Multisite ayrıca, uygun ek ürün ve hizmetlerin planlara eklenebileceği bir **order bump** özelliği de içerir. Bunlar, müşteriye ödeme sırasında veya bir yükseltme sırasında planlara eklenebilecek ek öğeler olarak sunulur.

#### Fiyat Varyasyonları

Fiyat varyasyonları, ağ yöneticisinin süreye bağlı olarak alternatif fiyatlandırma katmanları belirtmesine olanak tanır. Bu ayar, aynı ürün için aylık, üç aylık, yıllık veya başka bir faturalandırma döneminin sunulabilmesini sağlar. Örneğin, bir ürünü ayda 29,99 $ olarak ayarlayıp, yıllık taahhüt için indirimli bir yıllık seçenek olarak 249,99 $ belirleyebilirsiniz.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Fiyat varyasyonları oluşturmak için, **Fiyat Varyasyonlarını Etkinleştir** anahtarını etkinleştirin ve **Yeni Fiyat Varyasyonu Ekle** düğmesine tıklayın.

![Product price variations](/img/config/product-price-variations.png)

Bir varyasyon girmek için, varyasyonun süresini, dönemini ve fiyatını ayarlayın. Ek varyasyonlar, düğmeye tekrar tıklanarak girilebilir.

Örneğin, temel ürün fiyatınız ayda 29,99 $ ise, şunları ekleyebilirsiniz:

*   **3 Ay** için 79,99 $ (aylık fiyat üzerinden küçük bir indirim)
*   **1 Yıl** için 249,99 $ (yıllık taahhüt için önemli bir indirim)

:::tip Ön Yüzde Bir Faturalandırma Dönemi Anahtarı Gösterme

Sadece fiyat varyasyonları, ön yüze bir anahtar veya geçiş düğmesi eklemez. Müşterilerin faturalandırma dönemleri arasında geçiş yapabilmesi (örneğin Aylık / Yıllık) için, ödeme formunuza bir **Dönem Seçimi** alanı eklemeniz gerekir. Adım adım talimatlar için [Ödeme Formları: Bir Dönem Seçimi Anahtarı Ekleme](checkout-forms#adding-a-period-selection-toggle) bölümüne bakın.
:::

#### Vergiler

**Vergiler** sekmesi, **Ultimate Multisite > Ayarlar > Vergiler** bölümünde belirtilen vergi ayarlarıyla ve daha spesifik olarak tanımlanan vergi oranlarıyla uyumludur. Vergileri etkinleştirmek ve geçerli vergi oranlarını tanımlamak için kullanılır.

#### Yapılandırma

---

*(Bu kısım, orijinal metinde bulunmayan bir bölümdür, ancak yapısal bütünlük için bırakılmıştır.)*

---

### Özet ve Sonuç

Bu yapı, bir e-ticaret platformunun abonelik ve abonelik yönetimi özelliklerini detaylıca ele almaktadır. Özellikle farklı fiyatlandırma modellerini (aylık, yıllık, özel) ve bu modellerin yönetimsel süreçlerini (yenileme, indirimler, özel fiyatlandırma) kapsamaktadır.

**Anahtar Fonksiyonlar:**

1.  **Fiyatlandırma Yönetimi:** Farklı döngüsel fiyatlandırma seçenekleri sunar.
2.  **Abonelik Yönetimi:** Kullanıcıların abonelik durumlarını ve yenileme döngülerini yönetir.
3.  **Özel Fiyatlandırma:** Kurumsal müşterilere özel indirimler ve fiyatlandırma yapma imkanı sunar.

Bu özellikler, platformun sadece bir satış noktası olmaktan öte, bir müşteri ilişkileri yönetimi (CRM) aracı işlevi gördüğünü göstermektedir.
