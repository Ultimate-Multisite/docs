---
title: Abuurista Qorshahaaga Subscription-ka Koowaad
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# Abuuristaaga Koowaad ee Subscription-kaaga (v2) {#creating-your-first-subscription-product-v2}

_**Fadlan ogeysiis muhiim ah: Maqaalkan wuxuu u jeedaa isticmaalayaasha Ultimate Multisite nooca 2.x. Haddii aad isticmaalayso nooca 1.x,**_ **__oo eeg maqaalkan kale**_ .

Si aad u bilaaw shaqada shabkaddaada oo aad u bilow inaad adeegyadaada u iibiso isticmaalayaasha suurtagalka ah, waxaad u baahan tahay doorooyin subscription-ka kala duwan. Sidee ayaad samayn kartaa badeecadahaas? Noocyada badeecadaha ee aad bixin karto waa kuwo nooc ah. Maqaalkan, waxaan ka sheegi doonaa dhammaan waxyaabaha aad u baahan tahay inaad ogaato oo ku saabsan badeecadaha.

## Nooca Badeecadda (Product Type) {#product-type}

Ultimate Multisite-kaaga, waxaad u bixin kartaa laba nooc oo badeeco ah ee macaamiishaada: **plans** (qorsoshaha) iyo **add-ons** (waxyaabaha dheeraadka ah ama Order Bump). Add-ons-ka waxaa loo qaybin karaa laba nooc: **packages** (miisaano/kooxor) iyo **services** (adeegyo). Waxaan dib u eegi doonaa kala duwanaanshaha iyo waxyaabaha gaarka ah ee ay leeyihiin xilligan.

  * **Plans** : Waa badeecadda aasaasiga ah ee Ultimate Multisite. Macaamiishu ma heli karaan xubsi haddii aan la xiriirin qorsosh (plan) lahayn. Qorsoshuhu wuxuu siinayaa macaamiishaada hal ama in ka badan oo website (sites) (waxay ku xiran qaab-dhismeedka qorsoshahaaga). Waxaad meel kasta oo aad samaynayso waxyaabaha lagu beddelayo badeecaddaada, waxaa jira xaddiddooyin aad dhigto.

  * **Packages** : Waa add-ons-ka si toos ah u saameeya hab-dhaqanka (functionalities) qorsoshaha Ultimate Multisite. Waxay isbeddelaan xaddidda ama ku darayaan kheyraad cusub, plugins ama themes oo ka baxsan qorsoshaha asalka ahaa ee macaamiishu iibsadeen. Tusaale ahaan, qorshe aasaasi ah wuxuu u oggolaan karaa 1,000 booqod bishii, waxaadna samayn kartaa package oo kordhinaya tiradaas ilaa 10,000.

  * **Services:** Waa add-ons-ka aan isbeddelin hab-dhaqanka Ultimate Multisite. Waxay yihiin hawlo aad u qabato macaamiishaada oo ka baxsan qorsoshaha ay iibsadeen. Tusaale ahaan, macmiilkaaga wuxuu iibsan karaa qorshe u oggolaanaya hal website (site) iyo sidoo kale uu bixin doono adeeg dheeri ah oo samayn doona design-ka website-kan.

## Maareynta Badeecadaha (Managing Products) {#managing-products}

Башка Somali, inta badan **Products** tab-ka Ultimate Multisite (**Ultimate Multisite > Products**) waxaa la barbardhinaa qorshayaasha (plans) ee deegaanka hosting-ka caadiga ah.

Ultimate Multisite-ka gudaha, Products tab-ku wuxuu qeexaa qaabka iyo xaddidda ku salaysan alaab ama adeeg gaar ah. Qaababkan waxay la jaanqaadaan sharraxaadda alaabta/adeegga, qiimaha, caddaynta (taxes), iyo oggolaanshaha.

Qaybtaani waxay kaa caawin doontaa inaad fahanto qaybta muhiimka ah ee Ultimate Multisite.

![Products list page](/img/config/products-list.png)

## Bixinta Alaabaha (Adding Products) {#adding-products}

