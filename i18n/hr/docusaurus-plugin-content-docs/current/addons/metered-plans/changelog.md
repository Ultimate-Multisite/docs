---
title: Dnevnik promjena planova s mjerenom naplatom
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Dnevnik promjena Metered Plans {#metered-plans-changelog}

Verzija 1.1.0 - Objavljeno 2026-05-05
- Novo: naplata AI tokena za multisite podstranice — pratite i naplaćujte upotrebu AI tokena na korisničkim stranicama uz podesive cijene po tokenu
- Novo: provedba Connectora ponovno izgrađena s dinamičkim otkrivanjem ograničenja i write-throughom, osiguravajući točnost u stvarnom vremenu na svim connectorima
- Ispravak: nadogradnje tablica baze podataka sada su pravilno usklađene s definicijama BerlinDB sheme, čime se sprječavaju neuspjesi nadogradnje na novim instalacijama
- Ispravak: callbackovi nadogradnje baze podataka pretvoreni su u ispravan format, čime se rješavaju tihi neuspjesi nadogradnje
- Ispravak: decimalne vrijednosti sada su prihvaćene u polju za unos AI Usage Overage Markup
- Ispravak: riješene su fatalne pogreške i problemi s dvostrukom inicijalizacijom pri učitavanju plugina
- Poboljšano: dodana je check-env npm skripta kako bi se razvojna okruženja sama konfigurirala pri prvom pokretanju

### 1.0.3 {#103}
* Ažurirano na Plugin Update Checker v5
* Dodana moderna WordPress zaglavlja plugina
* Poboljšana kompatibilnost s najnovijim WordPress verzijama
* Poboljšane performanse praćenja upotrebe

### 1.0.2 {#102}
* Ispravci pogrešaka i poboljšanja performansi
* Poboljšano izvješćivanje o upotrebi

### 1.0.0 {#100}
* Početno izdanje
* Osnovna funkcionalnost naplate prema mjerenoj upotrebi
* Praćenje upotrebe i izračun prekoračenja
* Automatsko generiranje računa
