---
title: Integrácia Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrácia s Hestia Control Panel

Toto smernice vysvetľuje, ako nakonfigurovať integráciu Ultimate Multisite Hestia tak, aby domény mapované v vašej sieti sa automaticky pridávali (a odstraňovali) ako Web Domain Aliases v Hestii.

- Referencia CLI Hestia: `v-add-web-domain-alias` / `v-delete-web-domain-alias`
- Oficiálna dokumentácia REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Čo to robí {#what-it-does}
- Keď je doména mapovaná v Ultimate Multisite, integrácia volá Hestia API na vykonanie:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Keď sa mapovanie domény odstráni, vykonáva:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Voliteľne pridáva/odstraňuje alias `www.` v závislosti od vašej nastavenia „Auto-create www subdomain“ v nastaveniach mapovania domén.

## Predpoklady {#prerequisites}
- Existujúca Hestia Web Domain, ktorá už ukazuje na vašu instaláciu WordPress. Integrácia bude pridať aliasy k tejto základnej doméně.
- Akurovaný prístup k Hestia API. Môžete sa autentizovať pomocou hesla alebo API hash/token.

Pre zapnutie prístupu k API a detaily autentifikácie si pozrite dokumentáciu REST API Hestia:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurácia (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
Uvedomte si nasledujúce hodnoty:

- `WU_HESTIA_API_URL` (požadované)
  - Základný API bod, typicky `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (požadovaný)
  - Hestia používateľ pre API príkazy (často `admin`).
- `WU_HESTIA_API_PASSWORD` alebo `WU_HESTIA_API_HASH` (najmä jeden)
  - Vyberte jednu autentizačnú metódu: heslo alebo API hash/token.
- `WU_HESTIA_ACCOUNT` (požadovaný)
  - Účet (vlastník) Web Domény v Hestii; je to prvý argument pre CLI.
- `WU_HESTIA_WEB_DOMAIN` (požadovaný)
  - Existujúca Web Doména v Hestii, ktorá slúži váš WordPress (alias sa tu bude pridať).
- `WU_HESTIA_RESTART` (voliteľný; štandardná hodnota `yes`)
  - Čo robiť po zmeny aliasov: či restartovať/vyčistiť služby.

Môžete tieto kon constanty vložiť do súboru `wp-config.php`, alebo ich definovať manuálne.

## Kontrola nastavenia {#verifying-setup}
- V kroku „Testovanie“ v wizard sa plugin volá na API pomocou `v-list-web-domains <WU_HESTIA_ACCOUNT> json`. Úspešná odpoveď potvrdí pripojenie a autentifikáciu.
- Po mapovaní domény si prejdite do Hestii: Web > základná doména > Aliasy. Mali by ste vidieť pridaný nový alias.

## Poznámky a tipy {#notes--tips}
- Uistite sa, že `WU_HESTIA_WEB_DOMAIN` už existuje a je vlastnený `WU_HESTIA_ACCOUNT`.
- Ak je SSL potrebný, správajte certifikáty v Hestii. Toto integrovaný riešenie momentálne spracúva len aliasy.
- Plugin môže tiež pridať/odstrániť `www.<domain>` v závislosti od nastavenia „www subdomain“ v mapovaní domén.

## Príklad API volania (cURL) {#example-api-call-curl}
Tu je koncepčný príklad (upravte ho podľa vášho okolia). Pre presné parametre sa odporúčam čítať oficiálnu dokumentáciu.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (alebo &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias na pridanie)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Na odstránenie použite `cmd=v-delete-web-domain-alias` a rovnaké argumenty.

## Řešenie problémov (Troubleshooting) {#troubleshooting}
- HTTP chyba z API: overčerpanie, či je `WU_HESTIA_API_URL` dostupný a obsahuje `/api`.
- Chyby s autentizáciou: potvrďte, že sú správne nastavené `WU_HESTIA_API_USER` a buď `WU_HESTIA_API_PASSWORD`, alebo `WU_HESTIA_API_HASH`.
- „Chýba účtu/základného domény“ v logoch: uistite sa, že sú nastavené a platné hodnoty pre `WU_HESTIA_ACCOUNT` a `WU_HESTIA_WEB_DOMAIN` v Hestii.

## Referencie {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referencia CLI Hestia (Alias): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
