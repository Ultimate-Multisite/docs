---
title: Tilpasse registreringsskjemaet ditt
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# Tilpasse registreringsskjemaet ditt

For å gi nettverket ditt et unikt utseende som skiller seg fra andre SaaS-løsninger bygget på WordPress-plattformen, lar Ultimate Multisite deg tilpasse registrerings- og innloggingssidene dine med funksjonen **Checkout Forms**.

Selv om de er en enkel og fleksibel måte å eksperimentere med ulike tilnærminger for å konvertere nye kunder, brukes de hovedsakelig til å lage personaliserte registreringsskjemaer. Denne artikkelen viser deg hvordan du kan gjøre dette.

## Innloggings- og registreringssider:

Når Ultimate Multisite installeres, opprettes det automatisk egendefinerte innloggings- og registreringssider på hovedsiden din. Du kan når som helst endre disse standardsidene ved å gå til **Ultimate Multisite > Settings > Login & Registration**.

![Innstillingsside for innlogging og registrering](/img/config/settings-general.png)

La oss se nærmere på de ulike alternativene du kan tilpasse på siden **Login & Registration**:

  * **Enable registration:** Dette alternativet aktiverer eller deaktiverer registrering på nettverket ditt. Hvis det er slått av, vil ikke kundene dine kunne registrere seg og abonnere på produktene dine.

  * **Enable email verification:** Hvis dette alternativet er slått på, vil kunder som abonnerer på en gratis plan eller en betalt plan med prøveperiode motta en bekreftelses-e-post og må klikke på bekreftelseslenken for at nettsidene deres skal bli opprettet.

  * **Default registration page:** Dette er standardsiden for registrering. Denne siden må være publisert på nettstedet ditt og ha et registreringsskjema (også kjent som checkout-skjema) – der kundene dine abonnerer på produktene dine. Du kan opprette så mange registreringssider og checkout-skjemaer du vil, bare husk å legge inn checkout-skjemaets shortcode på registreringssiden, ellers vil det ikke vises.

  * **Use custom login page:** Dette alternativet lar deg bruke en tilpasset innloggingsside i stedet for standard wp-login.php-siden. Hvis dette alternativet er slått på, kan du velge hvilken side som skal brukes til innlogging under alternativet **Default login page** (rett nedenfor).

  * **Obfuscate the original login url (wp-login.php):** Hvis du vil skjule den opprinnelige innloggings-URL-en, kan du slå på dette alternativet. Dette er nyttig for å forhindre brute-force-angrep. Hvis dette alternativet er aktivert, vil Ultimate Multisite vise en 404-feil når en bruker prøver å få tilgang til den opprinnelige wp-login.php-lenken.

  * **Force synchronous site publication:** Etter at en kunde abonnerer på et produkt i et nettverk, må den nye ventende siden konverteres til en ekte nettverksside. Publiseringsprosessen skjer via jobbkø, asynkront. Aktiver dette alternativet for å tvinge publiseringen til å skje i samme forespørsel som registreringen.

La oss nå se på andre alternativer som fortsatt er relevante for innloggings- og registreringsprosessen. De finner du rett under **Other options** på samme Login & Registration-side:

  * **Default role:** Dette er rollen kundene dine vil ha på nettstedet sitt etter registreringsprosessen.

  * **Add users to the main site as well:** Hvis du aktiverer dette alternativet, blir brukeren også lagt til på hovedsiden i nettverket ditt etter registreringsprosessen. Hvis du aktiverer dette alternativet, vil det også dukke opp et alternativ for å angi **default role** for disse brukerne på nettstedet ditt rett nedenfor.

  * **Enable multiple accounts:** Tillat brukere å ha kontoer på forskjellige sider i nettverket ditt med samme e-postadresse. Hvis dette alternativet er av, vil ikke kundene dine kunne opprette en konto på andre nettsteder i nettverket ditt med samme e-postadresse.

Og det var alle alternativene relatert til innlogging og registrering som du kan tilpasse! Ikke glem å lagre innstillingene dine når du er ferdig med å redigere dem.

