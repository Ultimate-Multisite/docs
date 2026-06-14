---
title: Migration vo drittparte Modus
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration zu Drittanbieter-Modus

Superdav AI Agent v1.12.0 ändert, wie Drittanbieterfähigkeiten behandelt werden. **Der Drittanbieter-Modus ist jetzt standardmäßig auf auto eingestellt**, was die native WordPress Abilities API Integration auf WordPress 7.0+ ohne manuelle Konfiguration ermöglicht.

## Was hat sich geändert?

### Vor v1.12.0

Drittanbieterfähigkeiten erforderten manuell Konfiguration:

- Sie mussten "third-party mode" explizit aktivieren
- Fähigkeiten wurden aus einem benutzerdefinierten Registry geladen
- Die Integration mit der WordPress Abilities API war optional
- Der Legacy-Modus war der Standard

### Nach v1.12.0

Drittanbieterfähigkeiten funktionieren automatisch:

- Der Drittanbieter-Modus ist auf "auto" eingestellt
- Fähigkeiten integrieren sich nativ mit der WordPress Abilities API
- Keine manuelle Konfiguration mehr nötig auf WordPress 7.0+
- Der Legacy-Modus ist für ältere WordPress-Versionen noch verfügbar

## Wer wird betroffen sein?

### Neue Installationen (WordPress 7.0+)

**Keine Aktion erforderlich.** Der Drittanbieter-Modus wird automatisch auf "auto" gesetzt, und die Fähigkeiten funktionieren sofort einwandfrei.

### Bestehende Installationen

**Ihre Einstellungen bleiben erhalten.** Wenn Sie folgendes verwendet haben:

- **Legacy mode**: Sie bleiben im Legacy-Modus (keine Änderung)
- **Manual third-party mode**: Sie bleiben im manuellen Modus (keine Änderung)
- **Auto mode**: Sie verwenden weiterhin den Auto-Modus (keine Änderung)

### WordPress-Versionen vor 7.0

**Der Legacy-Modus ist noch verfügbar.** Wenn Sie auf WordPress 6.x oder älter sind:

- Der Drittanbieter-Modus ist standardmäßig auf "legacy" eingestellt
- Sie können den Drittanbieter-Modus manuell aktivieren, wenn Sie möchten
- Rüsten Sie auf WordPress 7.0+ auf, um die native Abilities API zu nutzen

## Die Modi verstehen

### Auto Mode (Neuer Standard)

**Auto mode** nutzt die native WordPress Abilities API Integration:

- Fähigkeiten werden über WordPress hooks registriert
- Volle Kompatibilität mit der WordPress 7.0+ Abilities API
- Automatische Entdeckung von Drittanbieterfähigkeiten
- Keine manuelle Konfiguration nötig

**Wann bruche ich das**: WordPress 7.0+ mit Drittanbieter-Funktionalitäten

### Manuelle Modus (Manual Mode)

De **manuelle Modi** brucht e klari Iistellige:

- Sie gänd a, welchi Drittanbieter-Funktione gelade wend
- Guet zum Teste oder wenn Sie nur bestimmti Funktione lade wend
- Brucht d'Bearbeitig vo Konfigurationsdateie
- Mehr Kontrolle, aber meh Ufwand bi de Iistellig

**Wann bruche ich das**: Zum Teste, selektivi Funktione lade oder für individuell aapassti Iistellige

### Alti Mode (Legacy Mode)

De **alti Modus** brucht s'alte System vo Drittanbieter-Funktione:

