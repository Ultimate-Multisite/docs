---
title: Prilagođavanje vašeg formulara za registraciju
sidebar_position: 17
_i18n_hash: b0e3b7cddd099b4260e5cf01fead8685
---
# Prilagođavanje vašeg obrasca za registraciju

Da učinite vašu mrežu jedinstvenom u odnosu na sve ostale SaaS aplikacije napravljene na WordPress platformi, Ultimate Multisite vam omogućava da prilagodite svoje stranice za registraciju i prijavu pomoću funkcije **Checkout Forms**.

Iako su jednostavan i fleksibilan način za eksperimentisanje sa različitim pristupima kada pokušavate da pretvorite nove klijente, oni se najčešće koriste za kreiranje personalizovanih obrazaca za registraciju. Ovaj članak ima za cilj da vam pokaže kako to možete učiniti.

## Stranice za prijavu i registraciju:

Nakon instalacije Ultimate Multisite-a, on automatski kreira prilagođene stranice za prijavu i registraciju na vašoj glavnoj stranici. Ove podrazumevane stranice možete bilo kada promijeniti idete na stranicu **Ultimate Multisite > Settings > Login & Registration**.

![Login and Registration settings page](/img/config/settings-general.png)

Evo pregleda stranice za podešavanje prijave i registracije:

![Login and Registration settings full page](/img/config/settings-login-registration-full.png)

Pogledajmo svaku opciju koju možete prilagoditi na stranici **Login & Registration**:

*   **Enable registration:** Ova opcija će omogućiti ili onemogućiti registraciju na vašoj mreži. Ako je isključena, vaši klijenti neće moći da se registruju i pretplate na vaše proizvode.

*   **Enable email verification:** Ako je ova opcija uključena, klijenti koji se pretplate na besplatni plan ili plaćeni plan sa probnim periodom primaće e-mail za verifikaciju i morat će kliknuti na link za verifikaciju kako bi se kreirali njihovi sajtovi.

*   **Default registration page:** Ovo je podrazumevana stranica za registraciju. Ova stranica mora biti objavljena na vašem sajtu i mora imati obrazac za registraciju (poznat i kao checkout form) – gdje će vaši klijenti pretplaćivati vaše proizvode. Možete kreirati koliko god želim obrazaca za registraciju i checkout formova, samo zapamtite da stavite shortcode checkout form-a na stranicu za registraciju, inače neće biti vidljiv.

*   **Use custom login page:** Ova opcija vam omogućava da koristite prilagođenu stranicu za prijavu, drugačiju od podrazumevane stranice `wp-login.php`. Ako je ova opcija uključena, možete odabrati koja će stranica biti korištena za prijavu na opciji **Default login page** (ispod).

*   **Obfuscate the original login url (wp-login.php)** : Ako želite da sakrijete originalnu URL adresu za prijavu, možete uključiti ovu opciju. Ovo je korisno za sprečavanje napada snaga (brute-force attacks). Ako je ova opcija omogućena, Ultimate Multisite će prikazati grešku 404 kada korisnik pokuša pristupiti originalnom linku `wp-login.php`.

*   **Force synchronous site publication:** Nakon što se klijent pretplati na proizvod na mreži, novi sajt u stanju čekanja mora biti pretvoren u pravi sajt na mreži. Proces objavljivanja se dešava putem Job Queue-a, asinhrono. Uključite ovu opciju da biste prisilili objavljivanje da se desi u istoj zahtjevnosti kao i prijava.

Sada, pogledajmo druge opcije koje su i dalje relevantne za proces prijave i registracije. Nalaze se odmah ispod **Other options** na istoj stranici Login & registration:

*   **Default role:** Ovo je uloga koju će vaši klijenti imati na svom sajtu nakon procesa prijave.

*   **Enable Jumper:** Omogućava Jumper prečicu u administraciji. Jumper omogućava administratorima da brzo pređu na ekrane Ultimate Multisite-a, objekte mreže i druge podržane destinacije bez prolaska kroz svaki meni. Isključite ga ako preferirate da sakrijete taj alat za brzu navigaciju iz admin interfejsa.

*   **Add users to the main site as well:** Omogućavanje ove opcije takođe će dodati korisnika na glavnu stranicu vaše mreže nakon procesa prijave. Ako uključite ovu opciju, ispod će se pojaviti opcija za postavljanje **default role** ovih korisnika na vašem sajtu.

*   **Enable multiple accounts:** Omogućava korisnicima da imaju račune na različitim sajtovima vaše mreže sa istom e-mail adresom. Ako je ova opcija isključena, vaši klijenti neće moći da kreiraju račun na drugim sajtovima koji rade na vašoj mreži sa istom e-mail adresom.

I to su sve opcije vezane za prijavu i registraciju koje možete prilagoditi! Ne zaboravite da sačuvate svoje postavke nakon što završite sa uređivanjem.

## Korištenje više obrazaca za registraciju:

Ultimate Multisite 2.0 nudi editor checkout form-ova koji vam omogućava da kreirate koliko god obrazaca želite, sa različitim poljima, proizvodima na popratu, itd.

I stranice za prijavu i registraciju ugrađene su sa shortcode-ovima: **[wu_login_form]** na stranici za prijavu i **[wu_checkout]** za stranicu za registraciju. Možete dalje prilagoditi stranicu za registraciju kreiranjem ili izgrađivanjem checkout form-ova.

Da biste pristupili ovoj funkciji, idite na meni **Checkout Forms** na lijevoj bočnoj traci.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

