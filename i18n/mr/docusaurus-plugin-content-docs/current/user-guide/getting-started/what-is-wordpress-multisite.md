---
title: WordPress Multisite म्हणजे काय?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite म्हणजे काय?

WordPress च्या मूळ आवृत्तीत 'Multisite' नावाचं एक वैशिष्ट्य आहे, ज्याची सुरुवात 2010 मध्ये WordPress 3.0 च्या लॉंचसोबत झाली. तेव्हापासून नवीन वैशिष्ट्ये आणण्यासाठी आणि सुरक्षितता वाढवण्यासाठी यात अनेक सुधारणा करण्यात आल्या आहेत.

थोडक्यात सांगायचं तर, WordPress multisite असं समजा: एक विद्यापीठ WordPress ची एकच installation ठेवतं, पण प्रत्येक विभाग (faculty) त्यांची स्वतःची WordPress साइट चालवतो.

## 

## WordPress Multisite नेमकं काय आहे?

Multisite हे WordPress चं एक वैशिष्ट्य आहे जे एकाच WordPress installation वर अनेक साइट्स चालवण्याची सोय करतं. Multisite सक्रिय केल्यावर, मूळ WordPress साइट **साइट्सचं नेटवर्क** म्हणून ओळखल्या जाणाऱ्या रचनेत बदलते.

हे नेटवर्क फाइल सिस्टम शेअर करतं (म्हणजे **plugins आणि themes सुद्धा शेअर होतात**), तसंच database, WordPress core files, wp-config.php, इत्यादी सर्व एकत्र वापरले जातात.

याचा अर्थ असा की WordPress, theme आणि plugin अपडेट्स तुमच्या सर्व नेटवर्क साइट्ससाठी फक्त एकदाच करायला लागतात कारण त्या सर्व एकच files वापरतात.

हा multisite चा मुख्य फायदा आहे, कारण यामुळे तुम्ही व्यवस्थापित केलेल्या साइट्सची संख्या वाढवू शकता, पण तुमच्या ग्राहकांच्या साइट्स सांभाळण्यासाठी लागणारं काम तेवढंच राहतं.

## 

## Subdomain की Subdirectory?

WordPress multisite चालवण्याचे दोन पर्याय आहेत – आणि तुमची साधी WordPress installation multisite मध्ये बदलताना तुम्हाला यापैकी एक निवडावा लागतो:

