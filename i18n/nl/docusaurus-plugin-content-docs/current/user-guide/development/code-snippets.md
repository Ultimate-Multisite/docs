---
title: Codefragmenten
sidebar_position: 1
_i18n_hash: 5a7a9a95be84476f87a2c1ca0a4a2be5
---
# Codefragmenten voor v2

In principe worden codefragmenten voor **WordPress** gebruikt om bepaalde acties uit te voeren die anders een aparte kleinere plugin zouden vereisen. Zulke codefragmenten worden geplaatst in een van de WordPress-core- of themabestanden (meestal het functions.php-bestand van je thema) of kunnen als MU-plugin worden gebruikt.

In dit artikel laten we je drie codefragmenten zien die kunnen worden gebruikt met **Ultimate Multisite v2** :

  * [**Veranderen van de positie van het Account-menuitem**](#changing-the-position-of-the-account-menu-item)

  * [**Hoe te controleren of de gebruiker onder een bepaald plan valt en/of een actieve abonnement heeft**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Oplossen van CORS-problemen met Font-Icons in toegewezen domeinen**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Veranderen van de positie van het Account-menuitem {#changing-the-position-of-the-account-menu-item}

Om de positie van het Account-menuitem op het Dashboard van je klant te wijzigen, voeg je eenvoudig het volgende codefragment toe aan het functions.php-bestand van het actieve thema van je hoofdsite. Je kunt het fragment ook plaatsen in een van je mu-plugins of aangepaste plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## Hoe te controleren of de gebruiker onder een bepaald plan valt en/of een actieve abonnement heeft {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

Als netwerkbeheerder moet je mogelijk aangepaste functies maken die basisacties uitvoeren of een service/feature beschikbaar maken voor een geselecteerde groep abonnees of eindgebruikers, op basis van de status van hun abonnement en het plan waaronder ze zijn geabonneerd.

Deze native functies van Ultimate Multisite helpen je daarbij.

Om te controleren of de gebruiker lid is van een bepaald plan, kun je de functie gebruiken:

wu_has_plan($user_id, $plan_id)

Om te controleren of het abonnement actief is, kun je de functie gebruiken:

wu_is_active_subscriber($user_id)

Hieronder staat een voorbeeldfragment dat controleert of de huidige gebruiker onder een specifiek plan valt (_Plan ID 50_) en of het gebruikersabonnement actief is.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

Merk op dat _**wu_has_plan**_ een “Plan ID” vereist om te functioneren.

Om het ID van een plan te krijgen, kun je naar **Ultimate Multisite > Products** gaan. Het ID van elk product wordt rechts van de tabel weergegeven.

Merk op dat gebruikers alleen kunnen abonneren op een **Plan**, niet op een Package of Service, omdat deze alleen add-ons zijn voor een **Plan**.

![Products list showing plan IDs](/img/admin/products-list.png)

## Oplossen van CORS-problemen met Font-Icons in toegewezen domeinen {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Na het toewijzen van een domein aan een sub-site kun je merken dat de site moeite heeft met het laden van aangepaste lettertypen. Dit wordt veroorzaakt door een cross-origin blokkering in je serverinstellingen.

Aangezien lettertypebestanden vrijwel altijd rechtstreeks vanuit CSS worden geladen, kan onze domeinmapping-plugin de URL's niet herschrijven om het toegewezen domein te gebruiken in plaats van het oorspronkelijke, dus om het probleem op te lossen, moet je je serverconfiguratiebestanden aanpassen.

Hieronder staan codefragmenten om het probleem op te lossen voor Apache en NGINX. Deze wijzigingen vereisen geavanceerde kennis van serverconfiguratiebestanden (.htaccess-bestanden en NGINX-configuratiebestanden). Als je je niet comfortabel voelt bij het zelf aanbrengen van deze wijzigingen, stuur deze pagina dan naar de supportmedewerkers van je hostingprovider wanneer je hulp nodig hebt.

### Apache

Voeg het volgende toe aan je .htaccess-bestand:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

Voeg het volgende toe aan je serverconfiguratiebestand (de locatie varieert per server):

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
