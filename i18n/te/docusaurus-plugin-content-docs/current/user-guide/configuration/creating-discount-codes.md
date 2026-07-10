---
title: రాయితీ కోడ్‌లను సృష్టించడం
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# డిస్కౌంట్ కోడ్‌లను సృష్టించడం (v2) {#creating-discount-codes-v2}

_**ముఖ్య గమనిక: ఈ వ్యాసం Ultimate Multisite వెర్షన్ 2.x‌కు సంబంధించినది.**_

Ultimate Multisite తో మీరు మీ క్లయింట్‌లకు వారి subscriptionలపై తగ్గింపులు ఇవ్వడానికి డిస్కౌంట్ కోడ్‌లను సృష్టించవచ్చు. వాటిని సృష్టించడం కూడా సులభం!

## డిస్కౌంట్ కోడ్‌లను సృష్టించడం మరియు సవరించడం {#creating-and-editing-discount-codes}

డిస్కౌంట్ కోడ్‌ను సృష్టించడానికి లేదా సవరించడానికి, **Ultimate Multisite > Discount Codes** కు వెళ్లండి.

![ఏ కోడ్‌లు లేని ప్రారంభ స్థితిలో ఖాళీగా ఉన్న డిస్కౌంట్ కోడ్‌ల జాబితా](/img/config/discount-codes-empty.png)

అక్కడ మీరు ఇప్పటికే సృష్టించిన డిస్కౌంట్ కోడ్‌ల జాబితా ఉంటుంది.

కొత్త coupon సృష్టించడానికి **Add Discount** **Code** పై క్లిక్ చేయవచ్చు, లేదా ఉన్న వాటిపై హోవర్ చేసి **Edit** క్లిక్ చేసి వాటిని సవరించవచ్చు.

![Edit మరియు Delete లింక్‌లను చూపించే హోవర్ చర్యలతో డిస్కౌంట్ కోడ్‌ల జాబితా](/img/config/discount-codes-list-hover.png)

![పేజీ శీర్షికలో Add Discount Code బటన్](/img/config/discount-codes-add-button.png)

మీ coupon code సృష్టించే లేదా సవరించే పేజీకి మీరు మళ్లించబడతారు. ఈ ఉదాహరణలో మనం కొత్తదాన్ని సృష్టిస్తాము.

![అన్ని విభాగాలు కనిపించే డిస్కౌంట్ కోడ్ సవరణ పేజీ](/img/config/discount-code-edit.png)

ఇక్కడ అందుబాటులో ఉన్న సెట్టింగ్‌లను చూద్దాం:

**Enter Discount Code:** ఇది మీ డిస్కౌంట్ కోడ్ పేరు మాత్రమే. ఇది మీ కస్టమర్‌లు checkout ఫారమ్‌లో ఉపయోగించాల్సిన కోడ్ కాదు.

**Description:** ఇక్కడ, ఈ coupon ఏ కోసం అనేది సంక్షిప్తంగా వివరించవచ్చు.

![సవరణ పేజీ పైభాగంలో ఉన్న డిస్కౌంట్ కోడ్ పేరు మరియు వివరణ ఫీల్డ్‌లు](/img/config/discount-code-description.png)

మీరు డిస్కౌంట్ కోడ్‌ను యాక్టివ్‌గా లేదా ఇన్యాక్టివ్‌గా కూడా చూడవచ్చు:

![డిస్కౌంట్ కోడ్ యాక్టివ్ స్థితి](/img/config/discount-code-active.png)

**Coupon code:** checkout సమయంలో మీ కస్టమర్‌లు నమోదు చేయాల్సిన కోడ్‌ను ఇక్కడ నిర్వచిస్తారు.

![checkout వద్ద కస్టమర్‌లు కోడ్ నమోదు చేసే Coupon code ఫీల్డ్](/img/config/discount-code-coupon-field.png)

**Discount:** ఇక్కడ, మీ డిస్కౌంట్ కోడ్ కోసం డబ్బులో **శాతం** లేదా **స్థిర మొత్తం** సెట్ చేయవచ్చు.

![శాతం లేదా స్థిర-మొత్తం డ్రాప్‌డౌన్‌తో డిస్కౌంట్ మొత్తం సెట్టింగ్](/img/config/discount-code-amount.png)

**Apply to renewals:** ఈ ఎంపిక ఆఫ్‌లో ఉంటే, ఈ డిస్కౌంట్ కోడ్ **మొదటి చెల్లింపుకు** మాత్రమే వర్తిస్తుంది. మిగతా అన్ని చెల్లింపులకు తగ్గింపు ఉండదు. ఈ ఎంపిక ఆన్‌లో ఉంటే, భవిష్యత్తులోని అన్ని చెల్లింపులకు డిస్కౌంట్ కోడ్ చెల్లుబాటు అవుతుంది.

**Setup fee discount:** ఈ ఎంపిక ఆఫ్‌లో ఉంటే, coupon code ఆర్డర్‌లోని setup fee కోసం **ఏ తగ్గింపూ ఇవ్వదు**. ఈ ఎంపిక ఆన్‌లో ఉంటే, మీ planల setup fee కు ఈ coupon code వర్తింపజేసే తగ్గింపును (శాతం లేదా స్థిర మొత్తం) సెట్ చేయవచ్చు.

