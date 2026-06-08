---
title: Šabloni stranica
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# Site Šabloni (v2)

_**NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x. Ako koristite verziju 1.x,**_ **pogledajte ovaj članak** _**.**_

Naš cilj prilikom kreiranja premium mreže sa Ultimate Multisite-om je automatizovati što više procesa, a istovremeno pružiti našim klijentima fleksibilnost i različite opcije za izbor prilikom kreiranja njihovih web sajtova. Jednostavan način za postizanje ove ravnoteže je korištenje funkcije Site Templates (Site Šabloni) u Ultimate Multisite-u.

## Šta je Site Template?

Kako nam naziv sugerira, Site Template je šablon sajtova (boilerplate site) koji se može koristiti kao baza prilikom kreiranja novih sajtova u vašoj mreži.

To znači da možete kreirati bazni sajt, aktivirati različite pluginove, postaviti aktivnu temu i prilagoditi ga na bilo koji način. Zatim, kada vaš klijent kreira novi nalog, umjesto da dobije standardni WordPress sajt bez smiselnog sadržaja, dobit će kopiju vašeg baznog sajta sa svim prilagođenostima i sadržajem već postavljene.

Zvuči fantastično, ali kako da kreiram novi site template? To je jednostavno koliko je moguće.

## Kreiranje i uređivanje novog Site Template-a

Site Templates su samo normalni sajtovi u vašoj mreži. Da biste kreirali novi šablon, jednostavno idite na **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Ovo će otvoriti modalni prozor koji će tražiti **Naslov sajta (Site title), Domen/putanju sajta (Site Domain/path)** i **Tip sajta (Site type)**. Pod padajućim menijem **Tip sajta** obavezno odaberite **Site Template** *.*

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Takođe možete vidjeti opis site template-a:

![Site template description](/img/config/site-template-description.png)

Na dnu forme, primijetit ćete prekidač **Copy Site** (Kopiraj sajt). Ovo vam omogućava da kreirate novi site template na osnovu već postojećeg site template-a kao početne tačke, što vam štedi vrijeme umjesto da kreirate šablon sa sajta od nule.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Prilagođavanje sadržaja Site Template-a

Da biste prilagodili svoj site template, jednostavno navigirajte do njegovog kontrolnog panela (dashboard) i napravite potrebne promjene. Možete kreirati nove objave, stranice, aktivirati pluginove i promijeniti aktivnu temu. Čak možete otići u Customizer i promijeniti sve vrste opcija prilagođavanja.

![Site template edit interface](/img/config/site-template-edit.png)

Svi ti podaci će biti kopirani kada klijent kreira novi sajt na osnovu tog Site Template-a.

### Napredne opcije

Ako ste upoznati sa nekim custom kodiranjem, možete koristiti naš Search and Replace API da automatski zamijenite informacije na novom sajtu nakon njegovog kreiranja. Ovo je korisno za stvari poput zamjene imena kompanija na stranici "O nama", zamjene kontakt e-mail adrese na stranici "Kontakt", itd.

### Korištenje Site Templates-a

Dobro, kreirali ste gomilu različitih Site Templates-a sa različitim dizajnom, temama i podešavanjima. Kako da ih učinite korisnim na vašoj mreži?

U osnovi, postoje dva pristupa koja možete koristiti (ne istovremeno):

  * Povezivanje jednog Site Template-a sa svakim vašim Planom

**ILI**

  * Omogućavanje vašim klijentima da sami biraju site template tokom registracije.

#### Mod 1: Dodjeljivanje Site Template-a (Assign Site Template)

U ovom modu, vaši klijenti neće moći da biraju šablon prilikom kreiranja naloga, već ćete vi definisati koji šablon treba koristiti za svaki od vaših Planova.

Da biste to uradili, morate otići na **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Ovo će vas odvesti na stranicu **Edit Product**. Pod sekcijom **Product Options**, pronađite karticu **Site template** i iz padajućeg polja odaberite opciju **Assign Site** **Template**. Ovo će prikazati listu dostupnih site templates-a i omogućiti vam da odaberete samo jedan site template posvećen tom proizvodu.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mod 2: Izbor dostupnog Site Template-a (Choose Available Site Template)

U ovom modu, dajete svojim klijentima izbor tokom procesa registracije. Biće u mogućnosti da biraju iz različitih site templates-a koje definišete pod podešavanjima proizvoda. Imate opciju ograničenja site template-a iz kojeg mogu birati pod izabranim proizvodom. Ovo vam omogućava da imate različite skupove site templates-a pod svakim proizvodom, što je idealno za isticanje različitih funkcija i značajki za proizvod višeg ranga.

