---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite एक WordPress Multisite plugin है जो आपको customers को WaaS यानी Websites as a Service प्रदान करने में सक्षम बनाता है। इससे पहले कि हम गहराई में जाएं और सीखें कि Ultimate Multisite आपके business और customers की कैसे मदद कर सकता है, कुछ बुनियादी जानकारी हासिल करना जरूरी है।

## WordPress Multisite

हम में से ज्यादातर लोग सामान्य WordPress installation से परिचित हैं। आप या तो इसे अपने hosting provider के control panel से बनाते हैं या, अगर आप साहसी हैं तो, एक नया web server और database setup करके, core files download करके installation प्रक्रिया शुरू करते हैं।

यह दुनिया भर में लाखों WordPress sites के लिए काम करता है, लेकिन एक agency या hosting provider के नजरिए से आइए कुछ देर के लिए संख्याओं की बात करें।

Control panel के जरिए एक WordPress site बनाना या सैकड़ों sites बनाना भी आसान है, लेकिन जब इन sites के प्रबंधन की बात आती है तो समस्याएं सामने आने लगती हैं। बिना प्रबंधन के आप malware का आसान शिकार बन सकते हैं। प्रबंधन करने का मतलब है मेहनत और संसाधन लगाना, और हालांकि WordPress sites के प्रबंधन को आसान बनाने के लिए बाहरी tools और plugins उपलब्ध हैं, लेकिन चूंकि customers के पास administrative access होता है, इसलिए ये सारी मेहनत बेकार हो सकती है।

WordPress अपने core में 'Multisite' नाम की एक सुविधा प्रदान करता है जिसकी शुरुआत 2010 में WordPress 3.0 के साथ हुई थी। तब से इसमें कई सुधार किए गए हैं जिनमें नई सुविधाएं जोड़ी गई हैं और security को मजबूत किया गया है।

सरल शब्दों में, WordPress multisite को ऐसे समझें: एक विश्वविद्यालय WordPress का एक ही installation रखता है लेकिन हर विभाग की अपनी अलग WordPress site होती है।

इस बात को बेहतर समझने के लिए आइए कुछ बुनियादी शब्दावली देखें जो न केवल Ultimate Multisite के documentation में बल्कि पूरे WordPress समुदाय में इस्तेमाल होती है।

### Network

WordPress में, एक multisite network वह होता है जहां कई subsites को एक ही dashboard से प्रबंधित किया जा सकता है। हालांकि multisite network बनाने का तरीका hosting providers के बीच अलग-अलग हो सकता है, लेकिन अंतिम परिणाम आमतौर पर wp-config.php file में कुछ अतिरिक्त directives होते हैं जो WordPress को बताते हैं कि वह इस विशेष mode में काम कर रहा है।

Multisite network और stand-alone WordPress installation के बीच कई महत्वपूर्ण अंतर हैं जिन पर हम संक्षेप में चर्चा करेंगे।

#### Subdomain बनाम Subdirectory

सबसे पहले आपको यह तय करना होगा कि multisite installation _subdirectories_ के साथ काम करेगा या _subdomains_ के साथ। Ultimate Multisite दोनों विकल्पों के साथ समान रूप से अच्छा काम करता है लेकिन दोनों configurations में कुछ architectural अंतर हैं।

_Subdirectory_ configuration में, network sites को main domain name के आधार पर एक path मिलता है। उदाहरण के लिए 'site1' नाम की network site का पूरा URL https://domain.com/site1 होगा। _Subdomain_ configuration में, network site का अपना _subdomain_ होता है जो main domain name से बनता है। इस प्रकार 'site1' नाम की site का पूरा URL https://site1.domain.com/ होगा।

दोनों विकल्प पूरी तरह से सही हैं, लेकिन _subdomains_ का उपयोग कई फायदे देता है, हालांकि इसकी architecture में ज्यादा सोच-विचार और planning की जरूरत होती है।

DNS के मामले में _subdirectories_ का उपयोग करना अपेक्षाकृत सरल है। चूंकि network sites बस parent path की children होती हैं, इसलिए main domain name के लिए केवल एक domain name entry की जरूरत होती है। _Subdomains_ के लिए चुनौती थोड़ी जटिल है जिसमें हर network site के लिए अलग CNAME entry या DNS records में wildcard (*) entry की जरूरत होती है।

