---
title: Anpassa ditt registreringsformulär
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Anpassa ditt registreringsformulär

För att få ditt nätverk att se unikt ut jämfört med alla andra SaaS-lösningar byggda på WordPress-plattformen låter Ultimate Multisite dig anpassa dina registrerings- och inloggningssidor med vår funktion **Checkout Forms**.

Även om de är ett enkelt och flexibelt sätt att experimentera med olika tillvägagångssätt när du försöker konvertera nya kunder, används de främst för att skapa personliga registreringsformulär. Den här artikeln visar hur du kan göra det.

## Inloggnings- och registreringssidor: {#login-and-registration-pages}

När Ultimate Multisite installeras skapas automatiskt anpassade inloggnings- och registreringssidor på din huvudwebbplats. Du kan när som helst ändra dessa standardsidor genom att gå till sidan **Ultimate Multisite > Settings > Login & Registration**.

![Inställningssida för inloggning och registrering](/img/config/settings-general.png)

Här är en fullständig vy av inställningssidan för inloggning och registrering:

![Fullständig inställningssida för inloggning och registrering](/img/config/settings-login-registration-full.png)

Låt oss titta på vart och ett av alternativen du kan anpassa på sidan **Login & Registration**:

  * **Enable registration:** Det här alternativet aktiverar eller inaktiverar registrering i ditt nätverk. Om det är avstängt kommer dina kunder inte att kunna registrera sig och prenumerera på dina produkter.

  * **Enable email verification:** Om det här alternativet är aktiverat kommer kunder som prenumererar på en gratis plan eller en betald plan med en provperiod att få ett verifieringsmejl och behöva klicka på verifieringslänken för att deras webbplatser ska skapas.

  * **Default registration page:** Detta är standardsidan för registrering. Den här sidan måste vara publicerad på din webbplats och ha ett registreringsformulär (även känt som checkout-formulär) – där dina kunder prenumererar på dina produkter. Du kan skapa så många registreringssidor och checkout-formulär du vill, kom bara ihåg att lägga in checkout-formulärets kortkod på registreringssidan, annars visas det inte.

  * **Use custom login page:** Det här alternativet låter dig använda en anpassad inloggningssida, i stället för standardsidan wp-login.php. Om det här alternativet är aktiverat kan du välja vilken sida som ska användas för inloggning under alternativet **Default login page** (precis nedanför).

  * **Obfuscate the original login url (wp-login.php)** : Om du vill dölja den ursprungliga inloggnings-URL:en kan du aktivera det här alternativet. Detta är användbart för att förhindra brute-force-attacker. Om det här alternativet är aktiverat kommer Ultimate Multisite att visa ett 404-fel när en användare försöker komma åt den ursprungliga wp-login.php-länken

  * **Force synchronous site publication:** Efter att en kund prenumererar på en produkt i ett nätverk måste den nya väntande webbplatsen konverteras till en riktig nätverkswebbplats. Publiceringsprocessen sker via Job Queue, asynkront. Aktivera det här alternativet för att tvinga publiceringen att ske i samma begäran som registreringen.

Nu ska vi se andra alternativ som fortfarande är relevanta för inloggnings- och registreringsprocessen. De finns precis under **Other options** på samma Login & registration-sida:

  * **Default role:** Detta är rollen som dina kunder kommer att ha på sin webbplats efter registreringsprocessen.

  * **Enable Jumper:** Aktiverar Jumper-genvägen i adminområdet. Jumper låter administratörer snabbt hoppa till Ultimate Multisite-skärmar, nätverksobjekt och andra destinationer som stöds utan att bläddra igenom varje meny. Stäng av det om du föredrar att dölja detta snabba navigeringsverktyg från admingränssnittet.

  * **Add users to the main site as well:** Om du aktiverar det här alternativet läggs användaren också till på huvudwebbplatsen i ditt nätverk efter registreringsprocessen. Om du aktiverar det här alternativet visas även ett alternativ för att ställa in dessa användares **default role** på din webbplats precis nedanför.

  * **Enable multiple accounts:** Tillåt användare att ha konton på olika webbplatser i ditt nätverk med samma e-postadress. Om det här alternativet är avstängt kommer dina kunder inte att kunna skapa ett konto på andra webbplatser som körs i ditt nätverk med samma e-postadress.

