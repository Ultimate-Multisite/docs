---
title: Steierbehandlung
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Steierbehandlung

Ultimate Multisite huet e Modul fir d'Steiererhiewung an eisem Core plugin agebaut, sou datt wann Dir Verkafssteieren op Äre Pläng, Packagen a Servicer erhiewe musst, Dir dat einfach maache kënnt, ouni iergendwellech Add-ons installéieren ze mussen.

Fir Firmen, déi an Europa lokaliséiert sinn, bidde mir en **add-on** un, dat Tools a Funktiounen derbäisetzt, fir d'Konformitéit mat der **VAT z'ënnerstëtzen**.

Ultimate Multisite deklaréiert oder iwwerweist keng Steieren an Ärem Numm un d'Regierung; mir hëllefen Iech einfach, déi passend Steieren zum Zäitpunkt vun der Transaktioun ze erhiewen. **Dir musst d'Steieren nach ëmmer selwer iwwerweisen.**

## Steiererhiewung aktivéieren {#enabling-tax-collection}

Steiererhiewung ass net standardméisseg aktivéiert. Fir se z'aktivéieren, musst Dir op **Ultimate Multisite > Settings > Taxes** goen an d'Astellung Enable Taxes aktivéieren.

![Enable Taxes-Schalter uewen op der Säit mat de Steierastellungen](/img/config/settings-taxes-enable.png)

Hei ass eng komplett Vue vun der Säit mat de Steierastellungen:

![Komplett Säit mat de Steierastellungen](/img/config/settings-taxes-full.png)

Dir kënnt och d'Steierastellunge fir eenzel Produkter ukucken:

![Steierastellunge fir Produkter](/img/config/settings-taxes.png)

### Steier ausgeschloss vs. Steier abegraff {#tax-excluded-vs-tax-included}

Standardméisseg sinn all Är Produktpräisser ouni Steier, dat heescht d'Steiere **sinn net abegraff** am Präis vum Produkt. Wa mir feststellen, datt e Client Steiere fir e bestëmmte Kaf bezuele soll, addéiere mir d'Steieren **uewendrop** op den Zwëschebetrag.

Wann Dir léiwer hutt, datt d'Steieren am Präis vun Ärem Produkt abegraff sinn, kënnt Dir dat maachen, andeems Dir d'Astellung **Inclusive Tax** aktivéiert.

![Inclusive Tax-Schalterzeil ënner der Enable Taxes-Astellung](/img/config/settings-taxes-inclusive.png)

Vergiesst net, d'Ännerungen, déi Dir gemaach hutt, ze **späicheren**.

###

## Steiersätz erstellen {#creating-tax-rates}

Nodeems Dir Tax Collection aktivéiert hutt, musst Dir Steiersätz fir spezifesch Plaze mat eisem Steiersaz-Editor erstellen.

Dir kënnt op den Editor zougräifen, andeems Dir op de Knäppchen **Manage Tax Rates** an der Säitebar vun der Säit mat de Steierastellunge klickt.

![Manage Tax Rates-Link am Tax Rates-Panel op der Astellungssäit](/img/config/settings-taxes-manage-rates.png)

Op der Säit vum Steiersaz-Editor kënnt Dir nei Steiersätz derbäisetzen, andeems Dir op de Knäppchen **Add new Row** klickt.

![Tabell vum Steiersaz-Editor mam Add new Row-Knäppchen uewen](/img/config/tax-rates-editor.png)

Dir musst all Steiersaz en **Titel** ginn (deen op Rechnunge benotzt gëtt). Duerno kënnt Dir d'**Land** (obligatoresch), de **Bundesstaat,** an d'Stad (béid optional) auswielen, wou dës Steier berechent gëtt. Zum Schluss füügt de **Steiersaz a Prozent** derbäi.

### Steierkategorien {#tax-categories}

Dir kënnt och méi Steierkategorien erstellen, fir verschidde Steiersätz fir verschidden Zorte vu Produkter derbäizesetzen.

Klickt op **Add new Tax Category** , schreift dann den Numm vun Ärer Kategorie a dréckt **Create**.

![Add new Tax Category-Knäppchen uewen am Steiersaz-Editor](/img/config/tax-categories-add.png)