एक और विचारणीय क्षेत्र SSL और SSL certificates का जारी होना और उपयोग है। _Subdirectory_ configuration में एक single domain certificate का उपयोग किया जा सकता है क्योंकि network sites बस main domain name के paths होती हैं। इसलिए domain.com के लिए एक certificate https://domain.com/site1, https://domain.com/site2 और इसी तरह अन्य sites के लिए पर्याप्त SSL प्रदान करेगा।

_Subdomain_ configuration में wildcard SSL certificate का उपयोग सबसे आम विकल्पों में से एक है। इस प्रकार का SSL certificate एक domain और उसके _subdomains_ के लिए encryption प्रदान करता है। इसलिए एक wildcard SSL certificate https://site1.domain.com, https://site2.domain.com और https://domain.com के लिए encryption प्रदान करेगा।

हालांकि अन्य विकल्प भी मौजूद हैं, लेकिन ये अक्सर सीमित दायरे और application वाले होते हैं और उपयुक्तता के संबंध में अतिरिक्त configuration और विचार की आवश्यकता होती है।

#### Plugins और Themes

WordPress जो देता है वो ले भी लेता है, कम से कम customer के नजरिए से तो। एक stand-alone WordPress installation में अगर site administrator कोई खराब plugin install करता है या अपने installation को अपडेट नहीं रखता है तो इसका शिकार केवल वह खुद होता है। हालांकि, multisite installation पर एक site administrator द्वारा खराब plugin install करने से network में मौजूद हर site प्रभावित होती है।

इसी कारण से multisite के रूप में configure होने पर WordPress site administrators से plugins और themes install करने की क्षमता हटा देता है और इसके बजाय इस क्षमता को नए बनाए गए network administrator या 'super admin' role को दे देता है। यह विशेषाधिकार प्राप्त role तब यह तय कर सकता है कि network sites के administrators को अपने dashboard में plugins menu देखने या उस तक पहुंचने की अनुमति दी जाए या नहीं, और यदि हां, तो क्या ऐसी permissions plugins को _activate_ या _deactivate_ करने तक फैली हुई हैं।

इस तरह network administrator network में plugins और themes install करने और इन plugins और themes का उपयोग करने की permissions network sites को देने के लिए जिम्मेदार होता है। Site administrators न तो plugins और themes install कर सकते हैं और न ही उन plugins और themes तक पहुंच सकते हैं जो उनकी site को assign नहीं किए गए हैं।

#### Users और Administrators

WordPress Multisite में, सभी network sites एक ही database साझा करती हैं और इसलिए एक ही users, roles और capabilities साझा करती हैं। इसे समझने का सबसे अच्छा तरीका यह है कि सभी users network के members हैं न कि किसी विशेष site के।

इस समझ के साथ यह अवांछनीय हो सकता है कि users बनाए जाएं और इसी कारण WordPress Multisite site administrators से यह क्षमता हटाकर network administrator को दे देता है। बदले में network administrator site administrator को आवश्यक विशेषाधिकार दे सकता है ताकि वे अपनी site के लिए user accounts बना सकें।

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

ऊपर की बात को दोहराते हुए, हालांकि user accounts site से संबंधित दिखाई देते हैं, वास्तव में वे network को आवंटित होते हैं और इसलिए पूरे network में unique होने चाहिए। इस कारण से कुछ usernames register करने के लिए उपलब्ध नहीं हो सकते हैं।

हालांकि enterprise systems में यह कोई अजनबी अवधारणा नहीं है, user registration और authentication का यह single source अक्सर उन लोगों के लिए समझना कठिन होता है जो stand-alone WordPress installations से परिचित हैं जहां user administration कुछ हद तक आसान है।

#### Media

जहां WordPress Multisite में network sites एक single database साझा करती हैं, वे media files के लिए filesystem पर अलग paths रखती हैं।

मानक WordPress स्थान (wp-content/uploads) वही रहता है; हालांकि, इसका path network site की unique ID को दर्शाने के लिए बदल जाता है। इसलिए एक network site की media files wp-contents/uploads/site/[id] के रूप में दिखाई देती हैं।

#### Permalinks

हमने पहले बताया था कि _subdirectory_ configuration की तुलना में _subdomain_ के कुछ विशिष्ट फायदे हैं और यहां वह है: paths।

