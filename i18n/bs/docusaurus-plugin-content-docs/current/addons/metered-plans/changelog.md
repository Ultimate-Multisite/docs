---
title: Člonačnik promjena (Changelog) mjerenih planova
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Dnevnik promjena za planove s mjerenjem (Metered Plans)

Version 1.1.0 - Released on 2026-05-05
- Novo: Naplata AI tokena za multisite pod-sajtove — praćenje i naplata korištenja AI tokena na različitim sajtovima klijenata sa mogućnošću konfiguracije cijene po tokenu.
- Novo: Implementacija konektora je ponovno izgrađena sa dinamičkim otkrivanjem limita i write-through mehanizmom, što osigurava tačnost u stvarnom vremenu za sve konektore.
- Popravak: Ažuriranje tabela baze podataka sada je ispravno usklađeno sa definicijama sheme BerlinDB, što sprječava neuspjeh ažuriranja na novim instalacijama.
- Popravak: Callback funkcije za ažuriranje baze podataka konvertovane su u ispravan format, što rješava tihi neuspjeh ažuriranja.
- Popravak: Sada se prihvaćaju decimalne vrijednosti u polje za unos AI Usage Overage Markup.
- Popravak: Riješeni su fatalni errori i problemi dvostrukog inicijaliziranja prilikom učitavanja plugin-a.
- Poboljšanje: Dodan je `check-env` npm script kako bi razvojna okruženja bila samostalno konfigurirana pri prvom pokretanju.

### 1.0.3
* Ažurirano na Plugin Update Checker v5
* Dodani moderni WordPress plugin zaglavlja
* Poboljšana kompatibilnost sa najnovijim verzijama WordPressa
* Poboljšana performansa praćenja korištenja

### 1.0.2
* Popravci grešaka i poboljšanja performansi
* Poboljšano izvještavanje o korištenju

### 1.0.0
* Prva izdanje
* Osnovna funkcionalnost naplate s mjerenjem
* Praćenje korištenja i izračun viška (overage)
* Automatsko generisanje računa
