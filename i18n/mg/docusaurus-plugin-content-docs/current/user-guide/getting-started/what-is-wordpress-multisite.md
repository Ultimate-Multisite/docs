---
title: Inona no WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Inona ny WordPress Multisite?

Ao anatin'ny fototra (core) dia manome fitaovana iray antsoina hoe ‘Multisite’ ny WordPress, izay mamerina ny fiandohany tamin'ny 2010 rehefa nivoaka ny WordPress 3.0. Hatramin'izany dia nahazo fanavaozana maro izy mba hampidirana fepetra vaovao sy hanamafisana ny fiarovana.

Amin'ny fototra, azo heverina fa: Ny Oniversita iray dia mitazona fametrahana WordPress tokana (single installation), saingy ny fakalazana (faculty) tsirairay dia mitazona toeram-pampianarana WordPress manokana.

##

## Inona marina no atao hoe WordPress Multisite? {#what-exactly-is-wordpress-multisite}

Ny Multisite dia fitaovana ao amin'ny WordPress izay mamela ireo tranokala maro hiara-miasa amin'ny fametrahana WordPress tokana iray. Rehefa voasokajy (activated) ny multisite, dia ovaina ho toerana manohana izay matetika antsoina hoe **"tambajotra tranokala"** (network of sites) ilay toerana WordPress orishina.

Ity tambajotra ity dia miara-miasa amin'ny rafitry ny rakitra (file system) (midika fa **miara-miasa koa ireo plugins sy themes**), ny database, ny rakitra fototra WordPress, ny wp-config.php, sns.

Midika izany fa mila atao indray an-tserasera (update) ny WordPress, theme ary plugin iray ihany ho an'ny tranokala rehetra ao amin'ny tambajotranarefa satria miara ireo rakitra mitovy eo amin'ny file system.

Ity zava-nitranga ity dia iray amin'ireo tombony lehibe indrindra amin'ny multisite, satria mamela anao hanitsiana ny isan'ny tranokala izay iantohanao fa mitovy ny asa tokony hataonao mba hitazomana ireo tranokalan'ny mpanjifa.

##

## Subdomain ve na Subdirectory? {#subdomain-or-subdirectory}

Misy fomba roa amin'ny fiasana WordPress multisite – ary mila misafidy iray rehefa manova fametrahana WordPress mahazatra ho multisite:

