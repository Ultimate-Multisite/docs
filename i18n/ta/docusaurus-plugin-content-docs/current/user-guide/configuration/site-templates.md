---
title: தள வார்ப்புருக்கள்
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# தளம் வார்ப்புருக்கள் (v2)

_**குறிப்பு: இந்தக் கட்டுரை Ultimate Multisite பதிப்பு 2.x ஐ குறிக்கிறது. நீங்கள் பதிப்பு 1.x பயன்படுத்துகிறீர்கள் என்றால்,**_ **இந்தக் கட்டுரையைப் பாருங்கள்** _**.**_

Ultimate Multisite மூலம் ஒரு premium நெட்வொர்க்கை உருவாக்கும்போது, எங்கள் வாடிக்கையாளர்களுக்கு வெவ்வேறு விருப்பத்தேர்வுகளை வழங்கும் அதே நேரத்தில் முடிந்தவரை பல செயல்முறைகளை தானியங்கியாக்குவதே எங்கள் குறிக்கோள். இந்த சமநிலையை எளிதாக அடைய Ultimate Multisite Site Templates அம்சத்தைப் பயன்படுத்தலாம்.

## Site Template என்றால் என்ன?

பெயர் குறிப்பிடுவது போல், Site Template என்பது உங்கள் நெட்வொர்க்கில் புதிய தளங்களை உருவாக்கும்போது அடிப்படையாகப் பயன்படுத்தக்கூடிய ஒரு முன்னுருவான தளம் ஆகும்.

அதாவது, நீங்கள் ஒரு அடிப்படை தளத்தை உருவாக்கி, பல்வேறு plugins-ஐ செயல்படுத்தி, ஒரு active theme அமைத்து, உங்கள் விருப்பப்படி தனிப்பயனாக்கலாம். பின்னர், உங்கள் வாடிக்கையாளர் ஒரு புதிய கணக்கை உருவாக்கும்போது, எந்த அர்த்தமுள்ள உள்ளடக்கமும் இல்லாத இயல்புநிலை WordPress தளத்திற்கு பதிலாக, அனைத்து தனிப்பயனாக்கங்களும் உள்ளடக்கங்களும் ஏற்கனவே இடம்பெற்ற உங்கள் அடிப்படை தளத்தின் நகலைப் பெறுவார்கள்.

இது அருமையாக இருக்கிறது, ஆனால் ஒரு புதிய site template-ஐ எப்படி உருவாக்குவது? இது மிகவும் எளிமையானது.

## புதிய Site Template உருவாக்குதல் மற்றும் திருத்துதல்

Site Templates என்பது உங்கள் நெட்வொர்க்கில் உள்ள சாதாரண தளங்கள் மட்டுமே. புதிய template உருவாக்க **Network Admin > Ultimate Multisite > Sites > Add Site** க்கு செல்லவும்.

**![Sites list பக்கத்தில் Add site பட்டன்](/img/config/site-templates-list.png)**

இது ஒரு modal window-ஐ திறக்கும், அங்கு **Site title, Site Domain/path,** மற்றும் **Site type** கேட்கப்படும். **Site Type** drop-down field-ல் **Site Template** ஐ தேர்ந்தெடுக்கவும்.

_![Site type dropdown உடன் Add site template modal](/img/config/site-templates-list.png)_

படிவத்தின் கீழே, **Copy Site** toggle switch இருப்பதை கவனிப்பீர்கள். இது புதிதாக ஒரு site template-ஐ உருவாக்காமல், ஏற்கனவே உள்ள site template-ஐ அடிப்படையாகக் கொண்டு புதிய site template உருவாக்க உதவும், இதனால் நேரம் மிச்சமாகும்.

![Copy site toggle உடன் Add site template modal](/img/config/site-templates-list.png)

### Site Template-ன் உள்ளடக்கங்களை தனிப்பயனாக்குதல்

உங்கள் site template-ஐ தனிப்பயனாக்க, அதன் dashboard panel-க்கு சென்று தேவையான மாற்றங்களைச் செய்யவும். புதிய posts, pages உருவாக்கலாம், plugins-ஐ செயல்படுத்தலாம், active theme மாற்றலாம். Customizer-க்கு சென்று அனைத்து வகையான தனிப்பயனாக்க விருப்பங்களையும் மாற்றலாம்.

