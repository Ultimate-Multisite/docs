---
title: Šabloni sajtova
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Šabloni za sajtove (v2)

_**NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x. Ako koristite verziju 1.x,**_ **pročitajte ovaj članak.**_

Naš cilj pri kreiranju premium mreže sa Ultimate Multisite je da što više procesa automatizujemo, dajući našim klijentima fleksibilnost i različite opcije za izbor kada kreiraju svoje web sajtove. Jedan lak način da postignemo taj balans je korišćenje značajke Site Templates u Ultimate Multisite-u.

## Šta je Site Template? {#what-is-a-site-template}

Kao što ime kaže, Site Template je osnovni (boilerplate) sajt koji se može koristiti kao osnova pri kreiranju novih sajtova u vašoj mreži.

To znači da možete napraviti osnovni sajt, aktivirati različite pluginove, postaviti aktivan tema i prilagoditi ga na bilo koji način koji želite. Zatim, kada vaš klijent kreira novi nalog, umesto dobijanja standardnog WordPress sajta bez smislenog sadržaja unutar njega, on će dobiti kopiju vašeg osnovnog sajta sa svim podešavanjima i sadržajem već na mestu.

To zvuči sjajno, ali kako da napravim novi site template? To je što jednostavnije što može biti.

## Kreiranje i uređivanje novog Site Template-a {#creating-and-editing-a-new-site-template}

Site Templates su jednostavno obični sajtovi u vašoj mreži. Da biste kreirali novi šablon, možete jednostavno otići na **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Dugme za dodavanje sajta na stranici liste sajtova](/img/config/site-templates-list.png)**

Ovo će otvoriti modalno prozorčić gde će se tražiti **Naslov sajta, Domen/putanja sajta** i **Tip sajta**. Pod poljem **Tip sajta**, u padajućem meniju obavezno izaberite **Site Template** *.

_![Modal za dodavanje site template-a sa padajućim menijem tipa sajta](/img/config/site-templates-list.png)_

Možete dodati i opis namenjen klijentima kako biste objasnili šta šablon uključuje:

![Opis polja za šablon teme na ekranu uređivanja šablona](/img/config/site-template-edit-description.png)

Na dnu forme ćete primetiti prekidač **Copy Site** (Kopiraj sajt). Ovo vam omogućava da kreirate novi šablon sajta na osnovu postojećeg, koristeći ga kao početnu tačku kako biste uštedeli vreme umesto da kreirate šablon od nule.

![Modal za dodavanje šablona sa prekidačem kopiranja sajta](/img/config/site-templates-list.png)

### Prilagođavanje sadržaja Šablona Sajta {#customizing-the-contents-of-a-site-template}

Da biste prilagodili svoj šablon sajta, jednostavno idite na njegov dashboard panel i napravite potrebne promene. Možete kreirati nove objave (posts), stranice (pages), aktivirati pluginove i promeniti aktivan temu (theme). Možete čak otići u Customizer i promeniti sve vrste opcija prilagođavanja.

![Interfejs uređivanja šablona sajta](/img/config/site-template-edit.png)

Sve te podatke će biti kopirana kada klijent kreira novi sajt na osnovu tog Šablona Sajta.

### Napredne opcije {#advanced-options}

Ako znate kako da radite malo prilagođeno kodiranje, možete koristiti naš Search and Replace API (Pretraži i zameni) da biste automatski zamenili informacije na novom sajtu nakon njegove kreiranja. Ovo je korisno za stvari poput zamene nazivima kompanija na stranici "O nama" (About page), zamene e-mail adrese kontakta na stranici kontakata, itd.

### Korišćenje Šablona Sajta {#using-site-templates}

Dobro, kreirali ste niz različitih Šablona Sajta sa različitim dizajnom, temama i podešavanjima. Kako ih sada učiniti korisnim u vašoj mreži?

U osnovi, sada možete koristiti dva pristupa (ne istovremeno):

  * Priložiti jedan Šablon Sajta svakom od vaših Planova

**ILI**

  * Omogućiti klijentima da sami izaberu šablone sajta tokom prijave.

#### Režim 1: Dodela Šablona Sajta {#mode-1-assign-site-template}

U ovom modu, klijenti neće moći da biraju šablon prilikom kreiranja naloga, već vi ćete definisati koji šablon treba koristiti za svaki od vaših Planova.