_Subdirectory_ configuration में, main site (network स्थापित होने पर बनाई गई पहली site) और network subsites को domain name से आने वाले एक ही path को साझा करना होता है। इससे बड़ी संख्या में conflicts की संभावना होती है।

Posts के लिए, network sites के साथ टकराव रोकने के लिए main site में एक अनिवार्य /blog/ path जोड़ा जाता है। इसका मतलब है कि 'Post name' जैसे pretty permalinks domain.name/blog/post-name/ के रूप में प्रस्तुत किए जाएंगे।

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_Subdomain_ configuration में यह कार्रवाई आवश्यक नहीं है क्योंकि प्रत्येक network site को पूर्ण domain separation का लाभ मिलता है और इसलिए उन्हें एक ही path पर निर्भर नहीं रहना पड़ता। वे अपने _subdomain_ के आधार पर अपने स्वयं के अलग paths बनाए रखती हैं।

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

_Subdirectory_ configuration में naming conflicts की संभावना static pages तक फैली होती है क्योंकि main site और network sites एक ही path साझा करती हैं।

इसे रोकने के लिए, WordPress कुछ site names को blacklist करने का एक तरीका प्रदान करता है ताकि वे पहली site के नामों से conflict न करें। आमतौर पर network administrator main site के pages के root paths दर्ज करता है।

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_Subdomain_ configuration में naming conflicts की संभावना _subdomain_ द्वारा कम हो जाती है क्योंकि यह network site के लिए unique होता है और main site से किसी भी तरह से संबंधित नहीं होता।

### Registration

WordPress Multisite की network settings में कई नए user registration विकल्प उपलब्ध हैं, जो नए और मौजूदा users को sites बनाने की अनुमति देते हैं।

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Stand-alone WordPress installations के विपरीत, network sites में user registrations की अनुमति देने या उन registrations को roles assign करने के परिचित विकल्प नहीं होते।

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

जब user accounts बनाए जाते हैं तो वे network level पर generate होते हैं। इसलिए किसी एक विशेष site से संबंधित होने के बजाय वे network से संबंधित होते हैं। इसके कुछ विशिष्ट फायदे और नुकसान हैं।

उदाहरण के लिए, मान लें कि आपका WordPress Multisite समाचार और जानकारी के business में है। आप multisite स्थापित करेंगे और फिर finance, technology, entertainment और अन्य रुचि के क्षेत्रों के लिए network sites बनाएंगे, साथ ही plugins और themes पर समग्र नियंत्रण बनाए रखेंगे। प्रत्येक network site को अपनी network site के look and feel और user experience पर custom post types या regular post categories की तुलना में कहीं अधिक नियंत्रण होगा।

इस तरह जब कोई user log in करता है तो वह network में log in करता है और अंततः प्रत्येक network site में भी logged in होता है जिससे एक seamless अनुभव मिलता है। यदि आपकी नई site subscription based होती तो यह आदर्श समाधान और परिणाम होता।

हालांकि, यदि multisite का इरादा और उद्देश्य ऐसी अलग-अलग network sites प्रदान करना है जिनका एक-दूसरे से कोई संबंध नहीं है, तो लगभग हमेशा user roles में बदलाव के लिए बाहरी या अतिरिक्त plugins की आवश्यकता होती है।

### Domain और SSL

आइए एक ऐसे WordPress Multisite installation के बारे में बात करें जो लगभग हमारे ध्यान से बच जाता है - WordPress.com। यह अब तक का सबसे व्यापक WordPress multisite का उदाहरण है और किसी उद्देश्य को पूरा करने के लिए इसकी व्यापक customization और मोल्डिंग क्षमताओं को प्रदर्शित करता है।

आजकल आधुनिक इंटरनेट पर SSL का उपयोग लगभग अनिवार्य है और WordPress multisites के network administrators को जल्द ही इन चुनौतियों का सामना करना पड़ता है।

_Subdomain_ configuration में sites root domain name के आधार पर बनाई जाती हैं। इस प्रकार 'site1' नाम की site 'site1.domain.com' के रूप में बनाई जाएगी। Wildcard SSL certificate का उपयोग करके, एक network administrator इस चुनौती को सफलतापूर्वक संबोधित कर सकता है और network के लिए SSL encryption क्षमताएं प्रदान कर सकता है।

