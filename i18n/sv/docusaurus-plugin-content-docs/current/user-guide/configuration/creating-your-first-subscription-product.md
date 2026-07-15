---
title: Skapa din första prenumerationsprodukt
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Skapa din första prenumerationsprodukt (v2)

_**VIKTIGT MEDDELANDE: Den här artikeln är endast för användare av Ultimate Multisite version 2.x. Om du använder version 1.x,**_ **_**se den här artikeln**_**.

För att börja driva ditt nätverk och börja sälja dina tjänster till potentiella användare behöver du ha olika prenumerationsalternativ. Hur skapar du dessa produkter? Vilka typer av produkter kan du erbjuda? I den här artikeln går vi igenom allt du behöver veta om produkter.

## Produkttyp {#product-type}

Med Ultimate Multisite kan du erbjuda två kategorier av produkter till dina klienter: **planer** och **tillägg** **(Order Bump)**. Tillägg kan delas in i två typer:**paket** och **tjänster**. Vi går igenom deras skillnader och särdrag härnäst.

  * **Planer** : den grundläggande produkten i Ultimate Multisite. Din klient kan bara ha ett medlemskap om det är kopplat till en plan. En plan ger dina klienter en eller flera webbplatser (det beror på konfigurationerna för din plan) med de begränsningar du anger på redigeringssidan för din produkt.

  * **Paket** : tillägg som direkt påverkar funktionerna i Ultimate Multisite-planer. De ändrar begränsningar eller lägger till nya resurser, plugins eller teman i den ursprungliga plan som din klient köpte. Till exempel kan en grundläggande plan tillåta 1 000 besök per månad och du kan tillgängliggöra ett paket som utökar detta antal till 10 000.

  * **Tjänster:** tillägg som inte ändrar Ultimate Multisite-funktioner. De är uppgifter som du utför för din klient utöver den plan de köpte. Till exempel kan din kund köpa en plan som tillåter en enda webbplats och även betala för en extra tjänst som skapar designen för denna webbplats.

## Hantera produkter {#managing-products}

För många kan fliken **Produkter** i Ultimate Multisite **(Ultimate Multisite > Products)** likställas med planer i en traditionell hostingmiljö.

Inom Ultimate Multisite definierar fliken Produkter konstruktionen och begränsningarna som gäller för en specifik produkt eller tjänst. Sådana konstruktioner omfattar produkt- eller tjänstebeskrivning, pris, skatter och behörigheter.

Det här avsnittet hjälper dig att förstå denna viktiga hörnsten i Ultimate Multisite.

![Sida med produktlista](/img/config/products-list.png)

## Lägga till produkter {#adding-products}

Oavsett om det är en plan, ett paket eller en tjänst är startpunkten för att definiera en ny artikel via **Ultimate Multisite > Products > Add Product**.

![Knapp för att lägga till produkt](/img/config/product-add-button.png)

Gränssnittet innehåller två framträdande avsnitt. Till vänster finns flera flikar som hjälper till med definitionen av produkten och till höger finns några avsnitt för att definiera produktens baspris, dess aktiva status och produktbild.

![Översikt över produktredigeringssida](/img/config/product-edit-full.png)

### Beskrivning {#description}

Den grundläggande produktinformationen kan definieras genom att ange ett produktnamn och en beskrivning. Dessa identifierare visas överallt där produktinformationen krävs, såsom val av plan och prissättning, fakturor, uppgraderingar och liknande.

![Avsnitt för produktbeskrivning](/img/config/product-description.png)

### Prissättningstyp {#pricing-type}

På höger sida av gränssnittet kan basprissättningen definieras.

![Avsnitt för prissättning och spara](/img/config/product-pricing-save.png)

Ultimate Multisite stöder tre olika prissättningstyper. Alternativet **betald** uppmanar nätverksadministratören att ange information om produktens pris och faktureringsfrekvens.

### Prissättning {#pricing}

Priskomponenten definierar produktens baspris och faktureringsintervall.

![Avsnitt för prissättning och spara](/img/config/product-pricing-save.png)

alltså kommer ett exempelpris på $29.99 med en inställning på 1 månad att fakturera $29.99 varje månad. På samma sätt kommer ett pris på $89.97 med en inställning på 3 månader att fakturera det beloppet varje kvartal.

### Faktureringscykler {#billing-cycles}

