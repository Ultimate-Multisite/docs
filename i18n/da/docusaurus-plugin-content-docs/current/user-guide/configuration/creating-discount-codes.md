---
title: Oprettelse af rabatkoder
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Oprettelse af rabatkoder (v2) {#creating-discount-codes-v2}

_**VIGTIG BEMÆRK: Denne artikel henviser til Ultimate Multisite version 2.x.**_

Med Ultimate Multisite kan du oprette rabatkoder for at give dine kunder rabatter på deres abonnementer. Og det er nemt at gøre!

## Oprettelse og redigering af rabatkoder {#creating-and-editing-discount-codes}

For at oprette eller redigere en rabatkode skal du gå til **Ultimate Multisite > Discount Codes**.

![Liste over rabatkoder — tom tilstand før nogen koder eksisterer](/img/config/discount-codes-empty.png)

Der vil du finde en liste over de rabatkoder, du allerede har oprettet.

Du kan klikke på **Add Discount Code** (Tilføj rabatkode) for at oprette en ny kupon eller redigere dem ved at holde musen over dem og klikke på **Edit** (Rediger).

![Liste over rabatkoder med hover-handlinger, der viser Edit- og Delete-links](/img/config/discount-codes-list-hover.png)

![Tilføj rabatkode knap i sidehovedet](/img/config/discount-codes-add-button.png)

Du vil blive omdirigeret til siden, hvor du kan oprette eller redigere din kuponkode. I dette eksempel opretter vi en ny.

![Redigeringsside for rabatkode med alle sektioner synlige](/img/config/discount-code-edit.png)

Lad os kigge på de indstillinger, der er tilgængelige her:

**Enter Discount Code (Indtast rabatkode):** Dette er blot navnet på din rabatkode. Det er ikke koden, dine kunder skal bruge på betalingsformularen.

**Description (Beskrivelse):** Her kan du kort beskrive, hvad denne kupon er til.

![Felter for rabatkodes navn og beskrivelse øverst på redigeringssiden](/img/config/discount-code-description.png)

Du kan også se rabatkoden som aktiv eller inaktiv:

![Aktiv status for rabatkode](/img/config/discount-code-active.png)

**Coupon code (Kuponkode):** Her definerer du koden, dine kunder skal indtaste under betalingen.

![Couponkodefelt hvor kunder indtaster koden ved kassen](/img/config/discount-code-coupon-field.png)

**Rabatt:** Her kan du sætte enten en **procentdel** eller et **fast beløb** for din rabatkode.

![Indstilling af rabatbeløb med procentdel eller fast beløb rullemenu](/img/config/discount-code-amount.png)

**Anvend på genfornyelser:** Hvis denne mulighed er slået fra, vil denne rabatkode kun blive anvendt på **den første betaling**. Alle de andre betalinger vil ikke have rabat. Hvis denne mulighed er slået til, vil rabatkoden være gyldig for alle fremtidige betalinger.

**Rabatt på opsætningsgebyr:** Hvis denne mulighed er slået fra, vil koden **ikke give nogen rabat på opsætningsgebyret** for ordren. Hvis denne mulighed er slået til, kan du sætte den rabat (procentdel eller fast beløb), som denne kode skal anvende på opsætningsgebyret for dine planer.

![Afbryderindstillinger for anvendelse på genfornyelser og rabat på opsætningsgebyr](/img/config/discount-code-renewals.png)

**Aktiv:** Aktiver eller deaktiver denne rabatkode manuelt.

![Aktiv afbryder til manuel aktivering eller deaktivering af rabatkode](/img/config/discount-code-active.png)

Under **Avancerede muligheder** har vi følgende indstillinger:

![Avancerede muligheder for rabatkode](/img/config/discount-code-advanced.png)

**Begræns brug:**

  * **Brugte gange:** Her kan du se, hvor mange gange rabatkoden er blevet brugt.

  * **Maksimalt antal brug:** Dette vil begrænse, hvor mange gange brugere kan bruge denne rabatkode. For eksempel, hvis du indstiller 10 her, kan koden kun bruges 10 gange. Efter denne grænse kan rabatkoden ikke længere bruges.

![Indstilling for begræns brug med feltet for nuværende brug og maksimalt antal brug](/img/config/discount-code-limit-uses.png)

**Start- og udløbsdatoer:** Her kan du vælge at tilføje en startdato og/eller en udløbsdato til din rabatkode.

![Start- og udløbsdato felter til planlægning af rabatkode](/img/config/discount-code-dates.png)

**Begræns produkter:** Hvis du slår **Vælg produkter** til, vil alle dine produkter blive vist for dig. Du får mulighed for manuelt at vælge (ved at tænde eller slukke for det) hvilke produkter der kan acceptere denne rabatkode. Produkter, der er slået fra her, vil ikke vise nogen ændring, hvis dine kunder forsøger at bruge denne rabatkode på dem.

![Begræns produkter sektion med knapper til hver produkt](/img/config/discount-code-limit-products.png)

Når du har indstillet alle disse muligheder, klik på **Gem rabatkode** for at gemme din kupon – og det er gjort!

![Gem rabatkode knap nederst på redigeringssiden](/img/config/discount-code-save.png)

Kuponen er nu på din liste, og derfra kan du klikke for at **redigere eller slette** den.

![Rabatkode række i listen med hover-handlinger til Rediger og Slet](/img/config/discount-codes-list-hover.png)

###

### Brug af URL-parametre: {#using-url-parameters}

Hvis du vil tilpasse dine prisoverblik eller bygge en flot rabatkode side til din hjemmeside, og gerne vil anvende en rabatkode på dit checkout-formular automatisk, kan du gøre dette via URL-parametre.

Først skal du få det delbare link til din plan. For at gøre dette skal du gå til **Ultimate Multisite > Produkter** og vælge en plan.

Klik på knappen **Klik for at kopiere delbart link**. Dette vil give dig det delbare link til denne specifikke plan. I vores tilfælde var det delbare link, der blev givet [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Produkt side med delbart link knap](/img/config/products-list.png)

For at anvende din rabatkode på denne specifikke plan, skal du blot tilføje parametrene **?discount_code=XXX** til URL'en. Hvor **XXX** er din kuponkode.

I vores eksempel vil vi anvende kuponkoden **50OFF** på dette specifikke produkt.

URL'en for denne specifikke plan med 50OFF rabatkoden anvendt vil se således ud: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
