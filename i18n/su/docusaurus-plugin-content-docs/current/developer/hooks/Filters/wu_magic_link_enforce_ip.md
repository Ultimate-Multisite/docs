---
id: wu_magic_link_enforce_ip
title: Saringan - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Saringan: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Saring naha kudu maksa verifikasi alamat IP.

Setel ka false pikeun ngidinan token jalan tina jaringan anu béda. Ieu ngurangan kaamanan tapi ningkatkeun kagunaan (contona, pikeun pamaké mobile anu pindah-pindah jaringan).

## Parameter {#parameters}

| Ngaran | Tipe | Panjelasan |
|------|------|-------------|
| $enforce | `bool` | Naha kudu maksa panyaluyuan alamat IP. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) dina garis 422
