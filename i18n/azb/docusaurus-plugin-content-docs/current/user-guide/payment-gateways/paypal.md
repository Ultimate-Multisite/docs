---
title: PayPal-ni quraq
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway Kurulumu (v2) {#setting-up-the-paypal-gateway-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i kapsamaktadır.**_

Ödeme ayarları sayfamızda dört farklı ödeme yöntemini etkinleştirebilirsiniz: Stripe, Stripe Checkout, PayPal ve Manuel. Bu makalede, **PayPal** ile nasıl entegre olacağımızı göreceğiz.

Tıpkı Stripe gibi, PayPal da online ödemeler için yaygın olarak kullanılan bir yöntemdir, özellikle WordPress sitelerinde. Bu makale, ağınızda kullanabileceğiniz bir ödeme yöntemi olarak PayPal'ı nasıl kullanacağınıza dair size rehberlik edecektir.

Bu entegrasyon için gerekli olan API kimlik bilgilerini alabilmek için bir **PayPal Business hesabına** sahip olmanız gerektiğini unutmayın.

## Ağınızda PayPal'ı Etkinleştirme {#enabling-paypal-on-your-network}

PayPal'ı ağınızda kullanabileceğiniz bir ödeme yöntemi olarak etkinleştirmek için **Ultimate Multisite > Ayarlar > Ödemeler** sekmesine gidin ve PayPal'ın yanındaki kutucuğu işaretleyin.

![Aktif ödeme ağ geçitlerinde PayPal'ı etkinleştirme](/img/config/settings-payment-gateways.png)

## Rehberli Kurulum Sihirbazını Kullanma {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0, ödeme ağ geçidi ayarlarına rehberli bir PayPal kurulum sihirbazı eklemiştir. PayPal'ı etkinleştirdikten sonra, ağ geçidini nasıl bağlamak istediğinizi seçmek ve kaydetmeden önce hangi kimlik bilgilerinin hala gerekli olduğunu onaylamak için **Ultimate Multisite > Ayarlar > Ödemeler** üzerindeki sihirbazı kullanın.

Sihirbaz iki kurulum yolu destekler:

* **Manuel kimlik girişi**: Bu yolu, zaten PayPal API kimlik bilgileriniz varsa, OAuth kurulumu hesabınız için mevcut değilse veya kimlik bilgilerinizi kendiniz kopyalamayı tercih ediyorsanız kullanın. API Kullanıcı Adını (API Username), API Şifresini (API Password) ve API İmzasını (API Signature) PayPal alanlarına girin, ardından ödeme ayarlarını kaydedin.
* **OAuth bağlantı ağ geçidi**: Bu yolu yalnızca OAuth seçeneği mevcut ve kurulumunuz için etkinse kullanın. Sihirbaz, OAuth akışını bir özellik bayrağı (feature flag) arkasında gösterir, bu nedenle bayrakı olmayan ağlar manuel kimlik girişi alanlarını kullanmaya devam eder.

Sihirbazda OAuth seçeneğini görmüyorsanız, aşağıdaki manuel kimlik girişi akışını tamamlayın. Ağ geçidi, önceki Ultimate Multisite 2.x sürümleriyle aynı PayPal Business API kimlik bilgilerini kullanır.

## PayPal API Kimlik Bilgilerini Alma {#getting-the-paypal-api-credentials}

PayPal bir ödeme ağ geçidi olarak etkinleştirildikten sonra, PayPal API **Kullanıcı Adı** , PayPal API **Şifresi** ve PayPal API **İmzası** alanlarını doldurmanız gerekecektir.

Bunu, PayPal [Canlı](https://www.paypal.com/home) veya [Sandbox](https://www.sandbox.paypal.com/home) hesabınıza giriş yaparak alabilirsiniz.

(Ödeme yapmak ve ağ geçidinin doğru kurulup kurulmadığını görmek için **sandbox modunu** kullanabileceğinizi unutmayın. Sadece ilgili bölümü açıp kapatmanız yeterlidir.)

![PayPal API kimlik bilgileri alanları ve sandbox modu açma/kapama düğmesi](/img/config/settings-payment-gateways.png)

PayPal hesabınız için API İmza veya Sertifika kimlik bilgilerini talep etmek için:

  1. [Hesap Ayarlarınıza](https://www.paypal.com/businessmanage/account/accountAccess) gidin.

  2. **API erişimi** bölümünde, **Güncelle** butonuna tıklayın.
![PayPal Hesap Ayarları API erişimi bölümü](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API entegrasyonu (Klasik)** altında, **API kimlik bilgilerini yönet** butonuna tıklayın.
![PayPal NVP/SOAP API entegrasyonu API kimlik bilgilerini yönet](/img/config/settings-payment-gateways.png)

     * Zaten bir API İmza veya Sertifikası oluşturduysanız, kimlik bilgilerinizi bulabileceğiniz bir sayfaya yönlendirileceksiniz.

     * _**Not:** PayPal hesabınızı doğrulamanız istenirse, lütfen ekrandaki talimatları izleyin._

  4. Aşağıdaki seçeneklerden _birini_ seçin, ardından **Kabul Edip Gönder** butonuna tıklayın.

     * **API İmza Talebi** – API İmza kimlik doğrulaması için seçin.

     * **API Sertifikası Talebi** – API Sertifikası kimlik doğrulaması için seçin.

  5. PayPal API kimlik bilgilerinizi şu şekilde oluşturur:
![PayPal oluşturulan API kimlik bilgileri](/img/config/settings-payment-gateways.png)

     * **API İmza kimlik bilgileri**, API Kullanıcı Adı, API Şifresi ve İmza içerir ve bu bilgiler süresi dolmaz. Bu değerler, ek güvenlik için varsayılan olarak gizlidir. Açıp kapatmak için **Göster/Gizle** butonuna tıklayın. İşiniz bittiğinde, **Bitti** butonuna tıklayın.

     * **API Sertifikası kimlik bilgileri**, API Kullanıcı Adı, API Şifresi ve Sertifika içerir ve bu bilgiler üç yıl sonra otomatik olarak sona erer. API Sertifikasını masaüstünüze kaydetmek için **Sertifikayı İndir** butonuna tıklayın.

İşte bu kadar, PayPal ödeme entegrasyonunuz tamamlandı!

PayPal ayarlarıyla ilgili herhangi bir sorunuz olursa, PayPal'ın [Yardım Merkezi](https://www.paypal.com/br/smarthelp/home) adresine bakabilirsiniz.
