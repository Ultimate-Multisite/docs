---
title: చెకౌట్ ఫారమ్‌లు
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Checkout Forms

Checkout Forms కొత్త కస్టమర్లను మార్చడానికి వివిధ విధానాలను ప్రయత్నించడానికి సులభమైన మరియు అనువైన మార్గం.

Ultimate Multisite 2.0 లో Checkout Form editor ఉంది, ఇది మీకు కావలసినన్ని ఫారమ్‌లను వివిధ ఫీల్డ్‌లు, ఆఫర్‌లో ఉన్న ప్రొడక్ట్‌లు మొదలైనవాటితో సృష్టించడానికి అనుమతిస్తుంది.

ఈ ఫీచర్‌ను యాక్సెస్ చేయడానికి, ఎడమ వైపు సైడ్‌బార్‌లో Checkout Forms మెనూకు వెళ్ళండి.

![Checkout Forms జాబితా](/img/config/checkout-forms-list.png)

ఈ పేజీలో, మీ వద్ద ఉన్న అన్ని checkout ఫారమ్‌లను చూడవచ్చు.

కొత్త ఫారమ్ సృష్టించాలనుకుంటే, పేజీ పైభాగంలో Add Checkout Form క్లిక్ చేయండి.

మీ ప్రారంభ బిందువుగా ఈ మూడు ఆప్షన్లలో ఒకదాన్ని ఎంచుకోవచ్చు: single step, multi-step లేదా blank. తర్వాత, Go to the Editor క్లిక్ చేయండి.

![Checkout Form editor](/img/config/checkout-form-editor.png)

ప్రత్యామ్నాయంగా, మీ వద్ద ఇప్పటికే ఉన్న ఫారమ్‌లను దాని పేరు క్రింద ఉన్న ఆప్షన్లపై క్లిక్ చేసి ఎడిట్ చేయవచ్చు లేదా డూప్లికేట్ చేయవచ్చు. అక్కడ, ఫారమ్ యొక్క shortcode ను కాపీ చేయడానికి లేదా ఫారమ్‌ను డిలీట్ చేయడానికి కూడా ఆప్షన్లు కనుగొంటారు.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Checkout Form ఎడిట్ చేయడం

వివిధ ప్రయోజనాల కోసం checkout ఫారమ్‌లను సృష్టించవచ్చు. ఈ ఉదాహరణలో మనం రిజిస్ట్రేషన్ ఫారమ్‌పై పని చేస్తాము.

Checkout form editor కు నావిగేట్ చేసిన తర్వాత, మీ ఫారమ్‌కు ఒక పేరు (ఇది అంతర్గత సూచన కోసం మాత్రమే ఉపయోగించబడుతుంది) మరియు ఒక slug (shortcakes సృష్టించడానికి ఉపయోగించబడుతుంది) ఇవ్వండి.

![Checkout Form editor](/img/config/checkout-form-editor.png)

ఫారమ్‌లు స్టెప్స్ మరియు ఫీల్డ్‌లతో తయారవుతాయి. Add New Checkout Step క్లిక్ చేసి కొత్త స్టెప్ జోడించవచ్చు.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

మోడల్ విండో యొక్క మొదటి ట్యాబ్‌లో, మీ ఫారమ్ స్టెప్ యొక్క కంటెంట్‌ను నింపండి. దానికి ఒక ID, పేరు మరియు వివరణ ఇవ్వండి. ఈ అంశాలు ఎక్కువగా అంతర్గతంగా ఉపయోగించబడతాయి.

![Checkout form step](/img/config/checkout-form-step.png)

తర్వాత, స్టెప్ యొక్క విజిబిలిటీని సెట్ చేయండి. "Always show", "Only show for logged in users" లేదా "Only show for guests" మధ్య ఎంచుకోవచ్చు.

![Checkout form step](/img/config/checkout-form-step.png)

చివరగా, స్టెప్ స్టైల్‌ను కాన్ఫిగర్ చేయండి. ఇవి ఐచ్ఛిక ఫీల్డ్‌లు.

![Checkout form step](/img/config/checkout-form-step.png)

ఇప్పుడు, మన మొదటి స్టెప్‌కు ఫీల్డ్‌లను జోడించే సమయం వచ్చింది. Add New Field క్లిక్ చేసి మీకు కావలసిన సెక్షన్ రకాన్ని ఎంచుకోండి.

![Checkout form step with fields](/img/config/checkout-form-step.png)

ప్రతి ఫీల్డ్‌కు నింపాల్సిన వేర్వేరు పారామీటర్లు ఉంటాయి. ఈ మొదటి ఎంట్రీ కోసం, మనం "Username" ఫీల్డ్‌ను ఎంచుకుంటాము.

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

మీకు అవసరమైనన్ని స్టెప్స్ మరియు ఫీల్డ్‌లను జోడించవచ్చు. మీ కస్టమర్లు ఎంచుకోవడానికి మీ ప్రొడక్ట్‌లను ప్రదర్శించడానికి, Pricing Table ఫీల్డ్‌ను ఉపయోగించండి. మీ క్లయింట్లు టెంప్లేట్ ఎంచుకోవడానికి అనుమతించాలనుకుంటే, Template Selection ఫీల్డ్‌ను జోడించండి. ఇలాగే కొనసాగించవచ్చు.

_**గమనిక:** checkout ఫారమ్ సృష్టించడానికి username, email, password, site title, site URL, order summary, payment మరియు submit button తప్పనిసరి ఫీల్డ్‌లు._

మీ checkout ఫారమ్‌పై పని చేస్తున్నప్పుడు, మీ క్లయింట్లు ఫారమ్‌ను ఎలా చూస్తారో చూడటానికి ఎప్పుడైనా Preview బటన్‌ను ఉపయోగించవచ్చు. ఇప్పటికే ఉన్న యూజర్‌గా లేదా విజిటర్‌గా వీక్షించడం మధ్య కూడా మారవచ్చు.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

చివరగా, Advanced Options లో "Thank You" పేజీ కోసం మెసేజ్‌ను కాన్ఫిగర్ చేయవచ్చు, కన్వర్షన్లను ట్రాక్ చేయడానికి snippets జోడించవచ్చు, మీ checkout ఫారమ్‌కు custom CSS జోడించవచ్చు లేదా నిర్దిష్ట దేశాలకు పరిమితం చేయవచ్చు.

![Advanced Options](/img/config/checkout-form-advanced.png)

కుడి వైపు కాలమ్‌లో ఈ ఆప్షన్‌ను టాగుల్ చేసి మీ checkout ఫారమ్‌ను మాన్యువల్‌గా ఎనేబుల్ లేదా డిసేబుల్ చేయవచ్చు, లేదా ఫారమ్‌ను శాశ్వతంగా డిలీట్ చేయవచ్చు.

![Active toggle](/img/config/checkout-form-active.png)

మీ checkout ఫారమ్‌ను సేవ్ చేయడం మర్చిపోకండి!

![Save button](/img/config/checkout-form-save.png)

మీ ఫారమ్ యొక్క shortcode పొందడానికి Generate Shortcode క్లిక్ చేసి మోడల్ విండోలో చూపించిన ఫలితాన్ని కాపీ చేయండి.

![Save button with shortcode](/img/config/checkout-form-save.png)
