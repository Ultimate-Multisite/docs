---
id: wp_ultimo_skip_network_active_check
title: Saringan - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Saringan: wp_ultimo_skip_network_active_check

Ngidini pangembang kanggo nyepetake pamriksa aktivasi jaringan.

Iki migunani nalika nggunakake pangaturan adhedhasar composer lan pangaturan kustom liyane, kayata Bedrock, contone, ing ngendi nggunakake plugin minangka mu-plugins iku lumrah.

## Paramèter {#parameters}

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Apa kita kudu ngliwati pamriksa utawa ora, gawané false. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepake ing [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ing baris 272


## Ngasilake {#returns}
true yen panjenengan kepengin ngliwati pamriksa, false yen ora.
