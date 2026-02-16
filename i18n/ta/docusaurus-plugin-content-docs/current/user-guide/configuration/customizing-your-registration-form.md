---
title: உங்கள் பதிவுப் படிவத்தை தனிப்பயனாக்குதல்
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# உங்கள் பதிவுப் படிவத்தைத் தனிப்பயனாக்குதல்

WordPress தளத்தில் கட்டமைக்கப்பட்ட மற்ற SaaS தளங்களிலிருந்து உங்கள் நெட்வொர்க்கை தனித்துவமாகக் காட்ட, Ultimate Multisite எங்கள் **Checkout Forms** அம்சத்தைப் பயன்படுத்தி உங்கள் பதிவு மற்றும் உள்நுழைவு பக்கங்களைத் தனிப்பயனாக்க அனுமதிக்கிறது.

புதிய வாடிக்கையாளர்களை மாற்றும்போது வெவ்வேறு அணுகுமுறைகளை பரிசோதிக்க இவை எளிதான மற்றும் நெகிழ்வான வழியாக இருந்தாலும், இவை பெரும்பாலும் தனிப்பயனாக்கப்பட்ட பதிவுப் படிவங்களை உருவாக்க பயன்படுத்தப்படுகின்றன. இதை எப்படிச் செய்வது என்பதை இந்தக் கட்டுரை உங்களுக்குக் காட்டுகிறது.

## உள்நுழைவு மற்றும் பதிவு பக்கங்கள்:

Ultimate Multisite நிறுவப்படும்போது, உங்கள் முதன்மை தளத்தில் தனிப்பயன் உள்நுழைவு மற்றும் பதிவு பக்கங்களை தானாகவே உருவாக்குகிறது. **Ultimate Multisite > Settings > Login & Registration** பக்கத்திற்குச் சென்று இந்த இயல்புநிலை பக்கங்களை எப்போது வேண்டுமானாலும் மாற்றலாம்.

![Login and Registration settings page](/img/config/settings-general.png)

**Login & Registration** பக்கத்தில் நீங்கள் தனிப்பயனாக்கக்கூடிய ஒவ்வொரு விருப்பத்தையும் பார்க்கலாம்:

  * **Enable registration:** இந்த விருப்பம் உங்கள் நெட்வொர்க்கில் பதிவை இயக்கும் அல்லது முடக்கும். இது முடக்கப்பட்டிருந்தால், உங்கள் வாடிக்கையாளர்கள் பதிவு செய்து உங்கள் தயாரிப்புகளுக்கு சந்தா செலுத்த முடியாது.

  * **Enable email verification:** இந்த விருப்பம் இயக்கப்பட்டிருந்தால், இலவச திட்டம் அல்லது சோதனைக் காலத்துடன் கூடிய கட்டண திட்டத்திற்கு சந்தா செலுத்தும் வாடிக்கையாளர்கள் சரிபார்ப்பு மின்னஞ்சலைப் பெறுவார்கள், மேலும் அவர்களின் இணையதளங்கள் உருவாக்கப்பட சரிபார்ப்பு இணைப்பை கிளிக் செய்ய வேண்டும்.

  * **Default registration page:** இது பதிவுக்கான இயல்புநிலை பக்கம். இந்தப் பக்கம் உங்கள் இணையதளத்தில் வெளியிடப்பட்டிருக்க வேண்டும், மேலும் உங்கள் வாடிக்கையாளர்கள் உங்கள் தயாரிப்புகளுக்கு சந்தா செலுத்தும் பதிவுப் படிவம் (checkout form என்றும் அழைக்கப்படும்) இருக்க வேண்டும். நீங்கள் விரும்பும் அளவு பதிவு பக்கங்கள் மற்றும் checkout படிவங்களை உருவாக்கலாம், ஆனால் பதிவு பக்கத்தில் checkout படிவ shortcode-ஐ சேர்க்க மறக்காதீர்கள், இல்லையெனில் அது தோன்றாது.

  * **Use custom login page:** இந்த விருப்பம் இயல்புநிலை wp-login.php பக்கத்திற்கு பதிலாக தனிப்பயனாக்கப்பட்ட உள்நுழைவு பக்கத்தைப் பயன்படுத்த அனுமதிக்கிறது. இந்த விருப்பம் இயக்கப்பட்டிருந்தால், **Default login page** விருப்பத்தில் (கீழே) உள்நுழைவுக்கு எந்தப் பக்கம் பயன்படுத்தப்படும் என்பதைத் தேர்ந்தெடுக்கலாம்.

  * **Obfuscate the original login url (wp-login.php)** : அசல் உள்நுழைவு URL-ஐ மறைக்க விரும்பினால், இந்த விருப்பத்தை இயக்கலாம். brute-force தாக்குதல்களைத் தடுக்க இது பயனுள்ளதாக இருக்கும். இந்த விருப்பம் இயக்கப்பட்டிருந்தால், ஒரு பயனர் அசல் wp-login.php இணைப்பை அணுக முயற்சிக்கும்போது Ultimate Multisite 404 பிழையைக் காண்பிக்கும்.

  * **Force synchronous site publication:** ஒரு வாடிக்கையாளர் நெட்வொர்க்கில் ஒரு தயாரிப்புக்கு சந்தா செலுத்திய பிறகு, புதிய நிலுவையிலுள்ள தளம் உண்மையான நெட்வொர்க் தளமாக மாற்றப்பட வேண்டும். வெளியீட்டு செயல்முறை Job Queue மூலம் asynchronous-ஆக நடக்கிறது. பதிவு செய்யும் அதே கோரிக்கையில் வெளியீடு நடக்க கட்டாயப்படுத்த இந்த விருப்பத்தை இயக்கவும்.

