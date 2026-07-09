---
title: Konfigurera manuella betalningar
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Konfigurera manuella betalningar (v2)

_**VIKTIGT MEDDELANDE: Den här artikeln avser Ultimate Multisite version 2.x.**_

Manuella betalningar är ett sätt för dig att erbjuda andra betalningsmetoder om **Stripe** eller **PayPal** inte är tillgängliga för dina användare. Det kan vara en banköverföring eller någon annan betalningsmetod som är tillgänglig för dina användare lokalt.

## Så aktiverar du manuella betalningar

Att konfigurera manuell betalning är mycket enkelt. Du behöver bara aktivera den under betalningsgateways och ange detaljerade instruktioner om hur användaren ska skicka betalningen.

Gå först till **Ultimate Multisite > Settings > Payments**. Under **Payment Gateways** aktiverar du **Manual**. Du kommer att se att en ruta för **Payment Instructions** visas för dig.

Lägg till den information som din kund behöver för att göra betalningen i den här rutan. Det kan till exempel vara dina bankkontouppgifter och din e-postadress så att kunden kan skicka betalningsbekräftelsen till dig.

![Växlingsknapp för manuell betalningsgateway med textområde för Payment Instructions](/img/config/manual-gateway-expanded.png)

Här är gränssnittet för inställningar för den manuella gatewayen:

![Inställningar för manuell gateway](/img/config/manual-gateway-settings.png)

När du har konfigurerat det klickar du bara på **Save Settings** så är det klart. När användare registrerar sig i ditt nätverk kommer de att se ett meddelande som talar om att de får dina instruktioner för att slutföra köpet.

![Registreringsbekräftelsemeddelande som talar om för användaren att de får betalningsinstruktioner](/img/frontend/registration-manual-notice.png)

Och de får också ett meddelande på din **Thank You**-sida med dina betalningsinstruktioner.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Bekräfta manuella betalningar

För att bekräfta en manuell betalning går du till menyn **Payments** i vänsterfältet. Där kan du se alla betalningar i ditt nätverk och deras detaljer, inklusive deras **status**. En manuell betalning har alltid statusen **Pending** tills du ändrar den manuellt.

![Betalningslista som visar väntande manuell betalning](/img/admin/payments-list.png)

Gå till betalningssidan genom att klicka på **referenskoden**. På den här sidan finns alla detaljer om den väntande betalningen, såsom referens-ID, produkter, tidsstämplar med mera.

![Sida med betalningsdetaljer som visar referenskod, produkter och totalsummor](/img/admin/payment-edit.png)

I den högra kolumnen kan du ändra betalningens status. Om du ändrar den till **Completed** och **aktiverar alternativet Activate Membership** aktiveras kundens site och deras medlemskap blir aktivt.

![Sida för redigering av betalning med Status satt till Completed och växlingsknappen Activate Membership](/img/admin/payment-activate-membership.png)
