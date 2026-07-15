---
title: పన్నుల నిర్వహణ
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# పన్ను నిర్వహణ

Ultimate Multisite మా ప్రధాన plugin‌లోనే పన్ను వసూలు module‌ను కలిగి ఉంది. కాబట్టి మీ plans, packages మరియు services‌పై sales taxes వసూలు చేయాల్సి ఉంటే, ఎలాంటి add-ons‌ను install చేయకుండానే సులభంగా చేయవచ్చు.

యూరప్‌లో ఉన్న కంపెనీల కోసం, VAT compliance‌కు మెరుగైన **మద్దతు ఇవ్వడానికి** tools మరియు features‌ను జోడించే ఒక **add-on** మేము అందిస్తున్నాము.

Ultimate Multisite మీ తరఫున ప్రభుత్వానికి పన్నులు file చేయదు లేదా remit చేయదు; లావాదేవీ సమయంలో సరైన పన్నులను వసూలు చేయడంలో మాత్రమే మేము మీకు సహాయం చేస్తాము. **పన్నులను మీరు స్వయంగా remit చేయాల్సిందే.**

## పన్ను వసూలును ప్రారంభించడం {#enabling-tax-collection}

పన్ను వసూలు default‌గా ప్రారంభించబడదు. దాన్ని ప్రారంభించడానికి, మీరు **Ultimate Multisite > Settings > Taxes** కు వెళ్లి Enable Taxes setting‌ను ప్రారంభించేలా toggle చేయాలి.

![Tax settings పేజీ పైభాగంలో Enable Taxes toggle](/img/config/settings-taxes-enable.png)

ఇది tax settings పేజీ యొక్క పూర్తి దృశ్యం:

![Tax settings పూర్తి పేజీ](/img/config/settings-taxes-full.png)

మీరు వ్యక్తిగత products కోసం tax settings‌ను కూడా చూడవచ్చు:

![products కోసం Tax settings](/img/config/settings-taxes.png)

### పన్ను మినహాయింపు vs. పన్ను చేర్చబడింది {#tax-excluded-vs-tax-included}

Default‌గా, మీ product ధరలన్నీ పన్ను మినహాయింపుతో ఉంటాయి. అంటే product ధరలో పన్నులు **చేర్చబడవు**. నిర్దిష్ట కొనుగోలుపై customer పన్నులు చెల్లించాలి అని మేము నిర్ణయిస్తే, subtotal‌కు **అదనంగా** పన్నులను జోడిస్తాము.

మీ product ధరలోనే పన్నులు చేర్చాలని మీరు కోరుకుంటే, **Inclusive Tax** setting‌ను ప్రారంభించడం ద్వారా అలా చేయవచ్చు.

![Enable Taxes setting కింద Inclusive Tax toggle వరుస](/img/config/settings-taxes-inclusive.png)

మీరు చేసిన మార్పులను **save** చేయడం మర్చిపోవద్దు.

###

## పన్ను రేట్లను సృష్టించడం {#creating-tax-rates}

Tax Collection‌ను ప్రారంభించిన తర్వాత, మా tax rates editor‌ను ఉపయోగించి నిర్దిష్ట locations కోసం tax rates‌ను సృష్టించాలి.

Tax settings పేజీ sidebar‌లోని **Manage Tax Rates** button‌ను click చేయడం ద్వారా editor‌ను access చేయవచ్చు.

![settings పేజీలోని Tax Rates panel‌లో Manage Tax Rates link](/img/config/settings-taxes-manage-rates.png)

tax rates editor పేజీలో, **Add new Row** button‌ను click చేసి కొత్త Tax Rates‌ను జోడించవచ్చు.

![పైభాగంలో Add new Row button ఉన్న Tax rates editor table](/img/config/tax-rates-editor.png)

ప్రతి tax rate‌కు మీరు ఒక **title** ఇవ్వాలి (invoices‌లో ఉపయోగించబడుతుంది). తర్వాత ఈ పన్ను వసూలు చేయబడే **country** (అవసరం), **state,** మరియు **city** (రెండూ optional) ఎంచుకోవచ్చు. చివరగా, **tax rate in percents** జోడించండి.

### పన్ను వర్గాలు {#tax-categories}

వివిధ రకాల products‌కు వేర్వేరు tax rates‌ను జోడించడానికి మీరు అనేక Tax Categories‌ను కూడా సృష్టించవచ్చు.

**Add new Tax Category** ను click చేసి, మీ category పేరు రాసి **Create** నొక్కండి.

![tax rates editor పైభాగంలో Add new Tax Category button](/img/config/tax-categories-add.png)

![create category modal‌లో Tax Category Name input field](/img/config/tax-categories-create-modal.png)

categories‌ను browse చేయడానికి, **Switch** click చేసి మీరు కొత్త taxes జోడించాలనుకునే category‌ను ఎంచుకోండి.

