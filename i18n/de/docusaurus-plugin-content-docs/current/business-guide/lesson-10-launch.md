---
title: 'Lektion 10: Launch Day'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# Lektion 10: Der Starttag

Alles ist fertiggestellt. Bevor Sie die Türen öffnen, führt diese Lektion durch die Pre-Launch-Checkliste, um sicherzustellen, dass nichts kaputt, fehlt oder peinlich ist.

## Wo wir aufgehört haben

FitSite hat Templates, Pläne, den Checkout, das Branding, das Onboarding und die Preisgestaltung konfiguriert. Jetzt überprüfen wir, ob alles funktioniert, und gehen live.

## Pre-Launch-Checkliste

Gehen Sie jeden Punkt durch. Lassen Sie nichts aus.

### Plattform-Infrastruktur

- [ ] Das Hosting ist stabil und hält der Last stand
- [ ] Wildcard SSL ist aktiv und alle Subdomains werden über HTTPS bedient
- [ ] Die Domain-Zuordnung funktioniert – testen Sie die Erstellung einer Website und die Zuordnung einer benutzerdefinierten Domain
- [ ] Backups sind konfiguriert und getestet (restaurieren Sie mindestens eines, um dies zu überprüfen)
- [ ] Monitoring ist eingerichtet – Sie wissen, wenn die Plattform ausfällt

### Templates

- [ ] Alle drei Templates laden auf neuen Websites korrekt
- [ ] Der Platzhalter-Inhalt ist hilfreich und frei von Tippfehlern
- [ ] Alle Bilder sind ordnungsgemäß lizenziert (keine Wasserzeichen von Stockfotos)
- [ ] Die mobile Responsivität funktioniert auf jeder Template-Seite
- [ ] Die Ladegeschwindigkeit der Seite ist akzeptabel (testen Sie dies mit einem Tool wie GTmetrix oder PageSpeed Insights)
- [ ] Es gibt keine fehlerhaften Links oder fehlende Assets auf irgendeinem Template

### Pläne und Produkte

- [ ] Alle drei Pläne sind aktiv und sichtbar
- [ ] Die Planbeschreibungen sind korrekt und nischenspezifisch
- [ ] Die Preise sind richtig (monatlich und jährlich)
- [ ] Setup-Gebühren sind auf den richtigen Plänen konfiguriert
- [ ] Die Testphase funktioniert beim Starter-Plan
- [ ] Order Bumps erscheinen während des Checkouts korrekt
- [ ] Die Einschränkungen für Plugins und Themes werden pro Plan korrekt durchgesetzt

### Checkout-Flow

- [ ] Führen Sie eine vollständige Testanmeldung für jeden Plan durch (verwenden Sie den Testzahlungsmodus)
- [ ] Die Template-Auswahl zeigt die korrekten Templates pro Plan
- [ ] Die Zahlung wird erfolgreich verarbeitet
- [ ] Der Kunde erhält nach der Anmeldung die Willkommens-E-Mail
- [ ] Eine neue Website wird mit dem korrekten Template erstellt
- [ ] Der Kunde kann sich sofort auf seiner neuen Website anmelden
- [ ] Rabattcodes funktionieren korrekt

### Branding

- [ ] Die Login-Seite zeigt das FitSite-Branding
- [ ] Das Admin-Dashboard zeigt das FitSite-Branding
- [ ] Alle System-E-Mails verwenden das FitSite-Branding und fitnessspezifische Sprache
- [ ] Rechnungen werden korrekt mit Ihren Geschäftsdaten angezeigt
- [ ] Die Marketing-Seite ist live und verlinkt auf das Checkout-Formular

### Onboarding

- [ ] Das Quick Start Widget erscheint auf den Dashboards neuer Kunden
- [ ] Alle Quick Start Links führen zu den korrekten Seiten
- [ ] Die Willkommens-E-Mail-Sequenz ist konfiguriert und getestet
- [ ] Knowledge Base Artikel sind veröffentlicht und zugänglich
- [ ] Die Kontoseite zeigt die korrekten Planinformationen und Upgrade-Optionen

