---
title: Conas aistriú a chur ar fáil an mhaithrún domáin
sidebar_position: 6
_i18n_hash: 53ce91dcbf4f1046b0f74271decfcb77
---
# Conas an Mapeadh Domáin (v2)

_**NOTE CRUCIAL: Tá an curte seo ag curte ar Ultimate Multisite version 2.x.**_

Is deán is fearr-chúram is fearr-chúram is éadúil de chuid na ngrúpaí le feic an am a thabhairt do chliantanna a bheith ag teacht ar domáin top-level ar na siopa. Nach bhfuil sé an-dúil: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) nó [_**joesbikeshop.com**_](http://joesbikeshop.com)? Is é sin a dhéanamh ar Ultimate Multisite, gan an taitneamh ag úsáid pluginí treoir.

## Cad é domáin mapping?

Mar a bhíonn an t-aonán ag curte, is domáin mapping is é an fhiosca a thabhairt de Ultimate Multisite chun cur isteach caidreamh ar domáin áitiúil agus a mapáil sin ar an siopa atá ag an grúpa le domáin a bheith ag teacht.

### Conas a chur i gceart domáin mapping ar do Grúpa Ultimate Multisite

Is é domáin mapping ag cur fáil ar do chuid chun é a bheith ag eolais. Go raibh maith agat, tá Ultimate Multisite ag cur an oibríochta go léir ar fáil leat chun na ríomhpháirtí a dhéanamh go héifeachtach.

Aghré sin, ag cur Ultimate Multisite i gceart, beidh an mhaothair ag coplú agus ag cur isteach **sunrise.php** i ardán a thugtar. **Ndiúlaterfidh an mhaothair agat a bheith ag teacht go dtí an áit seo.**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Is é sin, nach bhfuil sé ag cur i gceart domáin mapping ar Ultimate Multisite. Tá tús maidir le cabhrú a bheith agat chun úsáid an fhoinnse WordPress Multisite nó aon soluín eile domáin mapping a bheith agat.

An bhfuil tú ag iarraidh an mhaith agat a ghlúint (disable) an mapping deomáin Ultimate Multisite chun soluistaí mapping eile a bheith agat? Is féidir leat é seo a ghlúint i ngléas **Ultimate Multisite > Settings > Domain Mapping**.

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

An taitneamh ar an bhfáil seo, is féidir leat a fheiceáil hefyd an option **Force Admin Redirect** (Ghlúint an chuidiú admin). Le tú a bheith ag an tairgseán seo, is féidir leat a chur ar fáil control ar an t-am chun a bheith agat i gceachtar do chustodiante a bheith ag cur isteach ar a dashboard admin both ar a deomáin custom agus ar a subdomain nó tar éinig ar aon dearmad.

Má chóir tú **Force redirect to mapped domain** (Ghlúint go dtí an deomáin mapeacht), beidh do chustodiante ag cur isteach ar a dashboard admin ach ar a deomáina custom.

An option **Force redirect to** **network domain** (Ghlúint go dtí an deomáin netwrík) leigeann é seo an t-am eile - beidh do chustodiante ag cur isteach ar a dashboard ach ar a subdomain, ag iarraidh cur isteach ar a deomáina custom.

Agus an option **Allow access to the admin by both mapped domain domain and network domain** (Fhéadú cur isteach ar an admin ó deomáin mapeacht agus ó deomáin netwrík) leigeann sí do chustodiante cur isteach ar a dashboard admin ach ar a subdomain agus ar a deomáina custom.

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Tá de dhuit conas atá a mapáil deomáin custom. An céad é, leat a mapáil an ainm deomáin ó chuid admin netwrík mar super admin agus an deá a chur ar fáil. An deá a chur ar fáil eile is go bhfuil sé ag an subsite admin dashboard oí cur isteach ar an curteoir (account page).

Ach ó shin, primaidh tú a bheith agat ar an t-am chun an **DNS settings** (caint DNS) deomáin a bheith ag cur isteach go ceart i bhfeidhm.

###

### A bheith cinnte go bhfuil an DNS settings deomáin curteacha go ceart



Le linn réimse a bheith ag eolais, leat mé cur leat go bhfuil tú ag planáil an domáin atá ag cur ar an t-aistriú (map). Is é astú: ag cur an chéad IP address an ngrú (Network IP address) a bhféadfadh an domáin a bhfaidh tú ag cur ar an t-aistriú, agus níl é an IP address an domáin a bhfuil an Ultimate Multisite ar fáil ar. Mar chomhthéacs chun an IP address an domáin a bhfuil tú ag cur ar an t-aistriú a fháil, is féidir leat a bheith ag cur ar [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) (mar shamhsas).

Chun cur an domán ar bheó go ceart, leat ag cur **A RECORD** ar do chuid rannpháirtí **DNS** a bhféadfadh é IP address a bhfaidh tú ag cur ar an t-aistriú. Déanann cur ann an t-aistriú DNS go léir go léir ar fáil ar na rannpháirtí domáin, ach tá cur ann tutorials online a chluaintear é seo má leann tú " _Creating A Record on XXXX_ ", agus is féidir leat a bheith ag cur ar an t-aistriú do rannpháirtí domáin (ex.: " _Creating A Record on_ _GoDaddy_ ").

Má tá tú ag cur cur isteach agat i gcónaí, leat a chomhacht le support do rannpháirtí domáin agus beidh siad ag cur cur ar an t-aistriú seo ar fáil.

Má bhfaigheann tú an t-aistriú A Record an t-aistriú atá ag cur ar an t-aistriú a chur isteach, leat a bheith ag cur cur isteach agat i gcónaí a chur ar an t-aistriú.

### Cur domán atá ag cur ar an t-aistriú mar Super Admin

Nuair atá tú ag cur cur isteach mar Super Admin ar do ngrú, is féidir leat cur domáin atá ag cur ar an t-aistriú a chruinne agus a chairdeáil go ceart trí **Ultimate Multisite > Domains**.

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

Obráigh ar an cur síos seo, leat ormhaint ar bhfothair **Add Domain** ar uiríocht agus beidh sé ag tairiscint mo modal window a bhfuil tú ag setáil agus ag dlenadh **custom domain name**, **an subsite** atá tú ag iarraidh a bheith le custom domain name, agus a dhéanamh dearbhálach má thuigidh tú é mar **primary domain name** nó ní. (an chúram, leat féidir leat mapáil **multiple domain names** ar aon subsite).

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

Tar éis an tairiscint de uchadh gach chuid fada, leat ormhaint ar bhfothair **Add Existing Domain** ar an chuid uir.

Beidh sé ag comhthéid an t-amach a bheith agat chun féachaint agus a laithreachú thôngas DNS ar an custom domain name. Beidh tú hefyd ag iarraidh log ar an cur síos ar an chuid uir chun an t-amach a bheith agat a bheith agat. Is féidir leis an t-amach seo a thógáil sa chuid fada.

Tá Ultimate Multisite v2.13.0 ag teacht le cur síos domhan intineach go dtí an t-amach nuair a bhíonn nua site ag cur isteach ar host atá ag bheith mar domain per-site. Má tá an host mar domain príomha na net, nó mar aon de do chuid domain base checkout-form a chur ar fáil ar **Site URL** field, níltear an cur síos domhan mapáilte go dtí an t-amach chun an domain base shared a bheith ag cur fáil ar chuid site a úsáideann é.

Béal éifeachtúil (Stage) nó stát should change from **Checking DNS** to **Ready** if everything is properly set up.

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

Má leat ormhaint ar an domain name, beidh tú ag iarraidh féachaint ar chuid oifríngeartha sa chuid. Déanann méid a chur ar fáil:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stádas:** Tá sé seo an stáit atá an domáin. Nuair a bhíonn tú ag cur an domán ar an chéad, beirfidh sé bróinneadh ar stáit **Checking DNS**. Beidh an t-aontú ag iarraidh a bheith ar an stáit seo chun na chuid de DNS a shonraithe agus a fháil ar an t-aontú go bhfuil siad ceart. Ansin, beirfidh an domán ar stáit **Checking SSL**. Beidh Ultimate Multisite ag iarraidh a fheiceáil má tá an domán le SSL nó níl, agus beidh sé ag cur an domán agat mar **Ready** nó **Ready (without SSL)**.

**Site:** Is é an subdomain atá ag cur i gcomhthéacs le an domán seo. Beidh an domán a bhaineann leis an site seo ag sithiúl an curteacha seo.

**Active:** Is féidir leat an t-aontú seo a chruinneáil nó a chruinneáil chun an domán a chruinneáil nó a chruinneáil.

**Is Primary Domain?:** Beirfidh do chuid oileach dóibh domáin mór ná aon fháin ar chuid site. Usearás an t-aontú seo chun seachaint an bhfuil sé an domán bunúsach (primary domain) do chuid site a bheith agat.

**Is Secure?:** Mar sin féin, mar áit a cheanglaíonn Ultimate Multisite an bhfuil an domán le cert SSL nó níl ar fáil primaill go háirit, is féidir leat é seo a chur ar fáil go mhaith nó níl ag cur an domán agat le cert SSL. Léimeann tú go bhfuil an website gan cert SSL agus má iarraidh tú é a chur ar fáil le cert SSL, is féidir leis é a thabhairt tú erraí.

### Cur an domán bunúsach mar Subsite user

Is féidir le curteacha subsite a cur i gcomhthéacs le domáin mór ná aon fháin ag cur i gcomhthéacs ar an dashboard de curteacht subsite.

Ar anois, rud éigin is féidir leat a chur ar fáil nó a chruinneáil ar an stáit **Domain mapping** (Cur an domán) under settings. Léimeann tú an príomhshéimeann seo i ndá chuid screenshot:

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

Is féidir leat é a chur ar fáil nó a chruinneáil under **Plan** level nó product options ar **Ultimate Multisite > Products**.

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

Nuair mé an t-aithneacha seo: Nu déanann tú aon cheadaí seo agus má tá spisiúntach (subsite) a ghlacadh chun domáin a mhaithrù (custom domain names) a mapáil, ba cheart go bhfuil mo chuid spisiúntach ag fheiceáil metabox ar an cur síos **Account** le cur isteach **Domains**.

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

Is féidir leis an uchair a chluin **Add Domain** agus beidh sé ag tairgseáil mo modal window le caighdeáin.

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

Ansin is féidir leis an uchair a chluin **Next Step** agus a thaisrabháil chun domán mhaithrù a chuid a mapáil a chur i bhfeidhm. Is féidir leat a bheith ag cur isteach an t-aithneadh seo mar domán príomha (primary domain) nó ní.

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

Chluin chun **Add Domain** a dhéanann an t-aithneadh a bheith ag cur isteach agus a fháil ar na noltóir DNS do domán mhaithrù.

### Déanann Domáin (Domain Syncing)

Is é Déanann Domáin (Domain Syncing) ceangailte a bhfuil an t-aithneadh Ultimate Multisite ag cur isteach an domán mhaithrù i bhfaoiacht an cur síos agat mar domán add-on **chun a bheith an mapáil domáin ag eithrún**.

Bíonn Déanann Domáin ag déanamh go dtí an t-aithneadh seo má tá cur síos agat le cur isteach (hosting provider) le cur isteach le feidhm mapála domáin Ultimate Multisite. Ag anois, is é roinnt cur síos seo _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ agus _Cpanel._

Nuair a bheith cur isteos le cur síos, is féidir leis an t-aithneadh Ultimate Multisite ag cur isteach (enqueue) an t-aithneadh DNS nó an t-subdomain chun nualachaithe (newly created sites). Má níl aon cheangailt ag léamh an t-aithneadh seo, ba cheart a bhaint an job ag cur isteach go dtí chun no-op queue entries a shomis. Déanann na chraoin DNS agus SSL do domáin a mapáil go dtí an chur chuig an t-amach ar an chur chuig an amach domáin (domain-stage process).

Béal é seo: leat méid an t-aithreachais seo ag activaithe ar na réiteacha Ultimate Multisite i ngachaisle **Integration**.

![Tab Integrations i ngachaisle Ultimate Multisite a shomraithe curteoirí chomhthabhairt](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Línteacha curteoirí chomhthabhairt ar an tab Integrations -->

_Note go bhfuil sé ag teacht: má níl do curteoir chomhthabhairt aon de na curteoirí a chuir méid an t-aithreachais seo, **dúil leat sin a dhéanamh go mbeartach trí synch manuálta nó a chur ar fáil an teangail domhaint** i do chontacht chomhthabhairt._
