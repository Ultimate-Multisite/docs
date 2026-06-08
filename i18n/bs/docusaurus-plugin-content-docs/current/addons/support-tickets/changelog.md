---
title: Naslovnik promjena za tikete podrške
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Dnevnik promjena za tikete podrške

### 1.0.4 - 2026-05-05
* Unapređeno: Uklonjen direktorijum vendor/ iz Git praćenja (već je pokriveno sa .gitignore), što smanjuje veličinu repozitorija
* Unapređeno: Testirano do WordPress verzije 7.0

### 1.0.3 - 2026-05-01
* Popravljeno: Prihvatanje null vrijednosti u setterima modela tiketa koji dozvoljavaju null
* Popravljeno: Svi tiketi se pohranjuju u globalne tabele za cijelu mrežu radi pravilne podrške za multisajt
* Popravljeno: Sakrivena polja za osoblje i popravljen preusmjeravanje na praznu stranicu na formularu za novi tiket klijenta
* Popravljeno: Zamijenjeni nedostajući pozivi add_meta() sa ispravnim update_meta() za pohranu metapodataka
* Popravljeno: Zamijenjena provjera registrovanih sposobnosti (capability) sa ispravnim wu_view_all_support_tickets
* Popravljeno: Dodati nedostajući AJAX rukovatelji za status tiketa, dodjelu i brzu izmjenu
* Popravljeno: Ispravljeno ime metode za detekciju odgovora osoblja u pregledima tiketa
* Popravljeno: Konsolidovani dupli rukovatelji odgovora i usklađena imena akcija nonce
* Popravljeno: Dodati nedostajući prednji prikaz za shortcode [wu_submit_ticket]
* Popravljeno: Dodana nedostajuća kolona user_id i popravljena metoda Support_Ticket::get_user_id()
* Popravljeno: Uklonjen dodatni dvostruki navodnik u tagu opcije filtera prioriteta
* Popravljeno: Dodan panel za upravljanje tiketima za administraciju mreže za super administratora
* Unapređeno: Konsolidovani CSS za administratora u jedan eksterni stilski list
* Unapređeno: Uklonjen podmeni Settings iz menija administracije pod-sajta
* Unapređeno: Kondicionalno učitavanje prednjih resursa samo na stranicama tiketa podrške

### 1.0.2 - 2025-12-11
* Dodato: Puna funkcionalnost pregleda tiketa za administratora i prednji kraj (frontend)
* Dodato: AJAX rukovatelji za slanje odgovora na tiket
* Dodato: Podrška za funkcionalnost odgovora na tiket sa pravilnom obradom formulara
* Dodato: Pravilno prikazivanje obavijesti za podnošenje i odgovore na tikete u administraciji
* Dodato: Automatsko povezivanje tiketa sa trenutnim korisnikom za samostalno podnošenje zahtjeva od strane klijenta
* Dodato: Poboljšanje sigurnosti kako bi se spriječilo da klijenti preuzmu vlasništvo nad tiketima
* Dodato: Nedostajuće pomoćne funkcije (wu_format_date, wu_user_can_view_ticket, itd.)
* Dodato: Pravilno preuzimanje i rukovanje prilogama datoteka
* Dodato: Sistem obavijesti putem e-pošte za odgovore na tikete i promjene statusa
* Popravljeno: Formular za odgovor na tiket sada uključuje potreban ID tiketa
* Popravljeno: Problemi sa vidljivošću obavijesti u pregledima tiketa za administratora
* Popravljeno: Sintaksne greške u funkcijama tiketa podrške
* Unapređeno: Struktura baze podataka sa pravilnim upitima i klasama šeme za odgovore i priloge
* Unapređeno: Migracija na stvarne svojstva (properties) umjesto atributa za modele tiketa

### 1.0.1 - 2025-09-28
* Ažurirano: Prefiks preimenovan u ultimate-multisite radi konzistentnosti
* Ažurirano: Standardizacija domena teksta
* Popravljeno: Manji popravci grešaka i poboljšanja

### 1.0.0 - 2025-09-01
* Prvi izdanje
* Kompletan sistem za upravljanje tiketima
* Kontrola pristupa na više nivoa
* Sistem razgovora u niti
* Podrška za priloge datoteka
* Sistem obavijesti putem e-pošte
* Interfejsi za administratora i klijente
* Statistika i izvještavanje
