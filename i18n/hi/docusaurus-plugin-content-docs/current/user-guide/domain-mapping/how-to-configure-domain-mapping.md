---
title: डोमेन मैपिंग कैसे कॉन्फ़िगर करें
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# Domain Mapping कैसे Configure करें (v2)

_**महत्वपूर्ण नोट: यह लेख Ultimate Multisite version 2.x के लिए है।**_

एक premium network की सबसे powerful features में से एक है अपने clients को उनकी sites पर top-level domain जोड़ने का विकल्प देना। आखिर कौन ज़्यादा professional लगता है: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) या [_**joesbikeshop.com**_](http://joesbikeshop.com)? इसीलिए Ultimate Multisite यह feature built-in देता है, बिना किसी third-party plugin की ज़रूरत के।

## Domain mapping क्या है?

जैसा कि नाम से पता चलता है, domain mapping Ultimate Multisite की वह सुविधा है जो किसी custom domain के request को लेकर उसे network में उस particular domain से जुड़ी संबंधित site पर map कर देती है।

### अपने Ultimate Multisite Network पर domain mapping कैसे setup करें

Domain mapping के लिए आपको कुछ setup करना होगा। अच्छी बात यह है कि Ultimate Multisite कठिन काम आपके लिए automate कर देता है ताकि आप आसानी से requirements पूरी कर सकें।

Ultimate Multisite installation के दौरान, wizard automatically **sunrise.php** को designated folder में copy और install कर देगा। **जब तक यह step पूरा नहीं होता, wizard आपको आगे नहीं बढ़ने देगा**।

![Ultimate Multisite installation wizard with sunrise.php step](/img/config/settings-domain-mapping.png)

इसका मतलब है कि जैसे ही Ultimate Multisite installation wizard आपका network setup कर लेता है, आप तुरंत custom domain mapping शुरू कर सकते हैं।

ध्यान दें कि Ultimate Multisite में domain mapping अनिवार्य नहीं है। आपके पास WordPress Multisite के native domain mapping function या किसी अन्य domain mapping solution का उपयोग करने का विकल्प है।

अगर आपको अन्य domain mapping solutions के लिए Ultimate Multisite domain mapping को disable करना हो, तो आप इस feature को **Ultimate Multisite > Settings > Domain Mapping** में जाकर disable कर सकते हैं।

![Domain Mapping settings with enable toggle](/img/config/settings-domain-mapping.png)

इस option के ठीक नीचे, आप **Force Admin Redirect** का option भी देख सकते हैं। यह option आपको control करने देता है कि आपके customers अपने admin dashboard को custom domain और subdomain दोनों पर access कर पाएंगे या सिर्फ एक पर।

अगर आप **Force redirect to mapped domain** select करते हैं, तो आपके customers सिर्फ अपने custom domains पर ही admin dashboard access कर पाएंगे।

**Force redirect to network domain** option इसके बिल्कुल विपरीत काम करता है - आपके customers सिर्फ अपने subdomain पर ही dashboards access कर पाएंगे, भले ही वे custom domains पर sign in करने की कोशिश करें।

और **Allow access to the admin by both mapped domain and network domain** option उन्हें subdomain और custom domain दोनों पर admin dashboards access करने देता है।

![Force Admin Redirect options for domain mapping](/img/config/settings-domain-mapping.png)

Custom domain map करने के दो तरीके हैं। पहला है super admin के रूप में network admin dashboard से domain name map करना और दूसरा है subsite admin dashboard में account page के through।

लेकिन इससे पहले कि आप अपने network की किसी subsite पर custom domain map करना शुरू करें, आपको यह सुनिश्चित करना होगा कि domain name की **DNS settings** सही तरीके से configure की गई हैं।

### 

### यह सुनिश्चित करना कि domain DNS settings सही तरीके से configure हैं

Mapping काम करे इसके लिए, आपको यह सुनिश्चित करना होगा कि जिस domain को आप map करना चाहते हैं वह आपके Network के IP address पर point कर रहा है। ध्यान दें कि आपको Network IP address चाहिए - यानी उस domain का IP address जहां Ultimate Multisite installed है - न कि उस custom domain का IP address जिसे आप map करना चाहते हैं। किसी specific domain का IP address खोजने के लिए, हम [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) जैसी site पर जाने की सलाह देते हैं।

Domain को सही से map करने के लिए, आपको अपनी **DNS** configuration में उस **IP address** की ओर point करता हुआ एक **A RECORD** add करना होगा। DNS management अलग-अलग domain registrars में काफी अलग होती है, लेकिन अगर आप "_Creating A Record on XXXX_" search करें जहां XXXX आपका domain registrar है (जैसे: "_Creating A Record on GoDaddy_"), तो online बहुत सारे tutorials मिल जाएंगे।

अगर आपको इसे काम करने में परेशानी हो रही है, तो **अपने domain registrar support से संपर्क करें** और वे इस हिस्से में आपकी मदद कर पाएंगे।

अगर आप अपने clients को खुद के domains map करने की अनुमति देने की योजना बना रहे हैं, तो उन्हें इस हिस्से का काम खुद करना होगा। अगर वे A Record create करने में असमर्थ हों, तो उन्हें उनके registrar support system की ओर guide करें।

### Super Admin के रूप में custom domain name map करना

जब आप अपने network पर super admin के रूप में logged in हों, तो आप **Ultimate Multisite > Domains** में जाकर आसानी से custom domain names add और manage कर सकते हैं।

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

इस page पर, आप ऊपर **Add Domain** button पर click कर सकते हैं और यह एक modal window लाएगा जहां आप **custom domain name**, जिस **subsite** पर आप custom domain name apply करना चाहते हैं, और यह decide कर सकते हैं कि इसे **primary domain** name बनाना है या नहीं (ध्यान दें कि आप **एक subsite पर multiple domain names map** कर सकते हैं)।

![Add Domain modal with domain name and site fields](/img/admin/domains-list.png)

सारी जानकारी भरने के बाद, आप नीचे **Add Existing Domain** button पर click कर सकते हैं।

यह custom domain की DNS information verify और fetch करने की process शुरू कर देगा। Page के नीचे आपको एक log भी दिखेगा जिससे आप process को follow कर सकते हैं। इस process को पूरा होने में कुछ मिनट लग सकते हैं।

अगर सब कुछ सही से set up है, तो **Stage** या status **Checking DNS** से बदलकर **Ready** हो जाना चाहिए।

![Domain stage changing from Checking DNS to Ready](/img/admin/domains-list.png)

![Domain with Ready status in domains list](/img/admin/domains-list.png)

अगर आप domain name पर click करते हैं, तो आप इसके अंदर कुछ options देख पाएंगे। आइए इन पर एक नज़र डालते हैं:

![Domain detail page with stage, site, active, and SSL options](/img/admin/domains-list.png)

**Stage:** यह वह stage है जिस पर domain है। जब आप पहली बार domain add करते हैं, तो यह शायद **Checking DNS** stage पर होगा। Process DNS entries check करेगी और confirm करेगी कि वे सही हैं। फिर, domain को **Checking SSL** stage पर रखा जाएगा। Ultimate Multisite check करेगा कि domain में SSL है या नहीं और आपके domain को **Ready** या **Ready (without SSL)** के रूप में categorize करेगा।

**Site:** वह subdomain जो इस domain से associated है। Mapped domain इस specific site का content दिखाएगा।

**Active:** आप domain को activate या deactivate करने के लिए इस option को on या off toggle कर सकते हैं।

**Is Primary Domain?:** आपके customers के पास हर site के लिए एक से ज़्यादा mapped domains हो सकते हैं। इस option का उपयोग करके select करें कि यह specific site के लिए primary domain है या नहीं।

**Is Secure?:** भले ही Ultimate Multisite domain को enable करने से पहले check करता है कि उसमें SSL certificate है या नहीं, आप manually select कर सकते हैं कि domain को SSL certificate के साथ load करना है या बिना। ध्यान दें कि अगर website में SSL certificate नहीं है और आप SSL के साथ force load करने की कोशिश करते हैं, तो errors आ सकती हैं।

### Subsite user के रूप में custom domain name map करना

Subsite administrators भी अपने subsite admin dashboard से custom domain names map कर सकते हैं।

सबसे पहले, आपको यह सुनिश्चित करना होगा कि आपने **Domain mapping** settings में इस option को enable किया है। नीचे screenshot देखें।

![Domain mapping settings allowing subsite users to map domains](/img/config/settings-domain-mapping.png)

आप इस option को **Ultimate Multisite > Products** में **Plan** level या product options के अंतर्गत भी set या configure कर सकते हैं।

![Product custom domains option in product settings](/img/config/settings-domain-mapping.png)

जब इनमें से कोई भी option enabled हो और subsite user को custom domain names map करने की अनुमति हो, तो subsite user को **Account** page में **Domains** नाम का एक metabox दिखना चाहिए।

![Domains metabox on the subsite account page](/img/admin/domains-list.png)

User **Add Domain** button पर click कर सकता है और यह कुछ instructions के साथ एक modal window लाएगा।

![Add Domain modal with DNS instructions for subsite users](/img/admin/domains-list.png)

User फिर **Next Step** पर click करके custom domain name add करने के लिए आगे बढ़ सकता है। वे यह भी choose कर सकते हैं कि यह primary domain होगा या नहीं।

![Add custom domain name field with primary domain option](/img/admin/domains-list.png)

![Click Add Domain to start DNS verification](/img/admin/domains-list.png)**Add Domain** पर click करने से custom domain की DNS information verify और fetch करने की process शुरू हो जाएगी।

### Domain Syncing के बारे में

Domain Syncing एक process है जहां Ultimate Multisite custom domain name को आपके hosting account में add-on domain के रूप में add करता है **ताकि domain mapping काम करे**।

अगर आपके hosting provider का Ultimate Multisite domain mapping feature के साथ integration है, तो Domain syncing automatically होती है। वर्तमान में, ये hosting providers हैं _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ और _Cpanel._

आपको इस integration को Ultimate Multisite settings में **Integration** tab के अंतर्गत activate करना होगा।

![Integration tab in Ultimate Multisite settings](/img/config/settings-domain-mapping.png)

![Hosting provider integration settings for domain syncing](/img/config/settings-domain-mapping.png)

_ध्यान दें कि अगर आपका hosting provider ऊपर बताए गए providers में से नहीं है, तो **आपको manually domain name को अपने hosting account में sync या add करना होगा**।_
