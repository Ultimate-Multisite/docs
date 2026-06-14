---
title: Ultimate Multisite 101
sidebar_position: 10
_i18n_hash: 031ea0b6a4b8709559485159811f6b31
---
# Ultimate Multisite 101

Ultimate Multisite ndiyo plugin ya WordPress inotenda kuweze kukupa WaaS kana Websites as a Service kune vakijuzi. Pasi ticishandisa uye kuti tinzwire sei Ultimate Multisite inogona kuita zvinhu kwemudzidzi wako nevanhu vakaro, kuna kuteerera kunzwire kunoita zvinhu zvakakosha zvinotarisirwa.

## WordPress Multisite

Ndingatano vose tinoziva nezveinstalls ya WordPress inotanga (stock-standard). Unogona kuita iye kubva munzira yakachengetedzo yechivimbo chekudziwa kwako nehoster, kana kuti, kune vanhu vakakwanisa, kunge unenge wateerera server ye web uye database, utaurira files dzacho uye kutanga kuratidza kuratidza.

Iyi inogona kuenda kune mibinyorwa ya WordPress imweya yakawanda paunhu vose munzira yese. Asi kubva kunyaya ya agency kana hoster, tiri kuona zvinhu nezvevazhinji (volumes) pamwe.

Kudiwa kuti unogona kutanga iye WordPress site imwe kana hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hupenyu hup

Kuti kuona zvinhu zvakakosha zvinogona kuone muupenyu weWordPress, uye kunoita kuti zvinhu zvakasiyana zvakawanda zvizivikaniswe zviri kuitika munzira yakachengetedza.

### The Network (Mavandudzi)

Muupenyu weWordPress, multisite network inoratidza kuva nekuti mufanana nemashoko anonyanya vakaonekwa mumapuro dzakasiyana-nyaya pane WordPress. Kukana multisite network kunogona kuitika zvakasiyana nevedzi dzenyaya dzehosting, asi zvinhu zvinotevera ndizvo zviri kuita kuti WordPress zivone kuti inogona kutenderwa munzira iyi.

Kune zvinhu zvakawanda zviri kuitika pakati pe multisite network uye installation yaWordPress inosanganisira (stand-alone), tiri kuzoti zvishandisa zvakasiyana zvakawanda.

#### Subdomain vs. Subdirectory (Subdomain vs. Subdirectory)

Chimwe chote chinotevera kuita ndicho unofanira kunzwisisa ndiko installation ya multisite inogona kutenderwa ne _subdirectories_ kana _subdomains_. Ultimate Multisite inogona kushanda zvakanaka nemazwi akaiyi, asi kuna zvinosanganisira dzinotsanangurwa pakati pei dziri kuitika.

Mu configuration ya _subdirectory_, sites dzine network dzichigadzirisa path (mhando) yakaita pamusoro pedomain inotevera. Zvinhu zvakasiyana, site inotopwa ‘site1’ itanga URL yayo yakaita https://domain.com/site1. Mu configuration ya _subdomain_, site inotopwa ‘site1’ itanga _subdomain_ yayo yacho yakaita https://site1.domain.com/.

Kuti zvinhu izvi zvinogona kuva zvinosanganisira, kunoita kuti _subdomains_ dzine zvakawanda zvinhu zviri kuitika asi kunoda kufurira uye kupanga mhinduro yakawanda munzira yechine.

Mhizha ngo DNS, ukusebenzisa _subdirectories_ kuno kungasho kunge changamira kudzidziswa. Kubeni sites ye network zinekuva ndiyo zivonzi zokugara kweparent path, kuno chine kuonekwa zviri chinobva kana domain name imwe chete inofanira kuwanzika kwemudzimba weparent domain name. Kune _subdomains_ kuno chine changamira chinobva kudzidziswa zvakawanda, kuno dzichida kuti uwedzise CNAME entry woseye kwa site ye network kana wildcard (*) entry mu DNS records.

Chii chinobva kuno chine kuwedzisa ndiri SSL uye kukupa nekubvumira SSL certificates. Mu configuration ya _subdirectory_, certificate imwe inogona kushandiswa kubva kuti sites ye network dziri zvinhu chete zvinobva dze parent domain name. Saka certificate yekudomain.com chinogona kuipa SSL kwa https://domain.com/site1, https://domain.com/site2 uye zvinhu zvakawanda.

