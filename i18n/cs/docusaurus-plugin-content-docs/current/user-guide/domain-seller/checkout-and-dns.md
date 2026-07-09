---
title: Pole pokladny a zákaznické DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Checkout pole pro správu domén a zákaznická správa DNS {#checkout-field-and-customer-dns-management}

## Checkout pole Výběr domény {#the-domain-selection-checkout-field}

Pole **Výběr domény** je checkout prvek, který zákazníkům dává na výběr, jak získat doménu pro svůj web. Přidejte ho do libovolného checkout formuláře a povolte prodej domén.

### Přidání pole do checkout formuláře {#adding-the-field-to-a-checkout-form}

1. Přejděte do **Správa sítě › Ultimate Multisite › Checkout formuláře**
2. Otevřete nebo vytvořte checkout formulář
3. V editoru checkoutu klikněte na **Přidat pole**
4. Ze seznamu polí vyberte **Výběr domény**
5. Nakonfigurujte možnosti pole (viz níže)
6. Uložte formulář

### Možnosti pole {#field-options}

**Režimy domény** — Vyberte, které karty zákazník uvidí. Každý režim lze nezávisle povolit nebo zakázat:

| Režim | Co dělá |
|---|---|
| **Subdoména** | Zákazník používá bezplatnou subdoménu ve vaší síti (např. `mysite.yournetwork.com`). Není potřeba žádná platba. |
| **Registrovat novou doménu** | Zákazník vyhledá novou doménu a zaregistruje ji přes vašeho nakonfigurovaného poskytovatele. Pro cenu se použije odpovídající doménový produkt. |
| **Existující doména** | Zákazník namapuje doménu, kterou už vlastní. Bez registračního poplatku. Doména se automaticky namapuje na jeho web. |

**Výchozí režim** — Když jsou povoleny všechny tři režimy, určuje, která karta se otevře jako první. Nastavte na **Subdoména**, aby registrace domény zůstala volitelná, nebo na **Registrovat novou doménu**, abyste podpořili nákupy.

**Doménový produkt** — Volitelně připněte toto pole ke konkrétnímu doménovému produktu. Pokud není nastaveno, addon automaticky vybere odpovídající produkt podle TLD, kterou zákazník vyhledává.

### Pole kontaktu držitele {#registrant-contact-fields}

Když zákazník vybere kartu **Registrovat novou doménu**, checkout formulář vloží přímo do formuláře kontaktní pole držitele:

- Jméno / Příjmení
- E-mailová adresa
- Adresa (řádek 1, město, stát/provincie, PSČ, země)
- Telefonní číslo

Tato pole vyžadují všichni registrátoři a ověřují se před provedením volání registračního API. Telefonní čísla se automaticky formátují do mezinárodního formátu `+CC.NNN`, který registrátoři očekávají.

### Automaticky vygenerovaná URL webu {#auto-generated-site-url}

Když zákazník zaregistruje nebo namapuje doménu, pole URL webu se automaticky vyplní z vybrané domény. Zákazníci nemusí vyplňovat samostatné pole URL.

### Chování vyhledávání {#search-behaviour}

- Dostupnost domény se kontroluje v reálném čase pomocí AJAX při psaní zákazníkem
- Když preferovaná doména není dostupná, zobrazí se návrhy alternativních TLD
- Ceny se načítají živě a zobrazují se přehledně (cena registrace, cena obnovení, volitelný poplatek za soukromí WHOIS)
- Kódy kupónů se na doménové produkty vztahují stejně jako na jakýkoli jiný produkt

**Ladění odezvy vyhledávání:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Přidání vlastních polí do formuláře pro vyhledávání domény:**

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

## Zákaznická správa DNS {#customer-dns-management}

Zákazníci mohou spravovat DNS záznamy pro své registrované domény na stránce **My Account**, pod položkou své domény.

### Podporované typy záznamů {#supported-record-types}

| Typ | Použití |
|---|---|
| **A** | Namapovat název hostitele na IPv4 adresu |
| **AAAA** | Namapovat název hostitele na IPv6 adresu |
| **CNAME** | Vytvořit alias směřující na jiný název hostitele |
| **MX** | Nastavit server pro výměnu pošty |
| **TXT** | Přidat SPF, DMARC, ověřovací nebo jiné textové záznamy |

### Kteří poskytovatelé podporují správu DNS? {#which-providers-support-dns-management}

Správa DNS (přidání, úprava, odstranění záznamů) je dostupná u **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** a **Openprovider**. Domény **Hostinger** mohou aktualizovat nameservery prostřednictvím Domain Seller; DNS záznamy pro hostované domény spravuje základní integrace mapování domén Hostinger. Domény Namecheap, GoDaddy a NameSilo zobrazují stav a informace o expiraci, ale DNS je nutné spravovat přímo v ovládacím panelu registrátora.

### Výchozí DNS záznamy {#default-dns-records}

Můžete nakonfigurovat výchozí DNS záznamy, které se automaticky použijí při registraci domény. Přejděte do **Nastavení › Domain Seller › Výchozí DNS záznamy**.

Výchozí hodnoty záznamů podporují dva tokeny:

| Token | Nahrazuje se |
|---|---|
| `{DOMAIN}` | Registrovaný název domény (např. `example.com`) |
| `{SITE_URL}` | URL WordPress webu zákazníka |

**Příklad — nasměrujte apex doménu a www na IP adresu svého serveru:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administrátor: zobrazení a úprava DNS {#admin-viewing-and-editing-dns}

Správci sítě mohou zobrazovat a upravovat DNS záznamy pro jakoukoli zákaznickou doménu ze stránky úprav dané domény v **Správa sítě › Ultimate Multisite › Domény**.
