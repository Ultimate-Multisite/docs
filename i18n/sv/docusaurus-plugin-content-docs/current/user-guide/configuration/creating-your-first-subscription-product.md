---
title: Skapa din första prenumerationsprodukt
sidebar_position: 6
_i18n_hash: ec2328e89406069449b4078a2724c029
---
# Skapa din första prenumerationsprodukt (v2)

_**VIKTIG INFORMATION: Den här artikeln gäller endast användare av Ultimate Multisite version 2.x. Om du använder version 1.x,**_ **_**se den här artikeln**_**.

För att komma igång med ditt nätverk och börja sälja dina tjänster till potentiella användare behöver du ha olika prenumerationsalternativ. Hur skapar du dessa produkter? Vilka typer av produkter kan du erbjuda? I den här artikeln går vi igenom allt du behöver veta om produkter.

## Produkttyp

Med Ultimate Multisite kan du erbjuda två kategorier av produkter till dina kunder: **planer** och **tillägg** **(Order Bump)**. Tillägg kan delas in i två typer: **paket** och **tjänster**. Vi går igenom deras skillnader och särdrag härnäst.

  * **Planer**: den grundläggande produkten i Ultimate Multisite. Din kund kan bara ha ett medlemskap om det är kopplat till en plan. En plan ger dina kunder en eller flera webbplatser (beroende på planens konfiguration) med de begränsningar du anger på produktredigeringssidan.

  * **Paket**: tillägg som direkt påverkar funktionaliteten i Ultimate Multisite-planer. De ändrar begränsningar eller lägger till nya resurser, plugins eller teman till den ursprungliga planen som din kund köpte. Till exempel kan en basplan tillåta 1 000 besök per månad och du kan erbjuda ett paket som utökar detta till 10 000.

  * **Tjänster:** tillägg som inte ändrar Ultimate Multisites funktionalitet. Det är uppgifter som du utför åt din kund utöver den plan de köpte. Till exempel kan din kund köpa en plan som tillåter en enda webbplats och dessutom betala för en extra tjänst som designar webbplatsen.

## Hantera produkter

För många kan fliken **Produkter** i Ultimate Multisite **(Ultimate Multisite > Produkter)** jämföras med planer i en traditionell webbhotningsmiljö.

I Ultimate Multisite definierar fliken Produkter strukturen och begränsningarna som gäller för en specifik produkt eller tjänst. Dessa strukturer omfattar produktens eller tjänstens beskrivning, pris, skatter och behörigheter.

Det här avsnittet hjälper dig att förstå denna viktiga grundsten i Ultimate Multisite.

![Produktlistsida](/img/config/products-list.png)

## Lägga till produkter

Oavsett om det är en plan, ett paket eller en tjänst så är startpunkten för att definiera en ny artikel via **Ultimate Multisite > Produkter > Lägg till produkt**.

![Knappen Lägg till produkt](/img/config/product-add-button.png)

Gränssnittet innehåller två huvudsakliga sektioner. Till vänster finns flera flikar som hjälper till att definiera produkten och till höger finns några sektioner för att definiera produktens baspris, dess aktiva status och produktbild.

![Översikt över produktredigeringssidan](/img/config/product-edit-full.png)

### Beskrivning

Den grundläggande produktinformationen kan definieras genom att ange ett produktnamn och en beskrivning. Dessa identifierare visas överallt där produktinformation behövs, som vid val av plan och pris, på fakturor, vid uppgraderingar och liknande.

![Avsnitt för produktbeskrivning](/img/config/product-description.png)

### Pristyp

På höger sida av gränssnittet kan basprissättningen definieras.

![Avsnitt för pris och spara](/img/config/product-pricing-save.png)

Ultimate Multisite stöder tre olika pristyper. Alternativet **betald** uppmanar nätverksadministratören att ange information om produktens pris och faktureringsfrekvens.

### Prissättning

Priskomponenten definierar produktens baspris och faktureringsintervall.

