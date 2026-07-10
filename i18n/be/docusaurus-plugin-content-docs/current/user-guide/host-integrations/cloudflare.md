---
title: Інтыграцыя з Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Інтеграцыя з Cloudflare {#cloudflare-integration}

## Агляд {#overview}
Cloudflare — гэта вядомы content delivery network (CDN) і пастаўшчык бяспекі, які дапамагае абараніць і паскорыць працу сайтаў. Гэтая интеграцыя дазваляе аўтаматычнае кіраванне домейнам паміж Ultimate Multisite і Cloudflare, асабліва для ўстаноў на базе субдоменаў (subdomain multisite).

## Функцыі {#features}
- Аўтаматычнае стварэнне субдоменаў у Cloudflare
- Падтрымка субдоменаў, якія праходзяць праз proxy
- Кіраванне DNS-запісамі
- Палепшаны адбывальнік DNS-запісаў у адмініструванні Ultimate Multisite

## Патрабаванні {#requirements}
У наступных канстантах павінны быць вызначаны ў файле `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Інструкцыі па ўстаноўцы {#setup-instructions}

### 1. Апісаць API Key Cloudflare {#1-get-your-cloudflare-api-key}

1. Увайдзіце на свой dashboard Cloudflare
2. Адыйдзіце ў "My Profile" (націсніце на свой электронны адрас у верхнем правым кутку)
3. Выберыце "API Tokens" з меню
4. Стварыце новы API token з наступнымі правамі:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Скопіруйце свой API token

### 2. Апісаць Zone ID {#2-get-your-zone-id}

1. У dashboard Cloudflare выберыце домен, які хочаце выкарыстоўваць
2. Zone ID бачны ў тэбе "Overview", у правым боковым меню пад "API"
3. Скопіруйце Zone ID

### 3. Дадаць канстанты ў wp-config.php {#3-add-constants-to-wp-configphp}

Дадайце наступныя канстанты ў свой файл `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Актываваць интеграцыю {#4-enable-the-integration}

1. У адмініструванні WordPress адыйдзіце ў Ultimate Multisite > Settings
2. Адыйдзіце ў тэб "Domain Mapping"
3. Праскользьце ўнізе да "Host Integrations"
4. Актывуйце интеграцыю Cloudflare
5. Націсніце "Save Changes"

## Як гэта працуе {#how-it-works}

### Кіраванне субдоменамі {#subdomain-management}

Калі ствараецца новы сайт у ўстаноўцы субдоменнага мультысайта:

1. Інтеграцыя адпраўляе запыт да API Cloudflare для дадання CNAME-запісу для субдомена
2. Субдомен па спецыяльнасці наладжаны на праходжанне праз Cloudflare (гэты моцна можна змяніць праз filters)
3. Калі сайт выматваецца, интеграцыя выдаліць субдомен з Cloudflare

### Адбывальнік DNS-запісаў {#dns-record-display}

Інтеграцыя палепшае адбывальнік DNS-запісаў у адмініструванні Ultimate Multisite, што робіцца праз:

1. Запіс DNS-запісаў непасрэдна з Cloudflare
2. Адбыванне інфармацыі аб тым, ці праходзяць запісы праз proxy
3. Паказванне дадатковай інфармацыі аб DNS-запісах

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (раней называўся "Cloudflare for SaaS") — гэта функцыя Cloudflare, якая дазваляе вашым кліентам выкарыстоўваць ўласныя доме́ны з SSL на вашым мультысайце. Гэта рэкамендаваны падыход для ўстаноў мультысайтаў, якія мапуюць доме́ны і выкарыстоўваюць Cloudflare, бо Cloudflare аўтаматычна кіруе выдачай і пановленнем сертыфікатаў SSL для кожнага карыстальніцкага домена.

### Як гэта адрозніваецца ад стандартнай интеграцыі Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Стандартная интеграцыя | Cloudflare Custom Hostnames |
|---|---|---|
| **Мэта** | Аўтаматычна стварае DNS-запісы для субдоменаў | Дазваляе карыстальніцкія (мапаваныя) доме́ны з SSL, кіраваным Cloudflare |
| **Найлепш падыходзіць для** | Мультысайт на базе субдоменаў | Мультысайт, які мапуе доме́ны |
| **SSL** | Кіруецца асобна | Кіруецца Cloudflare аўтаматычна |

### Наладжанне Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. У dashboard Cloudflare адкройце зону для вашыга галоўнага домена.
2. Адыйдзіце ў **SSL/TLS > Custom Hostnames**.
3. Дадайце fallback origin, які ўказвае на IP або hostname вашага сервера.
4. Для кожнага карыстальніцкага домена, мапаванага ў Ultimate Multisite, дадайце запыт Custom Hostname у Cloudflare. Вы можаце аўтаматызаваць гэты крок, выкарыстоўваючы API Cloudflare.
5. Cloudflare выдае і пановіць сертыфікаты TLS для кожнага карыстальніцкага hostname аўтаматычна, як толькі DNS кліента ўказваецца на ваш сетку.

Для поўнай рэперыэнцыі API спадыгніце [Cloudflare Custom Hostnames documentation](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Абнаўленне тэматычнай прасторы
З датыкай Ultimate Multisite v2.6.1 гэтая функцыя называецца **Cloudflare Custom Hostnames** ў усіх настройках і ярлыках плагіна. Ранейшыя версіі выкарыстоўвалі назву "Cloudflare for SaaS", якая з'яўляецца падлёкай назвай прадукту Cloudflare.
:::

## Важнае паведамленне {#important-notes}

З датыкай недавніх абнаўленняў Cloudflare, wildcard proxying цяпер доступны для ўсіх кліентаў. Гэта азначае, што стандартная интеграцыя DNS Cloudflare стала менш крытычнай для ўстаноў субдоменнага мультысайта, чым рані было, бо вы проста можаце наладзіць wildcard DNS-запіс у Cloudflare.

## Выяўленне праблем {#troubleshooting}

### Праблемы з падключэннем API {#api-connection-issues}
- Праверце, ці правільны ваш API token і ці ёсць у яго неабходныя права
- Праверце, ці правільны ваш Zone ID
- Убедзіцеся, што ваш аккаунт Cloudflare мае неабходныя права

### Субдомен не дададзены {#subdomain-not-added}
- Праверце журналы Ultimate Multisite на наяўнасць паведамленняў аб памылках
- Убедзіцеся, што субдомен яшчэ не дададзены ў Cloudflare
- Убедзіцеся, што ваш план Cloudflare падтрымлівае колькасць DNS-запісаў, якія вы ствараеце

### Праблемы з proxying {#proxying-issues}
- Калі вы не хочаце, каб субдомены праходзілі праз proxy, вы можаце выкарыстоўваць filter `wu_cloudflare_should_proxy`
- Nieкі функциональнасці можа працаваць не правільна ў рэжыме proxy (напрыклад, некаторыя функцыі адміністрування WordPress)
- Раскансультавацца з выкарыстаннем Page Rules Cloudflare, каб праскочыць кэшаванне для адмініструвальных старонкі.
