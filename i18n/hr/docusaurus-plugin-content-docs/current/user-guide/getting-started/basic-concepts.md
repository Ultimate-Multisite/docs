---
title: Osnovni koncepti
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Osnovni koncepti

Za novog korisnika WordPress Multisite-a i nekoga tko se tek počinje koristiti Ultimate Multisite-om, može biti mnogo novih riječi i fraza koje treba naučiti. Učenje tih pojmova je važna zadaća jer ćete morati razumjeti platformu i kako ona radi u cijelosti.

U ovom članku pokušat ćemo definirati i objasniti neke od ključnih koncepata u WordPressu. Neki su relevantniji za korisnike, neki za programere, a neki za oboje.

## WordPress Multisite

WordPress **Multisite** je vrsta instalacije WordPressa koja vam omogućuje da kreirate i upravljate mrežom više web stranica iz jedne WordPress dashboard-a. Možete upravljati svime uključujući broj stranica, značajke, teme i uloge korisnika. Mogu se upravljati stotinama i tisućama stranica.

## Mreža (Network)

U kontekstu WordPressa, multisite mreža je mjesto gdje se određeni broj **substrana** može upravljati s jedne dashboard-a. Iako se kreiranje multisite mreže razlikuje ovisno o dobavljaču hostingu, krajnji rezultat je obično nekoliko dodatnih uputa u datoteci **wp-config.php** kako biste WordPressu rekli da radi u ovom specifičnom načinu rada.

Postoji niz različitih razlika između multisite mreže i samostalnoj instalacije WordPressa koje ćemo kratko proći.

## Baza podataka (Database)

Baza podataka je strukturiran, organiziran skup podataka. U informatici, baza podataka označava softver koji se koristi za pohranu i organizaciju podataka. Zamislite to kao ormar gdje pohranjujete podatke u različitim odjeljcima zvanim tabelama.

WordPress Multisite koristi jednu bazu podataka i svaka substrana dobiva vlastite tabele s blog ID-om u prefiksu, tako da kada instalirate multisite instalaciju i kreirate substranu, trebate imati ove tabele:

_wp_1_options_ \- tablica opcija za prvi subsajt

_wp_2_options_ \- tablica opcija za drugi subsajt

## Hosting provider

Hosting provider je tvrtka koja omogućuje poduzećima i pojedincima da učine svoje web stranice dostupnim putem World Wide Web-a. Usluge koje nude hosting provajderi variraju, ali obično uključuju dizajn web stranica, prostor za pohranu na hostu i povezivost s Internetom.

## Domain

