---
id: wu_make_primary_domain_redirect_url
title: فلٽر - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# Filter: wu_make_primary_domain_redirect_url {#filter-wumakeprimarydomainredirecturl}

ڊومين کي primary بڻائڻ کان پوءِ redirect URL کي فلٽر ڪري ٿو.

ڊولپرز کي اجازت ڏئي ٿو ته ڊومين کي ڪاميابي سان primary طور سيٽ ڪرڻ کان پوءِ استعمال ڪندڙن کي ڪٿي redirect ڪيو وڃي، ان کي پنهنجي مرضي مطابق ڪن. ڊفالٽ طور، مکيه سائيٽ تي موجوده URL ڏانهن، يا تبديل ٿيندڙ سائيٽ جي admin URL ڏانهن redirect ڪري ٿو.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $redirect_url | `string` | ڊفالٽ redirect URL. يا ته موجوده URL (جيڪڏهن مکيه سائيٽ هجي) يا موجوده سائيٽ جو admin URL. |
| $current_site | `int` | انهي سائيٽ جو ID جنهن جو ڊومين primary بڻايو پيو وڃي. |
| $domain | `\Domain` | اهو ڊومين آبجيڪٽ جيڪو primary بڻايو ويو. |
| $old_primary_domains | `array` | انهن ڊومينن جي IDs جو array جيڪي اڳ primary هئا. |

### کان وٺي {#since}

- 2.0.0
### ماخذ {#source}

[`inc/ui/class-domain-mapping-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-domain-mapping-element.php#L639) ۾ لائين 639 تي بيان ٿيل


## واپسيون {#returns}
فلٽر ٿيل redirect URL.
