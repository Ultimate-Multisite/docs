---
title: Prilagođavanje vašeg formulara za registraciju
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Prilagođavanje Vašeg Registracijskog Formulara

Da biste učinili svoju mrežu jedinstvenom od svih drugih SaaS-ova napravljenih na platformi WordPress, Ultimate Multisite vam omogućava da prilagodite svoje stranice za prijavu i prijavu pomoću naše značajke **Checkout Forms**.

Iako su to jednostavan i fleksibilan način za eksperimentisanje sa različitim pristupima kada pokušavate da privučete nove klijente, uglavnom se koriste za kreiranje personalizovanih formulara za registraciju. Ovaj članak ima za cilj da vam pokaže kako to možete uraditi.

## Stranice za prijavu i registraciju:

Nakon instalacije Ultimate Multisite, automatski se kreiraju prilagođene stranice za prijavu i registraciju na vašoj glavnoj lokaciji. Možete promeniti ove podrazumevne stranice u bilo kom trenutku idąc na stranicu **Ultimate Multisite > Settings > Login & Registration**.

![Stranica podešavanja prijave i registracije](/img/config/settings-general.png)

Evo kompletnog pregleda stranice podešavanja za prijavu i registraciju:

![Kompletna stranica podešavanja prijave i registracije](/img/config/settings-login-registration-full.png)

Hajde da pogledamo svaku opciju koju možete prilagoditi na stranici **Login & Registration**:

  * **Enable registration (Omogućite registraciju):** Ova opcija omogućava ili onemogućava registraciju na vašoj mreži. Ako je isključena, vaši klijenti neće moći da se registruju i pretplate na vaše proizvode.

  * **Enable email verification (Omogućite verifikaciju putem e-maila):** Ako ova opcija uključujete, klijenti koji se pretplate za besplanarni plan ili plaćeni plan sa probnim periodom će dobiti e-mail za verifikaciju i moraju kliknuti na link za verifikaciju kako bi im se kreirali sajtovi.

* **Stranica za registraciju po podrazumevanju (Default registration page):** Ovo je podrazumevana stranica za registraciju. Ova stranica mora biti objavljena na vašem veb-sajtu i imati formular za registraciju (koji se takođe zove formular za prodatu robu) – gde će vaši klijenti pretplatiti vaše proizvode. Možete kreirati koliko god želite stranica za registraciju i forme za prodatu robu, ali zapamtite da morate umetnuti shortcode za formu za prodatu robu na stranicu za registraciju, inače se ona neće pojaviti.

* **Koristite prilagođenu stranicu za prijavu (Use custom login page):** Ova opcija vam omogućava da koristite prilagođenu stranicu za prijavu, osim podrazumevanog `wp-login.php` stranice. Ako je ova opcija uključena, možete izabrati koju stranicu koristiti za prijavu u opciji **Podrazumevana stranica za prijavu** (desno ispod).

* **Obrišite originalnu URL za prijavu (`wp-login.php`) (Obfuscate the original login url):** Ako želite da sakrijete originalnu URL za prijavu, možete uključiti ovu opciju. Ovo je korisno da biste sprečili napade tipa brute-force. Ako je ova opcija aktivna, Ultimate Multisite će prikazati grešku 404 kada korisnik pokuša da pristupi originalnoj vezi `wp-login.php`.

* **Naterajte sinhronu objavu sajta (Force synchronous site publication):** Nakon što kupac pretplati proizvod na mreži, nova predviđena stranica mora biti pretvorena u stvarnu mrežnu stranicu. Proces objavljivanja se dešava putem Job Queue-a asinhrono. Omogućite ovu opciju da naterate objavu da se desi u istoj zahtevnoj sekvenci kao i registracija.

Sada, hajde da vidimo druge opcije koje su još uvek relevantne za proces prijave i registracije. One se nalaze ispod **Ostale opcije** na istoj stranici za prijavu i registraciju:

* **Podrazumevana uloga (Default role):** Ovo je uloga koju vaši klijenti će imati na svom sajtu nakon procesa registracije.

* **Omogućite Jumper:** Omogućava brzi prelazak na Ultimate Multisite ekrane, mrežne objekte i druge podržane destinacije u admin delu. Korisnik ga može koristiti da brzo preskoči kroz svaki meni bez pregledavanja svih opcija. Isključite ga ako preferirate da tu brzu navigacionu alatku sakrijete iz admin interfejsa.

