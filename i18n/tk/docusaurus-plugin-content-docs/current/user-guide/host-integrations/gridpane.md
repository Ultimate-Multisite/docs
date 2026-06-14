---
title: GridPane Integrasi
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Entegrasi

## Genel Bakış
GridPane, ciddi WordPress profesyonelleri için özel olarak hazırlanmış bir kontrol paneldir. Bu entegrasyon, Ultimate Multisite ile GridPane arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimini sağlar.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- SUNRISE sabitinin otomatik yapılandırılması

## Gereksinimler
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sizin_api_anahtarınız');
define('WU_GRIDPANE_SERVER_ID', 'sizin_sunucu_idiniz');
define('WU_GRIDPANE_APP_ID', 'sizin_site_idiniz');
```

## Kurulum Talimatları

### 1. GridPane API Kimlik Bilgilerinizi Alın

1. GridPane kontrol panelinize giriş yapın
2. "Ayarlar" > "API" bölümüne gidin
3. Eğer bir API anahtarınız yoksa oluşturun
4. API anahtarınızı kopyalayın

### 2. Sunucu ve Site Kimliklerinizi Alın

1. GridPane kontrol panelinizde, "Sunucular"a gidin
2. WordPress multisitenizin barındırıldığı sunucuyu seçin
3. Sunucu Kimliğini (URL'de veya sunucu detayları sayfasında görünen) not edin
4. "Siteler"e gidin ve WordPress sitenizi seçin
5. Site Kimliğini (URL'de veya site detayları sayfasında görünen) not edin

### 3. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'sizin_api_anahtarınız');
define('WU_GRIDPANE_SERVER_ID', 'sizin_sunucu_idiniz');
define('WU_GRIDPANE_APP_ID', 'sizin_site_idiniz');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress yönetim panelinde, Ultimate Multisite > Ayarlar'a gidin
2. "Alan Adı Eşleştirmesi" (Domain Mapping) sekmesine gidin
3. Aşağı kaydırarak "Ana Barındırma Entegrasyonları" (Host Integrations) bölümüne gelin
4. GridPane entegrasyonunu etkinleştirin
5. "Değişiklikleri Kaydet" (Save Changes) butonuna tıklayın

## Nasıl Çalışır

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Integrasi, alan adresi sitenize eklemek üçin GridPane API-sine bir istek gönderir.
2. GridPane otomatik olarak SSL sertifikası sağlama işini halleder.
3. Alan adı eşleştirmesi kaldırıldığında, integrasi alanı GridPane'dan alandır.

Integrasi aynı zamanda `wp-config.php` dosyanızdaki SUNRISE sabitini de otomatik olarak halleder; bu da alan adı eşleştirmesinin düzgün çalışması için gereklidir.

## SUNRISE Sabitini Yönetmek

GridPane integrasiýasynyň ähli birikimli özelliği, GridPane-nyň öz alan adı eşleştirme ulgamynyň bilen çakmalary bolmamasyny üpjün etmek üçin `wp-config.php` dagi SUNRISE sabitini awtomatik redaktirlemekdir. Bu, her iki ulgamy hem sorunsuz birikip işleýärdi diýmekdir.

## Sorunları Gözläp Çyrma (Troubleshooting)

### API Bağlanma Masalalary
- API açaryňyz dogrydyr diýip barlap görüň.
- Server we site ID-lerinizin dogrydyr diýip kontrol ediň.
- Sizde GridPane hasaplanýan zerur resseller barada barlap görüň.

### SSL Sertifikatasynyň Masalalary
- GridPane SSL sertifikatlaşdyrmak üçin birnäçe wagt alyp biljekdir.
- Alan adyňyz serveriň IP adresine dogry ýol berýändigini barlap görüň.
- Sizde sitiniz üçin GridPane SSL tapgyrlaryny kontrol ediň.

### Alan Ady Goşulmady
- Hiç bir xatolik meselesi barada Ultimate Multisite loglarynda barlap görüň.
- Alan adynyň hali GridPane'a goşulmagan bolsa diýip barlap görüň.
- Alan adyňyz DNS resmilerini dogry görkezilendigini üpjün ediň.
