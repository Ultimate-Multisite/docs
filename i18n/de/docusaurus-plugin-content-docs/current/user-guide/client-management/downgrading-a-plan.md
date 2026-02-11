---
title: Plan zurückstufen
sidebar_position: 7
_i18n_hash: 6513875b161bca42a0dc0612f40b0ce5
---
# Plan zurückstufen (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Das Zurückstufen eines Plans oder Abonnements ist eine häufige Aktion, die Ihre Kunden durchführen könnten, wenn sie ein begrenztes Budget haben oder entschieden haben, dass sie nicht viele Ressourcen benötigen, um ihren Subsite zu betreiben.

## Wie man einen Plan zurückstufen kann

Ihre Kunden können ihren Plan jederzeit zurückstufen, indem sie sich im Admin-Dashboard ihres Subsite anmelden und auf **Change** unter ihrer Kontoseite klicken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sprLyB2iMU.png)

Nach dem Klicken auf die Schaltfläche **Change** wird der Benutzer/Kunde zur Checkout-Seite weitergeleitet, auf der er den Plan auswählen kann, zu dem er sein Abonnement ändern möchte.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aTnhJPFVFh.png)

In diesem Beispiel stellen wir den Plan von **Premium** auf **Free** zurück.

Um fortzufahren, muss der Benutzer einfach auf die Schaltfläche **Complete Checkout** klicken. Danach wird er zurück zur Kontoseite geführt, die eine Meldung über die ausstehende Änderung der Mitgliedschaft anzeigt. Die Änderungen treten bei der **nächsten Abrechnungsperiode** des Kunden in Kraft.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E2qcjxzDDG.png)

### Was passiert, wenn ein Benutzer seinen Plan zurückstufen möchte

Es ist wichtig zu beachten, dass das Zurückstufen des Plans die bestehende Konfiguration im Subsite des Benutzers nicht verändert.

Es ändert das Site-Template nicht automatisch, da eine Änderung des Site-Templates den Subsite vollständig löschen und zurücksetzen würde. Dies soll unnötigen Datenverlust vermeiden. Daher bleiben Speicherplatz, Themes, Plugins usw. erhalten, außer den Beiträgen.

Wir verstehen, dass Ihre Hauptsorge die Limits und Quoten sind, die Sie unter jedem Plan festgelegt haben, aber wir müssen die Schäden berücksichtigen, die entstehen würden, wenn wir die Konfigurationen des Subsite löschen oder ändern würden.

Für Beiträge, die das unter dem Plan festgelegte Limit überschreiten, haben Sie drei verschiedene Optionen: **Behalte die Beiträge wie sie sind** *,* **Bewege die Beiträge in den Papierkorb** *,* oder **Bewege die Beiträge in Entwürfe** *.* Sie können dies unter den Ultimate Multisite-Einstellungen konfigurieren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ztHV8cZDG0.png)

### Was passiert mit der Zahlung

In Version 2.0 erfordert es keine Anpassungen der Zahlung in Bezug auf Proration.

Dies liegt daran, dass das System wartet, bis die bestehende Mitgliedschaft ihren **Abrechnungszyklus abschließt**, bevor der neue Plan/Mitgliedschaft in Kraft tritt. Der neue Abrechnungsbetrag für die neue Mitgliedschaft wird automatisch angewendet und bei der nächsten Abrechnungsperiode berechnet.
