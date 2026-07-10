---
title: WPMU DEV integreerimine
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integraamine {#wpmu-dev-integration}

## Üldinekuvur {#overview}
WPMU DEV on põhjalik WordPress-platvorm, mis pakub hooldust, pluginid ja teenuse WordPress sille. See integraalne võimaldab automaatselt domeenide synkronimist ja SSL-sertifikaadide haldamist Ultimate Multisite'i ja WPMU DEV hooldusgaamiga.

## Funktsioonid {#features}
- Automaatiline domeenide synkronimine
- SSL-sertifikaadide haldamine
- Laialdaselt SSL-sertifikaadide kontrollproovide tegemine

## nõuded {#requirements}
Integraalne tuvastab automaatselt, kas hooldus on WPMU DEVil, ja kasutab sissejuhatud API. Kui hooldus on WPMU DEVil, ei ole vaja lisakohustust konfiguratsiooni teha.

Integraalne kontrollib `WPMUDEV_HOSTING_SITE_ID` konstantsi olemasolu, mis defineerub automaatselt WPMU DEVil hoolduses.

## Seadistamise juhised {#setup-instructions}

### 1. WPMU DEV hoolduse kinnitamine {#1-verify-wpmu-dev-hosting}

Kui te hooldus on WPMU DEVil, peavad vajalikud konstantsid juba olema defineeritud. Kontrollige järgmine:

1. `WPMUDEV_HOSTING_SITE_ID` konstants on definitsioon teie keskkonnas
2. Te teil on aktiivne WPMU DEV li membership ja API-kättesaadavus

### 2. Integraali aktiveerimine {#2-enable-the-integration}

1. WordPressi administraatoris minud Ultimate Multisite > Settings menüüle
2. Minud "Domain Mapping" tabile
3. Skroolipilt all "Host Integrations" lehel
4. Aktiveeri WPMU DEV integraal
5. Klõpsake "Save Changes"

## Kuidas see toimib {#how-it-works}

### Domeenide synkronimine {#domain-syncing}

Kui domeen on Ultimate Multisite'is mappitud:

1. Integraalne kasutab WPMU DEV API-t, et lisada domeeni teie hoolduskontole
2. See lisab automaatselt ka www-versiooni domeenist
3. WPMU DEV haldab domeeni konfiguratsiooniga ja SSL-sertifikaadide väljastamisega

### SSL-sertifikaadide haldamine {#ssl-certificate-management}

Integreer on se on seistamine SSL sertifikaatide kontrollproovideid WPMU DEV hooldus jaoks, kuna SSL sertifikaate väljastamise ja paigaldamise võib mõnda aega võtta. Oletuks proovib see sertifikaati kontrollida kuni 10 korda, mis on rohkem kui standardne 5 korda.

## Oluline märkused {#important-notes}

### Domeen eemaldamine {#domain-removal}

Praegu ei panna WPMU DEV API domeene eemaldamise võimalust. Kui domeeni mappimine eemaldatakse Ultimate Multisite'is, jääb domeen teie WPMU DEV hoolduskontole. Kas vajalik, peate seda manuaalselt eemaldama WPMU DEV hoolduspaneelist.

### API autentimine {#api-authentication}

Integreerimine kasutab WPMU DEV API võtme, mis on salvestatud teie WordPress-põhise database'is `wpmudev_apikey` valikuna. See seostatakse automaatselt, kui ühendate oma saini WPMU DEViga.

## Probleemide lahendamine {#troubleshooting}

### API ühendusprobleemid {#api-connection-issues}
- Kontrollige, et teie sait on õigesti ühendatud WPMU DEViga
- Kontrollige, kas `wpmudev_apikey` valik on seostatud teie WordPress-põhise database'is
- Veenduge, et teie WPMU DEV li membership on aktiivne

### SSL sertifikaate probleemid {#ssl-certificate-issues}
- WPMU DEV võib SSL sertifikaate väljastamiseks aega võtta (üldiselt 5–15 minutit)
- Integreerimine on seostatud kontrollima kuni 10 korda SSL sertifikaate eest
- Kui SSL sertifikaate ei ole veel väljastatud mitmekordse proovidele pärast, võtke ühendust WPMU DEVi toetusega

### Domeeni lisamine mitte toimib {#domain-not-added}
- Kontrollige Ultimate Multisite logud vigu sõnumite osas
- Veenduge, et domeen ei ole juba WPMU DEVile lisatud
- Veenduge, et teie WPMU DEV hooldusplaan toetab seda domeenide arvu, mida te lisate
