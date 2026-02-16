---
title: Anpassa ditt registreringsformulär
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Anpassa ditt registreringsformulär

För att ge ditt nätverk en unik look som skiljer det från andra SaaS-lösningar byggda på WordPress-plattformen, låter Ultimate Multisite dig anpassa dina registrerings- och inloggningssidor med vår funktion **Checkout Forms**.

Även om de är ett enkelt och flexibelt sätt att experimentera med olika tillvägagångssätt för att konvertera nya kunder, används de främst för att skapa personliga registreringsformulär. Den här artikeln visar hur du gör det.

## Inloggnings- och registreringssidor:

När Ultimate Multisite installeras skapas automatiskt anpassade inloggnings- och registreringssidor på din huvudwebbplats. Du kan ändra dessa standardsidor när som helst genom att gå till **Ultimate Multisite > Settings > Login & Registration**.

![Inställningssida för inloggning och registrering](/img/config/settings-general.png)

Låt oss titta på var och en av de alternativ du kan anpassa på sidan **Login & Registration**:

  * **Enable registration:** Det här alternativet aktiverar eller inaktiverar registrering på ditt nätverk. Om det är avstängt kommer dina kunder inte att kunna registrera sig och prenumerera på dina produkter.

  * **Enable email verification:** Om det här alternativet är aktiverat kommer kunder som registrerar sig för en gratisplan eller en betalplan med provperiod att få ett verifieringsmeddelande och behöva klicka på verifieringslänken för att deras webbplatser ska skapas.

  * **Default registration page:** Det här är standardsidan för registrering. Sidan måste vara publicerad på din webbplats och ha ett registreringsformulär (även kallat checkout-formulär) – där dina kunder prenumererar på dina produkter. Du kan skapa hur många registreringssidor och checkout-formulär du vill, men kom ihåg att lägga in checkout-formulärets shortcode på registreringssidan, annars visas det inte.

  * **Use custom login page:** Det här alternativet låter dig använda en anpassad inloggningssida istället för standardsidan wp-login.php. Om alternativet är aktiverat kan du välja vilken sida som ska användas för inloggning under **Default login page** (strax nedanför).

  * **Obfuscate the original login url (wp-login.php):** Om du vill dölja den ursprungliga inloggnings-URL:en kan du aktivera det här alternativet. Det är användbart för att förhindra brute-force-attacker. Om alternativet är aktiverat visar Ultimate Multisite ett 404-fel när någon försöker komma åt den ursprungliga wp-login.php-länken.

  * **Force synchronous site publication:** Efter att en kund prenumererar på en produkt i ett nätverk behöver den nya väntande webbplatsen konverteras till en riktig nätverkswebbplats. Publiceringsprocessen sker via jobbkö, asynkront. Aktivera det här alternativet för att tvinga publiceringen att ske i samma förfrågan som registreringen.

Nu ska vi titta på andra alternativ som fortfarande är relevanta för inloggnings- och registreringsprocessen. De finns under **Other options** på samma Login & Registration-sida:

  * **Default role:** Det här är rollen som dina kunder kommer att ha på sin webbplats efter registreringsprocessen.

  * **Add users to the main site as well:** Genom att aktivera det här alternativet läggs användaren också till på huvudwebbplatsen i ditt nätverk efter registreringen. Om du aktiverar alternativet visas även ett val för att ange **default role** för dessa användare på din webbplats strax nedanför.

  * **Enable multiple accounts:** Tillåt användare att ha konton på olika webbplatser i ditt nätverk med samma e-postadress. Om alternativet är avstängt kommer dina kunder inte att kunna skapa konton på andra webbplatser i ditt nätverk med samma e-postadress.

Och det var alla alternativ relaterade till inloggning och registrering som du kan anpassa! Glöm inte att spara dina inställningar när du är klar med redigeringen.

## Använda flera registreringsformulär:

Ultimate Multisite 2.0 erbjuder en checkout-formulärredigerare som låter dig skapa hur många formulär du vill, med olika fält, produkterbjudanden med mera.

Både inloggnings- och registreringssidorna är inbäddade med shortcodes: **[wu_login_form]** på inloggningssidan och **[wu_checkout]** för registreringssidan. Du kan anpassa registreringssidan ytterligare genom att bygga eller skapa checkout-formulär.

För att komma åt den här funktionen går du till menyn **Checkout Forms** i vänstra sidofältet.

![Checkout Forms-meny i sidofältet](/img/config/checkout-forms-list.png)

På den här sidan kan du se alla checkout-formulär du har.

Om du vill skapa ett nytt klickar du bara på **Add Checkout Form** högst upp på sidan.

Du kan välja ett av dessa tre alternativ som utgångspunkt: single step, multi-step eller blank. Klicka sedan på **Go to the Editor**.

![Lägg till checkout-formulär med alternativen single step, multi-step eller blank](/img/config/checkout-forms-list.png)

Alternativt kan du redigera eller duplicera de formulär du redan har genom att klicka på alternativen under dess namn. Där hittar du också möjligheten att kopiera formulärets shortcode eller ta bort formuläret.

![Hover-åtgärder för checkout-formulär med redigera, duplicera och ta bort](/img/config/checkout-form-hover-actions.png)

Om du väljer single step eller multi-step kommer checkout-formuläret redan att vara förberett med de grundläggande stegen för att det ska fungera. Sedan kan du lägga till extra steg om du vill.

### Redigera ett checkout-formulär:

Som vi nämnde tidigare kan du skapa checkout-formulär för olika ändamål. I det här exemplet arbetar vi med ett registreringsformulär.

Efter att du navigerat till checkout-formulärredigeraren, ge ditt formulär ett namn (som endast används för intern referens) och en slug (används för att skapa shortcodes, till exempel).