![Avsnitt för pris och spara](/img/config/product-pricing-save.png)

Ett exempelpris på 299 kr med inställningen 1 månad fakturerar alltså 299 kr varje månad. På samma sätt fakturerar ett pris på 899 kr med inställningen 3 månader det beloppet varje kvartal.

### Faktureringscykler

Avsnittet för faktureringscykler anger frekvensen för det tidigare nämnda faktureringsintervallet och förstås vanligtvis i samband med kontrakt eller fasta perioder.

![Avsnitt för pris och spara](/img/config/product-pricing-save.png)

Till exempel skulle ett produktpris på 299 kr med ett intervall på 1 månad och 12 faktureringscykler fakturera 299 kr per månad för produkten under de följande 12 månaderna. Med andra ord skulle en sådan inställning etablera en fast prisperiod på 299 kr per månad i 12 månader och sedan upphöra att fakturera.

### Provperiod

Genom att aktivera växeln för erbjuden provperiod kan nätverksadministratören definiera en provperiod för produkten.

![Avsnitt för pris och spara](/img/config/product-pricing-save.png)

Under provperioden kan kunderna använda produkten fritt och faktureras inte förrän provperioden har löpt ut.

### Startavgift

Du kan också lägga till en startavgift på din plan.

![Avsnitt för pris och spara](/img/config/product-pricing-save.png)

Det innebär att din kund betalar ett extra belopp vid den första debiteringen (utöver planpriset) som motsvarar den avgift du definierat i det här avsnittet.

### Aktiv

Växeln för aktiv definierar i praktiken om produkten är tillgänglig för kunder vid nya registreringar.

![Växel för aktiv](/img/config/product-active.png)

Om det finns befintliga kunder på denna plan innebär inaktivering av växeln att planen blir ärvd och tas bort från framtida registreringar. **Befintliga kunder på planen kommer att fortsätta faktureras** tills de flyttas till en ny plan eller tas bort från planen.

### Produktbild

Knappen **Ladda upp bild** låter nätverksadministratören använda mediebiblioteket för att välja eller ladda upp en produktbild.

![Avsnitt för produktbild](/img/config/product-image.png)

### Ta bort

Knappen **Ta bort produkt** tar bort produkten från systemet. Den visas när produkten har publicerats.

![Avsnitt för ta bort produkt](/img/config/product-delete.png)

Till skillnad från andra borttagningar placeras produkten inte i något papperskorgstillstånd. När produkten väl är borttagen är åtgärden oåterkallelig.

### Produktalternativ

När den grundläggande produktinformationen är definierad hjälper produktalternativen nätverksadministratören att ytterligare definiera produktens specifika attribut.

#### Allmänt

Fliken **Allmänt** definierar produktens allmänna attribut som inte hör till någon av de andra produktspecifika flikarna.

![Fliken Allmänt](/img/config/product-general-tab.png)

Den självförklarande **produktsluggen** definierar sluggen med vilken produkten identifieras i URL:er och andra områden av Ultimate Multisite.

Ultimate Multisite stöder flera produkttyper, nämligen Plan, Paket och Tjänst. Flikarna för **Produktalternativ** justeras dynamiskt beroende på den angivna produkttypen.

**Kundroll** anger vilken roll kunden tilldelas när webbplatsen skapas. För de flesta nätverksadministratörer kommer detta vanligtvis att vara Ultimate Multisite-standard eller Administratör. Standardrollen för Ultimate Multisite kan ställas in under **Ultimate Multisite > Inställningar > Inloggning & Registrering**.

![Inställningar för kundroll](/img/config/product-customer-role-settings.png)

#### Upp- och nedgraderingar

Den här fliken anger de uppgraderings- och nedgraderingsvägar som är tillgängliga för en kund inom deras specifika nivå.

För att förstå detta koncept, tänk dig ett exempel där en nischad Ultimate Multisite-installation erbjuder lärandehanteringslösningar till sina kunder. För att uppnå detta definieras tre planer (Bas, Plus och Premium) och specifika plugins aktiveras för varje plan (se längre fram i det här avsnittet för instruktioner om hur man aktiverar plugins).

