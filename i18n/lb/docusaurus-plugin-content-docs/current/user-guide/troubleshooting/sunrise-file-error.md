---
title: Fehler Sunrise File
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Fehler bi de Installation vo Sunrise File

D'sunrise.php Datei isch e spezielli Datei, wo WordPress sueche mues, wenn es sich selber startet (bootstraps). Damit WordPress die sunrise.php Datei chann erkenne, muess sie im **wp-content Ordner** si.

Wenn Sie Ultimate Multisite aktiviere und de Setup Wizard durefüehre wie de uf em Screenshot, probiert Ultimate Multisite, üsi sunrise.php Datei in de wp-content Ordner z'kopiere.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Meischtens chönne mir d'Datei erfolgreich kopiere und alles funktioniert. Aber wenn öppis nöd richtig igstellt isch (zum Bischpil d'Ordnerberechtigunge), chönnt Sie e Situation erreiche, wo Ultimate Multisite die Datei nöd chann kopiere.

Wenn Sie d'Fehlermeldig vo Ultimo läse, gsehnd Sie genau das do: **Sunrise copy failed** (Kopie vo Sunrise fehlgeschlage).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Um das z'behebe, chönne Sie eifach d'sunrise.php Datei i de wp-ultimo Plugin Ordner kopiere und sie in Ihren wp-content Ordner iichlebe. Nach dem händ Sie d'Wizard-Seite neu glade, sölled d'Prüefige durchgange si.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> In jedem Fall chönnt das e allgemeini Prüefig vo Ihre Ordnerberechtigunge wert sii, um in Zukunft Problem z'vermeide (nöd nur mit Ultimate Multisite, sondern au mit andere Plugins und Themes).

S'**Health Check Tool**, wo Teil vo WordPress isch (Sie chönd es über Ihr Haupt-Site **admin panel > Tools > Health Check** erreiche), chan Ihnen zeige, ob Ihre Ordnerberechtigunge so igstellt sind, dass sie Problem mit WordPress verursache chönnt.

<!-- Screenshot nöd verfügbar: WordPress Health Check Tool zeigt de Status vo de Ordnerberechtigunge a -->
