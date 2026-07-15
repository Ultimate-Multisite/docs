---
id: wu_country_get_states
title: Saringan - wu_country_get_states
sidebar_label: wu_country_get_states
_i18n_hash: 9e44d60beddbc5fddcd7b1883c72bb2c
---
# Filter: wu_country_get_states

Ngabalikeun daptar nagara bagian pikeun nagara ieu.

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $states | `array` | Daptar nagara bagian dina format XX =&gt; Name. |
| $country_code | `string` | Kode ISO dua hurup pikeun nagara. |
| $current_country | `\WP_Ultimo\Country\Country` | Instansi tina kelas ayeuna. |

### Ti saprak {#since}

- 2.0.11
### Sumber {#source}

Ditetepkeun dina [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L86) dina garis 86


## Ngabalikeun {#returns}
Daptar nagara bagian anu geus disaring.
