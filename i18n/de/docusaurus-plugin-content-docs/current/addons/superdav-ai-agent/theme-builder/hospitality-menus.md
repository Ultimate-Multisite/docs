---
title: Gastronomie-Menüs
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Gastronomie-Karten

Die Funktion **Gastronomie-Karten** ermöglicht es Theme Builder, strukturierte Speise- und Getränkekarten direkt in Ihre WordPress-Seite zu generieren und einzubetten.

## Überblick

Mit Theme Builder können Sie nun professionelle, strukturierte Menüseiten für Gastronomiebetriebe erstellen – darunter Restaurants, Cafés, Bars und Catering-Dienste. Diese Menüs sind vollständig in das Design Ihrer Website integriert und können einfach aktualisiert und verwaltet werden.

## Unterstützte Gastronomie-Typen

- **Restaurants** — Menüs für vollwertige Gastronomie
- **Cafés** — Kaffee- und leichte Speisen-Menüs
- **Bars und Lounges** — Getränke- und Vorspeisen-Menüs
- **Bäckereien** — Konditorei- und Brot-Menüs
- **Catering-Dienste** — Menüoptionen für Veranstaltungen
- **Food Trucks** — Menüs für mobile Gastronomie
- **Brauereien und Weingüter** — Getränke-Menüs mit Beschreibungen

## Menüstruktur

### Menü-Kategorien

Menüs werden in Kategorien organisiert:

- **Vorspeisen** — Starter und kleine Gerichte
- **Hauptgerichte** — Hauptspeisen
- **Beilagen** — Beilagen und Gemüse
- **Desserts** — Süßspeisen
- **Getränke** — Drinks (alkoholisch und nicht-alkoholisch)
- **Spezialitäten** — Tages- oder saisonale Angebote

### Menü-Artikel-Format

Jeder Menü-Artikel enthält:

```json
{
  "name": "Gebratener Lachs",
  "description": "Frischer Atlantischer Lachs mit Zitronenbuttersoße",
  "price": "$24.95",
  "dietary_info": ["Glutenfrei", "Proteinreich"],
  "allergens": ["Fisch"],
  "availability": "Täglich"
}
```

#### Artikel-Felder

| Feld | Typ | Beschreibung |
|-------|------|-------------|
| `name` | string | Name des Gerichts oder Getränks |
| `description` | string | Detaillierte Beschreibung des Artikels |
| `price` | string | Preis (formatiert mit Währung) |
| `dietary_info` | array | Ernährungsmerkmale (Vegan, Glutenfrei usw.) |
| `allergens` | array | Häufige Allergene (Nüsse, Schalentiere usw.) |
| `availability` | string | Verfügbarkeit (Täglich, Saisonal usw.) |

## Gastronomie-Menüs erstellen

### Schritt 1: Menüinformationen bereitstellen

Sagen Sie Theme Builder, worum es in Ihrem Menü geht:

```
Erstelle ein Restaurantmenü für mein italienisches Restaurant mit Vorspeisen,
Pastagerichten, Hauptgerichten und Desserts. Füge Preise und Beschreibungen hinzu.
```

### Schritt 2: Theme Builder generiert das Menü

Theme Builder:

1. Erstellt eine strukturierte Menüseite
2. Gestaltet sie passend zum Theme Ihrer Website
3. Organisiert die Artikel in Kategorien
4. Formatiert Preise und Beschreibungen
5. Fügt Ernährungs- und Allergeninformationen hinzu

### Schritt 3: Überprüfen und anpassen

Sie können:

1. Menüartikel und Preise bearbeiten
2. Kategorien hinzufügen oder entfernen
3. Artikel innerhalb der Kategorien neu anordnen
4. Beschreibungen und Ernährungsangaben aktualisieren
5. Stil und Layout anpassen

## Menü-Anzeigeoptionen

### Vollständige Menüseite

Eine dedizierte Seite, die Ihr komplettes Menü anzeigt:

- Organisiert nach Kategorien
- Durchsuchbar und filterbar
- Für den Druck optimiertes Layout
- Mobilgeräte-freundliches Design

### Menü-Widget

Betten Sie Menüabschnitte auf anderen Seiten ein:

- Hervorgehobene Artikel auf der Startseite
- Tagesangebote in der Seitenleiste
- Getränke-Menü auf der Bar-Seite
- Dessert-Präsentation im Footer

### Menü-PDF

Generieren Sie ein herunterladbares PDF-Menü:

- Professionelle Formatierung
- Druckfertige Qualität
- Enthält Bilder und Beschreibungen
- Einfach zu teilen und per E-Mail zu versenden

## Ernährungs- und Allergeninformationen

### Ernährungsmerkmale

Markieren Sie Artikel mit Ernährungsangaben:

- **Vegan** — keine tierischen Produkte
- **Vegetarisch** — kein Fleisch
- **Glutenfrei** — sicher bei Zöliakie
- **Milchfrei** — keine Milchprodukte
- **Nussfrei** — keine Baumnüsse oder Erdnüsse
- **Low-Carb** — reduziert Kohlenhydrate
- **Proteinreich** — proteinhaltig

### Allergen-Warnungen

Fügen Sie häufige Allergene hinzu:

- **Nüsse** — Baumnüsse und Erdnüsse
- **Schalentiere** — Krebstiere und Mollusken
- **Fisch** — alle Fischarten
- **Milch** — Milch und Milchprodukte
- **Eier** — Hühnereier
- **Soja** — Sojaprodukte
- **Gluten** — Weizen und glutenhaltiges Getreide
- **Sesam** — Sesamsamen und Öl

## Menüverwaltung

### Preise aktualisieren

Menüpreise einfach aktualisieren:

1. Navigieren Sie zur Menüseite
2. Klicken Sie auf „Menü bearbeiten“
3. Aktualisieren Sie die Preise für die Artikel
4. Änderungen speichern
5. Die Änderungen erscheinen sofort auf Ihrer Website

### Saisonale Artikel hinzufügen

Saisonale Menüvariationen erstellen:

1. Erstellen Sie eine neue Menüversion
2. Fügen Sie saisonale Artikel hinzu
3. Markieren Sie Artikel als „Saisonal“
4. Planen Sie die Verfügbarkeitsdaten
5. Werden automatisch während der Saison angezeigt

### Spezialitäten verwalten

Tages- oder Wochenangebote anzeigen:

1. Erstellen Sie eine Kategorie „Spezialitäten“
2. Fügen Sie Artikel mit Verfügbarkeitsdaten hinzu
3. Hervorheben der Spezialitäten auf der Startseite
4. Täglich oder wöchentlich aktualisieren
5. Alte Spezialitäten archivieren

## Integration mit Theme Builder

Wenn Sie Theme Builder für Gastronomie-Websites verwenden:

1. **Automatische Menüerkennung** — erkennt, ob es sich um ein Lebensmittel-/Getränke-Geschäft handelt
2. **Menüseiten-Erstellung** — generiert professionelle Menüseiten
3. **Design-Abgleich** — die Menüs stimmen mit dem Theme Ihrer Website überein
4. **Mobile Optimierung** — die Menüs werden auf Handys schön angezeigt
5. **SEO-Optimierung** — die Menüs sind für Suchmaschinen geeignet

## Best Practices

### Menüdesign

- **Klare Struktur** — logische Kategorienstruktur
- **Lesbare Beschreibungen** — appetitanregend und informativ
- **Konsistente Preise** — klare Währung und Formatierung
- **Professionelle Fotos** — hochwertige Lebensmittelbilder
- **Weißraum** — die Seite nicht überladen

### Inhalte

- **Genaue Beschreibungen** — Artikel präzise beschreiben
- **Spezialitäten hervorheben** — Angebote besonders sichtbar machen
- **Allergene angeben** — Allergene immer auflisten
- **Regelmäßig aktualisieren** — Preise und Artikel aktuell halten
- **Appetitanregende Sprache verwenden** — die Artikel köstlich klingen lassen

### Barrierefreiheit

- **Lesbare Schriftarten** — klare, gut lesbare Schriftarten verwenden
- **Ausreichender Kontrast** — sicherstellen, dass der Text gut lesbar ist
- **Ernährungsbezeichnungen** — Ernährungsoptionen klar kennzeichnen
- **Allergenwarnungen** — Allergene prominent anzeigen
- **Mobilfreundlich** — auf allen Geräten testen

## Beispiele

### Restaurant-Menü-Struktur

```
Vorspeisen
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pastagerichte
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Hauptgerichte
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Café-Menü-Struktur

```
Kaffee
├── Espresso
├── Cappuccino
└── Latte

Konditorei
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Verwandte Funktionen

- [Create Menu](../abilities/create-menu.md) — Navigationsmenüs erstellen
- [Design Direction](./design-direction.md) — Das Design Ihrer Website anpassen
- [Discovery Interview](./discovery-interview.md) — Die Struktur Ihrer Website planen
