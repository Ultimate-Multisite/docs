---
title: M'ndulo wa M'ndulo
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Kupi la Akaunti ya Mteja wako (v2) {#your-clients-account-page-v2}

_**Kumbukumbu Muhimu: Hii makala inahusu Ultimate Multisite toleo la 2.x.**_

Wakati wateja wanapochopoa mpango kwenye mtandao wako, wanapata ufikiaji wa tovuti na dashboard yake yenye habari muhimu kuhusu malipo yao, usajili (memberships), maeneo ya tovuti (domains), mipaka ya mpango, n.k...

Katika mafunzo haya, tutakuelekeza kupitia ukurasa wa akaunti ya mteja na utaona kile ambacho wateja wako wanaweza kuona na kufanya ndani yake.

## Ukurasa wa Akaunti (The Account Page) {#the-account-page}

Ukurasa wa akaunti unaweza kufikiwa kwa kukumbatia **Account** ndani ya dashboard ya mteja wako.

![Menu ya Akaunti kwenye dashboard ya mteja](/img/account-page/account-menu.png)

Katika mitandao ya sovereign tenant, Ultimate Multisite v2.13.0 inahifadhi uzoefu huu wa kusimamia wateja kwenye tovuti kuu. Ikiwa mteja anafungua akaunti, checkout, malipo (billing), risiti (invoice), usimamizi wa tovuti (site-management), kubadilisha template, au kuweka mapendekezo ya domain kutoka kwa sovereign tenant, hatua hizo zinarejea kwenye paneli la wateja la tovuti kuu ili kumbukumbu za malipo na usajili za mtandao ziendelee kuwa sahihi.

Wakati mteja anapofika kutoka kwa sovereign tenant, paneli la wateja la tovuti kuu linaweza kujumuisha kiungo cha kurudisha (return link) kwenda kwenye tovuti ya tenant. Kiungo cha kurudisha kinakuonekana tu wakati Ultimate Multisite inaweza kuthibitisha lengo la kurudi kama moja kati ya maeneo ya wateja, jambo hili linazuia ubadilishanaji wa kile unachotaka bila mpangilio huku likihifadhi mtiririko wa kazi (workflow) wa tenant.

![Muonekano wa ukurasa wa akaunti ya mteja](/img/account-page/overview.png)

Baada ya mteja kukimkakia, ataona muhtasari wa usajili wake, anwani ya malipo, risiti (invoices), domain, mipaka ya tovuti, na pia atakuwa na uwezo wa kubadilisha **Site Template** (ikiwa inaruhusiwa kwenye mtandao wako).

Anaweza pia kubadilisha usajili kwenda mpango mwingine, au kununua pakiti au huduma nyingine unayotoa. Tuangalie kila sehemu kwa kutenga.

### Kufufu Kwakwamba Kwa Umuwambi Wanu: {#your-membership-overview}

Block ilililimi lili likulilimi mwa chisoni cha wamwambi wanu liliomba muundo wa mpango wao wa sasa na huduma/paketi walizopata nazo. Block ililipooneza namba ya umuwambi, kiasi kilicholipwa kwa awali, kadhowa kitengo cha mpango na paketi yoyote/huduma iko kwa bei gani, na mwanamke alipwa mara ngapi kwa umuwambi huo. Wanaweza pia kuona ikiwa umuwambi uko **Active** (Uliopo), **Expired** (Uliisha), au **Canceled** (Umeondolewa).

![Membership overview showing plan, amount, and billing details](/img/account-page/membership-card.png)

Chapo mbele ya block hii, wamwambi wanu wanaona blocks za **About This Site** (Kuhusu Hii Tovuti) na **Site Limits** (Mizigo ya Tovuti). Blocks hizo zinaonyesha mipaka yote inayohusiana na mpango wao: nafasi ya disk, posts, pages, vizuizi (visits), n.k... Mipaka hii inaweza kuwekwa kwenye kurasa za kila mpango kwenye **Ultimate Multisite > Products**.

![About This Site and Site Limits blocks showing plan limitations](/img/account-page/site-limits.png)

Upande wa kulia wa **Your Membership** (Umuwambi Wako), wamwambi wanu wanaweza kubonyeza **Change** (Badilisha). Hii itawaonyesha mipango yote iliyopatikana na paketi/huduma. Kama wanakuchagua mpango mwingine, mipaka ya mpango huo itachukuliwa badala ya mipaka ya umuwambi wa sasa - hakuna uhusiano kama wanapunguza au kuongeza (downgrading or upgrading).

Sasa, ikiwa wamwambi wanu wanakuchagua kununua paketi au huduma kwa umuwambi huu wa sasa - kama nafasi zaidi ya disk au vizuizi vya ziada - umuwambi huo hautabadilika bali tu paketi mpya zitakoonishwa kwake.

Kumbukeni kwamba coupon codes haziwezi kuongezwa kwenye ukurasa huu wa kubadilisha umuwambi. Ikiwa mwanamke alitumia coupon code wakati wa kununua umuwambi wa kwanza, code hiyo itatumika pia kwa umuwambi huu mpya.

### Kubadilisha Anwani ya Malipo: {#updating-the-billing-address}

Pa ndowu pa account page, angakomakom inalimbikana kwa makomero wanu kuli imalimbikanawo kuupatentera boma la lina. Kuti mupatentere, anayembekera kuti awapere **Update** pafupi ndi _Billing Address_.

![Billing Address section with Update button](/img/account-page/billing-address.png)

Mwayi wosiyanasiya woyenera kuwona window lili lina kwa makomero wanu. Kuli moleni kuti mupere boma la lina ndipo mupere **Save Changes**.

![Update billing address form](/img/account-page/billing-address-form.png)

### Kusintha Site Template: {#changing-the-site-template}

Kuti makomero wanu kuweze kusintha site templates, mukuwunje ku **Ultimate Multisite > Settings > Sites** ndipo mupere option ya **Allow Template Switching**.

Ndikufotokoza kuti, pa **Ultimate Multisite > Products**, mupere njira zanu za plans ndipo mupere tab ya **Site Templates**. Onse mupere option ya **Allow Site Templates** ndi yenera lili lina ndipo pa **Site Template Selection Mode**, mupere option ya **Choose Available Site Templates** yenera likulimbikana.

![Product site templates tab with template selection mode](/img/config/product-site-templates.png)

Mungathe kuwona site templates onse zomwe zili pansi pa website wanu. Mupere kuti mupere kuti muli ndi zomwe mukuwoneza ndipo zomwe muli ndi zomwe makomero anu ali ndi lina ndi lina. Kodi mukuwona kuti zimenezi zimenezawo zimenezawo zili ndi lina ndi lina? Kuti mupere kuti mupere kuti muli ndi zomwe mukuwoneza ndipo zomwe muli ndi zomwe makomero anu ali ndi lina ndi lina. Kodi mukuwona kuti zimenezi zimenezawo zimenezawo zili ndi lina ndi lina?

Nkhawa makomero wanu kuwoneza **Change Site Template** m'moyo wanu wa account page.

![Change Site Template button on account page](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 imapere panel yosiyanasiya ya template yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe yali yomwe

Mugwira wosho wosho wa site templates osalira m'moyo wosono pamene makubwiri akulimbikira options. Izi zimungutsira kuti azingathe kulemba zinthu zomwe zili pansi pa plan yanu osati alimbikira chifukwa cha kuchokera kwa zilipo.

![Available site templates list for the plan](/img/config/site-templates-list.png)

Pambuyo pomwe akupereka wosangalala wokufuna kukhala, adzakhwera kuti awonje chifukwa cha mwayi.

![Site template switch confirmation dialog](/img/account-page/template-switch-confirm.png)

Pambuyo pomwe amapereka wokufuna kukhala, ndipo akupereka **Process Switch**, site template yatsopano idzakhala yomwe idzakhala pansi pa website ya wosono.

Makubwiri osono angathe kutsegula **Reset current template** kuchokera m'moyo wosono pamene amayenera kukhala pansi pa site template yomwe yali yomwe yali yenera. Mwachitsanzo, pamene akupereka site template lina lina, kuchokera kwa site template kumapereka kulipeza zinthu za site, chifukwa chidziwitsa kuti osono angayenera kukonferma pambuyo pomwe amayenera kuona kuti ndikufuna kuchokera.

### Kulemba Custom Domains: {#adding-custom-domains}

Makubwiri osono angathe kukhala ndi ulemu wosono wokuthandiza custom domain pamene akulimbikira pa m'moyo wosono wanu. Kuti makubwiri osono angathe kutsegula custom domains, ndipo mwayi wosono wanu, kudziwa **Ultimate Multisite > Settings >** **Domain Mapping**.

Tsegula option ya **Enable Domain Mapping**. Izi zimungutsira kuti makubwiri osono angathe kukhala ndi custom domains pa network.

Osati musalire kuona kuti domain mapping yali yenera pansi pa product - chifukwa chonde mwayi wosono mungapereke product kuti osono asagone kutsegula custom domains.

Tsegula **Ultimate Multisite > Products**. Select plan yanu yomwe mukupeza ndipo tsegula tab ya **Custom Domains**. Tsegula option ya **Allow Custom Domains**.

![Custom Domains tab with Allow Custom Domains toggle](/img/config/product-custom-domains.png)

Iziyi ndiwo zimene zomwe zimene kuti anthu onse omwe ali ndi plan iliyonse imeneyi angathe kudzera m'mabwino (custom domains). Ngati m'maka, pa Account page, anthu wanu angathe kudziwa custom domain monga momwe mungayesulure **Add Domain**.

![Add Domain button on the account page](/img/account-page/add-domain-button.png)

M'maka, window iliyonse yomwe imapuka imapereka anthu wanu ndi mawu omwe amapereka kuti muli bwanji mungayesulure DNS records kuti custom domain iye ikulekeze pa network yanu.

![DNS instructions shown when adding a custom domain](/img/account-page/add-domain-dns.png)

Mawu awa mungayesulure (m'maka ndi inu) pa **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Add New Domain Instructions setting in Domain Mapping](/img/config/settings-domain-mapping.png)

Pansi ndi chidziwitso chake kwa settings ya domain mapping yomwe imapereka zinthu zonse:

![Domain mapping settings full page](/img/config/settings-domain-mapping-full.png)

Panda muli pa **Next Step**, anthu wanu angathe kudziwa dzina la custom domain lanu ndipo kudzera kuti iye ndi yomwe ndi primary (primary one). Kodi mungonani kuti anthu wanu angathe kuthetsa custom domain nthawi zambiri kwa websites yanu, chifukwa imene angathe kuyesa kuti uli yomwe ndi primary.

![Custom domain name entry with primary domain option](/img/account-page/add-domain-primary.png)

Panda muli pa **Add Domain**, domain iye idzakhala m'maka kwa account ya anthu wanu. Zomwe ali kukhala ndi kufunsa ndi kupeza ndipo ndi kopyera ndi DNS records za custom domain iye pa domain registrar yanu.

### Kusintha Password: {#changing-password}

M'maka pa dashboard ya account, anthu wanu angathe kusintha password yake monga momwe mungayesulure **Change Password**.

![Change Password button on account page](/img/account-page/change-password-button.png)

Kuti ndi window lili lili ndi anthu wanu kuti mwayiwo amagwira password yomwe ali pansi ndipo mwayiwo amagwira password yomwe ali pansi.

![Change password form with current and new password fields](/img/account-page/change-password-form.png)

### Koma Kuti Muli ndi Mafumbo: {#danger-zone}

Tili ndi mashumba awiri omwe alipo m'Danger Zone: **Delete Site** (Kuyendetsa Website) ndipo **Delete Account** (Kuyendetsa Akata). Ziwirizi zimene zili m'Danger Zone chifukwa kuti anthu awa si mwomwe angayendetsa. Ngati anthu wanu aliyendetsa website yanu kapena akata lanu, osati angayendetsa pafupi.

![Danger Zone with Delete Site and Delete Account options](/img/account-page/danger-zone.png)

Ngati anthu wanu ali ndi mwayiwo omwe ali pansi, mwayiwo adzakhala ndi window lomwe adzakhala ndi kufufuza kuti awonjeze (toggle on) chinthu cha kuwamba website kapena akata lanu ndipo adzakhudzirizidwa kuti iwo si mwomwe angayendetsa.

![Delete Site confirmation dialog](/img/account-page/delete-site-confirm.png)

![Delete Account confirmation dialog](/img/account-page/delete-account-confirm.png)

Ngati ali ndi kuwamba website yanu, akata lanu ndipo membership yanu si mwomwe angayendetsa. Kodi mwayiwo adzakhala ndi kufufuza kwa zinthu zonse zomwe zili pansi pa website yanu. Ngati ali ndi kuyendetsa akata lanu, websites zonse, memberships zonse ndipo mavuto onse omwe ali pansi pa akata lanu mudzakhala osati mwomwe angayendetsa.
