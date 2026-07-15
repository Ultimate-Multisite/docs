---
title: Kreiranje kodova popusta
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kreiranje popusta (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

S Ultimate Multisite možete kreirati kodove popusta kako biste ponudili svojim klijentima popuste na njihove pretplate. A kreiranje je jednostavno!

## Kreiranje i uređivanje kodova popusta {#creating-and-editing-discount-codes}

Da biste kreirali ili uredili kod popusta, idite na **Ultimate Multisite > Discount Codes**.

![Lista kodova popusta — prazan stan prije nego što postoje neki kodovi](/img/config/discount-codes-empty.png)

Tamo ćete imati listu kodova popusta koje ste već kreirali.

Možete kliknuti na **Add Discount Code** (Dodaj kod popusta) da biste kreirali novi kupon ili možete urediti postojeće tako što ćete ponudziti mišem preko njih i kliknuti na **Edit** (Uredi).

![Lista kodova popusta s akcijama pri prelasku mišem koje pokazuju linkove Edit i Delete](/img/config/discount-codes-list-hover.png)

![Gumb za dodavanje koda popusta u zaglavlju stranice](/img/config/discount-codes-add-button.png)

Bute ćete biti preusmjereni na stranicu gdje ćete kreirati ili urediti svoj kupon kod. U ovom primjeru ćemo kreirati novi.

![Stranica za uređivanje koda popusta s prikazanim svim odjeljcima](/img/config/discount-code-edit.png)

Hajde da pogledamo postavke koje su dostupne ovdje:

**Enter Discount Code (Unesite kod popusta):** Ovo je samo naziv vašeg koda popusta. Ovo nije kod koji će vaši kupci morati koristiti na obrascu za plaćanje.

**Description (Opis):** Ovdje možete kratko opisati za što ovaj kupon služi.

![Polja za ime i opis koda popusta na vrhu stranice za uređivanje](/img/config/discount-code-description.png)

Možete također vidjeti kod popusta kao aktivan ili neaktivni:

![Status aktivnog koda popusta](/img/config/discount-code-active.png)

**Coupon code (Kod kupona):** Ovdje definirate kod koji će kupci morati unijeti prilikom plaćanja.

![Polje za kod kupona gdje kupci unose kod pri plaćanju](/img/config/discount-code-coupon-field.png)

**Popust:** Ovdje možete postaviti bilo **postotak** ili **fiksni iznos** novca za vaš kod kupona.

![Postavka iznosa popusta s padajućom listom postotaka ili fiksne stope](/img/config/discount-code-amount.png)

**Primjenjivanje na obnove:** Ako je ova opcija isključena, ovaj kod kupona će se primijeniti samo na **prvu uplatu**. Sva ostala plaćanja neće imati popust. Ako je ova opcija uključena, kod kupona će biti važeći za sve buduće uplate.

**Popust na naknade za postavljanje:** Ako je ova opcija isključena, kod kupona **ne daje nikakav popust na naknadu za postavljanje** narudžbe. Ako je ova opcija uključena, možete postaviti popust (postotak ili fiksni iznos) koji će ovaj kod kupona primijeniti na naknade za vaše planove.

![Opcije za primjenu na obnove i popust na naknadu za postavljanje](/img/config/discount-code-renewals.png)

**Aktivno:** Ručno aktivirajte ili deaktivirajte ovaj kod kupona.

![Prekidač za aktiviranje ili deaktiviranje koda popusta](/img/config/discount-code-active.png)

Pod **Naprednim opcijama**, imamo sljedeće postavke:

![Napredne opcije koda popusta](/img/config/discount-code-advanced.png)

**Ograničenje korištenja:**

  * **Korištenja:** Ovdje možete vidjeti koliko puta je kod kupona korišten.

  * **Maksimalno korištenje:** Ovo će ograničiti broj puta koliko korisnici mogu koristiti ovaj kod kupona. Na primjer, ako ovdje postavite 10, kupon se može koristiti samo 10 puta. Nakon tog limita, kod kupona više ne može biti korišten.

![Postavka ograničenja korištenja s brojem trenutnih korištenja i maksimalnim brojem](/img/config/discount-code-limit-uses.png)

**Datum početka i isteka:** Ovdje imate opciju dodavanja datuma početka i/ili datuma isteka za vaš kupon.

![Polja za datum početka i isteka za planiranje kodova popusta](/img/config/discount-code-dates.png)

**Ograničenje proizvoda:** Ako uključite **Select products**, prikazat će vam se svi vaši proizvodi. Imate opciju ručno odabrati (uključivanjem ili isključivanjem) koji proizvod može primiti ovaj kod popusta. Proizvodi koji su isključeni ovdje neće pokazati promjene ako kupci pokušaju koristiti taj kod popusta za njih.

![Odjeljak Ograničenje proizvoda s prekidačima za svaki proizvod](/img/config/discount-code-limit-products.png)

Nakon što postavite sve ove opcije, kliknite na **Save Discount Code** kako biste spremili svoj kupon i gotovo!

![Gumb Save Discount Code na dnu stranice za uređivanje](/img/config/discount-code-save.png)

Kupon je sada na vašoj listi i odatle možete kliknuti da ga **uredite ili obrišete**.

![Red s kodom popusta u listi s hover akcijama Uredi i Obriši](/img/config/discount-codes-list-hover.png)

###

### Korištenje URL parametara: {#using-url-parameters}

Ako želite prilagoditi svoje tablice cijena ili napraviti lijepu stranicu za kod popusta na vašoj web stranici i automatski primijeniti kod popusta na formular za plaćanje, možete to učiniti putem URL parametara.

Prvo, trebate dobiti link koji se može podijeliti za vaš plan. Za to, idite na **Ultimate Multisite > Products** i odaberite plan.

Kliknite na gumb **Click to Copy Shareable Link**. Ovo će vam dati link koji se može podijeliti za taj specifični plan. U našem slučaju, podijeljiv link je bio [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Stranica proizvoda s gumbom podijeljivog linka](/img/config/products-list.png)

Da biste primijenili svoj kod s popustom na ovaj specifičan plan, jednostavno dodajte parametar **?discount_code=XXX** u URL. Gde je **XXX** vaš kupon kod.

U našem primjeru, primjenjujemo kupon kod **50OFF** na ovaj specifični proizvod.

URL za ovaj specifični plan s primijenjenim kuponom 50OFF će izgledati ovako: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
