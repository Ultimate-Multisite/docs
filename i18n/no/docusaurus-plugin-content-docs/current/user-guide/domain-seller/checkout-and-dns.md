---
title: Kassefelt og kundens DNS
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Administrasjon av felt for kjøp av domene og kundens DNS

## Feltet for domenevalg

**Domain Selection**-feltet er et kassefelt som gir kundene et valg om hvordan de skal få domenet til nettstedet sitt. Legg det til i ethvert kassefelt for å muliggjøre salg av domener.

### Legge til feltet i et kassefelt

1. Gå til **Network Admin › Ultimate Multisite › Checkout Forms**
2. Åpne eller opprett et kassefelt
3. I kassefeltredigereren, klikk **Add Field**
4. Velg **Domain Selection** fra listen over felt
5. Konfigurer feltalternativene (se nedenfor)
6. Lagre feltet

### Feltalternativer

**Domain modes** — Velg hvilke faner kunden skal se. Hver modus kan aktiveres eller deaktiveres uavhengig:

| Mode | Hva det gjør |
|---|---|
| **Subdomain** | Kunden bruker et gratis underdomene på nettverket ditt (f.eks. `mysite.yournetwork.com`). Ingen betaling nødvendig. |
| **Register New Domain** | Kunden søker etter et nytt domene og registrerer det gjennom din konfigurerte leverandør. Bruker det matchende domenesalgsproduktet for prissetting. |
| **Existing Domain** | Kunden mapper et domene de allerede eier. Ingen registreringsgebyr. Domenet mappes automatisk til nettstedet deres. |

**Default mode** — Når alle tre modusene er aktivert, hvilken fane som åpnes først. Sett til **Subdomain** for å holde domeneregistrering valgfritt, eller **Register New Domain** for å oppmuntre til kjøp.

**Domain product** — Du kan valgfritt koble dette feltet til et spesifikt domenesalgsprodukt. Hvis det ikke er satt, velger tilleggspakken automatisk det matchende produktet basert på TLD-en kunden søker etter.

### Registrant kontaktfelt

Når en kunde velger fanen **Register New Domain**, legger kassefeltet til felt for registrantkontakt inline:

- Fornavn / Etternavn
- E-postadresse
- Adresse (linje 1, by, fylke/provins, postnummer, land)
- Telefonnummer

Disse er påkrevd av alle registreringer og valideres før registrerings-API-kallet gjøres. Telefonnumre formateres automatisk til det internasjonale `+CC.NNN`-formatet som registreringstjenester forventer.

### Automatisk generert nettsted-URL

Når en kunde registrerer eller mapper et domene, fylles nettsted-URL-feltet automatisk ut fra det valgte domenet. Kundene trenger ikke å fylle ut et separat URL-felt.

### Søkeatferd

- Domene-tilgjengelighet sjekkes i sanntid med AJAX mens kunden skriver
- Alternative TLD-forslag vises når det foretrukne domenet er utilgjengelig
- Prissetting hentes live og vises tydelig (registreringspris, fornyelsespris, valgfri WHOIS-personvernsgebyr)
- Kupongkoder gjelder for domenesalgsprodukter på samme måte som for ethvert annet produkt

**Justering av søkeresponsivitet:**

```php
// Øk debounce-forsinkelsen (millisekunder) for å redusere API-kall på langsomme tilkoblinger
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // standard: 500
});
```

**Legge til egendefinerte felt i domenesøkefeltet:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Ytterligere notater',
    ];
    return $fields;
});
```

---

## Kundens DNS-administrasjon

Kunder kan administrere DNS-oppføringer for sine registrerte domener fra siden **My Account**, under domenets oppføring.

### Støttede oppføringstyper

| Type | Bruk |
|---|---|
| **A** | Mapper vertsnavn til IPv4-adresse |
| **AAAA** | Mapper vertsnavn til IPv6-adresse |
| **CNAME** | Oppretter et alias som peker til et annet vertsnavn |
| **MX** | Setter e-postutvekslingsserver |
| **TXT** | Legger til SPF, DMARC, verifiserings- eller andre tekstoppføringer |

### Hvilke leverandører støtter DNS-administrasjon?

DNS-administrasjon (legg til, rediger, slett oppføringer) er tilgjengelig med **OpenSRS**, **ResellerClub** og **Enom**. Domener fra Namecheap, GoDaddy og NameSilo viser status- og utløpsinformasjon, men DNS må administreres direkte i registrørens kontrollpanel.

### Standard DNS-oppføringer

Du kan konfigurere standard DNS-oppføringer som automatisk blir brukt når et domene registreres. Gå til **Settings › Domain Seller › Default DNS Records**.

Standardoppføringsverdiene støtter to tokens:

| Token | Erstattes med |
|---|---|
| `{DOMAIN}` | Det registrerte domenenavnet (f.eks. `example.com`) |
| `{SITE_URL}` | WordPress nettsted-URL for kundens nettsted |

**Eksempel — peker apex-domenet og www til din server-IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visning og redigering av DNS

Nettverksadministratorer kan se og redigere DNS-oppføringer for ethvert kundedomenene fra domenes redigeringsside i **Network Admin › Ultimate Multisite › Domains**.
