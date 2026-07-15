---
title: Kreiranje kodova za popust
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kreiranje kuponskih kodova (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Sa Ultimate Multisite-om možete kreirati kuponske kodove kako biste svojim klijentima dali popuste na njihove pretplate. A kreiranje je jednostavno!

## Kreiranje i uređivanje kuponskih kodova {#creating-and-editing-discount-codes}

Da biste kreirali ili uredili kuponski kod, idite na **Ultimate Multisite > Discount Codes**.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Tamo ćete imati listu kuponskih kodova koje ste već kreirali.

Možete kliknuti na **Add Discount Code** da kreirate novi kupon ili možete urediti postojeće tako što ćete preći mišem preko njih i kliknuti **Edit**.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Preusmjerat će vas na stranicu gdje ćete kreirati ili urediti svoj kuponski kod. Na ovom primjeru ćemo kreirati novi.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Hajde pogledati postavke koje su dostupne ovdje:

**Enter Discount Code:** Ovo je samo naziv vašeg kuponskog koda. Ovo nije kod koji će vaši kupci morati koristiti na stranici za plaćanje (checkout).

**Description:** Ovdje možete kratko opisati za šta je ovaj kupon.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Također možete vidjeti da li je kuponski kod aktivan ili neaktivan:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Ovdje definišete kod koji će vaši kupci morati unijeti tokom plaćanja.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Ovdje možete postaviti ili **postotak** ili **fiksni iznos** novca za svoj kuponski kod.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** Ako je ova opcija isključena, ovaj kuponski kod će se primijeniti samo na **prvu uplatu**. Sve ostale uplate neće imati popust. Ako je ova opcija uključena, kuponski kod će biti validan za sve buduće uplate.

**Setup fee discount:** Ako je ova opcija isključena, kuponski kod **neće dati popust na naknadu za postavljanje** (setup fee) narudžbe. Ako je ova opcija uključena, možete postaviti popust (postotak ili fiksni iznos) koji će ovaj kuponski kod primijeniti na naknadu za postavljanje vaših planova.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Ručno aktivirajte ili deaktivirajte ovaj kuponski kod.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Pod **Advanced Options** (Napredne opcije), imamo sljedeće postavke:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Ovdje možete vidjeti koliko puta je kuponski kod korišten.

  * **Max uses:** Ovo će ograničiti koliko puta korisnici mogu koristiti ovaj kuponski kod. Na primjer, ako ovdje unesete 10, kupon može biti korišten samo 10 puta. Nakon ovog limita, kuponski kod više ne može biti korišten.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Ovdje ćete imati opciju dodavanja datuma početka i/ili datuma isteka vašem kuponu.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** Ako uključite **Select products**, svi će vam se prikazati proizvodi. Imati ćete opciju da ručno odaberete (uključivanjem ili isključivanjem) koji proizvod može prihvatiti ovaj kuponski kod. Proizvodi koji su isključeni ovdje neće pokazati nikakvu promjenu ako vaši kupci pokušaju koristiti ovaj kuponski kod za njih.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Nakon što postavite sve ove opcije, kliknite na **Save Discount Code** da sačuvate kupon i to je gotovo!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Kupon je sada na vašoj listi i, odatle, možete kliknuti da ga **uredite ili obrišete**.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Korištenje URL parametara: {#using-url-parameters}

Ako želite prilagoditi svoje tabele cijena ili napraviti lijepu stranicu sa kuponskim kodom za vaš sajt i želite da kuponski kod automatski primijeni na vašu stranicu za plaćanje (checkout), možete to učiniti putem URL parametara.

Prvo, morate dobiti link koji se može podijeliti za svoj plan. Za to, idite na **Ultimate Multisite > Products** i odaberite plan.

Kliknite na dugme **Click to Copy Shareable Link**. Ovo će vam dati link koji se može podijeliti za ovaj specifični plan. U našem slučaju, link koji je dat za dijeljenje je [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page with shareable link button](/img/config/products-list.png)

Da biste primijenili svoj kuponski kod na ovaj specifični plan, samo dodajte parametar **?discount_code=XXX** na URL. Gdje je **XXX** kuponski kod.

U našem primjeru, primijenit ćemo kuponski kod **50OFF** na ovaj specifični proizvod.

URL za ovaj specifični plan sa primijenjenim kuponskim kodom 50OFF bi izgledao ovako: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
