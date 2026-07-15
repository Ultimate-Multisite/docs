---
title: Klant Account-pagina
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# De Account-pagina van je klant (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Wanneer klanten zich abonneren op een abonnement op je netwerk, krijgen ze toegang tot een website en het Dashboard daarvan met belangrijke informatie over hun betalingen, lidmaatschappen, domeinen, abonnementsbeperkingen, enz...

In deze tutorial leiden we je door de accountpagina van de klant en zie je wat je klanten daarin kunnen zien en doen.

## De Account-pagina {#the-account-page}

De accountpagina is toegankelijk door in het Dashboard van je klant op **Account** te klikken.

![Account-menu in het Dashboard van de klant](/img/account-page/account-menu.png)

Op soevereine tenant-netwerken houdt Ultimate Multisite v2.13.0 deze klantbeheerervaring op de hoofdsite. Als een klant account-, afreken-, facturerings-, factuur-, sitebeheer-, sjabloonwissel- of domeintoewijzingsacties opent vanaf een soevereine tenant, verwijst de actie terug naar het klantenpaneel van de hoofdsite, zodat de facturerings- en lidmaatschapsgegevens van het netwerk leidend blijven.

Wanneer de klant vanaf een soevereine tenant arriveert, kan het klantenpaneel van de hoofdsite een terugkeerlink naar de tenant-site bevatten. De terugkeerlink wordt alleen getoond wanneer Ultimate Multisite het terugkeerdoel kan valideren als een van de sites van de klant, wat willekeurige omleidingen voorkomt en tegelijkertijd de tenant-workflow behoudt.

![Overzicht van de accountpagina van de klant](/img/account-page/overview.png)

Nadat een klant erop klikt, zien ze een overzicht van hun lidmaatschap, factuuradres, facturen, domeinen, sitebeperkingen, en kunnen ze ook het ****Sitesjabloon** wijzigen (als dit is toegestaan in je netwerk)**.

Ze kunnen ook het lidmaatschap wijzigen naar een ander abonnement, of een ander pakket of een andere dienst kopen die je aanbiedt. Laten we elke sectie afzonderlijk bekijken.

### Overzicht van je lidmaatschap: {#your-membership-overview}

Het eerste blok direct onder de naam van de website van je klanten toont een overzicht van hun huidige abonnement en diensten/pakketten die erbij zijn gekocht. Het blok toont ook het lidmaatschapsnummer, het aanvankelijke bedrag dat ervoor is betaald, hoeveel het abonnement en eventuele diensten/pakketten kosten en hoe vaak ze voor dit lidmaatschap zijn gefactureerd. Ze kunnen ook zien of het lidmaatschap **Actief** , **Verlopen** of **Geannuleerd** is.

![Lidmaatschapsoverzicht met abonnement, bedrag en factureringsgegevens](/img/account-page/membership-card.png)

Direct onder dit blok kunnen je klanten de blokken **Over deze site** en **Sitebeperkingen** zien. Deze blokken tonen alle beperkingen die bij hun abonnement horen: schijfruimte, berichten, pagina's, bezoeken, enz... Deze limieten kunnen worden geconfigureerd op elke abonnementspagina onder **Ultimate Multisite > Producten**.

![Blokken Over deze site en Sitebeperkingen met abonnementsbeperkingen](/img/account-page/site-limits.png)

Aan de rechterkant van **Je lidmaatschap** kunnen klanten op **Wijzigen** klikken. Hiermee krijgen ze alle beschikbare abonnementen en pakketten/diensten te zien. Als ze een ander abonnement kiezen, worden de beperkingen van dat abonnement van kracht in plaats van de huidige beperkingen van het lidmaatschap - ongeacht of ze downgraden of upgraden.

Als je klanten nu kiezen om pakketten of diensten voor dit huidige lidmaatschap te kopen - zoals meer schijfruimte of bezoeken - wordt het huidige lidmaatschap niet gewijzigd, maar worden alleen de nieuwe pakketten eraan toegevoegd.

