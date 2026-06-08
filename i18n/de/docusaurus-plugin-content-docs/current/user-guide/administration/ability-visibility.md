---
title: Sichtbarkeit der Fähigkeit
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Sichtbarkeit von Fähigkeiten (Ability Visibility)

Superdav AI Agent v1.12.0 führt die Steuerung **Sichtbarkeit von Fähigkeiten** ein, die festlegt, welche Oberflächen jede Fähigkeit (Ability) ausstellen. Dies ermöglicht Administratoren, präzise festzulegen, welche Agenten-Funktionen über REST APIs, MCP-Server, WooCommerce-Integrationen und andere Schnittstellen verfügbar sind.

## Was ist Sichtbarkeit von Fähigkeiten?

Sichtbarkeit von Fähigkeiten ist ein Berechtigungssystem, das steuert:

- **Welche Fähigkeiten** für Agenten verfügbar sind
- **Wo sie ausgestellt werden** (REST API, MCP, WooCommerce usw.)
- **Wer darauf zugreifen kann** (über Partner-Freigängigkeitslisten)
- **Wie sie klassifiziert sind** (anerkannt vs. nicht klassifiziert)

Jede Fähigkeit trägt ein Sichtbarkeitslevel, das ihre Verfügbarkeit über verschiedene Oberflächen hinweg bestimmt.

## Sichtbarkeitslevel

### Öffentlich (Public)

**Öffentliche Fähigkeiten** sind überall verfügbar:

- REST API Endpunkte
- MCP Server
- WooCommerce Integrationen
- Chat-Schnittstellen
- Alle Benutzerrollen (mit entsprechenden Berechtigungen)

Beispiel: `scaffold-block-theme`, `activate-theme`, `send-email`

### Intern (Internal)

**Interne Fähigkeiten** sind nur innerhalb Ihrer WordPress-Installation verfügbar:

- Chat-Schnittstellen
- Admin-Panels
- Nur für eingeloggte Benutzer
- Nicht über REST API oder externe Integrationen ausgestellt

Beispiel: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner)

**Partner-Fähigkeiten** sind nur für freigegebene Partner verfügbar:

- Erfordert einen expliziten Eintrag in der Partner-Freigängigkeitsliste
- Verfügbar über REST API mit Partner-Anmeldeinformationen
- Verfügbar über MCP mit Partner-Authentifizierung
- Nicht für normale Benutzer verfügbar

Beispiel: `bulk-import-users`, `modify-billing`, `access-analytics`

### Deaktiviert (Disabled)

**Deaktivierte Fähigkeiten** sind nirgends verfügbar:

- Nicht über irgendeine Oberfläche ausgestellt
- Nicht im Chat verfügbar
- Nicht in Admin-Panels verfügbar
- Nützlich für veraltete oder experimentelle Fähigkeiten

## Verwaltung der Sichtbarkeit von Fähigkeiten

### Zugriff auf die Einstellungen für die Sichtbarkeit von Fähigkeiten

1. Gehen Sie zu **WordPress Admin** → **Superdav AI Agent** → **Einstellungen**
2. Klicken Sie auf den Tab **Abilities**
3. Sie sehen eine Liste aller installierten Fähigkeiten mit ihren Sichtbarkeitsleveln

### Anzeigen der Fähigkeitsdetails

Klicken Sie auf eine beliebige Fähigkeit, um zu sehen:

- **Name**: Der Bezeichner der Fähigkeit
- **Beschreibung**: Was die Fähigkeit tut
- **Aktuelle Sichtbarkeit**: Öffentlich, Intern, Partner oder Deaktiviert
- **Partner-Freigängigkeitsliste**: Welche Partner zugreifen können (bei Partner-Sichtbarkeit)
- **Zuletzt aktualisiert**: Wann die Sichtbarkeit zuletzt geändert wurde
- **Status**: Anerkannt oder Nicht klassifiziert

### Ändern der Sichtbarkeitslevel

Um die Sichtbarkeit einer Fähigkeit zu ändern:

1. Klicken Sie auf die Fähigkeit in der Liste
2. Wählen Sie ein neues Sichtbarkeitslevel aus dem Dropdown-Menü
3. Wenn Sie „Partner“ auswählen, fügen Sie Partner-Bezeichner zur Freigängigkeitsliste hinzu
4. Klicken Sie auf **Speichern**

Beispiel:

```
Ability: bulk-import-users
Aktuelle Sichtbarkeit: Öffentlich
Ändern auf: Partner
Partner-Freigängigkeitsliste: partner-123, partner-456
```

### Massenoperationen

Um die Sichtbarkeit mehrerer Fähigkeiten zu ändern:

1. Setzen Sie einen Haken bei den Fähigkeiten
2. Wählen Sie ein neues Sichtbarkeitslevel aus dem Dropdown-Menü für Massenaktionen
3. Klicken Sie auf **Anwenden**

## Partner-Freigängigkeitsliste

Die **Partner-Freigängigkeitsliste** steuert, welche externen Partner auf Partner-Level-Fähigkeiten zugreifen können.

### Partner hinzufügen

1. Gehen Sie zu **Superdav AI Agent** → **Einstellungen** → **Partner**
2. Klicken Sie auf **Partner hinzufügen**
3. Geben Sie den Partner-Bezeichner ein (normalerweise ein API-Schlüssel oder eine Organisations-ID)
4. Optional einen Partnernamen und eine Beschreibung hinzufügen
5. Klicken Sie auf **Speichern**

### Fähigkeiten Partner zuweisen

Nachdem Sie einen Partner hinzugefügt haben:

1. Gehen Sie zum Tab **Abilities**
2. Suchen Sie eine Fähigkeit mit Partner-Sichtbarkeit
3. Klicken Sie zum Bearbeiten
4. Im Abschnitt „Partner-Freigängigkeitsliste“ setzen Sie Haken bei den Partnern, die Zugriff haben sollen
5. Klicken Sie auf **Speichern**

### Partner-Zugriff entziehen

Um den Zugriff eines Partners zu entfernen:

1. Bearbeiten Sie die Fähigkeit
2. Entfernen Sie den Haken des Partners in der Freigängigkeitsliste
3. Klicken Sie auf **Speichern**

Der Partner verliert sofort den Zugriff auf diese Fähigkeit.

## Nicht klassifizierte Fähigkeiten

Wenn Sie eine Drittanbieter-Fähigkeit installieren, die Superdav AI Agent nicht erkennt, wird sie als **Nicht klassifiziert** markiert.

### Admin-Benachrichtigung für nicht klassifizierte Fähigkeiten

Sie sehen eine Admin-Benachrichtigung:

```
⚠️ Nicht klassifizierte Fähigkeiten erkannt

Die folgenden Fähigkeiten wurden installiert, werden aber nicht erkannt:
- custom-import-tool
- external-api-wrapper

Diese Fähigkeiten können Sicherheits- oder Kompatibilitätsrisiken darstellen.
Bitte überprüfen und klassifizieren Sie sie.

[Fähigkeiten überprüfen] [Ignorieren]
```

### Nicht klassifizierte Fähigkeiten überprüfen

1. Klicken Sie in der Benachrichtigung auf **Fähigkeiten überprüfen**
2. Für jede nicht klassifizierte Fähigkeit sehen Sie:
   - Name und Beschreibung der Fähigkeit
   - Quelle (welches Plugin/Addon es installiert hat)
   - Vorgeschlagenes Sichtbarkeitslevel
   - Sicherheitsbewertung

3. Wählen Sie ein Sichtbarkeitslevel:
   - **Öffentlich**: Vertrauen Sie der Fähigkeit; stellen Sie sie überall bereit
   - **Intern**: Beschränken Sie sie nur auf die interne Nutzung
   - **Partner**: Beschränken Sie sie auf spezifische Partner
   - **Deaktiviert**: Verwenden Sie diese Fähigkeit nicht

4. Klicken Sie auf **Klassifizieren**, um Ihre Entscheidung zu speichern

### Warum nicht klassifizierte Fähigkeiten klassifizieren?

Die Klassifizierung von Fähigkeiten:

- **Verbessert die Sicherheit**: Sie genehmigen explizit, was ausgestellt wird
- **Verhindert Unfälle**: Nicht klassifizierte Fähigkeiten sind standardmäßig deaktiviert
- **Ermöglicht Funktionen**: Sobald sie klassifiziert sind, wird die Fähigkeit verfügbar
- **Dokumentiert Entscheidungen**: Ihre Entscheidungen werden zu Prüfzwecken protokolliert

## Sichtbarkeit in verschiedenen Oberflächen

### REST API

**Öffentliche Fähigkeiten** sind über REST-Endpunkte verfügbar:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interne und Partner-Fähigkeiten** sind über REST API nicht verfügbar.

### MCP Server

**Öffentliche Fähigkeiten** sind über MCP verfügbar:

