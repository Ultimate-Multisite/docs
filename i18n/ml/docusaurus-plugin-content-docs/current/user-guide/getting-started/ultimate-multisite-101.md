---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite എന്നത് ഒരു WordPress Multisite പ്ലഗിൻ ആണ്, ഇത് നിങ്ങളുടെ ഉപഭോക്താക്കൾക്ക് WaaS അല്ലെങ്കിൽ Websites as a Service നൽകാൻ സഹായിക്കുന്നു. Ultimate Multisite നിങ്ങളുടെ ബിസിനസിനെയും ഉപഭോക്താക്കളെയും എങ്ങനെ സഹായിക്കുമെന്ന് പഠിക്കുന്നതിന് മുമ്പ്, നമുക്ക് ചില അടിസ്ഥാന അറിവുകൾ നേടേണ്ടതുണ്ട്.

## WordPress Multisite

സാധാരണ WordPress ഇൻസ്റ്റാളേഷൻ നമ്മളിൽ മിക്കവർക്കും പരിചിതമാണ്. നിങ്ങളുടെ ഹോസ്റ്റിംഗ് പ്രൊവൈഡറുടെ control panel വഴി ഇത് സൃഷ്ടിക്കാം, അല്ലെങ്കിൽ ധൈര്യമുള്ളവർക്ക് ഒരു പുതിയ web server-ഉം database-ഉം സജ്ജീകരിച്ച്, core files ഡൗൺലോഡ് ചെയ്ത് ഇൻസ്റ്റാളേഷൻ പ്രക്രിയ ആരംഭിക്കാം.

ലോകമെമ്പാടുമുള്ള ദശലക്ഷക്കണക്കിന് WordPress സൈറ്റുകൾക്ക് ഇത് പ്രവർത്തിക്കുന്നു, എന്നാൽ ഒരു ഏജൻസിയുടെയോ ഹോസ്റ്റിംഗ് പ്രൊവൈഡറുടെയോ കാഴ്ചപ്പാടിൽ, വലിയ അളവിലുള്ള സൈറ്റുകളെക്കുറിച്ച് നമുക്ക് സംസാരിക്കാം.

ഒരു WordPress സൈറ്റ് അല്ലെങ്കിൽ ഒരു automated control panel വഴി നൂറ് സൈറ്റുകൾ പോലും സൃഷ്ടിക്കുന്നത് വളരെ എളുപ്പമാണെങ്കിലും, ഈ സൈറ്റുകളുടെ മാനേജ്മെന്റിന്റെ കാര്യത്തിൽ പ്രശ്നങ്ങൾ പെട്ടെന്ന് പ്രത്യക്ഷപ്പെടാൻ തുടങ്ങും. മാനേജ് ചെയ്യാതെ വിട്ടാൽ നിങ്ങൾ malware-ന്റെ പ്രധാന ലക്ഷ്യമാകും. മാനേജ് ചെയ്യുക എന്നാൽ പരിശ്രമവും വിഭവങ്ങളും ആവശ്യമാണ്, WordPress സൈറ്റുകളുടെ മാനേജ്മെന്റും അഡ്മിനിസ്ട്രേഷനും കാര്യക്ഷമമാക്കാൻ സഹായിക്കുന്ന external tools-ഉം plugins-ഉം ലഭ്യമാണെങ്കിലും, ഉപഭോക്താക്കൾക്ക് administrative access ഉള്ളതിനാൽ ഈ ശ്രമങ്ങൾ എളുപ്പത്തിൽ പരാജയപ്പെടാം.

WordPress-ന്റെ core-ൽ, 'Multisite' എന്ന് പേരിട്ടിരിക്കുന്ന ഒരു സവിശേഷത ഉൾപ്പെടുത്തിയിട്ടുണ്ട്, ഇത് 2010-ൽ WordPress 3.0-ന്റെ launch-ൽ ആരംഭിച്ചതാണ്. അതിനുശേഷം പുതിയ സവിശേഷതകൾ അവതരിപ്പിക്കാനും സുരക്ഷ ശക്തിപ്പെടുത്താനും ലക്ഷ്യമിട്ട് നിരവധി പുതുക്കലുകൾ ലഭിച്ചിട്ടുണ്ട്.

ലളിതമായി പറഞ്ഞാൽ, WordPress multisite ഇങ്ങനെ ചിന്തിക്കാം: ഒരു സർവ്വകലാശാല WordPress-ന്റെ ഒരൊറ്റ installation മാത്രം പരിപാലിക്കുന്നു, പക്ഷേ ഓരോ faculty-യും അവരുടേതായ WordPress സൈറ്റ് പരിപാലിക്കുന്നു.

ഈ പ്രസ്താവന വിശദീകരിക്കാൻ, Ultimate Multisite-ന്റെ documentation-ലും WordPress community-യിലും ഉള്ള ചില അടിസ്ഥാന പദങ്ങൾ നോക്കാം.

### Network

WordPress-ന്റെ കാര്യത്തിൽ, ഒരു multisite network എന്നത് ഒരൊറ്റ dashboard-ൽ നിന്ന് നിരവധി subsites മാനേജ് ചെയ്യാൻ കഴിയുന്ന ഒരു സംവിധാനമാണ്. hosting providers-നുസരിച്ച് multisite network സൃഷ്ടിക്കുന്നത് വ്യത്യാസപ്പെടുമെങ്കിലും, അന്തിമ ഫലം സാധാരണയായി wp-config.php ഫയലിൽ WordPress ഈ പ്രത്യേക mode-ൽ പ്രവർത്തിക്കുന്നുവെന്ന് അറിയിക്കാൻ കുറച്ച് അധിക directives ആയിരിക്കും.

multisite network-ഉം stand-alone WordPress installation-ഉം തമ്മിൽ നിരവധി വ്യത്യാസങ്ങളുണ്ട്, അവ ചുരുക്കമായി ചർച്ച ചെയ്യാം.

#### Subdomain vs. Subdirectory

നിങ്ങൾ എടുക്കേണ്ട ഏറ്റവും ആദ്യത്തെ തീരുമാനങ്ങളിലൊന്ന് multisite installation _subdirectories_ അല്ലെങ്കിൽ _subdomains_ ഉപയോഗിച്ച് പ്രവർത്തിക്കുമോ എന്നതാണ്. Ultimate Multisite രണ്ട് ഓപ്ഷനുകളിലും തുല്യമായി നന്നായി പ്രവർത്തിക്കുന്നു, പക്ഷേ രണ്ട് configurations തമ്മിൽ ചില architectural വ്യത്യാസങ്ങളുണ്ട്.

