---
title: Tagság Lejárta és Oldal Blokkolása
sidebar_position: 10
_i18n_hash: c94d67d4187b293a5e7068550d0703cc
---
# Tagság Lejárta és Oldal Blokkolása

Ez az útmutató elmagyarázza, hogyan kezeli az Ultimate Multisite a tagság lejárását, a próbaidő végének és az oldali (frontend) blokkolást. Leírja a tagság teljes életciklusát az aktív állapottól a lejárttá, azokat a beállításokat, amelyek szabályozzák, hogy blokkolja-e az oldalt, és mit ellenőrizni kell, ha a tagság lejárása után is elérhető marad az oldal.

## Tagsági Státusz Életciklusát {#membership-status-lifecycle}

Az Ultimate Multisite-ban lévő minden tagságnak az alábbi státuszok valamelyikét kell rendelkeznie:

:::note Ingyenes tagságok élettartamig
Az ingyenes tagságok nem lejáranak automatikusan. Az Ultimate Multisite úgy kezeli őket, mintha élettartamig érvényesek lennének, így nem tartoznak a lejáratellenőrzésekbe, hacsak nem módosítja az adminisztrátor a státuszukat, vagy nem helyezi át az ügyfelet egy másik termékre.
:::

| Státusz | Jelentése |
|---|---|
| **Pending** | Megvárja az első fizetést vagy az e-mail-megerősítést |
| **Trialing** | Aktív próbaidőszak, még nem került pénzbevevésre |
| **Active** | Fizetve és aktuális |
| **On Hold** | Megújulási fizetés várható (elállított számla létrehozva, fizetést vár) |
| **Expired** | Lejárta a lejárati dátum és a kedvezmény időszak anélküli megújulás nélkül |
| **Cancelled** | Explicit módon lemondta az ügyfél vagy az adminisztrátor |

### Hogyan Válnak Lejárttá a Tagságok {#how-memberships-transition-to-expired}

