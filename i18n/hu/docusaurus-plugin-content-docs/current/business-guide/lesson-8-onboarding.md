---
title: 'Örnélkezés 8: Ügyfél bevezetése'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# 8. Lesson: A vásárló bevezetése (Onboarding)

Egy vásárló regisztrációja csak az első fél. Ha belép, elüteli magát, és soha nem tér vissza, akkor elvesztetted. Ez a lecke azt a felhasználói élményt tervezi, amely egy új regisztrációt aktív, elkötelezett vásárlóvá alakít.

## Hol voltam?

A FitSite teljesen saját márkájú, működő checkout folyamatú. Most azt fogjuk elemezni, mi történik azután, hogy egy fitness stúdió tulajdonosa sikeresen regisztrál, és először látja az új oldalát.

## Miért fontos az onboarding?

Az első 30 perc a regisztráció után meghatározza, hogy a vásárló marad-e, vagy elhagyja a szolgáltatást. Egy fitness stúdió tulajdonosa, aki:

- Belép, és lát egy olyan oldalt, amely már fitness weboldalnak tűnik → marad
- Pontosan tudja, mit kell csinálnia utána → marad
- Elveszettnek érzi magát egy általános WordPress dashboard-on → elhagyja

A niche alapú sablonjai (4. Lesson) kezelik az első pontot. Ez a lecke a második pontot.

## Az első belépés élménye

### Welcome Dashboard Widget (Üdvözlő dashboard widget)

Létrehoz egy festőleges dashboard widget-ot, amely üdvözi az új vásárlókat, és útmutatja őket az elállítási folyamaton. Ez kiemelkedően kell látszaniuk, amikor először lépnek be.

**FitSite Gyors Indítása:**

1. **Adja meg a stúdió nevét és logóját** – Link a Customizer vagy Site Identity beállításokhoz
2. **Frissítse az órák menetrendjét** – Közvetlenül a Classes oldal szerkesztőjéhez
3. **Adja hozzá a edzőit** – Link a Trainers oldal szerkesztőjéhez
4. **Állítsa be az elérhetőségeket** – Link a Contact oldal szerkesztőjéhez
5. **Előnézi az oldalát** – Link a frontend-re

Minden lépés közvetlenül a releváns oldalra vagy beállításra mutat. Nem kell menüek között keresni.

### Egyszerűsítse a dashboard-ot

Az új vásárlóknak nem kell minden WordPress menüpontot látniuk. Fontos megfontolni:

- Az olyan menüpontok elrejtése, amelyek nem relevánsak a fitness oldal kezeléséhez (pl. Kommentek, ha nem használják)
- A menü átszervezése, hogy a leggyakrabban használt elemeket előre helyezzék
- Saját menücímek hozzáadása, amelyek értelmesek a niche számára ("Az Ön Stúdiója" helyett "Megjelenés")

