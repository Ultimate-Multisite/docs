---
title: Slik konfigurerer du domenetilordning
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Slik konfigurerer du domenekartlegging (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

En av de kraftigste funksjonene i et premium-nettverk er muligheten til å tilby kundene våre å koble et toppnivådomene til nettstedene sine. Tross alt, hva ser mest profesjonelt ut: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) eller [_**joesbikeshop.com**_](http://joesbikeshop.com)? Derfor tilbyr Ultimate Multisite denne funksjonen innebygd, uten behov for å bruke tredjeparts-plugins.

## Hva er domenekartlegging?

Som navnet antyder, er domenekartlegging muligheten Ultimate Multisite tilbyr for å ta imot en forespørsel om et tilpasset domene og kartlegge den forespørselen til det tilsvarende nettstedet i nettverket som har det aktuelle domenet tilknyttet.

### Slik setter du opp domenekartlegging på Ultimate Multisite-nettverket ditt

Domenekartlegging krever litt oppsett fra din side for å fungere. Heldigvis automatiserer Ultimate Multisite det tunge arbeidet for deg, slik at du enkelt kan oppfylle kravene.

Under installasjonen av Ultimate Multisite vil veiviseren automatisk kopiere og installere **sunrise.php** til den angitte mappen. **Veiviseren lar deg ikke fortsette før dette trinnet er fullført**.

<!-- Skjermbilde utilgjengelig: Ultimate Multisite-installasjonsveiviser med sunrise.php-trinn -->

Dette betyr at når installasjonsveiviseren for Ultimate Multisite er ferdig med å sette opp nettverket ditt, kan du begynne å kartlegge det tilpassede domenet med en gang.

Merk at domenekartlegging i Ultimate Multisite ikke er obligatorisk. Du har mulighet til å bruke WordPress Multisite sin innebygde domenekartleggingsfunksjon eller en annen løsning for domenekartlegging.

Hvis du trenger å deaktivere domenekartlegging i Ultimate Multisite for å gi plass til andre løsninger for domenekartlegging, kan du deaktivere denne funksjonen under **Ultimate Multisite > Innstillinger > Domenekartlegging**.

![Innstillingsside for domenekartlegging som viser admin-omdirigering, kartleggingsmelding og DNS-alternativer](/img/config/domain-mapping-settings.png)

Rett under dette alternativet kan du også se alternativet **Tving admin-omdirigering**. Dette alternativet lar deg styre om kundene dine skal kunne få tilgang til admin-dashboardet sitt både på det tilpassede domenet og underdomenet, eller bare på ett av dem.

Hvis du velger **Tving omdirigering til kartlagt domene** , vil kundene dine bare kunne få tilgang til admin-dashboardet sitt på sine tilpassede domener.

Alternativet **Tving omdirigering til** **nettverksdomene** vil gjøre nøyaktig det motsatte – kundene dine vil bare få tilgang til dashboardene sine på underdomenet, selv om de prøver å logge inn på sine tilpassede domener.

Og alternativet **Tillat tilgang til admin via både kartlagt domene og nettverksdomene** lar dem få tilgang til admin-dashboardene sine både på underdomenet og det tilpassede domenet.

![Nedtrekksmeny for admin-omdirigering utvidet og viser de tre omdirigeringsalternativene](/img/config/domain-mapping-redirect-options.png)

Det finnes to måter å kartlegge et tilpasset domene på. Den første er ved å kartlegge domenenavnet fra nettverkets admin-dashboard som superadmin, og den andre er gjennom admin-dashboardet til undersiden under Account-siden.

Men før du begynner å kartlegge det tilpassede domenet til en av undersidene i nettverket ditt, må du sørge for at **DNS-innstillingene** for domenenavnet er riktig konfigurert.

###

### Sørg for at domenets DNS-innstillinger er riktig konfigurert

For at en kartlegging skal fungere, må du sørge for at domenet du planlegger å kartlegge, peker til nettverkets IP-adresse. Merk at du trenger nettverkets IP-adresse – IP-adressen til domenet der Ultimate Multisite er installert – ikke IP-adressen til det tilpassede domenet du vil kartlegge. For å søke etter IP-adressen til et bestemt domene foreslår vi for eksempel å gå til [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html).

For å kartlegge domenet riktig må du legge til en **A-post** i **DNS**-konfigurasjonen din som peker til den **IP-adressen**. DNS-administrasjon varierer mye mellom ulike domeneregistratorer, men det finnes mange veiledninger på nettet som dekker dette hvis du søker etter " _Opprette A-post hos XXXX_ " der XXXX er domeneregistratoren din (f.eks.: " _Opprette A-post hos_ _GoDaddy_ ").

Hvis du får problemer med å få dette til å fungere, **kontakt kundestøtten hos domeneregistratoren din**, så kan de hjelpe deg med denne delen.

Hvis du planlegger å la kundene dine kartlegge sine egne domener, må de gjøre arbeidet med denne delen selv. Henvis dem til registratorens kundestøttesystem hvis de ikke klarer å opprette A-posten.

### Kartlegge tilpasset domenenavn som superadmin

Når du er logget inn som superadmin på nettverket ditt, kan du enkelt legge til og administrere tilpassede domenenavn ved å gå til **Ultimate Multisite > Domener**.

![Domener-liste i Ultimate Multisite](/img/admin/domains-list.png)

På denne siden kan du klikke på knappen **Legg til domene** øverst, og dette åpner et modalvindu der du kan angi og fylle inn **tilpasset domenenavn** , **undersiden** du ønsker å bruke det tilpassede domenenavnet på, og bestemme om du vil angi det som **primært domenenavn** eller ikke (merk at du kan kartlegge **flere domenenavn til én underside**).

![Legg til domene-modal med domenenavn, nettstedvelger og bryter for primært domene](/img/admin/domain-add-modal.png)

Etter at du har lagt inn all informasjonen, kan du klikke på knappen **Legg til eksisterende domene** nederst.

Dette starter prosessen med å verifisere og hente DNS-informasjonen for det tilpassede domenet. Du vil også se en logg nederst på siden, slik at du kan følge prosessen den går gjennom. Denne prosessen kan ta noen minutter å fullføre.

Ultimate Multisite v2.13.0 oppretter også den interne domeneposten automatisk når et nytt nettsted opprettes på en vert som skal behandles som et domene per nettsted. Hvis verten er nettverkets primære domene, eller ett av de delte basedomenene for checkout-skjema som er konfigurert i et **Site URL**-felt, hoppes den automatiske posten for tilknyttet domene over, slik at det delte basedomenet fortsatt er tilgjengelig for alle nettsteder som bruker det.

Når en kunde registrerer et nytt domene gjennom Domain Seller v1.3.0 eller nyere, tilknytter Ultimate Multisite automatisk det registrerte domenet til kundens nettverksnettsted som standard. Administratorer trenger ikke lenger å legge til en separat post for tilknyttet domene etter en vellykket registrering, med mindre de vil justere alternativer som primærdomene-flagget, aktiveringsstatus eller SSL-håndtering.

**Fase** eller statusen skal endres fra **Sjekker DNS** til **Klar** hvis alt er riktig satt opp.

<!-- Skjermbilde utilgjengelig: Domenerad som viser fasen Sjekker DNS i domenelisten -->

<!-- Skjermbilde utilgjengelig: Domenerad som viser fasen Klar med den grønne statusindikatoren -->

Hvis du klikker på domenenavnet, kan du se noen alternativer inne i det. La oss ta en rask titt på dem:

![Detaljside for domene med fase, nettsted, aktiv, primær og SSL-brytere](/img/admin/domain-edit.png)

**Fase:** Dette er fasen domenet er i. Når du først legger til domenet, vil det sannsynligvis være i fasen **Sjekker DNS**. Prosessen vil se etter DNS-oppføringene og bekrefte at de er riktige. Deretter settes domenet i fasen **Sjekker SSL**. Ultimate Multisite vil sjekke om domenet har SSL eller ikke, og kategorisere domenet ditt som **Klar** eller **Klar (uten SSL)**.

**Nettsted:** Underdomenet som er tilknyttet dette domenet. Det tilknyttede domenet vil vise innholdet fra dette bestemte nettstedet.

**Aktiv:** Du kan slå dette alternativet av eller på for å aktivere eller deaktivere domenet.

**Er primært domene?:** Kundene dine kan ha mer enn ett tilknyttet domene for hvert nettsted. Bruk dette alternativet for å velge om dette er det primære domenet for det bestemte nettstedet.

**Er sikkert?:** Selv om Ultimate Multisite sjekker om domenet har et SSL-sertifikat eller ikke før det aktiveres, kan du manuelt velge å laste domenet med eller uten et SSL-sertifikat. Merk at hvis nettstedet ikke har et SSL-sertifikat og du prøver å tvinge det til å lastes med SSL, kan det gi deg feil.

### Tilknytte egendefinert domenenavn som bruker av undernettsted

Administratorer for undernettsteder kan også tilknytte egendefinerte domenenavn fra adminpanelet for undernettstedet sitt.

Først må du sørge for at du aktiverer dette alternativet under innstillingene for **Domenetilknytning**. Se skjermbildet nedenfor.

<!-- Skjermbilde utilgjengelig: Innstillinger for domenetilknytning som lar brukere av undernettsteder tilknytte domener via bryteren for kundens DNS-administrasjon -->

Du kan også angi eller konfigurere dette alternativet på **Abonnement**-nivå eller produktalternativer under **Ultimate Multisite > Produkter**.

![Seksjonen Egendefinerte domener på siden for redigering av produkt](/img/config/product-custom-domains.png)

Når noen av disse alternativene er aktivert og en bruker av et undernettsted har lov til å tilknytte egendefinerte domenenavn, skal brukeren av undernettstedet se en metabox under **Account**-siden som heter **Domener**.

<!-- Skjermbilde utilgjengelig: Domener-metabox på Account-siden for undernettstedet med knappen Legg til domene -->

Brukeren kan klikke på knappen **Legg til domene**, og den vil åpne et modalvindu med noen instruksjoner.

<!-- Skjermbilde utilgjengelig: Modal for Legg til domene som viser DNS A-record-instruksjoner for brukere av undernettsteder -->

Brukeren kan deretter klikke på **Neste trinn** og fortsette med å legge til det egendefinerte domenenavnet. De kan også velge om dette skal være det primære domenet eller ikke.

<!-- Skjermbilde utilgjengelig: Skjema for Legg til domene med felt for egendefinert domenenavn og bryter for primært domene -->

<!-- Skjermbilde utilgjengelig: Bekreftelsestrinn for Legg til domene som utløser DNS-verifisering -->

Å klikke på **Legg til domene** vil starte prosessen med å verifisere og hente DNS-informasjonen for det egendefinerte domenet.

### Om domenesynkronisering

Domenesynkronisering er en prosess der Ultimate Multisite legger til det egendefinerte domenenavnet i hostingkontoen din som et tilleggsdomene **for at domenetilknytningen skal fungere**.

Domenesynkronisering skjer automatisk hvis hostingleverandøren din har integrasjon med funksjonen for domenetilknytning i Ultimate Multisite. For øyeblikket er disse hostingleverandørene _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ og _Cpanel._

Når en integrasjon med hostingleverandør er aktiv, kan Ultimate Multisite også legge oppgaven for DNS- eller underdomeneopprettelse på leverandørsiden i kø for nyopprettede nettsteder. Hvis ingen integrasjon lytter etter den oppgaven, hoppes bakgrunnsjobben over for å unngå køoppføringer som ikke gjør noe. DNS- og SSL-sjekker for tilknyttede domener fortsetter å kjøre gjennom den vanlige domenefaseprosessen.

Du må aktivere denne integrasjonen i innstillingene for Ultimate Multisite under fanen **Integrasjon**.

![Integrasjonsfane i Ultimate Multisite-innstillinger som viser hostingleverandører](/img/config/integrations-tab.png)

<!-- Skjermbilde utilgjengelig: Konfigurasjonslenker for hostingleverandør i fanen Integrasjonsinnstillinger -->

_Merk at hvis hostingleverandøren din ikke er en av leverandørene nevnt ovenfor, **må du manuelt synkronisere eller legge til domenenavnet** i hostingkontoen din._