* **Dodajte korisnike i na glavni sajt:** Omogućavanjem ove opcije, korisnik će biti dodan i na glavni sajt vaše mreže nakon procesa prijave. Ako uključite ovu opciju, odmah ispod će se pojaviti opcija za podešavanje **podrazumevanog uloge** ovih korisnika na vašem sajtu.

* **Omogućite više naloga:** Omogućava korisnicima da imaju naloge na različitim sajtovima vaše mreže sa istim email adresom. Ako je ova opcija isključena, vaši kupci neće moći da kreiraju nalog na drugim sajtovima koji rade u vašoj mreži sa istom email adresom.

I to su sve opcije vezane za prijavu i registraciju koje možete prilagoditi! Ne zaboravite da sačuvate postavke nakon što završite uređivanje.

## Korišćenje više formulara za registraciju:

Ultimate Multisite 2.0 nudi editor formulara za plaćanje koji vam omogućava da kreirate koliko god želite formulara, sa različitim poljima, proizvodima na ponudi i tako dalje.

I stranica za prijavu i stranica za registraciju su ugrađene kratkim kodovima (shortcodes): **[wu_login_form]** na stranici za prijavu i **[wu_checkout]** za stranicu za registraciju. Možete dodatno prilagoditi stranicu za registraciju tako što ćete graditi ili kreirati formulara za plaćanje.

Da biste pristupili ovoj funkciji, idite u meni **Checkout Forms**, na levom meniju.

![Meni Checkout Forms u bočnoj traci](/img/config/checkout-forms-list.png)

Na ovoj stranici možete videti sve svoje formulara za plaćanje.

Ako želite da kreirate novi, jednostavno kliknite na **Add Checkout Form** na vrhu stranice.

Možete izabrati jednu od ovih tri opcije kao početnu tačku: single step (jedan korak), multi-step (više koraka) ili blank (prazno). Zatim kliknite da **Idete u Editor**.

![Dodavanje forme za plaćanje sa opcijama single step, multi-step ili blank](/img/config/checkout-forms-list.png)

Alternativno, možete uređivati ili duplirati forme koje već imate tako što ćete kliknuti na opcije ispod njihovog imena. Tamo ćete takođe pronaći opcije za kopiranje shortcode-a forme ili za brisanje forme.

![Akcije pri prelasku mišem preko forme za plaćanje sa edit, duplicate i delete](/img/config/checkout-form-hover-actions.png)

Ako izaberete single step ili multi-step, forma za plaćanje će već biti predpopunjena osnovnim koracima kako bi počela da radi. Zatim, ako želite, možete dodati dodatne korake.

### Uređivanje forme za plaćanje:

Kao što smo ranije spomenuli, možete kreirati forme za plaćanje za različite svrhe. U ovom primeru ćemo raditi na registracionoj formi.

Nakon što navigirate do editora forme za plaćanje, dajte vašoj formi ime (koje se koristi isključivo za interni referentni broj) i slug (koristi se za kreiranje shortcode-ova, na primer).

![Editor forme za plaćanje sa poljima za ime i slug](/img/config/checkout-form-editor.png)

Forme se sastavljaju od koraka i polja. Možete dodati novi korak klikom na **Add New Checkout Step** (Dodaj novi korak za plaćanje).