ஒரு வாடிக்கையாளர் அந்த Site Template-ஐ அடிப்படையாகக் கொண்டு புதிய தளம் உருவாக்கும்போது இந்த தரவு அனைத்தும் நகலெடுக்கப்படும்.

### மேம்பட்ட விருப்பங்கள்

custom coding பற்றி உங்களுக்கு தெரிந்திருந்தால், புதிய தளம் உருவாக்கப்பட்ட பிறகு தானாகவே தகவல்களை மாற்றுவதற்கு எங்கள் Search and Replace API-ஐ பயன்படுத்தலாம். About பக்கத்தில் நிறுவனப் பெயர்களை மாற்றுவது, Contact பக்கத்தில் தொடர்பு email-ஐ மாற்றுவது போன்றவற்றுக்கு இது பயனுள்ளதாக இருக்கும்.

### Site Templates-ஐ பயன்படுத்துதல்

சரி, நீங்கள் வெவ்வேறு வடிவமைப்புகள், themes மற்றும் அமைப்புகளுடன் பல்வேறு Site Templates-ஐ உருவாக்கியுள்ளீர்கள். இப்போது அவற்றை உங்கள் நெட்வொர்க்கில் எப்படி பயனுள்ளதாக்குவது?

அடிப்படையில், இரண்டு அணுகுமுறைகளை இப்போது பயன்படுத்தலாம் (ஒரே நேரத்தில் இல்ல):

  * உங்கள் Plans ஒவ்வொன்றுக்கும் ஒரு Site Template இணைத்தல்

**அல்லது**

  * sign-up செய்யும்போது உங்கள் வாடிக்கையாளர்களே site templates-ஐ தேர்ந்தெடுக்க அனுமதித்தல்.

#### முறை 1: Site Template ஒதுக்குதல்

இந்த முறையில், உங்கள் வாடிக்கையாளர்கள் கணக்கை உருவாக்கும்போது template தேர்ந்தெடுக்க முடியாது, ஆனால் ஒவ்வொரு Plan-லும் எந்த template பயன்படுத்த வேண்டும் என்பதை நீங்கள் வரையறுப்பீர்கள்.

இதைச் செய்ய, **Ultimate Multisite > Products > Edit** க்கு செல்ல வேண்டும்.

![Site template ஒதுக்க Edit product](/img/config/product-site-templates.png)

இது **Edit Product** பக்கத்திற்கு அழைத்துச் செல்லும். **Product Options** பிரிவின் கீழ், **Site template** tab-ஐ கண்டுபிடித்து drop-down field-ல் இருந்து **Assign Site Template** விருப்பத்தை தேர்ந்தெடுக்கவும். இது கிடைக்கும் site templates-ன் பட்டியலைக் காண்பிக்கும், product-க்கு ஒரே ஒரு site template மட்டும் தேர்ந்தெடுக்க அனுமதிக்கும்.

![Assign site template விருப்பத்துடன் Product site template tab](/img/config/product-site-templates.png)

#### முறை 2: கிடைக்கும் Site Template தேர்ந்தெடுக்க அனுமதித்தல்

இந்த முறையில், sign-up செயல்முறையின் போது உங்கள் வாடிக்கையாளர்களுக்கு தேர்வு வழங்குவீர்கள். product settings-ல் நீங்கள் வரையறுக்கும் வெவ்வேறு site templates-ல் இருந்து அவர்கள் தேர்ந்தெடுக்க முடியும். தேர்ந்தெடுக்கப்பட்ட product-ன் கீழ் அவர்கள் தேர்ந்தெடுக்கக்கூடிய site template-ஐ கட்டுப்படுத்தும் விருப்பம் உங்களுக்கு உள்ளது. இது ஒவ்வொரு product-ன் கீழும் வெவ்வேறு site templates தொகுப்புகளை வைக்க அனுமதிக்கும், இது அதிக விலையுள்ள product-க்கு வெவ்வேறு செயல்பாடுகளையும் அம்சங்களையும் முன்னிலைப்படுத்த சிறந்தது.