Na stranici **Edit Product**. Pod sekcijom **Product Options**, pronađite karticu **Site template** i iz padajućeg polja odaberite opciju **Choose Available Site Template**. Ovo će prikazati listu dostupnih site templates-a i omogućiti vam da odaberete site template koji želite da bude dostupan. Možete to učiniti biranjem njegovog ponašanja (Behavior): **Available** ako želite da site template bude uključen u listu. **Not Available** ako ne želite da site template se prikazuje kao opcija. I **Pre-selected** ako želite da jedan od navedenih site templates-a bude podrazumevano odabran.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Podrazumevani Mod: Izbor site template-a na Checkout formi

Ako želite da svi vaši site templates budu dostupni tokom registracije, ili možda ne želite da radite dodatni posao dodjeljivanja ili specifikovanja site templates-a pod svakim kreiranim proizvodom. Tada možete jednostavno postaviti izbor site template-a pod vašom **Checkout Form** (Forma za naplatu). Za to, samo morate otići na **Ultimate Multisite > Checkout Forms**. Zatim kliknite **Edit** pod formom koju želite da konfigurišete.

![Checkout forms list page](/img/config/checkout-forms-list.png)

Ovo će vas odvesti na stranicu **Edit Checkout Form**. Pronađite polje **Template Selection** i kliknite **Edit** ispod njega.

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

Pojaviće se modalni prozor. Pod poljem **Template Sites** možete odabrati i navesti sve site templates-e koji želite da budu dostupni tokom registracije. Site templates koje ovdje navedete bit će dostupne bez obzira na koji je proizvod korisnik odabrao.

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Opcije Site Template-a

Postoje i druge funkcije site templates-a koje možete uključiti ili isključiti pod podešavanjima Ultimate Multisite-a.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Omogućiti prebacivanje šablona (Allow Template Switching)

Uključivanje ove opcije omogućit će vašim klijentima da promijene šablon koji su izabrali tokom procesa registracije nakon što je nalog i sajt kreiran. Ovo je korisno sa strane klijenta jer im omogućava da ponovo odaberu šablon ako kasnije shvate da nije njihov prvobitni izbor najbolji za njihove specifične potrebe.

#### Omogućiti korisnicima da koriste svoj sajt kao šablone (Allow Users to use their Site as templates)

Budući da su korisnici podsajtova uložili vrijeme u izgradnju i dizajn vlastitog sajta, možda žele da ga kloniraju i koriste kao jedan od site templates-a dostupnih prilikom kreiranja drugog podsajta na vašoj mreži. Ova opcija će im to omogućiti.

#### Kopiranje medija prilikom dupliranja šablona (Copy Media on Template Duplication)

Provjeravanjem ove opcije, mediji učitani na šablon sajt će biti kopirani na novokreirani sajt. Ovo se može nadjačati na svakom planu.

#### **Spriječiti pretraživače da indeksiraju Site Templates**

Site templates, kao što je diskutovano u ovom članku, su šabloni, ali i dalje dio vaše mreže, što znači da su i dalje dostupni pretraživačima. Ova opcija vam omogućava da sakrijete site templates tako da ih pretraživači ne mogu indeksirati.

## Popunjavanje Site Templates-a automatskim pretraživanjem i zamjenom

Jedna od najmoćnijih značajki Ultimate Multisite-a je mogućnost dodavanja proizvoljnog teksta, boje i odabranih polja na formu za registraciju. Kada prikupimo te podatke, možemo ih koristiti za popunjavanje sadržaja u određenim dijelovima odabranog site template-a. Zatim, kada se kreira novi sajt, Ultimate Multisite će zamijeniti placeholder-e stvarnim informacijama unesenim tokom registracije.

Na primjer, ako želite da prikupite ime kompanije krajnjeg korisnika tokom registracije i automatski stavite ime kompanije na početnu stranicu. Na početnoj stranici vašeg template sajta morate dodati placeholder-e, kao na slici ispod (placeholderi treba da budu okruženi dvostrukim vitičastim zagradama - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Zatim, možete jednostavno dodati odgovarajuće polje za registraciju na vašu checkout formu da prikupite te podatke:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

Vaš klijent će zatim moći da popuni to polje tokom registracije.

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite će zatim automatski zamijeniti placeholder-e podacima koje je klijent dostavio.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Rješavanje problema "šablon pun placeholder-a"

Sve ovo je odlično, ali naiđemo na ružan problem: naši site templates – koje mogu posjetiti naši klijenti – su puni ružnih placeholder-a koji ne govore ništa.

Da bismo to riješili, nudimo opciju postavljanja lažnih vrijednosti za placeholder-e, i koristimo te vrijednosti za pretraživanje i zamjenu njihovog sadržaja na site templates-ima dok vaši klijenti posjećuju.

Možete pristupiti editoru placeholder-a tako što ćete otići na **Ultimate Multisite > Settings > Sites**, a zatim na bočnom traku kliknuti na link **Edit Placeholders**.

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

To će vas odvesti do editora sadržaja placeholder-a, gdje možete dodati placeholder-e i njihov odgovarajući sadržaj.

![Template placeholders content editor](/img/config/settings-sites.png)
