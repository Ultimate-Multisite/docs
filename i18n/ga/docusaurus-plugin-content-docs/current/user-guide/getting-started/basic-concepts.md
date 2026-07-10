---
title: Céad-fháilte bunaitheachtaí
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# Cúsaíocht Bhásach {#basic-concepts}

Do chuidhe ar nudiú WordPress Multisite agus ar duine atá ag dul i gcónaí ar an t-amach ar Ultimate Multisite, is féidir leat go leor comhráir agus gnáthacha nua a laonadh ar an chéad. Is é sin tairbheintt ar cheart chun an fáil amach mar gheall ar an fáil ar an fáil ar an platform agus conas a bheith ag dul i gcónaí go léir.

Iarráimid in iarracht a laonadh agus a gluthú farraige chuid cúsaíochta bunaithe sa WordPress seo. Tá some mar a bhaineann leis an t-amach, eile le deweloirí, agus some ar ansin do chuid uile.

## WordPress Multisite {#wordpress-multisite}

Is **Multisite** ar WordPress curte a bhaineann le fáil ar chuid a bheith ag curtha agus a ghlú ar netwrík de dhóchas (websites) go leor ón dashboard ceart. Is féidir leat an gcothrom chun cinnte a bheith mar gheall ar an n-uair, feichar, themes, agus rôla uile. Is féidir leat fáil amach ar chuid sitiúirí.

## Netwrík (Network) {#network}

I gcás WordPress, is é netwrík Multisite an áit a bhfuil **subsites** go leor ag curtha ar fáil ón dashboard ceart. Mar mar a bhaineann an t-amach ar chuid de dhóchas, is féidir leis an t-amach a bheith ag curtha ar fáil ar fáil ar chuid a bheith ag dul i gcónaí ar an t-amach, ach is é an t-amach a bhaineann leat go leor díriúcháin nua sa **wp-config.php** chun WordPress a bheith ag iarraidh a bheith ag obair i seo chuid a bhfuil sé ag curtha ar fáil.

Tá fear air féachnaí bunaithe ar an t-amach ar netwrík Multisite agus ar sitiúir WordPress a bhaineann leat a dhéanamh go leor, is féidir linn é a chur ar fáil mar chuid beag.

## Database (Cúsaíocht Dátai) {#database}

Is **database** curte a bhaineann le cúsaíocht dátaithe, gnáthach agus gnáthach. I téacs comhputair, curte a bhaineann le software a úsáid chun dát a sholáir agus a chuidú. Déan cinnte go bhfuil sé ag curtha ar fáil mar chuid file cabinet a bhfuil tú ag sholáir dát i ábharí a losraidh againn.

Bíonn WordPress Multisite ag úsáid deatach (database) a bhaineann leat, agus tá each subsite ag iarraidh t-amach a bheith ag curtha ar fáil ar chuid tables go leor idir an prefix blog ID. Mar sin, nach bhfuil tú ag curtha ar fáil an database agus ag cursubsite ar fáil tar éis a chur in áit sitiúir netwrík, is féidir leat a bheith ag curtha ar fáil an tables seo:

_wp_1_options_ \- tabóin oltarais optionaí chun an áite a bhunaithe (first subsite)

_wp_2_options_ \- tabóin oltarais optionaí chun an áite a chur in áit (second subsite)

## Cothairtóir chothairt (Hosting provider) {#hosting-provider}

Is é cothairtóir chothairt corparais a bheith ar chuid de shábháilteacht agus fáilteacht do fáilteoirí agus do chuid is móintí chun na webstáit a chur ar fáil tríd an World Wide Web. Beadaíonn na seirbhísí a thaisceann na cothairtóir chothairt, ach tí ar fáil deartáid stóras ar an host, agus cumhacht leat an Internet.

## Domain (Domáin) {#domain}

