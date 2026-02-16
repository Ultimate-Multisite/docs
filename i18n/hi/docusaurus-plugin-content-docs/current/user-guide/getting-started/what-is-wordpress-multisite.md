---
title: WordPress Multisite क्या है?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite क्या है?

WordPress अपने core में 'Multisite' नाम की एक feature प्रदान करता है जिसकी शुरुआत 2010 में WordPress 3.0 के launch के साथ हुई थी। तब से इसमें कई बदलाव किए गए हैं जिनका उद्देश्य नई features लाना और security को मजबूत करना रहा है।

सरल शब्दों में, WordPress multisite को इस तरह समझा जा सकता है: एक University WordPress का एक ही installation maintain करती है लेकिन हर faculty की अपनी अलग WordPress site होती है।

## 

## WordPress Multisite वास्तव में क्या है?

Multisite WordPress की एक feature है जो कई sites को एक ही WordPress installation share करने की सुविधा देती है। जब multisite activate किया जाता है, तो original WordPress site को **sites के network** को support करने के लिए convert कर दिया जाता है।

यह network file system share करता है (मतलब **plugins और themes भी share होते हैं**), database, WordPress core files, wp-config.php, आदि।

इसका मतलब है कि WordPress, theme, और plugin updates को आपकी सभी network sites के लिए सिर्फ एक बार करना होता है क्योंकि वे filesystem पर same files share करती हैं।

यह बात multisite के मुख्य फायदों में से एक है, क्योंकि यह आपको अपनी manage की जाने वाली sites की संख्या बढ़ाने की सुविधा देती है जबकि अपने customers की sites को maintain करने के लिए आवश्यक tasks की संख्या same रहती है।

## 

## Subdomain या Subdirectory?

WordPress multisite को run करने के दो modes हैं – और आपको अपने regular WordPress installation को multisite installation में convert करते समय एक चुनना होगा:

