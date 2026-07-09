---
title: Einen Tarif upgraden
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Einen Tarif upgraden (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Ihre Kunden können ihre Tarife jederzeit upgraden. Sie können entweder auf einen anderen Tarif upgraden oder zusätzliche Dienste oder Pakete kaufen, die Sie in Ihrem Netzwerk anbieten.

In diesem Tutorial behandeln wir, wie sie ihren Tarif upgraden können und was nach dem Upgrade-Prozess passiert.

Um ihren Tarif zu upgraden, sollten Ihre Kunden auf ihr Dashboard zugreifen und zur Seite **Account** gehen.

![Kunden-Subsite-Dashboard mit sichtbarem Account-Menülink](/img/account-page/account-menu.png)

Auf der Account-Seite wird ihnen ihre aktuelle Mitgliedschaft und der damit verbundene Tarif angezeigt. Um auf einen anderen Tarif upzugraden, müssen sie oben rechts im Abschnitt **Ihre Mitgliedschaft** auf **Ändern** klicken.

![Account-Seite mit Karte „Ihre Mitgliedschaft“ und Ändern-Button](/img/account-page/membership-change-button.png)

Sie werden zu einem Bezahlformular weitergeleitet, in dem alle verfügbaren Tarife angezeigt werden.

Sie können außerdem die **für ihren aktuellen Tarif verfügbaren Dienste und Pakete** sehen, falls sie nur einen bestimmten Dienst oder ein bestimmtes Paket kaufen möchten (wie unbegrenzte Besuche oder Speicherplatz in unserem Beispiel hier) und den Tarif nicht upgraden möchten.

![Upgrade-Auswahl mit verfügbaren Tarifen und Paketen auf Kundenseite](/img/account-page/upgrade-picker.png)

Nachdem sie das Produkt ausgewählt haben, das sie kaufen möchten, sehen sie, wie viel sie jetzt bezahlen müssen – ohne eventuell vorhandenes Guthaben – und wie viel ihnen am nächsten Abrechnungsdatum berechnet wird.

Wenn das Produkt ein anderer Tarif ist und die Zahlung normalerweise zwischen Mitgliedschaftsabbuchungen erfolgt, erhalten sie eine Gutschrift für den im ersten Tarif gezahlten Betrag.

![Upgrade-Zahlungsübersicht mit angewendeter Gutschrift und nächstem Abrechnungsbetrag](/img/account-page/upgrade-summary.png)

Wenn sie einen Tarif oder ein Paket auswählen, das an der aktuellen Subscription nichts ändert, sehen sie eine Nachricht, die dies erklärt.

![Hinweis, wenn der ausgewählte Tarif die Subscription nicht ändert](/img/account-page/upgrade-no-change.png)

Nachdem der Checkout abgeschlossen ist, werden die neuen Produkte dem Account Ihrer Kunden hinzugefügt und alle Limits oder Funktionen der neuen Produkte werden sofort hinzugefügt: Besuche, Speicherplatz, Beiträge usw.

##

##

## Upgrade- und Downgrade-Pfade

Bei jedem Ihrer Produkte gibt es einen Tab **Upgrades & Downgrades**. Die erste Option in diesem Tab ist ein Feld namens **Tarifgruppe**.

**Tarifgruppen** ermöglichen es Ihnen, Ultimate Multisite mitzuteilen, dass bestimmte Tarife zur gleichen „Familie“ gehören und daher verwendet werden sollten, um Optionen für Upgrade-/Downgrade-Pfade zu erstellen.

![Produktbearbeitung, Tab „Upgrades und Downgrades“ mit Feld „Tarifgruppe“](/img/config/product-upgrades-plan-group.png)

Angenommen, Sie haben einen **kostenlosen Tarif**, einen **Basic-Tarif** und einen **Premium-Tarif** verfügbar. Sie möchten, dass Benutzer, die unter dem **kostenlosen Tarif** abonniert sind, nur auf den **Premium-Tarif** upgraden können, und Sie möchten nicht, dass ihnen der „Basic-Tarif“ als Upgrade-Option angezeigt wird. Alles, was Sie tun müssen, ist, sowohl dem kostenlosen als auch dem Premium-Tarif denselben Tarifgruppennamen zuzuweisen, wie in den Screenshots unten gezeigt.

![Produktseite des kostenlosen Tarifs mit zugewiesener High-End-Tarifgruppe](/img/config/product-upgrades-free.png)

![Produktseite des Premium-Tarifs mit zugewiesener High-End-Tarifgruppe](/img/config/product-upgrades-premium.png)

Dies sollte Ultimate Multisite mitteilen, dass es im Netzwerk eine „Familie“ von Tarifen namens **High End** gibt. Beim Anbieten von Upgrades oder Downgrades werden dem Benutzer nur Tarife aus derselben Familie als Option angezeigt.
