---
title: Pénztármező és ügyfél DNS
sidebar_position: 3
_i18n_hash: b5312cf530779a7cb03d611e6827be87
---
# Pénztári mező és ügyfél DNS-kezelés

## A Domain Selection pénztári mező

A **Domain Selection** mező egy pénztári elem, amely választási lehetőséget ad az ügyfeleknek arra, hogyan szerezzék meg a webhelyük domainjét. Add hozzá bármely pénztári űrlaphoz a domainértékesítés engedélyezéséhez.

### A mező hozzáadása egy pénztári űrlaphoz

1. Lépj a **Network Admin › Ultimate Multisite › Checkout Forms** oldalra
2. Nyiss meg vagy hozz létre egy pénztári űrlapot
3. A pénztári szerkesztőben kattints az **Add Field** gombra
4. Válaszd a **Domain Selection** lehetőséget a mezőlistából
5. Konfiguráld a mező beállításait (lásd alább)
6. Mentsd az űrlapot

### Mezőbeállítások

**Domain módok** — Válaszd ki, mely füleket látja az ügyfél. Minden mód egymástól függetlenül engedélyezhető vagy letiltható:

| Mód | Mit csinál |
|---|---|
| **Subdomain** | Az ügyfél egy ingyenes aldomaint használ a hálózatodon (pl. `mysite.yournetwork.com`). Nincs szükség fizetésre. |
| **Register New Domain** | Az ügyfél új domaint keres, és regisztrálja azt a konfigurált szolgáltatódon keresztül. Az árazáshoz a megfelelő domain terméket használja. |
| **Existing Domain** | Az ügyfél egy már birtokolt domaint rendel hozzá. Nincs regisztrációs díj. A domain automatikusan hozzá lesz rendelve a webhelyéhez. |

**Alapértelmezett mód** — Amikor mindhárom mód engedélyezve van, melyik fül nyíljon meg először. Állítsd **Subdomain** értékre, hogy a domainregisztráció opcionális maradjon, vagy **Register New Domain** értékre a vásárlások ösztönzéséhez.

**Domain termék** — Opcionálisan rögzítheted ezt a mezőt egy adott domain termékhez. Ha nincs beállítva, az addon automatikusan kiválasztja a megfelelő terméket az ügyfél által keresett TLD alapján.

### Regisztráló kapcsolattartási mezői

Amikor az ügyfél a **Register New Domain** fület választja, a pénztári űrlap soron belül hozzáadja a regisztráló kapcsolattartási mezőit:

- Keresztnév / Vezetéknév
- E-mail-cím
- Cím (1. sor, város, állam/tartomány, irányítószám, ország)
- Telefonszám

Ezeket minden regisztrátor megköveteli, és a regisztrációs API-hívás előtt ellenőrzésre kerülnek. A telefonszámok automatikusan a regisztrátorok által elvárt `+CC.NNN` nemzetközi formátumra lesznek alakítva.

### Automatikusan generált webhely-URL

Amikor az ügyfél domaint regisztrál vagy rendel hozzá, a webhely URL mezője automatikusan kitöltődik a kiválasztott domain alapján. Az ügyfeleknek nem kell külön URL mezőt kitölteniük.

### Keresési viselkedés

- A domain elérhetősége valós időben, AJAX használatával kerül ellenőrzésre, miközben az ügyfél gépel
- Alternatív TLD-javaslatok jelennek meg, ha a kívánt domain nem elérhető
- Az árak élőben kerülnek lekérésre és egyértelműen megjelenítésre (regisztrációs ár, megújítási ár, opcionális WHOIS adatvédelmi díj)
- A kuponkódok ugyanúgy érvényesek a domain termékekre, mint bármely más termékre

**A keresés válaszkészségének finomhangolása:**

```php
// Increase debounce delay (milliseconds) to reduce API calls on slow connections
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Egyéni mezők hozzáadása a domainkeresési űrlaphoz:**

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

## Ügyfél DNS-kezelés

Az ügyfelek a **My Account** oldalon, a domainjük bejegyzése alatt kezelhetik a regisztrált domainjeik DNS-rekordjait.

### Támogatott rekordtípusok

| Típus | Használat |
|---|---|
| **A** | Gazdanév hozzárendelése IPv4-címhez |
| **AAAA** | Gazdanév hozzárendelése IPv6-címhez |
| **CNAME** | Alias létrehozása, amely egy másik gazdanévre mutat |
| **MX** | Levelezési kiszolgáló beállítása |
| **TXT** | SPF-, DMARC-, ellenőrzési vagy más szöveges rekordok hozzáadása |

### Mely szolgáltatók támogatják a DNS-kezelést?

A DNS-kezelés (rekordok hozzáadása, szerkesztése, törlése) elérhető az **OpenSRS**, **ResellerClub**, **Enom**, **HostAfrica** és **Openprovider** szolgáltatókkal. A **Hostinger** domaineknél a névszerverek frissíthetők a Domain Seller segítségével; a hosztolt domainek DNS-rekordjait az alap Hostinger domain-hozzárendelési integráció kezeli. A Namecheap, GoDaddy és NameSilo domainek állapot- és lejárati információkat jelenítenek meg, de a DNS-t közvetlenül a regisztrátor vezérlőpultján kell kezelni.

### Alapértelmezett DNS-rekordok

Konfigurálhatsz alapértelmezett DNS-rekordokat, amelyek automatikusan alkalmazásra kerülnek egy domain regisztrálásakor. Lépj a **Settings › Domain Seller › Default DNS Records** oldalra.

Az alapértelmezett rekordértékek két tokent támogatnak:

| Token | Erre lesz cserélve |
|---|---|
| `{DOMAIN}` | A regisztrált domainnév (pl. `example.com`) |
| `{SITE_URL}` | A WordPress webhely URL-je az ügyfél webhelyéhez |

**Példa — irányítsd az apex domaint és a www-t a szervered IP-címére:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS megtekintése és szerkesztése

A hálózati adminok bármely ügyféldomain DNS-rekordjait megtekinthetik és szerkeszthetik a domain szerkesztési oldalán itt: **Network Admin › Ultimate Multisite › Domains**.