**Subdomain:** उदाहरण: [site.domain.com](http://site.domain.com)

…या

**Subdirectory:** उदाहरण: [yourdomain.com/site](http://yourdomain.com/site)

यह decision लेते समय हर mode के फायदे और नुकसान हैं जिन पर आपको विचार करना चाहिए।

एक बात ध्यान देने योग्य है: एक बार decision लेने के बाद, अपने network को subdirectory से subdomain या इसके विपरीत बदलना वाकई मुश्किल है – खासकर अगर आपने पहले से कुछ sites बना रखी हैं।

यह decision लेने से पहले, कुछ बातें ध्यान में रखें:

**Subdirectory Mode** setup और maintenance के मामले में सबसे आसान mode है। ऐसा इसलिए है क्योंकि सभी sites main domain से जुड़े paths होती हैं (जैसे [yourdomain.com/subsite](http://yourdomain.com/subsite))। नतीजतन, आपको main domain के लिए सिर्फ **एक SSL certificate** की जरूरत होती है और वह पूरे network को cover कर लेगा।

साथ ही, इसकी URL structure के कारण, Google और अधिकांश अन्य search engines आपके subdirectory-based network की सभी subsites को एक बड़ी site मानेंगे। नतीजतन, आपके end-customers द्वारा subsites पर add किया गया content आपकी landing site की SEO performance को प्रभावित कर सकता है। इसके प्रभाव की गंभीरता पर बहस हो सकती है और यह भी कहा जा सकता है कि ऐसी व्यवस्था SEO performance के लिए फायदेमंद भी हो सकती है।

**Subdomain Mode** setup करने में थोड़ा complex है, लेकिन इसकी URL structure (जैसे [subsite.yournetwork.com](http://subsite.yournetwork.com)) आमतौर पर "अधिक professional" दिखती है।

Subdomain mode setup करने में मुख्य चुनौतियों में से एक पूरे network के लिए SSL coverage (HTTPS) है। बात यह है कि browsers subdomains को अलग-अलग entities मानते हैं। नतीजतन, आपको अपने network पर हर subdomain के लिए अलग SSL certificate की जरूरत होगी, या एक special तरह का certificate जिसे **Wildcard SSL certificate** कहते हैं। हाल के वर्षों में, hosting providers और panels SSL provisioning के मामले में काफी बेहतर हो रहे हैं और कुछ एक click पर wildcard certificates offer करते हैं, जिससे setup की complexity के मामले में दोनों modes के बीच का अंतर कम हो रहा है।

Subdirectory mode के विपरीत, subdomain-based network पर subsites को search engines अलग-अलग websites मानते हैं, जिसका मतलब है कि एक subsite पर मौजूद content दूसरी subsites की SEO performance को बिल्कुल भी प्रभावित नहीं करता।

## Super Admin

Single-site WordPress installations आपको unlimited users add करने और उन users को अलग-अलग permissions के साथ अलग-अलग user roles देने की सुविधा देती हैं।

WordPress Multisite में, एक नए प्रकार का user unlock होता है: **super admin** – और एक नया admin panel भी unlock होता है: **network admin panel**।

जैसा कि नाम से पता चलता है, super admin के पास network पर superpowers होती हैं, वह इसकी सभी subsites, plugins, themes, सब कुछ manage कर सकता है!

जब आप अपने single-site WordPress installation को multisite में convert करते हैं, तो single site का original admin automatically super admin में upgrade हो जाएगा।

Plugins और themes को network admin panel से सिर्फ super admins ही install या uninstall कर सकते हैं। Subsite admins फिर उन plugins या themes को activate या deactivate कर सकते हैं जब तक कि super admin किसी plugin को network activate न कर दे, जो उसे सभी subsites के लिए हमेशा active रहने के लिए force करता है।

_Note: जैसा कि आप देख सकते हैं, किसी को अपने network में invite करना और उन्हें super admin status देना इस user को आपके network पर पूरा control दे देता है। एक उदाहरण के रूप में, अन्य super admins आपका super admin status भी हटा सकते हैं, जिससे आप अपने ही network admin panel से बाहर हो सकते हैं। Ultimate Multisite customers को यह granular control देने के लिए कि additional super admins क्या कर सकते हैं, हमारे पास Support Agents नाम का एक add-on है। यह add-on आपको एक और प्रकार का user बनाने की सुविधा देता है – एक agent – जिसके पास सिर्फ वही permissions होती हैं जो उन्हें network पर अपने tasks करने के लिए चाहिए।_

## Subsites के बीच क्या share होता है और क्या नहीं

जैसा कि हमने पहले बताया, WordPress multisite के मुख्य फायदों में से एक यह है कि सभी subsites same configurations, core files, themes, plugins, WordPress core files, आदि share करती हैं।

हालांकि, कुछ elements हैं जो per-subsite basis पर अच्छी तरह से scoped हैं।

\- उदाहरण के लिए, हर subsite को अपना uploads folder मिलता है। नतीजतन, एक particular subsite के users द्वारा किए गए uploads दूसरी subsite पर access नहीं किए जा सकते।

\- हर subsite का अपना dedicated admin panel होता है और वह plugins या themes को activate या deactivate कर सकती है जब तक कि उन्हें super admin द्वारा network active न किया गया हो।

\- ज्यादातर database tables हर subsite के लिए create होती हैं, मतलब posts, comments, pages, settings, और बहुत कुछ हर subsite के लिए scoped होते हैं।

## WordPress Multisite पर User management

WordPress multisite पर एक sensitive विषय user management है। WordPress user table उन कुछ tables में से एक है जो सभी subsites के बीच share होती है।

यह व्यवस्था कुछ समस्याएं पैदा कर सकती है जो इस पर निर्भर करती है कि आप अपने network के साथ क्या बनाने की योजना बना रहे हैं। नीचे दिया गया उदाहरण सबसे pressing समस्या को समझाने में मदद करता है।

इस scenario की कल्पना करें:

आप एक WordPress multisite network बनाते हैं और उन लोगों को monthly fee पर subsites offer करना शुरू करते हैं जो e-commerce store रखना चाहते हैं।

आपका पहला paying customer आता है – John। आप अपने network पर John के लिए एक site बनाते हैं, सभी जरूरी plugins install करते हैं, फिर John के लिए एक user बनाते हैं ताकि वह अपना store manage कर सके।

फिर एक दूसरी customer आती है – Alice। आप उसके लिए भी वही करते हैं और अब उसके पास भी आपके network पर एक store है।

John और Alice दोनों आपके customers हैं, लेकिन वे एक-दूसरे को नहीं जानते। अधिक महत्वपूर्ण बात, अगर उनमें से कोई दूसरे की store website visit करता है, तो यह जानने का कोई तरीका नहीं है कि यह store उसी network of sites पर host है।

एक दिन, John को जूतों की एक नई जोड़ी खरीदनी है और उसे Alice की store में perfect जूते मिल जाते हैं। जब वह purchase complete करने की कोशिश करता है, तो उसे "email already in use" error message मिलता है, जो अजीब है क्योंकि John को 100% यकीन है कि यह पहली बार है जब उसने Alice की website visit की है।

यहां जो हुआ वह यह है कि John का user पूरे network में share होता है इसलिए जब वह Alice की site पर checkout के लिए account बनाने की कोशिश करता है, तो WordPress detect करेगा कि same email address वाला user पहले से मौजूद है और error throw करेगा।

_Note: हम समझते हैं कि यह आपके use-case के आधार पर कितना बुरा हो सकता है, इसलिए Ultimate Multisite में एक option है जो existing user के लिए regular checks को bypass करता है, जिससे same email address का उपयोग करके multiple accounts बनाए जा सकते हैं। हर account एक subsite से bound होता है, इसलिए collision का risk minimum रहता है। ऊपर के उदाहरण में, John को error message नहीं मिलता और वह बिना किसी समस्या के वे जूते खरीद पाता। इस option को Enable Multiple Accounts कहते हैं, और इसे Ultimate Multisite → Settings → Login & Registration में activate किया जा सकता है।_

भले ही user table share होती है, users को subsite admins या super admin द्वारा subsites में add और remove किया जा सकता है, और उनके पास अलग-अलग subsites पर अलग-अलग user roles भी हो सकते हैं।

## Performance considerations

WordPress multisite वास्तव में उन sites की संख्या के मामले में powerful है जिन्हें यह support कर सकता है। इसका प्रमाण यह है कि [WordPress.com](https://WordPress.com), Edublogs, और Campuspress सभी multisite-based services हैं और हर एक हजारों sites host करती है।

जबकि theory में आप एक single WordPress multisite installation पर कितनी भी sites host कर सकते हैं, practice में आप satisfactorily कितनी sites run कर सकते हैं यह कई अलग-अलग factors पर निर्भर करता है: sites कितनी dynamic हैं, subsites के लिए कौन से plugins available हैं, आदि।

एक rule of thumb के रूप में, आपका network जितना simple होगा, उतना बेहतर। ऐसी sites को prefer करें जहां content वास्तव में dynamic नहीं है (जो उन्हें aggressive caching strategies के लिए बेहतरीन candidates बनाता है) और plugin stack को जितना हल्का हो सके रखें (active plugins की संख्या जितनी कम हो उतना अच्छा) – यह आपके द्वारा host की जा सकने वाली subsites की संख्या को काफी बढ़ा सकता है।

सबसे अच्छी बात यह है कि चूंकि यह सब WordPress है, performance improvements के लिए जो tools आप पहले से जानते और पसंद करते हैं वे multisite network के लिए भी काम करेंगे।

Multisite के लिए मुख्य bottleneck database है लेकिन अगर बाकी सब कुछ सही तरीके से setup है, तो कुछ हजार sites होने से पहले आपको इसकी चिंता करने की जरूरत नहीं है। तब भी, ऐसे solutions हैं जो उस point पर progressively add किए जा सकते हैं (जैसे database sharding solutions, उदाहरण के लिए)।
