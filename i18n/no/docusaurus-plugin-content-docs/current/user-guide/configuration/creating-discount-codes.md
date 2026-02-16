---
title: Opprette rabattkoder
sidebar_position: 19
_i18n_hash: 66179a52645793d48bb6cb9a9e47c016
---
# Opprette rabattkoder (v2)

_**VIKTIG MERKNAD: Denne artikkelen gjelder Ultimate Multisite versjon 2.x.**_

Med Ultimate Multisite kan du opprette rabattkoder for å gi kundene dine rabatt på abonnementene deres. Og det er enkelt å lage dem!

## Opprette og redigere rabattkoder

For å opprette eller redigere en rabattkode, gå til **Ultimate Multisite > Discount Codes**.

![](/img/config/discount-codes-list.png)

Der finner du en liste over rabattkodene du allerede har opprettet.

Du kan klikke på **Add Discount** **Code** for å opprette en ny kupong, eller du kan redigere de eksisterende ved å holde musepekeren over dem og klikke på **Edit**.

![Liste over rabattkoder med handlinger ved hover](/img/config/discount-codes-list.png)

![Add Discount Code-knapp](/img/config/discount-codes-list.png)

Du blir sendt videre til siden der du oppretter eller redigerer kupongkoden din. I dette eksempelet skal vi opprette en ny.

![Redigeringsside for rabattkode](/img/config/discount-codes-list.png)

La oss se nærmere på innstillingene som er tilgjengelige her:

**Enter Discount Code:** Dette er bare navnet på rabattkoden din. Dette er ikke koden kundene må bruke i betalingsskjemaet.

**Description:** Her kan du kort beskrive hva denne kupongen er til.

![Felt for navn og beskrivelse av rabattkode](/img/config/discount-codes-list.png)

**Coupon code:** Her definerer du koden kundene må skrive inn under betalingen.

![Felt for kupongkode](/img/config/discount-codes-list.png)

**Discount:** Her kan du angi enten en **prosentandel** eller et **fast beløp** for rabattkoden din.

![Innstilling for rabatt i prosent eller fast beløp](/img/config/discount-codes-list.png)

**Apply to renewals:** Hvis dette alternativet er slått av, vil rabattkoden kun gjelde for **første betaling**. Alle andre betalinger vil ikke ha noen rabatt. Hvis dette alternativet er slått på, vil rabattkoden gjelde for alle fremtidige betalinger.

**Setup fee discount:** Hvis dette alternativet er slått av, vil kupongkoden **ikke gi noen rabatt på etableringsgebyret** for bestillingen. Hvis dette alternativet er slått på, kan du angi rabatten (prosent eller fast beløp) som denne kupongkoden skal gi på etableringsgebyret for planene dine.

![Alternativer for Apply to renewals og Setup fee discount](/img/config/discount-codes-list.png)

**Active:** Aktiver eller deaktiver denne kupongkoden manuelt.

![Av/på-bryter for aktiv rabattkode](/img/config/discount-codes-list.png)

Under **Advanced Optio** **ns** har vi følgende innstillinger:

**Limit uses:**

  * **Uses:** Her kan du se hvor mange ganger rabattkoden har blitt brukt.

  * **Max uses:** Dette begrenser hvor mange ganger brukere kan benytte denne rabattkoden. Hvis du for eksempel skriver 10 her, kan kupongen bare brukes 10 ganger. Etter denne grensen kan ikke kupongkoden brukes lenger.

![Innstilling for bruksbegrensning med felt for antall bruk og maksimalt antall bruk](/img/config/discount-codes-list.png)**Start & expiration dates:** Her har du muligheten til å legge til en startdato og/eller en utløpsdato for kupongen din.

![Felt for start- og utløpsdato](/img/config/discount-codes-list.png)

**Limit products:** Hvis du slår på **Select products**, vises alle produktene dine. Du kan manuelt velge (ved å slå av eller på) hvilke produkter som skal godta denne kupongkoden. Produkter som er slått av her, vil ikke vise noen endring hvis kundene prøver å bruke denne kupongkoden på dem.

![Av/på-brytere for å begrense produkter](/img/config/discount-codes-list.png)

Når du har satt opp alle disse alternativene, klikker du på **Save Discount Code** for å lagre kupongen, og da er du ferdig!

![Save Discount Code-knapp](/img/config/discount-codes-list.png)

Kupongen er nå i listen din, og derfra kan du klikke for å **redigere eller slette** den.

![Rabattkode i listen med alternativer for redigering og sletting](/img/config/discount-codes-list.png)

### 

### Bruke URL-parametere:

Hvis du vil tilpasse pristabellene dine eller bygge en fin kupongkodeside for nettstedet ditt og ønsker å legge til en rabattkode automatisk i betalingsskjemaet, kan du gjøre dette via URL-parametere.

Først må du hente den delbare lenken for planen din. For å gjøre dette, gå til **Ultimate Multisite > Products** og velg en plan.

Klikk på **Click to Copy Shareable Link**-knappen. Dette gir deg den delbare lenken til denne spesifikke planen. I vårt tilfelle var den delbare lenken [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Produktside med knapp for delbar lenke](/img/config/products-list.png)

For å legge til rabattkoden din på denne spesifikke planen, legger du bare til parameteren **?discount_code=XXX** i URL-en. Der **XXX** er kupongkoden.

I vårt eksempel her skal vi legge til kupongkoden **50OFF** på dette spesifikke produktet.

URL-en for denne spesifikke planen med rabattkoden 50OFF vil se slik ut: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

### 
