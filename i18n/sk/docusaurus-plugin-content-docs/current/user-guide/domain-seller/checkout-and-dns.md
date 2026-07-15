---
title: Pole pokladne a DNS zákazníka
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Správa políčka na platbu a DNS zákazníka

## Pole Výber domény v pokladni {#the-domain-selection-checkout-field}

Pole **Výber domény** je prvok v pokladni, ktorý zákazníkom umožňuje vybrať, ako si získa doménu pre svoj web. Pridajte ho do aknéhokoľvek formulára na platbu, aby ste umožnili predaj domén.

### Pridanie pole do formulára na platbu {#adding-the-field-to-a-checkout-form}

1. Prejdite do **Network Admin › Ultimate Multisite › Checkout Forms**
2. Otvorte alebo vytvorte formulár na platbu
3. V redaktóre pokladne kliknite na **Add Field** (Pridať pole)
4. Z listy polí vyberte **Domain Selection** (Výber domény)
5. Konfigurujte možnosti pola (vidieť nižšie)
6. Uložte formulár

### Možnosti pola {#field-options}

**Doménové režimy** — Vyberte, ktoré záložky zákazník uvidí. Každý režim môžete vriadu zapnúť alebo vypnúť nezávisle:

| Režim | Čo robí |
|---|---|
| **Subdomain** (Poddoména) | Zákazník používa bezplatnú poddoménu na vašej sieti (napr. `mysite.yournetwork.com`). Platba nie je potrebná. |
| **Register New Domain** (Registrovať novú doménu) | Zákazník hľadá novú doménu a registruje ju cez váš skonfigurovaný poskytovateľ. Používa zodpovedajúci produkt domény na stanovenie ceny. |
| **Existing Domain** (Existujúca doména) | Zákazník mapuje doménu, ktorú už vlastní. Nie je potrebná registračná poplatka. Doména sa automaticky mapuje na jeho web. |

**Predvolený režim** — Keď sú všetky tri režimy zapnuté, ktorá záložka sa otvorí prvej? Nastavte ho na **Subdomain**, aby ste zachovali možnosť voliteľnej registrácii domény, alebo na **Register New Domain**, aby ste podporovali nákupy.

**Produkt domény** — Moždenne pole pripävte (pin) k špecifickému produktovi domény. Ak nie je nastavené, doplnok automaticky vyberie zodpovedajúci produkt na základe TLD, ktoré zákazník hľadá.

### Pole s kontaktnými údajmi registráta {#registrant-contact-fields}

Keď si zákazník vyberie záložku **Register New Domain** (Registrovať novú doménu), formulár na platbu pridá pole s kontaktnými údajmi registráta in-line:

- Meno / Priezvisko
- E-mailová adresa
- Adresa (1. linka, mesto, krajina/štát, poštovní index, krajina)
- Telefónne číslo

Tieto sú vyžadované všetkými registrárami a validované pred vykonaním API volania na registrácia. Telefónne čísla sa automaticky formátujú do medzinárodného formátu `+CC.NNN`, ktorý očakávajú registrári.

### Automaticky generovaná URL adresa webu {#auto-generated-site-url}

Keď zákazník zaregistruje alebo mapuje doménu, pole URL adresy webu sa automaticky vyplní z vybraného domény. Zákazníci si nemusí vyplnený samostatné pole pre URL adresu.

### Chovanie vyhľadávania {#search-behaviour}

- Dostupnosť domény sa kontroluje v reálnom čase pomocou AJAX pri zadávaní zákazníkom textu
- Keď je preferovaná doména nedostupná, zobrazujú sa návrhy alternatívnych TLD (doménových koncoviek)
- Ceny sa načítajú živá a zobrazujú sa jasne (cena registrácie, cena obnovy, voliteľné poplatky za ochranu WHOIS)
- Kódy kuponov sa aplikujú na produkty domén, ako aj na akékoľvek iné produkty

**Naprava rýchlosti vyhľadávania:**

```php
// Zvýši zpoždenie debounce (milisekund) na zníženie API volaní pri pomalých pripojenia
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // štandard: 500
});
```

**Pridanie príspevkov do formulára vyhľadávania domény:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Dodatkové poznámky',
    ];
    return $fields;
});
```

---

## Správa DNS pre zákazníkov {#customer-dns-management}

Zákazníci si môžu spravovať záznamy DNS pre svoje zaregistrované domény z sekcie **Moje účto**, pod prístupom k ich doménovej položke.

### Podporované typy záznamov {#supported-record-types}

| Typ | Použitie |
|---|---|
| **A** | Mapovanie hostnádoba na IPv4 adresu |
| **AAAA** | Mapovanie hostnádoba na IPv6 adresu |
| **CNAME** | Vytvorenie aliasu, ktorý ukazuje na iný hostnádobný pr=<host> |
| **MX** | Nastavenie servera pre správu e-mailov |
| **TXT** | Pridanie záznamov SPF, DMARC, overenia alebo iných textových záznamov |

### Aké poskytovatele podporujú správu DNS? {#which-providers-support-dns-management}

Správa DNS (pridanie, úprava, odstránenie záznamov) je dostupná s nástrojmi **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** a **Openprovider**. Domény Hostinger sa môžu aktualizovať pomocou Domain Seller. DNS záznamy pre hostované domény sú spravované integrovaním domain-mapping v jádre Hostinger. Domény Namecheap, GoDaddy a NameSilo zobrazujú stav a informácie o vypróvení, ale DNS musia byť spravovaný priamo v kontrolnom paneli registra.

### Predvolené DNS záznamy {#default-dns-records}

Môžete skonfigurovať predvolené DNS záznamy, ktoré sa automaticky aplikujú, keď je doména zaregistrovaná. Prejdite do **Settings › Domain Seller › Default DNS Records**.

Predvolené hodnoty záznamov podporujú dva tokeny:

| Token | Nahradzuje sa na |
|---|---|
| `{DOMAIN}` | Zaregistrované názov domény (napr. `example.com`) |
| `{SITE_URL}` | URL adresy WordPressu pre stránku zákazníka |

**Príklad — ukázať apex doménu a www na IP adresu vášho servera:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: zobrazenie a úprava DNS {#admin-viewing-and-editing-dns}

Sieťoví administrátori môžu zobraziť a upraviť DNS záznamy pre akýkoľvek doménu zákazníka z editovanej stránky domény v **Network Admin › Ultimate Multisite › Domains**.
