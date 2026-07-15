---
title: Udityaniso lwe-ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# Udibaniso lwe-ServerPilot

## Ushwankathelo {#overview}
I-ServerPilot yinkonzo yelifu yokusingatha WordPress kunye nezinye iiwebhusayithi ze-PHP kwiiseva e-DigitalOcean, Amazon, Google, okanye nakuwuphi na omnye umboneleli weseva. Olu dibaniso luvumela ungqamaniso oluzenzekelayo lweedomain kunye nolawulo lwezatifikethi ze-SSL phakathi kwe-Ultimate Multisite ne-ServerPilot.

## Iimpawu {#features}
- Ungqamaniso oluzenzekelayo lweedomain
- Ulawulo lwezatifikethi ze-SSL nge-Let's Encrypt
- Uhlaziyo oluzenzekelayo lwe-SSL

## Iimfuno {#requirements}
Ezi constants zilandelayo kufuneka zichazwe kwifayile yakho `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Imiyalelo Yokuseta {#setup-instructions}

### 1. Fumana Iinkcukacha zakho ze-ServerPilot API {#1-get-your-serverpilot-api-credentials}

1. Ngena kwi-dashboard yakho ye-ServerPilot
2. Yiya ku-"Account" > "API"
3. Yenza isitshixo esitsha se-API ukuba awukabi naso
4. Kopisha i-Client ID yakho kunye ne-API Key

### 2. Fumana i-App ID yakho {#2-get-your-app-id}

1. Kwi-dashboard yakho ye-ServerPilot, yiya ku-"Apps"
2. Khetha i-app apho i-WordPress multisite yakho isingathwe khona
3. I-App ID ibonakala kwi-URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Yongeza ii-Constants kwi-wp-config.php {#3-add-constants-to-wp-configphp}

Yongeza ezi constants zilandelayo kwifayile yakho `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Vula Udibaniso {#4-enable-the-integration}

1. Kwi-admin yakho ye-WordPress, yiya ku-Ultimate Multisite > Settings
2. Yiya kwithebhu ethi "Domain Mapping"
3. Skrolela ezantsi ku-"Host Integrations"
4. Vula udibaniso lwe-ServerPilot
5. Cofa ku-"Save Changes"

## Isebenza Njani {#how-it-works}

### Ungqamaniso Lweedomain {#domain-syncing}

Xa idomain imaphiwe kwi-Ultimate Multisite:

1. Udibaniso lufumana uluhlu lwangoku lweedomain kwi-ServerPilot
2. Longeza idomain entsha kuluhlu (kunye nenguqulelo ye-www ukuba iyasebenza)
3. Lithumela uluhlu oluhlaziyiweyo kwi-ServerPilot nge-API
4. I-ServerPilot ihlaziya uluhlu lweedomain zesicelo sakho

### Ulawulo Lwezatifikethi ze-SSL {#ssl-certificate-management}

Emva kokuba iidomain zingqamanisiwe:

1. Udibaniso luvula ngokuzenzekelayo i-AutoSSL kwisicelo sakho
2. I-ServerPilot ilawula ukukhutshwa nokufakwa kwesatifikethi se-SSL isebenzisa i-Let's Encrypt
3. I-ServerPilot ikwalawula uhlaziyo oluzenzekelayo lwezatifikethi ze-SSL

## Ukuqinisekiswa Kwesatifikethi se-SSL {#ssl-certificate-verification}

Udibaniso luqwalaselwe ukwandisa inani lamalinge okuqinisekisa isatifikethi se-SSL se-ServerPilot, kuba kungathatha ixesha elithile ukuba i-ServerPilot ikhuphe kwaye ifake izatifikethi ze-SSL. Ngokungagqibekanga, iya kuzama ukuya kutsho kumaxesha ama-5, kodwa oku kungalungiswa kusetyenziswa ii-filters.

## Ukusombulula Iingxaki {#troubleshooting}

### Iingxaki zoQhagamshelo lwe-API {#api-connection-issues}
- Qinisekisa ukuba i-Client ID yakho kunye ne-API Key zichanekile
- Jonga ukuba i-App ID yakho ichanekile
- Qinisekisa ukuba i-akhawunti yakho ye-ServerPilot ineemvume eziyimfuneko

### Iingxaki zeZatifikethi ze-SSL {#ssl-certificate-issues}
- I-ServerPilot ifuna ukuba iidomain zibe neerekhodi ze-DNS ezisemthethweni ezikhomba kwiseva yakho phambi kokukhupha izatifikethi ze-SSL
- Ukuba izatifikethi ze-SSL azikhutshwa, jonga ukuba iidomain zakho zikhomba ngokuchanekileyo kwidilesi ye-IP yeseva yakho
- Kungathatha ixesha elithile ukuba i-ServerPilot ikhuphe kwaye ifake izatifikethi ze-SSL (ngokuqhelekileyo imizuzu emi-5 ukuya kweli-15)

### Idomain Ayongazwanga {#domain-not-added}
- Jonga iilog ze-Ultimate Multisite nawaphi na imiyalezo yempazamo
- Qinisekisa ukuba idomain ayikongezwanga sele kwi-ServerPilot
- Qinisekisa ukuba isicwangciso sakho se-ServerPilot sixhasa inani leedomain ozongezayo

### Ukususwa Kwedomain {#domain-removal}
- Okwangoku, i-ServerPilot API ayiboneleli ngendlela yokususa iidomain nganye-nganye
- Xa imephu yedomain isusiwe kwi-Ultimate Multisite, udibaniso luya kuhlaziya uluhlu lweedomain kwi-ServerPilot ukuze lungabandakanyi idomain esusiweyo
