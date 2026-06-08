---
title: Sait Ekspor
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Export

**Site Export** admin sayfası, ağ yöneticilerinin bir siteyi veya tüm ağı, taşıma, yedekleme veya devir için indirilebilir bir arşiv haline getirmesine olanak tanır.

## Bir Site Dışa Aktarma

**Ultimate Multisite > Site Export** sayfasına gidin ve **Generate new Site Export** seçeneğini seçin. Dışa aktarmak istediğiniz alt siteyi seçin, ardından arşivin yüklemeleri, plugin'leri ve temaları içerip içermeyeceğine karar verin.

Dışa aktarma tamamlandığında, **Existing Exports** listesinden ZIP dosyasını indirin. Artık dışa aktarılan ZIP dosyaları, self-booting bir `index.php` ve bir `readme.txt` içerir; bu sayede arşiv, ayrı bir importer plugin'i kurmaya gerek kalmadan taze bir host'a yüklenip çalıştırılabilir.

## Tüm Ağı Dışa Aktarma

Ağdaki tüm alt siteleri içeren tek bir arşiv gerektiğinde, Site Export sayfasındaki **Network Export** özelliğini kullanın. Bu, özellikle host geçişleri, felaket kurtarma tatbikatları veya her alt sitenin birlikte taşınması gereken staging yeniden yapılandırmaları öncesinde kullanışlıdır.

Bir ağ dışa aktarması tek bir site dışa aktarmasından çok daha büyük olabileceği için, bunu düşük trafikli bir zamanda yapın ve hedef depolamanın yüklemeler, plugin'ler, temalar ve oluşturulan ZIP dosyaları için yeterli boş alana sahip olduğundan emin olun.

### Network Import Bundles

Ultimate Multisite 2.12.0 sürümüyle birlikte, Site Exporter, ağ genelinde site kurtarma işlemleri için tasarlanmış özel arşivler olan **network import bundles** oluşturabilir. Bir network import bundle, birden fazla siteyi yeni bir ağ kurulumuna geri yüklemek için gereken tüm dosyaları ve meta verileri içerir.

#### Bir Network Import Bundle Oluşturma

1. **Ultimate Multisite > Site Export** sayfasına gidin
2. **Generate new Network Export** butonuna tıklayın
3. Dışa aktarma türü olarak **Network Import Bundle** seçin
4. Yüklemeleri, plugin'leri ve temaları içerip içermeyeceğinizi seçin
5. **Generate** butonuna tıklayın
6. **Existing Exports** listesinden bundle ZIP dosyasını indirin

#### Bir Network Import Bundle'dan Geri Yükleme

Siteleri bir network import bundle'dan geri yüklemek için:

1. Ultimate Multisite'ı hedef host'unuza kurun
2. Multisite kurulum sihirbazını tamamlayın
3. Yeni ağdaki **Ultimate Multisite > Site Export** sayfasına gidin
4. **Import Network Bundle** butonuna tıklayın
5. Network import bundle ZIP dosyasını yükleyin
6. Ekranda çıkan import talimatlarını izleyin
7. Import süreci, tüm siteleri, içeriklerini ve yapılandırmalarını geri yükleyecektir.

Network import bundles şunları korur:
- Site içeriği (yazılar, sayfalar, özel içerik türleri)
- Site ayarları ve seçenekleri
- Kullanıcı rolleri ve izinleri
- Plugin'ler ve temalar (bundle'a dahil edilmişse)
- Medya yüklemeleri (bundle'a dahil edilmişse)
- Özel veritabanı tabloları ve verileri

## Self-Booting Bir Export ZIP Kurma

Self-booting bir ZIP dosyasını taze bir host'a geri yüklemek için:

1. Dışa aktarılan ZIP içeriğini hedef web kök dizinine yükleyin.
2. Yüklenen `index.php` dosyasını bir tarayıcıda açın.
3. Bundle dışa aktarma paketindeki ekrandaki kurulum talimatlarını izleyin.
4. Geçici dosyaları silmeden önce, dışa aktarmaya özel notlar için bundle içindeki `readme.txt` dosyasını inceleyin.

Addon'a özel kurulum ve import detayları için [Site Exporter addon documentation](/addons/site-exporter) adresine bakın.

Ultimate Multisite 2.9.0 sürümünde eklenen tek site aracı için ise [Export & Import](/user-guide/administration/export-import) adresine bakın.
