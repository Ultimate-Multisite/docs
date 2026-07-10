---
title: Інтыграцыя Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Інтыграцыя з Hostinger (hPanel) {#hostinger-hpanel-integration}

## Агляд {#overview}

Hostinger — папулярны провайдар веб-хастынгу з сучаснай панеллю кіравання, якая называецца hPanel. Інтыграцыя Ultimate Multisite з Hostinger дазваляе аўтаматычны сінк Хен доменаў паміж Ultimate Multisite і hPanel Hostinger. Гэта дазваляе вам аўтаматычна кіраваць маппінгам доменаў і субдоменаў, не пакідаjąчы адмінастрацыі WordPress.

## Функцыі {#features}

- Аўтаматычнае стварэнне доменаў-аддонкаў у hPanel
- Аўтаматычнае стварэнне субдоменаў у hPanel (для ўстаноўлення ў палічку субдоменных мартісайтаў)
- Выбыванне доменаў пры выдаленні маппінг-доменаў
- Безшоўная інтыграцыя з API кіравання доменамі hPanel

## Патраebaванні {#requirements}

Для выкарыстання інтыграцыі Hostinger вам патрэбны:

1. Акаунт Hostinger з доступом да hPanel
2. Токен API ад Hostinger
3. Вызначэнне наступных канстант у файле `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Апцыянальна вы можаце таксама вызначыць:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Паўгледжаны кінтакт API
```

## Інструкцыі па наладзе {#setup-instructions}

### 1. Генерацыя токена API Hostinger {#1-generate-your-hostinger-api-token}

1. Увайдзіце ў свой акаунт Hostinger і атклікайцеся да hPanel.
2. Прыходзьце ў **Account Settings** → **API Tokens**.
3. Націсніце **Create New Token**.
4. Дайце сваім токену апісальную назву (напрыклад, "Ultimate Multisite").
5. Выберыце неабходныя права:
   - Domain management
   - Subdomain management
6. Скопіруйце згенераваны токен і захоўце яго ў бяспечнай месцы.

### 2. Вызначэнне ID акаунта {#2-find-your-account-id}

1. У hPanel зайдзіце ў **Account Settings** → **Account Information**.
2. Ваш ID акаунта адлюстраваны на гэтай старонцы.
3. Скопіруйце і захавайце гэты ID для наступнага кроку.

### 3. Дадаванне канстант у wp-config.php {#3-add-constants-to-wp-configphp}

Дадайце наступныя канстанты ў свой файл `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Калі ваш акаунт Hostinger выкарыстоўвае іншы кінтакт API, вы можаце яго наладзіць:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Актывацыя інтыграцыі {#4-enable-the-integration}

1. У адмінастрацыі WordPress зайдзіце ў **Ultimate Multisite > Settings**.
2. Прыходзьце на тэчку **Domain Mapping**.
3. Зробіце скрол да **Host Integrations**.
4. Актывуйце інтыграцыю **Hostinger (hPanel)**.
5. Націсніце **Save Changes**.

## Як гэта працуе {#how-it-works}

### Домены-аддонанкі (Addon Domains) {#addon-domains}

Калі вы маппіруеце домен у Ultimate Multisite:

1. Інтыграцыя адпраўляе запыт да API Hostinger для дадавання домена ў якасці домена-аддонка.
2. Домен наладжаецца так, каб паказваць на ваш гарацыйны каталог.
3. Калі маппінг домена выбываецца, інтыграцыя аўтаматычна выдаляе домен-аддонак з hPanel.

### Субдомены (Subdomains) {#subdomains}

Для ўстаноўлення ў палічку субдоменных мартісайтаў, калі ствараецца новы сайт:

1. Інтыграцыя выцягвае частку субдомена з поўнага домена.
2. Яна адпраўляе запыт да API Hostinger для дадавання субдомена.
3. Субдомен наладжаецца так, каб паказваць на ваш гарацыйны каталог.

## Важнае заўвага {#important-notes}

- Інтыграцыя выкарыстоўвае REST API Hostinger для злучэння з вашым акаўнтам.
- Ваш токен API павінен мець неабходныя права для кіравання доменом і субдоменам.
- Інтыграцыя не займаецца канфігурацыяй DNS; домены павінны ўжо паказвацца на ваш акаунт Hostinger.
- Запыты API адпраўляюцца бяспечна па протокола Harmony.
- Захапляйце свой токен API і ніколі не дзеліце яго публічна.

## Выяўленне і выпраўленне памылак {#troubleshooting}

### Праблемы з злучэннем API {#api-connection-issues}

- Праверце, ці правільны ваш токен API і ці не прайшоў яго тэрмін дзеяння.
- Праверце, ці правільны ваш ID акаунта.
- Убедзіцеся, што ваш токен API мае неабходныя права для кіравання доменом.
- Праверце, што ваш акаунт Hostinger актыўны і ў добрай паступальнай пазіцыі.

### Домен не дададзены {#domain-not-added}

- Праверце журналы Ultimate Multisite на наяўнасць паведамленняў аб памылцы.
- Праверце, што домен ужо не дададзены ў ваш акаунт Hostinger.
- Убедзіцеся, што ваш акаунт Hostinger не дасягнуў значнасці па доменах-аддонкавых.
- Патвердзіце, што домен належным чынам паказваецца на вашыя імявыя серверы Hostinger.

### Праблемы з сертыфікатам SSL {#ssl-certificate-issues}

- Інтыграцыя не займаецца выдачай сертыфікатаў SSL.
- Hostinger звычайна прадугледжвае бясплатныя сертыфікаты SSL праз AutoSSL.
- Вы можаце кіраваць сертыфікатамі SSL непасрэдна ў hPanel у раздзеле **SSL/TLS**.
- Альтэрнатыўна, выкарыстоўвайце Let's Encrypt з функцыяй AutoSSL Hostinger.

## Падтрымка {#support}

Для дадатчай дапамогі з інтыграцыяй Hostinger, калі ласка, зверніцеся да:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
