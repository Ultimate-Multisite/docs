---
title: Valdojimo laukelis ir klientų DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Poledė ir klientų DNS valdymo laipsnis {#checkout-field-and-customer-dns-management}

## Domeno pasirinkimo checkout laipsnis {#the-domain-selection-checkout-field}

Laipsnis **Domain Selection** yra checkout elementas, kuris suteikia klientams pasirinkimą, kaip gauti savo svetainės domeną. Pridėkite jį į bet kokį checkout formą, kad įveiktumėte domenų pardavimą.

### Laipsnio pridėjimas prie checkout formos {#adding-the-field-to-a-checkout-form}

1. Eikite į **Network Admin › Ultimate Multisite › Checkout Forms**
2. Atidarykite arba sukurkite checkout formą
3. Checkout redaktore spustelėkite **Add Field** (Pridėti laipsnį)
4. Iš laipsnių sąrašo pasirinkite **Domain Selection**
5. Konfigūruokite laipsnio nustatymus (pateikta below)
6. Išsaugokite formą

### Laipsnio nustatymai {#field-options}

**Domain modes** — Pasirinkite, kokias languotas klientas pamatys. Kiekvienas režimas gali būti įjungtas arba išjungtas nepriklausomai:

| Mode | Kas tai reiškia |
|---|---|
| **Subdomain** (Subdomenas) | Klientas naudoja nemokamą subdomeną jūsų tinkluose (pvz., `mysite.yournetwork.com`). Nepažiūri mokėjimo. |
| **Register New Domain** (Registruoti naują domeną) | Klientas ieško naujo domeno ir registruoja jį per jūsų konfigūruotą tiekėją. Naudojama atitinkamas domenų produktas kainavimui. |
| **Existing Domain** (Eksistuoja domenų) | Klientas nurodo domeną, kurį jau turi. Nepažiūri registracijos didelės sumos. Domenas automatiškai pasiekiama į jų svetainę. |

**Default mode** (Pagrindinis režimas) — Kai visi trys režimai yra įjungti, kuris languotas pamatys pirmasis? Nustatykite jį į **Subdomain**, jei norite, kad domenų registravimas būtų valiklis, arba į **Register New Domain**, jei norite patraukti pardavimų.

**Domain product** (Domenos produktas) — Galite opcionai sužymėti šį laipsnį su konkretiu domenų produktumu. Jei ne nustatyta, addon automatiškai pasirinks atitinkamą produktą, remiantis TLD, kurį ieško klientas.

### Registrant kontaktų laipsniai {#registrant-contact-fields}

Kai klientas pasirinksite **Register New Domain** languotą, checkout forma įdiegia registrantų kontaktų laipsnius tiesiogiai:

- Vardas / Pavardė
- El. pašto adresas
- Adresas (1 eilutė, miestelis, rajono/provincijos pavadinimas, el. kodas, šalys)
- Telefonas

Šie reikalavimai yra reikalinga visiems registratoriams ir valginami prieš atlikdami registracijos API laukimo. Telefonai automatiškai formatuojami į pradinį `+CC.NNN` tarptautinį formatą, kurį reikalauja registratoriai.

### Automatinis svetainės URL adresas {#auto-generated-site-url}

Kai klientas registruojasi arba nurodo domeną, laukimo laukas svetainės URL adresu automatiškai užpildomas pasirinkto domeno pagalba. Klientams ne reikia įrašyti atskirta URL adreso laukelį.

### Paieškos veikimas {#search-behaviour}

- Domeno prieinamumas yra проверяjamas realiu laiku naudojant AJAX, kol vartotojas rašys
- Kai pasirinktas domenas nėra prieinamas, rodomos alternatyvios TLD (top level domain) pasiūlymai
- Kaina pasiekiama tiesiogiai ir aiškiai rodoma (registracijos kaina, atnaujinimo kaina, valstybinės WHOIS privatumo didinimo mokestis)
- Kupon kodai taikomos domeno produktams taip pat kaip ir kitoms produkciams

**Paieškos greičio nustatymas:**

```php
// Didinkite debounce laiko (milis sekundžių) siekiant sumažinti API pakuotės lentelges lėtai susijusių ryšiu
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Naujų laukelių pridėjimas domeno paieškos formai:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Papildomos nuodaros tekstai',
    ];
    return $fields;
});
```

---

## Klientų DNS valdymo {#customer-dns-management}

Klientai gali valdyti DNS įrašus savo registruotiems domenams iš **Mano paskyros** puslapio, esant savo domeno įraše.

### Palaikomi įrašo tipai {#supported-record-types}

| Tipas | Naudojimas |
|---|---|
| **A** | Nurodyti hostmenį į IPv4 adresą |
| **AAAA** | Nurodyti hostmenį į IPv6 adresą |
| **CNAME** | Sukurti alias, kurio galvos taikoma kitas hostnames |
| **MX** | Nustatyti el. pašto paslaugų serverį |
| **TXT** | Pridėti SPF, DMARC, patvirtinimo arba kitus tekstinius įrašus |

### Kuri tiekėjai palaiko DNS valdymo? {#which-providers-support-dns-management}

Z managemento (pridėti, redaguoti, ištrinti įrašus) yra įvairiame OpenSRS, ResellerClub, Enom, HostAfrica ir Openprovider. Hostinger domenų vardus galima atnaujinti per Domain Seller; DNS įrašai hostingu valdyti core Hostinger domain-mapping integracija. Namecheap, GoDaddy ir NameSilo domenų vardai rodo statusą ir galiojimo informaciją, bet DNS turi būti valdytas tiesiogiai registratorio kontrolio panelis perdirbe.

### Pagrindiniai DNS įrašai {#default-dns-records}

Jūs galite nustatyti pagrindinius DNS įrašus, kurie automatiškai taikomi, kai domenų vardas registruojamas. Eikite į **Settings › Domain Seller › Default DNS Records**.

Pagrindinių įrašo vertės palaiko iki tokenus:

| Tokenas | Keičiamas į |
|---|---|
| `{DOMAIN}` | Registruotas domenų vardas (pvz., `example.com`) |
| `{SITE_URL}` | WordPress svetainės URL adresas klientui suteiktos svetainės |

**Pavyzdys — nurodyti apex ir www į savo serverio IP:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administracija: DNS peržiūra ir redagavimas {#admin-viewing-and-editing-dns}

Tinklinės administratoriai gali peržiūrėti ir redaguoti DNS įrašus bet kurio klientų domenų nuo domaino redaguojimo puslapio **Network Admin › Ultimate Multisite › Domains**.
