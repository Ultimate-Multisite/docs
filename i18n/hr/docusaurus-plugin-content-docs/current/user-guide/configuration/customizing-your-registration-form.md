---
title: Prilagođavanje vašeg formulara za registraciju
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Prilagodba vašeg formulara za registraciju

Da biste učinili svoju mrežu jedinstvenom od svih drugih SaaS-ova napravljenih na platformi WordPress, Ultimate Multisite vam omogućuje prilagođavanje stranica za prijavu i prijavu putem naše značajke **Checkout Forms**.

Iako su to jednostavan i fleksibilan način da eksperimentirate s različitim pristupima kada pokušavate privući nove klijente, uglavnom se koriste za kreiranje personaliziranih formulara za registraciju. Ovaj članak ima za cilj pokazati vam kako to možete učiniti.

## Stranice za prijavu i registraciju:

Prije instalacije Ultimate Multisite, automatski se na vašoj glavnoj stranici kreiraju prilagođene stranice za prijavu i registraciju. Možete ih promijeniti bilo kada idąc pod svoju stranicu **Ultimate Multisite > Settings > Login & Registration**.

![Stranica postavki prijave i registracije](/img/config/settings-general.png)

Evo punog pregleda stranice za postavke prijave i registracije:

![Puni prikaz stranice za postavke prijave i registracije](/img/config/settings-login-registration-full.png)

Pogledajmo svaku opciju koju možete prilagoditi na stranici **Login & Registration**:

  * **Omogućite registraciju (Enable registration):** Ova opcija omogućuje ili onemogućuje registraciju na vašoj mreži. Ako je isključena, vaši klijenti neće moći se registrirati i pretplatiti vaše proizvode.

  * **Omogućite provjeru e-maila (Enable email verification):** Ako je ova opcija uključena, klijenti koji se pretplate za besplatni plan ili plaćeni plan s probnim periodom dobivaju e-mail za provjeru i moraju kliknuti na link za provjeru kako bi im se mogli kreirati web stranice.

* **Stranica za registraciju po podrazumevanju (Default registration page):** Ovo je podrazumevana stranica za registraciju. Ova stranica mora biti objavljena na vašem webu i imati formular za registraciju (koji se takođe zove formular za plaćanje - checkout form) – gde će vaši klijenti pretplatiti vaše proizvode. Možete kreirati koliko god želite stranica za registraciju i formulare za plaćanje, ali zapamtite da morate umetnuti shortcode za formular za plaćanje na stranicu za registraciju, inače se neće pojaviti.

* **Koristite prilagođenu stranicu za prijavu (Use custom login page):** Ova opcija vam omogućava da koristite prilagođenu stranicu za prijavu, osim podrazumevanog `wp-login.php` stranice. Ako je ova opcija uključena, možete odabrati koju stranicu koristiti za prijavu na opciji **Podrazumevana stranica za prijavu** (desno ispod).

* **Obrišite originalnu URL prijave (`wp-login.php`) (Obfuscate the original login url):** Ako želite da sakrijete originalni URL prijave, možete uključiti ovu opciju. Ovo je korisno kako biste sprečili napade tipa brute-force. Ako je ova opcija aktivna, Ultimate Multisite će prikazati grešku 404 kada korisnik pokuša pristup originalnoj vezi `wp-login.php`.

* **Nađite sinhronizaciju objavljivanja stranice (Force synchronous site publication):** Nakon što kupac pretplati proizvod na mreži, nova predviđena stranica mora biti pretvorena u stvarnu mrežnu stranicu. Proces objavljivanja se odvija putem Job Queue-a asinhrono. Omogućite ovu opciju da prisilite objavljivanje da se desi u istoj zahtevnoj operaciji kao i registracija.

Sada, hajde da pogledamo druge opcije koje su još uvek relevantne za proces prijave i registracije. One se nalaze ispod **Ostale opcije** na istoj stranici za prijavu i registraciju:

* **Podrazumevana uloga (Default role):** Ovo je uloga koju vaši klijenti će imati na svojoj web stranici nakon procesa registracije.

* **Omogućite Jumper:** Omogućuje brzi pristup Ultimate Multisite ekranima, mrežnim objektima i drugim podržanim odredištem za administratora putem skraćenice Jumper-a. Isključite ga ako preferirate da tu brzu navigacijsku alatku sakrijete s admin sučelja.

* **Dodajte korisnike na glavni sajt:** Omogućivanjem ove opcije, korisnik će biti dodan i na glavni sajt vaše mreže nakon procesa registracije. Ako uključite ovu opciju, odmah ispod će se pojaviti opcija za postavljanje **podrazlogog uloge** tih korisnika na vašem webu.

