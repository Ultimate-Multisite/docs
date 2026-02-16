---
title: Webbplatsmallar
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# Webbplatsmallar (v2)

_**OBS! Den här artikeln gäller Ultimate Multisite version 2.x. Om du använder version 1.x,**_ **se denna artikel** _**.**_

Vårt mål när vi skapar ett premiumnätverk med Ultimate Multisite är att automatisera så många processer som möjligt, samtidigt som vi ger våra kunder flexibilitet och olika alternativ att välja mellan när de skapar sina webbplatser. Ett enkelt sätt att uppnå denna balans är att använda funktionen för webbplatsmallar i Ultimate Multisite.

## Vad är en webbplatsmall?

Som namnet antyder är en webbplatsmall en grundmall som kan användas som bas när du skapar nya webbplatser i ditt nätverk.

Det innebär att du kan skapa en baswebbplats, aktivera olika plugins, välja ett aktivt tema och anpassa den precis som du vill. När din kund sedan skapar ett nytt konto får de inte en tom WordPress-webbplats utan meningsfullt innehåll – istället får de en kopia av din baswebbplats med alla anpassningar och allt innehåll redan på plats.

Det låter fantastiskt, men hur skapar jag en ny webbplatsmall? Det är så enkelt som det bara kan bli.

## Skapa och redigera en ny webbplatsmall

Webbplatsmallar är helt vanliga webbplatser i ditt nätverk. För att skapa en ny mall går du bara till **Nätverksadmin > Ultimate Multisite > Webbplatser > Lägg till webbplats.**

**![Knappen Lägg till webbplats på sidan med webbplatslistan](/img/config/site-templates-list.png)**

Detta öppnar ett modalt fönster där du får ange **Webbplatsens titel, Webbplatsens domän/sökväg** och **Webbplatstyp**. Under rullgardinsmenyn **Webbplatstyp** ser du till att välja **Webbplatsmall***.*

_![Modal för att lägga till webbplatsmall med rullgardinsmeny för webbplatstyp](/img/config/site-templates-list.png)_

Längst ner i formuläret hittar du en växlingsknapp för **Kopiera webbplats**. Med den kan du skapa en ny webbplatsmall baserad på en befintlig webbplatsmall som utgångspunkt, vilket sparar tid istället för att skapa en webbplatsmall från grunden.

![Modal för att lägga till webbplatsmall med växlingsknapp för kopiering](/img/config/site-templates-list.png)

### Anpassa innehållet i en webbplatsmall

För att anpassa din webbplatsmall navigerar du helt enkelt till dess kontrollpanel och gör de ändringar du behöver. Du kan skapa nya inlägg, sidor, aktivera plugins och byta aktivt tema. Du kan till och med gå till Anpassaren och ändra alla möjliga inställningar.

All denna data kopieras när en kund skapar en ny webbplats baserad på den webbplatsmallen.

### Avancerade alternativ

Om du kan lite egen kodning kan du använda vårt API för sök och ersätt för att automatiskt ersätta information på den nya webbplatsen efter att den skapats. Detta är användbart för saker som att ersätta företagsnamn på en Om oss-sida, ersätta kontaktmejlen på Kontaktsidan och så vidare.

### Använda webbplatsmallar

Okej, så du har skapat ett gäng olika webbplatsmallar med olika designer, teman och inställningar. Hur gör du dem användbara i ditt nätverk nu?

Det finns i princip två tillvägagångssätt du kan använda nu (inte samtidigt):

  * Koppla en webbplatsmall till var och en av dina abonnemang

**ELLER**

  * Låta dina kunder själva välja webbplatsmall vid registreringen.

#### Läge 1: Tilldela webbplatsmall

I det här läget kan dina kunder inte välja en mall när de skapar ett konto, utan istället definierar du vilken mall som ska användas för vart och ett av dina abonnemang.

För att göra detta går du till **Ultimate Multisite > Produkter > Redigera**.

![Redigera produkt för att tilldela webbplatsmall](/img/config/product-site-templates.png)

Detta tar dig till sidan **Redigera produkt**. Under avsnittet **Produktalternativ** hittar du fliken **Webbplatsmall** och väljer alternativet **Tilldela webbplatsmall** från rullgardinsmenyn. Detta visar listan över tillgängliga webbplatsmallar och låter dig välja endast en webbplatsmall för produkten.

![Fliken Webbplatsmall med alternativet Tilldela webbplatsmall](/img/config/product-site-templates.png)

#### Läge 2: Välj tillgänglig webbplatsmall

I det här läget ger du dina kunder ett val under registreringsprocessen. De kan välja mellan olika webbplatsmallar som du definierar i produktinställningarna. Du har möjlighet att begränsa vilka webbplatsmallar de kan välja från under den valda produkten. Detta låter dig ha olika uppsättningar av webbplatsmallar under varje produkt, vilket är idealiskt för att lyfta fram olika funktioner och egenskaper för en dyrare produkt.

På sidan **Redigera produkt**, under avsnittet **Produktalternativ**, hittar du fliken **Webbplatsmall** och väljer alternativet **Välj tillgänglig webbplatsmall** från rullgardinsmenyn. Detta visar listan över tillgängliga webbplatsmallar och låter dig välja vilka webbplatsmallar du vill göra tillgängliga. Du gör detta genom att välja dess beteende: **Tillgänglig** om du vill att webbplatsmallen ska ingå i listan. _**Ej tillgänglig**_ om du inte vill att webbplatsmallen ska visas som ett alternativ. Och **Förvald** om du vill att en av webbplatsmallarna ska vara förvald.

