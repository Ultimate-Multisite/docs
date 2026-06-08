---
title: 'Összhang 6: A regisztrációs élmény'
sidebar_position: 7
_i18n_hash: a5c16cdd9b4e53a69e138df7bb042411
---
# 6. Bölöm: A Regisztrációs Élmény

A checkout folyamat az a pont, ahol az érdeklődés bevételnek válik. Egy zavaros vagy általános regisztrációs folyamat elvesznek vásárlókat. Egy a niche-re (szakmai területre) szabott folyamat, amely a nyelvükben beszél, és fáradsáment érzi, konvertálja őket.

## Hol voltam

A FitSite rendelkezik sablonokkal és csomagokkal. Most építjük az elhasználódási (checkout) és regisztrációs élményt, amely a fitness stúdió tulajdonosait fizető vásárlókká alakítja.

## Az Regisztrációs Folyamat Megértése

Az Ultimate Multisite checkout űrlapjai teljesen testreszabható, több lépésből álló űrlapok. A FitSite számára olyan folyamatot szeretnénk, amely:

1. úgy érzi, mintha a fitness vállalkozások számára készült volna
2. Csak azt gyűjti be, ami szükséges
3. A vásárlót a lehető leggyorsabban egy működő oldalra vezeti

A teljes műszaki referenciát [A Regisztrációs Folyamat](/user-guide/configuration/the-registration-flow) alatt találja.

## A FitSite Checkout Dizainozása

Navigáljon az **Ultimate Multisite > Checkout Forms** menüpontra, és hozzon létre egy új űrlapot.

### 1. Lépés: Csomagválasztás

Az első dolog, amit egy fitness stúdió tulajdonosa látnia kell, az a csomagok, és ezeket olyan kifejezésekben kell prezentálni, amiket ő ért.

- Adjon hozzá egy **Pricing Table** (Árlistázó) mezőt
- Konfigurálja, hogy mindhárom FitSite csomag látható legyen
- A 5. Bölomban írt csomagleírások jelennek meg itt – győződjön róla, hogy a fitness vállalkozások igényeit, nem a műszaki funkciókat emelik ki

:::tip A Niche Nyelv Fontos
Egy "1 GB tárhely" nulla jelentést képvisel egy edzőnek. "Összes, ami egy professzionális stúdió weboldalához kell" pedig mindent jelent. Írja le a csomagleírásokat az ügyfele nyelvén.
:::

### 2. Lépés: Sablonválasztás

A csomag kiválasztása után az ügyfél választja ki az alapvető sablonját.

- Adjon hozzá egy **Template Selection** (Sablonválasztó) mezőt
- Az elérhető sablonok szűrődnek a kiválasztott csomag alapján (ez a 5. Bölomban készült elállítás)
- Minden sablonnak előnézeti képet kell mutatnia, amely egy fitness-specifikus dizájnt mutat.

### 3. Lépés: Fiók Létrehozása

Tartsa ezt minimalista. Csak gyűjtse be:

- E-mail címet
- Jelszót
- Stúdió/vállalkozás nevét (ez lesz az oldal neve)

Ne kérjen olyan információkért, amire a regisztrációkor nem van szüksége. Minden extra mező csökkenti a konverziót.

### 4. Lépés: Oldaltartalom Beállítása

- **Site title** (Oldal címe): Töltse ki előre a 3. Lépésben megadott stúdió név alapján
- **Site URL** (Oldal URL-je): Önállóan generálja a stúdió név alapján (pl. `ironworks.fitsite.com`)

### 5. Lépés: Fizetés

- Adja hozzá a **Payment** (Fizetés) mezőt
- Konfigurálja a fizetési gateway-ét ([Stripe](/user-guide/payment-gateways/stripe) ajánlott előfizetési számlázáshoz)
- Ha 5. Bölomban hozott létre rendelési kiegészítőket (order bumps), adja hozzá egy **Order Bump** mezőt a fizetési lépés előtt

### 6. Lépés: Megerősítés

- Testreszabja a megerősítő üzenetet fitness-specifikus nyelven
- Példa: "A fitness stúdió weboldalát létrehozzuk. Néhány másodpercre továbbítja az új oldalára."

## Időszak Kiválasztó Kapcsoló Hozzáadása

Ha csomagjaihoz árkülönbségeket (havonként vs. évente) állított, adjon hozzá egy **Period Selection** (Időszak Kiválasztó) mezőt a checkout űrlaphoz, hogy az ügyfelek át tudjanak kapcsolni a számlázási időszakok között. Látogasson el [Checkout Forms](/user-guide/configuration/checkout-forms#adding-a-period-selection-toggle) a részletes utasításokhoz.

## Fizetési Konfiguráció

Ha még nem állított fel fizetési gateway-t:

1. Navigáljon az **Ultimate Multisite > Settings > Payment Gateways** menüpontra
2. Kövesse az [Stripe setup guide](/user-guide/payment-gateways/stripe) vagy az Ön által preferált gateway útmutatóját
3. Tesztelje egy teljes checkout folyamatot egy tesztfizetéssel

Látogasson el [Getting Paid](/user-guide/payment-gateways/getting-paid) a részletekért arról, hogyan érkezik a fizetés az Ön számlájára.

## A Folyamat Tesztelése

Mielőtt tovább haladna, végezzen el egy teljes teszt regisztrációt:

1. Nyitssa meg a checkout űrlapot egy incognito/privát böngészőablakban
2. Válasszon ki egy csomagot
3. Válasszon ki egy sablont
4. Létrehoz egy fiókot
5. Végezze el a fizetést (használja a tesztmódot)
6. Ellenőrizze, hogy az oldal helyesen lett létrehozva a kiválasztott sablónak

Ellenőrizze, hogy:

- [ ] A csomagleírások világosak és niche-specifikusak
- [ ] A sablonelőnézetek fitness-megfelelő dizájnt mutatnak
- [ ] Az oldal URL-je helyesen generálódik a stúdió név alapján
- [ ] A fizetés sikeresen feldolgozódik
- [ ] Az ügyfél egy működő oldalra érkezik a kiválasztott sablónak
- [ ] A megerősítő e-mailküldemények fitness-specifikus nyelvet használnak

## A FitSite Hálózatáig

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured)
├── Hosting with wildcard SSL + domain mapping
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow
│   ├── Plan selection with niche-specific descriptions
│   ├── Template selection with fitness previews
│   ├── Minimal account creation
│   ├── Payment via Stripe
│   └── Fitness-specific confirmation
└── Ready for branding (next lesson)
```

## Amit Építettünk E Bölomban

- **Egy több lépésből álló checkout űrlapot**, amelyet a fitness stúdió tulajdonosok számára szabtunk
- **Niche-specifikus nyelvet** az egész regisztrációs folyamaton keresztül
- **Minimal friktiont** – csak az alapvető mezők, gyors út egy működő oldalig
- **Fizetési integrációt** tesztelési ellenőrzéssel
- **Egy tesztelt end-to-end folyamatot** a csomagválasztástól a működő oldalig

---

**Következő:** [7. Bölöm: Tevézéséggel](lesson-7-branding) – a platformot white-label-eljük, és a FitSite-ot egy márkává alakítjuk.