* **Omogućite više računa:** Omogućuje korisnicima da imaju račune na različitim sajtovima vaše mreže s istim e-mail adresom. Ako je ova opcija isključena, vaši kupci neće moći kreirati račun na drugim web stranicama koje rade u vašoj mreži s istom e-mail adresom.

I to su sve opcije vezane za prijavu i registraciju koje možete prilagoditi! Ne zaboravite spremiti postavke nakon što završite s uređivanjem.

## Korištenje više formulara za registraciju:

Ultimate Multisite 2.0 nudi editor formulara za plaćanje koji vam omogućuje kreiranje koliko god želite formulara, s različitim poljima, proizvodima na ponudi itd.

I stranica za prijavu i stranica za registraciju su ugrađene kratkim kodovima (shortcodes): **[wu_login_form]** na stranici za prijavu i **[wu_checkout]** za stranicu za registraciju. Možete dodatno prilagoditi stranicu za registraciju tako što ćete graditi ili kreirati formular za plaćanje.

Da biste pristupili ovoj značajci, idite u meni **Checkout Forms**, na lijevoj traci.

![Meni Checkout Forms u bočnoj traci](/img/config/checkout-forms-list.png)

Na ovoj stranici možete vidjeti sve formular za plaćanje koje imate.

Ako želite kreirati novi, jednostavno kliknite na **Add Checkout Form** (Dodaj formular za plaćanje) na vrhu stranice.

Možete odabrati jednu od ovih tri opcije kao početnu točku: single step (jedan korak), multi-step (više koraka) ili blank (prazno). Zatim kliknite da **Idete u Editor**.

![Dodavanje formulara za plaćanje s opcijama single step, multi-step ili blank](/img/config/checkout-forms-list.png)

Alternativno, možete uređivati ili duplirati forme koje već imate klikom na opcije ispod njihovog imena. Tamo ćete također pronaći opcije za kopiranje shortcodea forme ili za brisanje forme.

![Akcije pri prelasku mišem preko formulara za plaćanje s edit, duplicate i delete](/img/config/checkout-form-hover-actions.png)

Ako odaberete single step ili multi-step, formular za plaćanje će već biti popunjen osnovnim koracima kako bi funkcionirao. Zatim, ako želite, možete dodati dodatne korake.

### Uređivanje Formulara za Plaćanje:

Kao što smo ranije spomenuli, možete kreirati forme za plaćanje za različite svrhe. U ovom primjeru radit ćemo na registracijskom formularu.

Nakon navigiranja do editora formulara za plaćanje, dajte svom formularu ime (koje će se koristiti isključivo za interni referencijalni dio) i slug (koristi se za kreiranje shortcodeova, na primjer).

![Editor formulara za plaćanje s poljima za ime i slug](/img/config/checkout-form-editor.png)

Forme se sastoje od koraka i polja. Možete dodati novi korak klikom na **Add New Checkout Step** (Dodaj novi korak za plaćanje).