## Bruke flere registreringsskjemaer:

Ultimate Multisite 2.0 tilbyr en checkout-skjemaredigerer som lar deg opprette så mange skjemaer du vil, med ulike felter, produkter på tilbud osv.

Både innloggings- og registreringssidene er innebygd med shortcodes: **[wu_login_form]** på innloggingssiden og **[wu_checkout]** for registreringssiden. Du kan tilpasse registreringssiden ytterligere ved å bygge eller opprette checkout-skjemaer.

For å få tilgang til denne funksjonen, gå til menyen **Checkout Forms** i sidemenyen til venstre.

![Checkout Forms-meny i sidemenyen](/img/config/checkout-forms-list.png)

På denne siden kan du se alle checkout-skjemaene du har.

Hvis du vil opprette et nytt, klikker du bare på **Add Checkout Form** øverst på siden.

Du kan velge ett av disse tre alternativene som utgangspunkt: single step, multi-step eller blank. Deretter klikker du på **Go to the Editor**.

![Legg til Checkout Form med single step, multi-step eller blank som alternativer](/img/config/checkout-forms-list.png)

Alternativt kan du redigere eller duplisere skjemaene du allerede har ved å klikke på alternativene under navnet. Der finner du også alternativer for å kopiere skjemaets shortcode eller slette skjemaet.

![Hover-handlinger for checkout-skjema med rediger, dupliser og slett](/img/config/checkout-form-hover-actions.png)

Hvis du velger single step eller multi-step, vil checkout-skjemaet allerede være forhåndsutfylt med de grunnleggende stegene for at det skal fungere. Deretter kan du legge til ekstra steg hvis du ønsker det.

### Redigere et Checkout-skjema:

Som vi nevnte tidligere, kan du opprette checkout-skjemaer for ulike formål. I dette eksempelet skal vi jobbe med et registreringsskjema.

Etter at du har navigert til checkout-skjemaredigereren, gir du skjemaet et navn (som bare brukes til intern referanse) og en slug (brukes til å lage shortcodes, for eksempel).

![Checkout-skjemaredigerer med navn- og slug-felter](/img/config/checkout-form-editor.png)

Skjemaer består av steg og felter. Du kan legge til et nytt steg ved å klikke på **Add New Checkout Step**.

![Knappen Add New Checkout Step](/img/config/checkout-form-add-step.png)

I den første fanen i modalvinduet fyller du inn innholdet for skjemaets steg. Gi det en ID, et navn og en beskrivelse. Disse elementene brukes hovedsakelig internt.

![Innholdsfane for checkout-steg med ID, navn og beskrivelse](/img/config/checkout-form-step.png)

Deretter angir du synligheten for steget. Du kan velge mellom **Always show**, **Only show for logged in users** eller **Only show for guests**.

![Synlighetsalternativer for checkout-steg](/img/config/checkout-form-step.png)

Til slutt konfigurerer du stegstilen. Dette er valgfrie felter.

![Stilkonfigurasjon for checkout-steg](/img/config/checkout-form-step.png)

Nå er det tid for å legge til felter i vårt første steg. Klikk bare på **Add New Field** og velg typen seksjon du ønsker.

![Knappen Add New Field](/img/config/checkout-form-editor.png)![Nedtrekksmeny for felttype-valg](/img/config/checkout-form-step.png)

Hvert felt har ulike parametere som må fylles ut. For denne første oppføringen velger vi feltet **Username**.

![Konfigurasjon av brukernavn-felt](/img/config/checkout-form-step.png)![Parametere for brukernavn-felt](/img/config/checkout-form-step.png)![Tilleggsinnstillinger for brukernavn-felt](/img/config/checkout-form-step.png)

Du kan legge til så mange steg og felter du trenger. For å vise produktene dine slik at kundene kan velge ett, bruker du Pricing Table-feltet. Hvis du vil la kundene velge en mal, legger du til Template Selection-feltet. Og så videre.

