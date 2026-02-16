---
title: Klientkontosida
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Din kunds kontosida (v2)

_**VIKTIGT: Den här artikeln gäller Ultimate Multisite version 2.x.**_

När kunder tecknar ett abonnemang på ditt nätverk får de tillgång till en webbplats och dess kontrollpanel med viktig information om betalningar, medlemskap, domäner, planbegränsningar med mera.

I den här guiden går vi igenom kundens kontosida och visar vad dina kunder kan se och göra där.

## Kontosidan

Kontosidan nås genom att klicka på **Account** i kundens kontrollpanel.

![Kontomeny i kundens kontrollpanel](/img/admin/dashboard.png)

![Översikt över kundens kontosida](/img/admin/dashboard.png)

När en kund klickar på den ser de en översikt över sitt medlemskap, faktureringsadress, fakturor, domäner och webbplatsbegränsningar. De kan också byta **Site Template** (om det är tillåtet i ditt nätverk).

De kan även byta medlemskap till en annan plan eller köpa ytterligare paket eller tjänster som du erbjuder. Låt oss titta närmare på varje del.

### Översikt över ditt medlemskap:

Det första blocket, precis under kundens webbplatsnamn, visar en översikt över deras nuvarande plan och de tjänster/paket som köpts tillsammans med den. Blocket visar också medlemsnummer, det ursprungliga beloppet som betalades, hur mycket planen och eventuella tjänster/paket kostar samt hur många gånger de har fakturerats för detta medlemskap. De kan också se om medlemskapet är **Active**, **Expired** eller **Canceled**.

![Medlemskapsöversikt som visar plan, belopp och faktureringsdetaljer](/img/admin/memberships-list.png)

Precis under detta block ser dina kunder blocken **About This Site** och **Site Limits**. Dessa block visar dem alla begränsningar som gäller för deras plan: diskutrymme, inlägg, sidor, besök med mera. Dessa gränser kan konfigureras på varje plans sida under **Ultimate Multisite > Products**.

![Blocken About This Site och Site Limits som visar planbegränsningar](/img/admin/dashboard.png)

Till höger om **Your Membership** kan kunderna klicka på **Change**. Detta visar dem alla tillgängliga planer och paket/tjänster. Om de väljer en annan plan börjar begränsningarna för den nya planen gälla istället för de nuvarande — oavsett om de uppgraderar eller nedgraderar.

Om dina kunder däremot väljer att köpa paket eller tjänster för detta nuvarande medlemskap — som mer diskutrymme eller fler besök — ändras inte det nuvarande medlemskapet, utan de nya paketen läggs bara till.

Observera att rabattkoder inte kan läggas till på denna sida för medlemskapsändring. Om kunden använde en rabattkod vid det första medlemskapsköpet kommer koden även att gälla för det nya medlemskapet.

### Uppdatera faktureringsadressen:

På kontosidan kan dina kunder också uppdatera sin faktureringsadress. De behöver bara klicka på **Update** bredvid _Billing Address_.

![Avsnittet Billing Address med knappen Update](/img/admin/customers-list.png)

Ett nytt fönster öppnas för kunden. Allt de behöver göra är att fylla i den nya adressen och klicka på _Save Changes_.

![Formulär för att uppdatera faktureringsadress](/img/admin/customers-list.png)

### Byta webbplatsmall:

För att låta dina kunder byta webbplatsmall går du till **Ultimate Multisite > Settings > Sites** och aktiverar alternativet **Allow Template Switching**.

Gå även till **Ultimate Multisite > Products**, välj dina planer och gå till fliken **Site Templates**. Se till att alternativet **Allow Site Templates** är aktiverat och att **Choose Available Site Templates** är valt under **Site Template Selection Mode**.

![Fliken Site Templates för produkter med mallvalsläge](/img/config/product-site-templates.png)

Du kommer att kunna se alla tillgängliga webbplatsmallar på din webbplats. Välj vilka du vill göra tillgängliga och vilka du inte vill att kunder med denna plan ska kunna använda. Observera att detta också påverkar kassan, så alla mallar som är markerade som **Not Available** visas inte på registreringssidan för denna plan.

