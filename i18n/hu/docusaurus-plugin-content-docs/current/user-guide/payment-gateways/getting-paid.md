---
title: Kifizetések fogadása
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Kifizetések fogadása (v2) {#getting-paid-v2}

_**FONTOS MEGJEGYZÉS: Ez a cikk az Ultimate Multisite 2.x verziójára vonatkozik.**_

Az Ultimate Multisite beépített tagsági és számlázási rendszerrel rendelkezik. Ahhoz, hogy a számlázási rendszerünk működjön, integráltuk az e-kereskedelemben használt leggyakoribb fizetési átjárókat. Az Ultimate Multisite alapértelmezett fizetési átjárói a _Stripe_ , a _PayPal_ és a kézi fizetés. A _WooCommerce_ , _GoCardless_ és _Payfast_ használatával is fogadhatsz fizetéseket a megfelelő kiegészítőik telepítésével.

## Alapbeállítások {#basic-settings}

Ezeket a fizetési átjárókat az Ultimate Multisite fizetési beállításai alatt konfigurálhatod. Ezt itt találod: **Ultimate Multisite menü > Settings > Payments.**

![Fizetési beállítások oldala az Ultimate Multisite-ban, a Payments panellel](/img/config/payments-settings-page.png)

Mielőtt beállítanád a fizetési átjáródat, kérjük, tekintsd át a konfigurálható alapvető fizetési beállításokat:

**Automatikus megújítás kényszerítése** **:** Ez biztosítja, hogy a fizetés minden számlázási ciklus végén automatikusan megismétlődjön, a felhasználó által kiválasztott számlázási gyakoriságtól függően.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Az Ultimate Multisite v2.13.0 ellenőrzi, hogy az aktív átjáró rendelkezik-e újrafelhasználható megújítási hitelesítő adattal, mielőtt elmentene egy ismétlődő tagságot bekapcsolt automatikus megújítással. A megújítási hitelesítő adat lehet átjáró-előfizetés, számlázási megállapodás, mentett vault token vagy ezzel egyenértékű újrafelhasználható fizetési mód. Ha az átjáró azt jelzi, hogy nincs használható hitelesítő adat, az Ultimate Multisite elmenti a tagságot, de kikapcsolja az automatikus megújítást, és rögzíti a hiányzó hitelesítő adat állapotát, hogy egy adminisztrátor vagy támogatási folyamat megkérhesse az ügyfelet a fizetés újbóli engedélyezésére a megújítás dátuma előtt.

Ez megakadályozza, hogy egy tagság úgy tűnjön, mintha automatikusan megújulna, amikor az átjáró csak egyszeri fizetéseket tud beszedni. Az átjáró-kiegészítőknek meg kell erősíteniük, hogy az ismétlődő checkoutok újrafelhasználható hitelesítő adatot tárolnak, különösen akkor, ha az átjáró támogatja az egyszeri terhelési és a vaultolt/előfizetéses fizetési módokat is.

**Próbaidőszak engedélyezése fizetési** **mód nélkül:** Ha ez az opció engedélyezve van, az ügyfelednek nem kell pénzügyi információkat megadnia a regisztrációs folyamat során. Erre csak akkor lesz szükség, amikor a próbaidőszak lejár.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Számla küldése fizetési visszaigazoláskor:** Ez lehetőséget ad arra, hogy küldj-e számlát fizetés után vagy sem. Vedd figyelembe, hogy a felhasználók hozzáférnek a fizetési előzményeikhez az aloldaluk Dashboard felületén. Ez az opció nem vonatkozik a kézi átjáróra.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Számlaszámozási séma:** Itt választhatsz fizetési hivatkozási kódot vagy sorozatszám-sémát. Ha úgy döntesz, hogy fizetési hivatkozási kódot használsz a számláidhoz, semmit sem kell konfigurálnod. Ha sorozatszám-sémát választasz, konfigurálnod kell a **következő számlaszámot** (Ezt a számot használja a rendszer a következő létrehozott számla számlaszámaként. Minden új számla létrehozásakor eggyel növekszik. Módosíthatod és elmentheted, hogy a számlák sorozatszámozását egy adott értékre állítsd vissza) és a **számlaszám-előtagot.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Hol találhatók az átjárók: {#where-to-find-the-gateways}

A fizetési átjárókat ugyanazon az oldalon állíthatod be ( **Ultimate Multisite > Settings > Payments**). Közvetlenül az **aktív fizetési átjárók** alatt a következőket láthatod: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ és _Manual_.

![Aktív fizetési átjárók szakasz, amely felsorolja a Stripe, Stripe Checkout, PayPal és Manual elemeket](/img/config/payments-active-gateways.png)

Minden fizetési átjáróhoz külön cikkünk van, amely végigvezet a beállítás lépésein; ezeket az alábbi linkeken találod.

Megtekintheted és szerkesztheted a fizetési adatokat:

![Fizetésszerkesztési felület](/img/admin/payment-edit.png)

Íme a fizetésszerkesztő oldal teljes nézete:

![A fizetésszerkesztő teljes felülete](/img/admin/payment-edit-full.png)

Íme továbbá a fizetési átjárók beállításainak teljes nézete:

![Fizetési átjárók beállításainak teljes oldala](/img/config/settings-payments-gateways-full.png)

**A Stripe átjáró beállítása**

**A PayPal átjáró beállítása**** **

**Kézi fizetések beállítása**

Ha most a _WooCommerce_ , _GoCardless_ vagy _Payfast_ szolgáltatást szeretnéd fizetési átjáróként használni, akkor **telepítened és konfigurálnod kell a kiegészítőiket**.

### A WooCommerce kiegészítő telepítése: {#how-to-install-the-woocommerce-add-on}

Tisztában vagyunk vele, hogy a _Stripe_ és a _PayPal_ bizonyos országokban nem érhetők el, ami korlátozza vagy akadályozza az Ultimate Multisite felhasználóit abban, hogy hatékonyan használják a pluginunkat. Ezért létrehoztunk egy kiegészítőt a _WooCommerce_ integrálásához, amely egy nagyon népszerű e-kereskedelmi plugin. A fejlesztők világszerte kiegészítőket hoztak létre különböző fizetési átjárók integrálására hozzá. Ezt kihasználva kibővítettük az Ultimate Multisite számlázási rendszerrel használható fizetési átjárók körét.

_**FONTOS:** Az Ultimate Multisite: WooCommerce Integration használatához a WooCommerce-nek legalább a fő webhelyeden aktiválva kell lennie._

Először kérjük, menj a kiegészítők oldalára. Ezt itt találod: **Ultimate Multisite > Settings**. Látnod kell az **Add-ons** táblázatot. Kattints a **Check our Add-ons** lehetőségre.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Miután a **Check our Add-ons** lehetőségre kattintottál , átirányítunk a kiegészítők oldalára. Itt megtalálod az összes Ultimate Multisite kiegészítőt. Kattints az **Ultimate Multisite: WooCommerce Integration** kiegészítőre.

![Kiegészítők oldala, amely felsorolja az Ultimate Multisite kiegészítőket, köztük a WooCommerce Integration kiegészítőt](/img/addons/addons-page.png)

Megjelenik egy ablak a kiegészítő részleteivel. Csak kattints a **Install Now** gombra.

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog with Install Now button -->

A telepítés befejezése után átirányítunk a pluginok oldalára. Itt csak kattints a **Network Activate** lehetőségre, és a WooCommerce kiegészítő aktiválódik a hálózatodon.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the WooCommerce Integration add-on -->

Az aktiválás után, ha még nincs telepítve és aktiválva a WooCommerce plugin a webhelyeden, emlékeztetőt fogsz kapni.

<!-- Screenshot unavailable: Admin notice reminding the administrator to install and activate the WooCommerce plugin -->

Ha többet szeretnél olvasni a WooCommerce Integration kiegészítőről, **kattints ide**.

### A GoCardless kiegészítő telepítése: {#how-to-install-the-gocardless-add-on}

A _GoCardless_ kiegészítő telepítésének lépései nagyjából megegyeznek a _WooCommerce_ kiegészítőével. Kérjük, menj a kiegészítők oldalára, és válaszd ki a **Ultimate Multisite: GoCardless Gateway** kiegészítőt.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Megjelenik a kiegészítő ablaka. Kattints a **Install Now** gombra.

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

A telepítés befejezése után átirányítunk a pluginok oldalára. Itt csak kattints a **Network Activate** lehetőségre, és a _GoCardless_ kiegészítő aktiválódik a hálózatodon.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Ha meg szeretnéd tudni, hogyan kezdhetsz hozzá a _GoCardless_ gateway használatához, **olvasd el ezt a cikket**.

### A Payfast kiegészítő telepítése: {#how-to-install-the-payfast-add-on}

Menj a kiegészítők oldalára, és válaszd ki a **Ultimate Multisite: Payfast Gateway** kiegészítőt.

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Megjelenik a kiegészítő ablaka. Kattints a **Install Now.** gombra.

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

A telepítés befejezése után átirányítunk a pluginok oldalára. Itt csak kattints a **Network Activate** lehetőségre, és a _Payfast_ kiegészítő aktiválódik a hálózatodon.

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
