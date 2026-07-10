---
title: ٽيڪس جو انتظام
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# ٽيڪس سنڀالڻ {#tax-handling}

Ultimate Multisite ۾ اسان جي بنيادي plugin ۾ ٽيڪس گڏ ڪرڻ وارو module ٺهيل آهي، تنهنڪري جيڪڏهن توهان کي پنهنجي منصوبن، پيڪيجن ۽ خدمتن تي وڪري جا ٽيڪس گڏ ڪرڻا هجن، ته توهان ڪنهن به add-on انسٽال ڪرڻ کان سواءِ آساني سان ائين ڪري سگهو ٿا.

يورپ ۾ واقع ڪمپنين لاءِ، اسان هڪ **add-on** پيش ڪريون ٿا جيڪو VAT جي تعميل کي بهتر **سپورٽ ڪرڻ** لاءِ اوزار ۽ خاصيتون شامل ڪري ٿو.

Ultimate Multisite توهان جي طرفان حڪومت کي ٽيڪس فائل يا جمع نٿو ڪرائي؛ اسان صرف توهان کي ڏيتي ليتي جي وقت مناسب ٽيڪس گڏ ڪرڻ ۾ مدد ڪريون ٿا. **توهان کي اڃا به ٽيڪس پاڻ جمع ڪرائڻا پوندا.**

## ٽيڪس گڏ ڪرڻ فعال ڪرڻ {#enabling-tax-collection}

ٽيڪس گڏ ڪرڻ ڊفالٽ طور فعال نه آهي. ان کي فعال ڪرڻ لاءِ، توهان کي **Ultimate Multisite > Settings > Taxes** ڏانهن وڃڻو پوندو ۽ Enable Taxes سيٽنگ کي فعال ڪرڻ لاءِ toggle ڪرڻو پوندو.

![Tax سيٽنگن واري صفحي جي مٿان Enable Taxes toggle](/img/config/settings-taxes-enable.png)

هتي ٽيڪس سيٽنگن واري صفحي جو مڪمل ڏيک آهي:

![Tax سيٽنگن جو مڪمل صفحو](/img/config/settings-taxes-full.png)

توهان انفرادي مصنوعات لاءِ ٽيڪس سيٽنگون پڻ ڏسي سگهو ٿا:

![مصنوعات لاءِ Tax سيٽنگون](/img/config/settings-taxes.png)

### ٽيڪس خارج ٿيل بمقابله ٽيڪس شامل {#tax-excluded-vs-tax-included}

ڊفالٽ طور، توهان جي سڀني مصنوعات جون قيمتون ٽيڪس کان خارج آهن، جنهن جو مطلب آهي ته ٽيڪس پيداوار جي قيمت ۾ **شامل نه آهن**. جيڪڏهن اسان طئي ڪريون ته ڪنهن گراهڪ کي ڪنهن خاص خريداري تي ٽيڪس ادا ڪرڻ گهرجن، ته اسان ٽيڪس subtotal جي **مٿان** شامل ڪنداسين.

جيڪڏهن توهان چاهيو ٿا ته ٽيڪس توهان جي پيداوار جي قيمت ۾ شامل هجن، ته توهان **Inclusive Tax** سيٽنگ فعال ڪري ائين ڪري سگهو ٿا.

![Enable Taxes سيٽنگ جي هيٺان Inclusive Tax toggle قطار](/img/config/settings-taxes-inclusive.png)

توهان جيڪي تبديليون ڪيون آهن، انهن کي **save** ڪرڻ نه وساريو.

###

## ٽيڪس شرحون ٺاهڻ {#creating-tax-rates}

Tax Collection فعال ڪرڻ کان پوءِ، توهان کي اسان جي ٽيڪس شرحون editor استعمال ڪندي مخصوص هنڌن لاءِ ٽيڪس شرحون ٺاهڻيون پونديون.

توهان Tax سيٽنگن واري صفحي جي sidebar تي **Manage Tax Rates** بٽڻ تي ڪلڪ ڪري editor تائين رسائي حاصل ڪري سگهو ٿا.

![سيٽنگن واري صفحي تي Tax Rates panel ۾ Manage Tax Rates link](/img/config/settings-taxes-manage-rates.png)

ٽيڪس شرحون editor واري صفحي تي، توهان **Add new Row** بٽڻ تي ڪلڪ ڪري نيون Tax Rates شامل ڪري سگهو ٿا.

![مٿي Add new Row بٽڻ سان Tax rates editor table](/img/config/tax-rates-editor.png)

توهان کي هر ٽيڪس شرح کي هڪ **عنوان** (invoices تي استعمال ٿيندو) ڏيڻو پوندو. پوءِ توهان اهو **ملڪ** (لازمي)، **رياست،** ۽ **شهر** (ٻئي اختياري) چونڊي سگهو ٿا جتي هي ٽيڪس لاڳو ڪيو ويندو. آخر ۾، **ٽيڪس شرح سيڪڙن ۾** شامل ڪريو.

### ٽيڪس درجا {#tax-categories}

توهان مختلف قسمن جي مصنوعات لاءِ مختلف ٽيڪس شرحون شامل ڪرڻ لاءِ ڪيترائي Tax Categories به ٺاهي سگهو ٿا.

