---
title: Polje za plaćanje i DNS kupca
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Polje za plaćanje i upravljanje DNS-om kupca {#checkout-field-and-customer-dns-management}

## Polje odabira domena u procesu plaćanja (checkout) {#the-domain-selection-checkout-field}

Polje **Domain Selection** je element u procesu plaćanja koji daje kupcima izbor kako dobiti domen za njihovu web stranicu. Dodajte ga bilo kojem obrascu plaćanja kako biste omogućili prodaju domena.

### Dodavanje polja u obrazac plaćanja {#adding-the-field-to-a-checkout-form}

1. Idite na **Network Admin › Ultimate Multisite › Checkout Forms**
2. Otvorite ili kreirajte obrazac plaćanja
3. U editoru plaćanja kliknite na **Add Field** (Dodaj polje)
4. Izaberite **Domain Selection** iz liste polja
5. Konfigurirajte opcije polja (pogledajte ispod)
6. Sačuvajte obrazac

### Opcije polja {#field-options}

**Domain modes** — Odaberite koje kartice kupci vide. Svaki način može biti uključen ili isključen nezavisno:

| Mode | Što radi |
|---|---|
| **Subdomain** (Poddomena) | Kupac koristi besplatnu poddomenu na vašoj mreži (npr. `mysite.yournetwork.com`). Nema potrebe za plaćanjem. |
| **Register New Domain** (Registriraj novi domen) | Kupac traži novi domen i registriraju ga putem vašeg konfiguriranog pružatelja usluga. Koristi odgovarajući proizvod domena za određivanje cijene. |
| **Existing Domain** (Postojeći domen) | Kupac mapira domen koji već posjeduje. Nema naknade za registraciju. Domen je automatski povezan s njihovom stranicom. |

**Default mode** (Podrazumne postavke) — Kada su svi tri načina uključeni, koja kartica se prvo otvara? Postavite na **Subdomain** da bi registracija domena ostala opcionalna, ili na **Register New Domain** da biste podsticali kupovine.

**Domain product** (Proizvod domena) — Opcionalno vezajte ovo polje za određeni proizvod domena. Ako nije postavljeno, dodatak automatski odabire odgovarajući proizvod na temelju TLD-a koji kupac traži.

### Polja kontakt podataka registrantovih osobnih podataka {#registrant-contact-fields}

Kada kupac odabere karticu **Register New Domain**, obrazac plaćanja doda polja za kontakt registrantovih osobnih podataka u liniji:

- Prvo ime / Prezime
- E-mail adresa
- Adresa (red 1, grad, stanje/provincia, poštanski broj, država)
- Broj telefona

Ovi potrebni su za sve registratora i validirani prije slanja poziva API-ja za registraciju. Brojevi telefona se automatski formatiraju u međunarodni format `+CC.NNN` koji očekuju registratori.

### Automatski URL stranice {#auto-generated-site-url}

Kada kupac se prijavi ili mapira domen, polje URL stranice se automatski popunjava iz odabranog domena. Kupci nemaju potrebu da popune zasebno polje za URL.

### Ovdje je ponašanje pretraživanja {#search-behaviour}

- Dostupnost domena se provjerava u stvarnom vremenu s AJAX-om dok korisnik kuca
- Predlažu se alternativne TLD (top-level domain) opcije kada je preferirani domen nedostupan
- Cijene se dohvaćaju uživo i jasno prikazuju (cijena registracije, cijena obnove, opcionalna naknada za privatnost WHOIS-a)
- Kupi kartoni primjenjuju na proizvode domena isto kao i na bilo koji drugi proizvod

**Podrška brzini pretraživanja:**

```php
// Povećajte odmak debounce-a (u milisekundama) kako biste smanjili pozive API-ja na sporim konekcijama
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // podrazumevano: 500
});
```

**Dodavanje korisničkih polja u formular za pretraživanje domena:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Dodatne napomene',
    ];
    return $fields;
});
```

---

## Upravljanje DNS-om za korisnike {#customer-dns-management}

Korisnici mogu upravljati DNS zapisima za svoje registrirane domene s stranice **Moj račun**, pod unosom njihovog domena.

### Podržani tipovi zapisa {#supported-record-types}

| Tip | Korištenje |
|---|---|
| **A** | Mapiranje imena hosta na IPv4 adresu |
| **AAAA** | Mapiranje imena hosta na IPv6 adresu |
| **CNAME** | Kreiranje alias-a koji pokazuje na drugi ime hosta |
| **MX** | Postavljanje servera za e-mail razmjenu |
| **TXT** | Dodavanje SPF, DMARC, provjere ili drugih tekstualnih zapisa |

### Koji pružatelji podržavaju upravljanje DNS-om? {#which-providers-support-dns-management}

Zadржаvajte upravljanje DNS-om (dodavanje, uređivanje, brisanje zapisa) dostupno s **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** i **Openprovider**. Domeni **Hostinger** možete ažurirati putem Domain Sellera. DNS podaci za hostirane domene upravlja integracija Hostinger domain-mapping core-a. Domeni Namecheap, GoDaddy i NameSilo prikazuju status i informacije o isteku, ali DNS se mora upravljati direktno u kontrolnoj ploči registratora.

### Podrazumevani DNS podaci {#default-dns-records}

Možete postaviti podrazumevane DNS zapise koji se automatski primjenjuju kada se domen prijavi. Idite na **Settings › Domain Seller › Default DNS Records**.

Vrijednosti podrazumevanih zapisa podržavaju dva tokena:

| Token | Zamijenjeno s |
|---|---|
| `{DOMAIN}` | Registrirani naziv domena (npr. `example.com`) |
| `{SITE_URL}` | URL WordPress stranice za klijentsku stranicu |

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

Mrežni administratori mogu pregledavati i uređivati DNS zapise za bilo koji klijentski domen s stranice za uređivanje domena u **Network Admin › Ultimate Multisite › Domains**.
