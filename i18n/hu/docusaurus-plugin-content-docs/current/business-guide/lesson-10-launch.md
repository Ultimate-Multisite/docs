---
title: 'Összhang 10: Indítási nap'
sidebar_position: 11
_i18n_hash: 49ba467b8efba57e92cf072bcec53969
---
# 10. Lesson: Az elindítás napja

Mindent felépítettünk. Mielőtt megnyitnákuk az ajtókat, ez a lesson áttekinti az elindítás előtti ellenőrzőlistát, hogy biztos benne, hogy semmi sem törött, hiányzik vagy szégyenemes.

## Hol voltamek?

A FitSite rendelkezik sablonokkal, tervlerle, checkout folyamattal, brandinggel, onboarding-jal és árazással. Most ellenőrizzük, hogy minden működik-e, és elindítjuk a szolgáltatást.

## Elindítás előtti ellenőrzőlista

Állítsd át minden pontot. Ne hagyj ki semmit.

### Platform infrastruktúra

- [ ] A hosting stabil és jól teljesít terhelés alatt
- [ ] Aktív a Wildcard SSL, és minden aldomain HTTPS-en keresztül elérhető
- [ ] Működik a domain mapping – tesztelj egy oldal létrehozását és egy custom domain hozzárendelését
- [ ] Beállítottak és tesztelték a backupokat (legalább egyet helyreállítva ellenőrzés céljából)
- [ ] Megvan a monitoring – tudnod kell, ha a platform leáll

### Sablonok

- [ ] Mindhárom sablon helyesen töltődik be az új oldalakon
- [ ] A placeholder tartalom hasznos és hibátlan
- [ ] Minden kép megfelelően licencelt (nincs stock photo vízjele)
- [ ] Működik a mobile responsiveness minden sablonoldalon
- [ ] Elfogadható az oldal betöltési sebessége (tesztelj egy olyan eszközzel, mint GTmetrix vagy PageSpeed Insights)
- [ ] Nincs törött link vagy hiányzó asset semhangi sablonon

### Tervletek és termékek

- [ ] Mindhárom terv aktív és látható
- [ ] A tervleírások pontosak és a szegmenshez igazítottak
- [ ] A belépőárok helyesek (havi és éves)
- [ ] A setup díjak a megfelelő terveken vannak beállítva
- [ ] A próbaidő működik a Starter terven
- [ ] Az order bump-ok helyesen jelennek meg a checkout során
- [ ] A plugin és theme korlátozásai helyesen kerülnek végrehajtásra minden terv szerint

### Checkout folyamat

- [ ] Teljes teszt regisztrációt végeznél minden terven (használj teszt fizetési módot)
- [ ] A sablonválasztás megmutatja a megfelelő sablonokat minden tervhez
- [ ] Sikeresen feldolgozik a fizetés
- [ ] A kunde welcome e-mail-et kap regisztráció után
- [ ] Az új oldal helyesen létrehozódik a megfelelő sablónak
- [ ] A kunde azonnal beléphet az új oldalára
- [ ] A kedvezménykódok helyesen működnek

### Branding

- [ ] A login oldal FitSite branding-jával mutatkozik
- [ ] Az Admin dashboard FitSite branding-jával mutatkozik
- [ ] Minden rendszer e-mail FitSite branding-jával és fitness-specifikus nyelven használja
- [ ] A számlák helyesen jelennek meg a vállalkozás adataiddal
- [ ] A marketing oldal online és linkel a checkout formhoz

### Onboarding

- [ ] A Quick Start widget megjelenik az új kunde dashboard-jain
- [ ] Minden Quick Start link a megfelelő oldalra mutat
- [ ] A welcome e-mail sorozat beállítva és tesztelve van
- [ ] A Knowledge base cikkek publikáltak és elérhetőek
- [ ] Az Account page megmutatja a megfelelő tervinformációkat és az upgrade lehetőségeket

### Jogi és üzleti

- [ ] A szolgáltatási feltételek publikáltak és linkelhetők a checkout-ból
- [ ] A adatvédelmi szabályzat publikált és elérhető
- [ ] A visszatérítési szabályzat meghatározva és dokumentálva
- [ ] A vállalkozás beállítva a fizetések fogadására
- [ ] A Payment gateway élő (live) módban van (nem teszt módban)
- [ ] Az adókonfiguráció helyes az illetékes joghatóságod szerint

