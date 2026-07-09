---
id: wu_domain_became_primary
title: عمل - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

تڏهن هلندو آهي جڏهن ڪو ڊومين ڪنهن سائيٽ لاءِ پرائمري ڊومين بڻجي وڃي.

هي action تڏهن trigger ٿئي ٿو جڏهن ڪنهن ڊومين جو primary_domain flag true تي سيٽ ڪيو وڃي، نئون پرائمري ڊومين ٺاهڻ وقت يا موجوده ڊومين کي اپڊيٽ ڪري پرائمري بڻائڻ وقت.

## پيرا ميٽر

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | اهو ڊومين جيڪو پرائمري بڻجي ويو. |
| $blog_id | `int` | متاثر ٿيل سائيٽ جو blog ID. |
| $was_new | `bool` | ڇا هي نئون ٺاهيل ڊومين آهي. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) ۾ لائين 560 تي تعريف ڪيل
