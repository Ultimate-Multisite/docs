---
title: Forme za plaćanje
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Forme za plaćanje (Checkout Forms)

Forme za plaćanje su jednostavan i fleksibilan način da eksperimentirate s različitim pristupima kada pokušavate privući nove kupce.

Ultimate Multisite 2.0 nudi editor forme za plaćanje koji vam omogućuje kreiranje koliko god forma želite, s različitim poljima, proizvodima na ponudi itd.

Da biste pristupili toj značajci, idite u meni Forme za plaćanje (Checkout Forms) na lijevoj traci.

![Lista formi za plaćanje](/img/config/checkout-forms-list.png)

Na ovoj stranici možete vidjeti sve forme za plaćanje koje imate.

Tabela s listom uključuje kolonu **Status** tako da možete potvrditi je li svaka forma trenutno dostupna kupcima:

| Status | Značenje |
|---|---|
| **Active (Aktivna)** | Forma se može koristiti bilo gdje gdje je objavljen njen shortcode ili stranica za registraciju. |
| **Inactive (Neaktivna)** | Forma je spremna, ali onemogućena. Kupci ne mogu dovršiti plaćanje s njom dok je ponovo ne aktivirate. |

Koristite kolonu status prije uređivanja javnog toka registracije, pogotovo kada zadržite projekte forme za plaćanje u nacrtu ili sezonske pored svojih aktivnih forma.

Ako želite napraviti novu, jednostavno kliknite na Dodaj formu za plaćanje (Add Checkout Form) na vrhu stranice.

Možete odabrati jednu od ovih tri opcije kao početnu točku: jednofazna (single step), višefazna (multi-step) ili prazna (blank). Zatim kliknite da idete u Editor.

Kada odaberete **jednofaznu** ili **višefaznu** opciju kao početnu točku, šablon forme sada uključuje polje za **Odabir šablona (Template Selection)** po defaultu. Ovo polje omogućuje vašim kupcima da odaberu šablon stranice tijekom procesa registracije. Možete ga ostaviti na mjestu, ukloniti ili premjestiti kao bilo koje drugo polje u editoru.

![Editor forme za plaćanje](/img/config/checkout-form-editor.png)

Alternativ možete uređivati ili dupliravati forme koje već imate klikom na opcije ispod njihovog imena. Tamo ćete također pronaći opcije za kopiranje shortcode-a forme ili za brisanje forme.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

#### Pregled uređivača forme za plaćanje (Checkout Form Editor Overview)

Uredivač forme za plaćanje nudi sveobuhvatan interfejs za izgradnju vaših registracijskih formulara. Evo pregleda rasporeda uređivača:

![Checkout Form editor overview](/img/config/checkout-form-editor-overview.png)

### Uređivanje forme za plaćanje (Editing a Checkout Form)

Možete kreirati forme za plaćanje za različite svrhe. U ovom primjeru radit ćemo na registracijskom formularu.

Nakon što navigirate do uređivača forme za plaćanje, dajte svom formularu ime (koje se koristi isključivo za interni referencijalni dio) i slug (koristi se za kreiranje shortcode-a, na primjer).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Forme se sastoje od koraka i polja. Možete dodati novi korak klikom na Dodaj novi korak forme za plaćanje (Add New Checkout Step).

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na prvom kartici prozora modalnog okvira, popunite sadržaj vašeg koraka forme. Dajte mu ID, ime i opis. Ovi podaci se uglavnom koriste internima.

![Checkout form step content tab](/img/config/checkout-form-step-content.png)

Zatim, postavite vidljivost koraka. Možete birati između "Uvijek prikazano", "Prikazati samo za prijavljene korisnike" ili "Prikazati samo za goste".

![Checkout form step visibility tab](/img/config/checkout-form-step-visibility.png)

Na kraju, konfigurišajte stil koraka. Ovo su opcionalna polja.

![Checkout form step style tab](/img/config/checkout-form-step-style.png)

Sada je vrijeme da dodamo polja u naš prvi korak. Samo kliknite na Dodaj novo polje (Add New Field) i odaberite tip sekcije koji želite.

![Korak za korak u procesu plaćanja s poljima](/img/config/checkout-form-step-with-fields.png)

Svako polje ima različite parametre koje treba popuniti. Za ovaj prvi ulaz, odabrat ćemo polje "Username" (Korisničko ime).

![Pad za odabir tipa polja](/img/config/checkout-form-field-type-dropdown.png)

![Postavke sadržaja polja korisničko ime](/img/config/checkout-form-username-content.png)

![Postavke vidljivosti polja korisničko ime](/img/config/checkout-form-username-visibility.png)

![Postavke stila polja korisničko ime](/img/config/checkout-form-username-style.png)

Možete dodati koliko god koraka i polja vam treba. Da biste prikazali svoje proizvode kako bi kupci mogli odabrati jedan, koristite polje Pricing Table (Tablica cijena). Ako želite omogućiti svojim klijentima odabir teme, dodajte polje Template Selection (Odabir teme). I tako dalje.

![Dialog za dodavanje novog polja](/img/config/checkout-form-add-field-dialog.png)

