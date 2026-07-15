---
title: Sunrise File Error
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise ఫైల్ ఇన్‌స్టాల్ చేయడంలో Error

sunrise.php ఫైల్ అనేది WordPress బూట్‌స్ట్రాప్ అవుతున్నప్పుడు వెతికే ఒక ప్రత్యేక ఫైల్. WordPress ఈ sunrise.php ఫైల్‌ను గుర్తించాలంటే, అది **wp-content ఫోల్డర్** లో ఉండాలి.

మీరు Ultimate Multisite ను activate చేసి, screenshot లో చూపించినట్లుగా setup wizard ద్వారా వెళ్ళినప్పుడు, Ultimate Multisite మా sunrise.php ఫైల్‌ను wp-content ఫోల్డర్‌కు copy చేయడానికి ప్రయత్నిస్తుంది.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

చాలా సందర్భాలలో, ఫైల్ విజయవంతంగా copy అవుతుంది మరియు అంతా సరిగ్గా పని చేస్తుంది. అయితే, ఏదైనా సరిగ్గా setup కాకపోతే (ఉదాహరణకు, folder permissions), Ultimate Multisite ఫైల్‌ను copy చేయలేని పరిస్థితి ఎదురవ్వవచ్చు.

Ultimo ఇచ్చే error message చదివితే, ఇక్కడ ఏం జరిగిందో మీకు తెలుస్తుంది: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

దీన్ని సరిచేయడానికి, wp-ultimo plugin ఫోల్డర్ లోని sunrise.php ఫైల్‌ను copy చేసి మీ wp-content ఫోల్డర్‌లో paste చేయండి. అది చేసిన తర్వాత, wizard పేజీని reload చేయండి మరియు checks pass అవ్వాలి.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ఏమైనప్పటికీ, భవిష్యత్తులో సమస్యలు రాకుండా ఉండేందుకు మీ folder permissions ను ఒకసారి చెక్ చేసుకోవడం మంచిది (Ultimate Multisite తో మాత్రమే కాకుండా ఇతర plugins మరియు themes తో కూడా).

WordPress లో భాగంగా ఉన్న **Health Check tool** (మీ main site **admin panel > Tools > Health Check** ద్వారా access చేయవచ్చు) మీ folder permissions WordPress తో సమస్యలు కలిగించే విధంగా set చేయబడ్డాయా అనేది తెలియజేయగలదు.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
