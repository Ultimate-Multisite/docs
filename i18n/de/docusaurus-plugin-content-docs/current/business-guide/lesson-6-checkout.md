---
title: 'Lektion 6: Das Anmelderlebnis'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# Lektion 6: Das Registrierungserlebnis

Der Bezahlvorgang ist der Punkt, an dem Interesse zu Umsatz wird. Ein verwirrender oder generischer Anmeldeprozess verliert Kunden. Ein auf eine Nische zugeschnittener Ablauf, der deren Sprache spricht und sich mühelos anfühlt, wandelt sie in zahlende Kunden um.

## Wo wir aufgehört haben {#where-we-left-off}

FitSite hat Templates und Pläne konfiguriert. Jetzt bauen wir das Registrierungs- und Bezahl-Erlebnis, das Fitnessstudio-Betreiber in zahlende Kunden verwandelt.

## Den Registrierungsablauf verstehen {#understanding-the-registration-flow}

Die Checkout-Formulare von Ultimate Multisite sind vollständig anpassbare Multi-Step-Formulare. Für FitSite möchten wir einen Ablauf, der:

1. sich anfühlt, als wäre er für Fitnessunternehmen entwickelt worden
2. nur das erfasst, was nötig ist
3. den Kunden so schnell wie möglich zu einer funktionierenden Website bringt

Siehe [The Registration Flow](/user-guide/configuration/the-registration-flow) für die vollständige technische Referenz.

## Das FitSite Checkout gestalten {#designing-the-fitsite-checkout}

Navigieren Sie zu **Ultimate Multisite > Checkout Forms** und erstellen Sie ein neues Formular.

### Schritt 1: Planauswahl {#step-1-plan-selection}

Das Erste, was ein Fitnessstudio-Betreiber sehen sollte, sind die Pläne, präsentiert in Begriffen, die er versteht.

- Fügen Sie ein Feld **Pricing Table** hinzu
- Konfigurieren Sie es so, dass alle drei FitSite-Pläne angezeigt werden
- Die Planbeschreibungen, die Sie in Lektion 5 verfasst haben, erscheinen hier – stellen Sie sicher, dass sie sich an die Bedürfnisse von Fitnessunternehmen richten und nicht an technische Funktionen

:::tip Nischensprache ist wichtig
„1 GB Speicher“ bedeutet nichts für einen Fitnessstudio-Betreiber. „Alles, was Sie für eine professionelle Studio-Website brauchen“ bedeutet alles. Verfassen Sie Planbeschreibungen in der Sprache Ihres Kunden.
:::

### Schritt 2: Template-Auswahl {#step-2-template-selection}

Nach der Auswahl eines Plans wählt der Kunde sein Start-Template.

- Fügen Sie ein Feld **Template Selection** hinzu
- Die verfügbaren Templates werden nach dem ausgewählten Plan gefiltert (konfiguriert in Lektion 5)
- Jedes Template sollte ein Vorschau-Bild enthalten, das ein fitnessspezifisches Design zeigt

### Schritt 3: Kontoerstellung {#step-3-account-creation}

Halten Sie dies minimal. Erfassen Sie nur:

- E-Mail-Adresse
- Passwort
- Studio-/Firmenname (dies wird zu ihrem Seitennamen)

Fragen Sie nicht nach Informationen, die Sie bei der Anmeldung nicht benötigen. Jedes zusätzliche Feld reduziert die Konversionsrate.

### Schritt 4: Seiteneinrichtung {#step-4-site-setup}

- **Site title**: Vorbefüllt aus dem Studio-Namen, der in Schritt 3 eingegeben wurde
- **Site URL**: Automatisch generiert aus dem Studio-Namen (z. B. `ironworks.fitsite.com`)

### Schritt 5: Zahlung {#step-5-payment}

- Fügen Sie das Feld **Payment** hinzu
- Konfigurieren Sie Ihr Zahlungs-Gateway ([Stripe](/user-guide/payment-gateways/stripe) wird für Abonnement-Abrechnungen empfohlen)
- Wenn Sie in Lektion 5 Order Bumps erstellt haben, fügen Sie ein Feld **Order Bump** vor dem Zahlungsschritt hinzu

### Schritt 6: Bestätigung {#step-6-confirmation}

- Passen Sie die Bestätigungsnachricht mit fitnessspezifischer Sprache an
- Beispiel: „Ihre Fitnessstudio-Website wird erstellt. Sie werden in wenigen Sekunden auf Ihre neue Seite weitergeleitet.“

## Hinzufügen eines Perioden-Auswahl-Toggles {#adding-a-period-selection-toggle}

Wenn Sie Preisvariationen in Ihren Plänen eingerichtet haben (monatlich vs. jährlich), fügen Sie ein Feld **Period Selection** zum Checkout-Formular hinzu, damit Kunden zwischen den Abrechnungsperioden umschalten können. Sie finden die Anweisungen unter [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle).

## Zahlung konfigurieren {#configuring-payment}

Falls Sie noch kein Zahlungs-Gateway eingerichtet haben:

1. Navigieren Sie zu **Ultimate Multisite > Settings > Payment Gateways**
2. Folgen Sie dem [Stripe Setup Guide](/user-guide/payment-gateways/stripe) oder Ihrem bevorzugten Gateway
3. Testen Sie einen vollständigen Checkout-Flow mit einer Testzahlung

Siehe [Getting Paid](/user-guide/payment-gateways/getting-paid) für Details darüber, wie Zahlungen auf Ihr Konto fließen.

## Den Flow testen {#testing-the-flow}

Bevor Sie fortfahren, führen Sie eine vollständige Testanmeldung durch:

1. Öffnen Sie das Checkout-Formular in einem Inkognito-/privaten Browserfenster
2. Wählen Sie einen Plan
3. Wählen Sie ein Template
4. Erstellen Sie ein Konto
5. Schließen Sie die Zahlung ab (verwenden Sie den Testmodus)
6. Verifizieren Sie, dass die Website mit dem korrekten Template erstellt wurde

Überprüfen Sie, ob:

- [ ] Die Planbeschreibungen klar und nischenspezifisch sind
- [ ] Die Template-Vorschauen fitnessgerechte Designs zeigen
- [ ] Die Site URL korrekt aus dem Studio-Namen generiert wird
- [ ] Die Zahlung erfolgreich verarbeitet wird
- [ ] Der Kunde auf einer funktionierenden Website mit dem ausgewählten Template landet
- [ ] Die Bestätigungs-E-Mails fitnessspezifische Sprache verwenden

## Das FitSite Network bisher {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Was wir in dieser Lektion gebaut haben {#what-we-built-this-lesson}

- **Ein Multi-Step-Checkout-Formular**, zugeschnitten auf Fitnessstudio-Betreiber
- **Nischenspezifische Sprache** im gesamten Anmeldeprozess
- **Minimaler Aufwand** – nur die wesentlichen Felder, schneller Weg zu einer funktionierenden Website
- **Zahlungsintegration** mit Testverifizierung
- **Ein getesteter End-to-End-Flow** von der Planauswahl bis zur funktionierenden Website

---

**Weiter:** [Lesson 7: Making It Yours](lesson-7-branding) – wir white-labeln die Plattform und etablieren FitSite als Marke.
