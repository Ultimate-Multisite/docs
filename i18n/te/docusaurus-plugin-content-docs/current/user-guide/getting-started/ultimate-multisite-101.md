---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite అనేది WordPress Multisite plugin, ఇది మీకు WaaS లేదా Websites as a Service ను కస్టమర్లకు అందించే అవకాశం ఇస్తుంది. Ultimate Multisite మీ వ్యాపారానికి మరియు కస్టమర్లకు ఎలా సహాయపడుతుందో తెలుసుకునే ముందు, మనం కొన్ని ప్రాథమిక విషయాలు నేర్చుకోవాలి.

## WordPress Multisite

మనలో చాలామందికి సాధారణ WordPress installation గురించి తెలుసు. మీరు దీన్ని మీ hosting provider control panel ద్వారా create చేస్తారు లేదా, ధైర్యంగా ఉన్నవారు, కొత్త web server మరియు database setup చేసి, core files download చేసి installation process మొదలుపెడతారు.

ఇది ప్రపంచవ్యాప్తంగా మిలియన్ల WordPress sites కోసం పనిచేస్తుంది, కానీ agency లేదా hosting provider దృష్టికోణం నుండి volumes గురించి ఒక్క నిమిషం మాట్లాడుకుందాం.

ఒక WordPress site create చేయడం లేదా automated control panel ద్వారా వందల sites create చేయడం చాలా సులభం, కానీ ఈ sites నిర్వహణ విషయానికి వచ్చినప్పుడు సమస్యలు కనిపించడం మొదలవుతాయి. నిర్వహణ లేకుండా వదిలేస్తే మీరు malware కి సులభమైన లక్ష్యం అవుతారు. నిర్వహించడం అంటే కృషి మరియు వనరులు అవసరం, WordPress sites నిర్వహణ మరియు పరిపాలనను సులభతరం చేయడానికి external tools మరియు plugins అందుబాటులో ఉన్నప్పటికీ, కస్టమర్లు administrative access కలిగి ఉండడం వల్ల ఈ ప్రయత్నాలు సులభంగా విఫలమవుతాయి.

WordPress తన core లో 'Multisite' అనే feature అందిస్తుంది, ఇది 2010 లో WordPress 3.0 launch తో మొదలైంది. అప్పటి నుండి కొత్త features పరిచయం చేయడానికి మరియు security బిగించడానికి అనేక revisions వచ్చాయి.

సారాంశంలో, WordPress multisite ని ఇలా అర్థం చేసుకోవచ్చు: ఒక విశ్వవిద్యాలయం ఒకే WordPress installation నిర్వహిస్తుంది, కానీ ప్రతి faculty వారి స్వంత WordPress site నిర్వహిస్తుంది.

ఈ statement ని విడమర్చి చెప్పడానికి Ultimate Multisite documentation లో మాత్రమే కాకుండా WordPress community అంతటా ఉన్న కొన్ని ప్రాథమిక పదాల గురించి చూద్దాం.

### The Network

WordPress పరంగా, multisite network అంటే అనేక subsites ను ఒకే dashboard నుండి నిర్వహించగలిగే చోటు. Multisite network create చేయడం hosting providers మధ్య భిన్నంగా ఉన్నప్పటికీ, చివరి ఫలితం సాధారణంగా wp-config.php file లో కొన్ని అదనపు directives ఉంటాయి, WordPress ఈ specific mode లో operate అవుతోందని తెలియజేయడానికి.

Multisite network మరియు stand-alone WordPress installation మధ్య అనేక విభిన్న తేడాలు ఉన్నాయి, వాటిని క్లుప్తంగా చర్చిద్దాం.

#### Subdomain vs. Subdirectory

మీరు తీసుకోవలసిన అత్యంత తక్షణ నిర్ణయాలలో ఒకటి multisite installation _subdirectories_ లేదా _subdomains_ తో operate అవుతుందా అనేది. Ultimate Multisite రెండు choices తో సమానంగా బాగా పనిచేస్తుంది, కానీ రెండు configurations మధ్య కొన్ని architectural తేడాలు ఉన్నాయి.

_subdirectory_ configuration లో, network sites main domain name ఆధారంగా path ని inherit చేసుకుంటాయి. ఉదాహరణకు 'site1' అని label చేసిన network site పూర్తి URL https://domain.com/site1 గా ఉంటుంది. _subdomain_ configuration లో, network site main domain name నుండి derive అయిన స్వంత _subdomain_ కలిగి ఉంటుంది. అందువల్ల 'site1' అని label చేసిన site పూర్తి URL https://site1.domain.com/ గా ఉంటుంది.

