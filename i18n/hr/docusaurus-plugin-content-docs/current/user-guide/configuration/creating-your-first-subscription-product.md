---
title: Kreiranje Prve Abonentske Proizvodne Kreacije
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Kreiranje Prvog Pretplate Proizvoda (v2) {#creating-your-first-subscription-product-v2}

_**VAŽNA NAPOMENA: Ovaj članak je namenjen isključivo korisnicima Ultimate Multisite verzije 2.x. Ako koristite verziju 1.x,**_ **_pročitajte ovaj članak**_**.

Da biste počeli da pokrenete svoju mrežu i počnete prodavati svoje usluge potencijalnim korisnicima, trebate imati različite opcije pretplate. Kako kreirate te proizvode? Kakve vrste proizvoda možete ponuditi? U ovom članku ćemo pokriti sve što trebate znati o proizvodima.

## Vrste Proizvoda {#product-type}

Sa Ultimate Multisite možete ponuditi svojim klijentima dve kategorije proizvoda: **plana** i **dodatne opcije (Order Bump)**. Dodatne opcije se mogu podeliti u dve vrste: **pakete** i **usluge**. Razlikuje ćemo ih i njihove specifičnosti ćemo videti sledeće.

  * **Plani**: osnovni proizvod Ultimate Multisite-a. Vaš klijent može imati članstvo samo ako je vezano za plan. Plan pruža vašim klijentima jedan ili više sajtova (zavisi od konfiguracije vašeg plana) sa ograničenjima koje postavljate na stranici za uređivanje proizvoda.

  * **Paketi**: dodatne opcije koje direktno utiču na funkcionalnosti Ultimate Multisite planova. One menjaju ograničenja ili dodaju nove resurse, pluginove ili teme originalnom planu koji je vaš klijent kupio. Na primer, osnovni plan može dozvoliti 1000 poseta mesečno, a vi možete ponuditi paket koji proširuje to broj na 10.000.

  * **Usluge**: dodatne opcije koje ne menjaju funkcionalnosti Ultimate Multisite-a. To su zadaci koje ćete ispuniti za vašeg klijenta pored plana koji je kupio. Na primer, vaš kupac može kupiti plan koji dozvoljava jedan sajt i istovremeno platiti dodatnu uslugu koja će dizajnirati taj sajt.

## Upravljanje Proizvodima {#managing-products}

Danas se tab **Products** u Ultimate Multisite-u **(Ultimate Multisite > Products)** može zamisliti kao planove u tradicionalnom okruženju za hosting.

Unutar Ultimate Multisite-a, tab Products definiše strukturu i ograničenja koja primjenjuju se na određeni proizvod ili uslugu. Takvi elementi se proširuju na opis proizvoda ili usluge, cijenu, poreze i dozvole.

Ovaj dio će vam pomoći da razumijete ovaj ključni temelj Ultimate Multisite-a.

![Products list page](/img/config/products-list.png)

## Dodavanje proizvoda {#adding-products}

Bilo da je plan, paket ili usluga početna točka za definiranje novog stavke putem **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interfejs sadrži dva glavna dijela. Na lijevoj strani su nekoliko tabova koji pomažu pri definiranju proizvoda, a na desnoj strani su nekoliko sekcija za definiranje osnovne cijene proizvoda, njegovog aktivnog stanja i slike proizvoda.

![Product edit page overview](/img/config/product-edit-full.png)

### Opis {#description}

Osnovne informacije o proizvodu mogu se definirati navodeći naziv proizvoda i opis. Ovi identifikatori se prikazuju tamo gdje su potrebni podaci o proizvodu, kao što su odabir plana i cijene, računi, nadogradnje i slično.

![Product description section](/img/config/product-description.png)

### Tip cijene {#pricing-type}

Na desnoj strani interfejsa se može definirati osnovna cijena.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite podržava tri različita tipa cijena. Opcija **paid** (plaćeno) traži od administratora mreže informacije o cijeni proizvoda i frekvenci naplate.

### Cijena {#pricing}

Komponenta cijene definiše osnovnu cijenu proizvoda i interval naplate.

![Cenovnik i odlaganje](/img/config/product-pricing-save.png)

na taj način, primjerice cijena od $29.99 s postavkom od 1 mjeseca će se naplatiti po $29.99 svakog mjeseca. Na sličan način, cijena od $89.97 s postavkom od 3 mjeseca će se naplatiti taj iznos svakog kvartala.

### Ciklus naplate (Billing Cycles) {#billing-cycles}

Odjeljak o ciklusima naplate navodi učestalost navedenog razdoblja naplate i generalno se razumije u kontekstu ugovora ili fiksiranih rokova.

![Cenovnik i odlaganje](/img/config/product-pricing-save.png)

Na primjer, proizvod s cenom od $29.99 i intervalom od 1 mjeseca i 12 ciklusa naplate će se naplatiti po $29.99 mjesečno za taj proizvod tijekom sljedećih 12 mjeseci. Drugim riječima, takva postavka postavlja fiksiran rok cijene od $29.99 mjesečno na 12 mjeseci i zatim prestaje naplata.

### Probni period (Trial Period) {#trial-period}

Omogućavanje prekida za probni period omogućuje administrator mreže da definira probni period za proizvod.

![Cenovnik i odlaganje](/img/config/product-pricing-save.png)

Tijekom probnog razdoblja, kupci slobodni su koristiti proizvod i neće biti naplaćeni dok se probni period ne iscrpi.

### Naknada za postavljanje (Setup Fee) {#setup-fee}

Možete primijeniti naknadu za postavljanje na svoj plan.

![Cenovnik i odlaganje](/img/config/product-pricing-save.png)

To znači da će vaš klijent platiti dodatni iznos pri prvoj naplati (pored cjenovnog plana) koji odgovara naknadi koju ste definirali u ovom dijelu.

### Aktivan (Active) {#active}

Prekida za aktivnost efikasno određuje je li proizvod dostupan kupcima za nove registracije.

![Prekida za aktivnost](/img/config/product-active.png)

Ako postojeći kupci na ovom planu, podešavanje prekidača u stanje "disabled" (onemogućeno) efektivno onemogućuje plan i uklanja ga iz budućih prijava. **Postojeći kupci na planu će nastaviti biti naplaćeni** dok se ne prebace na novi plan ili dok se ne uklone s plana.

### Slika proizvoda {#product-image}

Gumb **Upload Image** (Učitaj sliku) omogućuje administrator mreže da koristi medijsku knplju za odabir ili učitavanje slike proizvoda.

![Product image section](/img/config/product-image.png)

### Obrišanje {#delete}

Gumb **Delete Product** (Obriši proizvod) briše proizvod iz sustava. Pojavi se kada je proizvod objavljen.

![Delete product section](/img/config/product-delete.png)

Za razliku od drugih brisanja, proizvod se ne postavlja u stanje "trash" (smije). Dakle, jednom obrisana akcija je neobratna.

### Opcije proizvoda {#product-options}

Nakon što se definiraju osnovne informacije o proizvodu, opcije proizvoda pomažu administratoru mreže da dodatno definira specifične atribute proizvoda.

#### Opće {#general}

Tab **General** (Opće) definiše opće atribute proizvoda koji se ne primjenjuju na nijednu od drugih tabova specifičnih za proizvod.

![General tab](/img/config/product-general-tab.png)

Objašnjavajući **product slug** (slug proizvoda) definira slug s kojim je proizvod identificiran u URL-ovima i drugim dijelovima Ultimate Multisite.

Ultimate Multisite podržava nekoliko tipova proizvoda: Plan, Package i Service. Tabovi **Product Options** se dinamički prilagođavaju ovisno o tipu proizvoda koji je naveden.

**Customer Role** (Uloga kupca) određuje ulogu kojoj se korisniku dodjeljuje kada se stranica kreira. Tipično za većinu administratora mreže, ovo će biti Ultimate Multisite podrazumijevana ili Administrator. Podrazumijevanu ulogu Ultimate Multisite možete postaviti u **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Napredovanje i povratak (Up & Downgrades) {#up--downgrades}

Ova kartica navodi putanje za napredovanje ili povratak koje su dostupne korisniku unutar njegove specifične razredne (tier) verzije.

Da biste razumjeli ovu koncepciju, zamislite primjer gdje specijalizirana Ultimate Multisite instalacija pruža rješenja za upravljanje učenjem svojim klijentima. Za postizanje ovih tri plana (Basic, Plus i Premium), definiraju se specifični pluginovi aktivirani za svaki plan (za upute o aktivaciji pluginova vidjet ćete kasnije u ovom odjeljku).

Ako Ultimate Multisite instalacija također služi poslovnim web stranicama ili eCommerce web stranicama, ti planovi mogu zahtijevati različite pluginove koji su instalirani i aktivirani.

U tom smislu, nepoželjno bi bilo dozvoliti korisnicima za e-learning prelazak na eCommerce planove jer se ovi planovi, cijene i ograničenja možda neće prikladno odgovarati.

Dakle, kako biste ograničili putanju korisnika i spriječili probleme, mrežni administrator može definirati grupu planova (plan group) i unutar te grupe specifično navesti planove na koje korisnik može prelaziti.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Da biste definirali grupu planova, navedite kompatibilne planove unutar liste **plan group**. **Redoslijed proizvoda** (product order) određuje kako su planovi sortirani i prikazani od najnižeg do najvišeg.

Ultimate Multisite također uključuje značajku **order bump** gdje se prikladna dodatna proizvoda i usluga mogu dodati planovima. Oni se nude korisniku kao dodatni predmeti koje se mogu dodati planovima prilikom plaćanja ili tijekom napredovanja (upgrade).

#### Razlike u cijenama (Price Variations) {#price-variations}

Varijacije cijena omogućuju administratoru mreže da navede različite cjenovne stupnjeve ovisno o trajanju. Ova postavka omogućuje ponudu mjesečnih, kvartalnih, godišnjih ili bilo kojih drugih perioda fakturiranja za isti proizvod. Na primjer, možete postaviti proizvod na 29,99 $ po mjesečnoj pretplati s popustom za godišnju opciju od 249,99 $ godišnje.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Da biste postavili varijacije cijena, uključite prekidač **Enable Price Variations** (Omogućite varijacije cijena) i kliknite na dugme **Add new Price Variation** (Dodaj novu varijaciju cijene).

![Product price variations](/img/config/product-price-variations.png)

Da biste unijeli varijaciju, postavite trajanje, period i cijenu te varijacije. Dodatne varijacije možete unijeti ponovnim klikom na dugme.

Na primjer, ako je vaša osnovna cijena proizvoda 29,99 $ mjesečno, možete dodati:

  * **3 mjeseca** za 79,99 $ (mala popust u odnosu na mjesečnu pretplatu)
  * **1 godina** za 249,99 $ (značajna popust zbog godišnje obveze)

:::tip Prikazivanje prekidača za period fakturiranja na frontend-u

Sam prikaz varijacija cijena ne dodaje prekidač ili prebacivač na frontend pri kolačiću. Da biste omogućili korisnicima da biraju između različitih perioda fakturiranja (npr. Mjesečno / Godišnje), trebate dodati polje **Period Selection** (Odabir perioda) u vašu formular za kolačiće. Pogledajte [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) za uputstva korak po korak.
:::

#### Porezi {#taxes}

Tab **Taxes** (Porez) usklađen je s postavkama poreza navedenim u **Ultimate Multisite > Settings > Taxes** i specifičnije definiranih stope poreza. Za omogućavanje poreza i definiranje primjenjivih stope poreza, pogledajte dokumentaciju na **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

U prethodnom primjeru definirali smo lokalnu stopu poreza od 7,25% koja se primjenjuje na kupce u Kaliforniji (Sjedinjene Američke Države).

Kada je stopa poreza definirana u **Ultimate Multisite > Settings > Manage Tax Rates**, ona postaje biratna na razini proizvoda.

![Taxes tab](/img/config/product-taxes.png)

Da biste ukazali da je proizvod predmet oporezivanja, postavite prekidač **Is Taxable** (Je oporeziv) na aktivno i odaberite primjenu stopu poreza iz padajućeg biranja u Tax Category (Kategorija poreza).

#### Site Templates (Šabloni stranica) {#site-templates}

U suštini, site templates su kompletnih WordPress web stranica koje se kloniraju na stranicu kupca kada počne pretplata.

![Site Templates tab](/img/config/product-site-templates.png)

Administrator mreže kreira i konfigurira šablonu stranicu kao običnu WordPress stranicu s aktivnim i podešenim temama, pluginovima i sadržajem. Šablona stranica se klonira bitno na kupca.

Ova kartica omogućuje administratoru mreže da specificira ponašanje šablona stranica pri novoj pretplati. Da biste koristili site templates za ovaj plan, postavite prekidač **Allow Site Templates** (Dozvoli site šablone) na aktivno stanje.

Kada je **Allow Site Templates** isključen, kupci na ovom planu ne mogu birati šablone čak i ako bi formular za plaćanje, link za dijeljenje ili URL parametar inače učinili šablone dostupnim. Ultimate Multisite sada primjenjuje ovaj limit putem lančane zamjene (fallback chain) kroz sve dostupne točke ulaska: prvo se provjeravaju postavke plana, zatim postavke šablona u formularu za plaćanje, a na kraju predodabrani ili URL-om navedeni šabloni. Ovo održava limite plana konzistentnim i sprečava pojavljivanje šablona za proizvode koji im to ne treba.

**site template selection mode** (režim odabira site šablone) definiše ponašanje šablona stranica tijekom procesa pretplate.

Podrazumevano podešaj slijedi koracima u obrascu za plaćanje (checkout form). Ako je administrator mreže definirao korak od izbora šablona u procesu plaćanja i taj korak je definiran s šablonima, ova postavka će poštovati direktive utvrđene u koraku plaćanja.

Navodite **Podešavanje šablona sajta** prisiljava izbor navedenog šablona. Posljedica toga je da se svi koraci izbora šablona u procesu plaćanja uklanjaju.

Na kraju, **Izaberite dostupne šablone sajta** nadmašuje šablone navedene u koraku plaćanja šabloni koji su odabrani u ovoj postavci. Također se može definirati unaprijed odabrani šablon kako bi korisniku olakšao izbor.

U konačnici, ako administrator mreže želi da se izbor šablona dogodi u koracima plaćanja, dovoljno je postaviti ' _default_ '. Alternativno, za uklanjanje i zaključavanje izbora šablona te delegiranje izbora postavkama plana, opcije ' _assign new template_ ' ili ' _choose available site templates_ ' mogu biti poželjne.

#### Sajti (Sites) {#sites}

Tab **Sajti** je dio funkcionalnosti ograničenja Ultimate Multisite-a.

![Sites tab](/img/config/product-sites.png)

Ova postavka određuje maksimalan broj sajta koje korisnik može kreirati pod svojim članstvom.

Da biste omogućili ograničenje, postavite prekidač **limit sites** na aktivno stanje i navedite maksimalan broj sajta u polju **site allowance**.

#### Posjeti (Visits) {#visits}

Tab **Posjeti** je dio sustava ograničenja Ultimate Multisite-a. Ova postavka omogućuje praćenje i naknadno smanjivanje broja jedinstvenih posjetitelja na korisovom sajtu.

![Visits tab](/img/config/product-visits.png)

Iz marketing perspektive, administratori mreže mogu koristiti ovu postavku kao način da potiču korisnike da nadogradjuju svoj plan kada se dođu granice. Ova postavka takođe može pomoći administratoru mreže da ograniči i spreči prekomerni promet na sajtove kako bi se očuvali sistemske resurse.

Da biste koristili ovu značajku, postavite prekidač **limit unique visits** u aktivno stanje i navedite maksimalan broj jedinstvenih posetilaca u polju **unique visits quota**.

Kada se ovaj limit dosegne, Ultimate Multisite više neće služenje sajta korisnika, već će prikazati poruku koja ukazuje da su granice pređene.

#### Korisnici {#users}

Ograničenja 'Users' (Korisnici) u Ultimate Multisite omogućavaju administratoru mreže da postavi granice na broj korisnika koji se mogu kreirati i dodeliti uloge.

![Users tab](/img/config/product-users.png)

Da biste omogućili značajku ograničenja, postavite prekidač **limit user** u aktivno stanje prevucanjem desno.

Za svaku ulogu koja će biti ograničena, postavite prekidač pored nje u aktivno stanje i definišite maksimalnu gornju granicu u odgovarajućem polju.

#### Post-tipovi (Post Types) {#post-types}

Tab **Post Types** omogućava administratoru mreže da postavi detaljne granice na širok spektar post-tipova unutar WordPressa.

![Post Types tab](/img/config/product-post-types.png)

Zbog načina na koji je WordPress izgrađen, postovi i post-tipovi su značajan deo njegove osnovne funkcionalnosti, a sistem ograničenja Ultimate Multisite je dizajniran da pomogne administratoru mreže u uspostavljanju i održavanju granica.

Da biste omogućili ovaj pod-sistem ograničenja, postavite prekidač **limit post types** u aktivno stanje prevucanjem desno.

Slijede, za svaki tip postova koji želite ograničiti, uključite ga tako da se preklizne u desnu stranu i navedite maksimalnu gornju granicu u odgovarajućem polju.

#### Disk prostor {#disk-space}

Tab **Disk Space** omogućuje administraciji mreže da ograniči prostor koji potrošavaju kupci.

![Disk Space tab](/img/config/product-disk-space.png)

Obično, u WordPress multisite, jezgro datoteka je zajedničko svim stranicama, a individualne direktorije za medijske datoteke i uploadove na koje se primjenjuju ove postavke i ograničenja su kreirane zasebno.

Da biste omogućili ograničenje korištenja diska, postavite prekidač **limit disk veličine po stranici** u aktivno stanje preklizanjem u desnu stranu.

Zatim, navedite maksimalnu gornju granicu u megabajtima u polju **disk space allowance**.

#### Prilagođeni domena {#custom-domain}

Prebacivanjem ove opcije možete dozvoliti prilagođene domene isključivo na ovom planu.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Temi {#themes}

Tab **Themes** unutar opcija proizvoda omogućuje administraciji mreže da učini teme dostupnim kupcima za odabir i opcionalno prisilično postavi stanje teme.

![Themes tab](/img/config/product-themes.png)

_**Napomena: Da bi se teme postale dostupne kupcima, moraju biti omogućene u mreži od strane administracije mreže.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Opcija **visibility** (vidljivost) određuje da li je ova tema vidljiva kupcu kada pregleda tabu **Appearance > Themes** na svojoj stranici. Postavka ove opcije na **Hidden** (Sakriven) uklanja temu s vidljivosti i time ograničava mogućnost odabira i aktiviranja te teme.

![Themes tab](/img/config/product-themes.png)

Odabir **behavior** (ponašanje) omogućuje administraciji mreže da definiše stanje teme pri kreiranju stranice kupca.

U **Dostupnom** stanju tema je dostupan kupcu za samostalnu aktivaciju. Suprotno tome, u stanju **Nema dostupno** uklanja se od kupca mogućnost aktiviranja teme. Na kraju, opcija **Forci Aktiviraj** prisiljava izbor i aktivaciju teme, postavljajući je kao podrazmjenu prilikom kreiranja sajta.

#### Pluginovi {#plugins}

Slično kartici za Teme, Ultimate Multisite omogućuje administratoru mreže da definiše vidljivost pluginova kupcima te njihov status pri kreiranju novog sajta.

![Plugins tab](/img/config/product-plugins.png)

Padni meni **vidljivosti** omogućuje da se dodatak bude vidljiv ili skriven kupcu kada ga pregleda na svom sajtu putem opcije u meniju Pluginovi.

Administrator mreže može dodatno manipulirati ponašanjem pluginova koristeći opcije u padnom meniju ponašanja (behavior drop-down).

![Plugins tab](/img/config/product-plugins.png)

Odabir **Podrazmjena** poštuje stanje pluginova definisano u šablonu sajta koju je kupac odabrao. Dakle, pluginovi koji su aktivirani unutar šablona ostaju aktivirani kada se taj šablon klonira na sajtu kupca.

**Forci Aktiviraj** postavlja plugin u aktivno stanje pri kreiranju sajta, a **Forci Deaktiviraj** deaktivira plugin pri kreiranju sajta. U oba ova slučaja, status pluginova može kupac ručno promeniti putem menija Pluginovi na WordPressu.

Podešava postavka **Force Activate & Lock** na sličan način, ali sprečava korisnika da promijeni stanje dodatka. Dakle, postavljanjem opcije Force Activate i Lock prisiljavate dodatak u aktivno stanje i onemogućavate korisniku da ga deaktivira. Na isti način, postavka **Force Inactivate & Lock** prisiljava dodatak u neaktivno stanje i sprečava korisnika da ga aktivira.

Administrator mreže može razmotriti postavke Force Activate & Lock i Force Inactivate & Lock u kombinaciji s predlošcima stranica (site templates) kao dodatke, jer se stanja dodataka unutar predložaka mogu utjecati ovisno o tome koje su ove postavke odabrane.

#### Ograničenja resetiranja {#reset-limitations}

Tab **Reset Limitations** vraća sve prilagođene granice definirane na proizvodu u početno stanje. Da biste resetirali ograničenja, kliknite na dugme **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Da biste potvrdili rad, prebacite prekidač **confirm reset** u aktivno stanje sa desne strane i kliknite na dugme **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Urediti, duplirati ili obrisati proizvod {#edit-duplicate-or-delete-product}

Postojeći proizvode možete urediti, duplirati ili obrisati navigirajući do **Ultimate Multisite > Products** i prelazivanjem mišem preko imena postojećeg proizvoda.

![Product hover actions](/img/config/product-hover-actions.png)