_**Napomena:** korisničko ime (username), e-mail, lozinka (password), naziv stranice (site title), URL stranice (site URL), sažetak narudžbe (order summary), plaćanje (payment) i gumb za slanje (submit button) su obavezna polja za kreiranje formulara za plaćanje._

Dok radite na svom formularu za plaćanje, uvijek možete koristiti gumb Preview (Pregled) kako biste vidjeli kako će vam kupci prikazati formular. Također možete mijenjati između pregleda kao postojećeg korisnika i posjetitelja stranice.

![Gumb za pregled formulara za plaćanje](/img/config/checkout-form-preview-button.png)

![Modal za pregled formulara za plaćanje](/img/config/checkout-form-preview-modal.png)

Na kraju, u Advanced Options (Napredne opcije) možete konfigurisati poruku za stranicu "Hvala Vam" ("Thank You"), dodati snippetove za praćenje konverzija, dodati prilagođeni CSS za vaš formular za plaćanje ili ograničiti ga na određene države.

![Napredne opcije](/img/config/checkout-form-advanced.png)

Možete također ručno omogućiti ili onemogućiti svoj formular za plaćanje prebacivanjem ove opcije u desnoj koloni, ili ga trajno obrisati.

![Prekidač aktivnosti](/img/config/checkout-form-active.png)

Da biste obrisali formular, kliknite na opciju "Delete" u akcijama formulara:

![Checkout form delete option](/img/config/checkout-form-delete.png)

Ne zaboravite da sačuvate svoj formular za plaćanje!

![Save button](/img/config/checkout-form-save.png)

Da biste dobili shortcode za vaš formular, kliknite na "Generate Shortcode" i kopirajte rezultat koji se prikazuje u modalnom prozoru.

![Save button with shortcode](/img/config/checkout-form-save.png)

### Polje Tablice cijena (Pricing Table Field)

Polje **Pricing Table** prikazuje vaše proizvode na formularu za plaćanje kako bi kupci mogli odabrati plan. Kada uređujete ovo polje, možete podesiti nekoliko opcija:

![Pricing Table field settings](/img/config/pricing-table-field-settings.png)

Evo kako izgleda tablica cijena na frontend registracijskom formularu:

![Frontend checkout pricing table](/img/config/frontend-checkout-pricing-table.png)

  * **Proizvodi (Products)**: Odaberite koje proizvode želite prikazati i u kakvoj sekvenci će se pojaviti.
  * **Načrtajte različita trajanja (Force Different Durations)**: Kada bude uključeno, svi proizvodi će biti prikazani bez obzira na to da li imaju odgovarajuću varijaciju cijene za trenutno odabrani period plaćanja. Kada bude isključeno (podrazumevano), proizvodi koji nemaju varijaciju za odabrani period su skriveni.
    ![Pricing table force durations option](/img/config/pricing-table-force-durations.png)
  * **Sakrij pri prethodnom biranju (Hide when Pre-Selected)**: Tablica cijena se skriva kada je plan već odabran putem URL-a (npr. `/register/premium`).
  * **Šablon tablice cijena (Pricing Table Template)**: Izaberite vizualni šablon za tablicu cijena (Jednostavna lista, Legacy, itd.).

Ako dodate proizvod u Pricing Table prije nego što formular sadrži polja potrebna za dovršetak toka plaćanja tog proizvoda, editor će sada prikazati upozorenje. Koristite to upozorenje da dodate nedostajuće obavezno polje prije objavljivanja ili spremanja promjena za aktivni registracijski formular.

### Dodavanje prekida za odabir razdoblja

