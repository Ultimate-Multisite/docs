---
id: wp_ultimo_skip_network_active_check
title: Saringan - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Saringan: wp_ultimo_skip_network_active_check

Ngidinan pamekar pikeun nyirian pondok pamariksaan aktivasina jaringan.

Ieu mangpaat nalika maké setup dumasar composer jeung setup kustom séjénna, saperti Bedrock, contona, dimana maké plugin salaku mu-plugins téh jadi kabiasaan.

## Paraméter

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Naha urang kudu ngalangkungan pamariksaan atawa henteu, standar-na false. |

### Ti saprak

- 2.0.0
### Sumber

Ditetepkeun dina [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) dina garis 272


## Balikan
true lamun anjeun hayang ngalangkungan pamariksaan, false lamun henteu.
