---
title: پلاجن بلڊر ۽ ساندبو
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# प्लगइन बिल्डर र सेन्डबक्स {#plugin-builder--sandbox}

Gratis AI Agent v1.5.0 ۾ **Plugin Builder & Sandbox System** شامل ڪيو آهي، جيڪو توهان جي نڪري (network) تي WordPress plugins کي محفوظ، الگ (isolated) sandbox ماحول ۾ جنريٽ ڪرڻ، فعال ڪرڻ ۽ منظم ڪرڻ جو موقعي ڏئي ٿو — هي هم سڀ هڪ محفوظ، الگ ماحول ۾ ٿيندو.

## گهرجانب (Overview) {#overview}

Plugin Builder ان AI assistant کي طبيعي ٻولي جي درخواستن جي جواب ۾ ڪسبي طور تي WordPress plugins لکڻ جي اجازت ڏئي ٿو. جنريٽ ٿيل plugins کي sandbox layer اندر تصديق (validate)، محفوظ ڪرڻ ۽ فعال ڪرڻ کان اڳ انهن کي لائیو سائيٽ جي ڪارڪردگي متاثر ٿيڻ کان سواءِ هڪ الگ ماحول ۾ رکيو ويندو آهي.

استعمال جا مثالون آهن:

- پروگرامر جي شموليت کان سواءِ ہلڪت پڻ ڏيکڻ وارن utility plugins جو جنريٽ ڪرڻ.
- انهن features کي پروٽوتاپ (prototype) ڪرڻ جيڪي WordPress hooks يا custom post types گهرجي ٿا.
- بليڪ ڪريشن عملن لاءِ مختصر وقت وارن automation scripts جوٺ ڪرڻ.

## AI جي ذريعي plugin جو جنريٽ ڪرڻ {#generating-a-plugin-via-ai}

Plugin جنريٽ ڪرڻ لاءِ، Gratis AI Agent chat interface کي کيلو ۽ وضاحت ڪريو ته توهان کي ڪهڙي گهرج آهي. مثال طور:

> "هي هڪ plugin banao جيڪو dashboard تي custom admin notice شامل ڪري."

AI اهو ڪندو:

1. structured code generation جو استعمال ڪندي plugin PHP code پيدا ڪندو.
2. syntax errors ۽ غير محفوظ patterns لاءِ output کي تصديق (validate) ڪندو.
3. جنريٽ ٿيل plugin کي sandbox store ۾ محفوظ ڪندو.
4. plugin جو slug ۽ **Activate in Sandbox** بٽڻ سان هڪ confirmation واپس ڪندو.

توهان فعال ڪرڻ کان اڳ، اها نتيجي کي وڌيڪ بهتر ڪري سگهو ٿا اني نفس گفتگو (conversation thread) ۾ follow-up ڪري سگهو ٿا.

## Sandbox فعال ڪرڻ {#sandbox-activation}

Sandbox ۾ جنريٽ ٿيل plugin کي فعال ڪرڻ ۽ لائیو network تي فعال ڪرڻ جو فرق آهي. sandbox:

- هڪ الگ WordPress environment (wp-env) ۾ plugin کي چلاتا آهين.
- ڪنهن به PHP errors، warnings يا hook conflicts کي محفوظ رکندا آهيون.
- activation جو نتيجو chat interface ۾ واپس رپورٽ ڪندو.

Sandbox ۾ plugin فعال ڪرڻ لاءِ، AI جي جواب ۾ **Activate in Sandbox** بٽڻ تي کليڪ ڪريو، يا slash command استعمال ڪريو:

```
/activate-plugin <plugin-slug>
```

स्थिति (status) मेसेज بتاتا بتاي کہ پلےجن فعال ٿيو يا نه ٿيو. جيڪڏهن ڪو غلطي ٿئي، ته غلطي جو لاگ چٽ ٿري ۾ ڏيکاري ويندو آهي.

## جنريٽڊ پلےجن جو انتظام ڪرڻ {#managing-generated-plugins}

جنريٽڊ پلےجن **Gratis AI Agent → Plugin Builder → Manage Plugins** ۾ لسٹ ٿيندا آهن. ان سڪرين کان توهان هيٺيون ڪري سگهو ٿا:

