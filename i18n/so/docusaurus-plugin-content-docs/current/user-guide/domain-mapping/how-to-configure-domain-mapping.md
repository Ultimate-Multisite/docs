---
title: Sida loo habeeyo khariidaynta domain-ka
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Sida loo Habeeyo Khariidaynta Domain-ka (v2) {#how-to-configure-domain-mapping-v2}

_**OGEYSIIS MUHIIM AH: Maqaalkani wuxuu tixraacayaa Ultimate Multisite nooca 2.x.**_

Mid ka mid ah astaamaha ugu awoodda badan ee shabakad premium ah waa awoodda lagu siinayo macaamiisheena fursad ay domain heer-sare ah ugu xiraan goobahooda. Ugu dambayntii, kee baa u muuqda mid xirfadaysan: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) mise [_**joesbikeshop.com**_](http://joesbikeshop.com)? Taasi waa sababta Ultimate Multisite u bixiso astaantaas oo ku dhex dhisan, iyada oo aan loo baahnayn in la isticmaalo plugins dhinac saddexaad ah.

## Waa maxay khariidaynta domain-ku? {#whats-domain-mapping}

Sida magaca ka muuqata, khariidaynta domain-ku waa awoodda ay bixiso Ultimate Multisite si ay u qaadato codsi domain gaar ah oo ay codsigaas ugu khariidayso goobta u dhiganta ee ku jirta shabakadda, taas oo domain-kaas gaarka ahi ku xiran yahay.

### Sida loogu diyaariyo khariidaynta domain-ka Shabakaddaada Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Khariidaynta domain-ku waxay u baahan tahay habayn dhinacaaga ah si ay u shaqeyso. Nasiib wanaag, Ultimate Multisite ayaa kuu otomaatig-gareeya shaqada adag si aad si fudud ugu buuxiso shuruudaha.

Inta lagu jiro rakibidda Ultimate Multisite, wizard-ku wuxuu si otomaatig ah u koobiyeeyn doonaa oo ugu rakibi doonaa **sunrise.php** galka loo qoondeeyay. **Wizard-ku kuuma oggolaan doono inaad sii socoto ilaa tallaabadan la dhammaystiro**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Tani waxay ka dhigan tahay in marka wizard-ka rakibidda Ultimate Multisite uu dhammaystiro habaynta shabakaddaada, aad isla markiiba bilaabi karto khariidaynta domain-ka gaarka ah.

Ogow in khariidaynta domain-ka ee Ultimate Multisite aysan khasab ahayn. Waxaad haysataa ikhtiyaar aad ku isticmaasho shaqada khariidaynta domain-ka ee asalka ah ee WordPress Multisite ama xal kale oo khariidaynta domain ah.

Haddii aad u baahato inaad damiso khariidaynta domain-ka ee Ultimate Multisite si aad boos ugu siiso xalal kale oo khariidaynta domain ah, waxaad astaantan ka damin kartaa hoosta **Ultimate Multisite > Settings > Khariidaynta Domain-ka**.

![Bogga dejimaha Khariidaynta Domain-ka oo muujinaya leexinta maamulka, farriinta khariidaynta iyo ikhtiyaarrada DNS](/img/config/domain-mapping-settings.png)

Si toos ah hoosta ikhtiyaarkan, waxaad sidoo kale arki kartaa ikhtiyaarka **Qasab ka dhig Leexinta Maamulka**. Ikhtiyaarkan wuxuu kuu oggolaanayaa inaad xakamayso haddii macaamiishaadu ay awoodi doonaan inay galaan Dashboard-kooda maamulka labadaba domain-kooda gaarka ah iyo subdomain-kooda ama kaliya midkood.

Haddii aad doorato **Qasab ugu leexi domain-ka la khariiday** , macaamiishaadu waxay kaliya awoodi doonaan inay Dashboard-kooda maamulka ka galaan domain-nadooda gaarka ah.

Ikhtiyaarka **Qasab ugu leexi** **domain-ka shabakadda** wuxuu sameyn doonaa si ka soo horjeedda saxda ah - macaamiishaada waxaa kaliya loo oggolaan doonaa inay Dashboard-yadooda ka galaan subdomain-kooda, xitaa haddii ay isku dayaan inay ka soo galaan domain-nadooda gaarka ah.

Ikhtiyaarka **U oggolow gelitaanka maamulka labadaba domain-ka la khariiday iyo domain-ka shabakadda** wuxuu u oggolaanayaa inay Dashboard-yadooda maamulka ka galaan labadaba subdomain-ka iyo domain-ka gaarka ah.

![Liiska hoos-u-dhaca Leexinta Maamulka oo la ballaariyay, kana muuqdaan saddexda ikhtiyaar ee leexinta](/img/config/domain-mapping-redirect-options.png)

Waxaa jira laba hab oo lagu khariidayn karo domain gaar ah. Kan koowaad waa in magaca domain-ka laga khariidayo Dashboard-ka maamulka shabakaddaada adigoo ah super admin, kan labaadna waa iyada oo loo marayo Dashboard-ka maamulka subsite-ka hoosta bogga Account.

Laakiin ka hor intaadan bilaabin khariidaynta domain-ka gaarka ah mid ka mid ah subsites-ka ku jira shabakaddaada, waxaad u baahan doontaa inaad hubiso in **dejimaha DNS** ee magaca domain-ka si sax ah loo habeeyay.

###

### Hubinta in dejimaha DNS ee domain-ka si sax ah loo habeeyay {#making-sure-the-domain-dns-settings-are-properly-configured}

Si khariidayn u shaqeyso, waxaad u baahan tahay inaad hubiso in domain-ka aad qorshaynayso inaad khariidayso uu tilmaamayo cinwaanka IP ee Shabakaddaada. Ogow inaad u baahan tahay cinwaanka IP ee Shabakadda - cinwaanka IP ee domain-ka halka Ultimate Multisite lagu rakibay - ma aha cinwaanka IP ee domain-ka gaarka ah ee aad rabto inaad khariidayso. Si aad u raadiso cinwaanka IP ee domain gaar ah, waxaan kugula talinaynaa inaad tagto [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), tusaale ahaan.

Si aad si sax ah u khariidayso domain-ka, waxaad u baahan tahay inaad ku darto **A RECORD** qaabayntaada **DNS** oo tilmaamaya **cinwaanka IP** kaas. Maamulka DNS aad buu ugu kala duwan yahay diiwaangeliyaasha domain-nada ee kala duwan, laakiin waxaa jira casharro badan oo online ah oo arrintaas daboolaya haddii aad raadiso " _Abuurista A Record on XXXX_ " halka XXXX uu yahay diiwaangeliyeha domain-kaaga (tusaale: " _Abuurista A Record on_ _GoDaddy_ ").

Haddii aad la kulanto dhibaato sidii tan loo shaqaysiin lahaa, **la xiriir taageerada diiwaangeliyeha domain-kaaga** waxayna awoodi doonaan inay kaa caawiyaan qaybtan.

Haddii aad qorshaynayso inaad u oggolaato macaamiishaada inay khariidaystaan domain-nadooda, iyaga laftoodu waa inay shaqada qaybtan qabtaan. U tilmaam nidaamka taageerada diiwaangeliyehooda haddii ay awoodi waayaan inay abuuraan A Record.

### Khariidaynta magaca domain gaar ah adigoo ah Super Admin {#mapping-custom-domain-name-as-super-admin}

Markaad ku soo gasho adigoo ah super admin shabakaddaada, waxaad si fudud ugu dari kartaa oo u maamuli kartaa magacyada domain-nada gaarka ah adigoo tagaya hoosta **Ultimate Multisite > Domains**.

![Bogga liiska Domains ee Ultimate Multisite](/img/admin/domains-list.png)

Hoosta boggan, waxaad gujin kartaa batoonka **Ku dar Domain** ee kore, taasina waxay soo bandhigi doontaa daaqad modal ah halkaas oo aad ku dejin karto kuna buuxin karto **magaca domain-ka gaarka ah** , **subsite-ka** aad rabto inaad ku dabaqdo magaca domain-ka gaarka ah, isla markaana go'aansato haddii aad rabto inaad ka dhigto magaca **domain-ka aasaasiga ah** iyo in kale (ogow inaad **hal subsite ku khariidayn karto magacyo domain badan**).

![Modal-ka Ku dar Domain oo leh magaca domain-ka, dooriyaha goobta iyo beddelka domain-ka aasaasiga ah](/img/admin/domain-add-modal.png)

Ka dib markaad geliso dhammaan macluumaadka, waxaad markaas gujin kartaa batoonka **Ku dar Domain Jira** ee hoose.

Tani waxay bilaabi doontaa habka xaqiijinta iyo soo-qaadista macluumaadka DNS ee domain-ka gaarka ah. Waxaad sidoo kale arki doontaa log ku yaal hoosta bogga si aad ula socoto habka uu marayo. Habkani wuxuu qaadan karaa dhowr daqiiqo inuu dhammaystirmo.

Ultimate Multisite v2.13.0 sidoo kale wuxuu si otomaatig ah u abuuraa diiwaanka domain-ka gudaha marka site cusub lagu abuuro host ay tahay in loo tixgeliyo domain u gaar ah site. Haddii host-ku yahay domain-ka koowaad ee network-ga, ama mid ka mid ah domain-nada salka ah ee checkout-form la wadaago ee lagu habeeyey field **Site URL**, diiwaanka mapped-domain-ka otomaatigga ah waa la dhaafaa si domain-ka salka ah ee la wadaago uu u sii ahaado mid heli kara site kasta oo isticmaala.

Marka macmiil uu domain cusub ku diiwaangeliyo Domain Seller v1.3.0 ama ka cusub, Ultimate Multisite si caadi ah ayuu otomaatig ugu map-gareeyaa domain-ka la diiwaangeliyey site-ka network-ga ee macmiilka. Maamulayaashu mar dambe uma baahna inay ku daraan diiwaan mapped-domain oo gaar ah kadib diiwaangelin guulaysatay, ilaa ay rabaan inay hagaajiyaan options sida calaamadda primary-domain, xaaladda activation, ama maaraynta SSL.

**Stage** ama status-ku waa inuu ka beddelmaa **Checking DNS** una beddelmaa **Ready** haddii wax walba si sax ah loo dejiyey.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Haddii aad gujiso magaca domain-ka, waxaad awoodi doontaa inaad aragto qaar ka mid ah options gudaha ku jira. Aan si degdeg ah u eegno:

![Bogga faahfaahinta domain-ka oo leh stage, site, active, primary iyo SSL toggles](/img/admin/domain-edit.png)

**Stage:** Tani waa stage-ka uu domain-ku marayo. Marka ugu horraysa ee aad domain-ka ku darto, waxay u badan tahay inuu ku jiri doono stage-ka **Checking DNS**. Hab-socodku wuxuu hubin doonaa entries-ka DNS wuxuuna xaqiijin doonaa inay sax yihiin. Kadib, domain-ka waxaa la gelin doonaa stage-ka **Checking SSL**. Ultimate Multisite wuxuu hubin doonaa in domain-ku leeyahay SSL iyo in kale, wuxuuna domain-kaaga u kala saari doonaa **Ready** ama **Ready (without SSL)**.

**Site:** Subdomain-ka la xiriira domain-kan. Domain-ka la map-gareeyey wuxuu muujin doonaa nuxurka site-kan gaarka ah.

**Active:** Waxaad option-kan u rogi kartaa on ama off si aad u activation ama deactivate-gareyso domain-ka.

**Is Primary Domain?:** Macaamiishaadu waxay yeelan karaan in ka badan hal mapped domain site kasta. Isticmaal option-kan si aad u doorato in kani yahay domain-ka koowaad ee site-ka gaarka ah.

**Is Secure?:** Inkastoo Ultimate Multisite uu hubiyo in domain-ku leeyahay shahaado SSL iyo in kale ka hor inta aan la enable-gareyn, waxaad si gacanta ah u dooran kartaa in domain-ka lagu raro shahaado SSL ama la'aanteed. Ogow haddii website-ku uusan lahayn shahaado SSL oo aad isku daydo inaad khasab ugu rarto SSL, waxay kuu keeni kartaa errors.

### U map-gareynta magaca domain-ka gaarka ah sidii isticmaale Subsite {#mapping-custom-domain-name-as-subsite-user}

Maamulayaasha subsite sidoo kale waxay ka map-gareyn karaan magacyo domain gaar ah dashboard-ka admin ee subsite-kooda.

Marka hore, waxaad u baahan tahay inaad hubiso inaad enable-gareyso option-kan hoosta settings-ka **Domain mapping**. Eeg screenshot-ka hoose.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Waxaad sidoo kale dejin ama habayn kartaa option-kan heerka **Plan** ama options-ka product-ka ee **Ultimate Multisite > Products**.

![Qaybta Custom Domains ee bogga tafatirka product-ka](/img/config/product-custom-domains.png)

Marka mid kasta oo ka mid ah options-kaas la enable-gareeyo oo isticmaale subsite loo oggolaado inuu map-gareeyo magacyo domain gaar ah, isticmaalaha subsite waa inuu arkaa metabox hoosta bogga **Account** oo la yiraahdo **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Isticmaaluhu wuxuu gujin karaa badhanka **Add Domain**, taasina waxay soo bandhigi doontaa daaqad modal ah oo leh tilmaamo qaar.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Kadib isticmaaluhu wuxuu gujin karaa **Next Step** wuxuuna sii wadi karaa ku darista magaca domain-ka gaarka ah. Waxay sidoo kale dooran karaan haddii kani noqon doono domain-ka koowaad iyo in kale.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Gujinta **Add Domain** waxay bilaabi doontaa hab-socodka xaqiijinta iyo soo qaadista macluumaadka DNS ee domain-ka gaarka ah.

### Ku saabsan Domain Syncing {#about-domain-syncing}

Domain Syncing waa hab-socod uu Ultimate Multisite ku daro magaca domain-ka gaarka ah Account-kaaga hosting ahaan add-on domain **si domain mapping-ku u shaqeeyo**.

Domain syncing si otomaatig ah ayuu u dhacaa haddii hosting provider-kaagu leeyahay integration la leh feature-ka domain mapping ee Ultimate Multisite. Hadda, hosting providers-kan waa _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ iyo _Cpanel._

Marka integration host-provider ahi firfircoon yahay, Ultimate Multisite sidoo kale wuxuu queue-gareyn karaa hawsha abuurista DNS ama subdomain ee dhinaca provider-ka ee sites cusub ee la abuuro. Haddii integration uusan dhegeysanayn hawshaas, background job-ka waa la dhaafaa si looga fogaado entries queue oo aan wax qaban. Hubinnada DNS iyo SSL ee mapped domains waxay sii wadaan inay ku socdaan hab-socodka caadiga ah ee domain-stage.

Waxaad u baahan doontaa inaad activation-gareyso integration-kan settings-ka Ultimate Multisite hoosta tab-ka **Integration**.

![Tab-ka Integrations ee settings-ka Ultimate Multisite oo muujinaya hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Ogow haddii hosting provider-kaagu uusan ka mid ahayn providers-kaas kor lagu xusay,**waxaad u baahan doontaa inaad si gacanta ah u sync-gareyso ama ugu darto magaca domain-ka** Account-kaaga hosting._
