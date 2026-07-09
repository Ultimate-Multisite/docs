---
title: Integrācija ar WPMU DEV
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrācija ar WPMU DEV {#wpmu-dev-integration}

## Īsszums {#overview}
WPMU DEV ir vispārējā WordPress platforma, kas piedāvā mājas (hosting), pluginus un pakalpojumu WordPress vietnēm. Šī integrācija ļauj automātiski singt domainiem un pārvaldīt SSL sertifikātu starp Ultimate Multisite un WPMU DEV hostingam.

## Funkcionalitātes {#features}
- Automātiskais domēnu singšana
- SSL sertifikāta pārvaldība
- Papildu SSL sertifikāta doğrultojumu mēģinājumi

## Prasības {#requirements}
Integrācija automātiski pamatina, vai jūs hostējat WPMU DEV, un izmanto iekļautu API. Ja jūs hostējat WPMU DEV, jums nav nepieciešams nekāds papildu konfigurējums.

Integrācija pārbauda `WPMUDEV_HOSTING_SITE_ID` konstantes pieejamību, kas automātiski definēta, ja jūs hostējat WPMU DEV.

## Iestatījumu instrukcijas {#setup-instructions}

### 1. Apstiprināt WPMU DEV hostinga {#1-verify-wpmu-dev-hosting}
Ja jūs hostējat WPMU DEV, nepieciešamās konstantes jau būtu definītas. Pārbaudiet, vai:

1. `WPMUDEV_HOSTING_SITE_ID` konstante ir definēta jūsu vidi (environment)
2. Jums ir aktīva WPMU DEV pieejamība API (API access)

### 2. Iespējot integrāciju {#2-enable-the-integration}
1. Jūr WordPress admina, dodieties uz Ultimate Multisite > Settings
2. Navigējieties uz tabulu "Domain Mapping" (Domēnu mapi)
3. Scrolliet lejā, lai atrastu "Host Integrations" (Host integrācijas)
4. Iespējot WPMU DEV integrāciju
5. Nospiediet "Save Changes" (Saglabāt izmaiņas)

## Kā tas darbojas {#how-it-works}

### Domēnu singšana {#domain-syncing}
Kad domēnu mapi Ultimate Multisite:

1. Integrācija izmanto WPMU DEV API, lai pievienotu domēnu jūsu hostinga kontai
2. Tā automātiski pievieno arī domēna www versiju
3. WPMU DEV pārvalda domēna konfigurēšanu un SSL sertifikāta izdošanu

### SSL sertifikāta pārvaldība {#ssl-certificate-management}

Integrācija ir konfiguriēta palielināt SSL sertifikāta autentifikācijas mēģinājumu skaitu WPMU DEV hostingsa, jo SSL sertifikāti var aizņemt kādu laiku izdošanos un instalētos. Bez speciālo konfigurācijas, tas mēģinās līdz 10 reizi autenticēt SSL sertifikātu, salīdzinot ar standarta 5 mēģinājumiem.

## Savieta Informācija {#important-notes}

### Domenes izņemšana {#domain-removal}

Uz visas pašas laikā WPMU DEV API nav sniedzam veidu, kā izņemt domenus. Ja Ultimate Multisite-ādzīvotā domēna mape tiek atbalsta, domēns paliks jūsu WPMU DEV hostingsa kontā. Ja tas ir nepieciešams, jums būs jāizņem tas maniski no WPMU DEV hostingsa dashboarda.

### API autentifikācija {#api-authentication}

Integrācija izmanto WPMU DEV API kluadi, kas glabāts jūsu WordPress databasē kā `wpmudev_apikey` opcija. Tas automātiski iestäm ir, kad savu vietni savienojat ar WPMU DEV.

## Kļūdu likums (Troubleshooting) {#troubleshooting}

### API savienojuma problēmas {#api-connection-issues}
- Pārbaudiet, vai jūsu vietne ir labi savienojota ar WPMU DEV
- Pārbaudiet, vai `wpmudev_apikey` opcija ir iestämata jūsu WordPress databasē
- Nodrošiniet, ka jūsu WPMU DEV piešķirība ir aktīva

### SSL sertifikātu problēmas {#ssl-certificate-issues}
- WPMU DEV var aizņemt kādu laiku izdošanos SSL sertifikātus (parasti 5–15 minūtes)
- Integrācija ir konfiguriēta pārbaudīt līdz 10 reizi SSL sertifikātus
- Ja SSL sertifikāti vēl nav izdošoti pēc vairāku mēģinājumiem, sazinājieties ar WPMU DEV atbalstu

### Domenas nepievienošana {#domain-not-added}
- Pārbaudiet Ultimate Multisite logus jebkurām kļūdu ziņojumiem
- Noteikiet, ka domēns nav jau pievienots WPMU DEV
- Nodrošiniet, ka jūsu WPMU DEV hostingsa plāns atbalsta domēnu skaitu, ko jūs pievienojat
