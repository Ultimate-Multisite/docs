---
title: Ngā Rārangi Kai Manaaki
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Ngā Tahua Manaaki {#hospitality-menus}

Mā te āhuatanga **Ngā Tahua Manaaki** e āhei ai a Theme Builder ki te waihanga me te tāmau i ngā whārangi tahua kai, inu hoki kua whakaraupapatia ki roto tonu i tō WordPress site.

## Tirohanga Whānui {#overview}

Ka taea ināianei e Theme Builder te waihanga whārangi tahua ngaio, kua whakaraupapatia mō ngā pakihi manaaki, tae atu ki ngā wharekai, ngā kawhe, ngā pāpara, me ngā ratonga whakarato kai. Kua tino whakaurua ēnei tahua ki te hoahoa o tō site, ā, he māmā te whakahou me te whakahaere.

## Ngā Momo Manaaki e Tautokona Ana {#supported-hospitality-types}

- **Ngā wharekai** — ngā tahua kai ratonga-katoa
- **Ngā kawhe** — ngā tahua kawhe me ngā kai māmā
- **Ngā pāpara me ngā rūma whakatā** — ngā tahua inu me ngā kai tīmatanga
- **Ngā whare parāoa** — ngā tahua keke parāoa me te parāoa
- **Ngā ratonga whakarato kai** — ngā kōwhiringa tahua kaupapa
- **Ngā taraka kai** — ngā tahua ratonga kai neke
- **Ngā whare pia me ngā whare waina** — ngā tahua inu me ngā whakaahuatanga

## Hanganga Tahua {#menu-structure}

### Ngā Kāwai Tahua {#menu-categories}

Ka whakaraupapatia ngā tahua ki ngā kāwai:

- **Ngā kai tīmatanga** — ngā kai whakataki me ngā pereti iti
- **Ngā kai matua** — ngā akoranga matua
- **Ngā kai āpiti** — ngā kai tāpiri me ngā huawhenua
- **Ngā kai reka** — ngā kai āmai reka
- **Ngā inu** — ngā inu (waipiro me te kore-waipiro)
- **Ngā mea motuhake** — ngā mea motuhake o ia rā, o ia kaupeka rānei

### Hōputu Tūemi Tahua {#menu-item-format}

Kei ia tūemi tahua:

```json
{
  "name": "Grilled Salmon",
  "description": "Fresh Atlantic salmon with lemon butter sauce",
  "price": "$24.95",
  "dietary_info": ["Gluten-Free", "High-Protein"],
  "allergens": ["Fish"],
  "availability": "Daily"
}
```

#### Ngā Āpure Tūemi {#item-fields}

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Ingoa rihi, inu rānei |
| `description` | string | Whakaahuatanga taipitopito o te tūemi |
| `price` | string | Utu (kua whakahōpututia me te moni) |
| `dietary_info` | array | Ngā āhuatanga kai (Vegan, Gluten-Free, me ētahi atu) |
| `allergens` | array | Ngā pāwera noa (nati, mātaitai, me ētahi atu) |
| `availability` | string | Te wā e wātea ana (ia rā, ā-kaupeka, me ētahi atu) |

## Te Waihanga Tahua Manaaki {#creating-hospitality-menus}

### Hipanga 1: Tukuna Ngā Mōhiohio Tahua {#step-1-provide-menu-information}

Kōrero atu ki Theme Builder mō tō tahua:

```
Waihangatia he tahua wharekai mō taku wharekai Itāriana me ngā kai tīmatanga,
ngā rihi parāoa rimurapa, ngā kai matua, me ngā kai reka. Whakaurua ngā utu me ngā whakaahuatanga.
```

### Hipanga 2: Ka Waihanga a Theme Builder i te Tahua {#step-2-theme-builder-generates-menu}

Ka mahia e Theme Builder:

1. Ka waihanga i tētahi whārangi tahua kua whakaraupapatia
2. Ka hoahoa kia ōrite ki te theme o tō site
3. Ka whakaraupapa i ngā tūemi ki roto i ngā kāwai
4. Ka whakahōputu i ngā utu me ngā whakaahuatanga
5. Ka tāpiri i ngā mōhiohio kai me ngā pāwera

### Hipanga 3: Arotake me te Whakarite {#step-3-review-and-customize}

Ka taea e koe:

1. Te whakatika i ngā tūemi tahua me ngā utu
2. Te tāpiri, te tango rānei i ngā kāwai
3. Te whakaraupapa anō i ngā tūemi i roto i ngā kāwai
4. Te whakahou i ngā whakaahuatanga me ngā mōhiohio kai
5. Te whakarite i te kāhua me te whakatakotoranga

## Ngā Kōwhiringa Whakaatu Tahua {#menu-display-options}

### Whārangi Tahua Katoa {#full-menu-page}

He whārangi motuhake e whakaatu ana i tō tahua katoa:

- Kua whakaraupapatia mā te kāwai
- Ka taea te rapu me te tātari
- He whakatakotoranga pai mō te tā
- He hoahoa urupare-pūkoro

### Widget Tahua {#menu-widget}

Tāmaua ngā wāhanga tahua ki ētahi atu whārangi:

- Ngā tūemi kua tohua ki te whārangi kāinga
- Ngā mea motuhake o ia rā ki te paetaha
- Tahua inu ki te whārangi pāpara
- Whakaaturanga kai reka ki te hiku

### PDF Tahua {#menu-pdf}

Waihangatia he tahua PDF ka taea te tikiake:

- Whakahōputu ngaio
- Kounga rite mō te tā
- Kei roto ngā atahanga me ngā whakaahuatanga
- He māmā te tiri me te īmēra

## Ngā Mōhiohio Kai me ngā Pāwera {#dietary-and-allergen-information}

### Ngā Āhuatanga Kai {#dietary-attributes}

Tohua ngā tūemi ki ngā mōhiohio kai:

- **Vegan** — kāore he hua kararehe
- **Vegetarian** — kāore he mīti
- **Gluten-Free** — he haumaru mō te mate celiac
- **Dairy-Free** — kāore he hua miraka
- **Nut-Free** — kāore he nati rākau, he pīnati rānei
- **Low-Carb** — kua whakaitihia ngā warowaihā
- **High-Protein** — he nui te pūmua

### Ngā Whakatūpato Pāwera {#allergen-warnings}

Whakaurua ngā pāwera noa:

- **Ngā nati** — ngā nati rākau me ngā pīnati
- **Ngā mātaitai** — ngā kōurapaka me ngā ngata moana
- **Ngā ika** — ngā momo ika katoa
- **Ngā hua miraka** — te miraka me ngā hua miraka
- **Ngā hēki** — ngā hēki heihei
- **Soy** — ngā hua soy
- **Gluten** — te wīti me ngā kākano kei roto te gluten
- **Hēhami** — ngā kākano hēhami me te hinu

## Whakahaere Tahua {#menu-management}

### Te Whakahou Utu {#updating-prices}

Whakahoungia ngā utu tahua me te māmā:

1. Haere ki te whārangi tahua
2. Pāwhiritia "Whakatika Tahua"
3. Whakahoungia ngā utu mō ngā tūemi
4. Tiakina ngā panonitanga
5. Ka puta tonutia ngā panonitanga ki tō site

### Te Tāpiri Tūemi Ā-kaupeka {#adding-seasonal-items}

Waihangatia ngā rerekētanga tahua ā-kaupeka:

1. Waihangatia he putanga tahua hou
2. Tāpiritia ngā tūemi ā-kaupeka
3. Tohua ngā tūemi hei "Ā-kaupeka"
4. Whakaritea ngā rā wātea
5. Whakaaturia aunoa i te wā o te kaupeka

### Te Whakahaere i Ngā Mea Motuhake {#managing-specials}

Whakaaturia ngā mea motuhake o ia rā, o ia wiki rānei:

1. Waihangatia he kāwai "Ngā Mea Motuhake"
2. Tāpiritia ngā tūemi me ngā rā wātea
3. Whakamiramiratia ngā mea motuhake ki te whārangi kāinga
4. Whakahoungia ia rā, ia wiki rānei
5. Purangatia ngā mea motuhake tawhito

## Whakaurunga ki Theme Builder {#integration-with-theme-builder}

Ina whakamahi i Theme Builder mō ngā site manaaki:

1. **Rapunga tahua aunoa** — ka tautuhi mēnā he pakihi kai/inu koe
2. **Waihanga whārangi tahua** — ka waihanga whārangi tahua ngaio
3. **Whakaōrite hoahoa** — ka ōrite ngā tahua ki te theme o tō site
4. **Arotau pūkoro** — ka ātaahua te whakaatu o ngā tahua ki ngā waea
5. **Arotau SEO** — he pai ngā tahua mō ngā pūkaha rapu

## Ngā Tikanga Pai {#best-practices}

### Hoahoa Tahua {#menu-design}

- **Whakaraupapatanga mārama** — he hanganga kāwai arorau
- **Whakaahuatanga pānui-ngāwari** — he whakahihiri hiakai, he whakamōhio hoki
- **Utu ōrite** — he moni me te whakahōputu mārama
- **Whakaahua ngaio** — ngā atahanga kai kounga-nui
- **Mokowā mā** — kaua e whakakī rawa i te whārangi

### Ihirangi {#content}

- **Whakaahuatanga tika** — whakaahuahia tika ngā tūemi
- **Whakamiramiratia ngā mea motuhake** — kia tū motuhake ngā mea motuhake
- **Whakaurua ngā pāwera** — rārangihia ngā pāwera i ngā wā katoa
- **Whakahou auau** — kia hou tonu ngā utu me ngā tūemi
- **Whakamahia te reo whakaoho hiakai** — kia reka te āhua o ngā tūemi

### Urunga {#accessibility}

- **Momotuhi pānui-ngāwari** — whakamahia ngā momo pū mārama, pānui-ngāwari
- **Rerekētanga tae rawaka** — whakaritea kia pānui-ngāwari te kuputuhi
- **Tapanga kai** — tohua mārama ngā kōwhiringa kai
- **Whakatūpato pāwera** — whakaaturia ngā pāwera kia kitea nuitia
- **Pai mō te pūkoro** — whakamātauria ki ngā pūrere katoa

## Ngā Tauira {#examples}

### Hanganga Tahua Wharekai {#restaurant-menu-structure}

```
Kai whakaohooho
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Huamata Caprese

Rīhi rimurapa
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Kai matua
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Purini
├── Tiramisu
├── Panna Cotta
└── Kōwhiringa Gelato
```

### Hanganga Tahua Wharekawhe {#cafe-menu-structure}

```
Kawhe
├── Espresso
├── Cappuccino
└── Latte

Pōhā
├── Croissants
├── Muffins
└── Scones

Hanawiti
├── Caprese Panini
├── Karapu Korukoru Paoa
└── Tākai Huawhenua
```

## Āhuatanga e Hāngai ana {#related-features}

- [Waihanga Tahua](../abilities/create-menu.md) — waihanga tahua whakatere
- [Aronga Hoahoa](./design-direction.md) — whakaritea te hoahoa o tō pae
- [Uiuitanga Tūhuratanga](./discovery-interview.md) — whakamaheretia te hanganga o tō pae
