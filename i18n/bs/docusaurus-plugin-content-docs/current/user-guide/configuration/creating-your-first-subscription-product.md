---
title: Kreiranje vašeg prvog pretplatničkog proizvoda
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Kreiranje vašeg prvog proizvoda pretplate (v2)

_**VAŽNA NAPOMENA: Ovaj članak je samo za korisnike Ultimate Multisite verzije 2.x. Ako koristite verziju 1.x,**_ **_**pogledajte ovaj članak**_**.

Da biste pokrenuli svoju mrežu i počeli prodavati svoje usluge potencijalnim korisnicima, morate imati različite opcije pretplate. Kako kreirati ove proizvode? Koje vrste proizvoda možete ponuditi? U ovom članku, pokrićemo sve što trebate znati o proizvodima.

## Vrsta proizvoda

Sa Ultimate Multisite-om možete ponuditi dvije kategorije proizvoda svojim klijentima: **planove** i **dodatke (Add-ons) (Order Bump)**. Dodatke se mogu podijeliti u dvije vrste: **pakete** i **usluge**. Razlike i specifičnosti ćemo pogledati u sljedećem dijelu.

*   **Planovi (Plans)**: Osnovni proizvod Ultimate Multisite-a. Vaš klijent može imati članstvo samo ako je vezano uz plan. Plan klijentima pruža jedan ili više sajtova (ovisno o konfiguraciji vašeg plana) sa ograničenjima koja ste postavili na stranici uređivanja proizvoda.

*   **Paketi (Packages)**: Dodaci koji direktno utječu na funkcionalnosti planova Ultimate Multisite-a. Oni mijenjaju ograničenja ili dodaju nove resurse, pluginove ili teme originalnom planu koji je vaš klijent kupio. Na primjer, osnovni plan može dopustiti 1.000 posjeta mjesečno, a vi možete ponuditi paket koji taj broj povećava na 10.000.

*   **Usluge (Services):** Dodaci koji ne mijenjaju funkcionalnosti Ultimate Multisite-a. To su zadaci koje ćete realizirati za svog klijenta, pored plana koji je kupio. Na primjer, vaš klijent može kupiti plan koji dopušta jedan sajt, a istovremeno platiti za dodatnu uslugu koja će dizajnirati taj sajt.

## Upravljanje proizvodima

Za mnoge, kartica **Proizvodi (Products)** u Ultimate Multisite-u (**Ultimate Multisite > Products**) može se ekvivalentirati planovima u tradicionalnom hosting okruženju.

Unutar Ultimate Multisite-a, kartica Proizvodi definiše strukturu i ograničenja primjenjiva na određeni proizvod ili uslugu. Takve strukture se protežu na opis proizvoda ili usluge, cijenu, poreze i dozvole.

Ovaj dio će vam pomoći da razumijete ovaj esencijalni temelj Ultimate Multisite-a.

![Products list page](/img/config/products-list.png)

## Dodavanje proizvoda

Bilo da je riječ o planu, paketu ili usluzi, ulazna točka za definisanje novog artikla je putem **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interfejs sadrži dva glavna dijela. S lijeve strane nalaze se nekoliko kartica koje pomažu u definisanju proizvoda, a s desne strane nekoliko sekcija za definisanje osnovne cijene proizvoda, njegovog aktivnog stanja i slike proizvoda.

![Product edit page overview](/img/config/product-edit-full.png)

### Opis (Description)

Osnovne informacije o proizvodu mogu se definisati navođenjem naziva i opisa proizvoda. Ovi identifikatori se prikazuju gdje god je potreban proizvodni sadržaj, kao što su odabir plana i cijena, fakture, nadogradnje i slično.

![Product description section](/img/config/product-description.png)

### Vrsta cijene (Pricing Type)

S desne strane interfejsa, može se definisati osnovna cijena.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite podržava tri različite vrste cijena. Opcija **plaćeno (paid)** traži od administratora mreže informacije o cijeni proizvoda i učestalosti naplate.

