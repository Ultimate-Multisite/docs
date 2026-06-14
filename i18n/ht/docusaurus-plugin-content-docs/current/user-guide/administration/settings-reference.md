---
title: Referans Konfigirasyon
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Référence des Paramètres

Sa page montre les paramètres qui affectent l'administration quotidienne et les changements récents de comportement dans Ultimate Multisite.

## Autres Options

La section **Autres Options** s'affiche sous **Ultimate Multisite > Settings > Login & Registration**.

| Paramètre | Description |
|---|---|
| **Activer Jumper** | Affiche l'outil de navigation rapide Jumper dans la zone d'administration. Utilisez-le pour sauter directement vers les écrans Ultimate Multisite, les objets réseau et les destinations d'administration prises en charge. Désactive-le si vous ne voulez pas que ce raccourci soit visible. |

## Signalement des erreurs et télémétrie

Le paramètre précédent permettant de s'inscrire au signalement d'erreurs a été retiré de la page des paramètres. La télémétrie anonyme est désactivée et il n'y a pas d'interrupteur dans l'interface utilisateur pour l'activer.

Si vous maintenez des manuels internes ou des captures d'écran pour la page des paramètres, supprimez les références à l'ancien champ d'inscription au signalement d'erreurs afin que les administrateurs ne cherchent pas un paramètre qui n'existe plus.

## Paramètres d'importation/exportation

L'onglet **Import/Export** décrit quels paramètres il contrôle et renvoie directement à **Ultimate Multisite > Site Export** pour les archives de site et de réseau. Utilisez l'onglet des paramètres pour la configuration d'importation/exportation, utilisez **Tools > Export & Import** pour le flux de travail d'exportation/importation du site unique, et utilisez l'outil Site Export lorsque vous avez besoin d'une archive complète d'Export Réseau.

## Paramètres du connecteur fournisseur d'IA

Les paramètres du connecteur fournisseur d'IA n'exposent maintenant que les pools de comptes OAuth pris en charge :

| Fournisseur | Flot de configuration |
|---|---|
| **Anthropic Max** | Konekte yon oswa plizyè kont Anthropic Max ak bouton OAuth la. Itilize fallback OAuth manèl la lè yon bwat ki gen sandboxed browser pa ka konplete redireksyon otomatikman. |
| **OpenAI ChatGPT/Codex** | Konekte kont ChatGPT yo atravè menm flwa travay OAuth sa a. Operasyon ki sipòte konektè yo ka itilize zouti tool call ChatGPT Codex apre kont la konekte. |
| **Google AI Pro** | Konekte kont Google AI Pro yo atravè OAuth, epi rafraîchi konektè a si lis kont la pa mete sou aktè imedyatman. |

Cursor Pro pa gen sipò ankò kòm fournisseur. Retire tout ekran anndan ki pa sipòte (screenshots), runbook, oswa etap onboarding ki mansyone konfigirasyon Cursor Pro oubyen chemen konektè yo.

Lè ou ap ajoute oswa retire kont fournisseur, mete yon adrès imèl valide pou kont la k ap rafraîchi oswa delete epi kayte tout paramèt fournisseur anvan ou teste operasyon ki baze sou konektè a.
