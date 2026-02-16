---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite என்பது ஒரு WordPress Multisite plugin ஆகும், இது உங்கள் வாடிக்கையாளர்களுக்கு WaaS அல்லது Websites as a Service வழங்க உதவுகிறது. Ultimate Multisite உங்கள் வணிகத்திற்கும் வாடிக்கையாளர்களுக்கும் எவ்வாறு உதவும் என்பதை ஆராய்வதற்கு முன், சில அடிப்படை அறிவைப் பெற வேண்டும்.

## WordPress Multisite

நம்மில் பெரும்பாலோருக்கு சாதாரண WordPress நிறுவல் பற்றி தெரியும். உங்கள் hosting வழங்குநரின் control panel மூலம் அதை உருவாக்கலாம் அல்லது, தைரியமானவர்கள், புதிய web server மற்றும் database அமைத்து, core files பதிவிறக்கி நிறுவல் செயல்முறையைத் தொடங்கலாம்.

இது உலகெங்கிலும் உள்ள மில்லியன் கணக்கான WordPress தளங்களுக்கு வேலை செய்கிறது, ஆனால் ஒரு agency அல்லது hosting வழங்குநரின் பார்வையில் அளவுகளைப் பற்றி சிறிது பேசுவோம்.

ஒரு WordPress தளத்தை உருவாக்குவது எளிது, automated control panel மூலம் நூறு தளங்களைக் கூட உருவாக்கலாம். ஆனால் இந்த தளங்களை நிர்வகிக்கும்போது சிக்கல்கள் தோன்றும். நிர்வகிக்கப்படாத தளங்கள் malware தாக்குதலுக்கு எளிதான இலக்காகும். நிர்வகிக்க முயற்சி மற்றும் வளங்கள் தேவை. WordPress தளங்களின் நிர்வாகத்தை எளிதாக்க வெளிப்புற கருவிகள் மற்றும் plugins இருந்தாலும், வாடிக்கையாளர்கள் நிர்வாக அணுகலைத் தக்க வைத்திருப்பதால் இந்த முயற்சிகள் எளிதில் தோல்வியடையலாம்.

WordPress-ன் core-ல், 'Multisite' என்ற அம்சம் உள்ளது, இது 2010-ல் WordPress 3.0 வெளியீட்டின் போது அறிமுகப்படுத்தப்பட்டது. அப்போதிருந்து புதிய அம்சங்களை அறிமுகப்படுத்தவும் பாதுகாப்பை வலுப்படுத்தவும் பல திருத்தங்கள் செய்யப்பட்டுள்ளன.

சுருக்கமாக, WordPress multisite-ஐ இவ்வாறு புரிந்துகொள்ளலாம்: ஒரு பல்கலைக்கழகம் ஒரே WordPress நிறுவலை பராமரிக்கிறது, ஆனால் ஒவ்வொரு faculty-யும் தங்கள் சொந்த WordPress தளத்தை பராமரிக்கிறது.

இந்த கூற்றை விளக்க, Ultimate Multisite-ன் ஆவணங்களிலும் WordPress சமூகத்திலும் உள்ள சில அடிப்படை சொற்களைப் பார்ப்போம்.

### Network

WordPress அடிப்படையில், multisite network என்பது பல subsites-ஐ ஒரே dashboard-ல் இருந்து நிர்வகிக்கக்கூடிய இடம். hosting வழங்குநர்களுக்கு இடையே multisite network உருவாக்குவது வேறுபட்டாலும், இறுதி முடிவு பொதுவாக wp-config.php file-ல் சில கூடுதல் directives சேர்த்து WordPress இந்த குறிப்பிட்ட mode-ல் இயங்குவதை அறியச் செய்வதாகும்.

multisite network-க்கும் தனித்த WordPress நிறுவலுக்கும் இடையே பல தெளிவான வேறுபாடுகள் உள்ளன, அவற்றைச் சுருக்கமாக விவாதிப்போம்.

#### Subdomain vs. Subdirectory

நீங்கள் உடனடியாக எடுக்க வேண்டிய முடிவுகளில் ஒன்று, multisite நிறுவல் _subdirectories_ அல்லது _subdomains_ உடன் இயங்குமா என்பது. Ultimate Multisite இரண்டு தேர்வுகளுடனும் சமமாக நன்றாக வேலை செய்கிறது, ஆனால் இரண்டு configurations-க்கும் இடையே சில கட்டமைப்பு வேறுபாடுகள் உள்ளன.

_subdirectory_ configuration-ல், network sites முக்கிய domain name-ஐ அடிப்படையாகக் கொண்ட path-ஐப் பெறுகின்றன. எடுத்துக்காட்டாக 'site1' என்று பெயரிடப்பட்ட network site-ன் முழு URL https://domain.com/site1 ஆக இருக்கும். _subdomain_ configuration-ல், network site-க்கு முக்கிய domain name-லிருந்து பெறப்பட்ட சொந்த _subdomain_ இருக்கும். எனவே 'site1' என்று பெயரிடப்பட்ட site-ன் முழு URL https://site1.domain.com/ ஆக இருக்கும்.

இரண்டு விருப்பங்களும் முற்றிலும் சரியான தேர்வுகள் என்றாலும், _subdomains_ பயன்படுத்துவது சில நன்மைகளை வழங்குகிறது, ஆனால் அதன் கட்டமைப்பில் அதிக சிந்தனை மற்றும் திட்டமிடல் தேவை.

