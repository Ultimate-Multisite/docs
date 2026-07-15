---
id: wu_magic_link_enforce_ip
title: فلٽر - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# فلٽر: wu_magic_link_enforce_ip

فلٽر ڪريو ته ڇا IP پتي جي تصديق لاڳو ڪئي وڃي.

false تي سيٽ ڪريو ته جيئن tokens مختلف نيٽ ورڪن مان ڪم ڪري سگهن. هي سيڪيورٽي گهٽائي ٿو پر استعمال ۾ آساني وڌائي ٿو (مثال طور، موبائل استعمال ڪندڙن لاءِ جيڪي نيٽ ورڪ مٽائين ٿا).

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $enforce | `bool` | ڇا IP پتي جي ملائڻ کي لاڳو ڪيو وڃي. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) ۾ قطار 422 تي بيان ٿيل.
