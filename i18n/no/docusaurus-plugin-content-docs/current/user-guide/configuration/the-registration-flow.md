---
title: Registreringsflyten
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registreringsflyten (v2)

_**VIKTIG MERKNAD: Denne artikkelen viser til Ultimate Multisite versjon 2.x.**_

Brukere kan registrere seg på ulike måter i nettverket ditt. De kan bruke registreringsskjemaet ditt eller en delbar lenke til et forhåndsvalgt abonnement. Her viser vi deg hvordan kundene dine kan registrere seg i nettverket ditt ved å bruke de tilgjengelige veiene, og hva som skjer etter at de registrerer seg i nettverket ditt.

## Bruke registreringsskjemaet:

Dette er standard registreringsprosess. Du oppretter en registreringsside med et **checkout-skjema**, og dette blir stedet kundene dine går til for å registrere seg i nettverket ditt og abonnere på et abonnement. Du kan ha flere registreringssider, hver med et annet registreringsskjema hvis du ønsker.

Standardsiden for registrering er [_**yourdomain.com/register**_](http://yourdomain.com/register), men du kan endre dette når som helst under **Ultimate Multisite > Innstillinger > Innlogging og registrering > Standard registreringsside**.

Etter at en bruker kommer til registreringssiden din (vanligvis ved å klikke på en **Logg inn**- eller **Kjøp nå**-knapp), vil de se registreringsskjemaet ditt der.

![Registreringsskjema vist på registreringssiden](/img/frontend/registration-form.png)

Her er et eksempel på checkout-skjemaet slik det vises på frontend:

![Frontend checkout-registreringsskjema](/img/config/checkout-frontend-registration.png)

Alt de trenger å gjøre er å fylle ut alle obligatoriske felt – e-post, brukernavn, passord osv. – og betale for abonnementet eller bekrefte e-postadressen sin hvis de registrerer seg for et gratis abonnement eller et betalt abonnement med prøveperiode uten betalingsinformasjon.

På «Takk»-siden vil de se en melding som forteller dem om de må bekrefte e-postadressen sin, eller om nettstedet deres allerede er aktivert og de kan begynne å bruke det.

![Takk-side etter registrering](/img/frontend/registration-thank-you.png)

Hvis bekreftelse av e-postadresse er påkrevd, må de gå til innboksen sin og klikke på bekreftelseslenken. Nettstedet deres blir ikke aktivert hvis e-postadressen ikke blir bekreftet.

Hvis de har registrert seg på et betalt abonnement, eller e-postbekreftelse ikke er obligatorisk i nettverket ditt, blir nettstedet deres aktivert rett etter checkout, og de får vist en lenke for å logge inn på Dashboard.

![Nettsted aktivert med lenke for å logge inn på Dashboard](/img/frontend/site-activated.png)

## Bruke en delbar lenke:

Prosessen for registrering med en delbar lenke er i utgangspunktet den samme som registreringsskjemaet. Den eneste forskjellen er at med en delbar lenke kan kundene dine ha et produkt eller en nettstedsmal forhåndsvalgt i checkout-skjemaet (se delen om å forhåndsvelge produkter og maler via URL-parametere), eller kanskje en kupongkode lagt til (se delen om bruk av URL-parametere).

Registreringsprosessen vil være den samme: de må fylle ut navn, brukernavn, e-postadresse, nettstedsnavn og tittel osv., men abonnementet eller nettstedsmalen vil allerede være forhåndsvalgt for dem.

### Registrering med manuelle betalinger:

Hvis du ikke vil bruke PayPal, Stripe eller noen annen betalingsløsning som tilbys av Ultimate Multisite eller integrasjonene i tilleggene, kan du bruke manuelle betalinger for kundene dine. På denne måten kan du generere en faktura som de kan betale hos din foretrukne betalingsbehandler etter at de registrerer seg i nettverket ditt.

Registreringsprosessen vil være nøyaktig den samme som ovenfor, men på registreringssiden vil kundene dine se en melding som sier at de vil motta en e-post med videre instruksjoner for å fullføre betalingen.

![Melding om manuell betaling under registrering](/img/frontend/registration-manual-notice.png)

Og etter at registreringen er fullført, vil de se betalingsinstruksjonene du har angitt (og også motta dem på e-post).

![Betalingsinstruksjoner vist etter registrering](/img/frontend/registration-payment-instructions.png)

Betalingsinstruksjonene kan endres under **Ultimate Multisite > Innstillinger > Betalinger** etter at du har slått på betalingsalternativet **Manuell**:

![Bryter for manuell betaling med felt for betalingsinstruksjoner](/img/config/manual-gateway-settings.png)

Etter at kundene dine fullfører den manuelle betalingen og sender deg bekreftelsen, må du **bekrefte betalingen manuelt** for å aktivere kundens medlemskap og nettsted.

For å gjøre dette går du til **Ultimate Multisite > Betalinger** og finner kundebetalingen. Den skal fortsatt vise statusen **Venter**.

![Betalingsliste med ventende manuell betaling](/img/admin/payments-list.png)

Klikk på betalingsnummeret, så kan du endre statusen til **Fullført**.

![Side med betalingsdetaljer](/img/admin/payment-edit.png)

![Endrer betalingsstatus til Fullført](/img/admin/payment-status-completed.png)

Etter at du har endret statusen til **Fullført**, skal du se en melding om **Aktiver medlemskap**. Slå dette alternativet **på** for å aktivere medlemskapet og nettstedet som er knyttet til denne kunden. Klikk deretter på **Lagre betaling**.

![Bryter for aktivering av medlemskap og Lagre betaling-knapp](/img/admin/payment-activate-membership.png)

Kunden din skal nå kunne få tilgang til Dashboard og alle funksjonene de abonnerte på.
