---
title: Hestia Басқару Панелі Интеграциясы
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel Интеграция {#hestia-control-panel-integration}

Бұл нұсқаулық Ultimate Multisite Hestia интеграциясын қалай реттеу керектігін түсіндіреді, сонда сіздің желіңізде карталаған домендер автоматты түрде Hestia-да Web Domain Aliases (Web Домен Әліпбиілері) ретінде қосылады (және алып тасталады).

- Hestia CLI сілтемесі: v-add-web-domain-alias / v-delete-web-domain-alias
- Ресми REST API құжаттамасы: https://hestiacp.com/docs/server-administration/rest-api.html

## Бұл не істейді {#what-it-does}
- Ultimate Multisite-те домен карталалған кезде, интеграция Hestia API-ға келесілерді орындау үшін шақырады:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Домен картасы алынылған кезде, ол келесіні орындайды:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Домен Карталау параметрлеріндегі "Auto-create www subdomain" (www поддоменді автоматты жасау) орнатыңызға байланысты `www.` әліпбиіін қосу/алып тастау мүмкіндігі.

## Алдын ала қажеттіліктер {#prerequisites}
- WordPress орнатуыңызға арнайы бағытталған, бар Hestia Web Domain болуы керек. Интеграция бұл негізгі доменге әліпбиілерді қосады.
- Hestia API қолжетімділігі іске қосылған болуы керек. Сіз пароль немесе API хеш/токен арқылы аутентификациялауға боласыз.

API қолжетімділігін және аутентификация деталдарын Hestia-ның REST API құжаттамасында қараңыз:
https://hestiacp.com/docs/server-administration/rest-api.html

## Реттеу (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Төмендегі мәндерді көрсетіңіз:

`WU_HESTIA_API_URL` (міндетті)
  - Негізгі API конект нүктесі, ихэвелди `https://your-hestia-host:8083/api/`.

`WU_HESTIA_API_USER` (міндетті)
  - API командалары үшін Hestia қолданылатын пайдаланушы (көбінесе `admin`).

`WU_HESTIA_API_PASSWORD` немесе `WU_HESTIA_API_HASH` (кемін болсын бірі)
  - Бір аутентификация әдісін таңдаңыз: пароль немесе API хэш/токен.

`WU_HESTIA_ACCOUNT` (міндетті)
  - Hestia-дағы Web Domain-нің есептік жазушысы (мысалы, CLI-дің алғашқы аргументі).

`WU_HESTIA_WEB_DOMAIN` (міндетті)
  - WordPress-тің жұмыс істейтін бар Hestia Web Domain-і (бұдан кейін алиас-тар осы жерге қосылады).

`WU_HESTIA_RESTART` (опционалды; стандартты мәні `yes`)
  - Алиас өзгергеннен кейін қызметтерді қайта жүктеу/бастау керек пе.

Сіз бұл константаларды `wp-config.php`-ке енгізе аласыз немесе оларды қолмен анықтай аласыз.

## Орнатуды тексеру {#verifying-setup}
- Wizard-дың "Testing" (Тест) қадамында плагин API арқылы `v-list-web-domains <WU_HESTIA_ACCOUNT> json` командасын атайды. Сәтті жауап бұл қосылым мен аутентификацияның дұрыс жұмыс істеп тұрғанын растайды.
- Domain-ды картадан кейін, Hestia-да: Web > негізгі domain > Aliases (Алиас) бөліміне қараңыз. Жаңа алиас қосылғанын көресіз.

## Ескертулер және кеңестер {#notes--tips}
- `WU_HESTIA_WEB_DOMAIN` алдын ала бар екенін және ол `WU_HESTIA_ACCOUNT`-тың иелігінде екенін қамтамасыз етіңіз.
- SSL қажет болса, сертификаттарды Hestia-да басқарыңыз. Бұл интеграция қазір тек алиас-тарды ғана басқарады.
- Domain Mapping "www subdomain" (www поддомен) параметрлеріне байланысты плагин `www.<domain>`-ды қосу немесе алып тастай алады.

## API шақыру мысалы (cURL) {#example-api-call-curl}
Төменде концептуалды мысал берілген (окруажайыңызға реттеңіз). Нақты параметрлер үшін ресми құжатқа қараңыз.

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

Өшіру үшін `cmd=v-delete-web-domain-alias` және сол аргументтерді қолданыңыз.

## Қателерді шешу (Troubleshooting) {#troubleshooting}
- API-дан HTTP қате: `WU_HESTIA_API_URL`-дің `/api` арқылы қол жетімді екенін және оның соңында `/api` бар екенін тексеріңіз.
- Аутентификация қателері: `WU_HESTIA_API_USER` мен немесе `WU_HESTIA_API_PASSWORD` немесе `WU_HESTIA_API_HASH`-ты растаңыз.
- Журналдарда "account/base domain жоқ" деген хабарлама: Hestia-да `WU_HESTIA_ACCOUNT` және `WU_HESTIA_WEB_DOMAIN` белгіленгенін және дұрыс екенін тексеріңіз.

## Сілтемелер {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Сілтемелері (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
