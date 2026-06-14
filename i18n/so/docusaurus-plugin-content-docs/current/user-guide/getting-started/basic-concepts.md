---
title: Fikradaha Aasaasiga ah
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Fikradaha Aasaasiga ah

Haddii aad tahay isticmaalaya yar oo WordPress Multisite ah oo cusub, iyo qof ayaa mar hore bilaabaya isticmaalka Ultimate Multisite, waxaa jira erayo iyo weedho cusub oo badan oo aad baranaysid. Waxaa muhiim ah inaad bartid iyaga sababtoo ah waxaad u baahan doontaa inaad fahanto platform-ka iyo sida ay u shaqeeyaan guud.

Maqaalkan, waxaan isku dayi doonaa inaan qaar ka mid ah fikradaha muhiimka ee WordPress aan u qeexno oo aan sharaxno. Qaar ayaa si gaar ah ugu habboon isticmaalayaasha, kuwa kale developer-yada, iyo kuwa labadaba.

## WordPress Multisite

WordPress **Multisite** waa nooc ka mid ah warbixinta (installation) WordPress oo kuu oggolaanaya inaad samayso oo maamushiso shabakad (network) oo websiteyo badan iyadoo la isticmaalayo dashboard-ka hal weli. Waxaad maamuli kartaa dhammaan waxyaabaha, oo ay ku jirto tirada websites, astaamaha (features), themes-yada, iyo doorashooyinka isticdellada (user roles). Waxay suurtagal tahay inaad maamushiso boqolaal iyo laam-dhowr websites.

## Network

Marka la eego WordPress, shabakadda multisite waa meesha aad ka maamuli karto inta badan **subsites** iyadoo la isticmaalayo dashboard hal weli ah. In kasta oo habka loo samaynayo shabakadda multisite uu kala duwan yahay bixiyeya hosting-ka, natiijada ugu dambaysa waxay caadi ahaan tahay in la dheereeyo qaar ka mid ah tilmaamaha ku jira faylka **wp-config.php** si WordPress u ogaado inuu shaqaynayo qaabkan gaarka ah.

Waxaa jira farqiyo badan oo kala duwan inta u dhashaan shabakad (multisite network) iyo warbixinta WordPress oo ku jirta hal server (stand-alone installation), waxaan si kooban uga hadli doonaa.

## Database

Database waa macluumaad la habaysan oo loo habeeyay. Erayga farsamada kombuyuutarka, database waxay ka tiri software-ka loo isticmaalo inuu kaydiyo oo uu habaysiiyo macluumaadka. Waxaad u malayn kartaa inay tahay furaha fayl (file cabinet) oo aad ku kaydsato macluumaadka qaybo kala duwan loo magacaabo "tables".

WordPress Multisite wuxuu isticmaalaa database hal ah, laakiin subsite kasta wuxuu helayaa tables-kiisa gaarka ah iyadoo la isticmaalayo blog id-ga (blog ID) ee prefix-ka. Sidaas darteed, markaad installay warbixinta network-kaaga oo aad samaysato subsite, waa inaad haysataa tables-kan:

_wp_1_options_ - table-ka options-ka (waxyaabaha la beddeli karo) ee subsite-ka koowaad

_wp_2_options_ - table-ka options-ka ee subsite-ka labaad

Bixiyaha hosting waa shirkadta u oggolaanaysa ganacsiyada iyo qoflada inay website-yadeeda kuugu soo bandhigaan World Wide Web-ka. Adeegyinnada ay bixiyaha hostingku bixiyo waxay kala duwan yihiin laakiin inta badan waxaa ka mid ah naqshinta website-ka, meel kaydka (storage space) ee host-ka, iyo xiriirka Internet-ka.

## Domain

