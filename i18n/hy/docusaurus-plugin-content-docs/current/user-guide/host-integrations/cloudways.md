---
title: Cloudways ինտեգրում
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways Integration

## Overview
Cloudways એ મેનેજ્ડ ક્લાઉડ હોસ્ટિંગ પ્લેટફોર્મ છે જે તમને DigitalOcean, AWS, Google Cloud અને અન્ય વિવિધ ક્લાઉડ પ્રદાતાઓ પર WordPress સાઇટ્સ ડિપ્લોય કરવાની મંજૂરી આપે છે. આ એકીકરણ Ultimate Multisite અને Cloudways વચ્ચે ઓટોમેટિક ડોમેન સિંક અને SSL સર્ટિફિકેટ મેનેજમેન્ટને સક્ષમ કરે છે.

## Features
- ઓટોમેટિક ડોમેન સિંકિંગ
- SSL સર્ટિફિકેટ મેનેજમેન્ટ
- વધારાના ડોમેન્સ માટે સપોર્ટ
- SSL સર્ટિફિકેટ્સ માટે DNS વેરિફિકેશન

## Requirements
તમારા `wp-config.php` ફાઇલમાં નીચેના કોન્સ્ટન્ટ્સ વ્યાખ્યાયિત કરવા આવશ્યક છે:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

વૈકલ્પિક રીતે, તમે આ પણ વ્યાખ્યાયિત કરી શકો છો:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions

### 1. તમારા Cloudways API ક્રેડેન્શિયલ્સ મેળવો

1. તમારા Cloudways ડેશબોર્ડમાં લોગ ઇન કરો
2. "Account" > "API Keys" પર જાઓ
3. જો તમારી પાસે પહેલેથી જ API key ન હોય તો એક API key બનાવો
4. તમારું ઈમેલ અને API key કોપી કરો

### 2. તમારા સર્વર અને એપ્લિકેશન ID મેળવો

1. તમારા Cloudways ડેશબોર્ડમાં, "Servers" પર જાઓ
2. તે સર્વર પસંદ કરો જ્યાં તમારો WordPress multisite હોસ્ટ છે
3. Server ID URL માં દેખાય છે: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" પર જાઓ અને તમારી WordPress એપ્લિકેશન પસંદ કરો
5. App ID URL માં દેખાય છે: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php માં કોન્સ્ટન્ટ્સ ઉમેરો

નીચે આપેલા કોન્સ્ટન્ટ્સ તમારી `wp-config.php` ફાઇલમાં ઉમેરો:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Eğer ağınız dışındaki ek **harici** alan adlarınız (multisite ağınız dışında olanlar) her zaman Cloudways takma adları listesinde kalması gerekiyorsa:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Kendi ağınızın joker karakterini (wildcard) eklemeyin
`WU_CLOUDWAYS_EXTRA_DOMAINS`'e `*.your-network.com` (veya kendi ağınızın herhangi bir alt alan adı deseni) eklemeyin. Neden bu durum her kiracı için ayrı SSL sertifikalarının verilmesini engellediğini aşağıda [Önemli — joker karakter SSL tuzağı](#important--wildcard-ssl-pitfall) inceleyin.
:::

### 4. Entegrasyonu Etkinleştirme

1. WordPress yönetim panelinizde Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Adı Eşleştirmesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Ana Sunucu Entegrasyonları) bölümüne gelin
4. Cloudways entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

### Alan Adı Senkronizasyonu (Domain Syncing)

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, şu anda eşleşmiş tüm alan adlarını alır
2. Yeni alanı listeye ekler (uygulanabilirse www versiyonu ile birlikte)
3. Tam listeyi API aracılığıyla Cloudways'e gönderir
4. Cloudways, uygulamanız için alan adı takma adlarını günceller

Not: Cloudways API, her seferinde sadece tek bir alanı eklemek veya kaldırmak yerine tüm alan adlarının tam listesini göndermeyi gerektirir.

