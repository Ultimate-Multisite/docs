---
id: wu_make_primary_domain_redirect_url
title: Kichujio - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Inarekebisha URL ya kurudishwa (redirect) baada ya kuifanya nyanja (domain) kuwa kuu.

Inamruhusu watengenezaji (developers) kubadilisha mahali ambapo watumiaji wanarudi (redirect) baada ya kuweka nyanja kuwa kuu kwa mafanikio. Kwa msingi (by default), inarudi kwenye URL ya sasa kwenye tovuti kuu, au kwenye URL ya admin ya tovuti inayobadilishwa.

## Vigezo (Parameters) {#parameters}

| Name | Type | Maelezo |
|------|------|-------------|
| $redirect_url | `string` | URL ya default ya kurudishwa. Inaweza kuwa URL ya sasa (ikiwa ni tovuti kuu) au URL ya admin ya tovuti husika. |
| $current_site | `int` | ID ya tovuti ambayo nyanja yake inafanywa kuwa kuu. |
| $domain | `\Domain` | Object ya nyanja ambayo ilifanywa kuwa kuu. |
| $old_primary_domains | `array` | Array ya IDs za nyanja ambazo zilikuwa kuu hapo awali. |

### Tangu {#since}

- 2.0.0
### Chanzo {#source}

Imefafanuliwa katika [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) kwenye mstari wa 639

## Inarejesha (Returns) {#returns}
URL ya kurudishwa (redirect) iliyorekebishwa.
