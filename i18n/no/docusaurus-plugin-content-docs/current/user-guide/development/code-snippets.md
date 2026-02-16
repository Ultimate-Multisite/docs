---
title: Kodesnuttar
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kodesnutter for v2

Kodesnutter for **WordPress** brukes til å utføre bestemte handlinger som ellers ville krevd en egen liten plugin. Slike kodesnutter plasseres i en av WordPress sine kjernefiler eller temafiler (vanligvis functions.php-filen i temaet ditt), eller de kan brukes som en MU-plugin.

I denne artikkelen viser vi deg tre kodesnutter som kan brukes med **Ultimate Multisite v2**:

  * [**Endre plasseringen av Konto-menyelementet**](#changing-the-position-of-the-account-menu-item)

  * [**Hvordan sjekke om brukeren har en bestemt plan og/eller et aktivt abonnement**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Løse CORS-problemer med font-ikoner på tilknyttede domener**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Endre plasseringen av Konto-menyelementet

For å endre plasseringen av Konto-menyelementet i kundens Dashboard, legger du bare til følgende kodesnutt i functions.php i hovedsiden din sitt aktive tema. Du kan også plassere snutten i en av dine mu-plugins eller egendefinerte plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Juster denne verdien for å plassere menyen i ønsket posisjon.

## Hvordan sjekke om brukeren har en bestemt plan og/eller et aktivt abonnement

Som nettverksadministrator kan det hende du trenger å lage egendefinerte funksjoner som utfører grunnleggende handlinger eller gjør en tjeneste/funksjon tilgjengelig for en utvalgt gruppe abonnenter eller sluttbrukere, basert på statusen til abonnementet deres og hvilken plan de abonnerer på.

Disse innebygde funksjonene i Ultimate Multisite hjelper deg med dette.

For å sjekke om brukeren er medlem av en bestemt plan, kan du bruke funksjonen:

wu_has_plan($user_id, $plan_id)

For å sjekke om abonnementet er aktivt, kan du bruke funksjonen:

wu_is_active_subscriber($user_id)

Nedenfor er et eksempel på en kodesnutt som sjekker om den nåværende brukeren har en bestemt plan (_Plan-ID 50_) og om brukerens abonnement er aktivt.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // BRUKEREN ER MEDLEM AV PLANEN OG ABONNEMENTET ER AKTIVT, UTFØR HANDLING} else { // BRUKEREN ER IKKE MEDLEM AV PLANEN -- ELLER -- ABONNEMENTET ER IKKE AKTIVT, UTFØR ANNEN HANDLING} // end if;

Merk at _**wu_has_plan**_ krever en «Plan-ID» for å fungere.

For å finne ID-en til en plan, går du til **Ultimate Multisite > Products**. ID-en til hvert produkt vises til høyre i tabellen.

Merk at brukere bare kan abonnere på en **Plan**, ikke en pakke eller tjeneste, siden disse kun er tillegg til en **Plan**.

![Produktliste som viser plan-ID-er](/img/admin/products-list.png)

## Løse CORS-problemer med font-ikoner på tilknyttede domener
## Løse CORS-problemer med font-ikoner på tilknyttede domener

Etter at du har tilknyttet et domene til en underside, kan det hende at siden har problemer med å laste egendefinerte fonter. Dette skyldes en cross-origin-blokkering i serverinnstillingene dine.

Siden fontfiler nesten alltid lastes direkte fra CSS, klarer ikke vår domain mapping-plugin å omskrive URL-ene til å bruke det tilknyttede domenet i stedet for det opprinnelige. For å løse problemet må du derfor endre serverkonfigurasjonsfilene dine.

Nedenfor finner du kodesnutter for å løse problemet for Apache og NGINX. Disse endringene krever avansert kunnskap om serverkonfigurasjonsfiler (.htaccess-filer og NGINX-konfigurasjonsfiler). Hvis du ikke er komfortabel med å gjøre disse endringene selv, kan du sende denne siden til supportavdelingen hos hostingleverandøren din når du ber om hjelp.

### Apache

I .htaccess-filen din, legg til:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

I serverkonfigurasjonsfilen din (plasseringen varierer fra server til server), legg til:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
