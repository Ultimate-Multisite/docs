---
title: Rundgang durch das Admin-Panel
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Rundgang durch das Admin-Panel

Ultimate Multisite soll so einfach und selbsterklärend wie möglich sein, aber bei einem so leistungsstarken Tool kann eine geführte Tour hilfreich sein. Gehen wir die Admin-Seiten durch, damit du dich zurechtfindest.

## Dashboard

Das Ultimate Multisite **Dashboard** zeigt grundlegende Berichte und Analysen, einschließlich Umsätzen, Aktivitäten von Websites, Wachstum von Mitgliedschaften, Besucherzahlen und geografischen Daten.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Hier ist eine vollständige Ansicht des Dashboards:

![Ultimate Multisite Dashboard vollständige Seite](/img/admin/um-dashboard-full.png)

Und der untere Abschnitt des Dashboards:

![Ultimate Multisite Dashboard unterer Abschnitt](/img/admin/um-dashboard-bottom.png)

Hier ist außerdem eine vollständige Ansicht des Netzwerk-Dashboards:

![Network Dashboard vollständige Seite](/img/admin/network-dashboard-full-page.png)

## Checkout-Formulare

**Checkout-Formulare** geben dir die Flexibilität, benutzerdefinierte Registrierungsseiten zu erstellen. Du kannst Felder anpassen, benutzerdefinierte Klassen und Skripte einfügen und den Zugriff basierend auf dem Land oder Standort des Besuchers einschränken.

![Liste der Checkout-Formulare](/img/admin/checkout-forms-list.png)

## Produkte

Der Abschnitt **Produkte** ist der Ort, an dem du verschiedene Tarife, Pakete und Dienste für dein Netzwerk erstellst. Lege Preise, Abrechnungsintervalle sowie Limits & Kontingente auf Produktebene fest.

![Produktliste](/img/admin/products-list.png)

## Mitgliedschaften

Die Seite **Mitgliedschaften** zeigt alle Abonnements in deinem Netzwerk. Überprüfe und bearbeite Abonnementdetails, einschließlich Tarifen, Produkten, Abrechnungsbeträgen und -intervallen, Zahlungshistorie und Zeitstempeln.

![Liste der Mitgliedschaften](/img/admin/memberships-list.png)

## Zahlungen

Die Seite **Zahlungen** bietet einen schnellen Überblick über die Zahlungshistorie in deinem gesamten Netzwerk, mit detaillierten Transaktionsinformationen einschließlich bestimmter Produkte und Beträge.

![Zahlungsliste](/img/admin/payments-list.png)

## Kunden

Die Seite **Kunden** zeigt alle in deinem Netzwerk registrierten Mitglieder mit grundlegenden Benutzerinformationen, einschließlich Name, E-Mail-Adresse, letzter Anmeldung und einem „Wechseln zu“-Link zum Einloggen in ihre Subsite.

![Kundenliste](/img/admin/customers-list.png)

## Websites

Die Seite **Websites** listet alle Subsites in deinem Netzwerk auf, einschließlich Website-Vorlagen und kundeneigener Websites. Verwalte einfach zugeordnete Domains, Limits & Kontingente, Plugins und Themes sowie Website-Thumbnails.

![Website-Liste](/img/admin/sites-list.png)

## Domains

Die Seite **Domains** ist benutzerdefinierten Domains gewidmet, die Subsites zugeordnet sind. Als Super-Admin kannst du benutzerdefinierte Domainnamen manuell hinzufügen oder zuordnen sowie DNS-Einträge und Protokolle ansehen.

![Domain-Liste](/img/admin/domains-list.png)

## Rabattcodes

**Rabattcodes** ermöglichen dir, Gutscheincodes zu erstellen, um deinen Endbenutzern Rabatte anzubieten. Lege den Rabattwert fest und richte ihn auf bestimmte Benutzer oder Gruppen aus.

![Liste der Rabattcodes](/img/admin/discount-codes-list.png)

## Broadcasts

**Broadcasts** ist ein Tool zum Ausrollen von Ankündigungen oder zum Senden privater Nachrichten an deine Subsite-Benutzer. Richte dich an bestimmte Benutzergruppen basierend auf dem Tarif oder Produkt, das sie abonniert haben.

![Broadcasts-Liste](/img/admin/broadcasts-list.png)

## Einstellungen

Die Seite **Einstellungen** ist der Ort, an dem du Ultimate Multisite konfigurierst — Registrierungseinstellungen, Zahlungen, API und Webhooks, Domain-Zuordnung und andere Integrationen.

Die Einstellungen des AI-Connectors listen die derzeit unterstützten OAuth-Anbieter-Pools auf: Anthropic Max, OpenAI ChatGPT/Codex und Google AI Pro. Jede Anbieterkarte ermöglicht Super-Admins, Accounts zu verbinden, gespeicherte Accounts zu aktualisieren, Accounts per E-Mail zu entfernen und den manuellen OAuth-Fallback zu verwenden, wenn eine sandboxed Umgebung die Browser-Weiterleitung blockiert. Cursor Pro-Einrichtungsoptionen wurden aus dem Admin-Panel entfernt.

ChatGPT/Codex-Accounts unterstützen connector-gestützte Tool-Nutzung, sofern die Operation Tools zulässt, sodass Admin-Workflows, die von connector-unterstützten Operationen abhängen, das Codex-Tool-Verhalten nutzen können, nachdem der OpenAI-Account verbunden wurde.

![Einstellungsseite](/img/admin/settings-general.png)

Hier ist eine vollständige Ansicht der allgemeinen Einstellungsseite:

![Allgemeine Einstellungen vollständige Seite](/img/admin/settings-general-full.png)

Und die Seite mit den E-Mail-Einstellungen:

![E-Mail-Einstellungen vollständige Seite](/img/admin/settings-emails-full.png)

Und die Seite mit den Zahlungseinstellungen:

![Zahlungseinstellungen vollständige Seite](/img/admin/settings-payments-full.png)

Und der untere Abschnitt der Zahlungseinstellungen:

![Zahlungseinstellungen unterer Abschnitt](/img/admin/settings-payments-bottom.png)

Und die Seite mit den Website-Einstellungen:

![Website-Einstellungen vollständige Seite](/img/admin/settings-sites-full.png)

## Ereignisse

Die Seite **Ereignisse** führt ein Protokoll aller Ereignisse und Logs in deinem Netzwerk. Sie verfolgt Aktivitäten wie Tarifänderungen, Registrierungen und andere Vorgänge — nützlich für die Überwachung deiner Multisite.

![Ereignisliste](/img/admin/events-list.png)

## Webhooks

**Webhooks** ermöglichen dir, Daten an eine andere Anwendung zu übermitteln. Nützlich zum Senden von Daten aus Ultimate Multisite an Plattformen wie Zapier.

![Webhooks-Liste](/img/admin/webhooks-list.png)
