---
title: Utsjekingsskjemaer
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Betalingsskjemaer

Betalingsskjemaer er en enkel og fleksibel måte å eksperimentere med ulike tilnærminger når du prøver å konvertere nye kunder.

Ultimate Multisite 2.0 har en editor for betalingsskjemaer som lar deg opprette så mange skjemaer du vil, med ulike felter, produkter på tilbud og mer.

For å få tilgang til denne funksjonen, gå til Betalingsskjemaer i menyen på venstre side.

![Liste over betalingsskjemaer](/img/config/checkout-forms-list.png)

På denne siden kan du se alle betalingsskjemaene du har.

Hvis du vil opprette et nytt, klikker du bare på Legg til betalingsskjema øverst på siden.

Du kan velge ett av disse tre alternativene som utgangspunkt: ett trinn, flere trinn eller tomt. Deretter klikker du på Gå til editoren.

![Editor for betalingsskjema](/img/config/checkout-form-editor.png)

Alternativt kan du redigere eller duplisere skjemaene du allerede har ved å klikke på valgene under navnet. Der finner du også muligheten til å kopiere skjemaets shortcode eller slette skjemaet.

![Handlinger ved hover over betalingsskjema](/img/config/checkout-form-hover-actions.png)

### Redigere et betalingsskjema

Du kan opprette betalingsskjemaer for ulike formål. I dette eksempelet skal vi jobbe med et registreringsskjema.

Etter at du har navigert til editoren for betalingsskjemaer, gir du skjemaet et navn (som kun brukes til intern referanse) og en slug (brukes til å opprette shortcodes, for eksempel).

![Editor for betalingsskjema](/img/config/checkout-form-editor.png)

Skjemaer består av trinn og felter. Du kan legge til et nytt trinn ved å klikke på Legg til nytt betalingstrinn.

![Legg til nytt betalingstrinn](/img/config/checkout-form-add-step.png)

I den første fanen i modalvinduet fyller du inn innholdet for skjemaets trinn. Gi det en ID, et navn og en beskrivelse. Disse elementene brukes hovedsakelig internt.

![Betalingsskjema-trinn](/img/config/checkout-form-step.png)

Deretter setter du synligheten for trinnet. Du kan velge mellom «Vis alltid», «Vis kun for innloggede brukere» eller «Vis kun for gjester».

![Betalingsskjema-trinn](/img/config/checkout-form-step.png)

Til slutt konfigurerer du trinnets stil. Dette er valgfrie felter.

![Betalingsskjema-trinn](/img/config/checkout-form-step.png)

Nå er det på tide å legge til felter i vårt første trinn. Klikk på Legg til nytt felt og velg hvilken type seksjon du ønsker.

![Betalingsskjema-trinn med felter](/img/config/checkout-form-step.png)

Hvert felt har ulike parametere som må fylles ut. For denne første oppføringen velger vi «Brukernavn»-feltet.

![Betalingsskjema-trinn](/img/config/checkout-form-step.png)

![Betalingsskjema-trinn](/img/config/checkout-form-step.png)

![Betalingsskjema-trinn](/img/config/checkout-form-step.png)

Du kan legge til så mange trinn og felter du trenger. For å vise produktene dine slik at kundene kan velge ett, bruker du Pristabell-feltet. Hvis du vil la kundene velge en mal, legger du til Malvalg-feltet. Og så videre.

_**Merk:** brukernavn, e-post, passord, nettstedstittel, nettstedsadresse, ordresammendrag, betaling og send-knapp er obligatoriske felter for å opprette et betalingsskjema._

Mens du jobber med betalingsskjemaet, kan du alltid bruke Forhåndsvisning-knappen for å se hvordan kundene vil se skjemaet. Du kan også veksle mellom visning som eksisterende bruker eller besøkende.

![Lagre betalingsskjema](/img/config/checkout-form-save.png)

![Editor for betalingsskjema](/img/config/checkout-form-editor.png)

Til slutt, under Avanserte alternativer kan du konfigurere meldingen for «Takk»-siden, legge til kodesnutter for å spore konverteringer, legge til tilpasset CSS i betalingsskjemaet eller begrense det til bestemte land.

![Avanserte alternativer](/img/config/checkout-form-advanced.png)

Du kan også manuelt aktivere eller deaktivere betalingsskjemaet ved å slå av/på dette alternativet i høyre kolonne, eller slette skjemaet permanent.

![Aktiver/deaktiver-bryter](/img/config/checkout-form-active.png)

Ikke glem å lagre betalingsskjemaet!

![Lagre-knapp](/img/config/checkout-form-save.png)

For å hente skjemaets shortcode klikker du på Generer shortcode og kopierer resultatet som vises i modalvinduet.

![Lagre-knapp med shortcode](/img/config/checkout-form-save.png)
