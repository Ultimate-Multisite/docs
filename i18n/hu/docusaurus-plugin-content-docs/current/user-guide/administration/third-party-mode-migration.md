---
title: Háttérrendszeri mód migráció
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Harmónikus (Third-Party) Mód Migrációja

A Superdav AI Agent v1.12.0 frissítése megváltoztatja, hogyan kezeljük a harmónikus (third-party) képességeket. **A harmónikus mód alapértelmezett értéke most az "auto"**, így a WordPress 7.0+ verziókon natív WordPress Abilities API integrációt biztosít kézi konfiguráció nélkül.

## Mi változott? {#what-changed}

### v1.12.0 előtt {#before-v1120}

A harmónikus képességek kézi konfigurációt igényeltek:

- Explicit módon kellett aktiválni a "harmónikus módot"
- A képességeket egy saját regisztrációból kellett betölteni
- Az integráció a WordPress Abilities API-vel opcionális volt
- Az elavult (Legacy) mód volt az alapértelmezett

### v1.12.0 után {#after-v1120}

A harmónikus képességek automatikusan működnek:

- A harmónikus mód alapértelmezett értéke "auto"
- A képességek natívan integrálódnak a WordPress Abilities API-vel
- WordPress 7.0+ verziókon nem szükséges kézi konfiguráció
- Az elavult (Legacy) mód továbbra is elérhető régebbi WordPress verziók esetén

## Ki érintett? {#who-is-affected}

### Új telepítések (WordPress 7.0+) {#new-installations-wordpress-70}

**Nincs cselekvésre szükség.** A harmónikus mód automatikusan "auto"ra áll, és a képességek azonnal működnek.

### Mege forduló telepítések {#existing-installations}

**Az Ön beállításai megőrződnek.** Ha használta:

- **Legacy módot**: Az elavult módban marad (nincs változás)
- **Kézi harmónikus módot**: A kézi módban marad (nincs változás)
- **Auto módot**: Az auto módban folytatja (nincs változás)

### WordPress verziók 7.0 előtt {#wordpress-versions-before-70}

**Az elavult (Legacy) mód továbbra is elérhető.** Ha WordPress 6.x vagy régebbi verziót használ:

- A harmónikus mód alapértelmezett értéke "legacy"
- Ha szeretné, kézi módon aktiválhatja a harmónikus módot
- Frissíteni kell WordPress 7.0+ verzióra, hogy használja a natív Abilities API-t

## A Módok Megértése {#understanding-the-modes}

### Auto mód (Új alapértelmezett) {#auto-mode-new-default}

**Az Auto mód** a natív WordPress Abilities API integrációját használja:

- A képességek WordPress hook-jaik (huzak) segítségével regisztrálódnak
- Teljes kompatibilitást biztosít a WordPress 7.0+ Abilities API-vel
- Automatikusan fedezheti fel a harmónikus képességeket
- Nem szükséges kézi konfiguráció

**Mikor kell használni**: WordPress 7.0+ verzió esetén, ha harmónikus képességeket használ

### Kézi mód (Manual Mode) {#manual-mode}

**A Kézi mód** explicit konfigurációt igényel:

- Ön határozza meg, melyik harmónikus képességeket kell betölteni
- Hasznos teszteléshez vagy szelektív képességbetöltéshez
- Konfigurációs fájlok szerkesztését igényel
- Több kontrollt biztosít, de több beállítási munkát is

**Mikor kell használni**: Tesztelés, szelektív képességbetöltés vagy egyedi konfigurációk esetén

### Legacy mód {#legacy-mode}

**Az Elavult (Legacy) mód** az régi harmónikus képesség rendszert használja:

- Egy saját képesség regisztráció (nem a WordPress Abilities API)
- Visszamenő kompatibilitást biztosít régebbi WordPress verziókkal
- Nincs natív WordPress integráció
- Elavult, de továbbra is támogatott

**Mikor kell használni**: WordPress 6.x vagy régebbi verzió esetén, vagy ha elavult kompatibilitást igényel

## Az Aktuális Mód Ellenőrzése {#checking-your-current-mode}

### Admin felületen keresztül {#via-admin-panel}