Magaca domain-ka waa ciwaan (address) dadku isticmaala si ay booqdaan website-kaaga. Wuxuu browser-ka web-ka sheegayaa meesha uu raadinayo website-kaaga. Sida ciwaanka waddada, magaca domain-ku waa sida dadku u booqdaan website-kaaga online. Waxay u badan tahay in la isticmaalo calaamadda (sign) oo hore u soo bandhigda dukaanadaada. Haddii aad rabto inaad booqato website-keena, waxaad u baahan doontaa inaad qorto ciwaanka web-kaaga browser-kaaga ee ah [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), halkaas oo [**ultimatemultisite.com**](http://ultimatemultisite.com) uu yahay magaca domain-ka.

## Subdomain (Domain-ka Hoose)

Subdomain waa nooc ka mid ah habka loo habeeyo website-ka oo ku jira domain-ka ugu weyn, laakiin badanaa halkii lagu isticmaali lahaa folders si loo habeeyo waxyaabaha ku jira website-ka, waxay u qaadataa inay tahay website-ga gaarka ah. Waxaa laga arki karaa sida [**https://site1.domain.com/**](https://site1.domain.com/) halkaas oo _site1_ uu yahay magaca subdomain-ka iyo [_domain.com_](http://domain.com) uu yahay domain-ka ugu weyn.

## Subdirectory (Folder Hoose)

Subdirectory waa nooc ka mid ah habka loo habeeyo website-ka ee ku jira root domain, waxaana isticmaalaya folders si loo habeeyo waxyaabaha ku jira website-ka. Subdirectory wuxuu la mid yahay subfolder, magacyadaasuna la isku beddeli karaan. Waxaa laga arki karaa sida [**https://domain.com/site1**](https://domain.com/site1) halkaas oo _site1_ uu yahay magaca subdirectory-ga iyo [_domain.com_](http://domain.com) uu yahay domain-ka ugu weyn.

## Subsite (Website Hoose)

Subsite waa meel aad samayn karto oo ku dhisid (child site) oo ku jirta shabakad Multisite. Waxay noqon kartaa **subdomain** ama **subdirectory**, iyadoo ku xiran sida aad u dejisay warxadda WordPress Multisite-kaaga.

## Super Admin

WordPress Super Admin waa doorkii isticmaalayaasha leh awoodda buuxda ee lagu maamulo dhammaan subsites-yada shabakadda Multisite-ka ah. Ujeeddooyinka isticmaalayaasha Multisite, waa **heshiiska ugu sarreeya** ee aad u bixin karto warxadda WordPress-kaaga.

## Plugin

Guud ahaan, plugin waa qayb ka mid ah kood (code) oo ku daraya waxa kale ee shaqada website-kaaga WordPress. Waxay noqon kartaa mid fudud sida beddelidda logo-ga galista ama mid adag sida ku daridda hababka ganacsiga online-ka (e-commerce). _Woocommerce_ iyo _Contact Form_ waa tusaale plugin ah.

**WordPress Multisite-ka, plugins-ka waxaa lagu soo saari karaa maamulka shirkadda (network admin dashboard) oo kaliya Super Admin-ka ah. Maamulayaasha subsite-yada waxay kaliya ku shaqeeyaan (activate) iyo ka xiridda (deactivate) plugins-ka ee subsite-yada ay leeyihiin.**

## Themes (Qoraallada Muuqaalka)

**Theme-ku WordPress-ka waa koox ka mid ah faylasha (_sawirrada, style sheets-ka, iyo koodka_) oo go'aamiya muuqaalka guud ee website-ka. Waxay bixisaa dhammaan qaabdhismeedka hore (front-end stylings) sida qaabka fontka, qaab dhismeedka bogga, midabada, iwm.**

**Sida plugins-ka, themes-ku WordPress Multisite-ka waxaa lagu soo saari karaa Super Admin-ka ah, waxaana la shaqeeyaa (activate) heerka subsite-yada ay leeyihiin maamulayaasha subsite-yada.**

## Site Template (Qaabdhismeedka Website-ka)

**Site Template-ku waa qaab aasaasi ah oo loo isticmaali karo marka la abuuro websites cusub oo ku jira shirkaddaada. Waxay u adeegtaa sidii saldhig (base) aad ka bilaawdo.**

Tani waxay ka dhigan tahay inaad samayn karto meel asaas ah (base site), aad furto plugins kala duwan, aad dejiso theme-ka hawlgalka ah (active theme), oo aad si kasta oo aad rabto u hagaajisid. Markaana macaamiisha cusub ay abuuraan akoon cusub, halkii ay helayaan WordPress oo aan wax lahayn macno gudaha, waxay heli doonaan nuqul ka mid ah meesha asaasigaaga oo leh dhammaan hagaajinta iyo waxyaabaha ku jira horey.

## Domain Mapping (Xiriirka Dooman)

**Domain mapping**-ku WordPress-ta waa hab lagu diro isticmaalayaasha server-ka saxda ah iyada oo loo marayo ciiraadda website-ka. Waxaa la abuuraa subsite-yada (subsites) WordPress Multisite iyadoo la isticmaalayo qayb ka mid ah directory ama subdomain. Waa waxa uu domain mapping-ku sameeyaa in isticmaalayaasha subsite-ka ay isticmaali doonaan domain sare oo sida [**joesbikeshop.com**](http://joesbikeshop.com) si meesha bitaanka website-ka u noqoto mid ka horreeya.

## SSL

SSL-ku wuxuu ka kooban yahay **Secure Sockets Layer**. Waa shahaadad digital oo xaqiijinaysa aqoonsiga website-ka iyo inay oggolaato xiriir (connection) lagu qabto si ammaan ah (encrypted). Maanta waxaa loo isticmaalaa teknolojiyadda standard ee lagu ilaaliyo isku xirnaanta internetka oo la hubiyo macluumaadka qarsoon ee u diraya laba nidaam oo ay ka mid yihiin, iyadoo la hor istaagayo muujiyayaasha in la akhriyo ama la beddelo wax kasta oo la gudbinayo, oo ay ku jirto faahfaahinta shakhsiga ah ee suurtagalka ah. Browser-yada casriga ah waxay u baahan yihiin SSL taasoo ka dhigaysa mid muhiim ah marka la samaynayo oo la fulinayo website.

## Media (Waxyaabaha La Soo Dhaafay)

Media waa sawirro, cod, muuqaallo, iyo faylasha kale ee ka dhiga website-ka.

Network sites waxay wadaagaan database hal oo keliya oo ku jirta WordPress Multisite, waxayna ilaaliyaan maro kala duwan (paths) oo ku jira filesystem-ka ee faylasha media-da.

Goobta caadiga ah ee WordPress (wp-content/uploads) weli waxay ku jirtaa; laakiin wuxuu beddelayaa habka weydiinta si uu u muujiyo ID gaarka ah ee website-ka shirkadda. Natiijada, faylasha media ee website-ka shirkadda ayaa si `wp-contents/uploads/site/[id]` loo arki doonaa.

## Permalinks (Xiriirro Joogto ah)

Permalinks waa URL-yada joogtada ah ee maqaalka blogga ama boggaaga gaarka ah ee website-kaaga. Waxaa sidoo kale loo tixgeliyaa **pretty links** (xiriirro qurux badan). WordPress, si caadi ah, waxay isticmaalaan qaab query string oo u eg kan:

[http://www.example.com/registration](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite waa plugin WordPress ah oo loogu talagalay install-ka WordPress Multisite, kaas oo ka beddelaya install-kaaga WordPress koronto (network) heer sare ah oo websites ah – sida [WordPress.com](https://WordPress.com) – u oggolaanaya macaamiisha inay website-yo samaystaan iyadoo la isticmaalayo kharash bil-bilow, seksi, ama sanad (waxaad sidoo kale samayn kartaa qorsheegyo bilaash ah).

## Checkout Form
Checkout Form waa foomka dalabka hal ama badan oo talaabooyin ah oo ku lug leh abuurista subsite, xubbednaanta (membership), iyo xisaabaha isticmaalayaasha iyadoo la adeegsanayo diiwaangelinta Ultimate Multisite. Waxay ka kooban tahay meelo kala duwan iyo foomam bixinta oo isticmaaluhu u soo gudbinayo inta lagu gasho habka diiwaangelinta.

## Webhook

Webhook (ama loo yaqaano web callback ama HTTP push API) waa hab ay app-ka u siin karaa apps kale macluumaad la socda wakhtiga dhabta ah. Webhook-gu wuxuu data u dirayaa apps kale sida uu dhacdo, taasoo macnaheedu yahay inaad hesho data isla markiiba.

**Ultimate Multisite webhooks** waxay furayaan fursado aan la xaddidan, oo u oggolaanaya maamulayaasha shabakadaha inay sameeyaan wax kasta oo culus ah laakiin faa'iido leh, gaar ahaan haddii loo isticmaalo services sida _Zapier_ iyo IFTTT_.

## Events (Dhacdooyinka)

Event-ku waa ficilka dhaca markii uu dhaco ficilka macmiilka ama ilaha kale ee kale, sida gujiinta mouse-ka. Ultimate Multisite wuxuu kaydiyaa dhammaan events-ka iyo logs-ka socda gudaha shabakaddaada oo dhan. Wuxuu raacayaa hawlo kala duwan oo dhaca multisite-kaaga, sida isbeddellada qorshaha (plan changes).