Az [Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon segíthet szabályozni, mit látnak a vásárlók.

## Üdvözlő e-mail sorozat

Egyetlen üdvözlő e-mail nem elég. Állíts fel egy sorozatot, amely útmutatja a vásárlókat az első hétük során:

### E-mail 1: Üdvözlés (Regisztráció után azonnal)

- Tárgy: "Üdvözlünk a FitSite-on – a stúdió oldalad online!"
- Tartalom: Belépési link, gyors indítási lépések, link a segítségnyújtási forrásokhoz
- Hangnem: Izgalmas, ösztönző, fitness-specifikus

### E-mail 2: Gyors sikerek (1. nap)

- Tárgy: "3 dolog, amit először kell csinálni a FitSite-on"
- Tartalom: Adja hozzá a logóját, frissítse az oldalonki hős képet, adja hozzá az órák menetrendjét
- Tartalmazzon képernyőképeket, amelyek pontosan mutatják, hol kell kattintani

### E-mail 3: Önnek alakítsa (3. nap)

- Tárgy: "Látszólag kiemelt fitness oldal"
- Tartalom: Színek testreszabása, edzők képei hozzáadása, a stúdió történetének írása
- Link egy példákhoz a platformon található kiváló fitness oldalakról

### E-mail 4: Online (7. nap)

- Tárgy: "Készen van a FitSite-ot a világ számára?"
- Tartalom: Ellenőrzőlista arról, amit ellenőrizni kell a megosztás előtt, hogyan csatlakoztasson hozzá egy saját domain-t (ha Growth/Pro-on van), social sharing tippek

:::tip E-mail automatizáció
Használja a [Webhooks](/user-guide/integrations/webhooks) vagy a [Zapier](/user-guide/integrations/zapier) szolgáltatást ezek az e-mailek elindításához az e-mail marketing platformján. Ez több kontrollt ad az időzítés felett, és lehetővé teszi az elkötelezettség nyomon követését.
:::

## Tudásforrások

Létrehozjon niche-specifikus segítségnyújtási tartalmat, amely válaszolja azokat a kérdéseket, amelyeket a fitness stúdió tulajdonosok tényleg felvetnek:

### Knowledge Base (Tudásbázis cikkek)

- "Hogyan frissítem az órák menetrendjét"
- "Edző profilok hozzáadása és szerkesztése"
- "A stúdió logójának és színeinek megváltoztatása"
- "Saját domain név csatlakoztatása" (Growth/Pro vásárlóknak)
- "Egy foglalási widget hozzáadása az oldalhoz"

Írja ezeket a tartalmakat nem-szakértői felhasználók számára. Használjon képernyőképeket. Kerülje a WordPress szakkifejezéseket.

### Video Walkthroughs (Videó áttekintélyek)

Rövid (2-3 perces) képernyőfelvételek, amelyek mutatják:

- Az első belépés és orientáció
- Az oldalonki szerkesztés
- Az órák menetrendjének frissítése
- Egy új edző hozzáadása

Ezek nem kell, hogy tökéletes, professzionális produkciók legyenek. A világos, hasznos és niche-specifikus tartalom a lényeg.

## Az Ügyféloldal (Account Page)

Az Ultimate Multisite tartalmaz egy vásárlóknak szánt [Account Page](/user-guide/client-management/account-page)-t, ahol a vásárlók kezelik előfizetésüket. Testreszabítsa ezt a következőképpen:

- Megjeleníti az aktuális FitSite tervüket
- Megjeleníti az emelkedési lehetőségeket fitness-specifikus előnyökkel
- Megjeleníti a számlázási tájakat és az invoice letöltéseit
- Linket a segítségnyújtási forrásokhoz

## Az onboarding sikerének mérése

Követje ezeket az indikátorokat, hogy tudja, működik-e az onboarding folyamata:

- **Aktivációs arány**: Mennyi regisztrációból szerkeszti meg ténylegesen az oldalát az első héten?
- **Elsőheti belépések**: Hány alkalommal lép be egy új vásárló az első hét alatt?
- **Támogatási jegyek új vásárlóktól**: Magas mennyiség azt jelenti, hogy az onboarding folyamatában hiányosságok vannak
- **Próba-fizetős átalakulás**: Ha próbaverziókat kínál, mennyi százalék alakul át fizetővé?

## A FitSite Hálózatának Állapotát

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## Amit építettünk ebben a leckében

- **Egy vezetett első belépési élmény** egy Quick Start widget-tal
- **Egy egyszerűsített dashboard**, amely a fitness oldal kezelési feladatokra összpontosít
- **Egy üdvözlő e-mail sorozat**, amely útmutatja a vásárlókat az első hétük során
- **Niche-specifikus tudásforrások**, amelyek nem-szakértői fitness stúdió tulajdonosok számára íródnak
- **Onboarding metrikák** a folyamat nyomon követéséhez és javításához

---

**Következő:** [9. Lesson: Árazás a profitért](lesson-9-pricing) – finomítjuk az árazási stratégiát a bevétel maximalizálása és az elhagyás minimalizálása érdekében.
