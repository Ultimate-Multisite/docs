---
title: Registreringsflyten
sidebar_position: 3
_i18n_hash: 73484be47ec750747cb9d94ea874d97f
---
# Registreringsprosessen (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Brukere kan registrere seg på nettverket ditt på forskjellige måter. De kan bruke registreringsskjemaet ditt eller en delbar lenke til en forhåndsvalgt plan. Her viser vi deg hvordan kundene dine kan registrere seg på nettverket ditt ved hjelp av de tilgjengelige metodene, og hva som skjer etter at de har registrert seg.

## Bruke registreringsskjemaet:

Dette er den vanlige registreringsprosessen. Du oppretter en registreringsside med et **betalingsskjema**, og det er her kundene dine går for å registrere seg på nettverket ditt og abonnere på en plan. Du kan ha flere registreringssider, hver med sitt eget registreringsskjema hvis du ønsker det.

Standardsiden for registrering er [_**dittdomene.no/register**_](http://yourdomain.com/register), men du kan endre dette når som helst under **Ultimate Multisite > Innstillinger > Innlogging og registrering > Standard registreringsside**.

Når en bruker kommer til registreringssiden din (vanligvis ved å klikke på en **Logg inn**- eller **Kjøp nå**-knapp), vil de se registreringsskjemaet ditt der.

![Registreringsskjema vist på registreringssiden](/img/config/checkout-forms-list.png)

Alt de trenger å gjøre er å fylle ut alle obligatoriske felt – e-post, brukernavn, passord osv. – og betale for planen eller bekrefte e-postadressen sin hvis de registrerer seg for en gratis plan eller en betalt plan med prøveperiode uten betalingsinformasjon.

På «Takk»-siden vil de se en melding som forteller dem om de må bekrefte e-postadressen sin, eller om nettsiden deres allerede er aktivert og klar til bruk.

![Takk-side etter registrering](/img/config/checkout-form-editor.png)

Hvis e-postbekreftelse er påkrevd, må de gå til innboksen sin og klikke på bekreftelseslenken. Nettsiden deres vil ikke bli aktivert hvis e-postadressen ikke blir verifisert.

Hvis de har registrert seg på en betalt plan eller e-postverifisering ikke er obligatorisk på nettverket ditt, vil nettsiden deres bli aktivert umiddelbart etter betaling, og de vil få en lenke for å logge inn på dashboardet sitt.

![Nettsted aktivert med lenke for å logge inn på dashboardet](/img/config/checkout-form-editor.png)

## Bruke en delbar lenke:

Prosessen med å registrere seg via en delbar lenke er i bunn og grunn den samme som med registreringsskjemaet. Den eneste forskjellen er at med en delbar lenke kan kundene dine ha et produkt eller en nettstedsmal forhåndsvalgt i betalingsskjemaet (se avsnittet Forhåndsvelge produkter og maler via URL-parametere) eller en rabattkode lagt til (se avsnittet Bruke URL-parametere).

Registreringsprosessen vil være den samme: de må fylle inn navn, brukernavn, e-postadresse, nettstedsnavn og tittel osv., men planen eller nettstedsmalen vil allerede være forhåndsvalgt for dem.

### Registrere seg med manuell betaling:

Hvis du ikke ønsker å bruke PayPal, Stripe eller andre betalingsløsninger som tilbys av Ultimate Multisite eller tilleggsintegrasjonene, kan du bruke manuell betaling for kundene dine. På denne måten kan du generere en faktura som de kan betale via din foretrukne betalingsløsning etter at de har registrert seg på nettverket ditt.

Registreringsprosessen vil være nøyaktig den samme som ovenfor, men på registreringssiden vil kundene dine se en melding om at de vil motta en e-post med ytterligere instruksjoner for å fullføre betalingen.

![Melding om manuell betaling under registrering](/img/config/settings-payment-gateways.png)

Og etter at registreringen er fullført, vil de se betalingsinstruksjonene du har angitt (og også motta dem på e-post).

![Betalingsinstruksjoner vist etter registrering](/img/config/settings-payment-gateways.png)

Betalingsinstruksjonene kan endres under **Ultimate Multisite > Innstillinger > Betalinger** etter at du har slått på **Manuell** betalingsalternativet:

![Manuell betaling-bryter med felt for betalingsinstruksjoner](/img/config/settings-payment-gateways.png)

Etter at kundene dine har fullført den manuelle betalingen og sendt deg bekreftelsen, må du **manuelt bekrefte betalingen** for å aktivere kundens medlemskap og nettsted.

For å gjøre dette, gå til **Ultimate Multisite > Betalinger** og finn kundens betaling. Den skal fortsatt vise statusen **Ventende**.

![Betalingsliste med ventende manuell betaling](/img/admin/payments-list.png)

Klikk på betalingsnummeret, og du vil kunne endre statusen til **Fullført**.

![Side med betalingsdetaljer](/img/admin/payments-list.png)

![Endre betalingsstatus til Fullført](/img/admin/payments-list.png)

Etter at du har endret statusen til **Fullført**, skal du se en **Aktiver medlemskap**-melding. Slå på dette alternativet for å aktivere medlemskapet og nettsiden knyttet til denne kunden. Deretter klikker du på **Lagre betaling**.

![Aktiver medlemskap-bryter og Lagre betaling-knapp](/img/admin/payments-list.png)

Kunden din skal nå kunne få tilgang til dashboardet og alle funksjonene de har abonnert på.
