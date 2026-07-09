---
title: Domain Mapping कॉन्फिगर कसे करावे
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domain Mapping (v2) कसे कॉन्फिगर करावे {#how-to-configure-domain-mapping-v2}

_**महत्त्वाची टीप: हा लेख Ultimate Multisite आवृत्ती 2.x संदर्भित करतो.**_

प्रीमियम नेटवर्कच्या सर्वात शक्तिशाली वैशिष्ट्यांपैकी एक म्हणजे आपल्या क्लायंटना त्यांच्या साईट्सना टॉप-लेव्हल डोमेन जोडण्याची संधी देण्याची क्षमता. शेवटी, कोणते अधिक व्यावसायिक दिसते: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) की [_**joesbikeshop.com**_](http://joesbikeshop.com)? म्हणूनच Ultimate Multisite हे वैशिष्ट्य अंगभूत स्वरूपात देते, तृतीय-पक्ष plugins वापरण्याची गरज न ठेवता.

## Domain mapping म्हणजे काय? {#whats-domain-mapping}

नावावरून सुचते तसे, domain mapping म्हणजे custom domain साठी आलेली विनंती स्वीकारून ती विनंती त्या विशिष्ट domain जोडलेल्या नेटवर्कमधील संबंधित साईटशी मॅप करण्याची Ultimate Multisite द्वारे दिलेली क्षमता.

### तुमच्या Ultimate Multisite Network वर domain mapping कसे सेटअप करावे {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain mapping काम करण्यासाठी तुमच्या बाजूने काही सेटअप आवश्यक आहे. सुदैवाने, Ultimate Multisite तुमच्यासाठी कठीण काम स्वयंचलित करते, त्यामुळे तुम्ही आवश्यकता सहज पूर्ण करू शकता.

Ultimate Multisite installation दरम्यान, wizard आपोआप **sunrise.php** नामनिर्दिष्ट फोल्डरमध्ये कॉपी करून install करेल. **हा टप्पा पूर्ण होईपर्यंत wizard तुम्हाला पुढे जाऊ देणार नाही**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

याचा अर्थ असा की Ultimate Multisite installation wizard ने तुमचे नेटवर्क सेटअप करणे पूर्ण केल्यावर, तुम्ही लगेच custom domain मॅप करणे सुरू करू शकता.

लक्षात घ्या की Ultimate Multisite मधील domain mapping अनिवार्य नाही. तुमच्याकडे WordPress Multisite चे native domain mapping function किंवा इतर कोणतेही domain mapping solution वापरण्याचा पर्याय आहे.

इतर domain mapping solutions साठी मार्ग मोकळा करण्यासाठी तुम्हाला Ultimate Multisite domain mapping निष्क्रिय करायचे असल्यास, तुम्ही हे वैशिष्ट्य **Ultimate Multisite > Settings > Domain Mapping** अंतर्गत निष्क्रिय करू शकता.

![Admin redirect, mapping message आणि DNS पर्याय दाखवणारे Domain Mapping settings पृष्ठ](/img/config/domain-mapping-settings.png)

या पर्यायाच्या अगदी खाली, तुम्हाला **Force Admin Redirect** हा पर्यायदेखील दिसेल. हा पर्याय तुम्हाला तुमचे ग्राहक त्यांच्या custom domain आणि subdomain दोन्हींवर त्यांच्या admin dashboard मध्ये प्रवेश करू शकतील की फक्त त्यांपैकी एका वर, हे नियंत्रित करण्याची परवानगी देतो.

तुम्ही **Force redirect to mapped domain** निवडल्यास, तुमचे ग्राहक फक्त त्यांच्या custom domains वर त्यांच्या admin dashboard मध्ये प्रवेश करू शकतील.

**Force redirect to** **network domain** हा पर्याय याच्या अगदी उलट करेल - तुमचे ग्राहक त्यांच्या custom domains वर sign in करण्याचा प्रयत्न करत असले तरीही, त्यांना फक्त त्यांच्या subdomain वर त्यांच्या dashboards मध्ये प्रवेश करण्याची परवानगी असेल.

आणि **Allow access to the admin by both mapped domain domain and network domain** हा पर्याय त्यांना subdomain आणि custom domain दोन्हींवर त्यांच्या admin dashboards मध्ये प्रवेश करू देतो.

![तीन redirect पर्याय दाखवत विस्तारित केलेला Admin Redirect dropdown](/img/config/domain-mapping-redirect-options.png)

custom domain मॅप करण्याचे दोन मार्ग आहेत. पहिला म्हणजे सुपर अॅडमिन म्हणून तुमच्या नेटवर्क admin dashboard मधून domain नाव मॅप करणे आणि दुसरा म्हणजे account पृष्ठाखालील subsite admin dashboard द्वारे.

परंतु तुम्ही तुमच्या नेटवर्कमधील एखाद्या subsites पैकी एकावर custom domain मॅप करणे सुरू करण्यापूर्वी, तुम्हाला domain नावाची **DNS settings** योग्यरीत्या कॉन्फिगर केलेली आहेत याची खात्री करावी लागेल.

###

### domain DNS settings योग्यरीत्या कॉन्फिगर केलेली आहेत याची खात्री करणे {#making-sure-the-domain-dns-settings-are-properly-configured}

mapping काम करण्यासाठी, तुम्ही मॅप करण्याचा विचार करत असलेला domain तुमच्या Network च्या IP address कडे निर्देश करत आहे याची खात्री करणे आवश्यक आहे. लक्षात घ्या की तुम्हाला Network IP address आवश्यक आहे - ज्या domain वर Ultimate Multisite install केलेले आहे त्याचा IP address - तुम्हाला मॅप करायच्या custom domain चा IP address नाही. एखाद्या विशिष्ट domain चा IP address शोधण्यासाठी, उदाहरणार्थ, आम्ही [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) वर जाण्याचा सल्ला देतो.

domain योग्यरीत्या मॅप करण्यासाठी, तुम्हाला तुमच्या **DNS** configuration वर त्या **IP address** कडे निर्देश करणारा **A RECORD** जोडणे आवश्यक आहे. वेगवेगळ्या domain registrars मध्ये DNS management मोठ्या प्रमाणात बदलते, परंतु तुम्ही " _Creating A Record on XXXX_ " असा शोध घेतल्यास यावर ऑनलाइन भरपूर tutorials उपलब्ध आहेत, जिथे XXXX हा तुमचा domain registrar आहे (उदा.: " _Creating A Record on_ _GoDaddy_ ").

हे काम करून घेण्यात तुम्हाला अडचण येत असल्यास, **तुमच्या domain registrar support शी संपर्क साधा** आणि ते तुम्हाला या भागात मदत करू शकतील.

तुम्ही तुमच्या क्लायंटना त्यांचे स्वतःचे domains मॅप करण्याची परवानगी देण्याचा विचार करत असल्यास, त्यांना या भागाचे काम स्वतः करावे लागेल. त्यांना A Record तयार करता येत नसेल, तर त्यांना त्यांच्या registrar support system कडे निर्देशित करा.

### Super Admin म्हणून custom domain नाव मॅप करणे {#mapping-custom-domain-name-as-super-admin}

तुम्ही तुमच्या नेटवर्कवर सुपर अॅडमिन म्हणून logged in असताना, **Ultimate Multisite > Domains** अंतर्गत जाऊन custom domain नावे सहज जोडू आणि व्यवस्थापित करू शकता.

![Ultimate Multisite मधील Domains सूची पृष्ठ](/img/admin/domains-list.png)

या पृष्ठाखाली, तुम्ही वरच्या **Add Domain** बटणावर क्लिक करू शकता आणि त्यामुळे एक modal window उघडेल जिथे तुम्ही **custom domain name** , **the subsite** ज्यावर तुम्हाला custom domain नाव लागू करायचे आहे ते सेट करून भरू शकता, आणि ते **primary domain** नाव म्हणून सेट करायचे की नाही हे ठरवू शकता (लक्षात घ्या की तुम्ही **multiple domain names to one subsite** मॅप करू शकता).

![domain नाव, site picker आणि primary domain toggle असलेला Add Domain modal](/img/admin/domain-add-modal.png)

सर्व माहिती भरल्यानंतर, तुम्ही नंतर तळाशी असलेल्या **Add Existing Domain** बटणावर क्लिक करू शकता.

यामुळे custom domain ची DNS माहिती सत्यापित करण्याची आणि आणण्याची प्रक्रिया सुरू होईल. तुम्हाला पृष्ठाच्या तळाशी एक log देखील दिसेल, ज्याद्वारे तुम्ही चालू असलेली प्रक्रिया पाहू शकता. ही प्रक्रिया पूर्ण होण्यासाठी काही मिनिटे लागू शकतात.

Ultimate Multisite v2.13.0 नवीन site अशा host वर तयार झाल्यावर, ज्याला प्रति-site domain म्हणून हाताळले पाहिजे, तेव्हा अंतर्गत domain नोंदही आपोआप तयार करते. जर host हा network चा प्राथमिक domain असेल, किंवा **Site URL** field वर कॉन्फिगर केलेल्या shared checkout-form base domains पैकी एक असेल, तर स्वयंचलित mapped-domain नोंद वगळली जाते, जेणेकरून तो shared base domain तो वापरणाऱ्या प्रत्येक site साठी उपलब्ध राहतो.

ग्राहक Domain Seller v1.3.0 किंवा त्यापेक्षा नवीन आवृत्तीमधून नवीन domain नोंदणी करतो तेव्हा, Ultimate Multisite नोंदणीकृत domain डीफॉल्टनुसार ग्राहकाच्या network site शी आपोआप map करते. यशस्वी नोंदणीनंतर प्रशासकांना आता स्वतंत्र mapped-domain नोंद जोडण्याची गरज नाही, जोपर्यंत त्यांना primary-domain flag, activation state किंवा SSL handling यांसारखे पर्याय समायोजित करायचे नसतील.

सर्वकाही योग्यरीत्या सेट केले असल्यास **Stage** किंवा status **Checking DNS** वरून **Ready** मध्ये बदलला पाहिजे.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

जर तुम्ही domain नावावर क्लिक केले, तर तुम्हाला त्याच्या आत काही पर्याय दिसतील. चला त्यांच्यावर झटपट नजर टाकूया:

![stage, site, active, primary आणि SSL toggles सह domain तपशील पृष्ठ](/img/admin/domain-edit.png)

**Stage:** हा domain ज्या टप्प्यावर आहे तो टप्पा आहे. तुम्ही domain प्रथम जोडता तेव्हा, तो बहुधा **Checking DNS** stage वर असेल. प्रक्रिया DNS entries तपासेल आणि त्या योग्य आहेत याची पुष्टी करेल. त्यानंतर, domain **Checking SSL** stage वर ठेवला जाईल. Ultimate Multisite domain कडे SSL आहे की नाही ते तपासेल आणि तुमच्या domain चे वर्गीकरण **Ready** किंवा **Ready (without SSL)** म्हणून करेल.

**Site:** या domain शी संबंधित subdomain. mapped domain या विशिष्ट site ची सामग्री दर्शवेल.

**Active:** domain सक्रिय किंवा निष्क्रिय करण्यासाठी तुम्ही हा पर्याय चालू किंवा बंद करू शकता.

**Is Primary Domain?:** तुमच्या ग्राहकांकडे प्रत्येक site साठी एकापेक्षा जास्त mapped domain असू शकतात. ही विशिष्ट site साठी primary domain आहे का हे निवडण्यासाठी हा पर्याय वापरा.

**Is Secure?:** Ultimate Multisite domain सक्षम करण्यापूर्वी त्याच्याकडे SSL certificate आहे की नाही ते तपासत असले तरी, तुम्ही domain SSL certificate सह किंवा त्याशिवाय load करायचा हे manually निवडू शकता. लक्षात ठेवा की website कडे SSL certificate नसेल आणि तुम्ही तो SSL सह force load करण्याचा प्रयत्न केला, तर त्यामुळे तुम्हाला errors येऊ शकतात.

### Subsite वापरकर्ता म्हणून custom domain नाव mapping करणे {#mapping-custom-domain-name-as-subsite-user}

Subsite प्रशासक त्यांच्या subsite admin dashboard मधूनही custom domain नावे map करू शकतात.

प्रथम, तुम्ही **Domain mapping** settings अंतर्गत हा पर्याय सक्षम केला आहे याची खात्री करणे आवश्यक आहे. खालील screenshot पहा.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

तुम्ही हा पर्याय **Plan** level अंतर्गत किंवा **Ultimate Multisite > Products** वरील product options मध्येही set किंवा configure करू शकता.

![product edit page वरील Custom Domains विभाग](/img/config/product-custom-domains.png)

त्यापैकी कोणताही पर्याय सक्षम असल्यास आणि subsite वापरकर्त्याला custom domain नावे map करण्याची परवानगी असल्यास, subsite वापरकर्त्याला **Account** पृष्ठाखाली **Domains** नावाचा metabox दिसला पाहिजे.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

वापरकर्ता **Add Domain** button वर क्लिक करू शकतो आणि त्याने काही सूचनांसह modal window उघडेल.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

त्यानंतर वापरकर्ता **Next Step** क्लिक करून custom domain नाव जोडण्यासाठी पुढे जाऊ शकतो. हे primary domain असेल की नाही हेही ते निवडू शकतात.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** वर क्लिक केल्याने custom domain ची DNS माहिती पडताळण्याची आणि fetching करण्याची प्रक्रिया सुरू होईल.

### Domain Syncing बद्दल {#about-domain-syncing}

Domain Syncing ही अशी प्रक्रिया आहे ज्यामध्ये Ultimate Multisite तुमच्या hosting account मध्ये custom domain नाव add-on domain म्हणून जोडते **जेणेकरून domain mapping काम करेल**.

तुमच्या hosting provider कडे Ultimate Multisite domain mapping feature सोबत integration असल्यास domain syncing आपोआप होते. सध्या, हे hosting providers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ आणि _Cpanel_ आहेत.

host-provider integration सक्रिय असताना, Ultimate Multisite नव्याने तयार झालेल्या sites साठी provider-side DNS किंवा subdomain creation task देखील enqueue करू शकते. त्या task साठी कोणतेही integration ऐकत नसल्यास, no-op queue entries टाळण्यासाठी background job वगळले जाते. mapped domains साठी DNS आणि SSL checks सामान्य domain-stage प्रक्रियेद्वारे चालू राहतात.

तुम्हाला हे integration Ultimate Multisite settings मध्ये **Integration** tab अंतर्गत सक्रिय करावे लागेल.

![hosting providers दर्शवणारा Ultimate Multisite settings मधील Integrations tab](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_लक्षात ठेवा की तुमचा hosting provider वर नमूद केलेल्या providers पैकी एक नसल्यास, **तुम्हाला domain नाव manually sync किंवा add करावे लागेल** तुमच्या hosting account मध्ये._