DNS அடிப்படையில் _subdirectories_ பயன்படுத்துவது ஒப்பீட்டளவில் எளிமையான சவால். network sites parent path-ன் children மட்டுமே என்பதால், முக்கிய domain name-க்கு ஒரே domain name entry மட்டுமே தேவை. _subdomains_-க்கு சவால் சற்று சிக்கலானது, ஒவ்வொரு network site-க்கும் தனி CNAME entry அல்லது DNS records-ல் wildcard (*) entry தேவை.

மேலும் கருத்தில் கொள்ள வேண்டிய பகுதி SSL மற்றும் SSL certificates வழங்குதல் மற்றும் பயன்படுத்துதல். _subdirectory_ configuration-ல், network sites முக்கிய domain name-ன் paths மட்டுமே என்பதால் ஒரே domain certificate பயன்படுத்தலாம். எனவே domain.com-க்கான certificate https://domain.com/site1, https://domain.com/site2 மற்றும் பலவற்றிற்கு SSL-ஐ போதுமான அளவு வழங்கும்.

_subdomain_ configuration-ல் wildcard SSL certificate பயன்படுத்துவது மிகவும் பொதுவான விருப்பங்களில் ஒன்று. இந்த வகை SSL certificate ஒரு domain மற்றும் அதன் _subdomains_-க்கு encryption வழங்குகிறது. எனவே wildcard SSL certificate https://site1.domain.com, https://site2.domain.com மற்றும் https://domain.com-க்கும் encryption வழங்கும்.

மற்ற விருப்பங்கள் இருந்தாலும், அவை பெரும்பாலும் scope மற்றும் application-ல் வரையறுக்கப்பட்டவை, பொருத்தம் தொடர்பாக கூடுதல் configuration மற்றும் பரிசீலனை தேவை.

#### Plugins மற்றும் Themes

WordPress தருவதை எடுத்துக்கொள்ளும், குறைந்தபட்சம் வாடிக்கையாளர் பார்வையில். தனித்த WordPress நிறுவலில் site administrator ஒரு மோசமான plugin நிறுவினால் அல்லது நிறுவலைப் புதுப்பிக்கத் தவறினால், இந்த செயலின் பாதிக்கப்படுபவர் அவர்கள் மட்டுமே. இருப்பினும், multisite நிறுவலில் site administrator ஒரு மோசமான plugin நிறுவினால், network-ல் உள்ள ஒவ்வொரு site-ம் பாதிக்கப்படும்.

இந்த காரணத்திற்காக multisite-ஆக configure செய்யப்படும்போது WordPress site administrators-லிருந்து plugins மற்றும் themes நிறுவும் திறனை நீக்கி, இந்த திறனை புதிதாக உருவாக்கப்பட்ட network administrator அல்லது 'super admin' role-க்கு மாற்றுகிறது. இந்த சிறப்புரிமை பெற்ற role, network sites-ன் administrators தங்கள் dashboard-ல் plugins menu-ஐப் பார்க்க அல்லது அணுக அனுமதிக்கலாமா என்பதையும், அப்படியானால், அத்தகைய அனுமதிகள் plugins-ஐ _activating_ அல்லது _deactivating_ செய்வதற்கு நீட்டிக்கப்படுமா என்பதையும் முடிவு செய்யலாம்.

இந்த அளவிற்கு network administrator plugins மற்றும் themes-ஐ network-ல் நிறுவுவதற்கும், இந்த plugins மற்றும் themes-ஐப் பயன்படுத்த network sites-க்கு அனுமதிகளை delegate செய்வதற்கும் பொறுப்பு. Site administrators plugins மற்றும் themes நிறுவ முடியாது அல்லது தங்கள் site-க்கு assign செய்யப்படாத plugins மற்றும் themes-ஐ அணுக முடியாது.

#### Users மற்றும் Administrators

WordPress Multisite-ல், அனைத்து network sites-ம் ஒரே database-ஐ பகிர்ந்துகொள்வதால், ஒரே users, roles மற்றும் capabilities-ஐப் பகிர்ந்துகொள்கின்றன. இதை புரிந்துகொள்ள சரியான வழி என்னவென்றால், அனைத்து users-ம் ஒரு குறிப்பிட்ட site-க்கு அல்ல, network-க்கு உறுப்பினர்கள்.

இந்த புரிதலின் அடிப்படையில் users-ஐ உருவாக்க அனுமதிப்பது விரும்பத்தகாததாக இருக்கலாம், இந்த காரணத்திற்காக WordPress Multisite இந்த திறனை site administrators-லிருந்து நீக்கி network administrator-க்கு மாற்றுகிறது. network administrator தேவையான சிறப்புரிமைகளை site administrator-க்கு delegate செய்து தங்கள் சொந்த site-க்கு user accounts உருவாக்க அனுமதிக்கலாம்.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

மேலே கூறியதை மீண்டும் வலியுறுத்த, user accounts site-உடன் தொடர்புடையதாகத் தோன்றினாலும், உண்மையில் அவை network-க்கு ஒதுக்கப்பட்டுள்ளன, எனவே network முழுவதும் unique ஆக இருக்க வேண்டும். இந்த காரணத்தால் usernames பதிவு செய்ய கிடைக்காத நிகழ்வுகள் இருக்கலாம்.

enterprise systems-ல் இது அந்நிய கருத்து இல்லை என்றாலும், user registration மற்றும் authentication-ன் இந்த single source, user administration ஓரளவு எளிதான தனித்த WordPress நிறுவல்களுடன் பரிச்சயமானவர்களுக்கு புரிந்துகொள்ள கடினமான கருத்தாக இருக்கும்.

#### Media

WordPress Multisite-ல் network sites ஒரே database-ஐப் பகிர்ந்துகொள்ளும் இடத்தில், media files-க்கான filesystem-ல் தனி paths-ஐப் பராமரிக்கின்றன.

