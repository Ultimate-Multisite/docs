---
title: Cloudflare ինտեգրում
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Entegrasyonu

## Genel Bakış
Cloudflare, web sitelerini korumaya ve hızlandırmaya yardımcı olan önde gelen bir içerik dağıtım ağı (CDN) ve güvenlik sağlayıcısıdır. Bu entegrasyon, Ultimate Multisite ile Cloudflare arasında otomatik alan adı yönetimini sağlar, özellikle alt alan adı çoklu site kurulumları için.

## Özellikler
- Cloudflare'da otomatik alt alan adı oluşturma
- Proxy edilmiş alt alan adı desteği
- DNS kaydı yönetimi
- Ultimate Multisite admin panelinde gelişmiş DNS kaydı görüntüleme

## Gereksinimler
Aşağıdaki sabitleri `wp-config.php` dosyanıza tanımlamanız gerekir:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Kurulum Talimatları

### 1. Cloudflare API Anahtarınızı Alın

1. Cloudflare panonuza giriş yapın
2. "My Profile" (sağ üst köşedeki e-posta adresinize tıklayın) bölümüne gidin
3. Menüden "API Tokens"ı seçin
4. Aşağıdaki izinlerle yeni bir API token oluşturun:
   - Zone.Zone: Read (Okuma)
   - Zone.DNS: Edit (Düzenleme)
5. API token'ınızı kopyalayın

### 2. Alan Adı Kimliğinizi (Zone ID) Alın

1. Cloudflare panonuzda kullanmak istediğiniz alanı seçin
2. Zone ID, "Overview" sekmesinde, "API" başlığının altında sağ kenar çubuğunda görünür
3. Zone ID'yi kopyalayın

### 3. wp-config.php'ye Sabitleri Ekleyin

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Entegrasyonu Etkinleştirin

1. WordPress admin panelinizde Ultimate Multisite > Settings (Ayarlar) bölümüne gidin
2. "Domain Mapping" (Alan Adı Eşlemesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Ana Sunucu Entegrasyonları) kısmına gelin
4. Cloudflare entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

### Alt Alan Adı Yönetimi

Bir alt alan adı çoklu site kurulumunda yeni bir site oluşturulduğunda:

1. Ինտեգրացիան հարցում է ուղարկում Cloudflare-ի API-ին՝ ենթադիր տիրույթի համար CNAME գրանցման գրանցում կատարելու համար։
2. Ենթադիր տիրույթը սովորաբար կարգավորվում է Cloudflare-ի միջոցով պրոքսավորման (proxied) համար (այս կարելի է փոխել ֆիլտրերի միջոցով)։
3. Երբ կայքը ջնջվում է, ინտեգրացիան ենթադիր տիրույթը Cloudflare-ից հեռացնում է։

### DNS գրանցման ցուցադրում (DNS Record Display)

Ինտեգրացիան Ultimate Multisite-ի адሚնիստրատիվ պահեստքում DNS գրանցման ցուցադրումը բարելավում է հետևյալով.

1. DNS գրանցումները ուղղակիորեն Cloudflare-ից ստանալով
2. Ցույց տալով, արդյոք գրանցումները պրոքսավորված են կամ չեն
3. Ցուցադրելով DNS գրանցումների մասին լրացուցիչ տեղեկություն

## Cloudflare-ի Հատուկ Հոස්տեյներ (Cloudflare Custom Hostnames)

**Cloudflare Custom Hostnames**-ը (նախկին կոչվում էր "Cloudflare for SaaS") Cloudflare-ի մի հնարավորություն է, որը թույլ է տալիս ձեր հաճախորդներին օգտագործել իրենց սեփական ադմինները՝ SSL-ով ձեր մուլտիմալիտների ցանցում։ Սա խորհուրդ է տրվող մոտեցումը ադմինային կայքերի համար, որոնք օգտագործում են Cloudflare-ը, քանի որ Cloudflare-ը ավտոմատ կերպով կառավարում է SSL վկայագրի տրամադրումն ու թարմացումը յուրաքանչյուր սեփական ադմինային տիրույթի համար։

### Ինչպես է այն տարբերվում ստանդարտ Cloudflare-ի հետ

