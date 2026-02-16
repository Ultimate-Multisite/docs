---
title: Closteలో Sunrise Constant సెట్ చేయడం
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte లో Sunrise constant ను true కి సెట్ చేయడం

కొన్ని హోస్ట్ ప్రొవైడర్లు భద్రతా కారణాల వల్ల wp-config.php ను లాక్ చేస్తారు. దీని వల్ల Ultimate Multisite ఆ ఫైల్‌ను ఆటోమేటిక్‌గా ఎడిట్ చేసి, domain mapping మరియు ఇతర ఫీచర్లు పని చేయడానికి అవసరమైన constants ను చేర్చలేదు. Closte అటువంటి హోస్ట్‌లలో ఒకటి.

అయితే, Closte wp-config.php కు సురక్షితమైన పద్ధతిలో constants జోడించే అవకాశం అందిస్తుంది. మీరు క్రింది దశలను అనుసరించాలి:

## Closte dashboard లో

మొదట, [మీ Closte అకౌంట్‌లో లాగిన్ అవ్వండి](https://app.closte.com/), Sites మెనూ ఐటెమ్ పై క్లిక్ చేయండి, ఆపై మీరు ప్రస్తుతం పని చేస్తున్న సైట్ పై Dashboard లింక్ క్లిక్ చేయండి:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

స్క్రీన్ ఎడమ వైపున కొత్త మెనూ ఐటెమ్‌లు కనిపిస్తాయి. ఆ మెనూ ఉపయోగించి **Settings** పేజీకి నావిగేట్ చేయండి:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

తరువాత, **Settings** లో, WP-Config ట్యాబ్ కనుగొనండి, ఆపై ఆ ట్యాబ్‌లో "Additional wp-config.php content" ఫీల్డ్ చూడండి:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ఇన్‌స్టాల్ చేసే సందర్భంలో, మీరు ఆ ఫీల్డ్‌లో sunrise constant జోడించాలి. కొత్త లైన్ జోడించి క్రింది లైన్ పేస్ట్ చేయండి. ఆ తర్వాత, **Save All** బటన్ క్లిక్ చేయండి.

define('SUNRISE', true);

అంతే, మీరు సిద్ధంగా ఉన్నారు. Ultimate Multisite install wizard కు తిరిగి వెళ్ళి, ప్రాసెస్ కొనసాగించడానికి పేజీని రిఫ్రెష్ చేయండి.
