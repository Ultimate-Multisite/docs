---
title: Ufschalte manuelli Zahle
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# Manuelle Zahligsmethoden iistelle (v2)

_**WICHTIGE NOTIZ: Dä Artikel bezieht sich uf Ultimate Multisite Version 2.x.**_

Manuelle Zahligsmethoden sind e Weg, wo Sie anderi Zahligsmethodene aabiete chönne, falls **Stripe** oder **PayPal** für Ihre Benutzer nöd verfügbar sind. Das chan en Wire Transfer oder jede anderi Zahligsmethode sii, wo Ihre Benutzer lokal zur Verfüegig händ.

## Wie man Manuelle Zahlige aktiviert

D'Iistellig vo de manuelle Zahlig isch sehr eifach. Sie müend sie nur unter Zahlungsgateways aktivieren und detaillierti Aawiesige iigäh, wie de Benutzer d'Zahlig schicke söll.

Gang erscht zu **Ultimate Multisite > Settings > Payments**. Unter **Payment Gateways** schalte **Manual** uf. Sie werded gseh, dass sich en Kasten mit **Payment Instructions** öffnet.

Füged in dä Kasten die Informatione i, wo Ihr Kunde bruucht, um d'Zahlig z'mache. Das chan dini Bankkontodateie und dini E-Mail sii, damit de Kunde dir zum Bischpil d'Zahligsbestätigung schicke cha.

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

Hier isch d'Oberflächi für d'manuelle Gateway-Iistellige:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

Nachdem Sie das iigstellt händ, klicke Sie eifach uf **Save Settings** und fertig. Wenn Benutzer zu Ihrem Netzwerk registriert sind, werded sie en Nachricht gseh, wo ihnen sägt, dass sie Ihre Aawiesige zum Abschluss vom Kauf überchömed.

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

Und sie werded au en Nachricht uf Ihrer **Thank You** Seite mit Ihren Zahligsbestätigunge überchoh.

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## Manuelle Zahlige bestätige

Um e manuelli Zahlig z'bestätige, gaasch uf s'**Payments**-Menü a de linke Leist. Do chönne Sie alli Zahlige in Ihrem Netzwerk und ihri Details gseh, inklusive ihrem **Status**. E manuelli Zahlig het immer en **Pending** Status, bis Sie ihn manuell ändere.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

Gib d'Zahligsiite dure, indem Sie uf de **reference code** klicke. U dere Siite händ Sie alli Details vo de pending Zahlig, wie d'Reference ID, Produkt, Zeitstempel und meh.

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

In de rechte Spalte chönne Sie de Status vo de Zahlig ändere. Wenn Sie ihn uf **Completed** ändere und d'Option **Activate Membership** umschalte (toggle), wird d'Site vom Kunde aktiviert und sini Mitgliedschaft isch aktiv.

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
