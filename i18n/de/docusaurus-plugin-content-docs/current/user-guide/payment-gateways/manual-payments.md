---
title: Manuelle Zahlungen einrichten
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# Einrichtung manueller Zahlungen (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Manuelle Zahlungen sind eine Möglichkeit, Ihnen andere Zahlungsmethoden anzubieten, falls **Stripe** oder **PayPal** für Ihre Benutzer nicht verfügbar sind. Es kann sich um eine Überweisung oder einen Banktransfer oder eine andere lokal verfügbare Zahlungsmethode handeln.

## Manuelle Zahlungen aktivieren

Die Einrichtung manueller Zahlungen ist sehr einfach. Sie müssen sie lediglich unter Zahlungs-Gateways aktivieren und detaillierte Anweisungen angeben, wie der Benutzer die Zahlung senden soll.

Zuerst gehen Sie zu **Ultimate Multisite > Settings > Payments**. Unter **Payment Gateways** schalten Sie **Manual** ein. Sie sehen dann ein **Payment Instructions**-Feld, das angezeigt wird.

Fügen Sie in dieses Feld die Informationen ein, die Ihr Kunde benötigt, um die Zahlung vorzunehmen. Das können Ihre Bankverbindungsdaten und Ihre E‑Mail sein, damit der Kunde Ihnen die Zahlungsbestätigung senden kann, zum Beispiel.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

Nach dem Einrichten klicken Sie einfach auf **Save Settings** und fertig. Wenn sich Benutzer in Ihrem Netzwerk registrieren, sehen sie eine Nachricht, die ihnen mitteilt, dass sie Ihre Anweisungen zum Abschluss des Kaufs erhalten werden.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

Und sie erhalten außerdem eine Nachricht auf Ihrer **Thank You**-Seite mit Ihren Zahlungsanweisungen.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## Manuelle Zahlungen bestätigen

Um eine manuelle Zahlung zu bestätigen, gehen Sie zum **Payments**-Menü in der linken Leiste. Dort sehen Sie alle Zahlungen in Ihrem Netzwerk und deren Details, einschließlich ihres **status**. Eine manuelle Zahlung hat immer einen **Pending**-Status, bis Sie ihn manuell ändern.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Öffnen Sie die Zahlungsseite, indem Sie auf den **reference code** klicken. Auf dieser Seite haben Sie alle Details der ausstehenden Zahlung, wie Referenz-ID, Produkte, Zeitstempel und mehr.

![Payment details page with reference code and products](/img/admin/payments-list.png)

In der rechten Spalte können Sie den Status der Zahlung ändern. Wenn Sie ihn auf **Completed** setzen und die Option **Activate Membership** aktivieren, wird die Website Ihres Kunden freigeschaltet und dessen Mitgliedschaft aktiv.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
