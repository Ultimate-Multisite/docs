---
title: Exportatio situs
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# Exportare il Sito

La pagina di amministrazione **Export del Sito** ti permette, come amministratore della rete, di impacchettare un sito o l'intera rete in un archivio scaricabile per lavori di migrazione, backup o passaggio di consegne.

## Esportare un singolo sito {#exporting-one-site}

Vai su **Ultimate Multisite > Export del Sito** e scegli **Genera nuovo Export del Sito**. Seleziona il sottodominio che vuoi esportare, quindi scegli se l'archivio debba includere caricamenti (uploads), plugin e temi.

Quando l'esportazione è completata, scarica il ZIP dalla lista **Export esistenti**. Gli ZIP di export ora includono un `index.php` autoavviante e un `readme.txt`, in modo che l'archivio possa essere caricato su un nuovo host e avviato senza dover prima installare un plugin di importazione separato.

## Esportare l'intera rete {#exporting-the-whole-network}

Usa **Export della Rete** nella pagina Export del Sito quando hai bisogno di un unico archivio contenente tutti i sottodomini della rete. Questo è utile prima delle migrazioni di host, dei test di ripristino dopo disastro o delle ricostruzioni in staging dove ogni sottodominio deve viaggiare insieme.

Poiché un export della rete può essere molto più grande di un export di un singolo sito, eseguilo durante una finestra a traffico basso e conferma che lo storage di destinazione abbia abbastanza spazio libero per caricamenti, plugin, temi e file ZIP generati.

### Bundle di Importazione della Rete {#network-import-bundles}

A partire da Ultimate Multisite 2.12.0, l'Export del Sito può generare **bundle di importazione della rete** — archivi specializzati progettati per un ripristino semplificato dell'intero sito della rete. Un bundle di importazione della rete contiene tutti i file e i metadati necessari per ripristinare più siti su una nuova installazione della rete.

#### Generare un Bundle di Importazione della Rete {#generating-a-network-import-bundle}

1. Ir ad **Ultimate Multisite > Site Export**
2. Fecula **Generate new Network Export**
3. Selecta **Network Import Bundle** ut opus exporti
4. Eligere si includere uploads, plugins et themes
5. Fecula **Generate**
6. Download ZIP bundle ex lista **Existing Exports**

#### Restitutio a Partibus Network Import Bundle {#restoring-from-a-network-import-bundle}

Ad situs restaurandum ex bundle import network:

1. Installa Ultimate Multisite in host tuum cibum
2. Completa wizard setup multisite
3. Ir ad **Ultimate Multisite > Site Export** in nova rete
4. Fecula **Import Network Bundle**
5. Upload ZIP file bundle import network
6. Segue instructiones importi ex pantalla
7. Processus importi restaurabit omnia situs, contentum eius et configurationes

Network import bundles conservant:
- Contentum situs (posts, pages, custom post types)
- Configuratio et optiones situs
- Roles et permissiones utentium
- Plugins et themes (si in bundle inclusi sunt)
- Uploads mediae (si in bundle inclusi sunt)
- Tabulas database customibus et data

## Installatio ZIP exporti autoiniciandi {#installing-a-self-booting-export-zip}

Ad ZIP autoiniciandi restaurandum in host novo:

1. Upload contents ZIP exportati ad root web cibum target
2. Aperire `index.php` uploadatum in browserie
3. Segue instructiones installatoris ex pantalla a package exporti bundle
4. Revidere `readme.txt` bundled pro notis specificis exporti antequam files temporaria removendos.

Ad installatione et detellis importationis specificis addon, vide [Site Exporter addon documentation](/addons/site-exporter).

Ad instrumentum single-site additum in Ultimate Multisite 2.9.0, vide [Export & Import](/user-guide/administration/export-import).
