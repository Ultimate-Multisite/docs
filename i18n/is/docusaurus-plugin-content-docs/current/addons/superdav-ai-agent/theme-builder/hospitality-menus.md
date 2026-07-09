---
title: Matseðlar fyrir veitinga- og gistigeirann
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Hospitality matseðlar {#hospitality-menus}

**Hospitality matseðlar** eiginleikinn gerir Theme Builder kleift að búa til og fella inn skipulagðar matar- og drykkjarmatseðilssíður beint inn á WordPress vefinn þinn.

## Yfirlit {#overview}

Theme Builder getur nú búið til faglegar, skipulagðar matseðilssíður fyrir hospitality fyrirtæki, þar á meðal veitingastaði, kaffihús, bari og veisluþjónustur. Þessir matseðlar eru að fullu samþættir hönnun vefsins þíns og auðvelt er að uppfæra þá og stjórna þeim.

## Studdar tegundir hospitality {#supported-hospitality-types}

- **Veitingastaðir** — matseðlar fyrir veitingastaði með fullri þjónustu
- **Kaffihús** — matseðlar fyrir kaffi og léttan mat
- **Barir og setustofur** — matseðlar fyrir drykki og forrétti
- **Bakarí** — matseðlar fyrir bakkelsi og brauð
- **Veisluþjónustur** — valkostir fyrir viðburðarmatseðla
- **Matarbílar** — matseðlar fyrir færanlega matarþjónustu
- **Brugghús og víngerðir** — drykkjarmatseðlar með lýsingum

## Uppbygging matseðils {#menu-structure}

### Flokkar matseðils {#menu-categories}

Matseðlar eru skipulagðir í flokka:

- **Forréttir** — forréttir og smáréttir
- **Aðalréttir** — aðalréttir
- **Meðlæti** — meðlæti og grænmeti
- **Eftirréttir** — sætir réttir
- **Drykkir** — drykkir (áfengir og óáfengir)
- **Sértilboð** — dagleg eða árstíðabundin sértilboð

### Snið matseðilsatriðis {#menu-item-format}

Hvert matseðilsatriði inniheldur:

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

#### Reitir atriðis {#item-fields}

| Reitur | Tegund | Lýsing |
|-------|------|-------------|
| `name` | string | Nafn réttar eða drykkjar |
| `description` | string | Ítarleg lýsing á atriðinu |
| `price` | string | Verð (sniðið með gjaldmiðli) |
| `dietary_info` | array | Mataræðiseiginleikar (vegan, glútenlaust o.s.frv.) |
| `allergens` | array | Algengir ofnæmisvaldar (hnetur, skelfiskur o.s.frv.) |
| `availability` | string | Hvenær í boði (daglega, árstíðabundið o.s.frv.) |

## Að búa til hospitality matseðla {#creating-hospitality-menus}

### Skref 1: Gefðu upp upplýsingar um matseðil {#step-1-provide-menu-information}

Segðu Theme Builder frá matseðlinum þínum:

```
Create a restaurant menu for my Italian restaurant with appetizers,
pasta dishes, main courses, and desserts. Include prices and descriptions.
```

### Skref 2: Theme Builder býr til matseðil {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Býr til skipulagða matseðilssíðu
2. Hannar hana til að passa við þema vefsins þíns
3. Skipuleggur atriði í flokka
4. Sníður verð og lýsingar
5. Bætir við mataræðis- og ofnæmisupplýsingum

### Skref 3: Yfirfarðu og sérsníddu {#step-3-review-and-customize}

Þú getur:

1. Breytt matseðilsatriðum og verðum
2. Bætt við eða fjarlægt flokka
3. Endurraðað atriðum innan flokka
4. Uppfært lýsingar og mataræðisupplýsingar
5. Aðlagað stíl og útlit

## Birtingarvalkostir matseðils {#menu-display-options}

### Heildarmatseðilssíða {#full-menu-page}

Sérstök síða sem sýnir allan matseðilinn þinn:

- Skipulögð eftir flokkum
- Leitanleg og síanleg
- Prentvænt útlit
- Farsímavæn hönnun

### Matseðilsgræja {#menu-widget}

Felldu matseðilshluta inn á aðrar síður:

- Valin atriði á forsíðu
- Dagleg sértilboð í hliðarstiku
- Drykkjarmatseðill á barsíðu
- Eftirréttasýning í footer

### Matseðils-PDF {#menu-pdf}

Búðu til niðurhalanlegan PDF-matseðil:

- Fagleg sniðsetning
- Prenttilbúin gæði
- Inniheldur myndir og lýsingar
- Auðvelt að deila og senda í tölvupósti

## Upplýsingar um mataræði og ofnæmisvalda {#dietary-and-allergen-information}

### Mataræðiseiginleikar {#dietary-attributes}

Merktu atriði með mataræðisupplýsingum:

- **Vegan** — engar dýraafurðir
- **Grænmetisfæði** — ekkert kjöt
- **Glútenlaust** — öruggt fyrir glútenóþol
- **Mjólkurlaust** — engar mjólkurafurðir
- **Hnetulaust** — engar trjáhnetur eða jarðhnetur
- **Kolvetnasnautt** — minna af kolvetnum
- **Próteinríkt** — próteinríkt

### Ofnæmisviðvaranir {#allergen-warnings}

Láttu algenga ofnæmisvalda fylgja:

- **Hnetur** — trjáhnetur og jarðhnetur
- **Skelfiskur** — krabbadýr og lindýr
- **Fiskur** — allar fisktegundir
- **Mjólkurvörur** — mjólk og mjólkurafurðir
- **Egg** — hænuegg
- **Soja** — sojaafurðir
- **Glúten** — hveiti og korntegundir sem innihalda glúten
- **Sesam** — sesamfræ og olía

## Umsjón með matseðli {#menu-management}

### Uppfærsla verðs {#updating-prices}

Uppfærðu verð á matseðli auðveldlega:

1. Farðu á matseðilssíðuna
2. Smelltu á "Breyta matseðli"
3. Uppfærðu verð fyrir atriði
4. Vistaðu breytingar
5. Breytingar birtast strax á vefnum þínum

### Að bæta við árstíðabundnum atriðum {#adding-seasonal-items}

Búðu til árstíðabundnar útgáfur af matseðli:

1. Búðu til nýja matseðilsútgáfu
2. Bættu við árstíðabundnum atriðum
3. Merktu atriði sem "Árstíðabundið"
4. Tímasettu dagsetningar fyrir framboð
5. Birtu sjálfkrafa yfir tímabilið

### Umsjón með sértilboðum {#managing-specials}

Sýndu dagleg eða vikuleg sértilboð:

1. Búðu til "Sértilboð" flokk
2. Bættu við atriðum með dagsetningum fyrir framboð
3. Auðkenndu sértilboð á forsíðu
4. Uppfærðu daglega eða vikulega
5. Settu gömul sértilboð í safn

## Samþætting við Theme Builder {#integration-with-theme-builder}

Þegar Theme Builder er notað fyrir hospitality vefi:

1. **Sjálfvirk greining matseðils** — greinir hvort þú sért matar-/drykkjarfyrirtæki
2. **Gerð matseðilssíðu** — býr til faglegar matseðilssíður
3. **Samsvörun hönnunar** — matseðlar passa við þema vefsins þíns
4. **Farsímabestun** — matseðlar birtast fallega í símum
5. **SEO-bestun** — matseðlar eru leitarvélavænir

## Bestu starfsvenjur {#best-practices}

### Hönnun matseðils {#menu-design}

- **Skýrt skipulag** — rökrétt flokkauppbygging
- **Læsilegar lýsingar** — girnilegar og upplýsandi
- **Samræmd verðlagning** — skýr gjaldmiðill og sniðsetning
- **Faglegar myndir** — hágæða matarmyndir
- **Hvítt rými** — ekki yfirfylla síðuna

### Efni {#content}

- **Nákvæmar lýsingar** — lýstu atriðum nákvæmlega
- **Auðkenndu sértilboð** — láttu sértilboð skera sig úr
- **Láttu ofnæmisvalda fylgja** — skráðu alltaf ofnæmisvalda
- **Uppfærðu reglulega** — haltu verðum og atriðum uppfærðum
- **Notaðu girnilegt málfar** — láttu atriði hljóma ljúffeng

### Aðgengi {#accessibility}

- **Læsilegt letur** — notaðu skýrar, læsilegar leturgerðir
- **Nægileg birtuskil** — tryggðu að texti sé læsilegur
- **Mataræðismerkingar** — merktu mataræðisvalkosti skýrt
- **Ofnæmisviðvaranir** — birtu ofnæmisvalda á áberandi hátt
- **Farsímavænt** — prófaðu á öllum tækjum

## Dæmi {#examples}

### Uppbygging veitingastaðarmatseðils {#restaurant-menu-structure}

```
Forréttir
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pastaréttir
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Aðalréttir
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Eftirréttir
├── Tiramisu
├── Panna Cotta
└── Gelato-úrval
```

### Uppbygging kaffihúsamatseðils {#cafe-menu-structure}

```
Kaffi
├── Espresso
├── Cappuccino
└── Latte

Bakkelsi
├── Smjördeigshorn
├── Múffur
└── Skonsur

Samlokur
├── Caprese Panini
├── Club-samloka með reyktum kalkún
└── Grænmetisvafningur
```

## Tengdir eiginleikar {#related-features}

- [Búa til valmynd](../abilities/create-menu.md) — búa til leiðarvalmyndir
- [Hönnunarstefna](./design-direction.md) — sérsníða hönnun síðunnar þinnar
- [Uppgötvunarviðtal](./discovery-interview.md) — skipuleggja uppbyggingu síðunnar þinnar
