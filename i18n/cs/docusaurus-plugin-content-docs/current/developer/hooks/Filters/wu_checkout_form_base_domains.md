---
id: wu_checkout_form_base_domains
title: Filtr - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filtr: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtruje sdílené základní domény formuláře pokladny, které by se neměly stát záznamy mapovaných domén.

Tento filtr použijte, když integrace poskytuje další základní domény pro pole **URL webu** ve formuláři pokladny. Domény vrácené tímto filtrem jsou považovány za sdílené registrační hostitele místo vlastních domén pro jednotlivé weby.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $domains | `array` | Sdílené základní domény shromážděné z konfigurace formuláře pokladny. |

### Od verze {#since}

- 2.13.0

### Zdroj {#source}

Definováno v `inc/functions/domain.php`.


## Vrací {#returns}

Pole normalizovaných základních domén formuláře pokladny.
