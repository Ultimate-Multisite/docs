---
title: Betaalpagina Veld en Klant DNS
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Beheer van Checkout-velden en DNS voor Klanten

## Het veld voor domeinnaamselectie

Het veld **Domeinselectie** is een checkout-element waarmee klanten een keuze krijgen in hoe ze het domein van hun site willen verkrijgen. Voeg het toe aan elk checkout-formulier om domeinen te kunnen verkopen.

### Het veld toevoegen aan een checkout-formulier

1. Ga naar **Network Admin › Ultimate Multisite › Checkout Forms**
2. Open of maak een checkout-formulier aan
3. Klik in de checkout-editor op **Add Field**
4. Kies **Domain Selection** uit de lijst met velden
5. Configureer de veldopties (zie hieronder)
6. Sla het formulier op

### Veldopties

**Domeinmodi** — Kies welke tabbladen de klant ziet. Elke modus kan onafhankelijk ingeschakeld of uitgeschakeld worden:

| Modus | Wat het doet |
|---|---|
| **Subdomain** | De klant gebruikt een gratis subdomain op uw netwerk (bijv. `mysite.uwnetwerk.com`). Geen betaling vereist. |
| **Register New Domain** | De klant zoekt naar een nieuw domein en registreert dit via uw geconfigureerde aanbieder. Gebruikt het overeenkomstige domeinproduct voor de prijsbepaling. |
| **Existing Domain** | De klant koppelt een domein dat hij al bezit. Geen registratiekosten. Het domein wordt automatisch gekoppeld aan hun site. |

**Standaardmodus** — Wanneer alle drie de modi ingeschakeld zijn, welk tabblad opent dan als eerste. Stel dit in op **Subdomain** om domeinregistratie optioneel te houden, of op **Register New Domain** om aankopen te stimuleren.

**Domeinproduct** — Pin dit veld optioneel aan een specifiek domeinproduct. Als dit niet is ingesteld, selecteert de addon automatisch het overeenkomstige product op basis van de TLD die de klant zoekt.

### Registrantcontactvelden

Wanneer een klant op het tabblad **Register New Domain** klikt, voegt het checkout-formulier inline velden toe voor de registrantcontactgegevens:

- Voornaam / Achternaam
- E-mailadres
- Adres (straat 1, stad, staat/provincie, postcode, land)
- Telefoonnummer

Deze velden zijn verplicht voor alle registrars en worden gevalideerd voordat de registratie-API-oproep wordt gedaan. Telefoonnummers worden automatisch geformatteerd naar het internationale `+CC.NNN`-formaat dat door registrars wordt verwacht.

### Auto-gegenereerde site-URL

Wanneer een klant een domein registreert of koppelt, wordt het veld site-URL automatisch ingevuld op basis van het gekozen domein. Klanten hoeven dus geen apart URL-veld in te vullen.

### Zoekgedrag

- De beschikbaarheid van domeinen wordt in real-time gecontroleerd met AJAX terwijl de klant typt
- Alternatieve TLD-suggesties worden getoond wanneer het gewenste domein niet beschikbaar is
- De prijzen worden live opgehaald en duidelijk weergegeven (registratieprijs, verlengingsprijs, optionele WHOIS-privacykosten)
- Kortingscodes passen op domeinproducten net als op elk ander product

**Zoekresponsiviteit verfijnen:**

```php
// Verhoog de debounce-vertraging (milliseconden) om API-aanroepen te verminderen bij trage verbindingen
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Aangepaste velden toevoegen aan het domeinzoekformulier:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Aanvullende opmerkingen',
    ];
    return $fields;
});
```

---

## DNS voor Klantenbeheer

Klanten kunnen de DNS-records voor hun geregistreerde domeinen beheren vanaf de pagina **Mijn Account**, onder de vermelding van hun domein.

### Ondersteunde recordtypen

| Type | Gebruik |
|---|---|
| **A** | Hostnaam koppelen aan IPv4-adres |
| **AAAA** | Hostnaam koppelen aan IPv6-adres |
| **CNAME** | Een alias aanmaken die naar een andere hostnaam wijst |
| **MX** | Mail-uitwisselingsserver instellen |
| **TXT** | SPF-, DMARC-, verificatie- of andere tekstrecords toevoegen |

### Welke aanbieders ondersteunen DNS-beheer?

DNS-beheer (records toevoegen, bewerken, verwijderen) is beschikbaar met **OpenSRS**, **ResellerClub** en **Enom**. Domeinen van Namecheap, GoDaddy en NameSilo tonen de status en vervaldatum, maar de DNS moet direct in het controlpanel van de registrar worden beheerd.

### Standaard DNS-records

U kunt standaard DNS-records configureren die automatisch worden toegepast wanneer een domein wordt geregistreerd. Ga naar **Settings › Domain Seller › Default DNS Records**.

Standaard recordwaarden ondersteunen twee tokens:

| Token | Vervangen door |
|---|---|
| `{DOMAIN}` | De geregistreerde domeinnaam (bijv. `example.com`) |
| `{SITE_URL}` | De WordPress site-URL voor de site van de klant |

**Voorbeeld — de apex-domein en www naar het IP-adres van uw server wijzen:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: bekijken en bewerken van DNS

Netwerkbeheerders kunnen DNS-records voor elk klantdomein bekijken en bewerken vanaf de bepagina van het domein in **Network Admin › Ultimate Multisite › Domains**.
