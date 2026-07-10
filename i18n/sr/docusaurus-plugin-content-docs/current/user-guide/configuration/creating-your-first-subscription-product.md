---
title: Kreiranje Prve Abonentske Proizvodne Linije
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Kreiranje Prvog Pretplate Proizvoda (v2) {#creating-your-first-subscription-product-v2}

_**VAŽNA NAPOMENA: Ovaj članak je namenjen korisnicima Ultimate Multisite verzije 2.x. Ako koristite verziju 1.x,**_ **_pročitajte ovaj članak**_**.

Da biste počeli da pokrenete svoju mrežu i počnete da prodajete svoje usluge potencijalnim korisnicima, potrebno je imati različite opcije pretplate. Kako kreirate ove proizvode? Kakve vrste proizvoda možete ponuditi? U ovom članku ćemo pokriti sve što vam treba o proizvodima.

## Vrste Proizvoda {#product-type}

Sa Ultimate Multisite možete ponuditi dve kategorije proizvoda svojim klijentima: **plane** i **dodatne opcije (Order Bump)**. Dodatne opcije se mogu podeliti u dve vrste: **pakete** i **usluge**. Razlika između njih i specifičnosti ćemo videti sledeće.

  * **Plani**: osnovni proizvod Ultimate Multisite-a. Vaš klijent može imati članstvo samo ako je vezano za plan. Plan pruža vašim klijentima jedan ili više sajtova (zavisi od konfiguracije vašeg plana) sa ograničenjima koje postavljate na stranici za uređivanje proizvoda.

  * **Paketi**: dodatne opcije koje direktno utiču na funkcionalnosti Ultimate Multisite planova. One menjaju ograničenja ili dodaju nove resurse, pluginove ili teme originalnom planu koji je vaš klijent kupio. Na primer, osnovni plan može dozvoliti 1000 poseta mesečno, a vi možete ponuditi paket koji produžuje to broj na 10.000.

  * **Usluge**: dodatne opcije koje ne menjaju funkcionalnosti Ultimate Multisite-a. To su zadaci koje ćete obaviti za vašeg klijenta pored plana koji je kupio. Na primer, vaš kupac može kupiti plan koji dozvoljava jedan sajt i istovremeno platiti dodatnu uslugu koja će dizajnirati taj sajt.

## Upravljanje Proizvodima {#managing-products}

Za mnoge korisnike, kartica **Products** u Ultimate Multisite-u (**Ultimate Multisite > Products**) može se porediti sa planovima u tradicionalnom okruženju za hosting.

Unutar Ultimate Multisite-a, kartica Products definiše strukturu i ograničenja koja su primenjena na određeni proizvod ili uslugu. Takvi elementi sežu do opisa proizvoda ili usluge, cene, poreza i dozvola.

Ovaj deo će vam pomoći da razumete ovaj ključni element Ultimate Multisite-a.

![Products list page](/img/config/products-list.png)

## Dodavanje proizvoda {#adding-products}

Bilo da je plan, paket ili usluga početna tačka za definisanje novog stavke putem **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interfejs sadrži dve glavne sekcije. Na levoj strani su nekoliko tabova koji pomažu u definisanju proizvoda, a na desnoj strani su nekoliko sekcija za definisanje osnovne cene proizvoda, njegovog aktivnog stanja i slike proizvoda.

![Product edit page overview](/img/config/product-edit-full.png)

### Opis {#description}

Osnovne informacije o proizvodu mogu se definisati navodom imena proizvoda i opisa. Ovi identifikatori se prikazuju tamo gde su potrebne informacije o proizvodu, kao što su izbor plana i cene, fakture, nadogradnje i slično.

![Product description section](/img/config/product-description.png)

### Tip cena {#pricing-type}

Na desnoj strani interfejsa može se definisati osnovna cena.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite podržava tri različita tipove cena. Opcija **paid** (plaćeno) traži administrator mreže za informacije o ceni proizvoda i frekvenciji fakturisanja.

### Cena {#pricing}

Komponenta cene definiše osnovnu cenu proizvoda i interval fakturisanja.

![Sekcija za cene i sprečavanje](/img/config/product-pricing-save.png)

na taj način, primer cena od 29,99 dolara sa podešavanjem od 1 mesec će se naplatiti po 29,99 dolara svakog meseca. Na sličan način, cena od 89,97 dolara sa podešavanjem od 3 meseca će se naplatiti u kvartu po toj sumi.

### Ciklus fakturisanja (Billing Cycles) {#billing-cycles}

Sekcija za ciklus fakturisanja definiše učestalost navedenog vremenskog intervala i generalno se razume u svetlu ugovora ili fiksiranih rokova.

![Sekcija za cene i sprečavanje](/img/config/product-pricing-save.png)

Na primer, cena proizvoda od 29,99 dolara sa intervalom od 1 mesec i 12 faktura će se naplatiti po 29,99 dolara mesečno za proizvod tokom sledećih 12 meseci. Drugim rečima, takvo podešavanje uspostavlja fiksiran rok cena od 29,99 dolara mesečno na 12 meseci i zatim prestaje fakturisanje.

### Probni period (Trial Period) {#trial-period}

Omogućavanje prekida za probni period omogućava administratori mreže da definišu probni period za proizvod.

![Sekcija za cene i sprečavanje](/img/config/product-pricing-save.png)

Tokom probnog perioda, kupci slobodno mogu koristiti proizvod i neće biti naplaćeni dok se probni period ne iscrpi.

### Naknada za podešavanje (Setup Fee) {#setup-fee}

Možete primeniti naknadu za podešavanje na vaš plan.

![Sekcija za cene i sprečavanje](/img/config/product-pricing-save.png)

To znači da će vaš klijent platiti dodatnu sumu pri prvoj naplati (pored plana cena) koja odgovara naknadi koju ste definisali u ovoj sekciji.

### Aktivo (Active) {#active}

Prekidač za aktivno efektivno definiše da li je proizvod dostupan kupcima za nove prijave.

![Prekidač za aktivno](/img/config/product-active.png)

Ако постоје већ постоје купци на овом плану, прекидање (toggle) у неактивни (disabled) стават ефикасно чини да се план "убава" (grandfathering), уклањајући га из будућих регистрација. **Већ постоје купци на плану ће наставити да им се начинали фактуре** док се не пребацују на нови план или не буду уклаћени са плана.

### Слика проProduce (Product Image) {#product-image}

Дугме **Upload Image** омогућава мрежно администратору да користи медијску библиотеку за избор или унапређење слике продукта.

![Секција слика продукта](/img/config/product-image.png)

### Делешене (Delete) {#delete}

Дугме **Delete Product** брише проProduce из система. Појављује се када је проProduce објављена.

![Секција делешене продукта](/img/config/product-delete.png)

За разлику од других делеши, проProduce није постављена у дубоко (trash) стање. Стога, једном удаљена акција је нереверсибилна.

### Опције ПроProduce (Product Options) {#product-options}

Након што се дефинише бајзов ниво информација о продукту, опције продукта помажу мрежно администратору да детаљније дефинише специфичне атрибуте проProduce.

#### Општи (General) {#general}

Таб **General** дефинише општи атрибуте проProduce који се не односе ни на било који од других табо везаних за конкретни производ.

![Општи таб](/img/config/product-general-tab.png)

Самообјасни **product slug** дефинише слаг којим је проProduce идентификована у URL-овима и другим деловима Ultimate Multisite.

Ultimate Multisite подржава неколико типова проProduce, а су то План (Plan), Пакети (Package) и Услуге (Service). Табо **Product Options** се динамички прилагођавају у зависности од типа проProduce који је задан.

Поље **Customer Role** дефинише улогу која се приде купцу када се сајт креира. Обично за већину мрежних администратора, то ће бити подразмерен (default) Ultimate Multisite или Administrator. Подразмерен улога Ultimate Multisite може бити подешена у **Ultimate Multisite > Settings > Login & Registration**.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Апгрејде и понижавање (Up & Downgrades) {#up--downgrades}

Ова таб описује путеве апгрејда и понижавања које су доступни корисницима у својој специфичној ниводи.

Да бисте разумели ову концепцију, размислите на пример где је нише инсталација Ultimate Multisite пружа солуције за управљање учењем (LMS) својим клијентима. За достизање овог три плана (Базисан, Плус и Премијум), дефинисана су специфична планима и активирани су специфични плагини за сваки план (више детаља о начину активације плагина можете пронаћи у камату секцији).

Ако Ultimate Multisite инсталација услужује и бизнис веб-сајтове или е-комерц сајтове, ови планира могу захтевати различите плагине за инсталацију и активацију.

У таквом случају, нежелателно би било дозволити ученицима из eLearning-а да прелазе на е-комерц планове јер ови планини, цени и ограничења можда нису одговарају.

Међутим, како бисмо могли да ограничим путак корисника и спречимо незгодности, мрежни администратор може дефинисати групу планима и унутар те групе специфицирати планове на које корисник може прелазити.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Да бисте дефинисали групу планима, специфицирајте компатибиларне планове у листи **plan group**. **Product order** (редослед производа) одређује како су планине редоследно упоређене и приказивају се од најниже до највише.

Ultimate Multisite такође укључује функцију **order bump** (апгрејд по поруџбину), где могу бити додани додатни производи и услуге на планине. Ово се нуди клијенту као додатни чланови који се могу додати планима приликом плаћања или током апгрејда.

#### Промене цене (Price Variations) {#price-variations}

Varijacije cena omogućavaju administratoru mreže da definiše alternativne nivoe cena zavisno od trajanja. Ova postavka omogućava ponudu mesečnih, kvartalnih, godišnjih ili bilo kog drugog perioda fakturisanja za isti proizvod. Na primer, možete postaviti proizvod na 29,99$ mesečno sa popustom za godišnju opciju od 249,99$ godišnje.

![Tab Varijacije cena](/img/config/product-price-variations-tab.png)

Da biste postavili varijacije cena, uključite prekidač **Enable Price Variations** (Omogućavanje varijacija cena) i kliknite na dugme **Add new Price Variation** (Dodaj novu varijacu cene).

![Varijacije cene proizvoda](/img/config/product-price-variations.png)

Da biste unetili varijaciju, postavite trajanje, period i cenu te varijacije. Dodatne varijacije možete uneti ponovnim klikom na dugme.

Na primer, ako je vaša osnovna cena proizvoda 29,99$ mesečno, možete dodati:

  * **3 Meseca** za 79,99$ (mala popusta u odnosu na mesečnu cenu)
  * **1 Godina** za 249,99$ (značajna popusta zbog godišnje obaveze)

:::tip Prikazivanje prekidača za period fakturisanja na frontend-u

Samo varijacije cena ne dodaju prekidač ili prebacivač na frontend čekaoca. Da biste omogućili kupcima da biraju između perioda fakturisanja (npr. Mesečno / Godišnje), potrebno je dodati polje **Period Selection** (Odabir perioda) u vašu formular za prodatu. Pogledajte [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle) za korak-po-korak uputstva.
:::

#### Porezi {#taxes}

Tab **Taxes** (Porez) odgovara podešavanjima poreza definisanim u **Ultimate Multisite > Settings > Taxes** i specifičnije, definisanim stopama poreza. Da biste omogućili poreze i definisali primenljive stope poreza, pogledajte dokumentaciju na **Ultimate Multisite: Settings**.

![Tab Porezi](/img/config/product-taxes.png)

U prethodnom primeru definisali smo lokalnu stopu poreza od 7,25% koja se primenjuje kupcima u Kaliforniji (Sjedinjene Američke Države).

Kada je stopa poreza definisana u **Ultimate Multisite > Settings > Manage Tax Rates**, ona postaje izabrana na nivou proizvoda.

![Taxes tab](/img/config/product-taxes.png)

Da biste ukazali da je proizvod predmet oporezivanja, postavite prekidač **Is Taxable** (Je oporeziv) na aktivno i izaberite primenjivu stopu poreza iz padajućeg menija Tax Category (Kategorije poreza).

#### Site Templates (Šabloni sajtova) {#site-templates}

U suštini, site šabloni su kompletan WordPress sajtovi koji se kopiraju na sajt kupca kada počne pretplatu.

![Site Templates tab](/img/config/product-site-templates.png)

Mreža administrator kreira i konfigurira šablon sajt kao običan WordPress sajt sa aktivnim i podešenim temama, pluginovima i sadržajem. Šablon sajt se kopira doslovno na kupca.

Ova kartica omogućava mreža administratoru da definiše ponašanje site šablona pri novoj pretplati. Da biste koristili site šablone za ovaj plan, postavite prekidač **Allow Site Templates** (Dozvoli site šablone) u aktivno stanje.

Kada je **Allow Site Templates** isključen, kupci na ovom planu ne mogu da izaberu šablone čak i ako bi formular za plaćanje, link koji se može deliti ili URL parametar inače omogućili dostupnost šablona. Ultimate Multisite sada ovim ograničenjem upravlja kroz lanac rezervnog mehanizma (fallback chain) preko svih dostupnih tačaka ulaska: prvo se proveravaju podešavanja plana, zatim podešavanja šablona u formularu za plaćanje, a na kraju predodabrani ili URL-om navedeni šabloni. Ovo održava granice plana konzistentnim i sprečava pojavljivanje šablona za proizvode koji im ne treba.

**site template selection mode** (režim odabira site šablona) definiše ponašanje site šablona tokom procesa pretplate.

Podrazumevano podešava postavka sledi koracima u obrascu za plaćanje (checkout form). Ako je administrator mreže definisao korak izbora šablona u procesu plaćanja i taj korak je definisan sa šablonima, ova postavka će poštovati direktive postavljene u koraku plaćanja.

Navođenje **Pristupite šablon sajta (Assign Site Template)** prisiljava izbor specifičnog šablona. Kao posledicu, svi koraci izbora šablona u procesu plaćanja se uklanjaju.

Na kraju, **Izaberite dostupne šablone sajtova (Choose Available Site Templates)** prebacuje šablone definisane u koraku plaćanja na one koji su odabrani u ovoj postavci. Takođe se može definisati unapred odabrani šablon kako bi korisniku pomoglo u izboru.

U konačnici, ako administrator mreže želi da izbor šablona bude deo koraka plaćanja, postepka ' _default_ ' je dovoljan. Alternativno, da biste uklonili i zaključali izbor šablona te delegirali izbor podešavanjima plana, mogu biti korisne opcije ' _assign new template_ ' ili ' _choose available site templates_ '.

#### Sajtovi (Sites) {#sites}

Tab **Sajtovi** je deo funkcionalnosti ograničenja Ultimate Multisite-a.

![Sites tab](/img/config/product-sites.png)

Ova postavka određuje maksimalan broj sajtova koje korisnik može kreirati u okviru svog članstva.

Da biste omogućili ovo ograničenje, postavite prekidač **limit sites** na aktivno stanje i navedite maksimalan broj sajtova u polju **site allowance**.

#### Poseti (Visits) {#visits}

Tab **Poseti** je još jedan deo sistema ograničenja Ultimate Multisite-a. Ova postavka omogućava praćenje i naknadno ograničavanje jedinstvenih posetilaca na sajtu korisnika.

![Visits tab](/img/config/product-visits.png)

Iz perspektive marketinga i mreže, administratori mogu koristiti ovu opciju kao način da podstaknu korisnike da nadgrade svoj plan kada se dođu granice. Ova opcija takođe može pomoći administratoru mreže da ograniči i spreči preveliku količinu saobraćaja na sajtove kako bi se očuvali sistemski resursi.

Da biste koristili ovu funkciju, postavite prekidač **limit unique visits** u aktivno stanje i navedite maksimalan broj jedinstvenih posetilaca u polju **unique visits quota**.

Čim se dosegne taj limit, Ultimate Multisite više neće služenje sajta korisnika, već će prikazati poruku koja ukazuje da su granice pređene.

#### Korisnici {#users}

Ograničenja 'Users' (Korisnici) u Ultimate Multisite omogućavaju administratoru mreže da postavi granice na broj korisnika koji se mogu kreirati i dodeliti rolama.

![Users tab](/img/config/product-users.png)

Da biste omogućili funkciju ograničenja, postavite prekidač **limit user** u aktivno stanje pomeranjem desno.

Za svaki rol koji želite da ograničite, postavite prekidač pored njega u aktivno stanje i definišite maksimalnu gornju granicu u odgovarajućem polju.

#### Tipovi postova (Post Types) {#post-types}

Tab **Post Types** (Tipovi postova) omogućava administratoru mreže da postavi detaljne granice na širok niz tipova postova unutar WordPress-a.

![Post Types tab](/img/config/product-post-types.png)

Zbog načina na koji je WordPress konstruisan, postovi i tipovi postova su značajan deo njegove osnovne funkcionalnosti, a sistem ograničenja Ultimate Multisite je dizajniran da pomogne administratoru mreže u postavljanju i održavanju tih granica.

Da biste omogućili ovaj pod-sistem ograničenja, postavite prekidač **limit post types** u aktivno stanje pomeranjem desno.

Sledeći, za svaki tip posta koji želite ograničiti, uključite ga tako što ćete ga pomeriti u desnu stranu i navedite maksimalan gornji limit u odgovarajućem polju.

#### Disk prostor {#disk-space}

Tab **Disk Space** omogućava administratorima mreže da ograniče prostor koji zauzimaju klijenti.

![Disk Space tab](/img/config/product-disk-space.png)

Obično, u WordPress multisite, jezgro fajlova se deli među svim sajtovima, a pojedinačne direktorijumi kreirani za medijske fajlove i otpuštanja (uploads) podliježu ovim podešavanjima i ograničenjima.

Da biste omogućili ograničenje korišćenja diska, postavite prekidač **limit disk veličine po sajtu** u aktivno stanje pomeranjem u desnu stranu.

Zatim, navedite maksimalan gornji limit u megabajtima u polju **disk space allowance**.

#### Privatni domen (Custom Domain) {#custom-domain}

Prekidač ovom opcijom vam omogućava da dozvolite privatne domene isključivo na ovom planu.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Teme {#themes}

Tab **Themes** unutar opcija proizvoda omogućava administratorima mreže da teme učine dostupnim klijentima za izbor i opciono da prisile stanje teme.

![Themes tab](/img/config/product-themes.png)

_**Napomena: Da bi teme bila dostupna klijentima, mora biti omogućena u mreži od strane administratora mreže.**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Opcija **visibility** definiše da li je ova tema vidljiva klijentu kada gleda tab **Appearance > Themes** unutar svog sajta. Postavljanjem ove opcije na **Hidden (Sakriveno)**, uklanjate temu sa vidljivosti i time ograničavate mogućnost izbora i aktiviranja te same.

![Themes tab](/img/config/product-themes.png)

Izbor **behavior** omogućava administratorima mreže da definišu stanje teme prilikom kreiranja sajta klijenta.

U **Dostupnom** stanju tema je dostupan kupcu za samostalnu aktivaciju. Suprotno tome, u stanju **Nije dostupno** uklanja od kupca mogućnost aktivacije teme. Na kraju, opcija **Prisilituj aktivaciju** prisiljava izbor i aktivaciju teme, postavljajući je kao podrazumevanu prilikom kreiranja sajta.

#### Pluginovi {#plugins}

Slično kartici za teme, Ultimate Multisite omogućava administratoru mreže da definiše vidljivost pluginova kupcima, kao i njihov status pri kreiranju novog sajta.

![Plugins tab](/img/config/product-plugins.png)

Padac **vidljivosti** omogućava da se plugin ili bude vidljiv ili skriven kupcu kada ga gleda na svom sajtu putem opcije u meniju Pluginovi.

Administrator mreže može dalje menjati ponašanje pluginova koristeći opcije u padajućem meniju ponašanja (behavior drop-down).

![Plugins tab](/img/config/product-plugins.png)

Izbor **Podrazumevano** poštuje stanje plugin-a definisano u šablonu sajta koju je kupac izabrao. Dakle, pluginovi koji su aktivirani unutar šablona ostaju aktivirani kada se taj šablon klonira na sajtu kupca.

**Prisilituj aktivaciju** postavlja plugin u aktivno stanje pri kreiranju sajta, a **Prisilituj deaktivaciju** ga deaktivira pri kreiranju sajta. U oba ova slučaja, status plugin-a može manuelno promeniti kupac putem menija Pluginovi na WordPressu.

Постављање опција **Force Activate & Lock** (Принуди активирај и закључај) funkcционише слично, ali спречава да куцаоц мења стање плагина. Након што упишете Force Activate i Lock, притом ће то принудити плагин у активни статус и спречити куцаоцу да га деактивише. Слишко је опција **Force Inactivate & Lock** (Принуди деактивацију и закључавање), која ће принудити плагин у неактивни статус и спречити корисника да га активира.

Мрежни администратор може размислити о опцијама Force Activate & Lock и Force Inactivate & Lock у комбинацији са шаблонима сајта као плагиними, јер стање плагина у шаблонима може бити утицајно на эти опције ако су одзелити.

#### Ограничења приликом ресета (Reset Limitations) {#reset-limitations}

Таб **Reset Limitations** (Ресет ограничавања) реситира све подељене лимиту које сте дефинисали за производ. Да бисте ресилили ограничавања, кликните на дугме **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Да бисте потврдили акцију, прекините (slide) прекидач **confirm reset** у активни статус на десни страни и кликните на дугме **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Уређивање, Дуплирање или Делење Продукта (Edit, Duplicate, or Delete Product) {#edit-duplicate-or-delete-product}

Сущећих провиједе можете уредовати, дуплирати или делети прелазећи на **Ultimate Multisite > Products** и премажући надликом имена постојећег производа.

![Product hover actions](/img/config/product-hover-actions.png)
