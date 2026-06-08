---
title: 'Lektion 7: Es zu Ihrem eigenen machen'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# Lektion 7: Es zu Ihrem machen

Ihre Kunden dürfen niemals das Gefühl haben, sie nutzen „irgendein WordPress-Plugin“. Sie sollten das Gefühl haben, sie nutzen FitSite – eine Plattform, die speziell für ihre Branche entwickelt wurde. In dieser Lektion behandeln wir Branding, White-Labeling und wie Sie die Plattform wie ein eigenständiges Produkt wirken lassen.

## Wo wir aufgehört haben

FitSite verfügt über einen funktionierenden Checkout-Flow, der Fitnessstudio-Betreiber von der Planauswahl bis zur Live-Seite führt. Jetzt sorgen wir dafür, dass das gesamte Erlebnis wie ein zusammenhängendes, gebrandetes Produkt wirkt.

## Ihre Plattform-Domain

Das Fundament Ihrer Marke ist Ihre Domain. Für FitSite gilt:

- **Hauptdomain**: `fitsite.com` (Ihre Marketing-Seite und der Netzwerk-Root)
- **Kundenseiten**: `studioname.fitsite.com` (Subdomains)
- **Benutzerdefinierte Domains**: Kunden mit den Plänen Growth und Pro können ihre eigene Domain verknüpfen

### Einrichtung Ihrer Domain

1. Registrieren Sie Ihre Plattform-Domain
2. Verweisen Sie diese auf Ihren Hosting-Anbieter
3. Konfigurieren Sie Wildcard DNS (`*.fitsite.com`) für Kundensubdomains
4. Stellen Sie sicher, dass Wildcard SSL aktiv ist

Weitere detaillierte Anweisungen finden Sie unter [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping).

## White-Labeling des Admin-Erlebnisses

Wenn ein Fitnessstudio-Betreiber sich in seinem Seiten-Dashboard anmeldet, sollte er Ihre Marke sehen, nicht die Branding von WordPress oder Ultimate Multisite.

### Benutzerdefinierte Anmeldeseite

Passen Sie die WordPress-Anmeldeseite an, um folgende Elemente anzuzeigen:

- Ihr FitSite-Logo
- Fitness-passende Hintergrundbilder
- Ihre Markenfarben

### Dashboard-Branding

Verwenden Sie das [Admin Page Creator](/addons/admin-page-creator) Addon oder benutzerdefiniertes CSS, um:

- Das WordPress-Logo durch Ihr FitSite-Logo zu ersetzen
- Das Admin-Farbschema anzupassen, damit es zu Ihrer Marke passt
- Ein benutzerdefiniertes Dashboard-Widget hinzuzufügen, das fitnessspezifische Schnelllinks und Hilferessourcen enthält

### Benutzerdefinierte Admin-Seiten

Erwägen Sie die Erstellung benutzerdefinierter Admin-Seiten, die die relevantesten Aktionen für Fitnessstudio-Betreiber hervorheben:

- „Klassenplan bearbeiten“
- „Trainerprofile aktualisieren“
- „Ihre Seite ansehen“

Dies reduziert die Einarbeitungszeit, indem es branchenspezifische Aktionen an prominenter Stelle platziert, anstatt sie in das Standard-WordPress-Menü zu vergraben.

## Branding Ihrer Kommunikation

Jede E-Mail, jede Rechnung und jede Benachrichtigung sollte Ihre Marke stärken.

### System-E-Mails

Navigieren Sie zu **Ultimate Multisite > Settings > Emails** und passen Sie alle System-E-Mails an:

- **Von Name**: FitSite
- **Von E-Mail**: hello@fitsite.com
- **E-Mail-Vorlagen**: Verwenden Sie Ihre Markenfarben und Ihr Logo
- **Sprache**: Durchgängig fitnessspezifisch

Wichtige E-Mails, die Sie anpassen sollten:

| E-Mail | Allgemeine Version | FitSite-Version |
|-------|----------------|-----------------|
| Willkommen | „Ihre neue Seite ist bereit“ | „Ihre Fitnessstudio-Website ist live“ |
| Zahlungsbeleg | „Zahlung erhalten“ | „FitSite-Abonnementzahlung bestätigt“ |
| Testende | „Ihr Test läuft bald ab“ | „Ihr FitSite-Test läuft in 3 Tagen ab – halten Sie Ihre Studio-Website online“ |

### Rechnungen

Passen Sie die Rechnungsvorlagen an mit:

- Ihrem FitSite-Logo und Ihren Markenfarben
- Ihren Geschäftsinformationen
- Fitnessspezifischen Produktnamen (keine generischen Plan-IDs)

## Die kundenorientierte Seite

Ihre Hauptdomain (`fitsite.com`) benötigt eine Marketing-Seite, die die Plattform verkauft. Dies ist getrennt vom Ultimate Multisite Netzwerk-Admin – es ist das öffentliche Gesicht Ihres Unternehmens.

Wichtige Seiten:

- **Startseite**: Klare Wertversprechen für Fitnessunternehmen
- **Features**: Was FitSite leistet, in Fitness-Begriffen
- **Preise**: Ihre drei Pläne mit branchenspezifischen Feature-Vergleichen
- **Beispiele**: Präsentation von auf der Plattform erstellten Seiten
- **Anmelden**: Links zu Ihrem Checkout-Formular

:::tip Ihre Marketing-Seite kann eine Netzwerk-Seite sein
Erstellen Sie Ihre Marketing-Seite als eine Seite innerhalb Ihres eigenen Netzwerks. Dadurch können Sie sie vom selben Dashboard verwalten und die Fähigkeiten Ihrer eigenen Plattform demonstrieren.
:::

## Benutzerdefinierte Domain für Kunden

Für Kunden, die Pläne mit benutzerdefinierten Domains nutzen, dokumentieren Sie den Prozess klar:

1. Der Kunde registriert oder überträgt seine Domain an einen Registrar
2. Der Kunde aktualisiert die DNS, um auf Ihre Plattform zu verweisen (geben Sie die genauen Einträge an)
3. Ultimate Multisite übernimmt die Domain-Zuordnung und das SSL

Erstellen Sie einen Hilfeartikel oder einen Knowledge Base Eintrag speziell für diesen Prozess, geschrieben für nicht-technische Fitnessstudio-Betreiber.

## Das FitSite Netzwerk bisher

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Was wir in dieser Lektion aufgebaut haben

- **Plattform-Domain und DNS** für ein gebrandetes Erlebnis konfiguriert
- **White-labeled Admin** mit FitSite-Branding durchgängig
- **Angepasste Kommunikation** – E-Mails, Rechnungen und Benachrichtigungen alle mit der Marke versehen
- **Eine Marketing-Seite**, die FitSite für Fitnessstudio-Betreiber verkauft
- **Dokumentation für benutzerdefinierte Domains** für Kunden, die ihre eigene Domain wünschen

---

**Weiter:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) – wir entwerfen das Erlebnis, das eine neue Anmeldung in einen aktiven, zufriedenen Kunden verwandelt.