Mu configuration ya _subdomain_, ukusezisa wildcard SSL certificate ndiyo mupfungwa yakawanda. Certificate iyi inopa encryption kubva kune domain uye _subdomains_ idzi. Saka wildcard SSL certificate inopa encryption kwa https://site1.domain.com, https://site2.domain.com uye HTTPS yekudomain.com pamwe.

Kuti zvinhu hokuine kuita kunge kune zvinoreva, izvi rinogona kuva dzinobva dziri dzinobva ndiri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dziri dzinobva dz

Ndinembo iye, kana yakasi kana kuti WordPress Multisite inachera chote chinotora ku administrators vesite kuti vaine plugins uye themes uye inotaura iye kune role ya network administrator kana 'super admin' yakachengetedza. Iye role inokwanisa kuona zvinhu izvi: kunge inoziva kana vaine kuona menu ye plugins munzvimbo hwavo, uye kana iye inogadzirisa kuti izvi zvinosvika pakutora (activating) kana kuparera (deactivating) plugins.

Kuti chii, network administrator ndiye anomira kuita plugins uye themes mu-network uye anopa rumbiko (permissions) kuti vaine kugona kutora uye kuparera plugins uye themes kune sites dzine network. Site administrators havanzi kuita plugins kana themes kana kuona plugins uye themes pane sita rava vavo.

#### Users and Administrators

Mu WordPress Multisite, sites dzese dzinogara nemabhurangi (database) anonyanya, uye saka dzinogara nemabhurangi akasimba (users), roles, uye capabilities dzenge dzinogara. Ndiri kuona zvakanaka kuti vese users vanogara munzvimbo yenyika (network) uye havanzi munzvimbo yakapfupi ye site dzine.

Ndinokwanisa kunzwisisa kuti kune nguva dzakawanda inosanganisira kuti users vaine kuva vese, uye iye WordPress Multisite inachera iye capability ku administrators vesite uye inotaura iye ku network administrator. Kuti chii, network administrator anogona kuparera privileges zvinodzidzika kune site administrator kuti vaone kugadzira user accounts dzavo dzinotsanana kune sita rava vavo.

<!-- Screenshot unavailable: WordPress Multisite network user management interface -->

Kuti ndizivisa zvakare, kunge users vanogara kuona kuti vaine kuratidzidzika nesite dzine, asi havanzi; vaine kutora munzvimbo yenyika uye saka dzinofanira kuva dzine sitanana kune network. Kunyangwe, kunge pane nguva dzakawanda inoziva kuti usernames hazvazivikanwa kukwanisa kuita registration nekuti zvinosanganisira iye.

Kuti zvinhu zvakasiyana-nyaya munzvimbo hwe systems dzakachengetsi, iwe ndiri kune kunzwisisa kwemuno kuti chote chinogona kuonekwa zvakanaka kubabva nemunhu anoziva WordPress installations dzakanyanya, kungava kunzvimbo yakasiyana.

#### Media

Panguva nhaka dzakachengetsi dzinogona kushandisa database imwe munzvimbo hwe WordPress Multisite, dzine mitambo (paths) yakasiyana pamusoro pe media files pama filesystem.

Moyo we standard WordPress (wp-content/uploads) ndiri rauri; asi path yake rinobva kuti rionekane rine ID yakasiyana ye network site. Nekuti izvi zvakaita, media files dzemwe network site dzonyanya kuonekwa se wp-contents/uploads/site/[id].

#### Permalinks

Tiri kutaura nezvezvinhu zvinogona kuva zvakanaka pakati pe _subdomain_ ne _subdirectory_ configuration uye ndiri pano: paths.

Mune _subdirectory_ configuration, main site (main site inozivikanwa kana iye yakagadzirwa panguva network inokwanisa) uye subsites dzemwe network dzine path yese yakasvika kubva kuita domain name. Izvi zvinhu dzinogona kuva nekuvaka matambudziko akawanda.

Kuti posts, path ya /blog/ inozivikanwa (mandatory) inowanikwa main site kuti isawane nemunhu anoziva network sites. Izvi zvinoreva kuti permalinks dzakasiyana-nyaya zvakanaka se ‘Post name’ dzizokwanisa kuonekwa se domain.name/blog/post-name/.

