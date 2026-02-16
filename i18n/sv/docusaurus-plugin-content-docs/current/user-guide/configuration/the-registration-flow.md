---
title: Registreringsflödet
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Registreringsflödet (v2)

_**VIKTIGT: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Användare kan registrera sig på ditt nätverk på olika sätt. De kan använda ditt registreringsformulär eller en delbar länk till en förvald plan. Här visar vi hur dina kunder kan registrera sig på ditt nätverk via de tillgängliga vägarna och vad som händer efter att de har registrerat sig.

## Använda registreringsformuläret:

Det här är den vanliga registreringsprocessen. Du skapar en registreringssida med ett **kassaformulär** och det är dit dina kunder kommer för att registrera sig på ditt nätverk och prenumerera på en plan. Du kan ha flera registreringssidor, var och en med ett eget registreringsformulär om du vill.

Standardsidan för registrering är [_**dindomän.se/register**_](http://yourdomain.com/register), men du kan ändra detta när som helst under **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

När en användare kommer till din registreringssida (vanligtvis genom att klicka på en **Logga in**- eller **Köp nu**-knapp) ser de ditt registreringsformulär där.

![Registreringsformulär som visas på registreringssidan](/img/config/checkout-forms-list.png)

Allt de behöver göra är att fylla i alla obligatoriska fält – e-post, användarnamn, lösenord, osv. – och betala för planen eller bekräfta sin e-postadress om de registrerar sig för en gratisplan eller en betald plan med provperiod utan betalningsinformation.

På "Tack"-sidan ser de ett meddelande som berättar om de behöver bekräfta sin e-postadress eller om deras webbplats redan är aktiverad och de kan börja använda den.

![Tack-sida efter registrering](/img/config/checkout-form-editor.png)

Om e-postbekräftelse krävs måste de gå till sin inkorg och klicka på verifieringslänken. Deras webbplats aktiveras inte om e-postadressen inte verifieras.

Om de har registrerat sig på en betald plan eller om e-postverifiering inte är obligatorisk på ditt nätverk, aktiveras deras webbplats direkt efter kassan och de ser en länk för att logga in på sin dashboard.

![Webbplats aktiverad med länk för att logga in på dashboard](/img/config/checkout-form-editor.png)

## Använda en delbar länk:

Processen för att registrera sig med en delbar länk är i princip densamma som med registreringsformuläret. Den enda skillnaden är att med en delbar länk kan dina kunder ha en produkt eller webbplatsmall förvald i kassaformuläret (se avsnittet Förvälja produkter och mallar via URL-parametrar) eller kanske en rabattkod tillagd (se avsnittet Använda URL-parametrar).

Registreringsprocessen är densamma: de måste fylla i sitt namn, användarnamn, e-postadress, webbplatsnamn och titel, osv. – men planen eller webbplatsmallen är redan förvald åt dem.

### Registrera med manuella betalningar:

Om du inte vill använda PayPal, Stripe eller någon annan betalningslösning som erbjuds av Ultimate Multisite eller dess tilläggsintegrationer kan du använda manuella betalningar för dina kunder. På så sätt kan du skapa en faktura som de kan betala via din föredragna betalningsprocessor efter att de har registrerat sig på ditt nätverk.

Registreringsprocessen är exakt densamma som ovan, men på registreringssidan ser dina kunder ett meddelande om att de kommer att få ett e-postmeddelande med ytterligare instruktioner för att slutföra betalningen.

![Meddelande om manuell betalning under registrering](/img/config/settings-payment-gateways.png)

Och efter att registreringen är slutförd ser de betalningsinstruktionerna som du har angett (och får dem även via e-post).

![Betalningsinstruktioner som visas efter registrering](/img/config/settings-payment-gateways.png)

Betalningsinstruktionerna kan ändras under **Ultimate Multisite > Settings > Payments** efter att du har aktiverat alternativet **Manual**:

![Växlingsknapp för manuell betalning med fält för betalningsinstruktioner](/img/config/settings-payment-gateways.png)

När dina kunder har slutfört den manuella betalningen och skickat bekräftelsen till dig måste du **manuellt bekräfta betalningen** för att aktivera kundens medlemskap och webbplats.

För att göra detta, gå till **Ultimate Multisite > Payments** och hitta kundens betalning. Den bör fortfarande visa statusen **Pending**.

![Betalningslista med väntande manuell betalning](/img/admin/payments-list.png)

Klicka på betalningsnumret så kan du ändra statusen till **Completed**.

![Sida med betalningsdetaljer](/img/admin/payments-list.png)

![Ändra betalningsstatus till Completed](/img/admin/payments-list.png)

Efter att du har ändrat statusen till **Completed** bör du se ett meddelande om att **Activate membership**. Aktivera detta alternativ för att aktivera medlemskapet och webbplatsen som är kopplad till den här kunden. Klicka sedan på **Save Payment**.

![Växlingsknapp för aktivera medlemskap och knappen Save Payment](/img/admin/payments-list.png)

Din kund bör nu kunna komma åt sin dashboard och alla funktioner som de prenumererar på.
