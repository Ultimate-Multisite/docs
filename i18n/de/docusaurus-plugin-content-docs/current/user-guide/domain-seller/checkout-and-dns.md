---
title: Kassenfeld und Kunden-DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout-Feld und Kunden-DNS-Verwaltung {#checkout-field-and-customer-dns-management}

## Das Checkout-Feld Domain-Auswahl {#the-domain-selection-checkout-field}

Das Feld **Domain-Auswahl** ist ein Kassenelement, das Kunden eine Auswahl bietet, wie sie die Domain ihrer Website erhalten. Füge es zu einem beliebigen Kassenformular hinzu, um den Domain-Verkauf zu aktivieren.

### Das Feld zu einem Kassenformular hinzufügen {#adding-the-field-to-a-checkout-form}

1. Gehe zu **Network Admin › Ultimate Multisite › Checkout Forms**
2. Öffne oder erstelle ein Kassenformular
3. Klicke im Kasseneditor auf **Feld hinzufügen**
4. Wähle **Domain-Auswahl** aus der Feldliste
5. Konfiguriere die Feldoptionen (siehe unten)
6. Speichere das Formular

### Feldoptionen {#field-options}

**Domain-Modi** — Wähle aus, welche Tabs der Kunde sieht. Jeder Modus kann unabhängig aktiviert oder deaktiviert werden:

| Modus | Was er macht |
|---|---|
| **Subdomain** | Der Kunde verwendet eine kostenlose Subdomain in deinem Netzwerk (z. B. `mysite.yournetwork.com`). Keine Zahlung erforderlich. |
| **Neue Domain registrieren** | Der Kunde sucht nach einer neuen Domain und registriert sie über deinen konfigurierten Anbieter. Verwendet das passende Domain-Produkt für die Preisgestaltung. |
| **Bestehende Domain** | Der Kunde verknüpft eine Domain, die ihm bereits gehört. Keine Registrierungsgebühr. Die Domain wird automatisch seiner Website zugeordnet. |

**Standardmodus** — Wenn alle drei Modi aktiviert sind, welcher Tab zuerst geöffnet wird. Auf **Subdomain** setzen, um die Domain-Registrierung optional zu halten, oder auf **Neue Domain registrieren**, um Käufe zu fördern.

**Domain-Produkt** — Optional dieses Feld an ein bestimmtes Domain-Produkt binden. Wenn nicht festgelegt, wählt das Add-on automatisch das passende Produkt basierend auf der TLD aus, nach der der Kunde sucht.

### Kontaktfelder für Registranten {#registrant-contact-fields}

Wenn ein Kunde den Tab **Neue Domain registrieren** auswählt, fügt das Kassenformular inline Kontaktfelder für Registranten hinzu:

- Vorname / Nachname
- E-Mail-Adresse
- Adresse (Zeile 1, Stadt, Bundesland/Provinz, Postleitzahl, Land)
- Telefonnummer

Diese werden von allen Registraren benötigt und validiert, bevor der Aufruf der Registrierungs-API erfolgt. Telefonnummern werden automatisch in das von Registraren erwartete internationale Format `+CC.NNN` formatiert.

### Automatisch generierte Website-URL {#auto-generated-site-url}

Wenn ein Kunde eine Domain registriert oder zuordnet, wird das Feld für die Website-URL automatisch aus der ausgewählten Domain befüllt. Kunden müssen kein separates URL-Feld ausfüllen.

### Suchverhalten {#search-behaviour}

- Die Domain-Verfügbarkeit wird in Echtzeit mit AJAX geprüft, während der Kunde tippt
- Alternative TLD-Vorschläge werden angezeigt, wenn die gewünschte Domain nicht verfügbar ist
- Preise werden live abgerufen und übersichtlich angezeigt (Registrierungspreis, Verlängerungspreis, optionale WHOIS-Datenschutzgebühr)
- Gutscheincodes gelten für Domain-Produkte genauso wie für jedes andere Produkt

**Suchreaktionsfähigkeit abstimmen:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Benutzerdefinierte Felder zum Domain-Suchformular hinzufügen:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Additional notes',
    ];
    return $fields;
});
```

---

## Kunden-DNS-Verwaltung {#customer-dns-management}

Kunden können DNS-Einträge für ihre registrierten Domains auf der Seite **My Account** unter dem Eintrag ihrer Domain verwalten.

### Unterstützte Eintragstypen {#supported-record-types}

| Typ | Verwendung |
|---|---|
| **A** | Hostnamen einer IPv4-Adresse zuordnen |
| **AAAA** | Hostnamen einer IPv6-Adresse zuordnen |
| **CNAME** | Einen Alias erstellen, der auf einen anderen Hostnamen verweist |
| **MX** | Mail-Exchange-Server festlegen |
| **TXT** | SPF-, DMARC-, Verifizierungs- oder andere Texteinträge hinzufügen |

### Welche Anbieter unterstützen DNS-Verwaltung? {#which-providers-support-dns-management}

DNS-Verwaltung (Einträge hinzufügen, bearbeiten, löschen) ist mit **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** und **Openprovider** verfügbar. **Hostinger**-Domains können Nameserver über Domain Seller aktualisieren; DNS-Einträge für gehostete Domains werden durch die zentrale Hostinger-Integration für Domain-Zuordnung verwaltet. Namecheap-, GoDaddy- und NameSilo-Domains zeigen Status- und Ablaufdaten an, aber DNS muss direkt im Control Panel des Registrars verwaltet werden.

### Standard-DNS-Einträge {#default-dns-records}

Du kannst Standard-DNS-Einträge konfigurieren, die automatisch angewendet werden, wenn eine Domain registriert wird. Gehe zu **Settings › Domain Seller › Default DNS Records**.

Standard-Eintragswerte unterstützen zwei Tokens:

| Token | Ersetzt durch |
|---|---|
| `{DOMAIN}` | Den registrierten Domainnamen (z. B. `example.com`) |
| `{SITE_URL}` | Die WordPress-Website-URL für die Website des Kunden |

**Beispiel — Apex-Domain und www auf deine Server-IP verweisen lassen:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS anzeigen und bearbeiten {#admin-viewing-and-editing-dns}

Netzwerkadministratoren können DNS-Einträge für jede Kundendomain auf der Bearbeitungsseite der Domain unter **Network Admin › Ultimate Multisite › Domains** anzeigen und bearbeiten.
