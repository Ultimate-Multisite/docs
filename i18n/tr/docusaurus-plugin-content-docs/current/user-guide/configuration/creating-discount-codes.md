---
title: İndirim Kodları Oluşturma
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# İndirim Kodları Oluşturma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümüne aittir.**_

Ultimate Multisite ile müşterilerinize aboneliklerinde indirimler vermek için indirim kodları oluşturabilirsiniz. Üstelik bunları oluşturmak kolaydır!

## İndirim Kodları Oluşturma ve Düzenleme

Bir indirim kodu oluşturmak veya düzenlemek için **Ultimate Multisite > İndirim Kodları** bölümüne gidin.

![Herhangi bir kod mevcut olmadan önce indirim kodları listesi — boş durum](/img/config/discount-codes-empty.png)

Burada daha önce oluşturduğunuz indirim kodlarının bir listesi bulunur.

Yeni bir kupon oluşturmak için **İndirim** **Kodu Ekle** seçeneğine tıklayabilir veya mevcut olanların üzerine gelip **Düzenle** seçeneğine tıklayarak onları düzenleyebilirsiniz.

![Düzenle ve Sil bağlantılarını gösteren üzerine gelme eylemleriyle indirim kodları listesi](/img/config/discount-codes-list-hover.png)

![Sayfa başlığındaki İndirim Kodu Ekle düğmesi](/img/config/discount-codes-add-button.png)

Kupon kodunuzu oluşturacağınız veya düzenleyeceğiniz sayfaya yönlendirileceksiniz. Bu örnekte yeni bir tane oluşturacağız.

![Tüm bölümleri görünür olan indirim kodu düzenleme sayfası](/img/config/discount-code-edit.png)

Burada bulunan ayarlara bir göz atalım:

**İndirim Kodunu Girin:** Bu yalnızca indirim kodunuzun adıdır. Müşterilerinizin ödeme formunda kullanması gereken kod bu değildir.

**Açıklama:** Burada bu kuponun ne için olduğunu kısaca açıklayabilirsiniz.

![Düzenleme sayfasının üst kısmındaki indirim kodu adı ve açıklama alanları](/img/config/discount-code-description.png)

İndirim kodunu aktif veya pasif olarak da görüntüleyebilirsiniz:

![İndirim kodu aktif durumu](/img/config/discount-code-active.png)

**Kupon kodu:** Müşterilerinizin ödeme sırasında girmesi gereken kodu burada tanımlarsınız.

![Müşterilerin ödeme sırasında kodu girdiği kupon kodu alanı](/img/config/discount-code-coupon-field.png)

**İndirim:** Burada indirim kodunuz için bir **yüzde** veya **sabit tutar** belirleyebilirsiniz.

![Yüzde veya sabit tutar açılır menüsüyle indirim tutarı ayarı](/img/config/discount-code-amount.png)

**Yenilemelere uygula:** Bu seçenek kapalıysa bu indirim kodu yalnızca **ilk ödemeye** uygulanır. Diğer tüm ödemelerde indirim olmaz. Bu seçenek açıksa indirim kodu gelecekteki tüm ödemeler için geçerli olur.

**Kurulum ücreti indirimi:** Bu seçenek kapalıysa kupon kodu siparişin kurulum ücreti için **herhangi bir indirim sağlamaz**. Bu seçenek açıksa bu kupon kodunun planlarınızın kurulum ücretine uygulayacağı indirimi (yüzde veya sabit tutar) ayarlayabilirsiniz.

![Yenilemelere uygula ve kurulum ücreti indirimi geçiş seçenekleri](/img/config/discount-code-renewals.png)

**Aktif:** Bu kupon kodunu manuel olarak etkinleştirin veya devre dışı bırakın.

![İndirim kodunu manuel olarak etkinleştirmek veya devre dışı bırakmak için Aktif geçiş düğmesi](/img/config/discount-code-active.png)

**Gelişmiş Seçenekler** altında aşağıdaki ayarlar bulunur:

![İndirim kodu gelişmiş seçenekleri](/img/config/discount-code-advanced.png)

**Kullanımları sınırla:**

  * **Kullanımlar:** Burada indirim kodunun kaç kez kullanıldığını görebilirsiniz.

  * **Maksimum kullanım:** Bu, kullanıcıların bu indirim kodunu kaç kez kullanabileceğini sınırlar. Örneğin buraya 10 girerseniz kupon yalnızca 10 kez kullanılabilir. Bu sınırdan sonra kupon kodu artık kullanılamaz.

![Mevcut kullanım sayısı ve maksimum kullanım alanıyla kullanımları sınırla ayarı](/img/config/discount-code-limit-uses.png)

**Başlangıç ve sona erme tarihleri:** Burada kuponunuza bir başlangıç tarihi ve/veya bir sona erme tarihi ekleme seçeneğiniz olur.

![İndirim kodunu zamanlamak için başlangıç ve sona erme tarihi alanları](/img/config/discount-code-dates.png)

**Ürünleri sınırla:** **Ürünleri seç** seçeneğini açarsanız tüm ürünleriniz size gösterilir. Hangi ürünün bu kupon kodunu kabul edebileceğini manuel olarak seçme (açarak veya kapatarak) seçeneğiniz olur. Burada kapalı olan ürünlerde, müşterileriniz bu kupon kodunu onlara uygulamaya çalışırsa herhangi bir değişiklik gösterilmez.

![Ürün başına geçiş anahtarlarıyla ürünleri sınırla bölümü](/img/config/discount-code-limit-products.png)

Tüm bu seçenekleri ayarladıktan sonra kuponunuzu kaydetmek için **İndirim Kodunu Kaydet** seçeneğine tıklayın; işlem tamamdır!

![Düzenleme sayfasının alt kısmındaki İndirim Kodunu Kaydet düğmesi](/img/config/discount-code-save.png)

Kupon artık listenizdedir ve buradan onu **düzenlemek veya silmek** için tıklayabilirsiniz.

![Düzenle ve Sil üzerine gelme eylemleriyle listedeki indirim kodu satırı](/img/config/discount-codes-list-hover.png)

###

### URL Parametrelerini Kullanma:

Fiyatlandırma tablolarınızı özelleştirmek veya web siteniz için güzel bir kupon kodu sayfası oluşturmak ve ödeme formunuza otomatik olarak bir indirim kodu uygulamak istiyorsanız bunu URL parametreleri aracılığıyla yapabilirsiniz.

Öncelikle planınız için paylaşılabilir bağlantıyı almanız gerekir. Bunu yapmak için **Ultimate Multisite > Ürünler** bölümüne gidin ve bir plan seçin.

**Paylaşılabilir Bağlantıyı Kopyalamak için Tıkla** düğmesine tıklayın. Bu size bu belirli plana ait paylaşılabilir bağlantıyı verir. Bizim durumumuzda verilen paylaşılabilir bağlantı [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_ idi._

![Paylaşılabilir bağlantı düğmesi olan ürün sayfası](/img/config/products-list.png)

İndirim kodunuzu bu belirli plana uygulamak için URL’ye yalnızca **?discount_code=XXX** parametresini ekleyin. Burada **XXX** kupon kodudur.

Buradaki örneğimizde **50OFF** kupon kodunu bu belirli ürüne uygulayacağız.

Bu belirli plan için ve 50OFF indirim kodu uygulanmış URL şu şekilde görünecektir: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
