---
title: Afrekenveld en Kliënt-DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Betaalproses-veld en kliënt-DNS-bestuur

## Die Domeinkeuse-betaalprosesveld

Die **Domeinkeuse**-veld is ’n betaalproses-element wat kliënte ’n keuse gee oor hoe om hul webwerf se domein te kry. Voeg dit by enige betaalvorm om domeinverkope moontlik te maak.

### Voeg die veld by ’n betaalvorm

1. Gaan na **Netwerkadmin › Ultimate Multisite › Betaalvorms**
2. Maak ’n betaalvorm oop of skep een
3. Klik in die betaalproses-redigeerder op **Voeg veld by**
4. Kies **Domeinkeuse** uit die veldlys
5. Stel die veldopsies op (sien hieronder)
6. Stoor die vorm

### Veldopsies

**Domeinmodusse** — Kies watter oortjies die kliënt sien. Elke modus kan onafhanklik geaktiveer of gedeaktiveer word:

| Modus | Wat dit doen |
|---|---|
| **Subdomein** | Kliënt gebruik ’n gratis subdomein op jou netwerk (bv. `mysite.yournetwork.com`). Geen betaling nodig nie. |
| **Registreer nuwe domein** | Kliënt soek na ’n nuwe domein en registreer dit deur jou gekonfigureerde verskaffer. Gebruik die ooreenstemmende domeinproduk vir pryse. |
| **Bestaande domein** | Kliënt koppel ’n domein wat hulle reeds besit. Geen registrasiefooi nie. Die domein word outomaties aan hul webwerf gekoppel. |

**Verstekmodus** — Wanneer al drie modusse geaktiveer is, watter oortjie eerste oopmaak. Stel dit op **Subdomein** om domeinregistrasie opsioneel te hou, of **Registreer nuwe domein** om aankope aan te moedig.

**Domeinproduk** — Koppel hierdie veld opsioneel aan ’n spesifieke domeinproduk. As dit nie gestel is nie, kies die byvoeging outomaties die ooreenstemmende produk op grond van die TLD waarna die kliënt soek.

### Registrant-kontakvelde

Wanneer ’n kliënt die **Registreer nuwe domein**-oortjie kies, voeg die betaalvorm registrant-kontakvelde inlyn by:

- Voornaam / Van
- E-posadres
- Adres (reël 1, stad, staat/provinsie, poskode, land)
- Telefoonnommer

Dit word deur alle registrateurs vereis en gevalideer voordat die registrasie-API-oproep gemaak word. Telefoonnommers word outomaties geformateer na die `+CC.NNN` internasionale formaat wat registrateurs verwag.

### Outomaties gegenereerde webwerf-URL

Wanneer ’n kliënt ’n domein registreer of koppel, word die webwerf-URL-veld outomaties ingevul vanaf die gekose domein. Kliënte hoef nie ’n aparte URL-veld in te vul nie.

### Soekgedrag

- Domeinbeskikbaarheid word intyds met AJAX nagegaan terwyl die kliënt tik
- Alternatiewe TLD-voorstelle word gewys wanneer die voorkeurdomein nie beskikbaar is nie
- Pryse word regstreeks opgehaal en duidelik vertoon (registrasieprys, hernuwingsprys, opsionele WHOIS-privaatheidsfooi)
- Koeponkodes is op domeinprodukte van toepassing, net soos op enige ander produk

**Verfyn soekreaksietyd:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Voeg pasgemaakte velde by die domeinsoekvorm:**

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

## Kliënt-DNS-bestuur

Kliënte kan DNS-rekords vir hul geregistreerde domeine vanaf die **My Account**-bladsy bestuur, onder hul domein se inskrywing.

### Ondersteunde rekordtipes

| Tipe | Gebruik |
|---|---|
| **A** | Koppel gasheernaam aan IPv4-adres |
| **AAAA** | Koppel gasheernaam aan IPv6-adres |
| **CNAME** | Skep ’n alias wat na ’n ander gasheernaam wys |
| **MX** | Stel posse-uitruilbediener |
| **TXT** | Voeg SPF-, DMARC-, verifikasie- of ander teksrekords by |

### Watter verskaffers ondersteun DNS-bestuur?

DNS-bestuur (rekords byvoeg, wysig, uitvee) is beskikbaar met **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica**, en **Openprovider**. **Hostinger**-domeine kan naambedieners deur Domain Seller opdateer; DNS-rekords vir gehuisveste domeine word deur die kern-Hostinger-domeinkoppeling-integrasie bestuur. Namecheap-, GoDaddy- en NameSilo-domeine wys status- en vervaldatuminligting, maar DNS moet direk in die registrateur se beheerpaneel bestuur word.

### Verstek-DNS-rekords

Jy kan verstek-DNS-rekords opstel wat outomaties toegepas word wanneer ’n domein geregistreer word. Gaan na **Instellings › Domain Seller › Verstek-DNS-rekords**.

Verstekrekordwaardes ondersteun twee tokens:

| Token | Vervang met |
|---|---|
| `{DOMAIN}` | Die geregistreerde domeinnaam (bv. `example.com`) |
| `{SITE_URL}` | Die WordPress-webwerf-URL vir die kliënt se webwerf |

**Voorbeeld — wys die apex-domein en www na jou bediener-IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS bekyk en wysig

Netwerkadmins kan DNS-rekords vir enige kliëntdomein vanaf die domein se wysigbladsy in **Netwerkadmin › Ultimate Multisite › Domeine** bekyk en wysig.