**Add new Tax Category** تي ڪلڪ ڪريو، پوءِ پنهنجي درجي جو نالو لکو ۽ **Create** دٻايو.

![tax rates editor جي مٿان Add new Tax Category بٽڻ](/img/config/tax-categories-add.png)

![create category modal ۾ Tax Category Name input field](/img/config/tax-categories-create-modal.png)

درجن ۾ برائوز ڪرڻ لاءِ، **Switch** تي ڪلڪ ڪريو ۽ اهو درجو چونڊيو جنهن ۾ توهان نوان ٽيڪس شامل ڪرڻ چاهيو ٿا.

![tax categories وچ ۾ تبديل ڪرڻ لاءِ Switch dropdown بٽڻ](/img/config/tax-categories-switch.png)

![دستياب درجا ڏيکاريندڙ Tax category selector dropdown](/img/config/tax-categories-select.png)

توهان ڪنهن خاص پيداوار لاءِ ٽيڪس درجو **Product edit page** ڏانهن وڃي ۽ پوءِ Taxes tab ڏانهن وڃي مقرر ڪري سگهو ٿا.

![tax category ۽ taxable toggle سان Product taxes tab](/img/config/product-taxes.png)

انهيءَ ئي screen تي، توهان **Is Taxable?** toggle بند ڪري Ultimate Multisite کي ٻڌائي سگهو ٿا ته ان کي انهيءَ ڏنل پيداوار تي ٽيڪس گڏ نه ڪرڻ گهرجن.

## يورپي VAT مدد {#european-vat-support}

جيئن اڳ ذڪر ڪيو ويو، اسان وٽ EU ۾ انهن گراهڪن لاءِ هڪ add-on موجود آهي جن جون يورپي VAT ضابطن سبب اضافي گهرجون آهن.

اسان جا VAT اوزار ڪجهه اهم شين ۾ مدد ڪن ٿا:

  * EU VAT شرحون آساني سان لوڊ ڪرڻ؛

  * VAT Number گڏ ڪرڻ ۽ تصديق - ۽ VAT کان مستثني ادارن لاءِ reverse charging (جهڙوڪ صحيح VAT نمبرن واريون ڪمپنيون)؛

اهو add-on انسٽال ڪرڻ لاءِ، **Ultimate Multisite > Settings** ڏانهن وڃو ۽ پوءِ **Check our Add-ons** sidebar link تي ڪلڪ ڪريو.

![Check our Add-ons link سان Settings page sidebar](/img/config/settings-taxes-addons-link.png)

توهان کي اسان جي add-ons صفحي ڏانهن redirect ڪيو ويندو. اتي، توهان **Ultimate Multisite VAT add-on** ڳولي ۽ انسٽال ڪري سگهو ٿا.

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

پوءِ، **Network Admin > Plugins** ڏانهن وڃو ۽ انهيءَ add-on کي سڄي network تي activate ڪريو.

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

جيڪڏهن توهان واپس **Tax Settings tab** ڏانهن وڃو، ته توهان کي نوان اختيار موجود نظر ايندا. نوان VAT اوزار فعال ڪرڻ لاءِ **Enable VAT Support** اختيار کي toggle ڪريو. پنهنجي سيٽنگون **save** ڪرڻ نه وساريو!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT ٽيڪس شرحون ڪڍڻ {#pulling-on-vat-tax-rates}

اسان جي integration پاران شامل ڪيل اوزارن مان هڪ EU member states لاءِ ٽيڪس شرحون لوڊ ڪرڻ جي صلاحيت آهي. اهو EU VAT support فعال ڪرڻ کان پوءِ tax rates editor صفحي تي وڃڻ سان ڪري سگهجي ٿو.

صفحي جي تري ۾، توهان VAT pulling جا اختيار ڏسندا. شرح جو قسم چونڊڻ ۽ **Update EU VAT Rates** بٽڻ تي ڪلڪ ڪرڻ سان هر EU member state لاءِ ٽيڪس شرحون table ۾ کڄي اينديون ۽ خودڪار طور ڀرجي وينديون. پوءِ، توهان کي صرف ان کي save ڪرڻو آهي.

![tax rates editor جي تري ۾ Update EU VAT Rates بٽڻ](/img/config/tax-rates-vat-pull.png)

توهان انهن کي pull ڪرڻ کان پوءِ قيمتون پڻ edit ڪري سگهو ٿا. ائين ڪرڻ لاءِ، بس جيڪا table line توهان کي گهرجي ان کي edit ڪريو ۽ نيون قيمتون save ڪرڻ لاءِ ڪلڪ ڪريو.

### VAT تصديق {#vat-validation}

جڏهن VAT support فعال هجي، Ultimate Multisite checkout form ۾ billing address field جي هيٺان هڪ اضافي field شامل ڪندو. هي field صرف EU ۾ واقع گراهڪن لاءِ ظاهر ٿيندو.

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite پوءِ VAT Number جي تصديق ڪندو ۽ جيڪڏهن اهو صحيح نڪري اچي، ته reverse charge طريقو لاڳو ڪيو ويندو ۽ ان آرڊر تي ٽيڪس جي شرح 0% مقرر ڪئي ويندي.
