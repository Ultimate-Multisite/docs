---
title: 'Lektion 3: Ihr Netzwerk einrichten'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lektion 3: Einrichtung Ihres Netzwerks {#lesson-3-setting-up-your-network}

Jetzt geht es ans Bauen. In dieser Lektion installieren Sie Ultimate Multisite und konfigurieren das Fundament des FitSite-Netzwerks. Jede Entscheidung, die Sie hier treffen, wird mit der Fitness-Nische im Hinterkopf getroffen.

## Wo wir aufgehört haben {#where-we-left-off}

Wir haben uns für Fitnessstudios als unsere Nische entschieden und die Geschäftsmöglichkeit validiert. Nun verwandeln wir diese Idee in eine funktionierende Plattform.

## Auswahl des Hostings {#choosing-your-hosting}

Die Wahl Ihres Hostings ist für eine Nischenplattform wichtiger als für eine einzelne Website. Sie hosten nicht nur eine Seite – Sie hosten ein Netzwerk, das auf Dutzende oder Hunderte von Seiten wachsen wird.

### Worauf Sie achten sollten {#what-to-look-for}

- **WordPress Multisite Support**: Nicht alle Hoster unterstützen Multisite gut
- **Wildcard SSL**: Wesentlich für Subdomain-basierte Netzwerke
- **Skalierbare Ressourcen**: Sie brauchen Spielraum für Wachstum, ohne migrieren zu müssen
- **Ultimate Multisite Integration**: Automatisches Domain-Mapping und SSL sparen enormen betrieblichen Aufwand

### Empfohlener Ansatz {#recommended-approach}

Wählen Sie einen Hoster aus der Liste der [Compatible Providers](/user-guide/host-integrations/closte). Diese wurden mit Ultimate Multisite getestet und bieten die Integrationen, die Sie für Domain-Mapping und SSL-Automatisierung benötigen.

Für FitSite werden wir eine Subdomain-Konfiguration verwenden. Das bedeutet, dass die Kundenseiten anfangs als `studioname.fitsite.com` erscheinen, bevor sie optional ihre eigene Domain verknüpfen.

## Installation von WordPress Multisite {#installing-wordpress-multisite}

Falls Sie noch keine WordPress Multisite-Installation haben:

1. Installieren Sie WordPress bei Ihrem Hosting-Anbieter
2. Folgen Sie dem Leitfaden [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)
3. Wählen Sie bei der Aufforderung die **Subdomain**-Konfiguration

:::tip Warum Subdomains?
Subdomains geben jeder Kundenseite ihre eigene, eindeutige Adresse (`studio.fitsite.com`) anstatt eines Pfades (`fitsite.com/studio`). Das wirkt professioneller für Ihre Kunden und vermeidet Permalink-Konflikte. Für einen detaillierten Vergleich lesen Sie [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101).
:::

## Installation von Ultimate Multisite {#installing-ultimate-multisite}

Folgen Sie dem Leitfaden [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite), um:

1. Das Plugin auf Netzwerkebene hochzuladen und zu aktivieren
2. Den [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) auszuführen

Behalten Sie während des Setup Wizards die FitSite-Nische im Hinterkopf:

- **Currency**: Stellen Sie die Währung ein, die Ihre Fitnessstudio-Kunden verwenden
- **Company name**: "FitSite" (oder Ihren gewählten Markennamen)
- **Company logo**: Laden Sie Ihr Markenlogo hoch – dieses erscheint auf Rechnungen und E-Mails

## Konfiguration für die Fitness-Nische {#configuring-for-the-fitness-niche}

Nach der Installation von Ultimate Multisite treffen Sie diese nischenspezifischen Konfigurationsentscheidungen:

### Allgemeine Einstellungen {#general-settings}

Gehen Sie zu **Ultimate Multisite > Settings** und konfigurieren Sie:

- **Site name**: FitSite
- **Default role**: Administrator – Fitnessstudio-Betreiber benötigen die volle Kontrolle über ihren Seiteninhalt
- **Registration**: Aktivieren Sie die Benutzerregistrierung, damit Studio-Betreiber sich selbst anmelden können

### E-Mail-Konfiguration {#email-configuration}

Ihre System-E-Mails sollten die Sprache Ihrer Nische sprechen. Gehen Sie zu **Ultimate Multisite > Settings > Emails** und passen Sie an:

- Ersetzen Sie allgemeine Formulierungen wie „Ihre neue Website“ durch fitnessspezifische Nachrichten
- Beispiel-Betreff der Willkommens-E-Mail: „Ihre Website für das Fitnessstudio ist bereit“
- Beispiel-Textkörper der Willkommens-E-Mail: Beziehen Sie sich auf ihr Studio, ihre Kurse und den Start mit ihrer Fitness-Website

Wir werden diese Punkte in Lektion 8 (Kunden-Onboarding) weiter verfeinern, aber die Festlegung des Tons jetzt sorgt dafür, dass selbst frühe Testanmeldungen nischenspezifisch wirken.

### Domain-Konfiguration {#domain-configuration}

Wenn Sie einen kompatiblen Hosting-Anbieter verwenden, konfigurieren Sie jetzt das Domain-Mapping:

1. Gehen Sie zu **Ultimate Multisite > Settings > Domain Mapping**
2. Folgen Sie dem Integrationsleitfaden für Ihren spezifischen Hoster
3. Testen Sie, ob neue Subsites automatisch SSL erhalten

Dadurch stellen wir sicher, dass alles reibungslos funktioniert, wenn wir in der nächsten Lektion mit dem Erstellen von Templates und Testseiten beginnen.

## Das FitSite-Netzwerk bisher {#the-fitsite-network-so-far}

Am Ende dieser Lektion haben Sie Folgendes erreicht:

```
FitSite Network
├── WordPress Multisite (Subdomain-Modus)
├── Ultimate Multisite (installiert und konfiguriert)
├── Hosting mit Wildcard SSL
├── Konfiguriertes Domain Mapping
├── Nischenspezifische E-Mail-Vorlagen (initial)
└── Bereit für Seiten-Templates (nächste Lektion)
```

## Was wir in dieser Lektion gebaut haben {#what-we-built-this-lesson}

- **Eine funktionierende WordPress Multisite**-Installation im Subdomain-Modus
- **Ultimate Multisite installiert** und mit der FitSite-Marke konfiguriert
- **Hosting und SSL** für ein wachsendes Netzwerk eingerichtet
- **Domain Mapping** für Ihren Hosting-Anbieter konfiguriert
- **Nischenspezifischer E-Mail-Ton** von Tag eins an festgelegt

---

**Weiter:** [Lektion 4: Erstellen von Nischen-Templates](lesson-4-templates) – wir erstellen Seiten-Templates, die Fitnessstudio-Betreiber wirklich nutzen möchten.
