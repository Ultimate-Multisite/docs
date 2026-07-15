---
id: wu_domain_has_correct_dns
title: Filtre - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filtre: wu_domain_has_correct_dns

Permet als desenvolupadors de plugins afegir noves comprovacions per definir els resultats.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $result | `bool` | el resultat actual. |
| $domain | `self` | La instància de domini actual. |
| $domains_and_ips | `array` | La llista de dominis i IPs trobats a la consulta DNS. |

### Des de {#since}

- 2.0.4
### Font {#source}

Definit a [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) a la línia 455


## Retorna {#returns}
Si el DNS està configurat correctament o no.