Let op dat kortingscodes niet kunnen worden toegevoegd op deze pagina voor het wijzigen van het lidmaatschap. Als de klant een kortingscode heeft gebruikt bij de eerste aankoop van het lidmaatschap, wordt de code ook toegepast op dit nieuwe lidmaatschap.

### Het factuuradres bijwerken: {#updating-the-billing-address}

Op de accountpagina kunnen je klanten ook hun factuuradres bijwerken. Ze hoeven alleen op **Bijwerken** te klikken naast _Factuuradres_.

![Sectie Factuuradres met knop Bijwerken](/img/account-page/billing-address.png)

Er verschijnt een nieuw venster voor je klant. Het enige wat hij hoeft te doen is het nieuwe adres invullen en op _Wijzigingen opslaan_ klikken.

![Formulier voor het bijwerken van het factuuradres](/img/account-page/billing-address-form.png)

### Het sitesjabloon wijzigen: {#changing-the-site-template}

Om je klanten toe te staan hun sitesjablonen te wijzigen, moet je naar **Ultimate Multisite > Instellingen > Sites** gaan en de optie **Sjabloonwisseling toestaan** inschakelen.

Selecteer ook onder **Ultimate Multisite > Producten** je abonnementen en ga naar het tabblad **Sitesjablonen**. Zorg ervoor dat de optie **Sitesjablonen toestaan** is ingeschakeld en dat bij **Selectiemodus sitesjabloon** de optie **Beschikbare sitesjablonen kiezen** is geselecteerd.

![Tabblad sitesjablonen van product met sjabloonselectiemodus](/img/config/product-site-templates.png)

Je kunt alle beschikbare sitesjablonen op je website zien. Kies welke je beschikbaar wilt maken en welke je niet beschikbaar wilt maken voor je klanten die op dit abonnement zijn geabonneerd. Let op dat deze opties ook invloed hebben op het afrekenformulier, dus elk sjabloon dat is gekozen als **Niet beschikbaar** verschijnt niet op de registratiepagina voor dit abonnement.

Nu kunnen je klanten binnen hun accountpagina op **Sitesjabloon wijzigen** klikken.

![Knop Sitesjabloon wijzigen op accountpagina](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 toont een opnieuw ontworpen paneel voor sjabloonwisseling. Het paneel begint met een **kaart voor het huidige sjabloon**, zodat klanten kunnen zien welk sjabloon actief is voordat ze een vervanging kiezen.

Een vast raster met beschikbare sitesjablonen blijft zichtbaar terwijl klanten hun opties bekijken. Dit helpt hen de sjablonen te vergelijken die voor hun abonnement zijn toegestaan zonder de huidige selectie uit het oog te verliezen.

![Lijst met beschikbare sitesjablonen voor het abonnement](/img/config/site-templates-list.png)

Nadat ze het sjabloon hebben geselecteerd waarnaar ze willen wijzigen, wordt gevraagd de wijziging te bevestigen.

![Bevestigingsdialoog voor het wisselen van sitesjabloon](/img/account-page/template-switch-confirm.png)

Nadat ze de bevestiging hebben ingeschakeld en op **Wissel verwerken** hebben geklikt, wordt het nieuwe sitesjabloon gebruikt op de website van je klant.

Klanten kunnen ook **Reset current template** gebruiken vanuit dit paneel wanneer ze de site moeten terugzetten naar de momenteel toegewezen template. Net als bij het overschakelen naar een andere template kan het resetten van een template site-inhoud overschrijven, dus klanten moeten dit alleen bevestigen wanneer ze de resetactie begrijpen.

### Aangepaste domeinen toevoegen: {#adding-custom-domains}

Je klanten hebben ook de optie om een aangepast domein voor dit abonnement toe te voegen op hun Account-pagina. Om je klanten aangepaste domeinen te laten gebruiken, ga je naar **Ultimate Multisite > Settings >** **Domain Mapping**.

Schakel de optie **Enable Domain Mapping** in. Dit stelt je klanten in staat om aangepaste domeinen op netwerkniveau te gebruiken.

Vergeet niet ook te controleren of domain mapping is ingeschakeld per product, omdat je een product kunt beperken zodat je klanten geen aangepaste domeinen kunnen gebruiken.

Ga naar **Ultimate Multisite > Products**. Selecteer het abonnement van je keuze en ga naar het tabblad **Custom Domains**. Schakel de optie **Allow Custom Domains** in.

![Tabblad Custom Domains met schakelaar Allow Custom Domains](/img/config/product-custom-domains.png)

Dit stelt alle klanten die op dit specifieke abonnement zijn geabonneerd in staat om aangepaste domeinen te gebruiken. Nu kunnen je klanten op de Account-pagina een aangepast domein toevoegen door op **Add Domain** te klikken.

![Knop Add Domain op de Account-pagina](/img/account-page/add-domain-button.png)

Het eerste venster dat wordt geopend, toont je klanten een bericht met instructies over hoe ze hun DNS-records kunnen bijwerken om dit aangepaste domein op je netwerk te laten werken.

![DNS-instructies die worden getoond bij het toevoegen van een aangepast domein](/img/account-page/add-domain-dns.png)

Dit bericht kan (door jou) worden bewerkt via **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Instelling Add New Domain Instructions in Domain Mapping](/img/config/settings-domain-mapping.png)

