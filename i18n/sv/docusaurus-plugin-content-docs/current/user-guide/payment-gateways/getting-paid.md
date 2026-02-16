---
title: Att få betalt
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# Ta emot betalningar (v2)

_**VIKTIGT: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Ultimate Multisite har ett inbyggt medlemskaps- och faktureringssystem. För att vårt faktureringssystem ska fungera har vi integrerat de vanligaste betalningslösningarna som används inom e-handel. Standardalternativen för betalning i Ultimate Multisite är _Stripe_, _PayPal_ och manuell betalning. Du kan även använda _WooCommerce_, _GoCardless_ och _Payfast_ för att ta emot betalningar genom att installera respektive tillägg.

## Grundläggande inställningar

Du kan konfigurera alla dessa betalningslösningar under Ultimate Multisites betalningsinställningar. Du hittar dem genom att gå till **Ultimate Multisite-menyn > Settings > Payments.**

![Sidan för betalningsinställningar i Ultimate Multisite](/img/config/settings-payment-gateways.png)

Innan du konfigurerar din betalningslösning, ta en titt på de grundläggande betalningsinställningarna du kan ställa in:

**Force auto-renew:** Detta säkerställer att betalningen automatiskt förnyas i slutet av varje faktureringsperiod, beroende på den faktureringsfrekvens som användaren valde.

![Inställning för automatisk förnyelse](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** Med det här alternativet aktiverat behöver din kund inte ange någon betalningsinformation under registreringsprocessen. Det krävs först när provperioden går ut.

![Inställning för provperiod utan betalningsmetod](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** Här kan du välja om en faktura ska skickas efter betalning eller inte. Observera att användare har tillgång till sin betalningshistorik via sin undersajts dashboard. Det här alternativet gäller inte för manuell betalning.

![Inställning för att skicka faktura vid betalningsbekräftelse](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** Här kan du välja mellan en betalningsreferenskod eller ett löpnummersystem. Om du väljer att använda en betalningsreferenskod för dina fakturor behöver du inte konfigurera något. Om du väljer ett löpnummersystem behöver du ställa in **next invoice number** (Detta nummer används som fakturanummer för nästa faktura som genereras i systemet. Det ökas med ett varje gång en ny faktura skapas. Du kan ändra och spara det för att återställa fakturans löpnummer till ett specifikt värde) och **invoice number prefix.**

![Val av fakturanummersystem](/img/config/settings-payment-gateways.png)

![Inställningar för löpnummer och prefix](/img/config/settings-payment-gateways.png)

## Var du hittar betalningslösningarna:

Du kan konfigurera betalningslösningarna på samma sida (**Ultimate Multisite > Settings > Payments**). Precis under **active payment gateways** ser du: _Stripe_, _Stripe Checkout_, _PayPal_ och _Manual_.

![Lista över aktiva betalningslösningar](/img/config/settings-payment-gateways.png)

Vi har en dedikerad artikel för varje betalningslösning som guidar dig genom konfigurationen. Du hittar dem via länkarna nedan.

**Setting up the Stripe gateway**

**Setting up the PayPal gateway**

**Setting up manual payments**

Om du vill använda _WooCommerce_, _GoCardless_ eller _Payfast_ som betalningslösning behöver du **installera och konfigurera deras tillägg**.

### Så installerar du WooCommerce-tillägget:

Vi förstår att _Stripe_ och _PayPal_ inte är tillgängliga i vissa länder, vilket begränsar eller hindrar Ultimate Multisite-användare från att effektivt använda vår plugin. Därför skapade vi ett tillägg för att integrera _WooCommerce_, som är en mycket populär e-handelsplugin. Utvecklare världen över har skapat tillägg för att integrera olika betalningslösningar med den. Vi utnyttjade detta för att utöka de betalningslösningar du kan använda med Ultimate Multisites faktureringssystem.

_**VIKTIGT:** Ultimate Multisite: WooCommerce Integration kräver att WooCommerce är aktiverat åtminstone på din huvudsajt._

Gå först till tilläggssidan. Du hittar den genom att gå till **Ultimate Multisite > Settings**. Du bör se tabellen **Add-ons**. Klicka på **Check our Add-ons**.

![Inställningssidan med tilläggssektionen](/img/config/settings-general.png)

Efter att du klickat på **Check our Add-ons** omdirigeras du till tilläggssidan. Här hittar du alla Ultimate Multisite-tillägg. Klicka på tillägget **Ultimate Multisite: WooCommerce Integration**.

![Tilläggssidan med tillgängliga tillägg](/img/config/settings-general.png)

Ett fönster dyker upp med information om tillägget. Klicka bara på **Install Now**.

![Installationsdialog för WooCommerce-tillägget](/img/config/settings-general.png)

När installationen är klar omdirigeras du till plugin-sidan. Klicka på **Network Activate** så aktiveras WooCommerce-tillägget på ditt nätverk.

![Nätverksaktivera WooCommerce-tillägget](/img/config/settings-general.png)

Om du efter aktivering fortfarande inte har WooCommerce-pluginen installerad och aktiverad på din webbplats får du en påminnelse.

![Påminnelse om att aktivera WooCommerce](/img/config/settings-general.png)

För att läsa mer om WooCommerce Integration-tillägget, **klicka här**.

### Så installerar du GoCardless-tillägget:

Stegen för att installera _GoCardless_-tillägget är i princip samma som för _WooCommerce_-tillägget. Gå till tilläggssidan och välj tillägget **Ultimate Multisite: GoCardless Gateway**.

![Tilläggssidan med tillgängliga tillägg](/img/config/settings-general.png)

Tilläggsfönstret dyker upp. Klicka på **Install Now**.

![Installationsdialog för GoCardless-tillägget](/img/config/settings-general.png)

När installationen är klar omdirigeras du till plugin-sidan. Klicka på **Network Activate** så aktiveras _GoCardless_-tillägget på ditt nätverk.

![Nätverksaktivera GoCardless-tillägget](/img/config/settings-general.png)

För att lära dig hur du kommer igång med _GoCardless_-betalningslösningen, **läs den här artikeln**.

### Så installerar du Payfast-tillägget:

Gå till tilläggssidan och välj tillägget **Ultimate Multisite: Payfast Gateway**.

![Tilläggssidan med tillgängliga tillägg](/img/config/settings-general.png)

Tilläggsfönstret dyker upp. Klicka på **Install Now.**

![Installationsdialog för Payfast-tillägget](/img/config/settings-general.png)

När installationen är klar omdirigeras du till plugin-sidan. Klicka på **Network Activate** så aktiveras _Payfast_-tillägget på ditt nätverk.

![Nätverksaktivera Payfast-tillägget](/img/config/settings-general.png)