- E eigene Funktione-Registrierig (nöd d'WordPress Abilities API)
- Rückwärtskompatibel mit ältere WordPress-Versionen
- Kei direkti Integration mit WordPress
- Veraltet, aber immer no unterstützt

**Wann bruche ich das**: Für WordPress 6.x oder älter, oder wenn Sie e alti Kompatibilität bruuche wend

## Überprüefe vo Ihrem aktuelle Modus

### Über d'Admin-Panel

1. Gang zu **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Lueg nach de Iistellig **Third-Party Mode**
3. Sie gsehnd Ihren aktuelle Modus und Option zum Ändere

### Über Code

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' oder 'legacy'
```

## Ihren Modus ändere

### Uf Auto Mode wächsle

Wenn Sie uf WordPress 7.0+ sind und de auto Modus bruche wend:

1. Gang zu **Superdav AI Agent** → **Settings**
2. Findet **Third-Party Mode**
3. Wähle **Auto (WordPress Abilities API)**
4. Klick uf **Save**

De Superdav AI Agent entdeckt und registriert automatisch d'Drittanbieter-Funktione.

### Uf Manuelle Mode wächsle

Wenn Sie manuell bestimme wend, welchi Funktione gelade wend:

1. Gang zu **Superdav AI Agent** → **Settings**
2. Findet **Third-Party Mode**
3. Wähle **Manual**
4. Klick uf **Save**
5. Ändere d'Konfigurationsdatei, um z'spezifiziere, welchi Funktione gelade wend

### Uf Alti Mode wächsle

Wenn Sie alti Kompatibilität bruuche:

1. Gang zu **Superdav AI Agent** → **Einstellungen**
2. Finde **Third-Party Mode** (Drittanbieter-Modus)
3. Wähle **Legacy** (Alte Version)
4. Klicke auf **Speichern**

## Vorteile des Auto Modus

### Automatische Entdeckung

Fähigkeiten werden automatisch von folgenden Quellen entdeckt:

- Installierte Plugins
- Aktives Theme
- Must-use Plugins
- Drop-in Plugins

Keine manuelle Registrierung nötig.

### Native Integration

Die Fähigkeiten integrieren sich mit der WordPress Abilities API:

- Konsistent mit dem WordPress Core
- Funktioniert mit dem WordPress Admin
- Kompatibel mit anderen Plugins, die die Abilities API nutzen
- Zukunftsfähig, da WordPress sich weiterentwickelt

### Vereinfachte Verwaltung

- Keine Konfigurationsdateien zum Bearbeiten
- Keine manuelle Registrierung von Fähigkeiten
- Die Steuerung der Fähigkeitsdarstellung funktioniert automatisch
- Admin-Hinweise informieren dich über nicht klassifizierte Fähigkeiten

### Bessere Leistung

- Fähigkeiten werden gecacht (gespeichert)
- Wird bei Bedarf lässig geladen (Lazy-loaded)
- Optimiert für WordPress 7.0+

## Migrationspfad

### Wenn du auf WordPress 6.x bist

1. **Aktualisiere auf WordPress 7.0+** (wenn du bereit bist)
2. **Aktualisiere Superdav AI Agent** auf v1.12.0+
3. **Ändere den Drittanbieter-Modus auf Auto** (optional; der Legacy Modus funktioniert weiterhin)
4. **Überprüfe die Sichtbarkeit der Fähigkeiten**, um sicherzustellen, dass die Zugriffskontrollen korrekt sind

### Wenn du auf WordPress 7.0+ bist

1. **Aktualisiere Superdav AI Agent** auf v1.12.0+
2. **Überprüfe, ob der Drittanbieter-Modus auf Auto eingestellt ist** (er sollte standardmäßig so sein)
3. **Überprüfe die Sichtbarkeit der Fähigkeiten**, um sicherzustellen, dass die Zugriffskontrollen korrekt sind
4. **Teste die Drittanbieter-Fähigkeiten**, um zu bestätigen, dass sie funktionieren

## Fehlerbehebung

### Fähigkeiten werden im Auto Modus nicht geladen

- Überprüfe, ob du auf WordPress 7.0+ bist
- Stelle sicher, dass der Drittanbieter-Modus auf "Auto" eingestellt ist
- Überprüfe, ob das Plugin, das die Fähigkeit bereitstellt, aktiv ist
- Prüfe die WordPress Fehlerprotokolle auf Registrierungsfehler

### Ich möchte den Legacy Modus beibehalten

- Gehe zu **Einstellungen** → **Third-Party Mode** (Drittanbieter-Modus)
- Wähle **Legacy** (Alte Version)
- Klicke auf **Speichern**
- Der Legacy Modus funktioniert weiterhin

### Mini benutzerdefinierti Fähigkeite sind nöd sichtbar

- Überprüfe, ob sie über WordPress hooks registriert sind
- Prüef, ob sie d'Abilities API korrekt implementiere
- Überprüef d'WordPress error logs
- Bruchs **Ability Visibility** admin page, um alli registrierti abilities z'gseh

### Ich bechum "unklassifizierteri ability" Meldige

- Das isch normal für neui Drittpartei abilities
- Überprüef und klassifiziere sie im admin notice
- Sie chönd **Ability Visibility** für Details zur Klassifizierig gseh

## Rückwärtskompatibilität

### Bestehendi Konfigurationsmöglichkeiten

Wenn Sie bestehendi Drittpartei ability konfiguratione händ:

- **Legacy mode**: D'Konfiguration funktioniert wiiterhin
- **Manual mode**: D'Konfiguration funktioniert wiiterhin
- **Auto mode**: D'Konfiguration wird ignoriert (Auto mode übernimmt)

Um Ihre benutzerdefinierti Konfiguration z'behalte, bliebe im Manual oder Legacy mode.

### Deprecationsplan

- **v1.12.0**: Legacy und Manual modes sind immer no voll unterstützt
- **v1.13.0+**: Legacy mode chönnt Deprecation-Meldige zeige
- **v2.0.0**: Legacy mode chönnt entfernt werde (Noch z'bestimme)

## Best Practices

### Für neui Installatione

- Bruchs Auto mode (das isch de Standard)
- La Superdav AI Agent automatisch abilities entdecke
- Bruchs Ability Visibility, um de Zuegriff z'kontrolliere

### Für bestehendi Installatione

- Upgrade Sie uf WordPress 7.0+ wenn möglich
- Wechsel Sie zu Auto mode für eifacheri Verwaltung
- Überprüef und klassifiziere Abilities mit Ability Visibility

### Für benutzerdefinierti Abilities

- Registriere Abilities über WordPress hooks (Abilities API)
- Vermeide benutzerdefinierti ability registries
- Teste Sie uf WordPress 7.0+ mit Auto mode

## Nächsti Schritt

1. **Überprüfe dini WordPress-Version**: Stell sicher, dass du uf 7.0+ bisch für de Auto-Modus.
2. **Überprüef din Drittpartei-Modus**: Gang zu Settings und lueg, welche Modus du aktuell hesch.
3. **Aktualisiere, falls nötig**: Wechsle zum Auto-Modus, wenn du WordPress 7.0+ hesch.
4. **Klassifiziere Fähigkeite**: Überprüef und klassifiziere alli Fähigkeite, wo no nöd klassifiziert sind.
5. **Teste**: Überprüef, ob dini Drittpartei-Fähigkeite korrekt funktioniert.

## Verwandti Themen

- **Ability Visibility (Sichtbarkeit vo Fähigkeite)**: Kontrollier, welchi Fähigkeite wo wo usgsetzt sind.
- **WordPress Abilities API**: Lerne meh über d'nativi WordPress Ability Registrierig.
- **Third-Party Ability Development (Entwicklig vo Drittpartei-Fähigkeite)**: Erschaff Fähigkeite, wo mit em Auto-Modus zämme schaffe.
