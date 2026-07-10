---
title: Dışa Aktarma ve İçe Aktarma
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Dışa Aktarma ve İçe Aktarma {#export--import}

Ultimate Multisite 2.9.0, **Araçlar > Dışa Aktarma ve İçe Aktarma** altında tek bir site için **Dışa Aktarma ve İçe Aktarma** aracı ekler. Bu aracı, bir WordPress sitesini ZIP dosyası olarak paketlemeniz, bu ZIP dosyasını geri yüklemeniz veya bir siteyi uyumlu Ultimate Multisite ve tek site WordPress kurulumları arasında taşımanız gerektiğinde kullanın.

## Gerekli İzinler {#required-permissions}

Dışa aktaracağınız veya içe aktaracağınız sitede WordPress **Araçlar** menüsüne erişebilen bir yönetici olarak oturum açmanız gerekir. Bir multisite ağında, alt siteleri ağ düzeyindeki Ultimate Multisite araçlarından dışa aktarırken veya içe aktarırken bir ağ yöneticisi hesabı kullanın.

Dışa aktarma ZIP indirmeleri, kimlik doğrulaması yapılmış bir indirme uç noktası üzerinden sunulduğu için, indirme işlemi bitene kadar yönetici oturumunuzu aktif tutun ve oluşturulan indirme URL'lerini kamuya açık paylaşmayın.

## Bir Siteyi ZIP Olarak Dışa Aktarma {#exporting-a-site-to-a-zip}

1. Kopyalamak istediğiniz sitenin WordPress yöneticisine gidin ve **Araçlar > Dışa Aktarma ve İçe Aktarma** yolunu izleyin.
2. Dışa aktarma alanını açın ve paketlemek istediğiniz siteyi seçin.
3. Mümkün olduğunda, yüklemeler, eklentiler ve temalar gibi isteğe bağlı içerikleri dahil etmek için seçin.
4. Dışa aktarmayı başlatın ve işlemin bitmesini bekleyin. Büyük sitelerin, ZIP hazır olana kadar arka planda tamamlanması gerekebilir.
5. Bitmiş ZIP dosyasını dışa aktarılanlar listesinden indirin.

ZIP dosyasını güvenli bir yerde saklayın. Site içeriği, ayarlar, medya dosyaları ve seçilen kod varlıklarını içerebilir.

## Dışa Aktarma Neleri İçerir {#what-the-export-includes}

Bir dışa aktarma ZIP dosyası şunları içerebilir:

- Seçilen sitenin veritabanı içeriği ve yapılandırması.
- Yüklemeler dahil ediliyorsa yüklenen medya dosyaları.
- Bu seçenekler seçiliyse eklentiler ve temalar.
- Dışa Aktarma ve İçe Aktarma aracı tarafından hedef kurulumda siteyi yeniden oluşturmak için kullanılan içe aktarma meta verileri.

Tam ZIP boyutu, medya miktarına, seçilen eklenti ve temalara ve sitenin veritabanı tablolarının boyutuna bağlıdır.

## Bir Siteyi ZIP'ten İçe Aktarma {#importing-a-site-from-a-zip}

1. Hedef WordPress sitesinde **Araçlar > Dışa Aktarma ve İçe Aktarma** yolunu izleyin.
2. İçe aktarma alanını açın ve Dışa Aktarma ve İçe Aktarma aracı tarafından oluşturulan ZIP dosyasını yükleyin.
3. Site yeni bir adres kullanacaksa bir değiştirme URL'si girin veya orijinal URL'yi korumak için alanı boş bırakın.
4. İçe aktarma bittikten sonra yüklenen ZIP dosyasını silip silmeyeceğinizi seçin.
5. **İçe Aktarmayı Başlat** düğmesine tıklayın.
6. İşlem bitene kadar bekleyen içe aktarmayı izleyin. Süreci tamamlanmadan durdurmanız gerekirse yalnızca **İçe Aktarmayı İptal Et** kullanın.
7. Normal trafiğe veya müşteri erişimine izin vermeden önce içe aktarılan siteyi gözden geçirin.

Tek site WordPress kurulumunda, bir ZIP dosyası içe aktarılması mevcut siteyi içe aktarılan site ile değiştirir. Başlamadan önce hedef sitenin tam bir yedeğini alın ve aynı anda aynı site için birden fazla içe aktarma başlatmaktan kaçının.

## Sınırlamalar ve Uyumluluk Notları {#limitations-and-compatibility-notes}

- Çok büyük yüklemeler dizinleri veya medya kütüphaneleri büyük ZIP dosyaları oluşturabilir. Büyük siteleri dışa aktarmadan veya içe aktarmadan önce PHP yükleme limitlerini, yürütme limitlerini, disk alanını, belleği ve sunucu zaman aşımı ayarlarını kontrol edin.
- Çok büyük medya kütüphaneleri, düşük trafikli bir bakım penceresinde taşınması gerekebilir.
- Hedef WordPress kurulumu, uyumlu WordPress, PHP, Ultimate Multisite, eklenti ve tema sürümlerini çalıştırmalıdır.
- Tek site içe aktarması hedef siteyi değiştirir. Bu bir birleştirme aracı değildir.
- Multisite'tan tek siteye ve tek siteden multisite'a geçişler, yalnızca hedef ortamın dışa aktarılan sitenin eklentilerini, temalarını, URL'lerini ve gerekli Ultimate Multisite bileşenlerini çalıştırabileceği durumlarda desteklenir.
- ZIP dosyasını özel tutun. Dışa aktarılan siteden veritabanı içeriği, yüklenen dosyalar ve yapılandırma ayrıntıları içerebilir.

Daha eski ağ düzeyindeki dışa aktarma iş akışları için [Site Dışa Aktarma](/user-guide/administration/site-export) sayfasına bakın.
