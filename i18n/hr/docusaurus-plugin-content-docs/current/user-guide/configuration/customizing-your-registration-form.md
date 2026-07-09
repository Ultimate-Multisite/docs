---
title: Prilagodba vašeg obrasca za registraciju
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Prilagodba vašeg obrasca za registraciju {#customizing-your-registration-form}

Kako bi vaša mreža izgledala jedinstveno u odnosu na sve ostale SaaS sustave izgrađene na WordPress platformi, Ultimate Multisite omogućuje vam prilagodbu stranica za registraciju i prijavu pomoću naše značajke **Checkout Forms**.

Iako su jednostavan i fleksibilan način za eksperimentiranje s različitim pristupima pri pokušaju pretvaranja novih korisnika u kupce, uglavnom se koriste za izradu personaliziranih obrazaca za registraciju. Cilj ovog članka je pokazati vam kako to možete učiniti.

## Stranice za prijavu i registraciju: {#login-and-registration-pages}

Nakon instalacije Ultimate Multisite, automatski stvara prilagođene stranice za prijavu i registraciju na vašoj glavnoj web-stranici. Te zadane stranice možete promijeniti u bilo kojem trenutku tako da odete na stranicu **Ultimate Multisite > Settings > Login & Registration**.

![Stranica postavki za prijavu i registraciju](/img/config/settings-general.png)

Evo cjelovitog prikaza stranice postavki za prijavu i registraciju:

![Cijela stranica postavki za prijavu i registraciju](/img/config/settings-login-registration-full.png)

Pogledajmo svaku od opcija koje možete prilagoditi na stranici **Login & Registration**:

  * **Omogući registraciju:** Ova opcija omogućit će ili onemogućiti registraciju na vašoj mreži. Ako je isključena, vaši se kupci neće moći registrirati i pretplatiti na vaše proizvode.

  * **Omogući provjeru e-pošte:** Ako je ova opcija uključena, kupci koji se pretplate na besplatan plan ili plaćeni plan s probnim razdobljem primit će e-poruku za provjeru i morat će kliknuti na poveznicu za provjeru kako bi se njihove web-stranice izradile.

  * **Zadana stranica za registraciju:** Ovo je zadana stranica za registraciju. Ova stranica mora biti objavljena na vašoj web-stranici i imati obrazac za registraciju (poznat i kao checkout form) - gdje će se vaši klijenti pretplatiti na vaše proizvode. Možete izraditi koliko god želite stranica za registraciju i checkout forms, samo ne zaboravite staviti checkout form shortcode na stranicu za registraciju, inače se neće pojaviti.

  * **Koristi prilagođenu stranicu za prijavu:** Ova opcija omogućuje vam korištenje prilagođene stranice za prijavu, umjesto zadane stranice wp-login.php. Ako je ova opcija uključena, možete odabrati koja će se stranica koristiti za prijavu u opciji **Zadana stranica za prijavu** (odmah ispod).

  * **Zamagli izvorni URL za prijavu (wp-login.php)** : Ako želite sakriti izvorni URL za prijavu, možete uključiti ovu opciju. To je korisno za sprječavanje brute-force napada. Ako je ova opcija omogućena, Ultimate Multisite prikazat će pogrešku 404 kada korisnik pokuša pristupiti izvornoj poveznici wp-login.php

  * **Prisili sinkronu objavu web-stranice:** Nakon što se kupac pretplati na proizvod na mreži, nova web-stranica na čekanju mora se pretvoriti u stvarnu mrežnu web-stranicu. Proces objave odvija se putem Job Queue, asinkrono. Omogućite ovu opciju kako biste prisilili da se objava dogodi u istom zahtjevu kao i prijava.

Sada pogledajmo druge opcije koje su još uvijek relevantne za proces prijave i registracije. Nalaze se odmah ispod **Ostale opcije** na istoj stranici Login & registration:

  * **Zadana uloga:** Ovo je uloga koju će vaši kupci imati na svojoj web-stranici nakon procesa prijave.

  * **Omogući Jumper:** Omogućuje prečac Jumper u administracijskom području. Jumper omogućuje administratorima brzo prebacivanje na zaslone Ultimate Multisite, mrežne objekte i druga podržana odredišta bez pregledavanja svakog izbornika. Isključite ga ako želite sakriti taj alat za brzu navigaciju iz administratorskog sučelja.

  * **Dodaj korisnike i na glavnu web-stranicu:** Omogućavanjem ove opcije korisnik će se također dodati na glavnu web-stranicu vaše mreže nakon procesa prijave. Ako omogućite ovu opciju, odmah ispod pojavit će se i opcija za postavljanje **zadane uloge** tih korisnika na vašoj web-stranici.

  * **Omogući više računa:** Dopustite korisnicima da imaju račune na različitim web-stranicama vaše mreže s istom adresom e-pošte. Ako je ova opcija isključena, vaši kupci neće moći izraditi račun na drugim web-stranicama koje rade na vašoj mreži s istom adresom e-pošte.

I to su sve opcije povezane s prijavom i registracijom koje možete prilagoditi! Ne zaboravite spremiti svoje postavke nakon što ih završite uređivati.

## Korištenje više obrazaca za registraciju: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 nudi uređivač checkout form koji vam omogućuje izradu koliko god obrazaca želite, s različitim poljima, proizvodima u ponudi itd.

I stranice za prijavu i stranice za registraciju ugrađene su pomoću shortcodeova: **[wu_login_form]** na stranici za prijavu i**[wu_checkout]** za stranicu za registraciju. Stranicu za registraciju možete dodatno prilagoditi izradom ili stvaranjem checkout forms.

Za pristup ovoj značajci idite na izbornik **Checkout Forms**, na lijevoj bočnoj traci.

![Izbornik Checkout Forms u bočnoj traci](/img/config/checkout-forms-list.png)

Na ovoj stranici možete vidjeti sve checkout forms koje imate.

Ako želite izraditi novi, samo kliknite na **Dodaj Checkout Form** na vrhu stranice.

Možete odabrati jednu od ove tri opcije kao početnu točku: jedan korak, više koraka ili prazno. Zatim kliknite na **Idi u uređivač**.

![Dodavanje Checkout Form s opcijama jedan korak, više koraka ili prazno](/img/config/checkout-forms-list.png)

Alternativno, možete urediti ili duplicirati obrasce koje već imate klikom na opcije ispod njihova naziva. Tamo ćete također pronaći opcije za kopiranje shortcodea obrasca ili za brisanje obrasca.

![Radnje pri prelasku pokazivačem preko checkout form s uređivanjem, dupliciranjem i brisanjem](/img/config/checkout-form-hover-actions.png)

Ako odaberete jedan korak ili više koraka, checkout form već će biti unaprijed popunjen osnovnim koracima potrebnima za rad. Zatim, ako želite, možete mu dodati dodatne korake.

### Uređivanje Checkout Form: {#editing-a-checkout-form}

Kao što smo ranije spomenuli, možete izraditi checkout forms za različite svrhe. U ovom primjeru radit ćemo na obrascu za registraciju.

Nakon navigacije do uređivača checkout form, dodijelite svom obrascu naziv (koji će se koristiti samo za internu referencu) i slug (koji se koristi za izradu shortcodeova, na primjer).

![Uređivač obrasca za checkout s poljima za naziv i slug](/img/config/checkout-form-name-slug.png)

Obrasci se sastoje od koraka i polja. Novi korak možete dodati klikom na **Dodaj novi korak checkouta**.

![Gumb Dodaj novi korak checkouta](/img/config/checkout-form-add-step.png)

Na prvoj kartici modalnog prozora ispunite sadržaj koraka svojeg obrasca. Dodijelite mu ID, naziv i opis. Te se stavke uglavnom koriste interno.

![Kartica sadržaja koraka checkouta s ID-om, nazivom i opisom](/img/config/checkout-form-step-content.png)

Zatim postavite vidljivost koraka. Možete odabrati između **Uvijek prikaži** , **Prikaži samo prijavljenim korisnicima** ili **Prikaži samo gostima**.

![Opcije vidljivosti koraka checkouta](/img/config/checkout-form-step-visibility.png)

Na kraju konfigurirajte stil koraka. Ovo su neobavezna polja.

![Konfiguracija stila koraka checkouta](/img/config/checkout-form-step-style.png)

Sada je vrijeme da dodamo polja u naš prvi korak. Samo kliknite **Dodaj novo polje** i odaberite vrstu odjeljka koju želite.

![Gumb Dodaj novo polje](/img/config/checkout-form-add-field-button.png)![Padajući izbornik za odabir vrste polja](/img/config/checkout-form-field-type-dropdown.png)

Svako polje ima različite parametre koje treba ispuniti. Za ovaj prvi unos odabrat ćemo polje **Korisničko ime**.

![Konfiguracija polja Korisničko ime](/img/config/checkout-form-username-content.png)![Parametri polja Korisničko ime](/img/config/checkout-form-username-visibility.png)![Dodatne postavke polja Korisničko ime](/img/config/checkout-form-username-style.png)

Možete dodati onoliko koraka i polja koliko vam je potrebno. Za prikaz svojih proizvoda kako bi vaši kupci mogli odabrati jedan, upotrijebite polje Tablica cijena. Ako želite omogućiti svojim klijentima odabir predloška, dodajte polje Odabir predloška. I tako dalje.

![Uređivač obrasca za checkout s poljem za odabir predloška](/img/config/checkout-form-with-template-field.png)

_**Napomena:** Ako izradite proizvod nakon izrade obrasca za checkout, morat ćete dodati proizvod u odjeljak Tablica cijena. Ako ga ne dodate, proizvod se neće prikazati vašim kupcima na stranici za registraciju._

_**Napomena 2:** korisničko ime, email, lozinka, naslov sitea, URL sitea, sažetak narudžbe, plaćanje i gumb za slanje obavezna su polja za izradu obrasca za checkout._

Dok radite na svojem obrascu za checkout, uvijek možete upotrijebiti gumb Pretpregled kako biste vidjeli kako će vaši klijenti vidjeti obrazac. Također možete prebacivati prikaz kao postojeći korisnik ili posjetitelj.

![Gumb Pretpregled u uređivaču obrasca za checkout](/img/config/checkout-form-preview-button.png)![Pretpregled obrasca za checkout kao posjetitelj ili postojeći korisnik](/img/config/checkout-form-preview-modal.png)

Na kraju, u **Naprednim opcijama** možete konfigurirati poruku za stranicu **Hvala**, dodati isječke za praćenje konverzija, dodati prilagođeni CSS svojem obrascu za checkout ili ga ograničiti na određene zemlje.

![Napredne opcije sa stranicom Hvala, praćenjem konverzija i prilagođenim CSS-om](/img/config/checkout-form-advanced.png)

Također možete ručno omogućiti ili onemogućiti svoj obrazac za checkout prebacivanjem ove opcije u desnom stupcu ili trajno izbrisati obrazac.

![Prekidač aktivno i opcija brisanja za obrazac za checkout](/img/config/checkout-form-active.png)

Ne zaboravite spremiti svoj obrazac za checkout!

![Gumb Spremi obrazac za checkout](/img/config/checkout-form-save.png)

Da biste dobili shortcode svojeg obrasca, kliknite **Generiraj shortcode** i kopirajte rezultat prikazan u modalnom prozoru.

![Modal Generiraj shortcode sa shortcodeom za kopiranje](/img/config/checkout-form-editor.png)

_**Napomena:** Morat ćete dodati ovaj shortcode na svoju stranicu za registraciju kako bi se ovaj obrazac za checkout dodao na nju._

## Unaprijed odabiranje proizvoda i predložaka putem URL parametara: {#pre-selecting-products-and-templates-via-url-parameters}

Ako želite izraditi prilagođene tablice cijena za svoje proizvode i unaprijed odabrati na obrascu za checkout proizvod ili predložak koji vaš kupac odabere s vaše stranice tablice cijena ili predložaka, za to možete upotrijebiti URL parametre.

### **Za planove:** {#for-plans}

Idite na **Ultimate Multisite > Proizvodi > Odaberite plan**. Trebali biste vidjeti gumb **Kliknite za kopiranje dijeljive poveznice** na vrhu stranice. To je poveznica koju možete upotrijebiti za unaprijed odabiranje ovog određenog plana na svojem obrascu za checkout.

![Stranica proizvoda s gumbom za dijeljivu poveznicu](/img/config/products-list.png)

Imajte na umu da je ova dijeljiva poveznica valjana samo za **Planove**. Dijeljive poveznice ne možete koristiti za pakete ili usluge.

### Za predloške: {#for-templates}

Ako želite unaprijed odabrati predloške sitea na svojem obrascu za checkout, možete upotrijebiti parametar: **?template_id=X** na URL-u svoje stranice za registraciju. "X" treba zamijeniti **ID brojem predloška sitea**. Da biste dobili taj broj, idite na **Ultimate Multisite > Siteovi**.

Kliknite **Upravljaj** odmah ispod predloška sitea koji želite koristiti. Vidjet ćete SITE ID broj. Samo upotrijebite taj broj za ovaj određeni predložak sitea kako bi bio unaprijed odabran na vašem obrascu za checkout. U našem slučaju ovdje, URL parametar bio bi **?template_id=2**.

![Popis siteova koji prikazuje ID predloška sitea](/img/config/site-templates-list.png)

Recimo da je web-stranica naše mreže [**www.mynetwork.com**](http://www.mynetwork.com), a naša stranica za registraciju s obrascem za checkout nalazi se na stranici **/register**. Cijeli URL s unaprijed odabranim ovim predloškom sitea izgledat će ovako: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

A ako želite, možete unaprijed odabrati i proizvode i predloške za svoj obrazac za checkout. Sve što trebate učiniti jest kopirati dijeljivu poveznicu plana i zalijepiti parametar predloška na kraj. Izgledat će ovako: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
