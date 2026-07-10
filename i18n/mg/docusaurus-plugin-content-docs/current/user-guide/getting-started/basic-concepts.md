---
title: Hevi-dehibe fototra
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Fototra Ny Fototra {#basic-concepts}

Ho an mpampiasa WordPress Multisite vaovao sy olona vao manomboka mampiasa Ultimate Multisite, dia misy teny sy fehezanteny maro vaovao tokony hianarana aloha. Zava-dehibe ny fianarana azy satria mila mahazo ny sehatra (platform) sy ny fomba fiasany amin'ny ankapobeny ianao.

Ao amin'ity lahatsoratra ity, dia hanandrana mamaritra sy manazava ny foto-kevitra fototra vitsivitsy ao amin'ny WordPress isika. Misy izay mifandraika kokoa amin'ny mpampiasa, misy hafa ho an'ny developer, ary misy roa izany.

## WordPress Multisite {#wordpress-multisite}

Ny **Multisite** ao amin'ny WordPress dia karazana fametrahana WordPress ahafahanao mamorona sy mitantana tambajotra (network) ahitreretana tranonkala maro avy amin'ny dashboard iray misy. Afaka mitantana ny zava-drehetra ianao, anisan'izany ny isan'ny toerana (sites), ireo fahaiza-manao (features), ireo theme, ary ny anjara asan'ny mpampiasa (user roles). Azo atao ny mitantana aribatry sy aribatry tranonkala maro.

## Tambajotra (Network) {#network}

Amin'ny teny WordPress, ny tambajotra Multisite dia toerana ahafahana mitantana **subsites** maromaro avy amin'ny dashboard iray. Na dia miova aza ny fomba famoronana tambajotra multisite eo anivon'ny mpamatsy hosting samihafa, ny vokatra farany dia matetika misy toromarika fanampiny vitsivitsy ao amin'ilay fichier **wp-config.php** mba hanomezana ny fahalalana an'i WordPress fa miasa amin'ity fomba manokana ity izy.

Misy fahasamihafana maromaro eo amin'ny tambajotra multisite sy fametrahana WordPress tsy misy (stand-alone) izay hohazavaina fohy isika.

## Database {#database}

Ny **database** dia vondrona data voalamina sy voalamina tsara. Amin'ny teny informatika, ny database dia rindrambaiko ampiasaina hitahirizana sy hanaraka ireo data. Heverina ho toerana fitehirizana (file cabinet) izay mitahirizana data amin'ny faritra samihafa antsoina hoe tables izany.

Ny WordPress Multisite dia mampiasa database iray ary ny subsite tsirairay dia manana table manokana misy ny blog id ao anatin'ny prefix, ka rehefa mametraka fametrahana network ianao ary mamorona subsite, tokony hanana ireo tables ireo ianao:

_wp_1_options_ \- tabele f safidy vo aloha (options table) ho subsite vo voalohany vo voalohana vo voalohana vo voalohana

_wp_2_options_ \- tabele f safidy vo aloha (options table) ho subsite vo voalohany vo voalohana vo voalohana vo voalohana

## Mpam-ba fanomezana (Hosting provider) {#hosting-provider}

Mpam-ba fanomezana dia orinasa iray izay mamela ny orinasa sy ny olona hampiasa ireo tranonkala (websites) amin'ny alalan'ny World Wide Web. Ny serivisy omen'ireo mpamatsy hosting dia miovaova, fa matetika ahitana famolavolana tranonkala, toerana fitahirizana eo amin'ny host, ary fifandraisana amin'ny Internet.

## Domain (Anaran-tanana) {#domain}

Ny anaran-tanana (domain name) dia adiresy izay ampiasain'ny olona mba hifampianarana ny tranonkalanao. Lazaina izany hoe aiza no hitadiavana ny tranonkalanao amin'ny web browser. Toy ny adiresin'ny lalana, ny domain dia fomba iantsoana azy ireo mba hijerena ny website anao an-tserasera. Ary toy ny manana marika eo anatrehan'ny fivarotanao. Raha te hianatra ny website anay ianao, dia tsy maintsy manoratra ny adiresin'ny web ao amin'ny address browser anao izay [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) ianao, izay [**ultimatemultisite.com**](http://ultimatemultisite.com) no anaran-tanana (domain name).

## Subdomain (Anaran-tserasera fohy) {#subdomain}

Ny subdomain dia karazana firafitry ny website eo ambanin'ny domain lehibe, fa fa tsy mampiasa folder mba hanomezana fandaminana ny votoatin'ny website, dia manome tranonkala iray manokana izy. Azo atao ho [**https://site1.domain.com/**](https://site1.domain.com/) izay ny _site1_ no anaran-tserasera (subdomain name) ary [_domain.com_](http://domain.com) no domain lehibe (main domain).

## Subdirectory (Fizarana fidirana) {#subdirectory}

Ny subdirectory dia karazana firafitry ny website eo ambanin'ny root domain izay mampiasa folder mba hanomezana fandaminana ny votoatin'ny website. Ny subdirectory dia mitovy amin'ny subfolder ary azo ampiasaina anarana ireo. Azo atao ho [**https://domain.com/site1**](https://domain.com/site1) izay ny _site1_ no anaran-subdirectory (subdirectory name) ary [_domain.com_](http://domain.com) no domain lehibe (main domain).

## Subsite {#subsite}

Subsite dia toerana (subsite) dia toerana ianao no ataona ao anatin'ny tambajotra Multisite. Afaka ho **subdomain** na **subdirectory** izy arakaraka ny fomba napetrakao ny fametrahana WordPress Multisite-nao.

## Super Admin {#super-admin}

Ny WordPress Super Admin dia karazana mpampiasa manana fahefana feno mba hitantana ireo subsites rehetra ao anatin'ny tambajotra Multisite. Ho an'ireo mpampiasa Multisite, izy no **haaviana indrindra ny fidirana** azonao omenao amin'ny fametrahana WordPress-nao.

## Plugin {#plugin}

Amin'ny ankapobeny, ny plugin dia vondron'ny code izay manampy fahaizana hafa amin'ny tranokala WordPress-nao. Afaka tsotra izany toy ny fanovana ny logo fidirana na sarotra toy ny fanampiana fahaiza-manao e-commerce. Ny _Woocommerce_ sy _Contact Form_ dia ohatra iray.

Amin'ny WordPress Multisite, azo apetraka ny plugin amin'ny alalan'ny dashboard an'ny admin an'ny tambajotra (network admin) ihany ny Super Admin. Ny mpitantana subsite kosa dia afaka manao activation sy deactivation ny plugin ao anatin'ny subsiterao ihany.

## Themes {#themes}

Ny WordPress theme dia vondron'ny rakitra (_graphics, style sheets, ary code_) izay mamaritra ny endriny ankapobeny an'ilay tranokala. Manome ny fomba famoronana ny lafiny rokena (front-end styling) rehetra toy ny fomba fanoratana soratra, ny fandrindrana pejy, loko, sns.

Mitovy amin'ny plugin, azo apetraka ny theme ao anatin'ny WordPress Multisite avy amin'ny Super Admin ihany ary azo ampiharina amin'ny haavon'ny subsite alohan'ny mpitantana subsite.

## Site Template {#site-template}

Ny **Site Template** dia toerana fototra (boilerplate site) izay azo ampiasaina ho fototra rehefa mamorona tranokala vaovao ao anatin'ny tambajotranareo.

Midika izany fa afaka mamorona tranokala fototra ianao, manao activation ireo plugin samihafa, mametraka theme mavitrika ary manova azy amin'ny fomba tianao. Avy eo, rehefa mamorona kaonty vaovao ny mpanjifa anao, fa tsy hahazo tranokala WordPress mahazatra izay tsy misy votoaty tena ilaina ao anatiny izy, dia hahazo kopia amin'ilay site fototra anareo ianao izay efa misy ny fanovana sy ny votoaty rehetra.

## Domain Mapping {#domain-mapping}

**Domain mapping** amin'ny WordPress dia fomba iray ahafahana manaraka ny mpampiasa ho any amin'ny host marina, amin'ny alalan'ny adiresin'ny tranokala. Amin'ny WordPress Multisite, ny subsite dia noforonina mampiasa lalana (subdirectory) na subdomain. Ny domain mapping dia mamela ireo mpampiasa ao anatin'ny subsite hampiasa top-level domain toy ny [**joesbikeshop.com**](http://joesbikeshop.com) mba hahatonga ny adiresin'ny tranokala ho toa matihanina kokoa.

## SSL {#ssl}

SSL dia midika hoe **Secure Sockets Layer**. Io dia taratasy nomerika izay manamarina ny maha-izy azy an'ny tranonkala ary mamela fifandraisana voafehy (encrypted connection). Amin'izao fotoana izao, ampiasaina ho teknolojia fototra mba hiantohana ny fifandraisana amin'ny Internet sy hiarovana ny angona sarotra rehetra alefa eo anelanelan'ny rafitra roa, manakana ireo mpanao ratsy tsy hahita sy hanova ny fampahalalana alefa, anisan'izany ny antsipiriany manokana mety ho azo. Mila SSL ny navigateur ankehitriny izay mahatonga azy ho tena ilaina rehefa mamorona sy mandeha amin'ny website ianao.

## Media {#media}

Ny media dia sary, feo, video ary rakitra hafa izay manamboatra ny website.

Ny tranokala maripika (network sites) dia mizara database iray eo amin'ny WordPress Multisite izy ireo, ary mitazona lalana samihafa ao amin'ny filesystem ho an'ireo rakitra media.

Mbola mitovy ny toerana fandefasana mahazatra an'ny WordPress (wp-content/uploads); na dia ovaina aza ny lalany mba hanehoana ny ID manokana an'ilay tranokala maripika. Vokatr'izany, ny rakitra media ho an'ny tranokala maripika dia miseho toy ny wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Ny Permalinks dia ireo adiresy URL maharitra (permanent URLs) an'ny post na pejy tsirairay ao amin'ny tranonkalanao. Antsoina koa hoe **pretty links** ny Permalinks. Amin'ny fomba fandaminana azy, ny URL an'ny WordPress dia mampiasa endrika query string izay toa izao:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite dia plugin WordPress iray, natao ho an'ny instalation WordPress Multisite, izay manova ny instalation WordPress anao ho tambajotra sites premium – toy ny [WordPress.com](https://WordPress.com) – mamela ireo mpanjifa hamorona sites amin'ny fandoavam-bola isam-bolana, isam-bolana na isan-taona (afaka mamorona "Free plans" koa ianao).

## Checkout Form {#checkout-form}

Checkout Form dia endrika fangatahana famakiana iray na maromaro dingana izay ahitana ny famoronana subsite, fandraisana anjara (membership), ary kaontry mpampiasa amin'ny alalan'ny Ultimate Multisite registration. Ahitana ireo sehatra sy endrika fandoavam-bola samihafa izay tsy maintsy atao avy amin'ny mpanjifa mandritra ny dingana famoronana kaonty.

## Webhook {#webhook}

Webhook (antsoina koa hoe web callback na HTTP push API) dia fomba iray ahafahan'ny app iray manome vaovao tena izy ho an'ny application hafa. Ny webhook dia mampitana data any amin'ny application hafa rehefa mitranga, midika fa ahazo data ianao avy hatrany.

**Ultimate Multisite webhooks** dia manokatra fahafahana tsy manam-pahataperana, mamela ireo administrator an'ny tambajotra hanao karazana fampifandraisana mampanahy nefa mahasoa rehetra, indrindra raha ampiasaina miaraka amin'ny serivisy toy ny _Zapier_ sy _IFTTT_.

## Events {#events}

Event dia asa iray mitranga vokatry ny asa nataon'ny mpampiasa na loharano hafa, toy ny tsindrim-peo. Ny Ultimate Multisite dia mitazona ny fampahafantarana (record) ny zava-drehetra sy ny logs izay mitranga ao anatin'ny tambajotra rehetra anao. Manara-maso ireo asa samihafa mitranga eo amin'ny multisite anao, toy ny fanovana ny plan.
