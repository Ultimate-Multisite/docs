---
title: PayPal goýarlamak
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway-i Kurmak (v2) {#setting-up-the-paypal-gateway-v2}

_**ÖNEMLİ QAYDAMA: Bu makale Ultimate Multisite versiya 2.x-iňizi görkezýär.**_

Sizi ötkazma sozlamalarymyzda Stripe, Stripe Checkout, PayPal we Manual üçin dört sany ötkazma usulyny işjeve edip bilersiňiz: Stripe, Stripe Checkout, PayPal we Manual. Bu makalada biz **PayPal** bilen nähili baglanyşyk dörediljekdigini görkezeli.

Stripe ýaly, PayPal-de hem onlaýn tölemek üçin giňden ulanylýar, esasanam WordPress web sahypalarynda. Bu makale size PayPal-i öz ulgamanyzda bar bolan ötkazma usuly hökmünde nähili ulanjakdygy barada howa goýar.

Bu baglanyşyk üçin zerur bolan API belgilerini almak üçin sizde **PayPal Business hasaby** bolmagy zerurdygünü ýatda saklaň.

## PayPal-i ulgamda işjeve etmek {#enabling-paypal-on-your-network}

PayPal-i ulgamda bar bolan ötkazma usuly hökmünde işjeve etmek üçin, **Ultimate Multisite > Settings > Payments** sekwesine gitdirin we PayPal bilen baglanyşyk döretmek üçin ýagdaýyň (tick) çykan kutubyny bellemek üçin.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## Howa görkezilen sozlamalary ulanmak {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ötkazma usulynyň sozlamalaryna howa görkezilen PayPal sozlamalaryny goşdirýär. PayPal-i işjeve etdiginden soň, nähili baglanyşyk döretmek isleýändigi we saklamazdan öň haçan belgiler zerurdygy barada bellemek üçin **Ultimate Multisite > Settings > Payments** sekwesinde howa görkezilen sozlamalary ulanmagyň.

Howa görkezilen sozlamalar iki ýol bilen işjeve etmekde mümkin:

* **Manuel kimlik bilgileri girişi**: Eger sizde halihazırda PayPal API kimlik bilgileriniz varsa, hesabınız için OAuth kurulumu mevcut değilse veya kimlik bilgilerini kendiniz kopyalamayı tercih ederseniz bu yolu kullanın. PayPal alanlarına API Kullanıcı Adını (API Username), API Şifresini (API Password) ve API İmzasını (API Signature) girin, sonra ödeme ayarlarını kaydedin.
* **OAuth bağlantı kapısı**: Bu yolu yalnızca OAuth seçeneği sizin kurulumunuz için mevcutsa ve etkinse kullanın. Sihirbaz, OAuth akışını bir özellik bayrağı arkasında gösterir, bu yüzden bayrak olmayan ağlar manuel kimlik bilgileri giriş alanlarını kullanmaya devam eder.

Sihirbazda OAuth seçeneğini görmüyorsanız, aşağıdaki manuel kimlik bilgileri girişi sürecini tamamlayın. Bu gateway, önceki Ultimate Multisite 2.x sürümleriyle aynı PayPal İşletme API kimlik bilgilerini kullanır.

## PayPal API kimlik bilgilerini alma {#getting-the-paypal-api-credentials}

PayPal'ı bir ödeme ağ geçidi olarak etkinleştirdikten sonra, PayPal API **Kullanıcı Adı** (Username), PayPal API **Şifresi** (Password) ve PayPal API **İmza** (Signature) alanlarını doldurmanız gerekecek.

Bunu PayPal [Canlı](https://www.paypal.com/home) veya [Sandbox](https://www.sandbox.paypal.com/home) hesabınıza giriş yaparak alabilirsiniz.

(Ödemeleri test etmek ve ağ geçidinin doğru kurulup kurulmadığını görmek için **sandbox modunu** kullanabileceğinizi unutmayın. Sadece ilgili bölümü açıp kapatmanız yeterli.)

![PayPal API kimlik bilgileri alanları ve sandbox modu anahtarı](/img/config/settings-payment-gateways.png)

PayPal hesabınız için API İmza veya Sertifika kimlik bilgileri talep etmek için:

  1. [Hesap Ayarları](https://www.paypal.com/businessmanage/account/accountAccess)'na gidin.

  2. **API erişimi** (API access) bölümünde **Güncelle** (Update) butonuna tıklayın.
![API erişim bölümü olan PayPal Hesap Ayarları](/img/config/settings-payment-gateways.png)

3. **NVP/SOAP API integrasi (Classic)** başlygynda, **Manage API credentials**-e basyń.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Eger siz API Signature ýa-da Sertifikaty döredip bolsaňyz, siz özüňizden guralary tapyp biljek bir sahnyza yöneltilendsiz.

     * _**Not:** Eger sizi PayPal hasabyňyzy barlamak üçin soýaýan bolsa, onda ekranda görkezilen talbatlara laýyk bolmagyňyz zerurdyr._

  4. Awtomatiki birini saýlaň we **Agree and Submit**-e basyň.

     * **Request API Signature** – API Signature taslamasy üçin saýlaň.

     * **Request API Certificate** – API Sertifikaty taslamasy üçin saýlaň.

  5. PayPal sizi şu görkezmek bilen API guralaryny döredýär:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature guralary** API Username, API Password we Signature-ny öz içine alýar, oňa wagty ýok. Bu bahalar gorag üçin awtomatiki ýaly gizlenipdir. Oňatmak üçin **Show/Hide**-e basyň we ony işe basyp bilersiňiz. Bizi tamamlanandan soň, **Done**-a basyň.

     * **API Certificate guralary** API Username, API Password we Certificate-i öz içine alýar, olar üç ýyldan soň awtomatiki görkezilip biler. API Sertifikatyny deskuptan saklamak üçin **Download Certificate**-e basyň.

Bu her zat! Sizi PayPal ötkürme integrasiýaňyz tamamlandy!

PayPal sozlamalary bilen bagly soraglaryňyz bolsa, siz PayPal's [Help Center](https://www.paypal.com/br/smarthelp/home) bilen baglanyp bilersiňiz.
