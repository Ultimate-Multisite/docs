---
title: A fizetési mező és a vásárló DNS-e
sidebar_position: 3
_i18n_hash: 6723eb72a4f1a6663a643a8d310c2e63
---
# Domain kiválasztás és ügyfél DNS kezelése

## A Domain kiválasztás fizetési mezője

A **Domain kiválasztás** mező egy fizetési elemet biztosít, amely lehetővé teszi a vásárlóknak, hogy döntsenek arról, hogyan akarják megszerezni az oldaluk domainjait. Adja hozzá bármilyen fizetési űrlaphoz, hogy elindítsa a domain eladásának lehetőségét.

### A mező hozzáadása egy fizetési űrlaphoz

1. Navigáljon a **Network Admin › Ultimate Multisite › Checkout Forms** menüpontra
2. Nyitassa meg vagy hozza létre egy fizetési űrlapot
3. A fizetési űrlap szerkesztőjében kattintson az **Add Field** gombra
4. Válassza ki a **Domain Selection** mezőt a mezőlistából
5. Konfigurálja a mező opcióit (lásd alább)
6. Mentse el az űrlapot

### Mező opciók

**Domain módok** — Kézi kiválasztása, hogy mely lapokat látja a vásárló. Minden módot függetlenül lehet aktiválni vagy inaktiválni:

| Mód | Mit csinál |
|---|---|
| **Subdomain** | A vásárló egy ingyenes aldomainet használ a hálózatán (pl. `mysite.yournetwork.com`). Nem szükséges fizetni. |
| **Register New Domain** | A vásárló keres egy új domainet, és regisztrálja a beállított szolgáltatója segítségével. A belőző domain termékét használja az árazáshoz. |
| **Existing Domain** | A vásárló egy már saját tulajdonban lévő domainet térképez (map). Nincs regisztrációs díja. A domain automatikusan térképeződik az oldalukhoz. |

**Alapértelmezett mód** — Ha mindhárom mód aktiválva van, melyik lap nyílik először. Állítsa **Subdomain**-re, ha opcionális marad a domain regisztráció, vagy **Register New Domain**-re, ha ösztönözni akar vásárlásra.

**Domain termék** — Opcionálisan rögzítheti ezt a mezőt egy konkrét domain termékhez. Ha nincs beállítva, az addon automatikusan kiválasztja a megfelelő terméket a vásárló által keresett TLD alapján.

### Regisztráló elérhetőségi mezők

Amikor a vásárló a **Register New Domain** lapot választja, a fizetési űrlap automatikusan ad hozzá regisztráló elérhetőségi mezőket:

- Keresztnév / Vornév
- E-mail cím
- Cím (1. sor, város, megye/provincia, irányítószám, ország)
- Telefonszám

Ezeket minden regisztrátor megköveteli, és az API hívás előtt validálják. A telefonszámokat automatikusan formátumozzák a regisztrátorok által várható `+CC.NNN` nemzetközi formátumban.

### Automatikusan generált weboldal URL-e

Amikor a vásárló regisztrál vagy térképez egy domainet, az oldal URL-e automatikusan kitöltődik a kiválasztott domain alapján. A vásárlóknak nem kell külön URL mezőt kitölteniük.

### Keresési viselkedés

- A domain elérhetőségét valós időben ellenőrizzi AJAX segítségével, ahogy a vásárló írja.
- Alternatív TLD javaslatokat mutat, ha az előnyben részesített domain nem elérhető.
- Az árak élőben kerülnek lekérdezésre és egyértelműen jelennek meg (regisztrációs ár, megújítási ár, opcionális WHOIS adatvédelmi díj).
- A kuponkódok a domain termékekre is érvényesek, mint bármilyen más termékre.

**A keresési válaszidej finomhangolása:**

```php
// Növeli a debounce késlekedést (millió más) csökkentve az API hívásokat lassú kapcsolatokon
add_filter('wu_domain_seller_search_delay', function($delay) {
    return 800; // default: 500
});
```

**Egyedi mezők hozzáadása a domain keresési űrlaphoz:**

```php
add_filter('wu_checkout_form_register_domain_form_fields', function($fields) {
    $fields['custom_note'] = [
        'type'  => 'text',
        'label' => 'További megjegyzések',
    ];
    return $fields;
});
```

---

## Ügyfél DNS kezelése

A vásárlók a **My Account** oldalon, a domainjük bejegyzése alatt kezelhetik a regisztrált domainek DNS rekordjait.

### Támogatott rekord típusok

| Típus | Használat |
|---|---|
| **A** | Tartalomnév IPv4 címre térképzése |
| **AAAA** | Tartalomnév IPv6 címre térképzése |
| **CNAME** | Alias létrehozása egy másik tartalomnévre mutató |
| **MX** | E-mail cseréserver beállítása |
| **TXT** | SPF, DMARC, validációs vagy más szöveges rekordok hozzáadása |

### Mely szolgáltatók támogatják a DNS kezelést?

A DNS kezelés (rekord hozzáadása, szerkesztése, törlése) elérhető az **OpenSRS**, **ResellerClub** és **Enom** szolgáltatóknál. A Namecheap, GoDaddy és NameSilo domainek megjelenítik a státuszt és a lejárt dátumot, de a DNS-t közvetlenül a regisztrátor irányítópaddal kell kezelni.

### Alapértelmezett DNS rekordok

Beállíthat alapértelmezett DNS rekordokat, amelyeket automatikusan alkalmazunk, amikor egy domainet regisztrálnak. Navigáljon a **Settings › Domain Seller › Default DNS Records** menüpontra.

Az alapértelmezett rekordértékek két tokenet támogatnak:

| Token | Cserébe |
|---|---|
| `{DOMAIN}` | A regisztrált domain neve (pl. `example.com`) |
| `{SITE_URL}` | A vásárló oldalának WordPress weboldal URL-e |

**Példa — a fő domain és a www címet a szerver IP címére mutatása:**

```
Type: A
Name: {DOMAIN}
Value: 203.0.113.10

Type: CNAME
Name: www.{DOMAIN}
Value: {DOMAIN}
```

### Admin: DNS megtekintése és szerkesztése

A hálózat adminok megtekinthetik és szerkeszthetik bármely ügyfél domainének DNS rekordjait a domain szerkesztő oldalán, a **Network Admin › Ultimate Multisite › Domains** menüpont alatt.
