---
title: Pole při pokladně a DNS zákazníka
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Správa polí pro domény a DNS zákazníků

## Pole výběru domény

Pole **Výběr domény** je prvek v nákupním formuláři, který zákazníkům nabízí výběr, jak získat doménu pro svůj web. Přidejte ho do jakéhokoli nákupního formuláře, abyste umožnili prodej domén.

### Přidání pole do nákupního formuláře

1. Přejděte na **Network Admin › Ultimate Multisite › Checkout Forms**
2. Otevřete nebo vytvořte nákupní formulář
3. V editoru nákupního formuláře klikněte na **Add Field**
4. Z nabídky polí vyberte **Domain Selection**
5. Konfigurujte možnosti pole (viz níže)
6. Uložte formulář

### Možnosti pole

**Režimy domény** — Vyberte, které záložky uvidí zákazníci. Každý režim lze nezávisle zapnout nebo vypnout:

| Režim | Co dělá |
|---|---|
| **Subdomain** | Zákazník použije bezplatnou subdoménu na vaší síti (např. `mysite.vašesíť.com`). Neplatí žádná poplatek. |
| **Registrovat novou doménu** | Zákazník vyhledá novou doménu a zaregistruje ji u vašeho nakonfigurovaného poskytovatele. Používá se produkt odpovídající doméně pro výpočet ceny. |
| **Existující doména** | Zákazník mapuje doménu, kterou již vlastní. Žádný registrační poplatek. Doména je automaticky mapována na jeho web. |

**Výchozí režim** — Když jsou zapnuty všechny tři režimy, která záložka se otevře jako první. Nastavte na **Subdomain**, pokud chcete, aby byla registrace domény volitelná, nebo na **Register New Domain**, pokud chcete povzbudit k nákupu.

**Produkt domény** — Volitelně toto pole přiřaďte k konkrétnímu produktu domény. Pokud není nastaven, addon automaticky vybere odpovídající produkt na základě TLD, které zákazník vyhledá.

### Pole pro kontaktní údaje registračního subjektu

Když zákazník vybere záložku **Register New Domain**, nákupní formulář do pole přidá kontaktní údaje registračního subjektu:

- Jméno / Příjmení
- E-mailová adresa
- Adresa (řádek 1, město, stát/kraj, poštovní směrovací číslo, země)
- Telefonní číslo

Tyto údaje jsou vyžadovány všemi registračními subjekty a ověřují se před odesláním API volání pro registraci. Telefonní čísla jsou automaticky formátována do mezinárodního formátu `+CC.NNN`, který vyžadují registrační subjekty.

### Automaticky generovaná URL webu

Když zákazník doménu registruje nebo mapuje, pole URL webu je automaticky vyplněno z vybrané domény. Zákazníci nemusí vyplňovat samostatné pole s URL.

### Chování vyhledávání

- Dostupnost domény je kontrolována v reálném čase pomocí AJAX, jak zákazník píše
- Alternativní návrhy TLD jsou zobrazeny, když není preferovaná doména dostupná
- Cena je načtena v reálném čase a jasně zobrazena (cena za registraci, cena za obnovu, volitný poplatek za WHOIS privacy)
- Kuponské kódy se vztahují na produkty domény stejně jako na jakýkoli jiný produkt

**Optimalizace odezvy vyhledávání:**

```php
// Zvýšení zpoždění debounce (milisekundy) k snížení API volání na pomalých spojích
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // výchozí: 500
});
```

**Přidání vlastních polí do formuláře vyhledávání domény:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'Doplňující poznámky',
    ];
    return $fields;
});
```

---

## Správa DNS zákazníků

Zákazníci mohou spravovat DNS záznamy pro své registrované domény na stránce **My Account** (Můj účet), v sekci odpovídající jejich doméně.

### Podporované typy záznamů

| Typ | Použití |
|---|---|
| **A** | Mapuje hélání na IPv4 adresu |
| **AAAA** | Mapuje hélání na IPv6 adresu |
| **CNAME** | Vytvoří alias ukazující na jiné hélání |
| **MX** | Nastaví server pro výměnu e-mailů |
| **TXT** | Přidá textové záznamy pro SPF, DMARC, ověření nebo jiné |

### Kterí poskytovatelé podporují správu DNS?

Správa DNS (přidání, úprava, smazání záznamů) je dostupná u **OpenSRS**, **ResellerClub** a **Enom**. Domény Namecheap, GoDaddy a NameSilo zobrazují stav a expiraci, ale DNS musí být spravován přímo v ovládacím panelu registračního subjektu.

### Výchozí DNS záznamy

Můžete nakonfigurovat výchozí DNS záznamy, které se automaticky aplikují při registraci domény. Přejděte na **Settings › Domain Seller › Default DNS Records**.

Výchozí hodnoty záznamů podporují dva tokeny:

| Token | Nahrazeno |
|---|---|
| `{DOMAIN}` | Registrovaná doména (např. `example.com`) |
| `{SITE_URL}` | URL webu WordPress pro zákazníkov web |

**Příklad — směřování kořenové domény a www na IP adresu vašeho serveru:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Administrátoři: prohlížení a úprava DNS

Administrátoři sítě mohou prohlížet a upravovat DNS záznamy pro jakoukoli doménu zákazníka ze stránky úpravy domény v **Network Admin › Ultimate Multisite › Domains**.
