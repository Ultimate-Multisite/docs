---
title: گهڻ-ڪرائيداري انضمام
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy انٽيگريشن

Ultimate Multisite: Multi-Tenancy 1.2.0 خودمختيار ٽيننٽن، لڏپلاڻ جي تصديق، ۽ ٽيننٽ جي لائيف سائيڪل خودڪارڪاري لاءِ ڪيترن ئي انٽيگريشن رابطن کي تبديل ڪري ٿو.

## ٽيننٽ bootstrap وهڪرو

اهي انٽيگريشنون جيڪي ٽيننٽ ٺاهين يا تبديل ڪن ٿيون، انهن کي هن ترتيب تي عمل ڪرڻ گهرجي:

1. ٽيننٽ رجسٽري رڪارڊ ۽ الڳائپ ماڊل حل ڪريو.
2. ٽيننٽ ڊيٽابيس رائيٽر ٺاهيو يا تصديق ڪريو.
3. ٽيننٽ schema کي bootstrap ڪريو.
4. ٽيننٽ يوزر فراهم ڪريو.
5. ٽيننٽ routing ۽ filesystem paths رجسٽر ڪريو.
6. ٽيننٽ کي ظاهر ڪرڻ کان اڳ لڏپلاڻ جي تصديق هلائو.

اهو فرض نه ڪريو ته ڪو خودمختيار ٽيننٽ نيٽ ورڪ ڊيٽابيس ڪنيڪشن ٻيهر استعمال ڪري سگهي ٿو. addon پاران مهيا ڪيل ٽيننٽ رجسٽري ۽ رائيٽر abstractions استعمال ڪريو.

## SSO ۽ REST hooks

Stateless ٽيننٽ autologin مختصر-مدت tokens استعمال ڪري ٿو جن ۾ purpose claim، JTI replay protection، expiry cap، ۽ origin pinning هوندا آهن. اهي انٽيگريشنون جيڪي login buttons يا remote management links شامل ڪن ٿيون، تن کي ٽيننٽ login URLs سڌو ٺاهڻ بدران سپورٽ ٿيل SSO وهڪري ذريعي ٽيننٽ visits ٺاهڻ گهرجن.

Network-side API audit events ۽ روزاني summaries خودمختيار ٽيننٽ gateways لاءِ موجود آهن. جڏهن اهي ٻاهريان systems debug ڪيا وڃن جيڪي ٽيننٽ لائيف سائيڪل endpoints کي call ڪن ٿا، تڏهن اهي logs استعمال ڪريو.

## خودمختيار customer action URLs

Ultimate Multisite v2.13.0 خودمختيار-ٽيننٽ customer actions کي account، checkout، billing، invoice، site، template-switching، ۽ domain-mapping وهڪرن لاءِ main site ڏانهن واپس route ڪري ٿو. اهي انٽيگريشنون جيڪي ٽيننٽ-پاسي management links render ڪن ٿيون، تن کي اهي actions main-site customer panel ڏانهن point ڪرڻ گهرجن ۽ جڏهن user کي action مڪمل ڪرڻ کان پوءِ ٽيننٽ ڏانهن واپس navigate ڪرڻ جي قابل هجڻ گهرجي، تڏهن validated return target شامل ڪرڻ گهرجي.

Cross-domain management links لاءِ core SSO wrapper استعمال ڪريو:

```php
$url = wu_with_sso($main_site_customer_url);
```

ٺهيل URL اڃا به `wu_sso_url` ذريعي filterable رهي ٿو، جيڪو SSO URL، موجوده user، target site ID، ۽ redirect context حاصل ڪري ٿو. Add-ons اهو filter استعمال ڪري provider-specific context append ڪري سگهن ٿا يا broker URL کي replace ڪري سگهن ٿا، جڏهن ته Ultimate Multisite جي token validation محفوظ رهي ٿي.

Membership، invoice، billing-address، template، يا domain-management state کي خودمختيار ٽيننٽ اندر duplicate نه ڪريو. ٽيننٽ Dashboard کي launcher ۽ main-site customer panel کي managed actions لاءِ system of record سمجهو.

## لڏپلاڻ جي تصديق

لڏپلاڻ يا لائيف سائيڪل انٽيگريشن ٽيننٽ data تبديل ڪرڻ کان پوءِ، verification gates هلائو:

- `wp tenant verify-no-legacy --site=<site-id>` تصديق ڪري ٿو ته ٽيننٽ هاڻي legacy network-side paths تي دارومدار نٿو رکي.
- `wp tenant verify-sovereign-push --site=<site-id>` تصديق ڪري ٿو ته خودمختيار push jobs process ۽ drain ڪري سگهن ٿا.

انٽيگريشنن کي ناڪام verification کي deployment blocker طور سمجهڻ گهرجي ۽ ناڪامي حل ٿيڻ تائين ٽيننٽ کي live mark ڪرڻ کان پاسو ڪرڻ گهرجي.

## ٽيننٽ deletion

Deletion وهڪرن کي addon teardown path call ڪرڻ گهرجي ته جيئن ٽيننٽ ڊيٽابيس credentials صاف ڪيا وڃن. ٻاهريون انٽيگريشنون teardown ڪامياب ٿيڻ کان پوءِ provider resources هٽائي سگهن ٿيون، پر verification يا async push jobs اڃا هلندڙ هجن ته host databases يا folders delete نه ڪرڻ گهرجن.

## Deprecated ڊيٽابيس router

Legacy `Database_Router` کي deprecation stub سان replace ڪيو ويو آهي. نيون انٽيگريشنون پراڻي router class تي دارومدار ڪرڻ بدران current site router ۽ ٽيننٽ registry APIs ذريعي ٽيننٽ resolve ڪرڻ گهرجن.
