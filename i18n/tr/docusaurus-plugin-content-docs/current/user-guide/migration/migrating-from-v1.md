---
title: V1'den Geçiş
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1'den Geçiş Yapma

## Ultimate Multisite, orijinal 1.x sürüm ailesinden 2.x sürüm ailesine geçiş yapmıştır.

Ultimate Multisite 2.0 ve üzeri sürümler, kod tabanının tamamen yeniden yazılmış halidir. Bu da eski sürümle yeni sürüm arasında neredeyse hiçbir ortak nokta olmadığı anlamına gelir. Bu nedenle, 1.x'ten 2.x'e yükseltme yaparken verilerinizin yeni sürümlerin anlayabileceği bir formata taşınması gerekir.

Neyse ki Ultimate Multisite 2.0+, eski sürümden gelen verileri algılayıp yeni formata dönüştürebilen **yerleşik bir taşıma aracıyla** birlikte gelir. Bu taşıma işlemi, 2.0+ sürümünün **Kurulum Sihirbazı** sırasında gerçekleşir.

Bu derste taşıma aracının nasıl çalıştığını, başarısızlık durumlarında ne yapılacağını ve bu süreçte ortaya çıkabilecek sorunların nasıl giderileceğini ele alacağız.

_**ÖNEMLİ: 1.x sürümünden 2.0 sürümüne yükseltme yapmadan önce lütfen site veritabanınızın yedeğini aldığınızdan emin olun**_

## İlk adımlar

İlk adım, eklenti .zip dosyasını indirmek ve 2.0 sürümünü ağ yönetici panelinize yüklemektir.

[2.0 sürümünü yükleyip etkinleştirdikten](../getting-started/installing-ultimate-multisite.md) sonra sistem, Multisite'ınızın eski sürümle çalıştığını otomatik olarak algılayacak ve eklenti sayfasının üstünde şu mesajı göreceksiniz.

_**NOT:** Multisite'ınızda Ultimate Multisite 1.x yüklüyse, eklentiyi yeni indirdiğiniz sürümle değiştirme seçeneğiniz olacaktır. Lütfen devam edin ve **Mevcut olanı yüklenenle değiştir** seçeneğine tıklayın._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Sonraki sayfada, 1.x sürümüyle birlikte yüklü olan eski eklentilerin listesini göreceksiniz. Burada kullandığınız sürümün 2.0 ile uyumlu olup olmadığı veya taşıma işleminden sonra eklentinin güncellenmiş bir sürümünü yüklemeniz gerekip gerekmediği hakkında bilgiler yer alacaktır.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Devam etmeye hazır olduğunuzda **Yükseltmeyi tamamlamak için Yükleyiciyi Ziyaret Edin** yazan düğmeye tıklayabilirsiniz.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Bu sizi bazı hoş geldiniz mesajlarının bulunduğu kurulum sihirbazı sayfasına yönlendirecektir. Sonraki sayfaya geçmek için **Başla** düğmesine tıklamanız yeterlidir.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Başla** düğmesine tıkladıktan sonra Ön Yükleme Kontrolleri sayfasına yönlendirileceksiniz. Bu sayfada Sistem Bilgileriniz ve WordPress kurulumunuz görüntülenecek ve **Ultimate Multisite'ın gereksinimlerini** karşılayıp karşılamadığınız belirtilecektir.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Sonraki adım, Ultimate Multisite lisans anahtarınızı girmek ve eklentiyi etkinleştirmektir. Bu, eklentiler dahil tüm özelliklerin sitenizde kullanılabilir olmasını sağlayacaktır.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Anahtarınızı girdikten sonra **Kabul Et ve Etkinleştir** düğmesine tıklayın.

Lisans etkinleştirmesinden sonra, sonraki sayfadaki **Yükle** düğmesine tıklayarak asıl kuruluma başlayabilirsiniz. Bu işlem, 2.0 sürümünün çalışması için gerekli dosyaları ve veritabanını otomatik olarak oluşturacaktır.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Şimdi taşıma işlemi

Taşıma aracında yerleşik bir güvenlik özelliği bulunmaktadır; bu özellik tüm multisite'ınızı kontrol ederek Ultimate Multisite verilerinizin sorunsuz bir şekilde taşınabileceğinden emin olur. İşlemi başlatmak için **Kontrol Et** düğmesine tıklayın.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Kontrolü çalıştırdıktan sonra iki olasılıkla karşılaşabilirsiniz: sonuç ya **hatalı** ya da **hatasız** olabilir.

### Hatalı Sonuç

Bir hata mesajı alırsanız, hatayı düzeltmenizde yardımcı olmaları için destek ekibimizle iletişime geçmeniz gerekecektir. Bir destek talebi oluştururken **hata günlüğünü eklediğinizden** emin olun. Günlüğü indirebilir veya destek ekibimizle iletişime geçin yazan bağlantıya tıklayabilirsiniz. Bu, sayfanızın sağ tarafında yardım widget'ını açacak ve açıklama bölümünde hata günlükleri dahil olmak üzere alanlar sizin için önceden doldurulmuş olacaktır.

_**Sistem bir hata bulduğundan, 2.0 sürümüne taşıma işlemine devam edemezsiniz. Hata düzelene kadar ağınızı çalışır durumda tutmak için 1.x sürümüne geri dönebilirsiniz.**_

### Hatasız Sonuç

Sistem herhangi bir hata bulamazsa, bir başarı mesajı ve altta taşıma işlemine devam etmenizi sağlayan bir **Taşı** düğmesi göreceksiniz. Bu sayfada, ilerlemeden önce veritabanınızın yedeğini almanız hatırlatılacaktır; bunu şiddetle tavsiye ediyoruz. Zaten bir yedeğiniz varsa **Taşı** düğmesine tıklayın.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

Hepsi bu kadar!

Ağınızdaki logonuzu ve diğer ayarları güncellemek için Sihirbaz kurulumuna devam edebilir veya Ultimate Multisite 2.0 menüsünde ve yeni arayüzünde gezinmeye başlayabilirsiniz. Haydi, keşfetmenin tadını çıkarın.
