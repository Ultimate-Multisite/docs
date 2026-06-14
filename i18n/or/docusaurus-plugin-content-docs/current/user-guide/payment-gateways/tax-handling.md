---
title: ଟ୍ୟାକ୍ ହ୍ୟାଣ୍ଡଲିଂ
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# ਟੈਕਸ హ్యాండిలింగ్ (Tax Handling)

Ultimate Multisite లో మన కోర్ ప్లగిన్‌లోనే ట్యాక్స్ కలెక్షన్ మాడ్యూల్ ఉంటుంది. కాబట్టి, మీ ప్లాన్స్, ప్యాకేజీలు మరియు సర్వీసులపై సేల్స్ టాక్సులు కలెక్ట్ చేయాలనుకుంటే, ఎలాంటి అడ్-ఆన్‌లను ఇన్‌స్టాల్ చేయకుండా సులభంగా చేయవచ్చు.

యూరప్‌లో ఉన్న కంపెనీల కోసం, మేము **VAT** కంప్లయన్స్ (compliance) ను మెరుగ్గా సపోర్ట్ చేయడానికి టూల్స్ మరియు ఫీచర్లను జోడించే ఒక **అడ్-ఆన్**ను అందిస్తాము.

Ultimate Multisite మీ తరపున ప్రభుత్వానికి టాక్సులను ఫైల్ చేయదు లేదా పంపదు; లావాదేవీ జరిగిన సమయంలో సరైన టాక్సులను కలెక్ట్ చేయడానికి మేము మీకు సహాయం చేస్తాము. **మీరు ఇప్పటికీ టాక్సులను మీరే చెల్లించాలి.**

## ట్యాక్స్ కలెక్షన్‌ను ఎనేబుల్ చేయడం (Enabling Tax Collection)

ట్యాక్స్ కలెక్షన్ డిఫాల్ట్‌గా ఆన్‌లో ఉండదు. దానిని ఎనేబుల్ చేయడానికి, మీరు **Ultimate Multisite > Settings > Taxes** కి వెళ్లి Enable Taxes సెట్టింగ్‌ను ఆన్ చేయాలి.