_subdirectory_ configuration-ൽ, network sites പ്രധാന domain name-നെ അടിസ്ഥാനമാക്കി ഒരു path അവകാശപ്പെടുന്നു. ഉദാഹരണത്തിന്, 'site1' എന്ന് label ചെയ്ത ഒരു network site-ന്റെ പൂർണ്ണ URL https://domain.com/site1 ആയിരിക്കും. _subdomain_ configuration-ൽ, network site-ന് പ്രധാന domain name-ൽ നിന്ന് ഉരുത്തിരിഞ്ഞ അതിന്റേതായ _subdomain_ ഉണ്ടായിരിക്കും. അതിനാൽ 'site1' എന്ന് label ചെയ്ത സൈറ്റിന്റെ പൂർണ്ണ URL https://site1.domain.com/ ആയിരിക്കും.

രണ്ട് ഓപ്ഷനുകളും തികച്ചും സാധുവായ തിരഞ്ഞെടുപ്പുകളാണെങ്കിലും, _subdomains_-ന്റെ ഉപയോഗം നിരവധി ഗുണങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു, പക്ഷേ അതിന്റെ architecture-ൽ കൂടുതൽ ചിന്തയും ആസൂത്രണവും ആവശ്യമാണ്.

DNS-ന്റെ കാര്യത്തിൽ _subdirectories_-ന്റെ ഉപയോഗം താരതമ്യേന ലളിതമായ ഒരു വെല്ലുവിളിയാണ്. network sites parent path-ന്റെ children മാത്രമായതിനാൽ, പ്രധാന domain name-ന് ഒരൊറ്റ domain name entry മാത്രമേ ഉണ്ടാകേണ്ടതുള്ളൂ. _subdomains_-ന് വെല്ലുവിളി കുറച്ചുകൂടി സങ്കീർണ്ണമാണ്, ഓരോ network site-നും ഒരു separate CNAME entry അല്ലെങ്കിൽ DNS records-ൽ ഒരു wildcard (*) entry ആവശ്യമാണ്.

പരിഗണിക്കേണ്ട മറ്റൊരു മേഖല SSL-ഉം SSL certificates-ന്റെ issue-ഉം ഉപയോഗവുമാണ്. _subdirectory_ configuration-ൽ ഒരൊറ്റ domain certificate ഉപയോഗിക്കാം, കാരണം network sites പ്രധാന domain name-ന്റെ paths മാത്രമാണ്. അതിനാൽ domain.com-നുള്ള ഒരു certificate https://domain.com/site1, https://domain.com/site2 എന്നിവയ്ക്കും മറ്റുള്ളവയ്ക്കും SSL ഉചിതമായി നൽകും.

_subdomain_ configuration-ൽ wildcard SSL certificate-ന്റെ ഉപയോഗം ഏറ്റവും സാധാരണമായ ഓപ്ഷനുകളിൽ ഒന്നാണ്. ഇത്തരം SSL certificate ഒരു domain-നും അതിന്റെ _subdomains_-നും encryption നൽകുന്നു. അതിനാൽ ഒരു wildcard SSL certificate https://site1.domain.com, https://site2.domain.com, https://domain.com എന്നിവയ്ക്കും encryption നൽകും.

മറ്റ് ഓപ്ഷനുകൾ നിലവിലുണ്ടെങ്കിലും, അവ പലപ്പോഴും scope-ലും application-ലും പരിമിതമാണ്, ഉചിതത്വം സംബന്ധിച്ച് അധിക configuration-ഉം പരിഗണനയും ആവശ്യമാണ്.

#### Plugins-ഉം Themes-ഉം

WordPress തരുന്നത് എടുത്തുകളയുകയും ചെയ്യുന്നു, ഉപഭോക്താവിന്റെ കാഴ്ചപ്പാടിൽ എങ്കിലും. ഒരു stand-alone WordPress installation-ൽ site administrator ഒരു മോശം plugin install ചെയ്താൽ അല്ലെങ്കിൽ അവരുടെ installation up to date ആക്കാൻ പരാജയപ്പെട്ടാൽ, ഈ പ്രവൃത്തിയുടെ ഏക ഇര അവർ തന്നെയാണ്. എന്നിരുന്നാലും, ഒരു multisite installation-ൽ ഒരു site administrator മോശം plugin install ചെയ്യുന്നത് network-ൽ install ചെയ്തിരിക്കുന്ന എല്ലാ സൈറ്റുകളെയും ഇരയാക്കുന്നു.

ഈ കാരണത്താൽ multisite ആയി configure ചെയ്യുമ്പോൾ WordPress site administrators-ൽ നിന്ന് plugins-ഉം themes-ഉം install ചെയ്യാനുള്ള കഴിവ് നീക്കം ചെയ്യുകയും പകരം ഈ കഴിവ് പുതുതായി സൃഷ്ടിച്ച network administrator അല്ലെങ്കിൽ 'super admin' role-ലേക്ക് മാറ്റുകയും ചെയ്യുന്നു. ഈ privileged role-ന് network sites-ന്റെ administrators-ന് അവരുടെ dashboard-ൽ plugins menu കാണാനോ access ചെയ്യാനോ അനുവദിക്കണോ എന്നും, അങ്ങനെയെങ്കിൽ, അത്തരം permissions plugins _activate_ ചെയ്യാനോ _deactivate_ ചെയ്യാനോ വ്യാപിക്കണോ എന്നും തീരുമാനിക്കാം.

ഈ അളവിൽ network administrator plugins-ഉം themes-ഉം network-ലേക്ക് install ചെയ്യുന്നതിനും network sites-ന് ഈ plugins-ഉം themes-ഉം ഉപയോഗിക്കാനുള്ള permissions നൽകുന്നതിനും ഉത്തരവാദിയാണ്. Site administrators-ന് plugins-ഉം themes-ഉം install ചെയ്യാനോ അവരുടെ സൈറ്റിന് assign ചെയ്യാത്ത plugins-ഉം themes-ഉം access ചെയ്യാനോ കഴിയില്ല.

#### Users-ഉം Administrators-ഉം

WordPress Multisite-ൽ, എല്ലാ network sites-ഉം ഒരേ database share ചെയ്യുന്നു, അതിനാൽ ഒരേ users, roles, capabilities എന്നിവ share ചെയ്യുന്നു. ഇത് മനസ്സിലാക്കാനുള്ള ഏറ്റവും ഉചിതമായ വഴി, എല്ലാ users-ഉം network-ന്റെ അംഗങ്ങളാണെന്നും ഒരു പ്രത്യേക സൈറ്റിന്റേതല്ലെന്നും കരുതുക എന്നതാണ്.

