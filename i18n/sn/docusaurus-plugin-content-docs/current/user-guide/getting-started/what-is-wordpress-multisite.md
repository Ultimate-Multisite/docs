---
title: Ndi chii WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Ndi Zvinhu WordPress Multisite?

Muviri wecore, WordPress inoratid zvinhu chinhu chinotsoita neitaura yakazvo kuitaura kune 2010 kana kukumbira WordPress 3.0. Kuteura, achiine akaita zvinhu zvakawanda kuti zvisimbire zvinhu zvinotanga uye kuti zvinokurudzira kubatsirwa kwakawanda.

Muviri, WordPress multisite inogona kuoneka seizvi: Chinhu chinotanga neUniversity inenge inoratidza installation imwe yaWordPress asi chinhu chine faculty dzakawanda chinoratidza site dacho dacho rawo.

##

## WordPress Multisite Iyi Chii Zvinhu?

Multisite ndiyo chinhu chinotanga neWordPress chinokubatsira kuti sites dzakawanda dzishere nedzo installation imwe yaWordPress. Kana multisite inopfungwa, installation imwe yaWordPress inobva kuitaura nezve **network ye sites**.

Iyi network inoshara file system (meaning **plugins uye themes dzinosharawo**), database, core files dzeWordPress, wp-config.php, uye zvinhu zvakawanda.

Izvi zvinoreva kuti updates dzepurojekiti dzeWordPress, dzetheme, uye dzeplugin dzinogona kutanga neyekuti zvibva mune network yese ye sites dzako nekuti dzinoshara files dzeunoda kuitaura.

Iyi chii chinotanga nemain advantages dze multisite, sezvo inokubatsira kuti utange kuitaura nekuitaura sites dzakawanda dzinogona kutanga uye kunotsvaga kuratidza zvinhu zvinofanira kuitaure kuti utanzire sites dzako.

##

## Subdomain kana Subdirectory?

Kune nzira dzimwe dzeita multisite yaWordPress – uye unofanira kutaura iye kana ukanga inobva neinstallation imwe yamultisite:

**Subdomain:** ex.: [site.domain.com](http://site.domain.com)

…kana

**Subdirectory:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Kune nzira dzimwe dzinobva nemain advantages uye disadvantages anokwanisa kuitaura kana unoda kutaura iye.

Kuti chimwe chii chinotora: panguva unagadzira, kunenge kune kurudzi kuunyang'anisa kuti uunyang'anisa nzvimbo yako kubva ku-subdirectory ku-subdomain kana ku-vice versa kunenge kunenge kune mushva – zvakasiyana nekuti unenge wakaona mazuva makawanda.

Panguva unenge uchigadzira iye, ndiri pano zvinhu pamwe kuti uone:

**Subdirectory Mode** ndiyo mode inenge yakapfuura kuita uye kunge kuratidza (setup) nekubatsira (maintenance). Izvi zvinhu zvandinogona kuta nezvinhu kuti zvakwanise, sezvo nzvimbo dzese dzinobva panguva dzinobva kana paths dzine chiri pachinhu chinotora (e.g. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Nekuti izvi zvinobva panguva dzinobva, unenge uchida **SSL certificate imwe** chete yeku-main domain uye iye inoziva nzvimbo yese.

Panguva iyi, nekuda kwechinhu chakanaka cha URL structure (e.g. [subsite.yournetwork.com](http://subsite.yournetwork.com)), Google nekuviri search engines dzine zvakawanda dzinogona kuona subsites dzese dzinobva panguva dzinobva kana nzvimbo yako yakaita subdirectory inenge dziri kune chinhu chinobva chete. Nekuti izvi zvinobva, content inotanga kubva nevadzidzisi vako (end-customers) subsites dzese dzine kuva kunge kunge kuva nekuita zvinhu zvakasiyana nekugadzirisa SEO performance ya landing site yako, sei. Kuratidza kuratidza kunenge kune chirevo chinobva uye kuna chirevo chinogona kuita zvakanaka kutanga SEO performance.

**Subdomain Mode** inenge yakapfuura kuita (set up), asi URL structure yake (e.g. [subsite.yournetwork.com](http://subsite.yournetwork.com)) inogona kuone "more professional" nekuti vanhu vose vanogona kuona zvino.

Chimweya chete chekoche chinogona kuita zvinhu zvakawanda munzira dzinogona kuita (subdomain mode) ndiri SSL coverage (HTTPS) yese ye network. Izvi zvinhu zvinotarisirwa nekuti browsers vanonzi subdomains kuti ndiri vhizha (isolated entities). Nekuti izvi, unoda sertifiketi ya SSL inoshandiswa sei yakasiyana kwa subdomain dzakawanda pamweye ne network yako, kana sertifiketi yakasiyana kuitika yakaita **Wildcard SSL certificate**. Muzuva ano, hosting providers uye panels dzinotsvaga zvinhu zvinobatsira munzira dzinogona kuita (SSL provisioning), uye zvimwe zviri kuita wildcard certificates nekuva nekuti unenge uri kuita iyi yese nebutton, izvi zvakaita kuti zvishandane zvakawanda munzira dzinogona kuita (complexity) yekuti uyu ushaye.

Kutanga kunenge kune subdirectory mode, subsites pamweye ne network inoshandiswa subdomain dzine kuva vhizha nekuti search engines vanonzi kuti ndiri websites dzakasiyana, izvi rinoreva kuti content inoshandiswa mu subsite yakiri haisi inogona kuita kunzwisisa (interfere) SEO performance ya subsites dzine.

## The Super Admin

Single-site WordPress installations dzinokubatsira kuita zvinhu zvinobatsira munzira dzinogona kuita (unlimited number of users) uye kupa vanhu aya roles dzakasiyana nepermissions dzakasiyana.

Muzira dzinogona kuita (Multisite), aina ya user yakasiyana inokubatsira kuti uone: **the super admin** – uye panel ye admin yenyu inokubatsira kuti uone: **the network admin panel**.

Kuti zvinhu zvinonzi, the super admin anogona kuita zvinhu zvakawanda pamweye ne network, anogona kuita management ya subsites dzake, plugins, themes, uye zvose!

Ngeva unenge uri kuita (convert) single-site WordPress installation yako kune multisite, original admin ye single site yauya automatically kuti the super admin.

Plugins uye themes dzinokubatsira kunoone kana kuenda (install or uninstall) kunogona kunoone pamweye ne network admin panel neva the super admins. Subsite admins vanogona kuita zvinoreva (activate or deactivate) plugins kana themes izvi usati the super admin ye network inenge inoshandisa plugin, izvi zvinhu zvichizvikanwa kuti zvinenge zvinoshandiswa mune subsites dzese zvakare.

_Note: kune kuona, kuwana munhu wese muunhu wako uye kunopa super admin status kunoita kuti iwe uone chokwadi chete pamusoro pezvinangwa zvaunoda kuita. Sei nzira yakare, super admins vevevanhu vanogona kuenda kuenda ndiri kuva munhu wako we super admin, zvichizviharisa kuti uve mune kufamba kwemapuro dzako pane panel yako ye admin yavo. Kuti Ultimate Multisite vana vaone kuti vanogona kuita zvinhu zvakawanda pamusoro pesuper admins vakawanda, tinenge tiri na add-on rinoda kutaura rinoda kutaura Support Agents. Add-on iyi inokupa uwe kugadzira munhu wose wekuti agent – nekuva nemabhuku anogona kuita zvinhu zvakasiendeki zvinodzidzisa pamusoro pezvinangwa zavo pamusoro pehondo yenyika._

## Chii chine kuenda pakati panzvimbo dzakaipa uye chii chinovaka

Kune chii chiti chine kuenda pakati panzvimbo dzakaipa, zvakare tinokumbira kuti munhu wese we subsites vanogona kuita zvinoshandiswa pamusoro pehondo yenyika.

Ndinokumbira kuti tiri kuitira mupfungwa yakare, chii chinobva kubva:

- Sei nzira yakare, subsite dzakawanda dzinogona kuita zvinhu zvine zvinodzidzisa pamusoro pehondo yenyika.
- Sei nzira yakare, subsite dzakawanda dzinogona kuita zvinhu zvine zvinodzidzisa pamusoro pehondo yenyika.

Kune izvi, kuna mhinduro iyi inokupa chokwadi chete chekuti iwe unofanira kunzwisisa kuti munhu wose we subsites vanogona kuita zvinhu zvine zvinodzidzisa pamusoro pehondo yenyika.

- Sei nzira yakare, subsite dzakawanda dzinogona kuita zvinhu zvine zvinodzidzisa pamusoro pehondo yenyika.
- Sei nzira yakare, subsite dzakawanda dzinogona kuita zvinhu zvine zvinodzidzisa pamusoro pehondo yenyika.

Kune izvi, kuna mhinduro iyi inokupa chokwadi chete chekuti iwe unofanira kunzwisisa kuti munhu wose we subsites vanogona kuita zvinhu zvine zvinodzidzisa pamusoro pehondo yenyika.

Unoda WordPress multisite network unga chine kuti mweya subsites kune rupa rine mwezi kunoita vanhu vachida kuva ne-commerce store.

Unaramba uine munhu wako wavo wose – John. Unakara site yake pane plugins zvinodzidzwa, ndipo unakara user wese weJohn kuti aone uye aone store yake.

Ndapio, mwana wakare anokuda – Alice. Unakara zvinhu zvakasiyiwo kune iye neva, uye ava veine store pane network yako.

John naAlice vanogona kuva vana wako, asi havanogona kuone kana vaive vana. Zvinhasi, kana muno akati avo anokumbira store ya munhu wose, haunoziva kuti iye inoshandiswa pane network yenyu.

Muni nharaunda, John anoda kuenda kuona pair dzinotsvaga shoes dzake dzakare uye anaziva Alice's store. Kana aive anoda kuita purchase, anaramba anobona error inosvika "email already in use". Izvi zvinhasi zvinogona kuva zvisina mweya nekuti John anoziva kuti iye ndiyo yakare akanga achiita Alice's website.

Chii chiri chinotevera ndicho: user weJohn unoshandiswa pane network yese, uye kana anoda kuita account yekuteka (checkout) pane store ya Alice, WordPress inoziva kuti kuna user inoshandiswa neemail yenyu yakare ine email yenyu uye inopa error.

_Chii chiri chinotevera ndicho: Tinobona kuti zvinhasi izvi zvinogona kuva zvisina mweya nekuti unogona kuita multiple accounts neemail yese. Kune Ultimate Multisite, kuna option inosimbisa (bypass) checks dzakare dze user anowanikwa, uye unogona kuita multiple accounts neemail yese. Iri zvinhasi zvinokwanisa kune subsite. Izvi zvinokumbira kuti risina risk ya collision. Mu rupa iye, John haizovada error uye anozvada shoes dzake pane kuramba. Option iyi inosadzivwa "Enable Multiple Accounts", uye unogona kuita pane Ultimate Multisite → Settings → Login & Registration._

Kuti chii kuti user table inoshandiswa, users vanogone kuva uye kuva mune subsites neadmins vesubsite kana super admin, uye vanogone kuno shandisa roles dzakasiyana-kasi munyanya.

## Zvinhu zvinoreva zvinhu (Performance considerations)

WordPress multisite inenge yakakwana pane kuita nenzaniso dzinogona kubatsira. Izviya dzinogone kuonekwa nekuti [WordPress.com](https://WordPress.com), Edublogs, uye Campuspress ndivo services dzine multisite, uye munhu wese anogona kuita nevanhu vamilioni vesites.

Kuti kunyangwe te kuna maximum number of sites unogone kuita mu installation yechine WordPress multisite, munyanya number of sites unogone kuita zvinhu zvakakosha kunogone kubatwa nekuti zvinhu zvakasiyana-siyana: kuti sites dziri kuitika kana dziri dzinogona kutamba (dynamic) zvakawanda, plugins zvinogone kuita subsites, uye zvinhu zvakasiyana.

Kuti usati kuita chirevo, kunenge network yako inenge yakapfuura, zvakanaka. Shandisa sites dzine content inosimbisa kwazvo (dynamic) (izviro chinogona kubatsira zvinoreva caching strategies dzakakwana) uye tsvaka plugin stack kuti iwe ine light kuitika (kuti number ya plugins dzakasiyana dzinogone kuita zvinhu zvakawanda). Izviro zvakasiyana-siyana zvichangova kuita subsites unogone kuita.

Chii chinokosha ndiri kuti chine WordPress, zvinhu zvakasiyana zvinogona kutamba (performance improvements) kunogone kushandiswa panyanya munyanya multisite network.

Main bottleneck inoshandiswa kubva kune database, asi kana zvose zvakasiyana zvinhu zvakakosha zvakagadzirwa zvakanaka, chinogone kuita couple of thousand sites panguva iwe unogona kungeiwo. Kuti zvinoone, kuna solutions dzine kuti dzinogone kutamba zvishoma zvichangova panguva iwe unogone kungeiwo (kuti database sharding solutions, zvinogone kuita izviro).
