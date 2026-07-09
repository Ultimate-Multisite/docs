---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Dışa Aktarma ve İçe Aktarma {#export--import}

Ultimate Multisite 2.9.0, **Tools > Export & Import** altında tek bir site için **Dışa Aktarma ve İçe Aktarma** aracı ekler. Bu aracı, bir WordPress sitesini ZIP dosyası olarak paketlemeniz, bu ZIP dosyasını geri yüklemeniz veya bir siteyi uyumlu Ultimate Multisite ve tek site WordPress kurulumları arasında taşımanız gerektiğinde kullanın.

## Gerekli izinler {#required-permissions}

Dışa aktaracağınız veya içe aktaracağınız sitede WordPress **Tools** menüsüne erişebilen bir yönetici olarak giriş yapmanız gerekir. Bir multisite ağında, alt siteleri ağ düzeyindeki Ultimate Multisite araçlarından dışa aktarırken veya içe aktarırken bir ağ yöneticisi hesabı kullanın.

Export ZIP indirmeleri, kimlik doğrulaması yapılmış bir indirme uç noktası üzerinden sunulduğu için, indirme işlemi bitene kadar yönetici oturumunu aktif tutun ve oluşturulan indirme URL'lerini kamuya açık paylaşmayın.

## Bir siteyi ZIP olarak dışa aktarma {#exporting-a-site-to-a-zip}

1. Kopyalamak istediğiniz sitenin WordPress admin panelinde **Tools > Export & Import** yolunu izleyin.
2. Dışa aktarma alanını açın ve paketlemek istediğiniz siteyi seçin.
3. Mümkün olduğunda, yüklemeler, plugin'ler ve temalar gibi isteğe bağlı içerikleri seçin.
4. Dışa aktarmayı başlatın ve işlemin bitmesini bekleyin. Büyük sitelerin ZIP dosyası hazır olmadan arka planda bitmesi gerekebilir.
5. Bitmiş ZIP dosyasını dışa aktarılanlar listesinden indirin.

ZIP dosyasını güvenli bir yerde saklayın. Site içeriği, ayarlar, medya dosyaları ve seçilen kod varlıkları içerebilir.

## Dışa aktarma şunları içerir {#what-the-export-includes}

Bir export ZIP dosyası şunları içerebilir:

- Seçilen sitenin veritabanı içeriği ve yapılandırması.
- Yüklemeler dahil edildiğinde yüklenen medya dosyaları.
- Seçenekler seçildiğinde plugin'ler ve temalar.
- Hedef kurulumda siteyi yeniden oluşturmak için Export & Import aracı tarafından kullanılan içe aktarma meta verileri.

Tam ZIP boyutu, medya miktarına, seçilen plugin ve temalara ve sitenin veritabanı tablolarının boyutuna bağlıdır.

## Bir siteyi ZIP'ten içe aktarma {#importing-a-site-from-a-zip}

1. Hedef WordPress sitesinde **Tools > Export & Import** yolunu izleyin.
2. İçe aktarma alanını açın ve Export & Import aracı tarafından oluşturulan ZIP dosyasını yükleyin.
3. Site yeni bir adres kullanacaksa bir değiştirme URL'si girin veya orijinal URL'yi korumak için alanı boş bırakın.
4. İçe aktarma bittikten sonra yüklenen ZIP dosyasını silip silmeyeceğinizi seçin.
5. **Begin Import**'a tıklayın.
6. İşlem bitene kadar bekleyen içe aktarmayı izleyin. Sadece işlemi tamamlanmadan durdurmanız gerekirse **Cancel Import** kullanın.
7. Normal trafiğe veya müşteri erişimine izin vermeden önce içe aktarılan siteyi gözden geçirin.

Tek site WordPress kurulumunda, bir ZIP dosyası içe aktarılması mevcut siteyi içe aktarılan site ile değiştirir. Başlamadan önce hedef sitenin tam bir yedeğini alın ve aynı anda aynı site için birden fazla içe aktarma başlatmaktan kaçının.

## Sınırlamalar ve uyumluluk notları {#limitations-and-compatibility-notes}

- Çok büyük yüklemeler dizinleri veya medya kütüphaneleri büyük ZIP dosyaları oluşturabilir. Büyük siteleri dışa aktarmadan veya içe aktarmadan önce PHP yükleme limitlerini, yürütme limitlerini, disk alanını, belleği ve sunucu zaman aşımı ayarlarını kontrol edin.
- Çok büyük medya kütüphaneleri, düşük trafikli bir bakım penceresinde taşınması gerekebilir.
- Hedef WordPress kurulumu, uyumlu WordPress, PHP, Ultimate Multisite, plugin ve tema sürümlerini çalıştırmalıdır.
- Tek site içe aktarması hedef siteyi değiştirir. Bu bir birleştirme aracı değildir.
- Multisite'tan tek siteye ve tek siteden multisite'a geçişler, yalnızca hedef ortamın dışa aktarılan sitenin plugin'lerini, temalarını, URL'lerini ve gerekli Ultimate Multisite bileşenlerini çalıştırabileceği durumlarda desteklenir.
- ZIP dosyasını gizli tutun. Dışa aktarılan siteden veritabanı içeriği, yüklenmiş dosyalar ve yapılandırma detayları içerebilir.

Daha eski ağ düzeyindeki dışa aktarma iş akışları için [Site Export](/user-guide/administration/site-export) sayfasına bakın.
