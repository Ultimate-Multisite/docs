---
title: Migracija į trečias pusę režimą
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Migracija do tryktojinio režimo (Third-Party Mode)

Superdav AI Agent v1.12.0 keičia, kaip tryktojiniai galimybes bus valdomi. **Tryktojiniai režimas dabar beprastai nustatytas į "auto",** leidžiant integraciją su nativiumu WordPress Abilities API versijose 7.0+ be reikalinga manulinkos konfigūracijos.

## Ką keičiasi?

### Prieš v1.12.0

Tryktojiniai galimybės reikalavo manuloje konfigūracijoje:

- Reikėte nurodyti "tryktojinio režimo" įjungimą
- Galimybės buvo įkeltos iš pritaikytų registras (custom registry)
- Integracija su WordPress Abilities API buvo jokių
- Senas režimas buvo beprastai

### Po v1.12.0

Tryktojiniai galimybės veikia automatiškai:

- Tryktojinio režimas beprastai nustatytas į "auto"
- Galimybės integruojasi nativiumu su WordPress Abilities API
- Be reikalinga manuloje konfigūracijos versijose 7.0+
- Senas režimas vis dar yra prieinamas seniausiems WordPress versijoms

## Kur tai reiškia?

### Nauji įkėlimai (WordPress 7.0+)

**Nėra reikalinga veikla.** Tryktojinio režimas automatiškai nustatytas į "auto", ir galimybės veikia be problemų.

### Eksistojanti įkėlimai

**Jūsų nustatymai bus išlaikomi.** Jei naudojote:

- **Seną režimą (Legacy mode)**: Jūs liksite sename režime (nėra keičiamojo)
- **Manulį tryktojinio režimą**: Jūs liksite manuloje režime (nėra keičiamojo)
- **Auto režimą**: Jūs tęsite naudojant auto režimą (nėra keičiamojo)

### WordPress versijos prieš 7.0

**Senas režimas vis dar yra prieinamas.** Jei naudojate WordPress 6.x arba vėles:

- Tryktojinio režimas beprastai nustatytas į "legacy"
- Galite manuliai įjungti tryktojinį režimą, jei norite
- Pakeiskite į WordPress 7.0+ naudoti nativių Abilities API

## Režimų supratimas

### Auto režimas (Naujas beprastasis)

**Auto režimas** naudoja nativių WordPress Abilities API integraciją:

- Galimybės registruojamos per WordPress hooks
- Pilna suderinamumas su WordPress 7.0+ Abilities API
- Automatinis atidavimas tryktojiniais galimybėmis
- Be reikalinga manuloje konfigūracijos

**Kada naudoti**: WordPress 7.0+ su trečiosiomis pusės įgalinimo (third-party) galimybėmis

### Manuelis režimas

**Manuelis režimas** reikalauja nurodyti nustatymus:

- Nurodoma, kurias trečiaspusės įgalinimo galimybės įkrauti
- Naudojamas testowaniu ar pasirinkti galimybių įkrovimui
- Reikalauja redaguoti konfigūracijos failus
- Dar daugiau kontrolės, bet daugiau nustatymų

**Kada naudoti**: Testavimui, pasirinkti galimybių įkrovimui ar pritaikyti kustomizuotus nustatymus

### Senas režimas (Legacy Mode)

**Senas režimas** naudoja seną sistemą trečios pusės įgalinimo:

- Kustomis galimybių registras (ne WordPress Abilities API)
- Atgaliojui su senesniais WordPress versijomis tinkamas
- Nėra natūralios WordPress integracijos
- Deprecipuotas, bet vis dar palaikomas

**Kada naudoti**: WordPress 6.x arba vėliau, arba kai jums reikia atgaliojos ypatybėms

## Patikrinti dabartinį režimą

### Per admin panelį

1. Eikite į **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Paieškite nustatymą **Third-Party Mode** (Trečios pusės režimas)
3. Prieš jums rodomos dabartinis režimas ir pasirinkti ją pakeisti opsijos

