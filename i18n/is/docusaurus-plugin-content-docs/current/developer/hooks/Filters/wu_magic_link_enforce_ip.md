---
id: wu_magic_link_enforce_ip
title: Sía - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Sía: wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Síar hvort eigi að framfylgja staðfestingu IP-vistfangs.

Stilltu á false til að leyfa tokens að virka frá mismunandi netum. Þetta dregur úr öryggi en eykur notagildi (t.d. fyrir farsímanotendur sem skipta um net).

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $enforce | `bool` | Hvort eigi að framfylgja samsvörun IP-vistfangs. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) í línu 422
