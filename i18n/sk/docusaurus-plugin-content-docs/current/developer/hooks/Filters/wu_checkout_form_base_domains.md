---
id: wu_checkout_form_base_domains
title: Filter – wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtruje zdieľané základné domény formulára pokladne, ktoré by sa nemali stať záznamami mapovaných domén.

Použite tento filter, keď integrácia poskytuje ďalšie základné domény pre polia **URL lokality** vo formulári pokladne. Domény vrátené týmto filtrom sa považujú za zdieľaných hostiteľov registrácie namiesto vlastných domén pre jednotlivé lokality.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $domains | `array` | Zdieľané základné domény zozbierané z konfigurácie formulára pokladne. |

### Od verzie {#since}

- 2.13.0

### Zdroj {#source}

Definované v `inc/functions/domain.php`.


## Návratová hodnota {#returns}

Pole normalizovaných základných domén formulára pokladne.
