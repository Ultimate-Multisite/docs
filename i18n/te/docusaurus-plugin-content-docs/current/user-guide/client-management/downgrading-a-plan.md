---
title: ప్లాన్‌ను డౌన్‌గ్రేడ్ చేయడం
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# ప్లాన్ డౌన్‌గ్రేడ్ చేయడం (v2)

_**ముఖ్యమైన గమనిక: ఈ ఆర్టికల్ Ultimate Multisite వెర్షన్ 2.x గురించి చెప్తుంది.**_

ప్లాన్ లేదా subscription ని డౌన్‌గ్రేడ్ చేయడం మీ క్లయింట్లు తరచుగా చేసే పని. బడ్జెట్ తక్కువగా ఉన్నప్పుడు లేదా వారి subsite నడపడానికి ఎక్కువ resources అవసరం లేదని నిర్ణయించుకున్నప్పుడు వారు ఇలా చేయవచ్చు.

## ప్లాన్ ఎలా డౌన్‌గ్రేడ్ చేయాలి

మీ క్లయింట్లు ఎప్పుడైనా తమ subsite admin dashboard లోకి లాగిన్ అయి, account పేజీలో **Change** బటన్ క్లిక్ చేసి తమ ప్లాన్‌ను డౌన్‌గ్రేడ్ చేయవచ్చు.

![membership కింద Change బటన్ ఉన్న Account పేజీ](/img/admin/memberships-list.png)

**Change** బటన్ క్లిక్ చేసినప్పుడు, user/client checkout పేజీకి redirect అవుతారు. అక్కడ వారు తమ subscription మార్చుకోవాలనుకునే ప్లాన్‌ను ఎంచుకోవచ్చు.

![డౌన్‌గ్రేడ్ కోసం ప్లాన్ ఆప్షన్లు చూపించే Checkout పేజీ](/img/admin/memberships-list.png)

ఈ ఉదాహరణలో, మనం ప్లాన్‌ను **Premium** నుండి **Free** కు డౌన్‌గ్రేడ్ చేస్తున్నాము.

ముందుకు వెళ్ళడానికి user **Complete Checkout** బటన్ క్లిక్ చేయాలి. అప్పుడు వారు account పేజీకి తిరిగి వెళ్తారు, అక్కడ membership కోసం pending change గురించి మెసేజ్ కనిపిస్తుంది. మార్పులు customer యొక్క **తదుపరి billing cycle** లో అమలులోకి వస్తాయి.

![pending membership change మెసేజ్ చూపించే Account పేజీ](/img/admin/memberships-list.png)

### User ప్లాన్ డౌన్‌గ్రేడ్ చేసినప్పుడు ఏమి జరుగుతుంది

ప్లాన్ డౌన్‌గ్రేడ్ చేయడం వల్ల user యొక్క subsite లో ఇప్పటికే ఉన్న configuration మారదని గమనించడం ముఖ్యం.

ఇది site template ను automatically మార్చదు, ఎందుకంటే site template మార్చడం వల్ల subsite పూర్తిగా erase అయి reset అవుతుంది. అనవసరమైన data loss నివారించడానికి ఇలా చేయబడింది. కాబట్టి posts తప్ప disk space, themes, plugins మొదలైనవి అలాగే ఉంటాయి.

మీ ప్రధాన ఆందోళన ప్రతి ప్లాన్ కింద మీరు సెట్ చేసిన limits మరియు quotas అని మేము అర్థం చేసుకుంటున్నాము, కానీ user యొక్క subsite configurations ను delete చేయడం లేదా మార్చడం వల్ల కలిగే నష్టాన్ని మేము పరిగణించాలి.

ప్లాన్‌లో సెట్ చేసిన limit దాటిన posts కోసం, మీకు 3 వేర్వేరు options ఉన్నాయి: **Posts ను అలాగే ఉంచండి**, **Posts ను trash కు move చేయండి**, లేదా **Posts ను draft కు move చేయండి**. మీరు దీన్ని Ultimate Multisite settings లో configure చేయవచ్చు.

![Ultimate Multisite settings లో Post limit exceeded options](/img/config/settings-sites.png)

### Payment కు ఏమి జరుగుతుంది

వెర్షన్ 2.0 లో, proration పరంగా payment లో ఎటువంటి adjustments అవసరం లేదు.

ఎందుకంటే system ఇప్పటికే ఉన్న membership **billing cycle పూర్తయ్యే వరకు వేచి ఉంటుంది**, ఆ తర్వాతే కొత్త plan/membership అమలులోకి వస్తుంది. కొత్త membership కోసం కొత్త billing amount తదుపరి billing cycle లో automatically apply అయి charge అవుతుంది.
