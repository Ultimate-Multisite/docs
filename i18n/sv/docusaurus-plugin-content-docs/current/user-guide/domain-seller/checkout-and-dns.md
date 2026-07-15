---
title: Kassafält och kund-DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout-fält och kundens DNS-hantering

## Checkout-fältet Domain Selection {#the-domain-selection-checkout-field}

Fältet **Domain Selection** är ett checkout-element som ger kunder ett val för hur de får sin webbplats domän. Lägg till det i valfritt checkout-formulär för att aktivera domänförsäljning.

### Lägga till fältet i ett checkout-formulär {#adding-the-field-to-a-checkout-form}

1. Gå till **Network Admin › Ultimate Multisite › Checkout Forms**
2. Öppna eller skapa ett checkout-formulär
3. Klicka på **Add Field** i checkout-redigeraren
4. Välj **Domain Selection** från fältlistan
5. Konfigurera fältalternativen (se nedan)
6. Spara formuläret

### Fältalternativ {#field-options}

**Domänlägen** — Välj vilka flikar kunden ser. Varje läge kan aktiveras eller inaktiveras oberoende:

| Läge | Vad det gör |
|---|---|
| **Subdomän** | Kunden använder en gratis subdomän på ditt nätverk (t.ex. `mysite.yournetwork.com`). Ingen betalning behövs. |
| **Registrera ny domän** | Kunden söker efter en ny domän och registrerar den via din konfigurerade leverantör. Använder den matchande domänprodukten för prissättning. |
| **Befintlig domän** | Kunden mappar en domän de redan äger. Ingen registreringsavgift. Domänen mappas automatiskt till deras webbplats. |

**Standardläge** — När alla tre lägen är aktiverade, vilken flik som öppnas först. Ställ in på **Subdomän** för att hålla domänregistrering valfri, eller **Registrera ny domän** för att uppmuntra köp.

**Domänprodukt** — Fäst eventuellt detta fält vid en specifik domänprodukt. Om det inte är inställt väljer addon automatiskt den matchande produkten baserat på den TLD kunden söker efter.

### Kontaktfält för registrant {#registrant-contact-fields}

När en kund väljer fliken **Registrera ny domän** lägger checkout-formuläret till kontaktfält för registrant direkt i formuläret:

- Förnamn / Efternamn
- E-postadress
- Adress (rad 1, stad, delstat/provins, postnummer, land)
- Telefonnummer

Dessa krävs av alla registrarer och valideras innan API-anropet för registrering görs. Telefonnummer formateras automatiskt till det internationella formatet `+CC.NNN` som registrarer förväntar sig.

### Automatiskt genererad webbplats-URL {#auto-generated-site-url}

När en kund registrerar eller mappar en domän fylls fältet för webbplats-URL automatiskt i från den valda domänen. Kunder behöver inte fylla i ett separat URL-fält.

### Sökbeteende {#search-behaviour}

- Domäntillgänglighet kontrolleras i realtid med AJAX medan kunden skriver
- Alternativa TLD-förslag visas när den önskade domänen inte är tillgänglig
- Prissättning hämtas live och visas tydligt (registreringspris, förnyelsepris, valfri avgift för WHOIS-sekretess)
- Kupongkoder gäller för domänprodukter på samma sätt som för alla andra produkter

**Finjustera sökresponsivitet:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Lägga till anpassade fält i domänsökformuläret:**

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

## Kundens DNS-hantering {#customer-dns-management}

Kunder kan hantera DNS-poster för sina registrerade domäner från sidan **My Account**, under posten för deras domän.

### Record-typer som stöds {#supported-record-types}

| Typ | Användning |
|---|---|
| **A** | Mappa värdnamn till IPv4-adress |
| **AAAA** | Mappa värdnamn till IPv6-adress |
| **CNAME** | Skapa ett alias som pekar på ett annat värdnamn |
| **MX** | Ange e-postväxlingsserver |
| **TXT** | Lägg till SPF, DMARC, verifiering eller andra textposter |

### Vilka leverantörer stöder DNS-hantering? {#which-providers-support-dns-management}

DNS-hantering (lägga till, redigera, ta bort poster) är tillgänglig med **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** och **Openprovider**. **Hostinger**-domäner kan uppdatera namnservrar via Domain Seller; DNS-poster för hostade domäner hanteras av den centrala Hostinger-integrationen för domänmappning. Namecheap-, GoDaddy- och NameSilo-domäner visar status- och utgångsinformation men DNS måste hanteras direkt i registrarens kontrollpanel.

### Standard-DNS-poster {#default-dns-records}

Du kan konfigurera standard-DNS-poster som tillämpas automatiskt när en domän registreras. Gå till **Settings › Domain Seller › Default DNS Records**.

Standardvärden för poster stöder två tokens:

| Token | Ersätts med |
|---|---|
| `{DOMAIN}` | Det registrerade domännamnet (t.ex. `example.com`) |
| `{SITE_URL}` | WordPress-webbplatsens URL för kundens webbplats |

**Exempel — peka apex-domänen och www till din servers IP-adress:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: visa och redigera DNS {#admin-viewing-and-editing-dns}

Nätverksadministratörer kan visa och redigera DNS-poster för valfri kunddomän från domänens redigeringssida i **Network Admin › Ultimate Multisite › Domains**.
