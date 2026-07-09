---
title: Fejléc domainkeresés
sidebar_position: 4
_i18n_hash: c8b44ed222646006fb33c195ca6ac7a1
---
# Header doménkeresés

Használd ezt a beállítást, ha egy kis fejlécűrlapot szeretnél, amely elindít egy doménkeresést, majd lehetővé teszi, hogy az ügyfél az Ultimate Multisite checkouton belül válasszon az elérhető domainek közül.

## Követelmények

- Ultimate Multisite hálózati szinten aktív.
- Multisite Ultimate Domain Seller hálózati szinten aktív.
- Legalább egy aktív doménregisztrációs termék, amelynél:
  - `domain_provider` egy konfigurált szolgáltatóra van beállítva.
  - Támogatott TLD-k vannak konfigurálva, például `com`, `net` és `org`.
- Egy érvényes checkout űrlap, amely tartalmazza a **Doménválasztás** mezőt.

## Checkout űrlap

1. Hozd létre vagy szerkeszd a regisztrációs oldal által használt checkout űrlapot.
2. Add hozzá a szokásos kötelező checkout-/Account-mezőket, beleértve a **Felhasználónév** mezőt is. Az Ultimate Multisite validációja elutasítja azt a checkout űrlapot, amely csak a doménmezőt tartalmazza.
3. Adj hozzá egy **Doménválasztás** mezőt.
4. Állítsd a Doménválasztás módját **Csak regisztráció** értékre, ha a folyamatnak a regisztrált domainekre kell fókuszálnia az ingyenes aldomének vagy meglévő domainek helyett.
5. Rendeld hozzá a doménregisztrációs terméket ehhez a mezőhöz.

A regisztrációs oldalnak meg kell jelenítenie a checkout űrlapot, például:

```text
[wu_checkout slug="domain-form"]
```

## Fejlécűrlap

Adj hozzá egy kis `GET` űrlapot a site fejlécéhez, amely a megadott keresési kifejezést `domain_name` értékként küldi el a checkout oldalra:

```html
<form class="ums-header-domain-search" action="/register/" method="get">
  <label class="screen-reader-text" for="ums-header-domain-search-input">Search for a domain</label>
  <input id="ums-header-domain-search-input" name="domain_name" type="text" placeholder="Find your domain" autocomplete="off">
  <button type="submit">Search</button>
</form>
```

Ne válassz előre domént egyéni fejléc JavaScriptben. A fejlécnek csak a keresési kifejezést kell továbbítania. A Domain Seller checkout script beolvassa a `?domain_name=example` értéket, kitölti a checkout keresőmezőjét, és lefuttatja az elérhetőségi keresést, hogy az ügyfél választhasson a visszakapott domainek közül.

## Várt viselkedés

Az `example` keresése a fejlécben ezt nyissa meg:

```text
/register/?domain_name=example
```

A checkoutnak ezután választható találatokat kell megjelenítenie, például:

- `example.com`
- `example.net`
- `example.org` nem elérhető
- egyéb, a szolgáltató által támogatott TLD-k

Egy elérhető találat kiválasztása után a rendelési összesítőnek tartalmaznia kell a doménregisztrációs terméket és a kiválasztott doménnevet.

## Ellenőrzés

1. Nyisd meg a kezdőlapot.
2. Keress egy csupasz nevet, például `example`.
3. Ellenőrizd, hogy a checkout URL tartalmazza-e a `?domain_name=example` részt.
4. Ellenőrizd, hogy a checkout doménmezője tartalmazza-e az `example` értéket.
5. Ellenőrizd, hogy megjelenik-e a doménválasztási lista.
6. Kattints a **Select** gombra egy elérhető doménnél.
7. Ellenőrizd, hogy a rendelési összesítő tartalmazza-e a `Domain Registration - example.com` elemet vagy a kiválasztott domént.

## Hibaelhárítás

- Ha nem jelenik meg lista, ellenőrizd a böngésző hálózati lapján az `admin-ajax.php?action=wu_domain_search` kérést, és erősítsd meg, hogy nem üres `domains` vagy `results` értéket ad vissza.
- Ha a checkout űrlap mentés közben nem megy át a validáción, add hozzá a kötelező Account-mezőket, például a **Felhasználónév** mezőt.
- Ha egy domén kiválasztása nem frissíti a kosarat, ellenőrizd, hogy létezik-e a `window.wu_checkout_form`, és hogy a Domain Seller checkout assetek betöltődnek-e a checkout oldalon.
