---
title: Форме за плаćanje
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Форме за плаћање (Checkout Forms)

Форме за плаћање су лак и fleksibilan начин да испитате različite pristupe када pokušavate da privučete nove kupce.

Ultimate Multisite 2.0 nudi editor za forme za plaćanje koji vam omogućava da kreirate koliko god forma želite, sa različitim poljima, proizvodima koje nudite i tako dalje.

Da biste pristupili ovoj funkciji, idite u meni Checkout Forms na levom sidornu trku (side-bar).

![Lista formulara za plaćanje](/img/config/checkout-forms-list.png)

Na ovoj stranici možete videti sve forme za plaćanje koje imate.

Tabela sa listom uključuje kolonu **Status** tako da možete da proverite da li je svaka forma trenutno dostupna kupcima:

| Status | Značenje |
|---|---|
| **Active (Aktivna)** | Forma se može koristiti bilo gde gde je objavljen njen shortcode ili stranica za registraciju. |
| **Inactive (Neaktivna)** | Forma je sačuvana, ali je onemogućena. Kupci ne mogu da završe plaćanje s njom dok je ponovo ne aktivirate. |

Koristite kolonu status pre uređivanja javnog toka registracije, pogotovo kada zadržite projekte forme za plaćanje u nacrtu ili sezonske pored vaših aktivan formulara.

Ako želite da kreirate novu, jednostavno kliknite na Add Checkout Form (Dodaj formu za plaćanje) na vrhu stranice.

Možete izabrati jednu od ovih tri opcije kao početnu tačku: single step (jedan korak), multi-step (više koraka) ili blank (prazna). Zatim kliknite da idete u Editor.

Kada izaberete **single step** ili **multi-step** kao početnu tačku, šablon forme sada uključuje polje **Template Selection (Odabir šablona)** po defaultu. Ovo polje omogućava vašim kupcima da odaberu šablon sajta tokom procesa registracije. Možete ga ostaviti na mestu, ukloniti ili pomeriti kao bilo koje drugo polje u editoru.

![Editor forme za plaćanje](/img/config/checkout-form-editor.png)

Alternativ, možete uređivati ili duplirati forme koje već imate tako što ćete kliknuti na opcije ispod njihovog imena. Tamo ćete takođe pronaći opcije za kopiranje shortcode-a forme ili za brisanje forme.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Pregled editora forme za plaćanje (Checkout Form Editor Overview)

Editor forme za plaćanje pruža sveobuhvatan interfejs za izgradnju vaših formulara za registraciju. Evo pregleda rasporeda editora:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Uređivanje forme za plaćanje (Editing a Checkout Form)

Možete kreirati forme za plaćanje za različite svrhe. U ovom primeru rad ćemo na formi za registraciju.

Nakon što navigirate do editora forme za plaćanje, dajte vašoj formi ime (koje će se koristiti isključivo za interni referentni broj) i slug (koristi se za kreiranje shortcode-ova, na primer).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forme se sastavljaju od koraka (step-ova) i polja. Možete dodati novi korak klikom na Add New Checkout Step (Dodaj novi korak za plaćanje).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvom tabu prozora modalnog okvira, popunite sadržaj vašeg koraka forme. Dajte mu ID, ime i opis. Ovi elementi se uglavnom koriste internima.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Sledeći korak, postavite vidljivost koraka. Možete izabrati između opcija "Uvek prikazano", "Prikazano samo za prijavljene korisnike" ili "Prikazano samo za goste".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Na kraju, konfigurišite stil koraka. Ovo su opcioni polja.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Sada je vreme da dodamo polja u naš prvi korak. Samo kliknite na Add New Field (Dodaj novo polje) i izaberite tip sekcije koju želite.

![Korak za formular plaćanja sa poljima](/img/config/checkout-form-step-with-fields.png)

Svako polje ima različite parametre koje treba popuniti. Za ovaj prvi korak, odaberemo polje "Username" (Korisničko ime).

![Pad za izbor tipa polja](/img/config/checkout-form-field-type-dropdown.png)

![Podešavanja sadržaja polja korisničko ime](/img/config/checkout-form-username-content.png)

![Podešavanja vidljivosti polja korisničko ime](/img/config/checkout-form-username-visibility.png)

![Podešavanja stila polja korisničko ime](/img/config/checkout-form-username-style.png)

Možete dodati koliko god koraka i polja vam treba. Da biste prikazali svoje proizvode kako bi kupci mogli da izaberu jedan, koristite polje Pricing Table (Tabela cena). Ako želite da dozvolite klijentima izbor šablona, dodajte polje Template Selection (Izbor šablona). I tako dalje.

![Prozor za dodavanje novog polja](/img/config/checkout-form-add-field-dialog.png)

_**Napomena:** username (korisničko ime), email, password (lozinka), site title (naslov sajta), site URL (URL sajta), order summary (sažetak porudžbine), payment (plaćanje) i submit button (dugme za slanje) su obavezna polja za kreiranje formulara plaćanja._

