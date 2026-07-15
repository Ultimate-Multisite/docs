---
title: پلاجن بلڊر ۽ 샌ڊبڪس
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 ۾ **Plugin Builder & Sandbox System** شامل ڪيو آهي، جيڪو توهان جي نڪر (network) تي WordPress plugins کي محفوظ ۽ الگ sandbox ماحول ۾ جنريٽ ڪرڻ، فعال ڪرڻ ۽ منظم ڪرڻ جو موقعي ڏئي ٿو.

## گهرجانب (Overview) {#overview}

Plugin Builder ان AI assistant کي طبيعي ٻولي (natural language) جا درخواستون ملي رهيا هماڻي ڪندڙ custom WordPress plugins لکڻ جي صلاحيت ڏئي ٿو. جنريٽ ٿيل plugins کي sandbox layer اندر تصديق (validate)، محفوظ ڪرڻ ۽ فعال ڪرڻ کان اڳ انهن کي لائیو سائيٽ جي ڪارڪردگي تي اثر انداز ٿي نه ٿا.

اسان جو استعمال شامل آهي:

- پروگرامر جي شموليت کان سواءِ ہلڪت پڻ ڏيکڻ وارن utility plugins کي جنريٽ ڪرڻ.
- ان features جو prototyping ڪرڻ جيڪي WordPress hooks يا custom post types گهرجي.
- بَچ (batch) ڪارڪردگي لاءِ مختصر وقت وارن automation scripts کي ٺاهڻ.

## AI جي مدد سان Plugin جنريٽ ڪرڻ {#generating-a-plugin-via-ai}

Plugin جنريٽ ڪرڻ لاءِ، Gratis AI Agent chat interface खोलो ۽ وضاحت ڪريو ته توهان کي ڪهڙي شيءِ گهرجي. مثال طور:

> "ا هڪ plugin banao جيڪو dashboard تي custom admin notice شامل ڪري."

AI اهو ڪندو:

1. structured code generation جو استعمال ڪندي plugin PHP code پيدا ڪندو.
2. syntax errors ۽ غير محفوظ patterns لاءِ output کي تصديق (validate) ڪندو.
3. جنريٽ ٿيل plugin کي sandbox store ۾ محفوظ ڪندو.
4. plugin slug ۽ **Activate in Sandbox** بٽڻ سان تصديقي جواب واپس ڪندو.

توهان فعال ڪرڻ کان اڳ، اها نتيجي کي وڌيڪ بهتر ڪري سگهو ٿا ان ئي conversation thread ۾ follow-up ڪري سگهو ٿا.

## Sandbox Activation {#sandbox-activation}

Sandbox ۾ جنريٽ ٿيل plugin کي فعال ڪرڻ ۽ لائیو network تي فعال ڪرڻ جو فرق آهي. sandbox:

- هڪ الگ WordPress environment (wp-env) ۾ plugin کي چالو رکندو.
- ڪنهن به PHP errors، warnings يا hook conflicts کي محفوظ ڪري رکي ٿو.
- activation جو نتيجو chat interface ۾ واپس رپورٽ ڪندو.

Sandbox ۾ plugin فعال ڪرڻ لاءِ، AI جي جواب ۾ **Activate in Sandbox** بٽڻ تي کلڪ ڪريو، يا slash command استعمال ڪريو:

```
/activate-plugin <plugin-slug>
```

ا وضعیت میسج بت تصدیق ڪري ٿو ته ڪيئن ايڪتيويشن ڪئي وڃي يا ڪهڙي غلطيءَ ٿي وڃي. غلطي کان پوءِ، غلطي جي لاگ ڇاٽ ٿريد ۾ ڏيکاري ويندي آهي.

## جنريٽڊ پليجنٽس جو انتظام ڪرڻ (Managing Generated Plugins) {#managing-generated-plugins}

جنريٽڊ پليجنٽس **Gratis AI Agent → Plugin Builder → Manage Plugins** ۾ لسٹ ڪيا ويندا آهن. ان سڪرين کان توهان هيٺيون ڪري سگهو ٿا:

| عمل (Action) | وضاحت (Description) |
|---|---|
| **View source** | پليجنٽ جي پوري PHP ڪوڊ ڏسڻ لاءِ گهرجي. |
| **Re-activate in sandbox** | 샌ڈباکس ايڪتيويشن جا هيڪڙا چيڪ ڪري سگهو ٿا. |
| **Install on network** | پليجنٽ کي لائیو نڪري (live) ڪمپسولٽ ۾ نصب ڪرڻ (requires manual confirmation). |
| **Update** | AI جي ذريعي نون نسخه ڏيو، جيڪو موجودہ ڪوڊ جي جاءِ تي بدلون ڪري ڇڏي. |
| **Delete** | پليجنٽ کي 샌ڈباکس اسٽور کان کڻي ڇڏيو. هي سڀني سائٽن کان ان کي غير فعال (deactivate) ڪري ڇڏيندو. |

:::warning
**Install on network** جنريٽڊ پليجنٽ کي توهان جي لائیو WordPress multisite تي نصب ڪندو آهي. اڳتي وڌڻ کان پهريون پليجنٽ جو ڪوڊ ڏسو ته. Gratis AI Agent لائیو انستانت ۾ كامل ڪرڻ کان اڳ تصديق لاءِ پوڇندو رهندو.
:::

## نڪري (Network) تي جنريٽڊ پليجنٽ نصب ڪرڻ {#installing-a-generated-plugin-on-the-network}

جڏهن توهان هڪ 샌ڈباکس پليجنٽ سان مطمئن ٿي ويندا آهيو، ته توهان ان کي لائیو نڪري ۾ نصب ڪري سگهو ٿا:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** تي وڃو.
2. ان پليجنٽ جو جنبش ڪندڙ (deploy) ڪرڻ لاءِ **Install on Network** تي ڇڪڻ ڪريو.
3. اسڪرين کي تصديق ڪريو. پليجنٽ `wp-content/plugins/` ۾ نصب ٿي ويندو آهي ۽ نڪري جي سطح تي فعال (network-activated) ٿيندو آهي.

ٻئي طريقو هي آهي ته چات انٽر فيس ۾ سلاش ڪمان استعمال ڪريو:

```
/install-plugin <plugin-slug>
```

## پليجنٽ اپڊيٽس (Plugin Updates) {#plugin-updates}

جنريٽڊ پليجنٽ کي اپڊيٽ ڪرڻ لاءِ، نئين گفتگو ۾ AI اسسٽنٽ کي تبديلي بيان ڪريو:

> "Update the dashboard-notice plugin to only show the notice to administrators."

AI هڪ نون نسخه جنريٽ ڪندو آهي، جيڪا موجوده نسخه سان گڏ 샌ڈباکس ۾ ظاهر ٿيندي آهي. توهان ڊيفرنس (diff) ڏسو ۽ اپڊيٽ لاڳو ڪرڻ کان اڳ تصديق ڪريو ته.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder هڪ انٽيгреٽ **HookScanner** جو استعمال ڪري ٿو جنه هر جنريٽ ٿيل plugin تائين رجيستري ڪيل hooks ۽ filters کي تحليل ڪرڻ لاءِ ڪندو آهي. HookScanner جو نتيجو чаٽ جواب ۾ ڏيکاري ٿو ۽ ان ۾ شامل آهن:

- عمل hooks جيڪي رجيستري ڪيا ويا آهن (`add_action` calls).
- فلٽر hooks جيڪي رجيستري ڪيا ويا آهن (`add_filter` calls).
- plugin جي dependencies ۾ موجود ڪا به hooks (skips `vendor/` ۽ `node_modules/` directories).

هي توهان کي plugin کي فعال ڪرڻ کان اڳ ان جو عمل سمجهڻ ۾ مدد ڪري ٿو.

## Security Considerations {#security-considerations}

- جنريٽ ٿيل plugins کي هٿ سان نصب ڪيل plugins کان الگ رکيل آهي ۽ standard WordPress plugin management screen تائين قابل رسائي نه آهي جڏهن ته توهان انهن کي network تي واضح طور تي install نه ڪيو.
- sandbox ۾ path validation جو استعمال ڪيو ويندو آهي ته جيئن plugin فائلون لکڻ دوران directory traversal کان بچي سگهجي.
- ان plugins کي جيڪي خطرناڪ function calls (جنهن مثال طور `eval`, `exec`, `system` آهن) آهن، انهن کي validation دوران flag ڪيو ويندو آهي ۽ انهن کي فعال نه ڪندو.