Is é oifig an t-amhrán atá a bhfháil a bhíonn daoine a úsáideann chun do chuid áite a fáil. Tá sé ag cur an t-amhrán ar an browser a bheith ag iarraidh a bheith ar do áite. Mar chomh maith leat an amhrán deart, is é an domain na héad a bhfháil a bhíonn daoine ag cur áite ar do webstáit online. Agus, mar atá ag cur fáil ar chuid stóras. Má tá tú ag iarraidh a bheith ar do webstáit, leat labhairt an amhrán web a bhaineann leis an browser a chur ar an amhrán áite a bhaineann leis [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _, a bhfuil [**ultimatemultisite.com**](http://ultimatemultisite.com) ag cur an t-amhrán ar fáil.

## Subdomain (Subdomain) {#subdomain}

Is é subdomain chuid áite web a bhaineann leat an domain mhíne, ach mar chuid de dhéanamh oibríochta ar an webstáit, níl é ag úsáid folderí chun cur áite ar an webstáit, ach tá sé ag iarraidh fáil ar do chuid. Tá sé ag cur in áit mar [**https://site1.domain.com/**](https://site1.domain.com/) mar _site1_ is an ainm subdomain agus [_domain.com_](http://domain.com) is an domain mhíne.

## Subdirectory (Subdirectory) {#subdirectory}

Is é subdirectory chuid áite web ar an domain mhíne a úsáideann folderí chun cur áite ar an webstáit. Is é subdirectory ag cur in ithearfolder agus is féidir na ainmúin a úsáid go díreach. Tá sé ag cur in ithearfolder mar [**https://domain.com/site1**](https://domain.com/site1) mar _site1_ is an ainm subdirectory agus [_domain.com_](http://domain.com) is an domain mhíne.

## Subsite {#subsite}

Subsite is an child site thuairt tú féachfaidh tú ar bhealach atá tú ag curtha ar na ngrúpa Multisite. Is féidir é go leor **subdomain** nó **subdirectory** ag cur chun cinn, ag cur chun cinn mar a bhaineann an curtha ar fáil an WordPress Multisite atá tú ag curtha ar fáil.

## Super Admin {#super-admin}

Is é Super Admin de WordPress rôl úsáid le féachaint go léir caillteanna leat chun an gcuid subsites ar na ngrúpa Multisite a chairdeáil. Do ardán féachanaí, is é **an áit féachanaí is uachtarach** atá tú ag cur ar fáil do WordPress installation.

## Plugin {#plugin}

Ag cur tiúchán, is é plugin set code a shabbint extra functionality ar chuid an site WordPress. Is féidir é go leor simple mar athrú logo login nó go leor phứcraid mar cur chun cinn e-commerce. _Woocommerce and Contact Form_ is amachas de plugin.

Ar WordPress Multisite, is féidir plugins a chur ar fáil ach ag cur chun cinn trí d'fháil an dashboard admin na ngrúpa (network admin) trí Super Admin. Is féidir le Subsite Admins ach teacht ar fáil agus a de-áirítear plugins ar chuid subsite.

## Themes {#themes}

Is é WordPress theme grúpa file (graphics, style sheets, agus code) a chur ar fáil a bhíonn ag cur chun cinn an chuid féachanaí an site. Is féidir leis sint méad féachanaí front-end mar athrú font, leasán page, colur, nó cúpla.

Is é sin éifeachtach mar plugins, is féidir themes ar WordPress Multisite a chur ar fáil trí Super Admin ach a chur ar fáil ar leith an subsite de chéile.

## Site Template {#site-template}

**Site Template** is site boilerplate (site atá ag cur chun cinn) a thaispeán a sholláint go léir mar base when a bhíonn tú ag cur isteach nualach sites ar fáil i do ngrúpa.

Is é sin an t-aistriú: leat féidir leat site base a chur ar fáil, plugins éasca a chur ar fáil, theme atá ag cur chun cinn, agus é a chuidú mar atá tú ag cur isteach in aon chuid atá tú ag curchun. Ansin, nuair a bhíonn do chustair ag cur nualach account nua, níl é a bheith ag iarraidh site WordPress de chuid default le n-éifeachtan sinte ar an taitneamh go léir, ach is féidir leis a fháil copy de do site base le gcuid cúplaíocht agus gcuid curchun atá ag cur chun cinn.

## Domain Mapping {#domain-mapping}

**Domain mapping** le WordPress is cur chun cinn a chur ar fáil do chuidiste go stiúid an t-amach go bhfuil siad ag cur isteach ar an chuid deiridh, tríd an chuid amras. Ag WordPress Multisite, caithfidh subsites a bheith ag cur isteach trí chéad-dirte (subdirectory) nó trí subdomain. Is é seo an domain mapping: leat a gníomhú leis sin is féidir leis na chuidiste deiridh a bheith ag úsáid domhain uachtarach mar [**joesbikeshop.com**](http://joesbikeshop.com) chun an amras an t-amach a bheith ag léiriú níos profesinail.

## SSL {#ssl}

SSL cur isteach **Secure Sockets Layer**. Is é seo dearcáiste digital a chiallaíonn an áit an t-amach ar fáil agus a fhorbairt connadh críocha. Ag anois, a bhaineann sé leat mar téacs tecnológ a bheith ag úsáid chun connadh internet a bheith ag cur isteach agus chun daon réidh a chosaint go comair leat a bheith ag cur isteach idir do chuid systéim, ag cur isteach an t-amach ar aon chomhrá a bhí ag cur isteach, gan a bheith criminals ag léamh agus ag athrú aon chomhrá a bhí ag cur isteach, gan a bheith réidh personala ag cur isteach. Is féidir leat SSL a bheith ag cur isteach mar chuid is éifeachtach nuair a chur ar fáil agus a gníomhú amras.

## Media {#media}

Is é media (media) imáirí, áit, video, agus caipí eile a dhéanann an t-amach.

Tá sitianna neteacha ag cur isteach dearcáiste amháin i WordPress Multisite, agus tá siad ag cur fáil seachracha ar an chuid deiridh do chuid faighneacha media.

Tá an áit chuẩnaite de WordPress (wp-content/uploads) ag cur isteach; mar sin féin, tá an amras a bheith ag cur isteach ar fáil chun an t-amach neteacha a bheith ag cur isteach. Mar sin, a bhíonn caipí media do amras neteacha ag léiriú mar wp-contents/uploads/site/[id].

## Permalinks {#permalinks}

Is é permalinks (perm links) an URL-a pearsanta de do post blog nó page individual ar do chuid amras. Is féidir leis na permalinks a bheith ag cur isteach mar **pretty links**. Ag deireadh, usaíúiríonn URL-a WordPress format query string a bhaineann leis an t-amach:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Is Ultimate Multisite un plugin WordPress, a bhíon foirme do chuidiúcháin WordPress Multisite, a bhíonn sé ag athrú an t-install de WordPress go síos é ar net uachtar – mar [WordPress.com](https://WordPress.com) – a fháil leis na clients a chur i bhfostáil sites tríd feidhm mínalta, treimhseacha, nó shaol (le tú féidir leat a chur i bhfostáil plans Free as well).

## Checkout Form {#checkout-form}

Is Checkout Form ar fáil mar fómraid ordaithe ag ceann nó ag ceann-aistriú a bhfuil an t-athrúcháin de subsite, membership, agus acaisteal o ngaccanta a bheith ag Ultimate Multisite registration. Tá sé chomh Gréineanna agus fómraí pleanacha a bhaineann a bhí ag an chéad áit a thabhairt ar an gcur na clients ag an t-athrúchán.

## Webhook {#webhook}

Is webhook (a leimeann hefyd as a chur chun cinn web nó API HTTP push) cur chuim é a bheith mar a fháil app ar chuid foirme eile do chuid foirme eile ar fáil inniu. Tá an webhook ag tairiscint datha go dtí foirme eile mar a bhíonn sé ag dul, gan láthairt tú datha agad ag an amach.

**Ultimate Multisite webhooks** léir sin é a bheith ar chuid foirme, a fháil leis na adminacha net ar aon chuid de chuid isteachanna, go háirithe má a úsáidtear le ardánacha mar _Zapier_ agus IFTTT_.

## Events {#events}

Is Event ar chuid athrú atá ag dul ar dtús nuair a bhíonn an t-athrúchán ag cur isteach an chuidiste nó fhochtú eile, mar chleachtaí mouse. Baileann Ultimate Multisite le cur isteach na réadais agus na loga sin ag dul i gcónaí ar chuid uachtar go léir. Tá sé ag iarraidh a bheith ag tairiscint ar aon athrúcháin atá ag dul in do multisite, mar spriúchanna plans.