Na ovoj stranici možete vidjeti sve checkout forme koje imate.

Ako želite kreirati novu, samo kliknite na **Add Checkout Form** na vrhu stranice.

Možete odabrati jednu od ovih tri opcije kao početnu tačku: single step, multi-step ili blank. Zatim, kliknite na **Go to the Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativno, možete urediti ili duplirati forme koje već imate klikom na opcije ispod njihovog imena. Tamo ćete također pronaći opcije za kopiranje shortcode-a forme ili za brisanje forme.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Ako odaberete single step ili multi-step, checkout forma će već biti popunjena osnovnim koracima kako bi radila. Zatim, ako želite, možete dodati dodatne korake.

### Uređivanje Checkout Form-a:

Kao što smo ranije spomenuli, možete kreirati checkout forme za različite svrhe. U ovom primjeru radit ćemo na obrascu za registraciju.

Nakon navigacije do editora checkout forme, dajte svojoj formi ime (koje će se koristiti samo za interni referencu) i slug (koristi se za kreiranje shortcode-ova, na primjer).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Forme su sastavljene od koraka i polja. Možete dodati novi korak klikom na **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Na prvoj kartici modalnog prozora, popunite sadržaj koraka vaše forme. Dajte mu ID, ime i opis. Ove stavke se uglavnom koriste interno.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

Zatim, postavite vidljivost koraka. Možete odabrati između **Always show** , **Only show for logged in users** ili **Only show for guests**.

![Checkout step visibility options](/img/config/checkout-form-step.png)

Na kraju, konfigurišite stil koraka. Ovo su opcionalna polja.

![Checkout step style configuration](/img/config/checkout-form-step.png)

Sada je vrijeme da dodamo polja našem prvom koraku. Samo kliknite na **Add New Field** i odaberite tip sekcije koji želite.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

Svako polje ima različite parametre koje treba popuniti. Za ovaj prvi unos, odabrat ćemo polje **Username**.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

Možete dodati koliko god koraka i polja je potrebno. Da prikažete svoje proizvode kako bi klijenti odabrali, koristite Pricing Table polje. Ako želite da klijenti biraju šablon, dodajte Template Selection polje. I tako dalje.

_**Napomena:** Ako kreirate proizvod nakon kreiranja checkout forme, morat ćete dodati proizvod u sekciju Pricing table. Ako ga ne dodate, proizvod neće biti vidljiv vašim klijentima na stranici za registraciju._

_**Napomena 2:** username, email, password, site title, site URL, order summary, payment i submit button su obavezna polja za kreiranje checkout forme._

Dok radite na svojoj checkout formi, uvijek možete koristiti dugme Preview da vidite kako će vaši klijenti vidjeti formu. Takođe možete se mijenjati između prikaza kao postojeći korisnik ili kao posjetitelj.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

Na kraju, na **Advanced Options** možete konfigurisati poruku za stranicu **Thank You**, dodati snipete za praćenje konverzija, dodati custom CSS na svoju checkout formu ili je ograničiti na određene zemlje.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Takođe možete ručno omogućiti ili onemogućiti svoju checkout formu uključivanjem ove opcije u desnu kolonu, ili trajno obrisati formu.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Ne zaboravite da sačuvate svoju checkout formu!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Da biste dobili shortcode vaše forme, kliknite na **Generate Shortcode** i kopirajte rezultat prikazan na modalnom prozoru.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Napomena:** Morat ćete dodati ovaj shortcode na svoju stranicu za registraciju kako bi ova checkout forma bila dodata na nju._

## Pre-selektovanje proizvoda i šablona putem URL parametara:

Ako želite kreirati prilagođene tabele cijena za svoje proizvode i unaprijed odabrati na checkout formi proizvod ili šablon koji klijent bira sa vaše stranice sa tabelama cijena ili šablonima, možete koristiti URL parametre za to.

### Za planove:

Idite na **Ultimate Multisite > Products > Select a plan**. Trebali biste vidjeti dugme **Click to copy Shareable Link** na vrhu stranice. Ovo je link koji možete koristiti za unaprijed odabir ovog specifičnog plana na vašoj checkout formi.

![Product page with shareable link button](/img/config/products-list.png)

Napomena da je ovaj shareable link validan samo za **Plans**. Ne možete koristiti shareable linkove za pakete ili usluge.

### Za šablone:

Ako želite unaprijed odabrati šablone sajtova na svojoj checkout formi, možete koristiti parametar: **?template_id=X** na URL adresi vaše stranice za registraciju. "X" treba zamijeniti **ID brojem šablona sajta**. Da biste dobili ovaj broj, idite na **Ultimate Multisite > Sites**.

Kliknite na **Manage** odmah ispod šablona sajta koji želite koristiti. Vidjet ćete SITE ID broj. Samo koristite ovaj broj za ovaj specifični šablon sajta da bi se unaprijed odabrao na vašoj checkout formi. U našem slučaju, URL parametar bi bio **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

Recimo da je web sajt naše mreže [**www.mynetwork.com**](http://www.mynetwork.com) i da je na stranici **/register** sa našom checkout formom. Cjelokupan URL sa unaprijed odabranim šablonom sajta izgledat će kao [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

I ako želite, možete unaprijed odabrati i proizvode i šablone na svoju checkout formu. Sve što treba da uradite je da kopirate shareable link plana i zalijepite parametar šablona na kraju. Izgledat će kao [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
