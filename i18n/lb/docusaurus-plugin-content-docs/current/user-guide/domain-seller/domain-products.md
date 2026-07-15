---
title: Domaine Produkt an Pris
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain-Produkte und Preisgestaltung

Domain-Produkte sind die Art, wie Sie Preise, TLDs (Top-Level Domains), WHOIS-Datenschutz und Anbieter auswählen steuern. Jedes Domain-Produkt ist ein Standard-Multisite Ultimate-Produkt mit einem zusätzlichen Tab **Domain Settings**.

## Ein Domain-Produkt erstellen {#creating-a-domain-product}

1. Gehe zu **Network Admin › Ultimate Multisite › Products**
2. Klicke auf **Add New** (Neu hinzufügen)
3. Stelle den Produkt-Typ auf **Domain** ein
4. Konfiguriere den Tab **Domain Settings** (siehe unten)
5. Speichern

Domain-Produkte erscheinen mit einem lila **Domain** Badge in der Produktliste und können über den Tab **Domain Products** gefiltert werden.

## Domain-Einstellungen Tab {#domain-settings-tab}

### Anbieter (Provider) {#provider}

Wähle, welcher Registrar die Registrierung für dieses Produkt übernimmt. Standard ist der globale **Default provider**, der in den Einstellungen des Domain Sellers festgelegt ist.

### Unterstützte TLDs (Top-Level Domains) {#supported-tlds}

Lass dies leer, um ein **catch-all product** zu erstellen, das auf alle TLDs gilt, die nicht von einem anderen Produkt abgeglichen werden. Gib eine durch Kommas getrennte Liste von TLDs an (z.B. `.com, .net, .org`), um ein **TLD-spezifisches Produkt** zu erstellen, das nur für diese Endungen gilt.

**Wie die Produktabgleich funktioniert:** Wenn ein Kunde nach einer Domain sucht, wählt der Addon das spezifischste passende Produkt aus. Ein Produkt mit `.com` in seiner TLD-Liste hat Vorrang vor einem catch-all-Produkt. Wenn kein TLD-spezifisches Produkt passt, wird das catch-all verwendet. Wenn keine Produkte existieren, wird die Domain-Suche nicht angezeigt.

### Markup-Typ (Markup type) {#markup-type}

Drei Modi steuern, wie Ihr Verkaufspreis vom Großhandelspreis berechnet wird:

| Modus | Wie es funktioniert |
|---|---|
| **Prozent** | Fügt einen Prozentsatz zum Großhandelspreis hinzu. Ein 20%-Aufschlag auf eine Großhandelsdomain von 10 $ ergibt 12 $. |
| **Fester Aufschlag (Fixed markup)** | Fügt einen festen Geldbetrag hinzu. Ein Aufschlag von 5 $ auf eine Domain von 10 $ ergibt 15 $. |
| **Fixpreis** | Ignoriert den Großhandelspreis komplett. Es wird immer der Betrag berechnet, den Sie eingeben. |

### Einführungs-Preise (Introductory pricing) {#introductory-pricing}

### Werben Sie mit eme rabattierte Erstjahrespriis {#whois-privacy}

Stelle en separate **Introductory price** (de Priis für Jahr 1) neben de reguläre **Renewal price** (für Jahr 2+) i. De Kunde gseht beidi Priise bim Checkout, so er weiss, was er bi de Verlängerig erwartet.

### WHOIS-Privatsphäre {#tld-import-and-sync}

Steuert, öb d'WHOIS-Privatsphäre für Domainene, wo mit dem Produkt registriert sind, aabote wird.

| Iistellig | Verhalte |
|---|---|
| **Deaktiviert** | WHOIS-Privatsphäre wird nie aabote oder aktiviert. |
| **Immer Inkludiert** | WHOIS-Privatsphäre wird automatisch bi de Registrierig ohni Choschte aktiviert. |
| **Kunde-Wahl** | Es erscheint en Kontrollkästchen bim Checkout. Stell de **Privacy price** uf pro Jahr, oder lahs ihn uf $0, um ihn gratis aabote z'stelle. |

Für Namecheap brucht WHOIS-Privatsphäre WhoisGuard (immer gratis). Für OpenSRS wird de OpenSRS Privacy Service brucht (kann en Choschte bi Großhandel ha).

---

## TLD Import und Synchronisation {#auto-renewal}

Domain-Produkte zeige Echtzit-Großhandelspreise, wo vom verbundene Provider abgno worde sind. Damit das funktioniert, müend d'TLDs importiert werde.

- **Manuell synchronisiere:** Settings › Domain Seller › Sync TLDs (pro Provider)
- **Automatisch synchronisiere:** Läuft täglich über en geplante cron job über alli konfigurierti Provider.

Nach ere Synchronisation gaht uf de Tab "Domain Settings" vo jedem Domain-Produkt und brucht de TLD Picker, um verfügbari TLDs mit ihre aktuelle Großhandelspreise z'gseh.

---

## Auto-Erneuerung {#admin-manual-domain-registration}

Domain-Verlängerige sind mit em Mitgliedschaftszustand vom Kunde verbunde:

- Wenn en Mitgliedschaft verlängert wird und en Domain verknüpft isch, wird d'Domain-Verlängerig automatisch i de Warteschlange gsetzt.
- Verlängerigsversuech bruche de aktive Zahlungsgateway vom Kunde.
- Fehlgeschlageni Verlängerige werdet automatisch mit exponentiel Backoff neu versuecht.
- E-Mail-Benachrichtigunge werdet für erfolgreichi Verlängerige, Fehler und kommendi Ablaufdatum gschickt.

E-Mail-Template-IDs für Domain-Lebenszyklus-Ereignisse:

| Event | Template ID |
|---|---|
| Domain registriert | `domain_registered` |
| Domain erneuert | `domain_renewed` |
| Erneuerung fehlgeschlagen | `domain_renewal_failed` |
| Domain bald ablaufend | `domain_expiring_soon` |

---

## Admin: Manuelle Domainregistrierung

Om e Domain im Namen vo eme Kunde z'registriere, ohni dass er dure de Checkout muess goh:

1. Gang zu **Network Admin › Ultimate Multisite › Register Domain**
2. Wähl de Kunde us und gib de Domainname ii
3. Füll d'Kontaktdetails vom Registrant ii (Name, Adress, Telefon)
4. Klick uf **Register**

De Domain-Record wird erstellt und mit em Konto vom Kunde verknüpft.
