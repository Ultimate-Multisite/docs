---
title: Klientkontoside
sidebar_position: 14
_i18n_hash: 60261800e2a155b4b190a325bdb50bb2
---
# Kundens kontoside (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Når kunder abonnerer på en plan i nettverket ditt, får de tilgang til en nettside og et dashbord med viktig informasjon om betalinger, medlemskap, domener, planbegrensninger og mer.

I denne veiledningen tar vi deg gjennom kundens kontoside, slik at du ser hva kundene dine kan se og gjøre der.

## Kontosiden

Kontosiden er tilgjengelig ved å klikke på **Account** i kundens dashbord.

![Kontomeny i kundedashbordet](/img/admin/dashboard.png)

![Oversikt over kundens kontoside](/img/admin/dashboard.png)

Når en kunde klikker på den, får de en oversikt over medlemskapet sitt, fakturaadresse, fakturaer, domener og nettstedsbegrensninger. De kan også endre **Site Template** (hvis dette er tillatt i nettverket ditt).

De kan også bytte medlemskap til en annen plan, eller kjøpe en annen pakke eller tjeneste du tilbyr. La oss se nærmere på hver seksjon.

### Oversikt over medlemskapet ditt:

Den første blokken rett under kundens nettstedsnavn viser en oversikt over gjeldende plan og tjenester/pakker som ble kjøpt med den. Blokken viser også medlemsnummer, det opprinnelige beløpet som ble betalt, hvor mye planen og eventuelle tjenester/pakker koster, og hvor mange ganger de har blitt fakturert for dette medlemskapet. De kan også se om medlemskapet er **Active**, **Expired** eller **Canceled**.

![Medlemskapsoversikt som viser plan, beløp og faktureringsdetaljer](/img/admin/memberships-list.png)

Rett under denne blokken kan kundene dine se blokkene **About This Site** og **Site Limits**. Disse blokkene viser dem alle begrensningene som følger med planen: diskplass, innlegg, sider, besøk og så videre. Disse grensene kan konfigureres på hver planside under **Ultimate Multisite > Products**.

![About This Site- og Site Limits-blokkene som viser planbegrensninger](/img/admin/dashboard.png)

På høyre side av **Your Membership** kan kundene klikke på **Change**. Da vises alle tilgjengelige planer og pakker/tjenester. Hvis de velger en annen plan, vil begrensningene for den nye planen tre i kraft i stedet for de gjeldende begrensningene – uavhengig av om de nedgraderer eller oppgraderer.

Hvis kundene dine velger å kjøpe pakker eller tjenester til det nåværende medlemskapet – som mer diskplass eller flere besøk – endres ikke det nåværende medlemskapet. Bare de nye pakkene legges til.

Merk at rabattkoder ikke kan legges til på denne siden for endring av medlemskap. Hvis kunden brukte en rabattkode ved første medlemskapskjøp, vil koden også gjelde for det nye medlemskapet.

### Oppdatere fakturaadresse:

På kontosiden kan kundene dine også oppdatere fakturaadressen sin. De trenger bare å klikke på **Update** ved siden av _Billing Address_.

![Fakturaadresse-seksjon med Oppdater-knapp](/img/admin/customers-list.png)

Et nytt vindu åpnes for kunden. Alt de trenger å gjøre er å fylle inn den nye adressen og klikke på _Save Changes_.

![Skjema for oppdatering av fakturaadresse](/img/admin/customers-list.png)

### Bytte nettstedsmal:

For å la kundene dine bytte nettstedsmaler, må du gå til **Ultimate Multisite > Settings > Sites** og slå på alternativet **Allow Template Switching**.

I tillegg, under **Ultimate Multisite > Products**, velger du planene dine og går til fanen **Site Templates**. Sørg for at alternativet **Allow Site Templates** er slått på, og at **Choose Available Site Templates** er valgt under **Site Template Selection Mode**.

![Produktets nettstedsmaler-fane med valg av malmodus](/img/config/product-site-templates.png)

Du vil kunne se alle tilgjengelige nettstedsmaler på nettsiden din. Velg hvilke du vil gjøre tilgjengelige og hvilke som ikke skal være tilgjengelige for kunder som abonnerer på denne planen. Merk at disse valgene også påvirker betalingsskjemaet, så maler som er merket som **Not Available** vil ikke vises på registreringssiden for denne planen.

