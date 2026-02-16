---
title: WordPress Multisite ఎలా ఇన్‌స్టాల్ చేయాలి
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# WordPress Multisite ని ఎలా ఇన్‌స్టాల్ చేయాలి?

WordPress Multisite ఒకే ఇన్‌స్టాలేషన్‌లో సైట్‌ల నెట్‌వర్క్‌ను కలిగి ఉండేందుకు మిమ్మల్ని అనుమతిస్తుంది. ఇది అంతర్నిర్మిత ఫీచర్, కానీ డిఫాల్ట్‌గా యాక్టివ్‌గా ఉండదు.

:::tip
Ultimate Multisite లో **[అంతర్నిర్మిత Multisite Setup Wizard](./multisite-setup-wizard)** ఉంది, ఇది ఈ మొత్తం ప్రక్రియను ఆటోమేట్ చేస్తుంది. మీరు Ultimate Multisite ఇన్‌స్టాల్ చేసి ఉంటే, క్రింద ఇచ్చిన మాన్యువల్ స్టెప్స్ అనుసరించడం కంటే విజార్డ్ ఉపయోగించడాన్ని మేము సిఫారసు చేస్తాము.
:::

Ultimate Multisite ఒక నెట్‌వర్క్-ఓన్లీ ప్లగిన్ కాబట్టి, ఈ ట్యుటోరియల్‌లో WordPress Multisite ని మాన్యువల్‌గా ఎలా ఇన్‌స్టాల్ చేసి సెటప్ చేయాలో మీరు నేర్చుకుంటారు. ఈ టెక్స్ట్ WPBeginner నుండి [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ఆధారంగా రూపొందించబడింది.

**మీ multisite నెట్‌వర్క్ సృష్టించడానికి ముందు గమనించాల్సిన విషయాలు:**

  * మంచి WordPress హోస్టింగ్ తీసుకోండి! నెట్‌వర్క్‌లోని వెబ్‌సైట్లు ఒకే సర్వర్ రిసోర్సెస్‌ను షేర్ చేసుకుంటాయి.

  * మీకు తక్కువ ట్రాఫిక్ ఉన్న కొన్ని సైట్లు మాత్రమే ఉంటే, షేర్డ్ హోస్టింగ్ మీకు సరిపోతుంది.

  * చాలా **Managed WordPress హోస్టింగ్ ప్రొవైడర్లు** Multisite ని రెడీమేడ్‌గా అందిస్తారు (వారు WordPress ని Multisite ఇప్పటికే యాక్టివేట్ చేసి కాన్ఫిగర్ చేసిన స్థితిలో ఇన్‌స్టాల్ చేస్తారు). WP Engine, Closte, Cloudways మొదలైనవాటికి ఇది వర్తిస్తుంది. మీ హోస్ట్ ప్రొవైడర్ విషయంలో ఇది అలా ఉందో లేదో మీకు ఖచ్చితంగా తెలియకపోతే, ఈ ట్యుటోరియల్‌తో ముందుకు వెళ్ళే ముందు వారి సపోర్ట్‌ను సంప్రదించండి.

  * WordPress ఇన్‌స్టాల్ చేయడం మరియు FTP ఉపయోగించి ఫైల్స్ ఎడిట్ చేయడం గురించి పరిచయం ఉండటం కూడా మంచిది.

_**ముఖ్యం**_ **:** మీరు ఇప్పటికే ఉన్న WordPress వెబ్‌సైట్‌లో multisite నెట్‌వర్క్ సెటప్ చేస్తుంటే ఈ విషయాలు మర్చిపోకండి:

  * మీ WordPress సైట్ యొక్క పూర్తి బ్యాకప్ సృష్టించండి

  * మీ plugins పేజీకి వెళ్లి, bulk actions నుండి _Deactivate_ ఎంచుకుని, _Apply_ క్లిక్ చేయడం ద్వారా మీ సైట్‌లోని అన్ని ప్లగిన్‌లను డీయాక్టివేట్ చేయండి

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite ఎనేబుల్ చేయడానికి, మొదట FTP క్లయింట్ లేదా cPanel ఫైల్ మేనేజర్ ఉపయోగించి మీ సైట్‌కు కనెక్ట్ అవ్వండి, మరియు మీ wp-config.php ఫైల్‌ను ఎడిటింగ్ కోసం తెరవండి.

_*That's all, stop editing! Happy blogging.*_ లైన్‌కు ముందు, ఈ క్రింది కోడ్ స్నిప్పెట్ జోడించండి:

define('WP_ALLOW_MULTISITE', true);

మీ wp-config.php ఫైల్‌ను సేవ్ చేసి సర్వర్‌కు తిరిగి అప్‌లోడ్ చేయండి.

మీ సైట్‌లో multisite ఫీచర్ ఎనేబుల్ అయిన తర్వాత, ఇప్పుడు మీ నెట్‌వర్క్‌ను సెటప్ చేయాల్సిన సమయం వచ్చింది.

**Tools » Network Setup** కు వెళ్ళండి

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

ఇప్పుడు మీరు మీ నెట్‌వర్క్‌లోని సైట్ల కోసం ఏ రకమైన డొమైన్ స్ట్రక్చర్ ఉపయోగిస్తారో WordPress కు చెప్పాలి: subdomains లేదా subdirectories.

మీరు subdomains ఎంచుకుంటే, డొమైన్ మ్యాపింగ్ కోసం మీ DNS సెట్టింగ్‌లను మార్చాలి మరియు మీ multisite నెట్‌వర్క్ కోసం _**wildcard subdomains**_ సెటప్ చేశారని నిర్ధారించుకోండి.

Network Setup కు తిరిగి వచ్చి, మీ నెట్‌వర్క్‌కు ఒక టైటిల్ ఇవ్వండి మరియు Network admin email లోని ఇమెయిల్ అడ్రస్ సరిగ్గా ఉందని నిర్ధారించుకోండి. కొనసాగించడానికి _Install_ క్లిక్ చేయండి.

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress అందించిన ఈ కోడ్‌ను మీ _**wp-config.php**_ కు జోడించండి:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

మరియు ఈ కోడ్‌ను, ఇది కూడా WordPress అందించినది, మీ _**.htaccess**_ ఫైల్‌కు జోడించండి:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin కు trailing slash జోడించండి

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

ఈ రెండు ఫైల్స్‌లో కోడ్ కాపీ చేసి పేస్ట్ చేయడానికి FTP క్లయింట్ లేదా ఫైల్ మేనేజర్ (మీరు cPanel వంటివి ఉపయోగిస్తుంటే) వాడండి.

చివరగా, మీ multisite నెట్‌వర్క్‌ను యాక్సెస్ చేయడానికి మీ WordPress సైట్‌లో మళ్ళీ లాగిన్ అవ్వండి.

**Ultimate Multisite ఇన్‌స్టాల్ చేయడానికి ముందు మీ WordPress Multisite ఇన్‌స్టాలేషన్‌లో subsite సృష్టించగలుగుతున్నారని టెస్ట్ చేసి నిర్ధారించుకోవడం చాలా ముఖ్యం.**

subsite సృష్టించడానికి:

  1. మీ వెబ్‌సైట్ wp-admin తెరవండి

  2. My Sites > Sites (/wp-admin/network/sites.php) కు నావిగేట్ చేయండి

  3. పైన Add New క్లిక్ చేయండి

  4. అన్ని ఫీల్డ్‌లను నింపండి:

  * Site Address — ఎప్పుడూ "www" ఉపయోగించవద్దు

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — సైట్ టైటిల్, తర్వాత మార్చవచ్చు

  * Admin Email — subsite కోసం ప్రారంభ admin యూజర్‌గా సెట్ చేయండి

![WordPress Multisite లో కొత్త సైట్ జోడించే ఫారమ్](/img/admin/sites-list.png)

ఫీల్డ్‌లను నింపిన తర్వాత, "Add site" బటన్ క్లిక్ చేయండి. కొత్త subsite సృష్టించబడిన తర్వాత, subsite సరిగ్గా పనిచేస్తుందని నిర్ధారించుకోవడానికి దాన్ని యాక్సెస్ చేయండి.

## సాధారణ సమస్యలు:

### 1\. నేను కొత్త సైట్లు సృష్టించగలుగుతున్నాను కానీ అవి యాక్సెస్ అవ్వడం లేదు.

మీరు subdomains ఎంచుకుంటే, మీ multisite నెట్‌వర్క్ కోసం wildcard subdomains కూడా సెటప్ చేయాలి.

అలా చేయడానికి, మీ వెబ్‌సైట్ హోస్టింగ్ అకౌంట్ కంట్రోల్ ప్యానల్ డ్యాష్‌బోర్డ్‌కు వెళ్ళండి (మీ హోస్టింగ్ ప్రొవైడర్‌ను బట్టి ఉదా. cPanel/Plesk/Direct Admin).

"Domains" లేదా "Subdomains" కోసం ఆప్షన్ కనుగొనండి. కొన్ని కంట్రోల్ ప్యానల్స్‌లో ఇది "Domain administration" గా లేబుల్ చేయబడి ఉంటుంది.

subdomain ఫీల్డ్‌లో, asterisk (*) నమోదు చేయండి. అప్పుడు, subdomain ఏ డొమైన్ నేమ్ కింద జోడించాలో ఎంచుకోమని అడుగుతుంది.

ఎంచుకున్న డొమైన్ నేమ్ కోసం document root ఆటోమేటిక్‌గా గుర్తించబడుతుంది. మీ wildcard subdomain జోడించడానికి _Create_ లేదా _Save_ బటన్ క్లిక్ చేయండి. ఎంట్రీ "*.[mydomain.com](http://mydomain.com)" లా కనిపించాలి
