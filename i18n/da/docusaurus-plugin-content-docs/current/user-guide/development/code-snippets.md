---
title: Kodeudsnit
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kodeudsnip til v2 {#code-snippets-for-v2}

Grundlæggende bruges kodeudsnit til **WordPress** til at udføre bestemte handlinger, som ellers må kræve en dedikeret mindre plugin. Sådan kode placeres i et af WordPress kernefiler eller temaets `functions.php` fil (generelt), eller den kan bruges som en MU plugin.

I denne artikel viser vi tre kodeudsnit, der kan bruges med **Ultimate Multisite v2**:

  * [**Ændring af placeringen af Account menu-elementet**](#changing-the-position-of-the-account-menu-item)

  * [**Hvordan man tjekker, om brugeren er under en given plan og/eller har et aktivt abonnement**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Løsning af CORS-problemer med Font-Icons på kortlagte domæner**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ændring af placeringen af Account menu-elementet {#changing-the-position-of-the-account-menu-item}

For at ændre placeringen af Account menu-elementet på din clients Dashboard, skal du blot tilføje følgende kodeudsnit til `functions.php` i temaet for din hovedside. Du kan også indsætte udskriften inde i en af dine mu-plugins eller custom plugins.

```php
add_filter('wu_my_account_menu_position', function() { return 10; // Juster denne værdi for at placere menuen på den ønskede position.
```

## Hvordan man tjekker, om brugeren er under en given plan og/eller har et aktivt abonnement {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Som netværksadministrator kan du skulle oprette custom functions, der udfører basale handlinger eller gør en service/funktion tilgængelig for en udvalgt gruppe abonnenter eller slutbrugere, baseret på status for deres abonnement og den plan, de er tilmeldt.

Disse Ultimate Multisite native functions vil hjælpe dig med det.

For at tjekke, om brugeren er medlem af en given plan, kan du bruge funktionen:

`wu_has_plan($user_id, $plan_id)`

For at tjekke om abonnementet er aktivt kan du bruge funktionen:

`wu_is_active_subscriber($user_id)`

Her er et eksempel på et lille kodeudsnit, der tjekker, om den aktuelle bruger er under en specifik plan (_Plan ID 50_) og om brugerens abonnement er aktiv.

```php
$user_id = get_current_user_id();
$plan_id = 50;
if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // BRUGER ER MEDLEM AF PLAN OG HENS SUBSCRIPTION ER AKTIV, GØR DET HER} else { // BRUGER ER IKKE MEDLEM AF PLAN -- ELLER -- HENS SUBSCRIPTION ER IKKE AKTIV, GØR DÉT I stedet}
// end if;
```

Bemærk, at `**wu_has_plan**` kræver et "Plan ID" for at fungere.

For at få ID'et på en plan kan du gå til **Ultimate Multisite > Products**. ID'et for hvert produkt vil blive vist til højre i tabellen.

Bemærk, at brugere kun kan abonnere på en **Plan**, ikke et Paket eller en Service, da de kun er tillæg til en **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Løsning af CORS-problemer med Font-Icons i kortlagte domæner {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## Løsning af CORS-problemer med Font-Icons i kortlagte domæner {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Efter du har kortlagt en domæne til et undersite kan du opdage, at siden har problemer med at indlæse brugerdefinerede skrifttyper. Det skyldes en krydsdomæneblokering i dine serverindstillinger.

Da skrifttilfældet næsten altid indlæses direkte fra CSS, er vores domæne-mapping plugin ikke i stand til at omskrive URL'erne til at bruge det kortlagte domæne i stedet for det oprindelige. Derfor skal du ændre dine serverkonfigurationsfiler for at løse problemet.

Her er kodeudsnit til at løse problemet for Apache og NGINX. Disse ændringer kræver avanceret viden om serverkonfigurationsfiler (.htaccess filer og NGINX konfigurationsfiler). Hvis du ikke er komfortabel med selv at foretage disse ændringer, send denne side til din hostingsudbyders supportagenter, hvis du har brug for hjælp.

### Apache {#apache}

Til din .htaccess fil skal du tilføje:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

I din serverkonfigurationsfil (placeringen varierer fra server til server) skal du tilføje:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
