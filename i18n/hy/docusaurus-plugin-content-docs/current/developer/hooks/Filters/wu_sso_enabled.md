---
id: wu_sso_enabled
title: Զտիչ - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled {#filter-wussoenabled}

Միացնել/անջատել միջդոմենային մեկ մուտքի (SSO) հնարավորությունը։

Զտեք այս արժեքը՝ single-sign-on-ը ամբողջությամբ անջատելու կամ փոխարենը պայմանականորեն միացնելու համար։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $enabled | `bool` | Արդյո՞ք SSO-ն պետք է միացված լինի։ True՝ միացվածի համար, false-ish՝ անջատվածի համար։ |

### Սկսած {#since}

- 2.0.11
### Աղբյուր {#source}

Սահմանված է [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110)-ում՝ 110-րդ տողում


## Վերադարձնում է {#returns}
SSO-ն միացվա՞ծ է, թե ոչ։
