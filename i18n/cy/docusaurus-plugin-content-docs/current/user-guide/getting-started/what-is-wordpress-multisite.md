---
title: Beth yw WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Beth yw WordPress Multisite?

Yn y cyd-fydd, mae WordPress yn rhoi ffeithau gyda'r enw ‘Multisite’ sydd â'i gynhyrchydd i 2010 gyda lansio WordPress 3.0. Oethau pan fydd wedi cael amrywiadau am ystod hynny i chynllun newid ffeithiau newydd a sicrwydd wella.

Yn y cyfathrebu, gallai'r multisite WordPress ei weld fel hyn: Mae uniwersytach yn dal i'w ddefnyddio un gyfleniad o WordPress ond mae pob fasnachol yn dal ei hunan gyda'i wefan WordPress.

##

## Beth yw Multisite WordPress yn llwyr?

Mae multisite yn ffeithau o WordPress sy'n sylw i'r amgylchedd o wefanau i gynnwys un gyfleniad o WordPress. Pan fydd multisite wedi cael ei chynllunio, mae'r wefan WordPress cyntaf wedi cael ei newid i sicrwydd i ddefnyddio hyn sydd yn cael ei ddarganfod fel **cynllun o wefanau**.

Mae'r cynllun hwn yn rhannu'r system o ffilyfrif (gan fydd â'r **plugins a'r themes hefyd wedi'u rhannu**), y database, y cyfurlau core o WordPress, yr wp-config.php, ac fel arall.

Mae hyn yn ei fod yn golygu bod annewidiadau WordPress, theme, a plugin yn cael eu perfformio unig am holl wefanau'r cynllun eich ganrif pan fydd yn rhannu ffilyfrifau unol ar y system o ffilyfrif.

Mae hyn yn un o'r prif fforddau'r multisite, felly mae'n sylwi i chi drosu'r amser i'w gryno'r amser i'ch gwefanau ganrifu i sicrannu'r amser i'r amser i'ch golybusau i sicrannu'r wefanau eich ganrifu.

##

## Subdomain neu Subdirectory?

Mae rhai ddau o fforddau i chwarae WordPress multisite – ac rhaid i chi ddwylo un ohono pan fyddwch yn newid eich gyfleniad WordPress cyffredin i gyfleniad multisite:

**Subdomain:** ex.: [site.domain.com](http://site.domain.com)

…neu

**Subdirectory:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Mae pob ffordd yn cael ei ddefnyddio a chwilio i chi'n gwneud y penderfyniad hwn pan fyddwch yn gweithio gyda'r amser.

Mae un swn sy'n bwysig i gynnwys: unwaith y mae eich penderfyniad wedi'i gwneud, mae newid eich rheol (network) o ddau-gwrth (subdirectory) i ddeall-gwrth (subdomain) neu yn ôl yn wirioneddol ddu – yn enwedig os oes gennych chi rhywfaint o wefanau wedi'u creu.

Ar ôl y penderfyniad hwnnw, mae yma rai pethau i gynnwys i sicrwch:

**Mod ddau-gwrth (Subdirectory Mode)** yw mod cyflwyno a chynalio yn hawddest yn ystod setffryd a chynalio. Mae hyn yn digwydd oherwydd bod pob wefan yn llwybrau (paths) aysyddogol i'r domain hanesyddol (main domain) (e.g. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Ar dda, mae angen **un sertifig SSL** ar gyfer y domain hanesyddol ac bydd hyn yn gwriadu'r holl rheol.

Ar yr un pryd, oherwydd ei strwythur URL, bydd Google a'r gymrydion chwilio eraill yn meddal fod pob wefan ddau-gwrth ar eich rheol-ddau-gwrth fel un wefan mawr. Ar dda, gall y cynnwys a drosir i wefanau ddau-gwrth gan eich tebydalwyr sy'n eu cyflwyno effaith ar y perfformiad SEO o'r wefan hanesyddol eich hun, felly. Mae'r gradd effaith yn ddadl ac mae gennych chi ddefnyddio'r argymhellau i ddweud bod gynnig hwnnw gallai fod yn ffurfiol ar gyfer perfformiad SEO.

**Mod deall-gwrth (Subdomain Mode)** yw chymryd yn anoddach ychwanegu, ond mae ei strwythur URL (e.g. [subsite.yournetwork.com](http://subsite.yournetwork.com)) yn cael ei gweld fel "mwy proffesiynol" ar gyfer y cyfathrebu.

Un o'r digwyddiad mwyaf hanesyddol yn sefydlu modddion subdomain yw cyfloni SSL (HTTPS) ar gyfer y holl rheol. Mae hyn yn dod o'r fhat yn gweld subdomains fel enghlynu allan. Fel resgilydd, byddwch angen certyfigatc SSL yn rhywfaint i bob subdomain ar eich rheol, neu certyfigatc ar gael yn arbennig gan enw **Wildcard SSL certificate**. Yn ystod y flynyddoedd diwethaf, mae cyfiderwyr gweithredol a panelau yn gwella eu gwaith mewn perthynas SSL ac mae rhai'n cynnig certyfigatc wildcard ar gyllid boten, gan fynd i'r ddeffryn rhwng y ddau moddion yn rhyfeddu yn amser sefydlu.

Yn gyfahanol i modddion subdirectory, mae subsais ar rheol ad-eyddiad-based yn cael eu gweld gan gweithredwyr chaeaf fel wefan allan, sy'n golygu bod cynnwys ar un subsite yn cael ei ddefnyddio gyda'r perfformiad SEO o'r subsais arall.

## Y Super Admin

Mae sefydliadau WordPress un-site yn sylweddolwch i chi iddo ddod ychwanegol o benau a rhoi rôl user yn rhywfaint â permisiwnau yn rhywfaint i'r benau hyn.

Yn WordPress Multisite, mae ddefnyddwr newydd yn cael ei golli: **y super admin** – ac mae panel admin newydd yn cael ei golli: **panel network admin**.

Fel y mae'r enw yn dangos, mae'r super admin gyda chymrydau ar gyfer y rheol, gan fod yn gallu uchello pob subsite, pluginau, themau, pob hyn!

Unwaith eich gwari'r sefydliad WordPress un-site i multisite, bydd y admin o'r site unig yn cael ei gwrthosi'n awt i super admin.

Gall pluginau a themau cael eu chwarae neu ddefnyddio gan y panel network admin gan y super admins. Gall subsite admins yn deall i chwilio i gyflwyno neu ddefnyddio'r pluginau neu themau hyn heb fod y super admin rheol yn gwella'r plugin, sy'n golygu ei fod yn weithredol ar gyfer pob subsite allan.

_Noti: fellych chi'n gallu, fellych gallu i'r gweithredol a'r rhwydwaith ac rhoi eurolau iddo super admin status yn rhoi'r ddefnyddiwr hwn cyflwrdd ei chontrol llawn ar eich rhwydwaith. Fel مثال, gallai ychwanegwyr super admin bynnag hefyd gwsueni eich super admin status, gan lawer yn chi o'r panel admin eich rhwydwaith. I'w gael i'r cyddeeau Ultimate Multisite gael chontrol llawn ar beth gallai ychwanegwyr super admin eraill wneud, mae gennyfaddau add-on gyda'r enw Support Agents. Mae'r add-on hwn yn sylweddolwch chi i creu ddefnyddiwr ar gyfer rhywbeth arall – un agent – gyda phrydderau sydd angen nhw i wneud eu gweithgaredd ar y rhwydwaith._

## Beth yw cyfrifol ymhellach a beth nid yn cael ei cyfrifol

Fel ydyn ni'n dweud o'r blaen, un o'r prif cynhwysedd WordPress multisite yw bod pob subsytach yn rhannu'r un gyfrifol, ffiliadau canol, themau, pluginau, ffiliadau canol WordPress, sns.

Fodd bynnag, mae gennych chi elementau sydd wedi'u cyfrifol yn ddefnyddi subsytach.

- Ar enllaert, mae pob subsytach yn cael ei ffurfio ffolder uploads ei hun. Fel rezultant, gallai ychwanegiadau a gyflenwyd gan ddefnyddwyr o subsytach penodol nid cael eu cyffredinol ar subsytach arall.

- Mae pob subsytach gyda'i panel admin ei hun ac gallai chwarae neu deactivio pluginau neu themau heb fod yn cael eu gweithredu ar y rhwydwaith gan super admin.

- Mae'r bennaf o tabliau datab wedi'u creu ar gyfer pob subsytach, gan fod postau, cyflwynion, peidiadau, setegau, a chwarae hefyd yn cael eu cyfrifol ar gyfer pob subsytach.

## Rheoli ddefnyddwyr ar WordPress Multisite

Mae un peth sydd yn rhyfeddol ar WordPress multisite yw rheoli ddefnyddwyr. Mae tabliau ddefnyddiwr WordPress yn un o'r chwaraeau sydd wedi'u rhannu ar bob subsytach.

Gall y cyfathrebu hwn creu rhywfaint o anwybion yn digwydd yn ôl beth ydych chi’n teimlo i guberd ag eich rhwydwaith. Mae'r مثال isel yn helpu i ddweud y un sydd yn hanfodol.

Tawmswch y scenarius canlyn:

Mae'n rhaglenwch WordPress multisite ac yn dechrau cynnig subsaites am ffeilfforau manwl i bobl sy'n dymuno bod ganddo siop e-commerce.

Mae eich cydwyliad cyntaf – John – yn dod. Creuwch site ar gyfer John ar y rheol, installwch pob plugin sydd angen, a rinodwch benynwr (user) ar gyfer John fel i fod yn gallu uchel ei siop.

Yna mae cydwyliad ail – Alice – yn dod. Dodwch ychwanegau hyn iddi ac mae hi bellach ganddo siop ar y rheol hefyd.

Mae John a Alice'n ddeallion eich, ond nid wynebu eu bod yn gwybod am ei gilydd. Yn bwysig hơn, os fydd un ohonynt yn mynychu i wefan siop y llain, mae nad oes ffordd i gwybod bod y siop hwn yn cael ei gyflwyno ar y rheol o siteau hynny.

Un dydd, mae John yn angen gynnig newydd o ffeil a fynd yn dod â'r ffeil perfformiadol mewn siop Alice. Pan mae'n ceisio gwblhau'r cyflwyniad, mae'n cael ei ddefnyddio'r message "email already in use" (email sydd wedi'i defnyddio), sydd yn anghyffurfio oherwydd bod John yn sicr 100% bod hynny yw'r cyffredin cyntaf iddo.

Mae hyn yn digwydd yn rhyfedd: mae benynwr John yn cael ei rhannu arallan y rheol, felly pan ceisio creu account i weithredu ar gyfer cyflwyniad ar siop Alice, bydd WordPress yn gweld bod benynwr gyda'r uniad cyfeiriad yr unel am yma'n dod, ac fyddai'n cael ei ddefnyddio.

_Noted: Rhaid i ni gwybod sut mae hyn yn ddrwg oherwydd eich cyfathrebu, felly mae Ultimate Multisite gyda opsiwn sy'n gwneud ychwanegau ar gyfer ychwanegu'r rheol am ychwanegu benynwr am yma, gan gael ei allu creu account aml yn ddefnyddio unel cyfeiriad yr unel. Mae pob account wedi'i cysylltu â subsaites, felly mae risg o chwilio yn cael ei sicr i'r gymharu yn bach. Yn y مثال uchod, bydd John nid yn cael message ddefnyddiol ac bydd yn gallu gynnig y ffeil hyn heb unrhyw angen._ Mae'r opsiwn hwn yn cael ei gallu chwarae ar Ultimate Multisite → Settings → Login & Registration.

Er gynnwys y cyfathrebu o ddefnyddwyr yn cael ei rhannu, gallai'r adminau o'r subsaites neu'r super admin iddo addasu a symud y ddefnyddwyr i'r subsaites, ac gall eu gael rôl ddefnyddiwr yn rhywfaint ar gyfer subsaites gwahanol.

## Cynllunio perfformiadau (Performance considerations)

Mae WordPress multisite yn gryf iawn wrth y llwybr o weithredinolau sydd ei allu chynllunio. Gallai'r hyn yn cael ei gweld gan y fhat yn rhyfeddol bod [WordPress.com](https://WordPress.com), Edublogs, a Campuspress yn gweithgareddau-based multisite ac mae pob un o'r hostau yn chynllunio milenni subsaites.

Er bod ychwanegol mewn theoria nad oes unrhyw amseriad canol i'r llwybr subsaites sy gallwch chynllunio ar un cyfleniad WordPress multisite, yn y prif, mae'r llwybr subsaites sy gallwch gyflawni yn ddefnyddiol gallai ei gwahanu'n fawr yn ôl amserau am ystyr o factorau gwahanol: sut mae'r subsaites yn dynamig, beth yw'r pluginau sydd ar gael i'r subsaites, gan ychwanegol.

Fel rheol ddefnyddiol, byddai'r rhwydwaith eich bod yn simpler, byddai'r iawn. Mae'n dda'i chynllunio subsaites lle nid yw'r cynnwys yn dynamig yn wir (sy mae hyn yn eu gwneud cadarnau daid yn ystod strategaau cache agored), ac i gadw y stack plugin yn llyfrgolyddol fel arall (gan ddefnyddio nifer bach o pluginau sydd mewn gweithredinol, gan ddifrifu'r nifer o pluginau sydd mewn gweithredinol yn ddefnyddiol). Gall hyn yn rhoi'r llwybr subsaites sy gallwch chynllunio'n drefniol.

Ystod y cyfathrebu, mae'r bottleneck cyffredinol ar multisite yn cael ei fod y database, ond os gellir i gyd ystyrau arall i'w cheddedig yn llawn, gallai'n gwneud chynllunio o ddau nghyddu subsaites cyn eich bod eisiau gymorth. Er hynny, mae gennych chiadwyon sy gallai cael eu cytuno yn drefniol ar ystod y cyfnod hwn (fel, soluethau sharding database).