రెండు options పూర్తిగా valid choices అయినప్పటికీ, _subdomains_ వాడకం అనేక ప్రయోజనాలను అందిస్తుంది కానీ దాని architecture లో మరింత ఆలోచన మరియు planning అవసరం.

DNS పరంగా _subdirectories_ వాడకం సాపేక్షంగా సరళమైన సవాలును అందిస్తుంది. Network sites parent path యొక్క children అవడం వల్ల, main domain name కోసం ఒకే domain name entry ఉండాలి. _subdomains_ కోసం సవాలు కొంచెం సంక్లిష్టమైనది, ప్రతి network site కోసం ప్రత్యేక CNAME entry లేదా DNS records లో wildcard (*) entry అవసరం.

మరొక పరిగణనా ప్రాంతం SSL మరియు SSL certificates జారీ మరియు వాడకం. _subdirectory_ configuration లో network sites main domain name యొక్క paths మాత్రమే అవడం వల్ల ఒకే domain certificate వాడవచ్చు. అందువల్ల domain.com కోసం certificate https://domain.com/site1, https://domain.com/site2 మొదలైన వాటికి సరిపోయే SSL అందిస్తుంది.

_subdomain_ configuration లో wildcard SSL certificate వాడకం అత్యంత సాధారణ options లో ఒకటి. ఈ రకమైన SSL certificate domain మరియు దాని _subdomains_ కోసం encryption అందిస్తుంది. అందువల్ల wildcard SSL certificate https://site1.domain.com, https://site2.domain.com మరియు https://domain.com కోసం encryption అందిస్తుంది.

ఇతర options ఉన్నప్పటికీ, ఇవి తరచుగా scope మరియు application లో పరిమితంగా ఉంటాయి మరియు suitability విషయంలో అదనపు configuration మరియు పరిగణన అవసరం.

#### Plugins మరియు Themes

WordPress ఇచ్చినది తీసేసుకుంటుంది కూడా, కనీసం కస్టమర్ దృష్టికోణం నుండి. Stand-alone WordPress installation లో site administrator చెడ్డ plugin install చేసినా లేదా వారి installation ని up to date గా ఉంచడంలో విఫలమైనా, ఈ చర్య యొక్క ఏకైక బాధితుడు వారే. అయితే, multisite installation లో site administrator చెడ్డ plugin install చేయడం network లో install చేసిన ప్రతి site ని బాధితుడిగా చేస్తుంది.

ఈ కారణంగా multisite గా configure చేసినప్పుడు WordPress site administrators నుండి plugins మరియు themes install చేసే capability తొలగిస్తుంది, బదులుగా ఈ capability ని కొత్తగా create చేసిన network administrator లేదా 'super admin' role కి move చేస్తుంది. ఈ privileged role వారి dashboard లో plugins menu చూడడానికి లేదా access చేయడానికి network sites administrators ని అనుమతించాలా వద్దా, అలా అయితే అటువంటి permissions plugins ను _activating_ లేదా _deactivating_ చేయడానికి extend అవుతాయా అని నిర్ణయించవచ్చు.

ఈ విధంగా network administrator network లో plugins మరియు themes install చేయడానికి బాధ్యత వహిస్తాడు మరియు ఈ plugins మరియు themes ని వాడటానికి network sites కి permissions delegate చేస్తాడు. Site administrators plugins మరియు themes install చేయలేరు లేదా వారి site కి assign చేయని plugins మరియు themes access చేయలేరు.

#### Users మరియు Administrators

WordPress Multisite లో, అన్ని network sites ఒకే database share చేస్తాయి మరియు అందువల్ల ఒకే users, roles మరియు capabilities share చేస్తాయి. దీని గురించి ఆలోచించడానికి అత్యంత సరైన మార్గం ఏమిటంటే అన్ని users ఒక particular site కాకుండా network కి members.

ఈ అవగాహనతో users create చేయడానికి అనుమతించడం అవాంఛనీయం కావచ్చు మరియు ఈ కారణంగా WordPress Multisite site administrators నుండి ఈ capability తొలగిస్తుంది మరియు network administrator కి move చేస్తుంది. అప్పుడు network administrator వారి స్వంత site కోసం user accounts create చేయడానికి site administrator కి అవసరమైన privileges delegate చేయవచ్చు.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

