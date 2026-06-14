---
title: Skatterhåndtering
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# Skattehåndtering

Ultimate Multisite har en skatteindsamlingsmodul bygget ind i vores kerneplugin, så hvis du skal opkræve salgsafgifter på dine planer, pakker og tjenester, kan du nemt gøre det uden at skulle installere nogen add-ons.

For virksomheder placeret i Europa tilbyder vi et **add-on**, der tilføjer værktøjer og funktioner til bedre **VAT**-overholdelse.

Ultimate Multisite indberetter eller overfører ikke skatter på dine vegne til regeringen; vi hjælper blot dig med at opkræve de korrekte skatter på tidspunktet for transaktionen. **Du skal stadig selv indberette skatter.**

## Aktivering af skatteopkrævning

Skatteopkrævning er ikke aktiveret som standard. For at aktivere den skal du gå til **Ultimate Multisite > Indstillinger > Skatter** og slå "Enable Taxes"-indstillingen til.

![Aktiver Enable Taxes-knap øverst på siden for skatteindstillinger](/img/config/settings-taxes-enable.png)

Her er et fuldt overblik over siden for skatteindstillinger:

![Skatteindstillinger fuld side](/img/config/settings-taxes-full.png)

Du kan også se skatteindstillingerne for individuelle produkter:

![Skatteindstillinger for produkter](/img/config/settings-taxes.png)

### Skat ekskluderet vs. Skat inkluderet

Som standard er alle dine produktpriser eksklusive skat, hvilket betyder, at skatter **ikke er inkluderet** i produktets pris. Hvis vi vurderer, at en kunde skal betale skat på et givent køb, tilføjer vi så skatten **ovenpå** nettosummen.

Hvis du foretrækker, at skatter er inkluderet i din produkts pris, kan du gøre det ved at aktivere indstillingen "Inclusive Tax".

![Inclusive Tax-knap række under Enable Taxes-indstillingen](/img/config/settings-taxes-inclusive.png)

Husk at **gemme** de ændringer, du har foretaget.

###

## Oprettelse af skattesatser

Når du har aktiveret skatteopkrævning, skal du oprette skattesatser for specifikke lokationer ved hjælp af vores skattesate-editor.

Du kan få adgang til redigeringsområdet ved at klikke på knappen **Manage Tax Rates** i sidepanelet på siden for skatteindstillinger.

![Link til Manage Tax Rates i Tax Rates panelet på indstillingssiden](/img/config/settings-taxes-manage-rates.png)

På redigeringssiden for skattesatser kan du tilføje nye Skattesatser ved at klikke på knappen **Add new Row**.

![Skattesatser redigeringsskema med Add new Row knap øverst](/img/config/tax-rates-editor.png)

Du skal give hver skattesats et **navn** (som bruges på fakturaer). Derefter kan du vælge **land** (påkrævet), **stat** og **by** (begge valgfri), hvor denne skat skal opkræves. Til sidst tilføjer du **skattesatsen i procent**.

### Skattekategorier

Du kan også oprette flere Skattekategorier for at tilføje forskellige skattesatser for forskellige typer produkter.

Klik på **Add new Tax Category**, skriv navnet på din kategori og tryk på **Create**.

![Knap til Add new Tax Category øverst i skattesatser redigeringsskemaet](/img/config/tax-categories-add.png)

![Inputfelt til Skattekategori Navn i modalen til oprettelse af kategori](/img/config/tax-categories-create-modal.png)

For at bladre gennem kategorierne skal du klikke på **Switch** og vælge den kategori, hvor du vil tilføje nye skatter.

![Switch dropdown knap til at skifte mellem skattekategorier](/img/config/tax-categories-switch.png)

![Skattekategori selector dropdown der viser tilgængelige kategorier](/img/config/tax-categories-select.png)

Du kan sætte en skattekategori for et bestemt produkt ved at gå til **Product edit page** og derefter til fanen Taxes.

![Produktets skattefan med skattekategori og skattepligtigheds-toggle](/img/config/product-taxes.png)

På den samme skærm kan du slå **Is Taxable?** (Er det skattepligtigt?) om for at fortælle Ultimate Multisite, at der ikke skal opkræves skat på det givne produkt.

## EU Mervueskat (VAT) Support

Som nævnt før har vi et add-on tilgængeligt for kunder i EU, der har yderligere krav på grund af de europæiske momsregler (VAT).

Vores moms-værktøjer hjælper med et par vigtige ting:

* Nem indlæsning af EU's momssatser;
* Indsamling og validering af momsnumre – samt omvendt opkrævning for momsfrie enheder (såsom virksomheder med gyldige momsnumre).

For at installere dette add-on skal du gå til **Ultimate Multisite > Settings** og derefter klikke på linket i sidepanelet **Check our Add-ons**.

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

Du vil blive omdirigeret til vores add-on-side. Der kan du søge efter **Ultimate Multisite VAT add-on** og installere det.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

Derefter skal du gå til **Network Admin > Plugins** og aktivere det add-on på hele netværket.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

Hvis du går tilbage til fanen **Tax Settings**, vil du se nye muligheder tilgængelige. Skift **Enable VAT Support** (Aktiver momsunderstøttelse) for at aktivere de nye momsværktøjer. Glem ikke at **gemme** dine indstillinger!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### Hentning af moms-satser

Et af værktøjerne, som vores integration tilføjer, er muligheden for at indlæse satserne for EU's medlemsstater. Det kan gøres ved at besøge siden til redigering af momssatser efter at have aktiveret EU momsunderstøttelse.

Nederst på siden finder du muligheder for at trække momsdata (VAT). Ved at vælge en sats type og klikke på knappen **Update EU VAT Rates** vil tabellen blive vist og automatisk udfyldt med skattesatserne for hvert EU-medlemsland. Derefter skal du blot gemme den.

![Knap til opdatering af EU momsdata nederst i skatteindstillinger](/img/config/tax-rates-vat-pull.png)

Du kan også redigere værdierne efter, at de er blevet trukket ind. For at gøre det skal du blot redigere den linje i tabellen, du ønsker at ændre, og klikke for at gemme de nye værdier.

### Momsvalidering (VAT Validation)

Når momsunderstøttelse er aktiveret, tilføjer Ultimate Multisite et ekstra felt til kassen-formularen, under feltet for faktureringsadresse. Feltet vil kun blive vist for kunder, der befinder sig i EU.

<!-- Screenshot unavailable: Momsnummerfelt på frontend kasseformular under faktureringsadresse -->

Ultimate Multisite validerer derefter momsnummeret, og hvis det returneres som gyldigt, anvendes omvendt opkrævningsmekanisme (reverse charge mechanism), og skattesatsen sættes til 0% på den ordre.
