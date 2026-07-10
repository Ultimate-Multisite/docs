---
title: Tilpasse registreringsskjemaet ditt
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Tilpasse registreringsskjemaet ditt {#customizing-your-registration-form}

For å få nettverket ditt til å se unikt ut sammenlignet med alle andre SaaS bygget på WordPress-plattformen, lar Ultimate Multisite deg tilpasse registrerings- og innloggingssidene dine med vår **Checkout Forms**-funksjon.

Selv om de er en enkel og fleksibel måte å eksperimentere med ulike tilnærminger på når du prøver å konvertere nye kunder, brukes de hovedsakelig til å lage personlige registreringsskjemaer. Denne artikkelen har som mål å vise deg hvordan du kan gjøre det.

## Innloggings- og registreringssider: {#login-and-registration-pages}

Ved installasjon av Ultimate Multisite oppretter den automatisk egendefinerte innloggings- og registreringssider på hovednettstedet ditt. Du kan endre disse standardsidene når som helst ved å gå til siden **Ultimate Multisite > Settings > Login & Registration**.

![Innstillingsside for innlogging og registrering](/img/config/settings-general.png)

Her er en fullstendig visning av innstillingssiden for innlogging og registrering:

![Full innstillingsside for innlogging og registrering](/img/config/settings-login-registration-full.png)

La oss se på hvert av alternativene du kan tilpasse på siden **Login & Registration**:

  * **Aktiver registrering:** Dette alternativet aktiverer eller deaktiverer registrering på nettverket ditt. Hvis det er slått av, vil kundene dine ikke kunne registrere seg og abonnere på produktene dine.

  * **Aktiver e-postbekreftelse:** Hvis dette alternativet er slått på, vil kunder som abonnerer på en gratis plan eller en betalt plan med prøveperiode, motta en bekreftelses-e-post og måtte klikke på bekreftelseslenken for at nettstedene deres skal bli opprettet.

  * **Standard registreringsside:** Dette er standardsiden for registrering. Denne siden må være publisert på nettstedet ditt og ha et registreringsskjema (også kjent som checkout-skjema) – der kundene dine vil abonnere på produktene dine. Du kan opprette så mange registreringssider og checkout-skjemaer du vil, bare husk å legge inn kortkoden for checkout-skjemaet på registreringssiden, ellers vil den ikke vises.

  * **Bruk egendefinert innloggingsside:** Dette alternativet lar deg bruke en tilpasset innloggingsside, i stedet for standard wp-login.php-side. Hvis dette alternativet er slått på, kan du velge hvilken side som skal brukes til innlogging i alternativet **Standard innloggingsside** (rett nedenfor).

  * **Skjul den opprinnelige innloggings-URL-en (wp-login.php)** : Hvis du vil skjule den opprinnelige innloggings-URL-en, kan du slå på dette alternativet. Dette er nyttig for å forhindre brute-force-angrep. Hvis dette alternativet er aktivert, vil Ultimate Multisite vise en 404-feil når en bruker prøver å få tilgang til den opprinnelige wp-login.php-lenken

  * **Tving synkron publisering av nettsted:** Etter at en kunde abonnerer på et produkt på et nettverk, må det nye ventende nettstedet konverteres til et ekte nettverksnettsted. Publiseringsprosessen skjer via Job Queue, asynkront. Aktiver dette alternativet for å tvinge publiseringen til å skje i samme forespørsel som registreringen.

La oss nå se på andre alternativer som fortsatt er relevante for innloggings- og registreringsprosessen. De er rett under **Andre alternativer** på samme Login & registration-side:

  * **Standardrolle:** Dette er rollen kundene dine vil ha på nettstedet sitt etter registreringsprosessen.

  * **Aktiver Jumper:** Aktiverer Jumper-snarveien i administrasjonsområdet. Jumper lar administratorer raskt hoppe til Ultimate Multisite-skjermer, nettverksobjekter og andre støttede destinasjoner uten å bla gjennom hver meny. Slå den av hvis du foretrekker å skjule dette raske navigasjonsverktøyet fra administratorgrensesnittet.

  * **Legg også til brukere på hovednettstedet:** Aktivering av dette alternativet vil også legge brukeren til på hovednettstedet i nettverket ditt etter registreringsprosessen. Hvis du aktiverer dette alternativet, vil et alternativ for å angi **standardrollen** til disse brukerne på nettstedet ditt også vises rett nedenfor.

  * **Aktiver flere kontoer:** Tillat brukere å ha kontoer på ulike nettsteder i nettverket ditt med samme e-postadresse. Hvis dette alternativet er av, vil kundene dine ikke kunne opprette en konto på andre nettsteder som kjører på nettverket ditt med samme e-postadresse.

Og det er alle alternativene knyttet til innlogging og registrering som du kan tilpasse! Ikke glem å lagre innstillingene dine etter at du er ferdig med å redigere dem.

## Bruke flere registreringsskjemaer: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 tilbyr en editor for checkout-skjemaer som lar deg opprette så mange skjemaer du vil, med ulike felt, produkter på tilbud osv.

Både innloggings- og registreringssidene er innebygd med kortkoder: **[wu_login_form]** på innloggingssiden og**[wu_checkout]** for registreringssiden. Du kan tilpasse registreringssiden ytterligere ved å bygge eller opprette checkout-skjemaer.

For å få tilgang til denne funksjonen, gå til **Checkout Forms**-menyen i venstre sidefelt.

![Checkout Forms-meny i sidefeltet](/img/config/checkout-forms-list.png)

På denne siden kan du se alle checkout-skjemaene du har.

Hvis du vil opprette et nytt, klikker du bare på **Add Checkout Form** øverst på siden.

Du kan velge ett av disse tre alternativene som utgangspunkt: enkeltsteg, flersteg eller tomt. Klikk deretter på **Go to the Editor**.

![Legg til Checkout Form med alternativer for enkeltsteg, flersteg eller tomt](/img/config/checkout-forms-list.png)

Alternativt kan du redigere eller duplisere skjemaene du allerede har ved å klikke på alternativene under navnet deres. Der finner du også alternativene for å kopiere skjemaets kortkode eller slette skjemaet.

![Checkout-skjemaets hover-handlinger med rediger, dupliser og slett](/img/config/checkout-form-hover-actions.png)

Hvis du velger enkeltsteg eller flersteg, vil checkout-skjemaet allerede være forhåndsutfylt med de grunnleggende stegene som trengs for at det skal fungere. Deretter kan du, hvis du vil, legge til ekstra steg i det.

### Redigere et Checkout Form: {#editing-a-checkout-form}

Som vi nevnte tidligere, kan du opprette checkout-skjemaer for ulike formål. I dette eksempelet skal vi jobbe med et registreringsskjema.

Etter at du har navigert til editoren for checkout-skjemaet, gir du skjemaet et navn (som bare brukes som intern referanse) og en slug (brukt til å opprette kortkoder, for eksempel).

![Skjemaredigerer for checkout med navn- og slug-felter](/img/config/checkout-form-name-slug.png)

Skjemaer består av trinn og felter. Du kan legge til et nytt trinn ved å klikke på **Legg til nytt checkout-trinn**.

![Knapp for å legge til nytt checkout-trinn](/img/config/checkout-form-add-step.png)

På den første fanen i modalvinduet fyller du ut innholdet for skjematrinnet ditt. Gi det en ID, et navn og en beskrivelse. Disse elementene brukes mest internt.

![Innholdsfane for checkout-trinn med ID, navn og beskrivelse](/img/config/checkout-form-step-content.png)

Deretter angir du synligheten for trinnet. Du kan velge mellom **Vis alltid** , **Vis kun for innloggede brukere** eller **Vis kun for gjester**.

![Synlighetsalternativer for checkout-trinn](/img/config/checkout-form-step-visibility.png)

Til slutt konfigurerer du stilen for trinnet. Dette er valgfrie felter.

![Stilkonfigurasjon for checkout-trinn](/img/config/checkout-form-step-style.png)

Nå er det på tide å legge til felter i vårt første trinn. Bare klikk på **Legg til nytt felt** og velg typen seksjon du ønsker.

![Knapp for å legge til nytt felt](/img/config/checkout-form-add-field-button.png)![Nedtrekksmeny for valg av felttype](/img/config/checkout-form-field-type-dropdown.png)

Hvert felt har forskjellige parametere som skal fylles ut. For denne første oppføringen velger vi feltet **Brukernavn**.

![Konfigurasjon av brukernavnfelt](/img/config/checkout-form-username-content.png)![Parametere for brukernavnfelt](/img/config/checkout-form-username-visibility.png)![Tilleggsinnstillinger for brukernavnfelt](/img/config/checkout-form-username-style.png)

Du kan legge til så mange trinn og felter som du trenger. For å vise produktene dine slik at kundene dine kan velge ett, bruk feltet Pristabell. Hvis du vil la klientene dine velge en mal, legger du til feltet Malvalg. Og så videre.

![Skjemaredigerer for checkout med felt for malvalg](/img/config/checkout-form-with-template-field.png)

_**Merk:** Hvis du oppretter et produkt etter at du har opprettet checkout-skjemaet ditt, må du legge til produktet i seksjonen Pristabell. Hvis du ikke legger det til, vil produktet ikke vises for kundene dine på registreringssiden._

_**Merk 2:** brukernavn, e-post, passord, nettstedstittel, nettsteds-URL, ordresammendrag, betaling og send-knapp er obligatoriske felter for å opprette et checkout-skjema._

Mens du arbeider med checkout-skjemaet ditt, kan du alltid bruke Forhåndsvisning-knappen for å se hvordan klientene dine vil se skjemaet. Du kan også veksle mellom visning som en eksisterende bruker eller en besøkende.

![Forhåndsvisning-knapp i skjemaredigereren for checkout](/img/config/checkout-form-preview-button.png)![Forhåndsvisning av checkout-skjema som besøkende eller eksisterende bruker](/img/config/checkout-form-preview-modal.png)

Til slutt, under **Avanserte alternativer** kan du konfigurere meldingen for **Takk**-siden, legge til snippets for å spore konverteringer, legge til egendefinert CSS i checkout-skjemaet ditt eller begrense det til bestemte land.

![Avanserte alternativer med Takk-side, konverteringssporing og egendefinert CSS](/img/config/checkout-form-advanced.png)

Du kan også aktivere eller deaktivere checkout-skjemaet ditt manuelt ved å slå av eller på dette alternativet i høyre kolonne, eller slette skjemaet permanent.

![Aktiv-bryter og slettealternativ for checkout-skjema](/img/config/checkout-form-active.png)

Ikke glem å lagre checkout-skjemaet ditt!

![Knapp for å lagre checkout-skjema](/img/config/checkout-form-save.png)

For å hente skjemakortkoden din klikker du på **Generer kortkode** og kopierer resultatet som vises i modalvinduet.

![Generer kortkode-modal med kortkode som skal kopieres](/img/config/checkout-form-editor.png)

_**Merk:** Du må legge til denne kortkoden på registreringssiden din for å få dette checkout-skjemaet lagt til der._

## Forhåndsvalg av produkter og maler via URL-parametere: {#pre-selecting-products-and-templates-via-url-parameters}

Hvis du vil opprette tilpassede pristabeller for produktene dine og forhåndsvelge produktet eller malen kunden velger fra pristabellen eller malsiden din i checkout-skjemaet, kan du bruke URL-parametere til dette.

### **For planer:** {#for-plans}

Gå til **Ultimate Multisite > Produkter > Velg en plan**. Du skal se knappen **Klikk for å kopiere delbar lenke** øverst på siden. Dette er lenken du kan bruke for å forhåndsvelge denne spesifikke planen i checkout-skjemaet ditt.

![Produktside med knapp for delbar lenke](/img/config/products-list.png)

Merk at denne delbare lenken bare er gyldig for **Planer**. Du kan ikke bruke delbare lenker for pakker eller tjenester.

### For maler: {#for-templates}

Hvis du vil forhåndsvelge nettstedsmaler i checkout-skjemaet ditt, kan du bruke parameteren: **?template_id=X** i URL-en til registreringssiden din. "X" må erstattes av **ID-nummeret til nettstedsmalen**. For å hente dette nummeret går du til **Ultimate Multisite > Nettsteder**.

Klikk på **Administrer** rett under nettstedsmalen du vil bruke. Du vil se SITE ID-nummeret. Bare bruk dette nummeret for denne spesifikke nettstedsmalen for at den skal bli forhåndsvalgt i checkout-skjemaet ditt. I vårt tilfelle her ville URL-parameteren være **?template_id=2**.

![Nettstedsliste som viser ID for nettstedsmal](/img/config/site-templates-list.png)

La oss si at nettverksnettstedet vårt er [**www.mynetwork.com**](http://www.mynetwork.com) og registreringssiden vår med checkout-skjemaet vårt ligger på siden **/register**. Hele URL-en med denne nettstedsmalen forhåndsvalgt vil se slik ut: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Og hvis du vil, kan du forhåndsvelge både produkter og maler i checkout-skjemaet ditt. Alt du trenger å gjøre er å kopiere den delbare lenken til planen og lime inn malparameteren på slutten. Det vil se slik ut: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
