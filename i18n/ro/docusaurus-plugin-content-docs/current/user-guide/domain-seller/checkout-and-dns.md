---
title: Câmpul de checkout și DNS-ul clientului
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Gestionarea Câmpului de Checkout și DNS-ului Clientului

## Câmpul de Selecție a Domeniului

Câmpul **Domain Selection** este un element de checkout care oferă clienților posibilitatea de a alege cum își vor obține domeniul site-ului. Adăugați-l în orice formular de checkout pentru a activa vânzarea de domenii.

### Adăugarea câmpului unui formular de checkout

1. Mergeți la **Network Admin › Ultimate Multisite › Checkout Forms**
2. Deschideți sau creați un formular de checkout
3. În editorul de checkout, faceți clic pe **Add Field**
4. Selectați **Domain Selection** din lista de câmpuri
5. Configurați opțiunile câmpului (vezi mai jos)
6. Salvați formularul

### Opțiunile câmpului

**Domain modes** — Alegeți tab-urile pe care le va vedea clientul. Fiecare modul poate fi activat sau dezactivat în mod independent:

| Mode | Ce face |
|---|---|
| **Subdomain** | Clientul folosește un subdomain gratuit de pe rețeaua dumneavoastră (ex: `mysite.yournetwork.com`). Nu este necesară plată. |
| **Register New Domain** | Clientul caută un domeniu nou și îl înregistrează printr-un furnizor configurat de dumneavoastră. Utilizează produsul de domeniu care se potrivește pentru tarife. |
| **Existing Domain** | Clientul mapează un domeniu pe care îl deține deja. Nu există taxe de înregistrare. Domeniul este mapat automat către site-ul său. |

**Default mode** — Când toate cele trei moduri sunt activate, care tab se deschide primul. Setați pe **Subdomain** pentru a menține înregistrarea domeniului opțională, sau pe **Register New Domain** pentru a încuraja achizițiile.

**Domain product** — Opțional, atașați acest câmp unui anumit produs de domeniu. Dacă nu este setat, addon-ul selectează automat produsul care se potrivește, pe baza TLD-ului căutat de client.

### Câmpuri de contact pentru înregistrant

Când un client selectează tab-ul **Register New Domain**, formularul de checkout adaugă câmpuri de contact pentru înregistrant în linie:

- Prenume / Nume de familie
- Adresă de email
- Adresă (linii 1, oraș, stat/provincie, cod poștal, țară)
- Număr de telefon

Acestea sunt obligatorii pentru toți registratorii și sunt validate înainte de efectuarea apelului API de înregistrare. Numerele de telefon sunt formate automat în formatul internațional `+CC.NNN` așteptat de registratori.

### URL-ul site-ului generat automat

Când un client înregistrează sau mapează un domeniu, câmpul URL-ului site-ului este populat automat din domeniul ales. Clienții nu trebuie să completeze un câmp separat pentru URL.

### Comportamentul de căutare

- Disponibilitatea domeniului este verificată în timp real cu AJAX pe măsură ce clientul tastează
- Sunt afișate sugestii alternative de TLD atunci când domeniul preferat nu este disponibil
- Prețurile sunt prelevate live și afișate clar (prețul de înregistrare, prețul de reînnoire, taxă opțională de confidențialitate WHOIS)
- Codurile de cuponă se aplică produselor de domeniu la fel ca oricărui alt produs

**Optimizarea răspunsului căutării:**

```php
// Creșterea întârzir일ii debounce (miliseunde) pentru a reduce apelurile API pe conexiuni lente
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Adăugarea câmpurilor personalizate în formularul de căutare a domeniului:**

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

## Managementul DNS-ului Clientului

Clienții pot gestiona înregistrările DNS pentru domeniile lor înregistrate de pe pagina **My Account**, sub intrarea domeniului lor.

### Tipuri de înregistrări suportate

| Type | Utilizare |
|---|---|
| **A** | Maparea unui nume de gazdă la o adresă IPv4 |
| **AAAA** | Maparea unui nume de gazdă la o adresă IPv6 |
| **CNAME** | Crearea unui alias care indică un alt nume de gazdă |
| **MX** | Setarea serverului de schimb de email |
| **TXT** | Adăugarea de înregistrări de text SPF, DMARC, de verificare sau alte înregistrări |

### Ce furnizori suportă managementul DNS?

Managementul DNS (adăugare, editare, ștergere înregistrări) este disponibil cu **OpenSRS**, **ResellerClub** și **Enom**. Domeniile Namecheap, GoDaddy și NameSilo afișează informații despre status și expirare, dar DNS-ul trebuie gestionat direct în panoul de control al registrului.

### Înregistrări DNS implicite

Puteți configura înregistrări DNS implicite care sunt aplicate automat atunci când un domeniu este înregistrat. Mergeți la **Settings › Domain Seller › Default DNS Records**.

Valorile înregistrărilor implicite suportă două token-uri:

| Token | Înlocuit cu |
|---|---|
| `{DOMAIN}` | Numele domeniului înregistrat (ex: `example.com`) |
| `{SITE_URL}` | URL-ul site-ului WordPress pentru site-ul clientului |

**Exemplu — indicarea domeniului apex și www către IP-ul serverului dumneavoastră:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: vizualizarea și editarea DNS-ului

Administratorii de rețea pot vizualiza și edita înregistrările DNS pentru orice domeniu al clientului de pe pagina de editare a domeniului, în **Network Admin › Ultimate Multisite › Domains**.