Om Ultimate Multisite-installationen också betjänar företagswebbplatser eller e-handelswebbplatser kan dessa planer kräva att andra plugins installeras och aktiveras.

I detta avseende skulle det vara oönskat och problematiskt att låta e-learningkunder gå över till e-handelsplaner eftersom dessa planer, priser och begränsningar kanske inte passar.

För att begränsa kundens väg och förhindra incidenter kan nätverksadministratören därför definiera en plangrupp och inom den gruppen ange vilka planer kunden kan gå över till.

![Fliken Upp- och nedgraderingar](/img/config/product-upgrades.png)

För att definiera en plangrupp anger du de kompatibla planerna i listan för **plangrupp**. **Produktordningen** bestämmer hur planerna ordnas och visas från lägsta till högsta.

Ultimate Multisite inkluderar också en **order bump**-funktion där lämpliga tilläggsprodukter och tjänster kan läggas till planer. Dessa erbjuds kunden som ytterligare artiklar som kan läggas till planer vid kassan eller under en uppgradering.

#### Prisvariationer

Prisvariationer låter nätverksadministratören ange alternativa prisnivåer beroende på varaktighet. Denna inställning gör det möjligt att etablera prisnivåer för 3 månader, 6 månader eller årsvis, eller någon annan varaktighet och frekvens som bestäms av användningsfallet.

![Fliken Prisvariationer](/img/config/product-price-variations.png)

För att etablera prisvariationer, ställ växeln **aktivera prisvariationer** till aktiv och klicka på knappen **Lägg till ny prisvariation**.

För att ange en variation, ställ in varaktighet, period och pris för variationen. Ytterligare variationer kan anges genom att klicka på knappen igen.

![Fliken Prisvariationer](/img/config/product-price-variations.png)

#### Skatter

Fliken **Skatter** överensstämmer med skatteinställningarna som anges i **Ultimate Multisite > Inställningar > Skatter** och mer specifikt de definierade skattesatserna. För att aktivera skatter och definiera tillämpliga skattesatser, se dokumentationen under **Ultimate Multisite: Inställningar**

![Fliken Skatter](/img/config/product-taxes.png)

I ett tidigare exempel definierade vi en lokal skattesats på 7,25 % som gäller för kunder i Kalifornien (USA).

När skattesatsen är definierad i **Ultimate Multisite > Inställningar > Hantera skattesatser** kan den väljas på produktnivå.

![Fliken Skatter](/img/config/product-taxes.png)

För att ange att en produkt är en skattepliktig artikel, ställ växeln **Är skattepliktig** till aktiv och välj tillämplig skattesats från rullgardinsmenyn Skattekategori.

#### Webbplatsmallar

I grund och botten är webbplatsmallar kompletta WordPress-webbplatser som klonas till en kunds webbplats vid starten av deras prenumeration.

![Fliken Webbplatsmallar](/img/config/product-site-templates.png)

Nätverksadministratören skapar och konfigurerar mallwebbplatsen som en vanlig WordPress-webbplats med aktiverade och konfigurerade teman, plugins och innehåll. Mallwebbplatsen klonas ordagrant till kunden.

Denna flik låter nätverksadministratören ange beteendet för webbplatsmallar vid en ny prenumeration. För att använda webbplatsmallar, ställ växeln **tillåt webbplatsmallar** till dess aktiva läge.

**Läget för val av webbplatsmall** definierar beteendet för webbplatsmallar under prenumerationsprocessen.

Inställningen **Standard** följer stegen i kassaformuläret. Om nätverksadministratören har definierat ett steg för mallval i kassaprocessen och steget har definierats med mallar kommer denna inställning att respektera de direktiv som fastställts i kassasteget.

Att ange **Tilldela webbplatsmall** tvingar valet av den angivna mallen. Följaktligen tas alla steg för mallval i kassaprocessen bort.