### SSL Sertifikası Yönetimi (SSL Certificate Management)

Alan adları senkronize edildikten sonra:

1. Entegrasyon, sunucunuza işaret eden geçerli DNS kayıtlarına sahip olan hangi alan adlarını kontrol eder
2. O alan adları için Let's Encrypt SSL sertifikaları kurmak üzere Cloudways'e bir istek gönderir
3. Cloudways, SSL sertifikası verme ve kurulum işlemlerini yönetir

Ինտեգրումը միշտ խնդրում է **ստանդարտ** (ոչ վայլդքարդ) Let's Encrypt վկայականներ Cloudways-ից։ Եթե `WU_CLOUDWAYS_EXTRA_DOMAINS`-ում տրամադրվում է վայլդքարդ ձևանշան, ապա SSL հարցման համար առաջատար `*.` մասը մաքրվում է՝ վայլդքարդը երբեք չի տեղադրվում այս ინտեգրացիայով։ Cloudways-ում վայլդքարդ վկայական օգտագործելու համար դու պետք է այն տեղադրես ձեռքով, բայց դա արելը արգելում է կապված յուրաքանչյուր โดменի Let's Encrypt-ի թողարկումը՝ քարտեզագրված ստեղծած โดเมինների համար (տես ներքևի խնդիրը)։

## Հրավերային Դոմեններ (Extra Domains)

`WU_CLOUDWAYS_EXTRA_DOMAINS` հաստատունը թույլ է տալիս սահմանել լրացուցիչ **արտաքին** դոմեններ, որոնք միշտ պետք է պահվեն Cloudways-ի կիրառության ալիազների (aliases) ցուցակում։ Օգտագործեք այն հետևյալ համար.

- Արտաքին դոմեններ Ultimate Multisite-ի կողմից չկառավարվող (օրինակ՝ առանձին մարքեթինգային կայք, որը ունի նույն Cloudways կիրառությունը)։
- Պարկված կամ ստեյջին դոմեններ, որոնք ցանկանում եք պահել կիրառության ալիազների ցուցակում։

**Չօգտագործեք** այս հաստատունը ձեր սեփական ցանցի ենթադոմենի վայլդքարդը (օրինակ՝ `*.your-network.com`)։ Տես վայլդքարդ SSL-ի խնդիրը ներքևում։

## Կարևոր է. Վայլդքարդ SSL-ի Խնդիր

Cloudways-ի ստանդարտ կարգավորումներին հետևելիս հաճախ կատարվող սխալը `WU_CLOUDWAYS_EXTRA_DOMAINS`-ում վայլդքարդ տեսակի ինչ-որ բան ավելացնելն է, կամ այդ վայլդքարդի համար Cloudways-ի կողմից ձեռքով SSL վկայական տեղադրելը։

**Եթե դուք սա անեք, Cloudways-ը մերձավոր Ultimate Multisite-ի կողմից քարտեզագրված โดเมինների համար Let's Encrypt վկայականներ թողարկելուց հրաժարվի։** Cloudways-ը կիրառության վրա գործող SSL վկայականը ամեն անգամ փոխում է, և կիրառության վրա առկա նախապես տեղադրված վայլդքարդ վկայականը արգելում է այն յուրաքանչյուր โดเมինի Let's Encrypt-ի թողարկումը, որին հենվում է մեր ინտեգրացիան։

### Առաջարկվող Cloudways SSL կարգավորում Ultimate Multisite ցանցի համար

