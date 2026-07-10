---
id: wu_make_primary_domain_redirect_url
title: Sivana - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Sivana: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Manivana ny URL famindrana rehefa avy manao sehatra iray ho primary.

Mamela ny developer hanamboatra manokana ny toerana hamindrana ny mpampiasa rehefa nahomby ny fametrahana sehatra iray ho primary. Amin'ny default, mamindra mankany amin'ny URL ankehitriny ao amin'ny site lehibe, na mankany amin'ny URL admin an'ilay site ovaina.

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $redirect_url | `string` | Ny URL famindrana default. Na ny URL ankehitriny (raha site lehibe) na ny URL admin an'ny site ankehitriny. |
| $current_site | `int` | Ny ID an'ilay site izay atao primary ny sehatra-ny. |
| $domain | `\Domain` | Ny domain object izay natao primary. |
| $old_primary_domains | `array` | Array misy ID an'ireo sehatra izay primary teo aloha. |

### Nanomboka {#since}

- 2.0.0
### Loharano {#source}

Voafaritra ao amin'ny [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) amin'ny andalana 639


## Mamerina {#returns}
Ny URL famindrana voasivana.
