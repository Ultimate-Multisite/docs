---
id: wu_magic_link_enforce_ip
title: فلٽر - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# فلٽر: wu_magic_link_enforce_ip

فلٽر ڪري ٿو ته IP پتي جي تصديق لاڳو ڪئي وڃي يا نه.

false تي سيٽ ڪريو ته جيئن tokens مختلف networks مان ڪم ڪري سگهن. هي سيڪيورٽي گهٽائي ٿو پر استعمال جي آساني وڌائي ٿو (مثال طور، mobile users لاءِ جيڪي networks مٽائين ٿا).

## پيراميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $enforce | `bool` | ڇا IP پتي جي matching لاڳو ڪئي وڃي. |

### کان وٺي

- 2.0.0
### ذريعو

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) ۾ line 422 تي بيان ٿيل آهي