WordPress Multisite में एक domain mapping function है जो network sites को custom domain names या network के root domain से अलग domain names से जोड़ने की अनुमति देता है।

Network administrators के लिए यह domain name configuration के साथ-साथ SSL certificates जारी करने और उनके रखरखाव दोनों में जटिलता की एक अतिरिक्त परत प्रस्तुत करता है।

इस तरह जबकि WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com) को 'site1' से map करने का एक तरीका प्रदान करता है, network administrator को DNS entries का बाहरी प्रबंधन और SSL certificates के implementation की चुनौती का सामना करना पड़ता है।

## Ultimate Multisite

Stand-alone WordPress installation और Multisite installation के बीच के अंतरों को समझने के बाद, आइए देखें कि Ultimate Multisite कैसे Websites as a Service प्रदान करने के लिए ultimate arsenal है।

### परिचय

Ultimate Multisite Website as a Service (WaaS) बनाने के लिए आपकी Swiss Army knife है। Wix.com, Squarespace, WordPress.com के बारे में सोचें और फिर अपनी खुद की service के मालिक होने के बारे में सोचें।

अंदर से Ultimate Multisite WordPress Multisite का उपयोग करता है लेकिन यह इसे इस तरह से करता है कि न केवल multisite installations के साथ network administrators को जिन असंख्य चुनौतियों का सामना करना पड़ता है उन्हें हल करता है बल्कि क्षमताओं को बढ़ाकर विभिन्न प्रकार के use cases का समर्थन करता है।

निम्नलिखित sections में हम कुछ सामान्य use cases और उन cases का समर्थन करने के लिए आवश्यक विचारों पर एक नज़र डालेंगे।

### Use Cases

#### Case 1: एक Agency

आमतौर पर एक agency की मुख्य विशेषज्ञता websites के design में होती है जबकि hosting या marketing जैसे पहलू अतिरिक्त services के रूप में सूचीबद्ध होते हैं।

Agencies के लिए Ultimate Multisite एक single platform पर कई websites को host और प्रबंधित करने की अपनी क्षमताओं में एक अविश्वसनीय value proposition प्रस्तुत करता है। इससे भी अधिक उन agencies के लिए जो GeneratePress, Astra, OceanWP या अन्य जैसे विशेष themes पर अपने designs को standardize करती हैं, Ultimate Multisite की क्षमताओं का लाभ उठाकर प्रत्येक नई site के लिए इन themes को automatically activate कर सकती हैं।

इसी तरह सामान्य और लोकप्रिय plugins के लिए agency pricing के abundance of deals के साथ, Ultimate Multisite का उपयोग agencies को मौजूदा निवेशों का लाभ उठाने की अनुमति देता है एक common platform प्रदान करके जहां से plugins को install, maintain और उपयोग किया जा सकता है।

सबसे अधिक संभावना है कि configuration का उपयोग वांछनीय होगा और सौभाग्य से Ultimate Multisite कई लोकप्रिय hosting providers के साथ-साथ Cloudflare और cPanel जैसी services के लिए अपने integrations के साथ domain mapping और SSL certificates को सुविधाजनक बनाना अविश्वसनीय रूप से आसान बनाता है।

इस प्रकार इन providers में से किसी एक का लाभ उठाकर या Ultimate Multisite को Cloudflare के पीछे रखकर domains और SSL certificates के प्रबंधन जैसे पहलू काफी हद तक सरल हो जाते हैं।

जो Agencies sites के निर्माण पर कड़ा नियंत्रण रखना पसंद करती हैं, वे Ultimate Multisite के streamlined interface के माध्यम से sites बनाने और sites को customers और plans के साथ जोड़ने की आसानी की सराहना करेंगी।

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Plugins और themes पर कड़ा नियंत्रण Ultimate Multisite के intuitive interfaces के माध्यम से per-product basis पर बनाए रखा जाता है जो plugins और themes को उपलब्ध या छिपाने के साथ-साथ नई site के लिए instantiate होने पर उनकी activation state की अनुमति देता है।

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes समान functionality प्रदान करते हैं, जो site creation पर विशेष themes को activate या छिपाने की अनुमति देते हैं।

![Product theme limitations interface](/img/config/product-themes.png)

