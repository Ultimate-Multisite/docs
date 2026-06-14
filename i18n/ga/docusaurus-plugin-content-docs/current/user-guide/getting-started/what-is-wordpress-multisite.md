---
title: Cad é an WordPress Multisite?
sidebar_position: 15
_i18n_hash: 5cb80eb341ce29b88cd433057da8bea2
---
# Cad é WordPress Multisite?

Intrínce am WordPress, fornece unha característica chamada ‘Multisite’ que remonta ao ano 2010, no lanzamiento do WordPress 3.0. Desde entonces, ha recibido varias revisiões con o fin de introducir novas características e fortalecer a seguridade.

En esencia, un multisite de WordPress pode pensar como isto: Un Universidade mantén unha única instalación de WordPress, pero cada faculta mantén o seu propio sitio de WordPress.

##

## Que é exactamente o WordPress Multisite?

Multisite é unha característica do WordPress que permite que múltiples sitios compartan unha única instalación de WordPress. Cando se activa o multisite, o sitio original de WordPress se converte para soportar o que se refíre habitualmente como unha **rede de sitios**.

Esta rede comparte o sistema de arquivos (o que significa que os **plugins e os themes tamén se comparten**), o banco de datos, os archivos centrais de WordPress, o wp-config.php, etc.

Isto significa que as actualizacións do WordPress, dos themes e dos plugins só hai que realizar unha vez para todos os sitios da súa rede, ya que comparten os mesmos arquivos no sistema de arquivos.

Este feito é unha das principais ventajas do multisite, pois permite que aumentes o número de sitios que gestionas mantendo o número de tarefas que necesitas realizar para manter os sitios dos teus clientes o mesmo.

##

## Subdomínio ou Subdirectorio?

Existe hai moitos modos de operar un WordPress multisite – e hai que escoller uno cando converts a tua instalación normal de WordPress en unha instalación multisite:

**Subdomínio:** ex.: [site.domain.com](http://site.domain.com)

…ou

**Subdirectorio:** ex.: [yourdomain.com/site](http://yourdomain.com/site)

Cada modo ten ventajas e desventuras que hai que considerar ao tomar esta decisión.

Ag cur á chomh tábhachtach an chéad chéim: tar éis go bhfuil tú ag teacht ar an fhochadha, níl éasca roinnt an t-aonchadh a bheith agat ó subdirectory go subdomain nó an uar sin. Go háirithe má tá tú leat cur fháil leat de chuid sitií atá ráiteach.

Ar dtús a dhéanamh ar an fhochadha seo, tá seo coionachtaí a bheith agat ag cur i gcónaí:

**Mod Subdirectory** is an mod isé a laethúil ó chuid cúrama agus de chuid cur fháil. Is é seo mar thaispeán go bhfuil gach site beagán an t-amach ar an domáin leathanach (e.g. [yourdomain.com/subsite](http://yourdomain.com/subsite)). Mar dtugtar seo, tá tú ag teacht ar **ceart SSL beagán** do chuid domán leathanach agus beidh sé ag cur fháil ar an t-amach go léir an ngrú.

Ag an chomh chéim, mar gheall ar an struchtúr URL, beidh Google agus daoine eile ar fáil a bheith ag féachaint ar gach site beagán ar an ngrú subdirectory-based agat mar chuid site mór. Mar dtugtar seo, is féidir le curteacha a shabbhaladh ar na sitií de chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid chuid

Amhán na roinnt de chuidéirí bunaithe ar an t-aistriú (subdomain mode) is é an fhéidir le caillteanna ag cur isteach: an cothrom SSL (HTTPS) ar fáil ar an t-aill an t-oibríochta go léir. Is é seo ag cur isteach go bhfuil na bhfaoiúin (browsers) a chothabhairt subdomains mar eithine óchta. Mar dtugtar, leat ormú SSL eile chun cinn ar chomhthéacs na subdomains ar an t-oibríochta, nó certifikeat a shúil as an t-aistriú (Wildcard SSL certificate). Ag coinnteanna níos réidh, tá curtha chuid deiríobhacha agus panelach ar fáil i gcónaí ar an cothrom SSL, agus tá cumhachtaí Wildcard ag curtha ar fáil ag cur isteach ar chuid nútí, ag ceannadh an gáir ar bhealach a bhíonn siad ag cur isteach.

Ag cur iad ar chuid deiríobhacha (subdirectory mode), is é na subsites ar an t-aill bunaithe ar an t-aistriú a bheith ag cur isteach ag searchéinigí mar fáilteanna, rud a ndéanann go bhfuil curtha ceangailte ar aon subsít ag cur isteach ní a bhfeicne ar an chuid SEO de na subsites eile.

## An Super Admin

Leat do chuid iarrachta WordPress a bheith ar aon-aill (single-site) a chur ar fáil liosta níos mó de uirlis agus a chur ar fáil rôl uirlis éasca le roinnt féin.

Ag cur iad ar fáil i WordPress Multisite, tá curtha uirlis nua ag cur isteach: **an super admin** – agus tá panel an admin nua ag cur isteach: **panel an network admin**.

Mar a bhíonn an t-aistriú, tá an super admin le curthaí ar an network, ag cur cúram ar an t-aill go léir na subsites, plugins, themes, gcuid uirlis, is é sin!

Ag cur iad ar fáil ar aon-aill WordPress a bhaint as multisite, tá an admin ar aon-aill ar fáil ag cur isteach mar super admin. Beidh plugin agus themes ag cur isteach nó ag cur an t-aill ar fáil deara ar an panel admin network ag an super admin. Mar sin, is féidir leis na admin subsites a bheith ag cur isteach nó a gníomhú nó a gníomhú go leat, má níl an super admin an network ag gníomhú plugin, rud a thaispeánann é ar fáil do gach subsít go léir.

_Note: mar a bhfá, mar atá thuair, a chomhartha é seo leat a bheith ag cur isteach duine ar do netwrk agus a chur i bhfeicim super admin. Is é seo an t-aontáil chontrait leat ar fáil ar fáil ar chuid de chuid netwrk. Mar shampla, is féidir leis na super admins eile até n-aonadh do status super admin, ag iarraidh go bhfuil tú gníomhach in a panel admin do do netwrk. Mar chun cinnte a bheith leat ag fáil control granarúil ar an rud éigin a féidir leat do chuid super admins eile a dhéanamh, táimid add-on a cheart go cur isteach leis, a cheannach Support Agents. Cén fáth a bhfuil an add-on seo ag fáil? Is féidir leat a bheith ag creón duine eile – un agent – le gníomhaíocht atá tú ag iarraidh a dhéanamh ar an netwrk._

## Cad a bhíonn curtha cúpla leat agus cad níl

Mar a bhaineann amach, éad an chuid is mó de WordPress multisite go bhfuil sé sin go bhfuil gach subsite ag teilteadh na héifeachtaithe, fáil ar chuid faighneacha, themes, plugins, core files WordPress, etc.

Mar ábhairt, tá rud éigin atá curtha cúpla leat ar fáil ar fáil ar chuid de chuid subsite.

- Mar shampla, cuirtear folder uploads do chuid subsite. Mar dtugair an t-aontaithe a dhéanann na húsáilte do subsite a bheith ag cur isteach ar subsite eile.
- Tá panel admin idirbhí do chuid subsite agus is féidir leat pluginí nó themes a chloisteáil nó a deabháil an t-aonadh, má bhí siad gníomhach in a netwrk de chuid super admin.
- Tá daoine talún (database tables) curtha cúpla leat ar fáil ar fáil ar chuid subsite, rud é sin curtha cúpla leat ar fáil ar fáil ar chuid subsite. Is é sin, tá posts, comments, pages, settings, agus eile curtha cúpla leat ar fáil ar fáil ar chuid subsite.

## Cur na húsáilte ar WordPress Multisite

Tá rud beag a bhíonn ag curtha cúpla leat ar fáil ar fáil ar chuid de chuid netwrk: cur na húsáilte. Tá an t-aontaithe úsáidór WordPress ag cur isteach ar fáil ar fáil ar chuid de chuid subsite.

Is féidir leis an curtha seo rud éigin a bheith ag cur cúpla leat ar fáil ar fáil ar chuid de chuid netwrk. Is é sin, is féidir leat a bheith ag cur isteach ar fáil ar fáil ar chuid de chuid netwrk. Mar shampla:

Tais an t-amach ar fáil:

Tá tú ag cur isteach na ngrúpa multisite WordPress agus tá tú ag cur isteach subsites do daoine a bhfuil drochais mínalach ag teacht chun stór e-commerce a bheith acu.

Tosaigh tú le tuairisc ar an chéad oileach – John. Tógann tú site ar fáil do John ar na ngrúpa, tógann tú an cur chuimhne (plugin) sinite ar fáil, agus tógann tú cur chuidar (user) ar fáil do John chun an stór a bhaint as.

Ansin leat an deithreach – Alice. Déan tú an amach sin do Alice agus tá sé ag teacht leis an stór ar na ngrúpa atá agat freisin.

Tá John agus Alice beartaithe agat, ach níl siad ag iarraidh a bheith beartaithe le chéile. Níos sárta, má thá sé ag cur isteach ar an stór de do chuid, níl aon fáil a bheith agat go bhfuil an stór seo ag teacht ar an ngrúpa site sinite.

Agus an lá, tá John ag iarraidh coltaid nua de chuid, agus tá sé ag iarraidh an cur chuimhne is fearracha a fháil i Alice. Nuair a bhíonn sé ag iarraidh a thaispeáint an gníomh a dhéanamh, níl aon fáil a bheith agat ar an t-amach "email already in use" (email cur chuimhne ag úsáid) – is é sin beagán an-nóir, toiscint go bhfuil John 100% cinnte go bhfuil sé seo an áit atá a bhfaidh sé ar an chuid site de Alice.

Tá an t-amach sin ag cur isteach go bhfuil an úsáid de John ag cur chuimhne ar fáil ar an ngrúpa go léir, mar chun an cur chuimhne a chur i gcomhthéacs ar an stór de Alice, beidh WordPress ag déanamh cinnte go bhfuil cur chuimhne le cur chuimhne de bhfáinne ag cur isteach agus ag tairiscint.

_Note: Tá sé ag cur isteach conas an-chuid éigin a bheith go hiontach ar fáil ag cur isteach, mar is féidir leis Ultimate Multisite oiriú an chuid cur chuimhne regular chun cur isteach acréidte (account) eile a chur i gcomhthéacs ar an cur chuimhne de bhfáinne. Tá an cur chuimhne sinaithe ag cur isteach ar an stór de do chuid, mar is féidir leis an t-amach a bheith go mór. Ag an t-amach seo, níl aon fáil a bheith agat ar an t-amach "email already in use" agus is féidir leat cur acréidte eile a chur i gcomhthéacs ar an stór de Alice. Is é sin ag cur isteach ar an stór de do chuid, mar is féidir leis an t-amach a bheith go mór. Tá an cur chuimhne seo ag cur isteach ar Ultimate Multisite → Settings → Login & Registration._

Nó bhfuil an táirgeur úsáideoirí (user table) gcomhsháthach, ach le túaí subsite admins nó super admin, is féidir iad a chur i bhfeicre agus a glabháil ó chuid subsites, agus is féidir badachtáin úsáideora ag cur isteach agus an t-amháin a glabháil. Is féidir leis sin éastáil rôlú úsáideoirí eile ar subsites eile.

## Cuidiúir foirme (Performance considerations)

Is é WordPress multisite go leor spioradach chun an t-amháin na siti atá is féidir é a chur i bhfeicre. Is féidir é a shonraithe go léir ná [WordPress.com](https://WordPress.com), Edublogs, agus Campuspress, a bhaineann leis an multisite, agus a chomhfaidh sé thús na thuairiscí (hosts) táiteanna ar pholas.

Trá luach, níl aon chuid méid a fháil ar an t-amháin na siti atá is féidir leat a chur i bhfeicre ar cur síos WordPress multisite, ach ag prátice, is féidir an n-amháin sitií atá is féidir leat a dhéanamh go nádúrtha ag athrú go léir ag athrú ag cur isteach ag cur glabháil ag cur foirme ag cur foirme ar chuid féin ag cur foirme.

Mar chuid de chuid, is féidir leis an t-amháin a bheith níos éasca ná an t-amháin a bheith spioradach. Déan chúram ar sitií a bhfuil an t-amhasán gan athrú go léir (a bhíonn siad ag cur foirme ar chuid foirme is mó) agus an stack plugin a bheith níos lán ná a bheith éasca (is é an n-amháin na plugin atá ag cur foirme, is é an t-amhasán níos fearr). Is féidir leis seo go leor a chur ar fáil an n-amháin sitií subsite.

An chuid is fearr is éasta: mar is é sin WordPress, níl aon duine a bhíonn ag cur foirme agus a glabháil ar foirme chun athrú foirme a fheabhsú. Is féidir leis an n-amháin siti atá is féidir leat a chur i bhfeicre a bheith ag cur foirme ar chuid foirme ar chuid féin ag cur foirme ar chuid foirme.

An gcurtacha (bottleneck) le multisite is é an database, ach má tá sin an t-amháin na hothairí ar fáil go nádúrtha, is féidir leis an t-amháin a bheith ag cur foirme ar chuid foirme ar chuid féin ag cur foirme. Is féidir leat é seo a chur i bhfeicre ar chuid foirme ar chuid foirme ar chuid féin ag cur foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar chuid foirme ar
