---
title: Kijan pou Konfigire Katografye Domèn
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Kijan pou Konfigire Kat Domèn (v2) {#how-to-configure-domain-mapping-v2}

_**NÒT ENPÒTAN: Atik sa a refere ak Ultimate Multisite vèsyon 2.x.**_

Youn nan fonksyonalite ki pi pisan nan yon rezo premium se kapasite pou ofri kliyan nou yo yon chans pou atache yon domèn nivo siperyè ak sit yo. Apre tou, kiyès ki parèt pi pwofesyonèl: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) oswa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Se poutèt sa Ultimate Multisite ofri fonksyonalite sa a entegre, san ou pa bezwen itilize plugins twazyèm pati.

## Kisa kat domèn ye? {#whats-domain-mapping}

Jan non an sijere, kat domèn se kapasite Ultimate Multisite ofri pou pran yon demann pou yon domèn pèsonalize epi matche demann sa a ak sit ki koresponn lan nan rezo a ki gen domèn patikilye sa a atache.

### Kijan pou mete kat domèn sou rezo Ultimate Multisite ou a {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Kat domèn mande kèk konfigirasyon bò kote pa ou pou li fonksyone. Erezman, Ultimate Multisite otomatize travay difisil la pou ou pou ou ka fasilman satisfè egzijans yo.

Pandan enstalasyon Ultimate Multisite, asistan an ap otomatikman kopye epi enstale **sunrise.php** nan katab ki deziyen an. **Asistan an p ap pèmèt ou kontinye jiskaske etap sa a fini**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Sa vle di yon fwa asistan enstalasyon Ultimate Multisite la fin konfigire rezo ou a, ou ka kòmanse kat domèn pèsonalize a touswit.

Remake kat domèn nan Ultimate Multisite pa obligatwa. Ou gen yon opsyon pou itilize fonksyon kat domèn natif natal WordPress Multisite oswa nenpòt lòt solisyon kat domèn.

Si ou ta bezwen dezaktive kat domèn Ultimate Multisite pou bay lòt solisyon kat domèn plas, ou ka dezaktive fonksyonalite sa a anba **Ultimate Multisite > Settings > Domain Mapping**.

![Paj paramèt Kat Domèn ki montre redireksyon admin, mesaj kat ak opsyon DNS](/img/config/domain-mapping-settings.png)

Jis anba opsyon sa a, ou ka wè tou opsyon **Force Admin Redirect**. Opsyon sa a pèmèt ou kontwole si kliyan ou yo ap kapab jwenn aksè ak admin dashboard yo ni sou domèn pèsonalize yo ni sou soudomèn yo, oswa sèlman sou youn ladan yo.

Si ou chwazi **Force redirect to mapped domain** , kliyan ou yo ap sèlman kapab jwenn aksè ak admin dashboard yo sou domèn pèsonalize yo.

Opsyon **Force redirect to** **network domain** lan ap fè egzakteman opoze a - kliyan ou yo ap sèlman gen dwa jwenn aksè ak dashboards yo sou soudomèn yo, menm si yo ap eseye konekte sou domèn pèsonalize yo.

Epi opsyon **Allow access to the admin by both mapped domain domain and network domain** lan pèmèt yo jwenn aksè ak admin dashboards yo ni sou soudomèn nan ni sou domèn pèsonalize a.

![Meni deroulan Redireksyon Admin ki louvri epi ki montre twa opsyon redireksyon yo](/img/config/domain-mapping-redirect-options.png)

Gen de fason pou kat yon domèn pèsonalize. Premye a se lè ou kat non domèn nan soti nan admin dashboard rezo ou a kòm super admin, epi dezyèm nan se atravè admin dashboard sou-sit la anba paj account la.

Men anvan ou kòmanse kat domèn pèsonalize a ak youn nan sou-sit yo nan rezo ou a, w ap bezwen asire ke **paramèt DNS** non domèn nan byen konfigire.

###

### Asire paramèt DNS domèn nan byen konfigire {#making-sure-the-domain-dns-settings-are-properly-configured}

Pou yon kat fonksyone, ou bezwen asire domèn ou planifye pou kat la ap pwente sou adrès IP Rezo ou a. Remake ou bezwen adrès IP Rezo a - adrès IP domèn kote Ultimate Multisite enstale a - pa adrès IP domèn pèsonalize ou vle kat la. Pou chèche adrès IP yon domèn espesifik, nou sijere ale sou [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), pa egzanp.

