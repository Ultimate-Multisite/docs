---
title: Cloudways Entegrasiýa
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integrasi

## Genel Bakış {#overview}
Cloudways, WordPress sitelerini DigitalOcean, AWS, Google Cloud ve daha birçok bulut sağlayıcısında yerləşdirmizi mümkün kılan idarə olunan bir bulut hosting platformudur. Bu inteqrasiya Ultimate Multisite ilə Cloudways arasında avtomatik domen sinkronizasiyası və SSL sertifikatının idarə edilməsini təmin edir.

## Xüsusiyyətlər {#features}
- Avtomatik domen sinkronizasiyası
- SSL sertifikatının idarə edilməsi
- Əlavə domenlərin dəstəklənməsi
- SSL sertifikatları üçün DNS validasiyası

## Tələblər {#requirements}
Aşağıdakı sabitlər (constants) `wp-config.php` faylınızda təyin edilməlidir:

```php
define('WU_CLOUDWAYS_EMAIL', 'sizin_cloudways_emailiniz');
define('WU_CLOUDWAYS_API_KEY', 'sizin_api_keyiniz');
define('WU_CLOUDWAYS_SERVER_ID', 'sizin_server_idiniz');
define('WU_CLOUDWAYS_APP_ID', 'sizin_app_idiniz');
```