![Checkout-formulärredigerare med namn- och slug-fält](/img/config/checkout-form-editor.png)

Formulär består av steg och fält. Du kan lägga till ett nytt steg genom att klicka på **Add New Checkout Step**.

![Knappen Add New Checkout Step](/img/config/checkout-form-add-step.png)

På den första fliken i modalfönstret fyller du i innehållet för ditt formulärs steg. Ge det ett ID, ett namn och en beskrivning. Dessa används främst internt.

![Fliken för checkout-steginnehåll med ID, namn och beskrivning](/img/config/checkout-form-step.png)

Därefter ställer du in stegets synlighet. Du kan välja mellan **Always show**, **Only show for logged in users** eller **Only show for guests**.

![Synlighetsalternativ för checkout-steg](/img/config/checkout-form-step.png)

Slutligen konfigurerar du stegets stil. Dessa är valfria fält.

![Stilkonfiguration för checkout-steg](/img/config/checkout-form-step.png)

Nu är det dags att lägga till fält i vårt första steg. Klicka bara på **Add New Field** och välj vilken typ av sektion du vill ha.

![Knappen Add New Field](/img/config/checkout-form-editor.png)![Rullgardinsmeny för fälttypsval](/img/config/checkout-form-step.png)

Varje fält har olika parametrar att fylla i. För den här första posten väljer vi fältet **Username**.

![Konfiguration av Username-fält](/img/config/checkout-form-step.png)![Parametrar för Username-fält](/img/config/checkout-form-step.png)![Ytterligare inställningar för Username-fält](/img/config/checkout-form-step.png)

Du kan lägga till så många steg och fält du behöver. För att visa dina produkter så att kunderna kan välja en, använd fältet Pricing Table. Om du vill låta dina kunder välja en mall, lägg till fältet Template Selection. Och så vidare.

_**Notera:** Om du skapar en produkt efter att du skapat ditt checkout-formulär behöver du lägga till produkten i sektionen Pricing table. Om du inte lägger till den kommer produkten inte att visas för dina kunder på registreringssidan._

_**Notera 2:** username, email, password, site title, site URL, order summary, payment och submit button är obligatoriska fält för att skapa ett checkout-formulär._

Medan du arbetar med ditt checkout-formulär kan du alltid använda Preview-knappen för att se hur dina kunder kommer att se formuläret. Du kan också växla mellan att visa som en befintlig användare eller en besökare.

![Preview-knapp i checkout-formulärredigeraren](/img/config/checkout-form-editor.png)![Förhandsgranskning av checkout-formulär som besökare eller befintlig användare](/img/config/checkout-form-editor.png)

Slutligen, under **Advanced Options** kan du konfigurera meddelandet för **Thank You**-sidan, lägga till kodsnuttar för att spåra konverteringar, lägga till anpassad CSS till ditt checkout-formulär eller begränsa det till vissa länder.

![Advanced Options med Thank You-sida, konverteringsspårning och anpassad CSS](/img/config/checkout-form-advanced.png)

Du kan också manuellt aktivera eller inaktivera ditt checkout-formulär genom att växla det här alternativet i högerkolumnen, eller permanent ta bort formuläret.

![Aktiv-växel och raderingsalternativ för checkout-formulär](/img/config/checkout-form-active.png)

Glöm inte att spara ditt checkout-formulär!

![Knappen Save Checkout Form](/img/config/checkout-form-save.png)

För att få ditt formulärs shortcode klickar du på **Generate Shortcode** och kopierar resultatet som visas i modalfönstret.

![Modalfönster för Generate Shortcode med shortcode att kopiera](/img/config/checkout-form-editor.png)

_**Notera:** Du behöver lägga till denna shortcode på din registreringssida för att få detta checkout-formulär tillagt på den._

## Förvälja produkter och mallar via URL-parametrar:

Om du vill skapa anpassade pristabeller för dina produkter och förvälja produkten eller mallen som din kund väljer från din pristabell eller mallsida i checkout-formuläret, kan du använda URL-parametrar för detta.

### **För planer:**

Gå till **Ultimate Multisite > Products > Select a plan**. Du bör se knappen **Click to copy Shareable Link** högst upp på sidan. Det här är länken du kan använda för att förvälja denna specifika plan i ditt checkout-formulär.

![Produktsida med knapp för delbar länk](/img/config/products-list.png)

Observera att denna delbara länk endast gäller för **Plans**. Du kan inte använda delbara länkar för paket eller tjänster.

### För mallar:

Om du vill förvälja webbplatsmallar i ditt checkout-formulär kan du använda parametern: **?template_id=X** i din registreringssidas URL. "X" måste ersättas med **webbplatsmallens ID-nummer**. För att få det här numret går du till **Ultimate Multisite > Sites**.

Klicka på **Manage** direkt under den webbplatsmall du vill använda. Du kommer att se SITE ID-numret. Använd bara det här numret för att förvälja den specifika webbplatsmallen i ditt checkout-formulär. I vårt fall här skulle URL-parametern vara **?template_id=2**.

![Webbplatslista som visar webbplatsmallens ID](/img/config/site-templates-list.png)

Låt oss säga att vår nätverkswebbplats är [**www.mynetwork.com**](http://www.mynetwork.com) och att vår registreringssida med vårt checkout-formulär finns på sidan **/register**. Den fullständiga URL:en med denna webbplatsmall förvald kommer att se ut som [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Och om du vill kan du förvälja både produkter och mallar till ditt checkout-formulär. Allt du behöver göra är att kopiera den delbara länken för planen och klistra in mallparametern i slutet. Det kommer att se ut som [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
