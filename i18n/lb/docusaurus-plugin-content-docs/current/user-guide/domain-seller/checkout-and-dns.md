---
title: Checkout Feld und Kundendns
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Feld und Kunden DNS-Verwaltung

## Das Domain-Auswahlfeld im Checkout

Das **Domain Selection** Feld isch es Element im Checkout, wo de Kunde wählt chan, wie er sini Site-Domain bekommt. Füegs zu jedem Checkout Form hinzu, um das Verkaufen vo Domains z'ermögliche.

### Hinzufügen des Feldes zu einem Checkout Form

1. Gang zu **Network Admin › Ultimate Multisite › Checkout Forms**
2. Öffne oder erstelle en Checkout Form
3. Im Checkout Editor klick uf **Add Field** (Feld hinzufügen)
4. Wähl **Domain Selection** us de Feldliste
5. Konfiguriere d'Feldoptionen (siehe unten)
6. Speichere de Form

### Feldoptionen

**Domain Modi** — Wähl, welche Tabs de Kunde gseht. Jeder Mod chan einzeln aktiviert oder deaktiviert werde:

| Modus | Was er macht |
|---|---|
| **Subdomain** | De Kunde brucht en freie Subdomain uf dim Netzwerk (z.B. `mysite.yournetwork.com`). Kei Zahlig nötig. |
| **Register New Domain** | De Kunde sucht nach ere neue Domain und registriert sie über de vo dir konfigurierti Provider. Brucht s'passendi Domain-Produkt für d'Priisbestimmig. |
| **Existing Domain** | De Kunde verbindet en Domain, wo er scho besitzt. Kei Registrierungsgebühr. D'Domain wird automatisch mit sinere Site verbunde. |

**Standardmodus (Default mode)** — Wenn alli drei Modi aktiviert sind, welcher Tab öffnet sich als erscht? Stell ihn uf **Subdomain**, wenn d'Domain-Registrierig optional bliebe söll, oder uf **Register New Domain**, um Chäuf z'fördere.

**Domain Produkt** — Pinne das Feld optional an es spezifisches Domain-Produkt. Wenn nöd gsetzt, wählt de Addon automatisch s'passendi Produkt basierend uf de TLD, wo de Kunde sucht.

### Registrant-Kontaktfelder

Wenn en Kunde de Tab **Register New Domain** wählt, füegt de Checkout Form inline d'Registrant-Kontaktfelder hinzu:

- Vorname / Nachname
- E-Mail-Adresse
- Adresse (Zeile 1, Stadt, Bundesland/Kanton, Postleitzahl, Land)
- Telefonnummer

Die folgende Information isch für alli Registrierer nötig und wird vor em API-Call zur Registrierig validiert. Telefonnummer werdet automatisch im internationale Format `+CC.NNN` formatiert, wo d'Registrierer erwarte.

### Automatisch generierti Site URL

Wenn en Kunde sich registriert oder e Domain zuordnet, wird s'Site URL Feld automatisch mit de gwählte Domain gfüllet. Kunden müend kei separates URL-Feld usfüllä.

### Suchverhalte

- D'Verfügbarkeit vo Domains wird in Echtzit mit AJAX überprüft, während de Kunde tippt.
- Alternativi TLD-Vorschläg werdet angezeigt, wenn d'bevorzugti Domain nöd verfügbar isch.
- Priise werdet live abgriffe und klar aazeigt (Registrierigspris, Verlängerigspris, optionaler WHOIS-Privatsphäre-Gebühr).
- Coupon-Codes gältet für Domain-Produkte genauso wie für alli andere Produkte.

**Suchreaktionsfähigkeit abstimme:**

```php
// Erhöh d'Debounce-Verzögerig (Millisekundä) um API-Calls bi langsamen Verbindige z'reduziere
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // standard: 500
});
```

**Custom Fields zum Domain-Suchformular hinzufüge:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Zusätzlechi Notize',
    ];
    return $fields;
});
```

---

## DNS-Verwaltig vom Kunde

Kunde chönd DNS-Einträge für ihri registrierte Domains vo de Seite **Mein Konto** verwalte, unter em Eintrags vo de Domain.

### Unterstützti Eintrags-Typä

| Typ | Verwändig |
|---|---|
| **A** | Hostname uf IPv4-Adresse abbilde |
| **AAAA** | Hostname uf IPv6-Adresse abbilde |
| **CNAME** | En Alias erstelle, wo uf en andere Hostname zeigt |
| **MX** | Mail-Wechselserver festlege |
| **TXT** | SPF, DMARC, Verifizierig oder anderi Text-Einträge hinzufüge |

### Welche Anbieter unterstütze d'DNS-Verwaltig?

DNS-Verwaltig (Record hinzufüge, bearbeite, lösche) isch mit **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** und **Openprovider** verfügbar. Bei **Hostinger** Domain chönd Sie d'Nameservers über de Domain Seller aktualisiere; DNS-Records für gehosteti Domains wärde vom Core Hostinger domain-mapping Integration verwaltet. Namecheap, GoDaddy und NameSilo Domains zeige Status und Ablaufinformationen a, aber d'DNS müend direkt im Control Panel vom Registrar verwaltet werde.

### Standard-DNS-Records

Sie chönd Standard-DNS-Records iistelle, wo automatisch angewendet wärde, wenn e Domain registriert wird. Gang zu **Settings › Domain Seller › Default DNS Records**.

Standard-Record-Wärt unterstütze zwei Tokens:

| Token | Ersetzt mit |
|---|---|
| `{DOMAIN}` | De registrierti Domainname (z.B. `example.com`) |
| `{SITE_URL}` | D'WordPress Site URL für d'Site vom Kunde |

**Beispiel — zeig de apex-Domain und www uf Ihre Server IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS aaluege und bearbeite

Netzwerk-Admins chönd DNS-Records für jede Kundedomain vo de Edit-Seite vom Domain in **Network Admin › Ultimate Multisite › Domains** aaluege und bearbeite.
