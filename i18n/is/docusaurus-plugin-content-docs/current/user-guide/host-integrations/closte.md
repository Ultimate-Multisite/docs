---
title: Closte samstarf
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Samningur {#closte-integration}

## Översikt {#overview}
Closte er ein skyve WordPress-héstingsplattform bygd på Google Cloud-infrastruktur. Denne integrasjonen gjer det mogleg automatisk domene-synkronisering og administrasjon av SSL-sertifikat mellom Ultimate Multisite og Closte.

## Eigenskapar {#features}
- Automatisk domene-synkronisering
- Administrasjon av SSL-sertifikat
- Støtte for wildcard-domener
- Ingen konfigurasjon trengst om du køyrer på Closte

## Krav {#requirements}
Følgjande konstant må definerast i `wp-config.php`-fila di viss du brukar Closte:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Denne konstanten er vanlegvis allereie definert om du hostar på Closte.

## Oppsettinstruksjonar {#setup-instructions}

### 1. Verifiser din Closte API-nøkkel {#1-verify-your-closte-api-key}

Om du hostar på Closte, skal konstanten `CLOSTE_CLIENT_API_KEY` allereie vere definert i fila di `wp-config.php`. Du kan verifisere dette ved å sjekke `wp-config.php`-fila di.

### 2. Aktiver integrasjonen {#2-enable-the-integration}

1. I WordPress-administrasjonen din, gå til Ultimate Multisite > Settings
2. Naviger til fanen "Domain Mapping" (Domene-kartlegging)
3. Bla ned til "Host Integrations" (Hosterintegrasjonar)
4. Aktiver Closte-integrasjonen
5. Klikk på "Save Changes" (Lagre endringar)

## Korleis det fungerer {#how-it-works}

Når eit domene blir mappa i Ultimate Multisite:

1 Sender integrasjonen ein førespurnad til Clostes API for å legge til domenet i applikasjonen din
2 Closte handterer automatisk utstedinga av SSL-sertifikatet
3 Når ei domene-mapping blir fjerna, vil integrasjonen fjerne domenet frå Closte

Integrasjonen fungerer òg med innstillinga for DNS-sjekk-intervall i Ultimate Multisite, slik at du kan konfigurere kor ofte systemet sjekkar etter DNS-propagering og utstedelse av SSL-sertifikat.

## Oppretting av domeneoppføringar {#domain-record-creation}

Þessi tengingur tryggir að þegar hlutinn er skráð á ný eða upplýst, blir domænin skráð sjálf virkjað. Þetta er sérstaklega mikilvægt fyrir Closte tengingu, þar sem skráningin domænsins tryggir að Closte API skapi domænin og SSL-certifikat.

## Problema og lausn {#troubleshooting}
### Vanda í API tengingu {#api-connection-issues}
- Staðfesti að Closte API key þinn sé rétt
- Tryggja að reikningurinn þinn hjá Closte hafi nauðsynlegum réttunum

### Vanda í SSL-certifikato {#ssl-certificate-issues}
- Closte getur þurft nokkinn tíma til að skrafa SSL-certifikat (í algengu 5-10 mínútu)
- Staðfesti að domænir þín séu rétt settar á IP-hefni serverinnar hjá Closte
- Skenni DNS-skráirnar fyrir domænin þínu til að tryggja að þær séu rétt settar

### Domænin er ekki sett {#domain-not-added}
- Skenni Ultimate Multisite logs fyrir nánastilka villum
- Staðfesti að domænin sé ekki eingöngu sett á Closte
- Tryggja að DNS-skráirnar fyrir domænin þína séu rétt settar

### Tími til skennunar DNS {#dns-check-interval}
- Ef SSL-certifikat eru í gangi lengri en viðeigandi, geturð þú breytt tíma til skennunar DNS á innstillingum Domain Mapping
- Standardtíminn er 300 sekund (5 mínútur), en þú getur sett hann niður í 10 sekúndur fyrir hraðari skennslu á viðkvæmar testi