Avsnittet för faktureringscykler anger frekvensen för det ovannämnda faktureringsintervallet och förstås i allmänhet i ljuset av avtal eller fasta perioder.

![Avsnitt för prissättning och spara](/img/config/product-pricing-save.png)

Till exempel skulle ett produktpris på $29.99 med ett intervall på 1 månad och 12 faktureringscykler fakturera $29.99 per månad för produkten under de följande 12 månaderna. Med andra ord skulle en sådan inställning fastställa en fastprisperiod på $29.99 per månad i 12 månader och därefter upphöra med faktureringen.

### Provperiod {#trial-period}

Att aktivera reglaget för erbjud provperiod gör det möjligt för nätverksadministratören att definiera en provperiod för produkten.

![Avsnitt för prissättning och spara](/img/config/product-pricing-save.png)

Under provperioden kan kunderna använda produkten gratis och kommer inte att faktureras förrän provperioden har löpt ut.

### Startavgift {#setup-fee}

Du kan också tillämpa en startavgift på din plan.

![Avsnitt för prissättning och spara](/img/config/product-pricing-save.png)

Detta innebär att din klient betalar ett extra belopp vid den första debiteringen (utöver planpriset) som motsvarar avgiften du definierade i detta avsnitt.

### Aktiv {#active}

Reglaget för aktiv definierar i praktiken om produkten är tillgänglig för kunder vid nya registreringar.

![Reglage för aktiv](/img/config/product-active.png)

Om det finns befintliga kunder på denna plan innebär det att sätta reglaget i inaktiverat läge att planen i praktiken blir ärvd och tas bort från framtida registreringar. **Befintliga kunder på planen kommer att fortsätta faktureras** tills de flyttas till en ny plan eller tas bort från planen.

### Produktbild {#product-image}

Knappen **Ladda upp bild** gör det möjligt för nätverksadministratören att använda mediebiblioteket för att välja eller ladda upp en produktbild.

![Avsnitt för produktbild](/img/config/product-image.png)

### Ta bort {#delete}

Knappen **Ta bort produkt** tar bort produkten från systemet. Den visas när produkten har publicerats.

![Avsnitt för att ta bort produkt](/img/config/product-delete.png)

Till skillnad från andra borttagningar placeras produkten inte i något papperskorgsläge. När den väl har tagits bort är åtgärden därför oåterkallelig.

### Produktalternativ {#product-options}

När produktinformationen på basnivå har definierats hjälper produktalternativen nätverksadministratören att ytterligare definiera produktens specifika attribut.

#### Allmänt {#general}

Fliken **Allmänt** definierar produktens allmänna attribut som inte gäller för någon av de andra produktspecifika flikarna.

![Fliken Allmänt](/img/config/product-general-tab.png)

Den självförklarande **produktsluggen** definierar den slug som produkten identifieras med i URL:er och andra områden i Ultimate Multisite.

Ultimate Multisite stöder flera produkttyper, nämligen plan, paket och tjänst. Flikarna **Produktalternativ** justeras dynamiskt beroende på den angivna produkttypen.

**Kundroll** anger den roll som kunden tilldelas när webbplatsen skapas. Vanligtvis är detta för de flesta nätverksadministratörer Ultimate Multisite-standardrollen eller administratör. Ultimate Multisite-standardrollen kan anges i **Ultimate Multisite > Inställningar > Inloggning och registrering**.

![Inställningar för kundroll](/img/config/product-customer-role-settings.png)

#### Upp- och nedgraderingar {#up--downgrades}

Den här fliken anger de uppgraderings- och nedgraderingsvägar som är tillgängliga för en kund inom deras specifika nivå.

För att förstå detta koncept kan du tänka dig ett exempel där en nischad Ultimate Multisite-installation tillhandahåller lösningar för lärplattformar till sina kunder. För att uppnå detta definieras tre planer (Basic, Plus och Premium) och specifika plugins aktiveras för varje plan (se senare i detta avsnitt för instruktioner om hur du aktiverar plugins).

Om Ultimate Multisite-installationen även betjänar företagswebbplatser eller eCommerce-webbplatser kan dessa planer kräva att andra plugins installeras och aktiveras.

I detta avseende vore det olämpligt och problematiskt att låta eLearning-kunder övergå till eCommerce-planer, eftersom dessa planer, priser och begränsningar kanske inte passar.

För att begränsa kundens väg och förhindra incidenter kan nätverksadministratören därför definiera en plangrupp och inom den gruppen ange de planer som kunden kan övergå till.

