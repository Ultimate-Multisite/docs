---
title: Integrimi Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integrimi me Clostën {#closte-integration}

## Përmbledhje {#overview}
Closte është një platform hosting WordPress e menaxhuar që ndërtohet në infrastrukturën Google Cloud. Kjo integrim lejon sinkronizimin automatik të domenit dhe menaxhimin e sertifikatëve SSL midis Ultimate Multisite dhe Clostës.

## Karakteristikat {#features}
- Sinkronizim automatik i domenit
- Menaxhimi i sertifikave SSL
- Mbështetje për domene wildcard
- Nuk kërkon konfigurime nëse funksioni varet nga Closte

## Kërkesat {#requirements}
Nëse po përdorni Clostën, ky konstante duhet të jetë e definuar në skurtin tuaj `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Ky konstante zakonisht është e definuar tashmë nëse po hostoni në Clostën.

## Udhëzimet për Konfigurim {#setup-instructions}

### 1. Verifikoni Klavjet (API Key) të Closte-së {#1-verify-your-closte-api-key}

Nëse po hostoni në Clostën, konstanta `CLOSTE_CLIENT_API_KEY` duhet të jetë e definuar tashmë në skurtin tuaj `wp-config.php`. Mund ta verifikoni këtë duke kontrolluar skurtin tuaj `wp-config.php`.

### 2. Aktivizoni Integrimin {#2-enable-the-integration}

1. Në adminin tuaj WordPress, shkoni te Ultimate Multisite > Settings
2. Navigjoni te tab "Domain Mapping" (Mapele Domenet)
3. Scrolloni poshtë te "Host Integrations" (Integrimet e Hostit)
4. Aktivizoni integrimin Closte
5. Klikoni "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

Kur një domen mapehet në Ultimate Multisite:

1. Integrimi dërgon një kërkesë te API i Clostës për të shtuar domenit në aplikacionin tuaj
2. Closte menaxhon automatikisht provizimin e sertifikatës SSL
3. Kur fshihet mapeimi i domeneve, integrimi do ta fshijë domenit nga Closta

Integrimi funksionon gjithashtu me cilësimin e intervallit të kontrollit të DNS-së në Ultimate Multisite, duke ju lejuar të konfigurojini se me sa shpesh sistemi kontrollon përhapjen e DNS-së dhe lëshimin e sertifikatës SSL.

## Krijimi i Regjistrimit të Domenit {#domain-record-creation}

Kjo integrim siguron që kur një faqe hapet ose duplikohet, një regjistër i domeneve krijohet automatikisht. Kjo është veçanërisht e rëndësishme për integrimin Closte, sepse krijimi i regjistrit të domenit shkakton që API-ja Closte të krijojë domen dhe sertifikatën SSL.

## Zgjidhje Probleme (Troubleshooting) {#troubleshooting}

### Problemet me Lidhurin me API {#api-connection-issues}
- Kontrolloni nëse kyçja jote e API-s së Closte është e saktë
- Siguroh që llogaria jote Closte të ketë të gjitha lejet e nevojshme

### Problemet me Sertifikatën SSL {#ssl-certificate-issues}
- Closte mund të marrë pak kohë për të dhënë sertifikatat SSL (zakonisht 5-10 minuta)
- Kontrolloni nëse domenët tuaj po drejtohen si duhet te adresa IP e serverit tuaj Closte
- Kontrolloni regjistrat DNS për domenit tuaj për të siguruar që janë konfiguruar si duhet

### Domeni Nuk Shtohet {#domain-not-added}
- Kontrolloni logjet e Ultimate Multisite për çdo mesazh gabimi
- Siguroh që domeni nuk është shtoar tashmë në Closte
- Siguroh që regjistrat DNS të domenit tuaj janë konfiguruar si duhet

### Intervali i Kontrollit DNS {#dns-check-interval}
- Nëse sertifikatët SSL marrin shumë kohë për t'u dhënë, mund të ndryshoni intervalin e kontrollit DNS në cilësimet Domain Mapping.
- Intervali fillestar është 300 sekonda (5 minuta), por mund ta vendosni sa i ulët si 10 sekonda për kontroll më të shpejt gjatë testimeve
