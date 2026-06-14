---
title: Formulari za naplatu
sidebar_position: 19
_i18n_hash: b7b1bf89a2997f8916c9f3a3a2cb255b
---
# Checkout forme

Checkout forme su jednostavan i fleksibilan način za eksperimentisanje sa različitim pristupima kada pokušavate da konvertujete nove klijente.

Ultimate Multisite 2.0 nudi editor za Checkout forme koji vam omogućava da kreirate koliko god forma koju želite, sa različitim poljima, proizvodima na raspolaganju, itd.

Da biste pristupili ovoj funkciji, idite na meni Checkout Forms, na bočni panel sa lijeve strane.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Na ovoj stranici možete vidjeti sve vaše checkout forme.

Tablica sa listom uključuje kolonu **Status** kako biste potvrdili da li je svaka forma trenutno dostupna klijentima:

| Status | Značenje |
|---|---|
| **Active** | Forma se može koristiti bilo gdje gdje je objavljen njen shortcode ili stranica za registraciju. |
| **Inactive** | Forma je sačuvana, ali je onemogućena. Klijenti ne mogu završiti naplatu s njom dok je ponovo ne aktivirate. |

Koristite kolonu statusa prije uređivanja javnog toka registracije, posebno kada čuvate nacrtne ili sezonske checkout forme pored svojih aktivnih formi.

Ako želite kreirati novu, samo kliknite na Add Checkout Form na vrhu stranice.

Možete odabrati jednu od ovih tri opcije kao početnu tačku: jednostepeni, višestepeni ili prazna. Zatim, kliknite na Go to the Editor.

Kada odaberete **single step** ili **multi-step** kao početnu tačku, šablon forme automatski uključuje polje **Template Selection**. Ovo polje omogućava vašim klijentima da odaberu šablon stranice tokom procesa registracije. Možete ga ostaviti na mjestu, ukloniti ili ga prebaciti kao bilo koje drugo polje u editoru.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Alternativno, možete urediti ili duplirati forme koje već imate klikom na opcije ispod njihovog imena. Tamo ćete također pronaći opcije za kopiranje shortcode-a forme ili za brisanje forme.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Pregled editora za Checkout forme

Editor za checkout forme pruža sveobuhvatni interfejs za izradu vaših registracijskih formi. Evo pregleda rasporeda editora:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Uređivanje Checkout forme

Možete kreirati checkout forme za različite svrhe. U ovom primjeru radit ćemo na registracijskoj formi.

Nakon navigacije do editora za checkout forme, dajte formi ime (koje će se koristiti samo za interni referencijalni namjene) i slug (koristi se za kreiranje shortcode-a, na primjer).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forme su sastavljene od koraka i polja. Možete dodati novi korak klikom na Add New Checkout Step.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvoj kartici modalnog prozora, popunite sadržaj koraka vaše forme. Dajte mu ID, ime i opis. Ove stavke se uglavnom koriste interno.

![Checkout form step](/img/config/checkout-form-step.png)

Zatim, postavite vidljivost koraka. Možete odabrati između "Always show" (Uvijek prikaži), "Only show for logged in users" (Prikaži samo za prijavljene korisnike) ili "Only show for guests" (Prikaži samo za goste).

![Checkout form step](/img/config/checkout-form-step.png)

Na kraju, konfigurišite stil koraka. Ovo su opcionalna polja.

![Checkout form step](/img/config/checkout-form-step.png)

Sada je vrijeme da dodamo polja našem prvom koraku. Samo kliknite na Add New Field i odaberite željeni tip sekcije.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Svako polje ima različite parametre koje je potrebno popuniti. Za ovaj prvi korak, odabrat ćemo polje "Username".

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

Možete dodati koliko god koraka i polja je potrebno. Da prikažete svoje proizvode klijentima kako bi odabrali, koristite polje Pricing Table. Ako želite da klijenti odaberu šablon, dodajte polje Template Selection. I tako dalje.

