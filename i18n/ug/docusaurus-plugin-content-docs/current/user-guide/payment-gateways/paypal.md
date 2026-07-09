---
title: PayPal sozlash
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Geçidini Kurmak (v2) {#setting-up-the-paypal-gateway-v2}

_**ÖNEMLİ NOT: Bu makale Ultimate Multisite sürüm 2.x'i referans almaktadır.**_

Ödeme ayarlar sayfamızda Stripe, Stripe Checkout, PayPal ve Manuel olmak üzere en fazla dört ödeme yöntemini etkinleştirebilirsiniz. Bu makalede, **PayPal** ile nasıl entegre olacağımızı göreceğiz.

Stripe gibi, PayPal da özellikle WordPress sitelerinde çevrimiçi ödemeler için yaygın olarak kullanılır. Bu makale, ağınızda mevcut bir ödeme yöntemi olarak PayPal'ı nasıl kullanacağınızı size gösterecektir.

Bu entegrasyon için gerekli olan API kimlik bilgilerini almak adına bir **PayPal İş Hesabınızın** olması gerektiğini unutmayın.

## Ağınızda PayPal'ı Etkinleştirme {#enabling-paypal-on-your-network}

PayPal'ı ağınızda mevcut bir ödeme yöntemi olarak etkinleştirmek için, **Ultimate Multisite > Ayarlar > Ödemeler** sekmesine gidin ve yanındaki PayPal kutucuğunu işaretleyin.

![Aktif ödeme geçitlerinde PayPal'ı etkinleştirme](/img/config/settings-payment-gateways.png)

## Rehberli Kurulum Sihirbazını Kullanma {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0, ödeme geçidi ayarlarında rehberli bir PayPal kurulum sihirbazı ekler. PayPal'ı etkinleştirdikten sonra, geçidi nasıl bağlamak istediğinizi seçmek ve kaydetmeden önce hangi kimlik bilgilerinin hala gerekli olduğunu doğrulamak için **Ultimate Multisite > Ayarlar > Ödemeler** üzerinde sihirbazı kullanın.

Sihirbaz iki kurulum yolu destekler:

* ** دستی اعتبار bilgisi girişi (Manual credential entry)**: Eğer zaten PayPal API kimlik bilgileriniz varsa, hesabınız için OAuth kurulumu mevcut değilse veya kimlik bilgilerini kendiniz kopyalamayı tercih ediyorsanız bu yolu kullanın. PayPal alanlarına API Kullanıcı Adını (API Username), API Şifresini (API Password) ve API İmzasını (API Signature) girin, sonra ödeme ayarlarını kaydedin.
* **OAuth bağlantı kapısı (OAuth connection gate)**: Bu yolu yalnızca OAuth seçeneği mevcutsa ve kurulumunuz için etkinleştirilmişse kullanın. Sihirbaz, OAuth akışını bir özellik bayrağı (feature flag) arkasında gösteriyor; bu nedenle bayrak olmayan ağlar manuel kimlik bilgisi giriş alanlarını kullanmaya devam eder.

Sihirbazda OAuth seçeneğini görmüyorsanız, aşağıdaki manuel kimlik bilgisi girişi akışını tamamlayın. Bu geçit, önceki Ultimate Multisite 2.x sürümleriyle aynı PayPal İş API kimlik bilgilerini kullanır.

## PayPal API Kimlik Bilgilerini Alma {#getting-the-paypal-api-credentials}

PayPal'ı bir ödeme geçidi olarak etkinleştirdikten sonra, PayPal API **Kullanıcı Adı** (Username), PayPal API **Şifresi** (Password) ve PayPal API **İmza** (Signature) alanlarını doldurmanız gerekecek.

Bunu PayPal [Canlı](https://www.paypal.com/home) veya [Sandbox](https://www.sandbox.paypal.com/home) hesabınıza giriş yaparak alabilirsiniz.

(Ödemeleri test etmek ve geçidin doğru kurulup kurulmadığını görmek için **sandbox modunu** kullanabileceğinizi unutmayın. Sadece ilgili bölümü açıp kapatmanız yeterli.)

![PayPal API kimlik bilgileri alanları ve sandbox modu anahtarı](/img/config/settings-payment-gateways.png)

PayPal hesabınız için API İmza veya Sertifika kimlik bilgileri talep etmek için:

  1. [Hesap Ayarları](https://www.paypal.com/businessmanage/account/accountAccess) sayfasına gidin.

  2. **API erişimi** (API access) bölümünde **Güncelle** (Update) butonuna tıklayın.
![API erişim bölümü olan PayPal Hesap Ayarları](/img/config/settings-payment-gateways.png)

٣. **NVP/SOAP API entegrasyonunda (Classic)**, **Manage API credentials**-e basıng.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Hepsini hazırsanız bir API Signature veya Sertifika oluşturduysanız, kimlik bilgilerinizin bulunduğu sayfaya yönlendirileceksiniz.

     * _**Qeyd:** Eğer PayPal hesabınızı doğrulamak için sizden istenirse, ekrandaki talimatları takip edin._

  ٤. Aşağıdakilerden **birini** seçin ve ardından **Agree and Submit**-e basın.

     * **Request API Signature** – API Signature kimlik doğrulaması için seçin.

     * **Request API Certificate** – API Sertifikası kimlik doğrulaması için seçin.

  ٥. PayPal sizin API kimlik bilgilerinizi şu şekilde oluşturur:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature kimlik bilgileri**, bir API Kullanıcı Adı, bir API Şifresi ve bir İmza içerir; bu değerler süresizdir. Ek güvenlik için varsayılan olarak gizlidir. Bunları açıp kapatmak için **Show/Hide**-e tıklayın. İşiniz bittiğinde **Done**'a basın.

     * **API Sertifikası kimlik bilgileri**, bir API Kullanıcı Adı, bir API Şifresi ve bir Sertifika içerir; bu sertifika üç yıl sonra otomatik olarak süresini kaybeder. API Sertifikanızı masaüstünüze kaydetmek için **Download Certificate**-e tıklayın.

Bu kadar, PayPal ödeme entegrasyonunuz tamamlandı!

PayPal ayarlarıyla ilgili herhangi bir sorunuz olursa, PayPal'ın [Help Center](https://www.paypal.com/br/smarthelp/home) sayfasına bakabilirsiniz.
