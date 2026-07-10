---
title: Dnevnik promjena tiketa za podršku
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Dnevnik promjena tiketa podrške {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Poboljšano: Uklonjen direktorij vendor/ iz Git praćenja (već obuhvaćeno s .gitignore), čime je smanjena veličina repozitorija
* Poboljšano: Testirano do WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Ispravak: Prihvaćanje null vrijednosti u nullable setterima modela tiketa
* Ispravak: Pohrana svih tiketa u globalne tablice na razini cijele mreže radi ispravne multisite podrške
* Ispravak: Sakrivanje polja osoblja i ispravak preusmjeravanja na praznu stranicu na obrascu korisnika za novi tiket
* Ispravak: Zamjena nedefiniranih poziva add_meta() ispravnim update_meta() za pohranu metapodataka
* Ispravak: Zamjena neregistrirane provjere mogućnosti ispravnim wu_view_all_support_tickets
* Ispravak: Dodani nedostajući AJAX handleri za status tiketa, dodjelu i radnje brzog uređivanja
* Ispravak: Ispravljen naziv metode za otkrivanje odgovora osoblja u prikazima tiketa
* Ispravak: Konsolidirani duplicirani handleri odgovora i usklađeni nazivi nonce radnji
* Ispravak: Dodan nedostajući frontend prikaz za [wu_submit_ticket] shortcode
* Ispravak: Dodan nedostajući stupac user_id i ispravljena metoda Support_Ticket::get_user_id()
* Ispravak: Uklonjen dodatni dvostruki navodnik u oznaci opcije filtra prioriteta
* Ispravak: Dodana ploča za upravljanje tiketima u mrežnoj administraciji za super administratore
* Poboljšano: Konsolidiran administratorski CSS u jedan vanjski stylesheet
* Poboljšano: Uklonjen podizbornik Settings iz administratorskog izbornika podstranice
* Poboljšano: Uvjetno učitavanje frontend resursa samo na stranicama tiketa podrške
* Poboljšano: Preskakanje plugin autoloadera kada je Bedrock root autoloader već učitao ovisnosti

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Dodano: Potpuna funkcionalnost pregledavanja tiketa za administraciju i frontend
* Dodano: AJAX handler za slanje odgovora na tiket
* Dodano: Podrška za funkcionalnost odgovora na tiket s ispravnim rukovanjem obrascem
* Dodano: Ispravan prikaz obavijesti za slanje tiketa i odgovore u administraciji
* Dodano: Automatsko povezivanje tiketa s trenutačnim korisnikom za korisnička samostalna slanja
* Dodano: Sigurnosno poboljšanje za sprječavanje korisnika da nadjačaju vlasništvo nad tiketom
* Dodano: Nedostajuće pomoćne funkcije (wu_format_date, wu_user_can_view_ticket, itd.)
* Dodano: Ispravno preuzimanje i rukovanje privicima datoteka
* Dodano: Sustav obavijesti e-poštom za odgovore na tikete i promjene statusa
* Ispravljeno: Obrazac za odgovor na tiket sada uključuje potreban ID tiketa
* Ispravljeno: Problemi s vidljivošću obavijesti u administratorskim prikazima tiketa
* Ispravljeno: Sintaksne pogreške u funkcijama tiketa podrške
* Poboljšano: Struktura baze podataka s ispravnim klasama upita i sheme za odgovore i privitke
* Poboljšano: Migracija na stvarna svojstva umjesto atributa za modele tiketa

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Ažurirano: Prefiks preimenovan u ultimate-multisite radi dosljednosti
* Ažurirano: Standardizacija tekstualne domene
* Ispravljeno: Manji ispravci grešaka i poboljšanja

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Početno izdanje
* Cjelovit sustav upravljanja tiketima
* Višerazinska kontrola pristupa
* Sustav razgovora u nitima
* Podrška za privitke datoteka
* Sustav obavijesti e-poštom
* Sučelja za administratore i korisnike
* Statistika i izvještavanje
