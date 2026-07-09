---
title: 'Lektion 9: Preisgestaltung für den Gewinn'
sidebar_position: 10
_i18n_hash: 0f58d92d3effcc1ffc1f62104d21cdcc
---
# Lektion 9: Preisgestaltung für Profit {#lesson-9-pricing-for-profit}

In Lektion 5 haben wir die anfänglichen Preise für die FitSite-Pläne festgelegt. Jetzt verfeinern wir die Preisstrategie mit Techniken, die den Umsatz steigern, Upgrades fördern und die Abwanderung reduzieren.

## Wo wir aufgehört haben {#where-we-left-off}

FitSite verfügt über Pläne, Templates, Checkout, Branding und Onboarding. Die anfängliche Preisgestaltung betrug 49 $/99 $/199 pro Monat. Jetzt sorgen wir dafür, dass diese Preise noch effektiver arbeiten.

## Preisgrundsätze für Nischenplattformen {#pricing-principles-for-niche-platforms}

### Preis nach Wert, nicht nach Kosten {#price-on-value-not-cost}

Ihre Hosting-Kosten könnten zwischen 5 $ und 15 $ pro Kunden-Website liegen. Das bedeutet jedoch nicht, dass Ihr Preis 20 $ betragen sollte. Sie verkaufen kein Hosting. Sie verkaufen:

- Eine professionelle Fitness-Website, deren Erstellung individuell 2.000 $ bis 5.000 $ kosten würde
- Laufende Wartung, Updates und Sicherheit, an die sich die Kunden nicht kümmern müssen
- Nischenspezifische Funktionen, die allgemeine Builder nicht bieten
- Die Glaubwürdigkeit einer Plattform, die speziell für ihre Branche entwickelt wurde

Preissetzen Sie basierend auf dem Wert, den Sie liefern, nicht auf den Kosten, die Sie dafür haben.

### Verankerung durch Alternativen {#anchor-to-alternatives}

Wenn ein Fitnessstudio-Betreiber FitSite evaluiert, vergleicht er es mit:

- **Einstellung eines Webentwicklers**: 2.000 $ bis 5.000 $ Einmalzahlung + 50 $ bis 100 $ monatliche Wartung
- **Wix/Squarespace**: 16 $ bis 45 $ pro Monat, aber keine fitnessspezifischen Funktionen, die sie selbst erstellen müssen
- **Nichts tun**: Verlust von Mitgliedern, die sie online nicht finden können

Mit 49 $ bis 199 $ pro Monat ist FitSite günstiger als ein Entwickler, leistungsfähiger als allgemeine Builder und unendlich besser als keine Website.

## Implementierung von Preisvariationen {#implementing-price-variations}

Jährliche Preise fördern die Bindung und reduzieren die Abwanderung. Navigieren Sie zum Tab **Price Variations** jedes Plans und fügen Sie jährliche Optionen hinzu:

| Plan | Monatlich | Jährlich (pro Monat) | Jährlich Gesamt | Ersparnis |
|------|---------|-------------------|--------------|---------|
| Starter | 49 $/Monat | 39 $/Monat | 468 $/Jahr | 20 % Rabatt |
| Growth | 99 $/Monat | 79 $/Monat | 948 $/Jahr | 20 % Rabatt |
| Pro | 199 $/Monat | 159 $/Monat | 1.908 $/Jahr | 20 % Rabatt |

Fügen Sie ein Feld **Period Selection** zu Ihrem Checkout-Formular hinzu, damit Kunden zwischen monatlicher und jährlicher Abrechnung umschalten können. Sehen Sie sich [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) an.

### Warum jährliche Preise funktionieren {#why-annual-pricing-works}

- **Für Sie**: Sofortiges Bargeld, geringere Abwanderung (Kunden, die jährlich bezahlen, kündigen eher nicht mittelfristig)
- **Für sie**: Echte Einsparungen, planbare Budgets

## Setup-Gebühren {#setup-fees}

Erwägen Sie eine einmalige Setup-Gebühr für Pläne, die eine manuelle Konfiguration beinhalten:

- **Starter**: Keine Setup-Gebühr (Barrieren für den Einstieg beseitigen)
- **Growth**: 99 $ Setup-Gebühr (deckt die Konfiguration einer benutzerdefinierten Domain und die Erstberatung ab)
- **Pro**: 299 $ Setup-Gebühr (deckt die Einrichtung mehrerer Standorte und den Onboarding-Call ab)

Konfigurieren Sie die Setup-Gebühren im Preissegment jedes Plans. Für Details siehe [Creating Your First Subscription Product](/user-guide/configuration/creating-your-first-subscription-product).

## Testzeiträume {#trial-periods}

Das Angebot eines Testzeitraums reduziert die Einstiegshürde, birgt aber das Risiko der Nicht-Konversion. Für FitSite:

- **7-tägiger kostenloser Testzeitraum** nur für den Starter-Plan
- Kein Testzeitraum für Growth und Pro (diese Kunden sind engagierter und erwarten zu zahlen)