நிலையான WordPress location (wp-content/uploads) இருக்கும்; இருப்பினும், network site-ன் unique ID-ஐப் பிரதிபலிக்க அதன் path மாற்றப்படுகிறது. இதன் விளைவாக network site-க்கான media files wp-contents/uploads/site/[id] என்று தோன்றும்.

#### Permalinks

_subdomain_ configuration-ன் _subdirectory_ configuration-ஐ விட தனித்துவமான நன்மைகள் இருப்பதாக முன்பு குறிப்பிட்டோம், அது இங்கே: paths.

_subdirectory_ configuration-ல், முக்கிய site (network நிறுவப்படும்போது உருவாக்கப்பட்ட முதல் site) மற்றும் network subsites domain name-லிருந்து வரும் ஒரே path-ஐப் பகிர்ந்துகொள்ள வேண்டும். இது பல மோதல்களுக்கு வாய்ப்பளிக்கிறது.

posts-க்கு, network sites-உடன் மோதல்களைத் தடுக்க முக்கிய site-க்கு கட்டாய /blog/ path சேர்க்கப்படுகிறது. இதன் பொருள் 'Post name' போன்ற pretty permalinks domain.name/blog/post-name/ என்று காட்டப்படும்

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_subdomain_ configuration-ல் இந்த செயல் தேவையில்லை, ஏனெனில் ஒவ்வொரு network site-ம் முழுமையான domain separation-ன் பயனைப் பெறுகிறது, எனவே ஒரே path-ஐச் சார்ந்திருக்க வேண்டியதில்லை. அவை தங்கள் _subdomain_-ஐ அடிப்படையாகக் கொண்ட தனித்துவமான paths-ஐப் பராமரிக்கின்றன.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

_subdirectory_ configuration-ல் முக்கிய site மற்றும் network sites ஒரே path-ஐப் பகிர்வதால், naming conflicts-ன் சாத்தியம் static pages-க்கும் நீட்டிக்கப்படுகிறது.

இதைத் தடுக்க, WordPress சில site names-ஐ blacklist செய்ய ஒரு வழியை வழங்குகிறது, அதனால் அவை முதல் site-ன் names-உடன் மோதாது. பொதுவாக network administrator முக்கிய site-ன் pages-ன் root paths-ஐ உள்ளிடுவார்.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_subdomain_ configuration-ல் naming conflicts-ன் சாத்தியம் _subdomain_ மூலம் குறைக்கப்படுகிறது, ஏனெனில் அது network site-க்கு unique ஆனது மற்றும் முக்கிய site-உடன் எந்த வகையிலும் தொடர்பில்லை.

### Registration

WordPress Multisite-ன் network settings-ல் பல புதிய user registration விருப்பங்கள் கிடைக்கின்றன, புதிய மற்றும் ஏற்கனவே உள்ள users-க்கு sites உருவாக்க அனுமதிக்கிறது.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

தனித்த WordPress நிறுவல்களுக்கு மாறாக, network sites user registrations-ஐ அனுமதிக்க அல்லது அந்த registrations-ஐ roles-க்கு assign செய்ய பரிச்சயமான விருப்பங்களைப் பராமரிப்பதில்லை.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

user accounts உருவாக்கப்படும்போது அந்த accounts network level-ல் உருவாக்கப்படுகின்றன. எனவே ஒரு குறிப்பிட்ட site-க்கு சொந்தமாக இல்லாமல் network-க்கு சொந்தமாகும். இதற்கு சில தனித்துவமான நன்மைகளும் தீமைகளும் உள்ளன.

எடுத்துக்காட்டாக, உங்கள் WordPress Multisite செய்திகள் மற்றும் தகவல் வணிகத்தில் இருப்பதாக வைத்துக்கொள்வோம். நீங்கள் multisite-ஐ நிறுவி, plugins மற்றும் themes மீது ஒட்டுமொத்த கட்டுப்பாட்டை பராமரிக்கும் அதே வேளையில் finance, technology, entertainment மற்றும் பிற ஆர்வமுள்ள பகுதிகளுக்கு network sites உருவாக்குவீர்கள். ஒவ்வொரு network site-ம் custom post types அல்லது regular post categories-ஐ விட தங்கள் network site-ன் தோற்றம் மற்றும் உணர்வு மற்றும் user experience மீது அதிக கட்டுப்பாட்டைப் பெறும்.

இந்த அளவிற்கு ஒரு user login செய்யும்போது அவர்கள் network-க்கு login செய்கிறார்கள், இறுதியில் ஒரு seamless experience வழங்க ஒவ்வொரு network site-க்கும் login ஆகிறார்கள். உங்கள் புதிய site subscription அடிப்படையிலானதாக இருந்தால், இது சிறந்த தீர்வு மற்றும் விளைவாக இருக்கும்.

இருப்பினும், multisite-ன் நோக்கம் மற்றும் நோக்கம் ஒருவருக்கொருவர் எந்த தொடர்பும் இல்லாத வேறுபட்ட network sites வழங்குவதாக இருந்தால், user roles-ஐ manipulate செய்ய வெளிப்புற அல்லது கூடுதல் plugins தேவைப்படுவது கிட்டத்தட்ட எப்போதும் நடக்கும்.

### Domain மற்றும் SSL

நம் கவனத்தை கிட்டத்தட்ட தவறவிடும் ஒரு WordPress Multisite நிறுவலைப் பற்றி பேசுவோம் - WordPress.com. இது ஒரு WordPress multisite-ன் மிகவும் விரிவான எடுத்துக்காட்டு மற்றும் ஒரு நோக்கத்தை நிறைவேற்ற customize செய்து மாற்றியமைக்கும் விரிவான திறன்களை நிரூபிக்கிறது.