![Fliken Upp- och nedgraderingar](/img/config/product-upgrades.png)

För att definiera en plangrupp anger du de kompatibla planerna i listan **plangrupp**. **Produktordningen** avgör hur planerna ordnas och visas från den lägsta till den högsta.

Ultimate Multisite inkluderar också en **order bump**-funktion där lämpliga tilläggsprodukter och tjänster kan läggas till i planer. Dessa erbjuds kunden som ytterligare objekt som kan läggas till i planer i kassan eller under en uppgradering.

#### Prisvariationer {#price-variations}

Prisvariationer låter nätverksadministratören ange alternativa prisnivåer beroende på varaktighet. Den här inställningen gör det möjligt att erbjuda månadsvis, kvartalsvis, årsvis eller någon annan faktureringsperiod för samma produkt. Till exempel kan du konfigurera en produkt för 29,99 USD/månad med ett rabatterat årligt alternativ för 249,99 USD/år.

![Fliken Prisvariationer](/img/config/product-price-variations-tab.png)

För att skapa prisvariationer ställer du reglaget **Aktivera prisvariationer** till aktivt och klickar på knappen **Lägg till ny prisvariation**.

![Produktprisvariationer](/img/config/product-price-variations.png)

För att ange en variation ställer du in variationens varaktighet, period och pris. Ytterligare variationer kan anges genom att klicka på knappen igen.

Om ditt basproduktpris till exempel är 29,99 USD per månad kan du lägga till:

  * **3 månader** för 79,99 USD (en liten rabatt jämfört med månadsvis)
  * **1 år** för 249,99 USD (en betydande rabatt för årsbindning)

:::tip Visa ett reglage för faktureringsperiod på frontend