## Soft Launch vs. Hard Launch

Fontos, hogy két fázisú elindítást düşünj:

### 1. Fázis: Soft Launch

Írd be 5-10 fitness stúdió tulajdonost, hogy regisztráljanak a nyilvános elindítás előtt. Ezek a beta kundeid. Ajánlott egy jelentős kedvezményt (életre szóló 50% kedvezmény, vagy 3 hónap ingyen) cseréjében, hogy:

- Egy őszinte visszajelzést kapj a regisztrációs és onboarding élményről
- Engedélyt kapj a weboldaluk használatára mint kiállítási példaképpen
- Jelentkezz bármilyen hibáról vagy problémáról, amivel találkoznak

Ez neked valódi kunde visszajelzést és élő oldalt ad a nyilvánosság előtt, mielőtt megnyitnád.

### 2. Fázis: Public Launch

Miután beépítettél a soft launch visszajelzéseit:

- Állítsd át a payment gateway-t élő (live) módból
- Publikáld a marketing oldalat
- Kezdj a kunde megszerzésével (11. Lesson)
- Közöld a releváns fitness iparági csatornákokon

## Az elindítás napján végrehajtandó lépések

Aznap, amikor nyilvánosok:

1. **Állítsd át az élő fizetésekre** – kapcsold ki a teszt módot a payment gateway-edről
2. **Ellenőrizd még egyszer** – végezz egy teljes teszt regisztrációt valódi fizetéssel (utalásd vissza magadnak utána)
3. **Követődés** – figyelj hibákra, sikertelen regisztrációkra vagy fizetési problémákra
4. **Készülj rendelkezésre** – az első valódi kundeid segítséget igényelhet, és a gyors válasz a bizalmat építi
5. **Ünnepelj rövid ideig** – majd térj vissza az munkádhoz

## Mit lehet rosszra?

Készülj felre:

- **Payment gateway problémák**: Készítsd fel a gateway szolgáltatójának ügyfélszolgálatának adatait
- **SSL tanúsítvány problémák**: Tudnod kell, hogyan ellenőrizni és megújítani a tanúsítványokat
- **E-mail kézbesítési sikertelenségek**: Teszteld, hogy az e-mail-ek tényleg megérkeznek-e (ellenőrizd a spam mappát)
- **Teljesítmény terhelés alatt**: Ha forgalmi csúcspontot tapasztalsz, tudnod kell, hogyan növelheted a hostinged kapacitását
- **Kunde zavar**: Készítsd fel a knowledge base-edet és az ügyfélszolgálati csatornáidat

## A FitSite hálózata eddig

```
FitSite Network
├── WordPress Multisite (subdomain mode) ✓
├── Ultimate Multisite (configured + branded) ✓
├── Platform Domain (fitsite.com + wildcard SSL) ✓
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain) ✓
├── Products (Starter, Growth, Pro + Order Bumps + Discounts) ✓
├── Checkout Flow (tested end-to-end) ✓
├── Branding (complete) ✓
├── Customer Onboarding (Quick Start, emails, help resources) ✓
├── Pricing Strategy (annual, trials, setup fees, discounts) ✓
├── Pre-Launch Checklist (verified) ✓
├── Soft Launch (beta customers onboarded) ✓
└── LIVE ✓
```

## Mit építettünk ebben a lesson-ben

- **Egy átfogó elindítás előtti ellenőrzőlista**, amely lefedi az infrastruktúrát, tartalmat, fizetéseket és jogi kérdéseket
- **Egy soft launch stratégia**, hogy valódi visszajelzést kapj, mielőtt nyilvánosok leszel
- **Elindítási eljárások**, hogy bizalommal tudj elindítani
- **Egy tartalékterv** a gyakori elindítási napjain problémákra

---

**Következő:** [11. Lesson: A kunde keresése](lesson-11-customers) – most, hogy a FitSite online, hogyan szerzed be a fitness stúdió tulajdonosokat, hogy regisztráljanak?