పై statement ని పునరుద్ఘాటిస్తూ, user accounts site కి సంబంధించినట్లు కనిపించినప్పటికీ వాస్తవానికి అవి network కి allocate చేయబడ్డాయి మరియు అందువల్ల network అంతటా unique గా ఉండాలి. ఈ కారణంగా usernames register చేయడానికి అందుబాటులో లేని instances ఉండవచ్చు.

Enterprise systems లో foreign concept కానప్పటికీ, user registration మరియు authentication యొక్క ఈ single source stand-alone WordPress installations తో పరిచయం ఉన్న వ్యక్తులకు అర్థం చేసుకోవడం కష్టమైన concept, అక్కడ user administration కొంత సులభం.

#### Media

WordPress Multisite లో network sites ఒకే database share చేసే చోట, media files కోసం filesystem లో separate paths నిర్వహిస్తాయి.

Standard WordPress location (wp-content/uploads) అలాగే ఉంటుంది; అయితే, network site యొక్క unique ID ని reflect చేయడానికి దాని path మారుతుంది. ఫలితంగా network site కోసం media files wp-contents/uploads/site/[id] గా కనిపిస్తాయి.

#### Permalinks

_subdirectory_ configuration కంటే _subdomain_ యొక్క విభిన్న ప్రయోజనాలు ఉన్నాయని మేము ముందే చెప్పాము మరియు ఇక్కడ అది ఉంది: paths.

_subdirectory_ configuration లో, main site (network establish అయినప్పుడు create అయిన మొదటి site) మరియు network subsites domain name నుండి lead అయ్యే ఒకే path share చేయాలి. ఇది అనేక conflicts కి అవకాశం ఉంది.

Posts కోసం, network sites తో clashes నివారించడానికి main site కి mandatory /blog/ path add అవుతుంది. దీని అర్థం 'Post name' వంటి pretty permalinks domain.name/blog/post-name/ గా present అవుతాయి

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_subdomain_ configuration లో ప్రతి network site complete domain separation నుండి benefit పొందడం వల్ల ఈ action అవసరం లేదు మరియు అందువల్ల single path పై ఆధారపడాల్సిన అవసరం లేదు. బదులుగా వారి _subdomain_ ఆధారంగా వారి స్వంత distinct paths నిర్వహిస్తాయి.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

_subdirectory_ configuration లో main site మరియు network sites ఒకే path share చేయడం వల్ల naming conflicts అవకాశం static pages కి extend అవుతుంది.

దీన్ని నివారించడానికి, WordPress first site పేర్లతో conflict కాకుండా certain site names ను blacklist చేయడానికి ఒక మార్గం అందిస్తుంది. సాధారణంగా network administrator main site pages యొక్క root paths enter చేస్తాడు.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_subdomain_ configuration లో naming conflicts అవకాశం _subdomain_ ద్వారా mitigate అవుతుంది ఎందుకంటే ఇది network site కి unique మరియు main site కి ఏ విధంగానూ సంబంధం లేదు.

### Registration

WordPress Multisite యొక్క network settings లో అనేక కొత్త user registration options అందుబాటులో ఉన్నాయి, కొత్త మరియు existing users sites create చేయడానికి అనుమతిస్తాయి.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

Stand-alone WordPress installations కి భిన్నంగా, network sites user registrations అనుమతించడానికి లేదా ఆ registrations ని roles కి assign చేయడానికి familiar options నిర్వహించవు.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

User accounts create అయినప్పుడు ఆ accounts network level లో generate అవుతాయి. అందువల్ల ఏదైనా particular site కి belong అవడం బదులు అవి network కి belong అవుతాయి. దీనికి కొన్ని విభిన్న ప్రయోజనాలు మరియు అప్రయోజనాలు ఉన్నాయి.

ఉదాహరణకు, మీ WordPress Multisite news మరియు information business లో ఉందని ఊహించండి. మీరు multisite establish చేసి plugins మరియు themes పై overall control నిర్వహిస్తూ finance, technology, entertainment మరియు ఇతర areas of interest కోసం network sites create చేస్తారు. ప్రతి network site custom post types లేదా regular post categories కంటే వారి network site యొక్క look and feel మరియు user experience పై చాలా ఎక్కువ control కలిగి ఉంటుంది.

ఈ విధంగా user login అయినప్పుడు వారు network కి login అవుతారు మరియు చివరికి seamless experience అందించడానికి ప్రతి network site కి కూడా login అవుతారు. మీ కొత్త site subscription based అయితే ఇది ideal solution మరియు outcome అవుతుంది.

