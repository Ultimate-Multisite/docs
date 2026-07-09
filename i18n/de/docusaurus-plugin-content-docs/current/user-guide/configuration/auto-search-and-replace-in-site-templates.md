---
title: Automatisches Suchen und Ersetzen in Website-Vorlagen
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatisches Suchen und Ersetzen in Website-Vorlagen (v2) {#auto-search-and-replace-in-site-templates-v2}

_**Dieses Tutorial erfordert WP UItimo Version 2.x.**_

Eine der leistungsstärksten Funktionen von Ultimate Multisite ist die Möglichkeit, dem Registrierungsformular beliebige Text-, Farb- und Auswahlfelder hinzuzufügen. Sobald wir diese Daten erfasst haben, können wir sie verwenden, um die Inhalte in bestimmten Teilen der ausgewählten Website-Vorlage vorab auszufüllen. Wenn die neue Website dann veröffentlicht wird, ersetzt Ultimate Multisite die Platzhalter durch die tatsächlichen Informationen, die während der Registrierung eingegeben wurden.

Zum Beispiel kannst du deine Vorlagen-Websites mit Platzhaltern erstellen. Platzhalter sollten in doppelte geschweifte Klammern gesetzt werden – {{placeholder_name}}.

Dann kannst du einfach ein passendes Registrierungsfeld hinzufügen, um diese Daten zu erfassen.

Dein Kunde kann dieses Feld dann während der Registrierung ausfüllen.

Ultimate Multisite ersetzt die Platzhalter dann automatisch durch die vom Kunden bereitgestellten Daten.

## **Das Problem „Vorlage voller Platzhalter“ lösen** {#solving-the-template-full-of-placeholders-problem}

All das ist großartig, aber wir stoßen auf ein unschönes Problem: Unsere Website-Vorlagen – die von unseren Kunden besucht werden können – sind nun voller unschöner Platzhalter, die nicht viel aussagen.

Um das zu lösen, bieten wir die Möglichkeit, Scheinwerte für die Platzhalter festzulegen, und wir verwenden diese Werte, um ihre Inhalte auf den Vorlagen-Websites zu suchen und zu ersetzen, während deine Kunden sie besuchen.

Du kannst auf den Editor für Vorlagen-Platzhalter zugreifen, indem du zu **Ultimate Multisite > Einstellungen > Websites** gehst, zum Bereich Website-Vorlagenoptionen scrollst und dann auf den Link **Platzhalter bearbeiten** klickst.

![Bereich Website-Vorlagenoptionen auf der Einstellungsseite Websites](/img/config/settings-sites-templates-section.png)

Das führt dich zum Inhaltseditor der Platzhalter, in dem du Platzhalter und ihre jeweiligen Inhalte hinzufügen kannst.

![Einstiegspunkt des Editors für Vorlagen-Platzhalter](/img/config/settings-sites-templates-section.png)
