---
title: Domain mappingi nireden görkezmek?
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Domain Mappingy Nasıl Yapılır (v2)

_**ÖNEMLİ QAYDAMA: Bu məqalə Ultimate Multisite versiya 2.x-i nəzərdə tutur.**_

Premium bir şəbəkənin ən güclü funksiyalarından biri, müştərilərimizə öz sitələrinə üst səviyyə domen əlavə etmə imkanı təklif etməkdir. Əlbəttə, hansı daha peşəkar görünür: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) yoxsa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Bu səbəbdən Ultimate Multisite bu funksiyanı üçüncü tərəf pluginlərindən istifadə etmək lazım olmadan daxil edilmiş şəkildə təklif edir.

## Domain mapping nədir?

Adından göründüyü kimi, domain mapping, Ultimate Multisite tərəfindən xüsusi domen üçün sorğuyu qəbul etmə və həmin sorğunu şəbəkədəki müvafiq sitə o domen əlavə edilmiş şəkildə bağlama imkanıdır.

### Ultimate Multisite Şebekenizde Domain Mapping Nasıl Yapılır

Domain mapping (alan eşleştirme) çalışması için sizden bazı ayarlar yapmanız gerekiyor. Neyse ki, Ultimate Multisite bu zor işi sizin yerinize otomatikleştirir, böylece gereklilikleri kolayca yerine getirebilirsiniz.

Ultimate Multisite kurulumu sırasında sihirbaz (wizard), **sunrise.php** dosyasını otomatik olarak belirlenen klasöre kopyalar ve kurar. Bu adımdan önce ilerlemenize izin verilmez.

<!-- Screenshot unavailable: ultimate multisite installation wizard with sunrise.php step -->

Bu, Ultimate Multisite kurulum sihirbazı ağınızı ayarlamayı bitirdikten sonra özel domaini hemen eşleştirmeye başlayabileceğiniz anlamına gelir.

Ultimate Multisite'da domain mapping (alan eşleşdirme) mütlək de gerek däldir. Siz WordPress Multisite-in özü olan domain mapping funksiyasından ýa-da başga bir domain mapping çözundän peýdalanmagy üçin opsiyanyň bar bolmagyny saklaýarsyňyz.

Eger başga domain mapping çözgütlerine geçmek üçin Ultimate Multisite domain mappingini özüňiz deaktiv etmek isleseňiz, bu funksiyany **Ultimate Multisite > Settings > Domain Mapping** boýunça deaktiv edip bilersiňiz.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

Bu opsiyanyň hemen aşagynda **Force Admin Redirect** (Administratora zorla yöneltmek) opsiyasyny hem görkezeliň. Bu opsiyanta size, müşderileriniz özlerini custom domaini we subdomaini arkaly admin dashboarduna girip biljekmi ýa-da diňe birindäki arkaly girip bilerlerdi kontrol etmek üçin mümkinçilik berýär.

Eger siz **Force redirect to mapped domain** (maplanýan domaina zorla ýerlendirji) opsiyasyny saýlarsanız, müşderileriniz özleriniň admin panellerine diňe özlerindikleri custom domenleri arkaly girip bilerler.

**Force redirect to network domain** (täsirleme domana zorla ýerlendirji) opsiyasy bolsa tam tersini edýär – müşderileriniz özlerindikleri custom domenlerde saglyk bermekden hem, diňe öz subdomenleri arkaly panellere girip bilerler.

We hemişe **Allow access to the admin by both mapped domain domain and network domain** (maplanýan domany we täsirleme domany bilen adminine girirmegi ýetirmek) opsiyasy bilen müşderilere hem subdomenleri, hem custom domenleri arkaly admin panellerine girip barmaga mümkinçilik berilýär.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Custom domenleri eşdelegal etmek üç usul bar. Birinji usulda siz domen adyny ağlar (network admin) paneli arkaly super admin hasabyndan eşdelegal edip, ikinji usulda bolsa hasap sahabyndaky subsite admin paneli arkaly.

Eger siz custom domenini ağınızdaky bir subsite-e eşdelegal etmäge başlaňdan öň, domen adynyň **DNS sozlamalaryny** düzgün görkezýändiginden hem habar etmek gerek.

### Domen DNS sozlamalaryny düzgün görkezmek



Mapping işlemini düzgün etmegi üçin, mapalamak isleýän domen siziň ulgamyňyz (Network) IP adresine ýol berýändiginden hem hasaplaň. Ýöne size Network IP adresini - Ultimate Multisite-y nire ýüklendigini görkezýän domen adynyň IP adresini däl, mapalamak isleýän custom domen siziň elinizde bolmaly. Belirli bir domen IP adresini tapmak üçin, mysal üçin [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) bilen gözegçilmek islärin.

