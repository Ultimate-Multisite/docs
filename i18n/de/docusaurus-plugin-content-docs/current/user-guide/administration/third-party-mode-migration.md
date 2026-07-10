---
title: Migration in Drittanbieter-Modus
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migration in den Third-Party Mode {#third-party-mode-migration}

Superdav AI Agent v1.12.0 ändert die Art und Weise, wie Drittanbieter-Funktionen (Third-Party Abilities) behandelt werden. **Der Third-Party Mode ist nun standardmäßig auf Auto eingestellt**, was die native Integration über die WordPress Abilities API in WordPress 7.0+ ohne manuelle Konfiguration ermöglicht.

## Was hat sich geändert? {#what-changed}

### Vor v1.12.0 {#before-v1120}

Drittanbieter-Funktionen erforderten manuelle Konfiguration:

- Sie mussten den „Third-Party Mode“ explizit aktivieren
- Funktionen wurden aus einem benutzerdefinierten Register geladen
- Die Integration mit der WordPress Abilities API war optional
- Der Legacy-Modus war der Standard

### Nach v1.12.0 {#after-v1120}

Drittanbieter-Funktionen funktionieren automatisch:

- Der Third-Party Mode ist standardmäßig auf „Auto“ eingestellt
- Funktionen integrieren sich nativ mit der WordPress Abilities API
- Auf WordPress 7.0+ ist keine manuelle Konfiguration mehr nötig
- Der Legacy-Modus bleibt für ältere WordPress-Versionen verfügbar

## Wer ist betroffen? {#who-is-affected}

### Neue Installationen (WordPress 7.0+) {#new-installations-wordpress-70}

**Keine Aktion erforderlich.** Der Third-Party Mode ist automatisch auf „Auto“ eingestellt und die Funktionen funktionieren sofort.

### Bestehende Installationen {#existing-installations}

**Ihre Einstellungen bleiben erhalten.** Wenn Sie Folgendes verwendet haben:

- **Legacy-Modus**: Sie bleiben im Legacy-Modus (keine Änderung)
- **Manueller Third-Party Mode**: Sie bleiben im manuellen Modus (keine Änderung)
- **Auto-Modus**: Sie bleiben im Auto-Modus (keine Änderung)

### WordPress-Versionen vor 7.0 {#wordpress-versions-before-70}

**Der Legacy-Modus ist weiterhin verfügbar.** Wenn Sie mit WordPress 6.x oder älter arbeiten:

- Der Third-Party Mode ist standardmäßig auf „Legacy“ eingestellt
- Sie können den Third-Party Mode bei Bedarf manuell aktivieren
- Aktualisieren Sie auf WordPress 7.0+, um die native Abilities API zu nutzen

## Die Modi verstehen {#understanding-the-modes}

### Auto-Modus (Neuer Standard) {#auto-mode-new-default}

**Der Auto-Modus** nutzt die native Integration der WordPress Abilities API:

- Funktionen werden über WordPress Hooks registriert
- Volle Kompatibilität mit der Abilities API von WordPress 7.0+
- Automatische Erkennung von Drittanbieter-Funktionen
- Keine manuelle Konfiguration erforderlich

**Wann verwenden**: WordPress 7.0+ mit Drittanbieter-Funktionen

### Manueller Modus {#manual-mode}

**Der manuelle Modus** erfordert eine explizite Konfiguration:

- Sie geben an, welche Drittanbieter-Funktionen geladen werden sollen
- Nützlich für Tests oder die gezielte Funktionsauswahl
- Erfordert das Bearbeiten von Konfigurationsdateien
- Mehr Kontrolle, aber mehr Einrichtung

**Wann verwenden**: Tests, gezielte Funktionsauswahl oder benutzerdefinierte Konfigurationen

### Legacy-Modus {#legacy-mode}

**Der Legacy-Modus** verwendet das alte Drittanbieter-Funktionssystem:

- Benutzerdefiniertes Funktionsregister (keine WordPress Abilities API)
- Rückwärtskompatibel mit älteren WordPress-Versionen
- Keine native WordPress-Integration
- Veraltet, aber weiterhin unterstützt

**Wann verwenden**: WordPress 6.x oder älter, oder wenn Sie Legacy-Kompatibilität benötigen

## Ihren aktuellen Modus überprüfen {#checking-your-current-mode}

### Über das Admin-Panel {#via-admin-panel}

1. Gehen Sie zu **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Suchen Sie nach der Einstellung **Third-Party Mode**
3. Dort sehen Sie Ihren aktuellen Modus und Optionen zur Änderung

### Über Code {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', oder 'legacy'
```

## Ihren Modus ändern {#changing-your-mode}

### Wechseln zu Auto-Modus {#switch-to-auto-mode}

Wenn Sie auf WordPress 7.0+ sind und den Auto-Modus verwenden möchten:

1. Gehen Sie zu **Superdav AI Agent** → **Settings**
2. Suchen Sie **Third-Party Mode**
3. Wählen Sie **Auto (WordPress Abilities API)**
4. Klicken Sie auf **Save**

Superdav AI Agent wird die Drittanbieter-Funktionen automatisch erkennen und registrieren.

### Wechseln zu Manueller Modus {#switch-to-manual-mode}

Wenn Sie manuell steuern möchten, welche Funktionen geladen werden:

1. Gehen Sie zu **Superdav AI Agent** → **Settings**
2. Suchen Sie **Third-Party Mode**
3. Wählen Sie **Manual**
4. Klicken Sie auf **Save**
5. Bearbeiten Sie Ihre Konfigurationsdatei, um anzugeben, welche Funktionen geladen werden sollen

### Wechseln zu Legacy-Modus {#switch-to-legacy-mode}

Wenn Sie Legacy-Kompatibilität benötigen:

1. Gehen Sie zu **Superdav AI Agent** → **Settings**
2. Suchen Sie **Third-Party Mode**
3. Wählen Sie **Legacy**
4. Klicken Sie auf **Save**

## Vorteile des Auto-Modus {#benefits-of-auto-mode}

### Automatische Erkennung {#automatic-discovery}

Funktionen werden automatisch aus folgenden Quellen erkannt:

- Installierte Plugins
- Aktives Theme
- Must-use Plugins
- Drop-in Plugins

Keine manuelle Registrierung nötig.

### Native Integration {#native-integration}

Funktionen integrieren sich mit der WordPress Abilities API:

- Konsistent mit dem WordPress Core
- Funktioniert mit dem WordPress Admin
- Kompatibel mit anderen Plugins, die die Abilities API nutzen
- Zukunftsfähig, wenn WordPress sich weiterentwickelt

### Vereinfachtes Management {#simplified-management}

- Keine Konfigurationsdateien zu bearbeiten
- Keine manuelle Funktionsregistrierung
- Die Sichtbarkeitskontrollen für Funktionen funktionieren automatisch
- Admin-Benachrichtigungen warnen Sie vor nicht klassifizierten Funktionen

### Bessere Leistung {#better-performance}

- Funktionen werden zwischengespeichert (cached)
- Nach Bedarf geladen (Lazy-loaded)
- Optimiert für WordPress 7.0+

## Migrationspfad {#migration-path}

### Wenn Sie auf WordPress 6.x sind {#if-youre-on-wordpress-6x}

1. **Aktualisieren Sie auf WordPress 7.0+** (wenn Sie bereit sind)
2. **Aktualisieren Sie Superdav AI Agent** auf v1.12.0+
3. **Ändern Sie den Third-Party Mode auf Auto** (optional; der Legacy-Modus funktioniert weiterhin)
4. **Überprüfen Sie die Sichtbarkeit der Funktionen**, um ordnungsgemäße Zugriffskontrollen sicherzustellen

### Wenn Sie auf WordPress 7.0+ sind {#if-youre-on-wordpress-70}

1. **Aktualisieren Sie Superdav AI Agent** auf v1.12.0+
2. **Überprüfen Sie, ob der Third-Party Mode auf Auto eingestellt ist** (dies sollte standardmäßig der Fall sein)
3. **Überprüfen Sie die Sichtbarkeit der Funktionen**, um ordnungsgemäße Zugriffskontrollen sicherzustellen
4. **Testen Sie die Drittanbieter-Funktionen**, um zu bestätigen, dass sie funktionieren

## Fehlerbehebung {#troubleshooting}

### Funktionen werden im Auto-Modus nicht geladen {#abilities-arent-loading-in-auto-mode}

- Überprüfen Sie, ob Sie auf WordPress 7.0+ sind
- Stellen Sie sicher, dass der Third-Party Mode auf „Auto“ eingestellt ist
- Überprüfen Sie, ob das Plugin, das die Funktion bereitstellt, aktiv ist
- Überprüfen Sie die WordPress-Fehlerprotokolle auf Registrierungsfehler

### Ich möchte den Legacy-Modus beibehalten {#i-want-to-keep-legacy-mode}

- Gehen Sie zu **Settings** → **Third-Party Mode**
- Wählen Sie **Legacy**
- Klicken Sie auf **Save**
- Der Legacy-Modus funktioniert weiterhin

### Meine benutzerdefinierten Funktionen werden nicht angezeigt {#my-custom-abilities-arent-showing}

- Überprüfen Sie, ob sie über WordPress Hooks registriert sind
- Stellen Sie sicher, dass sie die Abilities API korrekt implementieren
- Überprüfen Sie die WordPress-Fehlerprotokolle
- Verwenden Sie die Admin-Seite **Ability Visibility**, um alle registrierten Funktionen einzusehen

### Ich erhalte Benachrichtigungen über „nicht klassifizierte Funktionen“ {#im-getting-unclassified-ability-notices}

- Das ist normal für neue Drittanbieter-Funktionen
- Überprüfen und klassifizieren Sie diese in der Admin-Benachrichtigung
- Sehen Sie in **Ability Visibility** Details zur Klassifizierung

## Rückwärtskompatibilität {#backward-compatibility}

### Bestehende Konfigurationen {#existing-configurations}

Wenn Sie bestehende Drittanbieter-Funktionskonfigurationen haben:

- **Legacy-Modus**: Ihre Konfiguration funktioniert weiter
- **Manueller Modus**: Ihre Konfiguration funktioniert weiter
- **Auto-Modus**: Ihre Konfiguration wird ignoriert (der Auto-Modus übernimmt)

Um Ihre benutzerdefinierte Konfiguration beizubehalten, bleiben Sie im Manuellen oder Legacy-Modus.

### Veralterungszeitplan {#deprecation-timeline}

- **v1.12.0**: Legacy- und Manueller Modus sind weiterhin vollständig unterstützt
- **v1.13.0+**: Der Legacy-Modus kann Verwarnungen zur Veralterung anzeigen
- **v2.0.0**: Der Legacy-Modus könnte entfernt werden (TBD)

## Best Practices {#best-practices}

### Für neue Installationen {#for-new-installations}

- Verwenden Sie den Auto-Modus (er ist der Standard)
- Lassen Sie Superdav AI Agent die Funktionen automatisch erkennen
- Nutzen Sie Ability Visibility, um den Zugriff zu steuern

### Für bestehende Installationen {#for-existing-installations}

- Aktualisieren Sie, wenn möglich, auf WordPress 7.0+
- Wechseln Sie in den Auto-Modus für ein vereinfachtes Management
- Überprüfen und klassifizieren Sie Funktionen mithilfe von Ability Visibility

### Für benutzerdefinierte Funktionen {#for-custom-abilities}

- Registrieren Sie Funktionen über WordPress Hooks (Abilities API)
- Vermeiden Sie benutzerdefinierte Funktionsregister
- Testen Sie auf WordPress 7.0+ mit Auto-Modus

## Nächste Schritte {#next-steps}

1. **Überprüfen Sie Ihre WordPress-Version**: Stellen Sie sicher, dass Sie für den Auto-Modus auf 7.0+ sind
2. **Überprüfen Sie Ihren Third-Party Mode**: Gehen Sie zu Settings und prüfen Sie Ihren aktuellen Modus
3. **Aktualisieren Sie bei Bedarf**: Wechseln Sie in den Auto-Modus, wenn Sie auf WordPress 7.0+ sind
4. **Klassifizieren Sie Funktionen**: Überprüfen und klassifizieren Sie alle nicht klassifizierten Funktionen
5. **Testen**: Vergewissern Sie sich, dass Ihre Drittanbieter-Funktionen korrekt funktionieren

## Verwandte Themen {#related-topics}

- **Ability Visibility**: Steuern, welche Funktionen wo sichtbar sind
- **WordPress Abilities API**: Erfahren Sie mehr über die native WordPress-Funktionsregistrierung
- **Third-Party Ability Development**: Erstellen Sie Funktionen, die mit dem Auto-Modus zusammenarbeiten
