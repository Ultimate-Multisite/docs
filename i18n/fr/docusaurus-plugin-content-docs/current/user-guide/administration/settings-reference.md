---
title: Référence des paramètres
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Référence des réglages

Cette page suit les réglages qui affectent l’administration quotidienne et les changements récents de comportement dans Ultimate Multisite.

## Autres options {#other-options}

La zone **Other Options** apparaît sous **Ultimate Multisite > Settings > Login & Registration**.

| Réglage | Description |
|---|---|
| **Enable Jumper** | Affiche l’outil de navigation rapide Jumper dans la zone d’administration. Utilisez-le pour accéder directement aux écrans Ultimate Multisite, aux objets du réseau et aux destinations d’administration prises en charge. Désactivez-le si vous ne voulez pas que ce raccourci soit visible. |

## Signalement des erreurs et télémétrie {#error-reporting-and-telemetry}

L’ancien réglage d’adhésion au signalement des erreurs a été supprimé de la page des réglages. La télémétrie anonyme est désactivée et il n’existe aucun bouton dans l’UI pour l’activer.

Si vous maintenez des runbooks internes ou des captures d’écran pour la page des réglages, supprimez les références à l’ancien champ d’adhésion au signalement des erreurs afin que les administrateurs ne cherchent pas un réglage qui n’est plus présent.

## Réglages d’importation/exportation {#importexport-settings}

L’onglet de réglages **Import/Export** décrit les réglages qu’il contrôle et fournit un lien direct vers **Ultimate Multisite > Site Export** pour les archives de site et de réseau. Utilisez l’onglet des réglages pour la configuration d’importation/exportation, utilisez **Tools > Export & Import** pour le flux de travail d’exportation/importation d’un seul site, et utilisez l’outil Site Export lorsque vous avez besoin d’une archive complète Network Export.

## Avertissement de solde Domain Seller HostAfrica {#domain-seller-hostafrica-balance-warning}

Lorsque l’addon Domain Seller est connecté à HostAfrica, les administrateurs réseau voient désormais un avertissement de solde faible pouvant être ignoré lorsque le solde du compte revendeur est trop bas pour un traitement fiable des enregistrements ou des renouvellements de domaines.

Traitez cet avis comme un avertissement opérationnel : rechargez le solde revendeur HostAfrica avant d’accepter davantage d’enregistrements de domaines payants, puis revenez aux réglages Domain Seller ou à l’écran de surveillance des domaines pour confirmer que les enregistrements et les renouvellements peuvent continuer normalement.

## Réglages des connecteurs de fournisseurs d’IA {#ai-provider-connector-settings}

Les réglages des connecteurs de fournisseurs d’IA exposent désormais uniquement les pools de comptes OAuth pris en charge :

| Fournisseur | Flux de configuration |
|---|---|
| **Anthropic Max** | Connectez un ou plusieurs comptes Anthropic Max avec le bouton OAuth. Utilisez le recours OAuth manuel lorsqu’un navigateur en bac à sable ne peut pas terminer automatiquement la redirection. |
| **OpenAI ChatGPT/Codex** | Connectez les comptes ChatGPT via le même flux de travail de pool OAuth. Les opérations prises en charge par le connecteur peuvent utiliser les appels d’outils ChatGPT Codex une fois le compte connecté. |
| **Google AI Pro** | Connectez les comptes Google AI Pro via OAuth, puis actualisez le connecteur si la liste des comptes ne se met pas à jour immédiatement. |

Cursor Pro n’est plus un fournisseur pris en charge. Supprimez les anciennes captures d’écran internes, les runbooks ou les étapes d’intégration qui mentionnent les champs de configuration Cursor Pro ou les chemins de connecteur.

Lorsque vous ajoutez ou supprimez des comptes de fournisseur, saisissez une adresse e-mail valide pour le compte en cours d’actualisation ou de suppression et enregistrez les réglages du fournisseur avant de tester les opérations reposant sur le connecteur.
