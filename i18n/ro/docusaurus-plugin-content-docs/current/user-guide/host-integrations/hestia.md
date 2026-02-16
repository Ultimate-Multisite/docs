---
title: Integrare cu Panoul de Control Hestia
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrarea cu Panoul de Control Hestia

Acest ghid explică cum să configurezi integrarea Ultimate Multisite cu Hestia, astfel încât domeniile mapate în rețeaua ta să fie adăugate (și eliminate) automat ca Aliasuri de Domeniu Web în Hestia.

- Referință CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Documentația oficială REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Ce Face
- Când un domeniu este mapat în Ultimate Multisite, integrarea apelează API-ul Hestia pentru a rula:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Când o mapare de domeniu este eliminată, rulează:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opțional, adaugă/elimină aliasul `www.` în funcție de setarea „Auto-creare subdomeniu www" din setările Domain Mapping.

## Cerințe Preliminare
- Un Domeniu Web Hestia existent care indică deja către instalarea ta WordPress. Integrarea va atașa aliasurile la acest domeniu de bază.
- Acces API Hestia activat. Te poți autentifica folosind fie o parolă, fie un hash/token API.

Consultă documentația REST API a Hestia pentru activarea accesului API și detalii despre autentificare:
https://hestiacp.com/docs/server-administration/rest-api.html

## Configurare (Wizard → Integrations → Hestia)
Furnizează următoarele valori:

- `WU_HESTIA_API_URL` (obligatoriu)
  - Endpoint-ul API de bază, de obicei `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (obligatoriu)
  - Utilizatorul Hestia folosit pentru comenzile API (de obicei `admin`).
- `WU_HESTIA_API_PASSWORD` sau `WU_HESTIA_API_HASH` (cel puțin unul)
  - Alege o metodă de autentificare: parolă sau hash/token API.
- `WU_HESTIA_ACCOUNT` (obligatoriu)
  - Contul (proprietarul) Domeniului Web în Hestia; acesta este primul argument pentru CLI.
- `WU_HESTIA_WEB_DOMAIN` (obligatoriu)
  - Domeniul Web Hestia existent care servește WordPress-ul tău (aliasurile vor fi atașate aici).
- `WU_HESTIA_RESTART` (opțional; implicit `yes`)
  - Dacă să repornească/reîncarce serviciile după modificările de alias.

Poți lăsa wizard-ul să injecteze aceste constante în `wp-config.php`, sau le poți defini manual.

## Verificarea Configurării
- În pasul „Testing" al wizard-ului, plugin-ul apelează `v-list-web-domains <WU_HESTIA_ACCOUNT> json` prin API. Un răspuns de succes confirmă conectivitatea și autentificarea.
- După maparea unui domeniu, verifică în Hestia: Web > domeniul de bază > Aliases. Ar trebui să vezi noul alias adăugat.

## Note și Sfaturi
- Asigură-te că `WU_HESTIA_WEB_DOMAIN` există deja și este deținut de `WU_HESTIA_ACCOUNT`.
- Dacă este necesar SSL, gestionează certificatele în Hestia. Această integrare se ocupă momentan doar de aliasuri.
- Plugin-ul poate adăuga/elimina și `www.<domain>` în funcție de setarea „www subdomain" din Domain Mapping.

## Exemplu de Apel API (cURL)
Mai jos este un exemplu conceptual (ajustează-l pentru mediul tău). Consultă documentația oficială pentru parametrii exacți.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (sau &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (aliasul de adăugat)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

Pentru ștergere, folosește `cmd=v-delete-web-domain-alias` și aceiași parametri.

## Depanare
- Eroare HTTP de la API: verifică dacă `WU_HESTIA_API_URL` este accesibil și include `/api`.
- Erori de autentificare: confirmă `WU_HESTIA_API_USER` și fie `WU_HESTIA_API_PASSWORD`, fie `WU_HESTIA_API_HASH`.
- „Missing account/base domain" în loguri: asigură-te că `WU_HESTIA_ACCOUNT` și `WU_HESTIA_WEB_DOMAIN` sunt setate și valide în Hestia.

## Referințe
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referință CLI Hestia (Aliasuri): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
