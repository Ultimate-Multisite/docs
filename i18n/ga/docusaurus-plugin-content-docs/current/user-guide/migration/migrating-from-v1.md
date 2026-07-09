---
title: Migré ó V1
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# Migréid ó V1 {#migrating-from-v1}

## Tá Ultimate Multisite shonadh ó fáil ar an fáil 1.x a bhfáine 2.x. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Is é Ultimate Multisite 2.0 agus níos lár, réimseán leathúil (complete rewrite) de bhfáine codebase, rud a bheith go mbeolaí go léir idir an fáil uile agus an nua. Mar é sin, nuair a bhíonn tú ag iarraidh a chur ar aghaidh ó 1.x go 2.x, caithfidh do chuid data a bheith migréid (migrated) go format atá an nua réimseáin ag fháil.

Go mhaith leis sin, **tá Ultimate Multisite 2.0+ le migrator** (migrator) a bhí beagaithe i gcóir (core) a bheith ag fháil ar data ó fáil uile agus a chur ar fáil go format nua. Is é an t-amhrán seo ag cur isteach tríd an **Setup Wizard** de bhfáine 2.0+.

Céadfaidh an leas seo a chur in iúl conas a ardúíonn an migrator, cad a bheith ag déanamh ag fháil ag éirí, agus conas a dhéanamh ar chuid ábhairtí (troubleshoot) a bhí féidir a thabhairt ag an t-amhrán seo.

_**IMPORTANT: Beidh tú ag ardú ó fáil 1.x go fáil 2.0, le ghnáthach, caithfidh tú a bheith cinnte go bhfuil duine (backup) ar do database an site.**_

## Ar đầustáidí {#first-steps}

An chéad chuid éisteachta is é: dlúint an zip file de bhplugin agus ardúsa fáil 2.0 ar do dashboard admin na h-nós.

Ar ngo leat [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md), beidh an comhthéacs ag déanamh cinnte go bhfuil do Multisite ag gníomh ar fáil uile agus beidh tú an t-amhrán seo ag cur isteach ar an chuid plugin.

_**NOTE:** Má tá Ultimate Multisite 1.x ag fáil ar do Multisite, beidh tú an t-amhrán a bheith agat a chur ar aghaidh leat a chur i mbunaí (replace) le réimseán atá tú ag fháil. Leas, ardú go léir agus cliceáil chun **Replace current with uploaded**._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

An cur áirí seo le gnáchas láithreach a bheith agat ar an t-amach seo, ag teacht le cur síosanna léasa (legacy add-ons) atá chomh maith leis an fhoireann 1.x. Beidh sé le cur síosanna ar an chéad a chur in iúl má tá an cur síosán a bhfuil tú ag úsáid ag cur síosán 2.0 ag bheith çatrach, nó má tá tú ag iarraidh cur síosán níos fearr de bhfáineadh an cur síosán ar aghaidh tar éis an teacht.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

Nuair atá tú réidh chun cur ábraint, leat ormhaint ar an nútinn a ngníomhú leis ar an t-amach a ngníomhú leis ar an teacht: **Visit the Installer to finish the upgrade**.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

Beidh sé ag cur tú go dtí an cur síosán de chláir le cur síosanna faoi chuid fáilte. Beidh tú ag iarraidh cur ábraint ar aghaidh tar éis an teacht le cur ábraint **Get Started**.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

Tar éis an cur ábraint **Get Started** a ngníomhú leis, beidh sé ag cur tú go dtí an amach seo. Beidh sé ag sithiúlacht do chuid Infolachais Sysitiúil agus an cur síosán WordPress agus beidh sé ag tairiscint do iarraidh **Ultimate Multisite**.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

An t-amach seo is é a chur ar fáil leat chun cur chuid lúchán lisens (license key) Ultimate Multisite agus chun an cur síosán a chur in iúl. Beidh sé ag cur tú go dtí an cur síosán a bheith agat ar do site, gan aon duine a bhíonn ag iarraidh é.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

Tar éis an cur ábraint do lúchán lisens, beidh tú ag iarraidh cur ábraint an cur síosán le cur ábraint **Install** ar an amach seo. Beidh sé ag cur tú go dtí na fáilí a ginearálta is iad ag cur síosán 2.0 a bheith ag eolais agus a thabhairt.

## Anois, an t-amach ar chruinne {#now-the-migration}

Tá cur chuige (migrator) le feidhm sé a bhí ag an t-amach, a bhfuil fáil ar chuid deacair a bheith agat chun a bheith cinnte go bhfuil gach data Ultimate Multisite agat ag éirí a bheith ag teacht. Cliom ar an nútair **Run Check** chun an chéad chéim a dhéanamh.

Ar ngo d'fhéadfadh tú do chuid deacair a bheith le poistéad **le** éirí, nó **le** éirí ná.

### Le Éirí {#with-error}

Má thabhairt an t-amach ag éirí, leat labhairt le spás cúrama (support team) atá ag an chéile chun cabhrú leat iad a fháil ar an éirí. Déan cinnte go bhfuil tú **ag cur log éirí** nuair a chur in áit (ticket). Is féidir leat an log a shlónadh nó is féidir leat cliath ar an link atá ag cur isteach "contact our support team". Beidh sé ag luga an widget cúrama ar an chuid faoi chéile, ag cur iarrachtaí ar fáil chun na log éirí a bheith ag cur in áit sa chláir.

_**Mar go bhfuil an t-amach ag iarraidh éirí, ní féidir leat a bheith ag teacht ar aghaidh le teacht 2.0. Is féidir leat ansin a gcurt ar chéad 1.x chun cur an t-amach agat ar chuid deacair go dtí a fháil ar an éirí.**_

### Le Éirí Ná {#without-error}

Má níl aon éirí ag an t-amach, beidh tú le poistéad saolais agus nútair **Migrate** ar an chuid faoi chéile a bheith agat chun teacht ar aghaidh le teacht. Ar an cur chuige seo, beidh tú ag cur isteach ar fáil do chuid deacair a bheith le poistéad (backup) ar an bhfáth agus is féidir leat teacht ar aghaidh ar an chéad chéim, a bhfuil sé ag cur iarrachtaí ar fáil. Cliom ar **Migrate** má tá tú an t-amach agat.

Is é seo an t-amach!

Leat atá an t-Uisce (Wizard) a dhéanamh chun an t-logo agus eile ar na ngrúidteachtacha duit a choinneáil, nó roinnt an meán a bhaint as an meán a bhaineann le Ultimate Multisite version 2.0 agus an nua chuid ar fháil. Déan sé go leor sin.