<!-- Screenshot unavailable: WordPress permalink settings showing /blog/ path in subdirectory configuration -->

Mune _subdomain_ configuration, chine kuitwa izvi pane nekuti mweya we network site unarurama kubva kunyanya kuita domain separation uye ndokuti haunoda kuenda pamusoro pe path imwe. Izvi zvinhu dzine mitambo yavo yakasiyana-nyaya kana kuti zvinogona kushandisa _subdomain_ yavo.

<!-- Screenshot unavailable: WordPress permalink settings for subdomain configuration -->

#### Static Pages

Mu configuration ya _subdirectory_ inogona kuti kuna chokwadi kuti kune zvinhu zviri kuita kunge kuita matambudziko nemapanguri (naming conflicts) nekuti sita rine main site uye sita renetwork sites rinogona kuita zvinhu zvakasiita.

Kuti usawane iye, WordPress inopa nzira yekuti usawane zvinangwa (blacklist) zvinangwa dzakawanda kuti zvazvisonge zviri kune matambudziko nekuti hazvisonge kunge kuita kunge sita rekuita.Nzara, administrator we network anogona kuita iropasitso dze root paths dzemapanguri ekutanga (main site).

<!-- Screenshot isina: WordPress network settings inochakisa zvinangwa zvesitambudzika kuti zvazvisonge zviri kune matambudziko -->

Mu configuration ya _subdomain_, kunge kuita matambudziko nekuti _subdomain_ inogona kukwanisa (mitigate) nekuti iye inoshandiswa sita renetwork site uye haine kuratidzidzera nenyaya yese nemain site.

### Registration

Mune settings dzemakore we network ya WordPress Multisite, kuna zvinhu zvakawanda zvinobva dze registration dze users, zvinoita kuti users vakachena sita.

<!-- Screenshot isina: WordPress Multisite network settings inochakisa nzira dze registration -->

Kuti sita renetwork sites, hazvisonge rinogona kuita zvinhu zvakasiita nekuita user registrations kana kuteerera user registrations kune roles.

<!-- Screenshot isina: WordPress standalone site user registration settings inochakisa nzira dze registration dzakasiita -->

Kana users vakachena accounts, accounts aya anogadzirwa mumapuro (network level). Saka kunyanya pane zvinhu zviri kuita uye zvinosanganisira.

Kusimbisa zvinhu zvakakosha:

Sei ndiri kuona WordPress Multisite yako inenge yakasiyana-nyanya nemafungiro ekubatsira vanhu. Sei, unogona kudzidza kuti uingine utange multisite uye uingine utange network sites dzinobva mumafungiro ekubatsira vanhu. Iyi nzira inokupa chokwadi chekuti unogona kuita zvinhu zvakawanda necustom plugins uye themes.

Kune zvinhu izvi, kana munhu anenge akasvika kwenye (logs in), anobva mune network uye anogona kusvika mumweya wese we network site kuti aonekane seunhu. Kana iwe raine site yako inoshandiswa kubatanidza nesubscription, iyi ndiyo nzira yakakodzera uye iyi ndiyo zvinoita.

Asi, kana iwe raine multisite yakanzwa kudzidzisa network sites dzinobva mumafungiro akasiyana-siyana uye hazvinogone kuita zvinhu dziri kubatanidza, zvakanyanya zvichitika kuti usina plugins dzakare (external plugins) zvinoda kushandiswa kuti uregure user roles.

### Domain uye SSL

Tiri kutaura nezve WordPress Multisite inenge isingazivikanwa - Wordpress.com. Iyi ndiyo nzira yakawanda kudziwa yekuti multisite yaWordPress, uye inonyanya zvinoita kuti iwe utange kuya necustom plugins uye themes kuti uita zvinhu dzakasiyana-siyana.

Mazuva aya munzvimbo yechikoro chine internet, kushandisa SSL (Secure Sockets Layer) kunoda kuitwa zvisinei. uye network administrators ve WordPress multisite vanogona kuona nzira dzinobva.