Haddii ay tahay qorshe, package, ama adeeg in la bilaabo samaynta shay cusub, waxay ku jirtaa **Ultimate Multisite > Products > Add Product**.

![Add Product button](/img/config/product-add-button.png)

Interface-ka waxaa ka kooban laba qayb oo muhiim ah. Dhageerada (left side) waxaa jira qaar tab-yo oo caawinaya samaynta alaabta, halka dhinaca kale (right side) ay jiraan qaar qaybo oo lagu qeexayo qiimaha asaasiga ah ee alaabta, xaaladda hawlgalka ah, iyo sawirka alaabta.

![Product edit page overview](/img/config/product-edit-full.png)

### Sharraxaad (Description) {#description}

Macluumaadka asaasiga ah ee alaabta waxaa lagu qeexi karaa iyadoo la bixiyo magaca alaabta iyo sharraxaadda. Magacyadaas ayaa la soo bandhigaa halka ay loo baahan yihiin macluumaadka alaabta sida doorashada qorshaha iyo qiimaha, furaashada (invoices), koritaanka adeegyada (upgrades), iwm.

![Product description section](/img/config/product-description.png)

### Nooca Qiimaha (Pricing Type) {#pricing-type}

Dhanka rabitaanka interface-ka ah, waxaa lagu qeexi karaa qiimaha asaasiga ah.

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite wuxuu taageera saddex nooc oo qiimeed ah. Doorashada **paid** waxay u weydiisataa maamulaha shirkadda (network administrator) macluumaad ku saabsan qiimaha alaabta iyo inta lagu jiro lacag bixinta (billing frequency).

### Qiimaha (Pricing) {#pricing}

Qaybta qiimaha waxay qeexaa qiimaha asaasiga ah ee alaabta iyo mudada lacag bixinta.

![Pricing and save section](/img/config/product-pricing-save.png)

sidaas, qiimaha tusaale $29.99 oo si 1 bilood ah loo qeexay ayaa la bixin doonaa $29.99 hal bilood kasta. Si la mid ah, qiime $89.97 oo si 3 bilood ah loo qeexay ayaa la bixin doonaa lacagtaas qayb kasta (quarterly).

### Billing Cycles {#billing-cycles}

Qaybta "Billing Cycles" waxay qeexaysaa mar walba lagu bixiyo mudada la sheegay ee qiimaha iyo inta badan waxaa loo fahmi kara qeyb ka mid ah heshiisyada ama mudo cayiman.

![Pricing and save section](/img/config/product-pricing-save.png)

Tusaale ahaan, qiimaha alaabta $29.99 oo muddo 1 bilood ah iyo 12 wareeg la sheegay ayaa la bixin doonaa $29.99 hal bilood kasta oo loogu talagalay alaabta inta lagu jiro 12 bilood ee soo socda. Si kale haddii loo dhigo, qaabkan wuxuu samaynayaa mudo cayiman oo qiimo la qeexay oo ah $29.99 hal bilood oo ay dhammaan doonto bixinta.

### Trial Period {#trial-period}

In la iibsado badhanka "offer trial toggle" waxay u oggolaanaysaa maamulaha shirkadda inuu dejiyo muddo lagu baranayo alaabta (trial period).

![Pricing and save section](/img/config/product-pricing-save.png)

Inta lagu jiro mudo barashada, macaamiishu waxay si bilaash ah u isticmaali karaan alaabta oo aan la bixin doonin ilaa mudada barashada ay dhammaato.

### Setup Fee {#setup-fee}

Waxaad sidoo kale ku dari kartaa kharashka aasaasid (setup fee) qorshahaaga.

![Pricing and save section](/img/config/product-pricing-save.png)

Tani waxay ka dhigan tahay in macaamiishaada ay bixiyaan lacag dheeri ah markii ugu horreysay (iyadoo la socota qorshaha qiimaha) oo la jaanqaadaya kharashka aad dejisay qaybtaas.

### Active {#active}

Badhanka "active toggle" wuxuu si hufan u qeexayaa in alaabtu ay u noqon doonto macaamiisha inay isticmaalaan haddii ay cusub yihiin (new sign-ups).

