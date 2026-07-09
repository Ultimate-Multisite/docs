---
title: Klientens Account-side
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Din kundes Account-side (v2)

_**VIKTIG MERKNAD: Denne artikkelen viser til Ultimate Multisite versjon 2.x.**_

Når kunder abonnerer på en plan i nettverket ditt, får de tilgang til et nettsted og dets Dashboard med viktig informasjon om betalinger, medlemskap, domener, planbegrensninger osv...

I denne veiledningen guider vi deg gjennom kundens Account-side, og du vil se hva kundene dine kan se og gjøre der inne.

## Account-siden

Account-siden er tilgjengelig ved å klikke på **Account** inne i kundens Dashboard.

![Account-meny i kundens Dashboard](/img/account-page/account-menu.png)

På suverene leietakernettverk beholder Ultimate Multisite v2.13.0 denne kundeadministrasjonsopplevelsen på hovednettstedet. Hvis en kunde åpner handlinger for konto, checkout, fakturering, faktura, nettstedadministrasjon, malbytte eller domenetilknytning fra en suveren leietaker, peker handlingen tilbake til kundepanelet på hovednettstedet, slik at nettverkets fakturerings- og medlemskapsoppføringer forblir autoritative.

Når kunden kommer fra en suveren leietaker, kan kundepanelet på hovednettstedet inkludere en returlenke tilbake til leietakernettstedet. Returlenken vises bare når Ultimate Multisite kan validere returmålet som ett av kundens nettsteder, noe som forhindrer vilkårlige omdirigeringer samtidig som leietakerarbeidsflyten bevares.

![Oversikt over kundens Account-side](/img/account-page/overview.png)

Etter at en kunde klikker på den, vil de se en oversikt over medlemskapet sitt, faktureringsadresse, fakturaer, domener, nettstedsbegrensninger, og de vil også kunne endre ****Nettstedsmal** (hvis det er tillatt i nettverket ditt)**.

De kan også endre medlemskapet til en annen plan, eller kjøpe en annen pakke eller tjeneste som du tilbyr. La oss se på hver seksjon separat.

### Oversikt over medlemskapet ditt:

Den første blokken rett under kundenes nettstedsnavn viser en oversikt over deres nåværende plan og tjenester/pakker som ble kjøpt sammen med den. Blokken viser også medlemskapsnummeret, det opprinnelige beløpet som ble betalt for det, hvor mye planen og eventuelle tjenester/pakker koster, og hvor mange ganger de ble fakturert for dette medlemskapet. De kan også se om medlemskapet er **Aktivt** , **Utløpt** eller **Kansellert**.

![Medlemskapsoversikt som viser plan, beløp og faktureringsdetaljer](/img/account-page/membership-card.png)

Rett under denne blokken kan kundene dine se blokkene **Om dette nettstedet** og **Nettstedsgrenser**. Disse blokkene viser dem alle begrensningene som følger med planen deres: diskplass, innlegg, sider, besøk osv... Disse grensene kan konfigureres på hver planside under **Ultimate Multisite > Produkter**.

![Blokkene Om dette nettstedet og Nettstedsgrenser som viser planbegrensninger](/img/account-page/site-limits.png)

På høyre side av **Ditt medlemskap** kan kunder klikke på **Endre**. Dette vil vise dem alle tilgjengelige planer og pakker/tjenester. Hvis de velger en annen plan, vil begrensningene for planen gjelde i stedet for de nåværende begrensningene i medlemskapet – uansett om de nedgraderer eller oppgraderer det.

Hvis kundene dine nå velger å kjøpe pakker eller tjenester for dette nåværende medlemskapet – som mer diskplass eller flere besøk – vil det nåværende medlemskapet ikke bli endret, men bare de nye pakkene vil bli lagt til i det.

Merk at kupongkoder ikke kan legges til på denne siden for medlemskapsendring. Hvis kunden brukte en kupongkode ved det første medlemskapskjøpet, vil koden også gjelde for dette nye medlemskapet.

### Oppdatere faktureringsadressen:

På Account-siden kan kundene dine også oppdatere faktureringsadressen sin. De trenger bare å klikke på **Oppdater** ved siden av _Faktureringsadresse_.

![Seksjonen Faktureringsadresse med Oppdater-knapp](/img/account-page/billing-address.png)

Et nytt vindu vil vises for kunden din. Alt vedkommende trenger å gjøre er å fylle inn den nye adressen og klikke på _Lagre endringer_.

![Skjema for oppdatering av faktureringsadresse](/img/account-page/billing-address-form.png)

### Endre nettstedsmalen:

For å la kundene dine endre nettstedsmalene sine, må du gå til **Ultimate Multisite > Innstillinger > Nettsteder** og slå på alternativet **Tillat malbytte**.

På **Ultimate Multisite > Produkter** velger du også planene dine og går til fanen **Nettstedsmaler**. Sørg for at alternativet **Tillat nettstedsmaler** er slått på, og at alternativet **Velg tilgjengelige nettstedsmaler** er valgt under **Valgmodus for nettstedsmal**.

![Produktets nettstedsmal-fane med valgmodus for mal](/img/config/product-site-templates.png)

Du vil kunne se alle tilgjengelige nettstedsmaler på nettstedet ditt. Velg hvilke du vil gjøre tilgjengelige, og hvilke du ikke vil gjøre tilgjengelige for kunder som abonnerer på denne planen. Merk at disse alternativene også påvirker checkout-skjemaet, så enhver mal som er valgt som **Ikke tilgjengelig**, vil ikke vises på registreringssiden for denne planen.

