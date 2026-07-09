---
title: Opprette rabattkoder
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Opprette rabattkoder (v2) {#creating-discount-codes-v2}

_**VIKTIG MERKNAD: Denne artikkelen viser til Ultimate Multisite versjon 2.x.**_

Med Ultimate Multisite kan du opprette rabattkoder for å gi kundene dine rabatter på abonnementene deres. Og det er enkelt å opprette dem!

## Opprette og redigere rabattkoder {#creating-and-editing-discount-codes}

For å opprette eller redigere en rabattkode, gå til **Ultimate Multisite > Rabattkoder**.

![Liste over rabattkoder — tom tilstand før noen koder finnes](/img/config/discount-codes-empty.png)

Der får du en liste over rabattkodene du allerede har opprettet.

Du kan klikke på **Legg til rabatt** **kode** for å opprette en ny kupong, eller du kan redigere de du har ved å holde musepekeren over dem og klikke på **Rediger**.

![Liste over rabattkoder med pekerhandlinger som viser lenkene Rediger og Slett](/img/config/discount-codes-list-hover.png)

![Knappen Legg til rabattkode i sideoverskriften](/img/config/discount-codes-add-button.png)

Du blir videresendt til siden der du oppretter eller redigerer kupongkoden din. I dette eksempelet oppretter vi en ny.

![Redigeringsside for rabattkode med alle seksjoner synlige](/img/config/discount-code-edit.png)

La oss ta en titt på innstillingene som er tilgjengelige her:

**Skriv inn rabattkode:** Dette er bare navnet på rabattkoden din. Dette er ikke koden kundene dine må bruke i checkout-skjemaet.

**Beskrivelse:** Her kan du kort beskrive hva denne kupongen er for.

![Feltene for navn og beskrivelse av rabattkode øverst på redigeringssiden](/img/config/discount-code-description.png)

Du kan også vise rabattkoden som aktiv eller inaktiv:

![Aktiv status for rabattkode](/img/config/discount-code-active.png)

**Kupongkode:** Her definerer du koden kundene dine må skrive inn under checkout.

![Kupongkodefelt der kunder skriver inn koden ved checkout](/img/config/discount-code-coupon-field.png)

**Rabatt:** Her kan du angi enten en **prosentandel** eller et **fast beløp** for rabattkoden din.

![Innstilling for rabattbeløp med nedtrekksmeny for prosentandel eller fast beløp](/img/config/discount-code-amount.png)

**Bruk på fornyelser:** Hvis dette alternativet er slått av, blir denne rabattkoden bare brukt på den **første betalingen**. Alle andre betalinger vil ikke ha noen rabatt. Hvis dette alternativet er slått på, vil rabattkoden være gyldig for alle fremtidige betalinger.

**Rabatt på oppstartsgebyr:** Hvis dette alternativet er slått av, vil kupongkoden **ikke gi noen rabatt på oppstartsgebyret** for bestillingen. Hvis dette alternativet er slått på, kan du angi rabatten (prosentandel eller fast beløp) som denne kupongkoden skal bruke på oppstartsgebyret for planene dine.

![Bryteralternativer for bruk på fornyelser og rabatt på oppstartsgebyr](/img/config/discount-code-renewals.png)

**Aktiv:** Aktiver eller deaktiver denne kupongkoden manuelt.

![Aktiv-bryter for å aktivere eller deaktivere rabattkoden manuelt](/img/config/discount-code-active.png)

Under **Avanserte alternativer** har vi følgende innstillinger:

![Avanserte alternativer for rabattkode](/img/config/discount-code-advanced.png)

**Begrens bruk:**

  * **Bruk:** Her kan du se hvor mange ganger rabattkoden ble brukt.

  * **Maks bruk:** Dette begrenser antall ganger brukere kan bruke denne rabattkoden. Hvis du for eksempel skriver inn 10 her, kan kupongen bare brukes 10 ganger. Etter denne grensen kan kupongkoden ikke brukes lenger.

![Innstilling for begrenset bruk med nåværende brukstellling og felt for maks bruk](/img/config/discount-code-limit-uses.png)

**Start- og utløpsdatoer:** Her har du mulighet til å legge til en startdato og/eller en utløpsdato for kupongen din.

![Felt for start- og utløpsdato for planlegging av rabattkoden](/img/config/discount-code-dates.png)

**Begrens produkter:** Hvis du slår på **Velg produkter**, vises alle produktene dine. Du får muligheten til å velge manuelt (ved å slå på eller av) hvilket produkt som kan godta denne kupongkoden. Produkter som er slått av her, vil ikke vise noen endring hvis kundene dine prøver å bruke denne kupongkoden på dem.

![Seksjon for begrensning av produkter med brytere per produkt](/img/config/discount-code-limit-products.png)

Etter at du har satt opp alle disse alternativene, klikker du på **Lagre rabattkode** for å lagre kupongen din, og så er det gjort!

![Knappen Lagre rabattkode nederst på redigeringssiden](/img/config/discount-code-save.png)

Kupongen er nå på listen din, og derfra kan du klikke for å **redigere eller slette** den.

![Rad for rabattkode i listen med pekerhandlingene Rediger og Slett](/img/config/discount-codes-list-hover.png)

###

### Bruke URL-parametere: {#using-url-parameters}

Hvis du vil tilpasse pristabellene dine eller bygge en fin kupongkodeside for nettstedet ditt og vil bruke en rabattkode på checkout-skjemaet ditt automatisk, kan du gjøre dette via URL-parametere.

Først må du hente den delbare lenken for planen din. For å gjøre dette, gå til **Ultimate Multisite > Produkter** og velg en plan.

Klikk på knappen **Klikk for å kopiere delbar lenke**. Dette gir deg den delbare lenken til denne spesifikke planen. I vårt tilfelle var den delbare lenken som ble gitt [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Produktside med knapp for delbar lenke](/img/config/products-list.png)

For å bruke rabattkoden din på denne spesifikke planen, legger du bare til parameteren **?discount_code=XXX** i URL-en. Der **XXX** er kupongkoden.

I eksempelet vårt her bruker vi kupongkoden **50OFF** på dette spesifikke produktet.

URL-en for denne spesifikke planen og med rabattkoden 50OFF brukt vil se slik ut: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
