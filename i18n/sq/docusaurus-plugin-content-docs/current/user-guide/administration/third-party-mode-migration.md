---
title: Migrimi i Modit të Palës së Tretë
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migrimi në Modin e Palës së Tretë (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 ndryshon mënyrën si trajtohen aftësitë e palës së tretë. **Modi i palës së tretë tani fillon me "auto"**, duke lejuar integrimin nativ të WordPress Abilities API në WordPress 7.0+ pa nevojë për konfigurim manual.

## Çfarë Ndryshoi?

### Para v1.12.0

Aftësitë e palës së tretë kërkonin konfigurim manual:

- Duhet të aktivizonit shprehimisht "third-party mode"
- Aftësitë cargonin nga një regjistër i përshtatshëm (custom registry)
- Integrimi me WordPress Abilities API ishte opsional
- Moduleti i vjetër (legacy mode) ishte fillimi

### Pas v1.12.0

Aftësitë e palës së tretë funksionojnë automatikisht:

- Modi i palës së tretë fillon me "auto"
- Aftësitë integruen nativ me WordPress Abilities API
- Nuk ka nevojë për konfigurim manual në WordPress 7.0+
- Moduleti i vjetër (legacy mode) është ende i disponueshëm për versionet më të vjetra të WordPress

## Kujt Ndryshon?

### Instalime të Reja (WordPress 7.0+)

**Nuk kërkohet asnjë veprim.** Moduleti i palës së tretë vendoset automatikisht në "auto", dhe aftësitë funksionojnë pa nevojë për ndonjë konfigurim.

### Instalime Ekzistuese

**Konfigurimet tuaja ruhen.** Nëse keni përdorur:

- **Moduleti i vjetër (Legacy mode)**: Ju mbetet në modulin e vjetër (nuk ka ndryshim)
- **Modi manual i palës së tretë**: Ju mbetet në modin manual (nuk ka ndryshim)
- **Modi auto**: Ju vazhdoni me modin auto (nuk ka ndryshim)

### Versionet e WordPress Para 7.0

**Moduleti i vjetër është ende i disponueshëm.** Nëse jeni në WordPress 6.x ose më të vjetër:

- Moduleti i palës së tretë fillon me "legacy"
- Ju mund ta aktivizoni manualisht modin e palës së tretë nëse dëshironi
- Përdorni përditësimin në WordPress 7.0+ për të përdorur Abilities API nativ

## Kuptimi i Modeve

### Modi Auto (Fillimi i Ri)

**Modi auto** përdor integrimin nativ të WordPress Abilities API:

- Aftësitë regjistrohen përmes hook-eve të WordPress
- Përputhshmëri e plotë me Abilities API të WordPress 7.0+
- Zbulim automatik i aftësive të palës së tretë
- Nuk ka nevojë për konfigurim manual

**Kur kur përdorimi**: WordPress 7.0+ me aftësi të treta

### Modi Manual

**Modi manual** kërkon konfigurim të saktë:

- Ti specifikon cilat aftësi të treta dëshiron të ngarkohen
- I dobishëm për testime ose ngarkim selektiv i aftësive
- Kërkon redaktimin e skedarëve të konfigurimit
- Kontroll më i madh, por me më shumë hap

**Kur përdoret**: Testime, ngarkim selektiv i aftësive ose konfigurime personalizuara

### Modi i Vjetër (Legacy Mode)

**Modi i vjetër** përdor sistemin e vjetër të aftësisë së treta:

- Regjistri i aftësisë i personalizuar (jo WordPress Abilities API)
- I përputhshëm me versionet më të vjetra të WordPress
- Pa integrim natyral me WordPress
- I mbyllur, por ende mbështetur

**Kur përdoret**: WordPress 6.x ose më i vjetër, ose kur keni nevojë për përputhshmëri të vjetër

## Kontrollimi i Modit Tuar

### Përmes Paneli Admin

1. Shkoni te **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Kërkoni cilësimin e **Third-Party Mode** (Modi i Treta)
3. Do të shihni modin tuaj aktual dhe opsione për ta ndryshuar

### Përmes Kodit

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', ose 'legacy'
```

## Ndryshimi i Modit Tuaj

### Shkoni te Modi Auto (Auto Mode)

Nëse jeni në WordPress 7.0+ dhe dëshironi të përdorni modin auto:

1. Shkoni te **Superdav AI Agent** → **Settings**
2. Gjeni **Third-Party Mode**
3. Zgjidhni **Auto (WordPress Abilities API)**
4. Klikoni **Save** (Ruaj)

Superdav AI Agent do të zbulojë dhe regjistrohet automatikisht aftësitë e treta.

### Shkoni te Modi Manual (Manual Mode)

Nëse dëshironi të kontrolloni manualisht cilat aftësi ngarkohen:

1. Shkoni te **Superdav AI Agent** → **Settings**
2. Gjeni **Third-Party Mode**
3. Zgjidhni **Manual**
4. Klikoni **Save** (Ruaj)
5. Redaktoni skedarin tuaj të konfigurimit për të specifikuar cilat aftësi dëshironi të ngarkoni

### Shkoni te Modi i Vjetër (Legacy Mode)

Nëse keni nevojë për përputhshmëri të vjetër:

1. Shko në **Superdav AI Agent** → **Settings**
2. Gjeni **Third-Party Mode** (Modi i Palës së Tretë)
3. Zgjidhni **Legacy** (Legacy)
4. Klikoni **Save** (Ruaj)

## Përfitimet e Modit Auto

### Zbulimi Automat

Aftësitë zbulohen automatikisht nga:

- Pluginët e instaluar
- Temat aktive
- Pluginët që duhet të përdoren (Must-use plugins)
- Pluginët drop-in

Nuk keni nevojë për regjistrim manual.

### Integrim Natyral

Aftësitë integruen me Abilities API të WordPress:

- I ngjashëm me kodin bazë të WordPress
- Funksionon me adminin e WordPress
- Kompatibil me pluginet e tjera që përdorin Abilities API
- Futurozues ndërsa WordPress zhvillohet

### Menaxhim i Thjeshtëzuar

- Nuk ka skedarë konfigurimi për të redaktuar
- Nuk ka regjistrim manual i aftësive (ability)
- Kontrollet e vizibilitetit të aftësive funksionojnë automatikisht
- Njoftimet e adminit ju informojnë për aftësitë e pafundamentuara

### Performancë më e Mirë

- Aftësitë karkuohen (cached)
- Karkohen në momentin që nevojiten (lazy-loaded on demand)
- Optimizuar për WordPress 7.0+

## Rruga e Migracionit

### Nëse jeni në WordPress 6.x

1. **Përditësoni në WordPress 7.0+** (kur jeni gati)
2. **Përditësoni Superdav AI Agent** në v1.12.0+
3. **Ndryshoni modin e palës së tretë në Auto** (opsionale; modu legacy ende funksionon)
4. **Kontrolloni vizibilitetin e aftësive** për të siguruar kontrollet e duhura të aksesit

### Nëse jeni në WordPress 7.0+

1. **Përditësoni Superdav AI Agent** në v1.12.0+
2. **Verifikoni që modifikimi i palës së tretë është i vendosur në Auto** (duhet të jetë kjo e paracaktuar)
3. **Kontrolloni vizibilitetin e aftësive** për të siguruar kontrollet e duhura të aksesit
4. **Testoni aftësitë e palës së tretë** për të konfirmuar se funksionojnë

## Zgjidhja e Problemeve (Troubleshooting)

### Aftësitë nuk po ngarkohen në modin auto

- Verifikoni që jeni në WordPress 7.0+
- Kontrolloni që modu i palës së tretë është i vendosur në "Auto"
- Verifikoni që pluginu që ofron aftësinë është aktiv
- Kontrolloni logjet e gabimeve të WordPress për gabime të regjistrimit

### Do të dua të ruaj modin legacy

- Shko në **Settings** → **Third-Party Mode**
- Zgjidhni **Legacy** (Legacy)
- Klikoni **Save** (Ruaj)
- Modu legacy do të vazhdojë të funksionoj

### Aftësi të mia personalizues nuk po shfaqen

- Kontrolloni nëse janë regjistruar përmes WordPress hooks
- Sigurohuni që ato implementojnë Abilities API si duhet
- Kontrolloni logjet e gabimeve të WordPress
- Përdorni faqen admin **Ability Visibility** për të parë të gjitha aftësitë e regjistruara

### Po marr "njoftime" për aftësi të klasifikuara si "unclassified ability" (aftësi të paktuar)

- Kjo është normale për aftësitë e para nga tretaja
- Kontrolloni dhe klasifikoni ato në njoftimin admini
- Shiko **Ability Visibility** për detaje mbi klasifikimin

## Kompatibiliteti i pasmarrjes (Backward Compatibility)

### Konfigurimet ekzistuese

Nëse keni konfigurime të aftësive e tretaja ekzistuese:

- **Legacy mode (Modi i vjetër)**: Konfigurimi juaj vazhdon të funksionojë
- **Manual mode (Modi manual)**: Konfigurimi juaj vazhdon të funksionojë
- **Auto mode (Modi automatik)**: Konfigurimi juaj ignoron (auto mode merr kontrollin)

Për të ruajtur konfigurimin tuaj personalizues, qëndroni në modin Manual ose Legacy.

### Veprimi i kohës së mbuositjes (Deprecation Timeline)

- **v1.12.0**: Modejt Legacy dhe Manual vazhdojnë të mbështesin plotë
- **v1.13.0+**: Modi Legacy mund të shfaq njoftime për mbuositje
- **v2.0.0**: Modi Legacy mund të hiqet (të përcaktohet)

## Beste Praktika

### Për instalime të reja

- Përdorni Auto mode (është default-i)
- Leni Agentin Superdav AI të zbulojë aftësitë automatikisht
- Përdorni Ability Visibility për të kontrolluar aksesin

### Për instalime ekzistuese

- Përdorni përditësimin në WordPress 7.0+ kur është e mundur
- Ndryshoni në Auto mode për menaxhim më të thjeshtë
- Kontrolloni dhe klasifikoni aftësitë duke përdorur Ability Visibility

### Për aftësitë personalizues

- Regjistroni aftësitë përmes WordPress hooks (Abilities API)
- Shmangni regjistrat e aftësive të personalizuara
- Testoni në WordPress 7.0+ me Auto mode

1. **Kontrolloni versionin e WordPress**: Sigurohu se je në 7.0+ për modin Auto
2. **Përshtatni modin tuaj të palënduar (third-party)**: Shko te Settings dhe kontrolloni modin tuaj aktual

3. **Përditëso nëse është e nevojshme**: Ndrysho në modin Auto nëse je në WordPress 7.0+
4. **Klasifiko aftësitë**: Kontrollo dhe klasifiko çdo aftësi që nuk është klasifikuar

5. **Testoni**: Verifiko se aftësitë tuaja të palënduara funksionojnë si duhet

## Topikë të lidhura

- **Vizibiliteti i aftësive (Ability Visibility)**: Kontrollo ku janë të ekspozuar aftësitë
- **WordPress Abilities API**: Mëso për regjistrimin natyral të aftësive në WordPress
- **Zhvillimi i aftësive të palëndura (Third-Party Ability Development)**: Krijoni aftësi që funksionojnë me modin Auto
