---
title: Abilitoj de Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Kapableite: Scaffoldado kaj Aktivado de Bloko Temoj {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 introducis du potempaj kapableite, kiuj pervasivas vi generi kaj deplopi personalajn bloko temojn direkten per la chataj interfacoj.

## Vidoj {#overview}

La kapabletoj **scaffold-block-theme** kaj **activate-theme** permesas agentoj:
- Generi kompletan, produkcie bone temojn bazitajn sur viaj specifikoj
- Automatik akтивi temojn sur via sitio sen manua intervento
- Krei kohesian vizual identon per gviditaj dezajno decisionoj

## Scaffoldado de Bloko Temo {#scaffold-block-theme}

La kapablete **scaffold-block-theme** generas novan WordPress bloko temon kun kompleta temo strukturo, inkluzive:

- `theme.json` konfiguracion kun dizajnoj tokenoj
- Bloko mallataj filoj por uzconvenaj layoutoj
- Personalaj bloko stiloj kaj variaĵoj
- Temo metadatenoj kaj suport deklaroj

### Kiel Vokvi {#how-to-invoke}

En via chato kun Superdav AI Agent, vi povas peti temon generadon:

```
"Krei blokan temon nomitan 'Modern Agency' kun bue kaj blanka kolorreto,
sans-serif tipografia kaj profesia layout"
```

La agent faros la seguinte:
1. Raccui via dizajnoj preferojn per konversacio
2. Generi la kompletan temo strukturon
3. Krei ĉiuj necesajn temo filojn
4. Prepara la temon por aktivado

### Esperita Output {#expected-output}

Kiam la kapableto funkcias sukcese, vi vidus:

- Konfirma, ke la temo estis scaffoldita
- La nomon kaj loko de la temo
- Rezumo de dizajnoj tokenoj apliktitaj (koloroj, tipografia, espaco)
- Status "Mekza por aktivado"

Ekzempla output:
```
✓ Temo "Modern Agency" sukcese scaffoldita
  Loko: /wp-content/themes/modern-agency/
  Koloroj: Primara #0066CC, Sekundara #FFFFFF
  Tipografia: Inter (sans-serif)
  Status: Mekza por aktivado
```

## Aktivado de Temo {#activate-theme}

La abilitatività **activate-theme** ŝanĝas vian siton al novaj skaffoditaj aŭ ekzistantaj bloka temoj.

### Kiel diri {#how-to-invoke-1}

Post kiam vi skaffodas temon, vi povas aktivi ĝin tute!

```
"Aktivi la Modern Agency temon"
```

Aŭ aktivi ĉutajn temojn:

```
"Mankovri al Twentytwentyfour temo"
```

### Esperata rezulto {#expected-output-1}

Kiam aktiva sukcesas:

- Konfirma de la aktiva temo
- Predvia temo nomo (por referenco)
- URL de la sita, kie la temo estas nun viva
- Jakaj notoj pri la specifaj ŝanĝoj de la temo

Ekzempla rezulto:
```
✓ Temo aktiva sukcesis
  Aktiva temo: Modern Agency
  Predvia temo: Twentytwentyfour
  Viva en: https://yoursite.com
  Notado: Kontresas vian homilan pageon por verifi la layout
```

## Flujo de laboro: Skaffodo kaj Aktiva {#workflow-scaffold-and-activate}

Tutan flujon de laboro kombinas amba abilitajn:

1. **Rekviro de temo generi**: "Krei bloka temon por mia SaaS-landpage"
2. **Agento skaffodas la temon**: Geniras filojn kaj dezajnovojn (design tokens)
3. **Revizi kaj refine**: Diskuti dezajnovajn ŝanĝojn, se necese
4. **Aktivi**: "Aktivi temon nun"
5. **Verifi**: Viziti vian siton por konfirme novan dezajn vivaj

## Dezajnovoj (Design Tokens) kaj Personaligo {#design-tokens-and-customization}

Skaffoditaj temoj uzas WordPress design tokens (via `theme.json`) por:

- **Koloroj**: Primara, sekundara, akcento, neutrala paleta
- **Tipografia**: Fontfamilioj, gravaj, altaj, linia alta
- **Espaco**: Padding, margin, gap skaloj
- **Bordoj**: Radius kaj largreto tokenoj
- **Ombraj (Shadows)**: Nivelo de elevado

Ĉi tiuj tokenoj estas sentrizitaj en `theme.json`, kion facile ŝanĝi vian tutan dezajnovajn sistemon el unu filiĝo.

## Limitaĵoj kaj Notoj {#limitations-and-notes}

## Troubleshooting {#troubleshooting}

**Tema ne aperas po scaffoldado**
- Verifiku si direktorio tema existe kaj havas la ĝustajn permesojn
- Kontenu se `theme.json` estas valida JSON
- Assuring, ke la nomo de la tema ne konfliktas kun ekzistantaj temoj

**Aktivado ne funkcias**
- Konfirmi, ke vi havas administratorj permesojn
- Verifiku, ke direktorio tema estas legibl por WordPress
- Revizi la eraro-logoj de WordPress por detajloj

**Dizajno tokenoj ne aplikas**
- Verifiku, ke la sintakso de `theme.json` estas ĝusta
- Limigu (clear) ĉian cache pluginojn
- Kontenu se via WordPress versio suportas la tokenojn, kiujn vi uzas

## Proksimaj Paŝoj {#next-steps}

Post aktivado de via tema, vi povas:
- Uzui la **Design System Aesthetics skill** por refine la tipografion, koloro kaj espacon
- Personaligi individua blokaj stilojn per la WordPress block editor
- Aggi (add) custom CSS en la fileo `style.css` de la tema
- Krei customaj blokaj mallatojn por specifaj paĝa tipoj