இப்போது, உள்நுழைவு மற்றும் பதிவு செயல்முறைக்கு தொடர்புடைய பிற விருப்பங்களைப் பார்க்கலாம். அவை அதே Login & registration பக்கத்தில் **Other options** கீழ் உள்ளன:

  * **Default role:** பதிவு செயல்முறைக்குப் பிறகு உங்கள் வாடிக்கையாளர்கள் தங்கள் இணையதளத்தில் பெறும் பங்கு இது.

  * **Add users to the main site as well:** இந்த விருப்பத்தை இயக்குவது பதிவு செயல்முறைக்குப் பிறகு உங்கள் நெட்வொர்க்கின் முதன்மை தளத்திலும் பயனரைச் சேர்க்கும். இந்த விருப்பத்தை இயக்கினால், இந்த பயனர்களின் **default role**-ஐ அமைக்கும் விருப்பமும் கீழே தோன்றும்.

  * **Enable multiple accounts:** உங்கள் நெட்வொர்க்கின் வெவ்வேறு தளங்களில் ஒரே மின்னஞ்சல் முகவரியுடன் கணக்குகளை வைத்திருக்க பயனர்களை அனுமதிக்கிறது. இந்த விருப்பம் முடக்கப்பட்டிருந்தால், உங்கள் வாடிக்கையாளர்கள் உங்கள் நெட்வொர்க்கில் இயங்கும் மற்ற இணையதளங்களில் அதே மின்னஞ்சல் முகவரியுடன் கணக்கை உருவாக்க முடியாது.

உள்நுழைவு மற்றும் பதிவு தொடர்பான அனைத்து விருப்பங்களும் இவைதான்! திருத்தம் முடிந்ததும் உங்கள் அமைப்புகளைச் சேமிக்க மறக்காதீர்கள்.

## பல பதிவுப் படிவங்களைப் பயன்படுத்துதல்:

Ultimate Multisite 2.0 ஒரு checkout form editor-ஐ வழங்குகிறது, இது வெவ்வேறு புலங்கள், வழங்கப்படும் தயாரிப்புகள் போன்றவற்றுடன் நீங்கள் விரும்பும் அளவு படிவங்களை உருவாக்க அனுமதிக்கிறது.

உள்நுழைவு மற்றும் பதிவு பக்கங்கள் இரண்டும் shortcode-களுடன் உட்பொதிக்கப்பட்டுள்ளன: உள்நுழைவு பக்கத்தில் **[wu_login_form]** மற்றும் பதிவு பக்கத்தில் **[wu_checkout]**. Checkout படிவங்களை உருவாக்கி பதிவு பக்கத்தை மேலும் தனிப்பயனாக்கலாம்.

இந்த அம்சத்தை அணுக, இடது பக்கப்பட்டியில் உள்ள **Checkout Forms** மெனுவிற்குச் செல்லவும்.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

இந்தப் பக்கத்தில், உங்களிடம் உள்ள அனைத்து checkout படிவங்களையும் பார்க்கலாம்.

புதிய படிவத்தை உருவாக்க விரும்பினால், பக்கத்தின் மேலே உள்ள **Add Checkout Form**-ஐ கிளிக் செய்யவும்.

இந்த மூன்று விருப்பங்களில் ஒன்றை உங்கள் தொடக்கப் புள்ளியாகத் தேர்ந்தெடுக்கலாம்: single step, multi-step அல்லது blank. பின்னர், **Go to the Editor**-ஐ கிளிக் செய்யவும்.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