_**Merk:** Hvis du oppretter et produkt etter at du har opprettet checkout-skjemaet ditt, må du legge til produktet i Pricing table-seksjonen. Hvis du ikke legger det til, vil ikke produktet vises for kundene dine på registreringssiden._

_**Merk 2:** username, email, password, site title, site URL, order summary, payment og submit button er obligatoriske felter for å opprette et checkout-skjema._

Mens du jobber med checkout-skjemaet ditt, kan du alltid bruke Preview-knappen for å se hvordan kundene dine vil se skjemaet. Du kan også veksle mellom å se som eksisterende bruker eller besøkende.

![Preview-knapp i checkout-skjemaredigereren](/img/config/checkout-form-editor.png)![Forhåndsvisning av checkout-skjema som besøkende eller eksisterende bruker](/img/config/checkout-form-editor.png)

Til slutt kan du under **Advanced Options** konfigurere meldingen for **Thank You**-siden, legge til kodesnutter for å spore konverteringer, legge til egendefinert CSS i checkout-skjemaet ditt eller begrense det til bestemte land.

![Advanced Options med Thank You-side, konverteringssporing og egendefinert CSS](/img/config/checkout-form-advanced.png)

Du kan også manuelt aktivere eller deaktivere checkout-skjemaet ditt ved å slå på dette alternativet i høyre kolonne, eller slette skjemaet permanent.

![Aktiv-bryter og slettealternativ for checkout-skjema](/img/config/checkout-form-active.png)

Ikke glem å lagre checkout-skjemaet ditt!

![Knappen Save Checkout Form](/img/config/checkout-form-save.png)

For å få skjemaets shortcode klikker du på **Generate Shortcode** og kopierer resultatet som vises i modalvinduet.

![Generate Shortcode-modal med shortcode som kan kopieres](/img/config/checkout-form-editor.png)

_**Merk:** Du må legge til denne shortcoden på registreringssiden din for å få dette checkout-skjemaet lagt til på den._

## Forhåndsvelge produkter og maler via URL-parametere:

Hvis du vil opprette tilpassede pristabeller for produktene dine og forhåndsvelge produktet eller malen kunden velger fra pristabellen eller malsiden din i checkout-skjemaet, kan du bruke URL-parametere for dette.

### **For planer:**

Gå til **Ultimate Multisite > Products > Select a plan**. Du bør se knappen **Click to copy Shareable Link** øverst på siden. Dette er lenken du kan bruke til å forhåndsvelge denne spesifikke planen i checkout-skjemaet ditt.

![Produktside med delbar lenke-knapp](/img/config/products-list.png)

Merk at denne delbare lenken kun er gyldig for **Plans**. Du kan ikke bruke delbare lenker for pakker eller tjenester.

### For maler:

Hvis du vil forhåndsvelge nettstedsmaler i checkout-skjemaet ditt, kan du bruke parameteren: **?template_id=X** i URL-en til registreringssiden din. «X» må erstattes med **nettstedmalens ID-nummer**. For å finne dette nummeret, gå til **Ultimate Multisite > Sites**.

Klikk på **Manage** rett under nettstedsmalen du vil bruke. Du vil se SITE ID-nummeret. Bruk dette nummeret for at denne spesifikke nettstedsmalen skal være forhåndsvalgt i checkout-skjemaet ditt. I vårt tilfelle her vil URL-parameteren være **?template_id=2**.

![Nettstedsliste som viser nettstedsmal-ID](/img/config/site-templates-list.png)

La oss si at nettverksnettstedet vårt er [**www.mynetwork.com**](http://www.mynetwork.com) og registreringssiden vår med checkout-skjemaet ligger på siden **/register**. Hele URL-en med denne nettstedsmalen forhåndsvalgt vil se slik ut: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Og hvis du vil, kan du forhåndsvelge både produkter og maler i checkout-skjemaet ditt. Alt du trenger å gjøre er å kopiere den delbare lenken for planen og lime inn malparameteren på slutten. Det vil se slik ut: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