Slutligen åsidosätter **Välj tillgängliga webbplatsmallar** mallarna som anges i kassasteget med de mallar som valts i denna inställning. En förvald mall kan också definieras för att hjälpa kunden i valet.

I slutändan, om nätverksadministratören vill att mallvalet ska ske i kassastegen räcker inställningen '_standard_'. Alternativt, för att ta bort och låsa mallvalet och delegera valet till planinställningarna kan alternativen '_tilldela ny mall_' eller '_välj tillgängliga webbplatsmallar_' vara önskvärda.

#### Webbplatser

Fliken **Webbplatser** är en del av Ultimate Multisites begränsningsfunktionalitet.

![Fliken Webbplatser](/img/config/product-sites.png)

Denna inställning anger det maximala antalet webbplatser en kund kan skapa under sitt medlemskap.

För att aktivera begränsningen, ställ växeln **begränsa webbplatser** till dess aktiva läge och ange det maximala antalet webbplatser i fältet **webbplatskvot**.

#### Besök

Fliken **Besök** är ytterligare en del av Ultimate Multisites begränsningssystem. Denna inställning möjliggör redovisning och efterföljande begränsning av unika besökare på en kunds webbplats.

![Fliken Besök](/img/config/product-visits.png)

Ur ett marknadsföringsperspektiv kan nätverksadministratörer använda denna inställning som ett sätt att uppmuntra kunder att uppgradera sin plan när gränser nås. Denna inställning kan också hjälpa nätverksadministratören att begränsa och förhindra överdriven trafik till webbplatser för att bevara systemresurser.

För att använda denna funktion, ställ växeln **begränsa unika besök** till dess aktiva läge och ange det maximala antalet unika besökare i fältet **kvot för unika besök**.

När denna gräns nås kommer Ultimate Multisite att sluta servera kundens webbplats och istället visa ett meddelande som anger att gränserna har överskridits.

#### Användare

Ultimate Multisites 'Användare'-begränsningar låter nätverksadministratören sätta gränser för antalet användare som kan skapas och tilldelas roller.

![Fliken Användare](/img/config/product-users.png)

För att aktivera begränsningsfunktionen, ställ växeln **begränsa användare** till dess aktiva läge genom att skjuta den åt höger.

Därefter, för varje roll som ska begränsas, ställ växeln bredvid den till ett aktivt läge och definiera den maximala övre gränsen i lämpligt fält.

#### Inläggstyper

Fliken **Inläggstyper** låter nätverksadministratören sätta detaljerade gränser för det omfattande utbudet av inläggstyper inom WordPress.

![Fliken Inläggstyper](/img/config/product-post-types.png)

På grund av WordPress konstruktion är inlägg och inläggstyper en betydande del av dess kärnfunktionalitet, och därför är Ultimate Multisites begränsningssystem utformat för att hjälpa nätverksadministratören att etablera och upprätthålla gränser.

För att aktivera detta begränsningsundersystem, ställ växeln **begränsa inläggstyper** till dess aktiva läge genom att skjuta den åt höger.

Därefter, för varje inläggstyp som ska begränsas, aktivera den genom att skjuta den åt höger och ange den maximala övre gränsen i lämpligt fält.

#### Diskutrymme

Fliken **Diskutrymme** låter nätverksadministratörer begränsa det utrymme som förbrukas av kunder.

![Fliken Diskutrymme](/img/config/product-disk-space.png)

Vanligtvis i en WordPress multisite delas kärnfilerna mellan alla webbplatser och individuella kataloger skapas för mediefiler och uppladdningar, för vilka dessa inställningar och begränsningar gäller.

För att aktivera begränsningen för diskanvändning, ställ växeln **begränsa diskstorlek per webbplats** till dess aktiva läge genom att skjuta den åt höger.

Ange sedan den maximala övre gränsen i megabyte i fältet **diskutrymmeskvot**.

#### Anpassad domän

Genom att aktivera detta alternativ kan du tillåta anpassade domäner specifikt för denna plan.

