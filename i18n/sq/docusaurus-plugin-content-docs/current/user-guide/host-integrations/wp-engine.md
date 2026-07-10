---
title: Integrimi me WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# Integrimi me WP Engine {#wp-engine-integration}

## Përmbledhje {#overview}
WP Engine është një platformë premium menaxhimi hosting WordPress që ofron performancë të optimizuar, sigurinë dhe skalueshmëri për faqe WordPress. Kjo integrim lejon sinkronizimin automatik të domenit midis Ultimate Multisite dhe WP Engine.

## Karakteristikat {#features}
- Sinkronizim automatik i domeneve
- Mbështetje për subdomain në instalime multisite
- Integrim i pa ndërprerë me sistemet ekzistuese të WP Engine

## Kërkesat {#requirements}
Integrimi zbulon automatikisht nëse po hostoni në WP Engine dhe përdor API-n e integruar të WP Engine. Nuk kërkohet konfigurim shtesë nëse plugin-i WP Engine është i aktivizuar dhe i konfiguruar si duhet.

Megjithatë, nëse keni nevojë ta konfigurosh manualisht integrimin, mund të përcaktoni një nga këto konstanta në skedarin tuaj `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Metoda e preferuar
// OSE
define('WPE_API', 'your_api_key'); // Metoda alternative
```

## Instruktime për Konfigurim {#setup-instructions}

### 1. Verifikoni Plugin-in WP Engine {#1-verify-wp-engine-plugin}

Nëse po hostoni në WP Engine, plugin-i WP Engine duhet të jetë tashmë i instaluar dhe aktivizuar. Kontrolloni se:

1. Plugin-i WP Engine është i aktivizuar
2. Skedari `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ekziston

### 2. Aktivizoni Integrimin {#2-enable-the-integration}

1. Në adminin tuaj WordPress, shkoni te Ultimate Multisite > Settings (Cilësimet)
2. Navigjoni te tab-i "Domain Mapping" (Mapele Domenit)
3. Scrolloni poshtë te "Host Integrations" (Integrimet e Hostuesve)
4. Aktivizoni integrimin WP Engine
5. Klikoni "Save Changes" (Ruaj Ndryshimet)

## Si Funksionon {#how-it-works}

### Sinkronizimi i Domenit {#domain-syncing}

Kur një domen mapehet në Ultimate Multisite:

1. Integrimi përdor API-n e WP Engine për të shtuar domenit në instalimin tuaj të WP Engine
2. WP Engine menaxhon konfigurimin e domeneve dhe dhënien e sertifikatës SSL
3. Kur fshihet mapeimi i domeneve, integrimi do ta fshijë domenit nga WP Engine

### Mbështetja për Subdomain {#subdomain-support}

Për instalimet e multisite për subdomain:

1. Integrimi vendos çdo subdomain në WP Engine kur krijohet një faqe (site) e re.
2. WP Engine menaxhon konfigurimin e subdomainit.
3. Kur fasha hiqet, integrimi do të heqë subdomainin nga WP Engine.

## Shënime Importante {#important-notes}

### Domenet Wildcard {#wildcard-domains}

Për instalimet e multisite për subdomain, rekomandohet që kontaktoni mbështetjen e WP Engine dhe kërkoni një konfigurim domen wildcard. Kjo lejon që të gjitha subdomainet të funksionojnë automatikisht pa nevojën të shtoni secilën individisht.

### Sertifikatat SSL {#ssl-certificates}

WP Engine menaxhon automatikisht dhënien dhe rinovimin e sertifikatave SSL për të gjitha domenët e shtuar përmes kësaj integrimi. Nuk është e nevojshme asnjë konfigurim shtesë.

## Zgjidhja e Problemeve (Troubleshooting) {#troubleshooting}

### Probleme me Lidhurin me API {#api-connection-issues}
- Kontrolloni që plugin-i WP Engine të jetë i aktivizuar dhe i konfiguruar si duhet.
- Nëse keni definuar manualisht çelësin e API, kontrolloni nëse është i saktë.
- Kontaktoni mbështetjen e WP Engine nëse keni vështirësi me API-n.

### Domeni Nuk U Shtoi {#domain-not-added}
- Kontrolloni logjet e Ultimate Multisite për ndonjë mesazh gabimi.
- Verifikoni që domeni nuk është shtuar tashmë në WP Engine.
- Sigurohuni që plani juaj të WP Engine të mbështesë numrin e domenive që po shtoni.

### Probleme me Subdomainet {#subdomain-issues}
- Nëse subdomainet nuk funksionojnë, kontaktoni mbështetjen e WP Engine dhe kërkoni një konfigurim domen wildcard.
- Verifikoni që cilësimet tuaja DNS janë konfiguruar si duhet për domenin kryesor dhe subdomainet.
