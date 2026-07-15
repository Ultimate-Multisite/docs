---
title: Predlošci web lokacija
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Predlošci sajtova (v2)

_**NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x. Ako koristite verziju 1.x,**_ **pogledajte ovaj članak** _**.**_

Naš cilj pri kreiranju premium mreže s Ultimate Multisite je automatizirati što više procesa, a istovremeno našim klijentima pružiti fleksibilnost i različite opcije za izbor pri kreiranju njihovih web-stranica. Jedan jednostavan način da se postigne ova ravnoteža jeste korištenje funkcije Ultimate Multisite predložaka sajtova.

## Šta je predložak sajta? {#what-is-a-site-template}

Kao što naziv sugerira, predložak sajta je osnovni sajt koji se može koristiti kao baza pri kreiranju novih sajtova u vašoj mreži.

To znači da možete kreirati osnovni sajt, aktivirati različite plugine, postaviti aktivnu temu i prilagoditi ga na bilo koji način koji želite. Zatim, kada vaš kupac kreira novi account, umjesto da dobije zadani WordPress sajt bez smislenog sadržaja u njemu, dobit će kopiju vašeg osnovnog sajta sa svim prilagodbama i sadržajem koji su već postavljeni.

To zvuči odlično, ali kako da kreiram novi predložak sajta? Jednostavno je koliko može biti.

## Kreiranje i uređivanje novog predloška sajta {#creating-and-editing-a-new-site-template}

Predlošci sajtova su samo normalni sajtovi na vašoj mreži. Da biste kreirali novi predložak, jednostavno možete otići na **Administracija mreže > Ultimate Multisite > Sajtovi > Dodaj sajt.**

**![Dugme za dodavanje sajta na stranici liste sajtova](/img/config/site-templates-list.png)**

Ovo će otvoriti modalni prozor gdje će tražiti **Naslov sajta, Domena/putanja sajta,** i **Tip sajta**. U padajućem polju **Tip sajta** obavezno odaberite **Predložak sajta** *.*

_![Modal za dodavanje predloška sajta s padajućim menijem tipa sajta](/img/config/site-templates-list.png)_

Također možete dodati opis namijenjen kupcima kako biste objasnili šta predložak uključuje:

![Polje opisa predloška sajta na ekranu za uređivanje predloška sajta](/img/config/site-template-edit-description.png)

Na dnu obrasca primijetit ćete prekidač **Kopiraj sajt**. Ovo će vam omogućiti da kreirate novi predložak sajta na osnovu postojećeg predloška sajta kao početne tačke, kako biste uštedjeli vrijeme umjesto da kreirate predložak sajta od nule.

![Modal za dodavanje predloška sajta s prekidačem za kopiranje sajta](/img/config/site-templates-list.png)

### Prilagođavanje sadržaja predloška sajta {#customizing-the-contents-of-a-site-template}

Da biste prilagodili svoj predložak sajta, jednostavno idite na njegov dashboard panel i napravite potrebne promjene. Možete kreirati nove objave, stranice, aktivirati plugine i promijeniti aktivnu temu. Možete čak otići u Prilagodnik i promijeniti sve vrste opcija prilagođavanja.

![Interfejs za uređivanje predloška sajta](/img/config/site-template-edit.png)

Svi ti podaci bit će kopirani kada kupac kreira novi sajt zasnovan na tom predlošku sajta.

### Napredne opcije {#advanced-options}

Ako se snalazite s prilagođenim kodiranjem, možete koristiti naš API za pretragu i zamjenu kako biste automatski zamijenili informacije na novom sajtu nakon njegovog kreiranja. Ovo je korisno za stvari poput zamjene naziva kompanije na stranici O nama, zamjene kontakt emaila na stranici Kontakt itd.

### Korištenje predložaka sajtova {#using-site-templates}

U redu, kreirali ste mnoštvo različitih predložaka sajtova s različitim dizajnima, temama i postavkama. Kako ih sada učiniti korisnim na vašoj mreži?

U osnovi, postoje dva pristupa koja sada možete koristiti (ne istovremeno):

  * Pridruživanje jednog predloška sajta svakom od vaših planova

**ILI**

  * Omogućavanje vašim klijentima da sami odaberu predloške sajtova tokom registracije.

