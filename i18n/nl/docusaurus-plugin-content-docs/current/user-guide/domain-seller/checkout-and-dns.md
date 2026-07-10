---
title: Afrekenveld en klant-DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout-veld en DNS-beheer voor klanten {#checkout-field-and-customer-dns-management}

## Het checkout-veld Domain Selection {#the-domain-selection-checkout-field}

Het veld **Domain Selection** is een checkout-element dat klanten een keuze geeft voor hoe ze het domein van hun site krijgen. Voeg het toe aan elk checkout-formulier om domeinverkoop mogelijk te maken.

### Het veld toevoegen aan een checkout-formulier {#adding-the-field-to-a-checkout-form}

1. Ga naar **Network Admin › Ultimate Multisite › Checkout Forms**
2. Open of maak een checkout-formulier
3. Klik in de checkout-editor op **Add Field**
4. Kies **Domain Selection** uit de veldenlijst
5. Configureer de veldopties (zie hieronder)
6. Sla het formulier op

### Veldopties {#field-options}

**Domeinmodi** — Kies welke tabs de klant ziet. Elke modus kan onafhankelijk worden ingeschakeld of uitgeschakeld:

| Modus | Wat het doet |
|---|---|
| **Subdomain** | Klant gebruikt een gratis subdomein op je netwerk (bijv. `mysite.yournetwork.com`). Geen betaling nodig. |
| **Register New Domain** | Klant zoekt naar een nieuw domein en registreert het via je geconfigureerde provider. Gebruikt het overeenkomende domeinproduct voor de prijsstelling. |
| **Existing Domain** | Klant koppelt een domein dat die al bezit. Geen registratiekosten. Het domein wordt automatisch aan hun site gekoppeld. |

**Standaardmodus** — Wanneer alle drie de modi zijn ingeschakeld, welke tab als eerste wordt geopend. Stel in op **Subdomain** om domeinregistratie optioneel te houden, of **Register New Domain** om aankopen aan te moedigen.

**Domeinproduct** — Koppel dit veld optioneel aan een specifiek domeinproduct. Als dit niet is ingesteld, selecteert de addon automatisch het overeenkomende product op basis van de TLD waarnaar de klant zoekt.

### Contactvelden voor registrant {#registrant-contact-fields}

Wanneer een klant de tab **Register New Domain** selecteert, voegt het checkout-formulier inline contactvelden voor de registrant toe:

- Voornaam / achternaam
- E-mailadres
- Adres (regel 1, plaats, staat/provincie, postcode, land)
- Telefoonnummer

Deze zijn vereist door alle registrars en worden gevalideerd voordat de registratie-API-aanroep wordt gedaan. Telefoonnummers worden automatisch geformatteerd naar het internationale formaat `+CC.NNN` dat registrars verwachten.

### Automatisch gegenereerde site-URL {#auto-generated-site-url}

Wanneer een klant een domein registreert of koppelt, wordt het site-URL-veld automatisch ingevuld met het gekozen domein. Klanten hoeven geen apart URL-veld in te vullen.

### Zoekgedrag {#search-behaviour}

- Domeinbeschikbaarheid wordt in realtime met AJAX gecontroleerd terwijl de klant typt
- Alternatieve TLD-suggesties worden getoond wanneer het gewenste domein niet beschikbaar is
- Prijsstelling wordt live opgehaald en duidelijk weergegeven (registratieprijs, verlengingsprijs, optionele WHOIS-privacykosten)
- Kortingscodes zijn van toepassing op domeinproducten, net als op elk ander product

**Zoekresponsiviteit afstemmen:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Aangepaste velden toevoegen aan het domeinzoekformulier:**

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

## DNS-beheer voor klanten {#customer-dns-management}

Klanten kunnen DNS-records voor hun geregistreerde domeinen beheren vanaf de pagina **My Account**, onder de vermelding van hun domein.

### Ondersteunde recordtypen {#supported-record-types}

| Type | Gebruik |
|---|---|
| **A** | Koppel hostnaam aan IPv4-adres |
| **AAAA** | Koppel hostnaam aan IPv6-adres |
| **CNAME** | Maak een alias aan die naar een andere hostnaam verwijst |
| **MX** | Stel mail-exchange-server in |
| **TXT** | Voeg SPF-, DMARC-, verificatie- of andere tekstrecords toe |

### Welke providers ondersteunen DNS-beheer? {#which-providers-support-dns-management}

DNS-beheer (records toevoegen, bewerken, verwijderen) is beschikbaar met **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** en **Openprovider**. **Hostinger**-domeinen kunnen nameservers bijwerken via Domain Seller; DNS-records voor gehoste domeinen worden beheerd door de core Hostinger domeinkoppeling-integratie. Namecheap-, GoDaddy- en NameSilo-domeinen tonen status- en vervalinformatie, maar DNS moet rechtstreeks in het configuratiescherm van de registrar worden beheerd.

### Standaard DNS-records {#default-dns-records}

Je kunt standaard DNS-records configureren die automatisch worden toegepast wanneer een domein wordt geregistreerd. Ga naar **Settings › Domain Seller › Default DNS Records**.

Standaard recordwaarden ondersteunen twee tokens:

| Token | Vervangen door |
|---|---|
| `{DOMAIN}` | De geregistreerde domeinnaam (bijv. `example.com`) |
| `{SITE_URL}` | De WordPress site-URL voor de site van de klant |

**Voorbeeld — wijs het hoofddomein en www naar het IP-adres van je server:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Beheerder: DNS bekijken en bewerken {#admin-viewing-and-editing-dns}

Netwerkbeheerders kunnen DNS-records voor elk klantdomein bekijken en bewerken vanaf de bewerkingspagina van het domein in **Network Admin › Ultimate Multisite › Domains**.
