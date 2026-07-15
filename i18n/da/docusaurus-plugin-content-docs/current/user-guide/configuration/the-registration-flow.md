---
title: Registreringsflowet
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Registreringsflow (v2)

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Brugere kan registrere sig på din netværk på forskellige måder. De kan bruge dit registreringsformular eller et delbart link til en forudvalgt plan. Her viser vi, hvordan dine kunder kan registrere sig på dit netværk ved hjælp af de tilgængelige veje og hvad der sker efter, at de har registreret sig på dit netværk.

## Brug af registreringsformular: {#using-the-registration-form}

Dette er den standardregistreringsproces. Du opretter en registreringsside med et **checkout form**, og det er her dine kunder vil gå hen for at registrere sig på dit netværk og abonnere på en plan. Du kan have flere registreringssider, hver med et forskelligt registreringsformular, hvis du ønsker det.

Standard-siden til registrering er [_**yourdomain.com/register**_](http://yourdomain.com/register), men du kan ændre dette når som helst i **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Når en bruger kommer til din registreringsside (typisk ved at klikke på en knap som **Sign in** eller **Buy now**), vil de se dit registreringsformular der.

![Registreringsformular vist på registreringssiden](/img/frontend/registration-form.png)

Her er et eksempel på checkout formen, som den ser ud på frontenden:

![Frontend checkout registration form](/img/config/checkout-frontend-registration.png)

Alt de skal gøre er at udfylde alle de obligatoriske felter – e-mail, brugernavn, adgangskode osv. – og betale for planen eller bekræfte deres e-mailadresse, hvis de registrerer sig for en gratis plan eller en betalt plan med prøveperiode uden betalingsoplysninger.

På "Tak"-siden vil de se en besked, der fortæller dem, om de skal bekræfte deres e-mailadresse eller om deres hjemmeside allerede er aktiveret og de kan begynde at bruge den.

![Takkeside efter registrering](/img/frontend/registration-thank-you.png)

Hvis en e-mailadressebekræftelse er påkrævet, skal de gå til deres indbakke og klikke på verifikationslinket. Deres hjemmeside vil ikke blive aktiveret, hvis deres e-mailadresse ikke bliver verificeret.

Hvis de har registreret sig på en betalt plan eller e-mailverificering ikke er obligatorisk i dit netværk, vil deres hjemmeside blive aktiveret med det samme efter kassen og de vil blive vist et link til at logge ind på deres dashboard.

![Hjemmeside aktiveret med link til login til dashboard](/img/frontend/site-activated.png)

## Brug af en delbar link: {#using-a-shareable-link}

Processen med at registrere sig ved hjælp af en delbar link er grundlæggende den samme som registreringsformularen. Den eneste forskel er, at ved brug af et delbart link kan dine kunder have et produkt eller en websitetemplet forudvalgt på kassen (se afsnittet Forudvalg af produkter og templer via URL-parametre) eller måske et kuponkode tilføjet (se afsnittet Brug af URL-parametre).

Registreringsprocessen vil være den samme: de skal udfylde deres navn, brugernavn, e-mailadresse, websitets navn og titel osv., men planen eller templet vil allerede være forudvalgt for dem.

### Registrering med manuel betaling: {#registering-using-manual-payments}

Hvis du ikke ønsker at bruge PayPal, Stripe eller nogen anden betalingsgateway tilbudt af Ultimate Multisite eller dets add-on integrationer, kan du bruge manuelle betalinger til dine kunder. På denne måde kan du generere en faktura for dem at betale hos din foretrukne betalingsbehandler efter de har registreret sig på dit netværk.

Registreringsprocessen vil være præcis som ovenfor, men på registreringssiden vil dine kunder se en besked om, at de vil modtage en e-mail med yderligere instruktioner til at gennemføre betalingen.

![Manuel betalingsbesked under registrering](/img/frontend/registration-manual-notice.png)

Og efter registreringen er færdig, vil de se betalingsvejledningerne, du har indstillet (og modtage dem også via e-mail).

![Betalingsvejledning vist efter registrering](/img/frontend/registration-payment-instructions.png)

Betalingsvejledningen kan ændres i **Ultimate Multisite > Settings > Payments** ved at slå den manuelle betalingsmulighed til, når du taster på **Manual**:

![Manuel betalingsafbryder med felt til betalingsvejledning](/img/config/manual-gateway-settings.png)

Når dine kunder har gennemført den manuelle betaling og sendt dig bekræftelsen, skal du **manuelt bekræfte betalingen** for at aktivere kundemedlemskabet og websitet.

For at gøre dette skal du gå til **Ultimate Multisite > Payments** og finde kundebetalingen. Den vil stadig vise status som **Pending**.

![Betalingsliste med uafklaret manuel betaling](/img/admin/payments-list.png)

Klik på betalingsnummeret, og du kan ændre dets status til **Completed**.

![Side med betalingsdetaljer](/img/admin/payment-edit.png)

![Ændring af betalingsstatus til Completed](/img/admin/payment-status-completed.png)

Når du har ændret status til **Completed**, vil du se en besked om at **Activate membership**. Skift denne mulighed til **on** for at aktivere medlemskabet og websitet forbundet med denne kunde. Klik derefter på **Save Payment**.

![Aktiveringsafbryder for medlemskab og Save Payment-knap](/img/admin/payment-activate-membership.png)

Din kunde kan nu tilgå dashboardet og alle de funktioner, de har abonneret på.
