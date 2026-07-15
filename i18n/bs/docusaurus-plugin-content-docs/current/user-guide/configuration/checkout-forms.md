---
title: Obrasci za plaćanje
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Obrasci za naplatu

Obrasci za naplatu su jednostavan i fleksibilan način za eksperimentisanje s različitim pristupima kada pokušavate pretvoriti nove kupce.

Ultimate Multisite 2.0 nudi editor obrazaca za naplatu koji vam omogućava da kreirate onoliko obrazaca koliko želite, s različitim poljima, proizvodima u ponudi itd.

Za pristup ovoj funkciji, idite na meni Obrasci za naplatu, na lijevoj bočnoj traci.

![Lista obrazaca za naplatu](/img/config/checkout-forms-list.png)

Na ovoj stranici možete vidjeti sve obrasce za naplatu koje imate.

Tabela liste uključuje kolonu **Status** kako biste mogli potvrditi da li je svaki obrazac trenutno dostupan kupcima:

| Status | Značenje |
|---|---|
| **Aktivno** | Obrazac se može koristiti bilo gdje gdje je objavljen njegov kratki kod ili stranica za registraciju. |
| **Neaktivno** | Obrazac je sačuvan, ali onemogućen. Kupci ne mogu završiti naplatu s njim dok ga ponovo ne omogućite. |

Koristite kolonu statusa prije uređivanja javnog toka registracije, posebno kada čuvate nacrte ili sezonske obrasce za naplatu zajedno sa svojim aktivnim obrascima.

Ako želite kreirati novi, samo kliknite Dodaj obrazac za naplatu na vrhu stranice.

Možete odabrati jednu od ove tri opcije kao početnu tačku: jedan korak, više koraka ili prazno. Zatim kliknite Idi u editor.

Kada odaberete **jedan korak** ili **više koraka** kao početnu tačku, predložak obrasca sada podrazumijevano uključuje polje **Odabir predloška**. Ovo polje omogućava vašim kupcima da odaberu predložak sajta tokom procesa registracije. Možete ga ostaviti na mjestu, ukloniti ga ili premjestiti kao bilo koje drugo polje u editoru.

![Editor obrasca za naplatu](/img/config/checkout-form-editor.png)

Alternativno, možete urediti ili duplicirati obrasce koje već imate klikom na opcije ispod njegovog naziva. Tamo ćete također pronaći opcije za kopiranje kratkog koda obrasca ili brisanje obrasca.

![Radnje pri prelasku mišem preko obrasca za naplatu](/img/config/checkout-form-hover-actions.png)

#### Pregled editora obrasca za naplatu {#checkout-form-editor-overview}

Editor obrasca za naplatu pruža sveobuhvatno sučelje za izradu vaših registracijskih obrazaca. Evo pregleda rasporeda editora:

![Pregled editora obrasca za naplatu](/img/config/checkout-form-editor-overview.png)

### Uređivanje obrasca za naplatu {#editing-a-checkout-form}

Možete kreirati obrasce za naplatu za različite svrhe. U ovom primjeru radit ćemo na registracijskom obrascu.

Nakon navigacije do editora obrasca za naplatu, dajte svom obrascu naziv (koji će se koristiti samo za internu referencu) i slug (koji se koristi za kreiranje kratkih kodova, na primjer).

![Editor obrasca za naplatu](/img/config/checkout-form-editor.png)

Obrasci se sastoje od koraka i polja. Možete dodati novi korak klikom na Dodaj novi korak naplate.

![Dodaj novi korak naplate](/img/config/checkout-form-add-step.png)

Na prvoj kartici modalnog prozora popunite sadržaj koraka svog obrasca. Dajte mu ID, naziv i opis. Ove stavke se uglavnom koriste interno.

![Kartica sadržaja koraka obrasca za naplatu](/img/config/checkout-form-step-content.png)

Zatim postavite vidljivost koraka. Možete birati između "Uvijek prikaži", "Prikaži samo prijavljenim korisnicima" ili "Prikaži samo gostima".