இந்த நாட்களில் நவீன internet-ல் SSL பயன்படுத்துவது கிட்டத்தட்ட கட்டாயமாகிவிட்டது, WordPress multisites-ன் network administrators விரைவில் இந்த சவால்களை எதிர்கொள்கிறார்கள்.

_subdomain_ configuration-ல் sites root domain name-ஐ அடிப்படையாகக் கொண்டு உருவாக்கப்படுகின்றன. எனவே 'site1' என்று பெயரிடப்பட்ட site 'site1.domain.com' என்று உருவாக்கப்படும். wildcard SSL certificate பயன்படுத்தி, network administrator இந்த சவாலை வெற்றிகரமாக எதிர்கொண்டு network-க்கு SSL encryption திறன்களை வழங்கலாம்.

WordPress Multisite ஒரு domain mapping function கொண்டுள்ளது, இது network sites-ஐ custom domain names அல்லது network-ன் root domain-லிருந்து வேறுபட்ட domain names-உடன் இணைக்க அனுமதிக்கிறது.

network administrators-க்கு இது domain name configuration மற்றும் SSL certificates வழங்குதல் மற்றும் பராமரிப்பு இரண்டிலும் கூடுதல் சிக்கலான அடுக்கை வழங்குகிறது.

இந்த அளவிற்கு WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com)-ஐ 'site1'-க்கு map செய்ய ஒரு வழி வழங்கினாலும், network administrator DNS entries-ஐ வெளிப்புறமாக நிர்வகிப்பது மற்றும் SSL certificates செயல்படுத்துவது என்ற சவாலை எதிர்கொள்ள வேண்டும்.

## Ultimate Multisite

தனித்த WordPress நிறுவலுக்கும் Multisite நிறுவலுக்கும் இடையேயான வேறுபாடுகளைப் புரிந்துகொண்ட பிறகு, Websites as a Service வழங்குவதற்கான ultimate arsenal ஆக Ultimate Multisite எவ்வாறு இருக்கிறது என்று பார்ப்போம்.

### அறிமுகம்

Website as a Service (WaaS) உருவாக்குவதற்கு Ultimate Multisite உங்கள் Swiss Army knife. Wix.com, Squarespace, WordPress.com பற்றி நினைத்துப் பாருங்கள், பிறகு உங்கள் சொந்த சேவையை வைத்திருப்பதை நினைத்துப் பாருங்கள்.

Ultimate Multisite உள்ளே WordPress Multisite-ஐப் பயன்படுத்துகிறது, ஆனால் network administrators multisite நிறுவல்களில் எதிர்கொள்ளும் எண்ணற்ற சவால்களைத் தீர்ப்பது மட்டுமல்லாமல், பலவிதமான use cases-ஐ ஆதரிக்க திறன்களை மேம்படுத்தும் வகையில் செய்கிறது.

பின்வரும் பிரிவுகளில் சில பொதுவான use cases மற்றும் அந்த cases-ஐ ஆதரிக்க தேவையான பரிசீலனைகளைப் பார்ப்போம்.

### Use Cases

#### Case 1: ஒரு Agency

பொதுவாக ஒரு agency-ன் core skills websites வடிவமைப்பில் உள்ளது, hosting அல்லது marketing போன்ற அம்சங்கள் கூடுதல் சேவைகளாக பட்டியலிடப்படுகின்றன.

agencies-க்கு Ultimate Multisite ஒரு தனித்த platform-ல் பல websites-ஐ host செய்து நிர்வகிக்கும் திறன்களில் ஒரு நம்பமுடியாத value proposition வழங்குகிறது. GeneratePress, Astra, OceanWP அல்லது பிறவற்றில் தங்கள் designs-ஐ standardize செய்யும் agencies-க்கு இன்னும் அதிகம், ஒவ்வொரு புதிய site-க்கும் இந்த themes-ஐ தானாக activate செய்யும் Ultimate Multisite-ன் திறன்களை leverage செய்யலாம்.

இதேபோல் பொதுவான மற்றும் popular plugins-க்கான agency pricing deals மிகுதியுடன், Ultimate Multisite பயன்படுத்துவது plugins நிறுவி, பராமரித்து, பயன்படுத்தக்கூடிய ஒரு common platform வழங்குவதன் மூலம் agencies ஏற்கனவே உள்ள முதலீடுகளை leverage செய்ய அனுமதிக்கிறது.

பெரும்பாலும் ஒரு configuration-ன் பயன்பாடு விரும்பப்படும், அதிர்ஷ்டவசமாக Ultimate Multisite பல popular hosting providers மற்றும் Cloudflare மற்றும் cPanel போன்ற சேவைகளுடன் அதன் integrations மூலம் domain mapping மற்றும் SSL certificates எளிதாக்குகிறது.

எனவே இந்த providers-ல் ஒன்றை leverage செய்வதன் மூலம் அல்லது Ultimate Multisite-ஐ Cloudflare-க்குப் பின்னால் வைப்பதன் மூலம் domains மற்றும் SSL certificates நிர்வாகம் போன்ற அம்சங்கள் ஓரளவு எளிமையாகின்றன.

sites உருவாக்குவதில் இறுக்கமான கட்டுப்பாட்டை வைத்திருக்க விரும்பும் Agencies Ultimate Multisite-ன் streamlined interface மூலம் sites உருவாக்கி customers மற்றும் plans-உடன் sites இணைக்கும் எளிமையை பாராட்டுவார்கள்.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

