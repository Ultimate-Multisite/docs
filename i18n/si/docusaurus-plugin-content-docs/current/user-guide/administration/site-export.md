---
title: සයිට් අපනයනය
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# సైట్ ఎగుమతి (Site Export) {#site-export}

**సైట్ ఎగుమతి (Site Export)** అడ్మిన్ పేజీలో, నెట్‌వర్క్ నిర్వాహకులు ఒక సైట్‌ను లేదా మొత్తం నెట్‌వర్క్‌ను మైగ్రేషన్, బ్యాకప్ లేదా బదిలీ పనుల కోసం డౌన్‌లోడ్ చేయదగిన ఆర్కైవ్‌గా ప్యాక్ చేయడానికి వీలు కల్పిస్తుంది.

## ఒక సైట్‌ను ఎగుమతి చేయడం (Exporting one site) {#exporting-one-site}

**Ultimate Multisite > Site Export** కి వెళ్లి **Generate new Site Export** ను ఎంచుకోండి. మీరు ఎగుమతి చేయాలనుకుంటున్న సబ్సైట్‌ను ఎంచుకున్న తర్వాత, ఆర్కైవ్‌లో అప్‌లోడ్‌లు (uploads), ప్లగిన్‌లు (plugins), మరియు థీమ్‌లు (themes) చేర్చాలా వద్దా అని ఎంచుకోండి.

ఎగుమతి పూర్తయిన తర్వాత, **Existing Exports** జాబితా నుండి ZIP ఫైల్‌ను డౌన్‌లోడ్ చేయండి. ఇప్పుడు ఎగుమతి చేసిన ZIPలలో స్వయంచాలకంగా ప్రారంభమయ్యే `index.php` మరియు ఒక `readme.txt` ఉంటాయి, కాబట్టి మీరు ప్రత్యేకమైన ఇంపోర్టర్ ప్లగిన్‌ను ఇన్‌స్టాల్ చేయకుండానే కొత్త హోస్ట్‌కు అప్‌లోడ్ చేసి ప్రారంభించవచ్చు.

## మొత్తం నెట్‌వర్క్‌ను ఎగుమతి చేయడం (Exporting the whole network) {#exporting-the-whole-network}

నెట్‌వర్క్‌లోని అన్ని సబ్సైట్‌లను కలిగి ఉన్న ఒకే ఆర్కైవ్‌ను మీకు అవసరమైనప్పుడు, Site Export పేజీలో **Network Export** ను ఉపయోగించండి. హోస్ట్ మైగ్రేషన్లు, డిజాస్టర్-రికవరీ డ్రిల్స్ లేదా ప్రతి సబ్సైట్ కలిసి ప్రయాణించాల్సిన స్టేజింగ్ రీబిల్డ్‌ల వంటి వాటికి ఇది చాలా ఉపయోగపడుతుంది.

నెట్‌వర్క్ ఎగుమతి ఒకే సైట్ ఎగుమతి కంటే చాలా పెద్దది కావచ్చు కాబట్టి, తక్కువ ట్రాఫిక్ ఉన్న సమయంలో దీన్ని అమలు చేయండి మరియు అప్‌లోడ్‌లు, ప్లగిన్‌లు, థీమ్‌లు మరియు రూపొందించిన ZIP ఫైల్‌ల కోసం లక్ష్య నిల్వ (target storage) సరిపడా ఖాళీ స్థలం ఉందని నిర్ధారించుకోండి.

### నెట్‌వర్క్ ఇంపోర్ట్ బండ్‌లు (Network Import Bundles) {#network-import-bundles}

Ultimate Multisite 2.12.0 తో ప్రారంభమై, Site Exporter **నెట్‌వర్క్ ఇంపోర్ట్ బండ్‌లను** రూపొందించగలదు — ఇది నెట్‌వర్క్-వైడ్ సైట్ పునరుద్ధరణ కోసం ప్రత్యేకంగా రూపొందించబడిన ఆర్కైవ్‌లు. ఒక నెట్‌వర్క్ ఇంపోర్ట్ బండిల్‌లో కొత్త నెట్‌వర్క్ ఇన్‌స్టాలేషన్‌కు బహుళ సైట్‌లను పునరుద్ధరించడానికి అవసరమైన అన్ని ఫైళ్లు మరియు మెటాడేటా ఉంటాయి.

