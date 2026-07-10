---
id: wu_magic_link_enforce_ip
title: Զտիչ - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Ֆիլտր՝ wu_magic_link_enforce_ip {#filter-wumagiclinkenforceip}

Զտում է՝ արդյոք պարտադրել IP հասցեի ստուգումը։

Սահմանեք false՝ թույլ տալու համար, որ token-ները աշխատեն տարբեր ցանցերից։ Սա նվազեցնում է անվտանգությունը, բայց բարձրացնում է օգտագործման հարմարավետությունը (օրինակ՝ բջջային օգտատերերի համար, որոնք փոխում են ցանցերը)։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $enforce | `bool` | Արդյոք պարտադրել IP հասցեի համապատասխանեցումը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422)-ում՝ 422-րդ տողում
