---
id: wu_use_domain_mapping
title: Sía - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Sía: wu_use_domain_mapping

Ákvarðar hvort nota eigi vörpun

Yfirleitt viltu aðeins leyfa virkum vörpunum að vera notaðar. Hins vegar, ef þú vilt nota lengra komna rökvísi, eða leyfa óvirkum lénum að vera varpað líka, skaltu einfaldlega sía hér.

## Færibreytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $is_active | `bool` | Á að meðhöndla vörpunina sem virka? |
| $mapping | `\Domain` | Vörpun sem við erum að skoða |
| $domain | `string` |  |

### Uppruni {#source}

Skilgreint í [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) í línu 391
