---
title: Establishing Manual Payments
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manuel Ödemeleri Kurulumu (v2)

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'e atıfta bulunmaktadır.**_

Manuel ödemeler, kullanıcılarınız için **Stripe** veya **PayPal** gibi ödeme yöntemlerinin kullanılamadığı durumlarda alternatif ödeme yöntemleri sunmanızı sağlar. Bu, bir banka havalesi, EFT veya kullanıcılarınızın yerel olarak erişebileceği başka bir ödeme yöntemi olabilir.

## Manuel Ödemeleri Nasıl Etkinleştirilir

Manuel ödeme kurmak çok kolay. Yapmanız gereken tek şey, ödeme ağ geçitleri (payment gateways) altından "Manual" seçeneğini etkinleştirmek ve kullanıcıların ödemeyi nasıl yapması gerektiğine dair detaylı talimatlar eklemektir.

Öncelikle, **Ultimate Multisite > Ayarlar > Ödemeler** yolunu izleyin. **Payment Gateways** başlığının altında bulunan **Manual** düğmesini açın. Karşınızda bir **Ödeme Talimatları (Payment Instructions)** kutusu göreceksiniz.

Bu kutuya, müşterinizin ödemeyi yapması için ihtiyaç duyacağı bilgileri ekleyin. Bu, banka hesap bilgilerinizi ve müşterinizin size ödeme onayı gönderebileceği bir e-posta adresi olabilir, örneğin.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

İşte manuel ağ geçidi ayarları arayüzü:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Kurulumu yaptıktan sonra sadece **Ayarları Kaydet (Save Settings)** düğmesine tıklamanız yeterli, bu kadar. Kullanıcılar ağınıza kaydolduklarında, satın alma işlemini tamamlamak için talimatlar alacakları yönünde bir mesaj göreceklerdir.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Ayrıca, **Teşekkürler (Thank You)** sayfanızda da ödeme talimatlarınızla ilgili bir mesaj alacaklardır.

![Thank You page showing payment instructions after checkout](/img/frontend/manual-thank-you.png)

## Manuel Ödemeleri Onaylama

Manuel bir ödemeyi onaylamak için, soldaki menüden **Ödemeler (Payments)** bölümüne gidin. Burada ağınızdaki tüm ödemeleri ve detaylarını, buna **durum (status)** dahil olmak üzere görebilirsiniz. Manuel bir ödeme, sizin manuel olarak değiştirene kadar her zaman **Beklemede (Pending)** durumunda olacaktır.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**Referans koduna (reference code)** tıklayarak ödeme sayfasına girin. Bu sayfada, referans ID, ürünler, zaman damgaları ve daha fazlası gibi bekleyen ödemeye ait tüm detaylar bulunur.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

Sağ sütunda, ödemenin durumunu değiştirebilirsiniz. Durumu **Tamamlandı (Completed)** olarak değiştirmek ve **Üyeliği Etkinleştir (Activate Membership)** seçeneğini açmak, müşterinizin sitesini etkinleştirecek ve üyeliği aktif hale getirecektir.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