అయితే, multisite యొక్క intended nature మరియు purpose ఒకరికొకరు relationship లేని disparate network sites అందించడం అయితే, user roles manipulate చేయడానికి external లేదా additional plugins అవసరం అవడం దాదాపు ఎల్లప్పుడూ జరుగుతుంది.

### Domain మరియు SSL

మన దృష్టిని దాదాపు escape అయ్యే WordPress Multisite installation గురించి మాట్లాడుకుందాం - Wordpress.com. ఇది WordPress multisite యొక్క అత్యంత విస్తృతమైన ఉదాహరణ మరియు ఒక purpose ను fulfill చేయడానికి customize మరియు mould చేయగల దాని విస్తృతమైన abilities ను demonstrate చేస్తుంది.

నేటి modern internet లో SSL వాడకం దాదాపు mandatory మరియు WordPress multisites యొక్క network administrators కి ఈ challenges త్వరగా present అవుతాయి.

_subdomain_ configuration లో sites root domain name ఆధారంగా create అవుతాయి. అందువల్ల 'site1' అని label చేసిన site 'site1.domain.com' గా create అవుతుంది. Wildcard SSL certificate వాడటం ద్వారా, network administrator ఈ challenge ను successfully address చేయవచ్చు మరియు network కోసం SSL encryption abilities అందించవచ్చు.

WordPress Multisite లో domain mapping function ఉంది, ఇది network sites ను custom domain names లేదా network యొక్క root domain కంటే different domain names తో associate చేయడానికి అనుమతిస్తుంది.

Network administrators కోసం ఇది domain name configuration లో అలాగే SSL certificates జారీ మరియు maintenance లో additional layer of complexity ను present చేస్తుంది.

ఈ విధంగా WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com) ను 'site1' కి map చేయడానికి అనుమతించినప్పటికీ, network administrator DNS entries externally manage చేయడం మరియు SSL certificates implementation యొక్క challenge తో వదిలివేయబడతారు.

## Ultimate Multisite

Stand-alone WordPress installation మరియు Multisite installation మధ్య తేడాలు అర్థమైన తర్వాత, Websites as a Service అందించడానికి Ultimate Multisite ultimate arsenal ఎలా అవుతుందో చూద్దాం.

### Introduction

Website as a Service (WaaS) create చేయడం విషయంలో Ultimate Multisite మీ Swiss Army knife. Wix.com, Squarespace, WordPress.com గురించి ఆలోచించండి మరియు తర్వాత మీ స్వంత service own చేయడం గురించి ఆలోచించండి.

Hood కింద Ultimate Multisite WordPress Multisite ని use చేస్తుంది కానీ network administrators multisite installations తో face చేసే అనేక challenges ను solve చేయడమే కాకుండా విస్తృత variety of use cases ను support చేయడానికి capabilities ను enhance చేసే విధంగా చేస్తుంది.

కింది sections లో కొన్ని common use cases మరియు ఆ cases support చేయడానికి అవసరమైన considerations చూద్దాం.

### Use Cases

#### Case 1: An Agency

సాధారణంగా agency యొక్క core skills websites design లో ఉంటాయి, వారి hosting లేదా marketing వంటి aspects additional services గా list అవుతాయి.

Agencies కోసం Ultimate Multisite ఒకే platform లో multiple websites host మరియు manage చేసే abilities లో incredible value proposition ను present చేస్తుంది. GeneratePress, Astra, OceanWP లేదా ఇతర particular themes పై వారి designs standardize చేసే agencies కోసం మరింత ఎక్కువగా, ప్రతి కొత్త site కోసం ఈ themes ను automatically activate చేసే Ultimate Multisite abilities ను leverage చేయవచ్చు.

అలాగే common మరియు popular plugins కోసం agency pricing deals abundance తో, Ultimate Multisite వాడకం plugins install, maintain మరియు use చేయగల common platform అందించడం ద్వారా agencies existing investments leverage చేయడానికి అనుమతిస్తుంది.

చాలామటుకు configuration వాడకం desired అవుతుంది మరియు అదృష్టవశాత్తూ Ultimate Multisite అనేక popular hosting providers అలాగే Cloudflare మరియు cPanel వంటి services తో దాని integrations ద్వారా domain mapping మరియు SSL certificates facilitate చేయడం incredibly easy చేస్తుంది.

అందువల్ల ఈ providers లో ఒకదాన్ని leverage చేయడం ద్వారా లేదా Ultimate Multisite ను Cloudflare వెనుక place చేయడం ద్వారా domains మరియు SSL certificates management వంటి aspects somewhat trivial అవుతాయి.

