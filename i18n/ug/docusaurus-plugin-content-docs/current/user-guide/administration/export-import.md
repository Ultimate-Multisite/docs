---
title: Экспорт ва импорт
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Экспорт ва Импорт (Export & Import) {#export--import}

Ultimate Multisite 2.9.0 даронда **Tools > Export & Import** (Инструменты > Экспорт ва Импорт) меню астында бир сайтты ZIP файлы halinde саклаучы ва импортлаучы бир инструмент қўшилди. Бир WordPress сайтыни ZIP файли сифати сақлаш, уни қайта олиш ёки мувофиқ Ultimate Multisite ва single-site WordPress ўрнатилган жойлар орасида сайтни кўчириш керак бўлганда буни ишлатинг.

## Талабу қилинган рухсатномалар (Required permissions) {#required-permissions}

Сиз экспорти қилаётган ёки импортлаётган сайтдағы WordPress **Tools** менюсига киришишга қодир бўлган администратор сифатида кириш керак. Мультисайт тармоқдаги иш жараёнида, тармоқ даражасидаги Ultimate Multisite воситаларидан субсайtlarni экспорти қилаётган ёки импортлаётган вақтда тармоқ администратори ҳисобидан фойдаланинг.

Экспорт ZIP файллари аутентификацияланган юклаб олиш энглар орқали кўрсатилади, шунинг учун юклаб олиш якун бўлганича администратор сессиясини фаол сақлаб туринг ва яратилган юклаб олиш URL'ларини оммавий тарзда улашиб берманг.

## Saytni ZIP formatında dışa aktarma (Exporting a site to a ZIP) {#exporting-a-site-to-a-zip}

1. Kopyalamak istediğiniz sitenin WordPress admin panelinde **Tools > Export & Import** menüsüne gidin.
2. Dışa aktarma alanını açın ve paketlemek istediğiniz siteyi seçin.
3. Mümkün olduğunda, yüklemeler (uploads), eklentiler (plugins) ve temalar (themes) gibi isteğe bağlı içerikleri seçin.
4. Dışa aktarmayı başlatın ve işlemin bitmesini bekleyin. Büyük sitelerin ZIP dosyası hazır olana kadar arka planda bitmesi gerekebilir.
5. Hazırlanan ZIP dosyasını dışa aktarma listesinden indirin.

ZIP dosyasını güvenli bir yerde saklayın. Bu dosya site içeriğini, ayarları, medya dosyalarını ve seçtiğiniz kod varlıklarını içerebilir.

## Dışa aktarımda neler bulunur (What the export includes) {#what-the-export-includes}

Bir dışa aktarma ZIP dosyası şunları içerebilir:

* Seçilen sitenin veritabanı içeriği ve yapılandırması.
* Yüklemeler dahil edildiğinde yüklenen medya dosyaları.
* Bu seçenekler seçildiğinde eklentiler (plugins) ve temalar (themes).
* Sitenin hedef kurulumda yeniden oluşturulması için Export & Import aracında kullanılan meta verilerin içe aktarılması.

Tam ZIP boyutu, medya miktarına, seçilen eklentilere ve temalara ile sitenin veritabanı tablolarının boyutuna bağlıdır.

## Bir siteyi ZIP'ten İçe Aktarma (Importing a site from a ZIP) {#importing-a-site-from-a-zip}

1. Hedef WordPress saytınday **Tools > Export & Import** (Alatlar > Dışa/İçe Aktarma) menüsüne gidin.
2. İçe aktarma alanını açın ve Export & Import aracıyla oluşturduğunuz ZIP dosyasını yükleyin.
3. Eğer sitenin yeni bir adres kullanmasını istiyorsanız, yerine geçecek URL'yi girin; orijinal URL'yi korumak için alanı boş bırakabilirsiniz.
4. İçe aktarma işlemi bittikten sonra yüklediğiniz ZIP dosyasını silip atmayı seçin veya seçmeyin.
5. **Begin Import** (İçe Aktarmayı Başlat) butonuna tıklayın.
6. Bekleyen içe aktarma işlemini bitene kadar izleyin. İşlemi tamamlanmadan durdurmanız gerekiyorsa sadece **Cancel Import** (İçe Aktarmayı İptal Et) kullanın.
7. Normal trafik veya müşteri erişimi sağlamadan önce içe aktarılan siteyi kontrol edin.

Bir tek saytlı WordPress kurumsal (installation) sisteminde bir ZIP dosyası içe aktarmak mevcut siteyi içe aktarılan siteyle değiştirir. Başlamadan önce hedef sitenin tam yedeğini alın ve aynı anda aynı site için birden fazla içe aktarma işlemine başlamaktan kaçının.

## Cheklanlar va munosatları (Limitations and compatibility notes) {#limitations-and-compatibility-notes}

* Çok katta yüklenen dizinler veya medya kütüphaneleri büyük ZIP dosyaları oluşturabilir. Büyük siteleri dışa aktarmadan veya içe aktarmadan önce PHP yükleme limitlerini, yürütme limitlerini, disk alanını, belleği ve sunucu zaman aşımı ayarlarını kontrol edin.
* Çok büyük medya kütüphaneleri düşük trafikli bakım penceresinde taşınması gerekebilir.
* Hedef WordPress kurulumu uyumlu WordPress, PHP, Ultimate Multisite, plugin ve tema sürümlerini çalıştırmalıdır.
* Tek site içe aktarımı hedef siteyi değiştirir. Bu bir birleştirme aracı değildir.
* Çoklu siteden tek siteye ve tek siteden çoklu siteye geçişler, hedef ortamın dışa aktarılan sitenin pluginlerini, temalarını, URL'lerini ve gerekli Ultimate Multisite bileşenlerini çalıştırabilmesi durumunda desteklenir.

ZIP faylini gizli tutun. Bu dosya dışa aktarılan siteden veritabanı içeriği, yüklenmiş dosyalar vaqf etlari (configuration details) içerebilir.

Eski şəbəkə səviyyələrindäki eksport iş axınları haqqında [Site Export](/user-guide/administration/site-export) daxil olın.
