---
id: wu_handle_user_meta_fields
title: Acció - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aquesta funció: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Permet als desenvolupadors de plugins guardar metadades d'usuari de diverses maneres si ho necessiten.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| `$meta_repository` | `array` | La llista de camps de meta, estructurada com a clau => valor. |
| `$user` | `\WP_User` | L'objecte d'usuari de WordPress. |
| `$customer` | `\Customer` | L'objecte de client d'Ultimate Multisite. |
| `$checkout` | `\Checkout` | La classe de checkout. |

### Des de {#since}

- 2.0.4
### Font {#source}

Definida en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) a la línia 1244
