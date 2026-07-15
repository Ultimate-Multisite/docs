---
id: wp_ultimo_skip_network_active_check
title: فلٽر - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

ڊولپرز کي نيٽ ورڪ فعال ڪرڻ جي چڪاس کي مختصر رستي سان ختم ڪرڻ جي اجازت ڏئي ٿو.

هي composer-بنياد ۽ ٻين ڪسٽم سيٽ اپس استعمال ڪرڻ وقت فائديمند آهي، جهڙوڪ Bedrock، مثال طور، جتي plugins کي mu-plugins طور استعمال ڪرڻ عام ڳالهه آهي.

## پيرا ميٽرز {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $skip_network_activation_check | `bool` | ڇا اسان کي چڪاس ڇڏڻ گهرجي يا نه، ڊفالٽ false آهي. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ۾ ليڪ 272 تي بيان ٿيل


## واپسيون {#returns}
true جيڪڏهن توهان چڪاس ڇڏڻ چاهيو ٿا، ٻي صورت ۾ false.
