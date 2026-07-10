---
title: Meni Ospitalite
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Meni Ospitalite {#hospitality-menus}

Fonksyon **Meni Ospitalite** a pèmèt Theme Builder jenere epi entegre paj meni manje ak bwason ki estriktire dirèkteman nan site WordPress ou a.

## Apèsi {#overview}

Theme Builder kapab kounye a kreye paj meni pwofesyonèl, estriktire pou biznis ospitalite tankou restoran, kafe, ba, ak sèvis katering. Meni sa yo entegre nèt nan konsepsyon site ou a epi yo ka fasilman mete ajou ak jere.

## Kalite Ospitalite ki Sipòte {#supported-hospitality-types}

- **Restoran** — meni manje ak sèvis konplè
- **Kafe** — meni kafe ak ti manje lejè
- **Ba ak Sal Detant** — meni bwason ak ti antre
- **Boulanjri** — meni patisri ak pen
- **Sèvis Katering** — opsyon meni pou evènman
- **Kamyon Manje** — meni sèvis manje mobil
- **Brasri ak Kav Diven** — meni bwason ak deskripsyon

## Estrikti Meni {#menu-structure}

### Kategori Meni {#menu-categories}

Meni yo òganize an kategori:

- **Ti Antre** — antre ak ti asyèt
- **Plat Prensipal** — kou prensipal
- **Akonpayman** — akonpayman ak legim
- **Desè** — ti dous
- **Bwason** — bwason (ak alkòl ak san alkòl)
- **Espesyal** — espesyal chak jou oswa sezonye

### Fòma Atik Meni {#menu-item-format}

Chak atik meni gen ladan:

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

#### Chan Atik yo {#item-fields}

| Chan | Kalite | Deskripsyon |
|-------|------|-------------|
| `name` | string | Non plat oswa bwason |
| `description` | string | Deskripsyon detaye atik la |
| `price` | string | Pri (fòmate ak lajan) |
| `dietary_info` | array | Atribi alimantè (Vegan, San Gluten, elatriye) |
| `allergens` | array | Alèjèn komen (Nwa, Fwidmè ak kokiy, elatriye) |
| `availability` | string | Lè li disponib (Chak jou, Sezonye, elatriye) |

## Kreye Meni Ospitalite {#creating-hospitality-menus}

### Etap 1: Bay Enfòmasyon Meni an {#step-1-provide-menu-information}

Di Theme Builder sou meni ou a:

```
Kreye yon meni restoran pou restoran Italyen mwen an ak ti antre,
plat pasta, plat prensipal, ak desè. Mete pri ak deskripsyon.
```

### Etap 2: Theme Builder Jenere Meni an {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Kreye yon paj meni estriktire
2. Konsevwa li pou li matche ak theme site ou a
3. Òganize atik yo an kategori
4. Fòmate pri ak deskripsyon
5. Ajoute enfòmasyon alimantè ak alèjèn

### Etap 3: Revize epi Pèsonalize {#step-3-review-and-customize}

Ou kapab:

1. Modifye atik meni ak pri yo
2. Ajoute oswa retire kategori
3. Chanje lòd atik yo andedan kategori yo
4. Mete deskripsyon ak enfòmasyon alimantè ajou
5. Ajiste estil ak aranjman

## Opsyon Afiche Meni {#menu-display-options}

### Paj Meni Konplè {#full-menu-page}

Yon paj dedye ki afiche meni konplè ou a:

- Òganize pa kategori
- Ka chèche ladan l epi filtre li
- Aranjman ki bon pou enprime
- Konsepsyon ki adapte ak mobil

### Widget Meni {#menu-widget}

Entegre seksyon meni sou lòt paj:

- Atik ki mete an avan sou paj dakèy
- Espesyal chak jou sou ba bò
- Meni bwason sou paj ba
- Prezantasyon desè nan pye paj

### PDF Meni {#menu-pdf}

Jenere yon meni PDF ki ka telechaje:

- Fòma pwofesyonèl
- Kalite pare pou enprime
- Gen imaj ak deskripsyon ladan
- Fasil pou pataje ak voye pa imel

## Enfòmasyon Alimantè ak Alèjèn {#dietary-and-allergen-information}

### Atribi Alimantè {#dietary-attributes}

Make atik yo ak enfòmasyon alimantè:

- **Vegan** — pa gen pwodwi bèt
- **Vejetaryen** — pa gen vyann
- **San Gluten** — san danje pou maladi selyak
- **San Pwodui Lèt** — pa gen pwodwi lèt
- **San Nwa** — pa gen nwa pyebwa ni pistach
- **Ba nan Kaboyidrat** — kaboyidrat redwi
- **Wo nan Pwoteyin** — rich an pwoteyin

### Avètisman Alèjèn {#allergen-warnings}

Mete alèjèn komen yo:

- **Nwa** — nwa pyebwa ak pistach
- **Fwidmè ak Kokiy** — kristase ak molisk
- **Pwason** — tout espès pwason
- **Pwodui Lèt** — lèt ak pwodwi lèt
- **Ze** — ze poul
- **Soya** — pwodwi soya
- **Gluten** — ble ak grenn ki gen gluten
- **Sezam** — grenn sezam ak lwil sezam

## Jesyon Meni {#menu-management}

### Mete Pri yo Ajou {#updating-prices}

Mete pri meni yo ajou fasilman:

1. Ale nan paj meni an
2. Klike sou "Modifye Meni"
3. Mete pri atik yo ajou
4. Sove chanjman yo
5. Chanjman yo parèt imedyatman sou site ou a

### Ajoute Atik Sezonye {#adding-seasonal-items}

Kreye varyasyon meni sezonye:

1. Kreye yon nouvo vèsyon meni
2. Ajoute atik sezonye
3. Make atik yo kòm "Sezonye"
4. Pwograme dat disponiblite yo
5. Afiche otomatikman pandan sezon an

### Jere Espesyal yo {#managing-specials}

Afiche espesyal chak jou oswa chak semèn:

1. Kreye yon kategori "Espesyal"
2. Ajoute atik ak dat disponiblite
3. Mete espesyal yo an evidans sou paj dakèy
4. Mete ajou chak jou oswa chak semèn
5. Achive ansyen espesyal yo

## Entegrasyon ak Theme Builder {#integration-with-theme-builder}

Lè w ap itilize Theme Builder pou site ospitalite:

1. **Deteksyon meni otomatik** — idantifye si ou se yon biznis manje/bwason
2. **Kreyasyon paj meni** — jenere paj meni pwofesyonèl
3. **Konsepsyon ki matche** — meni yo matche ak theme site ou a
4. **Optimizasyon mobil** — meni yo afiche bèl sou telefòn
5. **Optimizasyon SEO** — meni yo fasil pou motè rechèch jwenn

## Meyè Pratik {#best-practices}

### Konsepsyon Meni {#menu-design}

- **Òganizasyon klè** — estrikti kategori lojik
- **Deskripsyon fasil pou li** — ki bay anvi manje epi ki enfòmatif
- **Pri konsistan** — lajan ak fòma ki klè
- **Foto pwofesyonèl** — imaj manje bon kalite
- **Espas vid** — pa chaje paj la twòp

### Kontni {#content}

- **Deskripsyon egzat** — dekri atik yo avèk presizyon
- **Mete espesyal yo an evidans** — fè espesyal yo parèt klè
- **Mete alèjèn yo** — toujou lis alèjèn yo
- **Mete ajou regilyèman** — kenbe pri ak atik yo aktyèl
- **Itilize langaj ki bay apeti** — fè atik yo parèt bon gou

### Aksesibilite {#accessibility}

- **Polis fasil pou li** — itilize karaktè klè, lizib
- **Kontras ase** — asire tèks la fasil pou li
- **Etikèt alimantè** — make opsyon alimantè yo klèman
- **Avètisman alèjèn** — afiche alèjèn yo kote yo byen vizib
- **Bon pou mobil** — teste sou tout aparèy

## Egzanp {#examples}

### Estrikti Meni Restoran {#restaurant-menu-structure}

```
Aperitif
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Salad Caprese

Plat Pasta
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Plat Prensipal
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desè
├── Tiramisu
├── Panna Cotta
└── Seleksyon Gelato
```

### Estrikti Meni Kafe {#cafe-menu-structure}

```
Kafe
├── Espresso
├── Cappuccino
└── Latte

Patisri
├── Croissants
├── Muffins
└── Scones

Sandwich
├── Panini Caprese
├── Club Kodenn Fimen
└── Wrap Vejetaryen
```

## Fonksyon ki Gen Rapò {#related-features}

- [Kreye Meni](../abilities/create-menu.md) — kreye meni navigasyon
- [Direksyon Konsepsyon](./design-direction.md) — pèsonalize konsepsyon sit ou a
- [Entèvyou Dekouvèt](./discovery-interview.md) — planifye estrikti sit ou a