Agencies Ultimate Multisite के साथ मन की शांति पाएंगी जो उन्हें वह करने की अनुमति देता है जो वे सबसे अच्छा करती हैं - असाधारण websites design करना।

#### Case 2: Niche Provider

एक पुरानी कहावत है जो कहती है, "एक काम करो और उसे अच्छे से करो"। कई specialists के लिए इसका मतलब है एक single core idea के आसपास एक product या service बनाना।

शायद आप एक उत्साही golfer हैं जो clubs को websites promote कर रहे हैं या आप एक उत्साही esports gamer हैं जो clans को websites प्रदान कर रहे हैं। शायद एक व्यक्ति restaurants को booking service promote कर रहा है?

कई कारणों से आप एक common framework और platform पर आधारित services प्रदान करना चाहेंगे। यह हो सकता है कि आपने आवश्यक functionality प्रदान करने के लिए bespoke plugins design या निवेश किए हों या यह हो सकता है कि industry best practices के लिए design के लिए किसी प्रकार के standardized approach की आवश्यकता हो।

Ultimate Multisite की एक innovative feature template sites का उपयोग है। एक template site वह है जहां theme install और activate हो चुका है, आवश्यक plugins install और activate हो चुके हैं और sample posts या pages बनाए गए हैं। जब कोई customer template के आधार पर एक नई site बनाता है, तो template की contents और settings नई बनाई गई site में copy हो जाती हैं।

Niche sites और services के provider के लिए यह custom plugins और design के साथ तुरंत एक ready to go site बनाने की क्षमता में एक अद्वितीय लाभ प्रदान करता है। Customer को service पूरी करने के लिए केवल न्यूनतम input प्रदान करने की आवश्यकता होती है।

आवश्यकताओं के आधार पर _subdirectory_ या _subdomain_ दोनों configurations उपयुक्त हो सकते हैं, ऐसे में architecture choices _subdirectories_ के लिए simple SSL certificate या _subdomains_ के लिए wildcard SSL certificate के बीच होंगे।

#### Case 3: WordPress Web Hosting

WordPress sites को host करने के असंख्य तरीके हैं लेकिन शायद ही कभी यह उतना सरल होता है जितना कि WordPress के pre-installed version के साथ customer को web space प्रदान करना। ऐसा इसलिए है क्योंकि एक meaningful service प्रदान करने के लिए कई निर्णयों और विचारों को एक साथ आना होता है।

Ultimate Multisite WordPress sites की hosting के लिए एक व्यापक turnkey solution प्रदान करके इस क्षेत्र में उत्कृष्ट है। Solution में subscription services, payment collection, checkout forms, discount vouchers और customer communications प्रदान करने के लिए core mechanisms शामिल हैं।

WordPress Multisite को सही ढंग से install, configure और maintain करने के लिए आवश्यक अधिकांश integral work Ultimate Multisite द्वारा सुविधाजनक बनाया जाता है, इस हद तक कि network administrators को केवल उन पहलुओं पर विचार करने की आवश्यकता होती है जो उनकी service या niche से संबंधित हैं जैसे product tiers, pricing और service offers।

Ultimate Multisite के साथ integrate करने की इच्छा रखने वाले developers के लिए, solution event notification के लिए एक व्यापक RESTful API और Webhooks भी प्रदान करता है।

बाहरी plugins और licenses की भीड़ पर निर्भरता के बिना, Ultimate Multisite Wix, Squarespace, WordPress.com और अन्य के समान एक feature rich और comparable solution प्रदान करता है।

### Architecture Considerations

हालांकि यह एक व्यापक guide नहीं है, निम्नलिखित items Ultimate Multisite installation का समर्थन करने के लिए सही technologies के चयन के लिए मार्गदर्शन के रूप में काम करेंगे।

#### Shared बनाम Dedicated Hosting

दुर्भाग्य से सभी hosting providers समान नहीं हैं और कुछ अत्यधिक server densities का अभ्यास करते हैं। Low-cost providers आमतौर पर server density को maximize करके revenue generate करते हैं। इस तरह आपका Ultimate Multisite installation एक ही server पर कई सौ sites में से केवल एक हो सकता है।

