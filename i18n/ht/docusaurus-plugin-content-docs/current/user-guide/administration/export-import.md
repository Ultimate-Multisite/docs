---
title: Eksport ak Impor
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# Eksport & Impor {#export--import}

Ultimate Multisite 2.9.0 ajoute yon zouti **Export & Import** pou yon sèl sit anba **Tools > Export & Import**. It sèvi ak li lè ou bezwen pake yon sit WordPress kòm yon fichye ZIP, restaure ZIP la, oswa deplase yon sit ant enstalasyon Ultimate Multisite ak single-site WordPress ki koresponn.

## Pèmisyon ki nesesè {#required-permissions}

Ou dwe konekte kòm yon administrateur ki gen aksè nan mennu **Tools** WordPress sou sit ou ap eksporte oswa importe la. Sou yon rezo multisite, itilize kont yon administrateur rezo lè w ap eksporte oswa importe subsit yo soti nan zouti Ultimate Multisite nivo rezo a pou subsit yo.

Download ZIP ki eksport yo sèvi atravè yon pwen download ki aplike (authenticated), kidonk kenbe sesyon admin an aktif jiskaske download la fini epi pa pataje URL download ki genyen publikman.

## Eksporte yon sit kòm ZIP {#exporting-a-site-to-a-zip}

1. Nan admin WordPress pou sit ou vle copie a, ale nan **Tools > Export & Import**.
2. Louvri zòn eksport la epi chwazi sit ou vle pake la.
3. Chwazi kontni opsyonèl pou mete ladan l, tankou uploads (fichye ki te telechaje), plugins, ak themes, lè opisyon sa yo disponib.
4. Kòmanse eksport la epi tann pwosesis la fini. Sit ki gen anpil data ka bezwen fini nan fon an anvan ZIP la pare.
5. Telechaje ZIP la ki fin fini soti nan lis eksport yo.

Kenbe ZIP la nan yon kote ki sekirize. Li ka gen kontni sit la, konfigirasyon, fichye medya, ak eleman kòd ki chwazi.

## Sa eksport la gen ladan l {#what-the-export-includes}

Yon ZIP eksport ka gen ladan:

- Kontni baz done (database content) ak konfigirasyon sit ki chwazi a.
- Fichye medya ki te telechaje lè uploads yo mete ladan l.
- Plugins ak themes lè opisyon sa yo chwazi.
- Metadata ki itilize pa zouti Export & Import la pou rebanie sit la sou enstalasyon ki objektif la.

Gwo la gwok ZIP la aktyèl depann sou kantite media, plugin ak theme ki chwazi yo, epi sou gwosè tabli baz sit la.

## Importe yon sit nan yon ZIP {#importing-a-site-from-a-zip}

1. Ale nan **Tools > Export & Import** sou sit WordPress destinasyon an.
2. Louvri zòn import la epi telechaje ZIP ou te kreye pa zouti Export & Import la.
3. Mete yon nouvo URL si sit la dwe itilize yon adrès ki nouvo, oswa kite fye a vid pou kenbe URL orijinal la.
4. Chwazi si ou vle efase ZIP telechaje apre import la fini.
5. Klike sou **Begin Import**.
6. Monitè import la ki nan espere jiskaske li fini. Sè konekte **Cancel Import** sèlman si ou bezwen w rete pwosesis la anvan li fini.
7. Revize sit la ki te importe a anvan ou pèmèt trafik nòmal oswa aksè kligiman kliyan yo.

Sou yon enstalasyon WordPress ki gen yon sèl sit, importe yon ZIP ap ranplase sit la ki genyen ak sit la ki te importe a. Kreye yon backup konplè nan sit objektif la anvan ou kòmanse, epi evite kòmanse plizyè import pou menm sit la an menm tan.

## Limitasyon ak not ak patibilite {#limitations-and-compatibility-notes}

- Les dossiers d'upload très volumineux ou les bibliothèques de médias peuvent produire de gros fichiers ZIP. Konfime limite d'upload PHP, limite d'exécution, espace disque, mémoire et paramètres de timeout du serveur avant d'exporter ou d'importer des sites volumineux.
- Des bibliothèques de médias très grandes peuvent avoir besoin d'être déplacées pendant une fenêtre de maintenance à faible trafic.
- L'installation WordPress cible doit exécuter les versions compatibles de WordPress, PHP, Ultimate Multisite, plugin et thème.
- Une importation de site unique remplace le site cible. C'est pas un outil de fusion (merge tool).
- Les mouvements de multisite vers site unique et de site unique vers multisite ne sont supportés que lorsque l'environnement cible peut exécuter les plugins, thèmes, URLs et composants Ultimate Multisite requis du site exporté.
- Garde le ZIP privé. Il peut contenir du contenu de base de données, des fichiers téléchargés et des détails de configuration du site exporté.

Pour les anciens flux d'exportation au niveau réseau, consultez [Site Export](/user-guide/administration/site-export).
