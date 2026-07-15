---
title: Produits du Domaine et Tarification
sidebar_position: 2
_i18n_hash: 48757ad5b423db8f169a793b96d7bc71
---
# Produits et tarifs de domaine

Les produits de domaine vous permettent de gérer les tarifs, les TLD, la confidentialité WHOIS et la sélection de fournisseurs. Chaque produit de domaine est un produit standard Ultimate Multisite avec un onglet supplémentaire **Paramètres du domaine**.

## Créer un produit de domaine {#creating-a-domain-product}

1. Allez dans **Administration du réseau › Ultimate Multisite › Produits**
2. Cliquez sur **Ajouter un nouveau**
3. Définissez le type de produit sur **Domaine**
4. Configurez l'onglet **Paramètres du domaine** (voir ci-dessous)
5. Enregistrez

Les produits de domaine apparaissent avec un badge **Domaine** violet dans la liste des produits et peuvent être filtrés à l'aide de l'onglet **Produits de domaine**.

## Onglet paramètres du domaine {#domain-settings-tab}

### Fournisseur {#provider}

Sélectionnez l'enregistrement qui gère l'enregistrement pour ce produit. Par défaut, il utilise le **Fournisseur par défaut** global défini dans les paramètres de Domain Seller.

### TLD pris en charge {#supported-tlds}

Laissez ce champ vide pour créer un **produit de capture général** qui s'applique à tous les TLD non pris en charge par un autre produit.

Entrez une liste de TLD séparés par des virgules (par exemple, `.com, .net, .org`) pour créer un **produit spécifique au TLD** qui ne s'applique qu'à ces extensions.

**Comment fonctionne la correspondance des produits :** Lorsqu'un client recherche un domaine, l'addon sélectionne le produit correspondant le plus spécifique. Un produit contenant `.com` dans sa liste de TLD a la priorité sur un produit de capture général. Si aucun produit spécifique au TLD ne correspond, le produit de capture général est utilisé. Si aucun produit n'existe, la recherche de domaine n'est pas affichée.

### Type de marge {#markup-type}

Trois modes contrôlent la manière dont votre prix de détail est calculé à partir du coût de gros :

| Mode | Fonctionnement |
|---|---|
| **Pourcentage** | Ajoute un pourcentage au coût de gros. Une marge de 20 % sur un domaine de gros de 10 $ donne 12 $. |
| **Marge fixe** | Ajoute un montant fixe en dollars. Une marge de 5 $ sur un domaine de 10 $ donne 15 $. |
| **Prix fixe** | Ignore complètement le coût de gros. Facture toujours le montant que vous entrez. |

### Tarification d'introduction {#introductory-pricing}

Activez cette option pour proposer un prix réduit pour la première année. Définissez un **Prix d'introduction** séparé (le prix de l'année 1) en plus du **Prix de renouvellement** régulier (année 2 et suivantes). Le client voit les deux prix affichés pendant le paiement afin de savoir à quoi s'attendre lors du renouvellement.

### Confidentialité WHOIS {#whois-privacy}

Contrôle si la protection de la confidentialité WHOIS est offerte pour les domaines enregistrés via ce produit.

| Paramètre | Comportement |
|---|---|
| **Désactivé** | La confidentialité WHOIS n'est jamais offerte ni activée. |
| **Toujours inclus** | La confidentialité WHOIS est activée automatiquement lors de l'enregistrement sans frais. |
| **Choix du client** | Une case à cocher apparaît pendant le paiement. Définissez le **Prix de confidentialité** pour facturer par an, ou laissez-le à 0 $ pour l'offrir gratuitement. |

Pour Namecheap, la confidentialité WHOIS utilise WhoisGuard (toujours gratuit). Pour OpenSRS, elle utilise le service de confidentialité OpenSRS (peut avoir un coût au niveau du gros).

---

## Importation et synchronisation des TLD {#tld-import-and-sync}

Les produits de domaine affichent les prix de gros en temps réel récupérés auprès du fournisseur connecté. Pour que cela fonctionne, les TLD doivent être importés.

- **Synchronisation manuelle :** Paramètres › Domain Seller › Synchroniser les TLD (par fournisseur)
- **Synchronisation automatique :** S'exécute quotidiennement via un cron job planifié sur tous les fournisseurs configurés

Après une synchronisation, accédez à l'onglet Paramètres du domaine de n'importe quel produit de domaine et utilisez le sélecteur de TLD pour voir les TLD disponibles avec leurs prix de gros actuels.

---

## Auto-renouvellement {#auto-renewal}

Les renouvellements de domaine sont liés au statut d'adhésion du client :

- Lorsqu'un abonnement est renouvelé et qu'un domaine y est lié, le renouvellement du domaine est automatiquement mis en file d'attente
- Les tentatives de renouvellement utilisent la passerelle de paiement active du client
- Les renouvellements échoués sont automatiquement retentés avec un *backoff* exponentiel
- Des notifications par e-mail sont envoyées pour les renouvellements réussis, les échecs et les expirations à venir

IDs de modèles d'e-mail pour les événements du cycle de vie du domaine :

| Événement | ID du modèle |
|---|---|
| Domaine enregistré | `domain_registered` |
| Domaine renouvelé | `domain_renewed` |
| Renouvellement échoué | `domain_renewal_failed` |
| Domaine expirant bientôt | `domain_expiring_soon` |

---

## Admin : Enregistrement manuel de domaine {#admin-manual-domain-registration}

Pour enregistrer un domaine au nom d'un client sans qu'il ait à passer par le processus de paiement :

1. Allez dans **Administration du réseau › Ultimate Multisite › Enregistrer un domaine**
2. Sélectionnez le client et entrez le nom de domaine
3. Remplissez les coordonnées de l'enregistreur (nom, adresse, téléphone)
4. Cliquez sur **Enregistrer**

L'enregistrement du domaine est créé et lié au compte du client.
