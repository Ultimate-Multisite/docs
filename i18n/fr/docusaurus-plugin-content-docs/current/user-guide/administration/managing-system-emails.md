---
title: Gestion des e-mails système
sidebar_position: 13
_i18n_hash: 6dc6899342f363987fd7307df698a5bb
---
# Gestion des emails système

Ultimate Multisite envoie divers emails système pour des événements tels que les confirmations d’inscription, les reçus de paiement et les changements d’abonnement. Vous pouvez personnaliser ces modèles d’email pour qu’ils correspondent à votre marque.

## Afficher les emails système {#viewing-system-emails}

Accédez à **Ultimate Multisite → Settings** et cliquez sur l’onglet **Emails** pour voir les réglages liés aux emails.

![Onglet Settings - Emails](/img/admin/settings-emails.png)

À partir de là, vous pouvez accéder à la page **System Emails** pour voir tous les modèles d’email.

![Liste System Emails](/img/admin/system-emails-list.png)

Vous pouvez également modifier des modèles d’email individuels à l’aide de l’éditeur d’email système :

![Éditeur d’email système](/img/admin/system-email-editor.png)

## Importer de nouveaux modèles d’email {#importing-new-email-templates}

Les nouvelles versions de Ultimate Multisite et les modules complémentaires peuvent enregistrer de nouveaux modèles d’email. Pour éviter les conflits, les nouveaux modèles ne sont pas ajoutés automatiquement — vous devez les importer manuellement.

Pour importer de nouveaux modèles d’email :

1. Accédez à la page **System Emails**
2. Cliquez sur le bouton **Reset & Import** en haut de la page
3. Activez l’option **Import Emails** pour voir les modèles disponibles
4. Sélectionnez les modèles que vous souhaitez importer et confirmez

## Réinitialiser les modèles d’email {#resetting-email-templates}

Si vous avez personnalisé un modèle d’email et souhaitez revenir au contenu par défaut, vous avez deux options :

1. **Supprimer et réimporter** — Supprimez l’email système et importez-le à nouveau (cela efface les métriques d’envoi)
2. **Réinitialiser via l’outil** — Utilisez l’outil **Reset & Import**, activez l’option **Reset**, puis sélectionnez les emails que vous souhaitez réinitialiser

L’option Reset est préférable, car elle préserve les métriques d’envoi et les autres métadonnées tout en restaurant le contenu par défaut.