![Kartica vidljivosti koraka obrasca za naplatu](/img/config/checkout-form-step-visibility.png)

Na kraju, konfigurišite stil koraka. Ova polja su opcionalna.

![Kartica stila koraka obrasca za naplatu](/img/config/checkout-form-step-style.png)

Sada je vrijeme da dodamo polja našem prvom koraku. Samo kliknite Dodaj novo polje i odaberite tip odjeljka koji želite.

![Korak obrasca za naplatu s poljima](/img/config/checkout-form-step-with-fields.png)

Svako polje ima različite parametre koje treba popuniti. Za ovaj prvi unos odabrat ćemo polje "Korisničko ime".

![Padajući meni za odabir tipa polja](/img/config/checkout-form-field-type-dropdown.png)

![Postavke sadržaja polja Korisničko ime](/img/config/checkout-form-username-content.png)

![Postavke vidljivosti polja Korisničko ime](/img/config/checkout-form-username-visibility.png)

![Postavke stila polja Korisničko ime](/img/config/checkout-form-username-style.png)

Možete dodati onoliko koraka i polja koliko vam je potrebno. Da prikažete svoje proizvode kako bi vaši kupci odabrali jedan, koristite polje Tabela cijena. Ako želite omogućiti svojim klijentima da odaberu predložak, dodajte polje Odabir predloška. I tako dalje.

![Dijalog Dodaj novo polje](/img/config/checkout-form-add-field-dialog.png)

_**Napomena:** korisničko ime, email, lozinka, naslov sajta, URL sajta, sažetak narudžbe, plaćanje i dugme za slanje su obavezna polja za kreiranje obrasca za naplatu._

Dok radite na svom obrascu za naplatu, uvijek možete koristiti dugme Pregled da vidite kako će vaši klijenti vidjeti obrazac. Također možete prebacivati između prikaza kao postojeći korisnik ili posjetilac

![Dugme za pregled obrasca za naplatu](/img/config/checkout-form-preview-button.png)

![Modal za pregled obrasca za naplatu](/img/config/checkout-form-preview-modal.png)

Na kraju, u Naprednim opcijama možete konfigurisati poruku za stranicu "Hvala", dodati isječke za praćenje konverzija, dodati prilagođeni CSS svom obrascu za naplatu ili ga ograničiti na određene zemlje.

![Napredne opcije](/img/config/checkout-form-advanced.png)

Također možete ručno omogućiti ili onemogućiti svoj obrazac za naplatu prebacivanjem ove opcije u desnoj koloni, ili trajno obrisati obrazac.

![Prekidač Aktivno](/img/config/checkout-form-active.png)

Da obrišete obrazac, kliknite opciju brisanja u radnjama obrasca:

![Opcija brisanja obrasca za naplatu](/img/config/checkout-form-delete.png)

Ne zaboravite sačuvati svoj obrazac za naplatu!

![Dugme Sačuvaj](/img/config/checkout-form-save.png)

Da dobijete kratki kod svog obrasca, kliknite Generiši kratki kod i kopirajte rezultat prikazan u modalnom prozoru.

![Dugme Sačuvaj s kratkim kodom](/img/config/checkout-form-save.png)

### Polje Tabela cijena {#the-pricing-table-field}

Polje **Tabela cijena** prikazuje vaše proizvode na obrascu za naplatu kako bi kupci mogli odabrati plan. Kada uređujete ovo polje, možete konfigurisati nekoliko opcija:

![Postavke polja Tabela cijena](/img/config/pricing-table-field-settings.png)

Evo kako se tabela cijena pojavljuje na frontend registracijskom obrascu:

![Tabela cijena za checkout na frontendu](/img/config/frontend-checkout-pricing-table.png)

  * **Proizvodi**: Odaberite koje proizvode prikazati i redoslijed kojim se pojavljuju.
  * **Prisili različita trajanja**: Kada je omogućeno, svi proizvodi se prikazuju bez obzira na to imaju li odgovarajuću varijaciju cijene za trenutno odabrani obračunski period. Kada je onemogućeno (zadano), proizvodi bez varijacije za odabrani period su sakriveni.
    ![Opcija prisiljavanja trajanja u tabeli cijena](/img/config/pricing-table-force-durations.png)
  * **Sakrij kada je unaprijed odabrano**: Sakriva tabelu cijena kada je plan već odabran putem URL-a (npr. `/register/premium`).
  * **Predložak tabele cijena**: Odaberite vizuelni predložak za tabelu cijena (Jednostavna lista, Naslijeđeno itd.).

Ako dodate proizvod u Tabelu cijena prije nego što obrazac uključuje polja potrebna za dovršavanje checkout toka tog proizvoda, uređivač sada prikazuje upozorenje. Iskoristite upozorenje da dodate nedostajuće obavezno polje prije objavljivanja ili spremanja izmjena za aktivni obrazac za registraciju.

### Dodavanje prekidača za odabir perioda {#adding-a-period-selection-toggle}

