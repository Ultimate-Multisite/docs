---
title: Polje za plaćanje i DNS kupca
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Polje za plaćanje i upravljanje DNS-om kupca

## Polje za izbor domena {#the-domain-selection-checkout-field}

Polje **Domain Selection** je element u procesu plaćanja koji daje kupcima izbor kako da dobiju domen za svoj sajt. Dodajte ga bilo na formular plaćanja kako biste omogućili prodaju domena.

### Dodavanje polja u formular plaćanja {#adding-the-field-to-a-checkout-form}

1. Idite na **Network Admin › Ultimate Multisite › Checkout Forms**
2. Otvorite ili kreirajte formular plaćanja
3. U editoru plaćanja kliknite na **Add Field** (Dodaj polje)
4. Izaberite **Domain Selection** iz liste polja
5. Konfigurišite opcije polja (pogledajte ispod)
6. Sačuvajte formular

### Opcije polja {#field-options}

**Domain modes** — Izaberite koje tabove kupac vidi. Svaki režim se može uključiti ili isključiti nezavisno:

| Mode | Šta radi |
|---|---|
| **Subdomain** (Poddomen) | Kupac koristi besplatan poddomen na vašoj mreži (npr., `mysite.yournetwork.com`). Nema potrebe za plaćanjem. |
| **Register New Domain** (Registruj novi domen) | Kupac traži novi domen i registruje ga putem vašeg podešenog provajdera. Koristi odgovarajući proizvod domena za određivanje cene. |
| **Existing Domain** (Postojeći domen) | Kupac mapira domen koji već poseduje. Nema naknade za registraciju. Domen je automatski povezan sa njihovim sajtom. |

**Default mode** — Kada su svi tri režima uključeni, koji tab se prvo otvara? Postavite na **Subdomain** da bi registracija domena bila opcionalna, ili na **Register New Domain** da biste podsticali kupovine.

**Domain product** — Opciono vezajte ovo polje za određeni proizvod domena. Ako nije postavljeno, dodatak automatski bira odgovarajući proizvod na osnovu TLD-a koji kupac pretražuje.

### Polja za kontakt registracije {#registrant-contact-fields}

Kada kupac izabere tab **Register New Domain**, formular plaćanja dodaje polja za kontakt registracije direktno u formular:

- Ime i prezime
- E-mail adresa
- Adresa (red 1, grad, država/provincija, poštanski broj, zemlja)
- Broj telefona

Ovi zahtevani su za sve registrate i validirani pre nego što se izvrši poziv API-ja za registraciju. Brojevi telefona se automatski formatiraju u međunarodni format `+CC.NNN` koji očekuju registratori.

### Automatski URL sajta {#auto-generated-site-url}

Kada kupac se prijavi ili mapira domen, polje sa URL-om sajta se automatski popunjava iz izabranog domena. Kupcima nije potrebno da popunjavaju zasebno polje za URL.

### Podešavanje pretrage {#search-behaviour}

- Dostupnost domena se proverava u realnom vremenu putem AJAX-a dok korisnik kuca
- Predlažu se alternativne TLD opcije kada je preferirani domen nedostupan
- Cene se dohvaćaju uživo i jasno prikazuju (cena registracije, cena obnove, opciona naknada za privatnost WHOIS)
- Kupon kodovi se primenjuju na proizvode domena isto kao i na bilo koji drugi proizvod

**Podešavanje odgovora pretrage:**

```php
// Povećajte kašnjenje debounce-a (milisekunde) da biste smanjili pozive API-ja na sporim konekcijama
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // podrazumevano: 500
});
```

**Dodavanje prilagođenih polja u formular za pretragu domena:**

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

## Upravljanje DNS-om za kupce {#customer-dns-management}

Kupci mogu upravljati DNS zapisima za svoje registrovane domene sa stranice **Moj nalog**, pod unosom njihovog domena.

### Podržani tipovi zapisa {#supported-record-types}

| Tip | Korišćenje |
|---|---|
| **A** | Mapiranje imena hosta na IPv4 adresu |
| **AAAA** | Mapiranje imena hosta na IPv6 adresu |
| **CNAME** | Kreiranje alias-a koji pokazuje na drugi ime hosta |
| **MX** | Postavljanje servera za poštu |
| **TXT** | Dodavanje SPF, DMARC, verifikacije ili drugih tekstualnih zapisa |

### Koji provajderi podržavaju upravljanje DNS-om? {#which-providers-support-dns-management}

Upravljanje DNS-om (dodavanje, uređivanje, brisanje zapisa) dostupno je sa **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** i **Openprovider**. Domeni **Hostinger** se mogu ažurirati putem Domain Seller-a; DNS zapisi za hostovane domene upravlja jezgro integracije Hostinger domain-mapping. Domeni Namecheap, GoDaddy i NameSilo prikazuju status i informacije o isteku, ali DNS mora biti upravljan direktno u kontrolnom panelu registratora.

### Podrazumevani DNS zapisi {#default-dns-records}

Možete konfigurisati podrazumevane DNS zapise koji se automatski primenjuju kada se domen prijavi. Idite na **Settings › Domain Seller › Default DNS Records**.

Vrednosti podrazumevanih zapisa podržavaju dva tokena:

| Token | Zamenjuje se sa |
|---|---|
| `{DOMAIN}` | Registrovani naziv domena (npr. `example.com`) |
| `{SITE_URL}` | URL sajta WordPress-a za sajtu kupca |

**Primer — usmeravanje apex domena i www na IP vašeg servera:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: pregled i uređivanje DNS-a {#admin-viewing-and-editing-dns}

Mrežni administratori mogu pregledavati i uređivati DNS zapise za bilo koji domen kupca sa stranice za uređivanje domena u **Network Admin › Ultimate Multisite › Domains**.
