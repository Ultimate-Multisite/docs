---
title: Hvordan konfigurere domenetilordning
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Hvordan konfigurere domenetilordning (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

En av de kraftigste funksjonene i et premium-nettverk er muligheten til å tilby kundene våre å koble et toppnivådomene til sidene sine. Tross alt, hva ser mest profesjonelt ut: [_**joessykkelsjappe.dittnettverket.com**_](http://joesbikeshop.yournetwork.com) eller [_**joessykkelsjappe.com**_](http://joesbikeshop.com)? Derfor tilbyr Ultimate Multisite denne funksjonen innebygd, uten behov for tredjeparts-plugins.

## Hva er domenetilordning?

Som navnet antyder, er domenetilordning muligheten Ultimate Multisite tilbyr for å ta imot en forespørsel om et egendefinert domene og tilordne denne forespørselen til den tilsvarende siden i nettverket som har dette domenet knyttet til seg.

### Hvordan sette opp domenetilordning på ditt Ultimate Multisite-nettverk

Domenetilordning krever noe oppsett fra din side for å fungere. Heldigvis automatiserer Ultimate Multisite det tunge arbeidet for deg, slik at du enkelt kan oppfylle kravene.

Under installasjonen av Ultimate Multisite vil veiviseren automatisk kopiere og installere **sunrise.php** til den angitte mappen. **Veiviseren lar deg ikke fortsette før dette trinnet er fullført**.

![Ultimate Multisite installasjonsveiviser med sunrise.php-trinn](/img/config/settings-domain-mapping.png)

Dette betyr at så snart Ultimate Multisite-installasjonsveiviseren har fullført oppsettet av nettverket ditt, kan du begynne å tilordne egendefinerte domener med en gang.

Merk at domenetilordning i Ultimate Multisite ikke er obligatorisk. Du har muligheten til å bruke WordPress Multisite sin innebygde domenetilordningsfunksjon eller en annen domenetilordningsløsning.

Hvis du trenger å deaktivere Ultimate Multisite sin domenetilordning for å gi plass til andre domenetilordningsløsninger, kan du deaktivere denne funksjonen under **Ultimate Multisite > Settings > Domain Mapping**.

![Domenetilordningsinnstillinger med aktiver-bryter](/img/config/settings-domain-mapping.png)

Rett under dette alternativet kan du også se alternativet **Force Admin Redirect**. Dette alternativet lar deg kontrollere om kundene dine skal kunne få tilgang til admin-dashbordet sitt både på det egendefinerte domenet og subdomenet, eller bare på ett av dem.

Hvis du velger **Force redirect to mapped domain**, vil kundene dine bare kunne få tilgang til admin-dashbordet sitt på de egendefinerte domenene sine.

Alternativet **Force redirect to network domain** gjør nøyaktig det motsatte – kundene dine vil bare få tilgang til dashbordene sine på subdomenet sitt, selv om de prøver å logge inn på de egendefinerte domenene sine.

Og alternativet **Allow access to the admin by both mapped domain domain and network domain** lar dem få tilgang til admin-dashbordene sine både på subdomenet og det egendefinerte domenet.

![Force Admin Redirect-alternativer for domenetilordning](/img/config/settings-domain-mapping.png)

Det er to måter å tilordne et egendefinert domene på. Den første er ved å tilordne domenenavnet fra nettverkets admin-dashbord som super admin, og den andre er gjennom undersidens admin-dashbord under kontosiden.

Men før du begynner å tilordne det egendefinerte domenet til en av undersidene i nettverket ditt, må du forsikre deg om at **DNS-innstillingene** for domenenavnet er riktig konfigurert.

### 

### Forsikre deg om at domenets DNS-innstillinger er riktig konfigurert

For at en tilordning skal fungere, må du forsikre deg om at domenet du planlegger å tilordne peker til nettverkets IP-adresse. Merk at du trenger nettverkets IP-adresse – IP-adressen til domenet der Ultimate Multisite er installert – ikke IP-adressen til det egendefinerte domenet du vil tilordne. For å søke etter IP-adressen til et spesifikt domene, foreslår vi å gå til [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), for eksempel.

For å tilordne domenet riktig, må du legge til en **A-post** i **DNS**-konfigurasjonen din som peker til den **IP-adressen**. DNS-administrasjon varierer mye mellom ulike domeneregistrarer, men det finnes mange veiledninger på nettet som dekker dette hvis du søker etter «_Opprette A-post på XXXX_» der XXXX er din domeneregistrar (f.eks.: «_Opprette A-post på GoDaddy_»).

Hvis du har problemer med å få dette til å fungere, **kontakt støtten hos domeneregistraren din**, og de vil kunne hjelpe deg med denne delen.

Hvis du planlegger å la kundene dine tilordne sine egne domener, må de gjøre arbeidet på denne delen selv. Henvis dem til støttesystemet hos registraren deres hvis de ikke klarer å opprette A-posten.

### Tilordne egendefinert domenenavn som Super Admin

Når du er logget inn som super admin på nettverket ditt, kan du enkelt legge til og administrere egendefinerte domenenavn ved å gå til **Ultimate Multisite > Domains**.

![Domeneliste-side i Ultimate Multisite](/img/admin/domains-list.png)

På denne siden kan du klikke på **Add Domain**-knappen øverst, og dette vil åpne et modalvindu der du kan angi og fylle inn det **egendefinerte domenenavnet**, **undersiden** du ønsker å bruke det egendefinerte domenenavnet på, og bestemme om du vil sette det som **primærdomene** eller ikke (merk at du kan tilordne **flere domenenavn til én underside**).

![Legg til domene-modal med domenenavn- og sidefelt](/img/admin/domains-list.png)

Etter å ha fylt inn all informasjonen, kan du klikke på **Add Existing Domain**-knappen nederst.

Dette vil starte prosessen med å verifisere og hente DNS-informasjonen for det egendefinerte domenet. Du vil også se en logg nederst på siden slik at du kan følge prosessen den går gjennom. Denne prosessen kan ta noen minutter å fullføre.

**Stage** eller statusen skal endres fra **Checking DNS** til **Ready** hvis alt er riktig satt opp.

![Domenestatus endres fra Checking DNS til Ready](/img/admin/domains-list.png)

![Domene med Ready-status i domenelisten](/img/admin/domains-list.png)

Hvis du klikker på domenenavnet, vil du kunne se noen alternativer inni det. La oss ta en rask titt på dem:

![Domenedetaljside med status, side, aktiv og SSL-alternativer](/img/admin/domains-list.png)

**Stage:** Dette er stadiet domenet befinner seg på. Når du først legger til domenet, vil det sannsynligvis være på **Checking DNS**-stadiet. Prosessen vil sjekke DNS-oppføringene og bekrefte at de er korrekte. Deretter vil domenet bli satt til **Checking SSL**-stadiet. Ultimate Multisite vil sjekke om domenet har SSL eller ikke og vil kategorisere domenet ditt som **Ready** eller **Ready (without SSL)**.

**Site:** Subdomenet som er knyttet til dette domenet. Det tilordnede domenet vil vise innholdet til denne spesifikke siden.

**Active:** Du kan slå dette alternativet på eller av for å aktivere eller deaktivere domenet.

**Is Primary Domain?:** Kundene dine kan ha mer enn ett tilordnet domene for hver side. Bruk dette alternativet for å velge om dette er primærdomenet for den spesifikke siden.

**Is Secure?:** Selv om Ultimate Multisite sjekker om domenet har et SSL-sertifikat eller ikke før det aktiveres, kan du manuelt velge å laste domenet med eller uten et SSL-sertifikat. Merk at hvis nettstedet ikke har et SSL-sertifikat og du prøver å tvinge lasting med SSL, kan det gi deg feil.

### Tilordne egendefinert domenenavn som undersidebruker

Undersideadministratorer kan også tilordne egendefinerte domenenavn fra undersiden sin sitt admin-dashbord.

Først må du forsikre deg om at du aktiverer dette alternativet under **Domain mapping**-innstillingene. Se skjermbildet nedenfor.

![Domenetilordningsinnstillinger som tillater undersidebrukere å tilordne domener](/img/config/settings-domain-mapping.png)

Du kan også angi eller konfigurere dette alternativet under **Plan**-nivået eller produktalternativene i **Ultimate Multisite > Products**.

![Produkt egendefinerte domener-alternativ i produktinnstillinger](/img/config/settings-domain-mapping.png)

Når noen av disse alternativene er aktivert og en undersidebruker har tillatelse til å tilordne egendefinerte domenenavn, skal undersidebrukeren se en metaboks under **Account**-siden kalt **Domains**.

![Domener-metaboks på undersiden sin kontoside](/img/admin/domains-list.png)

Brukeren kan klikke på **Add Domain**-knappen, og det vil åpne et modalvindu med noen instruksjoner.

![Legg til domene-modal med DNS-instruksjoner for undersidebrukere](/img/admin/domains-list.png)

Brukeren kan deretter klikke **Next Step** og fortsette med å legge til det egendefinerte domenenavnet. De kan også velge om dette skal være primærdomenet eller ikke.

![Felt for å legge til egendefinert domenenavn med primærdomene-alternativ](/img/admin/domains-list.png)

![Klikk Legg til domene for å starte DNS-verifisering](/img/admin/domains-list.png)Å klikke på **Add Domain** vil starte prosessen med å verifisere og hente DNS-informasjonen for det egendefinerte domenet.

### Om domenesynkronisering

Domenesynkronisering er en prosess der Ultimate Multisite legger til det egendefinerte domenenavnet på hostingkontoen din som et tilleggsdomene **for at domenetilordningen skal fungere**.

Domenesynkronisering skjer automatisk hvis hostingleverandøren din har integrasjon med Ultimate Multisite sin domenetilordningsfunksjon. For øyeblikket er disse hostingleverandørene _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ og _Cpanel._

Du må aktivere denne integrasjonen i Ultimate Multisite-innstillingene under **Integration**-fanen.

![Integration-fane i Ultimate Multisite-innstillinger](/img/config/settings-domain-mapping.png)

![Hostingleverandør-integrasjonsinnstillinger for domenesynkronisering](/img/config/settings-domain-mapping.png)

_Merk at hvis hostingleverandøren din ikke er en av de leverandørene nevnt ovenfor, **må du manuelt synkronisere eller legge til domenenavnet** på hostingkontoen din._
