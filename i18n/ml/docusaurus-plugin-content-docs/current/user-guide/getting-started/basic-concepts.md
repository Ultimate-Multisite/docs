---
title: അടിസ്ഥാന ആശയങ്ങൾ
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# അടിസ്ഥാന ആശയങ്ങൾ

WordPress Multisite-ൽ പുതുതായി വരുന്നവർക്കും Ultimate Multisite ഉപയോഗിക്കാൻ തുടങ്ങിയവർക്കും ആദ്യം ധാരാളം പുതിയ വാക്കുകളും പദപ്രയോഗങ്ങളും മനസ്സിലാക്കേണ്ടി വരും. ഇവ പഠിക്കുന്നത് വളരെ പ്രധാനമാണ്, കാരണം പ്ലാറ്റ്ഫോമും അതിന്റെ പ്രവർത്തനരീതിയും മൊത്തത്തിൽ മനസ്സിലാക്കാൻ ഇത് അത്യാവശ്യമാണ്.

ഈ ലേഖനത്തിൽ, WordPress-ലെ ചില പ്രധാന ആശയങ്ങൾ വിശദീകരിക്കാൻ ശ്രമിക്കുന്നു. ഇവയിൽ ചിലത് ഉപയോക്താക്കൾക്ക് കൂടുതൽ പ്രസക്തമാണ്, മറ്റുള്ളവ ഡെവലപ്പർമാർക്ക്, ചിലത് രണ്ടുകൂട്ടർക്കും ഉപകാരപ്രദമാണ്.

## WordPress Multisite

WordPress **Multisite** എന്നത് ഒരു WordPress ഇൻസ്റ്റലേഷൻ തരമാണ്, ഇത് ഒരൊറ്റ WordPress dashboard-ൽ നിന്ന് ഒന്നിലധികം വെബ്സൈറ്റുകളുടെ ഒരു നെറ്റ്‌വർക്ക് സൃഷ്ടിക്കാനും നിയന്ത്രിക്കാനും നിങ്ങളെ അനുവദിക്കുന്നു. സൈറ്റുകളുടെ എണ്ണം, ഫീച്ചറുകൾ, themes, user roles എന്നിവയുൾപ്പെടെ എല്ലാം നിങ്ങൾക്ക് നിയന്ത്രിക്കാം. നൂറുകണക്കിനും ആയിരക്കണക്കിനും സൈറ്റുകൾ നിയന്ത്രിക്കാൻ സാധിക്കും.

## Network

WordPress-ന്റെ കാര്യത്തിൽ, ഒരു multisite network എന്നത് ഒരൊറ്റ dashboard-ൽ നിന്ന് നിരവധി **subsites** നിയന്ത്രിക്കാൻ കഴിയുന്ന ഒരു സംവിധാനമാണ്. Multisite network സൃഷ്ടിക്കുന്ന രീതി ഹോസ്റ്റിംഗ് ദാതാക്കൾക്കനുസരിച്ച് വ്യത്യാസപ്പെടുന്നുണ്ടെങ്കിലും, അന്തിമഫലം സാധാരണയായി **wp-config.php** ഫയലിൽ കുറച്ച് അധിക നിർദ്ദേശങ്ങൾ ചേർക്കുന്നതാണ് - WordPress ഈ പ്രത്യേക മോഡിൽ പ്രവർത്തിക്കുന്നുവെന്ന് അറിയിക്കാൻ.

Multisite network-ഉം ഒറ്റയ്ക്കുള്ള WordPress ഇൻസ്റ്റലേഷനും തമ്മിൽ നിരവധി വ്യത്യാസങ്ങളുണ്ട്, അവ നമുക്ക് ചുരുക്കമായി ചർച്ച ചെയ്യാം.

## Database

