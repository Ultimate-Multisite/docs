---
title: Dnevnik sprememb zahtevkov za podporo
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Dnevnik sprememb za podporne zahtevke

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Izboljšano: Odstranjena mapa vendor/ iz sledenja Git (že zajeto z .gitignore), kar zmanjša velikost repozitorija
* Izboljšano: Preizkušeno do WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Popravek: Sprejme vrednosti null v nastavitvenih metodah modela zahtevka, ki dovoljujejo null
* Popravek: Shrani vse zahtevke v globalne omrežne tabele za ustrezno podporo multisite
* Popravek: Skrije polja za osebje in popravi preusmeritev na prazno stran v obrazcu novega zahtevka za stranko
* Popravek: Zamenja nedefinirane klice add_meta() s pravilnim update_meta() za shranjevanje metapodatkov
* Popravek: Zamenja neregistrirano preverjanje zmožnosti s pravilnim wu_view_all_support_tickets
* Popravek: Doda manjkajoče AJAX obdelovalnike za stanje zahtevka, dodelitev in dejanja hitrega urejanja
* Popravek: Popravi ime metode za zaznavanje odgovora osebja v pogledih zahtevkov
* Popravek: Združi podvojene obdelovalnike odgovorov in uskladi imena dejanj nonce
* Popravek: Doda manjkajoči frontend pogled za shortcode [wu_submit_ticket]
* Popravek: Doda manjkajoči stolpec user_id in popravi metodo Support_Ticket::get_user_id()
* Popravek: Odstrani dodaten dvojni narekovaj v oznaki možnosti filtra prioritete
* Popravek: Doda ploščo za upravljanje zahtevkov v omrežni administraciji za super administratorje
* Izboljšano: Združi admin CSS v eno zunanjo slogovno datoteko
* Izboljšano: Odstrani podmeni Settings iz administrativnega menija podstrani
* Izboljšano: Pogojno naloži frontend sredstva samo na straneh podpornih zahtevkov
* Izboljšano: Preskoči samodejni nalagalnik plugin, ko je korenski samodejni nalagalnik Bedrock že naložil odvisnosti

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Dodano: Celovita funkcionalnost ogleda zahtevkov za admin in frontend
* Dodano: AJAX obdelovalnik za oddaje odgovorov na zahtevke
* Dodano: Podpora za funkcionalnost odgovorov na zahtevke z ustrezno obravnavo obrazca
* Dodano: Ustrezen prikaz obvestil za oddaje zahtevkov in odgovore v admin
* Dodano: Samodejna povezava zahtevka s trenutnim uporabnikom pri samostojnih oddajah strank
* Dodano: Varnostna izboljšava za preprečevanje, da bi stranke prepisale lastništvo zahtevka
* Dodano: Manjkajoče pomožne funkcije (wu_format_date, wu_user_can_view_ticket itd.)
* Dodano: Ustrezen prenos in obravnava priponk datotek
* Dodano: Sistem e-poštnih obvestil za odgovore na zahtevke in spremembe stanja
* Popravljeno: Obrazec za odgovor na zahtevek zdaj vključuje potreben ID zahtevka
* Popravljeno: Težave z vidnostjo obvestil v pogledih zahtevkov v admin
* Popravljeno: Sintaktične napake v funkcijah podpornih zahtevkov
* Izboljšano: Struktura baze podatkov z ustreznimi razredi za poizvedbe in sheme za odgovore ter priponke
* Izboljšano: Migracija na prave lastnosti namesto atributov za modele zahtevkov

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Posodobljeno: Predpona preimenovana v ultimate-multisite zaradi doslednosti
* Posodobljeno: Standardizacija besedilne domene
* Popravljeno: Manjši popravki napak in izboljšave

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Prva izdaja
* Celovit sistem za upravljanje zahtevkov
* Večnivojski nadzor dostopa
* Sistem pogovorov v nitih
* Podpora za priponke datotek
* Sistem e-poštnih obvestil
* Vmesnika za administratorje in stranke
* Statistika in poročanje