மாற்றாக, ஏற்கனவே உள்ள படிவங்களை அதன் பெயருக்குக் கீழே உள்ள விருப்பங்களைக் கிளிக் செய்து திருத்தலாம் அல்லது நகலெடுக்கலாம். அங்கே, படிவத்தின் shortcode-ஐ நகலெடுக்க அல்லது படிவத்தை நீக்குவதற்கான விருப்பங்களையும் காணலாம்.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Single step அல்லது multi-step தேர்ந்தெடுத்தால், checkout படிவம் வேலை செய்ய தேவையான அடிப்படை படிகளுடன் ஏற்கனவே நிரப்பப்பட்டிருக்கும். பின்னர், விரும்பினால், கூடுதல் படிகளைச் சேர்க்கலாம்.

### Checkout படிவத்தைத் திருத்துதல்:

முன்பு குறிப்பிட்டது போல், வெவ்வேறு நோக்கங்களுக்காக checkout படிவங்களை உருவாக்கலாம். இந்த எடுத்துக்காட்டில் பதிவுப் படிவத்தில் வேலை செய்வோம்.

Checkout form editor-க்கு சென்ற பிறகு, உங்கள் படிவத்திற்கு ஒரு பெயர் (உள்ளக குறிப்புக்கு மட்டும் பயன்படுத்தப்படும்) மற்றும் ஒரு slug (shortcode உருவாக்க பயன்படுத்தப்படும்) கொடுக்கவும்.

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

படிவங்கள் படிகள் மற்றும் புலங்களால் ஆனவை. **Add New Checkout Step**-ஐ கிளிக் செய்து புதிய படியைச் சேர்க்கலாம்.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Modal சாளரத்தின் முதல் tab-ல், உங்கள் படிவத்தின் படி உள்ளடக்கத்தை நிரப்பவும். ஒரு ID, பெயர் மற்றும் விளக்கம் கொடுக்கவும். இவை பெரும்பாலும் உள்ளகமாகப் பயன்படுத்தப்படுகின்றன.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

அடுத்து, படியின் தெரிவுநிலையை அமைக்கவும். **Always show**, **Only show for logged in users** அல்லது **Only show for guests** என்பவற்றில் ஒன்றைத் தேர்ந்தெடுக்கலாம்.

![Checkout step visibility options](/img/config/checkout-form-step.png)

இறுதியாக, படி style-ஐ configure செய்யவும். இவை விருப்பமான புலங்கள்.

![Checkout step style configuration](/img/config/checkout-form-step.png)

இப்போது, முதல் படிக்கு புலங்களைச் சேர்க்க வேண்டிய நேரம். **Add New Field**-ஐ கிளிக் செய்து நீங்கள் விரும்பும் section வகையைத் தேர்ந்தெடுக்கவும்.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

ஒவ்வொரு புலமும் வெவ்வேறு parameters நிரப்ப வேண்டும். இந்த முதல் உள்ளீட்டுக்கு, **Username** புலத்தைத் தேர்ந்தெடுப்போம்.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

தேவையான அளவு படிகளும் புலங்களும் சேர்க்கலாம். உங்கள் வாடிக்கையாளர்கள் ஒன்றைத் தேர்ந்தெடுக்க உங்கள் தயாரிப்புகளைக் காட்ட, Pricing Table புலத்தைப் பயன்படுத்தவும். உங்கள் வாடிக்கையாளர்கள் ஒரு template தேர்ந்தெடுக்க அனுமதிக்க விரும்பினால், Template Selection புலத்தைச் சேர்க்கவும். இப்படியே தொடரலாம்.

_**குறிப்பு:** Checkout படிவத்தை உருவாக்கிய பிறகு ஒரு தயாரிப்பை உருவாக்கினால், Pricing table section-ல் அந்த தயாரிப்பைச் சேர்க்க வேண்டும். சேர்க்கவில்லையெனில், பதிவு பக்கத்தில் உங்கள் வாடிக்கையாளர்களுக்கு தயாரிப்பு தோன்றாது._

_**குறிப்பு 2:** username, email, password, site title, site URL, order summary, payment மற்றும் submit button ஆகியவை checkout படிவத்தை உருவாக்க கட்டாயமான புலங்கள்._

Checkout படிவத்தில் வேலை செய்யும்போது, உங்கள் வாடிக்கையாளர்கள் படிவத்தை எப்படிப் பார்ப்பார்கள் என்பதைப் பார்க்க Preview பொத்தானை எப்போது வேண்டுமானாலும் பயன்படுத்தலாம். ஏற்கனவே உள்ள பயனராகவோ அல்லது பார்வையாளராகவோ பார்வையை மாற்றவும் முடியும்.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