Ako ste konfigurisali [Price Variations](creating-your-first-subscription-product#price-variations) na svojim proizvodima (npr. mjesečnu i godišnju cijenu), možete dodati polje **Period Selection** u vašu formular za plaćanje (checkout form). Ovo polje prikazuje prekida koji omogućuje kupcima da prebacuju između različitih razdoblja plaćanja, a tablica cijena se dinamički ažurira u stvarnom vremenu.

#### Korak 1: Konfigurirajte Price Variations na svojim proizvodima

Prije dodavanja polja Period Selectionu, provjerite da su vaši proizvodi konfigurisani s price variations-ima. Idite na **Ultimate Multisite > Products**, uredite proizvod i navigirajte na karticu **Price Variations** kako biste dodali alternativna razdoblja plaćanja (npr. godišnje po popustanoj cijeni).

![Tab Price Variations na proizvodu](/img/config/product-price-variations-tab.png)

#### Korak 2: Dodajte polje Period Selection u vaš formular za plaćanje

1. Idite na **Ultimate Multisite > Checkout Forms** i uredite svoj formular za plaćanje.

2. Skrolajte do koraka koji sadrži vaše polje **Pricing Table** i kliknite na **Add new Field**.

3. U dijalogu odabira tipa polja, kliknite na **Period Select**.

![Dijalog Add New Field prikazujući Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurišajte opcije razdoblja. Svaka opcija treba:
   * **Duration (Trajanje)**: Broj (npr. `1`)
   * **Duration unit (Jedinica trajanja)**: Tip razdoblja (Dni, Tjedni, Mjeseci ili Godine)
   * **Label (Oznaka)**: Tekst koji će kupci vidjeti (npr. "Mjesečno", "Godišnje")

5. Kliknite na **+ Add Option** da dodate više opcija za razdoblje. Ove opcije moraju odgovarati price variations-ima koje ste konfigurisali na svojim proizvodima.

![Postavke polja Period Selection](/img/config/period-selection-field-settings.png)

6. Odaberite **Period Selector Template** (Clean je podrazumijevano, što renderira jednostavan stilizirani odabir spreman za prilagođeni CSS).

7. Kliknite na **Save Field**.

#### Korak 3: Pozicionirajte polje iznad tablice cijena

Za najbolju korisničku iskustvo, osigurajte da se polje za odabir razdoblja pojavi **prije** tablice cijena u vašem koraku pri prijavi. Možete povlačiti polja kako biste ih ponovo uredili u editoru obrasca pri prijavi. Na taj način, kupci prvo biraju period fakturiranja, a zatim vide cijene za taj period.

![Editor obrasca pri prijavi prikazuje red polja](/img/config/checkout-form-editor-with-fields.png)

#### Kako to radi na frontend-u

Nakon konfiguriranja, kupci koji posjećuju vašu stranicu za registraciju uvidjet će odabir perioda iznad tablice cijena. Kada kliknu na različiti period fakturiranja:

  * Tablica cijena se trenutno ažurira kako bi prikazala cijene za odabrani period (ne je potrebno ponovno učitavanje stranice).
  * Ako je **Force Different Durations** (Naoružavanje različitih trajanja) isključen na polju tablice cijena, proizvodi koji nemaju varijaciju cijene za odabrani period će biti skriveni.
  * Ako je **Force Different Durations** uključen, svi proizvodi ostaju vidljivi čak i ako nemaju varijaciju za odabrani period (pokažu svoju osnovnu cijenu).

#### Predodabirivanje perioda fakturiranja putem URL-a

Možete predodabirati proizvod i period fakturiranja putem URL-a. Ultimate Multisite podržava ove URL obrasce:

  * `/register/premium` — Predodabiruje samo "Premium" proizvod
  * `/register/premium/12` — Predodabiruje proizvod i trajanje od 12 mjeseci
  * `/register/premium/1/year` — Predodabiruje proizvod s trajaanjem od 1 godine

### Polje za odabir šablona (Template Selection Field)

Polje **Template Selection** omogućuje kupcima da odaberu šablon stranice tijekom prijave. Sada je uključeno po defaultu u predlošcima obrasca pri prijavi s jednim korakom (**single step**) i više koraka (**multi-step**) dodanim u Ultimate Multisite v2.6.1.

#### Ručno dodavanje polja

Ako radite s formularom koji je kreiran prije verzije v2.6.1 ili ste počeli od praznog šablona:

1. Idite na **Ultimate Multisite > Checkout Forms** i uredite svoj checkout form.
2. U koraku gdje se prikupljaju detalji o stranici, kliknite na **Add new Field** (Dodaj novo polje).
3. Izaberite **Template Selection** (Odabir šablona) iz dijaloga za tip polja.
4. Konfigurišajte polje:
   - **Label** (Oznaka) — Naslov koji korisnici vide iznad mreže šablona (npr. "Izaberite šablon stranice").
   - **Required** (Obavezno) — Da li moraju korisnici odabrati šablon prije nastavka.

#### Kako to radi

Kada kupac odabere šablon tijekom plaćanja, Ultimate Multisite ga koristi prilikom postavljanja njegove nove stranice. Šabloni koji se prikazuju dolaze iz vaše liste **Site Templates** (**Ultimate Multisite > Site Templates**). Prikazuju se samo šabloni označeni kao dostupni za kupce.

### Osnovne domene za checkout-form (Checkout-form base domains)

Ultimate Multisite v2.13.0 tretira domene konfigurisane u poljima **Site URL** na checkout form kao mrežne osnovne domene (network base domains). Koristite postavke dostupnih domena polja kada želite da kupci kreiraju stranice pod jednom ili više zajedničkih registracijskih domena, poput `example.com` i `sites.example.com`.

Zajedničke osnovne domene za checkout-form ne se tretiraju kao mapiranje prilagođenih domena po stranici (per-site custom domain mappings). Kada kupac kreira podstranicu na jednoj od tih baza, Ultimate Multisite ne kreira zapis mapiranog domena koji bi učinio zajednički host pripadaju samo toj jednoj stranici. Zajednički host ostaje dostupan za srodne stranice koje koriste istu osnovnu temu za checkout form.

Održavajte prilagođene domene za mapeirane hostove po kupcu, kao što je `customer-example.com`. Održavajte zajedničke osnovne domene za registracijske hostove koje mogu koristiti mnoge stranice.

#### Uklanjanje polja

Ako ne nudite predrojne za web stranice, uklonite polje Izbor teme iz svoje forme. Klijenti će tada dobiti jedan od podrazlogodnih predrođaja koji su konfigurirani u **Ultimate Multisite > Settings > Site Templates**.