![Tax settings toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

ట్యాక్స్ సెట్టింగ్స్ పేజీ యొక్క పూర్తి వీక్షణ ఇక్కడ ఉంది:

![Tax settings full page](/img/config/settings-taxes-full.png)

మీరు ఒక్కో ప్రొడక్ట్ కోసం ట్యాక్స్ సెట్టింగ్‌లను కూడా చూడవచ్చు:

![Tax settings for products](/img/config/settings-taxes.png)

### ట్యాక్స్ మినహాయించబడినది vs. ట్యాక్స్ చేర్చబడినది (Tax excluded vs. Tax included)

డిఫాల్ట్‌గా, మీ అన్ని ప్రొడక్ట్ ధరలు ట్యాక్స్ మినహాయించబడ్డాయి, అంటే ఉత్పత్తి ధరలో టాక్సులు **చేర్చబడవు**. ఒక నిర్దిష్ట కొనుగోలుపై కస్టమర్ టాక్సులను చెల్లించాలని మేము నిర్ణయించుకుంటే, ఆ సబ్-టోటల్‌పై మేము టాక్సులను **అదనంగా** జోడిస్తాము.

మీరు మీ ప్రొడక్ట్ ధరలో టాక్సులను చేర్చాలనుకుంటే, మీరు **Inclusive Tax** సెట్టింగ్‌ను ఎనేబుల్ చేయడం ద్వారా అలా చేయవచ్చు.

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

మీరు చేసిన మార్పులను తప్పకుండా **సేవ్** చేసుకోవడం మర్చిపోవద్దు.

###

## ట్యాక్స్ రేట్లను సృష్టించడం (Creating Tax Rates)

ట్యాక్స్ కలెక్షన్‌ను ఎనేబుల్ చేసిన తర్వాత, మా ట్యాక్స్ రేట్స్ ఎడిటర్‌ను ఉపయోగించి నిర్దిష్ట లొకేషన్ల కోసం మీకు ట్యాక్స్ రేట్లను సృష్టించుకోవాలి.

ਤੁਸੀਂ ਟੈਕਸ ਸੈਟਿੰਗ ਪੇਜ ਦੇ ਸਾਈਡਬਾਰ 'ਤੇ **Manage Tax Rates** ਬਟਨ ਛੱਡ ਕੇ ਐਡੀਟਰ ਤੱਕ ਪਹੁੰਚ ਸਕਦੇ ਹੋ।

![Tax Rates panel ਵਿੱਚ Manage Tax Rates ਲнк ਦਾ ਚਿੱਤਰ settings page 'ਤੇ](/img/config/settings-taxes-manage-rates.png)

ਟੈਕਸ ਰੇਟਸ ਐਡੀਟਰ ਪੇਜ 'ਤੇ, ਤੁਸੀਂ **Add new Row** ਬਟਨ ਛੱਡ ਕੇ ਨਵੇਂ ਟੈਕਸ ਰੇਟਸ ਜੋੜ ਸਕਦੇ ਹੋ।

![Tax rates editor table ਵਿੱਚ ਉੱਪਰ Add new Row ਬਟਨ ਵਾਲਾ ਚਿੱਤਰ](/img/config/tax-rates-editor.png)

ਤੁਹਾਨੂੰ ਹਰੇਕ ਟੈਕਸ ਰੇਟ ਲਈ ਇੱਕ **title** (ਜਿਸਦੀ ਵਰਤੋਂ ਇਨਵੌਇਸਾਂ 'ਤੇ ਕੀਤੀ ਜਾਂਦੀ ਹੈ) ਦੇਣਾ ਪਵੇਗਾ। ਫਿਰ ਤੁਸੀਂ **country** (ਲਾਜ਼ਮੀ), **state**, ਅਤੇ **city** (ਦੋਵੇਂ ਵਪਾਰਕ ਹਨ) ਚੁਣ ਸਕਦੇ ਹੋ ਜਿੱਥੇ ਇਹ ਟੈਕਸ ਲਗਾਇਆ ਜਾਵੇਗਾ। ਅੰਤ ਵਿੱਚ, **tax rate in percents** ਜੋੜੋ।

### Tax Categories

ਤੁਸੀਂ ਕਈ ਟੈਕਸ ਕੈਟੇਗਰੀਆਂ ਵੀ ਬਣਾ ਸਕਦੇ ਹੋ, ਤਾਂ ਜੋ ਵੱਖ-ਵੱਖ ਕਿਸਮ ਦੇ ਉਤਪਾਦਾਂ ਲਈ ਵੱਖ-ਵੱਖ ਟੈਕਸ ਰੇਟ ਸੇਟ ਕੀਤੇ ਜਾ ਸਕਣ।

**Add new Tax Category** 'ਤੇ ਕਲਿੱਕ ਕਰੋ, ਫਿਰ ਆਪਣੀ ਕੈਟੇਗਰੀ ਦਾ ਨਾਮ ਲਿਖੋ ਅਤੇ **Create** ਦਬਾਓ।

![Tax rates editor ਦੇ ਉੱਪਰ Add new Tax Category ਬਟਨ ਦਾ ਚਿੱਤਰ](/img/config/tax-categories-add.png)

**Switch** 'ਤੇ ਕਲਿੱਕ ਕਰਕੇ ਅਤੇ ਉਸ ਕੈਟੇਗਰੀ ਨੂੰ ਚੁਣ ਕੇ, ਤੁਸੀਂ ਉਹ ਕੈਟੇਗਰੀ ਚਲਾ ਸਕਦੇ ਹੋ ਜਿਸ ਵਿੱਚ ਤੁਸੀਂ ਨਵੇਂ ਟੈਕਸ ਜੋੜਨਾ ਚਾਹੁੰਦੇ ਹੋ।

![Tax category selector dropdown ਦਾ ਚਿੱਤਰ ਉਪਲਬਧ ਕੈਟੇਗਰੀਆਂ ਨੂੰ ਦਿਖਾਉਂਦਾ ਹੈ](/img/config/tax-categories-select.png)

ਤੁਸੀਂ **Product edit page** 'ਤੇ ਜਾ ਕੇ ਅਤੇ ਫਿਰ Taxes 탭 'ਤੇ ਜਾ ਕੇ ਕਿਸੇ ਖਾਸ ਉਤਪਾਦ ਲਈ ਟੈਕਸ ਕੈਟੇਗਰੀ ਸੈੱਟ ਕਰ ਸਕਦੇ ਹੋ।

![Tax category ਅਤੇ taxable ਟੋ글 ਵਾਲਾ Product taxes tab ਦਾ ਚਿੱਤਰ](/img/config/product-taxes.png)

ਉਸੇ ਸਕ੍ਰੀਨ 'ਤੇ, ਤੁਸੀਂ **Is Taxable?** ਟੋ글 ਨੂੰ ਬੰਦ ਕਰ ਸਕਦੇ ਹੋ ਤਾਂ ਜੋ Ultimate Multisite ਨੂੰ ਪਤਾ ਲੱਗ ਜਾਵੇ ਕਿ ਉਸ ਦਿੱਤੇ ਗਏ ਉਤਪਾਦ 'ਤੇ ਟੈਕਸ ਇਕੱਠੇ ਨਹੀਂ ਕਰਨੇ ਹਨ।

## European VAT Support

ଯେପରି ଆମେ ପୂର୍ବରୁ କହିଥିଲୁ, ଆମ ପାଖରେ ୟୁଏ (EU) ର ଗ୍ରାହକମାନଙ୍କ ପାଇଁ ଏକ ଅଡ-ଅନ୍ (add-on) ମିଳିଛି ଯାହା ୟୁରପିଆ ଭେଟ୍ ନିୟମଗତ କାରଣରୁ ସେମାନଙ୍କ ପାଇଁ ଆହୁରି ଅଧିକ ଆବଶ୍ୟକତା ରହିଛି।

ଆମର ୟେଟି (VAT) ଟୁଲ୍ସ ଦୁଇଟି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ କାମରେ ସାହାଯ୍ୟ କରେ:

*   ୟୁଏ ୟେଟି ହାରଗୁଡ଼ିକୁ ସହଜରେ ଲୋଡ କରିବା;
*   ୟେଟି ନମ୍ବର ସଂଗ୍ରହ ଏବଂ ଯାଞ୍ଚ - ଏବଂ ୟେଟି ମୁକ୍ତା సంస్థ ପାଇଁ రి버스 ଚାର୍ଜିଙ୍ଗ (reverse charging) (ଯେପରିକି ବୈଧ ୟେଟି ନମ୍ବରଥିବା କମ୍ପାନୀମାନଙ୍କ ପାଇଁ)।

ସେହି ଅଡ-ଅନ୍ଟିକୁ ଇନଷ୍ଟଲ କରିବା ପାଇଁ, **Ultimate Multisite > Settings** ରେ ଯାଆନ୍ତୁ ଏବଂ ତା'ଠାରୁ **Check our Add-ons** ବାର୍‌ସିଡ୍ (sidebar) ଲିଙ୍କ୍ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

ଆପଣ ଆମ ଅଡ-ଅନ୍ ପେଜ୍‌କୁ ରିଡିରେକ୍ଟ ହୋଇଯିବେ। ସେଠାରେ, ଆପଣ **Ultimate Multisite VAT add-on** ଖୋଜିପାରିବେ ଏବଂ ଏହାକୁ ଇନଷ୍ଟଲ କରିପାରିବେ।

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

ତା'ପରେ, **Network Admin > Plugins** ରେ ଯାଇ ସେହି ଅଡ-ଅନ୍‌କୁ ନେଟୱାର୍କ-ବିଶିଷ୍ଟ ଭାବରେ ଏକଟିଭେଟ୍ (activate) କରନ୍ତୁ।

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

ଯଦି ଆପଣ **Tax Settings tab** ରେ પાછા ଯାଆନ୍ତି, ତେବେ ଆପଣ ନୂଆ ଅପ୍ସନ୍ ଦେଖିବେ। ନୂଆ ୟେଟି ଟୁଲ୍‌ଗୁଡ଼ିକୁ ସକ୍ରିୟ କରିବା ପାଇଁ **Enable VAT Support** অপশনଟିକୁ অন (toggle) କରନ୍ତୁ। ଆପଣଙ୍କ ସେଟିଙ୍ଗ୍ସ **save** କରିବୁ ଭୁଲି ଯାଉନି!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### ୟେଟି ଟ୍ୟାକ୍ସ ହାରକୁ ପୂରଣ କରିବା (Pulling on VAT Tax Rates)

ଆମର ଏକ ଟୁଲ୍ ଯାହା ଆମର ଇଣ୍ଟିଗ୍ରେସନ୍ ମଧ୍ୟ ଯୋଗ କରେ, ତାହା ହେଉଛି ୟୁଏ ସଦସ୍ୟ ରାଜ୍ୟଗୁଡ଼ିକ ପାଇଁ ଟ୍ୟାକ୍ସ ହାର ଲୋଡ କରିବାର କ୍ଷମତା। ଏହାକୁ ୟୁଏ ୟେଟି ସପପୋର୍ଟ୍ ଅନ୍ (enable) କରିବା ପରେ ଟ୍ୟାକ୍ସ ହାର ଇଡିଟର ପେଜ୍‌କୁ ଯାଇ କରିପାରିବେ।

ਪੇਜ ਦੇ ਹੇਠਾਂ ਤੁਹਾਨੂੰ VAT ਪੁੱਲਿੰਗ (pulling) ਦੇ ਵਿਕਲਪ ਦਿਖਾਈ ਦੇਣਗੇ। ਇੱਕ ਰੇਟ ਕਿਸਮ ਚੁਣ ਕੇ ਅਤੇ **Update EU VAT Rates** ਬਟਨ 'ਤੇ ਕਲਿੱਕ ਕਰਨ ਨਾਲ, ਇਹ ਟੇਬਲ ਆਪਣੇ ਆਪ ਖੋਲ੍ਹ ਜਾਵੇਗਾ ਅਤੇ ਹਰ EU ਮੈਂਬਰ ਰਾਜ ਲਈ ਟੈਕਸ ਦਰਾਂ ਨਾਲ ਭਰਿਆ ਹੋਇਆ ਦਿਖਾਏਗਾ। ਫਿਰ ਤੁਹਾਨੂੰ ਸਿਰਫ਼ ਇਸਨੂੰ ਸੇਵ ਕਰਨਾ ਪਵੇਗਾ।

![Update EU VAT Rates button at the bottom of the tax rates editor](/img/config/tax-rates-vat-pull.png)

ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਨੂੰ ਪੁੱਲ ਕਰਨ ਤੋਂ ਬਾਅਦ ਮੂਲਵैलਿਊਜ਼ (values) ਨੂੰ ਵੀ ਅਪਡੇਟ ਕਰ ਸਕਦੇ ਹੋ। ਇਹ ਕਰਨ ਲਈ, ਸਿਰਫ਼ ਉਸ ਟੇਬਲ ਦੀ ਲਾਈਨ ਨੂੰ ਐਡਿਟ ਕਰੋ ਜਿਸਦੀ ਤੁਹਾਨੂੰ ਲੋੜ ਹੈ ਅਤੇ ਨਵੇਂ ਵੈਲਿਊਜ਼ ਸੇਵ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ।

### VAT ਵੈਲਿਡੇਸ਼ਨ (VAT Validation)

ਜਦੋਂ VAT ਸਪੋਰਟ ਚਾਲੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ, ਤਾਂ Ultimate Multisite ਚੈੱਕਆਊਟ ਫਾਰਮ ਵਿੱਚ ਬਿਲਿੰਗ ਐਡਰੈੱਸ ਖੇਤਰ ਦੇ ਹੇਠਾਂ ਇੱਕ ਅੱਧਾ ਮੈਦਾਨ ਜੋੜ ਦੇਵੇਗਾ। ਇਹ ਖੇਤਰ ਸਿਰਫ਼ EU ਵਿੱਚ ਰਹਿਣ ਵਾਲੇ ਗਾਹਕਾਂ ਲਈ ਹੀ ਦਿਖਾਈ ਦੇਵੇਗਾ।

<!-- Screenshot unavailable: VAT Number field on the frontend checkout form below the billing address -->

Ultimate Multisite ਫਿਰ VAT ਨੰਬਰ ਦੀ ਵੈਲਿਡੇਸ਼ਨ ਕਰਦਾ ਹੈ ਅਤੇ ਜੇ ਇਹ ਇੱਕ ਵੈਧ ਨੰਬਰ ਵਜੋਂ ਵਾਪਸ ਆਉਂਦਾ ਹੈ, ਤਾਂ ਰਿਵਰਸ ਚਾਰਜ ਮਕੈਨਿਜ਼ਮ (reverse charge mechanism) ਲਾਗੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ ਅਤੇ ਉਸ ਆਰਡਰ ਲਈ ਟੈਕਸ ਦਰ 0% ਸੈੱਟ ਕਰ ਦਿੱਤੀ ਜਾਂਦੀ ਹੈ।