Hier is een volledig overzicht van de pagina met instellingen voor domain mapping:

![Volledige pagina met instellingen voor domain mapping](/img/config/settings-domain-mapping-full.png)

Na het klikken op **Next Step** kunnen je klanten hun aangepaste domeinnaam toevoegen en kiezen of dit aangepaste domein het primaire domein wordt. Houd er rekening mee dat je klanten meer dan één aangepast domein voor hun websites kunnen gebruiken, zodat ze kunnen kiezen welk domein het primaire domein wordt.

![Invoer van aangepaste domeinnaam met optie voor primair domein](/img/account-page/add-domain-primary.png)

Na het klikken op **Add Domain** wordt het domein toegevoegd aan het account van je klant. Het enige wat ze nu nog hoeven te doen, is de DNS-records van dit aangepaste domein wijzigen bij hun domeinregistrar.

### Wachtwoord wijzigen: {#changing-password}

Binnen het Account-dashboard kunnen je klanten ook hun wachtwoord wijzigen door op **Change Password** te klikken.

![Knop Change Password op Account-pagina](/img/account-page/change-password-button.png)

Dit toont een nieuw venster waarin je klanten hun huidige wachtwoord moeten invullen en daarna het nieuwe wachtwoord dat ze willen gebruiken.

![Formulier voor wachtwoord wijzigen met velden voor huidig en nieuw wachtwoord](/img/account-page/change-password-form.png)

### Gevarenzone: {#danger-zone}

We hebben ook twee opties die worden getoond in het gedeelte **Danger Zone**: **Delete Site** en **Delete Account**. Ze staan beide in het gedeelte Danger Zone omdat deze twee acties onomkeerbaar zijn. Als je klanten hun website of hun account verwijderen, kunnen ze deze niet herstellen.

![Danger Zone met opties Delete Site en Delete Account](/img/account-page/danger-zone.png)

Als je klanten op een van deze twee opties klikken, krijgen ze een venster te zien waarin ze de optie moeten inschakelen om de website of het account te verwijderen en waarin ze worden gewaarschuwd dat deze actie niet ongedaan kan worden gemaakt.

![Bevestigingsdialoog Delete Site](/img/account-page/delete-site-confirm.png)

![Bevestigingsdialoog Delete Account](/img/account-page/delete-account-confirm.png)

Als ze hun website verwijderen, blijven hun account en membership onaangetast. Ze verliezen alleen alle inhoud op hun website. Als ze hun account verwijderen, gaan alle websites, memberships en informatie met betrekking tot dit account verloren.