Pou kat domèn nan kòrèkteman, ou bezwen ajoute yon **A RECORD** nan konfigirasyon **DNS** ou a ki pwente sou **adrès IP** sa a. Jesyon DNS varye anpil ant diferan anrejistrè domèn, men gen anpil leson patikilye sou entènèt ki kouvri sa si ou chèche " _Creating A Record on XXXX_ " kote XXXX se anrejistrè domèn ou (egz.: " _Creating A Record on_ _GoDaddy_ ").

Si ou gen difikilte pou fè sa fonksyone, **kontakte sipò anrejistrè domèn ou** epi yo ap kapab ede ou ak pati sa a.

Si ou planifye pou pèmèt kliyan ou yo kat pwòp domèn pa yo, yo pral oblije fè travay pati sa a poukont yo. Voye yo bò sistèm sipò anrejistrè yo si yo pa ka kreye A Record la.

### Kat non domèn pèsonalize kòm Super Admin {#mapping-custom-domain-name-as-super-admin}

Lè ou konekte kòm super admin sou rezo ou a, ou ka fasilman ajoute epi jere non domèn pèsonalize lè ou ale anba **Ultimate Multisite > Domains**.

![Paj lis Domèn nan Ultimate Multisite](/img/admin/domains-list.png)

Anba paj sa a, ou ka klike sou bouton **Add Domain** anlè a epi sa ap ouvri yon fenèt modal kote ou ka mete epi ranpli **non domèn pèsonalize** a, **sou-sit la** ou vle aplike non domèn pèsonalize a sou li, epi deside si ou vle mete li kòm non **domèn prensipal** la oswa non (remake ou ka kat **plizyè non domèn ak yon sèl sou-sit**).

![Modal Add Domain ak non domèn, selektè sit ak bouton aktive domèn prensipal](/img/admin/domain-add-modal.png)

Apre ou fin mete tout enfòmasyon yo, ou ka klike sou bouton **Add Existing Domain** anba a.

Sa ap kòmanse pwosesis verifikasyon ak rekiperasyon enfòmasyon DNS domèn pèsonalize a. Ou ap wè tou yon jounal anba paj la pou ou swiv pwosesis li ap pase ladan an. Pwosesis sa a ka pran kèk minit pou fini.

Ultimate Multisite v2.13.0 kreye tou anrejistreman domèn entèn lan otomatikman lè yo kreye yon nouvo sit sou yon host ki ta dwe trete kòm yon domèn pou chak sit. Si host la se domèn prensipal rezo a, oswa youn nan domèn baz fòm checkout pataje yo ki konfigire sou yon chan **URL sit**, yo sote anrejistreman domèn ki lye otomatik la pou domèn baz pataje a rete disponib pou chak sit ki sèvi avè l.

Lè yon kliyan anrejistre yon nouvo domèn atravè Domain Seller v1.3.0 oswa pi nouvo, Ultimate Multisite otomatikman lye domèn ki anrejistre a ak sit rezo kliyan an pa defo. Administratè yo pa bezwen ajoute yon anrejistreman domèn ki lye apa ankò apre yon enskripsyon reyisi, sòf si yo vle ajiste opsyon tankou drapo domèn prensipal la, eta aktivasyon an, oswa jesyon SSL.

**Etap** la oswa estati a ta dwe chanje soti nan **Ap tcheke DNS** pou rive **Pare** si tout bagay byen konfigire.

<!-- Screenshot unavailable: Ranje domèn ki montre etap Ap tcheke DNS nan lis domèn yo -->

<!-- Screenshot unavailable: Ranje domèn ki montre etap Pare ak endikatè estati vèt la -->

Si ou klike sou non domèn nan, ou pral kapab wè kèk opsyon ladan l. Ann fè yon ti gade rapid sou yo:

![Paj detay domèn ak bouton etap, sit, aktif, prensipal ak SSL](/img/admin/domain-edit.png)

**Etap:** Sa a se etap kote domèn nan ye. Lè ou fèk ajoute domèn nan, li pral pwobableman nan etap **Ap tcheke DNS**. Pwosesis la pral tcheke antre DNS yo epi konfime yo kòrèk. Apre sa, yo pral mete domèn nan nan etap **Ap tcheke SSL**. Ultimate Multisite pral tcheke si domèn nan gen SSL oswa non epi li pral klase domèn ou kòm **Pare** oswa **Pare (san SSL)**.

**Sit:** Soudomèn ki asosye ak domèn sa a. Domèn ki lye a pral montre kontni sit espesifik sa a.

