---
title: Afgiftshåndtering
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Skattehåndtering

Ultimate Multisite har et modul til skatteopkrævning indbygget i vores kerne-plugin, så hvis du har brug for at opkræve salgsskatter på dine planer, pakker og tjenester, kan du nemt gøre det uden at skulle installere add-ons.

For virksomheder placeret i Europa tilbyder vi et **add-on**, der tilføjer værktøjer og funktioner til bedre at **understøtte VAT**-overholdelse.

Ultimate Multisite indberetter eller indbetaler ikke skatter på dine vegne til myndighederne; vi hjælper dig blot med at opkræve de relevante skatter på transaktionstidspunktet. **Du skal stadig selv indbetale skatter.**

## Aktivering af skatteopkrævning

Skatteopkrævning er ikke aktiveret som standard. For at aktivere det skal du gå til **Ultimate Multisite > Settings > Taxes** og slå indstillingen Enable Taxes til.

![Enable Taxes-skifteknap øverst på siden med skatteindstillinger](/img/config/settings-taxes-enable.png)

Her er en fuld visning af siden med skatteindstillinger:

![Fuld side med skatteindstillinger](/img/config/settings-taxes-full.png)

Du kan også se skatteindstillingerne for individuelle produkter:

![Skatteindstillinger for produkter](/img/config/settings-taxes.png)

### Skat ekskluderet vs. skat inkluderet

Som standard er alle dine produktpriser eksklusive skat, hvilket betyder, at skatter **ikke er inkluderet** i produktets pris. Hvis vi fastslår, at en kunde skal betale skatter på et givent køb, lægger vi skatterne **oven i** subtotalen.

Hvis du foretrækker, at skatter er inkluderet i dit produkts pris, kan du gøre det ved at aktivere indstillingen **Inclusive Tax**.

![Inclusive Tax-skifteknaprække under Enable Taxes-indstillingen](/img/config/settings-taxes-inclusive.png)

Glem ikke at **gemme** de ændringer, du har foretaget.

###

## Oprettelse af skattesatser

Når du har aktiveret skatteopkrævning, skal du oprette skattesatser for specifikke lokationer ved hjælp af vores editor til skattesatser.

Du kan få adgang til editoren ved at klikke på knappen **Manage Tax Rates** i sidebaren på siden med skatteindstillinger.

![Manage Tax Rates-link i Tax Rates-panelet på indstillingssiden](/img/config/settings-taxes-manage-rates.png)

På siden med editoren til skattesatser kan du tilføje nye skattesatser ved at klikke på knappen **Add new Row**.

![Tabel i editoren til skattesatser med knappen Add new Row øverst](/img/config/tax-rates-editor.png)

Du skal give hver skattesats en **titel** (bruges på fakturaer). Derefter kan du vælge **landet** (påkrævet), **staten/regionen,** og **byen** (begge valgfrie), hvor denne skat vil blive opkrævet. Til sidst skal du tilføje **skattesatsen i procent**.

### Skattekategorier

Du kan også oprette flere skattekategorier for at tilføje forskellige skattesatser for forskellige typer produkter.

Klik for at **Add new Tax Category** , skriv derefter din kategoris navn, og tryk på **Create**.

![Add new Tax Category-knap øverst i editoren til skattesatser](/img/config/tax-categories-add.png)

![Tax Category Name-inputfelt i modalen til oprettelse af kategori](/img/config/tax-categories-create-modal.png)

For at gennemse kategorier skal du klikke på **Switch** og vælge den kategori, som du vil tilføje nye skatter til.

![Switch-dropdownknap til at skifte mellem skattekategorier](/img/config/tax-categories-switch.png)

![Dropdown til valg af skattekategori, der viser tilgængelige kategorier](/img/config/tax-categories-select.png)

Du kan indstille skattekategorien for et bestemt produkt ved at gå til **Product edit page** og derefter til fanen Taxes.

![Produktets Taxes-fane med skattekategori og skattepligtig-skifteknap](/img/config/product-taxes.png)

På den samme skærm kan du slå **Is Taxable?**-skifteknappen fra for at lade Ultimate Multisite vide, at det ikke skal opkræve skatter på det pågældende produkt.

## Europæisk VAT-understøttelse

Som nævnt tidligere har vi et add-on tilgængeligt for kunder i EU, som har yderligere krav på grund af europæiske VAT-regler.

Vores VAT-værktøjer hjælper med et par vigtige ting:

  * Nem indlæsning af EU VAT-satser;

  * Indsamling og validering af VAT-nummer - og omvendt betalingspligt for VAT-fritagne enheder (såsom virksomheder med gyldige VAT-numre);

For at installere dette add-on skal du gå til **Ultimate Multisite > Settings** og derefter klikke på sidebarslinket **Check our Add-ons**.

![Settings-sidebar med Check our Add-ons-link](/img/config/settings-taxes-addons-link.png)

Du bliver omdirigeret til vores add-ons-side. Der kan du søge efter **Ultimate Multisite VAT add-on** og installere det.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Gå derefter til **Network Admin > Plugins** og aktivér dette add-on på hele netværket.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Hvis du går tilbage til **Tax Settings tab** , vil du se nye tilgængelige muligheder. Slå indstillingen **Enable VAT Support** til for at aktivere de nye VAT-værktøjer. Glem ikke at **gemme** dine indstillinger!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Hentning af VAT-skattesatser

Et af de værktøjer, som vores integration tilføjer, er muligheden for at indlæse skattesatserne for EU-medlemsstater. Det kan gøres ved at besøge siden med editoren til skattesatser efter aktivering af EU VAT-understøttelse.

Nederst på siden vil du se mulighederne for VAT-hentning. Når du vælger en sats-type og klikker på knappen **Update EU VAT Rates**, hentes tabellen frem og udfyldes automatisk med skattesatserne for hver EU-medlemsstat. Derefter behøver du kun at gemme den.

![Update EU VAT Rates-knap nederst i editoren til skattesatser](/img/config/tax-rates-vat-pull.png)

Du kan også redigere værdierne, efter du har hentet dem. For at gøre det skal du blot redigere den tabellinje, du har brug for, og klikke for at gemme de nye værdier.

### VAT-validering

Når VAT-understøttelse er aktiveret, tilføjer Ultimate Multisite et ekstra felt til checkout-formularen under faktureringsadressefeltet. Feltet vises kun for kunder placeret i EU.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite vil derefter validere VAT-nummeret, og hvis det returneres som gyldigt, anvendes reverse charge-mekanismen, og momssatsen sættes til 0% på den ordre.