Alanadyny dogry görkezmek üçin, siz **DNS** sozlamasyna şol **IP adresi** bilen baglanýan bir **A RECORD** goýmagyňiz zerurdyr. DNS dolandyrmagy dürli domen resminamalary (domain registrars) aralygynda örän üýtgeýär, ýöne bu barada onlaýnda köp tutorialary bar, eger siz " _XXXX-de A Record döretmek_ " diýip gözleýän bolsaňyz, eýsem XXXX bilen siziň domen resminamany (mysal üçin: " _GoDaddy-de A Record döretmek_ ").

Bu işi etmekde kynçylyk çekseňiz, **domen resminamanyňdyzyň destek birikmesini** hataryna çykaryň we olar size bu bölekde kömek edip bilerler.

Eger siz müşderiňizi öz domenlerini görkezmäge rugsat bermegi meýilidysyz bolsaňyz, olar bu bölegi özleri etmeli. A Record döredip bilmese diýse, olary resminamanyňdyzyň destek ulgamyna ýol görkezmekden soň kömek edip bilerisiz.

### Custom domen adyny Super Admin bilen görkezmek

Şirketinizde super admin olarak ýerine düşseňiz, **Ultimate Multisite > Domains** başlygyna girip özüňizden hasaplanan domenleri aýlamak we dolandyrmak örän aňsatdyr.

![Ultimate Multisite-da Domenler listi səhpeni](/img/admin/domains-list.png)

Bu sabyrlyp, üstdäki **Add Domain** düwmenine basyp bilersiňiz we bu size modal oynatýan bir bölek açar. Bu ýerde siz özüňizden hasaplanan domen adyny, özüňizden hasaplanan domen adyny ulanyp biljek subsite-i we onuň üstüne özüňizden hasaplanan domen adyny goýmak isleýärsiňizmi ýa-da ýok isleýärsiňizmi (esasy domany goýmak isleýärsiňizmi) barlap bilersiňiz. (Elde etmeli, bir subsiteye köp domen adyny eşde meýil edip bilersiňiz).

![Domen adı, site saýlayjysy we esasy domen düwmesi bilen Add Domain modalyna](/img/admin/domain-add-modal.png)

Bütün maglumatlary girirdikten sonra, altındaky **Add Existing Domain** düwmenine basyp bilersiňiz.

Bu, mysal domenini barlap we DNS maglumatlaryny almagyň prosesini başlatýar. Prosesi geçip duran aşakdaky logda hem görkezeli, bu proses birnäçe minut geçip bilýär.

Ultimate Multisite v2.13.0-da, eger täze site hostda döredilse we ol her bir site üçin özel domen hasaplanmaly bolsa, sistem awtomatiki doganym (internal domain record) ýazgysyny hem döredýär. Eger host ulgamyň esasy domeny bolsa ýa-da **Site URL** ulanylyp goýulan paylaşımlı ödemäji formalar bazasynyň domanyndan biri bolsa, awtomatiki eşleşdirilen domen maglumatlary atlandyrylýar. Bu, paylaşımlı bazany ulanýan her bir site üçin hem bar bolmaga mümkinçilik berýär.

**Stage** ýa-da hallary **Checking DNS** (DNS barlanylypdir) bilen **Ready** (Taýyn) diwaryna üýtgeşmeli bolsa, her zat düzgün goýulsa.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Domain adyna basanda, onuň içinde birnäçe opsionalary göräýärsiňiz. Onlara çalt bir göz atalyň:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage (Mara):** Bu, domenňiziň şu wariantda bolan aşamasy. Domeni ilkinji gezi goýanda, o muhtemelen **DNS-i Barlamak** aşamasında bolup biler. Bu proses DNS ýazgylaryny barlap we olaryň dogrydyr-de däl-dejekdigini anyklap biler. Sonra, domen **SSL-i Barlamak** aşamasına geçirilýär. Ultimate Multisite domeni SSL-e eýe mi bolup baýlandyryp baýlanmaýandygy barada barlap we siziň domenini **Ready (Daşaryk SSLsiz)** ýa-da **Ready (SSLsiz Ready)** hasaba alýar.

**Site (Sahypa):** Bu domen bilen baglanylan alt domenidir. Barlanan domen bu belli sahypanyň mazmunyny görkezýär.

**Active (Aktiw):** Domeni işlemek üçin bu opsiyany ýana-da ýapyp bilersiňiz, ol domenini aktivleşdirmek ýa-da deaktiv etmek üçin ulanyp bilersiňiz.

