---
title: Integrado de Hestia Control Panel
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Integraĵo kun Hestia Control Panel

Ĉi tiu gvidado klarigas, kiel konfigurigi la integrajon de Ultimate Multisite Hestia, por ke la domeno-mapitaj en via rano aŭtomate estas aldatita (kaj forigita) kiel Web Domain Aliases en Hestia.

- Referenco al Hestia CLI: v-add-web-domain-alias / v-delete-web-domain-alias
- Ofici tiu REST API dokumento: https://hestiacp.com/docs/server-administration/rest-api.html

## Kion Ĝi Farakteras
- Kiam domeno estas mapita en Ultimate Multisite, la integraĵo vokas la Hestia API por fari:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Kiam la domeno-mapado foriĝas, ĝi fariĝas:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Opционаe aldatita/forigita la alias `www.` dependante de via ŝanĝo "Auto-create www subdomain" en la ĝustoj de Domeno-mapado.

## Prarekoj
- Ekzista Hestia Web Domeno kiu już pointedas al via WordPress instalado. La integraĵo attachos aliases al ĉi tiu bazdomeno.
- Hestia API aliro aktiva. Vi povas autentikiĝi kun vorta klavo aŭ kun API hash/token.

Vidui Hestia’s REST API dokumencojn por aktivaĵon de API aliro kaj autentifikado detaloj:
https://hestiacp.com/docs/server-administration/rest-api.html

## Konfigurado (Wizard → Integrations → Hestia)
Donu la seguenti valorojn:

- `WU_HESTIA_API_URL` (requirit)
  - La bazaj API endpoint, tipikajne `https://votre-host-hestia:8083/api/`.
- `WU_HESTIA_API_USER` (requirit)
  - La utilizateur Hestia uzata por komandoj API (serio ofte `admin`).
- `WU_HESTIA_API_PASSWORD` aŭ `WU_HESTIA_API_HASH` (almeno unu)
  - Elektu un metodon autentiki: pasvorto aŭ API hash/token.
- `WU_HESTIA_ACCOUNT` (requirit)
  - La konto (proprietaro) de la Web Domain en Hestia; ĉi tio estas la unua argumento al CLI.
- `WU_HESTIA_WEB_DOMAIN` (requirit)
  - La ekzista Hestia Web Domain kiu servas vian WordPress (alias iĝos attachiĝi ĉi tie).
- `WU_HESTIA_RESTART` (opciona; defolo `yes`)
  - Se necesas reŝalte/reŝarĝi servojn post ŝanĝoj de alias.

Vi povas permi la wizard injegi ĉi tiuj konstanto en `wp-config.php`, aŭ definigi ilin manuele.

## Verifigi la Montadon
- En la paŝo "Testado" de la wizard, la plugin volas `v-list-web-domains <WU_HESTIA_ACCOUNT> json` per la API. Sukcesa respondo konfirmas konektivecon kaj autentikon.
- Post mappi domeno, kontrolu en Hestia: Web > la bazaj domeno > Aliasoj. Vi devas vidi la novan aliasadon aldatan.

## Notoj kaj Tipoj
- Ĝis vidas, ke `WU_HESTIA_WEB_DOMAIN` estas ekzista kaj proprietita de `WU_HESTIA_ACCOUNT`.
- Se SSL bezonas esti uzata, gidas sertifikatojn en Hestia. Ĉi tiu integriĝo nun maneĝas aliasojn nur.
- La plugin ankaŭ povas aĉadi/removeri `www.<domeno>` dependante de via konfigurita ŝanĝo "www subdomain".

## Ekzemplo API-vokado (cURL)
Sub estas koncepta ekzemplo (ajustu al vian aĉiva). Referu la oficialan dokumanton por precizaj parametroj.

POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (alio &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias por a ski)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes

Por dele, uzu `cmd=v-delete-web-domain-alias` kaj la sama argoj.

## Problemoj resolviĝo (Troubleshooting)
- HTTP eraro de API: verifuji, ĉu `WU_HESTIA_API_URL` estas atingebla kaj inkluzas `/api`.
- Autentigo eraro: konfirme `WU_HESTIA_API_USER` kaj either `WU_HESTIA_API_PASSWORD` aŭ `WU_HESTIA_API_HASH`.
- „Mankita konto/bazaj domeno“ en logoj: zorgu, ke `WU_HESTIA_ACCOUNT` kaj `WU_HESTIA_WEB_DOMAIN` estas atingitaj kaj valida en Hestia.

## Referencoj
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Referenco (Aliasj): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
