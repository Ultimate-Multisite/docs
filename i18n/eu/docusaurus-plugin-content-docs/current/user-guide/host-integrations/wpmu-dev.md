---
title: WPMU DEV Integrazioa
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# Integrazioa WPMU DEV-ekin

## Deskuntzua
WPMU DEV da WordPress webstei bere lanak, pluginak eta serbisioak ematen platforma bat da. Hau integrazioak Ultimate Multisite eta WPMU DEV hosting-aren arteko domainerare automatikoki sinkronizazioa eta SSL sertifikatua administrazioa gogoratzen du.

## Aeragunak
- Domaineraren automatikoko sinkronizazioa
- SSL sertifikatua administrazioa
- SSL sertifikatua bidezko probak aukera daudien eskaintza

## Aurrekontuak
Integrazioak automaticoki jakusten du zein WPMU DEV-an lan egiten ari zaitzete eta API-aren itxura erabiltzen du. WPMU DEV-an lan egiten bada, ez da beharrezkoa horrek konfiguratzea.

Integrazioak `WPMUDEV_HOSTING_SITE_ID` konstantearen aurkitzten du, hau automaticoki definitzen da WPMU DEV-an lan egiten baduzu.

## Konfigurazioa Erdatzeko Instrukzioak

### 1. WPMU DEV Hosting Bidez Kontrollatu
WPMU DEV-an lan egiten bada, beharrezko konstanteak ez da definiduratuta. Kontrollatu zehazki:

1. `WPMUDEV_HOSTING_SITE_ID` konstantea zure erabilera (environment) definiduratuta dagoela
2. API akses duen WPMU DEV-an aktibo membership duela

### 2. Integrazioa Aktiboa Egitea
1. Zure WordPress admin-aren, Ultimate Multisite > Settings (Konfigurazioak) funtziara jarraitu
2. "Domain Mapping" (Domaineraren Mapoak) tabera jarraitu
3. "Host Integrations" (Hosting Integrazioak) duen partean irekitu
4. WPMU DEV integrazioa aktiboa egitea
5. "Save Changes" (Gehiagoak Saldu) funtziara klik egin

## Ondo Zerbitzua Erdatzen

### Domaineraren Sinkronizazioa
Ultimate Multisite-an domainera mapatu dituztenenean:

1. Integrazioak WPMU DEV API-aren erabilten du zure hosting kontuan domainera hobetzeko
2. Automaticoki domaineraren www bertsioak ere hobetzen du
3. Domaineraren konfigurazioa eta SSL sertifikatua emandakoa WPMU DEV-ek gogoratzen du

### SSL Sertifikatua Administrazioa

Integrazioa konfiguratuta dago SSL sertifikatua bertsio proposamenduen kopurua handitu eta WPMU DEV hostigunean, karena SSL sertifikatuek emateko eta instalatzeko aukera ez duela testu edo probea gurean izan daiteke. Default-ean, SSL sertifikatua bertsio proposamenduak kontrolatzeko 5 eskaera bat, standard 10 eskaerarekin erkieta da.

## Ezaurritako Oinarrizko Nota hauek

### Domenia Erabatzea

Aktualitatean, WPMU DEV API-ek domeniet erabatzeko bidea ez du. Ultimate Multisitean domen maping bat erabatuta jasanez gero, domeni gure WPMU DEV hostigunearen kontuan geratzen da. Ezauzu behar bada, manuaz erabatuz ditu WPMU DEV hostigunearen dashboard-eketik.

### API Autentikazioa

Integrazioak WordPress-ean ematutako `wpmudev_apikey` opszioa gure WPMU DEV API key-a erabiltzen du. Horrek sitean WPMU DEV-rekin konektatu beharko duenean automatikoki konfiguratuta daiteke.

## Problema Erabatzea (Troubleshooting)

### API Konektibitatea Problemaak
- Sitean WPMU DEV-rekin lehiak eta jartzen duen jakinarazteko.
- WordPress-ean `wpmudev_apikey` opszioa konfiguratuta dagoela jakinarazteko.
- WPMU DEV-rekin membership-ek aktibo dagoela seguratu.

### SSL Sertifikatua Problemaak
- WPMU DEV-rek SSL sertifikatuek emateko testu edo probea gurean izan daiteke (normalment 5-15 min).
- Integrazioak SSL sertifikatuek kontrolatzeko 10 eskaera lekuan konfiguratuta dago.
- Ezurekin, testuak ez duela SSL sertifikatuek ematutakoan ondoren, WPMU DEV suportuarekin jarraitu.

### Domenia Ez Hasartu
- Ultimate Multisite log-ek erantzunak edo errora jakinarazteko.
- Domenia ez dagoela WPMU DEV-rekin lehiatu eta hasartuta dagoela jartzen duen jakinarazteko.
- WPMU DEV hostigunearen planak dauden domeniet hasartzeko aukera ematen duela seguratu.