![Apply to renewals మరియు setup fee discount టోగుల్ ఎంపికలు](/img/config/discount-code-renewals.png)

**Active:** ఈ coupon code ను మాన్యువల్‌గా యాక్టివేట్ లేదా డియాక్టివేట్ చేయండి.

![డిస్కౌంట్ కోడ్‌ను మాన్యువల్‌గా ప్రారంభించడానికి లేదా నిలిపివేయడానికి Active టోగుల్](/img/config/discount-code-active.png)

**Advanced Options** కింద, క్రింది సెట్టింగ్‌లు ఉన్నాయి:

![డిస్కౌంట్ కోడ్ అధునాతన ఎంపికలు](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** ఇక్కడ, డిస్కౌంట్ కోడ్ ఎన్ని సార్లు ఉపయోగించబడిందో చూడవచ్చు.

  * **Max uses:** ఇది వినియోగదారులు ఈ డిస్కౌంట్ కోడ్‌ను ఉపయోగించగల సార్ల సంఖ్యను పరిమితం చేస్తుంది. ఉదాహరణకు, ఇక్కడ 10 పెడితే, coupon 10 సార్లు మాత్రమే ఉపయోగించవచ్చు. ఈ పరిమితి తర్వాత, coupon code ఇక ఉపయోగించలేరు.

![ప్రస్తుత వినియోగాల సంఖ్య మరియు గరిష్ఠ వినియోగాల ఫీల్డ్‌తో వినియోగాల పరిమితి సెట్టింగ్](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** ఇక్కడ మీ coupon కు ప్రారంభ తేదీ మరియు/లేదా గడువు ముగింపు తేదీని జోడించే ఎంపిక ఉంటుంది.

![డిస్కౌంట్ కోడ్‌ను షెడ్యూల్ చేయడానికి ప్రారంభ మరియు గడువు ముగింపు తేదీ ఫీల్డ్‌లు](/img/config/discount-code-dates.png)

**Limit products:** మీరు **Select products** ను ఆన్ చేస్తే, మీ అన్ని products మీకు చూపబడతాయి. ఈ coupon code ను ఏ product అంగీకరించగలదో మాన్యువల్‌గా ఎంచుకునే (ఆన్ లేదా ఆఫ్ చేసి) ఎంపిక ఉంటుంది. ఇక్కడ ఆఫ్ చేసిన products కు మీ కస్టమర్‌లు ఈ coupon code ఉపయోగించడానికి ప్రయత్నించినా ఎలాంటి మార్పు కనిపించదు.

![ప్రతి product కు టోగుల్ స్విచ్‌లతో Limit products విభాగం](/img/config/discount-code-limit-products.png)

ఈ అన్ని ఎంపికలను సెటప్ చేసిన తర్వాత, మీ coupon ను సేవ్ చేయడానికి **Save Discount Code** పై క్లిక్ చేయండి. అంతే పూర్తయింది!

![సవరణ పేజీ దిగువ భాగంలో Save Discount Code బటన్](/img/config/discount-code-save.png)

coupon ఇప్పుడు మీ జాబితాలో ఉంటుంది. అక్కడి నుండి దాన్ని **సవరించడానికి లేదా తొలగించడానికి** క్లిక్ చేయవచ్చు.

![Edit మరియు Delete హోవర్ చర్యలతో జాబితాలో డిస్కౌంట్ కోడ్ వరుస](/img/config/discount-codes-list-hover.png)

###

### URL Parameters ఉపయోగించడం: {#using-url-parameters}

మీరు మీ ధరల పట్టికలను అనుకూలీకరించాలనుకుంటే లేదా మీ వెబ్‌సైట్ కోసం మంచి coupon code పేజీని నిర్మించాలనుకుంటే, అలాగే మీ checkout ఫారమ్‌కు డిస్కౌంట్ కోడ్‌ను స్వయంచాలకంగా వర్తింపజేయాలనుకుంటే, URL parameters ద్వారా దీన్ని చేయవచ్చు.

ముందుగా, మీ plan కోసం shareable link తీసుకోవాలి. దీన్ని చేయడానికి, **Ultimate Multisite > Products** కు వెళ్లి ఒక plan ఎంచుకోండి.

**Click to Copy Shareable Link** బటన్‌పై క్లిక్ చేయండి. ఇది ఈ నిర్దిష్ట plan కు shareable link ఇస్తుంది. మా సందర్భంలో, ఇచ్చిన shareable link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![shareable link బటన్‌తో product పేజీ](/img/config/products-list.png)

ఈ నిర్దిష్ట plan కు మీ డిస్కౌంట్ కోడ్‌ను వర్తింపజేయడానికి, URL కు **?discount_code=XXX** parameter ను జోడించండి. ఇక్కడ **XXX** coupon code.

ఇక్కడ మా ఉదాహరణలో, ఈ నిర్దిష్ట product కు **50OFF** coupon code ను వర్తింపజేస్తాము.

ఈ నిర్దిష్ట plan కోసం, 50OFF డిస్కౌంట్ కోడ్ వర్తింపజేసిన URL ఇలా కనిపిస్తుంది: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