#### నెట్‌వర్క్ ఇంపోర్ట్ బండల్‌ను రూపొందించడం (Generating a Network Import Bundle) {#generating-a-network-import-bundle}

1. **Ultimate Multisite > Site Export** වෙත යන්න
2. **Generate new Network Export** ක්ලික් කරන්න
3. අපනයන වර්ගයක් ලෙස **Network Import Bundle** තෝරන්න
4. උඩුගත කිරීම් (uploads), ප්ලග්ඉන් (plugins) සහ තේමා (themes) ඇතුළත් කිරීමට අවශ්‍ය දැයි තෝරන්න
5. **Generate** ක්ලික් කරන්න
6. **Existing Exports** ලැයිස්තුවෙන් බාගත කර bundle ZIP එක ගන්න

#### Network Import Bundle එකකින් ප්‍රතිසාධනය කිරීම (Restoring from a Network Import Bundle) {#restoring-from-a-network-import-bundle}

network import bundle එකකින් වෙබ් අඩවි යළි ස්ථාපනය කිරීමට:

1. ඔබේ ඉලක්ක සත්කාරකයා (target host) වෙත Ultimate Multisite ස්ථාපනය කරන්න
2. multisite setup wizard එක සම්පූර්ණ කරන්න
3. නව network එකේ **Ultimate Multisite > Site Export** වෙත යන්න
4. **Import Network Bundle** ක්ලික් කරන්න
5. network import bundle ZIP ගොනුව උඩුගත කරන්න
6. තිරය මත පෙන්වන import උපදෙස් අනුගමනය කරන්න
7. import ක්‍රියාවලිය මගින් සියලුම වෙබ් අඩවි, ඒවායේ අන්තර්ගතය සහ සැකසුම් යළි ස්ථාපනය කරනු ඇත

Network import bundles ආරක්ෂා කරන්නේ:
- වෙබ් අඩවි අන්තර්ගතය (posts, pages, custom post types)
- වෙබ් අඩවි සැකසුම් සහ විකල්ප (settings and options)
- පරිශීලක භූමිකා සහ අවසරයන් (user roles and permissions)
- ප්ලග්ඉන් සහ තේමා (bundle එකට ඇතුළත් නම්)
- මීඩියා උඩුගත කිරීම් (bundle එකට ඇතුළත් නම්)
- අභිරුචි දත්ත සමුදා වගු සහ දත්ත (Custom database tables and data)

## ස්වයංක්‍රීයව ආරම්භ වන export ZIP එකක් ස්ථාපනය කිරීම (Installing a self-booting export ZIP) {#installing-a-self-booting-export-zip}

නව සත්කාරකයක් (fresh host) මත self-booting ZIP එකක් ප්‍රතිසාධනය කිරීමට:

1. අපනයන් කරන ලද ZIP අන්තර්ගතයන් ඉලක්ක web root එකට උඩුගත කරන්න.
2. බ්‍රවුසරයකින් `index.php` විවෘත කරන්න.
3. bundle කළ export පැකේජයෙන් තිරය මත පෙන්වන installer උපදෙස් අනුගමනය කරන්න.
4. තාවකාලික ගොනු ඉවත් කිරීමට පෙර, export-විශේෂිත සටහන් සඳහා bundle කරන ලද `readme.txt` එක සමාලෝචනය කරන්න.

අමතර ප්ලග්ඉන් (addon) වල නිශ්චිත ස්ථාපන සහ import විස්තර සඳහා, [Site Exporter addon documentation](/addons/site-exporter) බලන්න.

Ultimate Multisite 2.9.0 හි එක් කළ single-site මෙවලම සඳහා, [Export & Import](/user-guide/administration/export-import) බලන්න.
