---
title: டொமைன் மேப்பிங்கை கட்டமைப்பது எப்படி
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# டொமைன் மேப்பிங் அமைப்பது எப்படி (v2) {#how-to-configure-domain-mapping-v2}

_**முக்கிய குறிப்பு: இந்தக் கட்டுரை Ultimate Multisite பதிப்பு 2.x-ஐக் குறிக்கிறது.**_

ஒரு பிரீமியம் நெட்வொர்க்கின் மிக வலுவான அம்சங்களில் ஒன்று, எங்கள் கிளையண்ட்கள் தங்கள் தளங்களுக்கு ஒரு மேல் நிலை டொமைனை இணைக்கும் வாய்ப்பை வழங்கும் திறன் ஆகும். இறுதியில், எது அதிக தொழில்முறையாகத் தெரிகிறது: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) அல்லது [_**joesbikeshop.com**_](http://joesbikeshop.com)? அதனால்தான் மூன்றாம் தரப்பு plugin-களைப் பயன்படுத்த வேண்டிய அவசியமின்றி, Ultimate Multisite அந்த அம்சத்தை உள்ளமைவாக வழங்குகிறது.

## டொமைன் மேப்பிங் என்றால் என்ன? {#whats-domain-mapping}

பெயர் சொல்வதுபோல், டொமைன் மேப்பிங் என்பது தனிப்பயன் டொமைனுக்கான கோரிக்கையைப் பெற்று, அந்த குறிப்பிட்ட டொமைன் இணைக்கப்பட்டுள்ள நெட்வொர்க்கிலுள்ள தொடர்புடைய தளத்துடன் அந்தக் கோரிக்கையை இணைக்கும் Ultimate Multisite வழங்கும் திறன் ஆகும்.

### உங்கள் Ultimate Multisite நெட்வொர்க்கில் டொமைன் மேப்பிங் அமைப்பது எப்படி {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

டொமைன் மேப்பிங் செயல்பட, உங்கள் தரப்பில் சில அமைப்புகள் தேவை. நன்றி, Ultimate Multisite கடினமான பணியை உங்களுக்காக தானியக்கமாக்குகிறது. எனவே தேவைகளை எளிதாக பூர்த்தி செய்யலாம்.

Ultimate Multisite நிறுவலின் போது, wizard தானாகவே **sunrise.php**-ஐ குறிப்பிட்ட கோப்புறைக்கு நகலெடுத்து நிறுவும். **இந்தப் படி முடியும் வரை wizard உங்களைத் தொடர அனுமதிக்காது**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

இதன் அர்த்தம், Ultimate Multisite நிறுவல் wizard உங்கள் நெட்வொர்க் அமைப்பை முடித்தவுடன், நீங்கள் உடனே தனிப்பயன் டொமைனை மேப் செய்யத் தொடங்கலாம்.

Ultimate Multisite-இல் டொமைன் மேப்பிங் கட்டாயமல்ல என்பதை கவனிக்கவும். WordPress Multisite-இன் இயல்பான டொமைன் மேப்பிங் செயல்பாட்டையோ அல்லது வேறு எந்த டொமைன் மேப்பிங் தீர்வையோ பயன்படுத்தும் விருப்பம் உங்களுக்கு உள்ளது.

மற்ற டொமைன் மேப்பிங் தீர்வுகளுக்குப் பயன்படுத்த இடமளிக்க Ultimate Multisite டொமைன் மேப்பிங்கை முடக்க வேண்டுமெனில், **Ultimate Multisite > அமைப்புகள் > டொமைன் மேப்பிங்** என்பதன் கீழ் இந்த அம்சத்தை முடக்கலாம்.

![Admin redirect, மேப்பிங் செய்தி மற்றும் DNS விருப்பங்களைக் காட்டும் டொமைன் மேப்பிங் அமைப்புகள் பக்கம்](/img/config/domain-mapping-settings.png)

இந்த விருப்பத்தின் கீழேயே, **Force Admin Redirect** என்ற விருப்பத்தையும் காணலாம். இந்த விருப்பம், உங்கள் வாடிக்கையாளர்கள் தங்கள் custom domain மற்றும் subdomain இரண்டிலும் admin dashboard-ஐ அணுக முடியுமா அல்லது அவற்றில் ஒன்றில் மட்டும் அணுக முடியுமா என்பதை கட்டுப்படுத்த அனுமதிக்கிறது.

நீங்கள் **Force redirect to mapped domain** என்பதைத் தேர்ந்தெடுத்தால், உங்கள் வாடிக்கையாளர்கள் தங்கள் custom domain-களில் மட்டுமே தங்கள் admin dashboard-ஐ அணுக முடியும்.

**Force redirect to** **network domain** என்ற விருப்பம் இதற்கு முற்றிலும் எதிராக செயல்படும் - உங்கள் வாடிக்கையாளர்கள் தங்கள் custom domain-களில் உள்நுழைய முயன்றாலும், தங்கள் subdomain-இல் மட்டுமே தங்கள் dashboard-களை அணுக அனுமதிக்கப்படுவார்கள்.

மேலும் **Allow access to the admin by both mapped domain domain and network domain** என்ற விருப்பம், subdomain மற்றும் custom domain இரண்டிலும் தங்கள் admin dashboard-களை அணுக அவர்களுக்கு அனுமதிக்கிறது.

![மூன்று redirect விருப்பங்களைக் காட்ட விரிக்கப்பட்ட Admin Redirect dropdown](/img/config/domain-mapping-redirect-options.png)

தனிப்பயன் டொமைனை மேப் செய்ய இரண்டு வழிகள் உள்ளன. முதல் வழி, super admin ஆக உங்கள் network admin dashboard-இலிருந்து டொமைன் பெயரை மேப் செய்வது. இரண்டாவது வழி, துணைத் தளத்தின் admin dashboard-இல் Account பக்கத்தின் கீழ் செய்வது.

ஆனால் உங்கள் நெட்வொர்க்கிலுள்ள துணைத் தளங்களில் ஒன்றுடன் தனிப்பயன் டொமைனை மேப் செய்யத் தொடங்கும் முன், அந்த டொமைன் பெயரின் **DNS அமைப்புகள்** சரியாக உள்ளமைக்கப்பட்டுள்ளன என்பதை உறுதிசெய்ய வேண்டும்.

###

### டொமைன் DNS அமைப்புகள் சரியாக உள்ளமைக்கப்பட்டுள்ளன என்பதை உறுதிசெய்தல் {#making-sure-the-domain-dns-settings-are-properly-configured}

மேப்பிங் செயல்பட, நீங்கள் மேப் செய்யத் திட்டமிடும் டொமைன் உங்கள் நெட்வொர்க்கின் IP முகவரியை நோக்கி இருப்பதை உறுதிசெய்ய வேண்டும். உங்களுக்கு தேவை நெட்வொர்க் IP முகவரி - Ultimate Multisite நிறுவப்பட்டுள்ள டொமைனின் IP முகவரி - நீங்கள் மேப் செய்ய விரும்பும் தனிப்பயன் டொமைனின் IP முகவரி அல்ல. ஒரு குறிப்பிட்ட டொமைனின் IP முகவரியைத் தேட, உதாரணமாக [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)-க்கு செல்ல பரிந்துரைக்கிறோம்.

டொமைனை சரியாக மேப் செய்ய, உங்கள் **DNS** அமைப்பில் அந்த **IP முகவரியை** நோக்கும் ஒரு **A RECORD** சேர்க்க வேண்டும். DNS மேலாண்மை வெவ்வேறு domain registrar-களுக்கு இடையில் பெரிதும் மாறுபடும். ஆனால் உங்கள் domain registrar XXXX எனில், " _Creating A Record on XXXX_ " என்று தேடினால் இதை விளக்கும் பல பயிற்சிகள் ஆன்லைனில் கிடைக்கும் (உதா.: " _Creating A Record on_ _GoDaddy_ ").

இதைச் செயல்படுத்த சிரமம் ஏற்பட்டால், **உங்கள் domain registrar support-ஐ தொடர்புகொள்ளுங்கள்**. இந்தப் பகுதியில் அவர்கள் உங்களுக்கு உதவ முடியும்.

உங்கள் கிளையண்ட்கள் தங்கள் சொந்த டொமைன்களை மேப் செய்ய அனுமதிக்கத் திட்டமிட்டால், இந்தப் பணியை அவர்கள் தாமே செய்ய வேண்டும். A Record-ஐ உருவாக்க முடியாமல் இருந்தால், அவர்களை அவர்களின் registrar support அமைப்பை நோக்கி வழிநடத்துங்கள்.

### Super Admin ஆக தனிப்பயன் டொமைன் பெயரை மேப் செய்தல் {#mapping-custom-domain-name-as-super-admin}

உங்கள் நெட்வொர்க்கில் super admin ஆக உள்நுழைந்திருக்கும்போது, **Ultimate Multisite > டொமைன்கள்** என்பதன் கீழ் சென்று தனிப்பயன் டொமைன் பெயர்களை எளிதாகச் சேர்த்து நிர்வகிக்கலாம்.

![Ultimate Multisite-இல் டொமைன்கள் பட்டியல் பக்கம்](/img/admin/domains-list.png)

இந்தப் பக்கத்தில், மேலே உள்ள **டொமைன் சேர்க்கவும்** பொத்தானைக் கிளிக் செய்யலாம். இதனால் ஒரு modal சாளரம் திறக்கும். அதில் **தனிப்பயன் டொமைன் பெயர்**, தனிப்பயன் டொமைன் பெயரைப் பயன்படுத்த விரும்பும் **துணைத் தளம்** ஆகியவற்றை அமைத்து நிரப்பலாம். மேலும் அதை **முதன்மை டொமைன்** பெயராக அமைக்க வேண்டுமா இல்லையா என்பதையும் தீர்மானிக்கலாம் (ஒரு **துணைத் தளத்திற்கு பல டொமைன் பெயர்களை மேப் செய்யலாம்** என்பதை கவனிக்கவும்).

![டொமைன் பெயர், தளத் தேர்வி மற்றும் முதன்மை டொமைன் toggle கொண்ட Add Domain modal](/img/admin/domain-add-modal.png)

அனைத்து தகவல்களையும் உள்ளிட்ட பிறகு, கீழே உள்ள **இருக்கும் டொமைனைச் சேர்க்கவும்** பொத்தானைக் கிளிக் செய்யலாம்.

இதனால் தனிப்பயன் டொமைனின் DNS தகவலைச் சரிபார்த்து பெறும் செயல்முறை தொடங்கும். மேலும், அது சென்று கொண்டிருக்கும் செயல்முறையை நீங்கள் பின்தொடர பக்கத்தின் கீழே ஒரு பதிவையும் காணலாம். இந்த செயல்முறை முடிவடைய சில நிமிடங்கள் ஆகலாம்.

Ultimate Multisite v2.13.0, ஒவ்வொரு தளத்திற்கான domain ஆகக் கருத வேண்டிய host-இல் புதிய தளம் உருவாக்கப்படும் போது, உள்துறை domain பதிவையும் தானாக உருவாக்குகிறது. host என்பது network-இன் முதன்மை domain ஆக இருந்தாலோ, அல்லது **Site URL** field-இல் அமைக்கப்பட்ட பகிரப்பட்ட checkout-form அடிப்படை domains-இல் ஒன்றாக இருந்தாலோ, தானியங்கி mapped-domain பதிவு தவிர்க்கப்படும். இதனால் அந்த பகிரப்பட்ட அடிப்படை domain, அதை பயன்படுத்தும் ஒவ்வொரு தளத்திற்கும் கிடைக்கும்படி இருக்கும்.

வாடிக்கையாளர் Domain Seller v1.3.0 அல்லது அதற்கு புதிய பதிப்பின் மூலம் புதிய domain பதிவு செய்யும்போது, Ultimate Multisite இயல்பாகவே பதிவுசெய்யப்பட்ட domain-ஐ வாடிக்கையாளரின் network தளத்துடன் தானாக map செய்கிறது. வெற்றிகரமான பதிவுக்குப் பிறகு, primary-domain குறி, activation நிலை, அல்லது SSL கையாளுதல் போன்ற விருப்பங்களை மாற்ற விரும்பினால் தவிர, நிர்வாகிகள் தனி mapped-domain பதிவைச் சேர்க்க வேண்டியதில்லை.

அனைத்தும் சரியாக அமைக்கப்பட்டிருந்தால் **Stage** அல்லது நிலை **Checking DNS** இலிருந்து **Ready** ஆக மாற வேண்டும்.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

domain பெயரை கிளிக் செய்தால், அதன் உள்ளே சில விருப்பங்களைப் பார்க்க முடியும். அவற்றை விரைவாகப் பார்ப்போம்:

![stage, தளம், active, primary மற்றும் SSL toggles உடன் domain விவரப் பக்கம்](/img/admin/domain-edit.png)

**Stage:** domain தற்போது இருக்கும் stage இதுவாகும். நீங்கள் முதலில் domain-ஐச் சேர்க்கும்போது, அது பெரும்பாலும் **Checking DNS** stage-இல் இருக்கும். இந்த செயல்முறை DNS உள்ளீடுகளைச் சரிபார்த்து அவை சரியாக உள்ளன என்பதை உறுதிப்படுத்தும். பின்னர் domain **Checking SSL** stage-இல் வைக்கப்படும். Ultimate Multisite domain-க்கு SSL உள்ளதா இல்லையா என்பதைச் சரிபார்த்து, உங்கள் domain-ஐ **Ready** அல்லது **Ready (without SSL)** என வகைப்படுத்தும்.

**Site:** இந்த domain-ுடன் தொடர்புடைய subdomain. mapped domain இந்த குறிப்பிட்ட தளத்தின் உள்ளடக்கத்தைக் காட்டும்.

**Active:** domain-ஐ செயல்படுத்த அல்லது செயலிழக்கச் செய்ய இந்த விருப்பத்தை on அல்லது off ஆக மாற்றலாம்.

**Is Primary Domain?:** உங்கள் வாடிக்கையாளர்கள் ஒவ்வொரு தளத்திற்கும் ஒன்றுக்கு மேற்பட்ட mapped domain-களை வைத்திருக்கலாம். இது குறிப்பிட்ட தளத்தின் primary domain ஆக இருக்க வேண்டுமா என்பதைத் தேர்ந்தெடுக்க இந்த விருப்பத்தைப் பயன்படுத்தவும்.

**Is Secure?:** Ultimate Multisite domain-ஐ இயக்குவதற்கு முன் அதற்கு SSL சான்றிதழ் உள்ளதா இல்லையா என்பதைச் சரிபார்த்தாலும், SSL சான்றிதழுடன் அல்லது இல்லாமல் domain-ஐ load செய்ய நீங்கள் கைமுறையாகத் தேர்ந்தெடுக்கலாம். இணையதளத்தில் SSL சான்றிதழ் இல்லாத நிலையில் அதை SSL உடன் கட்டாயமாக load செய்ய முயன்றால், பிழைகள் வரக்கூடும் என்பதை கவனிக்கவும்.

### Subsite பயனராக custom domain பெயரை map செய்தல் {#mapping-custom-domain-name-as-subsite-user}

Subsite நிர்வாகிகளும் தங்கள் subsite admin dashboard-இல் இருந்து custom domain பெயர்களை map செய்யலாம்.

முதலில், **Domain mapping** அமைப்புகளின் கீழ் இந்த விருப்பத்தை இயக்கியுள்ளீர்கள் என்பதை உறுதிசெய்ய வேண்டும். கீழே உள்ள screenshot-ஐப் பார்க்கவும்.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

இந்த விருப்பத்தை **Plan** நிலை அல்லது **Ultimate Multisite > Products** இல் உள்ள product விருப்பங்களின் கீழும் அமைக்கலாம் அல்லது configure செய்யலாம்.

![product திருத்தப் பக்கத்தில் Custom Domains பகுதி](/img/config/product-custom-domains.png)

அந்த விருப்பங்களில் ஏதேனும் ஒன்று இயக்கப்பட்டு, subsite பயனருக்கு custom domain பெயர்களை map செய்ய அனுமதி இருந்தால், subsite பயனர் **Account** பக்கத்தின் கீழ் **Domains** எனப்படும் metabox-ஐப் பார்க்க வேண்டும்.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

பயனர் **Add Domain** button-ஐ கிளிக் செய்யலாம். அது சில வழிமுறைகளுடன் ஒரு modal window-ஐத் திறக்கும்.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

பின்னர் பயனர் **Next Step** கிளிக் செய்து custom domain பெயரைச் சேர்க்கத் தொடரலாம். இது primary domain ஆக இருக்க வேண்டுமா இல்லையா என்பதையும் தேர்ந்தெடுக்கலாம்.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** கிளிக் செய்தால், custom domain-ன் DNS தகவலைச் சரிபார்த்து பெறும் செயல்முறை தொடங்கும்.

### Domain Syncing பற்றி {#about-domain-syncing}

Domain Syncing என்பது, **domain mapping செயல்படுவதற்காக** Ultimate Multisite உங்கள் hosting account-இல் custom domain பெயரை add-on domain ஆகச் சேர்க்கும் செயல்முறை.

உங்கள் hosting provider-க்கு Ultimate Multisite domain mapping அம்சத்துடன் integration இருந்தால், domain syncing தானாகவே நடக்கும். தற்போது இந்த hosting providers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ மற்றும் _Cpanel._

host-provider integration செயலில் இருக்கும் போது, புதியதாக உருவாக்கப்பட்ட தளங்களுக்கு provider-side DNS அல்லது subdomain உருவாக்கும் task-ஐ Ultimate Multisite queue-இல் சேர்க்கவும் முடியும். அந்த task-ஐக் கேட்க எந்த integration-மும் இல்லையெனில், பயனற்ற queue உள்ளீடுகளைத் தவிர்க்க background job தவிர்க்கப்படும். mapped domains-க்கான DNS மற்றும் SSL சரிபார்ப்புகள் வழக்கமான domain-stage செயல்முறையின் மூலம் தொடர்ந்து இயங்கும்.

**Integration** tab-இன் கீழ் உள்ள Ultimate Multisite அமைப்புகளில் இந்த integration-ஐ நீங்கள் செயல்படுத்த வேண்டும்.

![hosting providers-ஐக் காட்டும் Ultimate Multisite அமைப்புகளில் Integrations tab](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_உங்கள் hosting provider மேலே குறிப்பிடப்பட்ட providers-இல் ஒன்றாக இல்லையெனில், உங்கள் hosting account-இல் **domain பெயரை கைமுறையாக sync செய்ய அல்லது சேர்க்க வேண்டியிருக்கும்** என்பதை கவனிக்கவும்._
