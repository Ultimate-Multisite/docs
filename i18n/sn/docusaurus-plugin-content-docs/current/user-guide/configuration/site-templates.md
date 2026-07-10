---
title: Mavhango ekunyangwe
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Site Templates (v2) {#site-templates-v2}

_**NOTE: Iriko iri dziri ku Ultimate Multisite version 2.x. Kana uchiti version 1.x,**_ **shandisa iye ndiri pano.**_

Chikoro chedu kana tikati rine premium neUltimate Multisite ndiri kuti tichivaka zvinhu zvakawanda zvinogona kuva zvakare (automate) uye tichipa mweya wenyu nekuti vanhu vachida kuratidza zvinhu vakasiita nekuti vanoone chokwadi chekuvaka website. Mweya yakapfura kuti tiipa iye nzira yekuti vanhu vatsanangura websitesavo. Iyi nzira yakapfura inogona kuva nekuita iye, uye ndiri kune zvinangwa zvakawanda.

## Site Template ndiyo? {#what-is-a-site-template}

Kukwanisa kunzwa sei, Site Template ndiyo site yakapfura (boilerplate) inogona kushandiswa sebasei kana uchivaka sitesavo maviri munzira yako.

Izviro rinoreva kuti unogona kuita basei, kuva plugins dzakasiyana-siyana, kuita theme yakasvika, uye kunge kune zvinhu zvakasiyana-isina zvinogone kushandiswa. Ndiyo, kana munhu anokwanisa kuratidza account ine, pane kuti asi achiti WordPress site inosanganisira zvinhu zvakawanda, achiti copy ye basei yako inosanganisira zvose zvinhu zvakasiita uye zvinhu zvinogona kushandiswa.

Izviro rinokwanisa kuva zvakanaka, asi ndiri kuti ndiri kundiite sei site template yepamusoro? Iyi nzira yakapfura nekuti iwe unogona kuratidza.

## Kuita uye Kuratidza Site Template yepamusoro {#creating-and-editing-a-new-site-template}

Site Templates ndiyo sitesavo vachakasiyana munzira yako. Kushandisa template yepamusoro, unogona kuenda kune **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

Izviro rinogona kungekurudzira window (modal window) inozovaka zvinhu zvakakosha, izvo ndiko zvinotora **Site title, Site Domain/path,** uye **Site type**. Pane **Site Type** drop-down field, ndiri kune kuti unenge uita selection ya **Site Template** *.*

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Unogonawo kuita zvinhu zvakawanda nekuti unogona kuita description inosanganisira munhu anokwanisa kuratidza kuti template inosanganisira zvinhu zvinogone kushandiswa:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Pamweya, pano uona switch ya **Copy Site** (Kopya Site) pamusoro pe fomu. Izvirozo kuita kuti uingane site template wechinhu chinobva pa site template yakajeka kune chiri chekufamba kwako, kuti uingane nguva nekuti unenge ukabatsira kuita zvinhu zvakawanda nekuita site template kubva mune chinhu chakare.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Kuwedzera zvinoreva Site Template {#customizing-the-contents-of-a-site-template}

Kuti uwedzere site template yako, ndichine zvinhu: enda ku dashboard panel yake uye ushaye zvinhu zvako zvakakosha. Unogona kuita posts dzakare, pages, kuactivate plugins, uye kugara nemu theme inotamba. Unogona kuda kuenda kune Customizer uye kuwedzera zvinoreva zvinobva vose.

![Site template edit interface](/img/config/site-template-edit.png)

Zvinhu zvose izvi zvichakopwa kana mutenda anogona kuita site wechinhu chinobva pa Site Template iye.

### Zvinhu Zvinoreva Zvikuru (Advanced Options) {#advanced-options}

Kana uri munhu anoziva kuchinjira kuratidza custom coding, unogona kuita zvinhu neSearch and Replace API yathu kuti uingane zvinhu pamusoro pe site yakare panguva inopfamba. Izvirozo zvinobatsira kune zvinhu zvakaita sei: kuingara dzina dzinoramba (company names) pa About page, kuingara email ya contact pa Contact page, uye zvinhu zvakasiyana-siyana.

### Kuita Site Templates {#using-site-templates}

Ok, unenge wakaipa site templates dzakawanda nehunhu hwakasiyana-siyana dzinobva vose nemafanana nekuti designs, themes, uye settings. Nkuita kuti zvinogone kuita zvinhu pamweye mu network yako, unenge uingane mitemo imave (two approaches) anogona kuita (pakati pei):

  * Kuipa Site Template imwe pa Plans dzako dzese

**OR**

  * Kuti makubatsiri vako vange kuita chine site templates vavo vechekera panguva vakare.

#### Mode 1: Kuipa Site Template {#mode-1-assign-site-template}

Moni mweye, munhu wose haizozokwanisa template kana chine kuti vachikwanisa kuita account, asi iwe ndiriwo uchigadzirisa kuti template upi uyu uyu anogona kushandiswa muplanera dzako.

Kuti zvibva izvi, unofaniraenda ku **Ultimate Multisite > Products > Edit**.

![Edit product to assign site template](/img/config/product-site-templates.png)

Izvi zvichakubudzisa ku page ya **Edit Product**. Pakati pe chine **Product Options**, ndichida kuti uone tab inosvika **Site template** uye utange upi **Assign Site Template** kubva mu drop-down field. Izvi zvachakubudzisa list yote templates dzine kuita, uye izvi zochinja kuti uone kana uchigadzirisa template imwe chete yakaita kune product iyu.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: Chibvumirano Template Inogona Kuita {#mode-2-choose-available-site-template}

Mu mode iyi, unoziva vachikwanisa kuita chokwadi nguva yakanga vachikwanisa kuita account. Vachingoone kana kuti vanogona kuchinjira templates dzakasiyana dzinogadzirisa zvako pamusoro pe product settings. Unenge uine option yekuti usimbise (limit) template dzine kuita zvinogona kuita muunhu anogona kuita chokwadi chako. Izvi zochinja kuti uve ne seti dzakasiyana dzinogadzirisa pamusoro pe product iyu, zvichinguva yakawanda kune kuone nzira dzakasiyana-siyane dze functions uye features kune product inosanganisira mwayo.

Pa **Edit Product** page. Under section ya **Product Options**, ndichira **Site template** tab uye chinechira **Choose Available Site Template** kubva munzira we drop-down field. Izviro dzachangova list ye site templates dzinobva nekuita kuti uoneite upfungwa (select) iye unoda kubva. Unogona kuita izvi nekubvira Behavior yake: **Available** kana uchida site template iwe ibe panyanya munzira, _**Not Available**_ kana uchida site template iwe haibe panyanya seoption, uye **Pre-selected** kana uchida kuti mupfungwa imwe yakaita site templates inobva nekuita default.

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Site template selection on Checkout form {#default-mode-site-template-selection-on-the-checkout-form}

Kana uchida site templates dzako dzese dzibe panyanya nguva dzinoratidzo munzira ya registration, kana unoda kuti usina kuita zvinangwa zvakawanda nekubvira kuteerera kana kuita specification ye site templates underi product unotanga kuita. Ndiyo, unogona kuita iye nekuita site template selection under **Checkout Form** yako. Kuti urambeise iye, enda ku **Ultimate Multisite > Checkout Forms** uye chibvumira **Edit** under form inotipa kuti uita configuration.

Izviro dzachangova page ya **Edit Checkout Form**. Chira **Template Selection** field uye chira **Edit** underi.

Modal window ichangova. Under field ya **Template Sites**, unogona kuteerera uye kuita list ye site templates dzese dzinobva nekuita kuti dzibe panyanya nguva dzinobva during registration. Site templates dzinotipa kubvira hapa dzichibva panyanya kana user akagadzira product ipi.

![Template selection field in the checkout form editor](/img/config/checkout-form-template-step.png)

Panyanya, customers vanenge vachida template chooser during checkout uye vanogona kuita design yakatanga yakanaka (starting design) yakanaka ye site yavo.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Chagwuri za Template ya Website {#site-template-options}

Kuna functions zingine za template za website zvinogona kuti utizire kana kuzivara chini ya Ultimate Multisite settings.

![Site template options in Ultimate Multisite settings](/img/config/settings-sites-templates-section.png)

#### Kurwadzira Kuti Template Ibadhiriswe (Allow Template Switching) {#allow-template-switching}

Kurwadzira hicho option kunoita kuti wamwe wakazi (clients) vave kuurwadzirisa template wanayo chine panguva ya kuregerwa (sign-up process) panguva yakagadzirwa akaunti newebsite. Izvi zvinogona kutendeka kwemwe munhu anomira, nekuti kunoita kuti vaone zvakare template kana vachigona kuenda ku template apo vanoziva kuti chine kuitira zvakanaka panguva yakare.

#### Kurwadzira Kuti Vamwe Vaziveite Website Yavo Kubatana (Allow Users to use their Site as templates) {#allow-users-to-use-their-site-as-templates}

Kuti vamwe vaziveita subsite vave vakusimudzwa kuita uye kugadzirisa website yavo, vanogona kuti vachigone kupa (clone) uye kuenda kuita iye se template yakaita kuti vashandise apo vachigadzira subsite rine kuita panguva yakare munzvimbo dzakawanda dzinogona kuita. Hicho option chinogona kunoita izvi.

#### Kurwadzira Media Kubatana Panguva Yakare (Copy Media on Template Duplication) {#copy-media-on-template-duplication}

Kurwadzira hicho option kunoita kuti media yakanzi yakaitwa panguva ya template iwe itanise ku website yakagadzirwa zvakare. Izvi zvinogona kutendeka panguva dzinogona dzine plans dzakawanda.

#### **Kupanga Search Engines Kurwadzira Site Templates (Prevent Search Engines from indexing Site Templates)** {#prevent-search-engines-from-indexing-site-templates}

Site templates zvakaita zvakaita munyoyo wese (boilerplate) asi zvinhu zvinoita kuti zvinogone kuva panguva dzinogona dzine network yako, izviro chinogona kuitwa kuti search engines zvizivire. Hicho option chinogona kunoita kuti utave nekuvaka site templates kuti search engines zvigone kuzivire.

## Kurwadzira Site Templates NeSearch-and-Replace Yechine Auto (Pre-populating Site Templates with auto search-and-replace) {#pre-populating-site-templates-with-auto-search-and-replace}

Iyi chine chine zvinotevera dziri Ultimate Multisite ndiri kuita kuti uingane text, rangi, uye fields (zvinangwa) kune registration form. Ndapana iwe zvinhu izvi zvakabva kuita, tiri kuenda kutorera iwo kuti titorei content mumabhariro akasiitika (site template) yakagadzirwa. Ndipo, kana iye site yakagadzirwa inobururwa, Ultimate Multisite inozvisanisa placeholders nekuita zvinhu zvakare dzakagadzirwa munzira yakanaka.

Zvinotevera kuti, kana uchida kuwana zvinangwa renyika (company name) dzeendaya yako panguva ya registration uye kuti iwe uinganewo kunyanya dzeendaya iye mumabhariro akasiitika yakagadzirwa. Munzira yakanaka ye homepage ya template yako, unofanira kuita placeholders, seunenge uchida (placeholders) zvakabva nedouble curly braces - {{placeholder_name}}.

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Ndapana iwe, unogona kutaura field inosimbisa (matching registration field) pane checkout form yako kuti uingane zvinhu izvi. Editor yese yakagadzirwa ye checkout form inosimbisa inokubatsira kuita fields dzakare pamusoro pe template chooser:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Mudzidzi wako anogona kuingane field iye panguva ya registration.

![Frontend checkout form with template chooser](/img/config/frontend-template-chooser.png)

Ultimate Multisite inozvisanisa placeholders nedata inosimbiswa neudzidzi automatically.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Kuti ushaye "template inotevera placeholders" problem {#solving-the-template-full-of-placeholders-problem}

Izvi zvakawanda zvinotevera, asi tiri kuona nzira yakare: template dzedu - dziri kuita neendaya dzeendaya (placeholders) dzakare dziri kune zvinhu hazvisonge.

Kuti zviri izviro iri, tinoita chokwadi chekuti tinoita option yekuti tise kuratidze values dzinotevera (fake values) kune placeholders, uye tinoramba tese kuita search and replace zvinotevera pane template sites vachiti vachiti.

Unogona kuona editor ye template placeholders nekuti unovakundwa kuenda ku **Ultimate Multisite > Settings > Sites**, uye ndokuti munzira yechipiri (sidebar), utore link inosvika **Edit Placeholders**.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

Izvi zvichakubudzira kuenda kune editor ye placeholders yekuti unogona kuita add placeholders uye content dzavo.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
