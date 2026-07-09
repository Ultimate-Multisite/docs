---
id: wu_make_primary_domain_redirect_url
title: Filtru - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtru: wu_make_primary_domain_redirect_url

Jiffiltra l-URL tar-ridirezzjoni wara li dominju jsir primarju.

Jippermetti lill-iżviluppaturi jippersonalizzaw fejn l-utenti jiġu ridiretti wara li jistabbilixxu dominju b’suċċess bħala primarju. B’mod awtomatiku, jirridiretti lejn l-URL attwali fuq is-sit ewlieni, jew lejn l-URL tal-admin tas-sit li qed jiġi modifikat.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $redirect_url | `string` | L-URL tar-ridirezzjoni awtomatika. Jew l-URL attwali (jekk sit ewlieni) jew l-URL tal-admin tas-sit attwali. |
| $current_site | `int` | L-ID tas-sit li d-dominju tiegħu qed isir primarju. |
| $domain | `\Domain` | L-oġġett tad-dominju li sar primarju. |
| $old_primary_domains | `array` | Array ta’ IDs ta’ dominji li qabel kienu primarji. |

### Minn

- 2.0.0
### Sors

Iddefinit f’[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) fil-linja 639


## Jirritorna
L-URL tar-ridirezzjoni ffiltrat.
