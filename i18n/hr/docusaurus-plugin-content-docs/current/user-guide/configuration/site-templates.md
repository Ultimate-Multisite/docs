---
title: Šabloni stranica
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Šabloni za web stranice (v2)

_**NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x. Ako koristite verziju 1.x,**_ **pogledajte ovaj članak.**_

Naš cilj pri kreiranju premium mreže s Ultimate Multisite je automatizirati što više procesa, dajući našim klijentima fleksibilnost i različite opcije za odabir prilikom kreiranja njihovih web stranica. Jedan jednostavan način da postignemo taj balans je korištenje značajke Site Templates u Ultimate Multisite.

## Što je Site Template?

Kao što ime kaže, Site Template je osnovni (boilerplate) web stranica koji se može koristiti kao osnova pri kreiranju novih stranica u vašoj mreži.

To znači da možete napraviti osnovnu stranicu, aktivirati različite pluginove, postaviti aktivan tema i prilagoditi je na bilo koji način želite. Zatim, kada vaš klijent kreira novi račun, umjesto dobivanja standardne WordPress stranice bez smislenog sadržaja unutar nje, on će dobiti kopiju vaše osnovne stranice s svim već postavljenim prilagodbama i sadržajem.

To zvuči sjajno, ali kako napraviti novu šablonu za stranicu? To je jednostavnije što može biti.

## Kreiranje i uređivanje nove Site Template-a

Site Templates su jednostavno obične stranice u vašoj mreži. Da biste kreirali novi template, možete jednostavno otići na **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Dupli se dugme za dodavanje stranice na stranici sa listom stranica](/img/config/site-templates-list.png)**

Ovo će otvoriti modalno prozor gdje će se pitati za **Naslov stranice, Domen/putanja stranice** i **Vrstu stranice**. U padajućem meniju **Vrsta stranice** provjerite da ste odabrali **Site Template** *.

_![Modal za dodavanje site template-a s padajućim menijem vrste stranice](/img/config/site-templates-list.png)_

Možete dodati i opis namijenjen klijentima kako biste objasnili što šablon uključuje:

![Opis polja za predložak stran na ekranu uređivanja predlošaka stranica](/img/config/site-template-edit-description.png)

Na dnu forme ćete primijetiti prekidač **Kopiraj stranicu (Copy Site)**. On će vam omogućiti da napravite novi predložak stranice na osnovu postojećeg predloška kao početnu točku, pomažući vam da uštedite vrijeme umjesto da kreirate predložak od nule.

![Modal za dodavanje predloška stranice s prekidačem kopiranja stranice](/img/config/site-templates-list.png)

### Prilagođavanje sadržaja Predloška Stranice

Da biste prilagodili svoj predložak stranice, jednostavno navigirajte na njegov dashboard panel i napravite promjene koje vam trebaju. Možete kreirati nove objave, stranice, aktivirati pluginove i promijeniti aktivni temu. Možete čak otići u Customizer i promijeniti sve vrste opcija za prilagođavanje.

![Interfejs uređivanja predloška stranice](/img/config/site-template-edit.png)

Sva ta podaci će biti kopirani kada klijent napravi novu stranicu na osnovu tog Predloška Stranice.

### Napredne opcije

Ako znate kako se bavite nekim prilagođenim kodiranjem, možete koristiti naš Search and Replace API da biste automatski zamijenili informacije na novoj stranici nakon njenog kreiranja. Ovo je korisno za stvari poput zamjene nazivima tvrtki na stranici "O nama", zamjene e-mail adrese za kontakt na stranici za kontakt itd.

### Korištenje Predlošaka Stranica

Dobro, napravili ste niz različitih Predlošaka Stranica s različitim dizajnima, temama i postavkama. Kako ih sada učiniti korisnim u vašoj mreži?

Osnovno, postoje dva pristupa koje možete koristiti (ne istovremeno):

  * Pridruživanje jednog Predloška Stranice svakom od vaših Planova

**ILI**

  * Omogućavanje vašim klijentima da sami biraju predloške stranica prilikom prijave.

#### Moda 1: Dodjela Predloška Stranice

U ovom načinu, vaši klijenti neće moći birati šablon prilikom kreiranja računa, već vi ćete definirati koji šablon treba koristiti za svaki od vaših Planova.

Za to ćete morati otići u **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Ovo će vas dovesti na stranicu **Edit Product**. U sekciji **Product Options** pronađite karticu **Site template** i odaberite opciju **Assign Site Template** iz padajućeg polja. To će prikazati list dostupnih šablona i omogućiti vam da odaberete samo jedan šablon za proizvod.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Način 2: Odaberite dostupni šablon
U ovom načinu, dajete svojim klijentima izbor tijekom procesa prijave. Oni će moći odabrati iz različitih šablona koje definirate pod postavkama proizvoda. Imate opciju ograničiti šablone koje mogu odabrati pod odobrenim proizvodom. To vam omogućuje da imate različite skupine šablona za svaki proizvod, što je idealno za isticanje različitih funkcija i značajki za više cijenjenji proizvod.

Na stranici **Uredbe proizvoda**. U sekciji **Product Options** pronađite karticu **Site template** i iz padajućeg polja odaberite opciju **Choose Available Site Template** (Odaberite dostupnu šablonu stranice). Ovo će prikazati list dostupnih šablona stranica i omogućiti vam da odaberete šablon koji želite da bude dostupan. Možete to učiniti biranjem njegovog ponašanja: **Available** (Dostupno) ako želite da se šablon stranice uključi u listu, **Not Available** (Nije dostupno) ako ne želite da se šablon stranice prikazuje kao opcija i **Pre-selected** (Predodabran) ako želite da jedan od navedenih šablona stranica bude podrazumevani odabrani.