1.  Menjen a **WordPress Admin** → **Superdav AI Agent** → **Settings** menübe
2.  Keresse meg a **Third-Party Mode** (Harmónikus mód) beállítást
3.  Látni fogja az aktuális módot és az opciókat, amelyekkel megváltoztathatja

### Kód segítségével {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', vagy 'legacy'
```

## A Mód Megváltoztatása {#changing-your-mode}

### Átváltás az Auto módra {#switch-to-auto-mode}

Ha WordPress 7.0+ verziót használ, és az auto módot szeretné használni:

1.  Menjen a **Superdav AI Agent** → **Settings** menübe
2.  Keresse meg a **Third-Party Mode** (Harmónikus mód)
3.  Válassza ki az **Auto (WordPress Abilities API)** opciót
4.  Kattintson a **Save** (Mentés) gombra

A Superdav AI Agent automatikusan fedezheti fel és regisztrálja a harmónikus képességeket.

### Átváltás a Kézi módra {#switch-to-manual-mode}

Ha kézi módon szeretné irányítani, melyik képességek töltődnek be:

1.  Menjen a **Superdav AI Agent** → **Settings** menübe
2.  Keresse meg a **Third-Party Mode** (Harmónikus mód)
3.  Válassza ki az **Manual** (Kézi) opciót
4.  Kattintson a **Save** (Mentés) gombra
5.  Szerkesztse a konfigurációs fájlját, hogy megadja, melyik képességeket kell betölteni

### Átváltás az Elavult (Legacy) módra {#switch-to-legacy-mode}

Ha elavult kompatibilitást igényel:

1.  Menjen a **Superdav AI Agent** → **Settings** menübe
2.  Keresse meg a **Third-Party Mode** (Harmónikus mód)
3.  Válassza ki az **Legacy** (Elavult) opciót
4.  Kattintson a **Save** (Mentés) gombra

## Az Auto mód Előnyei {#benefits-of-auto-mode}

### Automatikus Feldézés (Discovery) {#automatic-discovery}

A képességek automatikusan fedezhetők fel:

- Telepített pluginekből
- Aktív témából
- Kötelező pluginekből (Must-use plugins)
- Drop-in pluginekből

Nem szükséges kézi regisztráció.

### Natív Integráció {#native-integration}

A képességek integrálódnak a WordPress Abilities API-vel:

- Megfelelő a WordPress magjához
- Működik a WordPress admin felületén
- Kompatibilis más pluginekkel, amelyek Abilities API-t használnak
- Jövőbiztos, ahogy fejlődik a WordPress

### Egyszerűsített Kezelés {#simplified-management}

- Nincs konfigurációs fájl szerkesztése
- Nincs kézi képességregisztráció
- A képesség láthatósági (Ability Visibility) ellenőrzése automatikusan működik
- Az admin értesítések figyelmeztetnek az osztályozatlan képességekre

### Jobb Teljesítmény {#better-performance}

- A képességek cache-elve (hamisítva)
- Kérelmeakra történő lassan betöltése (Lazy-loaded)
- Optimalizálva a WordPress 7.0+ verzióhoz

## Migrációs Útvonal {#migration-path}

### Ha WordPress 6.x verziót használ {#if-youre-on-wordpress-6x}

1.  **Frissíteni kell WordPress 7.0+ verzióra** (amikor készen áll)
2.  **Frissíteni kell a Superdav AI Agent-et** v1.12.0+re
3.  **Átállítani a harmónikus módot az Auto módra** (opcionális; az elavult mód még működik)
4.  **Ellenőrizni a képesség láthatóságát** biztos hogy megfelelő hozzáférés-kontrollok vannak

### Ha WordPress 7.0+ verziót használ {#if-youre-on-wordpress-70}

1.  **Frissíteni kell a Superdav AI Agent-et** v1.12.0+re
2.  **Ellenőrizni, hogy a harmónikus mód "Auto"ra van állítva** (alapértelmezettnek kell lennie)
3.  **Ellenőrizni a képesség láthatóságát** biztos hogy megfelelő hozzáférés-kontrollok vannak
4.  **Tesztelni a harmónikus képességeket** annak megerősítésére, hogy működnek

## Hibaelhárítás {#troubleshooting}

### A képességek nem töltődnek be az auto módban {#abilities-arent-loading-in-auto-mode}

- Ellenőrizze, hogy WordPress 7.0+ verziót használ
- Nézze meg, hogy a harmónikus mód "Auto"ra van állítva
- Ellenőrizze, hogy a képességet biztosító plugin aktív
- Ellenőrizze a WordPress hiba naplóit a regisztrációs hibák után

### Meg akarom tartani az elavult (Legacy) módot {#i-want-to-keep-legacy-mode}

- Menjen a **Settings** → **Third-Party Mode** (Harmónikus mód) menübe
- Válassza ki az **Legacy** (Elavult) opciót
- Kattintson a **Save** (Mentés) gombra
- Az elavult mód továbbra is működni fog

### A saját képességeim nem láthatók {#my-custom-abilities-arent-showing}

- Ellenőrizze, hogy WordPress hook-jaik segítségével regisztrálták-e őket
- Ellenőrizze, hogy megfelelően implementálják-e az Abilities API-t
- Ellenőrizze a WordPress hiba naplóit
- Használja az **Ability Visibility** admin oldalt, hogy lássa az összes regisztrált képességet

### "Osztályozatlan képesség" értesítéseket kapok {#im-getting-unclassified-ability-notices}

- Ez normális a yeni harmónikus képességek esetén
- Ellenőrizze és osztályozza őket az admin értesítésben
- Látja az **Ability Visibility** oldalon a részleteket az osztályozásról

## Visszamenő Kompatibilitás {#backward-compatibility}

### Mege forduló Konfigurációk {#existing-configurations}

Ha léteznek mege forduló harmónikus képesség konfigurációi:

- **Legacy módot**: A konfigurációja továbbra is működik
- **Kézi módot**: A konfigurációja továbbra is működik
- **Auto módot**: A konfigurációja figyelmen kívül marad (az auto mód lép fel)

Ha meg akarja tartani a saját konfigurációját, maradjon a Kézi vagy Legacy módban.

### Elavítási Idővonal {#deprecation-timeline}

- **v1.12.0**: Az elavult és a Kézi mód még teljesen támogatottak
- **v1.13.0+**: Az elavult mód elavítási értesítéseket kaphat
- **v2.0.0**: Az elavult mód eltávolítható lehet (TBD)

## Legjobb Gyakorlati Módok {#best-practices}

### Új telepítések esetén {#for-new-installations}

- Használja az Auto módot (az alapértelmezett)
- Hagyja, hogy a Superdav AI Agent automatikusan fedezze fel a képességeket
- Használja az Ability Visibility-t az hozzáférés-kontrollokhoz

### Mege forduló telepítések esetén {#for-existing-installations}

- Frissíteni kell WordPress 7.0+ verzióra, amennyiben lehetséges
- Átállítani az Auto módot egyszerűsített kezelés érdekében
- Ellenőrizni és osztályozni a képességeket az Ability Visibility segítségével

### Saját (Custom) Képességek esetén {#for-custom-abilities}

- Regisztrálja a képességeket WordPress hook-jaik segítségével (Abilities API)
- Kerülje a saját képességregisztrációkat
- Tesztelje WordPress 7.0+ verzióval és Auto módban

## Következő Lépések {#next-steps}

1.  **Ellenőrizze a WordPress verzióját**: Bizonyosítsa meg, hogy 7.0+ verziót használ az Auto módhoz
2.  **Ellenőrizze a harmónikus módját**: Menjen a Settings menübe és ellenőrizze az aktuális módot
3.  **Frissíteni kell, ha szükséges**: Átállítsa az Auto módra, ha WordPress 7.0+ verziót használ
4.  **Osztályozni kell a képességeket**: Ellenőrizze és osztályozza az összes osztályozatlan képességet
5.  **Tesztelni**: Bizonyosítsa meg, hogy a harmónikus képességei megfelelően működnek

## Kapcsolódó Témák {#related-topics}

- **Ability Visibility**: Kontrollálja, mely képességek láthatók hol
- **WordPress Abilities API**: Tanulja meg a natív WordPress képességregisztrációról
- **Third-Party Ability Development**: Készítse olyan képességeket, amelyek az Auto módban működnek