| عمل (Action) | وضاحت (Description) |
|---|---|
| **View source** | پلےجن جو پورو PHP ڪوڊ ڏسو. |
| **Re-activate in sandbox** | ساندبو ۾ فعال ٿيڻ جي تصديق کي ٻيهر چالو ڪريو. |
| **Install on network** | پلےجن کي لائیو ڪارڊ (network) تي نصب ڪريو (ڪارڊ لاءِ هيٺ ڏنل تصديقي عمل گهرجي). |
| **Update** | AI جي ذريعي نون نسخه فراهم ڪريو، جيڪا موجودہ ڪوڊ جي جاءِ تي روي ٿي. |
| **Delete** | پلےجن کي ساندبو اسٽور کان کڻي ڇڏيو. هي سڀني سائٽن کان هو متفعّل (deactivate) ڪري ڇڏيندا آهيون. |

:::warning
**Install on network** جنريٽڊ پلےجن کي توهان جي لائیو WordPress multisite تي نصب ڪري ٿو. اڳتي وڌڻ کان پهريون پلےجن جو ڪوڊ ڏسو. Gratis AI Agent لائیو انستانت (live install) كامل ڪرڻ کان اڳ تصديق لاءِ پوڇندو.
:::

## ڪارڊ تي جنريٽڊ پلےجن نصب ڪرڻ {#installing-a-generated-plugin-on-the-network}

جڏهن توهان هڪ ساندبو ۾ پلےجن سان مطمئن ٿي آيو، ته توهان اهو لائیو ڪارڊ تي نصب ڪري سگهو ٿا:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** تي وڃو.
2. ان پلےجن جو جنبش (next) **Install on Network** ڇڪڻ تي ڪيو.
3. اسڪرين کي تصديق ڏيو. پلےجن `wp-content/plugins/` ۾ نصب ٿي ويندو آهي ۽ ڪارڊ تي فعال ٿي ويندو آهي.

ٻئي طريقو هي آهي ته چٽ ان চٽ (chat) انٽرفيس ۾ سڌي ڪمان استعمال ڪري سگهو ٿا:

```
/install-plugin <plugin-slug>
```

## پلےجن جي اپڊيٽس {#plugin-updates}

ڪو جنريٽڊ پلےجن کي اپڊيٽ ڪرڻ لاءِ، نون گفتگو ۾ AI اسسٽنٽ کي تبديلي بيان ڪريو:

> "dashboard-notice پلےجن کي صرف اڊمن (administrators) کي نوٽيس ڏيڻ جو عمل ڏيکاري وڃي ته اپڊيٽ ڪريو."

AI هڪ نون نسخه جنريٽ ڪندو، جيڪا موجوده نسخه سان ساندبو ۾ ظاهر ٿيندي آهي. توهان ڊيفرنس (diff) ڏسو ۽ اپڊيٽ لاڳو ڪرڻ کان اڳ تصديق ڪريو.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder هر جاري پليجن جي hooks ۽ filters کي جانچڻ لاءِ هڪ integrated **HookScanner** جو استعمال ڪري ٿو جيڪو هر جاري پليجن طرفان register ڪيل hooks ۽ filters کي analyze ڪري ٿو. HookScanner جو نتيجو чаٽ جواب ۾ ڏيکاري ٿو ۽ ان ۾ شامل آهي:

- عملي hooks جيڪي register ڪيا ويا آهن (`add_action` calls).
- فلٽر hooks جيڪي register ڪيا ويا آهن (`add_filter` calls).
- پليجن جي dependencies ۾ موجود ڪنيڪشن (skips `vendor/` ۽ `node_modules/` directories) ۾ موجود ڪنهن به hooks.

هي توهان کي پليجن کي activate ڪرڻ کان اڳ ان جو عمل سمجهڻ ۾ مدد ڪري ٿو.

## Security Considerations {#security-considerations}

- جاري پليجن کي هٿ سان نصب ڪيل پليجن کان الگ رکيل آهي ۽ standard WordPress plugin management screen تائين اهو قابل رسائي ناهي جڏهن توهان اهو network تي explicitly install نه ڪريو.
- sandbox ملفات لکڻ دوران directory traversal کي روڪڻ لاءِ path validation جو استعمال ڪري ٿو.
- ان پليجن ۾ جيڪي خطرناڪ ڪالز (dangerous function calls) آهن (جنهن مثال طور `eval`, `exec`, `system` آهن)، انهن کي validation دوران flag ڪيو ويندو آهي ۽ انهن کي activate نه ڪندو.
