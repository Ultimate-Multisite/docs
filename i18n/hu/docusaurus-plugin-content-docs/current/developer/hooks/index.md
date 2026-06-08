---
title: Hooks Referenciája
sidebar_position: 1
_i18n_hash: 126ed8ba22f4c3faebf743dd13eeb90e
---
# Hook-ok Táblázata

Automatikus dokumentáció Ultimate Multisite összes **59 akciója** és **115 szűrője**ről.

## Akciók

- [auth_redirect](./Actions/auth_redirect) — Elküldődik a hitelesítési átirányítás előtt.
- [set_auth_cookie](./Actions/set_auth_cookie) — Azonosítási cookie beállítását közvetlenül megelőzően küldődik.
- [set_logged_in_cookie](./Actions/set_logged_in_cookie) — A bejelentkezett hitelesítési cookie beállítását közvetlenül megelőzően küldődik.
- [wp_ultimo_host_providers_load](./Actions/wp_ultimo_host_providers_load) — Engedélyezi a fejlesztőknek, hogy saját host szolgáltató integrációkat párosítsanak wp pluginek segítségével.
- [wp_ultimo_load](./Actions/wp_ultimo_load) — Elindul, amikor az összes függőség betöltődött.
- [wu_activation](./Actions/wu_activation) — Engedélyezi más plugin részeinek, hogy csatlakoztassák az aktivációs rutinjukat.
- [wu_after_switch_template](./Actions/wu_after_switch_template) — Engedélyezi a plugin fejlesztőknek, hogy hívják fel funkciókat, miután egy felhasználó vagy super admin átváltott az oldal sablonján.
- [wu_before_light_ajax](./Actions/wu_before_light_ajax) — Néhány esetben extra "erő" betöltése szükséges az akciók kezeléséhez.
- [wu_before_search_models](./Actions/wu_before_search_models) — Elküldődik a keresési kérés feldolgozása előtt.
- [wu_cart_after_setup](./Actions/wu_cart_after_setup) — Engedélyezi a fejlesztőknek, hogy további módosításokat tegyenek a checkout objektumán.
- [wu_cart_setup](./Actions/wu_cart_setup) — Engedélyezi a fejlesztőknek, hogy további módosításokat tegyenek a checkout objektumán.
- [wu_checkout_add_field_field_class-get_type](./Actions/wu_checkout_add_field_field_class-get_type) — Elküldődik, mielőtt egy mezőt hozzáadnak a checkout űrlaphoz.
- [wu_checkout_after_process_order](./Actions/wu_checkout_after_process_order) — Engedélyezi a fejlesztőknek további hook-ok elindítását.
- [wu_checkout_before_process_checkout](./Actions/wu_checkout_before_process_checkout) — Mielőtt feldolgozzuk a checkout-ot.
- [wu_checkout_order_created](./Actions/wu_checkout_order_created) — Elküldődik, miután a checkout rendelése teljesen összeáll.
- [wu_dashboard_this-tab_widgets](./Actions/wu_dashboard_this-tab) — Engedélyezi a jelenlegi fülre.
- [wu_user_profile_update_success] — Sikeres felhasználói profilfrissítés.
- [wu_user_profile_update_failed] — Sikertelen felhasználói profilfrissítés.
- [wu_user_profile_delete_success] — Sikeres felhasználói profileltöltés.
- [wu_user_profile_delete_failed] — Sikertelen felhasználói profileltöltés.
- [wu_user_profile_save_success] — Sikeres felhasználói profilmentés.
- [wu_user_profile_save_failed] — Sikertelen felhasználói profilmentés.
- [wu_user_profile_delete_request] — Felhasználói profileltöltés kérése.
- [wu_user_profile_update_request] — Felhasználói profilfrissítés kérése.
- [wu_user_profile_delete_request_failed] — Felhasználói profileltöltés kérése sikertelen.
- [wu_user_profile_update_request_failed] — Felhasználói profilfrissítés kérése sikertelen.
- [wu_user_profile_save_request] — Felhasználói profilmentés kérése.

---

### **[Azonosítás]**

*   **Típus:** Hook/Action Hook (WordPress-szerű rendszerben)
*   **Funkció:** A rendszerben zajlott eseményre reagáló kódblokk.
*   **Kontextus:** A felhasználói profilkezelés és a felhasználói adatfrissítés.

---

### **[Összefoglaló]**

A listában szereplő elemek egy **WordPress-szerű vagy hasonló CMS (Content Management System) rendszerben használt "Action Hook" (eseményhúzás)** listája. Ezek a "hook-ok" olyan kódpontok, ahol a fejlesztők hozzáadhatnak saját logikát, hogy reagálhassanak a rendszerben zajló specifikus eseményekre.

**A fő témák:**

1.  **Felhasználói Profilkezelés:** Több hook a felhasználói profilmentéshez, frissítéshez és törléshez (pl. `wu_user_profile_save_success`, `wu_user_profile_update_request`).
2.  **Sistemes Események:** Általánosabb, általános sikertagsítások (pl. `wu_user_profile_save_success`).

**A kontextus alapján a rendszer valószínűleg egy felhasználói adatkezelő (User Management) plugin vagy funkció.**

---

### **[Javasolt felhasználás]**

Ha egy fejlesztőnek kell reagálnia a felhasználói profilmentésre, akkor a következő hook-okat használhatja:

*   **Sikeres mentés:** `wu_user_profile_save_success`
*   **Frissítés kérése:** `wu_user_profile_update_request`
*   **Frissítés sikere:** `wu_user_profile_update_success`

**Összefoglalva:** Ezek a kódpontok a felhasználói adatkezelés folyamatát követik.