![Odaberite dostupne šablone stranica s opcijama ponašanja](/img/config/product-site-templates.png)

### Podrazumevani način: Odabir šablona stranice na obrascu za plaćanje (Checkout form)

Ako želite da su vam svi vaši šabloni stranica dostupni tijekom registracije, ili možda ne želite dodatno raditi s dodjeljivanjem ili specifikacijom šablona stranica pod svakim proizvodom koji kreirate. Onda možete jednostavno postaviti odabir šablona stranice pod vaš **Checkout Form** (Obracac za plaćanje). Za to, idite na **Ultimate Multisite > Checkout Forms** i kliknite **Edit** (Uredi) ispod obrasca koji želite konfigurirati.

Ovo će otvoriti stranicu **Edit Checkout Form** (Uredi obrazac za plaćanje). Pronađite polje **Template Selection** (Odabir šablona) i kliknite **Edit** (Uredi) ispod njega.

Pojavit će se prozor za dijalog (modal window). Pod poljem **Template Sites** možete odabrati i navesti sve šablone stranice koje želite da budu dostupne tijekom registracije. Šabloni stranice koje specifikujete ovdje bit će dostupni bez obzira na koji proizvod je korisnik odabrao.

![Polje za odabir šablona u editoru obrasca za plaćanje](/img/config/checkout-form-template-step.png)

Na frontend-u, kupci vide odaber za šablon tijekom plaćanja i mogu odabrati početni dizajn za svoju novu stranicu.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opcije za šablone stranica

Postoje i druge funkcije šablona stranice koje možete uključiti ili isključiti u podešavanjima Ultimate Multisite.

![Opcije za šablone stranica u podešavanjima Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Omogućite promjenu šablona

Omogućivanjem ove opcije, vaši klijenti će moći promijeniti šablon koji biraju tijekom procesa registracije nakon što se račun i stranica kreiraju. Ovo je korisno soglasićima jer im omogućuje ponovno odabiranje šablona ako kasnije shvate da je njihov prvobitni izbor nije bio najbolji za njihove specifične potrebe.

#### Omogućite korisnicima korištenje svoje stranice kao šablona

Budući da korisnici podstranica provode vrijeme na izgradnji i dizajnu vlastite stranice, možda će htjeti je klonirati i koristiti kao jedan od dostupnih šablona pri kreiranju druge podstranice u vašoj mreži. Ova opcija im omogućuje to.

#### Kopiranje medija pri duplikaciji šablona

Provjerom ove opcije kopirate medije učitane na šablon stranici na novu stranicu koja se kreira. Ovo se može prebaciti (override) na svakom planu.

#### **Sprečavanje indeksiranja šablona stranica od strane search engine-a**

Šabloni stranice, kao što je gore navedeno u ovom članku, su osnovni predlošci, ali i dalje čine dio vaše mreže, što znači da su dostupni za pretraživače. Ova opcija vam omogućuje da sakrijete šablone stranice kako bi search engine-i mogli indeksirati te šablone.

## Predpopunjavanje šablona stranica s automatskim pretraživanjem i zamjenom

Jedna od najmoćnijih značajki Ultimate Multisite je mogućnost dodavanja bilo kojeg teksta, boja i polja na registracioni obrazac. Kada to podacit sွေemo, možemo ga koristiti za unaprijed popunjavanje sadržaja u određenim dijelovima odabranog šablona stranice. Zatim, kada se nova stranica objavljuje, Ultimate Multisite će zamijeniti prazne mjesta (placeholder-e) stvarnim informacijama koje su unijete tijekom registracije.

Na primjer, ako želite dobiti ime tvrtke korisnika tijekom registracije i automatski ugraditi ime tvrtke na početnu stranicu. Na početnoj stranici vašeg šablona trebate dodati te mjesta (placeholder-e), kao što je prikazano na slici ispod (mjesta treba obaviti unutar dvokrutih zagrada - {{ime_mjesta}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Zatim, možete jednostavno dodati odgovarajuće polje za registraciju na vašu obrazac za plaćanje kako biste to podatak prikupili. I isti editor obrazca za plaćanje koji se koristi za odabir šablona omogućuje vam da postavite prilagođena polja pored odabira šablona:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Vaš kupac će tada moći popuniti to polje tijekom registracije.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite zatim automatski zamijenit će mjesta (placeholder-e) podacima koje je korisnik dao.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Rješavanje problema "šablon pun praznina"

Sve to je super, ali naiđemo na neugodan problem: sada su na našim šablonima stranica - koje mogu posjetiti naši kupci - puna jezivih mjesta (placeholder-a) koja ne daju mnogo informacija.

Da biste to riješili, nudimo opciju podešavanja lažnih vrijednosti za placeholder-e i koristimo te vrijednosti za pretraživanje i zamjenu njihovog sadržaja na web stranicama šablona dok su kupci posjetili te stranice.

Možete pristupiti editoru placeholder-a šablona idući na **Ultimate Multisite > Settings > Sites**, a zatim, u lijevoj traci, klikom na link **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

To će vas odvesti do editora sadržaja placeholder-a, gdje možete dodati placeholder-e i njihov odgovarajući sadržaj.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
