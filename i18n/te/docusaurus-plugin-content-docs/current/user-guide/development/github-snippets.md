---
title: GitHub స్నిప్పెట్స్
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# మా GitHub రిపోజిటరీలో Ultimate Multisite స్నిప్పెట్లను ఎలా ఉపయోగించాలి

GitHub రిపోజిటరీలో కోడ్ స్నిప్పెట్లు అందుబాటులో ఉన్నాయి, వీటిని Ultimate Multisite వినియోగదారులు తరచుగా అభ్యర్థిస్తారు. సైన్-అప్ పేజీలలో Google Analytics స్క్రిప్ట్ జోడించడం లేదా admin dashboard నుండి meta box దాచడం వంటి చిన్న ఫంక్షనాలిటీలను జోడించాలనుకునే వారికి ఇవి ఉపయోగపడతాయి.

ఈ ఆర్టికల్‌లో ఈ కోడ్‌లను ఎలా ఉపయోగించాలో, మరింత నిర్దిష్టంగా చెప్పాలంటే వాటిని ఎక్కడ పెట్టాలో మీకు చూపిస్తాము.

కింది లింక్‌లో స్నిప్పెట్లను కనుగొనవచ్చు.

https://github.com/next-press/wp-ultimo-snippets/

కోడ్ జోడించడానికి 2 మార్గాలు ఉన్నాయి

  1. మీ theme యొక్క functions.php ఫైల్‌లో.

  2. Must-Use Plugins (mu-plugins)

# మీ theme యొక్క functions.php ఫైల్‌లో స్నిప్పెట్ ఎలా జోడించాలి.

  1. మీ WordPress Network admin dashboard లోకి లాగిన్ అయి Themes > Theme Editor కి వెళ్ళండి (కింద స్క్రీన్‌షాట్ చూడండి).

  2. "Edit Themes" పేజీలో, మీ స్క్రీన్ కుడి ఎగువ భాగంలో ఉన్న dropdown ఫీల్డ్‌లో మీ యాక్టివ్ theme ఎంచుకోబడిందని నిర్ధారించుకోండి (కింద స్క్రీన్‌షాట్‌లో #3).

  3. ఫైల్‌ను లోడ్ చేయడానికి "Theme Files" సెక్షన్ కింద functions.php ఫైల్‌పై క్లిక్ చేయండి. కిందికి స్క్రోల్ చేసి, GitHub రిపోజిటరీ నుండి మీరు తీసుకున్న Ultimate Multisite స్నిప్పెట్‌ను పేస్ట్ చేయండి.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) ఎలా క్రియేట్ చేయాలి

WordPress లో "Must-Use Plugins" లేదా సంక్షిప్తంగా "mu-plugins" అని పిలిచే కస్టమ్ ఫంక్షనాలిటీని లోడ్ చేయడానికి ఒక ఫీచర్ ఉంది.

ఈ ప్రత్యేక mu-plugins అన్ని ఇతర సాధారణ plugins కంటే ముందు లోడ్ అవుతాయి, మరియు వాటిని డీయాక్టివేట్ చేయడం సాధ్యం కాదు. multisite network లో, ఈ mu-plugins లోని కోడ్ మీ ఇన్‌స్టాలేషన్‌లోని అన్ని సైట్లలో లోడ్ అవుతుంది.

1\. మీ WordPress ఇన్‌స్టాల్ యొక్క filesystem ను యాక్సెస్ చేయడానికి FTP లేదా SSH ఉపయోగించండి.

2\. మీ WordPress ఇన్‌స్టాల్ యొక్క wp-content డైరెక్టరీ లోపల, mu-plugins అనే పేరుతో కొత్త డైరెక్టరీ క్రియేట్ చేయండి.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3\. Notepad లేదా ఏదైనా కోడ్ ఎడిటర్ ఉపయోగించి మీ కంప్యూటర్‌లో wu-snippet.php అనే పేరుతో కొత్త PHP ఫైల్ క్రియేట్ చేయండి.

4\. GitHub రిపోజిటరీ నుండి మీరు తీసుకున్న Ultimate Multisite కోడ్ స్నిప్పెట్‌ను ఫైల్‌లో పెట్టి సేవ్ చేయండి. మీ mu plugin కు లేబుల్ పెట్టడానికి కోడ్ స్నిప్పెట్ పైన ఈ కోడ్‌ను కూడా జోడించవచ్చు.
