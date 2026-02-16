---
title: Manuel Ödemeleri Ayarlama
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Manuel Ödemeleri Yapılandırma (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite 2.x sürümünü kapsamaktadır.**_

Manuel ödemeler, kullanıcılarınız için **Stripe** veya **PayPal** uygun olmadığında alternatif ödeme yöntemleri sunmanızı sağlar. Banka havalesi veya kullanıcılarınızın bulunduğu bölgede geçerli olan herhangi bir ödeme yöntemi olabilir.

## Manuel Ödemeler Nasıl Etkinleştirilir

Manuel ödeme kurulumu oldukça basittir. Tek yapmanız gereken ödeme yöntemlerinden bu seçeneği etkinleştirmek ve kullanıcının ödemeyi nasıl göndereceğine dair ayrıntılı talimatları girmektir.

Öncelikle **Ultimate Multisite > Settings > Payments** bölümüne gidin. **Payment Gateways** altında **Manual** seçeneğini açın. Karşınıza **Payment Instructions** kutusu çıkacaktır.

Bu kutuya müşterinizin ödeme yapabilmesi için ihtiyaç duyacağı bilgileri ekleyin. Örneğin banka hesap bilgileriniz ve müşterinin ödeme onayını gönderebileceği e-posta adresiniz olabilir.

![Manuel ödeme yöntemi açma/kapama düğmesi ve ödeme talimatları kutusu](/img/config/settings-payment-gateways.png)

Ayarları yaptıktan sonra **Save Settings** butonuna tıklayın, işlem tamamdır. Kullanıcılar ağınıza kayıt olduklarında, satın alma işlemini tamamlamak için talimatlarınızı alacaklarını belirten bir mesaj göreceklerdir.

![Kayıt sırasında gösterilen manuel ödeme mesajı](/img/config/settings-payment-gateways.png)

Ayrıca **Thank You** sayfasında ödeme talimatlarınızı içeren bir mesaj da göreceklerdir.

![Ödeme talimatlarını gösteren Thank You sayfası](/img/config/settings-payment-gateways.png)

## Manuel ödemeleri onaylama

Manuel bir ödemeyi onaylamak için sol menüdeki **Payments** bölümüne gidin. Burada ağınızdaki tüm ödemeleri ve **durum** bilgileri dahil detaylarını görebilirsiniz. Manuel ödemeler siz değiştirene kadar her zaman **Pending** durumunda kalır.

![Bekleyen manuel ödemeyi gösteren ödemeler listesi](/img/admin/payments-list.png)

**Referans koduna** tıklayarak ödeme sayfasına girin. Bu sayfada referans numarası, ürünler, zaman damgaları ve daha fazlası dahil bekleyen ödemenin tüm detaylarını görebilirsiniz.

![Referans kodu ve ürünleri gösteren ödeme detayları sayfası](/img/admin/payments-list.png)

Sağ sütunda ödeme durumunu değiştirebilirsiniz. Durumu **Completed** olarak değiştirip **Activate Membership** seçeneğini açtığınızda müşterinizin sitesi etkinleştirilir ve üyeliği aktif hale gelir.

![Activate Membership seçeneği ile Completed durumuna geçiş](/img/admin/payments-list.png)
