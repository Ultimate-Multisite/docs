---
title: 'Lektion 4: Erstellen von Nischen-Vorlagen'
sidebar_position: 5
_i18n_hash: 3ade990de5fd404a7f09a9d42d7535ee
---
# Lesson 4: Building Niche Templates {#lesson-4-building-niche-templates}

Vorlagen sind das Kernstück Ihres Nischen-Alleinstellungsmerkmals. Ein Besitzer eines Fitnessstudios, der sich anmeldet und eine Website sieht, die bereits wie eine Fitness-Website aussieht – mit Kursplänen, Trainerprofilen und den passenden Bildern – bleibt viel eher Kunde als jemand, der vor einer leeren Leinwand steht.

## Where We Left Off {#where-we-left-off}

Wir haben ein funktionierendes FitSite-Netzwerk mit Ultimate Multisite installiert und konfiguriert. Nun bauen wir die Vorlagen, die FitSite für Fitnessunternehmen zu einem maßgeschneiderten Produkt machen.

## Why Niche Templates Matter {#why-niche-templates-matter}

Allgemeine Vorlagen zwingen Ihre Kunden, die schwere Arbeit zu leisten: herauszufinden, welche Seiten sie benötigen, welche Inhaltsstruktur funktioniert und wie sie es für ihre Branche aussehen lassen. Nischen-Vorlagen eliminieren diese Reibung.

Ein Besitzer eines Fitnessstudios, der sich für FitSite anmeldet, sollte sehen:

- Eine Startseite, die wie eine Fitnessstudio-Website aussieht
- Bereits erstellte Seiten für Kurse, Pläne, Trainer und Preise
- Bilder und Platzhalter-Inhalte, die zu ihrer Branche passen
- Ein Design, das professionell und markenkonform für Fitness wirkt

Sie füllen nur noch ihre Details ein. Sie starten nicht bei Null.

## Planning Your Templates {#planning-your-templates}

Bevor Sie mit dem Bau beginnen, entscheiden Sie, welche Vorlagen Sie anbieten möchten. Für FitSite erstellen wir drei:

### Template 1: Studio Essential {#template-1-studio-essential}

Für kleine Studios und Personal Trainer.

- **Homepage** mit Hero-Bild, Kurs-Highlights und Call-to-Action
- **Über uns** Seite mit Studio-Geschichte und Mission
- **Kurse** Seite mit Planungs-Layout
- **Trainer** Seite mit Profilkarten
- **Kontakt** Seite mit Standortkarte und Formular
- **Klares, modernes Design** mit einer für Fitness passenden Farbgebung

### Template 2: Gym Pro {#template-2-gym-pro}

Für etablierte Fitnessstudios mit mehr Dienstleistungen.

- Alles aus Studio Essential, plus:
- **Mitgliedschaft** Seite mit Preistabelle
- **Galerie** Seite für Fotos der Einrichtung
- **Blog** Sektion für Fitness-Tipps und Nachrichten
- **Testimonials** Sektion auf der Startseite
- **Prominente Branding** Optionen

### Template 3: Fitness Chain {#template-3-fitness-chain}

Für Standorte mit mehreren Filialen.

- Alles aus Gym Pro, plus:
- **Standorte** Seite mit mehreren Filiallisten
- **Franchise/Standort** Unterseiten-Vorlage
- **Zentrales Branding** mit standortspezifischen Details
- **Mitarbeiterverzeichnis** über alle Standorte hinweg

## Building a Template Site {#building-a-template-site}

In Ultimate Multisite ist eine Vorlage einfach eine WordPress-Website, die so konfiguriert ist, dass neue Kundenseiten so aussehen. So erstellen Sie eine:

### Step 1: Create the Template Site {#step-1-create-the-template-site}

1. Navigieren Sie zu **Sites > Add New** in Ihrem Netzwerk-Admin
2. Erstellen Sie eine Seite mit dem Namen `template-studio-essential`
3. Diese Seite wird zu Ihrer Arbeits-Leinwand

