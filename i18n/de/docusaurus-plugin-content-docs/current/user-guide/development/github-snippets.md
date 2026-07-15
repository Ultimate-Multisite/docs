---
title: GitHub-Codeausschnitte
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# So verwendest du Ultimate Multisite-Snippets in unserem GitHub-Repository

Im GitHub-Repository sind Code-Snippets verfügbar, die häufig von Ultimate Multisite-Benutzern angefragt werden, die kleine Funktionen hinzufügen möchten, wie etwa das Hinzufügen eines Google-Analytics-Skripts auf Registrierungsseiten oder das Ausblenden einer Meta-Box aus dem Admin-Dashboard.

Dieser Artikel zeigt dir, wie du diese Codes verwendest, genauer gesagt, wo du sie platzierst.

Du findest die Snippets unter dem folgenden Link.

https://github.com/next-press/wp-ultimo-snippets/

Es gibt 2 Möglichkeiten, den Code hinzuzufügen

  1. In der functions.php-Datei deines Themes.

  2. Must-Use Plugins (mu-plugins)

# So fügst du das Snippet in der functions.php-Datei deines Themes hinzu.

  1. Melde dich in deinem WordPress-Netzwerk-Admin-Dashboard an und gehe zu Themes >Theme Editor (siehe Screenshot unten).

  2. Stelle auf der Seite „Themes bearbeiten“ sicher, dass dein aktives Theme im Dropdown-Feld oben rechts auf deinem Bildschirm ausgewählt ist (#3 im Screenshot unten).

  3. Klicke im Abschnitt „Theme-Dateien“ auf die Datei functions.php, um die Datei zu laden. Scrolle nach unten und füge das Ultimate Multisite-Snippet ein, das du aus dem GitHub-Repository erhalten hast.

<!-- Screenshot nicht verfügbar: WordPress Theme Editor zeigt die Bearbeitung der functions.php-Datei -->

# So erstellst du Must-Use Plugins (mu-plugins)

WordPress verfügt über eine Funktion, mit der du benutzerdefinierte Funktionen laden kannst, die „Must-Use Plugins“ oder kurz „mu-plugins“ genannt werden.

Diese speziellen mu-plugins werden vor allen anderen regulären Plugins geladen und können nicht deaktiviert werden. In einem Multisite-Netzwerk wird der Code in diesen mu-plugins auf allen Websites deiner Installation geladen.

1\. Verwende FTP oder SSH, um auf das Dateisystem deiner WordPress-Installation zuzugreifen.

2\. Erstelle im Verzeichnis wp-content deiner WordPress-Installation ein neues Verzeichnis mit dem Namen: mu-plugins.

<!-- Screenshot nicht verfügbar: Dateimanager zeigt das wp-content-Verzeichnis mit dem Ordner mu-plugins -->

3\. Erstelle auf deinem Computer mit Notepad oder einem beliebigen Code-Editor eine neue PHP-Datei namens wu-snippet.php.

4\. Füge das Ultimate Multisite-Code-Snippet, das du aus dem GitHub-Repository erhalten hast, in die Datei ein und speichere sie. Du kannst diesen Code auch über dem Code-Snippet hinzufügen, um dein mu plugin zu kennzeichnen.
