---
title: Att få betalt
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Att få betalt (v2) {#getting-paid-v2}

_**VIKTIGT MEDDELANDE: Den här artikeln avser Ultimate Multisite version 2.x.**_

Ultimate Multisite har ett inbyggt medlemskaps- och faktureringssystem. För att vårt faktureringssystem ska fungera har vi integrerat de vanligaste betalningsgateways som används inom e-handel. Standardbetalningsgateways i Ultimate Multisite är _Stripe_ , _PayPal_ , och Manuell betalning. Du kan också använda _WooCommerce_ , _GoCardless_ och _Payfast_ för att ta emot betalningar genom att installera deras respektive add-ons.

## Grundinställningar {#basic-settings}

Du kan konfigurera någon av dessa betalningsgateways under betalningsinställningarna i Ultimate Multisite. Du hittar dem genom att gå till **Ultimate Multisite menu > Settings > Payments.**

![Sidan för betalningsinställningar i Ultimate Multisite som visar panelen Betalningar](/img/config/payments-settings-page.png)

Innan du konfigurerar din betalningsgateway, ta en titt på de grundläggande betalningsinställningarna du kan konfigurera:

**Tvinga automatisk förnyelse** **w:** Detta säkerställer att betalningen automatiskt återkommer i slutet av varje faktureringscykel beroende på den faktureringsfrekvens användaren valt.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 kontrollerar om den aktiva gatewayen har en återanvändbar förnyelseuppgift innan ett återkommande medlemskap med automatisk förnyelse aktiverad sparas. En förnyelseuppgift kan vara en gateway-prenumeration, faktureringsavtal, sparad vault token eller motsvarande återanvändbar betalningsmetod. Om gatewayen rapporterar att ingen användbar uppgift finns, sparar Ultimate Multisite medlemskapet men stänger av automatisk förnyelse och registrerar tillståndet med saknad uppgift så att en administratör eller ett supportflöde kan be kunden att auktorisera betalningen på nytt före förnyelsedatumet.

Detta förhindrar att ett medlemskap verkar förnyas automatiskt när gatewayen endast kan ta emot engångsbetalningar. Gateway add-ons bör bekräfta att återkommande checkout-flöden lagrar en återanvändbar uppgift, särskilt när gatewayen stöder både engångsdebitering och vaulted-/prenumerationsbaserade betalningslägen.

**Tillåt provperioder utan betalnings** **metod:** Med det här alternativet aktiverat behöver din kund inte lägga till någon finansiell information under registreringsprocessen. Detta krävs först när provperioden löper ut.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Skicka faktura vid betalningsbekräftelse:** Detta ger dig ett alternativ om huruvida en faktura ska skickas efter betalning eller inte. Observera att användare kommer att ha tillgång till sin betalningshistorik under sin subsite dashboard. Detta alternativ gäller inte för Manual Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Fakturanumreringsschema:** Här kan du välja antingen en betalningsreferenskod eller ett sekventiellt nummerschema. Om du väljer att använda en betalningsreferenskod för dina fakturor behöver du inte konfigurera något. Om du väljer att använda ett sekventiellt nummerschema måste du konfigurera **nästa fakturanummer** (Detta nummer kommer att användas som fakturanummer för nästa faktura som genereras i systemet. Det ökas med ett varje gång en ny faktura skapas. Du kan ändra det och spara det för att återställa det sekventiella fakturanumret till ett specifikt värde) och **fakturanummerprefixet.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Var du hittar gateways: {#where-to-find-the-gateways}

Du kan konfigurera betalningsgateways på samma sida ( **Ultimate Multisite > Settings > Payments**). Precis under **aktiva betalningsgateways** , kommer du att kunna se: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ och _Manual_.

![Avsnittet Aktiva betalningsgateways som listar Stripe, Stripe Checkout, PayPal och Manual](/img/config/payments-active-gateways.png)

Vi har en dedikerad artikel för varje betalningsgateway som guidar dig genom stegen för att konfigurera den, som du hittar via länkarna nedan.

Du kan visa och redigera betalningsdetaljer:

![Gränssnitt för redigering av betalning](/img/admin/payment-edit.png)

Här är en fullständig vy av sidan för betalningsredigering:

![Fullständigt gränssnitt för betalningsredigering](/img/admin/payment-edit-full.png)

Här är också en fullständig vy av inställningarna för betalningsgateways:

![Fullständig sida för inställningar för betalningsgateways](/img/config/settings-payments-gateways-full.png)

**Konfigurera Stripe-gatewayen**

**Konfigurera PayPal-gatewayen**** **

**Konfigurera manuella betalningar**

Om du nu vill använda _WooCommerce_ , _GoCardless_ eller _Payfast_ som din betalningsgateway behöver du **installera och konfigurera deras add-ons**.

### Så här installerar du WooCommerce add-on: {#how-to-install-the-woocommerce-add-on}

Vi förstår att _Stripe_ och _PayPal_ inte är tillgängliga i vissa länder, vilket begränsar eller hindrar Ultimate Multisite-användare från att effektivt använda vårt plugin. Därför skapade vi en add-on för att integrera _WooCommerce,_ som är ett mycket populärt e-handelsplugin. Utvecklare runt om i världen har skapat add-ons för att integrera olika betalningsgateways med det. Vi utnyttjade detta för att utöka de betalningsgateways du kan använda med Ultimate Multisite faktureringssystem.

_**VIKTIGT:** Ultimate Multisite: WooCommerce Integration kräver att WooCommerce är aktiverat åtminstone på din huvudsida._

Gå först till add-ons-sidan. Du hittar den genom att gå till **Ultimate Multisite > Settings**. Du bör se tabellen **Add-ons**. Klicka på **Kolla in våra add-ons**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Efter att du klickat på **Kolla in våra add-ons** , kommer du att omdirigeras till add-ons-sidan. Här hittar du alla Ultimate Multisite add-ons. Klicka på add-onen **Ultimate Multisite: WooCommerce Integration**.

![Add-ons-sida som listar Ultimate Multisite add-ons inklusive WooCommerce Integration](/img/addons/addons-page.png)

Ett fönster kommer att öppnas med add-on-detaljerna. Klicka bara på **Install Now**.

<!-- Skärmbild saknas: dialogruta med detaljer för Ultimate Multisite WooCommerce Integration add-on med knappen Install Now -->

När installationen är klar omdirigeras du till pluginsidan. Här klickar du bara på **Network Activate** så aktiveras WooCommerce-add-on på ditt nätverk.

<!-- Skärmbild saknas: pluginsida med länken Network Activate för WooCommerce Integration add-on -->

När du har aktiverat det får du en påminnelse om du fortfarande inte har WooCommerce-pluginet installerat och aktiverat på din webbplats.

<!-- Skärmbild saknas: administratörsmeddelande som påminner administratören om att installera och aktivera WooCommerce-pluginet -->

För att läsa mer om WooCommerce Integration-add-on, **klicka här**.

### Så installerar du GoCardless-add-on: {#how-to-install-the-gocardless-add-on}

Stegen för att installera _GoCardless_-add-on är i stort sett desamma som för _WooCommerce_-add-on. Gå till add-onsidan och välj **Ultimate Multisite: GoCardless Gateway**-add-on.

<!-- Skärmbild saknas: add-onsida med Ultimate Multisite GoCardless Gateway add-on markerad -->

Add-on-fönstret öppnas. Klicka på **Install Now**.

<!-- Skärmbild saknas: dialogruta med detaljer för Ultimate Multisite GoCardless Gateway add-on med knappen Install Now -->

När installationen är klar omdirigeras du till pluginsidan. Här klickar du bara på **Network Activate** så aktiveras _GoCardless_-add-on på ditt nätverk.

<!-- Skärmbild saknas: pluginsida med länken Network Activate för GoCardless Gateway add-on -->

För att lära dig hur du kommer igång med _GoCardless_-gatewayen, **läs den här artikeln**.

### Så installerar du Payfast-add-on: {#how-to-install-the-payfast-add-on}

Gå till add-onsidan och välj **Ultimate Multisite: Payfast Gateway**-add-on.

<!-- Skärmbild saknas: add-onsida med Ultimate Multisite Payfast Gateway add-on markerad -->

Add-on-fönstret öppnas. Klicka på **Install Now.**

<!-- Skärmbild saknas: dialogruta med detaljer för Ultimate Multisite Payfast Gateway add-on med knappen Install Now -->

När installationen är klar omdirigeras du till pluginsidan. Här klickar du bara på **Network Activate** så aktiveras _Payfast_-add-on på ditt nätverk.

<!-- Skärmbild saknas: pluginsida med länken Network Activate för Payfast Gateway add-on -->
