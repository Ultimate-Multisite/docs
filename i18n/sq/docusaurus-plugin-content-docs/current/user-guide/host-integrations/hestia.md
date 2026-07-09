---
title: Integrimi i Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integrimi me Panel Kontrolli Hestia {#hestia-control-panel-integration}

Ky udhëzues ju shpjegohet se si të konfigurojini integrimin e Ultimate Multisite Hestia, që automatikisht shtojnë (dhe heqin) domenët e mapuar në rrjetin tuaj si Alias Web Domeni në Hestia.

- Referenca CLI Hestia: v-add-web-domain-alias / v-delete-web-domain-alias
- Dokumentacioni i zyrtar REST API: https://hestiacp.com/docs/server-administration/rest-api.html

## Çfarë bën kjo {#what-it-does}
- Kur një domen mapohet në Ultimate Multisite, integrimi thirr API-n e Hestia për të ekzekutuar:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kur heqet mapimi i domeneve, ajo ekzekuton:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opsional shton/heq aliasin `www.` në varësi të opsioneve tuaja "Auto-create www subdomain" (Krijimi automatik i ndërprerjes www) në cilësimet e Mapimit të Domenit.

## Përparime Paraprake {#prerequisites}
- Një Hestia Web Domain ekzistuese që tashmë i drejtohet instalimit tuaj WordPress. Integrimi do të bashkojë alias-e me këtë domen bazë.
- Qasja në API-n e Hestia aktivizuar. Mund të autentikoni duke përdorur një fjalëkalim ose një hash/token API.

Shikoni dokumentacionin REST API të Hestia për aktivizimin e qasjes në API dhe detajet e autentifikimit:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurimi (Wizard → Integrime → Hestia) {#configuration-wizard--integrations--hestia}
Pani këto vlerë:

- `WU_HESTIA_API_URL` (i detaruar)
  - Ky endpoint bazë i API, zakonisht është `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (i detaruar)
  - Përdoruesi Hestia që përdoret për komandat e API-së (shpesh është `admin`).
- `WU_HESTIA_API_PASSWORD` ose `WU_HESTIA_API_HASH` (pafund një prej tyre)
  - Zgjidhni një metodë autentikimi: fjalëkalim apo hash/token API.
- `WU_HESTIA_ACCOUNT` (i detaruar)
  - Llogaria (pronari) e Domenit Web në Hestia; ky është argument i parë për CLI.
- `WU_HESTIA_WEB_DOMAIN` (i detaruar)
  - Domeni Web ekzistues në Hestia që shërben WordPress-in tuaj (alias-et do të lidhen këtu).
- `WU_HESTIA_RESTART` (opsionale; vdefaut: `yes`)
  - Ajo nëse dëshironi të rihapni/rilevoni shërbimet pas ndryshimeve të alias-eve.

Ju mund t'i lejoni wizardin të injektojë këto konstante në `wp-config.php`, ose t'i definoni manualisht.

## Verifikimi i Konfigurimit {#verifying-setup}
- Në hapësirën "Testing" (Testim) të wizardit, plugin-i thërret `v-list-web-domains <WU_HESTIA_ACCOUNT> json` përmes API-së. Përgjigja e suksesit konfirmon lidhjen dhe autentikimin.
- Pas maperimit të një domeni, kontrolloni në Hestia: Web > domeni bazë > Aliases (Alias). Ju duhet të shihni aliasin e ri të shtuar.

## Shënime & Këshilla {#notes--tips}
- Sigurohuni që `WU_HESTIA_WEB_DOMAIN` tashmë ekzistojë dhe të jetë i pronarë i `WU_HESTIA_ACCOUNT`.
- Nëse kërkohet SSL, menaxhoni sertifikat në Hestia. Kjo integrim aktualisht menaxhon vetëm alias-et.
- Plugin-i mund të shtojë/hiqë edhe `www.<domain>` në varësi të vendit tuaj "www subdomain" (subdomeni www).

## Shembull Komandës API (cURL) {#example-api-call-curl}
Më poshtë është një shembull konseptual (përshtatoni me mjedisin tuaj). Referoni dokumentacionin zyrtar për parametrat e saktë.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ose ose &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias për të shtuar)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Për fshirje, përdorni `cmd=v-delete-web-domain-alias` dhe të njëjtat argjiniz.

## Zgjidhja e problemeve (Troubleshooting) {#troubleshooting}
- Gabime HTTP nga API: verifikoni nëse `WU_HESTIA_API_URL` është i arritshëm dhe përfshin `/api`.
- Gabime autentikimi: konfirmo se `WU_HESTIA_API_USER` dhe ose `WU_HESTIA_API_PASSWORD` ose `WU_HESTIA_API_HASH` janë të vendosur.
- "Missing account/base domain" (Mungesa të llogarisë/domeni bazë) në logje: siguroh që `WU_HESTIA_ACCOUNT` dhe `WU_HESTIA_WEB_DOMAIN` të jenë të vendosur dhe të vlefshëm në Hestia.

## Referanca {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Referenca e CLI të Hestias (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
