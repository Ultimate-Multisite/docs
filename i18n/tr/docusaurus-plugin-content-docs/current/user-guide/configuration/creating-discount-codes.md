---
title: İndirim Kodları Oluşturma
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# İndirim Kodları Oluşturma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x için geçerlidir.**_

Ultimate Multisite ile müşterilerinize aboneliklerinde indirim sunmak için indirim kodları oluşturabilirsiniz. Üstelik bunu yapmak oldukça kolay!

## İndirim Kodları Oluşturma ve Düzenleme

İndirim kodu oluşturmak veya düzenlemek için **Ultimate Multisite > Discount Codes** bölümüne gidin.

![](/img/config/discount-codes-list.png)

Bu sayfada daha önce oluşturduğunuz indirim kodlarının listesini göreceksiniz.

Yeni bir kupon oluşturmak için **Add Discount** **Code** butonuna tıklayabilir ya da mevcut kodların üzerine gelip **Edit** seçeneğine tıklayarak düzenleyebilirsiniz.

![Üzerine gelindiğinde işlem seçenekleri görünen indirim kodları listesi](/img/config/discount-codes-list.png)

![Add Discount Code butonu](/img/config/discount-codes-list.png)

Kupon kodunuzu oluşturacağınız veya düzenleyeceğiniz sayfaya yönlendirileceksiniz. Bu örnekte yeni bir kupon oluşturacağız.

![İndirim kodu düzenleme sayfası](/img/config/discount-codes-list.png)

Şimdi buradaki ayarlara göz atalım:

**Enter Discount Code:** Bu alan sadece indirim kodunuzun adıdır. Müşterilerinizin ödeme formunda kullanacağı kod değildir.

**Description:** Burada bu kuponun ne için olduğunu kısaca açıklayabilirsiniz.

![İndirim kodu adı ve açıklama alanları](/img/config/discount-codes-list.png)

**Coupon code:** Müşterilerinizin ödeme sırasında girmesi gereken kodu burada belirlersiniz.

![Kupon kodu alanı](/img/config/discount-codes-list.png)

**Discount:** Burada indirim kodunuz için **yüzdelik** veya **sabit tutar** olarak indirim miktarı belirleyebilirsiniz.

![Yüzdelik veya sabit tutar indirim ayarı](/img/config/discount-codes-list.png)

**Apply to renewals:** Bu seçenek kapalıysa, indirim kodu yalnızca **ilk ödemeye** uygulanır. Sonraki ödemelerde indirim uygulanmaz. Bu seçenek açıksa, indirim kodu gelecekteki tüm ödemelerde geçerli olur.

**Setup fee discount:** Bu seçenek kapalıysa, kupon kodu siparişin **kurulum ücretine indirim uygulamaz**. Bu seçenek açıksa, planlarınızın kurulum ücretine uygulanacak indirimi (yüzdelik veya sabit tutar) belirleyebilirsiniz.

![Apply to renewals ve setup fee discount seçenekleri](/img/config/discount-codes-list.png)

**Active:** Bu kupon kodunu manuel olarak etkinleştirin veya devre dışı bırakın.

![İndirim kodu için aktif/pasif düğmesi](/img/config/discount-codes-list.png)

**Advanced Optio** **ns** bölümünde şu ayarlar bulunur:

**Limit uses:**

  * **Uses:** İndirim kodunun kaç kez kullanıldığını burada görebilirsiniz.

  * **Max uses:** Kullanıcıların bu indirim kodunu kaç kez kullanabileceğini sınırlar. Örneğin buraya 10 yazarsanız, kupon yalnızca 10 kez kullanılabilir. Bu limite ulaşıldığında kupon kodu artık kullanılamaz.

![Uses ve max uses alanlarını içeren kullanım limiti ayarı](/img/config/discount-codes-list.png)**Start & expiration dates:** Burada kuponunuza başlangıç tarihi ve/veya son kullanma tarihi ekleyebilirsiniz.

![Başlangıç ve son kullanma tarihi alanları](/img/config/discount-codes-list.png)

**Limit products:** **Select products** seçeneğini açarsanız, tüm ürünleriniz görüntülenir. Hangi ürünlerin bu kupon kodunu kabul edeceğini manuel olarak seçebilirsiniz (açıp kapatarak). Burada kapalı olan ürünler için müşterileriniz bu kupon kodunu kullanmaya çalıştığında herhangi bir değişiklik olmaz.

![Ürün limiti seçim düğmeleri](/img/config/discount-codes-list.png)

Tüm bu seçenekleri ayarladıktan sonra **Save Discount Code** butonuna tıklayarak kuponunuzu kaydedin ve işlem tamamdır!

![Save Discount Code butonu](/img/config/discount-codes-list.png)

Kupon artık listenizde görünüyor ve buradan **düzenleyebilir veya silebilirsiniz**.

![Düzenleme ve silme seçenekleriyle birlikte listedeki indirim kodu](/img/config/discount-codes-list.png)

### 

### URL Parametrelerini Kullanma:

Fiyatlandırma tablolarınızı özelleştirmek veya web siteniz için güzel bir kupon kodu sayfası oluşturmak ve indirim kodunu ödeme formunuza otomatik olarak uygulamak istiyorsanız, bunu URL parametreleri ile yapabilirsiniz.

Öncelikle planınızın paylaşılabilir linkini almanız gerekiyor. Bunun için **Ultimate Multisite > Products** bölümüne gidin ve bir plan seçin.

**Click to Copy Shareable Link** butonuna tıklayın. Bu size bu plana özel paylaşılabilir linki verecektir. Bizim örneğimizde verilen paylaşılabilir link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) şeklindeydi_._

![Paylaşılabilir link butonunu içeren ürün sayfası](/img/config/products-list.png)

İndirim kodunuzu bu plana uygulamak için URL'ye **?discount_code=XXX** parametresini eklemeniz yeterlidir. Burada **XXX** kupon kodunuzu temsil eder.

Bu örnekte **50OFF** kupon kodunu bu ürüne uygulayacağız.

50OFF indirim kodu uygulanmış bu plana ait URL şu şekilde görünecektir: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