plugins மற்றும் themes மீது இறுக்கமான கட்டுப்பாடு Ultimate Multisite-ன் intuitive interfaces மூலம் per-product அடிப்படையில் பராமரிக்கப்படுகிறது, plugins மற்றும் themes-ஐ கிடைக்கச் செய்ய அல்லது மறைக்க மற்றும் ஒரு புதிய site-க்கு instantiate செய்யப்படும்போது அவற்றின் activation state அனுமதிக்கிறது.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes இதேபோன்ற functionality வழங்குகிறது, site creation-ல் குறிப்பிட்ட themes activate செய்ய அல்லது மறைக்க அனுமதிக்கிறது.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies Ultimate Multisite உடன் அமைதியான மனநிலையைக் கண்டுபிடிப்பார்கள், அவர்கள் சிறப்பாக செய்வதை செய்ய அனுமதிக்கிறது - அசாதாரண web sites வடிவமைப்பது.

#### Case 2: Niche Provider

ஒரு பழைய சொல் உள்ளது, "ஒன்றை செய் அதை நன்றாக செய்". பல specialists-க்கு இதன் பொருள் ஒரு core idea-ஐ சுற்றி ஒரு product அல்லது service உருவாக்குவது.

நீங்கள் clubs-க்கு websites promote செய்யும் ஒரு ஆர்வமுள்ள golfer ஆக இருக்கலாம் அல்லது clans-க்கு websites வழங்கும் ஒரு ஆர்வமுள்ள esports gamer ஆக இருக்கலாம். restaurants-க்கு booking service promote செய்யும் ஒரு நபர் ஒருவேளை?

பல காரணங்களுக்காக நீங்கள் ஒரு common framework மற்றும் platform-ஐ அடிப்படையாகக் கொண்ட services வழங்க விரும்புவீர்கள். தேவையான functionality வழங்க bespoke plugins வடிவமைத்திருக்கலாம் அல்லது முதலீடு செய்திருக்கலாம் அல்லது industry best practices வடிவமைப்பில் ஒரு வகையான standardized அணுகுமுறை தேவைப்படலாம்.

Ultimate Multisite-ன் innovative features-ல் ஒன்று template sites பயன்படுத்துவது. template site என்பது theme நிறுவப்பட்டு activate செய்யப்பட்ட, தேவையான plugins நிறுவப்பட்டு activate செய்யப்பட்ட, sample posts அல்லது pages உருவாக்கப்பட்ட ஒன்று. ஒரு customer template-ஐ அடிப்படையாகக் கொண்ட புதிய site உருவாக்கும்போது, template-ன் contents மற்றும் settings புதிதாக உருவாக்கப்பட்ட site-க்கு copy செய்யப்படும்.

niche sites மற்றும் services வழங்குபவர்களுக்கு இது custom plugins மற்றும் design-உடன் ready to go site உடனடியாக உருவாக்கும் திறனில் ஒப்பற்ற நன்மையை வழங்குகிறது. customer service-ஐ முடிக்க மிகக் குறைந்த input மட்டுமே வழங்க வேண்டும்.

தேவைகளைப் பொறுத்து _subdirectory_ அல்லது _subdomain_ configurations பொருத்தமாக இருக்கலாம், இந்த வழக்கில் architecture choices _subdirectories_-க்கு ஒரு எளிய SSL certificate அல்லது _subdomains_-க்கு wildcard SSL certificate இடையே இருக்கும்.

#### Case 3: WordPress Web Hosting

WordPress sites host செய்ய பல வழிகள் உள்ளன, ஆனால் pre-installed WordPress version-உடன் customer-க்கு web space வழங்குவது போல் எளிதாக இருப்பது அரிது. ஏனெனில் ஒரு meaningful service வழங்க பல முடிவுகள் மற்றும் பரிசீலனைகள் ஒன்றிணைய வேண்டும்.

Ultimate Multisite WordPress sites hosting-க்கான comprehensive turnkey solution வழங்குவதன் மூலம் இந்த பகுதியில் சிறந்து விளங்குகிறது. solution-ல் subscription services, payment collection, checkout forms, discount vouchers மற்றும் customer communications வழங்குவதற்கான core mechanisms அடங்கும்.

WordPress Multisite-ஐ சரியாக install, configure மற்றும் maintain செய்ய தேவையான integral work-ல் பெரும்பகுதி Ultimate Multisite மூலம் எளிதாக்கப்படுகிறது, network administrators தங்கள் service அல்லது niche-க்கு தொடர்புடைய product tiers, pricing மற்றும் service offers போன்ற அம்சங்களை மட்டுமே கருத்தில் கொள்ள வேண்டும்.

Ultimate Multisite-உடன் integrate செய்ய விரும்பும் developers-க்கு, solution ஒரு comprehensive RESTful API மற்றும் event notification-க்கான Webhooks-ஐயும் வழங்குகிறது.

பல external plugins மற்றும் licenses-ஐச் சார்ந்திருக்காமல், Ultimate Multisite Wix, Squarespace, WordPress.com மற்றும் பிறவற்றுக்கு ஒப்பான feature rich மற்றும் comparable solution வழங்குகிறது.

### Architecture பரிசீலனைகள்

இது ஒரு comprehensive guide இல்லை என்றாலும், பின்வரும் items Ultimate Multisite installation-ஐ ஆதரிக்க technologies-ன் சரியான தேர்வுக்கு வழிகாட்டுதலாக செயல்பட வேண்டும்.

#### Shared vs. Dedicated Hosting

