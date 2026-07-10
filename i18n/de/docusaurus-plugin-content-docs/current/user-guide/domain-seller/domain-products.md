---
title: Domain Produkte und Preise
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Domain-Produkte und Preise {#domain-products-and-pricing}

Domain-Produkte bestimmen, wie Sie Preise, TLDs, WHOIS-Datenschutz und Anbieterauswahl steuern. Jedes Domain-Produkt ist ein Standard-Ultimate Multisite-Produkt mit einem zusätzlichen Tab namens **Domain-Einstellungen**.

## Ein Domain-Produkt erstellen {#creating-a-domain-product}

1. Gehen Sie zu **Network Admin › Ultimate Multisite › Products**
2. Klicken Sie auf **Add New**
3. Wählen Sie den Produkttyp **Domain**
4. Konfigurieren Sie den Tab **Domain-Einstellungen** (siehe unten)
5. Speichern

Domain-Produkte werden in der Produktliste mit einem lila **Domain**-Abzeichen angezeigt und können über den Tab **Domain Products** gefiltert werden.

## Domain-Einstellungen-Tab {#domain-settings-tab}

### Anbieter {#provider}

Wählen Sie hier aus, welcher Registrar die Registrierung für dieses Produkt übernimmt. Standardmäßig wird der globale **Default provider** aus den Domain Seller-Einstellungen verwendet.

### Unterstützte TLDs {#supported-tlds}

Lassen Sie das Feld leer, um ein **Catch-all-Produkt** zu erstellen, das auf alle TLDs angewendet wird, die nicht von einem anderen Produkt abgedeckt sind.

Geben Sie eine durch Kommas getrennte Liste von TLDs ein (z. B. `.com, .net, .org`), um ein **TLD-spezifisches Produkt** zu erstellen, das nur für diese Endungen gilt.

**Wie die Produktzuordnung funktioniert:** Wenn ein Kunde nach einer Domain sucht, wählt das Addon das spezifischste passende Produkt. Ein Produkt mit `.com` in seiner TLD-Liste hat Vorrang vor einem Catch-all-Produkt. Wenn kein TLD-spezifisches Produkt passt, wird das Catch-all-Produkt verwendet. Existieren keine Produkte, wird die Domain-Suche nicht angezeigt.

### Aufschlagart {#markup-type}

Drei Modi bestimmen, wie Ihr Einzelhandelspreis aus den Einkaufskosten berechnet wird:

| Modus | Funktionsweise |
|---|---|
| **Prozentsatz** | Fügt einen Prozentsatz zu den Einkaufskosten hinzu. Ein Aufschlag von 20 % auf eine Einkaufsdomain von 10 $ ergibt 12 $. |
| **Fester Aufschlag** | Fügt einen festen Geldbetrag hinzu. Ein Aufschlag von 5 $ auf eine Domain von 10 $ ergibt 15 $. |
| **Festpreis** | Ignoriert die Einkaufskosten vollständig. Verlangt immer den von Ihnen eingegebenen Betrag. |

### Einführungspreis {#introductory-pricing}

Aktivieren Sie diesen Punkt, um einen vergünstigten Preis für das erste Jahr anzubieten. Legen Sie einen separaten **Introductory price** (den Preis für Jahr 1) neben den regulären **Renewal price** (ab Jahr 2) fest. Der Kunde sieht beide Preise während des Checkouts, damit er weiß, worauf er bei der Verlängerung zu erwarten ist.

### WHOIS-Datenschutz {#whois-privacy}

Steuert, ob für Domains, die über dieses Produkt registriert werden, ein WHOIS-Datenschutz angeboten wird.

| Einstellung | Verhalten |
|---|---|
| **Deaktiviert** | WHOIS-Datenschutz wird niemals angeboten oder aktiviert. |
| **Immer enthalten** | WHOIS-Datenschutz wird bei der Registrierung automatisch und kostenlos aktiviert. |
| **Kundenwahl** | Während des Checkouts erscheint ein Kontrollkästchen. Setzen Sie den **Privacy price**, um pro Jahr zu verlangen, oder lassen Sie ihn bei 0 $, um ihn kostenlos anzubieten. |

Für Namecheap verwendet WHOIS-Datenschutz WhoisGuard (immer kostenlos). Für OpenSRS wird der OpenSRS-Datenschutzdienst verwendet (kann Einkaufskosten verursachen).

---

## TLD-Import und Synchronisierung {#tld-import-and-sync}

Domain-Produkte zeigen Echtzeit-Einkaufspreise an, die vom verbundenen Anbieter abgerufen werden. Damit dies funktioniert, müssen TLDs importiert werden.

- **Manuelle Synchronisierung:** Settings › Domain Seller › Sync TLDs (pro Anbieter)
- **Automatische Synchronisierung:** Wird täglich über einen geplanten Cron-Job für alle konfigurierten Anbieter ausgeführt

Nach einer Synchronisierung gehen Sie zum Tab **Domain-Einstellungen** eines beliebigen Domain-Produkts und verwenden Sie den TLD-Picker, um verfügbare TLDs mit ihren aktuellen Einkaufspreisen zu sehen.

---

## Auto-Verlängerung {#auto-renewal}

Domain-Verlängerungen sind an den Mitgliedsstatus des Kunden gebunden:

- Wenn eine Mitgliedschaft verlängert wird und eine Domain verknüpft ist, wird die Domain-Verlängerung automatisch in die Warteschlange gestellt
- Verlängerungsversuche verwenden das aktive Zahlungsgateway des Kunden
- Fehlgeschlagene Verlängerungen werden automatisch mit exponentiellem Backoff wiederholt
- E-Mail-Benachrichtigungen werden für erfolgreiche Verlängerungen, Fehlschläge und bevorstehende Ablaufdaten gesendet

E-Mail-Template-IDs für Domain-Lebenszyklusereignisse:

| Ereignis | Template ID |
|---|---|
| Domain registriert | `domain_registered` |
| Domain verlängert | `domain_renewed` |
| Verlängerung fehlgeschlagen | `domain_renewal_failed` |
| Domain läuft bald ab | `domain_expiring_soon` |

---

## Admin: Manuelle Domain-Registrierung {#admin-manual-domain-registration}

Um eine Domain im Namen eines Kunden zu registrieren, ohne dass dieser den Checkout durchführen muss:

1. Gehen Sie zu **Network Admin › Ultimate Multisite › Register Domain**
2. Wählen Sie den Kunden und geben Sie den Domainnamen ein
3. Füllen Sie die Registranten-Kontaktdaten aus (Name, Adresse, Telefon)
4. Klicken Sie auf **Register**

Der Domain-Eintrag wird erstellt und mit dem Kundenkonto verknüpft.
