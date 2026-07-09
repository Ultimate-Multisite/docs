---
title: Code-Schnipselchen
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# Code Snippets für v2 {#code-snippets-for-v2}

Im Grunde werdet Code-Snippets für **WordPress** verwendet, um bestimmte Aktionen durchzuführen, die sonst ewig enge Plugins bräuchten. Solchi Code-Snippets platziere mer in einer der WordPress Core- oder Theme-Dateien (meistens in de functions.php vo dim Theme) oder sie chönne als MU Plugin brucht werde.

In däm Artikel zeiged mir drei Code-Snippets, wo mer mit **Ultimate Multisite v2** bruche chönne:

  * [**Ändere d'Position vom Account-Menüitem**](#changing-the-position-of-the-account-menu-item)

  * [**Wie mer checkt, ob de User unter eme bestimmte Plan isch und/oder en aktivi Abonnement het**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Fixe CORS-Problem mit Font-Icons in mappte Domains**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Ändere d'Position vom Account-Menüitem {#changing-the-position-of-the-account-menu-item}

Um d'Position vom Account-Menüitem uf em Dashboard vo dim Kunde z'ändere, füeg eifach de folgendi Code-Snippet in d'functions.php vo dim Hauptsite-Theme ii. Du chönntsch de Snippet au i eis vo dine mu-Plugins oder Custom Plugins ilege.

add_filter('wu_my_account_menu_position', function() { return 10; // Pass die Wert a, um s'Menü an d'gewünschti Position z'setze.

Om z'aktcheck ob d'Abonnement aktiv isch, chönntet Sie d'Funktion bruche:

`wu_is_active_subscriber($user_id)`

Unten isch es Beispiel-Snippet, wo prüeft, öb de aktuelli Benutzer unter eme bestimmte Plan (_Plan ID 50_) isch und ob s'Abonnement vom Benutzer aktiv isch.

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;`

Mer sölle bemerke, dass `**wu_has_plan**` en "Plan ID" brucht, damit er funktioniert.

Om d'ID vo eme Plan z'bekomme, chönntet Sie uf **Ultimate Multisite > Products** goh. D'ID vo jedem Produkt wird rechts i de Tabelle aazeigt.

Mer sölle bemerke, dass Benutzer nur uf en **Plan** abonniere chönd, aber nöd uf es Paket oder e Service, will die nume Ergänzigä zu eme **Plan** sind.

![Products list showing plan IDs](/img/admin/products-list.png)

## CORS-Problem mit Font-Icons in mappte Domains behebe {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## CORS-Problem mit Font-Icons in mappte Domains behebe {#fixing-cors-issues-with-font-icons-in-mapped-domains}

Nachdem Sie en Domain uf e Unterseite abgebunde händ, chönntet Sie feststelle, dass d'Site Problem het bim Ladä vo benutzerdefinierten Schrifte (custom fonts). Das wird dur e cross-origin block i de Server-Iistellige verursacht.

Will Font-Dateie fast immer direkt us CSS gelade wärde, cha üsi Domain-Mapping-Plugin d'URLs nöd umschriibe, um d'mappti Domain statt de ursprüngliche z'bruche. Drum müend Sie d'Server-Konfigurationsdatei ändere, um s'Problem z'behebe.

Hier sind d'Code-Snippets, um s'Problem für Apache und NGINX z'löse. Die Änderige bruche en fortgschritteni Kenntnis vo Serverkonfigurationsdateien (.htaccess-Dateien und NGINX-Konfigurationsdateien). Wenn Dir das selber mache mit de Änderige nöd bequem isch, schick die Siite an d'Support-Agent vo Dim Hosting-Provider, wenn Dir Hilf bruchsch.

### Apache {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

In Din .htaccess-Datei füegt Dir folgendes bi:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#apache}

In Din Serverkonfigurationsdatei (de Ort variiert vo Server zu Server), füegt Dir bi:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
