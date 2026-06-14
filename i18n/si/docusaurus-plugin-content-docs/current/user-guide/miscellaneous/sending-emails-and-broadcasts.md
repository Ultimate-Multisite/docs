---
title: ඊමේල් සහ බ්‍රෝඩ්කාස්ට් යැවීම
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# විද්‍යුත් තැපෑල සහ බ්‍රෝඩ්කාස්ට් යැවීම (v2)

_**වැදගත් සටහන: මෙම ලිපිය Ultimate Multisite version 2.x සම්බන්ධ වේ.**_

Ultimate Multisite එකේ විශේෂාංගයක් තිබෙනවා. ඒකෙන් ඔබට ඉලක්කගත පරිශීලකයෙකුට හෝ පරිශීලක කණ්ඩායමකට විද්‍යුත් තැපෑල යැවීමෙන් සන්නිවේදනය කරන්න පුළුවන්, ඒ වගේම ඔවුන්ගේ admin dashboard එකේ දැනුම්දීම් (notices) යවලා ප්‍රකාශන (announcements) දිය හැකියි.

## බ්‍රෝඩ්කාස්ට් භාවිතයෙන් ඔබේ පාරිභෝගිකයන්ගේ dashboard වලට admin දැනුම්දීම් එක් කරන්න

Ultimate Multisite broadcast විශේෂාංගය භාවිතා කරලා, ඔබට ඔබේ පරිශීලකයාගේ subsite admin dashboard එකට **admin දැනුම්දීම් (admin notices)** එක් කරන්න පුළුවන්.

පද්ධති නඩත්තු කිරීම වැනි ප්‍රකාශයක් කිරීමට හෝ නව නිෂ්පාදන හෝ සේවාවන් පවතින පරිදි දැනුම් දීමට අවශ්‍ය නම් මේක හරිම ප්‍රයෝජනවත් වෙනවා. ඔබේ පරිශීලකයාගේ dashboard එකේ admin දැනුම්දීම මෙහෙම පෙනෙයි.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

admin දැනුම්දීමක් ආරම්භ කිරීමට, ඔබේ network admin dashboard එකට යන්න. එහි **Ultimate Multisite** මෙනුව යටතේ ඔබට **Broadcasts** විකල්පය (option) සොයාගත හැකියි.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

ඔබට දැනට පවතින broadcasts සංස්කරණය කිරීමටත් පුළුවන්:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

මෙම පිටුවෙන්, ඉහළින් ඇති **Add Broadcast** බොත්තම ක්ලික් කරන්න.

එය Add broadcast modal window එකක් විවෘත කරනු ඇත. එහිදී ඔබට යැවීමට අවශ්‍ය broadcast වර්ගය තෝරාගත හැකියි.

Message තෝරාගෙන පසුව **Next Step** බොත්තම ක්ලික් කරන්න.

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

ඊළඟ කවුළුවෙන් ඔබෙන් අවශ්‍ය වන්නේ **Target customer** (ඉලක්කගත පාරිභෝගිකයා) හෝ **Target product** (ඉලක්කගත නිෂ්පාදනය) යන්නයි. ඔබට එක් පරිශීලකයෙකුට වඩා වැඩි ගණනක් හෝ නිෂ්පාදන කිහිපයක් තෝරා ගැනීමට හැකි බව සටහන් කරන්න.

యూజర్ ఖాతా లేదా ఉత్పత్తి కోసం వెతకడానికి, మీరు ఫీల్డ్‌లో కీవర్డ్ టైప్ చేయడం ప్రారంభించాలి.

**Message type** ఫీల్డ్‌లో, మీరు నోటీసు రంగును ఎంచుకోవచ్చు. ఇది మీ సందేశం యొక్క అత్యవసరతను నొక్కి చెబుతుంది.

ఆ తర్వాత మీరు **Next Step** పై క్లిక్ చేయవచ్చు.