#### Način 1: Dodijeli predložak sajta {#mode-1-assign-site-template}

U ovom načinu, vaši klijenti neće moći odabrati predložak kada kreiraju account, nego ćete vi definirati koji predložak treba koristiti za svaki od vaših planova.

Da biste to uradili, trebate otići na **Ultimate Multisite > Proizvodi > Uredi**.

![Uredi proizvod za dodjelu predloška sajta](/img/config/product-site-templates.png)

Ovo će vas odvesti na stranicu **Uredi proizvod**. U odjeljku **Opcije proizvoda**, pronađite karticu **Predložak sajta** i odaberite opciju **Dodijeli predložak sajta** iz padajućeg polja. Ovo će prikazati listu dostupnih predložaka sajtova i omogućit će vam da odaberete samo jedan predložak sajta namijenjen proizvodu.

![Kartica predloška sajta proizvoda s opcijom dodjele predloška sajta](/img/config/product-site-templates.png)

#### Način 2: Odaberi dostupni predložak sajta {#mode-2-choose-available-site-template}

U ovom načinu, dat ćete svojim klijentima izbor tokom procesa registracije. Moći će odabrati između različitih predložaka sajtova koje definirate u postavkama proizvoda. Imate opciju da ograničite predložak sajta koji mogu odabrati u okviru odabranog proizvoda. Ovo će vam omogućiti da imate različite skupove predložaka sajtova za svaki proizvod, što je idealno za isticanje različitih funkcija i karakteristika za proizvod s višom cijenom.

Na stranici **Uredi proizvod**. U odjeljku **Opcije proizvoda**, pronađite karticu **Predložak sajta** i odaberite opciju **Odaberi dostupni predložak sajta** iz padajućeg polja. Ovo će prikazati listu dostupnih predložaka sajtova i omogućit će vam da odaberete predložak sajta koji želite da bude dostupan. To možete uraditi odabirom njegovog ponašanja: **Dostupno** ako želite da predložak sajta bude uključen na listu. _**Nije dostupno**_ ako ne želite da se predložak sajta prikazuje kao opcija. I **Unaprijed odabrano** ako želite da jedan od navedenih predložaka sajtova bude zadano odabran.

![Odaberi dostupne predloške sajtova s opcijama ponašanja](/img/config/product-site-templates.png)

### Zadani način: Odabir predloška sajta na obrascu za naplatu {#default-mode-site-template-selection-on-the-checkout-form}

Ako želite da svi vaši predlošci sajtova budu dostupni tokom registracije, ili možda ne želite raditi dodatni posao dodjeljivanja ili specificiranja predložaka sajtova za svaki proizvod koji kreirate. Tada jednostavno možete postaviti odabir predloška sajta u svom **Obrascu za naplatu**. Da biste to uradili, idite na **Ultimate Multisite > Obrasci za naplatu** i kliknite **Uredi** ispod obrasca koji želite konfigurirati.

Ovo će prikazati stranicu **Uredi obrazac za naplatu**. Pronađite polje **Odabir predloška** i kliknite **Uredi** ispod njega.

Pojavit će se modalni prozor. Ispod polja **Template Sites** možete odabrati i navesti sve predloške stranica za koje želite da budu dostupni tokom registracije. Predlošci stranica koje ovdje navedete bit će dostupni bez obzira na to koji je proizvod korisnik odabrao.

![Polje za odabir predloška u editoru obrasca za checkout](/img/config/checkout-form-template-step.png)

Na frontendu, kupci vide birač predloška tokom checkouta i mogu odabrati početni dizajn za svoju novu stranicu.

![Frontend birač predloška tokom registracije](/img/config/frontend-template-chooser.png)

### Opcije predloška stranice {#site-template-options}

Postoje i druge funkcije predložaka stranica koje možete uključiti ili isključiti u postavkama Ultimate Multisite.

![Opcije predloška stranice u postavkama Ultimate Multisite](/img/config/settings-sites-templates-section.png)

#### Dozvoli promjenu predloška {#allow-template-switching}

Omogućavanje ove opcije dozvolit će vašim klijentima da promijene predložak koji odaberu tokom procesa registracije nakon što se Account i stranica kreiraju. Ovo je korisno iz perspektive klijenta jer im omogućava da ponovo odaberu predložak ako kasnije utvrde da njihov prvobitni izbor nije bio najbolji za njihove konkretne potrebe.