Sites creation పై tight control ఉంచుకోవాలనుకునే Agencies Ultimate Multisite యొక్క streamlined interface ద్వారా sites create చేయడం మరియు sites ను customers మరియు plans తో associate చేయడం ఎంత సులభమో appreciate చేస్తారు.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Ultimate Multisite యొక్క intuitive interfaces ద్వారా plugins మరియు themes పై tight control per-product basis లో maintain అవుతుంది, plugins మరియు themes available చేయడానికి లేదా hide చేయడానికి అలాగే కొత్త site కోసం instantiate అయినప్పుడు వాటి activation state అనుమతిస్తుంది.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes similar functionality అందిస్తాయి, site creation లో particular themes activate లేదా hide చేయడానికి అనుమతిస్తాయి.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies Ultimate Multisite తో peace of mind పొందుతారు, వారు best గా చేసేది చేయడానికి అనుమతిస్తుంది - exceptional web sites design చేయడం.

#### Case 2: Niche Provider

"ఒక పని చేసి బాగా చెయ్యి" అనే పాత సామెత ఉంది. చాలా specialists కోసం దీని అర్థం ఒకే core idea చుట్టూ product లేదా service create చేయడం.

బహుశా మీరు clubs కోసం websites promote చేసే avid golfer అయి ఉండవచ్చు లేదా clans కోసం websites provide చేసే avid esports gamer అయి ఉండవచ్చు. Restaurants కోసం booking service promote చేసే individual అయి ఉండవచ్చు?

అనేక కారణాల వల్ల మీరు common framework మరియు platform ఆధారంగా services provide చేయాలనుకుంటారు. Required functionality provide చేయడానికి bespoke plugins design చేసి లేదా invest చేసి ఉండవచ్చు లేదా industry best practices design కోసం ఏదో రకమైన standardized approach అవసరం కావచ్చు.

Ultimate Multisite యొక్క innovative features లో ఒకటి template sites వాడకం. Template site అంటే theme install మరియు activate అయి, necessary plugins install మరియు activate అయి మరియు sample posts లేదా pages create అయి ఉంటాయి. Customer template ఆధారంగా కొత్త site create చేసినప్పుడు, template యొక్క contents మరియు settings కొత్తగా create అయిన site కి copy అవుతాయి.

Niche sites మరియు services provider కోసం ఇది custom plugins మరియు design తో ready to go site instantly create చేసే ability లో unparalleled advantage అందిస్తుంది. Service complete చేయడానికి customer most minimal input మాత్రమే provide చేయాలి.

Requirements ఆధారంగా _subdirectory_ లేదా _subdomain_ configurations రెండూ suit అవచ్చు, అలాంటప్పుడు architecture choices _subdirectories_ కోసం simple SSL certificate లేదా _subdomains_ కోసం wildcard SSL certificate మధ్య ఉంటాయి.

#### Case 3: WordPress Web Hosting

WordPress sites host చేయడానికి అనేక మార్గాలు ఉన్నాయి కానీ pre-installed version of WordPress తో customer కి web space provide చేయడం అంత simple గా ఉండదు. ఎందుకంటే meaningful service provide చేయడానికి అనేక decisions మరియు considerations కలిసి రావాలి.

WordPress sites hosting కోసం comprehensive turnkey solution provide చేయడం ద్వారా Ultimate Multisite ఈ area లో excel అవుతుంది. Solution లో subscription services, payment collection, checkout forms, discount vouchers మరియు customer communications provide చేయడానికి core mechanisms include అయి ఉన్నాయి.

WordPress Multisite correctly install, configure మరియు maintain చేయడానికి అవసరమైన చాలా integral work Ultimate Multisite ద్వారా facilitate అవుతుంది, network administrators product tiers, pricing మరియు service offers వంటి వారి service లేదా niche కి సంబంధించిన aspects మాత్రమే consider చేయాలి.

Ultimate Multisite తో integrate చేయాలనుకునే developers కోసం, solution event notification కోసం comprehensive RESTful API మరియు Webhooks కూడా offer చేస్తుంది.

అనేక external plugins మరియు licenses పై reliance లేకుండా, Ultimate Multisite Wix, Squarespace, WordPress.com మరియు ఇతరులకు feature rich మరియు comparable solution అందిస్తుంది.

### Architecture Considerations

Comprehensive guide కాకపోయినా, Ultimate Multisite installation support చేయడానికి technologies యొక్క correct selection కి guidance గా కింది items serve అవ్వాలి.

