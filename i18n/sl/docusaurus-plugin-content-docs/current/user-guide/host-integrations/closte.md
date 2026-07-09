---
title: Integracija Closte
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Integracija z Clostom {#closte-integration}

## Pregled {#overview}
Closte je upravljana WordPress hosting platforma, zgrajena na infrastrukturi Google Cloud. Ta integracija omogoča avtomatizirano sinhronizacijo domen in upravljanje SSL sertifikatov med Ultimate Multisite in Closte.

## Funkcionalnosti {#features}
- Avtomatizirana sinhronizacija domena
- Upravljanje SSL sertifikatov
- Podpora za wildcard domene
- Ni potreben dobitni postopek, če hostujete na Closte

## Zahtevi {#requirements}
Če uporabljate Closte, morate definirati naslednjo konstanto v vašem datoteki `wp-config.php`:

```php
define('CLOSTE_CLIENT_API_KEY', 'vaša_api_ključ');
```

Ta konstanta je običajno že definirana, če hostujete na Closte.

## Postopki za nastavitve {#setup-instructions}

### 1. Preverite svoj API ključ Clost-a {#1-verify-your-closte-api-key}

Če hostujete na Closte, bi se konstanta `CLOSTE_CLIENT_API_KEY` morala že definirati v datoteci `wp-config.php`. To lahko preverite s pregledom svoje datoteke `wp-config.php`.

### 2. Omogočite integracijo {#2-enable-the-integration}

1. V admin panel WordPressa, idite na Ultimate Multisite > Settings
2. Navigirajte do tabe "Domain Mapping" (Mapiranje domen)
3. Prejmovajte dolje do "Host Integrations" (Integracije hostov)
4. Omogočite integracijo Closte
5. Kliknite na "Save Changes" (Shrani spremembe)

## Kako to deluje {#how-it-works}

Ko je domen mapiran v Ultimate Multisite:

1. Integracija pošlje zahtevo API-ju Clost-a, da dodate domen vašemu programu
2. Closte avtomatsko upravlja izdelovanje SSL sertifikatov
3. Ko se domen mapiranje odstrani, integracija ga odstrani tudi od Clost-a

Integracija deluje tudi z nastavitvami intervala preverjanja DNS v Ultimate Multisite, kar vam omogoča konfiguracijo, kako pogosto sistem preverja propagacijo DNS in izdelovanje SSL sertifikatov.

## Ustvarjanje registra domena {#domain-record-creation}

Ta integracija zagotavlja, da se obdelovalni zapis domen sam avtomatsko ustvari ko se ustvarja ali duplira spletna stran. To je še posebej pomembno za integracijo Closte, ker ustvarjanje zapisa domena sprožuje API Closte, ki ustvari domen in SSL certifikat.

## Reševanje težav {#troubleshooting}

### Problemi z povezavo na API {#api-connection-issues}
- Preverite da je vaš API ključ Closte pravilno vnesen
- Ugotovite, da ima vaš račun Closte potrebna dovoljenja
