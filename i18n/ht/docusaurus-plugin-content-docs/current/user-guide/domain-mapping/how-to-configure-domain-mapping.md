---
title: Kijan pou Konfigire Map Domèn
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Kijan pou Konfigire Domain Mapping (v2)

_**NOTE ENTRANTA: Artikel sa a refere a Ultimate Multisite v2.x.**_

Younè ki nan pi fò fonksyon yon rezo premium la se kapasite ou ofri kliyan nou yon chans pou yo mete yon top-level domain sou sit yo. Apre tout, ki ki ki pi pwofesyonèl: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) oswa [_**joesbikeshop.com**_](http://joesbikeshop.com)? Se poutèt sa Ultimate Multisite ofri fonksyon sa a ki deja genyen, san bezwen itilize plugin twazyèm pati.

## Kisa se domain mapping?

Kòm non li endike, domain mapping se kapasite ou ofri pa Ultimate Multisite pou pran yon demann pou yon domain koutim epi map demann sa a ak sit la nan rezo a ki gen domèn espesifik la atache l.

### Kijan pou mete up domain mapping sou Rezo Ultimate Multisite ou an

Domain mapping mande kèk konfigirasyon de pati ou pou li ka fonksyone. Bon nou, Ultimate Multisite automate travay difisil la pou ou konsa ou ka fasilman ranpli kondisyon yo.

Pandyan enstalasyon Ultimate Multisite a, wizard la ap kopye epi enstale **sunrise.php** otomatikman nan dlo ki atè pou li. **Wizard la pa pèmèt ou kontinye jiskaske etap sa a konplè.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Sa vle di, yon fwa wizard enstalasyon Ultimate Multisite a fini mete up rezo ou an, ou ka kòmanse domain mapping la imedyatman.

Note ke domain mapping nan Ultimate Multisite pa obligatwa. Ou gen opsyon pou itilize fonksyon domain mapping natif WordPress Multisite oswa nenpòt lòt solisyon domain mapping.

Si ou avez besoin de désactiver le mappage de domaine Ultimate Multisite pour laisser la place à d'autres solutions de mappage de domaine, vous pouvez désactiver cette fonctionnalité dans **Ultimate Multisite > Settings > Domain Mapping**.

![Page des paramètres du mappage de domaine montrant la redirection admin, le message de mappage et les options DNS](/img/config/domain-mapping-settings.png)

Juste en dessous de cette option, vous verrez aussi l'option **Force Admin Redirect** (Forcer la redirection administrateur). Cette option vous permet de contrôler si vos clients pourront accéder à leur tableau de bord administrateur sur leur domaine personnalisé et sous-domaine ou seulement sur l'un des deux.

Si vous sélectionnez **Force redirect to mapped domain** (Forcer la redirection vers le domaine mappé), vos clients ne pourront accéder à leur tableau de bord administrateur que sur leurs domaines personnalisés.

L'option **Force redirect to network domain** (Forcer la redirection vers le domaine réseau) fera exactement le contraire : vos clients n'auront accès à leurs tableaux de bord que sur leur sous-domaine, même s'ils essaient de se connecter sur leurs domaines personnalisés.

Et l'option **Allow access to the admin by both mapped domain domain and network domain** (Autoriser l'accès à l'admin par le domaine mappé et le domaine réseau) leur permet d'accéder à leurs tableaux de bord administrateur tant sur le sous-domaine que sur le domaine personnalisé.

![Menu déroulant Redirection Admin développé montrant les trois options de redirection](/img/config/domain-mapping-redirect-options.png)

Il y a deux façons de mapper un domaine personnalisé. La première est de mapper le nom de domaine depuis le tableau de bord d'administration de votre réseau en tant que super administrateur, et la seconde est via le tableau de bord d'administration du sous-site dans la page compte.

Mais avant de commencer à mapper le domaine personnalisé à l'un des sous-sites de votre réseau, vous devez vous assurer que les **DNS settings** (paramètres DNS) du nom de domaine sont correctement configurés.

###

### S'assurer que les paramètres DNS du domaine sont correctement configurés

Pou yon mapping fonksyone, ou dwe asire ke domèn ou planifye pou map la ap pointer nan adrès IP rezo ou an. Note ke ou bezwen adrès IP rezo a - adrès IP nan domèn kote Ultimate Multisite yo instale - pa adrès IP domèn kreyatif ou vle map la. Pou chèche adrès IP pou yon domèn espesifik, nou sijere w ale [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), pa egzanp.

Pou map domèn an kòrèkteman, ou bezwen ajoute yon **A RECORD** sou konfigirasyon **DNS** ou ki ap pointer nan adrès IP sa a. Jere DNS chanje anpil ant diferan registʁatè domèn, men gen anpil tòtoryèl sou entènèt kouvri bagay sa a si ou chèche " _Creating A Record on XXXX_ " kote XXXX se registʁatè domèn ou (pa egzanp: " _Creating A Record on_ _GoDaddy_ ").

Si ou santi w ap gen pwoblèm pou fè sa fonksyone, **kontakte sipòtè registratè domèn ou** epi yo ap ka ede w ak pati sa a.

Si ou planifye pou ou pèmèt kliyan ou map domèn yo tèm yo, yo ap dwe fè travay la tèm yo menm. Pwote yo nan sistèm sipòtè registratè yo si yo pa kapab kreye A Record la.

### Map non domèn kreyatif kòm Super Admin

Lè ou konekte kòm super admin sou rezo ou, ou ka ajoute epi jere non domèn kreyatif fasil lè ou ale anba **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Sous sa page, ou ou ka klike sou bouton **Add Domain** anwo an se pral montre yon modal window kote ou ka mete epi ranpli **custom domain name**, **the subsite** ou vle aplike custom domain name la pou li, e deside si ou vle mete l kòm **primary domain** oswa non. (note ke ou ka map **multiple domain names to one subsite**).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Malgre ou fin mete tout enfòmasyon an, ou ka klike sou bouton **Add Existing Domain** anba a.

Sa pral kòmanse pwosesis pou verifye epi jwenn enfòmasyon DNS custom domain la. Ou ap wè yon log anba paj la pou ou suiv pwosesis li ap pase. Pwosesis sa ka pran kèk minit pou fini.

Ultimate Multisite v2.13.0 tou kreye rekò domèn anndan otomatikman lè yon nou site ki te kreye sou yon host ki dwe itilize kòm domèn pa sit la (per-site domain). Si host la se domèn prensipal rezo a, oswa youn nan domèn baz fòm checkout ki pataje konfigire sou yon champ **Site URL**, rekò mapé otomatik la ap pase pou domèn baz pataje rete disponib pou chak site ki itilize li.

**Stage** la oswa status la dwe chanje de **Checking DNS** a **Ready** si tout bagay byen configure.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Si ou klike sou non domèn an, ou ap ka wè kèk opsyon la la. Ann gade yo rapidman:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Etap:** Sa etap sa domèn nan ye kounye a. Lè ou mete domèn an premye fwa, li ap gen probablite pou l rete sou etap **Checking DNS**. Pwosesis la ap eseye tout kont ana DNS yo epi konfime ke yo bon. Apre sa, domèn nan pral mete sou etap **Checking SSL**. Ultimate Multisite ap eseye si domèn an gen SSL oubyen non, epi li pral katabite domèn ou kòm **Ready** oubyen **Ready (san SSL)**.

**Site:** Subdomèn ki asosye ak domèn sa a. Domèn ki mapé a ap montre kontni sit espesifik sa a.

**Active:** Ou ka switch opisyon sa a an ou oswa sou pou aktive oubyen deaktive domèn an.

**Is Primary Domain?:** Kliyan ou ka gen plis pase yon sèl domèn mapé pou chak sit. Itilize opsyon sa a pou chwazi si sa se domèn prensipal la pou sit espesifik la.

**Is Secure?:** Men ke Ultimate Multisite ap eseye si domèn an gen sertifikat SSL oubyen non anvan li aktive l, ou ka chwazi manman pou boule domèn nan ak oswa san sertifikat SSL. Note ke si sit entènèt la pa gen sertifikat SSL epi ou eseye fòse li pou boule ak SSL, sa ka bay erè ba ou.

### Map domèn koutim kòm yon subsite itilizatè

Administratè subsite yo ka map domèn koutim soti nan dashboard admin subsite yo tou.

Premye bagay ou dwe fè se asire w ke ou aktive opsyon sa a anba tout **Domain mapping** settings la. Gade imaj anba a.

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Ou ka configure oswa mete opsyon sa a anba nivo **Plan** oubyen opsyon pwodwi sou **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Lè lè youn nan opòtite sa yo aktif epi yon itilizat subsite la pèmèt map non domèn koutim, itilizat subsite a ap wè yon metabox anba paj **Account** ki rele **Domains**.

<!-- Screenshot unavailable: metabox Domains sou paj Account subsite ak bouton Add Domain -->

Itilizat la ka klike sou bouton **Add Domain** epi li pral montre yon fenèt modal ak kèk enstriksyon.

<!-- Screenshot unavailable: modal Add Domain ki montre enstriksyon DNS A-record pou itilizat subsite -->

Lè sa a, itilizat la ka klike sou **Next Step** epi kontinye ajoute non domèn koutim la. Yo ka chwazi tou si sa pral domèn prensipal la oswa ou pa.

<!-- Screenshot unavailable: fòm Add Domain ak chyen domèn koutim ak toggle domèn prensipal -->

<!-- Screenshot unavailable: etap konfimasyon Add Domain ki aktive verifikasyon DNS -->

Klike sou **Add Domain** ap kòmanse pwosesis verifikasyon ak jwenn enfòmasyon DNS non domèn koutim la.

### Sou Synchronizasyon Domèn (About Domain Syncing)

Synchronizasyon Domèn se yon pwosesis kote Ultimate Multisite ajoute non domèn koutim ou a nan kont wè hosting ou kòm yon domèn add-on **pou mapaj domèn yo ka fonksyone**.

Synchronizasyon domèn ap fèt otomatikman si pwove hosting ou gen entegrasyon ak fonksyon mapaj domèn Ultimate Multisite. Kounye a, pwove hosting sa yo se _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ e _Cpanel._

Lè yon entegrasyon pwove hosting aktif, Ultimate Multisite ka tou mete tchemank (enqueue) travay DNS oswa kreyasyon sous-domèn pou sit ki te kreye yo. Si pa gen okenn entegrasyon k ap koute travay sa a, travay background la pral pase pou evite enteriè (no-op queue entries). Kontwòl DNS ak SSL pou domèn mapé kontinye mache atravè pwosesis etap domèn nòmal la.

Ou pral bezwen active sa integration la nan limitasyon Ultimate Multisite anba onglet **Integration**.

![Onglet Integrations nan limitasyon Ultimate Multisite montre lòf wè prestè sèvis wèb](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Lien Konfigirasyon prestè sèvis wèb sou onglet Integrations -->

_Note sa ke si prestè sèvis wèb ou a pa nan lòf ki te mansyone anwo, **ou pral bezwen fè yon senkronizasyon oswa ajoute non domèn nan** manman pou kont ou nan kont sèvis wèb la._
