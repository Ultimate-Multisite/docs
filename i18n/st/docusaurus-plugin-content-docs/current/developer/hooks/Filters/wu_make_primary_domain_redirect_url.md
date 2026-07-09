---
id: wu_make_primary_domain_redirect_url
title: Sefe - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url

E sefa URL ya phetisetso ka mora ho etsa domain hore e be primary.

E dumella bahlahisi ho ikgethela hore na basebedisi ba fetisetswa hokae ka mora ho beha domain ka katleho e le primary. Ka kamehla, e fetisetsa ho URL ya jwale sebakeng se seholo, kapa ho URL ya admin ya sebaka se ntseng se fetolwa.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $redirect_url | `string` | URL ya phetisetso ya kamehla. E ka ba URL ya jwale (haeba e le sebaka se seholo) kapa URL ya admin ya sebaka sa jwale. |
| $current_site | `int` | ID ya sebaka seo domain ya sona e etswang primary. |
| $domain | `\Domain` | Ntho ya domain e entsweng primary. |
| $old_primary_domains | `array` | Lenane la di-ID tsa domains tse neng di le primary pele. |

### Ho tloha

- 2.0.0
### Mohlodi

E hlalositswe ho [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) moleng wa 639


## E kgutlisa
URL ya phetisetso e sefilweng.
