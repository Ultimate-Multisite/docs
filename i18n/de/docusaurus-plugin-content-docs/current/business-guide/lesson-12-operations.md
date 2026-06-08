---
title: 'Lektion 12: Das Geschäft führen'
sidebar_position: 13
_i18n_hash: 0fe6371df216b74a2051b95972ad68e8
---
# Lektion 12: Das Geschäft führen

Eine Plattform ist kein Projekt, das man abschließt – sie ist ein Geschäft, das man betreibt. In dieser Lektion behandeln wir den täglichen Betrieb von FitSite: Support, Abrechnung, Wartung und die Zufriedenheit der Kunden.

## Wo wir aufgehört haben

FitSite ist live und Kunden melden sich an. Jetzt müssen Sie den Betrieb nachhaltig führen.

## Tägliche Abläufe

### Überwachung (Monitoring)

Überprüfen Sie diese täglich (oder richten Sie Benachrichtigungen ein):

- **Verfügbarkeit (Uptime)**: Ist die Plattform erreichbar? Verwenden Sie einen Dienst zur Überwachung der Verfügbarkeit.
- **Neue Anmeldungen**: Wie viele neue Kunden haben heute zugeschlagen?
- **Fehlgeschlagene Zahlungen**: Gibt es Zahlungsausfälle, die Beachtung erfordern?
- **Support-Anfragen**: Gibt es unbeantwortete Kundenfragen?

### Kundensupport

Ihr Nischenfokus ist hier ein Vorteil. Da alle Ihre Kunden Fitnessstudios sind, werden Sie immer wieder dieselben Fragen sehen:

**Häufige Fragen, die Sie erhalten werden:**

- "Wie aktualisiere ich meinen Stundenplan?"
- "Kann ich die Farben meiner Website ändern?"
- "Wie füge ich einen neuen Trainer auf meiner Website hinzu?"
- "Meine Domain funktioniert nicht"
- "Wie kündige oder verbessere ich meinen Plan?"

Bauen Sie Ihre Wissensdatenbank (die Sie in Lektion 8 begonnen haben) um diese wiederkehrenden Fragen auf. Jedes Support-Ticket, das ein Artikel in der Wissensdatenbank sein könnte, ist ein Anzeichen dafür, dass Sie diesen Artikel verfassen sollten.

### Support-Stufen (Support Tiers)

Wenn Sie wachsen, strukturieren Sie den Support nach dem Plan:

| Plan | Support-Level | Reaktionszeit |
|------|--------------|---------------|
| Starter | Wissensdatenbank + E-Mail | 48 Stunden |
| Growth | E-Mail-Support | 24 Stunden |
| Pro | Prioritärer E-Mail + Onboarding-Anruf | 4 Stunden |

Das [Support Tickets Addon](/addons/support-tickets) kann helfen, Support-Anfragen innerhalb der Plattform zu verwalten.

## Abrechnungsabläufe (Billing Operations)

### Wiederkehrende Zahlungen

Ultimate Multisite übernimmt die wiederkehrende Abrechnung automatisch über Ihr Zahlungs-Gateway. Ihre Aufgabe ist es, auf Folgendes zu achten:

- **Fehlgeschlagene Zahlungen**: Verfolgen Sie diese umgehend. Die meisten Ausfälle sind abgelaufene Karten, keine vorsätzlichen Kündigungen.
- **Dunning**: Richten Sie eine automatisierte Wiederholungslogik über Ihr Zahlungs-Gateway ein (Stripe kümmert sich gut darum).
- **Kündigungsanfragen**: Verstehen Sie, warum Kunden gehen. Jede Kündigung ist ein Feedback.

### Mitgliedschaften verwalten (Managing Memberships)

Navigieren Sie zu **Ultimate Multisite > Memberships**, um:

- Alle aktiven Abonnements einzusehen
- Upgrade- und Downgrade-Anfragen zu bearbeiten
- Bei Bedarf Rückerstattungen zu verarbeiten
- Ablauf von Testphasen zu verwalten

Siehe [Managing Memberships](/user-guide/administration/managing-memberships) für die vollständige Referenz.

### Rechnungsstellung (Invoicing)

Stellen Sie sicher, dass für jede Zahlung korrekt Rechnungen erstellt werden. Kunden benötigen möglicherweise Rechnungen für die Geschäftsbelegführung. Siehe [Managing Payments and Invoices](/user-guide/administration/managing-payments-and-invoices).

## Plattformwartung (Platform Maintenance)

### WordPress- und Plugin-Updates

Als Netzwerkadministrator sind Sie verantwortlich für:

- **WordPress-Core-Updates**: Testen Sie diese auf einer Staging-Umgebung, bevor Sie sie in die Produktion anwenden.
- **Plugin-Updates**: Gleiches gilt – zuerst testen, dann netzwerkweit anwenden.
- **Theme-Updates**: Überprüfen Sie, ob die Vorlagen nach einem Theme-Update immer noch korrekt aussehen.
- **Ultimate Multisite-Updates**: Folgen Sie dem Changelog und testen Sie, bevor Sie aktualisieren.