![A target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

తరువాత వచ్చే విండోలో, మీరు సబ్జెక్ట్ మరియు వినియోగదారులకు ప్రసారం చేయాలనుకుంటున్న కంటెంట్/సందేశాన్ని నమోదు చేయడం ద్వారా మీ సందేశాన్ని రూపొందించడం ప్రారంభించవచ్చు.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

మీ సందేశాన్ని సృష్టించిన తర్వాత, మీరు **Send** బటన్‌ను నొక్కవచ్చు.

అంతే. అడ్మిన్ నోటీసు మీ వినియోగదారుల డాష్‌బోర్డ్‌లో వెంటనే కనిపించాలి.

## మీ కస్టమర్‌లకు ఈమెయిల్స్ పంపండి

Ultimate Multisite బ్రాడ్‌కాస్ట్ ఫీచర్‌ను ఉపయోగించి, మీరు మీ వినియోగదారులకు ఈమెయిల్ పంపవచ్చు. నిర్దిష్ట వినియోగదారులకు మాత్రమే ఈమెయిల్ పంపడానికి లేదా వారు సబ్‌స్క్రైబ్ చేసుకున్న ఉత్పత్తి లేదా ప్రణాళిక ఆధారంగా ఒక నిర్దిష్ట వినియోగదారు సమూహాన్ని లక్ష్యంగా చేసుకోవడానికి మీకు ఎంపిక ఉంటుంది.

ఈమెయిల్ బ్రాడ్‌కాస్ట్ ప్రారంభించడానికి, మీ నెట్‌వర్క్ అడ్మిన్ డాష్‌బోర్డ్‌కు వెళ్లి, Ultimate Multisite మెనూలో **Broadcast** ఆప్షన్‌ను కనుగొనండి.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

ఈ పేజీ నుండి, పైన ఉన్న **Add broadcast** బటన్‌పై క్లిక్ చేయండి.

ఇది Add broadcast మోడల్ విండోను తెస్తుంది, అక్కడ మీరు ఏ రకమైన బ్రాడ్‌కాస్ట్ పంపాలనుకుంటున్నారో ఎంచుకోవచ్చు. **Email** ను ఎంచుకుని ఆపై **Next Step** బటన్‌పై క్లిక్ చేయండి.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

తరువాత వచ్చే విండో మీరు **Target customer** లేదా **Target product** లలో దేని కోసం అడుగుతుందో అడుగుతుంది. ఒకటి కంటే ఎక్కువ వినియోగదారులను లేదా ఉత్పత్తి కంటే ఎక్కువ ఎంచుకోవచ్చని గమనించండి.

యూజర్ ఖాతా లేదా ఉత్పత్తి కోసం వెతకడానికి మీరు ఫీల్డ్‌లో కీవర్డ్ టైప్ చేయడం ప్రారంభించాలి.

మీ లక్ష్య ప్రేక్షకులను ఎంచుకున్న తర్వాత, మీరు **Next Step** పై క్లిక్ చేయవచ్చు.

![Email broadcast targets and product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

తరువాత వచ్చే విండోలో, మీరు సబ్జెక్ట్ మరియు వినియోగదారులకు పంపాలనుకుంటున్న కంటెంట్/సందేశాన్ని నమోదు చేయడం ద్వారా మీ ఈమెయిల్ రాయడం ప్రారంభించవచ్చు.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

మీ సందేశాన్ని సృష్టించిన తర్వాత, మీరు **Send** బటన్‌ను నొక్కవచ్చు.

బ్లాడ్కాస్ట్ ఫీచర్‌ను ఉపయోగించి మీ ఎండ్-యూజర్లకు ఈమెయిల్ పంపడం ఎంత సులభమో ఇదే!

## సిస్టమ్ ఈమెయిల్‌లు (System emails)

Ultimate Multisite లోని సిస్టమ్ ఈమెయిల్‌లు, రిజిస్ట్రేషన్, చెల్లింపు, డొమైన్ మ్యాపింగ్ వంటి నిర్దిష్ట చర్యల తర్వాత సిస్టమ్ ద్వారా పంపబడే **ఆటోమేటిక్ నోటిఫికేషన్‌లు**. ఈ ఈమెయిల్‌లను Ultimate Multisite సెట్టింగ్‌ల నుండి ఎడిట్ లేదా మార్చవచ్చు. మరొక Ultimate Multisite ఇన్‌స్టాలేషన్ నుండి ఇప్పటికే ఉన్న సెట్టింగ్‌లను రీసెట్ చేసి దిగుమతి చేసుకోవడానికి కూడా ఒక ఫీచర్ ఇందులో ఉంది.

### రీసెట్ చేయడం & దిగుమతి చేసుకోవడం (Resetting & Importing)

కొత్త Ultimate Multisite వెర్షన్‌లు, అలాగే అడ్-ఆన్‌లు ఎప్పటికప్పుడు కొత్త ఈమెయిల్‌లను నమోదు చేస్తాయి మరియు నమోదు చేయవచ్చు.

పరస్పర సంఘర్షణలు మరియు ఇతర సమస్యలను నివారించడానికి, **ఒక నిర్దిష్ట ఫీచర్ యొక్క సరైన పనితీరుకు అవి చాలా ముఖ్యమైనవి కాకపోతే, మేము వాటిని మీ ఇన్‌స్టాలేషన్‌లో సిస్టమ్ ఈమెయిల్‌లుగా ఆటోమేటిక్‌గా జోడించము**, కొత్త ఈమెయిల్ టెంప్లేట్‌లను.

అయితే, సూపర్‌అడ్మిన్లు మరియు ఏజెంట్లు దిగుమతి సాధనం (importer tool) ద్వారా ఈ కొత్తగా నమోదు చేయబడిన ఈమెయిల్‌లను దిగుమతి చేసుకోవచ్చు. ఆ ప్రక్రియ కొత్త ఈమెయిల్ టెంప్లేట్ యొక్క కంటెంట్ మరియు కాన్ఫిగరేషన్‌తో ఒక కొత్త సిస్టమ్ ఈమెయిల్‌ను సృష్టిస్తుంది, తద్వారా సూపర్‌అడ్మిన్ వారు తమకు నచ్చిన విధంగా ఏ మార్పులు చేయవచ్చు లేదా వాటిని అలాగే ఉంచుకోవచ్చు.

#### సిస్టమ్ ఈమెయిల్‌లను ఎలా దిగుమతి చేసుకోవాలి (How to import system emails)

ඔබේ Ultimate Multisite Settings පිටුවට ගොස් එහි ඇති **Emails** ටැබයට යන්න.

![Ultimate Multisite settings හි Emails tab පෙන්වන රූපය System Emails කොටස පෙන්වයි](/img/config/settings-emails-tab.png)

ඉන්පසු, sidebarm එකේ ඇති **Customize System Emails** බොත්තම ක්ලික් කරන්න.

<!-- Screenshot unavailable: System Emails sidebar panel හි Customize System Emails බොත්තම පෙන්වන රූපය -->

System Emails පිටුවේ, ඉහළින් ඔබට **Reset & Import** ක්‍රියාව (action) බොත්තම දැකගත හැකියි. එය ක්ලික් කළ විට import සහ reset modal window එක විවෘත වේ.

![System Emails admin page හි Reset or Import action button පෙන්වන රූපය](/img/admin/system-emails-reset-import.png)

ඉන්පසු, ඔබට Import Emails විකල්ප (options) ක්‍රියාත්මක කර බලමින් කුමන system emails ආනයනය කළ හැකිදැයි බැලිය හැකියි.

<!-- Screenshot unavailable: Import Emails විකල්ප සහිත Reset and Import modal පෙන්වන රූපය -->

#### System Emails නැවත සැකසීම (Reseting System Emails)

වෙනත් අවස්ථාවලදී, ඔබ යම් email template එකකට කළ වෙනස්කම් ඔබට වැඩ නොකරන බව ඔබට වැටහෙන අතර එය එහි **default state** එකට නැවත ගෙන ඒමට අවශ්‍ය විය හැකිය.

එවැනි අවස්ථාවලදී, ඔබට විකල්ප දෙකක් තිබේ: ඔබට සරලව system email එක මකා දමා (ඉහත උපදෙස් භාවිතා කර) එය නැවත import කළ හැකිය - නමුත් මෙයින් යැවීම් දත්ත සහ වෙනත් දේවල් අහිමි වේ, එබැවින් මෙම ක්‍රමය වඩාත්ම නිර්දේශ නොකරයි.

නැතහොදි, එම email template එක reset කිරීමට **Reset & Import tool** එක භාවිතා කළ හැකිය.

email template එකක් reset කිරීමට, ඉහත පියවරයන් අනුගමනය කර Reset & Import tool එකට ළඟා වන තුරු කරන්න, ඉන්පසු **Reset** විකල්පය ක්‍රියාත්මක කර ඔබ reset කිරීමට අවශ්‍ය emails තෝරාගෙන ඒවා නැවත ඒවායේ default content වලට යොමු කරන්න.

<!-- Screenshot unavailable: Reset and Import modal හි Reset Emails විකල්ප පෙන්වන රූපය -->
