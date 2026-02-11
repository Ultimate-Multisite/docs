---
title: Konto über Zapier registrieren
sidebar_position: 1
_i18n_hash: b77221f8098a0280ce78f481e328f9af
---
# Ereignis: Ein Konto über Zapier registrieren

In dem Artikel [Integrating Ultimate Multisite with Zapier](zapier.md) haben wir besprochen, wie man Zapier nutzt, um verschiedene Aktionen innerhalb von Ultimate Multisite basierend auf Triggern und Ereignissen auszuführen. In diesem Artikel zeigen wir, wie Sie Drittanbieter-Anwendungen integrieren können. Wir verwenden Google Sheets als Datenquelle und senden die Informationen an Ultimate Multisite, um ein Konto zu registrieren.

Zuerst müssen Sie ein **Google Sheet** in Ihrem Google Drive erstellen. Stellen Sie sicher, dass Sie jede Spalte korrekt definieren, damit Sie die Daten später leicht zuordnen können.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7wnYotvYtO.png)Nach dem Erstellen eines Google Sheets können Sie sich bei Ihrem Zapier-Konto anmelden und mit der Erstellung eines Zaps beginnen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C0khOzCSCF.png)Im Suchfeld für **"App event"** wählen Sie **"Google Sheets"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Cj2rk0zpOO.png)

Dann wählen Sie im Feld **"Event"** die Option **"New spreadsheet row"** und klicken Sie auf **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Y6z9NX6HAn.png)Der nächste Schritt fordert Sie auf, ein **Google Account** auszuwählen, in dem das **Google Sheet** gespeichert ist. Stellen Sie daher sicher, dass das richtige Google-Konto angegeben ist.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-536o0FgLI1.png)

Unter **"Set up trigger"** müssen Sie die Google-Tabelle und das Arbeitsblatt auswählen, aus dem die Daten stammen. Füllen Sie diese einfach aus und klicken Sie auf **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4juCX9m6M2.png)Als Nächstes führen Sie einen **"test your trigger"** durch, um sicherzustellen, dass Ihr Google Sheet korrekt verbunden ist.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-E1RjprMVNM.png)Wenn Ihr Test erfolgreich ist, sollten Sie Ergebnisse mit einigen Werten aus Ihren Tabellen sehen. Klicken Sie auf **"Continue"**, um fortzufahren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FNVMJRdoBs.png)Der nächste Schritt besteht darin, die zweite Aktion einzurichten, die ein Konto in Ultimate Multisite erstellt oder registriert. Wählen Sie im Suchfeld **"Ultimate Multisite(2.0.2)"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbSevglDSJ.png)

Im Feld **"Event"** wählen Sie **"Register an Account in Ultimate Multisite"** und klicken dann auf die Schaltfläche **"Continue"**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DZTN6Hno0w.png)Unter **"Set up an action"** sehen Sie verschiedene Felder für Kundendaten, Mitgliedschaften, Produkte usw. Sie können die Werte aus Ihrem Google Sheet zuordnen und ihnen das entsprechende Feld zuweisen, wie im Screenshot unten gezeigt.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-c1ozo05Uam.png)

Nach dem Zuordnen der Werte können Sie die Aktion testen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UKI9kdBjIc.png)