ഈ ധാരണയോടെ users create ചെയ്യാൻ അനുവദിക്കുന്നത് അഭികാമ്യമല്ലായിരിക്കാം, ഈ കാരണത്താൽ WordPress Multisite ഈ കഴിവ് site administrators-ൽ നിന്ന് നീക്കം ചെയ്യുകയും network administrator-ലേക്ക് മാറ്റുകയും ചെയ്യുന്നു. തുടർന്ന് network administrator-ന് ഒരു site administrator-ന് അവരുടെ സ്വന്തം സൈറ്റിന് user accounts create ചെയ്യാൻ അനുവദിക്കുന്നതിന് ആവശ്യമായ privileges delegate ചെയ്യാൻ കഴിയും.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

മുകളിലെ പ്രസ്താവന ആവർത്തിക്കുന്നു, user accounts സൈറ്റുമായി ബന്ധപ്പെട്ടതാണെന്ന് തോന്നുമെങ്കിലും അവ യഥാർത്ഥത്തിൽ network-ലേക്ക് allocate ചെയ്യപ്പെട്ടതാണ്, അതിനാൽ network-ൽ unique ആയിരിക്കണം. ഈ കാരണത്താൽ usernames register ചെയ്യാൻ ലഭ്യമല്ലാത്ത സന്ദർഭങ്ങൾ ഉണ്ടാകാം.

enterprise systems-ൽ ഒരു അന്യമായ concept അല്ലെങ്കിലും, user registration-ന്റെയും authentication-ന്റെയും ഈ single source, user administration കുറച്ചുകൂടി എളുപ്പമായ stand-alone WordPress installations-മായി പരിചിതരായ ആളുകൾക്ക് മനസ്സിലാക്കാൻ പലപ്പോഴും ബുദ്ധിമുട്ടുള്ള ഒരു concept ആണ്.

#### Media

WordPress Multisite-ൽ network sites ഒരൊറ്റ database share ചെയ്യുന്നിടത്ത്, അവ media files-ന് filesystem-ൽ separate paths പരിപാലിക്കുന്നു.

സാധാരണ WordPress location (wp-content/uploads) നിലനിൽക്കുന്നു; എന്നിരുന്നാലും, network site-ന്റെ unique ID reflect ചെയ്യാൻ അതിന്റെ path മാറ്റുന്നു. തൽഫലമായി ഒരു network site-ന്റെ media files wp-contents/uploads/site/[id] ആയി കാണപ്പെടുന്നു.

#### Permalinks

_subdirectory_ configuration-നേക്കാൾ _subdomain_-ന്റെ വ്യതിരിക്തമായ ഗുണങ്ങളുണ്ടെന്ന് നേരത്തെ പറഞ്ഞിരുന്നു, ഇവിടെ അത്: paths.

_subdirectory_ configuration-ൽ, main site (network establish ചെയ്യുമ്പോൾ create ചെയ്ത ആദ്യ സൈറ്റ്) ഉം network subsites-ഉം domain name-ൽ നിന്ന് lead ചെയ്യുന്ന ഒരേ path share ചെയ്യണം. ഇത് നിരവധി conflicts-ന് സാധ്യതയുണ്ട്.

posts-ന്, network sites-മായുള്ള clashes തടയാൻ main site-ലേക്ക് mandatory /blog/ path add ചെയ്യുന്നു. ഇതിനർത്ഥം 'Post name' പോലുള്ള pretty permalinks domain.name/blog/post-name/ ആയി present ചെയ്യപ്പെടും.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

_subdomain_ configuration-ൽ ഈ action ആവശ്യമില്ല, കാരണം ഓരോ network site-നും complete domain separation-ന്റെ ഗുണം ലഭിക്കുന്നു, അതിനാൽ ഒരൊറ്റ path-നെ ആശ്രയിക്കേണ്ടതില്ല. പകരം അവ അവരുടെ _subdomain_-നെ അടിസ്ഥാനമാക്കി അവരുടേതായ distinct paths പരിപാലിക്കുന്നു.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

_subdirectory_ configuration-ൽ naming conflicts-ന്റെ സാധ്യത static pages-ലേക്കും വ്യാപിക്കുന്നു, കാരണം main site-ഉം network sites-ഉം ഒരേ path share ചെയ്യുന്നു.

ഇത് തടയാൻ, WordPress ചില site names blacklist ചെയ്യാനുള്ള ഒരു മാർഗ്ഗം നൽകുന്നു, അതിനാൽ അവ first site-ന്റെ names-മായി conflict ആകില്ല. സാധാരണയായി network administrator main site-ന്റെ pages-ന്റെ root paths enter ചെയ്യും.

<!-- Screenshot unavailable: WordPress network settings showing banned site names to prevent conflicts -->

_subdomain_ configuration-ൽ naming conflicts-ന്റെ സാധ്യത _subdomain_ ആൽ ലഘൂകരിക്കപ്പെടുന്നു, കാരണം അത് network site-ന് unique ആണ്, main site-മായി ഒരു വിധത്തിലും ബന്ധമില്ല.

### Registration

WordPress Multisite-ന്റെ network settings-ൽ നിരവധി പുതിയ user registration options ലഭ്യമാണ്, പുതിയതും നിലവിലുള്ളതുമായ users-ന് sites create ചെയ്യാൻ അനുവദിക്കുന്നു.

<!-- Screenshot unavailable: WordPress Multisite network settings showing registration options -->

stand-alone WordPress installations-ൽ നിന്ന് വ്യത്യസ്തമായി, network sites user registrations അനുവദിക്കാനോ ആ registrations roles-ലേക്ക് assign ചെയ്യാനോ ഉള്ള പരിചിതമായ options പരിപാലിക്കുന്നില്ല.

<!-- Screenshot unavailable: WordPress standalone site user registration settings showing limited options -->

user accounts create ചെയ്യുമ്പോൾ ആ accounts network level-ൽ generate ചെയ്യപ്പെടുന്നു. അതിനാൽ ഏതെങ്കിലും ഒരു പ്രത്യേക സൈറ്റിലേക്ക് belong ചെയ്യുന്നതിന് പകരം അവ network-ലേക്ക് belong ചെയ്യുന്നു. ഇതിന് ചില വ്യതിരിക്തമായ ഗുണങ്ങളും ദോഷങ്ങളുമുണ്ട്.

