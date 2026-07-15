---
title: Konsepsyon Baz
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Konseps Basic

Pou yon nouvo itilizat WordPress Multisite epi pou yon moun kòmanse itilize Ultimate Multisite la, gen anpil mo ak fraz nou dwe aprann anvan. Aprann yo se yon bagay enpòtan paske ou pral bezwen konprann platfòm lan e kijan li fonksyone ansanm.

Nan atik sa a, nou pral eseye defini epi eksplike kèk konsèp kle nan WordPress. Gen kèk ki pi rele pou itilizat yo, lòt ki pou devlopè yo, e genyen kèk ki pou de toude.

## WordPress Multisite {#wordpress-multisite}

**Multisite** WordPress se yon kalite enstalasyon WordPress k ap pèmèt ou kreye epi jere rezo anpil sit entèn nan yon sèl dashboard WordPress. Ou ka jere tout bagay tankou kantite sit yo, fonksyon yo, thèm yo, ak wòl itilizat yo. Li posib pou jere senkè e milti sit.

## Rézo (Network) {#network}

Nan kont WordPress, rezo multisite se kote ou ka jere anpil **subsite** soti nan yon sèl dashboard. Men ke kreye yon rezo multisite diferan ant founisè wèb yo, men rezilta final la se anjeneral kèk direksyone adisyonèl nan fichye **wp-config.php** pou fè WordPress konnen li ap fonksyone nan mod sa a espesifik la.

Gen plizyè diferans klè ant yon rezo multisite ak yon enstalasyon WordPress ki pa gen okenn sit endepandan, nou pral diskite yo briitman.

## Bazab Donn (Database) {#database}

Yon bazab don se yon koleksyon done ki estriktire epi òganize. Nan terminoloji kompyèti, bazab don refere a lojisyèl ki itilize pou bay ak òganize done. Panse a kòm yon kabinet fichye kote ou mete done nan diferan seksyon yo rele tab (tables).

WordPress Multisite itilize yon sèl bazab don e chak subsite jwenn li pwòp tab yo ak id blog la nan prefiks la, sa vle di ankò ou mete yon enstalasyon rezo a epi ou kreye yon subsite, ou dwe gen tab sa yo:

_wp_1_options_ - tab options table pou premye sous-site

_wp_2_options_ - tab options table pou dezyèm sous-site

## Fournisseur d'hébergement (Hosting provider) {#hosting-provider}

Yon fournisseur d'hébergement se yon konpayi ki pèmèt biznis ak moun fè sit entènèt yo disponib sou World Wide Web la. Servis ki bay yo pa menm, men yo gen ladan konsepsyon sit entènèt, espas pou estoke sou yon host, e koneksyon ak Entènèt la.

## Domèn (Domain) {#domain}

