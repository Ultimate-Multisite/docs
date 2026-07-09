---
title: Webbplatsmallar
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2) {#site-templates-v2}

_**OBS: Den här artikeln hänvisar till Ultimate Multisite version 2.x. Om du använder version 1.x,**_ **se den här artikeln** _**.**_

Vårt mål när vi skapar ett premiumnätverk med Ultimate Multisite är att automatisera så många processer som möjligt samtidigt som vi ger våra kunder flexibilitet och olika alternativ att välja mellan när de skapar sina webbplatser. Ett enkelt sätt att uppnå den här balansen är att använda funktionen Ultimate Multisite Site Templates.

## Vad är en Site Template? {#what-is-a-site-template}

Som namnet antyder är en Site Template en grundläggande webbplats som kan användas som bas när nya webbplatser skapas i ditt nätverk.

Det innebär att du kan skapa en baswebbplats, aktivera olika plugin, ange ett aktivt theme och anpassa den på vilket sätt du vill. När din kund sedan skapar ett nytt Account får de, i stället för en standard-WordPress-webbplats utan meningsfullt innehåll, en kopia av din baswebbplats med alla anpassningar och allt innehåll redan på plats.

Det låter fantastiskt, men hur skapar jag en ny webbplatsmall? Det är så enkelt som det bara kan bli.

## Skapa och redigera en ny Site Template {#creating-and-editing-a-new-site-template}

Site Templates är bara vanliga webbplatser i ditt nätverk. För att skapa en ny mall kan du helt enkelt gå till **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Knappen Lägg till webbplats på listsidan Sites](/img/config/site-templates-list.png)**

Detta öppnar ett modalfönster där du blir ombedd att ange **Site title, Site Domain/path,** och **Site type**. Under rullgardinsfältet **Site Type** ska du se till att välja **Site Template** *.*

_![Modal för att lägga till Site Template med rullgardinsmeny för webbplatstyp](/img/config/site-templates-list.png)_

Du kan också lägga till en kundanpassad beskrivning som förklarar vad mallen innehåller:

![Beskrivningsfält för Site Template på redigeringsskärmen för Site Template](/img/config/site-template-edit-description.png)

Längst ned i formuläret ser du en växlingsknapp för **Copy Site**. Den låter dig skapa en ny Site Template baserat på en befintlig Site Template som utgångspunkt, för att hjälpa dig att spara tid i stället för att skapa en Site Template från grunden.

![Modal för att lägga till Site Template med växlingsknappen Copy Site](/img/config/site-templates-list.png)

### Anpassa innehållet i en Site Template {#customizing-the-contents-of-a-site-template}

För att anpassa din Site Template navigerar du helt enkelt till dess Dashboard-panel och gör de ändringar du behöver. Du kan skapa nya inlägg, sidor, aktivera plugin och ändra aktivt theme. Du kan till och med gå till anpassaren och ändra alla möjliga anpassningsalternativ.

![Redigeringsgränssnitt för Site Template](/img/config/site-template-edit.png)

All denna data kopieras över när en kund skapar en ny webbplats baserat på den Site Template.

### Avancerade alternativ {#advanced-options}

Om du är bekväm med viss egen kodning kan du använda vårt Search and Replace API för att automatiskt ersätta information på den nya webbplatsen efter att den har skapats. Det är användbart för saker som att ersätta företagsnamn på en Om oss-sida, ersätta kontakt-e-postadressen på kontaktsidan, osv.

### Använda Site Templates {#using-site-templates}

Okej, så du har skapat ett antal olika Site Templates med olika designer, themes och inställningar. Hur gör du dem användbara i ditt nätverk nu?

I princip finns det två tillvägagångssätt du kan använda nu (inte samtidigt):

  * Koppla en Site Template till var och en av dina Plans

**ELLER**

  * Låta dina kunder välja site templates själva under registreringen.

#### Läge 1: Tilldela Site Template {#mode-1-assign-site-template}

I det här läget kan dina kunder inte välja en mall när de skapar ett Account, utan du definierar i stället vilken mall som ska användas för var och en av dina Plans.

För att göra det behöver du gå till **Ultimate Multisite > Products > Edit**.

![Redigera product för att tilldela Site Template](/img/config/product-site-templates.png)

Detta tar dig till sidan **Edit Product**. Under avsnittet **Product Options** hittar du fliken **Site template** och väljer alternativet **Assign Site Template** i rullgardinsfältet. Detta visar listan över tillgängliga site templates och låter dig välja endast en Site Template som är dedikerad till produkten.

![Fliken site template för product med alternativet Assign Site Template](/img/config/product-site-templates.png)

#### Läge 2: Välj tillgänglig Site Template {#mode-2-choose-available-site-template}

I det här läget ger du dina kunder ett val under registreringsprocessen. De kan välja mellan olika site templates som du definierar under produktinställningarna. Du har möjlighet att begränsa vilka site templates de kan välja mellan under den valda produkten. Detta gör att du kan ha olika uppsättningar site templates under varje produkt, vilket är idealiskt för att lyfta fram olika funktioner och egenskaper för en produkt med högre pris.

På sidan **Edit Product**. Under avsnittet **Product Options** hittar du fliken **Site template** och väljer alternativet **Choose Available Site Template** i rullgardinsfältet. Detta visar listan över tillgängliga site templates och låter dig välja de site templates du vill ska vara tillgängliga. Du kan göra detta genom att välja dess beteende: **Available** om du vill att Site Template ska ingå i listan. _**Not Available**_ om du vill att Site Template inte ska visas som ett alternativ. Och **Pre-selected** om du vill att en av de listade site templates ska vara förvald som standard.

![Välj tillgängliga site templates med beteendealternativ](/img/config/product-site-templates.png)

