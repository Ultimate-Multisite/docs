---
title: Sunrise-Dateifehler
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Fehler beim Installieren der Sunrise-Datei {#error-installing-the-sunrise-file}

Die Datei sunrise.php ist eine spezielle Datei, nach der WordPress sucht, während es sich selbst initialisiert. Damit WordPress die Datei sunrise.php erkennen kann, muss sie sich im **wp-content-Ordner** befinden.

Wenn du Ultimate Multisite aktivierst und den Einrichtungsassistenten wie auf dem Screenshot durchläufst, versucht Ultimate Multisite, unsere Datei sunrise.php in den wp-content-Ordner zu kopieren.

<!-- Screenshot nicht verfügbar: Seite des Einrichtungsassistenten mit Installationsschritt für sunrise.php -->

Meistens können wir die Datei erfolgreich kopieren und alles funktioniert. Wenn jedoch etwas nicht richtig eingerichtet ist (zum Beispiel Ordnerberechtigungen), kann es passieren, dass Ultimate Multisite die Datei nicht kopieren kann.

Wenn du die Fehlermeldung von Ultimo liest, siehst du, dass genau das hier passiert ist: **Kopieren von Sunrise fehlgeschlagen**.

<!-- Screenshot nicht verfügbar: Fehlermeldung mit Kopieren von Sunrise fehlgeschlagen -->

Um das zu beheben, kannst du einfach die Datei sunrise.php im wp-ultimo Plugin-Ordner kopieren und in deinen wp-content-Ordner einfügen. Nachdem du das getan hast, lade die Seite des Assistenten neu, und die Prüfungen sollten erfolgreich sein.

<!-- Screenshot nicht verfügbar: Dateimanager mit sunrise.php im wp-ultimo Plugin-Ordner --> In jedem Fall kann dies eine allgemeine Überprüfung deiner Ordnerberechtigungen rechtfertigen, um zukünftige Probleme zu vermeiden (nicht nur mit Ultimate Multisite, sondern auch mit anderen Plugins und Themes).

Das **Website-Zustand-Tool**, das Teil von WordPress ist (du kannst es über den **Adminbereich > Werkzeuge > Website-Zustand** deiner Hauptwebsite aufrufen), kann dir mitteilen, ob deine Ordnerberechtigungen auf Werte gesetzt sind, die Probleme mit WordPress verursachen könnten.

<!-- Screenshot nicht verfügbar: WordPress Website-Zustand-Tool mit Status der Ordnerberechtigungen -->
