---
title: Registreringsflödet
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registreringsflödet (v2)

_**VIKTIGT MEDDELANDE: Den här artikeln avser Ultimate Multisite version 2.x.**_

Användare kan registrera sig i ditt nätverk på olika sätt. De kan använda ditt registreringsformulär eller en delbar länk till en förvald plan. Här visar vi hur dina kunder kan registrera sig i ditt nätverk med de tillgängliga vägarna och vad som händer efter att de registrerar sig i ditt nätverk.

## Använda registreringsformuläret:

Detta är standardprocessen för registrering. Du skapar en registreringssida med ett **checkout-formulär** och det är dit dina kunder går för att registrera sig i ditt nätverk och prenumerera på en plan. Du kan ha flera registreringssidor, var och en med ett annat registreringsformulär om du vill.

Standardsidan för registrering är [_**yourdomain.com/register**_](http://yourdomain.com/register), men du kan ändra detta när som helst under **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

När en användare kommer till din registreringssida (vanligtvis genom att klicka på en **Logga in**- eller **Köp nu**-knapp) ser de ditt registreringsformulär där.

![Registreringsformulär som visas på registreringssidan](/img/frontend/registration-form.png)

Här är ett exempel på checkout-formuläret så som det visas på frontend:

![Checkout-registreringsformulär på frontend](/img/config/checkout-frontend-registration.png)

Allt de behöver göra är att fylla i alla obligatoriska fält - e-post, användarnamn, lösenord osv... - och betala för planen eller bekräfta sin e-postadress om de registrerar sig för en gratis plan eller en betald plan med provperiod utan betalningsinformation.

På sidan "Tack" ser de ett meddelande som berättar om de behöver bekräfta sin e-postadress eller om deras webbplats redan är aktiverad och de kan börja använda den.

![Tack-sida efter registrering](/img/frontend/registration-thank-you.png)

Om en bekräftelse av e-postadress krävs behöver de gå till sin inkorg och klicka på verifieringslänken. Deras webbplats kommer inte att aktiveras om deras e-postadress inte verifieras.

Om de har registrerat sig på en betald plan eller om e-postverifiering inte är obligatorisk i ditt nätverk, aktiveras deras webbplats direkt efter checkout och de får se en länk för att logga in på sin Dashboard.

![Webbplats aktiverad med länk för att logga in på Dashboard](/img/frontend/site-activated.png)

## Använda en delbar länk:

Processen för att registrera sig med en delbar länk är i princip densamma som registreringsformuläret; den enda skillnaden är att med en delbar länk kan dina kunder ha en produkt eller webbplatsmall förvald i checkout-formuläret (se avsnittet Förvälja produkter och mallar via URL-parametrar) eller kanske en kupongkod tillagd (se avsnittet Använda URL-parametrar).

Registreringsprocessen är densamma: de behöver fylla i sitt namn, användarnamn, e-postadress, webbplatsnamn och titel osv... men planen eller webbplatsmallen är redan förvald för dem.

### Registrering med manuella betalningar:

Om du inte vill använda PayPal, Stripe eller någon annan betalningsgateway som erbjuds av Ultimate Multisite eller dess tilläggsintegrationer, kan du använda manuella betalningar för dina kunder. På så sätt kan du skapa en faktura som de kan betala via din föredragna betalningsprocessor efter att de registrerat sig i ditt nätverk.

Registreringsprocessen är exakt densamma som ovan, men på registreringssidan ser dina kunder ett meddelande som anger att de kommer att få ett e-postmeddelande med ytterligare instruktioner för att slutföra betalningen.

![Meddelande om manuell betalning under registrering](/img/frontend/registration-manual-notice.png)

Och efter att registreringen har slutförts ser de betalningsinstruktionerna som du har angett (och får dem även via e-post).

![Betalningsinstruktioner som visas efter registrering](/img/frontend/registration-payment-instructions.png)

Betalningsinstruktionerna kan ändras under **Ultimate Multisite > Settings > Payments** efter att du har aktiverat betalningsalternativet **Manuell**:

![Reglage för manuell betalning med fält för betalningsinstruktioner](/img/config/manual-gateway-settings.png)

Efter att dina kunder har slutfört den manuella betalningen och skickat bekräftelsen till dig behöver du **bekräfta betalningen manuellt** för att aktivera kundens medlemskap och webbplats.

För att göra detta går du till **Ultimate Multisite > Payments** och hittar kundens betalning. Den bör fortfarande visa statusen **Väntar**.

![Betalningslista med väntande manuell betalning](/img/admin/payments-list.png)

Klicka på betalningsnumret så kan du ändra dess status till **Slutförd**.

![Sida med betalningsdetaljer](/img/admin/payment-edit.png)

![Ändrar betalningsstatus till Slutförd](/img/admin/payment-status-completed.png)

Efter att du har ändrat dess status till **Slutförd** bör du se ett meddelande om **Aktivera medlemskap**. Slå **på** detta alternativ för att aktivera medlemskapet och webbplatsen som är kopplade till den här kunden. Klicka sedan på **Spara betalning**.

![Reglage för Aktivera medlemskap och knappen Spara betalning](/img/admin/payment-activate-membership.png)

Din kund bör nu kunna komma åt Dashboard och alla funktioner som de prenumererade på.