![Fliken Anpassade domäner](/img/config/product-custom-domains.png)

#### Teman

Fliken **Teman** inom produktalternativen låter nätverksadministratören göra teman tillgängliga för kunder att välja och valfritt tvinga temats tillstånd.

![Fliken Teman](/img/config/product-themes.png)

_**Observera: För att teman ska bli tillgängliga för kunder måste de vara nätverksaktiverade av nätverksadministratören.**_

![Sida för nätverksteman](/img/config/product-themes-network-enabled.png)

Alternativet **synlighet** definierar om detta tema är synligt för kunden när de ser sin flik **Utseende > Teman** på sin webbplats. Att ställa in detta alternativ till **Dold** tar bort temat från vyn och begränsar därmed möjligheten att välja och aktivera det.

![Fliken Teman](/img/config/product-themes.png)

Valet av **beteende** låter nätverksadministratören definiera temats tillstånd vid skapandet av kundens webbplats.

I tillståndet **Tillgänglig** görs temat tillgängligt för kunden för självaktivering. Omvänt tar tillståndet **Inte tillgänglig** bort kundens möjlighet att aktivera temat. Slutligen tvingar alternativet **Tvinga aktivering** valet och aktiveringen av temat och ställer därmed in det som standard vid webbplatsskapande.

#### Plugins

I likhet med fliken Teman låter Ultimate Multisite nätverksadministratören definiera synligheten av plugins för kunder samt deras tillstånd vid skapandet av en ny webbplats.

![Fliken Plugins](/img/config/product-plugins.png)

Rullgardinsmenyn **synlighet** tillåter att pluginet antingen är synligt eller dolt från kunden när det visas på deras webbplats genom menyalternativet Plugins.

Nätverksadministratören kan ytterligare manipulera beteendet hos plugins genom att använda alternativen i rullgardinsmenyn för beteende.

![Fliken Plugins](/img/config/product-plugins.png)

Valet **Standard** respekterar det plugintillstånd som definieras i webbplatsmallen som valts av kunden. Plugins som är aktiverade i mallen förblir därmed aktiverade när mallen klonas till kundens webbplats.

**Tvinga aktivering** placerar pluginet i ett aktivt tillstånd vid webbplatsskapande och omvänt avaktiverar **Tvinga inaktivering** pluginet vid webbplatsskapande. I båda dessa fall kan pluginets tillstånd manuellt ändras av kunden genom deras WordPress Plugins-meny.

Inställningen **Tvinga aktivering & Lås** fungerar liknande men förhindrar att pluginets tillstånd ändras av kunden. En inställning av Tvinga aktivering och Lås kommer därmed att tvinga pluginet till dess aktiva tillstånd och förhindra kunden från att avaktivera det. På samma sätt kommer inställningen **Tvinga inaktivering & Lås** att tvinga pluginet till dess inaktiva tillstånd och förhindra användaren från att aktivera pluginet.

Nätverksadministratören kan vilja överväga inställningarna Tvinga aktivering & Lås och Tvinga inaktivering & Lås i samband med webbplatsmallar eftersom plugins och plugintillstånd i mallarna kan påverkas av dessa inställningar om de väljs.

#### Återställ begränsningar

Fliken **Återställ begränsningar** återställer alla anpassade gränser som definierats på produkten. För att återställa begränsningar klicka på knappen **återställ begränsningar**.

![Fliken Återställ begränsningar](/img/config/product-reset-limitations.png)

För att bekräfta åtgärden, skjut växeln **bekräfta återställning** till dess aktiva läge till höger och klicka på knappen **återställ begränsningar**.

![Fliken Återställ begränsningar](/img/config/product-reset-limitations.png)

## Redigera, duplicera eller ta bort produkt

Befintliga produkter kan redigeras, dupliceras eller tas bort genom att navigera till **Ultimate Multisite > Produkter** och hovra över det befintliga produktnamnet.

![Hovringsåtgärder för produkt](/img/config/product-hover-actions.png)
