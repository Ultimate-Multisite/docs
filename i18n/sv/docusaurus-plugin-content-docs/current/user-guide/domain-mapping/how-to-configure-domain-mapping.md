---
title: Hur man konfigurerar domänmappning
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Så här konfigurerar du domänmappning (v2)

_**VIKTIG INFORMATION: Den här artikeln gäller Ultimate Multisite version 2.x.**_

En av de mest kraftfulla funktionerna i ett premiumnätverk är möjligheten att erbjuda dina kunder att koppla en toppdomän till sina webbplatser. Vilket ser trots allt mer professionellt ut: [_**johansbutik.dittnatverk.se**_](http://joesbikeshop.yournetwork.com) eller [_**johansbutik.se**_](http://joesbikeshop.com)? Det är därför Ultimate Multisite har den här funktionen inbyggd, utan behov av tredjepartsplugins.

## Vad är domänmappning?

Som namnet antyder är domänmappning den funktion som Ultimate Multisite erbjuder för att ta emot en förfrågan för en anpassad domän och mappa den förfrågan till motsvarande webbplats i nätverket som har just den domänen kopplad.

### Så här konfigurerar du domänmappning i ditt Ultimate Multisite-nätverk

Domänmappning kräver viss konfiguration från din sida för att fungera. Som tur är automatiserar Ultimate Multisite det tunga arbetet åt dig så att du enkelt kan uppfylla kraven.

Under installationen av Ultimate Multisite kommer guiden automatiskt att kopiera och installera **sunrise.php** till den avsedda mappen. **Guiden låter dig inte fortsätta förrän det här steget är slutfört**.

![Installationsguiden för Ultimate Multisite med sunrise.php-steget](/img/config/settings-domain-mapping.png)

Det innebär att så fort installationsguiden för Ultimate Multisite har slutfört konfigurationen av ditt nätverk kan du börja mappa anpassade domäner direkt.

Observera att domänmappning i Ultimate Multisite inte är obligatoriskt. Du har möjlighet att använda WordPress Multisites inbyggda domänmappningsfunktion eller någon annan domänmappningslösning.

Om du behöver inaktivera Ultimate Multisites domänmappning för att ge plats åt andra domänmappningslösningar kan du stänga av den här funktionen under **Ultimate Multisite > Settings > Domain Mapping**.

![Inställningar för domänmappning med aktiveringsknapp](/img/config/settings-domain-mapping.png)

Precis under det här alternativet kan du också se alternativet **Force Admin Redirect**. Det här alternativet låter dig styra om dina kunder ska kunna komma åt sin adminpanel både på sin anpassade domän och underdomän, eller endast på en av dem.

Om du väljer **Force redirect to mapped domain** kommer dina kunder bara att kunna komma åt sin adminpanel på sina anpassade domäner.

Alternativet **Force redirect to network domain** gör precis tvärtom – dina kunder kommer bara att kunna komma åt sina adminpaneler på sin underdomän, även om de försöker logga in på sina anpassade domäner.

Och alternativet **Allow access to the admin by both mapped domain domain and network domain** låter dem komma åt sina adminpaneler både på underdomänen och den anpassade domänen.

![Alternativ för Force Admin Redirect vid domänmappning](/img/config/settings-domain-mapping.png)

Det finns två sätt att mappa en anpassad domän. Det första är att mappa domännamnet från nätverkets adminpanel som superadmin, och det andra är genom underwebbplatsens adminpanel under kontosidan.

Men innan du börjar mappa den anpassade domänen till en av underwebbplatserna i ditt nätverk måste du se till att **DNS-inställningarna** för domännamnet är korrekt konfigurerade.

### 

### Se till att domänens DNS-inställningar är korrekt konfigurerade

För att en mappning ska fungera måste du se till att domänen du planerar att mappa pekar mot ditt nätverks IP-adress. Observera att du behöver nätverkets IP-adress – alltså IP-adressen för domänen där Ultimate Multisite är installerat – inte IP-adressen för den anpassade domänen du vill mappa. För att söka efter IP-adressen för en specifik domän föreslår vi att du till exempel använder [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

För att korrekt mappa domänen behöver du lägga till en **A-post** i din **DNS**-konfiguration som pekar mot den **IP-adressen**. DNS-hantering varierar mycket mellan olika domänregistratorer, men det finns gott om guider online som täcker detta om du söker på "_Skapa A-post hos XXXX_" där XXXX är din domänregistrator (t.ex.: "_Skapa A-post hos GoDaddy_").

Om du har problem med att få detta att fungera, **kontakta din domänregistrators support** så kan de hjälpa dig med den här delen.

Om du planerar att låta dina kunder mappa sina egna domäner måste de göra det här arbetet själva. Hänvisa dem till deras registrators supportsystem om de inte lyckas skapa A-posten.

### Mappa anpassat domännamn som superadmin

När du är inloggad som superadmin i ditt nätverk kan du enkelt lägga till och hantera anpassade domännamn genom att gå till **Ultimate Multisite > Domains**.

![Domänlistsidan i Ultimate Multisite](/img/admin/domains-list.png)

På den här sidan kan du klicka på knappen **Add Domain** högst upp, och då öppnas ett modalt fönster där du kan ange och fylla i det **anpassade domännamnet**, **underwebbplatsen** du vill koppla det anpassade domännamnet till, och bestämma om du vill ställa in det som **primärt domännamn** eller inte (observera att du kan mappa **flera domännamn till en underwebbplats**).

![Modalt fönster för Add Domain med fält för domännamn och webbplats](/img/admin/domains-list.png)

När du har fyllt i all information kan du klicka på knappen **Add Existing Domain** längst ner.

Detta startar processen för att verifiera och hämta DNS-informationen för den anpassade domänen. Du kommer också att se en logg längst ner på sidan så att du kan följa processen. Den här processen kan ta några minuter att slutföra.

**Stage** eller statusen bör ändras från **Checking DNS** till **Ready** om allt är korrekt konfigurerat.

![Domänstatus ändras från Checking DNS till Ready](/img/admin/domains-list.png)

![Domän med Ready-status i domänlistan](/img/admin/domains-list.png)

Om du klickar på domännamnet kan du se några alternativ inuti. Låt oss ta en snabb titt på dem:

![Domändetaljsida med stage, site, active och SSL-alternativ](/img/admin/domains-list.png)

**Stage:** Det här är det stadium som domänen befinner sig i. När du först lägger till domänen kommer den förmodligen att vara i stadiet **Checking DNS**. Processen kontrollerar DNS-posterna och bekräftar att de är korrekta. Sedan kommer domänen att sättas i stadiet **Checking SSL**. Ultimate Multisite kontrollerar om domänen har SSL eller inte och kategoriserar din domän som **Ready** eller **Ready (without SSL)**.

**Site:** Underdomänen som är kopplad till den här domänen. Den mappade domänen kommer att visa innehållet från den här specifika webbplatsen.

**Active:** Du kan slå på eller av det här alternativet för att aktivera eller inaktivera domänen.

**Is Primary Domain?:** Dina kunder kan ha mer än en mappad domän för varje webbplats. Använd det här alternativet för att välja om detta är den primära domänen för den specifika webbplatsen.

**Is Secure?:** Även om Ultimate Multisite kontrollerar om domänen har ett SSL-certifikat eller inte innan den aktiveras, kan du manuellt välja att ladda domänen med eller utan SSL-certifikat. Observera att om webbplatsen inte har ett SSL-certifikat och du försöker tvinga den att laddas med SSL kan det ge dig fel.

### Mappa anpassat domännamn som underwebbplatsanvändare

Administratörer för underwebbplatser kan också mappa anpassade domännamn från sin underwebbplats adminpanel.

Först måste du se till att du aktiverar det här alternativet under inställningarna för **Domain mapping**. Se skärmdumpen nedan.

![Inställningar för domänmappning som tillåter underwebbplatsanvändare att mappa domäner](/img/config/settings-domain-mapping.png)

Du kan också ställa in eller konfigurera det här alternativet på **Plan**-nivå eller i produktalternativen under **Ultimate Multisite > Products**.

![Alternativ för anpassade domäner i produktinställningar](/img/config/settings-domain-mapping.png)

När något av dessa alternativ är aktiverat och en underwebbplatsanvändare får mappa anpassade domännamn, bör underwebbplatsanvändaren se en metabox under **Account**-sidan som heter **Domains**.

![Domains-metabox på underwebbplatsens kontosida](/img/admin/domains-list.png)

Användaren kan klicka på knappen **Add Domain** och då öppnas ett modalt fönster med några instruktioner.

![Modalt fönster för Add Domain med DNS-instruktioner för underwebbplatsanvändare](/img/admin/domains-list.png)

Användaren kan sedan klicka på **Next Step** och fortsätta med att lägga till det anpassade domännamnet. De kan också välja om detta ska vara den primära domänen eller inte.

![Fält för anpassat domännamn med alternativ för primär domän](/img/admin/domains-list.png)

![Klicka på Add Domain för att starta DNS-verifiering](/img/admin/domains-list.png)Klicka på **Add Domain** för att starta processen för att verifiera och hämta DNS-informationen för den anpassade domänen.

### Om domänsynkronisering

Domänsynkronisering är en process där Ultimate Multisite lägger till det anpassade domännamnet på ditt webbhotellskonto som en tilläggsdomän **för att domänmappningen ska fungera**.

Domänsynkronisering sker automatiskt om din webbhotellsleverantör har integration med Ultimate Multisites domänmappningsfunktion. För närvarande är dessa webbhotellsleverantörer _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ och _Cpanel_.

Du måste aktivera den här integrationen i Ultimate Multisite-inställningarna under fliken **Integration**.

![Fliken Integration i Ultimate Multisite-inställningar](/img/config/settings-domain-mapping.png)

![Inställningar för webbhotellsintegration för domänsynkronisering](/img/config/settings-domain-mapping.png)

_Observera att om din webbhotellsleverantör inte är en av de leverantörer som nämns ovan, **måste du manuellt synkronisera eller lägga till domännamnet** på ditt webbhotellskonto._