#### Shared vs. Dedicated Hosting

దురదృష్టవశాత్తూ అన్ని hosting providers equal కావు మరియు కొన్ని extreme server densities practice చేస్తాయి. Low-cost providers సాధారణంగా server density maximize చేయడం ద్వారా revenue generate చేస్తారు. అందువల్ల మీ Ultimate Multisite installation ఒకే server లో అనేక వందల sites లో ఒకటి మాత్రమే కావచ్చు.

Provider నుండి appropriate safeguards లేకుండా, shared server లో sites 'noisy neighbour' problem experience అవుతాయి. అంటే, ఒకే server లో site అనేక resources consume చేయడం వల్ల ఇతర sites మిగిలిన resources కోసం compete చేయాల్సి వస్తుంది. తరచుగా ఇది slow గా ఉండే లేదా timely manner లో respond అవ్వని sites గా present అవుతుంది.

Web hosting provider గా మీ flow on effects అంటే మీ customers poor speeds, low page rank మరియు high bounce rates experience అవుతారు, తరచుగా వారు elsewhere services seek చేస్తూ customer churn result అవుతుంది.

సంక్షిప్తంగా, cheap అంటే good కాదు.

Ultimate Multisite అనేక మంచి hosting providers తో work చేస్తుందని known మరియు domain mapping మరియు automatic SSL వంటి functions provide చేయడానికి వారి environment తో బాగా integrate అవుతుంది. ఈ providers performance value చేస్తారు మరియు shared hosting కంటే higher grade service provide చేస్తారు.

Compatible providers list మరియు ప్రతి ఒక్కటి కోసం complete set-up instructions కోసం Compatible Providers documentation check చేయండి.

#### Performance Considerations

Ultimate Multisite slow application కాదు, బదులుగా, ఇది remarkably fast. అయితే, underlying application మరియు infrastructure అంత మంచిగా మాత్రమే perform అవుతుంది మరియు దానికి access ఉన్నది మాత్రమే leverage చేయగలదు.

ఇది consider చేయండి: మీరు 100 sites ఉన్న Ultimate Multisite installation యొక్క network administrator. ఆ sites లో కొన్ని బాగా చేస్తున్నాయి మరియు ప్రతిరోజూ అనేక website visitors attract చేస్తున్నాయి.

ఈ scenario ఒకటి నుండి ఐదు sites వంటి smaller scale లో different గా ఉంటుంది కానీ త్వరలో scale సమస్యలు evident అవుతాయి.

Unattended గా వదిలేస్తే, single Ultimate Multisite site sites కి అన్ని visitors requests fulfill చేయడానికి responsible అవుతుంది. ఈ requests dynamic PHP pages కోసం లేదా stylesheets, javascript లేదా media files వంటి static assets కోసం కావచ్చు. ఒక site అయినా వంద sites అయినా, ఈ tasks repetitive, monotonous మరియు wasteful అవుతాయి. Output ప్రతి request కోసం same static information అయినప్పుడు PHP file process చేయడానికి CPU power మరియు memory use చేయడం unnecessary.

అలాగే PHP లేదా HTML page కోసం ఒక request scripts, stylesheets మరియు image files కోసం multiple succeeding requests generate చేస్తుంది. ఆ requests directly మీ Ultimate Multisite server కి target అవుతాయి.

Server upgrade చేయడం ద్వారా ఈ problem సులభంగా solve చేయవచ్చు కానీ ఇది secondary problem - geographic latencies fix చేయదు. Multiple locations లో multiple servers మాత్రమే ఈ problem properly address చేయగలవు.

ఈ కారణంగా చాలా network administrators static pages requests fulfill చేయడానికి front-end caching solutions మరియు content distribution networks (CDN) use చేస్తారు. ఈ requests fulfill చేయడం మరియు request server కి reach అయ్యే ముందు assets serve చేయడం processing resources save చేస్తుంది, delays eliminate చేస్తుంది, unnecessary upgrades avoid చేస్తుంది మరియు technology investments maximize చేస్తుంది.

Ultimate Multisite sophisticated Cloudflare add-on include చేస్తుంది, network administrators వారి installations ను Cloudflare వెనుక place చేయడానికి మరియు దాని caching capabilities మాత్రమే కాకుండా DNS hosting, SSL certificates మరియు security mechanisms కూడా use చేయడానికి enable చేస్తుంది.

#### Backups

Backups గురించి 50 మందిని advice అడిగితే backup strategies పై 50 different opinions receive అవుతాయి. Answer ఏమిటంటే, it depends.

