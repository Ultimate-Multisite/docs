---
title: Kundens Account-sida
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Din klients Account-sida (v2)

_**VIKTIGT MEDDELANDE: Den här artikeln avser Ultimate Multisite version 2.x.**_

När kunder prenumererar på en plan i ditt nätverk får de åtkomst till en webbplats och dess Dashboard med viktig information om deras betalningar, medlemskap, domäner, planbegränsningar, osv...

I den här handledningen guidar vi dig genom kundens Account-sida, och du får se vad dina kunder kan se och göra där.

## Account-sidan {#the-account-page}

Account-sidan är tillgänglig genom att klicka på **Account** i din kunds Dashboard.

![Account-meny i kundens Dashboard](/img/account-page/account-menu.png)

På suveräna tenant-nätverk behåller Ultimate Multisite v2.13.0 den här kundhanteringsupplevelsen på huvudwebbplatsen. Om en kund öppnar åtgärder för konto, checkout, fakturering, faktura, webbplatshantering, mallbyte eller domänmappning från en suverän tenant, pekar åtgärden tillbaka till huvudwebbplatsens kundpanel så att nätverkets fakturerings- och medlemskapsposter förblir auktoritativa.

När kunden kommer från en suverän tenant kan huvudwebbplatsens kundpanel inkludera en returlänk tillbaka till tenant-webbplatsen. Returlänken visas endast när Ultimate Multisite kan validera returmålet som en av kundens webbplatser, vilket förhindrar godtyckliga omdirigeringar samtidigt som tenant-arbetsflödet bevaras.

![Översikt över kundens Account-sida](/img/account-page/overview.png)

Efter att en kund klickar på den ser de en översikt över sitt medlemskap, faktureringsadress, fakturor, domäner, webbplatsbegränsningar och kan även ändra ****webbplatsmallen** (om det är tillåtet i ditt nätverk)**.

De kan också byta medlemskapet till en annan plan, eller köpa ett annat paket eller en annan tjänst som du erbjuder. Låt oss titta på varje avsnitt separat.

### Översikt över ditt medlemskap: {#your-membership-overview}

Det första blocket direkt under dina kunders webbplatsnamn visar en översikt över deras aktuella plan och de tjänster/paket som köptes med den. Blocket visar också medlemskapsnumret, det ursprungliga beloppet som betalades för det, hur mycket planen och eventuella tjänster/paket kostar samt hur många gånger de har fakturerats för detta medlemskap. De kan också se om medlemskapet är **Aktivt** , **Utgånget** eller **Avbrutet**.

![Medlemskapsöversikt som visar plan, belopp och faktureringsdetaljer](/img/account-page/membership-card.png)

Direkt under detta block kan dina kunder se blocken **Om denna webbplats** och **Webbplatsbegränsningar**. Dessa block visar alla begränsningar som ingår i deras plan: diskutrymme, inlägg, sidor, besök, osv... Dessa gränser kan konfigureras på varje plansida under **Ultimate Multisite > Produkter**.

![Blocken Om denna webbplats och Webbplatsbegränsningar som visar planbegränsningar](/img/account-page/site-limits.png)

På höger sida av **Ditt medlemskap** kan kunder klicka på **Ändra**. Detta visar dem alla tillgängliga planer och paket/tjänster. Om de väljer en annan plan kommer begränsningarna för den planen att gälla i stället för medlemskapets nuvarande begränsningar – oavsett om de nedgraderar eller uppgraderar den.

Om dina kunder nu väljer att köpa paket eller tjänster för detta aktuella medlemskap – som mer diskutrymme eller fler besök – kommer det nuvarande medlemskapet inte att ändras, utan endast de nya paketen läggs till i det.

Observera att kupongkoder inte kan läggas till på denna sida för medlemskapsändring. Om kunden använde en kupongkod vid det första medlemskapsköpet kommer koden också att tillämpas på detta nya medlemskap.

### Uppdatera faktureringsadressen: {#updating-the-billing-address}

På Account-sidan kan dina kunder också uppdatera sin faktureringsadress. De behöver bara klicka på **Uppdatera** bredvid _Faktureringsadress_.

![Avsnittet Faktureringsadress med knappen Uppdatera](/img/account-page/billing-address.png)

Ett nytt fönster visas för din kund. Allt kunden behöver göra är att fylla i den nya adressen och klicka på _Spara ändringar_.

![Formulär för att uppdatera faktureringsadress](/img/account-page/billing-address-form.png)

### Ändra webbplatsmallen: {#changing-the-site-template}

För att låta dina kunder ändra sina webbplatsmallar behöver du gå till **Ultimate Multisite > Inställningar > Webbplatser** och aktivera alternativet **Tillåt mallbyte**.

På **Ultimate Multisite > Produkter** väljer du också dina planer och går till fliken **Webbplatsmallar**. Se till att alternativet **Tillåt webbplatsmallar** är aktiverat och att alternativet **Välj tillgängliga webbplatsmallar** är valt under **Val-läge för webbplatsmall**.

![Fliken för produktens webbplatsmallar med läge för mallval](/img/config/product-site-templates.png)

Du kommer att kunna se alla tillgängliga webbplatsmallar på din webbplats. Välj vilka du vill göra tillgängliga och vilka du inte vill ska vara tillgängliga för dina kunder som prenumererar på denna plan. Observera att dessa alternativ också påverkar checkout-formuläret, så alla mallar som väljs som **Inte tillgänglig** visas inte på registreringssidan för denna plan.

