---
id: wp_ultimo_skip_network_active_check
title: Զտիչ - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Զտիչ՝ wp_ultimo_skip_network_active_check

Թույլ է տալիս մշակողներին շրջանցել ցանցային ակտիվացման ստուգումը։

Սա օգտակար է composer-ի վրա հիմնված և այլ անհատականացված կարգավորումներ օգտագործելիս, օրինակ՝ Bedrock-ի դեպքում, որտեղ plugin-ները որպես mu-plugins օգտագործելը սովորական է։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Արդյոք պետք է բաց թողնենք ստուգումը, թե ոչ․ լռելյայն՝ false։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272)-ում՝ 272-րդ տողում


## Վերադարձնում է {#returns}
true, եթե ցանկանում եք բաց թողնել ստուգումը, հակառակ դեպքում՝ false։
