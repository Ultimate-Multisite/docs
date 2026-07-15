---
id: wu_domain_became_primary
title: عمل - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

تڏهن هلندو آهي جڏهن ڪو domain ڪنهن سائيٽ لاءِ primary domain بڻجي ٿو.

هي action تڏهن trigger ٿئي ٿو جڏهن ڪنهن domain جو primary_domain flag true تي سيٽ ڪيو وڃي، نئون primary domain ٺاهڻ وقت يا موجود domain کي primary بڻائڻ لاءِ اپڊيٽ ڪرڻ وقت.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | اهو domain جيڪو primary بڻيو. |
| $blog_id | `int` | متاثر ٿيل سائيٽ جي blog ID. |
| $was_new | `bool` | ڇا هي نئون ٺاهيل domain آهي. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ۾ لائين 560 تي بيان ٿيل