![Tax Category Name-Agabefeld am Modal fir d'Kategorie ze erstellen](/img/config/tax-categories-create-modal.png)

Fir duerch Kategorien ze bliederen, klickt op **Switch** a wielt d'Kategorie aus, zu där Dir nei Steiere wëllt derbäisetzen.

![Switch-Dropdown-Knäppchen, fir tëscht Steierkategorien ze wiesselen](/img/config/tax-categories-switch.png)

![Dropdown fir d'Steierkategorie-Auswiel, deen disponibel Kategorien weist](/img/config/tax-categories-select.png)

Dir kënnt d'Steierkategorie fir e bestëmmt Produkt festleeën, andeems Dir op d'**Product edit page** gitt an duerno op den Taxes-Tab.

![Produkt-Steieren-Tab mat Steierkategorie a taxable-Schalter](/img/config/product-taxes.png)

Op deem selwechten Ecran kënnt Dir de Schalter **Is Taxable?** ausschalten, fir Ultimate Multisite matzedeelen, datt et keng Steieren op dat bestëmmt Produkt erhiewe soll.

## Ënnerstëtzung fir europäesch VAT {#european-vat-support}

Wéi virdru gesot, hu mir en add-on verfügbar fir Clienten an der EU, déi wéinst den europäesche VAT-Reglementer zousätzlech Ufuerderungen hunn.

Eis VAT-Tools hëllefe bei e puer wichtege Saachen:

  * Einfach Luede vun EU VAT-Sätz;

  * Sammelen a Validéiere vun der VAT-Nummer - an Ëmkéiere vun der Steierlaascht fir VAT-befreit Entitéiten (wéi Firmen mat valabelen VAT-Nummeren);

Fir dëst add-on z'installéieren, gitt op **Ultimate Multisite > Settings** a klickt dann op de Säitebar-Link **Check our Add-ons**.

![Säitebar vun der Astellungssäit mam Check our Add-ons-Link](/img/config/settings-taxes-addons-link.png)

Dir gitt op eis Add-ons-Säit weidergeleet. Do kënnt Dir no dem **Ultimate Multisite VAT add-on** sichen an et installéieren.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Da gitt op **Network Admin > Plugins** an aktivéiert dat add-on network-wide.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Wann Dir zréck op den **Tax Settings tab** gitt, gesitt Dir nei Optiounen. Aktivéiert d'Optioun **Enable VAT Support**, fir déi nei VAT-Tools z'aktivéieren. Vergiesst net, Är Astellungen ze **späicheren**!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT-Steiersätz eroflueden {#pulling-on-vat-tax-rates}

Ee vun den Tools, déi eis Integratioun derbäisetzt, ass d'Méiglechkeet, d'Steiersätz fir EU-Memberstaaten ze lueden. Dat kann gemaach ginn, andeems Dir d'Säit vum Steiersaz-Editor besicht, nodeems EU VAT-Support aktivéiert gouf.

Um Enn vun der Säit gesitt Dir d'Optioune fir VAT erofzelueden. Wann Dir en Taux-Typ auswielt an op de Knäppchen **Update EU VAT Rates** klickt, gëtt d'Tabell mat de Steiersätz fir all EU-Memberstaat opgeruff an automatesch ausgefëllt. Duerno musst Dir se just nach späicheren.

![Update EU VAT Rates-Knäppchen ënnen am Steiersaz-Editor](/img/config/tax-rates-vat-pull.png)

Dir kënnt d'Wäerter och änneren, nodeems Dir se erofgelueden hutt. Fir dat ze maachen, ännert einfach déi Tabellzeil, déi Dir braucht, a klickt fir déi nei Wäerter ze späicheren.

### VAT-Validéierung {#vat-validation}

Wann VAT-Support aktivéiert ass, setzt Ultimate Multisite en zousätzlecht Feld an de Checkout-Formulaire derbäi, ënner dem Feld fir d'Rechnungsadress. D'Feld gëtt nëmme fir Clienten ugewisen, déi an der EU lokaliséiert sinn.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite validéiert dann d’TVA-Nummer, a wann se als valabel zeréckkënnt, gëtt de Reverse-Charge-Mechanismus ugewannt an de Steiersaz fir déi Bestellung op 0% gesat.
