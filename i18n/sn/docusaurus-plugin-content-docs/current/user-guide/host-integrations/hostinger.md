---
title: Kugadzirwa neHosteringer (hPanel)
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Integrasyon Hostinger (hPanel)

## Genel Bakış

Hostinger, modern bir kontrol paneli olan hPanel ile popüler bir web barındırma sağlayıcısıdır. Ultimate Multisite Hostinger entegrasyonu, Ultimate Multisite ve Hostinger'ın hPanel arasındaki alan adlarını otomatik senkronize etmenizi sağlar; böylece WordPress admin panelinizden alan adı eşleştirmelerini ve alt alan adlarını doğrudan yönetebilirsiniz.

## Özellikler

- hPanel'de otomatik eklenti alan adı oluşturma
- hPanel'de otomatik alt alan adı oluşturma (alt alan adı multisite kurulumları için)
- Eşleştirmeler silindiğinde alan adının kaldırılması
- hPanel'in alan adı yönetim API'si ile sorunsuz entegrasyon

## Gereksinimler

Hostinger entegrasyonunu kullanmak için şunlara ihtiyacınız var:

1. hPanel erişimi olan bir Hostinger hesabı
2. Hostinger'dan bir API tokeni
3. `wp-config.php` dosyanızda tanımlanması gereken aşağıdaki sabitler:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

İsteğe bağlı olarak şunları da tanımlayabilirsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Varsayılan API uç noktası
```

## Kurulum Talimatları

### 1. Hostinger API Tokeninizi Oluşturun

1. Hostinger hesabınıza giriş yapın ve hPanel'e erişin
2. **Hesap Ayarları** → **API Tokenleri** bölümüne gidin
3. **Yeni Token Oluştur** butonuna tıklayın
4. Token'a açıklayıcı bir isim verin (örneğin, "Ultimate Multisite")
5. Gerekli izinleri seçin:
   - Alan adı yönetimi
   - Alt alan adı yönetimi
6. Oluşturulan tokeni kopyalayın ve güvenli bir yerde saklayın

### 2. Hesap Kimliğinizi Bulun

1. hPanel'de, **Hesap Ayarları** → **Hesap Bilgileri** bölümüne gidin
2. Hesap Kimliğiniz bu sayfada gösterilir
3. Bir sonraki adım için bu kimliği kopyalayın ve kaydedin

### 3. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Kana aka yako inoratidzo kuti ndiri munhu anogona kuva. Kana aka ya Hostinger yako inoratidza endpoint wose we API, unogona kukubatsira:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Chivisa Integration (Enable the Integration)

1. Mu admin ya WordPress yako, ndirira ku **Ultimate Multisite > Settings**
2. Ndira ku tab ye **Domain Mapping**
3. Ndira kupfuura ku **Host Integrations**
4. Chivisa integration ya **Hostinger (hPanel)**
5. Click **Save Changes**

## Izwi Inogona Kuenda Sei (How It Works)

### Addon Domains (Domains Zvinotevera)

Kana uri kutaura domain mu Ultimate Multisite:

1. Integration inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge inenge in

- Chinjeni kuti API token yako inotevera uye haingazovera
- Chinjeni kuti Account ID yako inotevera
- Chinangwa kuti API token yako inenge nekuvaka zvinhu zvakakosha kune kuramba kwemudzi (domain management)
- Chinjeni kuti account yako ya Hostinger inoratidza uye inenge yakapfuma

### Domain Haingazovera

- Chinjeni Ultimate Multisite logs kuti pane matsviki ekutanga (error messages)
- Chinangwa kuti domain haingazovera kuva kune akaunti yako ya Hostinger
- Chinangwa kuti account yako ya Hostinger haingazovera kufika kuunwa kwake kweaddon domains
- Chinjeni kuti domain inotevera zvakanaka ku nameservers dzako dzinoramba

### Matambudziko ekuti SSL Certificate Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge Inenge In
