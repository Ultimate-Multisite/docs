---
id: get_site_url_for_previewer
title: Զտիչ - ստանալ կայքի URL-ը նախադիտողի համար
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Ֆիլտր: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Թույլ է տալիս plugin մշակողներին զտել previewer-ում օգտագործվող URL-ը

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $domain | `string` | Ներկայում օգտագործվող լռելյայն տիրույթը, օգտակար է փոփոխությունների համար |
| $domain_options | `array` | Ultimate Multisite կարգավորումներ -&gt; ցանցի կարգավորումներ -&gt; տիրույթի ընտրանքներ բաժնում մուտքագրված բոլոր տիրույթի ընտրանքների ցանկը |

### Սկսած {#since}

- 1.7.2
### Աղբյուր {#source}

Սահմանված է [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) ֆայլում՝ 812-րդ տողում


## Վերադարձնում է {#returns}
Օգտագործվելիք նոր տիրույթը