### Per kodą

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' arba 'legacy'
```

## Pakeitimas režimo

### Pakeiti į Auto režimą (Auto Mode)

Jei naudojate WordPress 7.0+ ir norite naudoti auto režimą:

1. Eikite į **Superdav AI Agent** → **Settings**
2. Paieškite **Third-Party Mode**
3. Pasirinkite **Auto (WordPress Abilities API)**
4. Spauskite **Save** (Išsaugoti)

Superdav AI Agent automatiškai atsiranda ir registruoja trečiaspusės įgalinimo galimybes.

### Pakeiti į Manuelį režimą (Manual Mode)

Jei norite manuliai kontroliuoti, kurios galimybės įkraunamos:

1. Eikite į **Superdav AI Agent** → **Settings**
2. Paieškite **Third-Party Mode**
3. Pasirinkite **Manual** (Manuelis)
4. Spauskite **Save** (Išsaugoti)
5. Redaguokite savo konfigūracijos failą, nurodant, kurias galimybes įkrauti

### Pakeiti į Seną režimą (Legacy Mode)

Jei jums reikia atgaliojos ypatybėms:

1. Eikite **Superdav AI Agent** → **Settings**
2. Raskite **Third-Party Mode**
3. Pasirinkite **Legacy**
4. Spauskite **Save**

## Auto Mode Pranašumai

### Automatinis atidavimas

Galiybės automatiškai atsiranda iš:

- Įdiegto pluginų
- Aktyvumo temo
- Būtinių pluginų
- Drop-in pluginų

Nėra reikalinga manulinkti registracija.

### Natūralus integruojimas

Galiybės integruojasi su WordPress Abilities API:

- Taipai kaip ir vidinis WordPress core
- Veikia su WordPress adminu
- Sujungta su kitais pluginais, naudojant Abilities API
- Bus tinkamas ateitymai, kai WordPress keičiasi

### Paprastas valdymo režimas

- Nėra redaguoti konfigūracijos failų
- Nėra manulinkti galiybę registruoti
- Kontrolės galiybiui (Ability Visibility) veikia automatiškai
- Adminu pranešimai informuos apie neapibrėžtas gailybės

### Geros veikimo rezultatai

- Galiybės yra keičiamas (cached)
- Laikiai įkeliamos pagal reikalavimą (lazy-loaded on demand)
- Optimizuotas WordPress 7.0+ versijoms ir vėliau

### Mano my prita specialios ne rodoj

- Patikrinkite, ar jūsų įdiegti per WordPress hookus
- Patikrinkite, kad jie teisingai implementauja Abilities API
- Peržiūrėkite WordPress klaidos logus (error logs)
- Naudokite **Ability Visibility** admin puslapį, kad pamatytumėte visus įregistruotus specialios

### Manau „nepategorizuotos specialios“ pranešimus

- Tai normalu naujiems trečiosioms specialioms.
- Peržiūrėkite ir kategorizuokite juos admin pranešimu.
- Pamatykite **Ability Visibility** daugiau informacijos apie kategorizavimą.

## Atgaliojimo padidėjimas (Backward Compatibility)

### Eksistantai konfigūracijos

Jei turite jau turiant trečios šalys specialių konfigūracijų:

- **Legacy mode**: Jūsų konfigūracija vis dar veiks
- **Manual mode**: Jūsų konfigūracija vis dar veiks
- **Auto mode**: Jūsų konfigūracija bus ignoruota (auto mode priverčia)

Kad išlaikytumėte savo specialią konfigūraciją, likite Manual ar Legacy mode.

### Deprecierimo laikas

- **v1.12.0**: Legacy ir Manual mode vis dar yra visiškai palaikomi
- **v1.13.0+**: Legacy mode gali rodyti deprecierimo pranešimus
- **v2.0.0**: Legacy mode gali būti pašalintas (nurodoma)

## Geriaus praktikos

### Naujiems įdiegti sistemoms

- Naudokite Auto mode (tai yra standartas)
- Leiskite Superdav AI Agentui automatiškai atradyti specialias
- Naudokite Ability Visibility, kad kontrolėtumėte prieigą

### Eksistantai įdiegti sistemoms

- Jei galite, atnaujinkite iki WordPress 7.0+
- Pasirinkite Auto mode paprastesniam vadovavimui
- Peržiūrėkite ir kategorizuokite specialias naudojant Ability Visibility

### Specialioms

- Įregistruokite specialias per WordPress hookus (Abilities API)
- Visiškai vengite naudoti özelų specialių registravimo sistemų
- Pat testuokite su WordPress 7.0+ Auto mode

## Naujose veiksmose

1. **Patikrinkite savo WordPress versiją**: Patikrinkite, kad naudojate 7.0+ (arba naujesnę) versiją, jei norite naudoti Auto režimą.
2. **Peržiūrėkite savo trečios šalies režimą**: Eikite „Settings“ (Parametrai) ir patikrinkite, koks jūsų dabartinis režimas yra.
3. **Atnaujinkite, jei reikia**: Jei naudojate WordPress 7.0+ versiją, pasrivalokite Auto režimu.
4. **Klasifikuokite galimybes**: Peržiūrėkite ir klasifikuokite neklasifikuidas galimybes.
5. **Patestinkite**: Patikrinkite, ar jūsų trečios šalies galimybės veikia tinkamai.

## Susiję temai

- **Galimybių matomybė (Ability Visibility)**: Kontroliuojate, kurioje vietoje kokie galimybės yra pamatomi.
- **WordPress Abilities API**: Sužinokite apie natūralią WordPress galimybių registravimą.
- **Trečios šalies galimybių vystymas (Third-Party Ability Development)**: Sukurkite galimybes, kurios veikia su Auto režimu.
