---
title: Ndepụta nri ile ọbịa
sidebar_position: 3
_i18n_hash: 6005be1ddbd4aa6dddf175828f4fc8f5
---
# Menu Ọrụ Ile Ọbịa

Njirimara **Menu Ọrụ Ile Ọbịa** na-enye Theme Builder ohere imepụta ma tinye peeji menu nri na ihe ọṅụṅụ ahaziri nke ọma ozugbo n'ime saịtị WordPress gị.

## Nchịkọta {#overview}

Theme Builder nwere ike ugbu a ịmepụta peeji menu ọkachamara, ahaziri nke ọma maka azụmahịa ọrụ ile ọbịa gụnyere ụlọ oriri na ọṅụṅụ, kafe, baa, na ọrụ nri emume. A na-etinye menu ndị a kpamkpam n'ime nhazi saịtị gị, a pụkwara imelite ma jikwaa ha n'ụzọ dị mfe.

## Ụdị Ọrụ Ile Ọbịa A Na-akwado {#supported-hospitality-types}

- **Ụlọ oriri na ọṅụṅụ** — menu nri zuru oke
- **Kafe** — menu kọfị na nri dị mfe
- **Baa na ebe izuike** — menu ihe ọṅụṅụ na nri mmalite
- **Ụlọ achịcha** — menu achịcha ụtọ na achịcha
- **Ọrụ Nri Emume** — nhọrọ menu emume
- **Ụgbọ Nri** — menu ọrụ nri na-agagharị
- **Ụlọ biya na ụlọ mmanya vaịn** — menu ihe ọṅụṅụ nwere nkọwa

## Nhazi Menu {#menu-structure}

### Otu Menu {#menu-categories}

A na-ahazi menu n'ime otu:

- **Nri mmalite** — nri mbido na obere efere
- **Nri isi** — nri ndị bụ isi
- **Nri mgbakwunye** — ihe soro nri na akwụkwọ nri
- **Nri ụtọ** — ihe oriri ụtọ
- **Ihe ọṅụṅụ** — ihe a na-aṅụ (nwere mmanya na enweghị mmanya)
- **Nri pụrụ iche** — nri pụrụ iche kwa ụbọchị ma ọ bụ nke oge

### Usoro Ihe Menu {#menu-item-format}

Ihe menu ọ bụla gụnyere:

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

#### Ubi Ihe {#item-fields}

| Ubi | Ụdị | Nkọwa |
|-------|------|-------------|
| `name` | string | Aha nri ma ọ bụ ihe ọṅụṅụ |
| `description` | string | Nkọwa zuru ezu nke ihe ahụ |
| `price` | string | Ọnụahịa (a haziri ya na ego) |
| `dietary_info` | array | Njirimara nri (Vegan, Gluten-Free, wdg.) |
| `allergens` | array | Ihe na-akpalite nfụkasị a na-ahụkarị (akị, anụ mmiri nwere okpokoro, wdg.) |
| `availability` | string | Mgbe ọ dị (Kwa ụbọchị, Nke oge, wdg.) |

## Ịmepụta Menu Ọrụ Ile Ọbịa {#creating-hospitality-menus}

### Nzọụkwụ 1: Nye Ozi Menu {#step-1-provide-menu-information}

Gwa Theme Builder gbasara menu gị:

```
Mepụta menu ụlọ oriri na ọṅụṅụ maka ụlọ oriri Italian m nwere nri mmalite,
nri pasta, nri isi, na nri ụtọ. Tinye ọnụahịa na nkọwa.
```

### Nzọụkwụ 2: Theme Builder Na-emepụta Menu {#step-2-theme-builder-generates-menu}

Theme Builder:

1. Na-emepụta peeji menu ahaziri nke ọma
2. Na-emepụta ya ka ọ kwekọọ na theme saịtị gị
3. Na-ahazi ihe n'ime otu dị iche iche
4. Na-ahazi ọnụahịa na nkọwa
5. Na-agbakwunye ozi nri na ihe na-akpalite nfụkasị

### Nzọụkwụ 3: Nyochaa ma Hazie {#step-3-review-and-customize}

Ị nwere ike:

1. Dezie ihe menu na ọnụahịa
2. Tinye ma ọ bụ wepụ otu
3. Hazigharịa ihe n'ime otu
4. Melite nkọwa na ozi nri
5. Gbanwee ịcha mma na nhazi

## Nhọrọ Ngosipụta Menu {#menu-display-options}

### Peeji Menu Zuru Oke {#full-menu-page}

Peeji raara onwe ya nye nke na-egosi menu gị zuru ezu:

- A haziri ya site n'otu
- A pụrụ ịchọ ma kpochapụ ya
- Nhazi dabara maka ibipụta
- Nhazi na-aza nke ọma na ekwentị

### Wijet Menu {#menu-widget}

Tinye ngalaba menu na peeji ndị ọzọ:

- Ihe ndị a họpụtara na peeji mbu
- Nri pụrụ iche kwa ụbọchị na sidebar
- Menu ihe ọṅụṅụ na peeji baa
- Ngosipụta nri ụtọ na footer

### PDF Menu {#menu-pdf}

Mepụta menu PDF a pụrụ ibudata:

- Nhazi ọkachamara
- Ogo dị njikere maka ibipụta
- Gụnyere onyonyo na nkọwa
- Dị mfe ịkekọrịta na izipu email

## Ozi Nri na Ihe Na-akpalite Nfụkasị {#dietary-and-allergen-information}

### Njirimara Nri {#dietary-attributes}

Kaa ihe akara na ozi nri:

- **Vegan** — enweghị ngwaahịa anụmanụ
- **Vegetarian** — enweghị anụ
- **Gluten-Free** — dị mma maka ọrịa celiac
- **Dairy-Free** — enweghị ngwaahịa mmiri ara ehi
- **Nut-Free** — enweghị akị osisi ma ọ bụ ahụekere
- **Low-Carb** — carbohydrates belatara
- **High-Protein** — bara ụba na protein

### Ịdọ Aka ná Ntị Maka Ihe Na-akpalite Nfụkasị {#allergen-warnings}

Tinye ihe na-akpalite nfụkasị a na-ahụkarị:

- **Akị** — akị osisi na ahụekere
- **Anụ mmiri nwere okpokoro** — crustaceans na mollusks
- **Azụ** — ụdị azụ niile
- **Mmiri ara ehi** — mmiri ara ehi na ngwaahịa mmiri ara ehi
- **Àkwá** — àkwá ọkụkọ
- **Soy** — ngwaahịa soy
- **Gluten** — ọka wheat na ọka nwere gluten
- **Sesame** — mkpụrụ sesame na mmanụ

## Njikwa Menu {#menu-management}

### Imelite Ọnụahịa {#updating-prices}

Melite ọnụahịa menu n'ụzọ dị mfe:

1. Gaa na peeji menu
2. Pịa "Dezie Menu"
3. Melite ọnụahịa maka ihe
4. Chekwaa mgbanwe
5. Mgbanwe ga-apụta ozugbo na saịtị gị

### Ịgbakwunye Ihe Nke Oge {#adding-seasonal-items}

Mepụta ụdị menu nke oge:

1. Mepụta ụdị menu ọhụrụ
2. Tinye ihe nke oge
3. Kaa ihe akara dị ka "Nke Oge"
4. Hazie ụbọchị ịdị adị
5. Gosipụta ya akpaghị aka n'oge ya

### Ijikwa Nri Pụrụ Iche {#managing-specials}

Gosipụta nri pụrụ iche kwa ụbọchị ma ọ bụ kwa izu:

1. Mepụta otu "Nri Pụrụ Iche"
2. Tinye ihe nwere ụbọchị ịdị adị
3. Mee ka nri pụrụ iche pụta ìhè na peeji mbu
4. Melite kwa ụbọchị ma ọ bụ kwa izu
5. Debe nri pụrụ iche ochie n'akwụkwọ nchekwa

## Njikọ na Theme Builder {#integration-with-theme-builder}

Mgbe ị na-eji Theme Builder maka saịtị ọrụ ile ọbịa:

1. **Nchọpụta menu akpaghị aka** — na-amata ma ị bụ azụmahịa nri/ihe ọṅụṅụ
2. **Ịmepụta peeji menu** — na-emepụta peeji menu ọkachamara
3. **Ndakọrịta imewe** — menu na-adakọ na theme saịtị gị
4. **Nkwalite ekwentị** — menu na-egosi nke ọma na ekwentị
5. **Nkwalite SEO** — menu dị mma maka igwe nchọta

## Omume Kachasị Mma {#best-practices}

### Nhazi Menu {#menu-design}

- **Nhazi doro anya** — nhazi otu nwere ezi uche
- **Nkọwa a na-agụ mfe** — na-akpali agụụ nri ma na-enye ozi
- **Ọnụahịa na-adịgide otu** — ego na nhazi doro anya
- **Foto ọkachamara** — onyonyo nri dị elu
- **Oghere ọcha** — ejula peeji ahụ oke

### Ọdịnaya {#content}

- **Nkọwa ziri ezi** — kọwaa ihe n'ụzọ ziri ezi
- **Mee ka nri pụrụ iche pụta ìhè** — mee ka nri pụrụ iche pụta ìhè
- **Tinye ihe na-akpalite nfụkasị** — depụta ihe na-akpalite nfụkasị mgbe niile
- **Melite mgbe niile** — debe ọnụahịa na ihe ka ọ dị ugbu a
- **Jiri asụsụ na-akpali agụụ nri** — mee ka ihe daa ụtọ n'ọnụ

### Nnweta {#accessibility}

- **Font a na-agụ mfe** — jiri ụdị mkpụrụedemede doro anya, dị mfe ọgụgụ
- **Ọdịiche zuru oke** — hụ na ederede dị mfe ọgụgụ
- **Mkpado nri** — kaa nhọrọ nri akara nke ọma
- **Ịdọ aka ná ntị nfụkasị** — gosipụta ihe na-akpalite nfụkasị nke ọma
- **Dabara na ekwentị** — nwalee na ngwaọrụ niile

## Ihe Nlereanya {#examples}

### Nhazi Menu Ụlọ Oriri Na Ọṅụṅụ {#restaurant-menu-structure}

```
Appetizers
├── Bruschetta al Pomodoro
├── Calamari Fritti
└── Caprese Salad

Pasta Dishes
├── Spaghetti Carbonara
├── Fettuccine Alfredo
└── Penne Arrabbiata

Main Courses
├── Osso Buco
├── Branzino al Forno
└── Saltimbocca alla Romana

Desserts
├── Tiramisu
├── Panna Cotta
└── Gelato Selection
```

### Nhazi menu kafe {#cafe-menu-structure}

```
Coffee
├── Espresso
├── Cappuccino
└── Latte

Pastries
├── Croissants
├── Muffins
└── Scones

Sandwiches
├── Caprese Panini
├── Smoked Turkey Club
└── Vegetarian Wrap
```

## Njirimara metụtara {#related-features}

- [Mepụta menu](../abilities/create-menu.md) — mepụta menu nsoroụzọ
- [Ntuziaka imewe](./design-direction.md) — hazie imewe saịtị gị
- [Ajụjụ ọnụ nchọpụta](./discovery-interview.md) — hazie nhazi saịtị gị