![Add New Field dialog](/img/config/checkout-form-add-field-dialog.png)

_**Napomena:** username, email, password, site title, site URL, order summary, payment i submit button su obavezna polja za kreiranje checkout forme._

Dok radite na svojoj checkout formi, uvijek možete koristiti gumb Preview kako biste vidjeli kako će vaši klijenti vidjeti formu. Također možete mijenjati između prikaza kao postojeći korisnik ili kao posjetitelj.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Na kraju, na Advanced Options možete konfigurisati poruku za stranicu "Thank You", dodati snipete za praćenje konverzija, dodati custom CSS na vašu checkout formu ili je ograničiti na određene zemlje.

![Advanced Options](/img/config/checkout-form-advanced.png)

Također možete ručno omogućiti ili onemogućiti svoju checkout formu prebacivanjem ove opcije u desnu kolonu, ili trajno obrisati formu.

![Active toggle](/img/config/checkout-form-active.png)

Da biste obrisali formu, kliknite na opciju brisanja u akcijama forme:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ne zaboravite da sačuvate svoju checkout formu!

![Save button](/img/config/checkout-form-save.png)

Da biste dobili shortcode forme, kliknite na Generate Shortcode i kopirajte rezultat prikazan u modalnom prozoru.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Polje Tablica cijena (The Pricing Table Field)

Polje **Pricing Table** prikazuje vaše proizvode na checkout formi kako bi klijenti mogli odabrati plan. Kada uređujete ovo polje, možete konfigurisati nekoliko opcija:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Evo kako tablica cijena izgleda na frontend registracijskoj formi:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

* **Products**: Odaberite koji proizvode prikazati i u kojem redoslijedu.
* **Force Different Durations**: Kada je omogućeno, svi proizvodi se prikazuju bez obzira na to da li imaju odgovarajuću varijaciju cijene za trenutno odabran period naplate. Kada je onemogućeno (podrazumevano), proizvodi bez varijacije za odabrani period skriveni su.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
* **Hide when Pre-Selected**: Skriva tablicu cijena kada je plan već odabran putem URL-a (npr. `/register/premium`).
* **Pricing Table Template**: Odaberite vizuelni šablon za tablicu cijena (Simple List, Legacy, itd.).

Ako dodate proizvod u Pricing Table prije nego što forma uključuje polja potrebna za dovršavanje checkout toka tog proizvoda, editor će prikazati upozorenje. Koristite upozorenje da dodate nedostajuće obavezno polje prije objavljivanja ili spremanja promjena za aktivnu registracijsku formu.

### Dodavanje prekidača za odabir perioda (Adding a Period Selection Toggle)

