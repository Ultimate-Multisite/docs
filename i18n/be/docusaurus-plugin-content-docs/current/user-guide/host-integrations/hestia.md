---
title: Інтыграцыя з панэлі Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Інтеграцыя з Hestia Control Panel

Гутэе паказана, як накіраваць і ўсталяваць інтэграцыю Ultimate Multisite з Hestia, каб мапіраваныя домены ў вашай сетцы аўтаматычна дадаваліся (і выдаляліся) як Web Domain Aliases у Hestia.

- Спасылкі на Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Афіцыйная дакументацыя REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Што яна робіць
- Калі домен мапіраваецца ў Ultimate Multisite, інтэграцыя выконвае выклік Hestia API для прагона:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Калі мапіраванне домена выдаляецца, яна прагоняе:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Апцыянальна дадае/выдаляе псеўдонім `www.` залежна ад вашага надыстаўкі «Auto-create www subdomain» у настройках Domain Mapping.

## Папярэднія патрабаванні
- Існуючы Web Domain Hestia, які ўжо паказвае на вашу ўстаноўку WordPress. Інтэграцыя дадасць псеўдонімы да гэтага асноўнага домену.
- Уключаны доступ да Hestia API. Вы можаце аўтэнтыкавацца, выкарыстоўваючы пароль або API hash/token.

Для ўключэння доступу API і дэталяў аўтэнтыкацыі спаказвалася на дакументацыю Hestia REST API:
https://hestiacp.com/docs/server-administration/rest-api.html

## Настройванне (Wizard → Integrations → Hestia)
Укажыце наступныя значэнні:

- `WU_HESTIA_API_URL` (не абавязкова)
  - Асноўная API-точка, звычайна `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (не абавязкова)
  - Па)}}{Hestia карыстальнік, выкарыстоўваны для API-команд (часта `admin`).
- `WU_HESTIA_API_PASSWORD` або `WU_HESTIA_API_HASH` (адныму)
  - Выберыце адзін спосаб аўтэнтыкацыі: пароль або API hash/token.
- `WU_HESTIA_ACCOUNT` (не абавязкова)
  - Канкт (власнік) Web Domain у Hestia; гэта першы аргумент для CLI.
- `WU_HESTIA_WEB_DOMAIN` (не абавязкова)
  - Існуючы Web Domain Hestia, які паслугоўвае вашему WordPress (тут будуць дададзены псеўдонімы).
- `WU_HESTIA_RESTART` (не абавязкова; па спісы па лету `yes`)
  - Ці перазапускаць/перакарантваць паслугі пасля змены псеўдонімаў.

Вы можаце даць wizard-у ўстаўляць гэтыя канстанты ў `wp-config.php` або вызначыць іх навадоў.

## Праверка ўстаноўкі
- На этапе «Testing» у wizard-зе, plugin выклікае `v-list-web-domains <WU_HESTIA_ACCOUNT> json` праз API. Успешная адказ сцвярджае падключэнне і аўтэнтыкацыю.
- Пасля мапіравання доменам, праверце ў Hestia: Web > асноўны домен > Aliases. Вы павінны ўбачыць дададзены новы псеўдонім.

## Заўвагі і парады
- Убедзіцеся, што `WU_HESTIA_WEB_DOMAIN` ўжо існуе і належыць `WU_HESTIA_ACCOUNT`.
- Калі патрабуецца SSL, кіруйце сертыфікаты ў Hestia. Гэтая інтэграцыя на дадзены момант працуе толькі з псеўдонімамі.
- Plugin таксама можа дадаць/выдаліць `www.<домен>` залежна ад вашага надыстаўкі «www subdomain» у Domain Mapping.

## Прыклад выкліку API (cURL)
Падاني ва ўяўным прыкладах (адыстылюйце яго пад свой асяроддзе). Спаказваецца на афіцыйную дакументацыю для точных параметраў.

```
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
```

Для выдалення выкарыстоўвайце `cmd=v-delete-web-domain-alias` і тыя ж аргументы.

## Выяўленне праблем
- HTTP памылка ад API: праверце, што `WU_HESTIA_API_URL` даступны і ўключае `/api`.
- Памылкі аўтэнтыкацыі: пацверце `WU_HESTIA_API_USER` і або `WU_HESTIA_API_PASSWORD`, або `WU_HESTIA_API_HASH`.
- «Адсутны канкт/асноўны домен» у логах: пераканайцеся, што `WU_HESTIA_ACCOUNT` і `WU_HESTIA_WEB_DOMAIN` ўсталяваны і валідныя ў Hestia.

## Спасылкі
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
