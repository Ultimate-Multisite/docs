---
title: Domain Mapping-i nädip sazlamaly
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domen kartalaşdyrmany nädip sazlamaly (v2)

_**MÖHÜM BELLIK: Bu makala Ultimate Multisite 2.x wersiýasyna degişlidir.**_

Premium toruň iň güýçli aýratynlyklarynyň biri müşderilerimize öz saýtlaryna ýokary derejeli domen birikdirmek mümkinçiligini hödürlemekdir. Ahyrsoňunda, haýsysy has professional görünýär: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ýa-da [_**joesbikeshop.com**_](http://joesbikeshop.com)? Şol sebäpli Ultimate Multisite bu aýratynlygy üçünji tarap plugin-leri ulanmagyň zerurlygy bolmazdan, öz içine goşulan görnüşde hödürleýär.

## Domen kartalaşdyrma näme? {#whats-domain-mapping}

Adyndan belli bolşy ýaly, domen kartalaşdyrma Ultimate Multisite tarapyndan hödürlenýän, ýörite domen üçin soragy kabul edip, şol soragy şol aýratyn domen birikdirilen tordaky degişli saýta kartalaşdyrmak mümkinçiligidir.

### Ultimate Multisite toruňyzda domen kartalaşdyrmany nädip sazlamaly {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domen kartalaşdyrmanyň işlemegi üçin siziň tarapyňyzdan käbir sazlamalar gerek. Bagtymyza, Ultimate Multisite agyr işi siziň üçin awtomatlaşdyrýar, şonuň üçin talaplary aňsatlyk bilen ýerine ýetirip bilersiňiz.

Ultimate Multisite gurnama wagtynda, ussat **sunrise.php** faýlyny bellenen bukja awtomatik göçürip gurnar. **Bu ädim tamamlanýança ussat size dowam etmäge rugsat bermez**.

<!-- Ekran suraty elýeterli däl: sunrise.php ädimi bilen Ultimate Multisite gurnama ussady -->

Bu, Ultimate Multisite gurnama ussady toruňyzy sazlamagy tamamlan badyna ýörite domeni derrew kartalaşdyryp başlap biljekdigiňizi aňladýar.

Ultimate Multisite-de domen kartalaşdyrmanyň hökmany däldigine üns beriň. WordPress Multisite-iň öz domen kartalaşdyrma funksiýasyny ýa-da islendik başga domen kartalaşdyrma çözgüdini ulanmak mümkinçiligiňiz bar.

Başga domen kartalaşdyrma çözgütlerine ýol bermek üçin Ultimate Multisite domen kartalaşdyrmasyny öçürmeli bolsaňyz, bu aýratynlygy **Ultimate Multisite > Sazlamalar > Domen kartalaşdyrma** astynda öçürip bilersiňiz.

![Admin ugrukdyrmasyny, kartalaşdyrma habaryny we DNS opsiýalaryny görkezýän Domen kartalaşdyrma sazlamalary sahypasy](/img/config/domain-mapping-settings.png)

Bu opsiýanyň göni aşagynda **Admin ugrukdyrmany mejbur et** opsiýasyny hem görüp bilersiňiz. Bu opsiýa müşderileriňiziň admin Dashboard-yna hem ýörite domeninde, hem-de subdomende girip biljekdigini ýa-da diňe olaryň birinde girip biljekdigini dolandyrmaga mümkinçilik berýär.

Eger **Kartalaşdyrylan domene mejbury ugrukdyr** saýlasaňyz, müşderileriňiz admin Dashboard-yna diňe ýörite domenlerinde girip bilerler.

**Tor domenine mejbury ugrukdyr** opsiýasy bolsa munuň tersini eder — müşderileriňize, hatda ýörite domenlerinde girmäge synanyşsalar hem, Dashboard-laryna diňe subdomende girmäge rugsat berler.

**Admin bölegine hem kartalaşdyrylan domen, hem-de tor domeni arkaly girmäge rugsat ber** opsiýasy bolsa olara admin Dashboard-laryna hem subdomende, hem-de ýörite domende girmäge mümkinçilik berýär.

![Üç ugrukdyrma opsiýasyny görkezmek üçin açylan Admin ugrukdyrma sanawy](/img/config/domain-mapping-redirect-options.png)

Ýörite domeni kartalaşdyrmagyň iki usuly bar. Birinjisi, domen adyny tor admin Dashboard-yňyzdan super admin hökmünde kartalaşdyrmak, ikinjisi bolsa account sahypasynyň aşagyndaky subsaýt admin Dashboard-y arkaly amala aşyrylýar.

Emma ýörite domeni toruňyzdaky subsaitleriň birine kartalaşdyrmaga başlamazdan öň, domen adynyň **DNS sazlamalarynyň** dogry sazlanandygyna göz ýetirmeli bolarsyňyz.

###

### Domeniň DNS sazlamalarynyň dogry sazlanandygyna göz ýetirmek {#making-sure-the-domain-dns-settings-are-properly-configured}

Kartalaşdyrmanyň işlemegi üçin, kartalaşdyrmagy meýilleşdirýän domeniňiziň toruňyzyň IP salgysyna gönükdirilendigine göz ýetirmeli. Size tor IP salgysynyň gerekdigine üns beriň — Ultimate Multisite gurnalan domeniň IP salgysy — kartalaşdyrmak isleýän ýörite domeniňiziň IP salgysy däl. Belli bir domeniň IP salgysyny gözlemek üçin, mysal üçin, [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) sahypasyna geçmegi maslahat berýäris.

Domeni dogry kartalaşdyrmak üçin, **DNS** konfigurasiýaňyzda şol **IP salgysyna** gönükdirýän **A RECORD** goşmaly. DNS dolandyryşy dürli domen registratorlarynyň arasynda ep-esli tapawutlanýar, ýöne XXXX siziň domen registratoryňyz bolan ýagdaýda " _XXXX-de A Record döretmek_ " diýip gözleseňiz, bu barada internetde köp gollanma bar (mysal: " _GoDaddy-de A Record döretmek_ ").

Muny işledip bilmeýän kynçylyk bilen ýüzbe-ýüz bolsaňyz, **domen registratoryňyzyň goldawyna ýüz tutuň** we olar bu bölekde size kömek edip bilerler.

Müşderileriňize öz domenlerini kartalaşdyrmaga rugsat bermegi meýilleşdirýän bolsaňyz, olar bu bölekdäki işi özleri etmeli bolarlar. A Record döredip bilmeýän ýagdaýlarynda olary registratorlarynyň goldaw ulgamyna ugrukdyryň.

### Ýörite domen adyny Super Admin hökmünde kartalaşdyrmak {#mapping-custom-domain-name-as-super-admin}

Toruňyzda super admin hökmünde giren wagtyňyz, **Ultimate Multisite > Domenler** astyna geçip, ýörite domen atlaryny aňsatlyk bilen goşup we dolandyryp bilersiňiz.

![Ultimate Multisite-de domenler sanawy sahypasy](/img/admin/domains-list.png)

Bu sahypanyň aşagynda ýokardaky **Domen goş** düwmesine basyp bilersiňiz we bu size **ýörite domen adyny**, ýörite domen adyny ulanmak isleýän **subsaýtyňyzy** sazlap we dolduryp biljek, şeýle hem ony **esasy domen** ady hökmünde bellemek isleýändigiňizi ýa-da ýokdugyny çözüp biljek modal penjiräni açar (bir subsaýta **birnäçe domen adyny kartalaşdyryp** biljekdigiňize üns beriň).

![Domen ady, saýt saýlaýjy we esasy domen açyp-ýapyjysy bolan Domen goş modal penjiresi](/img/admin/domain-add-modal.png)

Ähli maglumatlary girizeniňizden soň, aşakdaky **Bar bolan domeni goş** düwmesine basyp bilersiňiz.

Bu ýörite domeniň DNS maglumatlaryny barlamak we almak prosesini başlar. Şeýle hem sahypanyň aşagynda onuň geçýän prosesini yzarlamagyňyz üçin log görersiňiz. Bu proses tamamlanmak üçin birnäçe minut alyp biler.

Ultimate Multisite v2.13.0 täze saýt, her-saýt domeni hökmünde garalmaly hostda döredilende, içerki domen ýazgysyny hem awtomatik döredýär. Eger host toruň esasy domeni bolsa ýa-da **Site URL** meýdanynda sazlanan umumy checkout-form esasy domenleriniň biri bolsa, awtomatik mapped-domain ýazgysy geçirilýär, şeýdip şol umumy esasy domen ony ulanýan her bir saýt üçin elýeterli bolup galýar.

Müşderi Domain Seller v1.3.0 ýa-da has täze wersiýa arkaly täze domen bellige alanda, Ultimate Multisite bellige alnan domeni deslapky ýagdaýda müşderiniň tor saýtyna awtomatik map edýär. Administratorlara üstünlikli bellige alyşdan soň, esasy-domen baýdagy, işjeňleşdiriş ýagdaýy ýa-da SSL dolandyryşy ýaly opsiýalary üýtgetmek islemeýän bolsalar, aýratyn mapped-domain ýazgysyny goşmak indi gerek däl.

Eger hemme zat dogry sazlanan bolsa, **Stage** ýa-da status **Checking DNS**-den **Ready** ýagdaýyna üýtgemeli.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Domen adyna bassaňyz, onuň içinde käbir opsiýalary görüp bilersiňiz. Olara tiz göz aýlalyň:

![Stage, saýt, işjeň, esasy we SSL açyp-ýapgyçlary bolan domen jikme-jiklik sahypasy](/img/admin/domain-edit.png)

**Stage:** Bu domeniň häzirki tapgyrydyr. Domeni ilkinji gezek goşanyňyzda, ol ähtimal **Checking DNS** tapgyrynda bolar. Proses DNS ýazgylaryny barlar we olaryň dogrudygyny tassyklar. Soňra domen **Checking SSL** tapgyryna geçirilýär. Ultimate Multisite domeniň SSL-i bardygyny ýa-da ýokdugyny barlar we domeniňizi **Ready** ýa-da **Ready (without SSL)** hökmünde toparlandyrar.

**Site:** Bu domen bilen baglanyşykly subdomain. Mapped domen şu anyk saýtyň mazmunyny görkezer.

**Active:** Domeni işjeňleşdirmek ýa-da işjeňsizleşdirmek üçin bu opsiýany açyp ýa-da ýapyp bilersiňiz.

**Is Primary Domain?:** Müşderileriňizde her saýt üçin birden köp mapped domen bolup biler. Munuň anyk saýt üçin esasy domen bolup-bolmandygyny saýlamak üçin bu opsiýany ulanyň.

**Is Secure?:** Ultimate Multisite domeni işjeňleşdirmezden öň onuň SSL şahadatnamasynyň bardygyny ýa-da ýokdugyny barlasa-da, domeni SSL şahadatnamasy bilen ýa-da onsuz ýüklemegi el bilen saýlap bilersiňiz. Üns beriň: eger websaýtda SSL şahadatnamasy ýok bolsa we ony SSL bilen mejbury ýüklemäge synanyşsaňyz, size ýalňyşlyklar berip biler.

### Custom domen adyny Subsite ulanyjysy hökmünde map etmek {#mapping-custom-domain-name-as-subsite-user}

Subsite administratorlary hem öz subsite admin dashboard-yndan custom domen atlaryny map edip bilerler.

Ilki bilen, bu opsiýany **Domain mapping** sazlamalarynyň aşagynda işjeňleşdirendigiňize göz ýetirmeli. Aşakdaky skrinşota serediň.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Bu opsiýany **Plan** derejesinde ýa-da **Ultimate Multisite > Products** içindäki önüm opsiýalarynda hem belläp ýa-da sazlap bilersiňiz.

![Önüm redaktirleme sahypasyndaky Custom Domains bölümi](/img/config/product-custom-domains.png)

Şol opsiýalaryň haýsydyr biri işjeňleşdirilende we subsite ulanyjysyna custom domen atlaryny map etmäge rugsat berlende, subsite ulanyjysy **Account** sahypasynyň aşagynda **Domains** atly metabox görmeli.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Ulanyjy **Add Domain** düwmesine basyp biler we bu käbir görkezmeler bilen modal penjire açar.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Soňra ulanyjy **Next Step** düwmesine basyp, custom domen adyny goşmagy dowam etdirip biler. Olar munuň esasy domen boljakdygyny ýa-da däldigini hem saýlap bilerler.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** düwmesine basmak custom domeniň DNS maglumatlaryny barlamak we almak prosesini başlatar.

### Domain Syncing hakynda {#about-domain-syncing}

Domain Syncing — Ultimate Multisite-iň custom domen adyny hosting hasabyňyza add-on domen hökmünde goşýan prosesidir, **domen mapping işlemegi üçin**.

Eger hosting üpjünçiňiz Ultimate Multisite domain mapping aýratynlygy bilen integrasiýa eýe bolsa, domain syncing awtomatik bolup geçýär. Häzirki wagtda bu hosting üpjünçileri _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ we _Cpanel._

Host-üüpünçi integrasiýasy işjeň bolanda, Ultimate Multisite täze döredilen saýtlar üçin üpjünçi tarapyndaky DNS ýa-da subdomain döretmek wezipesini hem nobata goşup biler. Eger hiç bir integrasiýa şol wezipäni diňlemeýän bolsa, no-op nobat ýazgylarynyň öňüni almak üçin fon işi geçirilýär. Mapped domenler üçin DNS we SSL barlaglary adaty domen-tapgyr prosesi arkaly dowam edýär.

Bu integrasiýany Ultimate Multisite sazlamalarynda **Integration** tabynyň aşagynda işjeňleşdirmeli bolarsyňyz.

![Hosting üpjünçilerini görkezýän Ultimate Multisite sazlamalaryndaky Integrations taby](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_Hosting üpjünçiňiz ýokarda agzalan üpjünçileriň biri däl bolsa, **domen adyny hosting hasabyňyz bilen el bilen sync etmeli ýa-da goşmaly bolarsyňyz**._