Och det är alla alternativ relaterade till inloggning och registrering som du kan anpassa! Glöm inte att spara dina inställningar när du är klar med att redigera dem.

## Använda flera registreringsformulär: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 erbjuder en redigerare för checkout-formulär som låter dig skapa så många formulär du vill, med olika fält, produkter som erbjuds osv.

Både inloggnings- och registreringssidorna är inbäddade med kortkoder: **[wu_login_form]** på inloggningssidan och**[wu_checkout]** för registreringssidan. Du kan anpassa registreringssidan ytterligare genom att bygga eller skapa checkout-formulär.

För att komma åt den här funktionen går du till menyn **Checkout Forms** i den vänstra sidopanelen.

![Checkout Forms-meny i sidopanelen](/img/config/checkout-forms-list.png)

På den här sidan kan du se alla checkout-formulär du har.

Om du vill skapa ett nytt klickar du bara på **Add Checkout Form** högst upp på sidan.

Du kan välja ett av dessa tre alternativ som utgångspunkt: ett steg, flera steg eller tomt. Klicka sedan på **Go to the Editor**.

![Lägg till Checkout Form med alternativ för ett steg, flera steg eller tomt](/img/config/checkout-forms-list.png)

Alternativt kan du redigera eller duplicera de formulär du redan har genom att klicka på alternativen under dess namn. Där hittar du också alternativen för att kopiera formulärets kortkod eller ta bort formuläret.

![Checkout-formulärets hovringsåtgärder med redigera, duplicera och ta bort](/img/config/checkout-form-hover-actions.png)

Om du väljer ett steg eller flera steg kommer checkout-formuläret redan att vara förifyllt med de grundläggande steg som behövs för att det ska fungera. Sedan kan du, om du vill, lägga till extra steg i det.

### Redigera ett Checkout Form: {#editing-a-checkout-form}

Som vi nämnde tidigare kan du skapa checkout-formulär för olika syften. I det här exemplet arbetar vi med ett registreringsformulär.

När du har navigerat till redigeraren för checkout-formulär ger du ditt formulär ett namn (som endast används för intern referens) och en slug (som till exempel används för att skapa kortkoder).

![Checkout-formulärredigerare med namn- och slugfält](/img/config/checkout-form-name-slug.png)

Formulär består av steg och fält. Du kan lägga till ett nytt steg genom att klicka på **Add New Checkout Step**.

![Add New Checkout Step-knapp](/img/config/checkout-form-add-step.png)

På den första fliken i modalfönstret fyller du i innehållet för formulärets steg. Ge det ett ID, ett namn och en beskrivning. Dessa objekt används mest internt.

![Innehållsflik för checkout-steg med ID, namn och beskrivning](/img/config/checkout-form-step-content.png)

Ställ sedan in stegets synlighet. Du kan välja mellan **Always show** , **Only show for logged in users** eller **Only show for guests**.

![Synlighetsalternativ för checkout-steg](/img/config/checkout-form-step-visibility.png)

Slutligen konfigurerar du stegets stil. Dessa är valfria fält.

![Stilkonfiguration för checkout-steg](/img/config/checkout-form-step-style.png)

Nu är det dags att lägga till fält i vårt första steg. Klicka bara på **Add New Field** och välj vilken typ av sektion du vill ha.

![Add New Field-knapp](/img/config/checkout-form-add-field-button.png)![Rullgardinsmeny för val av fälttyp](/img/config/checkout-form-field-type-dropdown.png)

Varje fält har olika parametrar som ska fyllas i. För denna första post väljer vi fältet **Username**.

![Konfiguration av Username-fält](/img/config/checkout-form-username-content.png)![Parametrar för Username-fält](/img/config/checkout-form-username-visibility.png)![Ytterligare inställningar för Username-fält](/img/config/checkout-form-username-style.png)

Du kan lägga till så många steg och fält som du behöver. För att visa dina produkter så att dina kunder kan välja en, använd fältet Pricing Table. Om du vill låta dina klienter välja en mall, lägg till fältet Template Selection. Och så vidare.

