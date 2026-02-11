---
title: GitHub Code‑Schnipsel
sidebar_position: 3
_i18n_hash: fad95473848ba3a1089d657550a45182
---
# Wie man Ultimate Multisite Snippets in unserem GitHub-Repository verwendet

Es gibt Code-Snippets im GitHub-Repository, die häufig von Ultimate Multisite-Benutzern angefordert werden, die kleine Funktionen hinzufügen möchten, wie z. B. das Hinzufügen eines Google Analytics-Skripts auf Anmeldeseiten oder das Verbergen eines Meta-Boxes im Admin-Dashboard.

Dieser Artikel zeigt Ihnen, wie Sie diese Codes verwenden oder genauer gesagt, wo Sie sie platzieren.

Sie können die Snippets unter dem folgenden Link finden.

https://github.com/next-press/wp-ultimo-snippets/

Es gibt 2 Möglichkeiten, den Code hinzuzufügen

  1. In der functions.php-Datei Ihres Themes.

  2. Must-Use Plugins (mu-plugins)

# Wie man das Snippet in der functions.php-Datei Ihres Themes hinzufügt.

  1. Melden Sie sich im Admin-Dashboard Ihres WordPress-Netzwerks an und gehen Sie zu Themes > Theme Editor (siehe Screenshot unten).

  2. Auf der Seite „Edit Themes“ stellen Sie sicher, dass Ihr aktives Theme im Dropdown-Feld oben rechts auf Ihrem Bildschirm ausgewählt ist (#3 im Screenshot unten).

  3. Klicken Sie auf die Datei functions.php unter dem Abschnitt „Theme Files“, um die Datei zu laden. Scrollen Sie nach unten zum Ende und fügen Sie das Ultimate Multisite Snippet ein, das Sie aus dem GitHub-Repository erhalten haben.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

# Wie man Must-Use Plugins (mu-plugins) erstellt

WordPress verfügt über eine Funktion, mit der Sie benutzerdefinierte Funktionalität namens „Must-Use Plugins“, kurz „mu-plugins“, laden können. Diese speziellen mu-plugins werden vor allen anderen regulären Plugins geladen und können nicht deaktiviert werden. In einem Multisite-Netzwerk wird der Code in diesen mu-plugins auf allen Sites Ihrer Installation geladen.

1\. Verwenden Sie FTP oder SSH, um auf das Dateisystem Ihrer WordPress-Installation zuzugreifen.

2\. Erstellen Sie im wp-content-Verzeichnis Ihrer WordPress-Installation ein neues Verzeichnis namens: mu-plugins.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-image.png)

3\. Erstellen Sie auf Ihrem Computer eine neue PHP-Datei namens wu-snippet.php mit Notepad oder einem beliebigen Code-Editor.

4\. Platzieren Sie das Ultimate Multisite Code-Snippet, das Sie aus dem GitHub-Repository erhalten haben, in die Datei und speichern Sie sie. Sie können auch diesen Code oben im Code-Snippet hinzufügen, um Ihr mu-Plugin zu kennzeichnen.
