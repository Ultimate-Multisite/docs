---
title: Closte Integrazioa
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integrazioa

## Deskuntzua {#overview}
Closte da WordPress-en gestionat hosting plataforma da Google Cloud infrastructurean dago. Horrek Ultimate Multisite eta Closte arteko domainer bat automatikoin sinkronizatzeko eta SSL sertifikataren administrazioa gogoratzen du.

## Aerakilikak {#features}
- Domainer bat automatikoin sinkronizazioa
- SSL sertifikataren administrazioa
- Wildcard domaineren suporta
- Clostean jarraitzen duen artean konfiguratazio edo beharrak ez dira

## Aurrekontuak {#requirements}
Closte erabiltzen ari zailan, `wp-config.php` daturiko filean honela constant bat definizatu behar da:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Hau constanta Clostean jarraitzen duen artean iridian duela.

## Konfigurazio Instruziak {#setup-instructions}

### 1. Hau Ezkutai API Key-niz Kontrollatu {#1-verify-your-closte-api-key}

Clostean jarraitzen ari zailan, `CLOSTE_CLIENT_API_KEY` constanta aldatu behar da zure `wp-config.php` filean definizatu. Hau kontrolatzeko, zure `wp-config.php` filean jartzi nahi duzu.

### 2. Integrazioa Aktiboa Izate {#2-enable-the-integration}

1. Zure WordPress admin-ean, Ultimate Multisite > Settings (Konfigurazioak) funtziora jarraitu
2. "Domain Mapping" (Domainer Mapoak) tabera jarraitu
3. "Host Integrations" (Host Integrazioak) duen partean ireki duzu
4. Closte integrazioa aktiboa izate
5. "Save Changes" (Aldakile Ezartzea) klik egin

## Ondo Zerbiak Erregitzen da {#how-it-works}

Ultimate Multisite-an domainer bat mapatuta dagoenean:

1. Integrazioa Closte API-rre eska bat bidaltzen du zure aplikazioan domainaren ezarri
2. Closte-ak SSL sertifikataren emandera automatikoin gogoratzen du
3. Domainer bat mapatzea desusian, integrazioa domainaren Closte-atik ezarri du

Integrazioa Ultimate Multisite-aren DNS check interval (DNS propagaziorako kontrola) aukerarekin ere lan egiten du, horrek sistema daurien propagazio eta SSL sertifikataren emandera zer maila batean kontrolatu beharko duen konfiguratatzeko aukera ematen du.

## Domainer Rekordaren Erregitzeko {#domain-record-creation}

Haukoa horrela hau da bere integrazioari. Horrek erabilizenean, webgune bat sortu edo duplikatzen duenean, domainerako registro automatico sortzen da. Horrek Closte integrazioaren parte batean oso importante da, karena domainerako registro sortzea Closte API-ri erabilten dio domainioa eta SSL bideratzea sortzeko.

## Problema ezberdineteko irudiak (Troubleshooting) {#troubleshooting}

### API konektibitatea problema batzuk {#api-connection-issues}
- Closte API key-ak zuzena dagoela jartzen baduzu eskatzen duzu.
- Horrek Closte kontua da beharrezko autorizazioak ditu.

### SSL bideratzearen problema batzuk {#ssl-certificate-issues}
- Closte-ri SSL bideratzea ahazpen egin dezake (normalment 5-10 min).
- Domainioak Closte serveraren IP-ra zuzena dagoela jartzen baduzu eskatzen duzu.
- Domainerako DNS registroak barne egindakoa jartzen baduzu eskatzen duzu.

### Domainio ez hasituratu {#domain-not-added}
- Ultimate Multisite log-ak error testu batzuk jarri duela jartzen baduzu eskatzen duzu.
- Domainioak Closte-an ez dagoela jartzen baduzu eskatzen duzu.
- Domainerako DNS registroak barne egindakoa jartzen baduzu eskatzen duzu.

### DNS kontrolaren itxarpen zehaztasuna (DNS Check Interval) {#dns-check-interval}
- SSL bideratzea oso luze da, hori irekitu behar bada, Domain Mapping sortzen dituzko DNS kontrolaren itxarpen zehaztasun (interval) aldatu dezakezu.
- Default-ekoa 300 segundea (5 min) da, baina testuinguruetan hasten jakinarazten besteakagarri jartzeko, 10 segundia lehenago ezartzen dituzko da.
