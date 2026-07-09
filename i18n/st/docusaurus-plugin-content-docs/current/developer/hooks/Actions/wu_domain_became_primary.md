---
id: wu_domain_became_primary
title: Ketso - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Ketso: wu_domain_became_primary

E sebetsa ha domain e fetoha domain e ka sehloohong bakeng sa saete.

Ketso ena e tsoswa ha letshwao la primary_domain la domain le behwa ho true, ebang ke ha ho thehwa domain e ntjha e ka sehloohong kapa ha ho ntjhafatswa domain e seng e le teng hore e be e ka sehloohong.

## Ditekanyetso

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domain e fetohileng e ka sehloohong. |
| $blog_id | `int` | ID ya blog ya saete e amehileng. |
| $was_new | `bool` | Hore na ena ke domain e sa tswa thehwa. |

### Ho tloha

- 2.0.0
### Mohlodi

E hlalositswe ho [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) moleng wa 560
