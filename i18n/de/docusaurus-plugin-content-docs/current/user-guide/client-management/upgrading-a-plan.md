---
title: Plan aktualisieren
sidebar_position: 11
_i18n_hash: b0c02a1c1b12946cb507e8486e0d74e3
---
# Plan upgraden (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Ihre Kunden können ihre Pläne jederzeit upgraden. Sie können entweder auf einen anderen Plan upgraden oder zusätzliche Dienstleistungen oder Pakete erwerben, die Sie in Ihrem Netzwerk anbieten.

In diesem Tutorial zeigen wir, wie sie ihren Plan upgraden können und was nach dem Upgrade-Prozess passiert.

Um ihren Plan zu upgraden, sollten Ihre Kunden ihr Dashboard öffnen und zur Seite **Account** gehen.

![Customer dashboard with Account page link](/img/admin/memberships-list.png)

Auf der Seite **Account** wird ihnen ihre aktuelle Mitgliedschaft und der damit verbundene Plan angezeigt. Um auf einen anderen Plan zu upgraden, müssen sie auf **Change** in der oberen rechten Ecke des Abschnitts **Your Membership** klicken.

![Your Membership section with Change button](/img/admin/memberships-list.png)

Sie werden zu einem Checkout-Formular weitergeleitet, in dem alle verfügbaren Pläne angezeigt werden.

Sie können auch die **services and packages available for their current plan** sehen, falls sie nur einen bestimmten Service oder ein Paket kaufen möchten (wie unbegrenzte Besuche oder Speicherplatz in unserem Beispiel hier) und nicht den Plan upgraden.

![Checkout form showing available plans and packages](/img/admin/memberships-list.png)

Nachdem sie das gewünschte Produkt ausgewählt haben, sehen sie, wie viel sie sofort bezahlen müssen – ohne vorhandene Gutschrift – und wie viel sie am nächsten Abrechnungsdatum belastet werden.

In der Regel erhalten sie bei einem anderen Plan und einer Zahlung zwischen zwei Mitgliedschaftsgebühren eine Gutschrift für den Betrag, der im ersten Plan bezahlt wurde.

![Upgrade payment summary with credit and next billing amount](/img/admin/memberships-list.png)

Wenn sie einen Plan oder ein Paket auswählen, das nichts an der aktuellen Abonnement ändert, sehen sie eine entsprechende Meldung.

![Message when selected plan does not change the subscription](/img/admin/memberships-list.png)

Nach Abschluss des Checkouts werden die neuen Produkte dem Konto Ihrer Kunden hinzugefügt und alle Limits oder Funktionen der neuen Produkte werden sofort hinzugefügt: Besuche, Speicherplatz, Beiträge usw...

## 

## 

## Upgrade- und Downgrade-Pfade

Auf jedem Ihrer Produkte haben Sie einen **Up & Downgrades**-Tab. Die erste Option auf diesem Tab ist ein Feld namens **Plan Group**.

**Plan groups** ermöglichen es Ihnen, Ultimate Multisite mitzuteilen, dass bestimmte Pläne zur selben „Familie“ gehören, und sollten daher verwendet werden, um Upgrade/Downgrade-Pfade zu erstellen.

Beispielsweise haben Sie einen **Free plan**, einen **Basic Plan** und einen **Premium Plan** verfügbar. Sie möchten, dass Benutzer, die unter dem **Free Plan** abonniert sind, nur auf den **Premium Plan** upgraden können und nicht den „Basic Plan“ als Upgrade-Option sehen. Alles, was Sie tun müssen, ist, beiden Plänen denselben Plan Group-Namen zuzuweisen, wie in den untenstehenden Screenshots gezeigt.

![Up and Downgrades tab with Plan Group field](/img/config/product-upgrades.png)

![Free Plan with High End plan group assigned](/img/config/product-upgrades.png)

![Premium Plan with High End plan group assigned](/img/config/product-upgrades.png)

Damit soll Ultimate Multisite mitteilen, dass es eine „Familie“ von Plänen im Netzwerk namens **High End** gibt. Bei Angeboten von Upgrades oder Downgrades werden nur Pläne derselben Familie als Option für den Benutzer angezeigt.
