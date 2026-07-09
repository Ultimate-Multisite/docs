---
title: Einen Tarif herabstufen
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Einen Plan herabstufen (v2) {#downgrading-a-plan-v2}

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Das Herabstufen eines Plans oder Abonnements ist eine häufige Aktion, die Ihre Kunden durchführen könnten, wenn sie ein begrenztes Budget haben oder entschieden haben, dass sie nicht viele Ressourcen benötigen, um ihre Unterwebsite zu betreiben.

## So stufen Sie einen Plan herab {#how-to-downgrade-a-plan}

Ihre Kunden können ihren Plan jederzeit herabstufen, indem sie sich im Admin-Dashboard ihrer Unterwebsite anmelden und auf ihrer Account-Seite unter **Ändern** klicken.

![Kunden-Account-Seite mit Karte „Ihre Mitgliedschaft“ und Ändern-Button](/img/account-page/membership-change-button.png)

Nach dem Klicken auf den **Ändern**-Button wird der Benutzer/Kunde zur Checkout-Seite weitergeleitet, auf der er den Plan auswählen kann, auf den er sein Abonnement ändern möchte.

![Seite mit Optionen zum Herabstufen des Plans auf Kundenseite](/img/account-page/downgrade-picker.png)

In diesem Beispiel stufen wir den Plan von **Premium** auf **Kostenlos** herab.

Um fortzufahren, muss der Benutzer nur auf den **Checkout abschließen**-Button klicken. Anschließend wird er zurück zur Account-Seite geführt, auf der eine Nachricht über die ausstehende Änderung der Mitgliedschaft angezeigt wird. Die Änderungen werden im **nächsten Abrechnungszyklus** des Kunden wirksam.

![Account-Seite mit Banner für ausstehende Mitgliedschaftsänderung](/img/account-page/pending-change.png)

### Was passiert, wenn ein Benutzer seinen Plan herabstuft {#what-happens-when-a-user-downgrades-their-plan}

Es ist wichtig zu beachten, dass das Herabstufen des Plans die bestehende Konfiguration in der Unterwebsite des Benutzers nicht verändert.

Es ändert die Website-Vorlage nicht automatisch, da das Ändern der Website-Vorlage die Unterwebsite vollständig löschen und zurücksetzen würde. Dies dient dazu, unnötigen Datenverlust zu vermeiden. Daher bleiben Speicherplatz, Themes, Plugins usw. intakt, mit Ausnahme der Beiträge.

Wir verstehen, dass Ihr Hauptanliegen die Limits und Kontingente sind, die Sie unter jedem Plan festgelegt haben, aber wir müssen den Schaden berücksichtigen, der der Unterwebsite des Benutzers entstehen würde, wenn wir eine ihrer Konfigurationen löschen oder ändern würden.

Für die Beiträge, die das im Plan festgelegte Limit überschreiten, haben Sie 3 verschiedene Optionen: **Beiträge unverändert behalten** *,* **Beiträge in den Papierkorb verschieben** *,* oder **Beiträge in den Entwurf verschieben** *.* Sie können dies in den Ultimate Multisite-Einstellungen konfigurieren.

![Network-Admin-Einstellungen-Seite „Websites“ mit Optionen für das Verhalten bei überschrittenem Beitragslimit](/img/account-page/settings-sites-post-limit.png)

### Was mit der Zahlung passiert {#what-happens-to-the-payment}

In Version 2.0 sind keine Anpassungen der Zahlung in Bezug auf anteilige Abrechnung mehr erforderlich.

Das liegt daran, dass das System wartet, bis die bestehende Mitgliedschaft **ihren Abrechnungszyklus abgeschlossen hat, bevor** der neue Plan/die neue Mitgliedschaft wirksam wird. Der neue Abrechnungsbetrag für die neue Mitgliedschaft wird automatisch angewendet und im nächsten Abrechnungszyklus berechnet.