![Active toggle](/img/config/product-active.png)

Haddii ay jiraan macaamiil la'aan ah oo ku jira qorshe (plan) kan, in la badbaado toggle-ka si uu u noqdo dibadda ah (disabled), waxay si waxtarsan u ka saaraysaa qorshaha isbeddelka mustaqbalka. **Macaamiisha la'aan ah ee qorshaha ayaa sii socon doona inay la rabo** ilaa ay u qaadaan qorshe cusub ama laga saaro qorshaha.

### Sawirka Alaabta (Product Image) {#product-image}

Bad button-ka **Upload Image** wuxuu u oggolaanaya maamulaha shirkadda inuu isticmaalo makhaadka media si uu doorto ama u soo galiyo sawirka alaabta.

![Sawirka alaabta section](/img/config/product-image.png)

### Tutinta (Delete) {#delete}

Bad button-ka **Delete Product** wuxuu ka saaraa alaabta nidaamka. Wuxuu si muuqda marka la soo bandhigo alaabta.

![Tutinta alaabta section](/img/config/product-delete.png)

Ka duwan tutinta kale, alaabta ma lagu dhigayo xaaladda "trash" (waxa laga saaray). Sidaas darteed markii la tutiyo, ficilka ma la hagaajin karo.

### Doorashada Alaabta (Product Options) {#product-options}

Marka macluumaadka asaasiga ah ee alaabta la qeexdo, doorashada alaabta waxay caawiyaan maamulaha shirkadda inuu si dheeri ah u qeexo astaamaha gaarka ah ee alaabta.

#### Guud (General) {#general}

Tab-ka **General** wuxuu qeexaa astaamaha guud ee alaabta oo aan kuugu xiriirin wax kasta oo tabka kale ee gaarka ah ee alaabta ah.

![Tabka General](/img/config/product-general-tab.png)

**Product slug** (macluumaadka gaarka ah ee alaabta) wuxuu qeexaa macluumaadka la isticmaalo si loo aqoonsado alaabta URL-yada iyo qaybo kale oo Ultimate Multisite.

Ultimate Multisite wuxuu taageera noocyo kala duwan oo alaabo ah sida Plan, Package, iyo Service. Tababka **Product Options** waxay isbeddelaan si dinamik ah iyadoo ku xiran nooca alaabta la qeexay.

