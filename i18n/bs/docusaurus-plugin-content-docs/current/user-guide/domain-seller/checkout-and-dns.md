---
title: Polje za plaćanje i DNS korisnika
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout polje i upravljanje DNS-om korisnika {#checkout-field-and-customer-dns-management}

## Checkout polje za odabir domena {#the-domain-selection-checkout-field}

Polje **Domain Selection** je checkout element koji korisnicima daje izbor kako da dobiju domen svoje stranice. Dodajte ga u bilo koji checkout obrazac da omogućite prodaju domena.

### Dodavanje polja u checkout obrazac {#adding-the-field-to-a-checkout-form}

1. Idite na **Network Admin › Ultimate Multisite › Checkout Forms**
2. Otvorite ili kreirajte checkout obrazac
3. U checkout uređivaču kliknite **Add Field**
4. Odaberite **Domain Selection** sa liste polja
5. Konfigurišite opcije polja (pogledajte ispod)
6. Sačuvajte obrazac

### Opcije polja {#field-options}

**Načini domena** — Odaberite koje kartice korisnik vidi. Svaki način se može omogućiti ili onemogućiti nezavisno:

| Način | Šta radi |
|---|---|
| **Subdomain** | Korisnik koristi besplatan poddomen na vašoj mreži (npr. `mysite.yournetwork.com`). Plaćanje nije potrebno. |
| **Register New Domain** | Korisnik pretražuje novi domen i registruje ga preko vašeg konfigurisanog pružaoca usluge. Koristi odgovarajući proizvod domena za cijenu. |
| **Existing Domain** | Korisnik mapira domen koji već posjeduje. Nema naknade za registraciju. Domen se automatski mapira na njegovu stranicu. |

**Zadani način** — Kada su sva tri načina omogućena, koja kartica se prva otvara. Postavite na **Subdomain** da registracija domena ostane opcionalna, ili na **Register New Domain** da potaknete kupovine.

**Proizvod domena** — Opcionalno vežite ovo polje za određeni proizvod domena. Ako nije postavljeno, dodatak automatski odabire odgovarajući proizvod na osnovu TLD-a koji korisnik pretražuje.

### Kontakt polja registranta {#registrant-contact-fields}

Kada korisnik odabere karticu **Register New Domain**, checkout obrazac dodaje kontakt polja registranta unutar obrasca:

- Ime / Prezime
- Email adresa
- Adresa (linija 1, grad, država/pokrajina, poštanski broj, zemlja)
- Broj telefona

Ovo zahtijevaju svi registrari i provjerava se prije nego što se izvrši poziv registracijskog API-ja. Brojevi telefona se automatski formatiraju u međunarodni format `+CC.NNN` koji registrari očekuju.

### Automatski generisan URL stranice {#auto-generated-site-url}

Kada korisnik registruje ili mapira domen, polje URL-a stranice se automatski popunjava iz odabranog domena. Korisnici ne moraju popunjavati zasebno URL polje.

### Ponašanje pretrage {#search-behaviour}

- Dostupnost domena se provjerava u stvarnom vremenu pomoću AJAX-a dok korisnik kuca
- Prijedlozi alternativnih TLD-ova se prikazuju kada željeni domen nije dostupan
- Cijena se preuzima uživo i jasno prikazuje (cijena registracije, cijena obnove, opcionalna naknada za WHOIS privatnost)
- Kodovi kupona se primjenjuju na proizvode domena isto kao i na bilo koji drugi proizvod

**Podešavanje odzivnosti pretrage:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Dodavanje prilagođenih polja u obrazac za pretragu domena:**

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

## Upravljanje DNS-om korisnika {#customer-dns-management}

Korisnici mogu upravljati DNS zapisima za svoje registrovane domene sa stranice **My Account**, pod unosom svog domena.

### Podržane vrste zapisa {#supported-record-types}

| Vrsta | Upotreba |
|---|---|
| **A** | Mapira naziv hosta na IPv4 adresu |
| **AAAA** | Mapira naziv hosta na IPv6 adresu |
| **CNAME** | Kreira alias koji upućuje na drugi naziv hosta |
| **MX** | Postavlja server za razmjenu pošte |
| **TXT** | Dodaje SPF, DMARC, verifikacijske ili druge tekstualne zapise |

### Koji pružaoci usluga podržavaju upravljanje DNS-om? {#which-providers-support-dns-management}

Upravljanje DNS-om (dodavanje, uređivanje, brisanje zapisa) dostupno je sa **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** i **Openprovider**. **Hostinger** domeni mogu ažurirati nameservere kroz Domain Seller; DNS zapisima za hostovane domene upravlja osnovna Hostinger integracija za mapiranje domena. Namecheap, GoDaddy i NameSilo domeni prikazuju status i informacije o isteku, ali se DNS mora upravljati direktno u kontrolnom panelu registrara.

### Zadani DNS zapisi {#default-dns-records}

Možete konfigurisati zadane DNS zapise koji se automatski primjenjuju kada se domen registruje. Idite na **Settings › Domain Seller › Default DNS Records**.

Zadane vrijednosti zapisa podržavaju dva tokena:

| Token | Zamijenjeno sa |
|---|---|
| `{DOMAIN}` | Registrovani naziv domena (npr. `example.com`) |
| `{SITE_URL}` | WordPress URL stranice za korisnikovu stranicu |

**Primjer — usmjerite apex domen i www na IP vašeg servera:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: pregled i uređivanje DNS-a {#admin-viewing-and-editing-dns}

Mrežni administratori mogu pregledati i uređivati DNS zapise za bilo koji korisnički domen sa stranice za uređivanje domena u **Network Admin › Ultimate Multisite › Domains**.
