---
title: Tukipyyntöjen muutosloki
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Tukipyyntöjen muutosloki {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Parannettu: Poistettu vendor/-hakemisto Git-seurannasta (jo katettu .gitignore-tiedostolla), mikä pienentää repositoryn kokoa
* Parannettu: Testattu WordPress 7.0:aan asti

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Korjaus: Hyväksy null-arvot nullable-tukipyyntömallin settereissä
* Korjaus: Tallenna kaikki tukipyynnöt globaaleihin verkonlaajuisiin tauluihin asianmukaista monisivustotukea varten
* Korjaus: Piilota henkilöstökentät ja korjaa tyhjän sivun uudelleenohjaus asiakkaan uuden tukipyynnön lomakkeessa
* Korjaus: Korvaa määrittelemättömät add_meta()-kutsut oikealla update_meta()-kutsulla metatietojen tallennusta varten
* Korjaus: Korvaa rekisteröimätön oikeustarkistus oikealla wu_view_all_support_tickets-tarkistuksella
* Korjaus: Lisää puuttuvat AJAX-käsittelijät tukipyynnön tilalle, määritykselle ja pikamuokkaustoiminnoille
* Korjaus: Korjaa metodin nimi henkilöstön vastauksen tunnistukseen tukipyyntönäkymissä
* Korjaus: Yhdistä päällekkäiset vastauskäsittelijät ja yhdenmukaista nonce-toimintojen nimet
* Korjaus: Lisää puuttuva frontend-näkymä [wu_submit_ticket]-lyhytkoodille
* Korjaus: Lisää puuttuva user_id-sarake ja korjaa Support_Ticket::get_user_id()-metodi
* Korjaus: Poista ylimääräinen lainausmerkki prioriteettisuodattimen option-tunnisteesta
* Korjaus: Lisää verkon ylläpidon tukipyyntöjen hallintapaneeli superylläpitäjille
* Parannettu: Yhdistä ylläpidon CSS yhteen ulkoiseen tyylitiedostoon
* Parannettu: Poista Settings-alivalikko alisivuston ylläpitovalikosta
* Parannettu: Lataa frontend-resurssit ehdollisesti vain tukipyyntösivuilla
* Parannettu: Ohita pluginin autoloader, kun Bedrock-juuren autoloader on jo ladannut riippuvuudet

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Lisätty: Täysi tukipyyntöjen katselutoiminnallisuus ylläpidolle ja frontendille
* Lisätty: AJAX-käsittelijä tukipyyntöjen vastausten lähettämiseen
* Lisätty: Tuki tukipyyntöjen vastaustoiminnallisuudelle asianmukaisella lomakekäsittelyllä
* Lisätty: Asianmukainen ilmoitusten näyttö tukipyyntöjen lähetyksille ja vastauksille ylläpidossa
* Lisätty: Tukipyyntöjen automaattinen liittäminen nykyiseen käyttäjään asiakkaiden itse lähettämissä pyynnöissä
* Lisätty: Turvaparannus, joka estää asiakkaita ohittamasta tukipyynnön omistajuutta
* Lisätty: Puuttuvat apufunktiot (wu_format_date, wu_user_can_view_ticket jne.)
* Lisätty: Asianmukainen tiedostoliitteiden lataus ja käsittely
* Lisätty: Sähköposti-ilmoitusjärjestelmä tukipyyntöjen vastauksille ja tilamuutoksille
* Korjattu: Tukipyynnön vastauslomake sisältää nyt tarvittavan tukipyynnön ID:n
* Korjattu: Ilmoitusten näkyvyysongelmat ylläpidon tukipyyntönäkymissä
* Korjattu: Syntaksivirheet tukipyyntöfunktioissa
* Parannettu: Tietokantarakenne asianmukaisilla kysely- ja skeemaluokilla vastauksille ja liitteille
* Parannettu: Siirtyminen todellisiin ominaisuuksiin attribuuttien sijaan tukipyyntömalleissa

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Päivitetty: Prefix nimetty uudelleen muotoon ultimate-multisite yhdenmukaisuuden vuoksi
* Päivitetty: Text domain -standardointi
* Korjattu: Pieniä virhekorjauksia ja parannuksia

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Ensimmäinen julkaisu
* Täydellinen tukipyyntöjen hallintajärjestelmä
* Monitasoinen käyttöoikeuksien hallinta
* Säikeistetty keskustelujärjestelmä
* Tiedostoliitteiden tuki
* Sähköposti-ilmoitusjärjestelmä
* Ylläpidon ja asiakkaan käyttöliittymät
* Tilastot ja raportointi
