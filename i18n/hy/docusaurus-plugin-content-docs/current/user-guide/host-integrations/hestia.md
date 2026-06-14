---
title: Hestia Control Panel ինտեգրում
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Ինտեգրումը

Այս ուղեցույց բացատրում է, թե ինչպես կարելի է կազմաձևել Ultimate Multisite-ի Hestia ინտեգրումը՝ ձեր ցանցի մեջ մ్యాպված ադոմինների ավտոմատ ավելացման (և հեռացման) համար որպես Web Domain Aliases Hestia-ում։

- Hestia CLI հղում. v-add-web-domain-alias / v-delete-web-domain-alias
- Պաշտոնական REST API փաստաթուղթ. https://hestiacp.com/docs/server-administration/rest-api.html

## Ինչ է անում
- Երբ Ultimate Multisite-ում ադոմինը մ్యాպվում է, ინտեգրումը կանչում է Hestia API՝ հետևյալ հրամանները կատարելու համար.
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Երբ ադոմինի մ్యాպումը հեռացվում է, այն կատարում է.
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Ըստ Domain Mapping-ի կարգավորման մեջ «Auto-create www subdomain» (www ենթադեշինի ավտոմատ ստեղծում) ընտրության, կարելի է կամ ավելացնել/հեռացնել `www.` անունը։

## Նախապայմաններ
- Գոյություն ունեցող Hestia Web Domain, որը արդեն ուղղված է ձեր WordPress-ի ինստալացիայի։ Ինտեգրումը այս հիմնական ադոմինին կկցի aliases (փոխարինող անուններ)։
- Hestia API-ի մուտքի թույլատրելի լինելը։ Դուք կարող եք հաստատվել՝ օգտագործելով կամ գաղտնաբառ կամ API hash/token։

API-ի մուտքի և հաստատման մանրամասների համար տես Hestia-ի REST API փաստաթղթերը.
https://hestiacp.com/docs/server-administration/rest-api.html

## Կազմաձևում (Wizard → Integrations → Hestia)
Ահա հետևյալ արժեքները տրամադրել.

- `WU_HESTIA_API_URL` (պարտադիր)
  - Հիմնական API ծայրակետը, սովորաբար՝ `https://your-hestia-host:8083/api/`։
- `WU_HESTIA_API_USER` (պարտադիր)
  - Hestia օգտատերը, որն օգտագործվում է API հրամանների համար (սովորաբար՝ `admin`)։
- `WU_HESTIA_API_PASSWORD` կամ `WU_HESTIA_API_HASH` (առնվազն մեկը)
  - Ընտրեք մեկ ինտենտիֆիկացիոն մեթոդ՝ գաղտնաբառ կամ API հեշ/տոկեն։
- `WU_HESTIA_ACCOUNT` (պարտադիր)
  - Web Domain-ի հաշիվը (ներկայացնողը) Hestia-ում. սա CLI-ի առաջին արգումն է։
- `WU_HESTIA_WEB_DOMAIN` (պարտադիր)
  - Գոյություն ունեցող Hestia Web Domain, որը տեսակավորում է ձեր WordPress-ը (փոխանցումները կկապվեն այստեղ)։
- `WU_HESTIA_RESTART` (ընտրովի; սխալ값՝ `yes`)
  - Ինչու՞մ անել սերվիսների վերաբերյալ, երբ փոփոխվում են փոխանցումները։

Դուք կարող եք թույլ տալ այս հաստատունները ներարկվել `wp-config.php`-ի մեջ կամ սահմանել դրանք ձեռքով։

## Կարգավորումը ստուգելը
- Wizard-ի «Testing» քայլում, պլագինը API-ի միջոցով կկանչի `v-list-web-domains <WU_HESTIA_ACCOUNT> json`։ Հաջողության պատասխանը հաստատում է կապը և ինտենտիֆիկացիան։
- Domain-ը քարտեզագրելուց հետո ստուգեք Hestia-ում. Web > հիմնական domain > Aliases (Փոխանցումներ)։ Դուք պետք է տեսնեք նոր փոխանցումը։

## Նշումներ և խորհուրդներ
- Համոզվեք, որ `WU_HESTIA_WEB_DOMAIN`-ը արդեն գոյություն ունի և սեփականատերն է `WU_HESTIA_ACCOUNT`-ի։
- Եթե SSL անհրաժեշտ է, կերպարները կառավարեք Hestia-ում։ Այս ինտեգրացիան ներկայումս միայն փոխանցումներն է մշակում։
- Պլագինը կարող է նաև ավելացնել/հեռացնել `www.<domain>`՝ կախված ձեր Domain Mapping «www subdomain» կարգավորումից։

## API հարցման օրինակ (cURL)
Ստորև ներկայացվում է գաղափարական օրինակ (հարմարեցրեք ձեր միջավայրի համար)։ Ավելի ճշգրիտ պարամետրերի համար սովորական փաստաթուղթում դիմեք։

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Ջնջելու համար (delete) օգտագործեք `cmd=v-delete-web-domain-alias` և նույն արգումները։

## Խնդիրների լուծում (Troubleshooting)
- API-ից HTTP սխալ. ստուգեք, որ `WU_HESTIA_API_URL`-ը հասանելի է և ներառում է `/api`։
- Հավաստագրման սխալներ (Auth errors). հաստատեք `WU_HESTIA_API_USER`-ը և կամ `WU_HESTIA_API_PASSWORD`-ը կամ `WU_HESTIA_API_HASH`-ը։
- Գրանցում/Հիմնական տիրույթի բացակայություն (Missing account/base domain) ը լոգերում. համոզվեք, որ Hestia-ում `WU_HESTIA_ACCOUNT` և `WU_HESTIA_WEB_DOMAIN`-ը սահմանված են և վավեր։

## Հղումներ (References)
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Հղումները (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
