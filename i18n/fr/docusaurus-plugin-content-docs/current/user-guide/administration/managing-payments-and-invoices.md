---
title: Gestion des paiements et des factures
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Gestion des paiements et des factures

## Paramètres de paiement

Avant de commencer à recevoir des paiements, vous devrez configurer les paramètres liés au paiement. Accédez à **Ultimate Multisite → Settings** et cliquez sur l’onglet **Payment**.

![Onglet des paramètres de paiement](/img/admin/settings-payments-top.png)

Voici une vue complète de la page des paramètres de paiement :

![Page complète des paramètres de paiement](/img/admin/settings-payments-full.png)

### Options générales de paiement

Dans les paramètres généraux, vous pouvez configurer :

- **Devise** — La devise par défaut utilisée pour les transactions
- **Position de la devise** — L’emplacement où le symbole de devise apparaît (avant/après le montant)

![Paramètres de la passerelle de paiement](/img/admin/settings-payments-options.png)

### Passerelles de paiement

Ultimate Multisite prend en charge plusieurs passerelles de paiement. Vous pouvez activer et configurer chacune d’elles depuis l’onglet des paramètres de paiement.

![Configuration des passerelles de paiement](/img/admin/settings-payments-gateways.png)

Les passerelles disponibles incluent :

- **Stripe** — Paiements par carte bancaire via Stripe
- **PayPal** — Paiements PayPal
- **Manuel** — Pour le traitement des paiements hors ligne ou personnalisé

Chaque passerelle dispose de sa propre section de configuration où vous saisissez les clés API et d’autres paramètres.

![Paramètres supplémentaires des passerelles](/img/admin/settings-payments-gateways-2.png)

### Mode sandbox

Vous pouvez activer le **mode sandbox** pour tester votre intégration de paiement avant la mise en production. Lorsque le mode sandbox est actif, aucun débit réel ne sera effectué.

## Consultation des paiements

Accédez à la page **Payments** sous Ultimate Multisite pour voir toutes les transactions sur l’ensemble de votre réseau.

![Liste des paiements](/img/admin/payments-list.png)

Vous pouvez filtrer les paiements par statut (terminé, en attente, échoué, remboursé) et rechercher des transactions spécifiques.

Cliquez sur un paiement pour voir tous ses détails, y compris les lignes d’articles, l’adhésion associée, les informations client et les données de la passerelle de paiement.

## Factures

Ultimate Multisite peut générer automatiquement des factures pour les paiements. Vous pouvez personnaliser le modèle de facture et le format de numérotation depuis les paramètres de paiement.

Les options de personnalisation des factures incluent :

- **Nom et adresse de l’entreprise** affichés sur les factures
- **Numérotation des factures** format et séquence
- **Logo** affiché dans l’en-tête de la facture
- **Texte de pied de page personnalisé** pour les conditions, les notes ou les informations légales

Pour personnaliser le modèle de facture, allez dans **Ultimate Multisite → Settings → Payment** et recherchez les paramètres liés aux factures.
