---
title: Så här konfigurerar du domänmappning
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Så här konfigurerar du Domain Mapping (v2)

_**VIKTIGT MEDDELANDE: Den här artikeln avser Ultimate Multisite version 2.x.**_

En av de mest kraftfulla funktionerna i ett premiumnätverk är möjligheten att erbjuda våra kunder chansen att koppla en toppdomän till sina webbplatser. När allt kommer omkring, vilket ser mest professionellt ut: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) eller [_**joesbikeshop.com**_](http://joesbikeshop.com)? Det är därför Ultimate Multisite erbjuder den funktionen inbyggd, utan behov av att använda tredjepartsplugins.

## Vad är domain mapping? {#whats-domain-mapping}

Som namnet antyder är domain mapping den möjlighet som Ultimate Multisite erbjuder för att ta emot en begäran om en anpassad domän och mappa den begäran till motsvarande webbplats i nätverket med just den domänen kopplad.

### Så här ställer du in domain mapping på ditt Ultimate Multisite-nätverk {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain mapping kräver en del konfigurering från din sida för att fungera. Lyckligtvis automatiserar Ultimate Multisite det hårda arbetet åt dig så att du enkelt kan uppfylla kraven.

Under installationen av Ultimate Multisite kopierar och installerar guiden automatiskt **sunrise.php** till den angivna mappen. **Guiden låter dig inte fortsätta förrän detta steg är slutfört**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Det innebär att när Ultimate Multisite-installationsguiden har slutfört konfigureringen av ditt nätverk kan du börja mappa den anpassade domänen direkt.

Observera att domain mapping i Ultimate Multisite inte är obligatoriskt. Du har möjlighet att använda WordPress Multisite inbyggda funktion för domain mapping eller någon annan lösning för domain mapping.

Om du behöver inaktivera Ultimate Multisite domain mapping för att ge plats åt andra lösningar för domain mapping kan du inaktivera den här funktionen under **Ultimate Multisite > Settings > Domain Mapping**.

![Inställningssida för Domain Mapping som visar administratörsomdirigering, mappningsmeddelande och DNS-alternativ](/img/config/domain-mapping-settings.png)

Precis under det här alternativet kan du också se alternativet **Force Admin Redirect**. Det här alternativet låter dig kontrollera om dina kunder ska kunna komma åt sin admin dashboard både på sin anpassade domän och subdomän eller bara på en av dem.

Om du väljer **Force redirect to mapped domain** kommer dina kunder endast att kunna komma åt sin admin dashboard på sina anpassade domäner.

Alternativet **Force redirect to** **network domain** gör exakt motsatsen – dina kunder kommer endast att tillåtas komma åt sina dashboards på sin subdomän, även om de försöker logga in på sina anpassade domäner.

Och alternativet **Allow access to the admin by both mapped domain domain and network domain** låter dem komma åt sina admin dashboards både på subdomänen och den anpassade domänen.

![Dropdown för Admin Redirect expanderad och visar de tre omdirigeringsalternativen](/img/config/domain-mapping-redirect-options.png)

Det finns två sätt att mappa en anpassad domän. Det första är genom att mappa domännamnet från ditt nätverks admin dashboard som super admin och det andra är via admin dashboard för undersajten under kontosidan.

Men innan du börjar mappa den anpassade domänen till en av undersajterna i ditt nätverk måste du säkerställa att domännamnets **DNS-inställningar** är korrekt konfigurerade.

###

### Säkerställ att domänens DNS-inställningar är korrekt konfigurerade {#making-sure-the-domain-dns-settings-are-properly-configured}

För att en mappning ska fungera måste du säkerställa att domänen du planerar att mappa pekar mot ditt nätverks IP-adress. Observera att du behöver nätverkets IP-adress – IP-adressen för domänen där Ultimate Multisite är installerat – inte IP-adressen för den anpassade domänen du vill mappa. För att söka efter IP-adressen för en specifik domän föreslår vi att du går till [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), till exempel.

För att mappa domänen korrekt behöver du lägga till en **A RECORD** i din **DNS**-konfiguration som pekar mot den **IP-adressen**. DNS-hantering varierar mycket mellan olika domänregistratorer, men det finns gott om guider online som täcker detta om du söker efter " _Creating A Record on XXXX_ " där XXXX är din domänregistrator (t.ex.: " _Creating A Record on_ _GoDaddy_ ").

Om du har problem med att få detta att fungera, **kontakta supporten hos din domänregistrator** så kan de hjälpa dig med den här delen.

Om du planerar att låta dina kunder mappa sina egna domäner måste de själva göra arbetet i den här delen. Hänvisa dem till sin registrators supportsystem om de inte kan skapa A Record.

### Mappa anpassat domännamn som Super Admin {#mapping-custom-domain-name-as-super-admin}

När du är inloggad som super admin på ditt nätverk kan du enkelt lägga till och hantera anpassade domännamn genom att gå till **Ultimate Multisite > Domains**.

![Sida med domänlista i Ultimate Multisite](/img/admin/domains-list.png)

På den här sidan kan du klicka på knappen **Add Domain** högst upp, vilket öppnar ett modalt fönster där du kan ange och fylla i det **anpassade domännamnet**, **undersajten** du vill tillämpa det anpassade domännamnet på, och bestämma om du vill ange det som det **primära domännamnet** eller inte (observera att du kan mappa **flera domännamn till en undersajt**).

![Add Domain-modal med domännamn, sajtväljare och växel för primär domän](/img/admin/domain-add-modal.png)

När du har lagt in all information kan du sedan klicka på knappen **Add Existing Domain** längst ned.

Detta startar processen för att verifiera och hämta DNS-informationen för den anpassade domänen. Du kommer också att se en logg längst ned på sidan så att du kan följa processen den går igenom. Denna process kan ta några minuter att slutföra.

Ultimate Multisite v2.13.0 skapar också den interna domänposten automatiskt när en ny site skapas på en värd som ska behandlas som en domän per site. Om värden är nätverkets primära domän, eller en av de delade basdomänerna för checkout-formulär som konfigurerats i ett **Site URL**-fält, hoppas den automatiska mapped-domain-posten över så att den delade basdomänen förblir tillgänglig för varje site som använder den.

När en kund registrerar en ny domän via Domain Seller v1.3.0 eller senare mappar Ultimate Multisite automatiskt den registrerade domänen till kundens nätverks-site som standard. Administratörer behöver inte längre lägga till en separat mapped-domain-post efter en lyckad registrering om de inte vill justera alternativ som primärdomän-flaggan, aktiveringsstatus eller SSL-hantering.

**Stage** eller statusen bör ändras från **Checking DNS** till **Ready** om allt är korrekt konfigurerat.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Om du klickar på domännamnet kommer du att kunna se några alternativ inuti det. Låt oss ta en snabb titt på dem:

![Detaljsida för domän med växlar för stage, site, aktiv, primär och SSL](/img/admin/domain-edit.png)

**Stage:** Detta är det steg som domänen befinner sig i. När du först lägger till domänen kommer den troligen att vara i steget **Checking DNS**. Processen kontrollerar DNS-posterna och bekräftar att de är korrekta. Därefter placeras domänen i steget **Checking SSL**. Ultimate Multisite kontrollerar om domänen har SSL eller inte och kategoriserar din domän som **Ready** eller **Ready (without SSL)**.

**Site:** Subdomänen som är associerad med den här domänen. Den mappade domänen visar innehållet från denna specifika site.

**Active:** Du kan slå på eller av detta alternativ för att aktivera eller inaktivera domänen.

**Is Primary Domain?:** Dina kunder kan ha mer än en mappad domän för varje site. Använd detta alternativ för att välja om detta är den primära domänen för den specifika siten.

**Is Secure?:** Även om Ultimate Multisite kontrollerar om domänen har ett SSL-certifikat eller inte innan den aktiveras, kan du manuellt välja att ladda domänen med eller utan ett SSL-certifikat. Observera att om webbplatsen inte har ett SSL-certifikat och du försöker tvinga den att laddas med SSL kan det ge dig fel.

### Mappa anpassat domännamn som Subsite-användare {#mapping-custom-domain-name-as-subsite-user}

Subsite-administratörer kan också mappa anpassade domännamn från sin subsite admin dashboard.

Först måste du säkerställa att du aktiverar detta alternativ under inställningarna för **Domain mapping**. Se skärmbilden nedan.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Du kan också ställa in eller konfigurera detta alternativ på **Plan**-nivå eller i produktalternativ på **Ultimate Multisite > Products**.

![Sektionen Anpassade domäner på sidan för att redigera produkt](/img/config/product-custom-domains.png)

När något av dessa alternativ är aktiverat och en subsite-användare har tillåtelse att mappa anpassade domännamn bör subsite-användaren se en metaruta på **Account**-sidan som heter **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Användaren kan klicka på knappen **Add Domain** och då öppnas ett modalfönster med några instruktioner.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Användaren kan sedan klicka på **Next Step** och fortsätta med att lägga till det anpassade domännamnet. De kan också välja om detta ska vara den primära domänen eller inte.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Att klicka på **Add Domain** startar processen för att verifiera och hämta DNS-informationen för den anpassade domänen.

### Om domänsynkronisering {#about-domain-syncing}

Domänsynkronisering är en process där Ultimate Multisite lägger till det anpassade domännamnet i ditt hosting Account som en add-on-domän **för att domänmappningen ska fungera**.

Domänsynkronisering sker automatiskt om din hostingleverantör har integration med Ultimate Multisite-funktionen för domänmappning. För närvarande är dessa hostingleverantörer _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ och _Cpanel._

När en värdleverantörsintegration är aktiv kan Ultimate Multisite också köa DNS- eller subdomänskapande uppgifter på leverantörssidan för nyligen skapade sites. Om ingen integration lyssnar efter den uppgiften hoppas bakgrundsjobbet över för att undvika no-op-köposter. DNS- och SSL-kontroller för mappade domäner fortsätter att köras genom den normala domänstegsprocessen.

Du behöver aktivera denna integration i Ultimate Multisite-inställningarna under fliken **Integration**.

![Integrationsfliken i Ultimate Multisite-inställningar som visar hostingleverantörer](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Observera att om din hostingleverantör inte är en av de leverantörer som nämns ovan, **måste du manuellt synkronisera eller lägga till domännamnet** i ditt hosting Account._