துரதிர்ஷ்டவசமாக அனைத்து hosting providers-ம் சமமானவை அல்ல, சிலர் extreme server densities-ஐ கடைப்பிடிக்கின்றனர். Low-cost providers பொதுவாக server density-ஐ அதிகரிப்பதன் மூலம் வருவாயை உருவாக்குகின்றனர். எனவே உங்கள் Ultimate Multisite installation ஒரே server-ல் உள்ள பல நூறு sites-ல் ஒன்றாக மட்டுமே இருக்கலாம்.

provider-லிருந்து appropriate safeguards இல்லாமல், shared server-ல் உள்ள sites 'noisy neighbour' problem-ஐ அனுபவிக்கின்றன. அதாவது, ஒரே server-ல் உள்ள ஒரு site அதிக resources-ஐ consume செய்வதால் மற்ற sites மீதமுள்ள resources-க்காக போட்டியிட வேண்டும். இது அடிக்கடி slow ஆக இருக்கும் அல்லது சரியான நேரத்தில் respond செய்யத் தவறும் sites-ஆகத் தோன்றும்.

நீங்களே web hosting provider ஆக இருப்பதால், flow on effects உங்கள் customers poor speeds, low page rank மற்றும் high bounce rates-ஐ அனுபவிப்பதாகும், இது அடிக்கடி வேறு இடங்களில் services-ஐத் தேடும் customer churn-க்கு வழிவகுக்கும்.

சுருக்கமாக, cheap என்றால் good அல்ல.

Ultimate Multisite பல நல்ல hosting providers-உடன் வேலை செய்வதாக அறியப்படுகிறது மற்றும் domain mapping மற்றும் automatic SSL போன்ற functions வழங்க அவற்றின் environment-உடன் நன்றாக integrates செய்கிறது. இந்த providers performance-ஐ மதிக்கின்றனர் மற்றும் shared hosting-ஐ விட higher grade service வழங்குகின்றனர்.

compatible providers-ன் பட்டியல் மற்றும் ஒவ்வொன்றிற்கும் complete set-up instructions-க்கு Compatible Providers documentation-ஐ பார்க்கவும்.

#### Performance பரிசீலனைகள்

Ultimate Multisite ஒரு slow application அல்ல, மாறாக, இது remarkably fast. இருப்பினும், underlying application மற்றும் infrastructure-ஐப் போலவே மட்டுமே perform செய்கிறது, அணுகக்கூடியவற்றை மட்டுமே leverage செய்ய முடியும்.

இதைக் கருதுங்கள்: நீங்கள் 100 sites கொண்ட Ultimate Multisite installation-ன் network administrator. அந்த sites-ல் சில நன்றாக செயல்படுகின்றன மற்றும் ஒவ்வொரு நாளும் பல website visitors-ஐ ஈர்க்கின்றன.

இந்த scenario ஒன்று முதல் ஐந்து sites-ன் சிறிய அளவில் வேறுபட்டதாக இருக்கும், ஆனால் விரைவில் scale problems தெளிவாகும்.

கவனிக்கப்படாமல் விடப்பட்டால், single Ultimate Multisite site sites-க்கான அனைத்து visitors-ன் requests-ஐயும் fulfill செய்வதற்கு பொறுப்பாக இருக்கும். இந்த requests dynamic PHP pages அல்லது stylesheets, javascript அல்லது media files போன்ற static assets-க்காக இருக்கலாம். ஒன்று அல்லது நூறு sites-ஆக இருந்தாலும், இந்த tasks repetitive, monotonous மற்றும் wasteful ஆகின்றன. output ஒவ்வொரு request-க்கும் ஒரே static information ஆக இருக்கும்போது PHP file-ஐ process செய்ய CPU power மற்றும் memory பயன்படுத்துவது தேவையற்றது.

இதேபோல் PHP அல்லது HTML page-க்கான ஒரு request scripts, stylesheets மற்றும் image files-க்கான பல succeeding requests-ஐ உருவாக்குகிறது. அந்த requests நேரடியாக உங்கள் Ultimate Multisite server-ஐ target செய்கின்றன.

server-ஐ upgrade செய்வதன் மூலம் இந்த problem-ஐ எளிதாக தீர்க்கலாம், ஆனால் இது ஒரு secondary problem-ஐ fix செய்யாது - geographic latencies. பல locations-ல் multiple servers மட்டுமே இந்த problem-ஐ சரியாக address செய்ய முடியும்.

இந்த காரணத்திற்காக பெரும்பாலான network administrators static pages-க்கான requests-ஐ fulfill செய்ய front-end caching solutions மற்றும் content distribution networks (CDN) பயன்படுத்துகின்றனர். இந்த requests-ஐ fulfill செய்து request server-ஐ அடைவதற்கு முன் assets serve செய்வது processing resources-ஐ சேமிக்கிறது, delays-ஐ நீக்குகிறது, unnecessary upgrades-ஐ தவிர்க்கிறது மற்றும் technology investments-ஐ maximize செய்கிறது.

Ultimate Multisite ஒரு sophisticated Cloudflare add-on கொண்டுள்ளது, இது network administrators தங்கள் installations-ஐ Cloudflare-க்குப் பின்னால் வைத்து அதன் caching capabilities மட்டுமல்லாமல் DNS hosting, SSL certificates மற்றும் security mechanisms-ஐயும் பயன்படுத்த அனுமதிக்கிறது.

#### Backups

backups பற்றி ஆலோசனைக்கு 50 பேரிடம் கேட்டால் backup strategies பற்றி 50 வெவ்வேறு கருத்துக்களைப் பெறலாம். பதில் என்னவென்றால், அது சூழ்நிலையைப் பொறுத்தது.