Domain ime je adresa koju ljudi koriste da bi posjetili vašu stranicu. Govori pregledniku kako pronaći vašu stranicu. Kao što je u slučaju ulice, domain je način na koji ljudi posjećuju vaš web stranicu online. I kao imati znak ispred vaše trgovine. Ako želite posjetiti naš web stranicu, morat ćete ukucati naš web adres na adresu preglednika koja je [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, gdje je [**ultimatemultisite.com**](http://ultimatemultisite.com) ime domena.

## Subdomain

Subdomain je vrsta hijerarhije web stranica pod glavnim domenom, ali umjesto korištenja foldera za organizaciju sadržaja na web stranici, on zapravo dobiva vlastitu web stranicu. Predstavlja se kao [**https://site1.domain.com/**](https://site1.domain.com/) gdje je _site1_ ime subdomena i [_domain.com_](http://domain.com) glavni domen.

## Subdirectory

Subdirektorij je vrsta hijerarhije web stranica pod root domenom koji koristi foldere za organizaciju sadržaja na web stranici. Subdirektorij je isti kao podfolder i imena se mogu zamjenjivati. Predstavlja se kao [**https://domain.com/site1**](https://domain.com/site1) gdje je _site1_ ime subdirektorija i [_domain.com_](http://domain.com) glavni domen.

## Subsite

Subsite je podsajt koji kreirate unutar Multisite mreže. Može biti **subdomena** ili **poddirektorijum**, ovisno o tome kako je konfigurirana vaša instalacija WordPress Multisite-a.

## Super Admin

WordPress Super Admin je korisnička uloga s punim mogućnostima upravljanja svim subsajtovima na Multisite mreži. Za Multisite korisnike, to je **najviši nivo pristupa** koji možete pružiti svojoj WordPress instalaciji.

## Plugin

Općenito, plugin je skup koda koji dodaje dodatnu funkcionalnost vašoj WordPress stranici. To može biti jednostavno kao promjena logotipa za prijavu ili složeno kao dodavanje e-commerce funkcionalnosti. _Woocommerce i Contact Form_ su primjeri pluginova.

Na WordPress Multisite mreži, pluginovi se mogu instalirati samo s admin panela mreže od strane Super Admina. Subsite Admini mogu aktivirati i deaktivirati pluginove unutar svog subsajta.

## Themeovi (Temi)

WordPress tema je skup datoteka (_grafika, stilskih listi i koda_) koji određuje opći izgled stranice. Pruža sve front-end stilove poput stilova fonta, rasporeda stranica, boja itd.

Sobo kao i pluginovi, teme u WordPress Multisite mreži mogu instalirati samo Super Admin, a aktivirati ih na nivou subsajta mogu Subsite Admini.

## Site Template (Šablon stranice)

**Site Template** je šablon stranice koji se može koristiti kao osnova pri kreiranju novih stranica u vašoj mreži.

To znači da možete kreirati osnovnu stranicu, aktivirati različite pluginove, postaviti aktivnu temu i prilagoditi je na bilo koji način. Zatim, kada vaš klijent kreira novi račun, umjesto dobivanja podrazumijevane WordPress stranice bez smislenog sadržaja, dobit će kopiju vaše osnovne stranice s svim već postavljenim prilagodbama i sadržajem.

## Domain Mapping (Mapiranje domena)

**Domain mapping** s WordPressom način da se korisnici preusmure na pravi host putem web adrese. U WordPress Multisite-u, subsiti se kreiraju koriste bilo poddirektorijum ili poddomen. Domain mapping omogućuje korisnicima subsita da koriste top-level domen poput [**joesbikeshop.com**](http://joesbikeshop.com) kako bi adresa sajta izgledala profesionalnije.

## SSL

SSL znači **Secure Sockets Layer**. To je digitalni sertifikat koji potvrđuje identitet web stranice i omogućuje šifrovanu vezu. Danas se koristi kao standardna tehnologija za osiguravanje internet veze i zaštitu bilo kakih osjetljivih podataka koji se prenose između dvije sustava, sprečavajući kriminalce da čitaju i mijenjaju bilo koju transferiranu informaciju, uključujući potencijalne osobne podatke. Moderni preglednici zahtijevaju SSL, što ga čini neophodnim pri kreiranju i pokretanju web stranice.

## Media

Media su slike, audio, video i drugi datoteci koji čine web stranicu.

Mrežno postavljeni sajtovi dijele jednu bazu podataka u WordPress Multisite-u, ali održavaju odvojene putanje na sustavu za datoteke medija.

Standardna lokacija WordPressa (wp-content/uploads) ostaje ista; međutim, njena putanja se mijenja kako bi odražavala jedinstveni ID mrežnog sajta. Posljedično, datoteke medija za mrežni sajt izgledaju kao wp-contents/uploads/site/[id].

## Permalinks

Permalinks su stalne URL adrese vašeg pojedinačnog blog postova ili stranice unutar vašeg sajta. Permalinks se nazivaju i **pretty links**. Po podrazumevanom, URL-ovi WordPressa koriste format query string koji izgleda otprilike ovako:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite je WordPress plugin napravljen za instalacije WordPress Multisite, koji pretvara vašu instalaciju WordPressa u premium mrežu web stranica – slično [WordPress.com](https://WordPress.com) – omogućujući klijentima da kreiraju stranice putem mjesečnih, kvartalnih ili godišnjih plaćanja (možete kreirati i besplatne planove).

## Checkout Form (Form za plaćanje)

Checkout Form je jedinstveni ili višestruki obrazac za narudžbine koji uključuje kreiranje subsite-a, članstva i korisničkih računa putem Ultimate Multisite registracije. Sastoji se od različitih polja i formulara za plaćanje koje korisnik mora podnijeti tijekom procesa prijave.

## Webhook

Webhook (koji se također naziva web callback ili HTTP push API) je način na koji aplikacija pruža druge aplikacijama informacije u stvarnom vremenu. Webhook isporučuje podatke drugim aplikacijama kako se događaju, što znači da dobivate podatke odmah.

**Ultimate Multisite webhooks** otvaraju beskonačne mogućnosti, omogućujući administraciji mreže da radi sve vrste nevjerojatno korisnih integracija, pogotovo ako se koriste u kombinaciji s ovim uslugama kao što su _Zapier_ i IFTTT_.

## Events (Događaji)

Event je radnja koja nastaje kao rezultat akcije korisnika ili druge izvora, poput klikanja mišem. Ultimate Multisite prati sve događaje i logove koji se dešavaju unutar vaše cijele mreže. Prati različite aktivnosti koje se odvijaju u vašem multisite-u, poput promjena plana.
