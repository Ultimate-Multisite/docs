---
title: Cloudflare integreerimine
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Integreerimine {#cloudflare-integration}

## Üldine ülevaade {#overview}
Cloudflare on juhtiv sisuületunduse ja turvalise teenus, mis aitab veebisaite kaitsta ja kiirendada. See integreerimine võimaldab automaatselt domeeni haldamist Ultimate Multisite'i ja Cloudflare'i vahel, eriti subdomiin-multisaitide installatsioonide puhul.

## Funktsioonid {#features}
- Subdomiinide automaatne loomine Cloudflare'is
- Proxyeritud subdomiinide toetmine
- DNS-registrite haldamine
- Ultimate Multisite administraatoris paremini näha oleva DNS-registrite esitamine

## nõuded {#requirements}
Järgnev konstantsid tuleb definitsiooniks määrata teie `wp-config.php` failis:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Seadistamise juhised {#setup-instructions}

### 1. Pide oma Cloudflare API-käsk (API Key) {#1-get-your-cloudflare-api-key}

1. Logi sisse oma Cloudflare dashboardile
2. Minna "My Profile" (klikka oma e-posti peale paremal laegil)
3. Vali menüüst "API Tokens"
4. Luua uus API-käsk järgmiste lubandega:
   - Zone.Zone: Read (Luge)
   - Zone.DNS: Edit (Muuta)
5. Kopya oma API-käsk

### 2. Pide oma Zooni ID (Zone ID) {#2-get-your-zone-id}

1. Cloudflare dashboardis valige domeen, mida soovite kasutada
2. Zooni ID on näha "Overview" tabis, paremas laegil "API"-otsiku all
3. Kopya Zooni ID

### 3. Lisage konstantsid `wp-config.php`'le {#3-add-constants-to-wp-configphp}

Lisage järgmised konstantsid oma `wp-config.php` failile:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Lülitage integreerimine sisse {#4-enable-the-integration}

1. WordPress administraatoris minna Ultimate Multisite > Settings (Seaded)
2. Minna "Domain Mapping" tabile
3. Skroolipari alla "Host Integrations" otsa
4. Lülita Cloudflare-integreerimine sisse
5. Klikka "Save Changes" (Muudeta)

## Kuidas see toimib {#how-it-works}

### Subdomiinide haldamine {#subdomain-management}

Kui luuakse uus veebileht subdomiin-multisaitide installatsioonil:

1. Integreer te küsimus Cloudflare'i APIle, et lisaksüsteemi jaoks CNAME registreerida.
2. Lisaksüsteem on poolt seadatud, et subdomaaini ületada Cloudflare abil (see saab filterite abil muuta).
3. Kui veebilehte eemaldatakse, eemaldab integreerimine subdomaaini Cloudflarest.

### DNS-registri näitamine {#dns-record-display}

Integreerimine parandab Ultimate Multisite administraatori DNS-registrite näitamist järgmise abil:

1. Hinnates DNS-registreid otse Cloudflarelt
2. Näitab, kas registreerimad on ületatud või mitte
3. Näitab lisateavet DNS-registreidest

## Cloudflare kasutamata hostnimi (Custom Hostnames) {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (vahemikus nimetatud "Cloudflare for SaaS") on Cloudflare funktsioon, mis võimaldab teie klientide kasutada oma domeene SSL-iga teie multisüsteemse võrku. See on soovitatav lähenemine domeenilanded seotud multisüsteeminstallatsioonide jaoks, mis kasutavad Cloudflare'i, kuna Cloudflare haldab SSL-sertifikaadide väljastamise ja uuesti kinnitamise automaatselt iga kasutamata domeeni jaoks.

### Kuidas see erineb standardse Cloudflare integreerimise {#how-it-differs-from-the-standard-cloudflare-integration}
| | Standardne integreerimine | Cloudflare Custom Hostnames |
|---|---|---|
| **Täpmine** | Auto-loovitab DNS-registreid subdomaaine jaoks | võimaldab kasutamata (seotud) domeene Cloudflare-haldatava SSL-iga |
| **Parim** | Subdomaainel olev multisüsteem | Domeenilanded seotud multisüsteem |
| **SSL** | Halbitakse eraldise | Halbitakse automaatselt Cloudflare'i poolt |

### Cloudflare Custom Hostnames seadistamine {#setting-up-cloudflare-custom-hostnames}

1. Avage oma Cloudflare dashboardis, avage domeenide jaoks seotud zona.
2. Minenda **SSL/TLS > Custom Hostnames** menüle.
3. Lisage tagasi-origin (fallback origin), mis viitab teie serveri IP-adressile või hostnimi.
4. Kuid iga Ultimate Multisite'is klientdomeenide jaoks lisage Cloudflare'ile Custom Hostname -sissejuhatus. Seda sammu automaatselt saab teha Cloudflare API abil.
5. Cloudflare küsib ja uuendab TLS-sertifikaate iga custom hostnime jaoks automaatselt, kui kliente DNS on suunatud teie võrku.

Kogu API-viidele võite lugeda [Cloudflare Custom Hostnames dokumentatsiooni](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Termeenil uuendus
Ultimate Multisite v2.6.1 alates seda funktsiooni nimetatakse kõigis plugin seadistustes ja tähistustes **Cloudflare Custom Hostnames**'iks. Eratud versioonides kasutati nime "Cloudflare for SaaS", mis on põhineva Cloudflare toote nimi.
:::

## Oluline märkused {#important-notes}

Cloudflare'i viimaste uuenduste alguses on wildcard proxying nüüd saadaval kõigile klientidele. See tähendab, et standardne Cloudflare DNS-integreerimine on subdomiinid multisite installatsioonide jaoks vähem kriitiline kui enne oli, kuna saate lihtsalt luua wildcard DNS-registri Cloudflare'is.

## Probleemide lahendamine {#troubleshooting}

### API ühenduse probleemid {#api-connection-issues}
- Kontrollige, kas teie API token on õige ja sellel on vajalikud lubjad.
- Kontrollige, kas teie Zone ID on õige.
- Veenduge, et teie Cloudflare kontel on vajalikud lubjad.

### Subdomiini ei lisatud {#subdomain-not-added}
- Kontrollige Ultimate Multisite logid vigu sõnumite osas.
- Veenduge, et subdomiin ei ole juba Cloudflare'ile lisatud.
- Veenduge, et teie Cloudflare plaan toetab luua teie loodud DNS-registrite arvu.

### Proxying probleemid {#proxying-issues}
- Kui soovite, et alates nimetatud subdomainid ei ole proxyga, saate kasutada `wu_cloudflare_should_proxy` filtri.
- Mõแน feature võib olla proxyga töötamatu (nt mõned WordPress administrati funktsioonid).
- Arvestage Cloudflare'i Page Rules kasutamist, et väljuda cache'ist administrati lehekülest.