### Cijena (Pricing)

Komponenta cijene definiše osnovnu cijenu proizvoda i interval naplate.

![Pricing and save section](/img/config/product-pricing-save.png)

Dakle, primjer cijene od 29,99 $ sa podešavanjem od 1 mjesec naplaćivat će 29,99 $ svaki mjesec. Slično tome, cijena od 89,97 $ sa podešavanjem od 3 mjeseca naplaćivat će taj iznos svakog kvartala.

### Ciklusi naplate (Billing Cycles)

Sekcija ciklusa naplate određuje učestalost navedenog intervala naplate i generalno se razumije u kontekstu ugovora ili fiksnih članaka.

![Pricing and save section](/img/config/product-pricing-save.png)

Na primjer, proizvodna cijena od 29,99 $ sa intervalom od 1 mjesec i 12 ciklusa naplate naplaćivat će 29,99 $ mjesečno za proizvod tokom sljedećih 12 mjeseci. Drugim riječima, takvo podešavanje uspostavlja fiksni period od 29,99 $ mjesečno za 12 mjeseci, a zatim prestaje naplata.

### Period probnog korištenja (Trial Period)

Omogućavanje prekidača **Trial Period** dozvoljava administratoru mreže da definira period probnog korištenja za proizvod.

![Pricing and save section](/img/config/product-pricing-save.png)

Tokom perioda probnog korištenja, klijenti su slobodni da koriste proizvod i neće biti naplaćeni dok se period probnog korištenja ne potroši.

### Naknada za postavljanje (Setup Fee)

Takođe možete primijeniti naknadu za postavljanje na svoj plan.

![Pricing and save section](/img/config/product-pricing-save.png)

To znači da će vaš klijent platiti dodatni iznos prilikom prve naplate (pored cijene plana) koji odgovara naknadi koju ste definisali u ovoj sekciji.

### Aktivno (Active)

Prekidač **Active** efektivno definiše da li je proizvod dostupan klijentima za nove prijave.

![Active toggle](/img/config/product-active.png)

Ako postoje postojeći klijenti na ovom planu, postavljanje prekidača u neaktivno stanje efektivno "grandfatheruje" plan, uklanjajući ga iz budućih prijava. **Postojeći klijenti na planu će nastaviti biti naplaćeni** dok ne budu prebačeni na novi plan ili uklonjeni sa plana.

### Slika proizvoda (Product Image)

Dugme **Upload Image** omogućava administratoru mreže da koristi medijalistiku za odabir ili učitavanje slike proizvoda.

![Product image section](/img/config/product-image.png)

### Brisanje (Delete)

Dugme **Delete Product** briše proizvod iz sistema. Pojavljuje se tek nakon što je proizvod objavljen.

![Delete product section](/img/config/product-delete.png)

Za razliku od drugih brisanja, proizvod se ne stavlja u nikakvo kante za smeće stanje. Stoga, nakon brisanja, akcija je neopoziva.

### Opcije proizvoda (Product Options)

Nakon što se definisuju osnovne informacije o proizvodu, opcije proizvoda pomažu administratoru mreže da dalje definiše specifične atribute proizvoda.

#### Opšte (General)

Kartica **General** definiše opšte atribute proizvoda koji nisu primjenjivi na nijednu od drugih kartica specifičnih za proizvod.

![General tab](/img/config/product-general-tab.png)

Samoznačajan **slug proizvoda (product slug)** definiše slug s kojim je proizvod identifikovan u URL-ovima i drugim područjima Ultimate Multisite-a.

Ultimate Multisite podržava nekoliko tipova proizvoda, a to su Plan, Paket i Usluga. Kartice **Product Options** dinamički se prilagođavaju ovisno o tipu proizvoda koji je navedeno.