ഉദാഹരണത്തിന്, നിങ്ങളുടെ WordPress Multisite news-ഉം information-ഉം ബിസിനസിൽ ആയിരുന്നുവെന്ന് കരുതുക. നിങ്ങൾ multisite establish ചെയ്യുകയും finance, technology, entertainment, മറ്റ് interest areas-ന് network sites create ചെയ്യുകയും plugins-ഉം themes-ഉം overall control നിലനിർത്തുകയും ചെയ്യും. ഓരോ network site-നും custom post types-ഓ regular post categories-ഓ ഉള്ളതിനേക്കാൾ അവരുടെ network site-ന്റെ look and feel-ഉം user experience-ഉം സംബന്ധിച്ച് വളരെ കൂടുതൽ control ഉണ്ടായിരിക്കും.

ഈ അളവിൽ ഒരു user log in ചെയ്യുമ്പോൾ അവർ network-ലേക്ക് log in ചെയ്യുകയും ആത്യന്തികമായി ഓരോ network site-ലേക്കും log in ചെയ്യുകയും ചെയ്യുന്നു, ഒരു seamless experience നൽകുന്നു. നിങ്ങളുടെ പുതിയ സൈറ്റ് subscription based ആയിരുന്നെങ്കിൽ ഇത് ideal solution-ഉം outcome-ഉം ആയിരിക്കും.

എന്നിരുന്നാലും, multisite-ന്റെ ഉദ്ദേശിച്ച സ്വഭാവവും ഉദ്ദേശ്യവും പരസ്പരം ബന്ധമില്ലാത്ത disparate network sites offer ചെയ്യുക എന്നതായിരുന്നെങ്കിൽ, user roles manipulate ചെയ്യാൻ external അല്ലെങ്കിൽ additional plugins ആവശ്യമായി വരുന്നത് മിക്കവാറും എല്ലായ്പ്പോഴും സംഭവിക്കുന്നു.

### Domain-ഉം SSL-ഉം

നമ്മുടെ ശ്രദ്ധയിൽ നിന്ന് മിക്കവാറും രക്ഷപ്പെടുന്ന ഒരു WordPress Multisite installation-നെക്കുറിച്ച് സംസാരിക്കാം - Wordpress.com. ഇത് ഒരു Wordpress multisite-ന്റെ ഏറ്റവും വിപുലമായ ഉദാഹരണമാണ്, ഒരു ഉദ്ദേശ്യം നിറവേറ്റാൻ customize ചെയ്യാനും mould ചെയ്യാനുമുള്ള അതിന്റെ വിപുലമായ കഴിവുകൾ പ്രദർശിപ്പിക്കുന്നു.

ആധുനിക internet-ൽ SSL-ന്റെ ഉപയോഗം മിക്കവാറും mandatory ആണ്, WordPress multisites-ന്റെ network administrators ഈ challenges-മായി പെട്ടെന്ന് അഭിമുഖീകരിക്കുന്നു.

_subdomain_ configuration-ൽ sites root domain name-നെ അടിസ്ഥാനമാക്കി create ചെയ്യുന്നു. അതിനാൽ 'site1' എന്ന് label ചെയ്ത ഒരു site 'site1.domain.com' ആയി create ചെയ്യപ്പെടും. wildcard SSL certificate ഉപയോഗിച്ച്, ഒരു network administrator-ന് ഈ challenge വിജയകരമായി address ചെയ്യാനും network-ന് SSL encryption abilities നൽകാനും കഴിയും.

WordPress Multisite-ൽ ഒരു domain mapping function ഉൾപ്പെടുന്നു, ഇത് network sites-ന് custom domain names അല്ലെങ്കിൽ network-ന്റെ root domain-ൽ നിന്ന് വ്യത്യസ്തമായ domain names associate ചെയ്യാൻ അനുവദിക്കുന്നു.

network administrators-ന് ഇത് domain name configuration-ലും SSL certificates-ന്റെ issuance-ലും maintenance-ലും additional layer of complexity present ചെയ്യുന്നു.