İstənilən hallarda, aşağıdakını da təyin edə bilərsiniz:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'virgül_lə_ayrılmış_domenlər_siyahısı');
```

## Qurmaq Təlimatları {#setup-instructions}

### 1. Cloudways API Credentials-inizi Almaq {#1-get-your-cloudways-api-credentials}

1. Cloudways panellərinizə daxil olun.
2. "Account" > "API Keys" (Hesab) bölməsinə keçin.
3. Əgər sizdə yoxdursa, bir API key yaradın.
4. E-poçtunuzu və API keyinizi kopyalayın.

### 2. Server və Tətbiq ID-lərinizi Almaq {#2-get-your-server-and-application-ids}

1. Cloudways panellərinizdə "Servers" (Serverlər) bölməsinə keçin.
2. WordPress multisiteinizin host olduğu serveri seçin.
3. Server ID URL-də görünür: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" (Tətbiqlər) bölməsinə keçin və WordPress tətbiqinizi seçin.
5. App ID URL-də görünür: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php-ə Sabitləri Əlavə Etmək {#3-add-constants-to-wp-configphp}

Aşağıdakı sabitləri `wp-config.php` faylınıza əlavə edin:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Eğer Cloudways alias listinde her zaman saklanması gereken **dış** alan adlarınız (multisite ağınız dışında olanlar) varsa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Kendi ağınızın joker karakterini eklemeyin
`WU_CLOUDWAYS_EXTRA_DOMAINS` içine `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı deseni) eklemeyin. Neden bu, her kiracı için ayrı SSL sertifikalarının verilmesini engellediğini [Önemli — joker karakter SSL tuzağı](#important--wildcard-ssl-pitfall) aşağıda görebilirsiniz.
:::

### 4. Entegrasyonu Etkinleştirme {#4-enable-the-integration}

1. WordPress admin panelinizde Ultimate Multisite > Settings (Ayarlar) bölümüne gidin.
2. "Domain Mapping" (Alan Adı Eşleştirmesi) sekmesine geçin.
3. Aşağı kaydırarak "Host Integrations" (Ana Sunucu Entegrasyonları) kısmına gelin.
4. Cloudways entegrasyonunu etkinleştirin.
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın.

## Nasıl Çalışır {#how-it-works}

### Alan Adı Senkronizasyonu (Domain Syncing) {#domain-syncing}

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, şu anda eşleştirilmiş tüm alan adlarını alır.
2. Yeni alanı listeye ekler (uygulanabilirse www versiyonu ile birlikte).
3. Tam listeyi API aracılığıyla Cloudways'e gönderir.
4. Cloudways, uygulamanız için alan adı takma adlarını günceller.

Not: Cloudways API her seferinde sadece tek bir alanı eklemek veya kaldırmak yerine tüm alan adlarının tam listesini göndermeyi gerektirir.

### SSL Sertifikası Yönetimi (SSL Certificate Management) {#ssl-certificate-management}

Alan adları senkronize edildikten sonra:

1. Entegrasyon, sunucunuza işaret eden geçerli DNS kayıtlarına sahip hangi alan adlarını kontrol eder.
2. O alan adları için Let's Encrypt SSL sertifikaları kurmak üzere Cloudways'e bir istek gönderir.
3. Cloudways, SSL sertifikası verme ve kurulum işlemlerini yönetir.

Integrasi herda herda **standart** (non-wildcard) Let's Encrypt sertifikatdan Cloudways bilen soýar. `WU_CLOUDWAYS_EXTRA_DOMAINS` içinde wildcard wzralydyry ýazylsa, SSL haýa goýulmadyndan öňki `*.` bölegi ýapylyp gitdirilýär — bu her bir integrasiýa tarapy özüniň bilen wildcard sertifikatyny ýüklemez. Cloudways-de wildcard sertifikaty ulanmak üçin ony käbir wagtda özüňiz goýulmaly, ýöne bu sorama görä belli bir domaina Let's Encrypt haýa bermegi bloklaýar (aşağıdakı töweregde geler).

## Ekstra Domanylar {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` konstanta size Cloudways ilkinji ulanylyşlarynda her wagt saklanmaly bolan goşmaça **daşky** domany görkezmek üçin mümkinçilik berýär. Onu şu üç zat üçin ulanyp bilersiňiz:

- Ultimate Multisite bilen dolandyrylmagan daşky domany (mysal üçin, birme-bir Cloudways ilkinji ulanylyşynda bolan başga bir marketing sahypasy).
- Ilkinji ulanyşlaryny listde saklamagy islediňiz ýa-da staging domany.

Özi öz ulgamanyz üçin subdomain wildcard (mysal üçin `*.your-network.com`) üçin bu konstanta ulanmaň. Wildcard SSL töweregi haýa töwereginde geler.

## Aýratyn zat — Wildcard SSL Töweregi {#important--wildcard-ssl-pitfall}

Cloudways-iň standart görkezijini tapawutly ýa-da ýazmakda umumy ýalňyş, `WU_CLOUDWAYS_EXTRA_DOMAINS` üçin `*.your-network.com` ýaly bir wildcard goýmak ýa-da ol wildcard üçin Cloudways-de manualyk wildcard SSL sertifikatyny ulanmakdyr.

**Eger siz bu işi başyryp geçerseniz, Ultimate Multisite tarapyndan eşidilýän her bir domana Let's Encrypt haýalary bermegi Cloudways redd edendir.** Cloudways ilkinji ulanyşlarynda SSL sertifikatyny her wagt üýtgedendir we ilkinji bar olan wildcard sertifikaty ilkinji ulanyşyň baglaný bolan her bir domana Let's Encrypt haýasyny bloklaýar.

### Ultimate Multisite ulgamy üçin Cloudways-de maslahat berilýän SSL görkezijisi {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways ilkin **SSL Certificate** tabyna, diňe `your-network.com` we `www.your-network.com` üçin gämine ýetýän **standart Let's Encrypt sertifikatyny** goýun — ýöne bu "wildcard" (jylgyr) däl.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS`-a `*.your-network.com` (ýa-da öz ulgamanyz üçin başga bir subdomain örän) gozymagyň, onu **daşky** domenler üçin saklaň.
3. Subdomainleri çözmek üçin diňe **DNS** derejesinde suborbital wildcard döredip goýuň (Cloudways server IP-sine ýol görkeziji `A` rekordy üçin `*.your-network.com`). Şondan soň, her bir özüni görýän custom domenler üçin SSL Let's Encrypt arkaly awtomatiki berilýär.

Eger senetleriň custom domenleri SSLsizly ýatyrsa, Cloudways SSL tabyny barlap görüň. Eger orda wildcard sertifikaty işjeň bolsa, ony ýokaryň, esasy ulgam domany üçin standart Let's Encrypt sertifikatyny täze berip, `WU_CLOUDWAYS_EXTRA_DOMAINS`-dan ähli wildcard goşawlaryny ýokaryň. Soňra domen görkezijini täze işjeňleşdiriň (ýa-da soňky birini garaşyň) we integrasiýa her bir domen üçin sertifikat berip başlaýar.

## Sorunlary çözmek {#troubleshooting}

### API Bağlanma Masalalary {#api-connection-issues}
- E-poçt we API açaryňyz dogrydyr diýip barlap görüň
- Server we uygulama IDleriňiz dogrydyr diýip barlap görüň
- Cloudways hasabyňyzda zerur resseller bar bolsa, ony üpjün etdiğinizden habarsy boluň

### SSL Sertifikat Sorunları {#ssl-certificate-issues}
- Cloudways, SSL sertifikaları vermeden önce alan adlarınızın sunucunuza doğru DNS kayıtlarına sahip olmasını şart koşar.
- Entegrasyon, SSL sertifikalarını istemeden önce DNS kayıtlarını kontrol eder.
- Eğer SSL sertifikaları verilmiyorsa, alan adlarınızın sunucunuzun IP adresine doğru işaret ettiğinden emin olun.
- **SSL'siz takılı kalan per-tenant özel alan adları var mı?** Cloudways uygulamasının SSL Certificate sekmesini kontrol edin. Eğer bir joker karakter sertifikası (manuel olarak yüklenmiş veya `*.your-network.com`'u kapsayan) aktifse, Cloudways tek tek eşlenmiş özel alan adları için Let's Encrypt sertifikaları vermez. Bunu sadece ana ağ alan adını (`your-network.com`, `www.your-network.com`) kapsayan standart bir Let's Encrypt sertifikasıyla değiştirin ve `WU_CLOUDWAYS_EXTRA_DOMAINS` içindeki joker karakter girişlerini kaldırın. Ardından bir alan adı eşleştirmesini yeniden tetikleyin (veya bir sonrakini bekleyin) ve entegrasyon alan bazında sertifikaları talep edecektir.

### Alan Adı Eklenmedi {#domain-not-added}
- Herhangi bir hata mesajları için Ultimate Multisite loglarını kontrol edin.
- Alan adının Cloudways'e zaten eklenmediğinden emin olun.
- Eklediğiniz alan adı sayısını destekleyen Cloudways planınızın olduğundan emin olun.