Az Ultimate Multisite minden órában futtat egy háttérellenőrzést, amely keresi azokat a tagságokat, amelyeket lejárttá kell jelölni. Ez az ellenőrzés az [Action Scheduler](https://actionscheduler.org/) segítségével (nem közvetlenül a WP-Cronnal) történik, és a `wu_membership_check` terjedelemben beállított műveletként fut.

A lejáratellenőrzés alapértelmezés szerint **3 napos beépített kedvezmény időszakot** biztosít. Egy tagságot nem jelöli `expired` státuszba, amíg a `date_expiration` dátumától 3 nap nem ment el. Ez időt ad az ügyfeleknek, hogy koraan fizetessenek, mielőtt a státuszuk megváltozna.

:::info
A 3 napos lejárat kedvezmény időszaka különálló az alább leírt Frontend Block Grace Period (Oldali Blokkolási Kedvezmény Időszak) beállításától. A lejárat kedvezmény időszaka szabályozza, hogy mikor **változik a státusz** aktív/on-hold-ról expired-re. A frontend block grace period szabályozza, hogy mikor **blokkolja az oldalt**, miután a státusz már megváltozott.
:::

#### Automatikusan Megújuló vs. Nem Automatikusan Megújuló Tagságok {#auto-renewing-vs-non-auto-renewing-memberships}

Ez a különbség kritikus a lejárat viselkedés megértéséhez:

- **Nem automatikusan megújuló tagságok** (`auto_renew = false`): Az óránkénti cron folyamat kezelja az egész életciklust – létrehozza a megújulási fizetéseket, átállítja a tagságot on-hold állapotba, és végül jelöli lejárttá, ha nem érkezik fizetés.

- **Automatikusan megújuló tagságok** (`auto_renew = true`): A cron lejáratellenőrzés **teljesen kihagyja ezeket**. A fizetési gateway (Stripe, PayPal stb.) várhatóan értesíti az Ultimate Multisite-ot webhook segítségével, amikor egy előfizetés sikertelen vagy lemondott. Ha a webhookot nem kapják meg – például rosszul beállított endpoint miatt, gateway meghibásodása miatt, vagy a rendszeren kívül lemondott előfizetés miatt – a tagság végtelenül `active` állapotban maradhat, még a lejárat dátumát követően is.

### Hogyan Végeznek a Próbaidők {#how-trials-end}

Amikor egy próbaidőszakban lévő tagság próbaidője lejár, a rendszer:

1. Létrehoz egy várható megújulási fizetést a teljes előfizetési összeggel
2. Átállítja a tagság státuszát `trialing`-ről `on-hold`-ra
3. Küld egy megújulási fizetési értesítő e-mailt az ügyfélnek

Ez a folyamat ugyanazon az óránkénti menetrendben fut, mint a rendszeres lejáratellenőrzés, de **csak a nem automatikusan megújuló tagságok esetén**. Az automatikusan megújuló próbaidők esetén a fizetési gateway kezeli a próbaidőből fizetős előfizetésre való átállást.

## Oldali (Frontend)Hozzáférés Blokkolása {#block-frontend-access}

Alapértelmezés szerint, amikor egy tagság lejár vagy on hold állapotba kerül, **csak a wp-admin dashboard korlátozva van**. Az oldal nyilvános oldala (frontend) elérhető marad az látogatók számára. Ha az oldali hozzáférés blokkolása is szükséges, ki kell kapcsolni a **Block Frontend Access** (Oldali Hozzáférés Blokkolása) beállítást.

### A Beállítás Konfigurálása {#configuring-the-setting}

Navigáljon az **Ultimate Multisite > Settings > Memberships** menüpontra, és kapcsolja be a **Block Frontend Access** beállítást.

![Block Frontend Access settings showing the toggle enabled, a grace period of 7 days, and a Frontend Block Page selection](/img/config/settings-membership-block-frontend.png)

Íme a tagság beállításainak teljes áttekertése:

![Membership settings full page](/img/config/settings-membership-full.png)

Három kapcsolódó beállítás szabályozza ezt a viselkedést:

| Beállítás | Leírás | Alapértelmezett |
|---|---|---|
| **Block Frontend Access** | Fő kapcsoló. Ha ki van kapcsolva, blokkolja az általános oldalt a hálózat oldalai mentén, ha a tagságuk nem aktív. | Ki |
| **Frontend Block Grace Period** | Napok száma, amellyel várni kell a tagság inaktívvá válását, mielőtt blokkolja. Állítsa `0`-ra, ha azonnali blokkolást szeretne. | 0 |
| **Frontend Block Page** | Egy oldal az fő oldalon, hová irányítja a látogatókat, ha egy oldal blokkolva van. Ha nincs beállítva, a látogatók egy általános "Oldal nem elérhető" üzenetet látnak. | Nincs |

### Mit Látnak a Látogatók, Ha Egy Oldal Blokkolva Van {#what-visitors-see-when-a-site-is-blocked}

Ha a frontend hozzáférés blokkolva van, a látogatók az oldalon vagy:

1. **Átirányítók** az **Frontend Block Page** beállításában kiválasztott oldalra (ha beállítva van), vagy
2. **Látnak egy alapértelmezett üzenetet**: "This site is not available at the moment." (Ez az oldal jelenleg nem elérhető.) és egy linket az oldal admin belépő oldalára.

Az oldal adminok még mindig beléphetnek – a belépő oldal soha nem blokkolható.

### Mit Blokkol és Mikor {#what-gets-blocked-and-when}

A blokkolási viselkedés a tagság státuszától függ:

| Tagság Státusza | Blokkolva? | Kedvezmény Időszak Alkalmazva? |
|---|---|---|
| Active | Nem | -- |
| Trialing | **Nem** (lásd alábbi megjegyzést) | -- |
| On Hold | Gondolkodik aktívnak – nem blokkolva | -- |
| Expired | **Igen**, ha be van kapcsolva a Block Frontend Access | Igen |
| Cancelled | **Igen**, mindig (függetlenül a beállításoktól) | **Nem** -- azonnal blokkolva |
| Pending | Nem blokkolva a tagságellenőrzés alapján | -- |

:::warning A próbaidőszakban lévő tagságok nem blokkolhatók
Még ha egy próbaidőszak lett, egy `trialing` státuszú tagságot **nem** blokkolja a frontend. A próbaidőnek először át kell mennie egy másik státuszra (általában `on-hold` a cron folyamat segítségével, majd `expired`, ha nem fizetnek). Ha olyan próbaidőszakban lévő tagságokat lát, amelyek nem mentek át, ellenőrizze az alábbi hibaelhárítási részt.
:::

:::note A lemondott tagságok figyelmen kívül hagyják a kedvezmény időszakot
A lemondott tagságok mindig blokkolva vannak, ha elüti a lejárat dátumát, függetlenül attól, hogy be van kapcsolva-e a Block Frontend Access. A Frontend Block Grace Period nem érvényesül a lemondott tagságokra.
:::

## Hibaelhárítás: Oldalak, Amelyek Lejárás Után is Elérhetőek {#troubleshooting-sites-remaining-accessible-after-expiration}

Ha az oldalak nyilvánosan elérhetőek maradnak a tagság lejárása után, haladjon végig az alábbi ellenőrzések sorrendjében:

### 1. Ellenőrizze, hogy Be van Kapcsolva a Block Frontend Access Beállítása {#1-verify-the-block-frontend-access-setting-is-enabled}
Menjen az **Ultimate Multisite > Settings > Memberships** menüpontra, és erősítse meg, hogy a **Block Frontend Access** kapcsoló be van kapcsolva. Ez a beállítás **alapértelmezés szerint ki van kapcsolva**, ami azt jelenti, hogy csak a wp-admin korlátozva van, amikor egy tagság inaktívvá válik.

### 2. Ellenőrizze a Frontend Block Grace Period-t {#2-check-the-frontend-block-grace-period}
Ugyanazon a beállítási oldalon ellenőrizze a **Frontend Block Grace Period** értékét. Ha ezt 7 napra állította be, például, a frontend nem blokkolja az oldalt, amíg 7 nap nem ment el a tagság lejárat dátumától – még akkor sem, ha a tagság státusza már `expired`.

Állítsa ezt `0`-ra, ha azonnali blokkolást szeretne a tagság inaktívvá válását követően.

### 3. Erősítse Meg, Hogy Megváltozott a Tagság Státusza {#3-confirm-the-membership-status-has-actually-changed}
Menjen az **Ultimate Multisite > Memberships** menüpontra, és ellenőrizze a kikerülési tagság státuszát. Ha még mindig `active` státuszt mutat, annak ellenére, hogy elüti a lejárat dátuma, a státusz átmenete nem történt meg. Gyakori okok:

- **A tagság automatikusan megújuló**: Ellenőrizze az `auto_renew` mezőt a tagság szerkesztő oldalán. Ha be van kapcsolva az automatikus megújulás, a lejárat cron folyamata kihagyja ezt a tagságot – a fizetési gatewayre támaszkodik a sikertelenség jelentésére. Ellenőrizze a gateway dashboardját (Stripe, PayPal), hogy megegyezik-e az előfizetés státusza az Ultimate Multisite által mutatottakkal.

- **Nem futott a cron folyamat**: Látja a következő lépést.

### 4. Ellenőrizze, Hogy Fut a Action Scheduler {#4-verify-action-scheduler-is-running}
Az Ultimate Multisite az Action Scheduler-t használja a cron folyamataihoz. Menjen a **Tools > Scheduled Actions** menüpontra a hálózat admin felületén, és keresse meg:

- **`wu_membership_check`** – Ez egy rendszeresen futó műveletnek kell, hogy legyen, minden órában. Ha hiányzik, a tagságellenőrzések nem programozódnak.
- **`wu_async_mark_membership_as_expired`** – Ezek egyedi feladatok, amelyek lejárttá jelölik a konkrét tagságokat. Ha itt láthat sikertelen műveleteket, ezek hibaüzeneteket tartalmazhatnak, amelyek elmagyarázzák, miért.

Ha elakadt vagy sikertelen műveleteket lát, lehet, hogy Action Scheduler problémája van. Gyakori okok:

- **`DISABLE_WP_CRON` beállítva `true` értékre** a `wp-config.php` fájlban, és nincs rendszer szintű cron helyettesítője
- **Alacsony oldaltrafikó** – A WP-Cron csak akkor fut, amikor valaki meglátogatja az oldalt

Hogyan biztosítsuk a megbízható cron futást? Állítsanak be egy rendszer cron folyamatot:

```bash
# Minden 5 percen futtatva wget segítségével
*/5 * * * * wget -q -O /dev/null "https://your-network-url.com/wp-cron.php?doing_wp_cron"

# Vagy WP-CLI segítségével
*/5 * * * * cd /path/to/wordpress && wp cron event run --due-now --url=https://your-network-url.com
```

### 5. Ellenőrizze a Gateway Webhook Problémákat (Automatikusan Megújuló Tagságok) {#5-check-for-gateway-webhook-issues-auto-renewing-memberships}
Ha a tagság automatikusan megújuló, és a gateway előfizetése lemondásra került vagy sikertelen volt, de az Ultimate Multisite még mindig `active` státuszt mutat:

- **Stripe**: Menjen a Stripe Dashboard > Customers menüpontra, és ellenőrizze az előfizetési státuszt. Ezután ellenőrizze, hogy az endpoint aktív-e a Developers > Webhooks alatt. Az endpointnek az oldalának kell mutatnia, és sikeres kézbesítéseknek kell látszani.
- **PayPal**: Ellenőrizze az előfizetési státuszt a PayPal üzleti fiókjában, és ellenőrizze az IPN/webhook kézbesítést.

Ha a gateway sikertelen előfizetést mutat, de az Ultimate Multisite nem, valószínűleg elveszett a webhook értesítés. Manuálisan módosíthatja a tagság státuszát az **Ultimate Multisite > Memberships > [Edit Membership]** menüpontban.

### 6. Ellenőrizze a Lejárati Kedvezmény Időszakot (Cron Szinten) {#6-check-the-expiration-grace-period-cron-level}
A cron ellenőrzésnek saját kedvezmény időszaka van (alapértelmezés: 3 nap) a tagság lejárttá jelölése előtt. Ez különálló az oldali blokkolási kedvezmény időszakától. Az oldal blokkolásáig geçen teljes idő lehet:

**Lejárati kedvezmény időszaka (3 nap)** + **Oldali blokkolási kedvezmény időszaka (az Ön beállítása)** = Összes késlekedés

Például, alapértelmezett beállításokkal és 7 napos oldali blokkolási kedvezmény időszakkal, akár 10 napig is eltelhet az `date_expiration` dátumától, mielőtt az oldal ténylegesen blokkolná.

### 7. Manuális Lejártatás egy Tagságnak {#7-manually-expire-a-membership}
Ha azonnal szeretné blokkolni egy oldalt anélkül, hogy várna a cron ciklusra, manuálisan módosíthatja a tagság státuszát:

1. Menjen az **Ultimate Multisite > Memberships** menüpontra
2. Kattintson a kikerülési tagságra
3. Váltságolja a státuszt **Expired** (Lejárttá) vagy **Cancelled** (Lmondva)
4. Kattintson **Save** (Mentés)

A frontend blokkolás a következő oldal betöltésekor lép életbe (a lejárttá jelölt tagságok esetén a Frontend Block Grace Period-hoz, vagy azonnal a lemondott tagságok esetén).

## Összefoglaló {#summary}

Az lejárat dátumától az oldal blokkolásáig geçen teljes idővonal:

```text
date_expiration passes
       |
       v
  [3-day cron grace period]     <-- tagság még aktív/on-hold státuszban látható
       |
       v
  Cron jelöli a tagságot "expired" státuszba
       |
       v
  [Frontend Block Grace Period]  <-- beállítva a Settings > Memberships-ben
       |
       v
  Az oldal frontende blokkolva van
```

A lemondott tagságok esetén a folyamat rövidebb:

```text
  Tagság lemondva
       |
       v
  date_expiration passes (nincs kedvezmény időszak)
       |
       v
  Az oldal frontende azonnal blokkolva van
```

## Fejlesztői Referencia {#developer-reference}

Az alábbi hook-ok és filterek lehetővé teszik a lejárat és blokkolási viselkedés testreszabását:

| Hook/Filter | Leírás |
|---|---|
| `wu_membership_grace_period_days` | Filtereli a kedvezmény időszak napjainak számát, mielőtt egy tagságot lejárttá jelölne (alapértelmezés: 3) |
| `wu_schedule_membership_check_interval` | Filtereli a tagságellenőrzések közötti időintervallumot (alapértelmezés: 1 óra) |
| `wu_membership_renewal_days_before_expiring` | Filtereli, hogy hány napja kell az előfizetés lejáratának, hogy megújulási fizetést hozzon létre (alapértelmezés: 3) |
| `wu_blocked_site_reactivation_url` | Filtereli, hogy milyen személyre szabott reaktivációs URL-t biztosítani, ha egy oldal blokkolva van |
| `wu_membership_is_active` | Filtereli, hogy egy tagságot aktívnak kell-e tekinteni |
| `wu_membership_expired_check_query_params` | Filtereli a lekérdezés paramétereit |
| `w` |
