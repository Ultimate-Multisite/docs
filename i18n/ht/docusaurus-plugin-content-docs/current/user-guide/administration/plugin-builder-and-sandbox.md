---
title: Konstriktè Plugini ak Sandbox
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 prezante **Plugin Builder & Sandbox System**, ki pèmèt asistan AI a kreye, aktive, ak jere WordPress plugins sou rezo ou la — tout sa atravè yon anviwònman sandbox ki an sekirite epi ki isolate (sepile).

## Aperçu

Plugin Builder la pèmèt asistan AI a ekri plugin WordPress espesyal pou repons demann natirèl. Plugin ki te jene yo valide, estoke, e aktive nan yon kouvèti sandbox anvan yo afekte fonksyonalite sit live ou.

Kaj itilizasyon yo gen ladan:

- Kreye plugin utilite ki piti san nenpòt envanter devlopè.
- Prototip fonksyon ki mande WordPress hooks oswa custom post types.
- Kreye script otomatik kout-tout pou operasyon batri (batch operations).

## Jene yon Plugin atravè AI

Pou jene yon plugin, louvri entèfas chat Gratis AI Agent la epi dekri sa ou bezwen. Pa egzanp:

> "Kreye yon plugin ki ajoute yon notis admin koutmè sou dashboard la."

AI a pral:

1. Pwodui kòd PHP plugin anpil itilize jenerasyon kòd estriktire (structured code generation).
2. Valide rezilta a pou erè sintaks ak modèl ki pa segondè (unsafe patterns).
3. Estoke plugin ki te jene a nan magazen sandbox la.
4. Retounen yon konfimasyon avè slug plugin an epi yon bouton **Activate in Sandbox** (Aktive nan Sandbox).

Ou ka amelyore rezilta a lè ou swiv li nan menm fil konvèsasyon anvan ou aktive l.

## Aktiveman Sandbox

Aktive yon plugin ki te jene nan sandbox la se bagay diferan ak aktive l sou rezo live ou. Sandbox la:

- Eksèkite plugin anndan yon anviwònman WordPress isolate (wp-env).
- Sispann nenpòt erè PHP, avertisman, oswa konfli hook yo.
- Rapòte rezilta aktiva a nan entèfas chat la.

Pou aktive yon plugin nan sandbox la, klike sou bouton **Activate in Sandbox** nan repons chat AI a, oswa itilize komand slash la:

```
/activate-plugin <plugin-slug>
```

Yon mesaj estati confirme si aktivasyon anpil ou te reussi oubyen pa. Si li pa reussi, log erè a ap montre nan chat thread la.

## Jere Plugin ki Te Kreye (Generated Plugins)

Plugin ki te kreye yo parie nan **Gratis AI Agent → Plugin Builder → Manage Plugins**. Depi ekran sa a ou ka:

| Aksyon | Deskripsyon |
|---|---|
| **View source** | Revize kòd PHP plugin la nèt. |
| **Re-activate in sandbox** | Rete fè kontwòl aktivasyon nan sandbox la. |
| **Install on network** | Deploy plugin an rezo live a (reqi konfimasyon manual). |
| **Update** | Bay yon nouvo vèsyon atravè AI, ki ranplase kòd ki egziste deja a. |
| **Delete** | Retire plugin la nan sandbox store la. Li deaktive li sou tout sit an premye. |

:::warning
**Install on network** deplwaye plugin ki te kreye a rezo WordPress multisite live ou a. Revize kòd plugin anvan ou kontinye. Gratis AI Agent ap mande pou konfimasyon anvan li fini yon enstalasyon live.
:::

## Enstale Yon Plugin Ki Te Kreye sou Rezo a (On the Network)

Lè ou satisfè ak yon plugin ki te nan sandbox, ou ka enstale l sou rezo live la:

1. Ale nan **Gratis AI Agent → Plugin Builder → Manage Plugins**.
2. Klike sou **Install on Network** bò kote plugin ou vle deplwaye a.
3. Konfime dialog la. Plugin an estale nan `wp-content/plugins/` epi li aktive sou rezo a.

Alternatifman, itilize komand slash la nan entèfas chat la:

```
/install-plugin <plugin-slug>
```

## Mete Update Sou Plugin (Plugin Updates)

Pou mete update sou yon plugin ki te kreye, dekri chanjman an bay asistan AI a nan yon nouvo konvèsasyon:

> "Update dashboard-notice plugin la pou li montre sèlman notifikasyon an admin yo."

AI a pral jenere yon nouvo vèsyon, ki parie nan sandbox la bò kote vèsyon ki genyen an. Ou ap revize diff la epi konfime anvan update a aplike.

## Intégration HookScanner

Le Plugin Builder utilise un **HookScanner** intégré pour analyser les hooks et filtres enregistrés par chaque plugin généré. Le résultat de HookScanner est montré dans la réponse du chat et inclut :

- Les action hooks enregistrés (`add_action` calls).
- Les filter hooks enregistrés (`add_filter` calls).
- Toutes les hooks trouvées dans les dépendances du plugin (il ignore les dossiers `vendor/` et `node_modules/`).

Cela vous aide à comprendre le comportement d'un plugin avant de l'activer.

## Considérations de Sécurité

- Les plugins générés sont stockés séparément des plugins installés manuellement et ne sont pas accessibles via l'écran standard de gestion des plugins WordPress tant que vous ne les installez pas explicitement sur le réseau.
- Le sandbox utilise la validation de chemin pour empêcher la traversée de répertoire lorsque l'on écrit les fichiers du plugin.
- Les plugins avec des appels de fonctions dangereux (par exemple, `eval`, `exec`, `system`) sont signalés pendant la validation et ne seront pas activés.
