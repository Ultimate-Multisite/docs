---
title: Câmp de finalizare a comenzii și DNS-ul clientului
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Gestionarea câmpului de checkout și a DNS-ului clienților {#checkout-field-and-customer-dns-management}

## Câmpul de checkout pentru selectarea domeniului {#the-domain-selection-checkout-field}

Câmpul **Selectarea domeniului** este un element de checkout care le oferă clienților opțiunea de a alege cum obțin domeniul site-ului lor. Adaugă-l în orice formular de checkout pentru a activa vânzarea de domenii.

### Adăugarea câmpului într-un formular de checkout {#adding-the-field-to-a-checkout-form}

1. Mergi la **Network Admin › Ultimate Multisite › Formulare de checkout**
2. Deschide sau creează un formular de checkout
3. În editorul de checkout, fă clic pe **Adaugă câmp**
4. Alege **Selectarea domeniului** din lista de câmpuri
5. Configurează opțiunile câmpului (vezi mai jos)
6. Salvează formularul

### Opțiuni ale câmpului {#field-options}

**Moduri de domeniu** — Alege ce file vede clientul. Fiecare mod poate fi activat sau dezactivat independent:

| Mod | Ce face |
|---|---|
| **Subdomeniu** | Clientul folosește un subdomeniu gratuit în rețeaua ta (de ex., `mysite.yournetwork.com`). Nu este necesară nicio plată. |
| **Înregistrează domeniu nou** | Clientul caută un domeniu nou și îl înregistrează prin furnizorul tău configurat. Folosește produsul de domeniu corespunzător pentru stabilirea prețului. |
| **Domeniu existent** | Clientul mapează un domeniu pe care îl deține deja. Fără taxă de înregistrare. Domeniul este mapat automat la site-ul său. |

**Mod implicit** — Când toate cele trei moduri sunt activate, ce filă se deschide prima. Setează la **Subdomeniu** pentru a menține înregistrarea domeniului opțională sau la **Înregistrează domeniu nou** pentru a încuraja achizițiile.

**Produs de domeniu** — Opțional, fixează acest câmp la un anumit produs de domeniu. Dacă nu este setat, addon-ul selectează automat produsul corespunzător pe baza TLD-ului pe care îl caută clientul.

### Câmpuri de contact ale înregistrantului {#registrant-contact-fields}

Când un client selectează fila **Înregistrează domeniu nou**, formularul de checkout adaugă inline câmpuri de contact ale înregistrantului:

- Prenume / Nume
- Adresă de e-mail
- Adresă (linia 1, oraș, stat/provincie, cod poștal, țară)
- Număr de telefon

Acestea sunt obligatorii pentru toți registrarii și sunt validate înainte de efectuarea apelului API de înregistrare. Numerele de telefon sunt formatate automat în formatul internațional `+CC.NNN` așteptat de registrari.

### URL de site generat automat {#auto-generated-site-url}

Când un client înregistrează sau mapează un domeniu, câmpul URL al site-ului este completat automat din domeniul ales. Clienții nu trebuie să completeze un câmp URL separat.

### Comportamentul căutării {#search-behaviour}

- Disponibilitatea domeniului este verificată în timp real cu AJAX pe măsură ce clientul tastează
- Sunt afișate sugestii de TLD-uri alternative când domeniul preferat nu este disponibil
- Prețul este preluat live și afișat clar (preț de înregistrare, preț de reînnoire, taxă opțională pentru confidențialitate WHOIS)
- Codurile de cupon se aplică produselor de domeniu la fel ca oricărui alt produs

**Ajustarea responsivității căutării:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Adăugarea de câmpuri personalizate în formularul de căutare a domeniilor:**

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

## Gestionarea DNS de către clienți {#customer-dns-management}

Clienții pot gestiona înregistrările DNS pentru domeniile lor înregistrate din pagina **Contul meu**, sub intrarea domeniului lor.

### Tipuri de înregistrări acceptate {#supported-record-types}

| Tip | Utilizare |
|---|---|
| **A** | Mapează numele gazdei la adresa IPv4 |
| **AAAA** | Mapează numele gazdei la adresa IPv6 |
| **CNAME** | Creează un alias care indică spre un alt nume de gazdă |
| **MX** | Setează serverul de schimb de e-mail |
| **TXT** | Adaugă înregistrări SPF, DMARC, de verificare sau alte înregistrări text |

### Ce furnizori acceptă gestionarea DNS? {#which-providers-support-dns-management}

Gestionarea DNS (adăugare, editare, ștergere de înregistrări) este disponibilă cu **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** și **Openprovider**. Domeniile **Hostinger** pot actualiza serverele de nume prin Domain Seller; înregistrările DNS pentru domeniile găzduite sunt gestionate de integrarea de bază Hostinger pentru maparea domeniilor. Domeniile Namecheap, GoDaddy și NameSilo afișează informații despre stare și expirare, dar DNS-ul trebuie gestionat direct în panoul de control al registrarului.

### Înregistrări DNS implicite {#default-dns-records}

Poți configura înregistrări DNS implicite care se aplică automat atunci când un domeniu este înregistrat. Mergi la **Setări › Domain Seller › Înregistrări DNS implicite**.

Valorile implicite ale înregistrărilor acceptă două token-uri:

| Token | Înlocuit cu |
|---|---|
| `{DOMAIN}` | Numele domeniului înregistrat (de ex., `example.com`) |
| `{SITE_URL}` | URL-ul site-ului WordPress pentru site-ul clientului |

**Exemplu — direcționează domeniul apex și www către IP-ul serverului tău:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: vizualizarea și editarea DNS {#admin-viewing-and-editing-dns}

Administratorii de rețea pot vizualiza și edita înregistrările DNS pentru orice domeniu al clientului din pagina de editare a domeniului în **Network Admin › Ultimate Multisite › Domenii**.