![Checkout-formulärredigerare med fält för mallval](/img/config/checkout-form-with-template-field.png)

_**Obs:** Om du skapar en produkt efter att du har skapat ditt checkout-formulär måste du lägga till produkten i sektionen Pricing table. Om du inte lägger till den kommer produkten inte att visas för dina kunder på registreringssidan._

_**Obs 2:** användarnamn, e-post, lösenord, sidtitel, site-URL, ordersammanfattning, betalning och skicka-knapp är obligatoriska fält för att skapa ett checkout-formulär._

Medan du arbetar med ditt checkout-formulär kan du alltid använda Preview-knappen för att se hur dina klienter kommer att se formuläret. Du kan också växla mellan att visa som en befintlig användare eller en besökare.

![Preview-knapp i checkout-formulärredigeraren](/img/config/checkout-form-preview-button.png)![Förhandsvisning av checkout-formulär som besökare eller befintlig användare](/img/config/checkout-form-preview-modal.png)

Slutligen kan du under **Advanced Options** konfigurera meddelandet för **Thank You**-sidan, lägga till snippets för att spåra konverteringar, lägga till anpassad CSS i ditt checkout-formulär eller begränsa det till vissa länder.

![Advanced Options med Thank You-sida, konverteringsspårning och anpassad CSS](/img/config/checkout-form-advanced.png)

Du kan också manuellt aktivera eller inaktivera ditt checkout-formulär genom att växla detta alternativ i den högra kolumnen, eller radera formuläret permanent.

![Aktiv växling och raderingsalternativ för checkout-formulär](/img/config/checkout-form-active.png)

Glöm inte att spara ditt checkout-formulär!

![Save Checkout Form-knapp](/img/config/checkout-form-save.png)

För att få formulärets shortcode klickar du på **Generate Shortcode** och kopierar resultatet som visas i modalfönstret.

![Generate Shortcode-modal med shortcode att kopiera](/img/config/checkout-form-editor.png)

_**Obs:** Du måste lägga till denna shortcode på din registreringssida för att detta checkout-formulär ska läggas till där._

## Förvälja produkter och mallar via URL-parametrar: {#pre-selecting-products-and-templates-via-url-parameters}

Om du vill skapa anpassade pristabeller för dina produkter och förvälja den produkt eller mall som din kund väljer från din pristabell eller mallsida i checkout-formuläret, kan du använda URL-parametrar för detta.

### **För planer:** {#for-plans}

Gå till **Ultimate Multisite > Products > Select a plan**. Du bör se knappen **Click to copy Shareable Link** högst upp på sidan. Detta är länken du kan använda för att förvälja denna specifika plan i ditt checkout-formulär.

![Produktsida med knapp för delbar länk](/img/config/products-list.png)

Observera att denna delbara länk endast är giltig för **Plans**. Du kan inte använda delbara länkar för paket eller tjänster.

### För mallar: {#for-templates}

Om du vill förvälja sitemallar i ditt checkout-formulär kan du använda parametern: **?template_id=X** i URL:en till din registreringssida. "X" måste ersättas med **ID-numret för sitemallen**. För att få detta nummer, gå till **Ultimate Multisite > Sites**.

Klicka på **Manage** precis under den sitemall du vill använda. Du kommer att se SITE ID-numret. Använd bara detta nummer för denna specifika sitemall för att den ska vara förvald i ditt checkout-formulär. I vårt fall här skulle URL-parametern vara **?template_id=2**.

![Lista över siter som visar ID för sitemall](/img/config/site-templates-list.png)

Låt oss säga att vår nätverkswebbplats är [**www.mynetwork.com**](http://www.mynetwork.com) och att vår registreringssida med vårt checkout-formulär ligger på sidan **/register**. Hela URL:en med denna sitemall förvald kommer att se ut som [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Och om du vill kan du förvälja både produkter och mallar i ditt checkout-formulär. Allt du behöver göra är att kopiera planens delbara länk och klistra in mallparametern i slutet. Det kommer att se ut som [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
