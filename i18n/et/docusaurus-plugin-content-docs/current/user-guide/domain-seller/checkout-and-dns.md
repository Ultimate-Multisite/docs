---
title: Kassandik ja kliendi DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Kassand ja kliendi DNS-juhtimise juhtimine

## Domeeni valikukirjenduse checkout-väljeldus {#the-domain-selection-checkout-field}

**Domeeni valikukirjenduse (Domain Selection)** väljeldus on checkout-element, mis annab klientide võimaluse välja, kuidas saada oma veebile toome domeen. Lisage see igale checkout-formulele domeen müügi aktiveerimiseks.

### Välje väljelduse checkout-formulele {#adding-the-field-to-a-checkout-form}

1. Minenda **Network Admin › Ultimate Multisite › Checkout Forms** menüüpunktisse
2. Avage või luute uue checkout-formule
3. Checkout-redaktoris klõpsake **Add Field** (Väljaaga)
4. Valige väljeldusest **Domain Selection**
5. Konfigureerige väljelduse valikud (vaata all)
6. Salvestage formaal

### Väljelduse valikud {#field-options}

**Domeeni režiimid** — Valige, millise tabid klient näeb. Iga režiim saab aktiveerida või deaktiveerida eraldi:

| Režiim | Mis see teeb |
|---|---|
| **Subdomain** (Alsubdomeen) | Klient kasutab tasuta alsubdomeeni oma võrku (nt `mysite.yournetwork.com`). Maklust ei vaja. |
| **Register New Domain** (Uue domeeni registreerimine) | Klient otsib uut domeeni ja registreerib selle konfiguratsiooniga määratud püsivahendi abil. Kasutus on vastava domeenproduktsiooniga hinnadest. |
| **Existing Domain** (Olemasoleva domeeni) | Klient kinnitab domeeni, mille omab juba oma. Registreerimata tasuta. Domeen kinnitatakse automaatselt klientide veebile. |

**Oletusrežiim** — Kui kõik kolm režiimid on aktiveeritud, milline tab ilmub esimesena? Asetage **Subdomain**, et säilitada domeeni registreimise valikuna, või **Register New Domain**, et juhatada ostude tegemise.

**Domeenproduktsioon** — Valige võimaluse korral see väljeldus kinnitama konkreetse domeenproduktsiooniga. Kui seda ei seeta, lisamoodilis modul valib automaatselt vastava produktsiooni klientide otsimata kasutamata TLD-i (Top-Level Domain).

### Registrantkontaktiväljelduse {#registrant-contact-fields}

Kui klient valib **Register New Domain** tabist, lisa checkout-formulele registrantkontaktiväljelduse linjalikult:

- Esimene nimi / Suvimees
- E-posti aadress
- Aaste (linna/küla, maakond/provinsi, postipkood, riik)
- Telefoninumber

Need on kõik registreerijad ja validatsioon toimub enne API-kutse tegemist. Telefoninumbrid on automaatselt formatseeritud `+CC.NNN` rahvusvaheliseks formaadiks, mida registreerijad odavad.

### Automaatiliselt genereeritud veebilehe URL {#auto-generated-site-url}

Kui klient registreerub või asendab domeeni, veebilehe URL-välja on automaatselt täidetud valitud domeenist. Klient ei vaja eraldi URL-välja täita.

### Otsimise käitumine {#search-behaviour}

- Domeeni saadaval olevate olekuse kontrolli teostatakse reaaliajal AJAX abil klienti tekstivõtua ajal
- Kui lemmak domeen on eemal, näidatakse alternatiivseid TLD (top-level domain) ettepaneku
- Hindlust saab laadida elamisel ja esitada selgelt (registreerimise hind, uuestihoonianindamise hind, valikuline WHOIS privaatsuse tasu)
- Kuponikoodid on domeeniproduktidele kasutatavad samuti kui muid produkte

**Otsimisvastuse reguleerimine:**

```php
// Suurendage debouncei viive (millisekund), et vähendada API-kutseid aeglaselt ühendustel
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // oletus: 500
});
```

**Domeenotsimisvormile kasutamata väljade lisamine:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Lisakommoodud märkused',
    ];
    return $fields;
});
```

---

## Klientide DNS-juhtimine {#customer-dns-management}

Klientid saavad domeenide DNS-registreid hallata oma **Minu konto** lehel, domeeni sisse osutatud registreerimise all.

### Toetud registriiditüübid {#supported-record-types}

| Tüüp | Kasutus |
|---|---|
| **A** | Hostnimi IPv4-adressile seadistamine |
| **AAAA** | Hostnimi IPv6-adressile seadistamine |
| **CNAME** | Teise hostnimi aliasi luomine |
| **MX** | Sähköpostvahetusservere seadistamine |
| **TXT** | SPF, DMARC, kinnituse või muud tekstregistreid lisamine |

### Millised tarjojad toetavad DNS-juhtimist? {#which-providers-support-dns-management}

DNS-juhtimine (rekordide lisamine, muutmise, eemaldamise) on saadaval **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** ja **Openprovider** abil. **Hostinger** domeenid saab nimetajavere kaudu nimetajahte uuendada; hooldatud domeenide DNS-rekordid on halvist core Hostinger domeen-mapping integreerimise poolt. Namecheap, GoDaddy ja NameSilo domeenid näitavad staatust ja lisuajalugu, kuid DNS tuleb juhtida otse registri kontrollpaneli abil.

### Pooldud DNS-rekordid {#default-dns-records}

Saate konfigurida pooldud DNS-rekordid, mis aktiveeruvad automaatselt domeeni registreerimise ajal. Minimeerige **Settings › Domain Seller › Default DNS Records**.

Pooldud rekordi väärtused toetavad kaks tokenit:

| Token | Asendatakse |
|---|---|
| `{DOMAIN}` | Registreeritud domeenimi (nt `example.com`) |
| `{SITE_URL}` | WordPressi saini URL klientide sajandile |

**Näide — viia apex-domeeni ja www serveri IP-le:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS-rekordide vaatamine ja muutmise {#admin-viewing-and-editing-dns}

Võrrejaadministraatorid saavad vaadata ja muuta kõigile klientide domeenide DNS-rekorde domeeni mueditava lehtest **Network Admin › Ultimate Multisite › Domains**.