Nå kan kundene dine klikke på **Change Site Template** på kontosiden sin.

![Knapp for å bytte nettstedsmal på kontosiden](/img/admin/dashboard.png)

En liste over alle tilgjengelige nettstedsmaler for denne planen vises for kunden.

![Liste over tilgjengelige nettstedsmaler for planen](/img/config/site-templates-list.png)

Etter at de har valgt malen de vil bytte til, blir de bedt om å bekrefte endringen.

![Bekreftelsesdialog for bytte av nettstedsmal](/img/admin/dashboard.png)

Etter å ha slått på bekreftelsen og klikket på **Process Switch**, vil den nye nettstedsmalen tas i bruk på kundens nettside.

### Legge til egne domener:

Kundene dine har også mulighet til å legge til et eget domene for denne planen på kontosiden sin. For å la kundene dine bruke egne domener, gå til **Ultimate Multisite > Settings > Domain Mapping**.

Slå på alternativet **Enable Domain Mapping**. Dette lar kundene dine bruke egne domener på nettverksnivå.

Ikke glem å også sjekke om domenetilordning er aktivert på produktnivå – fordi du kan begrense et produkt slik at kundene ikke kan bruke egne domener.

Gå til **Ultimate Multisite > Products**. Velg planen du ønsker og gå til fanen **Custom Domains**. Slå på alternativet **Allow Custom Domains**.

![Egne domener-fane med bryteren for å tillate egne domener](/img/config/product-custom-domains.png)

Dette lar alle kunder som abonnerer på denne spesifikke planen bruke egne domener. Nå kan kundene dine legge til et eget domene på kontosiden ved å klikke på **Add Domain**.

![Legg til domene-knapp på kontosiden](/img/admin/domains-list.png)

Det første vinduet som åpnes, viser kundene dine en melding med instruksjoner om hvordan de oppdaterer DNS-postene sine for å få det egne domenet til å fungere i nettverket ditt.

![DNS-instruksjoner som vises når man legger til et eget domene](/img/admin/domains-list.png)

Denne meldingen kan redigeres (av deg) under **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Innstilling for instruksjoner om nye domener i Domain Mapping](/img/config/settings-domain-mapping.png)

Etter å ha klikket på **Next Step**, kan kundene dine legge til sitt egne domenenavn og velge om dette domenet skal være hoveddomenet. Merk at kundene dine kan bruke mer enn ett eget domene for nettsidene sine, slik at de kan velge hvilket som skal være hoveddomenet.

![Felt for egendefinert domenenavn med alternativ for hoveddomene](/img/admin/domains-list.png)

Etter å ha klikket på **Add Domain**, legges domenet til i kundens konto. Alt de trenger å gjøre nå er å endre DNS-postene for dette egne domenet hos domeneregistraren sin.

### Endre passord:

På kontosiden kan kundene dine også endre passordet sitt ved å klikke på **Change Password**.

![Endre passord-knapp på kontosiden](/img/admin/dashboard.png)

Da vises et nytt vindu hvor kundene må fylle inn sitt nåværende passord og deretter det nye passordet de vil bruke.

![Skjema for passordendring med felt for nåværende og nytt passord](/img/admin/dashboard.png)

### Faresone:

Vi har også to alternativer som vises i **Danger Zone**-delen: **Delete Site** og **Delete Account**. Begge er i faresonen fordi disse to handlingene er irreversible. Hvis kundene dine sletter nettsiden eller kontoen sin, kan de ikke gjenopprette dem.

![Faresone med alternativene Slett nettsted og Slett konto](/img/admin/dashboard.png)

Hvis kundene dine klikker på ett av disse to alternativene, vises et vindu hvor de må slå på alternativet for å fjerne nettsiden eller kontoen, og de blir advart om at denne handlingen ikke kan angres.

![Bekreftelsesdialog for sletting av nettsted](/img/admin/dashboard.png)

![Bekreftelsesdialog for sletting av konto](/img/admin/dashboard.png)

Hvis de sletter nettsiden sin, vil kontoen og medlemskapet deres fortsatt være uberørt. De mister bare alt innholdet på nettsiden sin. Hvis de sletter kontoen sin, går alle nettsteder, medlemskap og informasjon knyttet til denne kontoen tapt.