Database എന്നത് ഘടനാപരമായി ക്രമീകരിച്ച ഡാറ്റയുടെ ഒരു ശേഖരമാണ്. കമ്പ്യൂട്ടിംഗ് പരിഭാഷയിൽ, ഡാറ്റ സംഭരിക്കാനും ക്രമീകരിക്കാനും ഉപയോഗിക്കുന്ന സോഫ്റ്റ്‌വെയറിനെയാണ് database എന്ന് വിളിക്കുന്നത്. tables എന്ന് വിളിക്കുന്ന വിവിധ വിഭാഗങ്ങളിൽ ഡാറ്റ സൂക്ഷിക്കുന്ന ഒരു ഫയൽ കാബിനറ്റ് ആയി ഇതിനെ സങ്കൽപ്പിക്കാം.

WordPress Multisite ഒരു database ഉപയോഗിക്കുന്നു, ഓരോ subsite-നും prefix-ൽ blog id ഉള്ള അതിന്റേതായ tables ലഭിക്കുന്നു. അതിനാൽ നിങ്ങൾ ഒരു network installation ഇൻസ്റ്റാൾ ചെയ്ത് ഒരു subsite സൃഷ്ടിച്ചുകഴിഞ്ഞാൽ, നിങ്ങളുടെ database-ൽ ഈ tables ഉണ്ടായിരിക്കും:

_wp_1_options_ \- ആദ്യ subsite-ന്റെ options table

_wp_2_options_ \- രണ്ടാമത്തെ subsite-ന്റെ options table

## Hosting provider

Hosting provider എന്നത് ബിസിനസുകൾക്കും വ്യക്തികൾക്കും അവരുടെ വെബ്സൈറ്റുകൾ World Wide Web വഴി ലഭ്യമാക്കാൻ സഹായിക്കുന്ന ഒരു കമ്പനിയാണ്. Web hosting providers വാഗ്ദാനം ചെയ്യുന്ന സേവനങ്ങൾ വ്യത്യാസപ്പെടാം, എന്നാൽ സാധാരണയായി വെബ്സൈറ്റ് ഡിസൈൻ, ഒരു host-ൽ storage space, ഇന്റർനെറ്റ് കണക്ടിവിറ്റി എന്നിവ ഉൾപ്പെടുന്നു.

## Domain

