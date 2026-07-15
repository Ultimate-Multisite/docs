---
title: Kassefelt og kundens DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout Felt og Kundens DNS-styring

## Domænevalg feltet i checkout {#the-domain-selection-checkout-field}

**Domænevalg** feltet er et element i checkout'en, der giver kunder mulighed for at vælge, hvordan de vil få deres sites domæne. Tilføj det til ethvert checkout-formular for at aktivere salg af domæner.

### Tilføjelse af feltet til en checkout-formular {#adding-the-field-to-a-checkout-form}

1. Gå til **Network Admin › Ultimate Multisite › Checkout Forms**
2. Åbn eller opret en checkout-formular
3. I checkout-editoren klik på **Add Field** (Tilføj felt)
4. Vælg **Domain Selection** fra feltlisten
5. Konfigurer feltindstillingerne (se nedenfor)
6. Gem formularen

### Feltindstillinger {#field-options}

**Domænetyper** — Vælg, hvilke faner kunden ser. Hver tilstand kan aktiveres eller deaktiveres uafhængigt:

| Tilstand | Hvad den gør |
|---|---|
| **Subdomæne** | Kunden bruger et gratis subdomæne på dit netværk (f.eks. `mysite.yournetwork.com`). Ingen betaling nødvendig. |
| **Registrer nyt domæne** | Kunden søger efter et nyt domæne og registrerer det gennem din konfigurerede udbyder. Bruger det matchende domænenavn-produkt til prissætning. |
| **Eksisterende domæne** | Kunden mapper et domæne, de allerede ejer. Ingen registreringsgebyr. Domænet mappes automatisk til deres site. |

**Standardtilstand** — Når alle tre tilstande er aktiveret, hvilken fane åbner først? Sæt den til **Subdomain** for at holde domæneregistrering valgfri, eller **Register New Domain** for at opfordre til køb.

**Domæneprodukt** — Pin dette felt eventuelt til et specifikt domænenavn-produkt. Hvis det ikke er sat, vælger add-on automatisk det matchende produkt baseret på TLD'en (top-level domain), kunden søger efter.

### Registrantkontaktfelter {#registrant-contact-fields}

Når en kunde vælger fanen **Registrer nyt domæne**, tilføjer checkout-formularen registrantkontaktfelter direkte i formularen:

- Fornavn / Efternavn
- E-mailadresse
- Adresse (linje 1, by, stat/provins, postnummer, land)
- Telefonnummer

Disse er nødvendige for alle registreringer og valideres før registrerings-API-kaldet foretages. Telefonnumre formateres automatisk til det internationale format `+CC.NNN`, som registreringerne forventer.

### Automatisk websitadresse (site URL) {#auto-generated-site-url}

Når en kunde registrerer sig eller mapper en domæne, udfyldes feltet site URL automatisk fra det valgte domæne. Kunder behøver ikke udfylde et separat URL-felt.

### Søgeadfærd {#search-behaviour}

- Domænen tilgængelighed tjekkes i realtid med AJAX, mens kunden skriver
- Alternative TLD-forslag vises, når det foretrukne domæne ikke er tilgængeligt
- Priser hentes live og vises tydeligt (registreringspris, fornyelsespris, valgfri WHOIS privatlivsgebyr)
- Kuponkoder gælder for domæne-produkter på samme måde som andre produkter

**Justering af søgeresponsivitet:**

```php
// Øg debounce-forsinkelsen (millisekunder) for at reducere API-kald ved langsomme forbindelser
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // standard: 500
});
```

**Tilføjelse af brugerdefinerede felter til domænesøgeformularen:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Yderligere noter',
    ];
    return $fields;
});
```

---

## Kunde-DNS-administration {#customer-dns-management}

Kunder kan administrere DNS-oplysninger for deres registrerede domæner fra siden **Min konto**, under opførelsen af det pågældende domæne.

### Understøttede rekordtyper {#supported-record-types}

| Type | Brug |
|---|---|
| **A** | Kortlæg et hostname til en IPv4-adresse |
| **AAAA** | Kortlæg et hostname til en IPv6-adresse |
| **CNAME** | Opret en alias, der peger på et andet hostname |
| **MX** | Indstil mailveksleren (mail exchange server) |
| **TXT** | Tilføj SPF, DMARC, verifikation eller andre tekstoplysninger |

### Hvilke udbydere understøtter DNS-administration? {#which-providers-support-dns-management}

DNS-administration (tilføj, rediger, slet oplysninger) er tilgængelig med **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** og **Openprovider**. Hostinger domæner kan opdatere nameservere via Domain Seller; DNS-oplysninger for hostede domæner administreres af kernens Hostinger domain-mapping integration. Namecheap, GoDaddy og NameSilo domæner viser status og udløbsinformation, men DNS skal administreres direkte i registreringens kontrolpanel.

### Standard DNS-oplysninger {#default-dns-records}

Du kan opsætte standard DNS-oplysninger, som automatisk anvendes, når et domæne registreres. Gå til **Settings › Domain Seller › Default DNS Records**.

Standard værdi for oplysningerne understøtter to tokens:

| Token | Er erstattet med |
|---|---|
| `{DOMAIN}` | Det registrerede domænenavn (f.eks. `example.com`) |
| `{SITE_URL}` | WordPress-websidens URL for kundens site |

**Eksempel — peg domænet og www til din server IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: se og rediger DNS {#admin-viewing-and-editing-dns}

Netværksadministratorer kan se og redigere DNS-oplysninger for ethvert kundedomen fra domænets redigeringsside i **Network Admin › Ultimate Multisite › Domains**.