Nu kan dina kunder klicka på **Change Site Template** på sin kontosida.

![Knappen Change Site Template på kontosidan](/img/admin/dashboard.png)

En lista över alla tillgängliga webbplatsmallar för denna plan visas för kunden.

![Lista över tillgängliga webbplatsmallar för planen](/img/config/site-templates-list.png)

Efter att ha valt den mall de vill byta till ombeds de bekräfta bytet.

![Bekräftelsedialog för byte av webbplatsmall](/img/admin/dashboard.png)

Efter att ha aktiverat bekräftelsen och klickat på **Process Switch** kommer den nya webbplatsmallen att användas på kundens webbplats.

### Lägga till egna domäner:

Dina kunder har också möjlighet att lägga till en egen domän för denna plan på sin kontosida. För att låta dina kunder använda egna domäner går du till **Ultimate Multisite > Settings > Domain Mapping**.

Aktivera alternativet **Enable Domain Mapping**. Detta gör att dina kunder kan använda egna domäner på nätverksnivå.

Glöm inte att också kontrollera att domänmappning är aktiverad på produktnivå — eftersom du kan begränsa en produkt så att kunder inte kan använda egna domäner.

Gå till **Ultimate Multisite > Products**. Välj önskad plan och gå till fliken **Custom Domains**. Aktivera alternativet **Allow Custom Domains**.

![Fliken Custom Domains med Allow Custom Domains aktiverat](/img/config/product-custom-domains.png)

Detta gör att alla kunder som prenumererar på just denna plan kan använda egna domäner. Nu kan dina kunder på kontosidan lägga till en egen domän genom att klicka på **Add Domain**.

![Knappen Add Domain på kontosidan](/img/admin/domains-list.png)

Det första fönstret som öppnas visar dina kunder ett meddelande med instruktioner om hur de uppdaterar sina DNS-poster för att den egna domänen ska fungera på ditt nätverk.

![DNS-instruktioner som visas när en egen domän läggs till](/img/admin/domains-list.png)

Detta meddelande kan redigeras (av dig) under **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Inställningen Add New Domain Instructions under Domain Mapping](/img/config/settings-domain-mapping.png)

Efter att ha klickat på **Next Step** kan dina kunder lägga till sitt eget domännamn och välja om denna domän ska vara den primära. Observera att dina kunder kan använda fler än en egen domän för sina webbplatser, så de kan välja vilken som ska vara den primära.

![Inmatning av eget domännamn med alternativ för primär domän](/img/admin/domains-list.png)

Efter att ha klickat på **Add Domain** läggs domänen till på kundens konto. Allt de behöver göra nu är att ändra DNS-posterna för denna egna domän hos sin domänregistrator.

### Byta lösenord:

På kontosidan kan dina kunder också byta sitt lösenord genom att klicka på **Change Password**.

![Knappen Change Password på kontosidan](/img/admin/dashboard.png)

Detta öppnar ett nytt fönster där dina kunder behöver fylla i sitt nuvarande lösenord och sedan ange det nya lösenord de vill använda.

![Formulär för lösenordsbyte med fält för nuvarande och nytt lösenord](/img/admin/dashboard.png)

### Farozonen:

Vi har också två alternativ som visas under **Danger Zone**: **Delete Site** och **Delete Account**. De finns båda under Farozonen eftersom dessa åtgärder är oåterkalleliga. Om dina kunder raderar sin webbplats eller sitt konto kan de inte återställa dem.

![Farozonen med alternativen Delete Site och Delete Account](/img/admin/dashboard.png)

Om dina kunder klickar på något av dessa alternativ visas ett fönster där de behöver aktivera alternativet för att ta bort webbplatsen eller kontot, och de varnas för att åtgärden inte kan ångras.

![Bekräftelsedialog för Delete Site](/img/admin/dashboard.png)

![Bekräftelsedialog för Delete Account](/img/admin/dashboard.png)

Om de raderar sin webbplats förblir deras konto och medlemskap orörda. De förlorar bara allt innehåll på sin webbplats. Om de raderar sitt konto försvinner alla webbplatser, medlemskap och information kopplad till kontot.