### Step 2: Install and Configure the Theme {#step-2-install-and-configure-the-theme}

Wechseln Sie zum Dashboard der Vorlagen-Seite und:

1. Aktivieren Sie ein Theme, das für Fitnessunternehmen geeignet ist
2. Konfigurieren Sie die Theme-Einstellungen, Farben und Typografie
3. Richten Sie Kopf- und Fußzeile mit einer für Fitness passenden Navigation ein

:::tip Theme Selection
Wählen Sie ein Theme, das flexibel genug ist, um für Fitness gut auszusehen, aber nicht so komplex, dass Ihre Kunden es nicht verwalten können. Themes wie Astra, GeneratePress oder Kadence eignen sich gut, da sie leichtgewichtig, anpassbar und gut unterstützt sind.
:::

### Step 3: Create the Pages {#step-3-create-the-pages}

Erstellen Sie jede Seite mit:

- **Platzhalter-Inhalten**, die natürlich für Fitness klingen ("Willkommen bei [Studio Name]" und nicht "Lorem ipsum")
- **Platzhalter-Bildern** von kostenlosen Stockfoto-Seiten, die Fitnessaktivitäten zeigen
- **Funktionalen Layouts** mithilfe des Page Builders oder des Block Editors

Machen Sie die Platzhalter-Inhalte, wo immer möglich, anleitend. Anstatt generischem Fülltext schreiben Sie Inhalte wie: "Ersetzen Sie dies durch eine kurze Beschreibung Ihres Studios und was es besonders macht. Erwähnen Sie Ihre Trainingsphilosophie, Jahre der Erfahrung oder was die Kunden erwarten können."

### Step 4: Configure Plugins {#step-4-configure-plugins}

Installieren und aktivieren Sie Plugins, die Fitnessstudios benötigen:

- Ein Buchungs- oder Terminplanungs-Plugin (falls es zu Ihrem Plan-Tier gehört)
- Ein Kontaktformular-Plugin
- Ein SEO-Plugin (vorauskonfiguriert mit fitnessrelevanten Standardeinstellungen)

### Step 5: Mark as Template {#step-5-mark-as-template}

1. Navigieren Sie zu **Ultimate Multisite > Sites**
2. Bearbeiten Sie die Vorlagen-Seite
3. Aktivieren Sie den Schalter **Site Template**

Wiederholen Sie diesen Prozess für jede Vorlage, die Sie anbieten möchten.

## Template Quality Checklist {#template-quality-checklist}

Bevor Sie eine Vorlage verfügbar machen, überprüfen Sie:

- [ ] Alle Seiten laden korrekt und sehen professionell aus
- [ ] Platzhalter-Inhalte sind hilfreich und nischenspezifisch
- [ ] Bilder sind passend und ordnungsgemäß lizenziert
- [ ] Die mobile Darstellung funktioniert auf allen Seiten
- [ ] Die Navigation ist logisch und vollständig
- [ ] Kontaktformulare funktionieren
- [ ] Keine fehlerhaften Links oder fehlende Assets
- [ ] Die Seitenladezeit ist akzeptabel

## The FitSite Network So Far {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Site Templates
│   ├── Studio Essential (small studios, trainers)
│   ├── Gym Pro (established gyms)
│   └── Fitness Chain (multi-location)
└── Ready for plan configuration (next lesson)
```

## What We Built This Lesson {#what-we-built-this-lesson}

- **Drei nischenspezifische Vorlagen** für verschiedene Größen von Fitnessunternehmen
- **Fitness-passende Inhalte und Bilder**, die die Plattform zu einem maßgeschneiderten Produkt machen
- **Anleitende Platzhalter-Inhalte**, die Kunden bei der Anpassung führen
- **Eine Qualitäts-Checkliste**, um sicherzustellen, dass die Vorlagen produktionsbereit sind

---

**Next:** [Lesson 5: Designing Your Plans](lesson-5-plans) -- wir erstellen Produktstufen, die der tatsächlichen Funktionsweise von Fitnessunternehmen entsprechen.
