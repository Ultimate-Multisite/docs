---
id: wu_checkout_form_base_domains
title: Filtër - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtron domenet bazë të përbashkëta të formularit të checkout që nuk duhet të bëhen regjistra domenesh të mapuara.

Përdoreni këtë filter kur një integrim ofron domene bazë shtesë për fushat **Site URL** të formularit të checkout. Domenet e kthyera nga ky filter trajtohen si hoste regjistrimi të përbashkëta në vend të domeneve të personalizuara për çdo site.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $domains | `array` | Domenet bazë të përbashkëta të mbledhura nga konfigurimi i formularit të checkout. |

### Që nga {#since}

- 2.13.0

### Burimi {#source}

Përcaktuar në `inc/functions/domain.php`.


## Kthimet {#returns}

Array me domene bazë të normalizuara të formularit të checkout.