Mu _subdomain_ configuration, sites dzakagadzirwa nedomain root name. Iyi ndiyo inenge iwe utange site yakaitwa se ‘site1’ inenge yakaitwa se ‘site1.domain.com’. Nekuti unogona kushandisa wildcard SSL certificate, network administrator anogona kuita nzira iyi uye kupa SSL encryption abilities kuti network yese ine.

WordPress Multisite inoratana funksi ya mapangidzo ye domain, inoshanda kuti sites dzakare (network sites) dzichingane nezinorweri dzine domain dzakare kana dzine domain dzakasiyana nemunhu wenyorweri.

Kune vanhu vachikumbira kune network, izvi zvinhu zviri kuva kunge zvinoshandisa kupfuura, zvichisinga kukanganisa mapangidzo ekutanga nekuita uye kutenda SSL certificates.

Kuti zvinhu izvi, pamwe nekuti WordPress Multisite inopa nzira yekuti [www.anotherdomain.com](http://www.anotherdomain.com) iwe itangise 'site1', munhu wenyorweri anenge ari kuita kunge kune zvinangwa zveDNS uye kutanga SSL certificates.

## Ultimate Multisite

Nekuti zvinhu zvine kupfuura pakati pe WordPress installation yakapfuma neya Multisite, tiri kuona sei Ultimate Multisite inoshandiswa sekitambo chinotora nzira yekuti Websites as a Service (WaaS). Think of Wix.com, Squarespace, WordPress.com uye ndichida kuti iwe uone service wako wepamusoro.

Kune chakanikwa, Ultimate Multisite inoshandisa WordPress Multisite asi inoshandiswa sei kuti ishavane kupfuura kunge kune zvinhu zvakawanda zvinosanganisira vanhu vachikumbira neMultisite installations asi inopa zvinhu zvakawanda zvekuita.

Mavhondso anotsanangurwa munzira dzinotsanangurwa, tiri kuona zvakanaka nezvinhu zvinosanganisira uye zvinhu zvine kukanganisa kune kuita izvi.

### Use Cases (Zvinangwa zvekuita)

#### Case 1: An Agency (Kuzvikwanisa)

Nzira yakare, zvinhu zvakakosha pakati pe agency zviri kuita design ye websites nekuona kuti hosting kana marketing dzine kuita zvakawanda.

Kune agency dzine, Ultimate Multisite inoratira mhinduro yakakwana kwakawanda kubva ku zvinhu zvinoita uye kuita management kwewebsites dzakawanda pamwe chete platformiyana. Zvinoratidza zvakawanda kune agency dzine designs dzinogadzirwa (standardized) pamweche tekhniki dzakare, se GeneratePress, Astra, OceanWP kana dzakare, vanogona kuenda nemhinduro dzemaitiro ya Ultimate Multisite kuti vaveze kuita activation yese iwo themes kune site dzine zvinhu zvinotanga.

Maviri pamwe chete nekuvaka mhinduro dzinogara (deals) dzakawanda dzinogona kuva dzinogara kwemaitiro ya agency ku plugins dzakare uye dzakawanda dzine kuratidzo, kuita Ultimate Multisite kunoita kuti agency dzine zvinhu zvinogara vaveze kuenda nemaitiro yavo yakare nekuvaka platformiyana yakare inozivikanwa inozokwanisa kuinstalla, kuita maintenance, uye kuenda nekuti plugins zvakawanda.

Zuva refu, kunge kune mhinduro dzinogara (configuration) dzine kudzidza zvinoda kuita, uye chokwadi Ultimate Multisite inoratidza kuti kunge kuita domain mapping uye SSL certificates kunge kune kuratidzo kwakawanda nekuita integration nemabhariro akawanda emabhariro ekutenderwa (hosting providers) zvakare se Cloudflare uye cPanel.

Ndinokwanisa, nekubata mhinduro yese iye kana kuita Ultimate Multisite pamusoro peCloudflare, zvinhu zvakaita kubva kune management ye domains uye SSL certificates zvine kuratidzo kwakawanda.

Agency dzine kuratidza kuti dzinoda kuita control yakare pakuita sites dzine zvinogona kunge dzine kuratidzo (tight control), dzine kuratidzo kwakawanda kune kuratidza kuti dzinogone kuita sites uye kuita association necustomers uye plans kupfungwa nekuti Ultimate Multisite inoratidza interface yakare.

![Ultimate Multisite site management interface](/img/admin/sites-list.png)

Kuratidzo kwakare pakuita plugins uye themes kunoendurwa pamwe chete peproduct kubva ku interfaces dzine kuratidzo dzinogone kuita kuti plugins uye themes zvive zvinogone kuonekwa kana kuitwa (hidden) uye state dzine kuita activation kana iwo vachigadzirwa kune site dzine zvinhu zvinotanga.

![Product plugin limitations interface](/img/config/product-plugins.png)

Themes dzine zvinhu zvakasiyi, zvinowanzova kuti themes dzinogone kuva kana kupera (activate) kana kupera (hide) munzira yakare ya website.

![Product theme limitations interface](/img/config/product-themes.png)

Agencies dzachida kuva nemoyo wakaoma neUltimate Multisite, kunyanya kuti zvibatsire kuti vave vachitenda zvinogona kutamba - kuita nzira yakare dzinogara dzakakwana.

#### Case 2: Niche Provider (Mudzidzisi weNiche)

Kuna chibvumirano chakare chinoti, “rita zvinhu zvimwe uye rita zvinhu zvakanaka.” Kune vose vanonakira (specialists), izvi rinoreva kuita product kana service yakachengetedza pfungwa imwe chete.

Zvinogona kuti unenge uri mufaro wekugolferi kunonakira websites kune clubs kana unenge uri gamer weesports unonakira websites kune clans. Unenge uri munhu anonakira service yebooking kune restaurants?

Kune zvinhu zvakawanda unoda kuita services neframework uye platform yakakosha. Zvinogona kuti unenge wakaida kana uweka plugins dzakare dzinogone kuita zvinhu zvakakosha kana kuti zvinogona kuti industry best practices dzine chakanaka dzichigona kutaura nezvechinhu chinonakidzorera (standardized approach) pfungwa ya design.

Mupfungwa yakare inotevera (innovative feature) yeUltimate Multisite ndiri kutamba kwemashure (template sites). Template site ndiyo imwe inozivikanwa kuti theme yakanzwa uye yakapfumbwa, plugins dzakakosha dzinogone kuva uye dzinopfumbwa, uye posts kana pages dzisangano dzinogara. Kana mutenda anokwanisa website yepamusoro yakare kubva pamusoro wetemplate, zvinhu uye settings dzemtemplate dzichingwa kune website yacho yakare yakanzwa.

Kune provider wesites neservices yeNiche, izvi rinopa zvinokosha zvisingatitirwa kuti uweka website yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yakare yak

Kuti zvinhu zvakakosha kuti zvinobva zvichine kuitika, kunyangwe zvinogona kuenda ne _subdirectory_ kana _subdomain_ configurations. Mune iye, nzira dzinogona kubva dzinogona kuenda ne sertifiketi ya SSL yakasiya (SSL certificate) yakanaka kuti dziri kuita _subdirectories_, kana sertifiketi ya wildcard SSL kuti dziri kuita _subdomains_.

#### Case 3: WordPress Web Hosting

Kune nzira dzakawanda dzinogona kuita hosting kweWordPress sites, asi zvakasiya kuitika kunenge kune kuratidza web space kune mwana wemakore neWordPress yakanaka. Izvi zvinhu zvinogona kuenda nekuti zvakawanda zvinoda kuita kuti zvishandane kuti zvipa zvinhu zvine maana zvibereki.

Ultimate Multisite inenge inokosha pane izvi nekuti inopa chine chine (turnkey solution) kune hosting kweWordPress sites. Zvinhu zvakaita zvekuita subscription services, kuratidza madzirore, checkout forms, discount vouchers uye kuita communication nevanhu dziri kubva dzinogona kuenda mumwe munzvimbo.

Zvinoda kuti Ultimate Multisite kunge kune zvinangwa zvakawanda zvinodzidzwa kuti vana vanhu (network administrators) vone zvinhu zvine kugona kuita kuti service kana niche yavo, zvakaita product tiers, pricing uye service offers.

Kune developers vanoita integration neUltimate Multisite, inozivisa solution ine RESTful API yakawanda uye Webhooks kune kuratidza events.

Nekuti hauna kutarisirwa kwemafungiro akawanda ek plugins uye licenses dzakare, Ultimate Multisite inopa solution inine zvinhu zvakawanda uye inogona kuita zvinhu zvakasiyana neWix, Squarespace, WordPress.com uye zvinhu zvakawanda.

### Architecture Considerations

Kuti hauna guide yakawanda, izvi zvinogona kuteerera kuti vana vanhu vone chine chine (guidance) kuti vave vachigadzira teknolojia dzine kugona kuita Ultimate Multisite installation.

#### Shared vs. Dedicated Hosting

Kuti, pane pane hosting providers haina vese. Vese vanhu kuno vashandi zvinoreva kuita server density yakanyanya. Hosting providers vachidzidzera kune kukura revenue nekuita server density yakanyanya. Nguva iye, Ultimate Multisite yako inogona kuva chete chine mupfungwa wese we sites zvakawanda pamwe chete server.

Usina safeguards dzakakodzera dzinobva nemunhu anobva provider, sites dzakanyanya pamweche dzine ‘noisy neighbour’ problem. Iyi ndiri kuti site yakanyanya resources pamwe chete server inogona kuita kune sites dzine zvinhu zvakawanda kuti zvinoreva resources dzakare. Pamwe nguva izvi rinobva se sites dzinovera kasi kana dzazviva zvakanaka.

Se provider we web hosting, nzira inosvika pamweche inogona kuita kuti makudziro auno vashanye zvakanyanya, page rank yakapfuura, uye bounce rates dzine kuita kuti vanhu vave vachete (churn) nekuti vanoita services pazvinhu zvakasiyana.

Mupfungwa, cheap hairi chii chinoreva chii.

Ultimate Multisite inoziva kuti inogona kushanda nemabasa akawanda anobva hosting providers vese vachine zvakanaka uye inosimbisa zvakanaka neenvironment yavo kuita zvinhu zvakaita se domain mapping uye automatic SSL. Hosting providers ivada performance uye vanopa service yakanyanya kupfuura ya shared hosting.

Kuti usazve nemazwi anobva hosting providers vese vachine zvakodzera uye zvinoreva kuti ndikubatsira kuita set-up dzavo, ndichida ukubvura documentation ye Compatible Providers.

#### Performance Considerations

Ultimate Multisite hairi application inosvika kasi, asi inosvika zvakanyanya. Iyi inosvika kunge yakasi, asi inogona kushanda chete zvakaita kuti inoziva zvakaita infrastructure uye inogona kuita chete chine access yayo.

Tizivisa iye: Unoda kuva network administrator we Ultimate Multisite installation inozina sites 100. Zvinosvika kunge zakaipa dziri kuenda zvakanaka uye dzinovera vanhu vese website muno.

Iziro iri rinyaradzo iye ndiri kuendesa mweya wekuti zvinhu zvakawanda zvinogona kuva vakaoma kana kuti zvichinguva.

Kana usina munhu anenge akatititika, site yakakwana Ultimate Multisite inozviratidza kuteerera matendo aive nemabhizinesi onoziva vesite. Izvi matendo inogona kuva kubva pa PHP pages dziri kupfuura kana zvinhu zvestatic se stylesheets, javascript kana media files. Kana iwe nesite imwe kana zvinotiri, izvi matendo inogona kuva vakaoma, kuitira, uye kunge kuva ngano. Haina zvakakosha kutamba CPU power uye memory kuti zvishandiswe kupanza PHP file kana kuti reshapu inoshandiswa sei panguva dzose dzinogona kuita zvinhu zvakasiyi.

Maviri, chii chimwe chaPHP kana HTML page chinogona kuita matendo akawanda anotsanangura scripts, stylesheets uye image files. Izvi matendo inotenderwa zvakanyanya kune server yako ya Ultimate Multisite.

Kuti unzwisisa iwe panguva iyi, unogona kuita iye nekuvaka server (upgrading the server), asi ichingava kunenge chii chimwe chinhu chinobva — kuratidza zvinhu kubva pa mabhizinesi akawanda anonyanya. Zvinogona kuitwa nekuti munhu wese we network anogona kuita iye nekuvaka front-end caching solutions uye content distribution networks (CDN) kuti zviratidze matendo aive se static pages. Kuteerera izvi matendo uye kutenderera zvinhu panguva inotenderwa pakati pe server kunoita zvinhu zvakasiyi, kunokera kuratidza nguva dzinogona kuenda, kunokera kusawana nekubatsira upgrades dzakawanda, uye kunge kubatsira kune zvinangwa zvetechnology.

Ultimate Multisite inosanganisira Cloudflare add-on inoshandiswa neye network administrators kuti vakaipa iwe zvinhu hokuva pachikoro cheCloudflare uye kuita zvinhu zvakawanda pamusoro pe caching, DNS hosting, SSL certificates uye security mechanisms.

#### Backups

Unogona kundiwa vanhu 50 kuti avashandise mhinduro pamusoro pe backups uye utange vanenge vachigona kuita zvinangwa dzakasiyi dze backup. Mhinduro inosvika panguva iyi ndiyo: inoshandiswa zvinhu zvakawanda, kunge kune mapenyu anotsanangura backups akawanda.

Chii chii chinotiri kuti kune zvinoreva, kuti backups zvichitendwa uye kuti kunge kwakaita kuti izvi hazvazovashandiswa neprovider, zvinhu zvakakosha, kana provider anopara service inotenderedwa. Nekuti asi, makubatsiri vachiri kuona network administrator kuti avone uye vangeva service iyi. Ndiyo kunge chii chinoreva kune mutsafiri we network administrator.

Kuti tiri kuita iwe munzvimbo iyi, tiri kukwirira kuti backup ndiyo inopai copy ya state ye system mune nguva yakaita kuti backup yachitangurwa. Kuti zvinhu zvakasiyana zve system zvinoreva mune nguva yekupai backup, izvi zvichigadzirwa uye chinogadzirwa mubackup.

Nekuti tiri kuona zvakanaka iwe kune kuratidza backups uye chii chine kuenda zvakanaka kwauri environment, kunoita zvakasiyana nekuvimbisa kweprovider kuti vone zvinhu izvi. Asi, kubva pamusoro pezvinhu zvakakosha kupfuura zvinotariswa kune zvinhu zvakasiyana, iwe doro raunogona kuita zvishanduro zvakawanda.

#### Snapshots

Snapshots ndiyo nzira yakasiyana yekupai backups nekuti ndiyo yakapfuura, inosina kunge kuratidza zvakawanda (kuti unenge uchida kureva), uye "inogona kuenda". Asi, inoda kubatsirwa kweprovider yako uye inogona kutarisirwa pakati nemunhu anopara network administrator. Provider kadziro dzakasiyana dziri mumitambo yedu yakaita kuti zvinhu izvi zvinoreva hazvazovashandiswa nenetwork administrator.

Kuti backups zvinotenderera files uye databases, snapshot inotenderera disk yese. Izviro rinoreva kuti data ye site inogarirwa mumwe snapshot zvinhu, asiwo operating system neconfigurationwo. Kune vange vanenge vachida izviro chete, nekuti mupfungwa dzinotsvaga, new system inogona kuva yakapfiri nemashure anogone kuva yakapfiri kuti itambe instance inotamba. Vachishandisa zvakasiyi, recovery process yekutanga files kunoreva kuteerera snapshot image sedisk kune instance yakanaka yakaita kuti files zvibatsirwe uye kubatwa.

Snapshots dzinogona kuva nekuita chiito chekuti hosting provider inenge inoda kukosha, asi ndiyo insurance policy yekuti usina kunge kuenda nguva dzose.

#### External Scripts

Ndinowanikwa kune scripts uye solutions dzakare kuti zivaka WordPress uye MySQL resources uye izviro zvandinogona kutenderwa kwazvo kwa Ultimate Multisite nekuti inoshandisa WordPress filesystem uye database. Saka solution inotanga backups ye WordPress sites inogona kuita zvinhu zvose zinoda Ultimate Multisite.

Hau tinokubatsira script yese kubva kune yese, asi chakanaka chete ndiri kuti munenge unaramba uita tests dzakare uye kuti "unenge unenge" nekuvunza script nekuti inogona kuenda sei zvinhu zvose, zvakasiyi kana kuna strategy yekutanga differential backup inoshandiswa.

Kuti kunzwisiseki kuti munenge unoziva, izvi scripts zvinoreva kuti dzichitamba system load, uye zvinozvaitwa kuti munenge unoziva.

#### Plugins

Mune WordPress haichiri kunge kuita zvinhu kubva kune plugin, uye kana usina chokwadi kwekuita external scripts, saka perhaps plugin ndiyo option inotenderwa yakare.

Kunge plugins vese nekuone zvinhu uye zvinoreva, asi zvakanyanya inogadzira nguva yakakosha inosimbisa (make a copy) ya WordPress files uye database contents. Panguva iyi, zvinhu zviri kudzamirirwa nekuti zvinhu zvakasiyana-isina; pane plugins zvandinogona kuita backups kubatwa mabhurangi anokosha (external services) chete se Google Drive kana Dropbox kana nzira yenzira inosimbisa (object storage service) sei S3, Wasabi kana zvinoreva. Plugins dzakawanda dzinogona kuita differential backups kana nzira yenzira yakasiyana-isina yekusimbisa data yakagadzirwa chete kuti zvishandane kupfuura kukosha kwekubhadhara kubatwa mabhurangi anokosha (external storage costs).

Mungazvikira plugin yako, ndichida uone kuti inoziva kuti inosimbisa multisite. Nekuti inosimbisa inosimbisa, unogona kuona kuti kuna load yakapfuura (temporary load) pane server chiri kunyangwe process iyi inosimbisa inosimba.

#### Domain uye SSL

Kune zvakawanda zvinobva kubva pamusoro pe domain names munzira ya multisite _subdomain_. Chii chinogona kuita kune vadhiri ve network, ndiri kuti vanoreva wildcard DNS entries.

![Wildcard DNS entry configuration example](/img/config/settings-domain-mapping.png)

DNS entry iyi inozvisongeza (resolve) subdomains zvakaita ‘site1.domain.com’ uye ‘site2.domain.com’ ku IP address ya 1.2.3.4, izvi zvinosimbisa Ultimate Multisite uye WordPress Multisite yakawanda munzira ya subdomain.

Izvi zvizozviona zvinhu zvakakosha kune HTTP nekuti target host inobva mabhurangi anokosha (HTTP headers) asi haona web yakasiyana-isina zvakaita nguva iyi kunzvimbo HTTPS inosimbisa zvinoreva.

Kune, kune, kuna kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune.

Kune, kune, kuna kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune.

Kune, kune, kuna kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune.

Kune, kune, kuna kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune, kune.

Pfungwa, kuive nemunhu vangeva Cloudflare ndiyo nzira yakapfuura. Mukwadi anoda kunyira domain yake paCloudflare, kuita CNAME kune root domain ya Ultimate Multisite uye kupanga (map) domain yake muUltimate Multisite kuti uanze kuenda nechinangwa chekuchengetedza domain yako.

Kutare nemunhu wese, zvinhu izvi dzinoda kutenderwa, uye iwo ndivo vanoda kutaura nezvezvine vavo. Izvi ndiyo chii chinoda kuwedzera kuti muna zvinhu zvakasiyana-nyanya.

#### Plugins

Zvinosimbisa kuti unoda plugins dzose kuti uwanise kufungadzwa (functionality) kwemunhu wako kana siti renetwe. Pane zvinhu zvose zvinogona kushanda neWordPress Multisite uye Ultimate Multisite? Izvi zvinhu zvichingova.

Kune zvimwe plugins, kunyangwe dzine kuinstalla muWordPress Multisite, kune zvakasiyana-nyanya izvo dzinoda kuti ufanane (activate) uye zvinoda kutenderwa (licensing) kubva munhu raunoda kushanda.

Chii chinoda kuwedzera ndiri sei kuita licensing nemunhu wese, nekuti mune plugins maviri anoda licensing kubva pa-domain. Izvi zvinhu dzinoda kuti administrator we network anenge anoda kufungadzira (activate) license yakanzvimbo kune plugin dzose mu site yakachengetedza.

Ndinokumbira kuti unenge ukutendera munhu anogona kuita plugin iye kuti inozviona sei neWordPress Multisite uye kuti pane zvinoda kuti ufanane (activate) uye kutenderwa (license).
