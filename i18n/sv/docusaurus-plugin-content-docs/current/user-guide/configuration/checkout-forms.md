---
title: Kassaformulär
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Kassaformulär

Kassaformulär är ett enkelt och flexibelt sätt att experimentera med olika tillvägagångssätt när du försöker omvandla besökare till nya kunder.

Ultimate Multisite 2.0 erbjuder en redigerare för kassaformulär som låter dig skapa så många formulär du vill, med olika fält, produkter att erbjuda, med mera.

För att komma åt den här funktionen, gå till menyn Checkout Forms i vänstra sidofältet.

![Lista över kassaformulär](/img/config/checkout-forms-list.png)

På den här sidan kan du se alla kassaformulär du har.

Om du vill skapa ett nytt klickar du bara på Add Checkout Form högst upp på sidan.

Du kan välja ett av dessa tre alternativ som utgångspunkt: enkelt steg, flera steg eller tomt. Klicka sedan på Go to the Editor.

![Redigerare för kassaformulär](/img/config/checkout-form-editor.png)

Du kan också redigera eller duplicera formulär du redan har genom att klicka på alternativen under dess namn. Där hittar du även möjligheten att kopiera formulärets shortcode eller ta bort formuläret.

![Hover-åtgärder för kassaformulär](/img/config/checkout-form-hover-actions.png)

### Redigera ett kassaformulär

Du kan skapa kassaformulär för olika syften. I det här exemplet arbetar vi med ett registreringsformulär.

Efter att du har navigerat till redigeraren för kassaformulär, ge ditt formulär ett namn (som endast används för intern referens) och en slug (som används för att skapa shortcodes, till exempel).

![Redigerare för kassaformulär](/img/config/checkout-form-editor.png)

Formulär består av steg och fält. Du kan lägga till ett nytt steg genom att klicka på Add New Checkout Step.

![Lägg till nytt kassasteg](/img/config/checkout-form-add-step.png)

I den första fliken i modalfönstret fyller du i innehållet för ditt formulärsteg. Ge det ett ID, ett namn och en beskrivning. Dessa används främst internt.

![Kassaformulärssteg](/img/config/checkout-form-step.png)

Därefter ställer du in synligheten för steget. Du kan välja mellan "Always show", "Only show for logged in users" eller "Only show for guests".

![Kassaformulärssteg](/img/config/checkout-form-step.png)

Slutligen konfigurerar du stegets utseende. Dessa fält är valfria.

![Kassaformulärssteg](/img/config/checkout-form-step.png)

Nu är det dags att lägga till fält i vårt första steg. Klicka bara på Add New Field och välj vilken typ av sektion du vill ha.

![Kassaformulärssteg med fält](/img/config/checkout-form-step.png)

Varje fält har olika parametrar som ska fyllas i. För detta första exempel väljer vi fältet "Username".

![Kassaformulärssteg](/img/config/checkout-form-step.png)

![Kassaformulärssteg](/img/config/checkout-form-step.png)

![Kassaformulärssteg](/img/config/checkout-form-step.png)

Du kan lägga till så många steg och fält du behöver. För att visa dina produkter så att kunderna kan välja en, använd fältet Pricing Table. Om du vill låta dina kunder välja en mall, lägg till fältet Template Selection. Och så vidare.

_**Observera:** användarnamn, e-post, lösenord, webbplatstitel, webbplatsens URL, ordersammanfattning, betalning och skicka-knapp är obligatoriska fält för att skapa ett kassaformulär._

Medan du arbetar med ditt kassaformulär kan du alltid använda knappen Preview för att se hur dina kunder kommer att se formuläret. Du kan också växla mellan att visa som en befintlig användare eller en besökare.

![Spara kassaformulär](/img/config/checkout-form-save.png)

![Redigerare för kassaformulär](/img/config/checkout-form-editor.png)

Slutligen kan du under Advanced Options konfigurera meddelandet för tacksidan, lägga till kodsnuttar för att spåra konverteringar, lägga till anpassad CSS till ditt kassaformulär eller begränsa det till vissa länder.

![Avancerade alternativ](/img/config/checkout-form-advanced.png)

Du kan också manuellt aktivera eller inaktivera ditt kassaformulär genom att växla detta alternativ i den högra kolumnen, eller permanent ta bort formuläret.

![Aktiveringsknapp](/img/config/checkout-form-active.png)

Glöm inte att spara ditt kassaformulär!

![Spara-knapp](/img/config/checkout-form-save.png)

För att få formulärets shortcode, klicka på Generate Shortcode och kopiera resultatet som visas i modalfönstret.

![Spara-knapp med shortcode](/img/config/checkout-form-save.png)
