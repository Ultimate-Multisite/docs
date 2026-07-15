---
title: گهڻ-ڪرائيداري انضمام
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# گهڻ-ڪرائيداري انضمام

Ultimate Multisite: گهڻ-ڪرائيداري 1.2.0 خودمختيار ڪرائيدارن، منتقلي جي تصديق، ۽ ڪرائيدار جي زندگي-چڪر خودڪاري لاءِ ڪيترن انضمامي رابطن کي تبديل ڪري ٿو.

## ڪرائيدار bootstrap وهڪرو {#tenant-bootstrap-flow}

اهي انضمام جيڪي ڪرائيدار ٺاهين يا تبديل ڪن، هن ترتيب تي عمل ڪن:

1. ڪرائيدار رجسٽري رڪارڊ ۽ الڳائي ماڊل حل ڪريو.
2. ڪرائيدار ڊيٽابيس ليکڪ ٺاهيو يا تصديق ڪريو.
3. ڪرائيدار schema کي bootstrap ڪريو.
4. ڪرائيدار استعمال ڪندڙ مهيا ڪريو.
5. ڪرائيدار routing ۽ فائيل سسٽم paths رجسٽر ڪريو.
6. ڪرائيدار کي ظاهر ڪرڻ کان اڳ منتقلي جي تصديق هلائو.

اهو فرض نه ڪريو ته خودمختيار ڪرائيدار نيٽ ورڪ ڊيٽابيس ڪنيڪشن ٻيهر استعمال ڪري سگهي ٿو. اضافي طرفان مهيا ڪيل ڪرائيدار رجسٽري ۽ ليکڪ abstractions استعمال ڪريو.

## SSO ۽ REST hooks {#sso-and-rest-hooks}

بي-حالت ڪرائيدار خودڪار لاگ اِن مختصر مدي وارا tokens استعمال ڪري ٿو جن ۾ purpose claim، JTI replay protection، expiry cap، ۽ origin pinning شامل آهن. اهي انضمام جيڪي login buttons يا پري انتظام لنڪس شامل ڪن، انهن کي ڪرائيدار login URLs سڌو ٺاهڻ بدران supported SSO وهڪري ذريعي ڪرائيدار visits پيدا ڪرڻ گهرجن.

نيٽ ورڪ پاسي API audit events ۽ روزاني خلاصا خودمختيار ڪرائيدار gateways لاءِ موجود آهن. اهي logs استعمال ڪريو جڏهن ٻاهرين نظامن کي debugging ڪيو وڃي جيڪي ڪرائيدار زندگي-چڪر آخري نقطن کي call ڪن ٿا.

## خودمختيار گراهڪ action URLs {#sovereign-customer-action-urls}

Ultimate Multisite v2.13.0 خودمختيار-ڪرائيدار گراهڪ actions کي Account، checkout، billing، invoice، سائيٽ، template-switching، ۽ domain-mapping وهڪرن لاءِ مکيه سائيٽ ڏانهن واپس route ڪري ٿو. اهي انضمام جيڪي ڪرائيدار پاسي انتظام لنڪس render ڪن، انهن actions کي مکيه-سائيٽ گراهڪ panel ڏانهن point ڪرڻ گهرجي ۽ جڏهن استعمال ڪندڙ action مڪمل ڪرڻ کان پوءِ ڪرائيدار ڏانهن واپس navigate ڪري سگهي، تڏهن validated return target شامل ڪرڻ گهرجي.

cross-domain انتظام لنڪس لاءِ core SSO wrapper استعمال ڪريو:

```php
$url = wu_with_sso($main_site_customer_url);
```

ٺهيل URL `wu_sso_url` ذريعي filterable رهي ٿو، جيڪو SSO URL، موجوده استعمال ڪندڙ، target site ID، ۽ redirect context حاصل ڪري ٿو. Add-ons اهو filter استعمال ڪري provider-specific context append ڪري سگهن ٿا يا broker URL کي replace ڪري سگهن ٿا، جڏهن ته Ultimate Multisite جي token validation برقرار رکي وڃي.

membership، invoice، billing-address، template، يا domain-management state کي خودمختيار ڪرائيدار اندر نقل نه ڪريو. ڪرائيدار Dashboard کي launcher ۽ مکيه-سائيٽ گراهڪ panel کي managed actions لاءِ system of record طور سمجھو.

## منتقلي جي تصديق {#migration-verification}

منتقلي يا زندگي-چڪر انضمام ڪرائيدار data تبديل ڪرڻ کان پوءِ، تصديق gates هلائو:

- `wp tenant verify-no-legacy --site=<site-id>` تصديق ڪري ٿو ته ڪرائيدار هاڻي legacy نيٽ ورڪ پاسي paths تي دارومدار نٿو رکي.
- `wp tenant verify-sovereign-push --site=<site-id>` تصديق ڪري ٿو ته خودمختيار push jobs process ۽ drain ڪري سگهن ٿا.

انضمامن کي ناڪام تصديق کي deployment blocker طور سمجھڻ گهرجي ۽ ناڪامي حل ٿيڻ تائين ڪرائيدار کي live نشان لڳائڻ کان پاسو ڪرڻ گهرجي.

## ڪرائيدار deletion {#tenant-deletion}

Deletion وهڪرن کي اضافي teardown path call ڪرڻ گهرجي ته جيئن ڪرائيدار ڊيٽابيس credentials صاف ڪيا وڃن. ٻاهرين انضمام teardown ڪامياب ٿيڻ کان پوءِ provider resources هٽائي سگهن ٿا، پر verification يا async push jobs اڃا هلندڙ هجن ته host databases يا folders delete نه ڪرڻ گهرجن.

## Deprecated ڊيٽابيس router {#deprecated-database-router}

legacy `Database_Router` کي deprecation stub سان تبديل ڪيو ويو آهي. نون انضمامن کي پراڻي router class تي دارومدار رکڻ بدران موجوده site router ۽ ڪرائيدار registry APIs ذريعي ڪرائيدار resolve ڪرڻ گهرجن.