Nu kan dina kunder klicka på **Ändra webbplatsmall** på sin Account-sida.

![Knappen Ändra webbplatsmall på Account-sidan](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 visar en omdesignad panel för mallbyte. Panelen börjar med ett **kort för aktuell mall** så att kunder kan se vilken mall som är aktiv innan de väljer en ersättare.

Ett bestående rutnät med tillgängliga webbplatsmallar förblir synligt medan kunderna granskar sina alternativ. Detta hjälper dem att jämföra de mallar som är tillåtna för deras plan utan att tappa den aktuella markeringen ur sikte.

![Lista över tillgängliga webbplatsmallar för planen](/img/config/site-templates-list.png)

Efter att ha valt den de vill byta till blir de ombedda att bekräfta ändringen.

![Bekräftelsedialog för byte av webbplatsmall](/img/account-page/template-switch-confirm.png)

Efter att ha aktiverat bekräftelsen och klickat på **Bearbeta byte** kommer den nya webbplatsmallen att användas på din kunds webbplats.

Kunder kan också använda **Återställ aktuell mall** från den här panelen när de behöver återställa webbplatsen tillbaka till den för närvarande tilldelade mallen. Precis som när man byter till en annan mall kan återställning av en mall skriva över webbplatsinnehåll, så kunder bör bara bekräfta det när de förstår återställningsåtgärden.

### Lägga till anpassade domäner: {#adding-custom-domains}

Dina kunder kommer också att ha möjlighet att lägga till en anpassad domän för den här planen på sin Account-sida. För att låta dina kunder använda anpassade domäner går du till **Ultimate Multisite > Inställningar >** **Domänmappning**.

Aktivera alternativet **Aktivera domänmappning**. Detta låter dina kunder använda anpassade domäner på nätverksnivå.

Glöm inte att också kontrollera om domänmappning är aktiverad per produkt - eftersom du kan begränsa en produkt så att dina kunder inte får använda anpassade domäner.

Gå till **Ultimate Multisite > Produkter**. Välj den plan du vill använda och gå till fliken **Anpassade domäner**. Aktivera alternativet **Tillåt anpassade domäner**.

![Fliken Anpassade domäner med reglaget Tillåt anpassade domäner](/img/config/product-custom-domains.png)

Detta låter alla kunder som prenumererar på denna specifika plan använda anpassade domäner. Nu kan dina kunder på Account-sidan lägga till en anpassad domän genom att klicka på **Lägg till domän**.

![Knappen Lägg till domän på Account-sidan](/img/account-page/add-domain-button.png)

Det första fönstret som öppnas visar dina kunder ett meddelande som instruerar dem om hur de ska uppdatera sina DNS-poster för att få den här anpassade domänen att fungera på ditt nätverk.

![DNS-instruktioner som visas när en anpassad domän läggs till](/img/account-page/add-domain-dns.png)

Detta meddelande kan redigeras (av dig) under **Ultimate Multisite > Inställningar > Domänmappning > Instruktioner för att lägga till ny domän**.

![Inställningen Instruktioner för att lägga till ny domän i Domänmappning](/img/config/settings-domain-mapping.png)

Här är en fullständig vy av inställningssidan för domänmappning:

![Fullständig sida med inställningar för domänmappning](/img/config/settings-domain-mapping-full.png)

Efter att ha klickat på **Nästa steg** kan dina kunder lägga till sitt anpassade domännamn och välja om den här anpassade domänen ska vara den primära. Observera att dina kunder kan använda mer än en anpassad domän för sina webbplatser, så de kan välja vilken som ska vara den primära.

![Inmatning av anpassat domännamn med alternativ för primär domän](/img/account-page/add-domain-primary.png)

Efter att ha klickat på **Lägg till domän** läggs domänen till på din kunds Account. Allt de behöver göra nu är att ändra DNS-posterna för den här anpassade domänen hos sin domänregistrator.

### Ändra lösenord: {#changing-password}

Inne i Account Dashboard kan dina kunder också ändra sitt lösenord genom att klicka på **Ändra lösenord**.

![Knappen Ändra lösenord på Account-sidan](/img/account-page/change-password-button.png)

Detta visar ett nytt fönster där dina kunder behöver fylla i sitt nuvarande lösenord och sedan fylla i det nya lösenordet de vill använda.

![Formulär för att ändra lösenord med fält för nuvarande och nytt lösenord](/img/account-page/change-password-form.png)

### Farozon: {#danger-zone}

Vi har också två alternativ som visas i delen **Farozon**: **Ta bort webbplats** och **Ta bort Account**. De finns båda i delen Farozon eftersom dessa två åtgärder är oåterkalleliga. Om dina kunder tar bort sin webbplats eller sitt Account kan de inte återställa dem.

![Farozon med alternativen Ta bort webbplats och Ta bort Account](/img/account-page/danger-zone.png)

Om dina kunder klickar på något av dessa två alternativ visas ett fönster där de måste aktivera alternativet för att ta bort webbplatsen eller Account, och de varnas för att denna åtgärd inte kan ångras.

![Bekräftelsedialog för Ta bort webbplats](/img/account-page/delete-site-confirm.png)

![Bekräftelsedialog för Ta bort Account](/img/account-page/delete-account-confirm.png)

Om de tar bort sin webbplats kommer deras Account och medlemskap fortfarande att vara orörda. De förlorar bara allt innehåll på sin webbplats. Om de tar bort sitt Account går alla webbplatser, medlemskap och all information som rör detta Account förlorade.
