---
title: Prilagođavanje vašeg obrasca za registraciju
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Prilagođavanje vaše registracijske forme {#customizing-your-registration-form}

Da bi vaša mreža izgledala jedinstveno u odnosu na sve druge SaaS-ove izgrađene na WordPress platformi, Ultimate Multisite vam omogućava da prilagodite svoje stranice za registraciju i prijavu pomoću naše funkcije **Checkout Forms**.

Iako su one jednostavan i fleksibilan način za eksperimentisanje s različitim pristupima pri pokušaju pretvaranja novih kupaca, uglavnom se koriste za kreiranje personalizovanih registracijskih formi. Cilj ovog članka je da vam pokaže kako to možete uraditi.

## Stranice za prijavu i registraciju: {#login-and-registration-pages}

Nakon instalacije Ultimate Multisite, automatski kreira prilagođene stranice za prijavu i registraciju na vašoj glavnoj stranici. Ove zadane stranice možete promijeniti u bilo kojem trenutku tako što ćete otići na stranicu **Ultimate Multisite > Settings > Login & Registration**.

![Stranica postavki za prijavu i registraciju](/img/config/settings-general.png)

Evo potpunog prikaza stranice postavki za prijavu i registraciju:

![Potpuna stranica postavki za prijavu i registraciju](/img/config/settings-login-registration-full.png)

Pogledajmo svaku od opcija koje možete prilagoditi na stranici **Login & Registration**:

  * **Omogući registraciju:** Ova opcija će omogućiti ili onemogućiti registraciju na vašoj mreži. Ako je isključena, vaši kupci se neće moći registrovati i pretplatiti na vaše proizvode.

  * **Omogući verifikaciju e-pošte:** Ako je ova opcija uključena, kupci koji se pretplate na besplatan plan ili plaćeni plan s probnim periodom primit će verifikacijski email i morat će kliknuti na verifikacijski link da bi njihove web stranice bile kreirane.

  * **Zadana stranica za registraciju:** Ovo je zadana stranica za registraciju. Ova stranica mora biti objavljena na vašoj web stranici i imati registracijsku formu (poznatu i kao checkout forma) - gdje će se vaši klijenti pretplatiti na vaše proizvode. Možete kreirati koliko god registracijskih stranica i checkout formi želite, samo ne zaboravite staviti shortcode checkout forme na registracijsku stranicu, inače se neće prikazati.

  * **Koristi prilagođenu stranicu za prijavu:** Ova opcija vam omogućava da koristite prilagođenu stranicu za prijavu, umjesto zadane wp-login.php stranice. Ako je ova opcija uključena, možete odabrati koja će se stranica koristiti za prijavu u opciji **Zadana stranica za prijavu** (odmah ispod).

  * **Zamaskiraj originalni URL za prijavu (wp-login.php)** : Ako želite sakriti originalni URL za prijavu, možete uključiti ovu opciju. Ovo je korisno za sprečavanje brute-force napada. Ako je ova opcija omogućena, Ultimate Multisite će prikazati grešku 404 kada korisnik pokuša pristupiti originalnom wp-login.php linku

  * **Forsiraj sinhrono objavljivanje stranice:** Nakon što se kupac pretplati na proizvod na mreži, nova stranica na čekanju mora se pretvoriti u stvarnu mrežnu stranicu. Proces objavljivanja odvija se putem Job Queue, asinhrono. Omogućite ovu opciju da forsirate objavljivanje u istom zahtjevu kao i prijava.

Sada pogledajmo druge opcije koje su i dalje relevantne za proces prijave i registracije. Nalaze se odmah ispod **Druge opcije** na istoj stranici Login & registration:

  * **Zadana uloga:** Ovo je uloga koju će vaši kupci imati na svojoj web stranici nakon procesa prijave.

  * **Omogući Jumper:** Omogućava Jumper prečicu u administratorskom području. Jumper omogućava administratorima da brzo pređu na Ultimate Multisite ekrane, mrežne objekte i druga podržana odredišta bez pregledanja svakog menija. Isključite ga ako želite sakriti taj alat za brzu navigaciju iz administratorskog interfejsa.

  * **Dodaj korisnike i na glavnu stranicu:** Omogućavanje ove opcije također će dodati korisnika na glavnu stranicu vaše mreže nakon procesa prijave. Ako omogućite ovu opciju, opcija za postavljanje **zadane uloge** ovih korisnika na vašoj web stranici također će se pojaviti odmah ispod.

  * **Omogući više Accounta:** Dozvolite korisnicima da imaju Accounte na različitim stranicama vaše mreže s istom email adresom. Ako je ova opcija isključena, vaši kupci neće moći kreirati Account na drugim web stranicama koje rade na vašoj mreži s istom email adresom.

I to su sve opcije povezane s prijavom i registracijom koje možete prilagoditi! Ne zaboravite sačuvati svoje postavke nakon što završite s njihovim uređivanjem.

## Korištenje više registracijskih formi: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 nudi editor checkout formi koji vam omogućava da kreirate koliko god formi želite, s različitim poljima, proizvodima u ponudi itd.

I stranice za prijavu i registraciju ugrađene su pomoću shortcodeova: **[wu_login_form]** na stranici za prijavu i**[wu_checkout]** za registracijsku stranicu. Registracijsku stranicu možete dodatno prilagoditi izradom ili kreiranjem checkout formi.

Da biste pristupili ovoj funkciji, idite na meni **Checkout Forms**, na lijevoj bočnoj traci.

![Meni Checkout Forms u bočnoj traci](/img/config/checkout-forms-list.png)

Na ovoj stranici možete vidjeti sve checkout forme koje imate.

Ako želite kreirati novu, samo kliknite na **Add Checkout Form** na vrhu stranice.

Možete odabrati jednu od ove tri opcije kao početnu tačku: jedan korak, više koraka ili prazno. Zatim kliknite na **Go to the Editor**.

![Dodavanje Checkout Form s opcijama jedan korak, više koraka ili prazno](/img/config/checkout-forms-list.png)

Alternativno, možete urediti ili duplicirati forme koje već imate klikom na opcije ispod njihovog naziva. Tamo ćete također pronaći opcije za kopiranje shortcodea forme ili brisanje forme.

![Radnje pri prelasku mišem preko checkout forme s uređivanjem, dupliciranjem i brisanjem](/img/config/checkout-form-hover-actions.png)

Ako odaberete jedan korak ili više koraka, checkout forma će već biti unaprijed popunjena osnovnim koracima potrebnim za njen rad. Zatim, ako želite, možete joj dodati dodatne korake.

### Uređivanje Checkout Form: {#editing-a-checkout-form}

Kao što smo ranije spomenuli, možete kreirati checkout forme za različite svrhe. U ovom primjeru radit ćemo na registracijskoj formi.

Nakon što odete u editor checkout formi, dajte svojoj formi naziv (koji će se koristiti samo za internu referencu) i slug (koji se koristi za kreiranje shortcodeova, na primjer).

![Uređivač checkout forme s poljima za naziv i slug](/img/config/checkout-form-name-slug.png)

Forme se sastoje od koraka i polja. Možete dodati novi korak klikom na **Add New Checkout Step**.

![Dugme Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvoj kartici modalnog prozora popunite sadržaj koraka svoje forme. Dodijelite mu ID, naziv i opis. Ove stavke se uglavnom koriste interno.

![Kartica sadržaja checkout koraka s ID-jem, nazivom i opisom](/img/config/checkout-form-step-content.png)

Zatim postavite vidljivost koraka. Možete birati između **Always show** , **Only show for logged in users** ili **Only show for guests**.

![Opcije vidljivosti checkout koraka](/img/config/checkout-form-step-visibility.png)

Na kraju, konfigurirajte stil koraka. Ovo su opcionalna polja.

![Konfiguracija stila checkout koraka](/img/config/checkout-form-step-style.png)

Sada je vrijeme da dodamo polja u naš prvi korak. Samo kliknite na **Add New Field** i odaberite tip odjeljka koji želite.

![Dugme Add New Field](/img/config/checkout-form-add-field-button.png)![Padajući meni za odabir tipa polja](/img/config/checkout-form-field-type-dropdown.png)

Svako polje ima različite parametre koje treba popuniti. Za ovaj prvi unos odabrat ćemo polje **Username**.

![Konfiguracija polja Username](/img/config/checkout-form-username-content.png)![Parametri polja Username](/img/config/checkout-form-username-visibility.png)![Dodatne postavke polja Username](/img/config/checkout-form-username-style.png)

Možete dodati onoliko koraka i polja koliko vam je potrebno. Da prikažete svoje proizvode kako bi vaši korisnici mogli odabrati jedan, koristite polje Pricing Table. Ako želite omogućiti svojim klijentima da odaberu šablon, dodajte polje Template Selection. I tako dalje.

![Uređivač checkout forme s poljem za odabir šablona](/img/config/checkout-form-with-template-field.png)

_**Napomena:** Ako kreirate proizvod nakon što ste kreirali svoju checkout formu, morat ćete dodati proizvod u odjeljak Pricing table. Ako ga ne dodate, proizvod se neće prikazati vašim korisnicima na stranici za registraciju._

_**Napomena 2:** korisničko ime, email, lozinka, naslov sajta, URL sajta, sažetak narudžbe, plaćanje i dugme za slanje su obavezna polja za kreiranje checkout forme._

Dok radite na svojoj checkout formi, uvijek možete koristiti dugme Preview da vidite kako će vaši klijenti vidjeti formu. Također možete prebacivati između prikaza kao postojeći korisnik ili posjetilac.

![Dugme Preview u uređivaču checkout forme](/img/config/checkout-form-preview-button.png)![Pregled checkout forme kao posjetilac ili postojeći korisnik](/img/config/checkout-form-preview-modal.png)

Na kraju, u **Advanced Options** možete konfigurirati poruku za stranicu **Thank You**, dodati isječke za praćenje konverzija, dodati prilagođeni CSS u svoju checkout formu ili je ograničiti na određene zemlje.

![Advanced Options sa stranicom Thank You, praćenjem konverzija i prilagođenim CSS-om](/img/config/checkout-form-advanced.png)

Također možete ručno omogućiti ili onemogućiti svoju checkout formu prebacivanjem ove opcije u desnoj koloni, ili trajno izbrisati formu.

![Prekidač Active i opcija brisanja za checkout formu](/img/config/checkout-form-active.png)

Ne zaboravite sačuvati svoju checkout formu!

![Dugme Save Checkout Form](/img/config/checkout-form-save.png)

Da dobijete shortcode svoje forme, kliknite na **Generate Shortcode** i kopirajte rezultat prikazan u modalnom prozoru.

![Modal Generate Shortcode sa shortcodeom za kopiranje](/img/config/checkout-form-editor.png)

_**Napomena:** Morat ćete dodati ovaj shortcode na svoju stranicu za registraciju kako bi joj ova checkout forma bila dodana._

## Prethodno odabiranje proizvoda i šablona putem URL parametara: {#pre-selecting-products-and-templates-via-url-parameters}

Ako želite kreirati prilagođene tabele cijena za svoje proizvode i prethodno odabrati na checkout formi proizvod ili šablon koji vaš korisnik bira s vaše tabele cijena ili stranice šablona, za to možete koristiti URL parametre.

### **Za planove:** {#for-plans}

Idite na **Ultimate Multisite > Products > Select a plan**. Trebali biste vidjeti dugme **Click to copy Shareable Link** na vrhu stranice. Ovo je link koji možete koristiti za prethodno odabiranje ovog specifičnog plana na svojoj checkout formi.

![Stranica proizvoda s dugmetom za dijeljivi link](/img/config/products-list.png)

Imajte na umu da je ovaj dijeljivi link važeći samo za **Plans**. Ne možete koristiti dijeljive linkove za pakete ili usluge.

### Za šablone: {#for-templates}

Ako želite prethodno odabrati šablone sajta na svojoj checkout formi, možete koristiti parametar: **?template_id=X** u URL-u svoje stranice za registraciju. "X" treba zamijeniti **ID brojem šablona sajta**. Da biste dobili ovaj broj, idite na **Ultimate Multisite > Sites**.

Kliknite na **Manage** odmah ispod šablona sajta koji želite koristiti. Vidjet ćete SITE ID broj. Samo koristite ovaj broj za ovaj specifični šablon sajta kako bi bio prethodno odabran na vašoj checkout formi. U našem slučaju ovdje, URL parametar bi bio **?template_id=2**.

![Lista sajtova koja prikazuje ID šablona sajta](/img/config/site-templates-list.png)

Recimo da je web stranica naše mreže [**www.mynetwork.com**](http://www.mynetwork.com) i da se naša stranica za registraciju s našom checkout formom nalazi na stranici **/register**. Cijeli URL s ovim prethodno odabranim šablonom sajta izgledat će ovako [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A ako želite, možete prethodno odabrati i proizvode i šablone za svoju checkout formu. Sve što trebate uraditi je kopirati dijeljivi link plana i zalijepiti parametar šablona na kraj. Izgledat će ovako [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
