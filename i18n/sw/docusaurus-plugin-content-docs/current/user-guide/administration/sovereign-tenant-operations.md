---
title: Operaciones za Mteja wa Uhuru
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Uendeshaji wa Wateja Wenye Uhakika (Sovereign Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 inafanya kazi kwa zana za uendeshaji kwa wateja wenye uhakika (sovereign tenants): subsites ambazo zinakimbia na database yake, mizizi ya mfumo wa faili (filesystem root), na muktadha wa routing wake wenyewe huku zikibaki wazi kwa msimamizi wa mtandao.

Tumia ukurasa huu unapooshawuru maundo ya wateja yaliyopigwa mgawanyiko, uhamisho wa sehemu za mbali (remote-site handoffs), au migrations zinazohamia subsite ya kawaida kwenye miundo ya uhakika (sovereign infrastructure).

## Mabadiliko yanayotokea kwa washiriki (administrators) {#what-changes-for-administrators}

- **Autologin ya wateja wasihi (Stateless tenant autologin)** — Simamizi wa mtandao wanaweza kuingia kwenye mteja wenye uhakika bila kutegemea hali ya session iliyodumu muda mrefu. Token la SSO lina upeo maalum, limefungwa kwa asili yake (origin-pinned), limefungwa dhidi ya kurudia (replay-protected), na limefafanuliwa kwa muda mfupi wa kuisha.
- **Routing wenye ufahamu wa uhakika (Sovereign-aware routing)** — Mitandao ya zamani iliyopigwa mgawanyiko na wateja wenye uhakika inafutwa kupitia njia ile ya router ya tovuti, ikupunguza tofauti za kuanzisha (bootstrap differences) kati ya miundo ya zamani na mapya yaliyopigwa mgawanyiko.
- **Hali iliyothibitishwa ya uhamisho (Verified migration state)** — Uthibitishaji wa uhamisho unachunguza utengenezaji wa mtumiaji, ruhusa za mwandishi wa database, hali ya kutolewa kwa queue (queue drain status), na kutokuwepo kwa meza la zamani kabla ya kuitikia kama imekamilika.
- **Kukata tamaa salama (Safer teardown)** — Kukata tamaa kwa mteja wenye uhakika sasa huondoa vyeti vya mteja wazi ili miundo iliyofutwa isibaki na upatikanaji wa database uliokwisha muda.

## Kutembelea mteja mwenye uhakika (Visiting a sovereign tenant) {#visiting-a-sovereign-tenant}

1. Fungua **Network Admin > Ultimate Multisite > Sites**.
2. Chagua mteja wenye uhakika.
3. Tumia **Visit (SSO)** pale inapo wako, badala ya kunakili maneno ya siri au kuunda akaunti za admin za muda.

Mchakato wa kutembelea huunda token la kuingia lililodumu kwa muda mfupi kwa mteja huyo na hukimbia tukio la SSO kwenye kumbukumbu ya uhakika (tenant audit trail). Ikiwa kitufe kina kushindwa, angalia kama domain ya mteja inafutwa kwenye usakinishaji unaotarajiwa na kama mteja anaweza kufikia kiungo cha mwisho (endpoint) cha SSO cha upande wa mtandao.

## Orodha ya ukaguzi la uendeshaji wa sehemu za mbali (Remote-site operations checklist) {#remote-site-operations-checklist}

Kabla ya kubadilisha mteja wenye uhakika au mteja wa sehemu ya mbali, thibitisha:

## Kufuku wa wateja unaowakilisha (Sovereign Tenants) {#deleting-sovereign-tenants}

Kufuta mteja unaowakilisha ni hatua inayoharibu data. Thibitisha kwanza hali ya hifadhi na ufuatishaji (backup and export status), kisha futa kutoka kwenye skrini ya usimamizi wa tovuti (site management screen). Mchakato wa kuondoa (teardown flow) wa 1.2.0 unafuta siri za database za mteja kama sehemu ya kusafisha, lakini wataalamu wa mfumo (administrators) wanapaswa bipa na kuhakikisha kwamba watumiaji wa database na folda kwenye seva (host-level database users and folders) zimeondolewa wakati unatumia paneli za hosting nje.

:::warning
Usifute mteja unaowakilisha wakati uthibitishaji wa kuhamishwa bado unaendelea au wakati kazi za kusukuma asynchroni (async push jobs) ziko kwenye orodha ya kusubiri. Subiri uthibitishaji kukamilika ili kufuta usiofanya uondoaji wa siri zinazohitajika na kazi zinazosubiri.
:::
