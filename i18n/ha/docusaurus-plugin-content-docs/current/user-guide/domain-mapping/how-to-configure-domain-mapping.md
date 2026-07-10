---
title: Yadda ake Saita Taswirar Yanki
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Yadda ake Saita Haɗa Domain (v2) {#how-to-configure-domain-mapping-v2}

_**MUHIMMIYAR SANARWA: Wannan labarin yana magana ne game da Ultimate Multisite sigar 2.x.**_

Ɗaya daga cikin mafi ƙarfin fasalolin cibiyar premium ita ce ikon ba abokan cinikinmu damar haɗa domain na matakin-sama zuwa shafukansu. Bayan haka, wanne ya fi kama da na ƙwararru: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ko [_**joesbikeshop.com**_](http://joesbikeshop.com)? Shi ya sa Ultimate Multisite ke bayar da wannan fasalin a ciki, ba tare da buƙatar amfani da plugins na ɓangare na uku ba.

## Menene haɗa domain? {#whats-domain-mapping}

Kamar yadda sunan ya nuna, haɗa domain shi ne ikon da Ultimate Multisite ke bayarwa don karɓar buƙata ta custom domain sannan ya haɗa wannan buƙatar zuwa shafin da ya dace a cikin cibiyar wanda aka haɗa da wannan domain na musamman.

### Yadda ake saita haɗa domain a kan Ultimate Multisite Network ɗinku {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Haɗa domain yana buƙatar wasu saituna daga gare ku domin ya yi aiki. Abin farin ciki, Ultimate Multisite yana sarrafa muku aikin mai wahala ta atomatik domin ku iya cika buƙatun cikin sauƙi.

A lokacin shigar da Ultimate Multisite, wizard zai kwafi kuma ya shigar da **sunrise.php** ta atomatik zuwa babban fayil ɗin da aka ware. **Wizard ba zai ba ku damar ci gaba ba har sai an kammala wannan matakin**.

<!-- Hoton allo babu: wizard na shigar da Ultimate Multisite tare da matakin sunrise.php -->

Wannan yana nufin cewa da zarar wizard na shigar da Ultimate Multisite ya kammala saita cibiyarku, za ku iya fara haɗa custom domain nan take.

Ku lura cewa haɗa domain a cikin Ultimate Multisite ba dole ba ne. Kuna da zaɓi na amfani da aikin haɗa domain na asali na WordPress Multisite ko kowace irin hanyar haɗa domain.

Idan kuna buƙatar kashe haɗa domain na Ultimate Multisite domin ba da dama ga wasu hanyoyin haɗa domain, za ku iya kashe wannan fasalin a ƙarƙashin **Ultimate Multisite > Saituna > Haɗa Domain**.

![Shafin saitunan Haɗa Domain yana nuna tura admin, saƙon haɗawa da zaɓuɓɓukan DNS](/img/config/domain-mapping-settings.png)

Kai tsaye a ƙasa da wannan zaɓin, za ku kuma iya ganin zaɓin **Tilasta Tura Admin**. Wannan zaɓin yana ba ku damar sarrafa ko abokan cinikinku za su iya shiga admin Dashboard ɗinsu duka a kan custom domain ɗinsu da subdomain ko kuma a kan ɗaya daga cikinsu kawai.

Idan kuka zaɓi **Tilasta tura zuwa domain da aka haɗa** , abokan cinikinku za su iya shiga admin Dashboard ɗinsu ne kawai a kan custom domains ɗinsu.

Zaɓin **Tilasta tura zuwa** **domain na cibiyar** zai yi akasin haka kai tsaye - za a ba abokan cinikinku damar shiga dashboards ɗinsu ne kawai a kan subdomain ɗinsu, ko da suna ƙoƙarin shiga ta custom domains ɗinsu.

Kuma zaɓin **Bada damar shiga admin ta hanyar domain da aka haɗa da domain na cibiyar duka** yana ba su damar shiga admin dashboards ɗinsu duka a kan subdomain da custom domain.

![Jerin zaɓin Tura Admin a buɗe yana nuna zaɓuɓɓukan tura guda uku](/img/config/domain-mapping-redirect-options.png)

Akwai hanyoyi biyu na haɗa custom domain. Na farko shi ne ta hanyar haɗa sunan domain daga network admin dashboard ɗinku a matsayin super admin kuma na biyu shi ne ta hanyar subsite admin dashboard a ƙarƙashin shafin Account.

Amma kafin ku fara haɗa custom domain zuwa ɗaya daga cikin subsites a cikin cibiyarku, kuna buƙatar tabbatar da cewa **saitunan DNS** na sunan domain an daidaita su yadda ya kamata.

###

### Tabbatar da cewa saitunan DNS na domain an daidaita su yadda ya kamata {#making-sure-the-domain-dns-settings-are-properly-configured}

Domin haɗawa ya yi aiki, kuna buƙatar tabbatar da cewa domain ɗin da kuke shirin haɗawa yana nuni zuwa IP address na Network ɗinku. Ku lura cewa kuna buƙatar IP address na Network - IP address na domain inda aka shigar da Ultimate Multisite - ba IP address na custom domain da kuke son haɗawa ba. Don nemo IP address na wani domain na musamman, muna ba da shawarar zuwa [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), misali.

Domin haɗa domain daidai, kuna buƙatar ƙara **A RECORD** a kan saitin **DNS** ɗinku wanda ke nuni zuwa wannan **IP address**. Gudanar da DNS yana bambanta sosai tsakanin masu rijistar domain daban-daban, amma akwai darussan koyarwa da yawa a kan intanet da ke bayani kan hakan idan kuka bincika " _Ƙirƙirar A Record a kan XXXX_ " inda XXXX shi ne mai rijistar domain ɗinku (misali: " _Ƙirƙirar A Record a kan_ _GoDaddy_ ").

Idan kuka sami kanku cikin matsala wajen sa wannan ya yi aiki, **tuntuɓi tallafin mai rijistar domain ɗinku** kuma za su iya taimaka muku da wannan ɓangaren.

Idan kuna shirin ba abokan cinikinku damar haɗa domains ɗinsu da kansu, dole ne su yi aikin wannan ɓangaren da kansu. Ku nuna musu tsarin tallafin mai rijistarsu idan suka kasa ƙirƙirar A Record.

### Haɗa sunan custom domain a matsayin Super Admin {#mapping-custom-domain-name-as-super-admin}

Lokacin da kuka shiga a matsayin super admin a kan cibiyarku, za ku iya ƙara da sarrafa sunayen custom domain cikin sauƙi ta hanyar zuwa ƙarƙashin **Ultimate Multisite > Domains**.

![Shafin jerin Domains a cikin Ultimate Multisite](/img/admin/domains-list.png)

A ƙarƙashin wannan shafin, za ku iya danna maɓallin **Ƙara Domain** a sama kuma wannan zai buɗe taga modal inda za ku iya saita da cika **sunan custom domain** , **subsite** da kuke son amfani da sunan custom domain a kai, kuma ku yanke shawara ko kuna son saita shi a matsayin sunan **primary domain** ko a'a (ku lura cewa za ku iya haɗa **sunayen domain da yawa zuwa subsite ɗaya**).

![Modal na Ƙara Domain tare da sunan domain, mai zaɓar shafi da maɓallin primary domain](/img/admin/domain-add-modal.png)

Bayan kun saka duk bayanan, sai ku danna maɓallin **Ƙara Domain da ke Nan** a ƙasa.

Wannan zai fara aikin tabbatarwa da ɗauko bayanan DNS na custom domain. Za ku kuma ga log a ƙasan shafin domin ku bi tsarin da yake gudana. Wannan tsarin na iya ɗaukar wasu mintuna kafin ya kammala.

Ultimate Multisite v2.13.0 kuma yana ƙirƙirar rikodin domain na ciki ta atomatik lokacin da aka ƙirƙiri sabon site a kan host da ya kamata a ɗauka a matsayin domain na kowane site. Idan host ɗin shi ne babban domain na network, ko ɗaya daga cikin shared checkout-form base domains da aka saita a filin **Site URL**, za a tsallake rikodin mapped-domain na atomatik domin shared base domain ɗin ya ci gaba da kasancewa samuwa ga kowane site da yake amfani da shi.

Lokacin da abokin ciniki ya yi rajistar sabon domain ta Domain Seller v1.3.0 ko sabo, Ultimate Multisite zai map domain ɗin da aka yi rajista zuwa network site na abokin ciniki ta tsohuwa. Administrators ba sa buƙatar ƙara wani rikodin mapped-domain na daban bayan rajista ta yi nasara, sai dai idan suna son daidaita zaɓuɓɓuka kamar alamar primary-domain, yanayin kunnawa, ko sarrafa SSL.

**Stage** ko matsayin ya kamata ya canza daga **Checking DNS** zuwa **Ready** idan an saita komai yadda ya kamata.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Idan ka danna sunan domain, za ka iya ganin wasu zaɓuɓɓuka a ciki. Mu duba su cikin sauri:

![Shafin cikakken bayanin domain mai Stage, site, active, primary da maɓallan SSL](/img/admin/domain-edit.png)

**Stage:** Wannan shi ne matakin da domain ɗin yake ciki. Lokacin da ka fara ƙara domain ɗin, mai yiwuwa zai kasance a matakin **Checking DNS**. Tsarin zai bincika shigarwar DNS kuma ya tabbatar cewa suna daidai. Sannan, za a sanya domain ɗin a matakin **Checking SSL**. Ultimate Multisite zai bincika ko domain ɗin yana da SSL ko babu kuma zai ware domain ɗinka a matsayin **Ready** ko **Ready (without SSL)**.

**Site:** Subdomain da ke da alaƙa da wannan domain. Mapped domain zai nuna abun cikin wannan takamaiman site.

**Active:** Za ka iya kunna ko kashe wannan zaɓi don kunna ko kashe domain ɗin.

**Is Primary Domain?:** Abokan cinikinka za su iya samun mapped domain fiye da ɗaya ga kowane site. Yi amfani da wannan zaɓi don zaɓar ko wannan shi ne primary domain ga takamaiman site.

**Is Secure?:** Duk da cewa Ultimate Multisite yana bincika ko domain ɗin yana da takardar shaidar SSL ko babu kafin kunna shi, za ka iya zaɓar da hannu a loda domain ɗin da ko ba tare da takardar shaidar SSL ba. Ka lura cewa idan website ɗin ba shi da takardar shaidar SSL kuma ka yi ƙoƙarin tilasta lodinsa da SSL, yana iya ba ka kurakurai.

### Mapping sunan custom domain a matsayin mai amfani da Subsite {#mapping-custom-domain-name-as-subsite-user}

Subsite administrators kuma za su iya map sunayen custom domain daga dashboard na admin na subsite ɗinsu.

Da farko, kana buƙatar tabbatar da cewa ka kunna wannan zaɓi a ƙarƙashin saitunan **Domain mapping**. Duba hoton allo da ke ƙasa.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Haka kuma za ka iya saita ko tsara wannan zaɓi a matakin **Plan** ko zaɓuɓɓukan samfur a **Ultimate Multisite > Products**.

![Sashen Custom Domains a shafin gyaran samfur](/img/config/product-custom-domains.png)

Lokacin da aka kunna ɗaya daga cikin waɗannan zaɓuɓɓuka kuma an ba mai amfani da subsite izinin map sunayen custom domain, ya kamata mai amfani da subsite ya ga metabox a ƙarƙashin shafin **Account** mai suna **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Mai amfani zai iya danna maɓallin **Add Domain** kuma zai buɗe taga modal mai wasu umarni.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Sannan mai amfani zai iya danna **Next Step** ya ci gaba da ƙara sunan custom domain. Haka kuma za su iya zaɓar ko wannan zai zama primary domain ko a'a.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Danna **Add Domain** zai fara tsarin tabbatarwa da ɗauko bayanan DNS na custom domain.

### Game da Domain Syncing {#about-domain-syncing}

Domain Syncing tsari ne inda Ultimate Multisite yake ƙara sunan custom domain zuwa hosting account ɗinka a matsayin add-on domain **domin domain mapping ya yi aiki**.

Domain syncing yana faruwa ta atomatik idan hosting provider ɗinka yana da haɗin kai da fasalin Ultimate Multisite domain mapping. A yanzu, waɗannan hosting providers su ne _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ da _Cpanel._

Lokacin da haɗin kai na host-provider yake aiki, Ultimate Multisite kuma zai iya saka aikin ƙirƙirar DNS ko subdomain a gefen provider a queue don sites da aka ƙirƙira kwanan nan. Idan babu wani integration da ke sauraron wannan aiki, za a tsallake background job ɗin don kauce wa shigarwar queue da ba ta yin komai. Binciken DNS da SSL don mapped domains na ci gaba da gudana ta hanyar tsarin domain-stage na yau da kullum.

Za ka buƙaci kunna wannan integration a saitunan Ultimate Multisite a ƙarƙashin shafin **Integration**.

![Shafin Integrations a saitunan Ultimate Multisite yana nuna hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Lura cewa idan hosting provider ɗinka ba ya cikin waɗannan providers da aka ambata a sama, **za ka buƙaci sync ko ƙara sunan domain da hannu** zuwa hosting account ɗinka._
