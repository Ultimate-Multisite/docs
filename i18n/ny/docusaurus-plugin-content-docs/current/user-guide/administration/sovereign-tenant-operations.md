---
title: Operes yaMene M'moyo Wopulimbe
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Kuwamba kwa Operesheni ya Wajenzi wa Uhuru (Sovereign Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 imeweka zana za utendaji kwa ajili ya wajenzi wa uhuru (sovereign tenants): subsites ambazo zinakimbia na database yake, mizizi ya mfumo wa faili (filesystem root), na muktadha wa routing wake wenyewe huku zikibaki wazi kwa msimamizi wa mtandao.

Tumia ukurasa huu wakati unashughulikia maeneo ya wateja yaliyopigwa mgawanyiko, uhamisho wa maeneo ya mbali (remote-site handoffs), au migrations zinazohamia subsite ya kawaida kwenda kwenye miundo ya uhuru (sovereign infrastructure).

## Mabadiliko yanayotokea kwa wasimamizi (What changes for administrators) {#what-changes-for-administrators}

- **Stateless tenant autologin** — Wasimamizi wa mtandao wanaweza kuwakaribia mteja wa uhuru bila kutegemea hali ya session iliyohifadhiwa kwa muda mrefu. Token la SSO lina lengo maalum, limefungwa kwenye asili (origin-pinned), limefungwa dhidi ya kurudia (replay-protected), na limefungwa kwenye kipindi kifupi cha kuisha.
- **Sovereign-aware routing** — Mitandao iliyopigwa mgawanyiko ya zamani na wajenzi wa uhuru vinatambua kupitia njia ile ile ya router ya eneo la tovuti (site router path), ikupunguza tofauti za kuanzisha upya kati ya miundo ya zamani na mapya yaliyopigwa mgawanyiko.
- **Verified migration state** — Uthibitishaji wa migration unachunguza utoaji wa mtumiaji (user provisioning), ruhusa za mwandishi wa database (database writer permissions), hali ya kuisha queue (queue drain status), na kutokuwepo kwa meza la zamani kabla ya kuitambua kama imekamilika.
- **Safer teardown** — Kuondoa (teardown) kwa wajenzi wa uhuru sasa huondoa utambulisho wa mteja kwa njia safi ili miundo iliyofutwa isibaki na upatikanaji wa database uliokwisha muda.

## Kuingia kwenye mteja wa uhuru (Visiting a sovereign tenant) {#visiting-a-sovereign-tenant}

1. Fungua **Network Admin > Ultimate Multisite > Sites**.
2. Chagua mteja wa uhuru.
3. Tumia **Visit (SSO)** wakati inapo wako, badala ya kunakili passwords au kuunda akaunti za admin za muda.

Mchakato wa kuwakaribia unaunda token la kuingia kwa muda mfupi kwa mteja huo na hukumbusha tukio la SSO kwenye kumbukumbu ya ukaguzi (audit trail) ya mteja. Ikiwa kitufe hakifanyi kazi, zingatia kwamba domain ya mteja inatambua ufungaji unaotarajiwa na kwamba mteja anaweza kufikia endpoint la SSO la upande wa mtandao.

## Orodha ya ukaguzi kwa ajili ya shughuli za eneo la mbali (Remote-site operations checklist) {#remote-site-operations-checklist}

Kabla ya kubadilisha mteja wa uhuru au mteja wa eneo la mbali, thibitisha:

Kutenda ya mwezi (tenant domain) ikipita kwa host inayomiliki mfumo wa faili wa kutenda hiyo.
Host ya database ya kutenda inalingana na uunganishaji ulioanzishwa kwa usakinishaji huo.
Amri za uthibitisho wa uhamisho (migration verification commands) zinapita kwa kutenda hiyo.
Async migration queues zimefuta kabla ya kufanya mabadiliko ya DNS au umiliki.
Mtendaji wa kutenda (tenant admin user) alipangwa wakati wa uhamisho na anaweza kuingia kupitia SSO.

## Kufuta watendaji wa kibaya (Deleting sovereign tenants) {#deleting-sovereign-tenants}

Kufuta mtendaji wa kibaya ni jambo linaloharibu. Thibitisha hali ya backup na export kwanza, kisha futa kutoka kwenye skrini ya usimamizi wa tovuti (site management screen). Mchakato wa kuondoa 1.2.0 unatoa sifa za database za kutenda kama sehemu ya kusafisha, lakini wasimamizi bado wanapaswa kuthibitisha kwamba watumiaji wa database na folda kwenye host zimeondolewa wakati wanatumia paneli za hosting nje.

:::warning
Usifute mtendaji wa kibaya wakati uthibitisho wa uhamisho bado unafanya kazi au wakati kazi za async push zinapangwa. Subiri uthibitisho kukamilika ili kuondoa usafishaji usiongeze sifa zinazohitajika na kazi zinazotarajiwa (pending jobs).
:::