:::warning Niemals in der Produktion ohne Testen aktualisieren
Ein fehlerhaftes Update betrifft jede Kundensite in Ihrem Netzwerk. Testen Sie Updates immer zuerst auf einer Staging-Kopie Ihres Netzwerks.
:::

### Sicherheit (Security)

- Halten Sie alle Software aktuell
- Verwenden Sie starke Passwörter und die Zwei-Faktor-Authentifizierung für Admin-Konten
- Überwachen Sie verdächtige Aktivitäten
- Haben Sie einen Plan für Sicherheitsvorfälle

### Leistung (Performance)

Wenn Ihr Netzwerk wächst, überwachen Sie:

- **Seitenladezeiten**: Sind die Kundensites schnell?
- **Server-Ressourcennutzung**: CPU, Speicher, Festplattenspeicher
- **Datenbankleistung**: Große Netzwerke benötigen im Laufe der Zeit eine Datenbankoptimierung

Erwägen Sie die Implementierung von Caching (Seiten-Cache, Objekt-Cache) und einem CDN, falls Sie dies noch nicht getan haben. Die [Cloudflare Integration](/user-guide/host-integrations/cloudflare) übernimmt viel davon.

## Kundenlebenszyklus-Management (Customer Lifecycle Management)

### Abwanderung reduzieren (Reducing Churn)

Churn ist der Prozentsatz der Kunden, die jeden Monat kündigen. Für ein Abonnementgeschäft ist die Reduzierung der Abwanderung genauso wichtig wie die Akquise neuer Kunden.

**Häufige Gründe für die Abwanderung von Fitnessstudio-Kunden:**

- Sie konnten nicht herausfinden, wie sie die Plattform nutzen → Onboarding verbessern
- Die Website sah nicht gut genug aus → Vorlagen verbessern
- Sie sahen keinen Mehrwert → Funktionen oder Kommunikation verbessern
- Sie fanden eine günstigere Alternative → Ihren Nischenwert stärken
- Ihr Geschäft wurde geschlossen → unvermeidbar, aber separat verfolgen

### Upgrades fördern (Encouraging Upgrades)

Kunden auf dem Starter-Plan, die erfolgreich sind, sollten ermutigt werden, aufzurüsten:

- Wenn sie Planlimits erreichen (Websites, Speicher), zeigen Sie Upgrade-Prompts an.
- Senden Sie gezielte E-Mails, die Funktionen des Growth-Plans hervorheben, von denen sie profitieren würden.
- Zeigen Sie, was Growth-/Pro-Kunden aufgebaut haben.

### Win-Back-Kampagnen

Wenn ein Kunde kündigt:

1. Fragen Sie nach dem Grund (Exit-Umfrage oder E-Mail)
2. Beheben Sie das Problem, wenn möglich
3. Bieten Sie einen Rabatt für die Rückkehr an (30–60 Tage nach der Kündigung)

## Wöchentliche und monatliche Routinen

### Wöchentlich

- Neue Anmeldungen und Kündigungen überprüfen
- Auf alle offenen Support-Tickets antworten
- Plattformleistung und Verfügbarkeit prüfen
- Fehlgeschlagene Zahlungen überprüfen

### Monatlich

- Wichtige Kennzahlen analysieren (MRR, Abwanderung, neue Kunden, Upgrades)
- WordPress- und Plugin-Updates durchführen (nach Staging-Test)
- Wissensdatenbank basierend auf Support-Mustern überprüfen und aktualisieren
- Einen Newsletter oder ein Update für die Kunden senden (neue Funktionen, Tipps, Nachrichten aus der Fitnessbranche)

### Quartalsweise

- Preise im Vergleich zu Wettbewerbern und Kundenfeedback überprüfen
- Vorlagen-Designs bewerten – müssen sie aufgefrischt werden?
- Hosting-Kapazität einschätzen – müssen Sie skalieren?
- Onboarding überprüfen und verbessern, basierend auf Aktivierungsdaten

## Was wir in dieser Lektion aufgebaut haben

- **Tägliche Überwachungsroutinen** für Verfügbarkeit, Anmeldungen, Zahlungen und Support
- **Eine gestufte Support-Struktur**, abgestimmt auf die Planstufen
- **Abrechnungsabläufe**, einschließlich Dunning und Kündigungsbearbeitung
- **Wartungsverfahren** für Updates, Sicherheit und Leistung
- **Strategien zur Reduzierung der Abwanderung**, spezifisch für die Fitness-Nische
- **Wöchentliche, monatliche und vierteljährliche Betriebsroutinen**

---

**Weiter:** [Lektion 13: Skalieren](lesson-13-growth) – FitSite von einem kleinen Betrieb zu einem echten Geschäft wachsen lassen.