இறுதியாக, **Advanced Options**-ல் **Thank You** பக்கத்திற்கான செய்தியை configure செய்யலாம், conversions track செய்ய snippets சேர்க்கலாம், உங்கள் checkout படிவத்திற்கு custom CSS சேர்க்கலாம் அல்லது குறிப்பிட்ட நாடுகளுக்கு மட்டும் கட்டுப்படுத்தலாம்.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

வலது column-ல் உள்ள toggle-ஐப் பயன்படுத்தி உங்கள் checkout படிவத்தை கைமுறையாக இயக்கலாம் அல்லது முடக்கலாம், அல்லது படிவத்தை நிரந்தரமாக நீக்கலாம்.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

உங்கள் checkout படிவத்தைச் சேமிக்க மறக்காதீர்கள்!

![Save Checkout Form button](/img/config/checkout-form-save.png)

உங்கள் படிவத்தின் shortcode-ஐ பெற **Generate Shortcode**-ஐ கிளிக் செய்து modal சாளரத்தில் காட்டப்படும் முடிவை நகலெடுக்கவும்.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**குறிப்பு:** இந்த checkout படிவத்தை உங்கள் பதிவு பக்கத்தில் சேர்க்க, இந்த shortcode-ஐ உங்கள் பதிவு பக்கத்தில் சேர்க்க வேண்டும்._

## URL parameters மூலம் தயாரிப்புகள் மற்றும் templates-ஐ முன்தேர்வு செய்தல்:

உங்கள் தயாரிப்புகளுக்கு தனிப்பயனாக்கப்பட்ட pricing tables உருவாக்கி, உங்கள் வாடிக்கையாளர் உங்கள் pricing table அல்லது templates பக்கத்திலிருந்து தேர்ந்தெடுக்கும் தயாரிப்பு அல்லது template-ஐ checkout படிவத்தில் முன்தேர்வு செய்ய விரும்பினால், இதற்கு URL parameters பயன்படுத்தலாம்.

### **Plans-க்கு:**

**Ultimate Multisite > Products > Select a plan** என்பதற்குச் செல்லவும். பக்கத்தின் மேலே **Click to copy Shareable Link** பொத்தானைக் காணலாம். இந்த குறிப்பிட்ட plan-ஐ உங்கள் checkout படிவத்தில் முன்தேர்வு செய்ய இந்த இணைப்பைப் பயன்படுத்தலாம்.

![Product page with shareable link button](/img/config/products-list.png)

இந்த shareable link **Plans**-க்கு மட்டுமே செல்லுபடியாகும் என்பதை நினைவில் கொள்ளுங்கள். packages அல்லது services-க்கு shareable links பயன்படுத்த முடியாது.

### Templates-க்கு:

உங்கள் checkout படிவத்தில் site templates-ஐ முன்தேர்வு செய்ய விரும்பினால், உங்கள் பதிவு பக்க URL-ல் **?template_id=X** parameter பயன்படுத்தலாம். "X"-ஐ **site template ID எண்**ணால் மாற்ற வேண்டும். இந்த எண்ணைப் பெற, **Ultimate Multisite > Sites**-க்குச் செல்லவும்.

நீங்கள் பயன்படுத்த விரும்பும் site template-க்குக் கீழே உள்ள **Manage**-ஐ கிளிக் செய்யவும். SITE ID எண்ணைக் காணலாம். இந்த குறிப்பிட்ட site template உங்கள் checkout படிவத்தில் முன்தேர்வு செய்யப்பட இந்த எண்ணைப் பயன்படுத்தவும். எங்கள் விஷயத்தில், URL parameter **?template_id=2** ஆக இருக்கும்.

![Sites list showing site template ID](/img/config/site-templates-list.png)

உதாரணமாக, எங்கள் நெட்வொர்க் இணையதளம் [**www.mynetwork.com**](http://www.mynetwork.com) என்றும், checkout படிவத்துடன் கூடிய எங்கள் பதிவு பக்கம் **/register** பக்கத்தில் உள்ளது என்றும் வைத்துக்கொள்வோம். இந்த site template முன்தேர்வு செய்யப்பட்ட முழு URL [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2** போல் இருக்கும்.

விரும்பினால், தயாரிப்புகள் மற்றும் templates இரண்டையும் உங்கள் checkout படிவத்தில் முன்தேர்வு செய்யலாம். Plan-ன் shareable link-ஐ நகலெடுத்து, இறுதியில் template parameter-ஐ ஒட்டினால் போதும். இது [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2** போல் இருக்கும்.