![Välj tillgängliga webbplatsmallar med beteendealternativ](/img/config/product-site-templates.png)

### Standardläge: Val av webbplatsmall i kassaformuläret

Om du vill att alla dina webbplatsmallar ska vara tillgängliga vid registreringen, eller kanske föredrar att slippa det extra arbetet med att tilldela eller specificera webbplatsmallar under varje produkt du skapar, kan du helt enkelt ställa in valet av webbplatsmall under ditt **Kassaformulär**. För att göra detta går du till **Ultimate Multisite > Kassaformulär**. Klicka sedan på **Redigera** under det formulär du vill konfigurera.

![Listsida för kassaformulär](/img/config/checkout-forms-list.png)

Detta öppnar sidan **Redigera kassaformulär**. Hitta fältet **Mallval** och klicka på **Redigera** under det.

![Kassaformulärseditorn med fältet för mallval](/img/config/checkout-form-editor.png)

Ett modalt fönster visas. Under fältet **Mallwebbplatser** kan du välja och lista alla webbplatsmallar du vill göra tillgängliga vid registreringen. Webbplatsmallarna du anger här blir tillgängliga oavsett vilken produkt användaren har valt.

![Fältet Mallwebbplatser i kassaformuläreditorn](/img/config/checkout-form-step.png)

### Alternativ för webbplatsmallar

Det finns andra funktioner för webbplatsmallar som du kan slå på eller av under inställningarna för Ultimate Multisite.

![Alternativ för webbplatsmallar i inställningarna för Ultimate Multisite](/img/config/settings-sites.png)

#### Tillåt mallbyte

Om du aktiverar det här alternativet kan dina kunder byta den mall de valde under registreringsprocessen efter att kontot och webbplatsen har skapats. Detta är användbart ur kundens perspektiv eftersom det låter dem välja om en mall om de senare upptäcker att deras ursprungliga val inte var det bästa för deras specifika behov.

#### Tillåt användare att använda sin webbplats som mall

Eftersom underwebbplatsanvändare lagt tid på att bygga och designa sin egen webbplats kanske de vill klona och använda den som en av de tillgängliga webbplatsmallarna när de skapar en annan underwebbplats i ditt nätverk. Det här alternativet gör det möjligt.

#### Kopiera media vid malldupliciering

Om du markerar det här alternativet kopieras media som laddats upp på mallwebbplatsen till den nyskapade webbplatsen. Detta kan åsidosättas i vart och ett av abonnemangen.

#### **Förhindra sökmotorer från att indexera webbplatsmallar**

Webbplatsmallar som diskuteras i den här artikeln är grundmallar men fortfarande en del av ditt nätverk, vilket innebär att de fortfarande kan hittas av sökmotorer. Det här alternativet låter dig dölja webbplatsmallarna så att sökmotorer kan indexera dem.

## Förifylla webbplatsmallar med automatisk sök-och-ersätt

En av de mest kraftfulla funktionerna i Ultimate Multisite är möjligheten att lägga till godtyckliga text-, färg- och urvalsfält i registreringsformuläret. När vi har fångat den datan kan vi använda den för att förifylla innehållet i vissa delar av den valda webbplatsmallen. Sedan, när den nya webbplatsen publiceras, ersätter Ultimate Multisite platshållarna med den faktiska informationen som angavs vid registreringen.

Till exempel, om du vill få din slutanvändares företagsnamn vid registreringen och automatiskt lägga in företagsnamnet på startsidan, behöver du lägga till platshållare på din mallwebbplats startsida, som i bilden nedan (platshållare ska läggas till omgivna av dubbla klammerparenteser - {{placeholder_name}}).

![Startsida med platshållartext i klammerparenteser](/img/config/site-templates-list.png)

Sedan kan du helt enkelt lägga till ett matchande registreringsfält i ditt kassaformulär för att fånga den datan:

![Kassaformulär med matchande registreringsfält](/img/config/checkout-form-editor.png)

Din kund kan sedan fylla i det fältet under registreringen.

![Registreringsfält ifyllt av kund](/img/config/checkout-form-step.png)

![Förhandsvisning av registreringsformuläret](/img/config/checkout-form-editor.png)

Ultimate Multisite ersätter sedan platshållarna med kundens data automatiskt.

![Platshållare ersatta med kunddata på webbplatsen](/img/config/site-templates-list.png)

### Lösa problemet med "mall full av platshållare"

Allt detta är utmärkt, men vi stöter på ett fult problem: nu är våra webbplatsmallar – som kan besökas av våra kunder – fulla av fula platshållare som inte säger så mycket.

För att lösa detta erbjuder vi möjligheten att ställa in fejkade värden för platshållarna, och vi använder dessa värden för att söka och ersätta deras innehåll på mallwebbplatserna medan dina kunder besöker dem.

Du kommer åt editorn för mallplatshållare genom att gå till **Ultimate Multisite > Inställningar > Webbplatser** och sedan klicka på länken **Redigera platshållare** i sidofältet.

![Platshållarinställningar under sidan Webbplatsinställningar](/img/config/settings-sites.png)

Det tar dig till innehållseditorn för platshållare, där du kan lägga till platshållare och deras respektive innehåll.

![Innehållseditor för mallplatshållare](/img/config/settings-sites.png)