**Edit Product** பக்கத்தில், **Product Options** பிரிவின் கீழ், **Site template** tab-ஐ கண்டுபிடித்து drop-down field-ல் இருந்து **Choose Available Site Template** விருப்பத்தை தேர்ந்தெடுக்கவும். இது கிடைக்கும் site templates-ன் பட்டியலைக் காண்பிக்கும், நீங்கள் கிடைக்கச் செய்ய விரும்பும் site template-ஐ தேர்ந்தெடுக்க அனுமதிக்கும். அதன் Behavior-ஐ தேர்ந்தெடுப்பதன் மூலம் இதைச் செய்யலாம்: site template பட்டியலில் சேர்க்கப்பட வேண்டுமெனில் **Available**. site template ஒரு விருப்பமாக காண்பிக்கப்படக்கூடாது எனில் _**Not Available**_. பட்டியலிடப்பட்ட site templates-ல் ஒன்று இயல்புநிலையாக தேர்ந்தெடுக்கப்பட வேண்டுமெனில் **Pre-selected**.

![Behavior விருப்பங்களுடன் Choose available site templates](/img/config/product-site-templates.png)

### இயல்புநிலை முறை: Checkout form-ல் Site template தேர்வு

பதிவின் போது உங்கள் அனைத்து site templates-ம் கிடைக்க வேண்டுமெனில், அல்லது ஒவ்வொரு product-ன் கீழும் site templates-ஐ ஒதுக்கும் அல்லது குறிப்பிடும் கூடுதல் வேலையை விரும்பவில்லை எனில், உங்கள் **Checkout Form**-ல் site template தேர்வை அமைக்கலாம். இதைச் செய்ய, **Ultimate Multisite > Checkout Forms** க்கு செல்லவும். பின்னர் நீங்கள் configure செய்ய விரும்பும் form-ன் கீழ் **Edit** கிளிக் செய்யவும்.

![Checkout forms list பக்கம்](/img/config/checkout-forms-list.png)

இது **Edit Checkout Form** பக்கத்தைக் கொண்டு வரும். **Template Selection** field-ஐ கண்டுபிடித்து அதன் கீழ் **Edit** கிளிக் செய்யவும்.

![Template selection field உடன் Checkout form editor](/img/config/checkout-form-editor.png)

ஒரு modal window தோன்றும். **Template Sites** field-ன் கீழ் பதிவின் போது கிடைக்க வேண்டிய அனைத்து site templates-ஐயும் தேர்ந்தெடுத்து பட்டியலிடலாம். பயனர் எந்த product-ஐ தேர்ந்தெடுத்தாலும் இங்கிருந்து நீங்கள் குறிப்பிடும் site templates கிடைக்கும்.

![Checkout form editor-ல் Template sites field](/img/config/checkout-form-step.png)

### Site Template விருப்பங்கள்

Ultimate Multisite settings-ன் கீழ் இயக்க அல்லது நிறுத்த முடிந்த பிற site templates செயல்பாடுகள் உள்ளன.

![Ultimate Multisite settings-ல் Site template விருப்பங்கள்](/img/config/settings-sites.png)

#### Template மாறுதலை அனுமதி

இந்த விருப்பத்தை இயக்குவது, கணக்கும் தளமும் உருவாக்கப்பட்ட பிறகு sign-up செயல்முறையின் போது தேர்ந்தெடுத்த template-ஐ உங்கள் வாடிக்கையாளர்கள் மாற்ற அனுமதிக்கும். வாடிக்கையாளர் கண்ணோட்டத்தில் இது பயனுள்ளது, ஏனெனில் அவர்களின் அசல் தேர்வு அவர்களின் குறிப்பிட்ட தேவைகளுக்கு சிறந்ததல்ல என்று பின்னர் கண்டறிந்தால் template-ஐ மீண்டும் தேர்ந்தெடுக்க அனுமதிக்கிறது.

#### பயனர்கள் தங்கள் தளத்தை templates-ஆக பயன்படுத்த அனுமதி

subsite பயனர்கள் தங்கள் சொந்த தளத்தை உருவாக்கி வடிவமைக்க நேரம் செலவிட்டதால், உங்கள் நெட்வொர்க்கில் மற்றொரு subsite உருவாக்கும்போது அதை clone செய்து site templates-ல் ஒன்றாக பயன்படுத்த விரும்பலாம். இந்த விருப்பம் அதை அடைய அனுமதிக்கும்.

#### Template நகலெடுக்கும்போது Media நகலெடு

இந்த விருப்பத்தை சரிபார்ப்பது template site-ல் upload செய்யப்பட்ட media-வை புதிதாக உருவாக்கப்பட்ட தளத்திற்கு நகலெடுக்கும். இது ஒவ்வொரு plan-லும் மேலெழுதப்படலாம்.

#### **தேடு இயந்திரங்கள் Site Templates-ஐ index செய்வதைத் தடு**