1. Cloudways-ի **SSL Certificate** տաբում, տեղադրեք ստանդարտ Let's Encrypt վկայագիր՝ ընդգրկելով միայն `your-network.com` և `www.your-network.com`-ը (ոչ կլսիք).
2. Չដាក់եք `*.your-network.com` (կամ ձեր δικτύոյի ցանկացած ենթադիր դոմենի օրինակ) `WU_CLOUDWAYS_EXTRA_DOMAINS`-ում։ Այդ հաստատուն արժեքը պահեք միայն **արտաքին** (external) դոմենների համար։
3. Ստեղծեք տվյալ սեփականատերերի համար անհատական ենթադիր դոմենի վրա կլսիք (wildcard) ցուցակը միայն **DNS** մակարդակում ( `A` գրանցում՝ `*.your-network.com`-ի համար, որը ուղղված է ձեր Cloudways սերվերի IP-ին), որպեսզի ենթադիր ենթադիր դոմենները լուծվեն։ Այնուհետև անհատական կապված հատուկ դոմենների համար SSL-ը ավտոմատ կերպով տրվում է Let's Encrypt-ի միջոցով՝ ինտեգրացիայով։

Եթե ձեր սեփականատերերի հատուկ դոմենները չունեն SSL, ստուգեք Cloudways-ի SSL տաբը։ Եթե այնտեղ ակտիվ է կլսիք վկայագիր, հեռացրեք այն, նորից տրամադրեք ստանդարտ Let's Encrypt վկայագիր միայն հիմնական դոմենի համար և հեռացրեք `WU_CLOUDWAYS_EXTRA_DOMAINS`-ում ցանկացած կլսիք մուտքեր։ Այնուհետև նորից գործարկեք դոմենային քարտեզագրում (կամ սպասեք հաջորդին), և ինտեգրացիան նորից սկսի տալով վկայագրեր յուրաքանչյուր դոմենի համար։

## Խնդիրների լուծում (Troubleshooting)

### API Connection Issues
- Ստուգեք, որ ձեր էլ․ փոստը և API key-ը ճիշտ են։
- Ստուգեք, որ ձեր սերվերը և application ID-ն ճիշտ են։
- Համոզվեք, որ Cloudways-ի հաշվին անհրաժեշտ թույլտվությունները կան։

### SSL Գործողությունների խնդիրներ

- Cloudways-ը պահանջում է, որ SSL վկայագրեր տրամադրելուց առաջ Դոմեինները (domains) වල DNS գրանցումները լինեն վավեր և ուղղված լինեն ձեր սերվերի։
- Ինտեգրացիան SSL վկայագրեր ඉල්ලելուց առաջ DNS գրանցումները ստուգում է։
- Եթե SSL վկայագրեր չեն տրամադրվում, ստուգեք, որ ձեր դոմեինները ճիշտ ուղղված են ձեր սերվերի IP հասցեին։
- **Մեկ օգտատիրոջ համար սահմանված կոնստյունային (custom) դոմեիններ չեն տրամադրվում SSL-ով?** Ստուգեք Cloudways-ի այսպիսի բաժնումը՝ SSL Certificate tab։ Եթե ակտիվ է վայլդքային վկայագիր (wildcard certificate) (որը ձեռքով տեղադրված է կամ ընդգրկում է `*.your-network.com`), Cloudways-ը չի տրամադրի Let's Encrypt վկայագրեր անհատականորեն քարտեզագրված կոնստյունային դոմեինների համար։ Փոխարինեք այն ստանդարտ Let's Encrypt վկայագրով, որը ընդգրկում է միայն հիմնական ցանցի դոմեինները (`your-network.com`, `www.your-network.com`) և հեռացրեք `WU_CLOUDWAYS_EXTRA_DOMAINS`-ից բոլոր վայլդքային մուտքերը։ Այնուհետև նորից սկսեք դոմեինների քարտեզագրումը (կամ սպասեք հաջորդի) և ինտեգրացիան կիշի վերջնական վկայագրերը։

### Դոմեին չի ավելացվել

- Ստուգեք Ultimate Multisite-ի logs-ում (գրանցամատյանում) որևէ սխալի հաղորդագրություն։
- Հաստատեք, որ դոմեինը արդեն Cloudways-ում չի ավելացված։
- Ապահովեք, որ ձեր Cloudways-ի պլանը աջակցում է այն թվին, որքան դոմեիններ եք ավելացնում։
