---
id: wu_use_domain_mapping
title: Φίλτρο - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Φίλτρο: wu_use_domain_mapping {#filter-wuusedomainmapping}

Καθορίζει αν πρέπει να χρησιμοποιηθεί μια αντιστοιχία (mapping)

Συνήθως, θέλετε να επιτρέπεται η χρήση μόνο ενεργών αντιστοιχίσεων. Ωστόσο, αν θέλετε να χρησιμοποιήσετε πιο προηγική λογική, ή να επιτρέψετε και σε μη ενεργά domains να αντιστοιχιστούν, απλώς κάντε το φιλτράρισμα εδώ.

## Παράμετροι {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Πρέπει η αντιστοιχία να αντιμετωπιστεί ως ενεργή; |
| $mapping | `\Domain` | Η αντιστοιχία που εξετάζουμε |
| $domain | `string` | |

### Πηγή {#source}

Ορίζεται στο [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) στην γραμμή 391