இந்தக் கட்டுரையில் விவாதிக்கப்பட்ட Site templates முன்னுருவானவை ஆனால் இன்னும் உங்கள் நெட்வொர்க்கின் ஒரு பகுதி, அதாவது தேடு இயந்திரங்கள் கண்டறிய இன்னும் கிடைக்கும். இந்த விருப்பம் site templates-ஐ மறைக்க அனுமதிக்கும், இதனால் தேடு இயந்திரங்கள் அவற்றை index செய்யாது.

## தானியங்கி search-and-replace மூலம் Site Templates-ஐ முன்-நிரப்புதல்

Ultimate Multisite-ன் மிகவும் சக்திவாய்ந்த அம்சங்களில் ஒன்று registration form-ல் தன்னிச்சையான text, color மற்றும் select fields-ஐ சேர்க்கும் திறன் ஆகும். அந்த தரவைப் பிடித்த பிறகு, தேர்ந்தெடுக்கப்பட்ட site template-ன் சில பகுதிகளில் உள்ளடக்கத்தை முன்-நிரப்ப பயன்படுத்தலாம். பின்னர், புதிய தளம் publish செய்யப்படும்போது, Ultimate Multisite placeholders-ஐ பதிவின் போது உள்ளிடப்பட்ட உண்மையான தகவல்களுடன் மாற்றும்.

உதாரணமாக, பதிவின் போது உங்கள் இறுதிப் பயனரின் நிறுவனப் பெயரைப் பெற்று தானாகவே home page-ல் நிறுவனப் பெயரை வைக்க விரும்பினால். உங்கள் template site home page-ல் கீழே உள்ள படத்தில் உள்ளது போல் placeholders-ஐ சேர்க்க வேண்டும் (placeholders இரட்டை சுருள் அடைப்புக்குறிகளால் சூழப்பட்டு சேர்க்கப்பட வேண்டும் - {{placeholder_name}}).

![Curly braces-ல் placeholder text உடன் Homepage](/img/config/site-templates-list.png)

பின்னர், அந்த தரவைப் பிடிக்க உங்கள் checkout form-ல் பொருந்தும் registration field-ஐ எளிதாக சேர்க்கலாம்:

![பொருந்தும் registration field உடன் Checkout form](/img/config/checkout-form-editor.png)

உங்கள் வாடிக்கையாளர் பதிவின் போது அந்த field-ஐ நிரப்ப முடியும்.

![வாடிக்கையாளரால் நிரப்பப்பட்ட Registration field](/img/config/checkout-form-step.png)

![Registration form-ன் Preview](/img/config/checkout-form-editor.png)

Ultimate Multisite பின்னர் placeholders-ஐ வாடிக்கையாளர் வழங்கிய தரவுடன் தானாகவே மாற்றும்.

![தளத்தில் வாடிக்கையாளர் தரவுடன் மாற்றப்பட்ட Placeholders](/img/config/site-templates-list.png)

### "placeholders நிரம்பிய template" பிரச்சனையை தீர்த்தல்

இவை அனைத்தும் அருமை, ஆனால் ஒரு அசிங்கமான பிரச்சனையை எதிர்கொள்கிறோம்: இப்போது எங்கள் site templates - உங்கள் வாடிக்கையாளர்கள் பார்வையிடக்கூடியவை - அதிகம் சொல்லாத அசிங்கமான placeholders-ஆல் நிரம்பியுள்ளன.

இதைத் தீர்க்க, placeholders-க்கு போலியான மதிப்புகளை அமைக்கும் விருப்பத்தை வழங்குகிறோம், உங்கள் வாடிக்கையாளர்கள் பார்வையிடும்போது template sites-ல் அவற்றின் உள்ளடக்கங்களை search and replace செய்ய அந்த மதிப்புகளைப் பயன்படுத்துகிறோம்.

**Ultimate Multisite > Settings > Sites** க்கு சென்று, பின்னர், sidebar-ல் **Edit Placeholders** link-ஐ கிளிக் செய்வதன் மூலம் template placeholders editor-ஐ அணுகலாம்.

![Sites settings பக்கத்தின் கீழ் Placeholder settings](/img/config/settings-sites.png)

இது placeholders content editor-க்கு அழைத்துச் செல்லும், அங்கு placeholders மற்றும் அவற்றின் respective content-ஐ சேர்க்கலாம்.

![Template placeholders content editor](/img/config/settings-sites.png)