மறுக்க முடியாதது என்னவென்றால் backups தேவை மற்றும் இவை provider மூலம் நிர்வகிக்கப்படாமல் இருப்பது கிட்டத்தட்ட நினைக்க முடியாதது, குறிப்பாக managed service வழங்குபவர். இதன் விளைவாக customers இந்த service-ஐ வழங்கவும் நிர்வகிக்கவும் network administrator-ஐ நோக்குவார்கள். network administrator யாரை நோக்குகிறார் என்பது முற்றிலும் வேறு problem.

இந்த section-ன் நோக்கங்களுக்காக backup என்பது backup தொடங்கப்பட்ட நேரத்தில் system state-ன் point-in-time copy என்று ஒப்புக்கொள்வோம். எளிமையாகச் சொன்னால், backup நேரத்தில் system-ன் state எதுவாக இருந்தாலும் அந்த state capture செய்யப்பட்டு backup-ல் பூட்டிவைக்கப்படுகிறது.

இந்த புரிதலுடன் backups எவ்வாறு அடைவது மற்றும் உங்கள் environment-க்கு எது சிறந்தது என்ற பதில் உங்கள் requirements மற்றும் அந்த requirements-ஐ satisfy செய்யும் hosting provider-ன் ability-ஐப் பொறுத்தது. இருப்பினும், most opinionated-லிருந்து least opinionated-க்கு வரிசையில், கீழே உள்ள options சில guidance வழங்க வேண்டும்.

#### Snapshots

Snapshots backups-க்கான silver bullets ஏனெனில் அவை easy, uncomplicated (நீங்கள் restore செய்ய விரும்பும் வரை) மற்றும் 'just work'. உங்கள் provider-லிருந்து சில உதவி தேவை மற்றும் நீங்கள் VPS (Virtual Private Server) அல்லது அதுபோன்றது வைத்திருந்தால் மட்டுமே பெரும்பாலும் பொருந்தும். எங்கள் 'Compatible Providers' documentation-ல் பட்டியலிடப்பட்ட பல providers network administrator-ன் மேலும் intervention அல்லது consideration தேவையில்லாத backups வழங்குகின்றனர்.

traditional backups files மற்றும் databases-ஐ target செய்யும் இடத்தில், snapshot முழு disk-ஐயும் target செய்கிறது. இதன் பொருள் site-ன் data மட்டுமல்லாமல் operating system மற்றும் configuration-ம் snapshot-ல் capture செய்யப்படுகிறது. பலருக்கு இது ஒரு தனித்துவமான நன்மை, ஏனெனில் snapshot-லிருந்து கிட்டத்தட்ட உடனடியாக ஒரு புதிய system spawn செய்து ailing instance-ஐ replace செய்ய operation-க்கு கொண்டுவரலாம். இதேபோல், files-ஐ retrieve செய்வதற்கான recovery process-க்கு snapshot image-ஐ existing instance-க்கு disk-ஆக attach செய்தால் போதும், அதனால் files access செய்து copy செய்யலாம்.

Snapshots hosting provider-உடன் additional cost-ஐ ஈர்க்கலாம், ஆனால் இது accidents-க்கு எதிரான insurance policy.

#### External Scripts

WordPress மற்றும் MySQL resources-ஐ backup செய்ய external scripts மற்றும் solutions-க்கு பற்றாக்குறை இல்லை என்று தோன்றுகிறது, இவை Ultimate Multisite-க்கு நன்றாக வேலை செய்யும் ஏனெனில் இது WordPress filesystem மற்றும் database-ஐப் பயன்படுத்தும் WordPress plugin. எனவே WordPress sites-ஐ backup செய்யும் solution Ultimate Multisite-ன் needs-ஐ போதுமான அளவு cover செய்யும்.

ஒரு script-ஐ மற்றொன்றை விட recommend செய்ய முடியாது, ஆனால் எங்கள் general advice என்னவென்றால் results விரும்பியவாறு இருப்பதை உறுதிசெய்ய பல backup மற்றும் restore tests-ஐ run செய்து, குறிப்பாக சில வகையான differential backup strategy பயன்படுத்தப்படும் இடத்தில் script மற்றும் அதன் functionality-ஐ continuously evaluate செய்வதன் மூலம் 'be sure to be sure'.

இந்த scripts run ஆகும்போது system load அதிகரிக்கும் என்பதை கருத்தில் கொள்ள வேண்டும்.

#### Plugins

WordPress-ல் plugin-ஆல் தீர்க்க முடியாத problem கிட்டத்தட்ட இல்லை, external scripts நிர்வகிப்பது உங்கள் cup of java இல்லை என்றால் ஒருவேளை plugin அடுத்த சிறந்த option.

plugins options மற்றும் features-ல் வேறுபட்டாலும் அவை பெரும்பாலும் ஒரே function-ஐ செய்கின்றன, அதாவது WordPress files மற்றும் database contents-ன் copy எடுப்பது. அதன் பிறகு functionalities வேறுபடுகின்றன, சில plugins backups-ஐ Google Drive அல்லது Dropbox போன்ற external services-க்கு அல்லது S3, Wasabi அல்லது பிறவற்றின் compatible object storage service-க்கு ship செய்யலாம். மிகவும் comprehensive plugins external storage costs-ஐ சேமிக்க மாற்றப்பட்ட data-ஐ மட்டும் backup செய்யும் differential backups அல்லது சில வகையான strategy வழங்குகின்றன.

உங்கள் plugin-ஐ select செய்யும்போது, அது multisite aware என்று verify செய்ய கவனம் செலுத்துங்கள். அதன் operation nature காரணமாக backup run ஆகும்போது process complete ஆகும் வரை server-ல் temporary load எதிர்பார்க்கலாம்.