Ako ste konfigurirali [Varijacije cijena](creating-your-first-subscription-product#price-variations) na svojim proizvodima (npr. mjesečne i godišnje cijene), možete dodati polje **Odabir perioda** u svoj checkout obrazac. Ovo polje prikazuje prekidač koji kupcima omogućava prebacivanje između obračunskih perioda, a tabela cijena se dinamički ažurira u stvarnom vremenu.

#### Korak 1: Postavite varijacije cijena na svojim proizvodima {#step-1-set-up-price-variations-on-your-products}

Prije dodavanja polja Odabir perioda, provjerite jesu li vaši proizvodi konfigurirani s varijacijama cijena. Idite na **Ultimate Multisite > Proizvodi**, uredite proizvod i otvorite karticu **Varijacije cijena** da dodate alternativne obračunske periode (npr. godišnje po sniženoj cijeni).

![Kartica Varijacije cijena na proizvodu](/img/config/product-price-variations-tab.png)

#### Korak 2: Dodajte polje Odabir perioda u svoj checkout obrazac {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Idite na **Ultimate Multisite > Checkout obrasci** i uredite svoj checkout obrazac.

2. Pomjerite se do koraka koji sadrži polje **Tabela cijena** i kliknite **Dodaj novo polje**.

3. U dijalogu za odabir tipa polja kliknite **Odabir perioda**.

![Dijalog Dodaj novo polje koji prikazuje Odabir perioda](/img/config/checkout-form-add-field-dialog.png)

4. Konfigurirajte opcije perioda. Svaka opcija treba:
   * **Trajanje**: Broj (npr. `1`)
   * **Jedinica trajanja**: Tip perioda (Dani, sedmice, mjeseci ili godine)
   * **Oznaka**: Tekst koji će kupci vidjeti (npr. "Mjesečno", "Godišnje")

5. Kliknite **+ Dodaj opciju** da dodate više izbora perioda. Ove opcije moraju odgovarati varijacijama cijena koje ste konfigurirali na svojim proizvodima.

![Postavke polja Odabir perioda](/img/config/period-selection-field-settings.png)

6. Odaberite **Predložak selektora perioda** (Clean je zadani, koji prikazuje jednostavan stilizirani selektor spreman za prilagođeni CSS).

7. Kliknite **Spremi polje**.

#### Korak 3: Postavite polje iznad tabele cijena {#step-3-position-the-field-above-the-pricing-table}

Za najbolje korisničko iskustvo, provjerite da se polje Odabir perioda pojavljuje **prije** polja Tabela cijena u vašem checkout koraku. Možete prevući polja da promijenite njihov redoslijed u uređivaču checkout obrasca. Na taj način kupci prvo biraju obračunski period, a zatim vide cijene za taj period.

![Uređivač checkout obrasca koji prikazuje redoslijed polja](/img/config/checkout-form-editor-with-fields.png)

#### Kako radi na frontendu {#how-it-works-on-the-frontend}

Nakon konfiguriranja, kupci koji posjete vašu stranicu za registraciju vidjet će selektor perioda iznad tabele cijena. Kada kliknu drugi obračunski period:

  * Tabela cijena se odmah ažurira da prikaže cijene za odabrani period (nije potrebno ponovno učitavanje stranice).
  * Ako je **Prisili različita trajanja** onemogućeno na polju Tabela cijena, proizvodi bez varijacije cijene za odabrani period bit će sakriveni.
  * Ako je **Prisili različita trajanja** omogućeno, svi proizvodi ostaju vidljivi čak i ako nemaju varijaciju za odabrani period (prikazat će svoju zadanu cijenu).

#### Unaprijed odabiranje obračunskog perioda putem URL-a {#pre-selecting-a-billing-period-via-url}

Također možete unaprijed odabrati proizvod i obračunski period putem URL-a. Ultimate Multisite podržava ove URL obrasce:

  * `/register/premium` — Unaprijed odabire samo proizvod "Premium"
  * `/register/premium/12` — Unaprijed odabire proizvod i trajanje od 12 mjeseci
  * `/register/premium/1/year` — Unaprijed odabire proizvod s trajanjem od 1 godine

### Polje za odabir predloška {#the-template-selection-field}

Polje **Odabir predloška** omogućava kupcima da odaberu predložak sitea tokom checkouta. Sada je zadano uključeno u predloške checkout obrasca s **jednim korakom** i **više koraka** dodane u Ultimate Multisite v2.6.1.

#### Ručno dodavanje polja {#adding-the-field-manually}

Ako radite s obrascem koji je kreiran prije v2.6.1 ili je započet od praznog predloška:

1. Idite na **Ultimate Multisite > Checkout obrasci** i uredite svoj checkout obrazac.
2. U koraku u kojem se prikupljaju detalji sitea, kliknite **Dodaj novo polje**.
3. Odaberite **Odabir predloška** iz dijaloga za tip polja.
4. Konfigurirajte polje:
   - **Oznaka** — Naslov koji kupci vide iznad mreže predložaka (npr. "Odaberite predložak sitea").
   - **Obavezno** — Da li kupci moraju odabrati predložak prije nastavka.

#### Kako radi {#how-it-works}

Kada kupac odabere predložak tokom checkouta, Ultimate Multisite ga koristi pri obezbjeđivanju njihovog novog sitea. Prikazani predlošci dolaze s vaše liste **Predlošci siteova** (**Ultimate Multisite > Predlošci siteova**). Ovdje se pojavljuju samo predlošci označeni kao dostupni kupcima.

### Osnovne domene checkout obrazaca {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 tretira domene konfigurirane na poljima **URL sitea** checkout obrasca kao osnovne domene mreže. Koristite postavke dostupnih domena tog polja kada želite da kupci kreiraju siteove pod jednom ili više zajedničkih domena za registraciju, kao što su `example.com` i `sites.example.com`.

Dijeljene osnovne domene checkout-form ne tretiraju se kao prilagođena mapiranja domena po lokaciji. Kada korisnik kreira lokaciju u poddirektoriju na jednoj od tih osnova, Ultimate Multisite ne kreira zapis mapirane domene zbog kojeg bi dijeljeni host pripadao samo toj jednoj lokaciji. Dijeljeni host ostaje dostupan za srodne lokacije koje koriste istu osnovu checkout-form.

Zadržite prilagođene domene za mapirane hostove po korisniku, kao što je `customer-example.com`. Zadržite osnovne domene checkout-form za dijeljene registracijske hostove koje mnoge lokacije mogu koristiti.

#### Uklanjanje polja {#removing-the-field}

Ako ne nudite šablone lokacija, uklonite polje Template Selection iz svog obrasca. Korisnici će tada dobiti bilo koji zadani šablon konfigurisan pod **Ultimate Multisite > Settings > Site Templates**.