**Uloga klijenta (Customer Role)** određuje ulogu koju klijentu dodjeljuje se kada se sajt kreira. Tipično za većinu administratora mreže, ovo će biti podrazumevana uloga Ultimate Multisite ili Administrator. Podrazumevana uloga Ultimate Multisite može se postaviti na **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Nadogradnje i degradacije (Up & Downgrades)

Ova kartica određuje puteve nadogradnje i degradacije dostupne klijentu unutar njegovog specifičnog nivoa.

Da biste razumjeli ovaj koncept, razmislite o primjeru gdje niche Ultimate Multisite instalacija pruža rješenja za upravljanje učenjem svojim klijentima. Da bi se to postiglo, definirani su tri plana (Osnovni, Plus i Premium) i aktivirani su specifični pluginovi za svaki plan (pogledajte kasnije u ovom dijelu za uputstva o tome kako aktivirati pluginove).

Ako Ultimate Multisite instalacija također služi poslovne sajtove ili e-commerce sajtove, ti planovi mogu zahtijevati instaliranje i aktiviranje različitih pluginova.

U tom smislu, bilo bi nepoželjno i problematično dozvoliti klijentima za e-učenje da pređu na e-commerce planove, jer ti planovi, cijene i ograničenja možda neće biti odgovarajući.

Stoga, da bi se ograničio put klijenta i spriječili incidenti, administrator mreže može definisati grupu planova i unutar te grupe navesti planove na koje klijent može preći.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Da biste definisali grupu planova, navedite kompatibilne planove u listi **plan group**. **Redoslijed proizvoda (product order)** određuje kako su planovi sortirani i prikazani od najnižeg do najvišeg.

Ultimate Multisite takođe uključuje funkciju **order bump** gdje se odgovarajući dodatni proizvodi i usluge mogu dodati planovima. Oni se nude klijentu kao dodatni artikli koji se mogu dodati planovima prilikom naplate ili tokom nadogradnje.

#### Varijacije cijena (Price Variations)

Varijacije cijena omogućavaju administratoru mreže da navede alternativne nivoe cijena ovisno o trajanju. Ovo podešavanje omogućava da se za isti proizvod ponudi mjesečni, kvartalni, godišnji ili bilo koji drugi period naplate. Na primjer, možete postaviti proizvod na 29,99 $/mjesečno sa popustnom godišnjom opcijom od 249,99 $/godinu.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Da biste uspostavili varijacije cijena, postavite prekidač **Enable Price Variations** na aktivno i kliknite na dugme **Add new Price Variation**.

![Product price variations](/img/config/product-price-variations.png)

Da biste unijeli varijaciju, postavite trajanje, period i cijenu varijacije. Dodatne varijacije možete unijeti ponovnim klikom na dugme.

Na primjer, ako je vaša osnovna proizvodna cijena 29,99 $ mjesečno, mogli biste dodati:

*   **3 mjeseca** po 79,99 $ (mali popust u odnosu na mjesečno)
*   **1 godina** po 249,99 $ (značajan popust za godišnju obvezu)

:::tip Prikazivanje prekidača perioda naplate na frontendu

Samo varijacije cijena ne dodaju prekidač niti preklopnik na frontend naplati. Da biste klijentima omogućili prebacivanje između perioda naplate (npr. od meseca), potrebno je da imate na raspolaganju.

### ⚙️ Kako koristiti ovo znanje?

Ovo je detaljan vodič za administraciju i prodaju usluga. Da biste ga koristili, morate znati:

1.  **Šta je cilj?** (Da li je cilj prodaja usluga, administracija, ili marketing?)
2.  **Koja je publika?** (Da li je publika tehnička, ili je to za krajnjeg korisnika?)
3.  **Koja je platforma?** (Da li je ovo za WordPress, WooCommerce, ili neki drugi sistem?)

**Ako mi kažete više o cilju i platformi, mogu vam pomoći da ga strukturirate u konkretan korak-po-korak vodič ili da ga prilagodim za specifičnu potrebu.**