Nå kan kundene dine klikke på **Endre nettstedsmal** inne på Account-siden sin.

![Knapp for Endre nettstedsmal på Account-siden](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 viser et redesignet panel for malbytte. Panelet starter med et **kort for gjeldende mal**, slik at kunder kan se hvilken mal som er aktiv før de velger en erstatning.

Et vedvarende rutenett med tilgjengelige nettstedsmaler forblir synlig mens kunder vurderer alternativene sine. Dette hjelper dem med å sammenligne malene som er tillatt for planen deres, uten å miste den nåværende valgte malen av syne.

![Liste over tilgjengelige nettstedsmaler for planen](/img/config/site-templates-list.png)

Etter å ha valgt den de vil bytte til, blir de bedt om å bekrefte endringen.

![Bekreftelsesdialog for bytte av nettstedsmal](/img/account-page/template-switch-confirm.png)

Etter å ha slått på bekreftelsen og klikket på **Utfør bytte** , vil den nye nettstedsmalen bli brukt på kundens nettsted.

Kunder kan også bruke **Tilbakestill gjeldende mal** fra dette panelet når de trenger å tilbakestille nettstedet tilbake til den nåværende tildelte malen. Som ved å bytte til en annen mal kan tilbakestilling av en mal overskrive nettstedsinnhold, så kunder bør bare bekrefte det når de forstår tilbakestillingshandlingen.

### Legge til egendefinerte domener:

Kundene dine vil også ha muligheten til å legge til et egendefinert domene for denne planen på Account-siden sin. For å la kundene dine bruke egendefinerte domener, gå til **Ultimate Multisite > Settings >** **Domain Mapping**.

Slå på alternativet **Enable Domain Mapping**. Dette vil la kundene dine bruke egendefinerte domener på nettverksnivå.

Ikke glem å også sjekke om domain mapping er aktivert per produkt – fordi du kan begrense et produkt slik at kundene dine ikke kan bruke egendefinerte domener.

Gå til **Ultimate Multisite > Products**. Velg planen du ønsker, og gå til fanen **Custom Domains**. Slå på alternativet **Allow Custom Domains**.

![Fanen Custom Domains med Allow Custom Domains-bryter](/img/config/product-custom-domains.png)

Dette vil la alle kunder som abonnerer på denne spesifikke planen bruke egendefinerte domener. Nå kan kundene dine, på Account-siden, legge til et egendefinert domene ved å klikke på **Add Domain**.

![Add Domain-knapp på Account-siden](/img/account-page/add-domain-button.png)

Det første vinduet som åpnes, vil vise kundene dine en melding som instruerer dem i hvordan de oppdaterer DNS-oppføringene sine for å få dette egendefinerte domenet til å fungere på nettverket ditt.

![DNS-instruksjoner som vises når et egendefinert domene legges til](/img/account-page/add-domain-dns.png)

Denne meldingen kan redigeres (av deg) på **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions-innstilling i Domain Mapping](/img/config/settings-domain-mapping.png)

Her er en full visning av innstillingssiden for domain mapping:

![Full side for domain mapping-innstillinger](/img/config/settings-domain-mapping-full.png)

Etter å ha klikket på **Next Step** , kan kundene dine legge til navnet på det egendefinerte domenet sitt og velge om dette egendefinerte domenet skal være det primære. Merk at kundene dine kan bruke mer enn ett egendefinert domene for nettstedene sine, så de kan velge hvilket som skal være det primære.

![Inntasting av egendefinert domenenavn med alternativ for primært domene](/img/account-page/add-domain-primary.png)

Etter å ha klikket på **Add Domain** , blir domenet lagt til i kundens konto. Alt de trenger å gjøre nå, er å endre DNS-oppføringene for dette egendefinerte domenet hos domeneregistratoren sin.

### Endre passord:

Inne i konto-Dashboard kan kundene dine også endre passordet sitt ved å klikke på **Change Password**.

![Change Password-knapp på Account-side](/img/account-page/change-password-button.png)

Dette vil vise et nytt vindu der kundene dine må fylle inn sitt nåværende passord og deretter fylle inn det nye passordet de vil bruke.

![Skjema for endring av passord med felt for nåværende og nytt passord](/img/account-page/change-password-form.png)

### Faresone:

Vi har også to alternativer som vises i delen **Danger Zone**: **Delete Site** og **Delete Account**. De er begge i Danger Zone-delen fordi disse to handlingene er irreversible. Hvis kundene dine sletter nettstedet sitt eller kontoen sin, kan de ikke gjenopprette dem.

![Danger Zone med alternativene Delete Site og Delete Account](/img/account-page/danger-zone.png)

Hvis kundene dine klikker på ett av disse to alternativene, vil de få opp et vindu der de må slå på alternativet for å fjerne nettstedet eller kontoen, og de vil bli advart om at denne handlingen ikke kan angres.

![Bekreftelsesdialog for Delete Site](/img/account-page/delete-site-confirm.png)

![Bekreftelsesdialog for Delete Account](/img/account-page/delete-account-confirm.png)

Hvis de sletter nettstedet sitt, vil kontoen og medlemskapet deres fortsatt være uberørt. De vil bare miste alt innholdet på nettstedet sitt. Hvis de sletter kontoen sin, vil alle nettsteder, medlemskap og informasjon knyttet til denne kontoen gå tapt.
