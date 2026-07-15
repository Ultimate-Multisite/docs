---
title: Codefragmenten
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Codefragmenten voor v2

In principe worden codefragmenten voor **WordPress** gebruikt om bepaalde acties uit te voeren waarvoor anders mogelijk een aparte kleinere plugin nodig zou zijn. Zulke codefragmenten worden geplaatst in een van de WordPress-core- of theme-bestanden (meestal het functions.php-bestand van je theme) of ze kunnen worden gebruikt als MU plugin.

In dit artikel laten we je drie codefragmenten zien die kunnen worden gebruikt met **Ultimate Multisite v2** :

  * [**De positie van het Account-menu-item wijzigen**](#changing-the-position-of-the-account-menu-item)

  * [**Controleren of de gebruiker onder een bepaald pakket valt en/of een actief abonnement heeft**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**CORS-problemen met Font-Icons in gekoppelde domeinen oplossen**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## De positie van het Account-menu-item wijzigen {#changing-the-position-of-the-account-menu-item}

Om de positie van het Account-menu-item op de Dashboard van je klant te wijzigen, voeg je gewoon het volgende codefragment toe aan de functions.php van het actieve theme van je hoofdsite. Je kunt het fragment ook in een van je mu-plugins of aangepaste plugins plaatsen.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Controleren of de gebruiker onder een bepaald pakket valt en/of een actief abonnement heeft {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Als netwerkbeheerder moet je mogelijk aangepaste functies maken die basisacties uitvoeren of een dienst/functie beschikbaar maken voor een geselecteerde groep abonnees of eindgebruikers, op basis van de status van hun abonnement en het pakket waarop ze geabonneerd zijn.

Deze native functies van Ultimate Multisite helpen je daarbij.

Om te controleren of de gebruiker lid is van een bepaald pakket, kun je de functie gebruiken:

wu_has_plan($user_id, $plan_id)

Om te controleren of het abonnement actief is, kun je de functie gebruiken:

wu_is_active_subscriber($user_id)

Hieronder staat een voorbeeldfragment dat controleert of de huidige gebruiker onder een specifiek pakket valt (_Pakket-ID 50_) en of het gebruikersabonnement actief is.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Merk op dat _**wu_has_plan**_ een "Pakket-ID" vereist om te kunnen functioneren.

Om de ID van een pakket te krijgen, kun je naar **Ultimate Multisite > Producten** gaan. De ID van elk product wordt rechts in de tabel weergegeven.

Merk op dat gebruikers alleen geabonneerd kunnen zijn op een **Pakket** , niet op een pakketbundel of dienst, omdat die alleen add-ons zijn voor een **Pakket**.

![Productenlijst met pakket-ID's](/img/admin/products-list.png)

## CORS-problemen met Font-Icons in gekoppelde domeinen oplossen {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## CORS-problemen met Font-Icons in gekoppelde domeinen oplossen {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

Nadat je een domein aan een subsite hebt gekoppeld, kun je merken dat de site problemen heeft met het laden van aangepaste lettertypen. Dat wordt veroorzaakt door een cross-origin-blokkade in je serverinstellingen.

Omdat lettertypebestanden bijna altijd rechtstreeks vanuit CSS worden geladen, kan onze domain mapping plugin de URL's niet herschrijven om het gekoppelde domein te gebruiken in plaats van het oorspronkelijke domein. Om het probleem op te lossen, moet je daarom je serverconfiguratiebestanden aanpassen.

Hieronder staan codefragmenten om het probleem op te lossen voor Apache en NGINX. Deze wijzigingen vereisen geavanceerde kennis van serverconfiguratiebestanden (.htaccess-bestanden en NGINX-configuratiebestanden). Als je je er niet prettig bij voelt om die wijzigingen zelf aan te brengen, stuur deze pagina dan naar de supportmedewerkers van je hostingprovider wanneer je hulp nodig hebt.

### Apache {#apache}

Voeg in je .htaccess-bestand toe:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

Voeg in je serverconfiguratiebestand (de locatie verschilt per server) toe:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