**Subdomain:** ohatra: [site.domain.com](http://site.domain.com)

…na

**Subdirectory:** ohatra: [yourdomain.com/site](http://yourdomain.com/site)

Ny fomba tsirairay dia manana tombony sy tsy tombony izay tokony ho fantatrao rehefa manao izany fanapahan-kevitra izany.

Zava-mitra ir zava-dehibe ny lafatra tokana ity: rehefa manao fanapahan-kevitra ianao, dia sarotra be ny manova ny tambajotra avy amin'ny subdirectory ho subdomain na mifam-pahafahana izany – indrindra raha efa misy toerana maromaro ianao.

Alohan'ny fanaovana io fanapahan-kevitra io, ireto misy zavatra vitsivitsy tokony ho fantatrao:

**Subdirectory Mode** no fomba mora indrindra amin'ny fametrahana sy fitantanana. Izany dia mitranga satria ny toerana rehetra dia hoe lalana (path) mifandray amin'ny domain lehibe ihany (ohatra: [yourdomain.com/subsite](http://yourdomain.com/subsite)). Noho izany, mila **SSL certificate iray** fotsiny ianao ho an'ny domain lehibe ary hahatakarana ny tambajotra manontolo izany.

Na izany aza, noho ny firafitry ny URL-na, dia heverin'ny Google sy ny mitady hafa maro fa iray tetikasa goavana i zava-drehetra ao amin'ny tambajotra mifototra amin'ny subdirectory anao. Noho izany, ny votoaty azo ampiana amin'ireo subsite ireo avy amin'ny mpanjifa anao dia mety hisy fiantraikany amin'ny fahombiazan'ny SEO (SEO performance) an'ilay landing site anao, ohatra. Ny haavon'ny fiantraikany dia azo adika ary misy fanazavana fa ny fanaovana izany dia mety hanome tombony ho an'ny SEO aza.

**Subdomain Mode** dia sarotra kely kokoa amin'ny fametrahana, saingy ny firafitry ny URL-na (ohatra: [subsite.yournetwork.com](http://subsite.yournetwork.com)) dia matetika heverina fa "mety kokoa" na "professionnel" kokoa.

Ny fanamby lehibe indrindra amin'ny fametrahana ny mode subdomain dia ny fandraisana SSL (HTTPS) ho an'ny tambajotra manontolo. Izany no antony satria ny navigateur dia mahita fa ny subdomain dia zavatra misaraka. Noho izany, mila sertifike SSL hafa ianao ho an'ny subdomain tsirairay ao amin'ny tambajotranareo, na karazana sertifike manokana antsoina hoe **Wildcard SSL certificate**. Amin'ny taona vitsivitsy lasa, ny mpamatsy hosting sy ireo panel dia miha lany kokoa amin'ny fanomezana sertifike SSL ary misy izay manome wildcard certificates amin'ny tsindrim-peo, ka mampitony ny fahasamihafana eo amin'ireo roa ireo momba ny fomba fametrahana azy.

Mifanohitra amin'ny mode subdirectory, ireo subsite ao anatin'ny tambajotra mifototra amin'ny subdomain dia heverin'ny search engine ho tranonkala hafa, izay midika fa ny votoaty ao amin'ny subsite iray dia tsy miara-miasa amin'ny fahombiazan'ny SEO (SEO performance) an'ireo subsite hafa mihitsy.

## Ny Super Admin {#the-super-admin}

Ny fametrahana WordPress iray ihany dia ahafahanao manampy mpampiasa tsy misy isan-jato ary manome ireo mpampiasa ireo andraikitra samihafa sy alalana samihafa.

Amin'ny WordPress Multisite, misy karazana mpampiasa vaovao azo apetraka: **ny super admin** – ary misy panel admin vaovao dia azo apetraka koa: **ny network admin panel**.

Araka ny anarany, ny super admin dia manana fahefana lehibe eo amin'ny tambajotra, afaka mitantana ireo subsite rehetra, plugins, themes, izay rehetra!

Rehefa manova ny fametrahana WordPress iray ho multisite ianao, dia ho lasa super admin ho azy ny mpitantana voalohany tamin'ilay tranonkala iray.

Ny plugins sy themes dia azo apetraka na esorina amin'ny alalan'ny network admin panel fa ireo super admin no afaka manao izany. Ny subsite admins kosa dia afaka misafidy ny hanatanteraka na hamoahana ireo plugins na themes ireo raha tsy misy ny super admin an'ny tambajotra mampiasa plugin iray, izay manery azy ho azo ampiasaina mandrakizay ho an'ireo subsite rehetra.

_Fanamari: toa ny fampidirana olona iray ao anatin'ny tambajotra iainana (network) sy ny fanomezana azy ho super admin dia manome fahefana tanteraka amin'ny tambajotranareo izany. Ohatra, ireo super admin hafa dia afaka manala ny maha-super admin anao, izay tena manakana anao tsy hiditra ao anatin'ny panel fitantanana tambajotra iainanao mihitsy. Mba ahafahana mamela ny mpanjifa Ultimate Multisite hanana fifehezana tsara (granular control) momba izay ataon'ireo super admin fanampiny, dia misy add-on iray antsoina hoe Support Agents. Ity add-on ity dia ahafahanao mamorona karazana mpampiasa hafa – agent – izay manana alalana ilaina ihany mba hanatanterahana ny asa ataony ao anatin'ny tambajotra iainana._

## Inona no miaraka eo amin'ny subsites sy tsy miaraka? {#what-is-shared-among-subsites-and-what-is-not}

Tsy niresahantsika teo aloha, iray amin'ireo tombony lehibe indrindra amin'ny WordPress multisite dia ny hoe ny subsites rehetra dia mizara ireo fepetra (configurations), rakitra fototra (core files), themes, plugins, ary ireo rakitra fototra an'ny WordPress.

Na izany aza, misy zavatra izay voafetra tsara isaky ny subsite.

- Ohatra, ny subsite tsirairay dia manana folder uploads manokana. Noho izany, ny zavatra vita avy amin'ny mpampiasa iray ao anatin'ny subsite iray dia tsy azo jerena ao amin'ny subsite hafa.
- Ny subsite tsirairay dia manana panel admin manokana ary afaka mampandeha na manakana plugins na themes raha tsy voafetra ho aktiva tao amin'ny tambajotra iainana izy avy amin'ny super admin iray.
- Ny ankamaro ny database tables dia vita isaky ny subsite, izay midika fa ny posts, comments, pages, settings ary zavatra maro hafa dia voafetra isaky ny subsite.

## Fitantanana mpampiasa ao amin'ny WordPress Multisite {#user-management-on-wordpress-multisite}

Ny lohahevitra sarotra iray momba ny WordPress multisite dia ny fitantanana mpampiasa (user management). Ny user table an'ny WordPress dia iray amin'ireo vitsivitsy izay mizara eo amin'ny subsites rehetra.

Mety hitarika olana izany arakaraka ny zavatra tianao hatao amin'ny tambajotranareo iainana. Ity ohatra etsy ambany ity dia manampy antsika hahatakatra ilay tena mampanahy indrindra.

Fantaro an-tsaina io toe-javatra io:

WordPress multisite réseau iraka WordPress sy manomboka manolotra subsites ho vola isam-bolana ireo olona te hanana boutique e-commerce.

Mba nahazo ny mpanjifa voalohany ianao – John. Namorona toerana ho an'i John tao amin'ny réseau anao, nametraka ny plugin rehetra ilaina, ary namorona mpampiasa ho an'i John mba hahafahany mitantana ny boutique-ny.

Avy eo dia tonga ny mpanjifa faharoa – Alice. Nanao zavatra mitovy ianao ho azy ary manana boutique ihany koa izy tao amin'ny réseau anao.

Ireo roa, i John sy Alice, dia mpanjifanao fa tsy fantany ny hafa. Ny zava-dehibe kokoa, raha misy iray amin'izy ireo mitady ny toerana fivarotana an'ilay hafa, dia tsy misy fomba hahalala hoe ity boutique ity dia ao anatin'ny réseau toerana mitovy.

Indray andro, mila mividy latsaka vaovao i John ary nahita ilay tsara indrindra tao amin'ny boutique an'i Alice. Rehefa nanandray ny fividianana izy, dia nandre hafatra hoe “email efa ampiasaina” no nandre azy, izay tsy mahazatra satria fantatry ny 100% fa voalohany no hitsidihana ny tranokalan'i Alice.

Ilay nitranga dia ny mpampiasa an'i John dia miaraka amin'ny rehetra ao amin'ny réseau izy, ka rehefa nanandray kaonty ho an'ny fividianana tao amin'ny toerana an'i Alice izy, dia hahatsapa ny WordPress fa misy mpampiasa manana adiresy email mitovy efa misy ary hanome hafatra fahadisoana.

_Fanamarihana: Fantatsika hoe ratsy loatra izany raha jerena ny fomba fiasanao, ka manana safidy i Ultimate Multisite izay mampitony ireo fanamarinana mahazatra ho an'ny mpampiasa efa misy, ahafahana mamorona kaonty maro amin'ny alalan'ny adiresy email mitovy. Ny kaonty tsirairay dia mifandray amin'ny subsite iray, ka ny risika fihodina dia voafehy ho kely indrindra. Amin'ilay ohatra etsy ambony, tsy hahazo hafatra fahadisoana i John ary afaka mividy ilay latsaka izy raha tsy misy olana. Ity safidy ity dia antsoina hoe Enable Multiple Accounts, ary azo ampiharina amin'ny Ultimate Multisite → Settings → Login & Registration._

Na dia e na dia iantso, na dia misy ny tabilao ho an'ny mpampiasa iombonana, afaka manampy ireo administrator an'ny subsite na ny super admin no afaka manampy sy mamoaka mpampiasa amin'ireo subsite ireo, ary azo atao koa fa manana andraikitra (roles) samihafa ireo mpampiasa eo amin'ireo subsite hafa.

## Fandraisana an-tsaina momba ny fahombiazana (Performance considerations) {#performance-considerations}

Ny WordPress multisite dia tena mahery rehefa miresaka momba ny isan'ny toerana azo iantohana azy. Azo andrana izany amin'ny fomba ahitana fa ireo serivisy toy ny [WordPress.com](https://WordPress.com), Edublogs ary Campuspress dia mifototra amin'ny multisite ary misy host anisan'izy ireo manome isan-karazaman toerana an'ilay hosting.

Na dia ara-teoria aza, tsy misy fetra ambony ny isan'ny toerana azo iantohana ao anaty instalation WordPress multisite iray, amin'ny fomba azo atao eo amin'ny zava-misy, dia mety miova be ny isan'ny toerana azonao atao ho mandeha tsara arakaraka antony maromaro samihafa: ny fomba fiovan'ny toerana (dynamic) ireo, izay plugin azo ampiasaina amin'ireo subsite, sns.

Ho fitsipika iray, raha tsotra ny tambajotra iainanao dia tsara kokoa. Ny fanomezana lanja ho an'ireo toerana izay tsy tena miova ny votoaty (izay mahatonga azy ireo ho kandidà tsara ho an'ny paikady caching mafy) ary ny fitazomana ny stack plugin ho mora indrindra (vitsy no isan'ny plugin mavitrika dia tsara kokoa) dia afaka manome tombony lehibe amin'ny isan'ny subsite azonao iantohana.

Ny zavatra tsara indrindra dia satria WordPress izany rehetra, ka ny fitaovana izay efa fantatra sy tianao ho an'ny fanatsarana ny fahombiazana dia miasa ihany koa ho an'ny tambajotra multisite.

Ny sakana lehibe amin'ny multisite dia ny database fa raha voaraiko tsara ny zavatra rehetra hafa, dia mety mila toerana vitsivitsy aorian'izay ianao vao mila manantena azy. Na dia izany aza, misy vahaolana azo ampiana tsikelikely amin'izany fotoana (toy ny vahaolana sharding database, ohatra).
