---
title: Polje za naplatu i DNS klijenta
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Upravljanje poljem za domenu i DNS-om klijenta

## Polje za odabir domene

Polje **Odabir domene** je element za naplatu koji klijentima daje izbor kako će dobiti domen za svoj sajt. Dodajte ga u bilo koju formu za naplatu kako biste omogućili prodaju domena.

### Dodavanje polja u formu za naplatu

1. Idite na **Network Admin › Ultimate Multisite › Checkout Forms**
2. Otvorite ili kreirajte formu za naplatu
3. U editoru za naplatu, kliknite **Add Field**
4. Izaberite **Domain Selection** iz liste polja
5. Konfigurišite opcije polja (videti ispod)
6. Sačuvajte formu

### Opcije polja

**Modovi domena** — Odaberite koje kartice će klijent vidjeti. Svaki mod može biti neovisno uključen ili isključen:

| Mod | Šta radi |
|---|---|
| **Subdomain** | Klijent koristi besplatnu poddomenu na vašoj mreži (npr. `mysite.yournetwork.com`). Ne zahtijeva plaćanje. |
| **Register New Domain** | Klijent pretražuje novu domenu i registruje je putem vašeg konfigurisanog provajdera. Koristi se odgovarajući proizvod domena za određivanje cijene. |
| **Existing Domain** | Klijent mapira domenu koju već posjeduje. Bez naknade za registraciju. Domen se automatski mapira na njihov sajt. |

**Podrazumevani mod** — Kada su sva tri moda uključena, koja kartica se otvara prva. Postavite na **Subdomain** kako biste zadržali opciju registracije domena, ili na **Register New Domain** kako biste potaknuli kupovine.

**Proizvod domena** — Opciono, možete ovo polje povezati sa specifičnim proizvodom domena. Ako nije postavljeno, dodatak automatski bira odgovarajući proizvod na temelju TLD-a koji klijent pretražuje.

### Polja za kontakt registratora

Kada klijent odabere karticu **Register New Domain**, forma za naplatu dodaje polja za kontakt registratora u liniji:

- Ime / Prezime
- Adresa e-pošte
- Adresa (linija 1, grad, država/provincija, poštanski broj, država)
- Broj telefona

Ova polja su obavezna za sve registrare i validiraju se prije nego što se izvrši API poziv za registraciju. Brojevi telefona se automatski formatiraju u međunarodni format `+CC.NNN` koji je očekivan od strane registara.

### Automatski generisana URL adresa sajta

Kada klijent registruje ili mapira domen, polje URL adrese sajta automatski se popunja na temelju odabranog domena. Klijenti ne moraju popunjavati zasebno polje za URL.

### ponašanje pretraživanja

- Dostupnost domena provjerava se u stvarnom vremenu putem AJAX-a dok klijent kuca
- Predlaže se alternativa TLD rješenja kada je željeni domen nedostupan
- Cijena se dohvaća uživo i jasno prikazuje (cijena registracije, cijena obnove, opcionalna WHOIS privatna naknada)
- Kuponi se primjenjuju na proizvode domena isto kao i na bilo koji drugi proizvod

**Podešavanje odgovora pretraživanja:**

```php
// Povećajte debounce kašnjenje (milisekunde) kako biste smanjili API pozive na sporim vezama
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Dodavanje prilagođenih polja u formu za pretraživanje domena:**

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

## Upravljanje DNS-om klijenta

Klijenti mogu upravljati DNS zapisima za svoje registrovane domene sa stranice **My Account**, pod unosom njihovog domena.

### Podržane vrste zapisa

| Vrsta | Upotreba |
|---|---|
| **A** | Mapira hostname na IPv4 adresu |
| **AAAA** | Mapira hostname na IPv6 adresu |
| **CNAME** | Kreira alias koji ukazuje na drugi hostname |
| **MX** | Postavlja server za razmjenu e-pošte |
| **TXT** | Dodaje SPF, DMARC, verifikacione ili druge tekstualne zapise |

### Koji provajderi podržavaju upravljanje DNS-om?

Upravljanje DNS zapisima (dodavanje, uređivanje, brisanje zapisa) dostupno je sa **OpenSRS**, **ResellerClub** i **Enom**. Domeni Namecheap, GoDaddy i NameSilo prikazuju status i informacije o isteku, ali DNS mora biti upravljan direktno u kontrolnom panelu registratora.

### Podrazumevani DNS zapisi

Možete konfigurisati podrazumevane DNS zapise koji se automatski primjenjuju kada se domen registruje. Idite na **Settings › Domain Seller › Default DNS Records**.

Vrijednosti podrazumevanih zapisa podržavaju dva tokena:

| Token | Zamijenjeno sa |
|---|---|
| `{DOMAIN}` | Registrovani naziv domena (npr. `example.com`) |
| `{SITE_URL}` | URL sajta WordPress za klijentov sajt |

**Primjer — usmjeravanje apex domena i www na IP adrese vašeg servera:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: pregled i uređivanje DNS-a

Network administratori mogu pregledati i uređivati DNS zapise za bilo koji domen klijenta sa stranice za uređivanje domena na **Network Admin › Ultimate Multisite › Domains**.