### Rechtliches und Geschäftliches

- [ ] Die Nutzungsbedingungen sind veröffentlicht und vom Checkout aus verlinkt
- [ ] Die Datenschutzrichtlinie ist veröffentlicht und zugänglich
- [ ] Die Rückerstattungsrichtlinie ist definiert und dokumentiert
- [ ] Die Geschäftseinheit ist für den Zahlungseingang eingerichtet
- [ ] Das Payment Gateway ist im Live-Modus (nicht im Testmodus)
- [ ] Die Steuerkonfiguration ist für Ihre Gerichtsbarkeit korrekt

## Soft Launch vs. Hard Launch

Betrachten Sie einen zweistufigen Launch:

### Phase 1: Soft Launch

Laden Sie 5–10 Besitzer von Fitnessstudios ein, sich vor dem öffentlichen Start anzumelden. Das sind Ihre Beta-Kunden. Bieten Sie ihnen im Gegenzug für:

- Ehrliches Feedback zum Anmelde- und Onboarding-Erlebnis
- Die Erlaubnis, ihre Website als Showcase-Beispiel zu verwenden
- Die Meldung von Bugs oder Problemen, auf die sie stoßen

...einen erheblichen Rabatt (50 % lebenslang oder 3 Monate kostenlos) an.

Dies gibt Ihnen echtes Kundenfeedback und Live-Websites, die Sie vor der Öffnung für die Öffentlichkeit zeigen können.

### Phase 2: Public Launch

Sobald das Feedback aus dem Soft Launch integriert wurde:

- Wechseln Sie das Payment Gateway in den Live-Modus
- Veröffentlichen Sie Ihre Marketing-Seite
- Beginnen Sie mit der Kundengewinnung (Lektion 11)
- Kündigen Sie es auf relevanten Branchenkanälen an

## Maßnahmen für den Starttag

Am Tag des öffentlichen Starts:

1. **Auf Live-Zahlungen umschalten** – deaktivieren Sie den Testmodus Ihres Payment Gateways
2. **Noch einmal überprüfen** – führen Sie eine vollständige Testanmeldung mit einer echten Zahlung durch (erstatten Sie sich danach das Geld)
3. **Eng überwachen** – achten Sie auf Fehler, fehlgeschlagene Anmeldungen oder Zahlungsprobleme
4. **Erreichbar sein** – Ihre ersten echten Kunden benötigen möglicherweise Hilfe, und eine schnelle Reaktion schafft Vertrauen
5. **Kurz feiern** – und dann wieder mit der Arbeit beginnen

## Was schiefgehen kann

Seien Sie auf Folgendes vorbereitet:

- **Probleme mit dem Payment Gateway**: Halten Sie den Support-Kontakt Ihres Gateway-Anbieters bereit
- **SSL-Zertifikat-Probleme**: Wissen Sie, wie man Zertifikate überprüft und verlängert
- **E-Mail-Lieferfehler**: Testen Sie, ob die E-Mails tatsächlich ankommen (überprüfen Sie den Spam-Ordner)
- **Leistung unter Last**: Wenn Sie einen Traffic-Anstieg erleben, wissen Sie, wie Sie Ihr Hosting skalieren können
- **Verwirrung des Kunden**: Halten Sie Ihre Knowledge Base und Support-Kanäle bereit

## Das FitSite Network bisher

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Was wir in dieser Lektion aufgebaut haben

- **Eine umfassende Pre-Launch-Checkliste**, die Infrastruktur, Inhalte, Zahlungen und rechtliche Aspekte abdeckt
- **Eine Soft-Launch-Strategie**, um vor dem öffentlichen Start echtes Feedback zu erhalten
- **Vorgehensweisen für den Starttag**, um mit Zuversicht live zu gehen
- **Ein Notfallplan** für häufige Probleme am Starttag

---

**Weiter:** [Lesson 11: Finding Customers](lesson-11-customers) – Jetzt, wo FitSite live ist, wie gewinnen Sie Fitnessstudiobesitzer?