Enbart prisvariationer lägger inte till ett reglage eller en omkopplare i frontend-kassan. För att låta kunder växla mellan faktureringsperioder (t.ex. månadsvis / årsvis) behöver du lägga till ett **Periodval**-fält i ditt kassformulär. Se [Kassformulär: Lägga till ett reglage för periodval](checkout-forms#adding-a-period-selection-toggle) för steg-för-steg-instruktioner.
:::

#### Skatter {#taxes}

Fliken **Skatter** överensstämmer med skatteinställningarna som anges i **Ultimate Multisite > Inställningar > Skatter** och mer specifikt de definierade skattesatserna. För att aktivera skatter och definiera tillämpliga skattesatser, se dokumentationen på **Ultimate Multisite: Inställningar**

![Fliken Skatter](/img/config/product-taxes.png)

I ett tidigare exempel definierade vi en lokal skattesats på 7,25 % som gäller för kunder i Kalifornien (USA).

När skattesatsen har definierats i **Ultimate Multisite > Inställningar > Hantera skattesatser** kan den väljas på produktnivå.

![Fliken Skatter](/img/config/product-taxes.png)

För att ange att en produkt är en skattepliktig vara ställer du reglaget **Är skattepliktig** till aktivt och väljer den tillämpliga skattesatsen från rullgardinsmenyn Skattekategori.

#### Webbplatsmallar {#site-templates}

I grund och botten är webbplatsmallar kompletta WordPress-webbplatser som klonas till en kunds webbplats i början av deras prenumeration.

![Fliken Webbplatsmallar](/img/config/product-site-templates.png)

Nätverksadministratören skapar och konfigurerar mallwebbplatsen som en vanlig WordPress-webbplats med aktiverade och konfigurerade teman, plugins och innehåll. Mallwebbplatsen klonas ordagrant till kunden.

Den här fliken låter nätverksadministratören ange hur webbplatsmallar ska bete sig vid en ny prenumeration. För att använda webbplatsmallar för denna plan ställer du reglaget **Tillåt webbplatsmallar** till aktivt läge.

När **Tillåt webbplatsmallar** är inaktiverat kan kunder på planen inte välja mallar, även om ett kassformulär, en delningsbar länk eller en URL-parameter annars skulle göra mallar tillgängliga. Ultimate Multisite tillämpar nu denna gräns genom en fallback-kedja över de tillgängliga ingångspunkterna: planinställningar kontrolleras först, sedan mallinställningar för kassformulär och därefter förvalda eller URL-tillhandahållna mallar. Detta håller plangränserna konsekventa och förhindrar att mallar visas för produkter som inte ska erbjuda dem.

Läget för **val av webbplatsmall** definierar beteendet för webbplatsmallar under prenumerationsprocessen.

Inställningen **S** **tandard** följer stegen i checkout-formuläret. Om nätverksadministratören har definierat ett steg för val av mall i checkout-processen och steget har definierats med mallar kommer denna inställning att respektera de direktiv som fastställts i checkout-steget.

Att ange **T** **illdela webbplatsmall** tvingar valet av den angivna mallen. Följaktligen tas alla steg för val av mall i checkout-processen bort.

Slutligen åsidosätter **V** **älj tillgängliga webbplatsmallar** mallarna som anges i checkout-steget med mallarna som valts i denna inställning. En förvald mall kan också definieras för att hjälpa kunden i valet.

I slutändan, om nätverksadministratören vill att mallval ska ske i checkout-stegen, räcker inställningen ' _standard_ '. Alternativt, för att ta bort och låsa mallval och delegera valet till planinställningarna, kan alternativen ' _tilldela ny mall_ ' eller ' _välj tillgängliga webbplatsmallar_ ' vara önskvärda.

#### Webbplatser {#sites}

Fliken **Webbplatser** är en del av Ultimate Multisite:s begränsningsfunktionalitet.

![Fliken Webbplatser](/img/config/product-sites.png)

Denna inställning anger det maximala antalet webbplatser som en kund kan skapa under sitt medlemskap.

För att aktivera begränsningen, ställ växeln **begränsa webbplatser** i aktivt läge och ange det maximala antalet webbplatser i fältet **webbplatstilldelning**.

#### Besök {#visits}

Fliken **Besök** är ytterligare en del av Ultimate Multisite:s begränsningssystem. Denna inställning möjliggör bokföring och efterföljande strypning av unika besökare till en kunds webbplats.

![Fliken Besök](/img/config/product-visits.png)

Ur ett marknadsföringsperspektiv kan nätverksadministratörer använda denna inställning som ett sätt att uppmuntra kunder att uppgradera sin plan när gränserna har nåtts. Denna inställning kan också hjälpa nätverksadministratören att begränsa och förhindra överdriven trafik till webbplatser för att bevara systemresurser.

För att använda denna funktion, ställ växeln **begränsa unika besök** i aktivt läge och ange det maximala antalet unika besökare i fältet **kvot för unika besök**.

När denna gräns har nåtts kommer Ultimate Multisite att sluta leverera kundens webbplats i stället för att visa ett meddelande som anger att gränserna har överskridits.

#### Användare {#users}

Ultimate Multisite:s begränsningar för 'Användare' gör det möjligt för nätverksadministratören att införa gränser för antalet användare som kan skapas och tilldelas roller.

![Fliken Användare](/img/config/product-users.png)

För att aktivera begränsningsfunktionen, ställ växeln **begränsa användare** i aktivt läge genom att skjuta den åt höger.

Därefter, för varje roll som ska begränsas, ställ växeln bredvid den i aktivt läge och definiera den maximala övre gränsen i lämpligt fält.

#### Inläggstyper {#post-types}

Fliken **Inläggstyper** gör det möjligt för nätverksadministratören att införa detaljerade gränser för det omfattande utbudet av inläggstyper inom WordPress.

![Fliken Inläggstyper](/img/config/product-post-types.png)

På grund av WordPress konstruktion är inlägg och inläggstyper en betydande komponent i dess kärnfunktionalitet, och därför är Ultimate Multisite:s begränsningssystem utformat för att hjälpa nätverksadministratören att fastställa och upprätthålla gränser.

För att aktivera detta begränsningsundersystem, ställ växeln **begränsa inläggstyper** i aktivt läge genom att skjuta den åt höger.

Därefter, för varje inläggstyp som ska begränsas, aktivera den genom att skjuta den åt höger och ange den maximala övre gränsen i lämpligt fält.

#### Diskutrymme {#disk-space}

Fliken **Diskutrymme** gör det möjligt för nätverksadministratörer att begränsa det utrymme som förbrukas av kunder.

![Fliken Diskutrymme](/img/config/product-disk-space.png)

Vanligtvis i en WordPress multisite delas kärnfilerna mellan alla webbplatser och individuella kataloger skapas för mediefiler och uppladdningar som dessa inställningar och begränsningar gäller för.

För att aktivera begränsningen av diskanvändning, ställ växeln **begränsa diskstorlek per webbplats** i aktivt läge genom att skjuta den åt höger.

Ange därefter den maximala övre gränsen i megabyte i fältet **tilldelning av diskutrymm** e.

#### Anpassad domän {#custom-domain}

Genom att växla detta alternativ kan du tillåta anpassade domäner specifikt för denna plan.

![Fliken Anpassade domäner](/img/config/product-custom-domains.png)

#### Teman {#themes}

Fliken **Teman** inom produktalternativen gör det möjligt för nätverksadministratören att göra teman tillgängliga för kunder för val och att valfritt tvinga temats tillstånd.

![Fliken Teman](/img/config/product-themes.png)

_**Observera: För att teman ska kunna göras tillgängliga för kunder måste de vara nätverksaktiverade av nätverksadministratören.**_

![Sidan Nätverksteman](/img/config/product-themes-network-enabled.png)

Alternativet **synlighet** definierar om detta tema är synligt för kunden eller inte när de visar fliken **Utseende > Teman** på sin webbplats. Att ställa in detta alternativ till **Dold** tar bort temat från vyn och begränsar därmed möjligheten att välja och aktivera det.

![Fliken Teman](/img/config/product-themes.png)

Valet **beteende** gör det möjligt för nätverksadministratören att definiera temats tillstånd när kundens webbplats skapas.

I tillståndet **T** **illgänglig** görs temat tillgängligt för kunden för självaktivering. Omvänt tar tillståndet **Inte tillgänglig** bort kundens möjlighet att aktivera temat. Slutligen tvingar alternativet **Tvinga aktivering** valet och aktiveringen av temat och ställer därmed in det som standard när webbplatsen skapas.

#### Plugins {#plugins}

På liknande sätt som fliken Teman gör Ultimate Multisite det möjligt för nätverksadministratören att definiera synligheten för plugins för kunder samt deras tillstånd när en ny webbplats skapas.

![Fliken Plugins](/img/config/product-plugins.png)

Rullgardinsmenyn **synlighet** gör det möjligt för pluginet att antingen vara synligt eller dolt för kunden när det visas på deras webbplats via menyalternativet Plugins.

Nätverksadministratören kan ytterligare styra pluginens beteende genom att använda alternativen i rullgardinsmenyn för beteende.

![Fliken Plugins](/img/config/product-plugins.png)

Valet **Default** respekterar pluginets tillstånd som definierats i webbplatsmallen som kunden valt. Därmed kommer plugin som är aktiverade i mallen att förbli aktiverade när mallen klonas till kundens webbplats.

**Force Activate** placerar pluginet i ett aktivt tillstånd när webbplatsen skapas och omvänt avaktiverar **Force Inactivate** pluginet när webbplatsen skapas. I båda dessa fall kan pluginets tillstånd ändras manuellt av kunden via deras WordPress Plugins-meny.

Inställningen **Force Activate & Lock** fungerar på liknande sätt men förhindrar att pluginets tillstånd ändras av kunden. Därmed kommer en inställning av Force Activate and Lock att tvinga pluginet till sitt aktiva tillstånd och förhindra kunden från att avaktivera det. På samma sätt kommer inställningen **Force Inactivate & Lock** att tvinga pluginet till sitt inaktiva tillstånd och förhindra användaren från att aktivera pluginet.

Nätverksadministratören kan vilja överväga inställningarna Force Activate & Lock och Force Inactivate & Lock tillsammans med webbplatsmallar, eftersom plugin och plugin-tillstånd inom mallarna kan påverkas av dessa inställningar om de väljs.

#### Återställ begränsningar {#reset-limitations}

Fliken **Reset Limitations** återställer alla anpassade gränser som definierats för produkten. Klicka på knappen **reset limitations** för att återställa begränsningar.

![Fliken Återställ begränsningar](/img/config/product-reset-limitations.png)

För att bekräfta åtgärden skjuter du reglaget **confirm reset** till dess aktiva läge till höger och klickar på knappen **reset limitations**.

![Fliken Återställ begränsningar](/img/config/product-reset-limitations.png)

## Redigera, duplicera eller ta bort produkt {#edit-duplicate-or-delete-product}

Befintliga produkter kan redigeras, dupliceras eller tas bort genom att navigera till **Ultimate Multisite > Products** och hovra över det befintliga produktnamnet.

![Åtgärder vid hovring över produkt](/img/config/product-hover-actions.png)