```
MCP Server: Superdav AI Agent
Verfügbare Fähigkeiten:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interne Fähigkeiten** werden nicht über MCP ausgestellt.

**Partner-Fähigkeiten** sind nur mit Partner-Anmeldeinformationen verfügbar.

### WooCommerce Integration

**Öffentliche Fähigkeiten**, die mit WooCommerce zusammenhängen, sind verfügbar:

- Produktverwaltung
- Bestellabwicklung
- Kundenkommunikation

**Interne Fähigkeiten** werden nicht an WooCommerce ausgestellt.

### Chat-Schnittstelle

**Alle Fähigkeiten** (Öffentlich, Intern, Partner) sind im Chat verfügbar, abhängig von den Benutzerberechtigungen:

- Administratoren sehen alle Fähigkeiten
- Normale Benutzer sehen nur öffentliche Fähigkeiten
- Partner sehen öffentliche + Partner-Fähigkeiten (wenn freigegeben)

## Sicherheit Best Practices

### Prinzip der geringsten Rechte (Principle of Least Privilege)

- Setzen Sie Fähigkeiten auf das restriktivste Sichtbarkeitslevel, das ihre Nutzung dennoch erlaubt
- Verwenden Sie Partner-Sichtbarkeit für sensible Vorgänge
- Deaktivieren Sie Fähigkeiten, die Sie nicht nutzen

### Regelmäßige Audits

- Überprüfen Sie die Sichtbarkeit der Fähigkeiten monatlich
- Achten Sie auf nicht klassifizierte Fähigkeiten
- Entfernen Sie den Zugriff für nicht genutzte Partner

### Protokollierung und Überwachung

- Überwachen Sie, welche Fähigkeiten am häufigsten verwendet werden
- Verfolgen Sie die Zugriffsmuster der Partner
- Warnen Sie bei ungewöhnlicher Nutzung von Fähigkeiten

### Drittanbieter-Fähigkeiten

- Überprüfen Sie Drittanbieter-Fähigkeiten, bevor Sie sie aktivieren
- Klassifizieren Sie sie explizit
- Beginnen Sie mit interner oder Partner-Sichtbarkeit
- Beantragen Sie die öffentliche Sichtbarkeit erst nach gründlicher Prüfung

## Fehlerbehebung (Troubleshooting)

**Eine Fähigkeit wird in der Liste nicht angezeigt**
- Überprüfen Sie, ob die Fähigkeit installiert und aktiv ist
- Stellen Sie sicher, dass das Plugin/Addon aktiviert ist
- Aktualisieren Sie die Seite

**Ich kann die Sichtbarkeit einer Fähigkeit nicht ändern**
- Überprüfen Sie, ob Sie Administratorberechtigungen haben
- Stellen Sie sicher, dass die Fähigkeit nicht von einem Plugin gesperrt ist
- Versuchen Sie, widersprüchliche Plugins zu deaktivieren

**Ein Partner kann nicht auf eine Fähigkeit zugreifen**
- Überprüfen Sie, ob der Partner in der Freigängigkeitsliste ist
- Stellen Sie sicher, dass die Sichtbarkeit der Fähigkeit auf „Partner“ gesetzt ist
- Bestätigen Sie, dass die Anmeldeinformationen des Partners korrekt sind
- Überprüfen Sie die API-Protokolle auf Authentifizierungsfehler

**Nicht klassifizierte Fähigkeiten erscheinen immer wieder**
- Überprüfen und klassifizieren Sie sie in der Admin-Benachrichtigung
- Stellen Sie sicher, dass Ihre Klassifizierung gespeichert wurde
- Überprüfen Sie, ob das Plugin, das die Fähigkeit bereitstellt, aktuell ist

## Migration vom Legacy-Modus

Wenn Sie von einer älteren Version von Superdav AI Agent aktualisieren:

- Alle bestehenden Fähigkeiten werden automatisch als Öffentlich klassifiziert
- Überprüfen und passen Sie die Sichtbarkeit bei Bedarf an
- Es ist keine Aktion erforderlich, es sei denn, Sie möchten den Zugriff einschränken

Siehe **Migration des Drittanbieter-Modus** für weitere Details zur Umstellung auf die native Abilities API Integration.

## Nächste Schritte

Nach der Konfiguration der Sichtbarkeit von Fähigkeiten:

1. **Überprüfen Sie Ihre Fähigkeiten**: Führen Sie ein Audit aller installierten Fähigkeiten durch
2. **Klassifizieren Sie nicht klassifizierte Fähigkeiten**: Reagieren Sie auf Admin-Benachrichtigungen
3. **Richten Sie Partner ein**: Fügen Sie Partner hinzu, wenn Sie die Partner-Sichtbarkeit nutzen
4. **Überwachen Sie die Nutzung**: Verfolgen Sie, welche Fähigkeiten am häufigsten verwendet werden
5. **Dokumentieren Sie Entscheidungen**: Führen Sie Notizen darüber, warum Sie jedes Sichtbarkeitslevel gewählt haben