Domain name എന്നത് നിങ്ങളുടെ സൈറ്റ് സന്ദർശിക്കാൻ ആളുകൾ ഉപയോഗിക്കുന്ന ഒരു വിലാസമാണ്. നിങ്ങളുടെ സൈറ്റ് എവിടെ നോക്കണമെന്ന് ഇത് web browser-നോട് പറയുന്നു. ഒരു തെരുവ് വിലാസം പോലെ, ഓൺലൈനിൽ നിങ്ങളുടെ വെബ്സൈറ്റ് ആളുകൾ സന്ദർശിക്കുന്നത് domain വഴിയാണ്. നിങ്ങളുടെ കടയുടെ മുന്നിൽ ഒരു ബോർഡ് വയ്ക്കുന്നത് പോലെയാണിത്. ഞങ്ങളുടെ വെബ്സൈറ്റ് സന്ദർശിക്കാൻ, നിങ്ങളുടെ browser-ന്റെ address bar-ൽ ഞങ്ങളുടെ web address ടൈപ്പ് ചെയ്യണം, അത് [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) ആണ്, ഇവിടെ [**ultimatemultisite.com**](http://ultimatemultisite.com) ആണ് domain name.

## Subdomain

Subdomain എന്നത് പ്രധാന domain-ന് കീഴിലുള്ള ഒരു തരം വെബ്സൈറ്റ് ശ്രേണിയാണ്, എന്നാൽ ഒരു വെബ്സൈറ്റിൽ ഉള്ളടക്കം ക്രമീകരിക്കാൻ folders ഉപയോഗിക്കുന്നതിന് പകരം, ഇത് സ്വന്തമായി ഒരു വെബ്സൈറ്റ് പോലെ ലഭിക്കുന്നു. ഇത് [**https://site1.domain.com/**](https://site1.domain.com/) എന്ന രീതിയിൽ അവതരിപ്പിക്കുന്നു, ഇവിടെ _site1_ ആണ് subdomain name, [_domain.com_](http://domain.com) ആണ് പ്രധാന domain.

## Subdirectory

Subdirectory എന്നത് ഒരു root domain-ന് കീഴിലുള്ള ഒരു തരം വെബ്സൈറ്റ് ശ്രേണിയാണ്, ഇത് വെബ്സൈറ്റിൽ ഉള്ളടക്കം ക്രമീകരിക്കാൻ folders ഉപയോഗിക്കുന്നു. Subdirectory എന്നത് subfolder-ന്റെ അതേ അർത്ഥമാണ്, രണ്ട് പേരുകളും മാറിമാറി ഉപയോഗിക്കാം. ഇത് [**https://domain.com/site1**](https://domain.com/site1) എന്ന രീതിയിൽ അവതരിപ്പിക്കുന്നു, ഇവിടെ _site1_ ആണ് subdirectory name, [_domain.com_](http://domain.com) ആണ് പ്രധാന domain.

## Subsite

Subsite എന്നത് ഒരു Multisite network-ൽ നിങ്ങൾ സൃഷ്ടിക്കുന്ന ഒരു child site ആണ്. നിങ്ങളുടെ WordPress Multisite ഇൻസ്റ്റലേഷൻ എങ്ങനെ ക്രമീകരിച്ചിരിക്കുന്നു എന്നതിനനുസരിച്ച് ഇത് **subdomain** അല്ലെങ്കിൽ **subdirectory** ആകാം.

## Super Admin

WordPress Super Admin എന്നത് ഒരു Multisite network-ലെ എല്ലാ subsites-ഉം നിയന്ത്രിക്കാനുള്ള പൂർണ്ണ കഴിവുകളുള്ള ഒരു user role ആണ്. Multisite ഉപയോക്താക്കൾക്ക്, നിങ്ങളുടെ WordPress ഇൻസ്റ്റലേഷനിൽ നൽകാൻ കഴിയുന്ന **ഏറ്റവും ഉയർന്ന തലത്തിലുള്ള ആക്സസ്** ഇതാണ്.

## Plugin

പൊതുവേ, plugin എന്നത് നിങ്ങളുടെ WordPress സൈറ്റിലേക്ക് അധിക പ്രവർത്തനക്ഷമത ചേർക്കുന്ന ഒരു കൂട്ടം code ആണ്. ലോഗിൻ logo മാറ്റുന്നത് പോലെ ലളിതമോ e-commerce പ്രവർത്തനക്ഷമത ചേർക്കുന്നത് പോലെ സങ്കീർണ്ണമോ ആകാം ഇത്. _Woocommerce, Contact Form_ എന്നിവ plugin-ന്റെ ഉദാഹരണങ്ങളാണ്.

ഒരു WordPress Multisite-ൽ, Super Admin-ന് മാത്രമേ network admin dashboard-ൽ നിന്ന് plugins ഇൻസ്റ്റാൾ ചെയ്യാൻ കഴിയൂ. Subsite Admins-ന് അവരുടെ subsite-ൽ plugins activate-ഉം deactivate-ഉം ചെയ്യാൻ മാത്രമേ കഴിയൂ.

## Themes

WordPress theme എന്നത് സൈറ്റിന്റെ മൊത്തത്തിലുള്ള രൂപം നിർണ്ണയിക്കുന്ന ഒരു കൂട്ടം ഫയലുകളാണ് (_graphics, style sheets, code_). Font styling, page layout, colors മുതലായവ പോലുള്ള എല്ലാ front-end stylings-ഉം ഇത് നൽകുന്നു.

Plugins പോലെ തന്നെ, WordPress Multisite-ൽ themes Super Admin-ന് മാത്രമേ ഇൻസ്റ്റാൾ ചെയ്യാൻ കഴിയൂ, subsite admins-ന് subsite level-ൽ activate ചെയ്യാൻ കഴിയും.

## Site Template

**Site Template** എന്നത് നിങ്ങളുടെ network-ൽ പുതിയ സൈറ്റുകൾ സൃഷ്ടിക്കുമ്പോൾ അടിസ്ഥാനമായി ഉപയോഗിക്കാവുന്ന ഒരു boilerplate സൈറ്റാണ്.

അതായത്, നിങ്ങൾക്ക് ഒരു base site സൃഷ്ടിക്കാം, വ്യത്യസ്ത plugins activate ചെയ്യാം, ഒരു active theme സെറ്റ് ചെയ്യാം, നിങ്ങൾക്ക് ഇഷ്ടമുള്ള രീതിയിൽ customize ചെയ്യാം. അപ്പോൾ, നിങ്ങളുടെ ഉപഭോക്താവ് ഒരു പുതിയ അക്കൗണ്ട് സൃഷ്ടിക്കുമ്പോൾ, അർത്ഥവത്തായ ഉള്ളടക്കമില്ലാത്ത ഒരു default WordPress സൈറ്റിന് പകരം, എല്ലാ customizations-ഉം contents-ഉം ഉള്ള നിങ്ങളുടെ base site-ന്റെ ഒരു പകർപ്പ് അവർക്ക് ലഭിക്കും.

## Domain Mapping

WordPress-ലെ **Domain mapping** എന്നത് ഒരു വെബ്സൈറ്റിന്റെ വിലാസത്തിലൂടെ ഉപയോക്താക്കളെ ശരിയായ host-ലേക്ക് redirect ചെയ്യാനുള്ള ഒരു മാർഗമാണ്. ഒരു WordPress Multisite-ൽ, subsites subdirectory അല്ലെങ്കിൽ subdomain ഉപയോഗിച്ചാണ് സൃഷ്ടിക്കുന്നത്. Domain mapping എന്താണ് ചെയ്യുന്നതെന്നാൽ, [**joesbikeshop.com**](http://joesbikeshop.com) പോലുള്ള ഒരു top-level domain ഉപയോഗിച്ച് subsite ഉപയോക്താക്കൾക്ക് അവരുടെ സൈറ്റ് വിലാസം കൂടുതൽ പ്രൊഫഷണലായി കാണിക്കാൻ അനുവദിക്കുന്നു.

## SSL

SSL എന്നാൽ **Secure Sockets Layer** എന്നാണ്. ഇത് ഒരു വെബ്സൈറ്റിന്റെ ഐഡന്റിറ്റി സാക്ഷ്യപ്പെടുത്തുകയും ഒരു encrypted connection പ്രാപ്തമാക്കുകയും ചെയ്യുന്ന ഒരു digital certificate ആണ്. ഇന്ന് ഇത് ഒരു ഇന്റർനെറ്റ് കണക്ഷൻ സുരക്ഷിതമായി നിലനിർത്താനും രണ്ട് സിസ്റ്റങ്ങൾക്കിടയിൽ അയയ്ക്കുന്ന ഏതെങ്കിലും സെൻസിറ്റീവ് ഡാറ്റ സംരക്ഷിക്കാനുമുള്ള standard technology ആയി ഉപയോഗിക്കുന്നു, വ്യക്തിഗത വിവരങ്ങൾ ഉൾപ്പെടെ കൈമാറ്റം ചെയ്യുന്ന ഏത് വിവരവും വായിക്കുന്നതിൽ നിന്നും മാറ്റം വരുത്തുന്നതിൽ നിന്നും കുറ്റവാളികളെ തടയുന്നു. ആധുനിക browsers-ന് SSL ആവശ്യമാണ്, ഇത് ഒരു വെബ്സൈറ്റ് സൃഷ്ടിക്കുമ്പോഴും പ്രവർത്തിപ്പിക്കുമ്പോഴും അത്യാവശ്യമാക്കുന്നു.

## Media

Media എന്നത് ഒരു വെബ്സൈറ്റ് നിർമ്മിക്കുന്ന images, audio, video, മറ്റ് files എന്നിവയാണ്.

WordPress Multisite-ൽ network sites ഒരൊറ്റ database പങ്കിടുന്നു, എന്നാൽ media files-ന് filesystem-ൽ പ്രത്യേക paths നിലനിർത്തുന്നു.

Standard WordPress location (wp-content/uploads) അതേപടി നിലനിൽക്കുന്നു; എന്നിരുന്നാലും, network site-ന്റെ unique ID പ്രതിഫലിപ്പിക്കാൻ അതിന്റെ path മാറ്റപ്പെടുന്നു. അതിനാൽ ഒരു network site-ന്റെ media files wp-contents/uploads/site/[id] എന്ന രീതിയിൽ കാണപ്പെടുന്നു.

## Permalinks

Permalinks എന്നത് നിങ്ങളുടെ സൈറ്റിനുള്ളിലെ ഓരോ blog post-ന്റെയോ page-ന്റെയോ permanent URLs ആണ്. Permalinks-നെ **pretty links** എന്നും വിളിക്കുന്നു. Default ആയി, WordPress URLs query string format ഉപയോഗിക്കുന്നു, ഇത് ഇതുപോലെ കാണപ്പെടുന്നു:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite എന്നത് WordPress Multisite installs-നായി നിർമ്മിച്ച ഒരു WordPress plugin ആണ്, ഇത് നിങ്ങളുടെ WordPress install-നെ [WordPress.com](https://WordPress.com) പോലെ ഒരു premium network of sites ആക്കി മാറ്റുന്നു - മാസം, ത്രൈമാസം, അല്ലെങ്കിൽ വാർഷിക ഫീസ് വഴി clients-ന് സൈറ്റുകൾ സൃഷ്ടിക്കാൻ അനുവദിക്കുന്നു (നിങ്ങൾക്ക് Free plans-ഉം സൃഷ്ടിക്കാം).

## Checkout Form

Checkout Form എന്നത് Ultimate Multisite registration വഴി subsite, membership, user accounts എന്നിവയുടെ creation ഉൾപ്പെടുന്ന ഒരു single അല്ലെങ്കിൽ multi-step order form ആണ്. Sign-up process-ൽ ഒരു user submit ചെയ്യേണ്ട വ്യത്യസ്ത fields-ഉം payment forms-ഉം ഇതിൽ അടങ്ങിയിരിക്കുന്നു.

## Webhook

Webhook (web callback അല്ലെങ്കിൽ HTTP push API എന്നും വിളിക്കുന്നു) എന്നത് ഒരു app-ന് മറ്റ് applications-ന് real-time വിവരങ്ങൾ നൽകാനുള്ള ഒരു മാർഗമാണ്. Webhook data മറ്റ് applications-ലേക്ക് സംഭവിക്കുമ്പോൾ തന്നെ എത്തിക്കുന്നു, അതായത് നിങ്ങൾക്ക് data ഉടൻ ലഭിക്കുന്നു.

**Ultimate Multisite webhooks** അനന്തമായ സാധ്യതകൾ തുറക്കുന്നു, പ്രത്യേകിച്ച് _Zapier, IFTTT_ പോലുള്ള services-മായി സംയോജിച്ച് ഉപയോഗിക്കുമ്പോൾ, network admins-ന് എല്ലാത്തരം ഉപയോഗപ്രദമായ integrations ചെയ്യാൻ അനുവദിക്കുന്നു.

## Events

Event എന്നത് ഉപയോക്താവിന്റെയോ മറ്റൊരു source action-ന്റെയോ ഫലമായി സംഭവിക്കുന്ന ഒരു action ആണ്, ഉദാഹരണത്തിന് ഒരു mouse click. Ultimate Multisite നിങ്ങളുടെ മുഴുവൻ network-ലും സംഭവിക്കുന്ന എല്ലാ events-ന്റെയും logs-ന്റെയും ഒരു record സൂക്ഷിക്കുന്നു. Plan changes പോലുള്ള നിങ്ങളുടെ multisite-ൽ സംഭവിക്കുന്ന വ്യത്യസ്ത activities ഇത് track ചെയ്യുന്നു.
