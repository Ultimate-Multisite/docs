---
title: Kodsnuttar
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Kodsnuttar för v2

Kodsnuttar för **WordPress** används i grunden för att utföra vissa åtgärder som annars skulle kräva ett dedikerat mindre plugin. Sådana kodsnuttar placeras i någon av WordPress kärn- eller temafiler (vanligtvis functions.php-filen i ditt tema) eller så kan de användas som ett MU-plugin.

I den här artikeln visar vi tre kodsnuttar som kan användas med **Ultimate Multisite v2**:

  * [**Ändra positionen för menyalternativet Konto**](#changing-the-position-of-the-account-menu-item)

  * [**Hur du kontrollerar om användaren har en viss plan och/eller har en aktiv prenumeration**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Åtgärda CORS-problem med typsnittikoner på mappade domäner**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ändra positionen för menyalternativet Konto

För att ändra positionen för menyalternativet Konto i din kunds Dashboard lägger du bara till följande kodsnutt i functions.php för ditt huvudsajts aktiva tema. Du kan också lägga snutten i ett av dina mu-plugins eller anpassade plugins.

add_filter('wu_my_account_menu_position', function() { return 10; // Justera det här värdet för att placera menyn på önskad position.

## Hur du kontrollerar om användaren har en viss plan och/eller har en aktiv prenumeration

Som nätverksadministratör kan du behöva skapa anpassade funktioner som utför grundläggande åtgärder eller gör en tjänst/funktion tillgänglig för en utvald grupp av prenumeranter eller slutanvändare, baserat på statusen för deras prenumeration och vilken plan de prenumererar på.

Dessa inbyggda funktioner i Ultimate Multisite hjälper dig med det.

För att kontrollera om användaren är medlem i en viss plan kan du använda funktionen:

wu_has_plan($user_id, $plan_id)

För att kontrollera om prenumerationen är aktiv kan du använda funktionen:

wu_is_active_subscriber($user_id)

Nedan följer ett exempel på en kodsnutt som kontrollerar om den aktuella användaren har en specifik plan (_Plan-ID 50_) och om användarens prenumeration är aktiv.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ANVÄNDAREN ÄR MEDLEM I PLANEN OCH PRENUMERATIONEN ÄR AKTIV, GÖR SAKER} else { // ANVÄNDAREN ÄR INTE MEDLEM I PLANEN -- ELLER -- PRENUMERATIONEN ÄR INTE AKTIV, GÖR ANDRA SAKER} // end if;

Observera att _**wu_has_plan**_ kräver ett "Plan-ID" för att fungera.

För att hämta ID för en plan går du till **Ultimate Multisite > Products**. ID för varje produkt visas till höger i tabellen.

Observera att användare bara kan prenumerera på en **Plan**, inte ett Paket eller en Tjänst, eftersom de endast är tillägg till en **Plan**.

![Produktlista som visar plan-ID:n](/img/admin/products-list.png)

## Åtgärda CORS-problem med typsnittikoner på mappade domäner
## Åtgärda CORS-problem med typsnittikoner på mappade domäner

Efter att ha mappat en domän till en undersajt kan du upptäcka att sajten har problem med att ladda anpassade typsnitt. Detta orsakas av en cross-origin-blockering i dina serverinställningar.

Eftersom typsnittsfiler nästan alltid laddas direkt från CSS kan vårt domänmappnings-plugin inte skriva om URL:erna för att använda den mappade domänen istället för den ursprungliga, så för att åtgärda problemet behöver du ändra dina serverkonfigurationsfiler.

Nedan finns kodsnuttar för att åtgärda problemet för Apache och NGINX. Dessa ändringar kräver avancerad kunskap om serverkonfigurationsfiler (.htaccess-filer och NGINX-konfigfiler). Om du inte känner dig bekväm med att göra dessa ändringar själv, skicka den här sidan till din hostingleverantörs support när du ber om hjälp.

### Apache

I din .htaccess-fil, lägg till:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

I din serverkonfigurationsfil (platsen varierar från server till server), lägg till:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
