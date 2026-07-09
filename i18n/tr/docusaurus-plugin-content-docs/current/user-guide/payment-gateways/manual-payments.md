---
title: Manuel Ödemeleri Ayarlama
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manuel Ödemeleri Ayarlama (v2) {#setting-up-manual-payments-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümüyle ilgilidir.**_

Manuel ödemeler, kullanıcılarınız için **Stripe** veya **PayPal** kullanılamıyorsa başka ödeme yöntemleri sunmanızın bir yoludur. Bu, havale veya banka transferi ya da kullanıcılarınızın yerel olarak kullanabildiği başka herhangi bir ödeme yöntemi olabilir.

## Manuel Ödemeler nasıl etkinleştirilir {#how-to-enable-manual-payments}

Manuel ödemeyi ayarlamak çok kolaydır. Yalnızca ödeme ağ geçitleri altında etkinleştirmeniz ve kullanıcının ödemeyi nasıl göndermesi gerektiğine dair ayrıntılı talimatlar girmeniz gerekir.

Önce **Ultimate Multisite > Ayarlar > Ödemeler** bölümüne gidin. **Ödeme Ağ Geçitleri** altında **Manuel** seçeneğini açın. Sizin için bir **Ödeme Talimatları** kutusunun görüneceğini göreceksiniz.

Bu kutuya, müşterinizin ödemeyi yapması için ihtiyaç duyacağı bilgileri ekleyin. Örneğin, banka hesap bilgileriniz ve müşterinin size ödeme onayını gönderebilmesi için e-posta adresiniz olabilir.

![Ödeme Talimatları metin alanıyla manuel ödeme ağ geçidi anahtarı](/img/config/manual-gateway-expanded.png)

Manuel ağ geçidi ayarları arayüzü şöyledir:

![Manuel ağ geçidi ayarları](/img/config/manual-gateway-settings.png)

Ayarladıktan sonra **Ayarları Kaydet** düğmesine tıklamanız yeterlidir; işlem tamamlanır. Kullanıcılar ağınıza kaydolduğunda, satın alma işlemini tamamlamak için talimatlarınızı alacaklarını belirten bir mesaj görürler.

![Kullanıcıya ödeme talimatlarını alacağını söyleyen kayıt onay mesajı](/img/frontend/registration-manual-notice.png)

Ayrıca **Teşekkürler** sayfanızda ödeme talimatlarınızı içeren bir mesaj da alırlar.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manuel ödemeleri onaylama {#confirming-manual-payments}

Manuel bir ödemeyi onaylamak için sol çubuktaki **Ödemeler** menüsüne gidin. Burada ağınızdaki tüm ödemeleri ve **durum** dahil olmak üzere ayrıntılarını görebilirsiniz. Manuel ödeme, siz manuel olarak değiştirene kadar her zaman **Beklemede** durumunda olur.

![Beklemede olan manuel ödemeyi gösteren ödemeler listesi](/img/admin/payments-list.png)

**Referans kodu**na tıklayarak ödeme sayfasına girin. Bu sayfada, referans ID, ürünler, zaman damgaları ve daha fazlası gibi bekleyen ödemenin tüm ayrıntıları bulunur.

![Referans kodunu, ürünleri ve toplamları gösteren ödeme ayrıntıları sayfası](/img/admin/payment-edit.png)

Sağ sütunda ödemenin durumunu değiştirebilirsiniz. Bunu **Tamamlandı** olarak değiştirmek ve **Üyeliği Etkinleştir** seçeneğini açmak, müşterinizin sitesini etkinleştirir ve üyeliği aktif olur.

![Durumu Tamamlandı olarak ayarlanmış ve Üyeliği Etkinleştir anahtarı açık ödeme düzenleme sayfası](/img/admin/payment-activate-membership.png)