| | Ստանդարտ ინտեգրացիա (Standard integration) | Cloudflare Custom Hostnames |
|---|---|---|
| **Նպատակ** | Ավտոմատ DNS գրանցումներ ստեղծել ենթադիր տիրույթների համար | Թույլ է տալիս օգտագործել սեփական (մելափոխված) ադմինային տիրույթներ Cloudflare-ի կողմից կառավարվող SSL-ով |
| **Լավագույն տարբերակը** | Ենթադիր տիրույթների մուլտիմալիտներ (Subdomain multisite) | Տիրույթով մելափոխված մուլտիմալիտներ (Domain-mapped multisite) |
| **SSL** | Համակարգվում է առանձին | Ավտոմատ կերպով կառավարվում է Cloudflare-ի կողմից |

### Cloudflare Custom Hostnames-ի կարգավորում

1. Ձեր Cloudflare dashboard-ում բացեք ձեր հիմնական տիրույթի (domain) զոնան։
2. Գնացեք **SSL/TLS > Custom Hostnames**-ին։
3. Ավելացրեք fallback origin, որը կուղղված է ձեր սերվերի IP-ին կամ հոස්տային անունին (hostname)։
4. Ultimate Multisite-ում քարտեզագրված յուրաքանչյուր հաճախորդի տիրույթի համար Cloudflare-ում ստեղծեք Custom Hostname մուտք։ Այս քայլը կարող եք ավտոմատացնել Cloudflare API-ի միջոցով։
5. Cloudflare-ը ինքնաբերաբար տրամադրում և թարմացնում է TLS վկայագրերը յուրաքանչյուր custom hostname-ի համար, երբ հաճախորդի DNS-ը ուղղվում է ձեր ցանցին։

Ամբողջական API-ի վերաբերյալ տեղեկությունների համար බලන්න [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/)։

:::note Տերմինաբանության թարմացում
Ultimate Multisite v2.6.1-ից սկսած, այս հնարավորությունը կոչվում է բոլոր պլայնիչների կարգավորումներում և նշագրություններում **Cloudflare Custom Hostnames**։ Ավելի հին տարբերակներում օգտագործվում էր «Cloudflare for SaaS» անունը, որը Cloudflare-ի հիմնական ապրանքային անվանումն է։
:::

## Կարևոր նշումներ

Cloudflare-ի վերջին թարմացումների համաձայն, բոլոր հաճախորդների համար հասանելի է wildcard proxying-ը (բազմակի կետով փոխանցում)։ Սա նշանակում է, որ ստանդարտ Cloudflare DNS-ի ինտեգրումը քիչ կարևոր է ենթատիրույթների բազմակերպման համար, քան երկար ժամանակ առաջ էր, քանի որ դուք կարող եք պարզապես Cloudflare-ում սահմանել wildcard DNS գրանցում։

## Խնդրի լուծում (Troubleshooting)

### API միացման խնդիրներ
- Ստուգեք, թե արդյոք ձեր API token-ը ճիշտ է և ունի անհրաժեշտ թույլտվությունները։
- Ստուգեք, թե արդյոք ձեր Zone ID-ն ճիշտ է։
- Համոզվեք, որ ձեր Cloudflare հաշվին ունեք անհրաժեշտ թույլտվությունները։

### Ենթատիրույթը չի ավելացվել
- Ստուգեք Ultimate Multisite-ի logs-ում ցանկացած սխալի հաղորդագրության համար։
- Հաստատեք, որ ենթատիրույթը արդեն Cloudflare-ում չի ավելացվել։
- Համոզվեք, որ ձեր Cloudflare պլանը աջակցում է ստեղծվող DNS գրանցումների քանակին։

### Պրոքսիայի խնդիրներ

- Եթե չեք ուզում, որ ենթադոյական տիրույթները (subdomains) պրոքսվեն, կարող եք օգտագործել `wu_cloudflare_should_proxy` ֆիլտրը։
- Որոշ հնարավորություններ կարող են ճիշտ չաշխատել, երբ դրանք պրոքսվում են (օրինակ՝ որոշ WordPress ადմին ֆունկցիաներ)։
- Հետևեք Cloudflare-ի Page Rules-ին օգտագործելու համար՝ ადմին էջերի կեշը (cache) շրջանցելու համար։
