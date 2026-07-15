---
title: Integrazzjoni Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Integrazzjoni ma' Cloudflare

## Panoramika {#overview}
Cloudflare hija network ta preżentament kontent (CDN) u fornitur ta sigurtà li jgħinu bitt protezzjoni u accelerazzjoni tal-websites. Dan l-integrazzjoni tismella l-ġestjoni awtomatika tad-domain bejn Ultimate Multisite u Cloudflare, partikolar għall-installazzjonijiet ta subdomain multisite.

## Funzjonijiet {#features}
- Kreawment awtomatika tal-subdomains f'Cloudflare
- Support għal subdomains proksiyyati (Proxied)
- Aġġustament tal-record DNS
- Espiżizzjoni aġġornata ta' record DNS fil-Ultimate Multisite admin

## Reġistrazzjonijiet {#requirements}
Il-konstanti li jgħandu l-meħtieġa għandhom jit definita f'file `wp-config.php` tiegħek:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Istruzzjonijiet ta' Isettabbilizzjoni {#setup-instructions}

### 1. Oħtja l-Cloudflare API Key tiegħek {#1-get-your-cloudflare-api-key}

1. Idħol għad dashboard tal-Cloudflare tiegħek
2. Irridi għal "My Profile" (klick fuq l-email tiegħek fil-angolo ta' qabel)
3. Sigli għal "API Tokens" mill-menu
4. Icrea token API ġdid b'il-permessiem ewemin:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Kopja l-token API tiegħek

### 2. Oħtja l-Zone ID tiegħek {#2-get-your-zone-id}

1. F'dashboard tal-Cloudflare tiegħek, issaħħel id-domain li tistaqsi teħtieġ
2. Il-Zone ID huwa magħruf fil-tab "Overview", f'il-sidebar ta' destra taħt "API"
3. Kopja l-Zone ID

### 3. Ażżina l-Konstanti għal wp-config.php {#3-add-constants-to-wp-configphp}

Ażżina il-konstanti li jgħandu fil-file tiegħek `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Iżonabbilizzja tal-Integrazzjoni {#4-enable-the-integration}

1. F'WordPress admin tiegħek, irridi għal Ultimate Multisite > Settings
2. Naviga għall-tab "Domain Mapping"
3. Irridi għat il-parteċċa "Host Integrations" (Host Integrations)
4. Iżonabbilizza l-integrazzjoni tal-Cloudflare
5. Klick fuq "Save Changes"

## Come Funziona {#how-it-works}

### Aġġustament ta' Subdomains {#subdomain-management}

Meta jkun siti ġdidi jmuraw f'installazzjoni ta subdomain multisite:

1. L-integrà richiesta għall-API ta Cloudflare biex tiddispożi record CNAME għal il-subdomain
2. Il-subdomain huwa konfigurat biex jkun proksiyyat (proxied) minn Cloudflare b'default (dinien it-għandu l-possibbiltà biex jgħatti b'filters)
3. Meta siti jiġi malgħub, l-integrà se tixleb il-subdomain minn Cloudflare

### Display ta Record DNS {#dns-record-display}

L-integrà jipprovvidi għall-display tal-record DNS fil-Ultimate Multisite admin biex:

1. Jikkonsa record DNS dirett minn Cloudflare
2. Jispjega jiddispleggi jekk il-record qed jkoll proksiyyat (proxied) jew u ma
3. Jispjega informazzjoni aggiettiva dwar il-record DNS

## Nomi Host Kustom ta Cloudflare {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (li qed jiġu chiamati "Cloudflare for SaaS" qabel) huwa feature ta Cloudflare li tista' l-aħna tagħhom jgħandu domini proprju b'SSL fuq nnetz multisite tiegħek. Huwa l-metodu mwiegħed għall-installazzjonijiet multisite li huma mappati dwar id-domini u li jipproċessa minn Cloudflare, peress li Cloudflare jidabbir l-emissioni u il-rinnovamenti tal-certifikat SSL għal ogni dominu kustom.

### Come huwa differenti mill-integrà standard ta Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Integrà Standard | Nomi Host Kustom ta Cloudflare |
|---|---|---|
| **Għda** | Jikunsidra record DNS automatici għall-subdomains | Iżviluppa domini kustom (mappati) b'SSL li jidabbirhu Cloudflare |
| **L-ajjn** | Multisite dwar subdomain | Multisite mappat dwar id-domini |
| **SSL** | Jidabbir it-tajjeb separat | Jidabbir minn Cloudflare automaticament |

### Aħjar tal-Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. Ftaqja dashboard tal-Cloudflare, aħjar il-zone tal-domaina primarja tiegħek.
2. Idħol għal **SSL/TLS > Custom Hostnames**.
3. Aggiungi origin fallback li jidirettaw għall-IP jew l-hostname tal-server tiegħek.
4. Għal ogni domaina tal-klijenti mappata f'Ultimate Multisite, aġixxi entry ta Custom Hostname f'Cloudflare. Tista' automaġġja dan il-istep tal-Cloudflare API.
5. Cloudflare tissira u tirrenew sertifikat TLS għal ogni custom hostname awtomatikament waqt li l-DNS tal-klijenti jidirettaw għall-rete tiegħek.

For referenza API kumppleta, għandek l-Cloudflare Custom Hostnames documentation [https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Aġġondament tal-terminoloġija
Min jogra Ultimate Multisite v2.6.1, dan il-feature jiġi identifikat b'Cloudflare Custom Hostnames f'settings u labelijiet kollha tal-plugin. Verżjonijiet ewliem huma kienu qed jiddu l-nome "Cloudflare for SaaS", li huwa is-sena ta prodott tal-Cloudflare li qed juri.
:::

## Nota Importanti {#important-notes}

Min jogra l-aggiornamenti ta' Cloudflare, il-wildcard proxying huwa disponibbli għal kull klijent. Dan jkun mod biex l-integrazzjoni standard tal-DNS tal-Cloudflare tkun meno kritika għall-installazzjonijiet multisite tal-subdomain min peress li kien qed tkun, it-tista' biss issa tsetta record DNS wildcard f'Cloudflare.

## Problemi u Soluzzjonijiet (Troubleshooting) {#troubleshooting}

### Problemi b'Konnekkjizzjoni API {#api-connection-issues}
- Verifika li il-API token tiegħek huwa korrett u għandu l-permessuri neċessarji
- Kontrolla li l-Zone ID tiegħek huwa korrett
- Assigurja li l-account tal-Cloudflare tiegħek għandu l-permessuri neċessarji

### Subdomain M'għandiex Tiddirja {#subdomain-not-added}
- Kontrolla il-logs ta' Ultimate Multisite għal pirċerni fejn jkun ewda messages
- Verifika li il-subdomain ma hijax giàma additta f'Cloudflare
- Assigurja li l-plan tal-Cloudflare tiegħek jsupporta l-num tal-record DNS li qed tgħmli

### Problemi ta Proxy {#proxying-issues}

- Se ma tħobb subdomains jipproxxju, puoi uża il-filter `wu_cloudflare_should_proxy`.
- Il-features xieraq ma jgħandu b'mod konplitt għandhom jipproxxju (e.g., funksjonijiet tal-WordPress admin).
- Considera uża Cloudflare Page Rules biex tixbizzi l-cache għall-admin pages.