#### Domain மற்றும் SSL

multisite _subdomain_ mode-ல் domain names பற்றி ஏற்கனவே நிறைய விவாதிக்கப்பட்டது. network administrators-க்கு கிட்டத்தட்ட universal solution wildcard DNS entries பயன்படுத்துவது.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

இந்த வகை DNS entry 'site1.domain.com' மற்றும் 'site2.domain.com' போன்ற _subdomains_-ஐ 1.2.3.4 IP address-க்கு successfully resolve செய்யும், இதனால் Ultimate Multisite-ஐயும் பெரிய அளவில் _subdomain_ mode பயன்படுத்தும் WordPress Multisite-ஐயும் ஆதரிக்கும்.

இது HTTP-க்கு perfectly well வேலை செய்யலாம் ஏனெனில் target host HTTP headers-லிருந்து read செய்யப்படுகிறது, ஆனால் secure HTTPS transactions கிட்டத்தட்ட mandatory ஆன இந்த நாட்களில் web அரிதாகவே இவ்வளவு simple.

அதிர்ஷ்டவசமாக SSL certificates-க்கு easy options உள்ளன. _subdirectory_ mode-ல் regular domain certificate பயன்படுத்தலாம். இவை free LetsEncrypt service அல்லது வேறு source பயன்படுத்தும் hosting providers-லிருந்து readily மற்றும் freely available. இல்லையெனில் certificate signing request generate செய்ய முடிந்தால் authorities-லிருந்து commercially available.

_subdomain_ mode-க்கு wildcard SSL certificate wildcard domain-உடன் perfectly pair ஆகும் மற்றும் extraneous configuration இல்லாமல் root domain மற்றும் அனைத்து _subdomains_-க்கும் certificate authoritative ஆக இருக்க அனுமதிக்கும்.

இருப்பினும், நீங்கள் enterprise plan-ல் இல்லாவிட்டால் அல்லது entry-ஐ DNS only என்று set செய்யாவிட்டால், அந்த வழக்கில் அனைத்து caching மற்றும் optimization bypass செய்யப்படும், wildcard SSL certificates Cloudflare போன்ற services-உடன் வேலை செய்யாது என்பதை கவனிக்க வேண்டும்.

Out-of-the-box Ultimate Multisite இந்த problem-க்கு ஒரு solution வழங்குகிறது, WordPress multisites-ன் needs-உடன் எங்கள் extensive experience-ஐ நிரூபிக்கிறது. இந்த simple add-on-ஐ activate செய்வதன் மூலம் Ultimate Multisite உங்கள் Cloudflare credentials-ஐப் பயன்படுத்தி Cloudflare-ல் network sites-க்கான DNS entries-ஐ automatically add செய்து அவற்றின் mode-ஐ 'proxied' என்று set செய்யும். இந்த முறையில் ஒவ்வொரு network subsite-ம் உருவாக்கப்படும்போது SSL உட்பட Cloudflare-ன் full protection மற்றும் benefits பெறும்.

உங்கள் Ultimate Multisite installation-ன் nature மற்றும் purpose-ஐப் பொறுத்து customers தங்கள் சொந்த domains பயன்படுத்த தேவை இருக்கலாம். இந்த வழக்கில் network administrator இரண்டு problems-ஐத் தீர்க்க வேண்டும். ஒன்று, domain name hosting மற்றும் இரண்டு, domain-க்கான SSL certificates.

பலருக்கு Cloudflare பயன்படுத்துவது easy option. customer தங்கள் domain-ஐ Cloudflare-ல் வைத்து, Ultimate Multisite-ன் root domain-க்கு CNAME point செய்து, தங்கள் custom domain name-ன் நன்மையைப் பெறத் தொடங்க Ultimate Multisite-ல் தங்கள் domain-ஐ map செய்தால் போதும்.

இதற்கு வெளியே, alternative solutions தேடப்பட வேண்டும், இதனால்தான் Ultimate Multisite Compatible Providers-ன் பட்டியலை recommend செய்கிறது. ஏனெனில் DNS மற்றும் SSL set up செய்வது non-trivial process ஆக இருக்கலாம். இருப்பினும், இந்த providers-உடன் Ultimate Multisite-ன் integration மூலம் complexity மிகவும் குறைக்கப்படுகிறது மற்றும் procedure automated ஆக்கப்படுகிறது.

#### Plugins

உங்கள் customers அல்லது network sites-க்கு functionality வழங்க additional plugins தேவைப்படுவது மிகவும் likely. அனைத்து plugins-ம் WordPress Multisite மற்றும் Ultimate Multisite-உடன் வேலை செய்யுமா? சரி, அது சூழ்நிலையைப் பொறுத்தது.

பெரும்பாலான plugins WordPress Multisite-ல் installable என்றாலும், அவற்றின் activation மற்றும் licensing author-க்கு author வேறுபடுகிறது.

சில plugins per-domain அடிப்படையில் licensing தேவைப்படுவதால் licensing எவ்வாறு apply செய்யப்படுகிறது என்பதில் சவால் உள்ளது. இதன் பொருள் சில plugins-க்கு network administrator ஒவ்வொரு புதிய site-லும் ஒவ்வொரு plugin-க்கும் license-ஐ manually activate செய்ய வேண்டும்.

எனவே plugin author-உடன் அவர்களின் plugin WordPress Multisite-உடன் எவ்வாறு வேலை செய்யும் மற்றும் license செய்ய தேவையான special requirements அல்லது procedures என்ன என்று check செய்வது சிறந்தது.
