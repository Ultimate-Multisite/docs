---
title: Fizetések és számlák kezelése
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Fizetések és számlák kezelése

## Fizetési beállítások

Mielőtt elkezdenéd fogadni a fizetéseket, be kell állítanod a fizetéssel kapcsolatos opciókat. Navigálj az **Ultimate Multisite → Beállítások** menüpontra, majd kattints a **Fizetés** fülre.

![Fizetési beállítások fül](/img/admin/settings-payments-top.png)

### Általános fizetési beállítások

Az általános beállítások között a következőket konfigurálhatod:

- **Pénznem** — A tranzakciókhoz használt alapértelmezett pénznem
- **Pénznem pozíciója** — Hol jelenjen meg a pénznem szimbóluma (az összeg előtt vagy után)

![Fizetési átjáró beállítások](/img/admin/settings-payments-options.png)

### Fizetési átjárók

Az Ultimate Multisite több fizetési átjárót is támogat. Mindegyiket engedélyezheted és beállíthatod a Fizetés beállítások fülön.

![Fizetési átjáró konfiguráció](/img/admin/settings-payments-gateways.png)

Az elérhető átjárók:

- **Stripe** — Bankkártyás fizetés Stripe-on keresztül
- **PayPal** — PayPal fizetések
- **Manuális** — Offline vagy egyedi fizetések kezeléséhez

Minden átjárónak saját konfigurációs része van, ahol megadhatod az API-kulcsokat és egyéb beállításokat.

![További átjáró beállítások](/img/admin/settings-payments-gateways-2.png)

### Sandbox mód

Engedélyezheted a **Sandbox módot**, hogy teszteld a fizetési integrációt az éles indítás előtt. Amikor a sandbox mód aktív, nem történik valódi terhelés.

## Fizetések megtekintése

Navigálj a **Fizetések** oldalra az Ultimate Multisite alatt, hogy lásd az összes tranzakciót a hálózatodon.

![Fizetések listája](/img/admin/payments-list.png)

Szűrheted a fizetéseket státusz szerint (teljesített, függőben lévő, sikertelen, visszatérített), és kereshetsz konkrét tranzakciókra.

Kattints egy fizetésre a részletek megtekintéséhez, beleértve a tételeket, a kapcsolódó tagságot, az ügyféladatokat és a fizetési átjáró adatait.

## Számlák

Az Ultimate Multisite automatikusan tud számlákat generálni a fizetésekhez. A számla sablonját és számozási formátumát a Fizetés beállításoknál szabhatod testre.

A számla testreszabási lehetőségei:

- **Cégnév és cím** megjelenítése a számlán
- **Számlaszámozás** formátuma és sorozata
- **Logó** megjelenítése a számla fejlécében
- **Egyedi lábléc szöveg** feltételekhez, megjegyzésekhez vagy jogi információkhoz

A számla sablon testreszabásához navigálj az **Ultimate Multisite → Beállítások → Fizetés** menüpontra, és keresd meg a számlával kapcsolatos beállításokat.
