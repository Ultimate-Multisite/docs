---
title: Kreiranje kodova popusta
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kreiranje kodova popusta (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Sa Ultimate Multisite možete kreirati kodove popusta da dajete svojim klijentima popuste na njihove pretplate. A kreiranje je jednostavno!

## Kreiranje i uređivanje kodova popusta

Da biste kreirali ili uredili kod popusta, idite na **Ultimate Multisite > Discount Codes**.

![Lista kodova popusta — prazan stan pre nego što postoje neki kodovi](/img/config/discount-codes-empty.png)

Tamo ćete imati listu kodova popusta koje ste već kreirali.

Možete kliknuti na **Add Discount Code** (Dodaj kod popusta) da biste kreirali novi kupon ili možete urediti one koje imate tako što ćete ponovo mišem preći preko njih i kliknuti na **Edit** (Uredi).

![Lista kodova popusta sa akcijama pri prelasku mišem koji pokazuju linkove Edit i Delete](/img/config/discount-codes-list-hover.png)

![Dugme Add Discount Code u zaglavlju stranice](/img/config/discount-codes-add-button.png)

Butezlić ćete se na stranicu gde ćete kreirati ili urediti svoj kupon kod. Na ovom primeru ćemo kreirati novi.

![Stranica za uređivanje kodova popusta sa svim vidljivim sekcijama](/img/config/discount-code-edit.png)

Hajde da pogledamo postavke koje su dostupne ovde:

**Enter Discount Code (Unesite kod popusta):** Ovo je samo ime vašeg koda popusta. Ovo nije kod koji će vaši kupci morati da koriste na obrascu za plaćanje.

**Description (Opis):** Ovde možete kratko opisati za šta je ovaj kupon.

![Polja imena i opisa kodova popusta na vrhu stranice za uređivanje](/img/config/discount-code-description.png)

Možete takođe videti da li je kod popusta aktivan ili neaktivno:

![Status aktivnog koda popusta](/img/config/discount-code-active.png)

**Coupon code (Kod kupona):** Ovde definišete kod koji će vaši kupci morati da unesu tokom plaćanja.

![Polje za kod kupona gde kupci unose kod pri plaćanju](/img/config/discount-code-coupon-field.png)

**Popust:** Ovde možete postaviti **procenat** ili **fiksni iznos** novca za vaš kod kupona.

![Podešavanje iznosa popusta sa opcijom procenta ili fiksne vrednosti](/img/config/discount-code-amount.png)

**Primena na obnove:** Ako je ova opcija isključena, ovaj kod kupona će se primeniti samo na **prvu uplatu**. Sva ostala plaćanja neće imati popust. Ako je ova opcija uključena, kod kupona važi za sve buduće uplate.

**Popust na naknadu:** Ako je ova opcija isključena, kod kupona **ne daje nikakav popust na naknadu** narudžbine. Ako je ova opcija uključena, možete postaviti popust (procenat ili fiksni iznos) koji će se primeniti na naknadu vaših planova.

![Opcije za isključivanje/uključivanje primene na obnove i popusta na naknadu](/img/config/discount-code-renewals.png)

**Aktivno:** Ručno aktivirajte ili deaktivirajte ovaj kod kupona.

![Prekidač za aktiviranje/deaktiviranje koda popusta ručno](/img/config/discount-code-active.png)

Pod **Naprednim opcijama**, imamo sledeće podešavanja:

![Napredne opcije koda popusta](/img/config/discount-code-advanced.png)

**Ograničenje upotrebe:**

  * **Upotreba (Uses):** Ovde možete videti koliko puta je kod kupona korišćen.

  * **Maksimalna upotreba (Max uses):** Ovo će ograničiti broj puta koliko korisnici mogu koristiti ovaj kod kupona. Na primer, ako unesete 10 ovde, kupon se može koristiti samo 10 puta. Nakon ovog limita, kod kupona više ne može biti korišćen.

![Podešavanje ograničenja upotrebe sa brojem trenutne upotrebe i maksimalnim brojem upotrebe](/img/config/discount-code-limit-uses.png)

**Datum početka i isteka:** Ovde imate opciju da dodate datum početka i/ili datum isteka za vaš kupon.

![Polja za datum početka i isteka za planiranje popusta](/img/config/discount-code-dates.png)

**Ograničite proizvode:** Ako uključite **Select products**, svi vaši proizvodi će vam biti prikazani. Imate opciju da ručno izaberete (uključivanjem ili isključivanjem) koji proizvod može primiti ovaj kod popusta. Proizvodi koji su isključeni ovde neće promeniti ništa ako vaši kupci pokušaju da ga koriste za njih.

![Sekcija ograničavanja proizvoda sa prekidačima za svaki proizvod](/img/config/discount-code-limit-products.png)

Nakon što postavite sve ove opcije, kliknite na **Save Discount Code** (Sačuvaj kod popusta) da sačuvate svoj kupon i gotovo!

![Dugme Save Discount Code na dnu stranice za uređivanje](/img/config/discount-code-save.png)

Kupon je sada na vašoj listi, a odatle možete kliknuti da ga **uredite ili obrišete**.

![Red sa kodom popusta u listi sa hover akcijama Edit i Delete](/img/config/discount-codes-list-hover.png)

###

### Korišćenje URL parametara:

Ako želite da prilagodite svoje tabele cena ili napravite lepaj stranicu za kod popusta na vašem veb-sajtu i želite automatski primeniti kod popusta na formular za plaćanje, možete to uraditi putem URL parametara.

Prvo, potrebno je da dobijete link koji se može deliti (shareable link) za vaš plan. Da biste to uradili, idite u **Ultimate Multisite > Products** i izaberite plan.

Kliknite na dugme **Click to Copy Shareable Link** (Klikni da kopiraš link za deljenje). Ovo će vam dati link koji se može deliti za taj specifičan plan. U našem slučaju, link koji je dat bio je [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Stranica proizvoda sa dugmetom za link za deljenje](/img/config/products-list.png)

Da biste primenili svoj kod za popust na ovaj specifičan plan, jednostavno dodajte parametar **?discount_code=XXX** u URL adresu. Gde je **XXX** vaš kod kupona.

U našem primeru, primenjujemo kod kupona **50OFF** na ovaj specifičan proizvod.

URL za ovaj specifičan plan sa primenjenim kodom popusta 50OFF će izgledati ovako: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
