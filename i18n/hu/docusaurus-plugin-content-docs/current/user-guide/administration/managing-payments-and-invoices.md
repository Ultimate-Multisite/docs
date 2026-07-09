---
title: Fizetések és számlák kezelése
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Fizetések és számlák kezelése

## Fizetési beállítások

Mielőtt elkezdenél fizetéseket fogadni, konfigurálnod kell a fizetéssel kapcsolatos beállításokat. Navigálj ide: **Ultimate Multisite → Beállítások**, majd kattints a **Fizetés** fülre.

![Fizetési beállítások fül](/img/admin/settings-payments-top.png)

Íme a fizetési beállítások oldal teljes nézete:

![Fizetési beállítások teljes oldal](/img/admin/settings-payments-full.png)

### Általános fizetési beállítások

Az általános beállításokban a következőket konfigurálhatod:

- **Pénznem** — A tranzakciókhoz használt alapértelmezett pénznem
- **Pénznem pozíciója** — Hol jelenjen meg a pénznem jele (az összeg előtt/után)

![Fizetési átjáró beállításai](/img/admin/settings-payments-options.png)

### Fizetési átjárók

Az Ultimate Multisite több fizetési átjárót támogat. Mindegyiket engedélyezheted és konfigurálhatod a Fizetés beállítások fülön.

![Fizetési átjáró konfigurációja](/img/admin/settings-payments-gateways.png)

Az elérhető átjárók többek között:

- **Stripe** — Bankkártyás fizetések Stripe-on keresztül
- **PayPal** — PayPal-fizetések
- **Kézi** — Offline vagy egyéni fizetésfeldolgozáshoz

Minden átjárónak saját konfigurációs szakasza van, ahol megadhatod az API-kulcsokat és egyéb beállításokat.

![További átjáróbeállítások](/img/admin/settings-payments-gateways-2.png)

### Sandbox mód

Engedélyezheted a **Sandbox módot**, hogy élesítés előtt teszteld a fizetési integrációdat. Amikor a sandbox mód aktív, nem történnek valódi terhelések.

## Fizetések megtekintése

Navigálj a **Fizetések** oldalra az Ultimate Multisite alatt, hogy lásd a hálózatod összes tranzakcióját.

![Fizetések listája](/img/admin/payments-list.png)

A fizetéseket szűrheted állapot szerint (befejezett, függőben lévő, sikertelen, visszatérített), és kereshetsz konkrét tranzakciókat.

Kattints egy fizetésre a teljes részletek megtekintéséhez, beleértve a tételeket, a kapcsolódó tagságot, az ügyféladatokat és a fizetési átjáró adatait.

## Számlák

Az Ultimate Multisite automatikusan számlákat tud generálni a fizetésekhez. A számlasablont és a számozási formátumot a Fizetés beállításokban szabhatod testre.

A számla testreszabási lehetőségei közé tartoznak:

- A számlákon megjelenő **cégnév és cím**
- **Számlaszámozás** formátuma és sorrendje
- A számla fejlécében megjelenő **logó**
- **Egyéni láblécszöveg** feltételekhez, megjegyzésekhez vagy jogi információkhoz

A számlasablon testreszabásához menj ide: **Ultimate Multisite → Beállítások → Fizetés**, és keresd meg a számlához kapcsolódó beállításokat.
