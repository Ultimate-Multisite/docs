---
title: Skep Afslagkodes
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Skep Kortingskodes (v2) {#creating-discount-codes-v2}

_**BELANGRIKKE OPMERKING: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Met Ultimate Multisite kan jy kortingskodes skep om jou kliënte korting op hul subskripsies te gee. En dit skep is maklik!

## Skep en Wysig Kortingskodes {#creating-and-editing-discount-codes}

Om 'n kortingskode te skep of te wysig, gaan na **Ultimate Multisite > Discount Codes**.

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

Daar sal jy 'n lys hê van die kortingskodes wat jy reeds geskep het.

Jy kan op **Add Discount** **Code** klik om 'n nuwe kupon te skep, of jy kan die wat jy het wysig deur daarbo-oortoer en op **Edit** te klik.

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

Jy sal na die bladsy herlei word waar jy jou kuponkode sal skep of wysig. In hierdie voorbeeld sal ons een nuwe skep.

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

Kom kyk na die instellings wat hier beskikbaar is:

**Enter Discount Code:** Dit is net die naam van jou kortingskode. Dit is nie die kode wat jou kliënte op die afrekenbladsy sal benodig nie.

**Description:** Hier kan jy kortliks beskryf waarvoor hierdie kupon is.

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

Jy kan ook die kortingskode as aktief of inaktief sien:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** Hier definieer jy die kode wat jou kliënte tydens die afrekening sal benodig.

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** Hier kan jy óf 'n **persentasie** óf 'n **vaste bedrag** geld vir jou kortingskode stel.

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** As lang hierdie opsie afgeskakel is, sal hierdie kortingskode slegs op die **eerste betaling** toegepas word. Alle ander betalings sal geen korting hê nie. As hierdie opsie aan is, sal die kortingskode geldig wees vir alle toekomstige betalings.

**Setup fee discount:** As lang hierdie opsie afgeskakel is, sal die kuponkode **geen korting vir die opstelfooi** van die bestelling gee nie. As hierdie opsie aan is, kan jy die korting (persentasie of vaste bedrag) stel wat hierdie kuponkode op die opstelfooi van jou planne sal toepas.

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** Handmatig hierdie kuponkode aktiver of deaktiveer.

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

Onder **Advanced Options** het ons die volgende instellings:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** Hier kan jy sien hoeveel keer die kortingskode gebruik is.

  * **Max uses:** Dit sal die aantal kere wat gebruikers hierdie kortingskode kan gebruik, beperk. Byvoorbeeld, as jy 10 hier plaas, kan die kupon slegs 10 keer gebruik word. Na hierdie limiet kan die kuponkode nie meer gebruik word nie.

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** Hier sal jy die opsie hê om 'n begindatum en/of 'n verloopdatum by jou kupon by te voeg.

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** As jy **Select products** aan skakel, sal al jou produkte vir jou getoon word. Jy sal die opsie hê om handmatig te kies (deur aan of af te skakel) watter produk hierdie kuponkode kan aanvaar. Produkte wat hier afgeskakel is, sal geen verandering toon nie as jou kliënte probeer om hierdie kuponkode daarop te gebruik.

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

Nadat jy al hierdie opsies ingestel het, klik op **Save Discount Code** om jou kupon te stoor en dit is klaar!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

Die kupon is nou op jou lys en, van daar af, kan jy klik om dit te **wysig of te verwyder**.

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### Gebruik URL-Parameters: {#using-url-parameters}

As jy jou prysitellings wil aanpas of 'n mooi kuponkodebladsy vir jou webwerf wil bou en 'n kortingskode outomaties op jou afrekenbladsy wil toepas, kan jy dit doen via URL-parameters.

Eerstens moet jy die deelbare skakel vir jou plan kry. Om dit te doen, gaan na **Ultimate Multisite > Products** en kies 'n plan.

Klik op die **Click to Copy Shareable Link** knoppie. Dit sal jou die deelbare skakel na hierdie spesifieke plan gee. In ons geval was die gegee deelbare skakel [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page with shareable link button](/img/config/products-list.png)

Om jou kortingskode op hierdie spesifieke plan toe te pas, voeg net die parameter **?discount_code=XXX** by die URL by. Waar **XXX** die kuponkode is.

In ons voorbeeld hier, sal ons die kuponkode **50OFF** op hierdie spesifieke produk toepas.

Die URL vir hierdie spesifieke plan met die 50OFF kortingskode toegepas sal lyk so: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