Disputed కానిది ఏమిటంటే backups required మరియు managed service offer చేసే provider, specifically, ఇవి manage చేయకపోవడం దాదాపు inconceivable. ఫలితంగా customers ఈ service provide మరియు manage చేయడానికి network administrator వైపు చూస్తారు. Network administrator ఎవరి వైపు చూస్తారో entirely different problem.

ఈ section purposes కోసం backup అంటే backup initiate అయిన సమయంలో system state యొక్క point-in-time copy అని agree అవ్వుదాం. Simply put, backup సమయంలో system state ఏదైనా ఆ state capture అయి backup లో lock అయి ఉంటుంది.

ఈ understanding తో backups achieve చేయడం ఎలా మరియు మీ environment కోసం best ఏమిటి అనే answer largely మీ requirements మరియు hosting provider ఆ requirements satisfy చేసే ability పై depend అవుతుంది. అయితే, most opinionated నుండి least opinionated order లో, కింది options కొంత guidance provide చేయాలి.

#### Snapshots

Snapshots backups కి silver bullets ఎందుకంటే అవి easy, uncomplicated (restore చేయాలనుకునే వరకు) మరియు 'just work'. అయితే మీ provider నుండి కొంత help అవసరం మరియు mostly VPS (Virtual Private Server) లేదా similar ఉంటేనే apply అవుతుంది. మా 'Compatible Providers' documentation లో list అయిన అనేక providers network administrator నుండి further intervention లేదా consideration అవసరం లేని backups offer చేస్తారు.

Traditional backups files మరియు databases target చేసే చోట, snapshot entire disk target చేస్తుంది. దీని అర్థం site data మాత్రమే కాకుండా operating system మరియు configuration కూడా snapshot లో capture అవుతాయి. చాలామందికి ఇది distinct advantage ఎందుకంటే snapshot నుండి కొత్త system దాదాపు instantly spawn అయి ailing instance replace చేయడానికి operation లోకి bring అవచ్చు. అలాగే, files retrieve చేయడానికి recovery process snapshot image ను disk గా existing instance కి attach చేయడం మాత్రమే require చేస్తుంది, files access మరియు copy చేయవచ్చు.

Snapshots hosting provider తో additional cost attract చేయవచ్చు కానీ ఇది accidents కి insurance policy.

#### External Scripts

WordPress మరియు MySQL resources backup చేయడానికి external scripts మరియు solutions shortage లేనట్లు కనిపిస్తుంది మరియు ఇవి Ultimate Multisite కోసం బాగా work చేస్తాయి ఎందుకంటే ఇది WordPress filesystem మరియు database use చేసే WordPress plugin. అందువల్ల WordPress sites backup చేసే solution Ultimate Multisite needs adequately cover చేస్తుంది.

మేము ఏ script ని మరొకదాని కంటే recommend చేయలేము కానీ మా general advice ఏమిటంటే results desired అని ensure చేయడానికి అనేక backup మరియు restore tests run చేయడం మరియు ఏదో రకమైన differential backup strategy apply అయిన specifically script మరియు దాని functionality continuously evaluate చేయడం ద్వారా 'be sure to be sure'.

ఈ scripts run అవుతున్నప్పుడు system load increase అవుతుందని గమనించాలి, ఇది account లోకి తీసుకోవాలి.

#### Plugins

WordPress లో plugin తో solve చేయలేని problem దాదాపు లేదు మరియు external scripts manage చేయడం మీ cup of java కాకపోతే బహుశా plugin next best option.

Plugins options మరియు features లో vary అయినప్పటికీ అవి mostly same function perform చేస్తాయి అది WordPress files మరియు database contents copy చేయడం. ఆ తర్వాత functionalities differ అవుతాయి కొన్ని plugins backups ను Google Drive లేదా Dropbox వంటి external services కి లేదా S3, Wasabi లేదా ఇతరాల వంటి compatible object storage service కి ship చేయగలవు. More comprehensive plugins differential backups లేదా external storage costs save చేయడానికి changed data మాత్రమే backup చేయడానికి ఏదో రకమైన strategy provide చేస్తాయి.

మీ plugin select చేసేటప్పుడు, అది multisite aware అని verify చేయడానికి care తీసుకోండి. దాని nature of operation వల్ల backup run అవుతున్నప్పుడు process complete అయ్యే వరకు server పై temporary load expect చేయవచ్చు.

#### Domain మరియు SSL