#### Dozvoli korisnicima da koriste svoju stranicu kao predloške {#allow-users-to-use-their-site-as-templates}

Budući da su korisnici podstranica proveli vrijeme gradeći i dizajnirajući vlastitu stranicu, možda će je željeti klonirati i koristiti kao jedan od predložaka stranica dostupnih pri kreiranju druge podstranice na vašoj mreži. Ova opcija će im to omogućiti.

#### Kopiraj medije pri dupliciranju predloška {#copy-media-on-template-duplication}

Označavanje ove opcije kopirat će medije otpremljene na stranicu predloška na novokreiranu stranicu. Ovo se može nadjačati na svakom od planova.

#### **Spriječi pretraživače da indeksiraju predloške stranica** {#prevent-search-engines-from-indexing-site-templates}

Predlošci stranica, kako je objašnjeno u ovom članku, jesu osnova, ali su i dalje dio vaše mreže, što znači da su i dalje dostupni pretraživačima za pronalaženje. Ova opcija će vam omogućiti da sakrijete predloške stranica tako da ih pretraživači mogu indeksirati.

## Unaprijed popunjavanje predložaka stranica automatskim pretraživanjem i zamjenom {#pre-populating-site-templates-with-auto-search-and-replace}

Jedna od najmoćnijih funkcija Ultimate Multisite je mogućnost dodavanja proizvoljnog teksta, boje i polja za odabir u obrazac za registraciju. Kada te podatke prikupimo, možemo ih koristiti za unaprijed popunjavanje sadržaja u određenim dijelovima odabranog predloška stranice. Zatim, kada se nova stranica objavljuje, Ultimate Multisite će zamijeniti rezervisana mjesta stvarnim informacijama unesenim tokom registracije.

Na primjer, ako želite dobiti naziv kompanije krajnjeg korisnika tokom registracije i automatski staviti naziv kompanije na početnu stranicu. Na početnoj stranici vašeg predloška stranice trebate dodati rezervisana mjesta, kao na slici ispod (rezervisana mjesta treba dodati okružena dvostrukim vitičastim zagradama - {{placeholder_name}}).

![Početna stranica s tekstom rezervisanog mjesta u vitičastim zagradama](/img/config/site-templates-list.png)

Zatim možete jednostavno dodati odgovarajuće polje za registraciju na svoj checkout obrazac kako biste prikupili te podatke. Isti editor checkout obrasca korišten za odabir predloška omogućava vam da postavite prilagođena polja pored birača predloška:

![Odabir predloška i polja za registraciju u editoru checkout obrasca](/img/config/checkout-form-template-step.png)

Vaš kupac će zatim moći popuniti to polje tokom registracije.

![Frontend checkout obrazac s biračem predloška](/img/config/frontend-template-chooser.png)

Ultimate Multisite će zatim automatski zamijeniti rezervisana mjesta podacima koje je kupac naveo.

![Rezervisana mjesta zamijenjena podacima kupca na stranici](/img/config/site-templates-list.png)

### Rješavanje problema "predloška punog rezervisanih mjesta" {#solving-the-template-full-of-placeholders-problem}

Sve je to odlično, ali nailazimo na ružan problem: sada su naši predlošci stranica - koje naši kupci mogu posjetiti - puni ružnih rezervisanih mjesta koja ne govore mnogo.

Da bismo to riješili, nudimo opciju postavljanja lažnih vrijednosti za rezervisana mjesta, a te vrijednosti koristimo za pretraživanje i zamjenu njihovog sadržaja na stranicama predložaka dok ih vaši kupci posjećuju.

Pristup editoru rezervisanih mjesta predložaka možete dobiti odlaskom na **Ultimate Multisite > Settings > Sites**, a zatim, na bočnoj traci, klikom na link **Edit Placeholders**.

![Postavke predloška stranice na stranici postavki Sites](/img/config/settings-sites-templates-section.png)

To će vas odvesti do editora sadržaja rezervisanih mjesta, gdje možete dodati rezervisana mjesta i njihov odgovarajući sadržaj.

![Ulazna tačka editora sadržaja rezervisanih mjesta predloška](/img/config/settings-sites-templates-section.png)