Provider की ओर से उचित safeguards के बिना, shared server पर sites 'noisy neighbour' समस्या का अनुभव करती हैं। यानी, एक ही server पर एक site इतने संसाधनों का उपभोग कर रही है कि अन्य sites को शेष संसाधनों के लिए प्रतिस्पर्धा करनी पड़ती है। अक्सर यह धीमी sites या समय पर respond न करने वाली sites के रूप में प्रकट होता है।

स्वयं web hosting के provider के रूप में इसका प्रभाव यह होगा कि आपके customers को धीमी speeds, low page rank और high bounce rates का अनुभव होगा जो अक्सर customer churn का कारण बनता है क्योंकि वे कहीं और services की तलाश करते हैं।

संक्षेप में, सस्ता का मतलब अच्छा नहीं है।

Ultimate Multisite कई अच्छे hosting providers के साथ काम करने के लिए जाना जाता है और domain mapping और automatic SSL जैसे functions प्रदान करने के लिए उनके environment के साथ अच्छी तरह से integrate होता है। ये providers performance को महत्व देते हैं और shared hosting की तुलना में higher grade service प्रदान करते हैं।

Compatible providers की सूची और प्रत्येक के लिए complete set-up instructions के लिए कृपया Compatible Providers का documentation देखें।

#### Performance Considerations

Ultimate Multisite एक धीमा application नहीं है, बल्कि, यह remarkably fast है। हालांकि, यह केवल underlying application और infrastructure जितना अच्छा perform करता है और केवल उसका leverage कर सकता है जिस तक इसकी पहुंच है।

इस पर विचार करें: आप 100 sites वाले Ultimate Multisite installation के network administrator हैं। इनमें से कुछ sites अच्छा प्रदर्शन कर रही हैं और हर दिन कई website visitors आकर्षित करती हैं।

यह scenario एक से पांच sites के छोटे scale पर अलग होगा लेकिन जल्द ही scale की समस्याएं स्पष्ट होंगी।

बिना ध्यान दिए, single Ultimate Multisite site सभी sites के सभी visitors की requests को पूरा करने के लिए जिम्मेदार होगी। ये requests dynamic PHP pages या stylesheets, javascript या media files जैसी static assets के लिए हो सकती हैं। चाहे एक site हो या सौ, ये tasks repetitive, monotonous और wasteful हो जाते हैं। CPU power और memory का उपयोग करके PHP file को process करना अनावश्यक है जब output हर request के लिए समान static information है।

इसी तरह PHP या HTML page के लिए एक request बदले में scripts, stylesheets और image files के लिए कई succeeding requests generate करती है। वे requests सीधे आपके Ultimate Multisite server को target करती हैं।

कोई आसानी से server को upgrade करके इस समस्या को हल कर सकता है लेकिन यह एक secondary समस्या को ठीक नहीं करता - geographic latencies। केवल multiple locations में multiple servers इस समस्या को ठीक से संबोधित कर सकते हैं।

इसी कारण से अधिकांश network administrators static pages के लिए requests को पूरा करने के लिए front-end caching solutions और content distribution networks (CDN) का उपयोग करते हैं। इन requests को पूरा करना और request के server तक पहुंचने से पहले assets serve करना processing resources बचाता है, delays को खत्म करता है, अनावश्यक upgrades से बचाता है और technology investments को maximize करता है।

Ultimate Multisite में एक sophisticated Cloudflare add-on शामिल है जो network administrators को अपने installations को Cloudflare के पीछे रखने और न केवल इसकी caching capabilities बल्कि DNS hosting, SSL certificates और security mechanisms का भी उपयोग करने में सक्षम बनाता है।

#### Backups

कोई 50 लोगों से backups पर सलाह मांग सकता है और backup strategies पर 50 अलग-अलग राय प्राप्त कर सकता है। जवाब है, यह निर्भर करता है।

जो विवादित नहीं है वह यह है कि backups आवश्यक हैं और यह लगभग असंभव है कि इन्हें provider द्वारा प्रबंधित न किया जाए, विशेष रूप से वह जो managed service प्रदान करता है। नतीजतन customers इस service को प्रदान और प्रबंधित करने के लिए network administrator की ओर देखेंगे। Network administrator किसकी ओर देखता है यह पूरी तरह से एक अलग समस्या है।

इस section के उद्देश्यों के लिए आइए सहमत हों कि backup उस समय system state की point-in-time copy है जब backup शुरू किया गया था। सरल शब्दों में, backup के समय system की जो भी state है वह state capture होकर backup में lock हो जाती है।

