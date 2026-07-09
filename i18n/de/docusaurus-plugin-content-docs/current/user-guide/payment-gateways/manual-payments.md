---
title: Manuelle Zahlungen einrichten
sidebar_position: 20
_i18n_hash: 98210a45c3d3af7368f60d7593235163
---
# Manuelle Zahlungen einrichten (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Manuelle Zahlungen sind eine Möglichkeit, andere Zahlungsmethoden anzubieten, falls **Stripe** oder **PayPal** für Ihre Benutzer nicht verfügbar ist. Das kann eine Überweisung, eine Banküberweisung oder jede andere Zahlungsmethode sein, die Ihren Benutzern lokal zur Verfügung steht.

## So aktivieren Sie manuelle Zahlungen

Das Einrichten manueller Zahlungen ist sehr einfach. Sie müssen sie lediglich unter den Zahlungs-Gateways aktivieren und detaillierte Anweisungen dazu eingeben, wie der Benutzer die Zahlung senden soll.

Gehen Sie zunächst zu **Ultimate Multisite > Settings > Payments**. Aktivieren Sie unter **Payment Gateways** die Option **Manual**. Sie werden sehen, dass ein Feld **Payment Instructions** für Sie angezeigt wird.

Fügen Sie in dieses Feld die Informationen ein, die Ihr Kunde benötigt, um die Zahlung durchzuführen. Das können zum Beispiel Ihre Bankverbindung und Ihre E-Mail-Adresse sein, damit der Kunde Ihnen die Zahlungsbestätigung senden kann.

![Schalter für das manuelle Zahlungs-Gateway mit Textbereich für Payment Instructions](/img/config/manual-gateway-expanded.png)

Hier ist die Oberfläche für die Einstellungen des manuellen Gateways:

![Einstellungen des manuellen Gateways](/img/config/manual-gateway-settings.png)

Nachdem Sie es eingerichtet haben, klicken Sie einfach auf **Save Settings**, und es ist erledigt. Wenn sich Benutzer in Ihrem Netzwerk registrieren, sehen sie eine Nachricht, die ihnen mitteilt, dass sie Ihre Anweisungen zum Abschließen des Kaufs erhalten werden.

![Registrierungsbestätigung, die dem Benutzer mitteilt, dass er Zahlungsanweisungen erhalten wird](/img/frontend/registration-manual-notice.png)

Und sie erhalten außerdem eine Nachricht auf Ihrer **Thank You**-Seite mit Ihren Zahlungsanweisungen.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manuelle Zahlungen bestätigen

Um eine manuelle Zahlung zu bestätigen, gehen Sie zum Menü **Payments** in der linken Leiste. Dort können Sie alle Zahlungen in Ihrem Netzwerk und deren Details sehen, einschließlich ihres **Status**. Eine manuelle Zahlung hat immer den Status **Pending**, bis Sie ihn manuell ändern.

![Zahlungsliste mit ausstehender manueller Zahlung](/img/admin/payments-list.png)

Öffnen Sie die Zahlungsseite, indem Sie auf den **reference code** klicken. Auf dieser Seite finden Sie alle Details der ausstehenden Zahlung, wie Referenz-ID, Produkte, Zeitstempel und mehr.

![Zahlungsdetailseite mit Referenzcode, Produkten und Gesamtsummen](/img/admin/payment-edit.png)

In der rechten Spalte können Sie den Status der Zahlung ändern. Wenn Sie ihn auf **Completed** ändern und die Option **Activate Membership** aktivieren, wird die Website Ihres Kunden freigeschaltet und seine Mitgliedschaft wird aktiv.

![Zahlungsbearbeitungsseite mit Status auf Completed gesetzt und Activate Membership-Schalter](/img/admin/payment-activate-membership.png)
