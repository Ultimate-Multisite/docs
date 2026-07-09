---
title: Ki sa se WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Ki sa WordPress Multisite? {#what-is-wordpress-multisite}

Nan kòrè WordPress la gen yon fonksyon ki rele ‘Multisite’ (Multisite). Fonksyon sa a te vini nan 2010 lè lansman WordPress 3.0. Depi la, li te gen plizyè revizyon pou ajoute nouvo fonksyon epi fè sekirite pi fò.

Nan esans, ou ka panse ke yon WordPress multisite se sa: Yon Université kenbe yon sèl enstalasyon WordPress men chak fakilte kenbe sit WordPress li pwòp.

##

## Ki sa Multisite WordPress ye an egzakti? {#what-exactly-is-wordpress-multisite}

Multisite se yon fonksyon nan WordPress ki pèmèt plizyè sit pataje yon sèl enstalasyon WordPress. Lè ou aktive multisite, sit WordPress orijinal la chanje pou sipò sa ki souvan rele **rezo sit** (network of sites).

Rezo sa a pataje sistèm fichye a (sa vle di **plugins ak thèmes yo tou pataje**), baz done a (database), fichye kò WordPress la, wp-config.php, elatriye.

Sa vle di ke ou bezwen fè yon sèl update pou WordPress, thèmes, epi plugins pou tout sit nan rezo ou an paske yo pataje menm fichye sou sistèm fichye a.

Fakta sa a se youn nan avantaj prensipal multisite a, paske li pèmèt ou grandi kantite sit ou ki jere pandan ou kenbe kantite travay ou bezwen fè pou kenbe sit kliyan ou yo menm.

##

## Sous-domèn oswa Sous-dètri? (Subdomain or Subdirectory?) {#subdomain-or-subdirectory}

Gen de modèl pou w mete WordPress multisite a mache – epi ou dwe chwazi youn lè ou ap chanje enstalasyon WordPress regilye ou an enstalasyon multisite:

**Sous-domèn:** egzanp: [site.domain.com](http://site.domain.com)

…oswa

**Sous-dètri:** egzanp: [yourdomain.com/site](http://yourdomain.com/site)

Chak modèl gen avantaj ak desavantaj ou dwe konsidere lè w ap pran desizyon sa a.

Yon bagay ki enpòtan pou ou note: apre ou fè desizyon an, chanje rezo ou de sous-dossier (subdirectory) a sous-domaine (subdomain) oswa invers la difisil anpil – sitou si ou deja gen yon ti gwoup sit ki kreye.

Anvan ou pran desizyon sa a, men kèk pwen pou ou kenbe nan tèt ou:

**Mod Sous-dossier (Subdirectory Mode)** se mod ki pi fasil pou configure ak swiv. Sa rive paske tout sit yo se jis chemen ki atache nan domèn prensipal la (pa egzanp [yourdomain.com/subsite](http://yourdomain.com/subsite)). Kòm rezilta, ou sèlman bezwen **yon sertifikat SSL** pou domèn prensipal la epi sa ap kouvri tout rezo a.

An menm tan, ak pafwa paske estrikti URL li, Google ak pi gwo motè chèche lòt bagay ap konsidere tout subsit yo nan rezo ki baze sou sous-dossier ou tankou yon sèl sit gwo. Kòm rezilta, kontni ki ajoute nan subsit yo pa kliyan ou ka afekte pèfòmans SEO sit destinasyon ou la, pa egzanp. Nivo enpak la se bagay ki gen debat epi gen yon argiman pou di ke gen sa jan sa a ka benefik pou pèfòmans SEO.

**Mod Sous-domaine (Subdomain Mode)** pi konplike pou configure, men estrikti URL li (pa egzanp [subsite.yournetwork.com](http://subsite.yournetwork.com)) anjeneral parèt "pi pwofesyonèl".

Yon nan yon pati nan defi prensipal pou mete mode subdomain se SSL coverage (HTTPS) pou tout rezo a. Sa vini paske browser yo konsidere subdomain yo kòm entite ki separe. Kòm rezilta sa, ou pral bezwen yon sertifikat SSL diferan pou chak subdomain sou rezo ou an, oswa yon kalite sertifikat espesyal ki rele **Wildcard SSL certificate**. Nan dènye ane yo, hosting providers ak panel yo ap amelyore pwodwi yo nan fason propvize SSL epi kèk yo ofri wildcard certificates kote ou ka pran li nan yon ti klike, sa k ap fè distans ant de mod sa a anpil pi piti pou mete l an.

Kontrè a mode subdirectory, subsit sou rezo ki baze sou subdomain yo konsidere pa motè chèche yo kòm sit entèn diferan, sa vle di kontni ki genyen sou yon subsite pa fè anyi nan pèfòmans SEO lòt subsit yo.

## The Super Admin (Super Admin) {#the-super-admin}

Enstalasyon WordPress sèl-sit la pèmèt ou ajoute yon kantite wèz unlimited ak bay moun sa yo diferan wòl itilizat ak diferan pèmisyon.

Nan WordPress Multisite, yon nou kalite itilizat nou genyen louvri: **the super admin** – epi yon nou panel admin nou genyen louvri: **the network admin panel**.

Kòm non li endike, super admin an gen pouvwa sou rezo a, li kapab jere tout subsit yo, tout plugin yo, tout theme yo, tout bagay!

Yon fwa ou konvèti enstalasyon WordPress sèl-sit ou a nan multisite, admin orijinal sit la ap monte otomatikman pou vin super admin.

Plugin ak theme yo ka sèlman enstale oswa desante sou network admin panel pa super admins yo. Apre sa, admin subsit yo ka chwazi kisa ki pral aktive oswa desactive plugin oswa theme sa yo, men si super admin rezo a active yon plugin, sa fòse li rete aktif pou tout subsit toujou.

_Note: kòm ou wè, menm si ou invite yon moun nan rezo ou epi ou bay li status super admin, sa bay itilizatè a kontwòl total sou tout rezo ou. Kòm egzanp, lòt super admin yo ka retire status super admin ou, ki efektivman bloke ou nan panel admin rezo ou menm. Pou pèmèt kliyan Ultimate Multisite gen kontwòl granilye sou sa ki ka fè lòt super admin yo, nou gen yon add-on rele Support Agents. Add-on sa la pèmèt ou kreye yon lòt kalite itilizatè – yon agent – ak sèl permisyon yo bezwen pou fè travay yo nan rezo a._

## Sa ki pataje ant subsites ak sa ki pa pataje {#what-is-shared-among-subsites-and-what-is-not}

Kòm nou te mansyone anvan, youn nan avantaj kle WordPress multisite la se ke tout subsites yo pataje menm konfigirasyon yo, fichye kò (core files), thèm (themes), plugin yo, fichye kò WordPress, elatriye.

Sepandan, gen kèk eleman ki byen limite pou chak subsite.

- Pa egzanp, chak subsite jwenn li pwòp foldè anviwònman (uploads folder). Kòm rezilta sa a, dokiman yo fè pa itilizatè yon subsite espesifik pa ka aksede sou lòt subsite.
- Chak subsite gen li pwòp panel admin li epi li ka aktive oswa deaktive plugin oswa thèm men si yo te aktif nan rezo a pa yon super admin.
- Pifò tab baz done (database tables) kreye pou chak subsite, sa vle di post, komen, paj, konfigirasyon, ak plis bagay yo limite pou chak subsite.

## Jere itilizatè sou WordPress Multisite {#user-management-on-wordpress-multisite}

Yon sijè ki chache nan WordPress multisite se jere itilizatè (user management). Tab itilizatè WordPress la se youn nan kèk tab ki pataje ant tout subsites yo.

Ranjman sa a ka lakòz gen kèk pwoblèm selon sa ou planifye pou bati ak rezo ou. Egzanp anba la ede montre pi gwo pwoblèm nan.

Imajine senaryo sa a:

Ou kreye yon rezo WordPress multisite epi ou kòmanse ofri subsit pou yon senyat chak mwa pou moun ki vle gen yon magazen e-commerce.

Ou jwenn premye kliyan ou – John. Ou kreye yon sit pou John sou rezo ou a, enstale tout plugin ki nesesè yo, epi apre sa ou kreye yon itilizatè pou John pou li ka jere magazen li.

Lè dezyèm kliyan la vini – Alice. Ou fè menm bagay la pou li e kounye a li gen yon magazen sou rezo ou a tou.

John ak Alice se de kliyan ou, men yo pa konnen youn lòt. Pi enpòtan an, si youn nan yo vizite sit magazen lòt la, pa gen fason pou w konnen ke magazen sa a ki bay sou menm rezo sit yo.

Yon jou, John bezwen achte yon nou par chaj, epi li jwenn yo nan magazen Alice. Lè li ap eseye fini achte a, li resevwa yon mesaj erè "email deja itilize", ki se bagay ki pa bon paske John asire 100% ke se premye fwa li vizite sit Alice la.

Sa k ap pase la se ke itilizatè John pataje sou tout rezo a; lè li eseye kreye yon kont pou chwazi nan magazen Alice, WordPress pral detekte ke gen yon itilizatè ak menm adrès imèl ki deja egziste epi li pral fè yon erè.

_Nòt: Nou konprann kijan sa ka vin move selon itilizasyon ou a, kidonk Ultimate Multisite gen yon opsyon ki pèvèl chek regular pou itilizatè ki egziste la, ki pèmèt kreye plizyè kont ki sèvi ak menm adrès imèl la. Chak kont se konekte ak yon subsit, sa k ap redwi risk kolizyon an nan yon nivo minimize. Nan egzanp anwo a, John pa t'ap jwenn mesaj erè epi li ta ka achte chaj yo san pwoblèm. Opsyon sa a rele Enable Multiple Accounts, e li ka aktive sou Ultimate Multisite → Settings → Login & Registration._

Menmwen ke menm si tabli itilizat la pa gen pwoblèm, paske admin subsite yo oswa super admin yo ka ajoute epi retire itilizat yo nan subsite yo, e yo ka gen diferan wòl itilizat sou diferan subsite.

## Konsiderasyon pèfòmans (Performance considerations) {#performance-considerations}

WordPress multisite la trè pwisan lè nou pale de kantite sit ki li kapab sipòte. Nou ka teste sa pa fasil paske [WordPress.com](https://WordPress.com), Edublogs, ak Campuspress se tout sèvis ki baze sou multisite e chak anjeneral gen anpil sit.

Malgre ke nan teori pa gen chans maksimòm kantite sit ou kapab bay yon sèl enstalasyon WordPress multisite, nan pratik kantite sit ou ka dirije byen ka varye anpil selon plizyè faktè diferan: kijan sit yo dinamik ye, ki plugin yo disponib pou subsite yo, elatriye.

Kòm règ jeneral, pi senp rezo w la, pi bon. Fè preferans pou sit kote kontni a pa twò dinamik (sa fè yo bon kandidat pou estrateji cache agresif) epi kenbe stack plugin yo tankou pi liy la posib (pi piti kantite plugin aktif la pi byen). Sa ka grandi anpil kantite subsite ou kapab bay.

Pi bon bagay la se paske tout sa se WordPress la, menm zouti ou deja konnen e renmen pou amelyore pèfòmans yo ap mache tou pou yon rezo multisite.

Gwo bouchon (bottleneck) pou multisite a se baz done (database), men si tout lòt bagay byen configure, li ka pran kèk mil sit anvan ou bezwen enkyete sou li. Menm lè sa a, gen solisyon ki kapab ajoute etap pa etap la (tankou solisyon sharding baz done, pa egzanp).
