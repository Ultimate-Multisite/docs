---
id: wu_maybe_create_customer
title: Akce - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Akce: wu_maybe_create_customer

Umožňuje vývojářům pluginů provést další kroky, když je zákazník přidán.

Zde přidáváme například kroky (hooks) pro přidání zákazníka-do-uživatele i na hlavní stránku.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $customer | `\Customer` | Zákazník, který byl možná vytvořen. |
| $checkout | `\Checkout` | Aktuální třída pro checkout. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) na řádku 1156
