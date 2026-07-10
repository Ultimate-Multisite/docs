---
title: Kassefelt og kunde-DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout-felt og kundens DNS-administrasjon {#checkout-field-and-customer-dns-management}

## Checkout-feltet Domain Selection {#the-domain-selection-checkout-field}

Feltet **Domain Selection** er et checkout-element som gir kunder et valg for hvordan de får nettstedets domene. Legg det til i et hvilket som helst checkout-skjema for å aktivere domenesalg.

### Legge til feltet i et checkout-skjema {#adding-the-field-to-a-checkout-form}

1. Gå til **Network Admin › Ultimate Multisite › Checkout Forms**
2. Åpne eller opprett et checkout-skjema
3. I checkout-redigeringen klikker du på **Add Field**
4. Velg **Domain Selection** fra feltlisten
5. Konfigurer feltalternativene (se nedenfor)
6. Lagre skjemaet

### Feltalternativer {#field-options}

**Domenemoduser** — Velg hvilke faner kunden ser. Hver modus kan aktiveres eller deaktiveres uavhengig:

| Modus | Hva den gjør |
|---|---|
| **Subdomain** | Kunden bruker et gratis subdomene på nettverket ditt (f.eks. `mysite.yournetwork.com`). Ingen betaling nødvendig. |
| **Register New Domain** | Kunden søker etter et nytt domene og registrerer det gjennom den konfigurerte leverandøren din. Bruker det samsvarende domeneproduktet for prising. |
| **Existing Domain** | Kunden tilordner et domene de allerede eier. Ingen registreringsavgift. Domenet tilordnes automatisk til nettstedet deres. |

**Standardmodus** — Når alle tre moduser er aktivert, hvilken fane som åpnes først. Sett til **Subdomain** for å holde domeneregistrering valgfritt, eller **Register New Domain** for å oppmuntre til kjøp.

**Domeneprodukt** — Fest eventuelt dette feltet til et spesifikt domeneprodukt. Hvis det ikke er angitt, velger tillegget automatisk det samsvarende produktet basert på TLD-en kunden søker etter.

### Kontaktfelt for registrant {#registrant-contact-fields}

Når en kunde velger fanen **Register New Domain**, legger checkout-skjemaet til kontaktfelt for registrant innebygd:

- Fornavn / Etternavn
- E-postadresse
- Adresse (linje 1, by, delstat/provins, postnummer, land)
- Telefonnummer

Disse kreves av alle registrarer og valideres før API-kallet for registrering utføres. Telefonnummer formateres automatisk til det internasjonale formatet `+CC.NNN` som registrarer forventer.

### Automatisk generert nettsteds-URL {#auto-generated-site-url}

Når en kunde registrerer eller tilordner et domene, fylles feltet for nettsteds-URL automatisk ut fra det valgte domenet. Kunder trenger ikke å fylle ut et separat URL-felt.

### Søkeatferd {#search-behaviour}

- Domenetilgjengelighet sjekkes i sanntid med AJAX mens kunden skriver
- Alternative TLD-forslag vises når det foretrukne domenet ikke er tilgjengelig
- Prising hentes live og vises tydelig (registreringspris, fornyelsespris, valgfri WHOIS-personvernavgift)
- Kupongkoder gjelder for domeneprodukter på samme måte som for alle andre produkter

**Justere søkeresponsivitet:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Legge til egendefinerte felt i domenesøkeskjemaet:**

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

## Kundens DNS-administrasjon {#customer-dns-management}

Kunder kan administrere DNS-oppføringer for sine registrerte domener fra siden **My Account**, under oppføringen for domenet sitt.

### Støttede oppføringstyper {#supported-record-types}

| Type | Bruk |
|---|---|
| **A** | Tilordne vertsnavn til IPv4-adresse |
| **AAAA** | Tilordne vertsnavn til IPv6-adresse |
| **CNAME** | Opprett et alias som peker til et annet vertsnavn |
| **MX** | Angi e-postutvekslingsserver |
| **TXT** | Legg til SPF, DMARC, verifisering eller andre tekstoppføringer |

### Hvilke leverandører støtter DNS-administrasjon? {#which-providers-support-dns-management}

DNS-administrasjon (legge til, redigere, slette oppføringer) er tilgjengelig med **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** og **Openprovider**. **Hostinger**-domener kan oppdatere navnetjenere gjennom Domain Seller; DNS-oppføringer for driftede domener administreres av den innebygde Hostinger-integrasjonen for domenetilordning. Namecheap-, GoDaddy- og NameSilo-domener viser status- og utløpsinformasjon, men DNS må administreres direkte i registrarens kontrollpanel.

### Standard DNS-oppføringer {#default-dns-records}

Du kan konfigurere standard DNS-oppføringer som brukes automatisk når et domene registreres. Gå til **Settings › Domain Seller › Default DNS Records**.

Standard oppføringsverdier støtter to tokener:

| Token | Erstattes med |
|---|---|
| `{DOMAIN}` | Det registrerte domenenavnet (f.eks. `example.com`) |
| `{SITE_URL}` | WordPress-nettsteds-URL-en for kundens nettsted |

**Eksempel — pek apex-domenet og www til server-IP-en din:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: vise og redigere DNS {#admin-viewing-and-editing-dns}

Nettverksadministratorer kan vise og redigere DNS-oppføringer for ethvert kundedomene fra domenets redigeringsside i **Network Admin › Ultimate Multisite › Domains**.