Dok radite na svom formularu plaćanja, uvek možete koristiti dugme Preview (Pregled) da vidite kako će kupci videti formular. Takođe možete menjati između gledanja kao postojećeg korisnika ili posetioca.

![Dugme za pregled formulara plaćanja](/img/config/checkout-form-preview-button.png)

![Modal za pregled formulara plaćanja](/img/config/checkout-form-preview-modal.png)

Na kraju, u Advanced Options (Napredne opcije) možete konfigurisati poruku za stranicu "Thank You" (Hvala), dodati fragmente za praćenje konverzija, dodati prilagođeni CSS za vaš formular plaćanja ili ograničiti ga na određene zemlje.

![Napredne opcije](/img/config/checkout-form-advanced.png)

Takođe možete ručno omogućiti ili onemogućiti svoj formular plaćanja tako što ćete uključiti ovu opciju u desnoj koloni, ili ga trajno obrisati.

![Prekidač aktivnosti](/img/config/checkout-form-active.png)

Da biste obrisali formular, kliknite na opciju brisanja u akcijama formulara:

![Opcija za brisanje formulara](/img/config/checkout-form-delete.png)

Ne zaboravite da sačuvate svoj formular za plaćanje!

![Dupli dugme za spremanje](/img/config/checkout-form-save.png)

Da biste dobili shortcode svog formulara, kliknite na Generišite Shortcode i kopirajte rezultat koji se prikazuje u prozorčićevom prozoru (modal window).

![Dugme za spremanje sa shortcode-om](/img/config/checkout-form-save.png)

### Polje Tabela cena

Polje **Tabela cena** prikazuje vaše proizvode na formularu za plaćanje tako da kupci mogu izabrati plan. Kada uređujete ovo polje, možete podesiti nekoliko opcija:

![Podešavanja polja Tabela cena](/img/config/pricing-table-field-settings.png)

Evo kako izgleda tabela cena na frontend registracijskom formularu:

![Tabela cena za plaćanje na frontendu](/img/config/frontend-checkout-pricing-table.png)

  * **Proizvodi**: Izaberite koje proizvode želite da prikažete i u kom redu će se pojaviti.
  * **Nađite različita trajanja (Force Different Durations)**: Kada bude aktivirano, svi proizvodi će biti prikazani bez obzira na to da li imaju odgovarajuću varijaciju cene za trenutno odabrani period fakturisanja. Kada bude isključeno (podrazumevano), proizvodi bez varijacije za odabrani period će biti skriveni.
    ![Opcija Tabela cena forsiranje trajanja](/img/config/pricing-table-force-durations.png)
  * **Sakrij kada je već odabran**: Skriva tabelu cena kada je plan već odabran putem URL-a (npr. `/register/premium`).
  * **Šablon Tabela cena**: Izaberite vizuelni šablon za tabelu cenu (Jednostavan spisak, Legacy, itd.).

Ako dodate proizvod u Tabelu cena pre nego što formular sadrži polja potrebna za završetak kupovinskog toka tog proizvoda, editor će sada prikazati upozorenje. Koristite to upozorenje da dodate nedostajuće obavezno polje pre objavljivanja ili čuvanja promena za aktivan registracijski formular.

### Dodavanje prekida za odabir perioda

