---
title: Airgdh an t-aisle
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exporta an Site

Leada an pàipe admin **Site Export** a fáilteacht do administratori na ngrú (network administrators) chun site atá ag seachaint, nó an ngrú go léamh, i archeáladh, back-up, nó ar bhealach ábhairt.

## Exporta un site {#exporting-one-site}

Go raibh tú ag **Ultimate Multisite > Site Export** agus déan **Generate new Site Export**. Déan chun cinnte an subsite atá ag seachaint, ansin déan chun cabhrú an archive a bheith le uploads, plugins, agus themes.

Nuair a thaispeán an export seo, dlú an ZIP ó liosta **Existing Exports**. Is é ZIPs exporta seo ar aghaidh le `index.php` a bhíonn ag seachaint go dtí (self-booting) agus `readme.txt`, mar chun an archive a bheith ag seachaint ar host nua agus a dhéanamh ag dul ar aghaidh gan a bheith ag cur plugin importer pearsanta ar an chéad.

## Exporta an ngrú go léamh {#exporting-the-whole-network}

Use **Network Export** ar an pàipe Site Export nuair atá tú ag teacht ar archive ceart a bhfuil gach subsite yn cael sé leat. Is é seo ag fáilteacht chun cinn ar bhealach ábhairt (host migrations), drills deacairt (disaster-recovery drills), nó réimse rebuilds a bhíonn ansin gach subsite ag teacht go le chéile.

Mar go bhfuil exporta ngrú mar chomh láidir ná exporta site céanna, déan é seo tríd am béal le fáil (low-traffic window) agus dìng an tairgíocht storage a bheith le hiontún space leat chun uploads, plugins, themes, agus ZIP files a gnácha a bheith ag seachaint.

### Network Import Bundles {#network-import-bundles}

Starting with Ultimate Multisite 2.12.0, is féidir le Site Exporter a gnácha **network import bundles** — archive pearsanta a bhaineann leis an tairgíocht (restoration) site go léamh ar fáil ar an ngrú. Is é network import bundle leat an tairgseallach (files) agus metadata ag teacht leat chun siteí uile a gnácha ar chuid ngrú nua.

#### Gnácha Network Import Bundle {#generating-a-network-import-bundle}

1. Roinn go dtí **Ultimate Multisite > Site Export**
2. Cliom ar **Generate new Network Export**
3. Déan chun **Network Import Bundle** mar fada export
4. Déan chun a bheith ag cur chun cinn (uploads), pluginí agus themes a chomhlaoiú
5. Cliom ar **Generate**
6. Déan chun an ZIP bundle a dhéanamh ó list **Existing Exports**

#### Aistriú ó Network Import Bundle {#restoring-from-a-network-import-bundle}

Chun aistriú siti ó network import bundle:

1. Install Ultimate Multisite ar an host a bhfuil tú ag cur chun cinn
2. Déan an foirme set-up multisite
3. Roinn go **Ultimate Multisite > Site Export** ar an ngrú new
4. Cliom ar **Import Network Bundle**
5. Cur chun cinn an ZIP file import bundle network
6. Déan ar an cur chun cinn import a bhaineann leat

Bíonn network import bundles ag cosaint:
- Contant siti (posts, pages, custom post types)
- Caint agus optionaí siti
- Rôlá uile agus breiseanna
- Pluginí agus themes (má bhí siad cur chun cinn i bundle)
- Uploads media (má bhí siad cur chun cinn i bundle)
- Tablaí database agus data a chuiditeartha

## Installáil ZIP export a bhíonn ag bootáil go dtí (self-booting) ar host nua {#installing-a-self-booting-export-zip}

Chun aistriú ZIP a bhíonn ag bootáil go dtí ar host nua:

1. Cur chun cinn an curteoir ZIP a dhéanamh ar an root web a bhfuil tú ag cur chun cinn
2. Lúgh an `index.php` a chuiditeartha i brón
3. Déan ar an cur chun cinn installaí ar fáil ó theachtaireacht export bundle
4. Roinn an `readme.txt` a bhaineann leat export ar an t-amhairt a bheith agat ar an t-amhairt a bhaineann leat an t-amhairt a thaispeáint go háirithe ar an t-amhairt a bheith agat

For cur cúrama installaí agus cur cúrama import a bhaineann leis an addon, léiri [Site Exporter addon documentation](/addons/site-exporter).

For an tool single-site a chomhlaoiú i Ultimate Multisite 2.9.0, léiri [Export & Import](/user-guide/administration/export-import).