**Aktif:** Ou ka aktive oswa dezaktive opsyon sa a pou aktive oswa dezaktive domèn nan.

**Èske se Domèn Prensipal?:** Kliyan ou yo ka gen plis pase yon domèn ki lye pou chak sit. Sèvi ak opsyon sa a pou chwazi si sa a se domèn prensipal pou sit espesifik la.

**Èske li Sekirize?:** Menm si Ultimate Multisite tcheke si domèn nan gen yon sètifika SSL oswa non anvan li aktive l, ou ka chwazi manyèlman pou chaje domèn nan avèk oswa san yon sètifika SSL. Remake si sit entènèt la pa gen yon sètifika SSL epi ou eseye fòse l chaje ak SSL, sa ka ba ou erè.

### Lye non domèn pèsonalize kòm itilizatè sou-sit {#mapping-custom-domain-name-as-subsite-user}

Administratè sou-sit yo kapab lye non domèn pèsonalize tou depi nan dashboard admin sou-sit yo.

Premyèman, ou bezwen asire ou aktive opsyon sa a anba paramèt **Lyezon domèn** yo. Gade ekran an anba a.

<!-- Screenshot unavailable: Paramèt lyezon domèn ki pèmèt itilizatè sou-sit yo lye domèn atravè bouton Customer DNS Management -->

Ou kapab mete oswa konfigire opsyon sa a tou nan nivo **plan** oswa opsyon pwodwi sou **Ultimate Multisite > Pwodwi**.

![Seksyon Domèn Pèsonalize sou paj modifye pwodwi a](/img/config/product-custom-domains.png)

Lè nenpòt nan opsyon sa yo aktive epi yon itilizatè sou-sit gen pèmisyon pou lye non domèn pèsonalize, itilizatè sou-sit la ta dwe wè yon metabox anba paj **Account** la ki rele **Domèn**.

<!-- Screenshot unavailable: Metabox Domèn sou paj Account sou-sit la ak bouton Ajoute Domèn -->

Itilizatè a ka klike sou bouton **Ajoute Domèn** nan epi li pral ouvri yon fenèt modal ak kèk enstriksyon.

<!-- Screenshot unavailable: Modal Ajoute Domèn ki montre enstriksyon DNS A-record pou itilizatè sou-sit yo -->

Apre sa, itilizatè a ka klike sou **Pwochen Etap** epi kontinye pou ajoute non domèn pèsonalize a. Yo ka chwazi tou si sa a pral domèn prensipal la oswa non.

<!-- Screenshot unavailable: Fòm Ajoute Domèn ak chan non domèn pèsonalize ak bouton domèn prensipal -->

<!-- Screenshot unavailable: Etap konfimasyon Ajoute Domèn ki deklanche verifikasyon DNS -->

Klike sou **Ajoute Domèn** ap kòmanse pwosesis pou verifye epi rekipere enfòmasyon DNS domèn pèsonalize a.

### Konsènan senkronizasyon domèn {#about-domain-syncing}

Senkronizasyon domèn se yon pwosesis kote Ultimate Multisite ajoute non domèn pèsonalize a nan kont hosting ou kòm yon domèn anplis **pou lyezon domèn nan fonksyone**.

Senkronizasyon domèn fèt otomatikman si founisè hosting ou a gen entegrasyon ak fonksyon lyezon domèn Ultimate Multisite la. Kounye a, founisè hosting sa yo se _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ ak _Cpanel._

Lè yon entegrasyon founisè host aktif, Ultimate Multisite kapab mete tou travay kreyasyon DNS oswa soudomèn bò founisè a nan keu pou sit ki fèk kreye yo. Si pa gen okenn entegrasyon k ap koute travay sa a, travay an aryè-plan an sote pou evite antre keu ki pa fè anyen. Tchèk DNS ak SSL pou domèn ki lye yo kontinye kouri atravè pwosesis nòmal etap domèn nan.

Ou pral bezwen aktive entegrasyon sa a nan paramèt Ultimate Multisite anba onglet **Entegrasyon** an.

![Onglet Entegrasyon nan paramèt Ultimate Multisite ki montre founisè hosting yo](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Lyen Konfigirasyon founisè hosting sou onglet paramèt Entegrasyon yo -->

_Remake si founisè hosting ou a pa youn nan founisè sa yo mansyone pi wo a,**ou pral bezwen senkronize oswa ajoute non domèn nan manyèlman** nan kont hosting ou._
