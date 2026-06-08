---
title: 'Lektion 5: Gestaltung Ihrer Pläne'
sidebar_position: 6
_i18n_hash: 8c58dfd0a186bd585f43342bc4ea4f43
---
# Lektion 5: Gestaltung Ihrer Pläne

Ihre Plan-Stufen sind nicht nur Preisniveaus – sie spiegeln wider, wie Ihre Nischenkunden tatsächlich arbeiten. In dieser Lektion gestalten Sie Produkt-Stufen, die den realen Bedürfnissen von Fitness-Unternehmen in verschiedenen Phasen entsprechen.

## Wo wir aufgehört haben

FitSite hat drei fertige Templates (Studio Essential, Gym Pro, Fitness Chain). Jetzt erstellen wir die Pläne, die bestimmen, auf was die Kunden zugreifen und was sie bezahlen.

## Denken in Kundensegmenten

Der Fehler, den die meisten Menschen machen, ist, Pläne um technische Funktionen zu entwerfen (Speicherplatz, Bandbreite, Anzahl der Seiten). Ihre Nischenkunden denken nicht in diesen Begriffen. Ein Fitnessstudio-Betreiber denkt darüber nach, was er braucht, um sein Geschäft zu führen.

Für Fitnessstudios gibt es drei natürliche Segmente:

| Segment | Wer sie sind | Was sie brauchen |
|---------|-------------|----------------|
| **Solo-Trainer / kleine Studios** | 1–3 Mitarbeiter, ein Standort, am Anfang | Eine professionelle Website, Kursinformationen, Kontaktformular |
| **Etablierte Fitnessstudios** | 5–20 Mitarbeiter, ein Standort, wachsen | Alles oben Genannte plus Buchung, Blog, Galerie, Custom Domain |
| **Fitnessketten** | Mehrere Standorte, etablierte Marke | Alles oben Genannte plus Multisite, Standortseiten, Mitarbeiterverzeichnis |

Ihre Pläne sollten auf diese Segmente abgestimmt sein, nicht auf willkürliche Funktionsbündel.

## Erstellen der FitSite Pläne

Navigieren Sie für jeden Plan zu **Ultimate Multisite > Products > Add Product**.

### Plan 1: FitSite Starter -- 49 $/Monat

**Zielgruppe**: Solo-Trainer und kleine Studios

**Beschreibung (Description tab)**:
- Name: FitSite Starter
- Beschreibung: „Alles, was ein Personal Trainer oder ein kleines Studio braucht, um online professionell zu wirken.“

**Allgemein (General tab)**:
- Produkttyp: Plan
- Kundenrolle: Administrator

**Site Templates (Website-Templates)**:
- Site Templates erlauben: Aktiviert
- Verfügbare Templates: Nur Studio Essential

**Einschränkungen (Limitations)**:
- Websites: 1
- Festplattenspeicher: 1 GB
- Custom Domain: Deaktiviert (verwendet `studioname.fitsite.com`)

**Plugins (Plugins tab)**:
- Kontaktformular-Plugin: Erzwingen (Force Activate)
- SEO-Plugin: Erzwingen (Force Activate)
- Buchungs-Plugin: Nicht verfügbar (Upgrade-Anreiz)

**Themes (Themes tab)**:
- Ihr ausgewähltes Theme: Erzwingen (Force Activate)
- Alle anderen Themes: Versteckt (Hidden)

### Plan 2: FitSite Growth -- 99 $/Monat

**Zielgruppe**: Etablierte Studios mit einem Standort

**Beschreibung (Description tab)**:
- Name: FitSite Growth
- Beschreibung: „Für etablierte Studios, die bereit sind, ihre Online-Präsenz auszubauen und neue Mitglieder zu gewinnen.“

**Site Templates (Website-Templates)**:
- Verfügbare Templates: Studio Essential und Gym Pro

**Einschränkungen (Limitations)**:
- Websites: 1
- Festplattenspeicher: 5 GB
- Custom Domain: Aktiviert

**Plugins (Plugins tab)**:
- Alles aus Starter, plus:
- Buchungs-Plugin: Erzwingen (Force Activate)
- Galerie-Plugin: Erzwingen (Force Activate)
- Blog-Funktionalität: Verfügbar

