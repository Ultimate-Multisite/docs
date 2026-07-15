---
title: WordPress Multisite näme?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# WordPress Multisite Näme?

WordPress-in özünde "Multisite" diýen bir funksiýa bar, ol 2010-yly WordPress 3.0 niňdir başlananda ýurtlaryna degişli bolan. Şondan soň, täze funksiýalar getirmek we howpsuzlygy kämilleşdirmek üçin birnäçe gözden geçirmeler geçirilipdir.

Esasy düşünje bilen aýdylanda, WordPress multisite şu ýaly düşünilip bilner: Bir Uniwersitet birnäçe WordPress nusgasyny saklaýar, ýöne her bir fakultet özüniň WordPress saytyny saklaýar.

##

## WordPress Multisite Näme? {#what-exactly-is-wordpress-multisite}

Multisite – bu birden näçe saytyň birleşdirilen WordPress gurşawyny paylap etmegine mümkinçilik berýän WordPress funksiýasydyr. Multisite işjeň edildiğinde, esasy WordPress sayty adaty ýagdaýda **saytlar ulgamy** diýlip aýdylýan zatlary goldamak üçin üýtgedilipdir.

Bu ulgam fayl ulgamanyny (deňe **pluginler we tema hem paylap edýär**), database, WordPress esas funksiýalaryny, wp-config.php-ni we ş.m. paylap edýär.

Bu demakdan, WordPress, tema we plugin täzelenmelerini ulgamyndaky ähli saytlar üçin diňe bir gezek ýerine ýetirmek gerekdir, sebäbi olar fayllary ulgamda paylap edýärler.

Bu hakykat multisite-yň esasy artykmaçlaryndan biri bolup, siziň dolandyryp biljek sayt sanyny artdyrmagy mümkinçilik berýär we iňlisleriň saytlaryny saklamak üçin ýerine ýetirmeli bolan tapgyrlaryň sanyny üýtgetmän bilersiňiz.

##

## Subdomain ýa-da Subdirectory? {#subdomain-or-subdirectory}

WordPress multisite-i işlemek üçin iki görnüş bar – we siziň adat WordPress gurşawyny multisite gurşawyna ötdürip barlap geçmekde birini saýlamagyňiz gerekdir:

**Subdomain:** mysal üçin [site.domain.com](http://site.domain.com)

… ýa-da

**Subdirectory:** mysal üçin [yourdomain.com/site](http://yourdomain.com/site)

Her bir görnüşüň özüniň artykmaçlary we ýoklary bar – bu karry bermegiňizde gözegçilik etmelisiniz.

Bir zadyň, bu parça hem möhümdir: bir karary bermegiňizden soň, ulgaman (subdirectory) däl-de subdomaina ýa-da aksiýa (vice-versa) geçirmek çylşyrymlydyr – has geçdirilen adamlar bar bolsa.

Bu karary bermeginden öň, aýratyn birnäçe nokat gowy bilmek üçin aşakdaky zatlary ýatda saklaň:

**Subdirectory Mode** gurmak we dowam etdirmek boýunça iň aňsat režimdir. Bu şonuň üçin bolýar, sebäbi ähli sahypalar esasy domanyň (mysal üçin [yourdomain.com/subsite](http://yourdomain.com/subsite)) ýolunyň (path) degişdirilip edilmegidir. Netijesinde, siz esasy domain üçin **bir SSL sertifikaty** wekiliňiz bolmaly we bu ähli ulgamy özüni örtýär.

Eşlikde, URL strukturasyna görä, Google we başga köp gözleg motorlary siziň ulgaman (subdirectory) esasly ulgamda bolan ähli sahypalary bir uly sahypa hasaplanýar. Netijesinde, sizin son däl-de müşderileriniz tarapyndan ulgama sahypalara goýulan maglumatlar SEO işjeňligine täsir edip biler, mysal üçin. Täsir derejesi müzakere edilip bilner we bu düzgün-çözümlenme SEO işjeňligi üçin hem faydaly bolup biler diýlip argument berilip bilner.

**Subdomain Mode** gurmak üçin birnäçe has çylşyrymlydyr, ýöne onuň URL strukturasyna (mysal üçin [subsite.yournetwork.com](http://subsite.yournetwork.com)) umumy bilen "has hünärli" görkezilýär.

Subdomain modunu kurmakda iňlisden bir esasy kynçylyk SSL (HTTPS) bilen bütün ulgamy üpjün etmekdir. Bu, brauzerlarning subdomainleri aýyryly entiteler hasaplanýandygyny düşündüripdir. Netijesinde, ulgamyzdaky her bir subdomain üçin dürli SSL sertifikatyna ýa-da **Wildcard SSL sertifikaty** diýlip aýratyn görnüşde sertifikata ehtiyac duýarsyňyz. Soňky ýyllarda hosting provayderleri we panelдер SSL üpjünçiligi boýunça özlerini güýçlendirýärler we käbirleri bir düwme basmak bilen wildcard sertifikatlary teklip edýärler, bu bolsa kurulumda kynçylyk boýunça iki mod arasındaki farky ýok edýär.

Subdirektori modu bilen baglanyp, subdomain esasly ulgamlardaky subsaitler (subsites) goýcular tarapyndan aňlatma motorlary üçin aýryly wepislere hasaplanýar, bu bolsa bir subsaitde bolan maglumatlary beýleki subsaitleri SEO işjeňligine hiç hili täsir etmez.

## Super Admin {#the-super-admin}

Single-site WordPress kuramagy size sınırsyz ulanyjylary goşmak we ol ulanyjylara dürli ulanyjylarrolary we dürli resminamalary bermek mümkinçiligi berýär.

WordPress Multisite-da täze bir ulanyjylar görnüşi açylýar: **super admin** – we täze bir administrasiýa paneli açylýar: **network admin panel**.

Ady bilen aýdylanda, super admin ulgam üçin güýçleri bar, ol ulgamyň ähli subsaitlerini, pluginlerini, temalaryny, her zatyny dolandyrmaga ulyuk resminamalar berip biler!

Siz single-site WordPress kuramagy multisite-a geçirdikten soň, ilkinji site administratory awtomatiki super admin hökmüne ýerilýär.

Pluginler we temalar diňe super adminler tarapyndan network admin panelinden goýulyp ýa-da aýyrylýar. Subsite administratory bolsa bu pluginleri ýa-da temalary işjeňleşdirmek ýa-da işjeňlikden çykarmak isleýär, eger super admin ulgam bir plugin işjeňleşdirse, bu ol her subsait üçin daima işjeň bolmaga majbur edendir.

_Not: görýärsiňiz, birini öz ulgamanıza çagyrmak we olarga super admin status bermek bu ulgamda bu ulgam üçin umumy doly kontrol berýär. Mysal üçin, beýleki super adminler hem sizi super admin statusundan ýok edip, diňe öz ulgam administrasiýa panelinden çykaryp biljekdigini hasaplanýar. Ultimate Multisite müşderilerini başga super adminleri näme edip bilerdi hakynda anyk kontrol etmäge mümkinçilik bermek üçin, biz Support Agents diýlip bir add-on döredip berdik. Bu add-on size ulgamda öz wezipeleri ýerine ýetirmek üçin zerur bolan izinler bilen başga bir hakda kullanıcı – agent – döretmäge mümkinçilik berýär._

## Subsaitler arasynda näme paylaýar we näme paylaýar {#what-is-shared-among-subsites-and-what-is-not}

Öňde aýtdygy gibi, WordPress multisite-yň esasy artykmajy, ähli subsaitler birmeji konfigurasiýalary, esasynyň (core) fayllaryny, temalary, pluginleri, WordPress esasy fayllaryny we ş.m. ýaly zatlary paylaýar.

Ýöne, her bir subsait üçin anyk kesgitlenipdirilen elementler hem bar.

- Mysal üçin, her subsait özüniň öz "uploads" (göndermeler) klapadyny alýar. Netije, belli bir subsaitden ulanyjylary tarapyndan ýerine ýetirilen görkezmeler başga subsaitde açyp bilmezler.

- Her subsait özüniň öz "admin panel"i bar we ol pluginleri ýa-da temalary işje basyp bilýär, eger o super admin tarapyndan ulgamda aktif edilipdirse.

- Käbir maşynç (database) tablalar her bir subsait üçin döredilýär, bu bolsa postlar, kommentaryklar, səhifeleri, sazlamalary we ş.m. her bir subsait üçin kesgitlenipdirilýändigi aňladýar.

## WordPress Multisite-da ulanyjylary dolandyrmak {#user-management-on-wordpress-multisite}

WordPress multisite-da iň hilli mowzuk – bu ulgamda ulanyjylary dolandyrmakdyr. WordPress user tably, ähli subsaitler arasynda paylaýan az sanly tablalardan biridir.

Bu düzgün sizi ulgamy bilen näme döretmek isleýändigiňize bagly birnäçe meseleleri döredip biler. Aşakdaky mysal iň örän möhümini düşündirmek üçin kömek edýär:

Siz WordPress multisite ulgamanyny dörediniz we adamlar aylıq pul ödenip e-ticaret dükkanı açmak isleýänler üçin subsite teklibini bermäge başlaýarsyňyz.

Iň ilkinji tölegli müşderinizi, Johniňizi alarsyňyz. Ol üçin ulgamanyzda bir sayt döredip, zerur bolan ähli pluginleri kurýarsyňyz we soňra ol üçin bir user döredip dükkanyny dolandyrmaga mümkinçilik berýärsiňiz.

Soňra ikinji müşder – Alice gelýär. Ol üçin deşlik işi ýaparsyňyz we indi ol hem ulgamanyzda dükkany bar.

John we Alice her biri siziň müşderinizdir, ýöne bir-birlerini bilmezler. Hasratly gowy zat şudur: olaryňdan biri beýleki dükkan saytına girse, bu dükkanlary birmej ulgamda ýerleşdirilendigi barada hiç hili belli bolmaz.

Bir gün John täze tapgy almagy gerek we Alice-iň dükkanında onuň üçin amatly tapawutlary tapýar. Ol satyn alyşy tamamlamaga synanyp, "email ýerleşdirilipdir" (email already in use) diýen ýazgyny alýar, bu bolsa gysgaça gysga bolan zatdyr, sebäbi John Alice-iň saytına ilki gezek girip biljekdiginden 100% anyk.

Bu ýerde näme bolany şudur: Johniň useri ulgamnyň ähli ulgamynda paylaýjylýar. Şonuň üçin, Alice-iň saytındaky satyn alyşy tamamlamak üçin hasap döretmegine synanyp, WordPress olaryň bilen birmej email adatyda user bar bolanlaryny anyklap we ýazgyny berýär.

_Not: Bu siziň ulgamdan ulanmagyza baglylykda näderejede kyn boljakdygyny düşündik, şonuň üçin Ultimate Multisite-da adatça user bar bolsa diýen barlaglar bilen çykaryp, birmej email adatyndan köp hasap döretmegi mümkinçilik berýän bir opsiyany bar. Her bir hasap subsite bilen baglanylýar, şonuň üçin ýerleşişde çakmalydyr minimalda saklanýar. Ýokarda görkezilen mysalda John hatasyny almaz we osy tapgy soragy däl-de tamamlaýar._ Bu opsiyona "Enable Multiple Accounts" (Çuplary Hasap Bermek) diýilýär we ol Ultimate Multisite → Settings → Login & Registration arkaly işlenip bilner.

User tablas paytaýa bolsa-da, subsite administratorlary ýa-da super administratorlar arkaly ulanyjylary subsite-lere goşmak we aýyrmak mümkin. Şeýle hem, ular dürli subsite-lerde dürli ulanyjylar roly bilen işleşip bilmäge mümkinçilik berilýär.

## Performans gözlegleri {#performance-considerations}

WordPress multisite, onu desteklab biljek site sanlary bilen hakykatdan güýçlidir. Bu barada [WordPress.com](https://WordPress.com), Edublogs we Campuspress ýaly ähli multisite esasly hyzmatlar hem subsite-lere binlerce site goşantyr.

Teoriada bir wariantda, bir WordPress multisite instalasiýadasa saklap biljek site sanlarynyň hiç hili olmadığı aýdylýar, ýöne amaly iňlisde size laýyk gelýän site sanlary dürli faktorlara bagly bolup mümkin. Mysal üçin, site-ler näderejede dinamikdir, subsite-lere haýsy pluginler bar bolsa we ş.m.

Esasy kural hökmünde, ulgamyňyz ne käse ýönekeý bolsun, şonda has gowy. Indiki görnüşde dinamik däl bolan site-leri (olary agyr cache strategiyalary üçin amatly adaty edip) we plugin stakyny iň hafif bolsa (işleýän aktiv plugin sanlary az bolsa şonça gowy), saklap biljek subsite sanlary bilen kesgitli artdyrylmagy mümkin.

Iň gowy zat şudur: ol ähli WordPress bolan üçin, performans hasaplamalary üçin size bar bolsa we söýýän hasaplamalar hem multisite ulgamy üçin işleýär.

Multisite üçin esasy toklama (bottleneck) bu database-dir, ýöne beýleki ähli zatlar düzgünleşip bolsa, siz ony gowusmagyňiz gerek bolan sanlary birnäçe ming site bilen çäklenip biler. Şonda hem ol sanlara kadap-kadap çözgütler goşmak mümkin (mysal üçin, database sharding çözgütleri).