इस समझ के साथ backups कैसे achieve करें और आपके environment के लिए क्या सबसे अच्छा है इसका जवाब काफी हद तक आपकी requirements और उन requirements को पूरा करने की hosting provider की ability पर निर्भर करेगा। हालांकि, सबसे opinionated से least opinionated के क्रम में, नीचे दिए गए options कुछ मार्गदर्शन प्रदान करेंगे।

#### Snapshots

Snapshots backups के लिए silver bullets हैं क्योंकि ये आसान हैं, uncomplicated हैं (जब तक आप restore नहीं करना चाहते) और 'बस काम करते हैं'। हालांकि इसके लिए आपके provider से कुछ मदद की आवश्यकता होती है और ज्यादातर यह तभी लागू होता है जब आपके पास VPS (Virtual Private Server) या similar हो। हमारे 'Compatible Providers' documentation में सूचीबद्ध कई providers network administrator द्वारा किसी और intervention या विचार की आवश्यकता के बिना backups प्रदान करते हैं।

जहां traditional backups files और databases को target करते हैं, एक snapshot पूरी disk को target करता है। इसका मतलब है कि न केवल site का data snapshot में capture होता है बल्कि operating system और configuration भी। कई लोगों के लिए यह एक विशिष्ट लाभ है क्योंकि एक snapshot से लगभग तुरंत एक नया system spawn किया जा सकता है और एक ailing instance को replace करने के लिए operation में लाया जा सकता है। इसी तरह, files retrieve करने की recovery process में केवल snapshot image को एक existing instance में disk के रूप में attach करना होता है ताकि files को access और copy किया जा सके।

Snapshots hosting provider के साथ एक अतिरिक्त cost आकर्षित कर सकते हैं लेकिन यह accidents के खिलाफ एक insurance policy है।

#### External Scripts

WordPress और MySQL resources को backup करने के लिए external scripts और solutions की कोई कमी नहीं दिखती और ये Ultimate Multisite के लिए अच्छी तरह काम करेंगे क्योंकि यह एक WordPress plugin है जो WordPress filesystem और database का उपयोग करता है। इस प्रकार एक solution जो WordPress sites को backup करता है वह Ultimate Multisite की जरूरतों को पर्याप्त रूप से cover करेगा।

हम किसी एक script को दूसरे पर recommend नहीं कर सकते लेकिन हमारी सामान्य सलाह यह है कि कई backup और restore tests चलाएं ताकि यह सुनिश्चित हो कि results वांछित हैं और 'sure to be sure' रहने के लिए script और इसकी functionality का लगातार मूल्यांकन करें, विशेष रूप से जहां किसी प्रकार की differential backup strategy लागू हो।

यह ध्यान दिया जाना चाहिए कि ये scripts, चलते समय, system load बढ़ाएंगी जिसे ध्यान में रखा जाना चाहिए।

#### Plugins

WordPress में लगभग कोई भी समस्या नहीं है जिसे plugin से हल नहीं किया जा सकता और यदि external scripts को manage करना आपके लिए उपयुक्त नहीं है तो शायद एक plugin अगला सबसे अच्छा विकल्प है।

जबकि plugins options और features में भिन्न होते हैं वे ज्यादातर समान function करते हैं और वह है WordPress files और database contents की copy बनाना। इसके बाद functionalities अलग होती हैं क्योंकि कुछ plugins backups को Google Drive या Dropbox जैसी external services या S3, Wasabi या अन्य जैसी किसी compatible object storage service को ship कर सकते हैं। अधिक comprehensive plugins differential backups या external storage costs बचाने के लिए केवल बदले हुए data को backup करने की किसी प्रकार की strategy प्रदान करते हैं।

अपना plugin चुनते समय, यह verify करने का ध्यान रखें कि यह multisite aware है। इसके operation की nature के कारण जब backup चल रहा होता है तो process पूरा होने तक आप server पर temporary load की उम्मीद कर सकते हैं।

#### Domain और SSL

Multisite _subdomain_ mode में domain names के बारे में पहले ही बहुत चर्चा हो चुकी है। Network administrators के लिए wildcard DNS entries का उपयोग लगभग universal solution है।

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