**Upgrade & Downgrades (Up & Downgrades tab)**:
- Plan-Gruppe: FitSite Plans
- Produktreihenfolge: 2

### Plan 3: FitSite Pro -- 199 $/Monat

**Zielgruppe**: Fitnessketten mit mehreren Standorten

**Beschreibung (Description tab)**:
- Name: FitSite Pro
- Beschreibung: „Die komplette Plattform für Fitnessmarken mit mehreren Standorten.“

**Site Templates (Website-Templates)**:
- Verfügbare Templates: Alle drei Templates

**Einschränkungen (Limitations)**:
- Websites: 5 (eins pro Standort)
- Festplattenspeicher: 20 GB
- Custom Domain: Aktiviert

**Plugins (Plugins tab)**:
- Alles aus Growth, plus:
- Alle Premium-Plugins: Erzwingen (Force Activate)

**Upgrade & Downgrades (Up & Downgrades tab)**:
- Plan-Gruppe: FitSite Plans
- Produktreihenfolge: 3

## Einrichtung der Plan-Gruppe

Die Plan-Gruppe stellt sicher, dass Kunden innerhalb der FitSite Plan-Familie nur upgraden oder downgraden können. Auf dem **Up & Downgrades** Tab jedes Plans:

1. Setzen Sie die **Plan Group** für alle drei Pläne auf „FitSite Plans“
2. Setzen Sie die **Product Order** auf 1 (Starter), 2 (Growth), 3 (Pro)

Dadurch entsteht ein klarer Upgrade-Pfad: Starter → Growth → Pro.

## Hinzufügen von Order Bumps

Order Bumps sind Zusatzprodukte, die beim Checkout angeboten werden. Für FitSite sollten Sie in Betracht ziehen:

- **Extra Storage Pack** (19 $/Monat) – zusätzliche 5 GB Festplattenspeicher
- **Priority Support** (29 $/Monat) – schnellere Reaktionszeiten
- **Additional Site** (39 $/Monat) – für Kunden, die mehr Websites benötigen, als ihr Plan zulässt

Erstellen Sie diese als Produkte vom Typ **Package** in Ultimate Multisite und verknüpfen Sie sie mit den entsprechenden Plänen.

## Warum diese Struktur funktioniert

- **Starter** beseitigt Einstiegshürden – niedriger Preis, einfaches Angebot, bringt Trainer schnell online
- **Growth** fügt die Funktionen hinzu, nach denen Studios tatsächlich fragen – Buchung, Galerien, Custom Domains
- **Pro** bedient das hochwertige Segment, das Unterstützung für mehrere Standorte benötigt
- **Order Bumps** ermöglichen es Kunden, individuell anzupassen, ohne die Kernpläne zu verkomplizieren
- **Klarer Upgrade-Pfad** bedeutet, dass Kunden mit Ihnen wachsen, anstatt abzuwandern

## Das FitSite Network bisher

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products
│   ├── FitSite Starter ($49/mo) → Studio Essential template
│   ├── FitSite Growth ($99/mo) → Studio Essential + Gym Pro templates
│   ├── FitSite Pro ($199/mo) → All templates
│   └── Order Bumps (Extra Storage, Priority Support, Additional Site)
└── Ready for checkout configuration (next lesson)
```

## Was wir in dieser Lektion gebaut haben

- **Drei Plan-Stufen**, abgestimmt auf reale Fitness-Geschäftssegmente
- **Feature-Steuerung** mithilfe der Plugin- und Template-Kontrollen von Ultimate Multisite
- **Eine Plan-Gruppe** mit einem klaren Upgrade-Pfad
- **Order Bump Produkte** für zusätzliche Einnahmen
- **Eine Preisstruktur**, basierend auf dem Kundennutzen, nicht auf technischen Spezifikationen

---

**Weiter:** [Lektion 6: Das Anmelde-Erlebnis](lesson-6-checkout) – wir bauen einen Checkout-Flow, der Fitnessstudio-Betreiber in zahlende Kunden verwandelt.
