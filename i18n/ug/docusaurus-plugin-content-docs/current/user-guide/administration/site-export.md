---
title: Saytni eksport qilish
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# سايت إكسبورت (Site Export)

**سايت إكسبورت** yöneticisi sayfası, ağ yöneticilerinin bir siteyi veya tüm ağı taşıma, yedekleme veya devretme işleri için indirilebilir bir arşiv haline getirmesine olanak tanır.

## Tek bir siteyi dışa aktarma (Exporting one site) {#exporting-one-site}

**Ultimate Multisite > Site Export** bölümüne gidin ve **Generate new Site Export** seçeneğini seçin. Dışa aktarmak istediğiniz alt siteyi seçtikten sonra, arşivin yüklemeleri (uploads), eklentileri (plugins) ve temaları (themes) içermesini isteyip istemediğinizi seçin.

Dışa aktarma tamamlandığında, **Existing Exports** listesinden ZIP dosyasını indirin. Şu anda dışa aktarılan ZIP dosyaları, arşivin ayrı bir ithalat eklentisi kurmaya gerek kalmadan yeni bir hosting ortamına yüklenip başlatılabilmesi için kendi kendini başlatan bir `index.php` ve bir `readme.txt` içerir.

## Tüm ağı dışa aktarma (Exporting the whole network) {#exporting-the-whole-network}

Ağınızdaki tüm alt siteleri tek bir arşivde barındırmanız gerektiğinde, Site Export sayfasında **Network Export**'u kullanın. Bu, hosting geçişleri öncesinde, felaket kurtarma tatbikatlarında veya her alt sitenin birlikte taşınması gereken staging yeniden yapılandırmalarında çok faydalıdır.

Bir ağ dışa aktarımı tek bir site dışa aktarımından çok daha büyük olabilir, bu yüzden düşük trafikli bir zaman diliminde çalıştırın ve hedef depolamanın yüklemeler, eklentiler, temalar ve oluşturulan ZIP dosyaları için yeterli boş alana sahip olduğundan emin olun.

### Ağ İçe Aktarma Paketleri (Network Import Bundles) {#network-import-bundles}

Ultimate Multisite 2.12.0 ile birlikte Site Exporter, ağ genelinde site geri yüklemesini kolaylaştırmak için tasarlanmış özel arşivler olan **network import bundles** oluşturabilir. Bir network import bundle, birden fazla siteyi yeni bir ağ kurulumuna geri yüklemek için gerekli tüm dosyaları ve meta verileri içerir.

#### Ağ İçe Aktarma Paketi Oluşturma (Generating a Network Import Bundle) {#generating-a-network-import-bundle}

۱. **Ultimate Multisite > Site Export** bölümüne gidin
۲. **Generate new Network Export** (Yeni Ağ Dışa Aktarımı Oluştur) butonuna tıklayın
۳. Dışa aktarma türü olarak **Network Import Bundle**'ı seçin
۴. Yüklemeleri, eklentileri ve temaları dahil edip etmeyeceğinizi seçin
۵. **Generate** (Oluştur) butonuna tıklayın
۶. **Existing Exports** (Mevcut Dışa Aktarımlar) listesinden bundle ZIP dosyasını indirin

#### Network Import Bundle'dan Geri Yükleme {#restoring-from-a-network-import-bundle}

Ağ dışa aktarma bundle'larından siteleri geri yüklemek için:

۱. Ultimate Multisite'ı hedef sunucunuza kurun
۲. multisite kurulum sihirbazını tamamlayın
۳. Yeni ağda **Ultimate Multisite > Site Export** bölümüne gidin
۴. **Import Network Bundle** (Ağ Bundle'ını İçe Aktar) butonuna tıklayın
۵. Ağ dışa aktarma bundle ZIP dosyasını yükleyin
۶. Ekranda görünen içe aktarma talimatlarını takip edin
۷. İçe aktarma işlemi tüm siteleri, içeriklerini ve yapılandırmalarını geri yükleyecektir

Network import bundles şunları korur:
- Site içeriği (postlar, sayfalar, özel gönderi türleri)
- Site ayarları ve seçenekleri
- Kullanıcı rolleri ve izinleri
- Eklentiler ve temalar (bundle'a dahil edilmişse)
- Medya yüklemeleri (bundle'a dahil edilmişse)
- Özel veritabanı tabloları ve verileri

## Kendi Kendine Başlayan Dışa Aktarma ZIP Dosyasını Kurma {#installing-a-self-booting-export-zip}

Yeni bir sunucuda kendi kendine başlayan bir ZIP dosyasını geri yüklemek için:

۱. Dışa aktarılan ZIP içeriğini hedef web kök dizinine (web root) yükleyin.
۲. Yüklediğiniz `index.php` dosyasını bir tarayıcıda açın.
۳. Bundle'daki dışa aktarma paketinden ekrandaki kurulum talimatlarını takip edin.
۴. Geçici dosyaları kaldırmadan önce bundle'daki `readme.txt` dosyasını kontrol ederek dışa aktarmaya özel notları inceleyin.

Eklentiye özgü kurulum ve içe aktarma detayları için [Site Exporter addon documentation](/addons/site-exporter) dokümantasyonuna bakın.

Ultimate Multisite 2.9.0'da eklenen tek site aracı için [Export & Import](/user-guide/administration/export-import) bölümüne bakın.
