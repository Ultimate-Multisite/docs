---
title: Checkout Veld en Klant DNS
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Bestelveld en Kliënt DNS-bestuur

## Die Domein Keuse bestelveld

Die **Domein Keuse**-veld is 'n bestelveld wat kliënte die keuse gee oor hoe hulle hul webwerf se domein wil kry. Voeg dit by enige bestelformulier om domeinverkoop te aktiver.

### Voeg die veld by 'n bestelformulier

1. Gaan na **Network Admin › Ultimate Multisite › Checkout Forms**
2. Maak of oop 'n bestelformulier
3. Klik in die bestelredigeerder op **Add Field**
4. Kies **Domain Selection** uit die veldlys
5. Konfigureer die veldopsies (sien hieronder)
6. Stoor die formulier

### Veldopsies

**Domeinmodusse** — Kies watter tabblae die kliënt sien. Elke modus kan onafhanklik geaktiveer of gedeaktiveer word:

| Modus | Wat dit doen |
|---|---|
| **Subdomain** | Die kliënt gebruik 'n gratis subdomein op jou netwerk (bv. `mywebwerf.jounetwerk.com`). Geen betaling nodig nie. |
| **Register New Domain** | Die kliënt soek na 'n nuwe domein en registreer dit deur jou gekonfigureerde verskaffer. Gebruik die pasmakende domeinproduk vir prysbepaling. |
| **Existing Domain** | Die kliënt koppel 'n domein wat hulle reeds besit. Geen registrasiefooi nie. Die domein word outomaties aan hul webwerf gekoppel. |

**Standaardmodus** — Wanneer al drie modusse geaktiveer is, watter tabblad word eers oopgmaak. Stel dit op **Subdomain** om domeinregistrasie optioneel te hou, of op **Register New Domain** om aankope aan te moedig.

**Domeinproduk** — Pin hierdie veld opsioneel aan 'n spesifieke domeinproduk. Indien nie ingestel nie, kies die bykomende module outomaties die pasmakende produk op grond van die TLD wat die kliënt soek.

### Registrant kontakvelde

Wanneer 'n kliënt die **Register New Domain**-tabblad kies, voeg die bestelformulier registrant kontakvelde in die lyn by:

- Voornaam / Van
- E-posadres
- Adres (lyn 1, stad, provinsie/staat, poskode, land)
- Telefoonnommer

Hierdie is verpligtend deur alle registreerders en word gevalideer voordat die registrasie API-oproep gemaak word. Telefoonnommers word outomaties geformateer na die `+CC.NNN` internasionale formaat wat deur registreerders verwag word.

### Outomaties gegenereerde webwerf-URL

Wanneer 'n kliënt 'n domein registreer of koppel, word die webwerf-URL-veld outomaties gevul vanaf die gekose domein. Kliënte hoef nie 'n aparte URL-veld in te vul nie.

### Soekgedrag

- Domeinbeskikbaarheid word in real-time geëvalueer met AJAX terwyl die kliënt tik
- Alternatiewe TLD-voorstelle word getoon wanneer die verkore domein nie beskikbaar is nie
- Prysbepaling word live verkry en duidelik getoon (registrasiepris, hernuwingspris, opsionele WHOIS-privaatheidsfooi)
- Kuponkodes pas op domeinprodukte net soos op enige ander produk

**Optimalisering van soekresponsiewe:**

```php
// Verhoog die debounce vertraging (millisekonde) om API-oproepe te verminder op stadige netwerke
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // standaard: 500
});
```

**Byvoeging van aangepaste velde aan die domeinsoekformulier:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Ander notas',
    ];
    return $fields;
});
```

---

## Kliënt DNS-bestuur

Kliënte kan DNS-rekords vir hul geregistreerde domeine bestuur vanaf die **My Rekening**-bladsy, onder die invoer van hul domein.

### Ondersteunde rekordtipes

| Tipe | Gebruik |
|---|---|
| **A** | Koppel domeinnaam aan IPv4-adres |
| **AAAA** | Koppel domeinnaam aan IPv6-adres |
| **CNAME** | Skep 'n alias wat na 'n ander domeinnaam wys |
| **MX** | Stel e-posuitruilbediener |
| **TXT** | Voeg SPF, DMARC, verifikasie, of ander teksrekords by |

### Watter verskaffers ondersteun DNS-bestuur?

DNS-bestuur (rekords byvoeg, redigeer, verwyder) is beskikbaar met **OpenSRS**, **ResellerClub**, en **Enom**. Namecheap, GoDaddy, en NameSilo domeine toon status- en vervaldatums, maar DNS moet direk in die registreerder se bedienpaneel bestuur word.

### Standaard DNS-rekords

Jy kan standaard DNS-rekords konfigureer wat outomaties toegepas word wanneer 'n domein geregistreer word. Gaan na **Settings › Domain Seller › Default DNS Records**.

Standaard rekordwaardes ondersteun twee tokens:

| Token | Vervang met |
|---|---|
| `{DOMAIN}` | Die geregistreerde domeinnaam (bv. `voorbeeld.com`) |
| `{SITE_URL}` | Die WordPress webwerf-URL vir die kliënt se webwerf |

**Voorbeeld — wys die apex-domein en www na jou bediener IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: Bekyk en redigeer DNS

Netwerkadministrateurs kan DNS-rekords vir enige kliëntdomein vanaf die domein se redigeerbladsy in **Network Admin › Ultimate Multisite › Domains** sien en redigeer.
