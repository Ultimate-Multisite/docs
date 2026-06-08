---
title: 'Öségnapok 7: A saját stílusod kialakítása'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# 7. Lesson: Ahhoz, hogy a sajátjuknak érezhető legyen

A vásárlóknak soha nem szabad úgy érezniük, mintha "valami WordPress plugin-ot" használnának. Úgy kell érezniük, mintha a FitSite-ot használnák – egy platformot, amelyet az ő iparájukra építettünk. Ez a lecke a márkázásra, a fehér címkézésre (white-labeling) és arra, hogy a platform egy terméknek tűnjön.

## Hol voltam?

A FitSite rendelkezik egy működő fizetési folyamattal, amely a fitness stúdió tulajdonosokat a tervválasztástól egy élő oldalig viszi. Most pedig az egész élményt egy egységes, márkázott terméknek kell csinálni.

## Az Ön platform-domainje

Az Ön márkájának alapja a domainje. A FitSite esetén:

- **Fő domain**: `fitsite.com` (az Ön marketing oldalát és a hálózat gyökérpontját képezi)
- **Vásárlói oldalak**: `studionév.fitsite.com` (altdomainek)
- **Egyedi domainek**: A Growth és Pro csomaggal rendelkező vásárlók saját domainjukat tudják hozzárendelni.

### Domain beállítása

1. Regisztrálja a platform domainját.
2. Merítsen rá a hosting szolgáltatójára.
3. Konfigurálja a wildcard DNS-t (`*.fitsite.com`) a vásárlói altdomainekhez.
4. Győződjön meg róla, hogy aktív a wildcard SSL.

Részletes utasításokhoz lásd a [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) című cikket.

## Az adminisztrációs felület fehér címkézése (White-Labeling)

Amikor egy fitness stúdió tulajdonosa belép az oldalának dashboard-ja vào, nem a WordPress vagy Ultimate Multisite márkáját, hanem az Ön márkáját kell látnia.

### Saját bejelentkezési oldal

Egyedi beállításokkal láthatóvá teheti a WordPress bejelentkezési oldalt, hogy megjelenjen:

- Az Ön FitSite logója
- Fitness-hez illő háttérképek
- Az Ön márkavonalainak színei

### Dashboard márkázása

Használja az [Admin Page Creator](/addons/admin-page-creator) addon-t vagy egyedi CSS-t, hogy:

- Felülírja a WordPress logóját az Ön FitSite logójával.
- Testreszabja az adminisztrációs színschemet, hogy illeszkedjen a márkájához.
- Egyedi dashboard widget-et ad hozzá, amely fitness-specifikus gyorslinkeket és segítségnyújtási forrásokat tartalmaz.

### Egyedi adminisztrációs oldalak

Fontos megfontolni, hogy létrehozzon egyedi adminisztrációs oldalakat, amelyek kiemelik a fitness stúdió tulajdonosok számára legrelevánsabb műveleteket:

- "Szerleszteni az órák menetrendjét"
- "Frissíteni a trénelő profilokat"
- "Megtekinteni az oldalat"

Ez csökkenti a tanulási görbét, mivel a niche-re releváns műveletek kerülnek előtérbe, nem sülnek el a standard WordPress menüpontok közé.

## A kommunikáció márkázása

Minden e-mail, számla és értesítésnek erősítenie kell az Ön márkáját.

### Rendszeres e-mailok

Navigáljon az **Ultimate Multisite > Settings > Emails** menüpontra, és testreszabassa az összes rendszer e-mailét:

- **Küldő neve**: FitSite
- **Küldő e-mail**: hello@fitsite.com
- **E-mail sablonok**: Használja a márkavonalainak színeit és logóját.
- **Nyelv**: Fitness-specifikus mindenhol.

Testreszabíthatók kulcsfontosságú e-mailek:

| E-mail | Általános változat | FitSite változat |
|-------|----------------|-----------------|
| Üdvözlő | "Az új oldala készen áll" | "Az Ön fitness stúdió weboldala online" |
| Fizetési értesítés | "Megjövünk a fizetést" | "FitSite előfizetési fizetése megerősítve" |
| Próbaidő lejárta | "Az Ön próbaideje hamarosan lejár" | "A FitSite próbaideje 3 nap múlva lejár – tartsa online a stúdió oldalát" |

### Számlák

Testreszabja a számlaeszabványokat az alábbiakkal:

- Az Ön FitSite logója és márkavonalainak színei
- Az Ön vállalkozási adatai
- Fitness-specifikus terméknevek (nem általános csomag ID-k)

## A vásárlóknak látható oldal

Az Ön fő domainje (`fitsite.com`) egy marketing oldalt igényel, amely eladja a platformot. Ez különálló a Ultimate Multisite hálózat adminisztrációjától – ez az Ön vállalkozásának nyilvános arca.

Kulcsfontosságú oldalak:

- **Főoldal**: Egyértelmű értékajánlat a fitness vállalkozások számára.
- **Funkciók**: Amit a FitSite csinál, fitness szempontból.
- **Árak**: Az Ön három csomagja, niche-specifikus funkciók összehasonlításával.
- **Példák**: Oldalak, amelyeket a platformon építenek.
- **Regisztráció**: Linkek a fizetési űrlapjához.

:::tip A marketing oldalát egy hálózati oldalként is hoz létre
Létrehozsa a marketing oldalát saját hálózatán belül. Ez lehetővé teszi, hogy ugyanazon a dashboard-on kezelje, és bemutatja saját platformjának képességeit.
:::

## Egyedi domain a vásárlóknak

Azoknak a vásárlóknak, akik olyan csomagot választottak, amelyhez egyedi domainet tartozik, tisztázza a folyamatot:

1. A vásárló regisztrálja vagy átírja domainját egy regisztrátorhoz.
2. A vásárló frissíti a DNS-t, hogy az Ön platformjára mutasson (adjék meg a pontos rekordokat).
3. Az Ultimate Multisite kezeli a domain mapping-et és az SSL-t.

Létrehozjon egy segítségnyújtási cikket vagy tudásbázis bejegyzést, amelyet kifejezetten a non-teknikai fitness stúdió tulajdonosok számára írtak.

## A FitSite hálózatának eddigi állapota

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## Amit építettünk ebben a leckében

- **Platform domain és DNS** beállítása egy márkázott élmény érdekében.
- **Fehér címkézelt adminisztráció** a FitSite márkájával mindenhol.
- **Testreszabott kommunikáció** – e-mailok, számlák és értesítések mind márkázottak.
- **Egy marketing oldal**, amely eladja a FitSite-ot a fitness stúdió tulajdonosoknak.
- **Egyedi domain dokumentáció** azok számára, akik saját domainjukat szeretnék.

---

**Következő:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) – megtervezzük azt az élményt, amely egy új regisztrációt aktív, boldog vásárlóvá alakít.
