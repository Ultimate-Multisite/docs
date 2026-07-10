---
id: wu_make_primary_domain_redirect_url
title: Filtè - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtè: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

Filtre URL redireksyon an apre yo fin fè yon domèn vin prensipal.

Pèmèt devlopè yo pèsonalize kote yo redirije itilizatè yo apre yo fin mete yon domèn kòm prensipal avèk siksè. Pa default, li redirije nan URL aktyèl la sou sit prensipal la, oswa nan URL administrasyon sit y ap modifye a.

## Paramèt {#parameters}

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $redirect_url | `string` | URL redireksyon default la. Swa URL aktyèl la (si se sit prensipal la) oswa URL administrasyon sit aktyèl la. |
| $current_site | `int` | ID sit ki gen domèn y ap fè vin prensipal la. |
| $domain | `\Domain` | Objè domèn ki te vin prensipal la. |
| $old_primary_domains | `array` | Tablo ID domèn ki te prensipal deja. |

### Depi {#since}

- 2.0.0
### Sous {#source}

Defini nan [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) nan liy 639


## Retounen {#returns}
URL redireksyon filtre a.