![tax categories మధ్య మార్చడానికి Switch dropdown button](/img/config/tax-categories-switch.png)

![లభ్యమైన categories‌ను చూపుతున్న Tax category selector dropdown](/img/config/tax-categories-select.png)

నిర్దిష్ట product కోసం tax category‌ను set చేయడానికి, **Product edit page** కు వెళ్లి తర్వాత Taxes tab‌కు వెళ్లండి.

![tax category మరియు taxable toggle ఉన్న Product taxes tab](/img/config/product-taxes.png)

అదే screen‌లో, ఆ నిర్దిష్ట product‌పై పన్నులు వసూలు చేయకూడదని Ultimate Multisite‌కు తెలియజేయడానికి **Is Taxable?** toggle‌ను off చేయవచ్చు.

## యూరోపియన్ VAT మద్దతు {#european-vat-support}

ముందుగా చెప్పినట్లుగా, European VAT regulations కారణంగా అదనపు requirements ఉన్న EUలోని customers కోసం మాకు ఒక add-on అందుబాటులో ఉంది.

మా VAT tools కొన్ని ముఖ్యమైన విషయాల్లో సహాయపడతాయి:

  * EU VAT rates‌ను సులభంగా load చేయడం;

  * VAT Number సేకరణ మరియు validation - అలాగే VAT exempt entities కోసం reverse charging (valid VAT numbers ఉన్న companies వంటివి);

ఆ add-on‌ను install చేయడానికి, **Ultimate Multisite > Settings** కు వెళ్లి, తర్వాత **Check our Add-ons** sidebar link‌పై click చేయండి.

![Check our Add-ons link ఉన్న Settings పేజీ sidebar](/img/config/settings-taxes-addons-link.png)

మీరు మా add-ons పేజీకి redirect చేయబడతారు. అక్కడ, మీరు **Ultimate Multisite VAT add-on** కోసం search చేసి దాన్ని install చేయవచ్చు.

<!-- Screenshot అందుబాటులో లేదు: Add-ons పేజీలో VAT add-on tile -->

<!-- Screenshot అందుబాటులో లేదు: VAT add-on Install Now dialog -->

తర్వాత, **Network Admin > Plugins** కు వెళ్లి ఆ add-on‌ను network-wide‌గా activate చేయండి.

<!-- Screenshot అందుబాటులో లేదు: Plugins పేజీలో VAT add-on కోసం Network Activate action -->

మీరు మళ్లీ **Tax Settings tab** కు వెళ్తే, కొత్త options అందుబాటులో కనిపిస్తాయి. కొత్త VAT tools‌ను ప్రారంభించడానికి **Enable VAT Support** option‌ను toggle చేయండి. మీ settings‌ను **save** చేయడం మర్చిపోవద్దు!

<!-- Screenshot అందుబాటులో లేదు: add-on activation తర్వాత Tax settings‌లో Enable VAT Support toggle -->

### VAT పన్ను రేట్లను తీసుకోవడం {#pulling-on-vat-tax-rates}

మా integration జోడించే tools‌లో ఒకటి EU member states కోసం tax rates‌ను load చేసే సామర్థ్యం. EU VAT support‌ను ప్రారంభించిన తర్వాత tax rates editor పేజీని సందర్శించడం ద్వారా ఇది చేయవచ్చు.

పేజీ దిగువన, VAT pulling options కనిపిస్తాయి. rate type‌ను ఎంచుకుని **Update EU VAT Rates** button‌ను click చేస్తే, ప్రతి EU member state కోసం tax rates‌తో table‌ను pull చేసి auto-populate చేస్తుంది. తర్వాత, మీరు దాన్ని save చేస్తే సరిపోతుంది.

![tax rates editor దిగువన Update EU VAT Rates button](/img/config/tax-rates-vat-pull.png)

వాటిని pull చేసిన తర్వాత values‌ను కూడా edit చేయవచ్చు. అలా చేయడానికి, మీకు అవసరమైన table line‌ను edit చేసి కొత్త values‌ను save చేయండి.

### VAT Validation {#vat-validation}

VAT support ప్రారంభించబడినప్పుడు, Ultimate Multisite checkout form‌కు billing address field కింద అదనపు field‌ను జోడిస్తుంది. EUలో ఉన్న customers‌కు మాత్రమే ఆ field కనిపిస్తుంది.

<!-- Screenshot అందుబాటులో లేదు: frontend checkout form‌లో billing address కింద VAT Number field -->

Ultimate Multisite ఆ తరువాత VAT నంబర్‌ను ధృవీకరిస్తుంది. అది చెల్లుబాటు అయ్యేదిగా తిరిగి వస్తే, reverse charge విధానం వర్తింపజేయబడుతుంది మరియు ఆ ఆర్డర్‌పై పన్ను రేటు 0%గా సెట్ చేయబడుతుంది.
