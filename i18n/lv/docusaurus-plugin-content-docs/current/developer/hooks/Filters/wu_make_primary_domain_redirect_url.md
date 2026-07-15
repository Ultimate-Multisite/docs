---
id: wu_make_primary_domain_redirect_url
title: Filtrs - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filtrs: wu_make_primary_domain_redirect_url

Filtrē novirzīšanas URL pēc domēna padarīšanas par primāro.

Ļauj izstrādātājiem pielāgot, uz kurieni lietotāji tiek novirzīti pēc tam, kad domēns ir veiksmīgi iestatīts kā primārais. Pēc noklusējuma novirza uz pašreizējo URL galvenajā vietnē vai uz modificējamās vietnes admin URL.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $redirect_url | `string` | Noklusējuma novirzīšanas URL. Vai nu pašreizējais URL (ja tā ir galvenā vietne), vai pašreizējās vietnes admin URL. |
| $current_site | `int` | Tās vietnes ID, kuras domēns tiek padarīts par primāro. |
| $domain | `\Domain` | Domēna objekts, kas tika padarīts par primāro. |
| $old_primary_domains | `array` | To domēnu ID masīvs, kas iepriekš bija primārie. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) 639. rindā


## Atgriež {#returns}
Filtrēto novirzīšanas URL.