**Is Primary Domain? (Esasy Domenmi?):** Işdeki müşteri bir sahypa üçin birnäçe baglanylan domeny bolup biler. Bu opsiyany ulanyp bu belli sahypa üçin esasy domen olup olmadığını saýlaýarsyňyz.

**Güvenli mi?:** Ultimate Multisite domeninizde SSL sertifikatı baradyn ýa-da damadyn olmadığını barlap geçse hem, siz onu SSL sertifikaty bolan ýa-da bolmaýan domany yüklemek üçin manual (göçürip) saýlap bilersiňiz. Etleýman, web saytynda SSL sertifikaty ýok bolsa we ony SSL bilen zor yüklemäge synanyp, size baýatlyk berip biler.

### Custom domen adyny Subsite ulanyjysy hökmünde eşde dowam etmek (Mapping)

Subsite administratorlary öz subsite administrasiýa panelinden custom domen adlaryny hem eşde dowam edip bilersiňiz.

Ilki bilen, bu opsiony **Domain mapping** (Domen eşde dowam etdirme) sozlamalarynda işjeňleşdirýändigi üpjün etmeli. Aşakdaky skrinşoti görkeziň.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Bu opsiyany **Ultimate Multisite > Products** dükkanlar (Plan) səviyyəsində və ya məhsul seçimlərində də təyin edə və konfiqurasiya edə bilərsiniz.

![Product edit page-də Custom Domains bölməsi](/img/config/product-custom-domains.png)

Bu opsiyalardan hər hansı biri aktiv olduqda və subsite istifadəçisinə custom domain adlarını tapmaq icazəsi verildikdə, subsite istifadəçisi **Account** səhifəsində **Domains** adlı bir metabox görəcək.

<!-- Screenshot unavailable: Subsite Account səhifəsində Domains metaboxu və Add Domain düyməsi -->

İstifadəçi **Add Domain** düyməsinə klikləyə bilər və bu, bəzi təlimatlar olan bir modal pəncərə açacaq.

<!-- Screenshot unavailable: Subsite istifadəçiləri üçün DNS A-record təlimatlarını göstərən Add Domain modalı -->

User soňra **Next Step** düwmesini basyp, mysal üçin, size öz web saygyny goýmak üçin gowy bolan domeny goşmaga geçip biler. Şeýle hem bu domany esasy (primary) domany bolup bolmazdygyny saýlaýar.

<!-- Screenshot unavailable: Custom domain name field and primary domain toggle with Add Domain form -->

<!-- Screenshot unavailable: DNS verification step that triggers DNS verification with Add Domain confirmation step -->

**Add Domain** düwmesine basmak, custom domanyň DNS maglumatlaryny barlap we almagy prosesini başzatýar.

### Domain Syncing barada

Domain Syncing – bu prosesde Ultimate Multisite custom domany size hosting hasabyňyzda goşmaýar, **domany eşleşdirmek üçin** ek domanyň biri hökmünde.

Domainler awtomatik senkronizirlenir, eger hosting provayderi Ultimate Multisite domen eşleşdirme (domain mapping) özelliği bilen baglantsal bolsa. Şu wagt bu hosting provayderleri _Runcloud_, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways_ we _Cpanel_ dir.

Hosting-provayderi baglantsalyk işledikde, Ultimate Multisite täze döredilen saytlar üçin provayder tərəfindir DNS ýa-da subdomain döretmek tapşyrygyny hem kuyruğa alyp bilýär. Eger bu tapşyrygy dinleýän baglantsalyk ýok bolsa, arka plan işi (background job) no-op kuyruklarynyň ýüklendirilmeginden saklamak üçin atlandyrylýar. Eşleşdirilen domenler üçin DNS we SSL barlaglary normal domen aşamasy arkaly dowam edýär.

Bu baglantsalyk bilen Ultimate Multisite-da **Integration** (Baglantsalyk) tabyny görkezilýän sozlamalarda işe geçirmeli size gerek bolmadyk.

![Ultimate Multisite sozlamalarynda integrasiýa tabyny görkezýän resminiz](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Integrasiýa sozlamalarynyň hosting provayderleri linkleri resminiňiz -->

_Elde etmeli ýatda saklaň ki, eger siziň hosting provayderi ýok bolsa, ýokarda agzalanyşykda görkezilen provayderler bilen birleşmese, **siziň domain adyny özüňiz manual ýaly senkronlamagyň ýa-da goşmagyň** gerek boljakdyr._
