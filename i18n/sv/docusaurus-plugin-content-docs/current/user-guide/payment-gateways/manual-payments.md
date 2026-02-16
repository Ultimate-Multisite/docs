---
title: Ställa in manuella betalningar
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# Konfigurera manuella betalningar (v2)

_**VIKTIGT: Den här artikeln gäller Ultimate Multisite version 2.x.**_

Manuella betalningar är ett sätt för dig att erbjuda andra betalningsmetoder om **Stripe** eller **PayPal** inte är tillgängliga för dina användare. Det kan vara en banköverföring eller någon annan betalningsmetod som dina användare har tillgång till lokalt.

## Så aktiverar du manuella betalningar

Det är väldigt enkelt att konfigurera manuella betalningar. Du behöver bara aktivera det under betalningslösningar och skriva in detaljerade instruktioner för hur användaren ska genomföra betalningen.

Börja med att gå till **Ultimate Multisite > Settings > Payments**. Under **Payment Gateways** slår du på **Manual**. Då visas en ruta för **Payment Instructions**.

I den här rutan lägger du till den information som din kund behöver för att genomföra betalningen. Det kan till exempel vara dina bankuppgifter och din e-postadress så att kunden kan skicka dig en betalningsbekräftelse.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

När du är klar klickar du bara på **Save Settings** så är det klart. När användare registrerar sig på ditt nätverk kommer de att se ett meddelande om att de kommer att få dina instruktioner för att slutföra köpet.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

De kommer också att få ett meddelande på din **Thank You**-sida med dina betalningsinstruktioner.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Bekräfta manuella betalningar

För att bekräfta en manuell betalning går du till menyn **Payments** i vänstra sidofältet. Där kan du se alla betalningar i ditt nätverk och deras uppgifter, inklusive deras **status**. En manuell betalning har alltid statusen **Pending** tills du manuellt ändrar den.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Gå till betalningssidan genom att klicka på **referenskoden**. På den här sidan hittar du all information om den väntande betalningen, som referens-ID, produkter, tidsstämplar med mera.

![Payment details page with reference code and products](/img/admin/payments-list.png)

I den högra kolumnen kan du ändra betalningens status. Genom att ändra den till **Completed** och slå på alternativet **Activate Membership** aktiveras din kunds webbplats och deras medlemskap blir aktivt.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
