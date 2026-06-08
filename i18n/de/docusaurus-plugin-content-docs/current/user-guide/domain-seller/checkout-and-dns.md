---
title: Checkout Field und Kunden-DNS
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Verwaltung von Checkout-Feldern und DNS-Einstellungen für Kunden

## Das Feld zur Domain-Auswahl

Das Feld **Domain Selection** ist ein Checkout-Element, das Kunden die Wahl lässt, wie sie die Domain für ihre Website erhalten möchten. Fügen Sie es zu jedem Checkout-Formular hinzu, um den Verkauf von Domains zu ermöglichen.

### Das Feld zu einem Checkout-Formular hinzufügen

1. Navigieren Sie zu **Network Admin › Ultimate Multisite › Checkout Forms**
2. Öffnen oder erstellen Sie ein Checkout-Formular
3. Klicken Sie im Checkout-Editor auf **Add Field**
4. Wählen Sie aus der Feldliste **Domain Selection**
5. Konfigurieren Sie die Feldoptionen (siehe unten)
6. Speichern Sie das Formular

### Feldoptionen

**Domain modes** — Wählen Sie aus, welche Tabs der Kunde sieht. Jeder Modus kann unabhängig aktiviert oder deaktiviert werden:

| Mode | Funktion |
|---|---|
| **Subdomain** | Der Kunde verwendet eine kostenlose Subdomain in Ihrem Netzwerk (z. B. `mysite.ihrnetzwerk.com`). Keine Zahlung erforderlich. |
| **Register New Domain** | Der Kunde sucht nach einer neuen Domain und registriert diese über Ihren konfigurierten Anbieter. Es wird das entsprechende Domain-Produkt für die Preisgestaltung verwendet. |
| **Existing Domain** | Der Kunde verknüpft eine Domain, die er bereits besitzt. Keine Registrierungsgebühr. Die Domain wird automatisch mit seiner Website verknüpft. |

**Default mode** — Wenn alle drei Modi aktiviert sind, welcher Tab wird zuerst geöffnet. Stellen Sie ihn auf **Subdomain**, um die Domainregistrierung optional zu lassen, oder auf **Register New Domain**, um Käufe zu fördern.

**Domain product** — Sie können dieses Feld optional einem bestimmten Domain-Produkt zuordnen. Ist dies nicht geschehen, wählt das Addon automatisch das passende Produkt basierend auf der von dem Kunden gesuchten TLD.

### Registranten-Kontaktfelder

Wenn ein Kunde den Tab **Register New Domain** auswählt, fügt das Checkout-Formular inline Registranten-Kontaktfelder hinzu:

- Vorname / Nachname
- E-Mail-Adresse
- Adresse (Zeile 1, Stadt, Bundesland/Provinz, Postleitzahl, Land)
- Telefonnummer

Diese Felder sind von allen Registrarlaien erforderlich und werden vor dem Aufruf der Registrierungs-API validiert. Telefonnummern werden automatisch im internationalen Format `+CC.NNN` formatiert, wie es die Registrarlaien erwarten.

### Automatisch generierte Website-URL

Wenn ein Kunde eine Domain registriert oder verknüpft, wird das Feld für die Website-URL automatisch aus der gewählten Domain befüllt. Die Kunden müssen kein separates URL-Feld ausfüllen.

### Suchverhalten

- Die Verfügbarkeit von Domains wird in Echtzeit mittels AJAX überprüft, während der Kunde tippt.
- Alternative TLD-Vorschläge werden angezeigt, wenn die bevorzugte Domain nicht verfügbar ist.
- Die Preise werden live abgerufen und klar angezeigt (Registrierungspreis, Verlängerungspreis, optionale WHOIS-Privatsphäre-Gebühr).
- Gutscheincodes werden auf Domain-Produkte angewendet, genau wie auf jedes andere Produkt.

**Anpassung der Suchreaktionsfähigkeit:**

```php
// Erhöht die Debounce-Verzögerung (Millisekunden), um API-Aufrufe bei langsamen Verbindungen zu reduzieren
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Hinzufügen benutzerdefinierter Felder zum Domain-Suchformular:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Zusätzliche Anmerkungen',
    ];
    return $fields;
});
```

---

## Kunden-DNS-Verwaltung

Kunden können die DNS-Einträge für ihre registrierten Domains auf der Seite **Mein Konto** unter dem Eintrag ihrer Domain verwalten.

### Unterstützte Record-Typen

| Typ | Verwendung |
|---|---|
| **A** | Hostnamen auf IPv4-Adresse mappen |
| **AAAA** | Hostnamen auf IPv6-Adresse mappen |
| **CNAME** | Einen Alias erstellen, der auf einen anderen Hostnamen zeigt |
| **MX** | Mail-Austauschserver festlegen |
| **TXT** | SPF-, DMARC-, Verifizierungs- oder andere Text-Records hinzufügen |

### Welche Anbieter unterstützen die DNS-Verwaltung?

Die DNS-Verwaltung (Records hinzufügen, bearbeiten, löschen) ist bei **OpenSRS**, **ResellerClub** und **Enom** verfügbar. Bei Domains von Namecheap, GoDaddy und NameSilo werden Status- und Ablaufinformationen angezeigt, aber die DNS-Verwaltung muss direkt im Control Panel des Registrars erfolgen.

### Standard-DNS-Records

Sie können Standard-DNS-Records konfigurieren, die automatisch angewendet werden, wenn eine Domain registriert wird. Gehen Sie zu **Settings › Domain Seller › Default DNS Records**.

Die Standard-Record-Werte unterstützen zwei Tokens:

| Token | Wird ersetzt durch |
|---|---|
| `{DOMAIN}` | Der registrierte Domain-Name (z. B. `example.com`) |
| `{SITE_URL}` | Die WordPress-Website-URL für die Website des Kunden |

**Beispiel — Verknüpfung der Apex-Domain und www mit der IP Ihres Servers:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: Anzeigen und Bearbeiten von DNS

Network-Admins können DNS-Records für jede Kunden-Domain auf der Bearbeitungsseite der Domain in **Network Admin › Ultimate Multisite › Domains** einsehen und bearbeiten.
