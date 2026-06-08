---
title: Migrating from V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1-den V2'ye Geçiş

## Ultimate Multisite, orijinal 1.x sürüm ailesinden 2.x sürüm ailesine geçti.

Ultimate Multisite version 2.0 ve üzeri, kod tabanının tamamen yeniden yazılmış halidir. Bu da eski sürüm ile yeni sürüm arasında çok az ortak nokta olduğu anlamına geliyor. Bu nedenle, 1.x'ten 2.x'e yükseltirken, verilerinizin yeni sürümlerin anlayabileceği bir formata taşınması (migrate edilmesi) gerekecek.

Neyse ki, Ultimate Multisite 2.0+ **çekirdeğe yerleşik bir migrator** ile geliyor. Bu migrator, eski versiyondaki verileri algılayıp yeni formata dönüştürebilir. Bu geçiş, 2.0+ sürümünün **Setup Wizard**'ı sırasında gerçekleşir.

Bu ders, migrator'ın nasıl çalıştığını, başarısızlık durumlarında ne yapmanız gerektiğini ve bu süreçte ortaya çıkabilecek sorunları nasıl gidereceğinizi anlatıyor.

_**ÖNEMLİ: 1.x sürümünden 2.0 sürümüne yükseltmeye başlamadan önce lütfen sitenizin veritabanının yedeğini aldığınızdan emin olun.**_

## İlk Adımlar

İlk adım, plugin .zip dosyasını indirip version 2.0'ı network admin dashboard'ınıza kurmaktır.

[version 2.0'ı kurup etkinleştirdikten sonra](../getting-started/installing-ultimate-multisite.md), sistem Multisite'ınızın eski (legacy) versiyonda çalıştığını otomatik olarak algılayacak ve plugin sayfasının üst kısmında bu mesajı göreceksiniz.

_**NOT:** Multisite'ınızda Ultimate Multisite 1.x kuruluysa, plugin'i indirdiğiniz sürümle değiştirme seçeneğiniz olacaktır. Lütfen **Replace current with uploaded** butonuna tıklayın._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

Bir sonraki sayfa, 1.x sürümü ile birlikte hangi eski add-on'ları kurduğunuzu gösterecektir. Bu sayfa, kullandığınız sürümün 2.0 ile uyumlu olup olmadığı veya migrasyondan sonra add-on'ın güncellenmiş bir sürümünü kurmanız gerekip gerekmediği konusunda talimatlar verecektir.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Devam etmeye hazır olduğunuzda, **Visit the Installer to finish the upgrade** yazan butona tıklayabilirsiniz.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Bu sizi, bazı karşılama mesajları içeren kurulum sihirbazı (installation wizard) sayfasına yönlendirecektir. Sadece bir sonraki sayfaya geçmek için **Get Started** butonuna tıklamanız yeterli.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started**'a tıkladıktan sonra, sizi Pre-install Checks sayfasına yönlendirecektir. Bu sayfa, Sistem Bilgilerinizi ve WordPress kurulumunuzu gösterecek ve **Ultimate Multisite'ın gereksinimlerini** karşılayıp karşılamadığınızı söyleyecektir.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

Sonraki adım, Ultimate Multisite lisans anahtarınızı girip plugin'i etkinleştirmektir. Bu, add-on'lar dahil olmak üzere tüm özelliklerin sitenizde kullanılabilir olmasını sağlayacaktır.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Anahtarınızı girdikten sonra, **Agree & Activate** butonuna tıklayın.

Lisans etkinleştirildikten sonra, bir sonraki sayfadaki **Install** butonuna tıklayarak gerçek kurulum işlemine başlayabilirsiniz. Bu, version 2.0'ın çalışması için gerekli dosyaları ve veritabanını otomatik olarak oluşturacaktır.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## Şimdi, migrasyon

Migrator, tüm multisite'ınızı kontrol ederek tüm Ultimate Multisite verilerinizin herhangi bir sorun olmadan migre edilebildiğinden emin olan yerleşik bir güvenlik özelliğine sahiptir. Süreci başlatmak için **Run Check** butonuna tıklayın.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

Kontrolü çalıştırdıktan sonra iki olasılığınız vardır: sonuç ya bir **hata** içerir ya da **hata içermez**.

### Hata İçerir (With Error)

Bir hata mesajı alırsanız, hatayı düzeltmenize yardımcı olması için destek ekibimize ulaşmanız gerekecektir. Bir bilet (ticket) oluştururken **hata günlüklerini (error log)** sağlamayı unutmayın. Günlüğü indirebilir veya "contact our support team" yazan bağlantıya tıklayabilirsiniz. Bu, sayfanızın sağ tarafında bir yardım widget'ı açacak ve açıklama kısmında hata günlüklerini içeren, sizin için önceden doldurulmuş alanlar sunacaktır.

_**Sistem bir hata bulduğu için, 2.0 sürümüne geçiş yapamayacaksınız. Bu durumda, hata düzeltilene kadar ağınızı çalıştırmaya devam etmek için 1.x sürümüne geri dönebilirsiniz.**_

### Hata İçermez (Without Error)

Sistem herhangi bir hata bulamazsa, bir başarı mesajı ve aşağıda bir **Migrate** butonu göreceksiniz. Bu buton, migrasyonu yapmanıza olanak tanıyacaktır. Bu sayfada, ilerlemeden önce veritabanınızın yedeğini almanız gerektiği hatırlatılacaktır, ki biz bunu şiddetle tavsiye ediyoruz. Eğer zaten bir yedeğiniz varsa **Migrate** butonuna basın.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

İşte bu kadar!

Ya logo ve ağınızdaki diğer şeyleri güncellemek için Sihirbaz kurulumunu çalıştırmaya devam edebilir ya da Ultimate Multisite version 2.0 menüsünde ve yeni arayüzünde gezinmeye başlayabilirsiniz. İyi eğlenceler.