**Subdomain:** उदा.: [site.domain.com](http://site.domain.com)

…किंवा

**Subdirectory:** उदा.: [yourdomain.com/site](http://yourdomain.com/site)

प्रत्येक पर्यायाचे फायदे आणि तोटे आहेत जे तुम्हाला हा निर्णय घेताना विचारात घ्यायला हवेत.

एक महत्त्वाची गोष्ट लक्षात ठेवा: एकदा निर्णय घेतला की, तुमचं नेटवर्क subdirectory वरून subdomain मध्ये किंवा उलट बदलणं खूप कठीण असतं – विशेषतः जर तुम्ही आधीच काही साइट्स तयार केल्या असतील.

हा निर्णय घेण्यापूर्वी, काही मुद्दे लक्षात ठेवा:

**Subdirectory Mode** सेटअप आणि देखभालीच्या बाबतीत सर्वात सोपा आहे. याचं कारण म्हणजे सर्व साइट्स मुख्य domain ला जोडलेले paths असतात (उदा. [yourdomain.com/subsite](http://yourdomain.com/subsite)). त्यामुळे तुम्हाला फक्त **एक SSL certificate** लागतं जे संपूर्ण नेटवर्क कव्हर करतं.

त्याच वेळी, URL रचनेमुळे, Google आणि बहुतेक इतर search engines तुमच्या subdirectory-based नेटवर्कवरील सर्व subsites एक मोठी साइट म्हणून मानतात. परिणामी, तुमच्या ग्राहकांनी subsites वर टाकलेला content तुमच्या मुख्य landing site च्या SEO कामगिरीवर परिणाम करू शकतो. हा परिणाम किती होतो यावर मतभेद आहेत आणि काही जण म्हणतात की अशी रचना SEO साठी फायदेशीर सुद्धा असू शकते.

**Subdomain Mode** सेट करायला थोडा जास्त गुंतागुंतीचा आहे, पण त्याची URL रचना (उदा. [subsite.yournetwork.com](http://subsite.yournetwork.com)) सामान्यतः "अधिक व्यावसायिक" दिसते.

Subdomain mode सेट करताना मुख्य आव्हान म्हणजे संपूर्ण नेटवर्कसाठी SSL coverage (HTTPS). याचं कारण असं की browsers subdomains ला वेगवेगळ्या units म्हणून मानतात. त्यामुळे तुम्हाला प्रत्येक subdomain साठी वेगळं SSL certificate लागेल, किंवा **Wildcard SSL certificate** नावाचं विशेष certificate लागेल. अलीकडच्या वर्षांत, hosting providers आणि panels SSL provisioning मध्ये सुधारणा करत आहेत आणि काही जण एका क्लिकवर wildcard certificates देतात, त्यामुळे दोन्ही modes मधला सेटअपचा फरक कमी होत आहे.

Subdirectory mode च्या विपरीत, subdomain-based नेटवर्कवरील subsites search engines द्वारे वेगवेगळ्या websites म्हणून मानल्या जातात, म्हणजे एका subsite वरील content इतर subsites च्या SEO कामगिरीवर अजिबात परिणाम करत नाही.

## Super Admin

Single-site WordPress installations मध्ये तुम्ही अमर्याद users जोडू शकता आणि त्या users ना वेगवेगळ्या परवानग्यांसह वेगवेगळ्या user roles देऊ शकता.

WordPress Multisite मध्ये, एक नवीन प्रकारचा user अनलॉक होतो: **super admin** – आणि एक नवीन admin panel अनलॉक होतं: **network admin panel**.

नावाप्रमाणेच, super admin कडे नेटवर्कवर विशेष अधिकार असतात, तो सर्व subsites, plugins, themes, सगळं काही व्यवस्थापित करू शकतो!

एकदा तुम्ही तुमची single-site WordPress installation multisite मध्ये बदलली की, मूळ single site चा admin आपोआप super admin म्हणून upgrade होतो.

Plugins आणि themes फक्त super admins द्वारे network admin panel मधून install किंवा uninstall करता येतात. Subsite admins नंतर ते plugins किंवा themes activate किंवा deactivate करू शकतात, जोपर्यंत super admin ने एखादा plugin network activate केला नाही, ज्यामुळे तो सर्व subsites साठी नेहमी active राहतो.

_टीप: तुम्ही पाहू शकता की, कोणाला तुमच्या नेटवर्कवर आमंत्रित करून super admin status देणं म्हणजे त्या व्यक्तीला तुमच्या नेटवर्कवर पूर्ण नियंत्रण देणं होय. उदाहरणार्थ, इतर super admins तुमचा super admin status काढूनही टाकू शकतात, ज्यामुळे तुम्ही तुमच्याच network admin panel मधून बाहेर पडू शकता. Ultimate Multisite ग्राहकांना अतिरिक्त super admins काय करू शकतात यावर बारकाईने नियंत्रण ठेवता यावं म्हणून, आमच्याकडे Support Agents नावाचं एक add-on आहे. हे add-on तुम्हाला आणखी एक प्रकारचा user – agent – तयार करण्याची परवानगी देतं ज्याला नेटवर्कवर त्यांची कामं करण्यासाठी फक्त आवश्यक परवानग्या असतात._

## Subsites मध्ये काय शेअर होतं आणि काय नाही

आधी सांगितल्याप्रमाणे, WordPress multisite चा एक मुख्य फायदा म्हणजे सर्व subsites समान configurations, core files, themes, plugins, WordPress core files, इत्यादी शेअर करतात.

तरीही, काही गोष्टी प्रत्येक subsite साठी वेगळ्या ठेवल्या जातात.

\- उदाहरणार्थ, प्रत्येक subsite ला स्वतःचं uploads folder मिळतं. त्यामुळे, एका विशिष्ट subsite च्या users ने केलेले uploads दुसऱ्या subsite वर उपलब्ध नसतात.

\- प्रत्येक subsite चं स्वतःचं admin panel असतं आणि ते plugins किंवा themes activate किंवा deactivate करू शकतात, जोपर्यंत ते super admin ने network active केलेले नसतात.

\- बहुतेक database tables प्रत्येक subsite साठी वेगळ्या तयार होतात, म्हणजे posts, comments, pages, settings, आणि बरंच काही प्रत्येक subsite साठी वेगळं असतं.

## WordPress Multisite वर User व्यवस्थापन

WordPress multisite वर एक नाजूक विषय म्हणजे user व्यवस्थापन. WordPress user table ही अशा काही tables पैकी एक आहे जी सर्व subsites मध्ये शेअर होते.

ही व्यवस्था तुम्ही तुमच्या नेटवर्कसह काय बनवायचं ठरवलंय त्यावर अवलंबून काही समस्या निर्माण करू शकते. खालील उदाहरण सर्वात मोठी समस्या स्पष्ट करतं.

खालील परिस्थिती कल्पना करा:

तुम्ही एक WordPress multisite नेटवर्क तयार करता आणि ज्यांना e-commerce store हवं आहे अशा लोकांना मासिक शुल्कात subsites देणं सुरू करता.

तुम्हाला पहिला paying customer मिळतो – जॉन. तुम्ही जॉनसाठी तुमच्या नेटवर्कवर एक साइट तयार करता, सर्व आवश्यक plugins install करता, मग जॉनसाठी एक user तयार करता जेणेकरून तो त्याचं store व्यवस्थापित करू शकेल.

मग एक दुसरी ग्राहक येते – अॅलिस. तुम्ही तिच्यासाठीही तेच करता आणि आता तिचंही तुमच्या नेटवर्कवर एक store आहे.

जॉन आणि अॅलिस दोघेही तुमचे ग्राहक आहेत, पण ते एकमेकांना ओळखत नाहीत. आणि महत्त्वाचं म्हणजे, जर त्यापैकी कोणी दुसऱ्याच्या store वेबसाइटवर गेलं, तर ते store त्याच नेटवर्कवर आहे हे कळण्याचा कोणताही मार्ग नाही.

एक दिवस, जॉनला नवीन shoes हवे असतात आणि त्याला अॅलिसच्या store मध्ये परफेक्ट जोडी सापडते. जेव्हा तो खरेदी पूर्ण करायला जातो, तेव्हा त्याला "email already in use" असा error message मिळतो, जो विचित्र आहे कारण जॉनला 100% खात्री आहे की तो पहिल्यांदाच अॅलिसच्या वेबसाइटवर आला आहे.

इथे असं झालं की जॉनचा user संपूर्ण नेटवर्कमध्ये शेअर होतो, त्यामुळे जेव्हा तो अॅलिसच्या साइटवर checkout साठी account तयार करायला जातो, तेव्हा WordPress ला कळतं की त्याच email address चा user आधीच आहे आणि error येतो.

_टीप: तुमच्या use-case नुसार हे किती वाईट असू शकतं हे आम्हाला माहीत आहे, म्हणून Ultimate Multisite मध्ये एक option आहे जो existing user साठीचे नियमित checks bypass करतो, ज्यामुळे एकाच email address ने अनेक accounts तयार करता येतात. प्रत्येक account एका subsite शी जोडलेलं असतं, त्यामुळे collision चा धोका कमीत कमी असतो. वरील उदाहरणात, जॉनला error message मिळाला नसता आणि तो त्या shoes कोणत्याही अडचणीशिवाय खरेदी करू शकला असता. या option ला Enable Multiple Accounts म्हणतात, आणि ते Ultimate Multisite → Settings → Login & Registration मध्ये activate करता येतं._

User table शेअर असली तरी, users subsite admins किंवा super admin द्वारे subsites मध्ये जोडता आणि काढता येतात, आणि त्यांना वेगवेगळ्या subsites वर वेगवेगळ्या user roles सुद्धा देता येतात.

## Performance विचार

WordPress multisite खरोखरच शक्तिशाली आहे जेव्हा त्यावर किती साइट्स चालवता येतात याचा विचार केला जातो. याची साक्ष म्हणजे [WordPress.com](https://WordPress.com), Edublogs, आणि Campuspress या सर्व multisite-based सेवा आहेत आणि प्रत्येकावर हजारो साइट्स होस्ट केल्या जातात.

सिद्धांततः एका WordPress multisite installation वर किती साइट्स होस्ट करता येतात याची मर्यादा नसली तरी, प्रत्यक्षात तुम्ही समाधानकारकपणे किती साइट्स चालवू शकता हे अनेक घटकांवर अवलंबून बदलू शकतं: साइट्स किती dynamic आहेत, subsites ना कोणते plugins उपलब्ध आहेत, इत्यादी.

एक सर्वसाधारण नियम म्हणजे, तुमचं नेटवर्क जितकं सोपं, तितकं चांगलं. जिथे content खरोखर dynamic नाही अशा साइट्सला प्राधान्य देणं (जे त्यांना aggressive caching strategies साठी उत्तम उमेदवार बनवतं) आणि plugin stack शक्य तितका हलका ठेवणं (active plugins ची संख्या जितकी कमी तितकं चांगलं) तुम्ही होस्ट करू शकता त्या subsites ची संख्या खूप वाढवू शकतं.

सर्वात चांगली गोष्ट म्हणजे हे सगळं WordPress असल्यामुळे, performance सुधारण्यासाठी तुम्ही आधीच वापरत असलेली आणि आवडणारी tools multisite नेटवर्कसाठीही काम करतात.

Multisite साठी मुख्य अडथळा database आहे पण जर बाकी सगळं व्यवस्थित सेट केलं असेल, तर तुम्हाला काळजी करण्याची वेळ येण्यापूर्वी हजारो साइट्स होऊ शकतात. तेव्हाही, त्या टप्प्यावर हळूहळू solutions जोडता येतात (जसं की database sharding solutions, उदाहरणार्थ).
