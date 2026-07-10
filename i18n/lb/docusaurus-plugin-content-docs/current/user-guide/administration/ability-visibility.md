---
title: Aafälligkeit vo de Sichtbarkeit
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Fähigkeits-Sichtbarkeit (Ability Visibility) {#ability-visibility}

Superdav AI Agent v1.12.0 füecht **Ability Visibility**-Steuerige hinzu, wo dës festlegt, welchi Oberflächen (surfaces) jede Fähigkeit zeige. Das erlaubt Administratore, genau z'steme, welchi Agent-Fähigkeite über REST APIs, MCP-Server, WooCommerce-Integrationen und anderi Schnittstelle zur Verfüegung stöhnd.

## Was isch Ability Visibility? {#what-is-ability-visibility}

Ability Visibility isch es Berechtigungssystem, wo folgendes steuert:

- **Welchi Fähigkeite** für Agent verfügbar sind
- **Wo sie offe gstellt sind** (REST API, MCP, WooCommerce usw.)
- **Wer si zuegriffe cha** (über Partner-Zulassigsliste)
- **Wie sie klassifiziert sind** (erkennbar vs. unklassifiziert)

Jede Fähigkeit het es Sichtbarkeitsniveau, wo bestimmt, ob sie uf verschidene Oberflächen verfügbar isch.

## Sichtbarkeitsstufen (Visibility Levels) {#visibility-levels}

### Öffentlich (Public) {#public}

**Öffentlechi Fähigkeite** sind überall verfügbar:

- REST API Endpoints
- MCP Server
- WooCommerce Integrationen
- Chat-Schnittstelle
- Alli Benutzerrolle (mit de passende Berechtigunge)

Beispil: `scaffold-block-theme`, `activate-theme`, `send-email`

### Intern (Internal) {#internal}

**Interni Fähigkeite** sind nur innerhalb vo dinere WordPress-Installation verfügbar:

- Chat-Schnittstelle
- Admin-Panels
- Nur angmelsti Benutzer
- Nicht über REST API oder externi Integratione offe gstellt

Beispil: `manage-settings`, `view-analytics`, `export-data`

### Partner (Partner) {#partner}

**Partner-Fähigkeite** sind nur für whitelisted Partner verfügbar:

- Erfordert en expliziti Eintrag i de Partner-Zulassigsliste
- Verfügbar über REST API mit Partner-Credentials
- Verfügbar über MCP mit Partner-Authentifizierig
- Nicht für reguläri Benutzer verfügbar

Beispil: `bulk-import-users`, `modify-billing`, `access-analytics`

### Deaktiviert (Disabled) {#disabled}

**Deaktivierti Fähigkeite** sind nirgends verfügbar:

- Nicht über kei Oberfläche offe gstellt
- Nicht im Chat verfügbar
- Nicht in Admin-Panels verfügbar
- Nützlich für veralteti oder experimentelli Fähigkeite

## Management vo de Fähigkeits-Sichtbarkeit {#managing-ability-visibility}

### Zuegang zu de Einstellungen vo de Fähigkeits-Sichtbarkeit {#accessing-ability-visibility-settings}

1. Gang zu **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Klicke uf de Tab **Abilities** (Fähigkeite)
3. Du gsehsch e Liste aller installierte Abilities mit ihre Sichtbarkeitsstufen.

### Fähigkeits-Details aaluege {#viewing-ability-details}

Klicke uf e Fähigkeit, um folgendes z'gseh:

- **Name**: De Identifikator vo de Fähigkeit
- **Description** (Beschreibung): Was d'Fähigkeit macht
- **Current visibility** (Aktuelli Sichtbarkeit): Public (Öffentlich), Internal (Intern), Partner oder Disabled (Deaktiviert)
- **Partner allow-list** (Partner-Zulassigsliste): Welchi Partner zuegang händ (falls Partner-Sichtbarkeit)
- **Last updated** (Zuletzt aktualisiert): Wann d'Sichtbarkeit letschtmol gänderet worde isch
- **Status**: Recognized (Erkennt) oder Unclassified (Nid klassifiziert)

### Sichtbarkeitsstufen ändere {#changing-visibility-levels}

Um d'Sichtbarkeit vo ere Fähigkeit z'ändere:

1. Klicke uf d'Fähigkeit i de Liste
2. Wähl e neui Sichtbarkeitsstufe us em Dropdown-Menü
3. Wenn du "Partner" wählsch, füeg Partner-Identifikatoren zur Zulassigsliste bi.
4. Klicke uf **Save** (Speichern)

Beispil:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Massenoperatione {#bulk-operations}

Um d'Sichtbarkeit für mehri Abilities z'ändere:

1. Setz d'Häkchen bi de Abilities
2. Wähl e neui Sichtbarkeitsstufe us em Dropdown für Massenaktionen
3. Klicke uf **Apply** (Anwenden)

## Partner-Zulassigsliste (Partner Allow-List) {#partner-allow-list}

D'**partner allow-list** steuert, welchi externe Partner Abilities mit Partner-Level zuegang händ.

### Partner hinzufüge {#adding-partners}

1. Gang zu **Superdav AI Agent** → **Settings** → **Partners**
2. Klicke uf **Add Partner** (Partner hinzufüge)
3. Gib de Partner-Identifikator i (normalerwiis en API key oder e Organisation ID)
4. Füeg optional en Partnername und e Beschreibung hinzu
5. Klicke uf **Save** (Speichern)

### Abilities an Partner zuewiese {#assigning-abilities-to-partners}

Nachdem du en Partner hinzugefügt häsch:

1. Gang zur Registerkarte **Abilities** goe
2. Find e Fähigkeit mit Partner-Sichtbarkeit
3. Klicke zum Bearbeiten druf
4. Im Abschnitt "Partner allow-list" setz d'Boxen für die Partner, wo Zuegang ha sölle
5. Klicke uf **Save**

### Partnerzugriff widerrufe {#revoking-partner-access}

Um de Zugriff vo eme Partner z'entferne:

1. Bearbeit d'Fähigkeit
2. Unsetz d'Box vom Partner i de allow-list
3. Klicke uf **Save**

De Partner verlürt sofort de Zuegang zu dere Fähigkeit.

## Unklassifizierbari Abilities {#unclassified-abilities}

Wenn du e Drittanbieter-Fähigkeit installiersch, wo de Superdav AI Agent nöd erkennt, wird die als **Unclassified** markiert.

### Admin-Meldig für unklassifizierbari Abilities {#admin-notice-for-unclassified-abilities}

Du gsehsch e Admin-Meldig:

```
⚠️ Unclassified Abilities Detected

D'folgende Fähigkeite sind installiert worde, aber nöd erkannt:
- custom-import-tool
- external-api-wrapper

Die Fähigkeite chönnte Sicherheits- oder Kompatibilitätsrisike darstelle.
Bitte überprüef und klassifiziere sie.

[Review Abilities] [Dismiss]
```

### Unklassifizierbari Abilities überprüefe {#reviewing-unclassified-abilities}

1. Klicke uf **Review Abilities** i de Meldig
2. Für jede unklassifizierbari Fähigkeit gsehsch du:
   - Fähigkeitsname und Beschriifig
   - Quelle (welche Plugin/Addon het sie installiert)
   - Vorgschlagene Sichtbarkeitsstufe
   - Sicherheitsbewertig

3. Wähl e Sichtbarkeitsstufe:
   - **Public**: Vertrau de Fähigkeit; zeig sie überall
   - **Internal**: Beschränk uf interne Nutzigszweck
   - **Partner**: Beschränk uf spezifischi Partner
   - **Disabled**: Bruuch die Fähigkeit nöd

4. Klicke uf **Classify**, um dini Entscheidig z'speichere

### Warum unklassifizierbari Abilities klassifiziere? {#why-classify-unclassified-abilities}

Abilities klassifiziere:

- **Verbessert d'Sicherheit**: Du gibsch explizit Zuestimmig, was offe isch
- **Verhindert Unfälle**: Unklassifizierbari Abilities sind standardmässig deaktiviert
- **Ermöglicht Funktione**: Sobald sie klassifiziert sind, wird d'Fähigkeit verfügbar
- **Dokumentiert Entscheidigä**: Dini Wähl werdet für Audit-Zweck protokolliert

## Sichtbarkeit auf verschiedenen Oberflächen {#visibility-in-different-surfaces}

### REST API {#rest-api}

**Öffentliche Fähigkeiten** sind über REST Endpunkte verfügbar:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Interne und Partnerfähigkeiten** sind über die REST API nicht verfügbar.

### MCP Server {#mcp-servers}

**Öffentliche Fähigkeiten** sind über MCP verfügbar:

```
MCP Server: Superdav AI Agent
Verfügbare Fähigkeiten:
- scaffold-block-theme
- activate-theme
- send-email
```

**Interne Fähigkeiten** werden über MCP nicht freigegeben.

**Partnerfähigkeiten** sind nur mit Partnerzugängen verfügbar.

### WooCommerce Integration {#woocommerce-integration}

**Öffentliche Fähigkeiten**, die sich auf WooCommerce beziehen, sind verfügbar:

- Produktverwaltung
- Bestellabwicklung
- Kundenkommunikation

**Interne Fähigkeiten** werden nicht an WooCommerce freigegeben.

### Chat Interface {#chat-interface}

**Alle Fähigkeiten** (Öffentlich, Intern, Partner) sind im Chat verfügbar, abhängig von den Benutzerberechtigungen:

- Administratoren sehen alle Fähigkeiten
- normale Benutzer sehen nur öffentliche Fähigkeiten
- Partner sehen öffentliche + Partnerfähigkeiten (falls sie auf der Whitelist stehen)

## Sicherheitsbest Practices {#security-best-practices}

### Prinzip der geringsten Berechtigung (Principle of Least Privilege) {#principle-of-least-privilege}

- Stellen Sie die Sichtbarkeit der Fähigkeiten auf das restriktivste Niveau ein, das ihre Nutzung noch zulässt.
- Verwenden Sie Partner-Sichtbarkeit für sensible Vorgänge.
- Deaktivieren Sie Fähigkeiten, die Sie nicht nutzen.

### Regelmäßige Audits {#regular-audits}

- Überprüfen Sie die Fähigkeits-Sichtbarkeit monatlich.
- Suchen Sie nach unklassifizierten Fähigkeiten.
- Entfernen Sie den Zugriff für nicht genutzte Partner.

### Protokollierung und Überwachung (Logging and Monitoring) {#logging-and-monitoring}

- Überwachen Sie, welche Fähigkeiten am häufigsten verwendet werden.
- Verfolgen Sie die Zugriffs-Muster der Partner.
- Alarmieren Sie bei ungewöhnlicher Fähigkeitsnutzung.

### Drittanbieterfähigkeiten {#third-party-abilities}

- Überprüfen Sie Drittanbieterfähigkeiten vor der Aktivierung.
- Klassifizieren Sie diese explizit.
- Beginnen Sie mit interner oder Partner-Sichtbarkeit.
- Bef fördern Sie erst zur öffentlichen Sichtbarkeit nach einer Prüfung.

## Fehlerbehebung {#troubleshooting}

**Eignigkeite sind in der Liste nicht sichtbar**
- Überprüfe, ob die Eignigkeit installiert und aktiv ist
- Prüfe, ob das Plugin/Addon aktiviert ist
- Aktualisiere die Seite

**Ich kann die Sichtbarkeit einer Eignigkeit nicht ändern**
- Überprüfe, ob du Administratorrechte hast
- Prüfe, ob die Eignigkeit von einem Plugin gesperrt wird
- Versuche, widersprüchliche Plugins zu deaktivieren

**Ein Partner kann auf eine Eignigkeit keinen Zugriff haben**
- Überprüfe, ob der Partner in der Zulassungsliste ist (allow-list)
- Prüfe, ob die Sichtbarkeit der Eignigkeit auf "Partner" eingestellt ist
- Bestätige, dass die Anmeldedaten des Partners korrekt sind
- Überprüfe die API-Logs auf Authentifizierungsfehler

**Unklassifizierte Eignigkeiten erscheinen weiterhin**
- Überprüfe und klassifiziere sie in den Admin-Mitteilungen (admin notice)
- Prüfe, ob deine Klassifizierung gespeichert wurde
- Überprüfe, ob das Plugin, das die Eignigkeit bereitstellt, auf dem neuesten Stand ist

## Migration vom Legacy Mode {#migration-from-legacy-mode}

Wenn du von einer älteren Version des Superdav AI Agent migrierst:

- Alle bestehenden Eignigkeiten werden automatisch als Öffentlich (Public) klassifiziert
- Überprüfe und passe die Sichtbarkeit bei Bedarf an
- Keine Aktion erforderlich, es sei denn, du möchtest den Zugriff beschränken

Siehe **Migration in den Third-Party Mode** für weitere Details zum Übergang zur Integration der nativen Abilities API.

## Nächste Schritte {#next-steps}

Nachdem du die Sichtbarkeit der Eignigkeiten konfiguriert hast:

1. **Überprüfe deine Eignigkeiten**: Überprüfe alle installierten Eignigkeiten
2. **Klassifiziere unklassifizierte Eignigkeiten**: Reagiere auf die Admin-Mitteilungen
3. **Richte Partner ein**: Füge Partner hinzu, wenn du die Partner-Sichtbarkeit verwendest
4. **Überwache die Nutzung**: Verfolge, welche Eignigkeiten am häufigsten verwendet werden
5. **Dokumentiere Entscheidungen**: Führe Notizen darüber, warum du jedes Sichtbarkeitslevel gewählt hast