![Dugme Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvom tabu prozora modalnog okvira, popunite sadržaj vašeg koraka forme. Dajte mu ID, ime i opis. Ovi elementi se uglavnom koriste interni.

![Tab sa sadržajem koraka za plaćanje sa poljima za ID, ime i opis](/img/config/checkout-form-step-content.png)

Sledeći korak je podešavanje vidljivosti koraka. Možete da izaberete između **Always show** (Uvek prikazati), **Only show for logged in users** (Prikaz samo za prijavljene korisnike) ili **Only show for guests** (Prikaz samo za goste).

![Opcije vidljivosti koraka na blagajni](/img/config/checkout-form-step-visibility.png)

Након што сте конфигуришели стил корака, сада је време да додате поља у наш први корак. Само кликните на **Додај нови поDjељ** и изберете тип секције који желите.

![Дугме Додај нови поDjељ](/img/config/checkout-form-step-with-fields.png)![Изберивање типа поља дроп дамп](/img/config/checkout-form-field-type-dropdown.png)

Свако поље има различите параметре које треба пополнити. За ово прво улаз, изабраћемо поље **Username** (Корисничко име).

![Конфигурација поља Username](/img/config/checkout-form-username-content.png)![Параметри поља Username](/img/config/checkout-form-username-visibility.png)![Додатне подешавања поља Username](/img/config/checkout-form-username-style.png)

Можете да додате колико корака и поља вам је потребно. За приказивање ваших производа како би могли клијенти да изберу један, користите поље **Pricing Table** (Табела цена). Ако желите да дозволите клијентима да изберу шаблон, додајте поље **Template Selection** (Избор шаблона). И тако и даље.

_**Напомена:** Ако креирате производ након што креирате форму за плаћање, мораћете да га додате у секцију Табела цена. Ако га не додате, производ ће клијентима не бити привид на страници регистрације._

_**Напомена 2:** Поља username (корисничко име), email (е-пошта), password (лозинка), site title (назив сајта), site URL (адреса сајта), order summary (резюме поруџбине), payment (плаћање) и submit button (дугме за подношење) су обавезни поља за креирање форме за плаћање._

Док радите на својој форми за плаћање, можете у билоко тренуте користити дугме **Preview** (Прегледи) да видите како ће клијенти да виде форму. Можете и мењати између вида као постојеćeg корисника или посетиоца.

Na **Naprednim opcijama (Advanced Options)** možete podesiti poruku za stranicu **Hvala**, dodati fragmente za praćenje konverzija, dodati prilagođeni CSS za vaš formular plaćanja ili ga ograničiti na određene zemlje.

![Napredne opcije sa stranicom Hvala, praćenjem konverzija i prilagođenim CSS-om](/img/config/checkout-form-advanced.png)

Takođe možete ručno omogućiti ili onemogućiti svoj formular plaćanja tako što ćete uključiti ovu opciju u desnoj koloni, ili ga trajno obrisati.

![Aktivni prekidač i opcija za brisanje za formular plaćanja](/img/config/checkout-form-active.png)

Ne zaboravite da sačuvate svoj formular plaćanja!

![Dugme Sačuvaj formular plaćanja](/img/config/checkout-form-save.png)

Da biste dobili shortcode za vaš formular, kliknite na **Generisanje Shortcode-a (Generate Shortcode)** i kopirajte rezultat koji se prikazuje u prozorima modalnog prozora.

![Modal za generisanje shortcode-a sa shortcode-om za kopiranje](/img/config/checkout-form-editor.png)

_**Napomena:** Morate dodati ovaj shortcode na vašu stranicu za registraciju kako biste ga mogli da dodate u nju._

## Predodređivanje proizvoda i šablona putem URL parametara:

Ako želite da kreirate prilagođene tabele cena za vaše proizvode i unapred odaberete na formularu plaćanja proizvod ili šablon koji kupac bira iz vaše tabele cena ili stranice sa šablonima, možete koristiti URL parametre za to.

### **Za planove (plans):**

Idite na **Ultimate Multisite > Proizvodi (Products) > Izaberite plan (Select a plan)**. Trebalo bi da vidite dugme **Kliknite za kopiranje linka za deljenje (Click to copy Shareable Link)** na vrhu stranice. Ovo je link koji možete koristiti da unapred odaberete ovaj specifičan plan na svom formularu plaćanja.

![Stranica proizvoda sa dugmetom linka za deljenje](/img/config/products-list.png)

Napomena: ovaj link za deljenje važi samo za **Plane**. Ne možete koristiti linkove za deljenje za pakete ili usluge.

### Za šablone (templates):

Ako želite unapred odabrati predloške za sajt na vašoj formularu za plaćanje, možete koristiti parametar: **?template_id=X** u URL-u vaše registracione stranice. "X" treba zameniti sa **ID brojem šablona sajta**. Da biste dobili taj broj, idite na **Ultimate Multisite > Sites**.

Kliknite na **Manage** (Upravljanje) odmah ispod šablona sajta koji želite da koristite. Doći ćete do SITE ID broja. Koristite samo ovaj broj za taj specifičan šablon sajta kako bi bio unapred odobren u vašoj formularu za plaćanje. U našem slučaju, URL parametar bi izgledao kao **?template_id=2**.

![Lista sajtova koja prikazuje ID šablona sajta](/img/config/site-templates-list.png)

Recimo da je naša mreža veb stranica [**www.mynetwork.com**](http://www.mynetwork.com) i naša registracionska stranica sa formularom za plaćanje se nalazi na `/register` stranici. Celokupan URL sa unapred odobrenim šablonom sajta će izgledati kao [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

I ako želite, možete unapred odabrati i proizvode i šablone u vašoj formularu za plaćanje. Sve što treba da uradite je da kopirate link za deljenje plana i zalepite parametar šablona na kraj. Biće to kao [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