Multisite _subdomain_ mode లో domain names గురించి ఇప్పటికే చాలా discuss అయింది. Network administrators కోసం దాదాపు universal solution wildcard DNS entries use చేయడం.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

ఈ రకమైన DNS entry 'site1.domain.com' మరియు 'site2.domain.com' వంటి _subdomains_ ను 1.2.3.4 IP address కి successfully resolve చేస్తుంది, అందువల్ల Ultimate Multisite మరియు larger extent లో _subdomain_ mode use చేసే WordPress Multisite support చేస్తుంది.

HTTP కోసం ఇది perfectly well work చేయవచ్చు ఎందుకంటే target host HTTP headers నుండి read అవుతుంది కానీ secure HTTPS transactions దాదాపు mandatory అయిన ఈ రోజుల్లో web అంత simple గా ఉండదు.

అదృష్టవశాత్తూ SSL certificates కోసం easy options ఉన్నాయి. _subdirectory_ mode లో regular domain certificate use చేయవచ్చు. ఇవి free LetsEncrypt service లేదా మరొక source use చేసే hosting providers నుండి readily మరియు freely available. లేకపోతే certificate signing request generate చేయగలిగితే authorities నుండి commercially available.

_subdomain_ mode కోసం wildcard SSL certificate వాడకం wildcard domain తో perfectly pair అవుతుంది మరియు extraneous configuration లేకుండా root domain మరియు అన్ని _subdomains_ కోసం certificate authoritative గా ఉండటానికి allow చేస్తుంది.

అయితే, enterprise plan లో ఉంటే తప్ప wildcard SSL certificates Cloudflare వంటి services తో work చేయకపోవచ్చు లేదా entry ని DNS only కి set చేస్తే అన్ని caching మరియు optimization bypass అవుతుందని గమనించాలి.

Out-of-the-box Ultimate Multisite WordPress multisites needs తో మా extensive experience demonstrate చేస్తూ ఈ problem కి solution provide చేస్తుంది. ఈ simple add-on activate చేయడం Ultimate Multisite మీ Cloudflare credentials use చేసి Cloudflare లో network sites కోసం automatically DNS entries add చేయడానికి మరియు వాటి mode ను 'proxied' కి set చేయడానికి చేస్తుంది. ఈ విధంగా ప్రతి network subsite, create అయినప్పుడు, SSL తో సహా Cloudflare యొక్క full protection మరియు benefits కలిగి ఉంటుంది.

మీ Ultimate Multisite installation యొక్క nature మరియు purpose ఆధారంగా customers వారి స్వంత domains use చేయాల్సిన అవసరం ఉండవచ్చు. ఈ case లో network administrator రెండు problems solve చేయాల్సి ఉంటుంది. ఒకటి, domain name hosting మరియు రెండు, domain కోసం SSL certificates.

చాలామందికి, Cloudflare వాడకం easy option. Customer వారి domain ను Cloudflare పై place చేసి, CNAME ని Ultimate Multisite యొక్క root domain కి point చేసి మరియు వారి domain ను Ultimate Multisite లో map చేసి వారి custom domain name యొక్క advantages తీసుకోవడం start చేయాలి.

దీని బయట, alternative solutions seek చేయాలి, అందుకే Ultimate Multisite Compatible Providers list recommend చేస్తుంది. ఎందుకంటే DNS మరియు SSL setup process non-trivial process కావచ్చు. అయితే, ఈ providers తో Ultimate Multisite integration తో complexity చాలా remove అవుతుంది మరియు procedure automated అవుతుంది.

#### Plugins

మీ customers లేదా network sites కి functionality provide చేయడానికి additional plugins అవసరం అయ్యే అవకాశం ఎక్కువ. అన్ని plugins WordPress Multisite మరియు Ultimate Multisite తో work చేస్తాయా? Well, it depends.

చాలా plugins WordPress Multisite లో installable అయినప్పటికీ వాటి activation మరియు licensing author నుండి author కి vary అవుతుంది.

Challenge licensing ఎలా apply అవుతుందో దానిలో ఉంది, కొన్ని plugins per-domain basis లో licensing require చేస్తాయి. దీని అర్థం కొన్ని plugins కోసం network administrator ప్రతి కొత్త site లో ప్రతి plugin కోసం license manually activate చేయాలి.

అందువల్ల plugin author తో వారి plugin WordPress Multisite తో ఎలా work చేస్తుందో మరియు license చేయడానికి అవసరమైన ఏదైనా special requirements లేదా procedures check చేయడం best.
