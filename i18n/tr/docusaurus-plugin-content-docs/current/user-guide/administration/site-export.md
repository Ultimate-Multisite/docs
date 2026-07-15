---
title: Site Dışa Aktarma
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Site Dışa Aktarma

**Site Dışa Aktarma** yönetici sayfası, ağ yöneticilerinin bir siteyi veya tüm ağı, taşıma, yedekleme veya devir teslim işlemleri için indirilebilir bir arşiv haline getirmesine olanak tanır.

## Tek Bir Site Dışa Aktarma {#exporting-one-site}

**Ultimate Multisite > Site Dışa Aktarma** yolunu izleyin ve **Yeni Site Dışa Aktarma Oluştur** seçeneğini seçin. Dışa aktarmak istediğiniz alt siteyi seçin, ardından arşivin yüklemeleri, eklentileri ve temaları içerip içermeyeceğini belirleyin.

Dışa aktarma tamamlandığında, **Mevcut Dışa Aktarmalar** listesinden ZIP dosyasını indirin. Dışa Aktarma ZIP'leri artık kendi kendine çalışan bir `index.php` ve bir `readme.txt` içerir, bu sayede arşiv, ayrı bir içe aktarma eklentisi kurmaya gerek kalmadan yeni bir hosting'e yüklenip çalıştırılabilir.

## Tüm Ağı Dışa Aktarma {#exporting-the-whole-network}

Ağdaki tüm alt siteleri içeren tek bir arşiv gerektiğinde, Site Dışa Aktarma sayfasındaki **Ağ Dışa Aktarma** özelliğini kullanın. Bu, özellikle her alt sitenin birlikte taşınması gereken hosting geçişleri, felaket kurtarma tatbikatları veya staging yeniden yapılandırmaları öncesinde kullanışlıdır.

Bir ağ dışa aktarması, tek bir site dışa aktarmasından çok daha büyük olabileceğinden, bunu düşük trafikli bir zamanda yapın ve hedef depolamanın yüklemeler, eklentiler, temalar ve oluşturulan ZIP dosyaları için yeterli boş alana sahip olduğundan emin olun.

### Ağ İçeri Aktarma Paketleri {#network-import-bundles}

Ultimate Multisite 2.12.0 sürümüyle birlikte Site Exporter, ağ genelinde site kurtarma işlemleri için tasarlanmış özel arşivler olan **ağ içe aktarma paketleri** oluşturabilir. Bir ağ içe aktarma paketi, birden fazla siteyi yeni bir ağ kurulumuna geri yüklemek için gerekli tüm dosyaları ve meta verileri içerir.

#### Bir Ağ İçeri Aktarma Paketi Oluşturma {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Dışa Aktarma** yolunu izleyin
2. **Yeni Ağ Dışa Aktarma Oluştur**'a tıklayın
3. Dışa aktarma türü olarak **Ağ İçeri Aktarma Paketi**'ni seçin
4. Yüklemeleri, eklentileri ve temaları içerip içermeyeceğinizi seçin
5. **Oluştur**'a tıklayın
6. Paketi **Mevcut Dışa Aktarmalar** listesinden indirin

#### Bir Ağ İçeri Aktarma Paketinden Geri Yükleme {#restoring-from-a-network-import-bundle}

Siteleri bir ağ içe aktarma paketinden geri yüklemek için:

1. Hedef hosting'inize Ultimate Multisite'ı kurun
2. Multisite kurulum sihirbazını tamamlayın
3. Yeni ağda **Ultimate Multisite > Site Dışa Aktarma** yolunu izleyin
4. **Ağ Paketi İçe Aktar**'a tıklayın
5. Ağ içe aktarma paketi ZIP dosyasını yükleyin
6. Ekranda çıkan içe aktarma talimatlarını izleyin
7. İçe aktarma süreci tüm siteleri, içeriklerini ve yapılandırmalarını geri yükleyecektir.

Ağ içe aktarma paketleri şunları korur:
- Site içeriği (yazılar, sayfalar, özel içerik türleri)
- Site ayarları ve seçenekleri
- Kullanıcı rolleri ve izinleri
- Eklentiler ve temalar (pakete dahilse)
- Medya yüklemeleri (pakete dahilse)
- Özel veritabanı tabloları ve verileri

## Kendi Kendine Çalışan Bir Dışa Aktarma ZIP'i Kurma {#installing-a-self-booting-export-zip}

Kendi kendine çalışan bir ZIP dosyasını yeni bir hosting'e geri yüklemek için:

1. Dışa aktarılan ZIP içeriğini hedef web kök dizinine yükleyin.
2. Yüklenen `index.php` dosyasını bir tarayıcıda açın.
3. Paketlenmiş dışa aktarma paketindeki ekrandaki kurulum talimatlarını izleyin.
4. Geçici dosyaları silmeden önce, pakete özel notlar için paketlenmiş `readme.txt` dosyasını gözden geçirin.

Eklentiye özel kurulum ve içe aktarma detayları için [Site Exporter eklenti dokümantasyonuna](/addons/site-exporter) bakın.

Ultimate Multisite 2.9.0'da eklenen tek site aracı için [Dışa Aktarma ve İçe Aktarma](/user-guide/administration/export-import) bölümüne bakın.
