---
title: Gestion des paiements et des factures
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Gestion des paiements et des factures

## Paramètres de paiement

Avant de commencer à recevoir des paiements, vous devez configurer les paramètres liés aux paiements. Accédez à **Ultimate Multisite → Settings** et cliquez sur l'onglet **Payment**.

![Onglet des paramètres de paiement](/img/admin/settings-payments-top.png)

### Options générales de paiement

Dans les paramètres généraux, vous pouvez configurer :

- **Currency** — La devise par défaut utilisée pour les transactions
- **Currency Position** — Où le symbole de devise apparaît (avant/après le montant)

![Paramètres de la passerelle de paiement](/img/admin/settings-payments-options.png)

### Passerelles de paiement

Ultimate Multisite prend en charge plusieurs passerelles de paiement. Vous pouvez activer et configurer chacune d'elles depuis l'onglet Paramètres de paiement.

![Configuration de la passerelle de paiement](/img/admin/settings-payments-gateways.png)

Les passerelles disponibles incluent :

- **Stripe** — Paiements par carte de crédit via Stripe
- **PayPal** — Paiements PayPal
- **Manual** — Pour le traitement des paiements hors ligne ou personnalisés

Chaque passerelle possède sa propre section de configuration où vous saisissez les clés API et d'autres paramètres.

![Paramètres supplémentaires de la passerelle](/img/admin/settings-payments-gateways-2.png)

### Mode bac à sable

Vous pouvez activer le **Sandbox Mode** pour tester votre intégration de paiement avant de passer en production. Lorsque le mode sandbox est actif, aucune charge réelle ne sera effectuée.

## Affichage des paiements

Accédez à la page **Payments** sous Ultimate Multisite pour voir toutes les transactions de votre réseau.

![Liste des paiements](/img/admin/payments-list.png)

Vous pouvez filtrer les paiements par statut (terminé, en attente, échoué, remboursé) et rechercher des transactions spécifiques.

Cliquez sur un paiement pour voir tous ses détails, y compris les éléments de ligne, l'adhésion associée, les informations client et les données de la passerelle de paiement.

## Factures

Ultimate Multisite peut générer automatiquement des factures pour les paiements. Vous pouvez personnaliser le modèle de facture et le format de numérotation depuis les paramètres de paiement.

Les options de personnalisation de la facture incluent :

- **Company name and address** affiché sur les factures
- **Invoice numbering** format et séquence
- **Logo** affiché dans l'en-tête de la facture
- **Custom footer text ** pour les conditions, notes ou informations légales

Pour personnaliser le modèle de facture, accédez à **Ultimate Multisite → Settings → Payment** et recherchez les paramètres liés aux factures.
