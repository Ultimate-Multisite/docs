---
title: Osnovni pojmovi
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Osnovni pojmovi {#basic-concepts}

Za novog korisnika WordPress Multisite-a, ili nekoga ko tek počinje koristiti Ultimate Multisite, može biti mnogo novih riječi i fraza koje je potrebno savladati. Učenje ovih pojmova je važan zadatak jer morate razumjeti platformu i kako ona funkcioniše u cjelini.

U ovom članku, pokušat ćemo definisati i objasniti neke ključne koncepte u WordPressu. Neki su više relevantni za korisnike, neki za developere, a neki za obje grupe.

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** je tip instalacije WordPressa koji vam omogućava kreiranje i upravljanje mrežom više web stranica sa jednog WordPress dashboarda. Možete upravljati sveukupno, uključujući broj sajtova, funkcije, teme i uloge korisnika. Moguće je upravljati stotinama i hiljadama sajtova.

## Mreža (Network) {#network}

U smislu WordPressa, multisite mreža je mjesto gdje se može upravljati brojem **subsitova** sa jednog dashboarda. Iako se kreiranje multisite mreže razlikuje među hosting provajderima, krajnji rezultat je obično nekoliko dodatnih direktiva u datoteci **wp-config.php** kako bi WordPress znao da radi u ovom specifičnom modu.

Postoji nekoliko značajnih razlika između multisite mreže i samostalne WordPress instalacije, koje ćemo kratko razraditi.

## Baza podataka (Database) {#database}

Baza podataka je strukturirani, organizovani skup podataka. U računalnom žargonu, baza podataka se odnosi na softver koji se koristi za pohranu i organizaciju podataka. Zamislite je kao arhivu gdje pohranjujete podatke u različitim odjeljcima zvanim tabele.

WordPress Multisite koristi jednu bazu podataka, a svaki subsite dobija svoje tabele sa ID-om bloga u prefiksu, tako da kada instalirate mrežnu instalaciju i kreirate subsite, trebali biste imati ove tabele:

_wp_1_options_ \- tabela opcija za prvi subsite

_wp_2_options_ \- tabela opcija za drugi subsite

## Hosting provajder (Hosting provider) {#hosting-provider}

Hosting provajder je kompanija koja omogućava preduzećima i pojedincima da svoje web stranice učine dostupnim preko World Wide Web-a. Usluge koje web hosting provajderi nude variraju, ali obično uključuju dizajn web stranice, prostor za pohranu na hostu i konektivnost sa Internetom.

## Domen (Domain) {#domain}

Domen je adresa koju ljudi koriste da posjete vaš sajt. Govori web pregledniku gdje da traži vaš sajt. Kao što je poštanska adresa, domen je način na koji ljudi posjećuju vaš web sajt online. I, kao imati znak ispred vaše prodavnice. Ako želite posjetiti naš sajt, moraćete da ukucate naš web adres na adresnu liniju vašeg preglednika, koja je [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), gdje je [**ultimatemultisite.com**](http://ultimatemultisite.com) domen.

## Subdomen (Subdomain) {#subdomain}

Subdomen je tip hijerarhije web stranice ispod glavnog domena, ali umjesto korištenja foldera za organizaciju sadržaja na web stranici, on je više kao da ima vlastitu web stranicu. Predstavlja se kao [**https://site1.domain.com/**](https://site1.domain.com/), gdje je _site1_ naziv subdomena, a [_domain.com_](http://domain.com) je glavni domen.

## Podsada (Subdirectory) {#subdirectory}

Podsada je tip hijerarhije web stranice ispod korijenskog domena koja koristi foldere za organizaciju sadržaja na web stranici. Podsada je isto što i podfolder, i nazivi se mogu koristiti zamjenski. Predstavlja se kao [**https://domain.com/site1**](https://domain.com/site1), gdje je _site1_ naziv podsade, a [_domain.com_](http://domain.com) je glavni domen.

## Subsite {#subsite}

Subsite je dječiji sajt koji kreirate na Multisite mreži. Može biti **subdomen** ili **podsada**, ovisno o tome kako je vaša WordPress Multisite instalacija konfigurisana.

## Super Admin {#super-admin}

WordPress Super Admin je uloga korisnika sa punim mogućnostima za upravljanje svim subsitovima na Multisite mreži. Za Multisite korisnike, to je **najviši nivo pristupa** koji možete pružiti svojoj WordPress instalaciji.

## Plugin {#plugin}

Općenito, plugin je skup koda koji dodaje dodatnu funkcionalnost vašem WordPress sajtu. To može biti nešto jednostavno kao mijenjanje logotipa prijave ili nešto kompleksno kao dodavanje e-commerce funkcionalnosti. _Woocommerce i Contact Form_ su primjeri plugin-a.

Na WordPress Multisite, plugin-i mogu biti instalirani samo sa network admin dashboarda od strane Super Admina. Subsite Admini mogu aktivirati i deaktivirati plugin-e samo unutar svog subsajta.

## Teme (Themes) {#themes}

WordPress tema je grupa datoteka (_grafika, stilovi, i kod_) koja diktira genelni izgled sajta. Pruža sve front-end stilizacije, kao što su stilizacija fonta, raspored stranice, boje, itd.

Isto kao i plugin-i, teme u WordPress Multisite mogu biti instalirane samo od strane Super Admina i mogu se aktivirati na nivou subsajta od strane subsite admina.

## Šablon sajta (Site Template) {#site-template}

**Šablon sajta** je osnovni sajt koji se može koristiti kao baza prilikom kreiranja novih sajtova u vašoj mreži.

To znači da možete kreirati bazni sajt, aktivirati različite plugin-e, postaviti aktivnu temu i prilagoditi ga na bilo koji način. Zatim, kada vaš klijent kreira novi račun, umjesto da dobije podrazumevani WordPress sajt bez smislenog sadržaja, dobit će kopiju vašeg baznog sajta sa svim prilagođenostima i sadržajem već postavljene.

## Mapiranje domena (Domain Mapping) {#domain-mapping}

**Mapiranje domena** sa WordPressom je način preusmjeravanja korisnika na ispravan host, putem adrese web stranice. U WordPress Multisite, subsitovi se kreiraju korištenjem ili podsade ili subdomena. Ono što mapiranje domena radi je to što omogućava korisnicima subsajta da koriste top-level domen poput [**joesbikeshop.com**](http://joesbikeshop.com) kako bi njihov sajt izgledao profesionalnije.

## SSL {#ssl}

SSL znači **Secure Sockets Layer**. To je digitalni certifikat koji autentificira identitet web stranice i omogućava šifrovani konekciju. Danas se koristi kao standardna tehnologija za održavanje sigurnosti internet konekcije i zaštitu bilo kakvih osjetljivih podataka koji se prenose između dva sistema, sprječavajući kriminalcima da čitaju i mijenjaju bilo kakve prenesene informacije, uključujući potencijalne osobne podatke. Moderni preglednici zahtijevaju SSL, što ga čini esencijalnim prilikom kreiranja i pokretanja web stranice.

## Mediji (Media) {#media}

Mediji su slike, audio, video i drugi fajlovi koji čine web stranicu.

Mrežni sajtovi dijele jednu bazu podataka u WordPress Multisite-u, ali održavaju zasebne putanje na filesystemu za medijske fajlove.

Standardna WordPress lokacija (wp-content/uploads) ostaje; međutim, njena putanja se mijenja kako bi odražavala jedinstveni ID mrežnog sajta. Posljedično, medijski fajlovi za mrežni sajt izgledaju kao wp-contents/uploads/site/[id].

## Permalinki {#permalinks}

Permalinki su trajne URL adrese vašeg pojedinačnog blog posta ili stranice unutar vašeg sajta. Permalinki se također nazivaju **pretty links** (ljepši linkovi). Podrazumevano, WordPress URL koristi format upita (query string) koji izgleda otprilike ovako:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite je WordPress plugin, napravljen za WordPress Multisite instalacije, koji transformiše vašu WordPress instalaciju u premium mrežu sajtova – poput [WordPress.com](https://WordPress.com) – omogućavajući klijentima da kreiraju sajtove putem mjesečnih, kvartalnih ili godišnjih naknada (možete kreirati i besplatne planove).

## Formular za naplatu (Checkout Form) {#checkout-form}

Checkout Form je jednostavni ili višestepeni formular za narudžbu koji uključuje kreiranje subsajta, članstva i korisničkih računa putem registracije Ultimate Multisite-a. Sastoji se od različitih polja i formulara za plaćanje koje korisnik mora poslati tokom procesa prijave.

## Webhook {#webhook}

Webhook (također nazvan web callback ili HTTP push API) je način na koji aplikacija pruža drugim aplikacijama informacije u stvarnom vremenu. Webhook dostavlja podatke drugim aplikacijama kako se to dogodi, što znači da dobijete podatke odmah.

**Ultimate Multisite webhook-ovi** otvaraju beskonačne mogućnosti, omogućavajući network adminima da obave sve vrste čudnih, ali korisnih integracija, posebno ako se koriste u kombinaciji sa uslugama poput _Zapier i IFTTT_.

## Događaji (Events) {#events}

Događaj je akcija koja nastaje kao rezultat akcije korisnika ili drugog izvora, kao što je klik mišem. Ultimate Multisite vodi evidenciju svih događaja i logova koji se dešavaju unutar vaše cijele mreže. Prati različite aktivnosti koje se dešavaju u vašem multisajtu, kao što su promjene planova.