Ako ste konfigurisali [Price Variations](creating-your-first-subscription-product#price-variations) na svojim proizvodima (npr. mesečna i godišnja tarife), možete dodati polje **Period Selection** u vašu formular za plaćanje (checkout form). Ovo polje prikazuje prekida koji omogućava kupcima da prebacuju između fakturisanih perioda, a tabela cena se dinamički ažurira u realnom vremenu.

#### Korak 1: Konfigurisanje varijacija cena na vašim proizvodima

Pre nego što dodate polje Period Selection, uverite se da vaši proizvodi imaju konfigurisanje varijacija cena. Idite na **Ultimate Multisite > Products**, uredite proizvod i navigirajte do tab-a **Price Variations** kako biste dodali alternativne fakturijske periode (npr. Godišnja sa popustom).

![Tab Price Variations na proizvodu](/img/config/product-price-variations-tab.png)

#### Korak 2: Dodavanje polja Period Selection u vaš formular za plaćanje

1. Idite na **Ultimate Multisite > Checkout Forms** i uredite svoj formular za plaćanje.

2. Skrolujte do koraka koji sadrži vaše polje **Pricing Table** (Tabela cena) i kliknite **Add new Field** (Dodaj novo polje).

3. U dijalogu za izbor tipa polja, kliknite na **Period Select**.

![Dijalog Add New Field koji prikazuje Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurišite opcije perioda. Svaka opcija treba:
   * **Duration** (Trajanje): Broj (npr. `1`)
   * **Duration unit** (Jedinica trajanja): Tip perioda (Dani, Nedelje, Meseci ili Godine)
   * **Label** (Oznaka): Tekst koji će kupci videti (npr. "Mesečno", "Godišnje")

5. Kliknite na **+ Add Option** (Dodaj opciju) da dodate više izbora perioda. Ove opcije moraju odgovarati varijacijama cena koje ste konfigurisali na svojim proizvodima.

![Podešavanja polja Period Selection](/img/config/period-selection-field-settings.png)

6. Izaberite **Period Selector Template** (Clean je podrazumevani, on prikazuje jednostavan stilizovani selector spremni za prilagođeni CSS).

7. Kliknite na **Save Field**.

#### Korak 3: Pozicionirajte polje iznad tabele cena

Za najbolju korisničku iskustvo, uverite se da polje za odabir perioda (Period Selection) pojavi **pre** polja sa cenovnom tabelom (Pricing Table) u vašem koraku na blagajnu. Možete prevlačiti polja da ih ponovo poređate u editoru forme na blagajni. Na taj način, kupci prvo biraju period fakturiranja, a zatim vide cene za taj period.

![Editor forme na blagajni koji prikazuje redosled polja](/img/config/checkout-form-editor-with-fields.png)

#### Kako to funkcioniše na frontend-u

Kada je podešeno, kupci koji posete vašu stranicu za registraciju će videti odabir perioda iznad tabele cena. Kada kliknu na neki drugi period fakturiranja:

  * Cena tabela se trenutno ažurira da prikaže cene za odabrani period (ne je potrebno ponovo učitati stranicu).
  * Ako je opcija **Force Different Durations** (Naoružavanje različitih trajanja) isključena na polju sa cenovnom tabelom, proizvodi koji nemaju varijaciju cena za odabrani period će biti skriveni.
  * Ako je **Force Different Durations** uključena, svi proizvodi ostaju vidljivi čak i ako nemaju varijaciju za odabrani period (pokažu svoju osnovnu cenu).

#### Predodabirivanje perioda fakturiranja putem URL-a

Možete takođe predodabrati proizvod i period fakturiranja putem URL-a. Ultimate Multisite podržava ove URL šablone:

  * `/register/premium` — Predodabiruje samo "Premium" proizvod
  * `/register/premium/12` — Predodabiruje proizvod i trajanje od 12 meseci
  * `/register/premium/1/year` — Predodabiruje proizvod sa trajanjem od 1 godine

### Polje za izbor šablona (The Template Selection Field)

Polje **Template Selection** omogućava kupcima da izaberu šablon sajta tokom blagajne. Sada je ugrađeno podrazumevano u šablonima forme na blagajni jednostepnih i višestepnih koraka dodatih u Ultimate Multisite v2.6.1.

#### Ručno dodavanje polja

Ako radite sa formularom koji je kreiran pre verzije v2.6.1 ili ste počeli od praznog šablona:

1. Idite na **Ultimate Multisite > Checkout Forms** i uredite svoj checkout form.
2. U koraku gde se prikupljaju detalji sajta, kliknite na **Add new Field** (Dodaj novo polje).
3. Izaberite **Template Selection** (Odabir šablona) iz dijaloga tipa polja.
4. Konfigurišite polje:
   - **Label** — Naslov koji korisnici vide iznad mreže šablona (npr. "Izaberite šablon sajta").
   - **Required** (Obavezno) — Da li su kupci morali da odaberu šablon pre nego što nastave.

#### Kako to funkcioniše

Kada kupac izabere šablon tokom plaćanja, Ultimate Multisite ga koristi prilikom kreiranja novog sajta. Šabloni koji se prikazuju dolaze sa vaše liste **Site Templates** (**Ultimate Multisite > Site Templates**). Prikazuju se samo šabloni označeni kao dostupni kupcima.

### Osnovne domene za checkout-form

Ultimate Multisite v2.13.0 tretira domene podešene u poljima **Site URL** na checkout form kao mrežne osnovne domene (network base domains). Koristite postavke dostupnih domena polja kada želite da kupci kreiraju sajtove pod jednim ili više zajedničkih registracijskih domena, kao što su `example.com` i `sites.example.com`.

Zajedničke osnovne domene za checkout-form se ne tretira kao mape prilagođenih domena po sajtu (per-site custom domain mappings). Kada kupac kreira poddirektorijum sajt na jednoj od tih baza, Ultimate Multisite ne kreira zapis o mapiranom domenu koji bi učinio zajednički host pripadaju samo tom satu. Zajednički host ostaje dostupan za srodne sajtove koji koriste istu osnovnu bazu checkout-form.

Održavajte prilagođene domene za mape hostove po kupcu, kao što je `customer-example.com`. Održavajte zajedničke osnovne domene za registracijske hostove koje mogu koristiti mnogi sajtovi.

#### Uklanjanje polja

Ako ne nudite šablone za sajmove, uklonite polje Izbor šablona iz svoje forme. Klijenti će tada dobiti bilo koji podrazumevani šablon koji je podešen u **Ultimate Multisite > Settings > Site Templates**.