Ako ste konfigurisali [Price Variations](creating-your-first-subscription-product#price-variations) na svojim proizvodima (npr. mjesečna i godišnja cijena), možete dodati polje **Period Selection** na svoju checkout formu. Ovo polje prikazuje prekidač koji omogućava klijentima da prebacuju između perioda naplate, a tablica cijena dinamički se ažurira u stvarnom vremenu.

#### Korak 1: Postavljanje varijacija cijena na proizvodima

Prije dodavanja polja Period Selection, pobrinite se da vaši proizvodi imaju konfigurisane varijacije cijena. Idite na **Ultimate Multisite > Products**, uredite proizvod i navigirajte na karticu **Price Variations** kako biste dodali alternativne periode naplate (npr. godišnje po sniženoj cijeni).

![Price Variations tab on a product](/img/config/product-price-variations-tab.png)

#### Korak 2: Dodavanje polja Period Selection na Checkout formu

1. Idite na **Ultimate Multisite > Checkout Forms** i uredite svoju checkout formu.

2. Skrolujte do koraka koji sadrži vaše polje **Pricing Table** i kliknite na Add new Field.

3. U dijalogu za odabir tipa polja, kliknite na Period Select.

![Add New Field dialog showing Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurišite opcije perioda. Svaka opcija zahtijeva:
   * **Duration**: Broj (npr. `1`)
   * **Duration unit**: Tip perioda (Dani, Sedmice, Mjeseci ili Godine)
   * **Label**: Tekst koji će klijenti vidjeti (npr. "Mjesečno", "Godišnje")

5. Kliknite na + Add Option da dodate više opcija perioda. Ove opcije moraju odgovarati varijacijama cijena koje ste konfigurisali na svojim proizvodima.

![Period Selection field settings](/img/config/period-selection-field-settings.png)

Također možete konfigurisati opcije polja direktno:

<!-- Screenshot unavailable: Period selection field options -->

6. Odaberite **Period Selector Template** (Clean je podrazumevano, što prikazuje jednostavan stilizovani selektor spreman za custom CSS).

7. Kliknite na Save Field.

#### Korak 3: Pozicioniranje polja iznad tablice cijena

Za najbolje korisničko iskustvo, pobrinite se da polje Period Selection bude prikazano **prije** polja Pricing Table u vašem koraku za naplatu. Možete povlačiti polja kako biste ih ponovo sortirali u editoru checkout forme. Na taj način, klijenti prvo biraju period naplate, a zatim vide cijene za taj period.

![Checkout form editor showing field order](/img/config/checkout-form-editor-with-fields.png)

#### Kako funkcioniše na frontendu

Nakon konfigurisanja, klijenti koji posjećuju vašu stranicu za registraciju vide selektor perioda iznad tablice cijena. Kada kliknu na drugi period naplate:

* Tablica cijena trenutno se ažurira kako bi prikazala cijene za odabrani period (nije potrebno ponovno učitavanje stranice).
* Ako je **Force Different Durations** onemogućeno na polju Pricing Table, proizvodi bez varijacije cijene za odabrani period će biti skriveni.
* Ako je **Force Different Durations** omogućeno, svi proizvodi ostaju vidljivi čak i ako nemaju varijaciju za odabrani period (prikazaće svoju podrazumevanu cijenu).

#### Pre-selektovanje perioda naplate putem URL-a

Također možete pre-selektovati proizvod i period naplate putem URL-a. Ultimate Multisite podržava ove URL obrasce:

* `/register/premium` — Pre-selektuje samo proizvod "Premium"
* `/register/premium/12` — Pre-selektuje proizvod i trajanje od 12 mjeseci
* `/register/premium/1/year` — Pre-selektuje proizvod sa trajanjem od 1 godine

### Polje Odabir šablona (The Template Selection Field)

Polje **Template Selection** omogućava klijentima da odaberu šablon stranice tokom checkout procesa. Sada je podrazumevano uključeno u šablone checkout forme **single step** i **multi-step** dodate u Ultimate Multisite v2.6.1.

#### Ručno dodavanje polja

Ako radite sa formom koja je kreirana prije v2.6.1, ili je počela od praznog šablona:

1. Idite na **Ultimate Multisite > Checkout Forms** i uredite svoju checkout formu.
2. U koraku gdje se prikupljaju detalji o stranici, kliknite na Add new Field.
3. Odaberite **Template Selection** iz dijaloga tipa polja.
4. Konfigurišite polje:
   - **Label** — Naslov koji klijenti vide iznad mreže šablona (npr. "Izaberite šablon stranice").
   - **Required** — Da li klijenti moraju odabrati šablon prije nastavka.

#### Kako funkcioniše

Kada klijent odabere šablon tokom checkout procesa, Ultimate Multisite ga koristi prilikom osnaživanja njegove nove stranice. Prikazani šabloni dolaze iz vaše liste **Site Templates** (**Ultimate Multisite > Site Templates**). Ovdje se prikazuju samo šabloni označeni kao dostupni klijentima.

#### Uklanjanje polja

Ako ne nudite šablone stranica, uklonite polje Template Selection iz svoje forme. Klijenti će tada dobiti bilo koji podrazumevani šablon koji je konfigurisan pod **Ultimate Multisite > Settings > Site Templates**.