Da biste to uradili, uđite u **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Ovo će vas dovesti na stranicu **Edit Product**. U sekciji **Product Options**, pronađite karticu **Site template** i iz padajućeg menija odaberite opciju **Assign Site Template**. To će otvoriti list dostupnih šablona sajtova i omogućiti vam da izaberete samo jedan šablon sajta koji je posvećen proizvodu.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mod 2: Izaberite dostupni šablon sajta {#mode-2-choose-available-site-template}

U ovom modu, dajete klijentima izbor tokom procesa prijave. Oni će moći da izaberu između različitih šablona sajtova koje definišete pod podešavanjima proizvoda. Imate opciju da ograničite šablone sajtova koje mogu da odaberu pod odabirom proizvoda. Ovo vam omogućava da imate različite skupove šablona sajta za svaki proizvod, što je idealno da istaknete različite funkcije i karakteristike za veći cenovni proizvod.

Na stranici **Uređivanje proizvoda**. U sekciji **Opcije proizvoda**, pronađite karticu **Site template** i iz padajućeg menija odaberite opciju **Choose Available Site Template**. Ovo će prikazati list dostupnih šablona sajtova i omogućiti vam da izaberete koji želite da bude dostupan. Možete to uraditi biranjem njegovog ponašanja: **Available** (Dostupno) ako želite da se šablon sajta uključi u listu, **Not Available** (Nije dostupno) ako ne želite da se šablon sajta pojavi kao opcija, i **Pre-selected** (Predodabran) ako želite da jedan od navedenih šablona sajtova bude podrazumevani izbor.

![Izaberite dostupne šablone sajtova sa opcijama ponašanja](/img/config/product-site-templates.png)

### Podrazumevani način: Izbor šablona sajta na obrascu za plaćanje (Checkout form) {#default-mode-site-template-selection-on-the-checkout-form}

Ako želite da su vam svi vaši šabloni sajtova dostupni tokom registracije, ili možda ne želite dodatni posao dodeljivanja ili specifikovanja šablona sajtova pod svakim proizvodom koji kreirate. Tada možete jednostavno postaviti izbor šablona sajta ispod vašeg **Checkout Form** (Obrasca za plaćanje). Da biste to uradili, idite na **Ultimate Multisite > Checkout Forms** i kliknite **Edit** ispod obrasca koji želite da konfigurišete.

Ovo će otvoriti stranicu **Edit Checkout Form**. Pronađite polje **Template Selection** (Izbor šablona) i kliknite **Edit** ispod njega.

Pojaviće se prozor za dijalog (modal window). Pod poljem **Template Sites** možete izabrati i navesti sve šablone sajtova koje želite da budu dostupni tokom registracije. Šabloni sajtova koje specifikujete ovde će biti dostupni bez obzira koji proizvod je korisnik odabrao.

![Polje za izbor šablona u editoru obrasca za plaćanje](/img/config/checkout-form-template-step.png)

Na frontend-u, kupci vide izaber sajtova tokom plaćanja i mogu da odaberu početni dizajn za svoj novi sajt.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Opcije šablona sajta {#site-template-options}

Postoje i druge funkcije šablona sajtova koje možete uključiti ili isključiti u podešavanjima Ultimate Multisite.

![Opcije šablona sajta u podešavanjima Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Omogućavanje menjanja šablona (Allow Template Switching) {#allow-template-switching}

Omogućavanjem ove opcije, vaši klijenti će moći da menjaju šablon koji biraju tokom procesa prijave nakon što je nalog i sajt kreirani. Ovo je korisno iz perspektive klijenta jer im omogućava ponovo izbor šablona ako kasnije shvate da je njihov prvobitni izbor nije bio najbolji za njihove specifične potrebe.

#### Omogućavanje korisnicima da koriste svoj sajt kao šablon (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Pošto korisnici pod-sajta troše vreme na izgradnju i dizajn svog sajta, možda žele da ga kloniraju i koriste kao jedan od dostupnih šablona sajta kada kreiraju novi pod-sajt u vašoj mreži. Ova opcija im će omogućiti da to postignu.

#### Kopiranje medija pri dupliranju šablona (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Provera ove opcije će kopirati medije učitane na šablon sajt u 새로 kreirani sajt. Ovo se može prebaciti (override) na svakom planu.

#### **Sprečavanje indeksiranja šablona sajtova od strane pretraživača (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Šabloni sajtova, kao što je diskutovano u ovom članku, su osnovni (boilerplate), ali i dalje čine deo vaše mreže, što znači da su dostupni pretraživačima za pronalaženje. Ova opcija će vam omogućiti da sakrijete šablone sajtova tako da pretraživači mogu da ih indeksiraju.

## Predpunjenje šablona sajtova automatskim pretraživanjem i zamenom (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Jedna od najmoćnijih karakteristika Ultimate Multisite je mogućnost dodavanja bilo kog teksta, boja i polja na formular za registraciju. Kada to podatke uhvatimo, možemo ih koristiti da unapred popunimo sadržaj u određenim delovima izabranog šablona sajta. Zatim, kada se novi sajt objavljuje, Ultimate Multisite će zameniti mesta (placeholder-e) stvarnim informacijama koje su unete tokom registracije.

Na primer, ako želite da dobijete ime kompanije vašeg krajnjeg korisnika tokom registracije i automatski postavite ime kompanije na početnu stranicu. Na početnoj stranici svog šablona sajta morate dodati mesta (placeholder-e), kao što je prikazano na slici ispod (mesta treba da budu okružena dvostrukim vitičastim zagradama - {{ime_mesta}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Zatim, možete jednostavno dodati odgovarajuće polje za registraciju na vašu formular za plaćanje kako biste taj podaci uhvatili. I isti editor formulara za plaćanje koji se koristi za odabir šablona omogućava vam da postavite prilagođena polja pored bira šablona:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Vaš kupac će tada moći da popuni to polje tokom registracije.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite će zatim automatski zameniti mesta podacima koje je klijent unio.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Rešavanje problema "šablon pun mesta" {#solving-the-template-full-of-placeholders-problem}

Sve to je super, ali naiđemo na neugodan problem: sada su na našim šablonima sajtova - koje mogu da poseti kupci - puna jezive mesta koja ne daju mnogo informacija.

Da biste ovo rešili, nudimo opciju podešavanja lažnih vrednosti za placeholder-e (mesta), a mi koristimo te vrednosti za pretraživanje i zamenu njihovog sadržaja na tematskim sajtovima dok kupci posjećuju.

Možete pristupiti editoru placeholder-a tako što ćete otići na **Ultimate Multisite > Settings > Sites**, a zatim, u bočnoj traci (sidebar), kliknuti na link **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

To će vas dovesti do editora sadržaja placeholder-a, gde možete dodati placeholder-e i njihov odgovarajući sadržaj.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