**Customer Role** (Doorka Macaamiisha) wuxuu qeexaa doorka macmiilka lagu magacaabo marka website-ka la abuuro. Caadi ahaan, inta badan maamulayaasha shirkadda, tani waxay noqon doontaa default-ka Ultimate Multisite ama Administrator. Doorka default-ka Ultimate Multisite waxaa la samayn karaa **Ultimate Multisite > Settings > Login & Registration**-ka.

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Waxita iyo Hoos-waxid (Up & Downgrades) {#up--downgrades}

Tabkan wuxuu qeexaa hababka koritaanka iyo hoos u dhaca ee ay macmiilku ku heli karo heerkiisa gaarka ah.

Si aad u fahanto fikradan, tusaale ku fikir inaad hesho meel gaar ah oo Ultimate Multisite installation-ka ayaa bixiya xal-dhaqan (learning management solutions) macaamiisha. Si loo gaaro tan saddexda qorshe (Basic, Plus, iyo Premium), waxaa lagu qeexaa waxa ugu muhiimsan, waxaana lagu fulinaya plugins gaar ah oo loogu talagalay qorshe kasta (waxaad ka heli doontaa tilmaamaha sida loo fuliyo plugin-yada dambe ee qaybta).

Haddii Ultimate Multisite installation-ka uu sidoo kale adeegayo website-yada ganacsiga ama eCommerce, qorshayaashani waxay u baahan karaan plugins kala duwan oo la soo dejiyay oo la fulinaya.

Sidaas darteed, ma fiicna in la oggolaado macaamiisha eLearning inay ku guuraan qorshayaasha eCommerce-ka sababtoo ah qorshayaashani, qiimaha iyo xaddidda ay u leeyihiin, waxay noqon karaan kuwo aan si habboon ugu habboonayn.

Sidaas darteed, si loo xaddido widadka macaamiisha oo lagu ka hor istaago arrimaha dhibaato-galinta, maamulaha shirkadda (network administrator) wuxuu samayn karaa koox qorshe (plan group) oo gudaha kooxkaas uu qeexdo qorshayaashii ay macaamiishu u guuraan.

![Up and Downgrades tab](/img/config/product-upgrades.png)

Si aad u qeexdo koox qorshe, waxaad qeexaysaa qorshayaashii la jaanqaaday ee ku jira liiska **plan group**. **Product order** (arrannada alaabta) ayaa go'aamista sida loo dejiyo iyo sida loo muujiyo qorshayaashii ugu hooseeya ilaa kuwa ugu sarreeya.

Ultimate Multisite wuxuu sidoo kale leeyahay muuqaal **order bump** (koritaanka qiimaha), halkaas oo alaabta iyo adeegyada dheeri ah ee ku habboon ayaa lagu darayaa qorshayaashii. Kuwaas waxaa loo bixiya macaamiisha inay yihiin shayro dheeri ah oo la dari karo qorshayaasha marka la bilaabo lacag-bixinta (checkout) ama inta lagu guda jiro koritaanka.

#### Isbeddellada Qiimaha (Price Variations) {#price-variations}

Farqeynta qiimaha waxay u oggolaan maamulaha shabakadda inuu qeexdo heerarka qiimaha kale ee kala duwan iyadoo ku xiran muddooyinka. Dejintaani waxay kuu oggolaanaysaa in waxa la iibiyo hal bil, afar bilood, sanno, ama inta badan oo muddooyin kale lagu bixiyo alaab isku mid ah. Tusaale ahaan, waxaad dejin kartaa alaab oo qiimaha ay yahay $29.99/bil, halka aad ku siin lahayd dooro sanahorti oo qiimo ay yahay $249.99/sanno.

![Price Variations tab](/img/config/product-price-variations-tab.png)

Si aad u samayso farqeynta qiimaha, dejinta **Enable Price Variations** (Furista Farqeynta Qiimaha) si ay u noqoto mid firfircoon oo ku riix button-ka **Add new Price Variation** (Ku dar Farqeynta Qiimo cusub).

![Product price variations](/img/config/product-price-variations.png)

Si aad u galiso farqeyn, dejinta mudada, qaybta ah wakhtiga, iyo qiimaha farqayntaas. Waxaad ku dari kartaa farqeyntiino kale adigoo mar kale riixaya button-ka.

Tusaale ahaan, haddii qiimaha alaabta aad haysato ee bil kasta uu yahay $29.99, waxaad ku dari kartaa:

  * **3 Bilood** oo ay qiimo lahayd $79.99 (qiime yar oo ka dhacaysa bil kasta)
  * **1 Sanno** oo ay qiimo lahayd $249.99 (qiime weyn oo lagu siinayo ballanqaadka sanahorti)

:::tip Muujinta Doorashada Muddooyinka Bixinta ee Frontend-ka

Farqeynta qiimaha kaliya ma ku daro toggle ama switch-ka bixinta ee frontend-ka. Si macaamiisha ay u beddelaan muddooyinka bixinta (tusaale ahaan: Bil kasta / Sanno), waxaad u baahan tahay inaad ku dari lahayd qaybta **Period Selection** (Dooro Muddooyinka) qaabka foomka bixinta ee aad samaynaysid. Waxaad ka heli kartaa tilmaamaha tallaabo-tallaabo ah halkan: [Checkout Forms: Adding a Period Selection Toggle](checkout-forms#adding-a-period-selection-toggle).
:::

#### Cansarka (Taxes) {#taxes}

Tabka **Taxes** (Cansarka) wuxuu la jaanqaadaa dejinta cansarka ee laga qabtay **Ultimate Multisite > Settings > Taxes** iyo si gaar ah heerarka cansarka loo qeexay. Si aad u furto cansarka oo aad dejiso heerarka cansarka la salaynayo, fadlan eeg dukumeentiga halkan: **Ultimate Multisite: Settings**.

![Taxes tab](/img/config/product-taxes.png)

Waxaan ku siin doonaa sharaxaad sida loo isticmaalo qodobadan WordPress-kaaga, adigoo ula hadlaya sidii aan la sheekaynay ardayta cusub:

Markii hore, waxaan dejiyay heer tax (tax rate) oo ah 7.25% oo loogu talagalay macaamiisha ku nool California (United States of America).

Marka aad dejisid heer tax-kaas ee **Ultimate Multisite > Settings > Manage Tax Rates**-ka, waxaad u dooran kartaa heerkaas heer alaabta (product level).

![Taxes tab](/img/config/product-taxes.png)

Si aad u muujiso in alaabta ay tahay mid la taxayn karo, ku hagaaji badhanka **Is Taxable** si uu u noqdo mid firfircoon (active) oo dooro heer tax-kaugu ah ka soo qaadista liiska Tax Category.

#### Site Templates {#site-templates}

Si kooban, site templates-ku waa website-yada WordPress-ka oo dhammaystiran ee la samaynayo (cloned) dhanka macaamiisha markii ay bilaabaan guurkaas.

![Site Templates tab](/img/config/product-site-templates.png)

Maamulaha shirkadda (network administrator) wuxuu abuuraa oo dejinaya template site-ka si uu u noqdo website WordPress caadi ah oo leh themes, plugins, iyo waxyaabo kale oo firfircoon oo la dejiyay. Template site-ka waxaa si toos ah loo samaynaya macaamiisha.

Tababarkan waxay u oggolaanaysaa maamulaha shirkadda inuu qeexdo sida template site-yada ay u dhaqmaan marka guur cusub la bilaabo. Si aad u isticmaasho site templates-ka si aad u fuliso qorshahaas, ku hagaaji badhanka **Allow Site Templates** si uu noqdo mid firfircoon (active).

Marka **Allow Site Templates** laga xirmo (disabled), macaamiisha ee qorshahaas ma heli karaan doorashada template-yada haddii ay jiraan foomka guurka, xiriirka la wadaagayo (shareable link), ama parameter URL ah oo u oggolaanaya in templates-ku la helaan. Ultimate Multisite hadda waxay xoojinaysaa xaddigaas iyadoo la isticmaalayo hab isku dhafan (fallback chain) oo ka bilaabmaya dhammaan miisaska awoodda leh: dejinta qorshaha ayaa la hubiya marka hore, ka dibna dejinta foomka guurka iyo template-yada la dooratay haddii ay jiraan URL-ka. Tani waxay hubisaa in xaddidda qorshaha ay isku mid yihiin oo waxay ka horjoogsataa inay templates-ku soo muuqda alaabta aan loo oggolaanayn inay ku siiyaan.

**site template selection mode** wuxuu qeexaa sida site templates-ku u dhaqmaan inta lagu guda guurka (subscription process).

De **default** (default) setting wuxuu raacayaa tallaabooyinka foomka checkout-ka. Haddii maamul xogta (network administrator) uu qorsheyn qaab kale oo doonayo in la dooro template-ka (template selection step) inta lagu jiro habka checkout-ka, haddii tallaabadaas laga qorsheeyay templates, kan tani wuxuu u raacayaa tilmaamaha la dejiyay tallaabada checkout-ka.

In la qeexdo **Assign Site Template** (Doorashada Template-ka Website-ga), waxay xoojisaa doorashada template-ka la xusay. Natiigooda ah, dhammaan tallaabooyinka doorashada template-ka ee habka checkout-ka waxaa laga saaraa.

Ugu dambayntii, **Choose Available Site Templates** (Dooro Template-yada Website-ga La heli karo) wuxuu ka hor istaagaa templates-ka la xusay tallaabada checkout-ka iyadoo la doorayo templates-ka ku jira dejintaas. Waxaa sidoo kale lagu samayn karaa template hore u doortay si loo caawiyo macaamiisha doorashada.

Ugu dambayntii, haddii maamul xogta uu rabto in doorashada template-ka ay dhacdo tallaabooyinka checkout-ka, dejinta ' _default_ ' (default) ayaa ku filan. Sida kale oo la doonayo in la ka saaro iyo la xirmo doorashada template-ka si loo wareejiyo doorashada dejinta qorsheynka (plan settings), waxaa laga yaabaa inay wanaagsan tahay in la isticmaalo doorashooyinka ' _assign new template_ ' ama ' _choose available site templates_ '.

#### Sites (Website-yada) {#sites}

Tab-ka **Sites** (Website-yada) waa qayb ka mid ah habka xaddidda (limitations functionality) ee Ultimate Multisite.

![Sites tab](/img/config/product-sites.png)

Dejintaas waxay qeexaysaa tirada ugu badan ee website-yada macaamiishu ay samayn karaan hoos ku jira xubnaha (membership).

Si aad u furto xaddidda, dejinta **limit sites** (xaddidka websites) siiso xaaladda firfircoon (active state) oo ku qor tirada ugu badan ee websites-ka qaybta **site allowance** (oohin website-yada).

#### Visits (Wax-raacitaanka) {#visits}

Tab-ka **Visits** (Wax-raacitaanka) waa qayb kale oo ka mid ah nidaamka xaddidda ee Ultimate Multisite. Dejintaas waxay u oggolaanaysaa in la isku xiro iyo in la xaddido tirada macaamiisha gaarka ah ee booqanaya website-ka macmiilka.

![Visits tab](/img/config/product-visits.png)

لە ڕووی بازرگانی و پڕۆژەی مارکتینگ، بەڕێوەبەرانی تۆڕ (network administrators) دەتوانن ئەم تنظیمەیە بەکاربهێنن بۆ هاندانی کڕیەکانیان کە پلانیان پێویستیان بوو بگەڕێنەوە بۆ پلە بەرزتر کاتێک سنوورەکان گەیشتن. ئەم تنظیمەیە هەروەها یارمەتی بەڕێوەبەر تۆڕ دەدات بۆ کۆنترۆڵکردن و ڕێگرتن لە ڕێژەی زۆر بوونی لێدان (traffic) بۆ سەر سایتەکان بۆ پاراستنی سەرچاوەکانی سیستەم.

بۆ ئەوەی ئەم تایبەتمەندییە بەکاربهێنیت، دۆخی **limit unique visits** (سنووری سەردانکاری یەکتا) لەسەر دۆخی چالاککردنەوە (active state) بکە و ژمارەی گەورەترین کڕیانیت لە فیلدی **unique visits quota** (پوتنی سەردانکارییە یەکتاکان) دیاری بکە.

کاتێک ئەم سنوورەتا گەیشت، Ultimate Multisite لە جیاتی ئەوەی سایتەکە بەکاردێت، پەیامێک دەدات کە سنوورەکان زیاتر بوون.

#### بەکارهێنەران (Users) {#users}

محدودییەکانی 'Users' لە Ultimate Multisite ڕێگە بدەن بەڕێوەبەر تۆڕ بۆ دیاریکردنی سنوور بۆ ئەو ژمارەی یەکێک لە بەکارهێنەران کە دەتوانرێت دروست بکرێن و ڕۆڵەکان پێ بدەن.

![Users tab](/img/config/product-users.png)

بۆ چالاککردنەوەی ئەم تایبەتمەندییە، دۆخی **limit user** (سنووری بەکارهێنەر) لەسەر دۆخی چالاککردنەوە بکە بە ڕێگریکردنەوەی ڕاست.

پاشان بۆ هەر ڕۆڵێک کە سنوور دەبێت، دۆخی لەو کاتدا دیاری بکە و سنووری گەورەترین سنوور لە فیلدی گونجاو دیاری بکە.

#### پۆستەکان (Post Types) {#post-types}

دۆخی **Post Types** ڕێگە بدات بەڕێوەبەر تۆڕ بۆ دیاریکردنی سنوورە ورد و تایبەت بۆ ئەو جۆرە پۆستە زۆرەی لە WordPress دایە.

![Post Types tab](/img/config/product-post-types.png)

لەبەر پێکهاتەی WordPress، پۆستەکان و جۆرەکانی پۆست (post types) بەشێکی گرنگ لە کارکردنی سەرەکی سیستەمن، بۆیە سیستەمی سنووردارکردنی Ultimate Multisite دیزاین کراوە بۆ یارمەتیدانی بەڕێوەبەر تۆڕ لە دامەزراندن و پاراستنی ئەو سنوورانە.

بۆ چالاککردنەوەی ئەم زیرەکی سنووردارکردنە، دۆخی **limit post types** (سنووری جۆرەکانی پۆست) لەسەر دۆخی چالاککردنەوە بکە بە ڕێگریکردنەوەی ڕاست.

خataa, haddii aad rabto inaad liis kasta oo post type ah si loogu xaddido, waxaad u baahan tahay inaad dib u socoto (toggle) adigoo u soo saaraya dhanka midig, ka dibna aad qeexdo inta ugu badan ee koontada sare ee loo oggolaan yahay qaybta saxda ah.

#### Meelka Disk-ga (Disk Space) {#disk-space}

Tab-ka **Disk Space** wuxuu u oggolaanaya maamulayaasha shabakad inay xaddidan yihiin meesha ay macaamiishu isticmaalaan.

![Disk Space tab](/img/config/product-disk-space.png)

Guud ahaan, WordPress multisite-ka, faylalka asalka ah (core files) waxaa la wadaagayaa dhammaan shaqooyinka, halka directory-yada gaarka ah ee lagu abuuro faylasha media iyo soo dejinta (uploads) ay ku jiraan qodobadan iyo xaddidda.

Si aad u fuliso xaddidda isticmaalka disk-ga, u beddel **limit disk size per site** toggle-ka si uu u noqdo dibadda ah adigoo u soo saaraya dhanka midig.

Markaas, qeex inta ugu badan ee sare ee megabytes (MB) ee qaybta **disk space allowance** ee meel kasta.

#### Domain-ka Gaarka Ah (Custom Domain) {#custom-domain}

Adigoo dib u socota (toggling) dooro kan, waxaad u oggolaanaysaa domain-yada gaarka ah (custom domains) inay ku jiraan qorshahaas si gaar ah.

![Custom Domains tab](/img/config/product-custom-domains.png)

#### Themes (Qaybaha Muuqaalka - Themes) {#themes}

Tab-ka **Themes** ee gudaha dooro bixinta alaabta (product options) wuxuu u oggolaanaya maamulaha shabakad inuu theme-yada macaamiisha u soo bandhigo si ay isku doorbadaan, iyo sidoo kale inuu doorbidaa xaaladda theme-ka.

![Themes tab](/img/config/product-themes.png)

_**Fiiro gaar ah: Si theme-yada loo bixiyo macaamiisha waxay u baahan yihiin inay maamulaha shabakad ku fogaadaan (network enabled).**_

![Network themes page](/img/config/product-themes-network-enabled.png)

Doorashada **visibility** waxay qeexaysaa in theme-kaas uu muuqdo mise uusan macaamiisha arki karin marka ay daawayaan tab-ka **Appearance > Themes** ee website-kooda. Haddii aad doorato **Hidden**, waxaad ka saartaa theme-ka muuqaalka, taasoo siisa xaddidda awoodda lagu doorto oo la hawlgelin karo.

![Themes tab](/img/config/product-themes.png)

Doorashada **behavior** waxay u oggolaanaysaa maamulaha shabakad inuu qeexo xaaladda theme-ka marka website-ka macaamiisha la abuuro.

Halkii **A** **Available** (La helita), theme-ka waxaa loo siinayaa macmiilka inuu is-kordiyo (self-activation). Ka soo horjeed, **Not Available** (Ma la helin) waxay ka saartaa awoodda macmiilka inuu theme-ka kordiyo. Ugu dambayntii, doorashada **Force Activate** (Cilicsi Kordinta) waxay xoogga saartaa waxa kale oo ay dooratay iyo kordinta theme-ka, taasoo ka dhigaysa mid default marka la abuuro website-ka.

#### Plugins {#plugins}

Sida tab-ka Themes, Ultimate Multisite wuxuu u oggolaanayaa maamulaha shirkadda (network administrator) inuu qorsheeyo keliya meesha plugin-yada ay arki karaan macmiilka iyo xaaladooda marka la abuuro website cusub.

![Plugins tab](/img/config/product-plugins.png)

Doorashada **visibility** (Aragti) waxay u oggolaanaysaa in plugin-ku uu yahay mid aragti ah ama laga qabto macmiilka marka la eego website-kiisa iyadoo la isticmaalayo doorashada menu-ga Plugins.

Maamulaha shirkadda wuxuu si dheeri ah u maamuli karaa sida plugin-yada u shaqeeyaan isagoo adeegsada doorashada ku jirta behavior drop-down (doorashada habka).

![Plugins tab](/img/config/product-plugins.png)

Doorashada **Default** (Wax-suurtagalka ah) waxay ixtiraamaysaa xaaladda plugin-ka oo la qorsheeyay template-ka website-ka uu macmiilku doortay. Sidaas darteed, plugin-yada lagu kordiyo template-ka ayaa sii ahaata mid la kordiyay marka template-ka la wareejiyo (cloned) website-ka macmiilka.

**Force Activate** waxay meesha plugin-ka ku dhigtaa xaalad firfircoon (active state) marka la abuuro website-ka, halka **Force Inactivate** (Cilicsi Xiritaanka) ay ka saartaa plugin-ka marka la abuuro website-ka. Labada xaaladoodani, xaaladda plugin-ka waxaa si gacanta ah loo beddeli karaa macmiilku iyadoo la isticmaalayo menu-ga WordPress Plugins-kiisa.

Setting-ka **Force Activate & Lock** waxay u shaqaysaa si la mid ah, laakiin waxay ka horjoogsataa in macnaha plugin-ka uu isbeddelo iyada oo ay isticmaaluhu samayn karo. Sidaas darteed, badhanka Force Activate and Lock wuxuu aasaagi doonaa plugin-ka mustaqbalka ah (active state) waxayna ka horjoogsanayaa in macnaha uu iska xirmo (deactivate). Sidoo kale, badhanka **Force Inactivate & Lock** wuxuu aasaagi doonaa plugin-ka mustaqbalka aan la shaqayn (inactive state) wuxuuna ka horjoogsanayaa isticmaaluhu inuu plugin-ka hawlgelin karo.

Maamulaha shabakad ayaa laga yaabaa inuu tixgeliyo badhanka Force Activate & Lock iyo Force Inactivate & Lock isagoo la mid ah qoraallada (site templates) sida plugins, waxaana ay xaaladaha plugin-ka ee ku jira qoraallada ay saamaynta ka leeyihiin badhanka haddii la doorbiyay.

#### Waxyaabaha La Dib U Dhigista Xaddidda (Reset Limitations) {#reset-limitations}

Tab-ka **Reset Limitations** wuxuu dib u dhigaa dhammaan xaddidaha gaarka ah ee lagu qorsheeyay alaabta. Si aad dib u dhigto xaddidaha, guji badhanka **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

Si aad u xaqiijiso ficilka, si toos ah u qaado badhanka **confirm reset** oo ku dhig xaaladda hawlgalka (active state) ee dhinaca midigta, ka dibna guji badhanka **reset limitations**.

![Reset Limitations tab](/img/config/product-reset-limitations.png)

## Wax Ka Beddelid, Duubid, ama Dejinta Alaabta (Edit, Duplicate, or Delete Product) {#edit-duplicate-or-delete-product}

Alaabta hore ee la haysto waxaa lagu wax ka beddeli karaa, duubiya (duplicate), ama la deji karaa iyadoo la socdo **Ultimate Multisite > Products** oo la dhigayo magaca alaabta horta.

![Product hover actions](/img/config/product-hover-actions.png)
