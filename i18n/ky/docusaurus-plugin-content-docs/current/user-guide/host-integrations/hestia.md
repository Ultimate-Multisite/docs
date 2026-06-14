---
title: Hestia Контрол панети интеграциясы
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Интеграциясы

Бул колдонмода Ultimate Multisite Hestia интеграциясын кантип конфигурациялоону түшүндүрөбүз, ошол жерде тандалган домендер (mapped domains) ваша жетишкен тармагындагы домендерди Hestia-da Web Domain Aliases катары автоматтык түрдө кошууну жана алып салууну кантип ишке ашыруу керектигин баяндайт.

- Hestia CLI референси: v-add-web-domain-alias / v-delete-web-domain-alias
- Расмий REST API документациясы: https://hestiacp.com/docs/server-administration/rest-api.html

## Ал кандай иштешет?
- Ultimate Multisiteде домен карталланганда, интеграция Hestia API'син чакырып аткарат:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Домен карталышы алындалганда, ал төмөнкү команданы аткарат:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Домен Карталбаруу (Domain Mapping) параметрлериндеги "Auto-create www subdomain" (www поддоменын автоматтык түрдө түзүү) жөндөмү боюнча `www.` алиасын кошуу же алып салууну мүмкүн кылат.

## Милдеттүү шарттар
- Алдын ала WordPress орнотулган ваша Hestia Web Domain'и болушу керек. Интеграция бул негизги доменгө алиас (aliases) тиешелүү болот.
- Hestia API-сине кирүү мүмкүнчүлүгү активдүү болушу керек. Сиз пароль же API хеши/токен аркылуу идентификациялоо жүргүзө аласыз.

API кирүү жана идентификациялоо деталдары үчүн Hestia'нын REST API документациясына караңыз:
https://hestiacp.com/docs/server-administration/rest-api.html

## Конфигурация (Wizard → Integrations → Hestia)
Төмөнкү маанилерди киргизиңиз:

`WU_HESTIA_API_URL` (милдеттүү)
  - Базалык API конекти, адатта `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (милдеттүү)
  - API буйруктары үчүн колдонулган Hestia колдонуучусу (көбүнчө `admin`).

`WU_HESTIA_API_PASSWORD` же `WU_HESTIA_API_HASH` (кемдеринди бирден тандаңыз)
  - Бир аутентификация ыкмасын тандаңыз: пароль же API хеши/токен.

`WU_HESTIA_ACCOUNT` (милдеттүү)
  - Hestiaда Web Domainдин ээси болушун көрсөткөн эсеп; бул CLI үчүн биринчи аргумент.

`WU_HESTIA_WEB_DOMAIN` (милдеттүү)
  - Сиздин WordPress'тиңизди камсыз кылган, учурда бар Hestia Web Domainи (алянстар мына жерге тиркелет).

`WU_HESTIA_RESTART` (опционалдуу; дефолту `yes`)
  - Алаңдарды алмаштырдан кийин кызматтарды кайра баштоо/жаңылоо керекпи же жокпу.

Сиз бул константаларды `wp-config.php`-ка киргизе аласыз, же аларды колдонуч менен өзүңүз аныктай аласыз.

## Орноктоону текшерүү
- "Testing" (Тестирлөө) кадамдагы wizardда плагин API аркылуу `v-list-web-domains <WU_HESTIA_ACCOUNT> json` буйругун алат. Ийгиликтүү жооп байланыш жана аутентификацияны тастыктайт.
- Доменди картадан өткөндөн кийин, Hestiaда текшериңиз: Web > базалык домен > Aliases (Алианстар). Жаңы алиас кошулганын көрүшүңүз керек.

## Эскертүүлөр жана кеңештер
- `WU_HESTIA_WEB_DOMAIN` алдын ала бар экенин жана `WU_HESTIA_ACCOUNT` тарабынан ээки экенин камсыздаңыз.
- SSL талап кылындаса, сертификаттарды Hestiaда башкарыңыз. Бул интеграция учурда гана алианстарды иштетет.
- Домен карта маппинг "www subdomain" (www поддомен) жөндөмүңүзгө жараша `www.<domain>` кошулушу же алып салууну да чакырышы мүмкүн.

## API чалышы мисалы (cURL)
Төмөндө концептуалдык мисал берилген (сиздин чөйрөнүңүз менен тууралаңыз). Так параметрлер үчүн расмий документтерди карап чыгыңыз.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (же &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (кошууру кошум үчүн)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Ушул аракетти жок кылуу үчүн `cmd=v-delete-web-domain-alias` жана ошол аргументтерди колдонуңуз.

## Кайрылуу маселелерин чечүү
- APIдан HTTP катасы келсе: `WU_HESTIA_API_URL`-дун `/api` менен аяктаган жана жеткиликтүү экенин текшериңиз.
- Автотификация (Auth) каталары: `WU_HESTIA_API_USER` жана же `WU_HESTIA_API_PASSWORD` же `WU_HESTIA_API_HASH`-тан бирин тактаңыз.
- Журналдарда “Missing account/base domain” деген билдирүү келсе: Hestia системасында `WU_HESTIA_ACCOUNT` жана `WU_HESTIA_WEB_DOMAIN` белгиленген жана туура экенин текшериңиз.

## Маалыматтар
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Референси (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