इस प्रकार की DNS entry सफलतापूर्वक 'site1.domain.com' और 'site2.domain.com' जैसे _subdomains_ को IP address 1.2.3.4 पर resolve करेगी, इस प्रकार Ultimate Multisite और बड़े extent पर _subdomain_ mode का उपयोग करके WordPress Multisite का समर्थन करेगी।

यह HTTP के लिए पूरी तरह से अच्छा काम कर सकता है क्योंकि target host HTTP headers से पढ़ा जाता है लेकिन इन दिनों शायद ही कभी web इतना सरल होता है जहां secure HTTPS transactions लगभग अनिवार्य हैं।

सौभाग्य से SSL certificates के लिए आसान विकल्प हैं। _Subdirectory_ mode में एक regular domain certificate का उपयोग किया जा सकता है। ये hosting providers से आसानी से और मुफ्त में उपलब्ध हैं जो free LetsEncrypt service या किसी अन्य source का उपयोग कर सकते हैं। अन्यथा ये authorities से commercially उपलब्ध हैं यदि आप certificate signing request generate करने में सक्षम हैं।

_Subdomain_ mode के लिए wildcard SSL certificate का उपयोग wildcard domain के साथ perfectly pair होगा और certificate को root domain और सभी _subdomains_ के लिए बिना extraneous configuration के authoritative होने की अनुमति देगा।

हालांकि, यह ध्यान दिया जाना चाहिए कि wildcard SSL certificates Cloudflare जैसी services के साथ काम नहीं कर सकते जब तक कि आप enterprise plan पर न हों या entry को DNS only पर सेट न करें जिस स्थिति में सभी caching और optimization bypass हो जाती है।

Out-of-the-box Ultimate Multisite इस समस्या का solution प्रदान करता है जो WordPress multisites की जरूरतों के साथ हमारे व्यापक अनुभव को प्रदर्शित करता है। इस simple add-on को activate करने से Ultimate Multisite आपके Cloudflare credentials का उपयोग करके Cloudflare में network sites के लिए automatically DNS entries जोड़ेगा और उनके mode को 'proxied' पर सेट करेगा। इस तरह प्रत्येक network subsite, जब बनाई जाती है, SSL सहित Cloudflare की पूर्ण protection और benefits प्राप्त करेगी।

आपके Ultimate Multisite installation की nature और purpose के आधार पर customers को अपने स्वयं के domains का उपयोग करने की आवश्यकता हो सकती है। इस case में network administrator को दो समस्याओं को हल करने का काम सौंपा जाता है। एक, domain name की hosting और दो, domain के लिए SSL certificates।

कई लोगों के लिए, Cloudflare का उपयोग एक आसान विकल्प है। Customer को केवल अपना domain Cloudflare पर रखना होगा, Ultimate Multisite के root domain पर एक CNAME point करना होगा और Ultimate Multisite में अपना domain map करना होगा ताकि अपने custom domain name का लाभ उठाना शुरू कर सकें।

इसके बाहर, वैकल्पिक solutions की तलाश करनी होगी यही कारण है कि Ultimate Multisite Compatible Providers की सूची recommend करता है। ऐसा इसलिए है क्योंकि DNS और SSL setup करने की process एक non-trivial process हो सकती है। हालांकि, इन providers के साथ Ultimate Multisite के integration से complexity बहुत कम हो जाती है और procedure automated हो जाता है।

#### Plugins

यह highly likely है कि आपको अपने customers या network sites को functionality प्रदान करने के लिए additional plugins की आवश्यकता होगी। क्या सभी plugins WordPress Multisite और Ultimate Multisite के साथ काम करते हैं? खैर, यह निर्भर करता है।

जबकि अधिकांश plugins WordPress Multisite में installable हैं, उनकी activation और licensing author से author भिन्न होती है।

चुनौती यह है कि कैसे licensing लागू होती है, कुछ plugins को per-domain basis पर licensing की आवश्यकता होती है। इसका मतलब यह होगा कि कुछ plugins के लिए network administrator को प्रत्येक नई site पर प्रत्येक plugin के लिए manually license activate करना होगा।

इसलिए plugin author से जांचना बेहतर हो सकता है कि उनका plugin WordPress Multisite के साथ कैसे काम करेगा और इसे license करने के लिए कोई special requirements या procedures आवश्यक हैं।