### Standardläge: Val av Site Template i Checkout-formuläret {#default-mode-site-template-selection-on-the-checkout-form}

Om du vill att alla dina site templates ska vara tillgängliga under registreringen, eller kanske inte föredrar att göra extra arbete med att tilldela eller specificera site templates under varje produkt du skapar. Då kan du helt enkelt ställa in valet av Site Template under ditt **Checkout Form**. För att göra detta går du till **Ultimate Multisite > Checkout Forms** och klickar på **Edit** under formuläret du vill konfigurera.

Detta visar sidan **Edit Checkout Form**. Hitta fältet **Template Selection** och klicka på **Edit** under det.

Ett modalfönster visas. Under fältet **Template Sites** kan du välja och lista alla webbplatsmallar som du vill ska vara tillgängliga under registreringen. De webbplatsmallar du anger härifrån kommer att vara tillgängliga oavsett vilken produkt användaren valde.

![Fält för val av mall i redigeraren för checkout-formulär](/img/config/checkout-form-template-step.png)

På frontend ser kunderna mallväljaren under checkout och kan välja startdesignen för sin nya webbplats.

![Frontend-mallväljare under registrering](/img/config/frontend-template-chooser.png)

### Alternativ för webbplatsmallar {#site-template-options}

Det finns andra funktioner för webbplatsmallar tillgängliga som du kan slå på eller av under Ultimate Multisite-inställningar.

![Alternativ för webbplatsmallar i Ultimate Multisite-inställningar](/img/config/settings-sites-templates-section.png)

#### Tillåt byte av mall {#allow-template-switching}

Om du aktiverar det här alternativet kan dina klienter byta den mall de väljer under registreringsprocessen efter att Account och webbplatsen har skapats. Detta är användbart ur en klients synvinkel eftersom det låter dem välja om en mall om de senare upptäcker att deras ursprungliga val inte var det bästa för deras specifika behov.

#### Tillåt användare att använda sin webbplats som mallar {#allow-users-to-use-their-site-as-templates}

Eftersom användare av undersajter har lagt tid på att bygga och designa sin egen webbplats kanske de vill klona och använda den som en av webbplatsmallarna som är tillgängliga när en annan undersajt skapas i ditt nätverk. Det här alternativet gör det möjligt för dem att göra det.

#### Kopiera media vid duplicering av mall {#copy-media-on-template-duplication}

Om du markerar det här alternativet kopieras media som laddats upp på mallwebbplatsen till den nyligen skapade webbplatsen. Detta kan åsidosättas för var och en av planerna.

#### **Förhindra sökmotorer från att indexera webbplatsmallar** {#prevent-search-engines-from-indexing-site-templates}

Webbplatsmallar som diskuteras i den här artikeln är standardmallar men fortfarande en del av ditt nätverk, vilket innebär att de fortfarande är tillgängliga för sökmotorer att hitta. Det här alternativet låter dig dölja webbplatsmallarna så att sökmotorer kan indexera dem.

## Förifylla webbplatsmallar med automatisk sök och ersätt {#pre-populating-site-templates-with-auto-search-and-replace}

En av de mest kraftfulla funktionerna i Ultimate Multisite är möjligheten att lägga till godtyckliga text-, färg- och valfält i registreringsformuläret. När vi har fångat in dessa data kan vi använda dem för att förifylla innehållet i vissa delar av den valda webbplatsmallen. När den nya webbplatsen sedan publiceras kommer Ultimate Multisite att ersätta platshållarna med den faktiska informationen som angavs under registreringen.

Om du till exempel vill få din slutanvändares företagsnamn under registreringen och automatiskt lägga in företagsnamnet på startsidan. På startsidan för din mallwebbplats behöver du lägga till platshållarna, som i bilden nedan (platshållare ska läggas till omgivna av dubbla klammerparenteser - {{placeholder_name}}).

![Startsida med platshållartext inom klammerparenteser](/img/config/site-templates-list.png)

Sedan kan du helt enkelt lägga till ett matchande registreringsfält i ditt checkout-formulär för att fånga in dessa data. Samma redigerare för checkout-formulär som används för mallval låter dig placera anpassade fält bredvid mallväljaren:

![Mallval och registreringsfält i redigeraren för checkout-formulär](/img/config/checkout-form-template-step.png)

Din kund kommer sedan att kunna fylla i det fältet under registreringen.

![Frontend-checkout-formulär med mallväljare](/img/config/frontend-template-chooser.png)

Ultimate Multisite kommer sedan att ersätta platshållarna med de data som kunden tillhandahållit automatiskt.

![Platshållare ersatta med kunddata på webbplatsen](/img/config/site-templates-list.png)

### Lösa problemet med "mall full av platshållare" {#solving-the-template-full-of-placeholders-problem}

Allt detta är bra, men vi stöter på ett fult problem: nu är våra webbplatsmallar - som kan besökas av våra kunder - fulla av fula platshållare som inte säger så mycket.

För att lösa det erbjuder vi alternativet att ange falska värden för platshållarna, och vi använder dessa värden för att söka och ersätta deras innehåll på mallwebbplatserna medan dina kunder besöker.

Du kan få åtkomst till redigeraren för mallplatshållare genom att gå till **Ultimate Multisite > Settings > Sites** och sedan, i sidofältet, klicka på länken **Edit Placeholders**.

![Inställningar för webbplatsmallar under inställningssidan Sites](/img/config/settings-sites-templates-section.png)

Det tar dig till innehållsredigeraren för platshållare, där du kan lägga till platshållare och deras respektive innehåll.

![Ingång till innehållsredigeraren för mallplatshållare](/img/config/settings-sites-templates-section.png)