Konfigurieren Sie den Testzeitraum im Preissegment des Starter-Plans, indem Sie den Toggle **Offer Trial** aktivieren und die Dauer auf 7 Tage einstellen.

### Wie man Testzeiträume zur Konversion bringt {#making-trials-convert}

Ein Testzeitraum funktioniert nur, wenn der Kunde während dieser Zeit einen Mehrwert erlebt. Ihre Onboarding-Sequenz (Lektion 8) ist hier entscheidend – die Willkommens-E-Mails sollten so getaktet sein, dass sie die Interaktion innerhalb des 7-tägigen Zeitfensters fördern.

## Rabattcodes {#discount-codes}

Erstellen Sie strategische Rabattcodes für spezifische Zwecke:

- **FITLAUNCH** – 30 % Rabatt auf die ersten 3 Monate (für die Launch-Aktion)
- **ANNUAL20** – 20 % Rabatt auf Jahrespläne (falls nicht bereits rabattiert)
- **REFERRAL** – 1 Monat kostenlos (für Kundenempfehlungen)

Navigieren Sie zu **Ultimate Multisite > Discount Codes**, um diese zu erstellen. Für die vollständige Anleitung siehe [Creating Discount Codes](/user-guide/configuration/creating-discount-codes).

:::tip Nicht standardmäßig rabattieren
Rabatte sollten strategische Werkzeuge sein, keine dauerhaften Bestandteile. Wenn jeder einen Rabatt erhält, ist es kein Rabatt – es ist Ihr tatsächlicher Preis. Verwenden Sie sie für spezifische Kampagnen, Empfehlungen und zeitlich begrenzte Aktionen.
:::

## Steuerabwicklung {#tax-handling}

Wenn Sie in einer Gerichtsbarkeit tätig sind, die die Steuererhebung vorschreibt:

1. Konfigurieren Sie die Steuersätze unter **Ultimate Multisite > Settings > Taxes**
2. Weisen Sie Ihren Plänen Steuerkategorien zu
3. Stellen Sie sicher, dass die Rechnungen die Steuern korrekt anzeigen

Für die detaillierte Konfiguration siehe [Tax Handling](/user-guide/payment-gateways/tax-handling). Wenn Sie internationale Kunden bedienen, ziehen Sie das [VAT addon](/addons/vat) für die EU-Konformität in Betracht.

## Überprüfung Ihrer Preisgestaltung {#reviewing-your-pricing}

Überprüfen Sie die Preise nach dem Launch vierteljährlich. Achten Sie auf:

- **Conversion rate pro Plan**: Wenn Starter gut konvertiert, aber Growth nicht, könnte der Abstand zwischen ihnen zu groß sein
- **Upgrade rate**: Wenn wenige Kunden von Starter auf Growth upgraden, bietet der Growth-Plan möglicherweise nicht genug zusätzlichen Mehrwert
- **Abwanderung pro Plan**: Wenn Jahreskunden weniger abwandern, betonen Sie die jährliche Preisgestaltung stärker
- **Wettbewerberpreise**: Was verlangen Alternativen? Sind Sie richtig positioniert?

## Das FitSite Network bisher {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (Subdomain-Modus)
├── Ultimate Multisite (konfiguriert + gebrandet)
├── Platform Domain (fitsite.com + Wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter (49 $/Monat oder 468 $/Jahr) + 7-tägiger Testzeitraum
│   ├── FitSite Growth (99 $/Monat oder 948 $/Jahr) + 99 $ Setup-Gebühr
│   ├── FitSite Pro (199 $/Monat oder 1.908 $/Jahr) + 299 $ Setup-Gebühr
│   └── Order Bumps + Discount Codes
├── Checkout Flow (mit Period Selection Toggle)
├── Branding (Login, Dashboard, E-Mails, Rechnungen, Marketing-Seite)
├── Customer Onboarding (Quick Start, E-Mails, Hilferessourcen)
├── Pricing Strategy
│   ├── Jährliche Rabatte (20 % Rabatt)
│   ├── Strategische Setup-Gebühren
│   ├── 7-tägiger Testzeitraum für Starter
│   ├── Rabattcodes für Kampagnen und Empfehlungen
│   └── Steuerkonfiguration
└── Bereit für den Launch (nächste Lektion)
```

## Was wir in dieser Lektion aufgebaut haben {#what-we-built-this-lesson}

- **Jährliche Preisgestaltung** mit 20 % Rabatt, um die Bindung zu fördern
- **Setup-Gebühren** für höhere Stufen, um den Onboarding-Aufwand abzudecken
- **Ein Testzeitraum** für den Einstiegsplan, um die Einstiegshürde zu senken
- **Strategische Rabattcodes** für Launch, Empfehlungen und Kampagnen
- **Steuerkonfiguration** für die konforme Abrechnung
- **Ein Framework zur Preisüberprüfung** für die kontinuierliche Optimierung

---

**Weiter:** [Lektion 10: Launch Day](lesson-10-launch) – die Pre-Launch-Checkliste und der Live-Gang.