ഈ അളവിൽ WordPress Multisite [www.anotherdomain.com](http://www.anotherdomain.com) 'site1'-ലേക്ക് map ചെയ്യാൻ ഒരു മാർഗ്ഗം നൽകുമ്പോൾ, network administrator-ന് DNS entries externally manage ചെയ്യുന്നതിന്റെയും SSL certificates implement ചെയ്യുന്നതിന്റെയും challenge ബാക്കിയുണ്ട്.

## Ultimate Multisite

stand-alone WordPress installation-ഉം Multisite installation-ഉം തമ്മിലുള്ള വ്യത്യാസങ്ങൾ മനസ്സിലാക്കിയ ശേഷം, Websites as a Service നൽകുന്നതിനുള്ള ultimate arsenal Ultimate Multisite എങ്ങനെയാണെന്ന് നോക്കാം.

### Introduction

Website as a Service (WaaS) create ചെയ്യുന്ന കാര്യത്തിൽ Ultimate Multisite നിങ്ങളുടെ Swiss Army knife ആണ്. Wix.com, Squarespace, WordPress.com എന്നിവയെക്കുറിച്ച് ചിന്തിക്കുക, തുടർന്ന് നിങ്ങളുടെ സ്വന്തം service own ചെയ്യുന്നതിനെക്കുറിച്ച് ചിന്തിക്കുക.

Under the hood Ultimate Multisite WordPress Multisite ഉപയോഗിക്കുന്നു, പക്ഷേ multisite installations-മായി network administrators അഭിമുഖീകരിക്കുന്ന മിക്കവാറും challenges solve ചെയ്യുക മാത്രമല്ല, വിവിധ use cases support ചെയ്യാൻ അനുവദിക്കുന്ന capabilities enhance ചെയ്യുകയും ചെയ്യുന്ന രീതിയിലാണ് അത് ചെയ്യുന്നത്.

ഇനിയുള്ള sections-ൽ ചില സാധാരണ use cases-ഉം ആ cases support ചെയ്യാൻ ആവശ്യമായ considerations-ഉം നോക്കാം.

### Use Cases

#### Case 1: ഒരു Agency

സാധാരണയായി ഒരു agency-യുടെ core skills websites-ന്റെ design-ലാണ്, hosting അല്ലെങ്കിൽ marketing പോലുള്ള aspects additional services ആയി list ചെയ്യുന്നു.

agencies-ന് Ultimate Multisite ഒരൊറ്റ platform-ൽ multiple websites host ചെയ്യാനും manage ചെയ്യാനുമുള്ള കഴിവുകളിൽ ഒരു incredible value proposition present ചെയ്യുന്നു. GeneratePress, Astra, OceanWP അല്ലെങ്കിൽ മറ്റുള്ളവ പോലുള്ള particular themes-ൽ designs standardize ചെയ്യുന്ന agencies-ന് ഓരോ പുതിയ site-നും ഈ themes automatically activate ചെയ്യാനുള്ള Ultimate Multisite-ന്റെ abilities leverage ചെയ്യാൻ കഴിയും.

സമാനമായി common-ഉം popular-ഉം ആയ plugins-ന് agency pricing deals-ന്റെ സമൃദ്ധിയോടെ, Ultimate Multisite-ന്റെ ഉപയോഗം agencies-ന് plugins install ചെയ്യാനും maintain ചെയ്യാനും use ചെയ്യാനുമുള്ള ഒരു common platform നൽകി existing investments leverage ചെയ്യാൻ അനുവദിക്കുന്നു.

മിക്കവാറും ഒരു configuration-ന്റെ ഉപയോഗം ആവശ്യമായി വരും, fortunately Ultimate Multisite നിരവധി popular hosting providers-മായും Cloudflare, cPanel പോലുള്ള services-മായും integrations വഴി domain mapping-ഉം SSL certificates-ഉം facilitate ചെയ്യുന്നത് incredibly easy ആക്കുന്നു.

അതിനാൽ ഈ providers-ൽ ഒന്ന് leverage ചെയ്യുന്നതിലൂടെ അല്ലെങ്കിൽ Ultimate Multisite Cloudflare-ന് പിന്നിൽ place ചെയ്യുന്നതിലൂടെ domains-ന്റെയും SSL certificates-ന്റെയും management somewhat trivial ആകുന്നു.

sites-ന്റെ creation-ൽ tight control നിലനിർത്താൻ prefer ചെയ്യുന്ന agencies Ultimate Multisite-ന്റെ streamlined interface വഴി sites create ചെയ്യാനും sites customers-മായും plans-മായും associate ചെയ്യാനും കഴിയുന്ന ease appreciate ചെയ്യും.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Ultimate Multisite-ന്റെ intuitive interfaces വഴി plugins-ഉം themes-ഉം per-product basis-ൽ tight control നിലനിർത്തുന്നു, plugins-ഉം themes-ഉം available ആക്കാനോ hidden ആക്കാനോ അവയുടെ activation state ഒരു പുതിയ site-ന് instantiate ചെയ്യുമ്പോൾ set ചെയ്യാനോ അനുവദിക്കുന്നു.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes സമാന functionality നൽകുന്നു, particular themes site creation-ൽ activate ചെയ്യാനോ hidden ആക്കാനോ അനുവദിക്കുന്നു.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies Ultimate Multisite-ൽ peace of mind കണ്ടെത്തും, അവർ ഏറ്റവും നന്നായി ചെയ്യുന്നത് ചെയ്യാൻ അനുവദിക്കുന്നു - exceptional web sites design ചെയ്യുക.

#### Case 2: Niche Provider

ഒരു പഴയ ചൊല്ലുണ്ട്, "ഒരു കാര്യം ചെയ്യുക, അത് നന്നായി ചെയ്യുക". പല specialists-നും ഇതിനർത്ഥം ഒരൊറ്റ core idea-യെ ചുറ്റിപ്പറ്റി ഒരു product അല്ലെങ്കിൽ service create ചെയ്യുക എന്നാണ്.

നിങ്ങൾ clubs-ന് websites promote ചെയ്യുന്ന ഒരു avid golfer ആയിരിക്കാം അല്ലെങ്കിൽ clans-ന് websites നൽകുന്ന ഒരു avid esports gamer ആയിരിക്കാം. restaurants-ന് booking service promote ചെയ്യുന്ന ഒരാളായിരിക്കാം?

പല കാരണങ്ങളാൽ നിങ്ങൾ ഒരു common framework-ഉം platform-ഉം അടിസ്ഥാനമാക്കി services നൽകാൻ ആഗ്രഹിക്കും. ആവശ്യമായ functionality നൽകാൻ bespoke plugins design ചെയ്തതോ invest ചെയ്തതോ ആയിരിക്കാം, അല്ലെങ്കിൽ industry best practices-ന് design-ൽ ചില standardized approach ആവശ്യമായിരിക്കാം.

Ultimate Multisite-ന്റെ innovative features-ൽ ഒന്ന് template sites-ന്റെ ഉപയോഗമാണ്. template site എന്നത് theme install ചെയ്തും activate ചെയ്തും, necessary plugins install ചെയ്തും activate ചെയ്തും, sample posts അല്ലെങ്കിൽ pages create ചെയ്തതുമായ ഒന്നാണ്. ഒരു customer template-നെ അടിസ്ഥാനമാക്കി ഒരു പുതിയ site create ചെയ്യുമ്പോൾ, template-ന്റെ contents-ഉം settings-ഉം newly created site-ലേക്ക് copy ചെയ്യപ്പെടുന്നു.

niche sites-ഉം services-ഉം ഒരു provider-ന് ഇത് custom plugins-ഉം design-ഉം ഉള്ള ready to go ആയ ഒരു site instantly create ചെയ്യാനുള്ള കഴിവിൽ unparalleled advantage നൽകുന്നു. customer-ന് service complete ചെയ്യാൻ minimal input മാത്രം നൽകിയാൽ മതി.

requirements-നെ ആശ്രയിച്ച് _subdirectory_ അല്ലെങ്കിൽ _subdomain_ configurations suit ചെയ്തേക്കാം, ഈ സാഹചര്യത്തിൽ architecture choices _subdirectories_-ന് simple SSL certificate അല്ലെങ്കിൽ _subdomains_-ന് wildcard SSL certificate എന്നിവയ്ക്കിടയിൽ ആയിരിക്കും.

#### Case 3: WordPress Web Hosting

WordPress sites host ചെയ്യാൻ മിക്കവാറും വഴികളുണ്ട്, പക്ഷേ WordPress-ന്റെ pre-installed version ഉള്ള ഒരു customer-ന് web space നൽകുന്നത് പോലെ അത് അപൂർവ്വമായി simple ആണ്. ഇതിന് കാരണം meaningful service നൽകാൻ നിരവധി decisions-ഉം considerations-ഉം ഒന്നിച്ച് വരേണ്ടതുണ്ട്.

WordPress sites-ന്റെ hosting-ന് comprehensive turnkey solution നൽകുന്നതിൽ Ultimate Multisite excel ചെയ്യുന്നു. solution-ൽ subscription services, payment collection, checkout forms, discount vouchers, customer communications എന്നിവ നൽകുന്നതിനുള്ള core mechanisms ഉൾപ്പെടുന്നു.

WordPress Multisite correctly install ചെയ്യാനും configure ചെയ്യാനും maintain ചെയ്യാനും ആവശ്യമായ integral work-ന്റെ ഭൂരിഭാഗവും Ultimate Multisite facilitate ചെയ്യുന്നു, network administrators-ന് product tiers, pricing, service offers പോലുള്ള അവരുടെ service അല്ലെങ്കിൽ niche-മായി ബന്ധപ്പെട്ട aspects മാത്രം consider ചെയ്താൽ മതി.

Ultimate Multisite-മായി integrate ചെയ്യാൻ ആഗ്രഹിക്കുന്ന developers-ന്, solution comprehensive RESTful API-ഉം event notification-ന് Webhooks-ഉം offer ചെയ്യുന്നു.

മിക്കവാറും external plugins-ഉം licenses-ഉം ആശ്രയിക്കാതെ, Ultimate Multisite Wix, Squarespace, WordPress.com, മറ്റുള്ളവയുമായി comparable ആയ feature rich solution നൽകുന്നു.

### Architecture Considerations

comprehensive guide അല്ലെങ്കിലും, ഒരു Ultimate Multisite installation support ചെയ്യുന്നതിനുള്ള technologies-ന്റെ correct selection-ന് ഇനിപ്പറയുന്ന items guidance ആയി serve ചെയ്യണം.

#### Shared vs. Dedicated Hosting

നിർഭാഗ്യവശാൽ എല്ലാ hosting providers-ഉം തുല്യമല്ല, ചിലർ extreme server densities practice ചെയ്യുന്നു. Low-cost providers സാധാരണയായി server density maximize ചെയ്ത് revenue generate ചെയ്യുന്നു. അങ്ങനെ നിങ്ങളുടെ Ultimate Multisite installation ഒരേ server-ൽ നൂറുകണക്കിന് sites-ൽ ഒന്ന് മാത്രമായിരിക്കാം.

provider-ൽ നിന്ന് appropriate safeguards ഇല്ലാതെ, shared server-ലെ sites 'noisy neighbour' problem അനുഭവിക്കുന്നു. അതായത്, ഒരേ server-ൽ ഒരു site അത്രയധികം resources consume ചെയ്യുന്നതിനാൽ മറ്റ് sites remaining resources-ന് compete ചെയ്യേണ്ടി വരുന്നു. ഇത് പലപ്പോഴും slow ആയ അല്ലെങ്കിൽ timely manner-ൽ respond ചെയ്യാൻ fail ചെയ്യുന്ന sites ആയി present ചെയ്യുന്നു.

നിങ്ങൾ തന്നെ web hosting-ന്റെ provider ആയതിനാൽ flow on effects അർത്ഥമാക്കുന്നത് നിങ്ങളുടെ customers poor speeds, low page rank, high bounce rates എന്നിവ അനുഭവിക്കും, ഫലമായി customer churn ഉണ്ടാകും, അവർ മറ്റെവിടെയെങ്കിലും services തേടുന്നു.

ചുരുക്കത്തിൽ, cheap എന്നാൽ good എന്നല്ല.

Ultimate Multisite നിരവധി good hosting providers-മായി work ചെയ്യുന്നതായി അറിയപ്പെടുന്നു, domain mapping-ഉം automatic SSL-ഉം പോലുള്ള functions നൽകാൻ അവരുടെ environment-മായി well integrate ചെയ്യുന്നു. ഈ providers performance value ചെയ്യുന്നു, shared hosting-നേക്കാൾ higher grade service നൽകുന്നു.

compatible providers-ന്റെ list-നും ഓരോന്നിനുമുള്ള complete set-up instructions-നും Compatible Providers documentation check ചെയ്യുക.

#### Performance Considerations

Ultimate Multisite slow application അല്ല, മറിച്ച്, ഇത് remarkably fast ആണ്. എന്നിരുന്നാലും, underlying application-ഉം infrastructure-ഉം പോലെ മാത്രമേ perform ചെയ്യൂ, access ഉള്ളതിനെ മാത്രമേ leverage ചെയ്യാൻ കഴിയൂ.

ഇത് consider ചെയ്യുക: നിങ്ങൾ 100 sites ഉള്ള Ultimate Multisite installation-ന്റെ network administrator ആണ്. ആ sites-ൽ ചിലത് well perform ചെയ്യുന്നു, ഓരോ ദിവസവും നിരവധി website visitors attract ചെയ്യുന്നു.

ഒന്ന് മുതൽ അഞ്ച് sites-ന്റെ smaller scale-ൽ ഈ scenario വ്യത്യസ്തമായിരിക്കും, പക്ഷേ താമസിയാതെ scale-ന്റെ problems evident ആകും.

unattended ആയി വിട്ടാൽ, single Ultimate Multisite site sites-ന്റെ എല്ലാ visitors-ന്റെയും requests fulfill ചെയ്യുന്നതിന് responsible ആയിരിക്കും. ഈ requests dynamic PHP pages-നോ stylesheets, javascript, media files പോലുള്ള static assets-നോ ആയിരിക്കാം. ഒന്നോ നൂറോ sites ആയാലും, ഈ tasks repetitive, monotonous, wasteful ആകുന്നു. ഓരോ request-നും output same static information ആയിരിക്കുമ്പോൾ PHP file process ചെയ്യാൻ CPU power-ഉം memory-ഉം use ചെയ്യേണ്ടതില്ല.

സമാനമായി PHP അല്ലെങ്കിൽ HTML page-ന്റെ one request scripts, stylesheets, image files-ന് multiple succeeding requests generate ചെയ്യുന്നു. ആ requests directly നിങ്ങളുടെ Ultimate Multisite server-ലേക്ക് target ചെയ്യുന്നു.

server upgrade ചെയ്ത് ഈ problem easily solve ചെയ്യാം, പക്ഷേ ഒരു secondary problem fix ചെയ്യുന്നില്ല - geographic latencies. multiple locations-ൽ multiple servers മാത്രമേ ഈ problem properly address ചെയ്യാൻ കഴിയൂ.

ഈ കാരണത്താൽ മിക്ക network administrators-ഉം static pages-ന്റെ requests fulfill ചെയ്യാൻ front-end caching solutions-ഉം content distribution networks (CDN)-ഉം use ചെയ്യുന്നു. ഈ requests fulfill ചെയ്യുന്നതും request server-ൽ എത്തുന്നതിന് മുമ്പ് assets serve ചെയ്യുന്നതും processing resources save ചെയ്യുന്നു, delays eliminate ചെയ്യുന്നു, unnecessary upgrades avoid ചെയ്യുന്നു, technology investments maximize ചെയ്യുന്നു.

Ultimate Multisite sophisticated Cloudflare add-on include ചെയ്യുന്നു, network administrators-ന് അവരുടെ installations Cloudflare-ന് പിന്നിൽ place ചെയ്യാനും caching capabilities മാത്രമല്ല DNS hosting, SSL certificates, security mechanisms എന്നിവയും use ചെയ്യാനും enable ചെയ്യുന്നു.

#### Backups

backups-നെക്കുറിച്ച് 50 ആളുകളോട് advice ചോദിക്കാം, backup strategies-നെക്കുറിച്ച് 50 വ്യത്യസ്ത opinions receive ചെയ്യാം. ഉത്തരം, അത് depends ചെയ്യുന്നു.

dispute ഇല്ലാത്തത് backups ആവശ്യമാണെന്നും managed service offer ചെയ്യുന്ന provider-ന് ഇവ manage ചെയ്യാത്തത് inconceivable ആണെന്നുമാണ്. തൽഫലമായി customers ഈ service provide ചെയ്യാനും manage ചെയ്യാനും network administrator-ലേക്ക് നോക്കും. network administrator ആരിലേക്ക് നോക്കുന്നു എന്നത് entirely different problem ആണ്.

ഈ section-ന്റെ ആവശ്യങ്ങൾക്കായി backup എന്നത് backup initiate ചെയ്ത സമയത്തെ system state-ന്റെ point-in-time copy ആണെന്ന് agree ചെയ്യാം. Simply put, backup-ന്റെ സമയത്ത് system-ന്റെ state എന്തായാലും ആ state capture ചെയ്ത് backup-ൽ lock away ചെയ്യുന്നു.

ഈ understanding-ഓടെ backups എങ്ങനെ achieve ചെയ്യാം, നിങ്ങളുടെ environment-ന് best എന്താണ് എന്നതിന്റെ ഉത്തരം largely depend ചെയ്യും നിങ്ങളുടെ requirements-ലും ആ requirements satisfy ചെയ്യാനുള്ള hosting provider-ന്റെ ability-യിലും. എന്നിരുന്നാലും, most opinionated-ൽ നിന്ന് least opinionated-ന്റെ order-ൽ, below options ചില guidance നൽകണം.

#### Snapshots

Snapshots backups-ന്റെ silver bullets ആണ്, കാരണം അവ easy, uncomplicated (restore ചെയ്യാൻ ആഗ്രഹിക്കുന്നത് വരെ), 'just work' ആണ്. നിങ്ങളുടെ provider-ൽ നിന്ന് ചില help ആവശ്യമാണ്, mostly VPS (Virtual Private Server) അല്ലെങ്കിൽ similar ഉണ്ടെങ്കിൽ മാത്രം apply ചെയ്യുന്നു. 'Compatible Providers' documentation-ൽ list ചെയ്തിരിക്കുന്ന നിരവധി providers network administrator-ന്റെ further intervention അല്ലെങ്കിൽ consideration ആവശ്യമില്ലാത്ത backups offer ചെയ്യുന്നു.

traditional backups files-ഉം databases-ഉം target ചെയ്യുന്നിടത്ത്, snapshot entire disk target ചെയ്യുന്നു. ഇതിനർത്ഥം site-ന്റെ data മാത്രമല്ല snapshot-ൽ capture ചെയ്യുന്നത്, operating system-ഉം configuration-ഉം കൂടിയാണ്. പലർക്കും ഇത് distinct advantage ആണ്, കാരണം snapshot-ൽ നിന്ന് nearly instantly ഒരു പുതിയ system spawn ചെയ്ത് ailing instance replace ചെയ്യാൻ operation-ലേക്ക് കൊണ്ടുവരാം. സമാനമായി, files retrieve ചെയ്യാനുള്ള recovery process-ന് snapshot image existing instance-ലേക്ക് disk ആയി attach ചെയ്താൽ മതി, അതിനാൽ files access ചെയ്തും copy ചെയ്തും എടുക്കാം.

Snapshots hosting provider-ന് additional cost attract ചെയ്തേക്കാം, പക്ഷേ ഇത് accidents-നെതിരായ insurance policy ആണ്.

#### External Scripts

WordPress-ഉം MySQL resources-ഉം backup ചെയ്യാൻ external scripts-ഉം solutions-ഉം shortage ഇല്ലെന്ന് തോന്നുന്നു, WordPress filesystem-ഉം database-ഉം use ചെയ്യുന്ന WordPress plugin ആയതിനാൽ ഇവ Ultimate Multisite-ന് well work ചെയ്യും. അതിനാൽ WordPress sites backup ചെയ്യുന്ന solution Ultimate Multisite-ന്റെ needs adequately cover ചെയ്യും.

ഒരു script-നെ മറ്റൊന്നിനെക്കാൾ recommend ചെയ്യാൻ ഞങ്ങൾക്ക് കഴിയില്ല, പക്ഷേ ഞങ്ങളുടെ general advice results desired ആണെന്ന് ensure ചെയ്യാൻ നിരവധി backup-ഉം restore tests-ഉം run ചെയ്യുക, 'be sure to be sure' ആയിരിക്കുക, script-ഉം അതിന്റെ functionality-ഉം continuously evaluate ചെയ്യുക, specifically ചില form-ലെ differential backup strategy apply ചെയ്യുന്നിടത്ത്.

ഈ scripts run ചെയ്യുമ്പോൾ system load increase ചെയ്യുമെന്ന് note ചെയ്യണം, ഇത് account-ൽ എടുക്കണം.

#### Plugins

WordPress-ൽ plugin കൊണ്ട് solve ചെയ്യാൻ കഴിയാത്ത problem മിക്കവാറും ഇല്ല, external scripts manage ചെയ്യുന്നത് നിങ്ങളുടെ cup of java അല്ലെങ്കിൽ ഒരു plugin next best option ആയിരിക്കാം.

plugins options-ലും features-ലും vary ചെയ്യുമെങ്കിലും അവ mostly same function perform ചെയ്യുന്നു, അതായത് WordPress files-ന്റെയും database contents-ന്റെയും copy make ചെയ്യുക. അതിനുശേഷം functionalities differ ചെയ്യുന്നു, ചില plugins Google Drive അല്ലെങ്കിൽ Dropbox പോലുള്ള external services-ലേക്കോ S3, Wasabi അല്ലെങ്കിൽ മറ്റുള്ളവ പോലുള്ള compatible object storage service-ലേക്കോ backups ship ചെയ്യാൻ കഴിയും. more comprehensive plugins differential backups അല്ലെങ്കിൽ external storage costs save ചെയ്യാൻ change ചെയ്ത data മാത്രം backup ചെയ്യാനുള്ള ചില strategy നൽകുന്നു.

നിങ്ങളുടെ plugin select ചെയ്യുമ്പോൾ, ഇത് multisite aware ആണെന്ന് verify ചെയ്യാൻ ശ്രദ്ധിക്കുക. operation-ന്റെ nature കാരണം backup run ചെയ്യുമ്പോൾ process complete ആകുന്നത് വരെ server-ൽ temporary load expect ചെയ്യാം.

#### Domain-ഉം SSL-ഉം

multisite _subdomain_ mode-ലെ domain names-നെക്കുറിച്ച് already much discuss ചെയ്തിട്ടുണ്ട്. network administrators-ന് almost universal solution wildcard DNS entries use ചെയ്യുക എന്നതാണ്.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

ഇത്തരം DNS entry 'site1.domain.com', 'site2.domain.com' പോലുള്ള _subdomains_ 1.2.3.4 എന്ന IP address-ലേക്ക് successfully resolve ചെയ്യും, അതിനാൽ Ultimate Multisite-നെയും larger extent-ൽ _subdomain_ mode use ചെയ്യുന്ന WordPress Multisite-നെയും support ചെയ്യുന്നു.

ഇത് HTTP-ന് perfectly well work ചെയ്തേക്കാം, കാരണം target host HTTP headers-ൽ നിന്ന് read ചെയ്യുന്നു, പക്ഷേ secure HTTPS transactions almost mandatory ആയ ഈ ദിവസങ്ങളിൽ web അത്ര simple ആയിരിക്കുന്നത് അപൂർവ്വമാണ്.

Fortunately SSL certificates-ന് easy options ഉണ്ട്. _subdirectory_ mode-ൽ regular domain certificate use ചെയ്യാം. ഇവ free LetsEncrypt service അല്ലെങ്കിൽ മറ്റൊരു source use ചെയ്യുന്ന hosting providers-ൽ നിന്ന് readily-ഉം freely-ഉം available ആണ്. അല്ലെങ്കിൽ certificate signing request generate ചെയ്യാൻ കഴിയുമെങ്കിൽ authorities-ൽ നിന്ന് commercially available ആണ്.

_subdomain_ mode-ന് wildcard SSL certificate-ന്റെ ഉപയോഗം wildcard domain-മായി perfectly pair ചെയ്യും, extraneous configuration ഇല്ലാതെ root domain-നും എല്ലാ _subdomains_-നും certificate authoritative ആയിരിക്കാൻ allow ചെയ്യും.

എന്നിരുന്നാലും, wildcard SSL certificates enterprise plan-ൽ ഇല്ലെങ്കിൽ Cloudflare പോലുള്ള services-മായി work ചെയ്തില്ലെന്നോ entry DNS only-ലേക്ക് set ചെയ്യണമെന്നോ note ചെയ്യണം, ഈ case-ൽ എല്ലാ caching-ഉം optimization-ഉം bypass ചെയ്യുന്നു.

Out-of-the-box Ultimate Multisite WordPress multisites-ന്റെ needs-മായുള്ള ഞങ്ങളുടെ extensive experience demonstrate ചെയ്ത് ഈ problem-ന് solution നൽകുന്നു. ഈ simple add-on activate ചെയ്യുന്നത് Ultimate Multisite-ന് നിങ്ങളുടെ Cloudflare credentials use ചെയ്ത് Cloudflare-ൽ network sites-ന് automatically DNS entries add ചെയ്യാനും അവരുടെ mode 'proxied'-ലേക്ക് set ചെയ്യാനും അനുവദിക്കും. ഈ manner-ൽ ഓരോ network subsite-ഉം create ചെയ്യുമ്പോൾ SSL ഉൾപ്പെടെ Cloudflare-ന്റെ full protection-ഉം benefits-ഉം ഉണ്ടായിരിക്കും.

നിങ്ങളുടെ Ultimate Multisite installation-ന്റെ nature-ഉം purpose-ഉം അനുസരിച്ച് customers അവരുടെ own domains use ചെയ്യേണ്ട ആവശ്യം ഉണ്ടാകാം. ഈ case-ൽ network administrator-ന് രണ്ട് problems solve ചെയ്യേണ്ടതുണ്ട്. ഒന്ന്, domain name-ന്റെ hosting, രണ്ട്, domain-ന് SSL certificates.

പലർക്കും Cloudflare-ന്റെ ഉപയോഗം easy option ആണ്. customer അവരുടെ domain Cloudflare-ൽ place ചെയ്യുക, Ultimate Multisite-ന്റെ root domain-ലേക്ക് CNAME point ചെയ്യുക, Ultimate Multisite-ൽ domain map ചെയ്യുക, എന്നിട്ട് custom domain name-ന്റെ advantage എടുക്കാൻ തുടങ്ങുക.

ഇതിന് പുറത്ത്, alternative solutions seek ചെയ്യണം, അതുകൊണ്ടാണ് Ultimate Multisite Compatible Providers-ന്റെ list recommend ചെയ്യുന്നത്. DNS-ഉം SSL-ഉം set up ചെയ്യുന്ന process non-trivial process ആകാം എന്നതാണ് കാരണം. എന്നിരുന്നാലും, ഈ providers-മായുള്ള Ultimate Multisite-ന്റെ integration-ഓടെ complexity much remove ചെയ്യപ്പെടുകയും procedure automated ആകുകയും ചെയ്യുന്നു.

#### Plugins

നിങ്ങളുടെ customers-നോ network sites-നോ functionality നൽകാൻ additional plugins ആവശ്യമാകാൻ highly likely ആണ്. എല്ലാ plugins-ഉം WordPress Multisite-ഉം Ultimate Multisite-ഉം ആയി work ചെയ്യുമോ? Well, it depends.

മിക്ക plugins-ഉം WordPress Multisite-ൽ installable ആണെങ്കിലും അവയുടെ activation-ഉം licensing-ഉം author-ൽ നിന്ന് author-ലേക്ക് vary ചെയ്യുന്നു.

challenge licensing എങ്ങനെ apply ചെയ്യുന്നു എന്നതിലാണ്, ചില plugins per-domain basis-ൽ licensing ആവശ്യപ്പെടുന്നു. ഇതിനർത്ഥം ചില plugins-ന് network administrator ഓരോ പുതിയ site-ലും ഓരോ plugin-നും manually license activate ചെയ്യേണ്ടതുണ്ട്.

അതിനാൽ plugin author-നോട് അവരുടെ plugin WordPress Multisite-മായി എങ്ങനെ work ചെയ്യുമെന്നും license ചെയ്യാൻ ആവശ്യമായ special requirements അല്ലെങ്കിൽ procedures എന്നും check ചെയ്യുന്നത് best ആയിരിക്കും.