Yon non domèn se adrès moun itilize pou vizite sit ou a. Li di browser kote li dwe chèche sit ou an. Men tankou yon adrès liy, yon domèn se jan moun vizite sit w an entènèt la. E menm jan ak gen yon chaj nan devan magazen ou. Si ou vle vizite sit nou an, ou pral oblije tape adrès web nou an sou adrès browser ou a ki se [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, kote [**ultimatemultisite.com**](http://ultimatemultisite.com) se non domèn nan.

## Sous-domèn (Subdomain) {#subdomain}

Yon sous-domèn se yon kalite pyot sit anba domèn prensipal la, men olye pou itilize foldè pou òganize kontni sou yon sit entènèt, li kreye yon sit ki gen pwòp li. Li prezante kòm [**https://site1.domain.com/**](https://site1.domain.com/) kote _site1_ se non sous-domèn an e [_domain.com_](http://domain.com) se domèn prensipal la.

## Sous-dòdir (Subdirectory) {#subdirectory}

Yon sous-dòdir se yon kalite pyot sit anba yon domèn raize ki itilize foldè pou òganize kontni sou yon sit entènèt. Yon sous-dòdir se menm jan ak yon sous-foldè e non yo ka itilize ansanm. Li prezante kòm [**https://domain.com/site1**](https://domain.com/site1) kote _site1_ se non sous-dòdir la e [_domain.com_](http://domain.com) se domèn prensipal la.

## Sous-sit (Subsite) {#subsite}

Subsite se yon sit ki genyen sou rezo Multisite ou kreye. Li ka vin **subdomain** oswa **subdirectory** selon kijan instalasyon WordPress Multisite ou configure.

## Super Admin {#super-admin}

Yon WordPress Super Admin se yon kalite itilizat ki gen tout kapasite pou jere tout subsit yo nan yon rezo Multisite. Pou itilizat Multisite, li se **nivo aksè ki pi wo** ou ka bay aplikasyon WordPress ou a.

## Plugin {#plugin}

An jeneral, yon plugin se yon gwoup kòd ki ajoute fonksyonalite ekstra sou sit WordPress ou an. Sa ka senp tankou chanje logo login ou oswa konplike tankou ajoute fonksyonalite e-commerce. _Woocommerce_ ak _Contact Form_ se egzanp de plugin.

Sou yon WordPress Multisite, plugin yo sèlman ka enstale nan dashboard admin rezo a pa Super Admin an. Admins subsit yo sèlman ka aktive epi desaktive plugin nan subsit yo.

## Themes {#themes}

Yon WordPress theme se gwoup fichye (_grafik, style sheets, ak kòd_) ki di aparans jeneral sit la. Li bay tout estilify front-end tankou estil font, layout paj, koulè, elatriye.

Menm jan ak plugin, themes nan WordPress Multisite sèlman ka enstale pa Super Admin epi yo ka aktive sou nivo subsit la pa admins subsit yo.

## Site Template {#site-template}

**Site Template** se yon sit baz ki ka itilize kòm baz lè ou ap kreye nouvo sit nan rezo ou an.

Sa vle di ou ka kreye yon sit baz, aktive diferan plugin, mete yon theme aktif, epi personalize li jan ou vle. Lè kliyan ou kreye kont la, olye pou yo jwenn yon sit WordPress de fèt san okenn kontni ki gen sans ladan l, yo ap jwenn yon kopi sit baz ou a ak tout personalizasyon ak kontni yo deja mete la.

## Domain Mapping {#domain-mapping}

**Domain mapping** ak WordPress se se yon fason pou redirekte itilizat yo nan sit ki kòrèk, atravè adrès yon sit entènèt la. Nan yon WordPress Multisite, subsit yo kreye lè w itilize yon sous (subdirectory) oswa yon sous-domèn (subdomain). Domain mapping la pèmèt itilizat subsit yo itilize yon top-level domain tankou [**joesbikeshop.com**](http://joesbikeshop.com) pou fè adrès sit la parèt pi pwofesyonèl.

## SSL {#ssl}

SSL vle di **Secure Sockets Layer**. Se yon sertifikat dijital ki valide idantite yon sit entènèt epi li pèmèt koneksyon enkripte (encrypted connection). Jodi a, li itilize kòm teknoloji estanda pou kenbe koneksyon entènèt an sekirite epi pwoteje nenpòt done sensitif ki ap voye ant de sistèm. Sa ede anpeche krimine yo li oswa modifie nenpòt enfòmasyon ki te transfere, menm detay pèsonèl potansyèl yo. Browser modèn mande SSL, sa fè li esansyèl lè w ap kreye epi opere yon sit entènèt.

## Media {#media}

Media se imaj, souf, videyo, ak lòt fichye ki fòme yon sit entènèt la.

Sit rezo (network sites) pataje yon sèl baz done (database) nan WordPress Multisite a, yo kenbe chemen septe sou sistem fichye (filesystem) pou fichye media yo.

Lòk WordPress estanda (`wp-content/uploads`) rete menm; sepandan, chemen li chanje pou reflechi ID inik sit rezo a. Konsekwentman, fichye media pou yon sit rezo parèt kòm `wp-contents/uploads/site/[id]`.

## Permalinks {#permalinks}

Permalinks se URL pèmanan (permanent URLs) pou chak pòs blog oswa paj ou nan sit la. Permalinks yo rele tou **pretty links**. Pa defo, URL WordPress itilize fòma query string ki sanble tankou sa a:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite se yon plugin WordPress, ki fèt pou enstalasyon WordPress Multisite, ki chanje enstalasyon WordPress ou an yon rezo sit premium – tankou [WordPress.com](https://WordPress.com) – ki pèmèt kliyan yo kreye sit yo atravè bay frè mensyèl, kwatè oswa annivè. (Ou ka kreye plan gratis tou.)

## Checkout Form (Fòm Peman) {#checkout-form}

Checkout Form se yon fòm lòd ki gen youn etap oswa plizyè etap k ap gen rapò ak kreasyon subsite, membwa, ak kont itilizatè atravè registrasyon Ultimate Multisite. Li konsi nan diferan chèf ak fòm peman ke yon itilizatè dwe soumèt pandan pwosesis kay la pou li ka senpòte anrejistreman an.

## Webhook (Webhook) {#webhook}

Yon webhook (ki rele tou web callback oswa HTTP push API) se yon fason pou yon aplikasyon bay lòt aplikasyon enfòmasyon an tan reyèl. Yon webhook voye done nan lòt aplikasyon yo jan yo rive, sa vle di ou jwenn done a tout bon moman.

**Ultimate Multisite webhooks** ouvè infinit chans, ki pèmèt admin rezo fè tout kalite entegrasyon ki ka sanble kozmè men itil, sitou si li itilize ansanm ak sèvis tankou _Zapier_ ak IFTTT_.

## Events (Evènman) {#events}

Yon Event se yon aksyon ki rive sou rezilta aksyon yon itilizatè oswa lòt sous, tankou yon klike souris. Ultimate Multisite kenbe yon rap ou tout evènman ak log ki ap pase nan tout rezo ou an. Li swiv diferan aktivite ki rive nan multisite ou a, tankou chanjman plan.