![Gumb Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvom kartici prozora modalnog prozora, popunite sadržaj koraka vašeg formulara. Dajte mu ID, ime i opis. Ovi podaci se uglavnom koriste internima.

![Kartica s sadržajem koraka za plaćanje s poljima za ID, ime i opis](/img/config/checkout-form-step-content.png)

Zatim, postavite vidljivost koraka. Možete birati između **Always show** (Uvijek prikazano), **Only show for logged in users** (Prikaz samo za prijavljene korisnike) ili **Only show for guests** (Prikaz samo za goste).

![Opcije vidljivosti koraka na blagajni](/img/config/checkout-form-step-visibility.png)

Na kraju, konfigurišite stil koraka. Ovo su opcionalni polja.

![Konfiguracija stila koraka na blagajni](/img/config/checkout-form-step-style.png)

Sada je vrijeme da dodate polja u naš prvi korak. Samo kliknite na **Dodaj novo polje** i odaberite tip sekcije koji želite.

![Dupli gumb Dodaj novo polje](/img/config/checkout-form-step-with-fields.png)![Pad za odabir tipa polja](/img/config/checkout-form-field-type-dropdown.png)

Svako polje ima različite parametre koje treba popuniti. Za ovaj prvi korak, odaberemo polje **Username** (Korisničko ime).

![Konfiguracija polja Username](/img/config/checkout-form-username-content.png)![Parametri polja Username](/img/config/checkout-form-username-visibility.png)![Dodatne postavke za polje Username](/img/config/checkout-form-username-style.png)

Možete dodati koliko koraka i polja vam je potrebno. Da biste prikazali svoje proizvode kako bi kupci mogli odabrati jedan, koristite polje **Pricing Table** (Tablica cijena). Ako želite omogućiti svojim klijentima odabir šablona, dodajte polje **Template Selection**. I tako dalje.

_**Napomena:** Ako kreirate proizvod nakon kreiranja blagajne forme, morat ćete ga dodati u sekciju Pricing Table. Ako ga ne dodate, proizvod se neće pojaviti kupcima na stranici za registraciju._

_**Napomena 2:** username (korisničko ime), email, password (lozinka), site title (naslov sajta), site URL (URL sajta), order summary (sažetak narudžbine), payment (plaćanje) i submit button (dugme za slanje) su obavezna polja za kreiranje blagajne forme._

Dok radite na svojoj blagajnoj formi, uvijek možete koristiti gumb **Preview** (Prikaz) kako biste vidjeli kako će kupci vidjeti formu. Također možete mijenjati između prikaza kao postojećeg korisnika i posjetitelja.

Na **Naprednim opcijama** možete podesiti poruku za stranicu "Hvala", dodati fragmente za praćenje konverzija, dodati prilagođeni CSS za vaš formular plaćanja ili ga ograničiti na određene države.

![Napredne opcije s stranicom Hvala, praćenjem konverzija i prilagođenim CSS-om](/img/config/checkout-form-advanced.png)

Možete također ručno omogućiti ili onemogućiti svoj formular plaćanja prebacivanjem ove opcije u desnoj koloni, ili ga trajno obrisati.

![Aktivni prekidač i opcija za brisanje za formular plaćanja](/img/config/checkout-form-active.png)

Ne zaboravite spremiti svoj formular plaćanja!

![Gumb Spremi formular plaćanja](/img/config/checkout-form-save.png)

Da biste dobili shortcode za vaš formular, kliknite na **Generiraj Shortcode** i kopirajte rezultat koji se prikazuje u prozorima modalnog prozora.

![Modal Generiraj Shortcode s shortcodeom za kopiranje](/img/config/checkout-form-editor.png)

_**Napomena:** Morat ćete dodati ovaj shortcode na vašu stranicu za registraciju kako biste ga mogli dodati u nju._

## Predodređivanje proizvoda i predložaka putem URL parametara:

Ako želite kreirati prilagođene tablice cijena za vaše proizvode i unaprijed odabrati na formularu plaćanja proizvod ili predložak koji kupac bira iz vaše tablice cijena ili stranice s predlošcima, možete koristiti URL parametre za to.

### **Za planove:**

Idite na **Ultimate Multisite > Proizvodi > Odaberite plan**. Trebali biste vidjeti gumb **Kliknite za kopiranje linka za dijeljenje** na vrhu stranice. Ovo je link koji možete koristiti za unaprijed odabir ovog specifičnog plana na vašem formularu plaćanja.

![Stranica proizvoda s gumbom linka za dijeljenje](/img/config/products-list.png)

Napomena: ovaj link za dijeljenje je važeći samo za **Plane**. Ne možete koristiti linkove za dijeljenje za pakete ili usluge.

### Za predloške (templates):

Ako želite unaprijed odabrati predloške za web stranice na vašoj obrazovnoj formi, možete koristiti parametar: **?template_id=X** u URL-u vaše registracijske stranice. "X" trebate zamijeniti s **ID brojem predloška za web stranicu**. Da biste dobili taj broj, idite na **Ultimate Multisite > Sites**.

Kliknite na **Manage** (Upravljanje) odmah ispod predloška za web stranicu koji želite koristiti. Vidjet ćete ID broj STRANICE (SITE ID). Koristite samo taj broj za ovaj specifični predložak za web stranicu kako bi bio unaprijed odobren na vašoj obrazovnoj formi. U našem slučaju, URL parametar bi izgledao kao **?template_id=2**.

![Lista stranica s ID-om predloška](/img/config/site-templates-list.png)

Recimo da je naša mreža web stranica [**www.mynetwork.com**](http://www.mynetwork.com) i da je naša registracijska stranica s obrazovnom formom smještena na stranici **/register**. Cijeli URL s unaprijed odobrenim predloškom za web stranicu će izgledati kao [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A ako želite, možete unaprijed odabrati i proizvode te predloške na vašoj obrazovnoj formi. Sve što trebate učiniti je kopirati link za dijeljenje plana i zalijepiti parametar predloška na kraj. Biće to izgledati kao [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
