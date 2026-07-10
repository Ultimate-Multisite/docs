---
title: Formulaires de paiement
sidebar_position: 19
_i18n_hash: 54516280441cfe5e123ab19bdfbd91af
---
# Formulaires de checkout {#checkout-forms}

Les formulaires de checkout sont un moyen simple et flexible d’expérimenter différentes approches lorsque vous essayez de convertir de nouveaux clients.

Ultimate Multisite 2.0 propose un éditeur de formulaire de checkout qui vous permet de créer autant de formulaires que vous le souhaitez, avec différents champs, produits proposés, etc.

Pour accéder à cette fonctionnalité, allez dans le menu Checkout Forms, dans la barre latérale gauche.

![Liste des formulaires de checkout](/img/config/checkout-forms-list.png)

Sur cette page, vous pouvez voir tous les formulaires de checkout dont vous disposez.

Le tableau de liste inclut une colonne **Status** afin que vous puissiez confirmer si chaque formulaire est actuellement disponible pour les clients :

| Status | Signification |
|---|---|
| **Active** | Le formulaire peut être utilisé partout où son shortcode ou sa page d’inscription est publié. |
| **Inactive** | Le formulaire est enregistré mais désactivé. Les clients ne peuvent pas finaliser le checkout avec celui-ci tant que vous ne le réactivez pas. |

Utilisez la colonne de statut avant de modifier un flux d’inscription public, surtout lorsque vous conservez des formulaires de checkout en brouillon ou saisonniers à côté de vos formulaires en ligne.

Si vous souhaitez en créer un nouveau, cliquez simplement sur Add Checkout Form en haut de la page.

Vous pouvez sélectionner l’une de ces trois options comme point de départ : étape unique, multi-étapes ou vide. Ensuite, cliquez sur Go to the Editor.

Lorsque vous choisissez **étape unique** ou **multi-étapes** comme point de départ, le modèle de formulaire inclut désormais un champ **Sélection de modèle** par défaut. Ce champ permet à vos clients de choisir un modèle de site pendant le processus d’inscription. Vous pouvez le laisser en place, le supprimer ou le repositionner comme n’importe quel autre champ dans l’éditeur.

![Éditeur de formulaire de paiement](/img/config/checkout-form-editor.png)

Vous pouvez également modifier ou dupliquer les formulaires que vous avez déjà en cliquant sur les options sous leur nom. Vous y trouverez aussi les options pour copier le shortcode du formulaire ou supprimer le formulaire.

![Actions au survol du formulaire de paiement](/img/config/checkout-form-hover-actions.png)

#### Vue d’ensemble de l’éditeur de formulaire de paiement {#checkout-form-editor-overview}

L’éditeur de formulaire de paiement fournit une interface complète pour créer vos formulaires d’inscription. Voici une vue d’ensemble de la mise en page de l’éditeur :

![Vue d’ensemble de l’éditeur de formulaire de paiement](/img/config/checkout-form-editor-overview.png)

### Modifier un formulaire de paiement {#editing-a-checkout-form}

Vous pouvez créer des formulaires de paiement pour différents objectifs. Dans cet exemple, nous travaillerons sur un formulaire d’inscription.

Après avoir accédé à l’éditeur de formulaire de paiement, donnez un nom à votre formulaire (qui sera utilisé uniquement comme référence interne) et un slug (utilisé pour créer des shortcodes, par exemple).

![Éditeur de formulaire de paiement](/img/config/checkout-form-editor.png)

Les formulaires sont composés d’étapes et de champs. Vous pouvez ajouter une nouvelle étape en cliquant sur Ajouter une nouvelle étape de paiement.

![Ajouter une nouvelle étape de paiement](/img/config/checkout-form-add-step.png)

Sur le premier onglet de la fenêtre modale, renseignez le contenu de l’étape de votre formulaire. Donnez-lui un ID, un nom et une description. Ces éléments sont principalement utilisés en interne.

![Onglet de contenu de l’étape du formulaire de checkout](/img/config/checkout-form-step-content.png)

Ensuite, définissez la visibilité de l’étape. Vous pouvez choisir entre « Toujours afficher », « Afficher uniquement pour les utilisateurs connectés » ou « Afficher uniquement pour les invités ».

![Onglet de visibilité de l’étape du formulaire de checkout](/img/config/checkout-form-step-visibility.png)

Enfin, configurez le style de l’étape. Ce sont des champs facultatifs.

![Onglet de style de l’étape du formulaire de checkout](/img/config/checkout-form-step-style.png)

Maintenant, il est temps d’ajouter des champs à notre première étape. Cliquez simplement sur Ajouter un nouveau champ et sélectionnez le type de section souhaité.

![Étape du formulaire de checkout avec des champs](/img/config/checkout-form-step-with-fields.png)

Chaque champ a différents paramètres à renseigner. Pour cette première entrée, nous sélectionnerons le champ « Username ».

![Menu déroulant de sélection du type de champ](/img/config/checkout-form-field-type-dropdown.png)

![Paramètres de contenu du champ Username](/img/config/checkout-form-username-content.png)

![Paramètres de visibilité du champ Username](/img/config/checkout-form-username-visibility.png)

![Paramètres de style du champ Username](/img/config/checkout-form-username-style.png)

Vous pouvez ajouter autant d’étapes et de champs que nécessaire. Pour afficher vos produits afin que vos clients puissent en choisir un, utilisez le champ Pricing Table. Si vous souhaitez permettre à vos clients de choisir un template, ajoutez le champ Template Selection. Et ainsi de suite.

![Boîte de dialogue Ajouter un nouveau champ](/img/config/checkout-form-add-field-dialog.png)

_**Remarque :** le nom d’utilisateur, l’e-mail, le mot de passe, le titre du site, l’URL du site, le récapitulatif de la commande, le paiement et le bouton d’envoi sont des champs obligatoires pour créer un formulaire de paiement._

Pendant que vous travaillez sur votre formulaire de paiement, vous pouvez toujours utiliser le bouton Aperçu pour voir comment vos clients verront le formulaire. Vous pouvez également alterner entre l’affichage en tant qu’utilisateur existant ou en tant que visiteur

![Bouton d’aperçu du formulaire de paiement](/img/config/checkout-form-preview-button.png)

![Fenêtre modale d’aperçu du formulaire de paiement](/img/config/checkout-form-preview-modal.png)

Enfin, dans les Options avancées, vous pouvez configurer le message de la page « Thank You », ajouter des snippets pour suivre les conversions, ajouter du CSS personnalisé à votre formulaire de paiement ou le restreindre à certains pays.

![Options avancées](/img/config/checkout-form-advanced.png)

Vous pouvez également activer ou désactiver manuellement votre formulaire de paiement en basculant cette option dans la colonne de droite, ou supprimer définitivement le formulaire.

![Bouton bascule Actif](/img/config/checkout-form-active.png)

Pour supprimer un formulaire, cliquez sur l’option de suppression dans les actions du formulaire :

![Option de suppression du formulaire de paiement](/img/config/checkout-form-delete.png)

N’oubliez pas d’enregistrer votre formulaire de paiement !

![Bouton Enregistrer](/img/config/checkout-form-save.png)

Pour obtenir le shortcode de votre formulaire, cliquez sur Generate Shortcode et copiez le résultat affiché dans la fenêtre modale.

![Bouton Enregistrer avec shortcode](/img/config/checkout-form-save.png)

### Le champ Tableau des tarifs {#the-pricing-table-field}

Le champ **Tableau des tarifs** affiche vos produits sur le formulaire de checkout afin que les clients puissent choisir une offre. Lorsque vous modifiez ce champ, vous pouvez configurer plusieurs options :

![Réglages du champ Tableau des tarifs](/img/config/pricing-table-field-settings.png)

Voici comment le tableau des tarifs apparaît sur le formulaire d’inscription côté frontend :

![Tableau des tarifs de checkout côté frontend](/img/config/frontend-checkout-pricing-table.png)

  * **Produits** : sélectionnez les produits à afficher et l’ordre dans lequel ils apparaissent.
  * **Forcer des durées différentes** : lorsque cette option est activée, tous les produits sont affichés, qu’ils disposent ou non d’une variation de prix correspondant à la période de facturation actuellement sélectionnée. Lorsqu’elle est désactivée (par défaut), les produits sans variation pour la période sélectionnée sont masqués.
    ![Option de forçage des durées du tableau des tarifs](/img/config/pricing-table-force-durations.png)
  * **Masquer lorsqu’une offre est présélectionnée** : masque le tableau des tarifs lorsqu’une offre a déjà été sélectionnée via l’URL (par ex. `/register/premium`).
  * **Modèle de tableau des tarifs** : choisissez le modèle visuel du tableau des tarifs (Liste simple, Legacy, etc.).

Si vous ajoutez un produit au Tableau des tarifs avant que le formulaire n’inclue les champs requis pour terminer le flux de checkout de ce produit, l’éditeur affiche désormais un avertissement. Utilisez cet avertissement pour ajouter le champ obligatoire manquant avant de publier ou d’enregistrer les modifications d’un formulaire d’inscription en ligne.

### Ajouter un bouton de sélection de période {#adding-a-period-selection-toggle}

Si vous avez configuré des [variations de prix](creating-your-first-subscription-product#price-variations) sur vos produits (par exemple, une tarification mensuelle et annuelle), vous pouvez ajouter un champ **Period Selection** à votre formulaire de checkout. Ce champ affiche un bouton de bascule qui permet aux clients de passer d’une période de facturation à une autre, et le tableau des prix se met à jour dynamiquement en temps réel.

#### Étape 1 : configurer les variations de prix sur vos produits {#step-1-set-up-price-variations-on-your-products}

Avant d’ajouter le champ Period Selection, assurez-vous que vos produits ont des variations de prix configurées. Allez dans **Ultimate Multisite > Products**, modifiez un produit, puis accédez à l’onglet **Price Variations** pour ajouter d’autres périodes de facturation (par exemple, annuelle avec un prix réduit).

![Onglet Price Variations sur un produit](/img/config/product-price-variations-tab.png)

#### Étape 2 : ajouter le champ Period Selection à votre formulaire de checkout {#step-2-add-the-period-selection-field-to-your-checkout-form}

1. Allez dans **Ultimate Multisite > Checkout Forms** et modifiez votre formulaire de checkout.

2. Faites défiler jusqu’à l’étape qui contient votre champ **Pricing Table** et cliquez sur **Add new Field**.

3. Dans la boîte de dialogue de sélection du type de champ, cliquez sur **Period Select**.

![Boîte de dialogue Add New Field affichant Period Select](/img/config/checkout-form-add-field-dialog.png)

4. Configurez les options de période. Chaque option nécessite :
   * **Duration** : le nombre (par exemple `1`)
   * **Duration unit** : le type de période (Days, Weeks, Months ou Years)
   * **Label** : le texte que les clients verront (par exemple, « Monthly », « Annual »)

5. Cliquez sur **+ Ajouter une option** pour ajouter d’autres choix de période. Ces options doivent correspondre aux variations de prix que vous avez configurées sur vos produits.

![Paramètres du champ de sélection de période](/img/config/period-selection-field-settings.png)

6. Choisissez un **modèle de sélecteur de période** (Clean est la valeur par défaut, qui affiche un sélecteur simple et stylisé, prêt pour du CSS personnalisé).

7. Cliquez sur **Enregistrer le champ**.

#### Étape 3 : Positionner le champ au-dessus du tableau des prix {#step-3-position-the-field-above-the-pricing-table}

Pour une meilleure expérience utilisateur, assurez-vous que le champ de sélection de période apparaît **avant** le champ du tableau des prix dans votre étape de checkout. Vous pouvez faire glisser les champs pour les réordonner dans l’éditeur de formulaire de checkout. Ainsi, les clients choisissent d’abord une période de facturation, puis voient les prix correspondant à cette période.

![Éditeur de formulaire de checkout affichant l’ordre des champs](/img/config/checkout-form-editor-with-fields.png)

#### Fonctionnement sur le frontend {#how-it-works-on-the-frontend}

Une fois la configuration terminée, les clients qui visitent votre page d’inscription verront le sélecteur de période au-dessus du tableau des prix. Lorsqu’ils cliquent sur une autre période de facturation :

  * Le tableau des prix se met instantanément à jour pour afficher les prix de la période sélectionnée (aucun rechargement de page requis).
  * Si **Forcer des durées différentes** est désactivé sur le champ du tableau des prix, les produits sans variation de prix pour la période sélectionnée seront masqués.
  * Si **Forcer des durées différentes** est activé, tous les produits restent visibles même s’ils n’ont pas de variation pour la période sélectionnée (ils afficheront leur prix par défaut).

#### Présélectionner une période de facturation via l’URL {#pre-selecting-a-billing-period-via-url}

Vous pouvez également présélectionner un produit et une période de facturation via l’URL. Ultimate Multisite prend en charge ces modèles d’URL :

  * `/register/premium` — Présélectionne uniquement le produit « Premium »
  * `/register/premium/12` — Présélectionne le produit et une durée de 12 mois
  * `/register/premium/1/year` — Présélectionne le produit avec une durée de 1 an

### Le champ de sélection de modèle {#the-template-selection-field}

Le champ **Sélection de modèle** permet aux clients de choisir un modèle de site pendant le paiement. Il est désormais inclus par défaut dans les modèles de formulaires de paiement **en une seule étape** et **en plusieurs étapes** ajoutés dans Ultimate Multisite v2.6.1.

#### Ajouter le champ manuellement {#adding-the-field-manually}

Si vous travaillez avec un formulaire créé avant la v2.6.1, ou parti d’un modèle vierge :

1. Allez dans **Ultimate Multisite > Formulaires de paiement** et modifiez votre formulaire de paiement.
2. À l’étape où les détails du site sont collectés, cliquez sur **Ajouter un nouveau champ**.
3. Sélectionnez **Sélection de modèle** dans la boîte de dialogue du type de champ.
4. Configurez le champ :
   - **Libellé** — Le titre que les clients voient au-dessus de la grille de modèles (par ex. « Choisissez un modèle de site »).
   - **Obligatoire** — Indique si les clients doivent sélectionner un modèle avant de continuer.

#### Fonctionnement {#how-it-works}

Lorsqu’un client choisit un modèle pendant le paiement, Ultimate Multisite l’utilise lors du provisionnement de son nouveau site. Les modèles affichés proviennent de votre liste **Modèles de site** (**Ultimate Multisite > Modèles de site**). Seuls les modèles marqués comme disponibles pour les clients apparaissent ici.

### Domaines de base des formulaires de paiement {#checkout-form-base-domains}

Ultimate Multisite v2.13.0 traite les domaines configurés dans les champs **Site URL** du formulaire de paiement comme des domaines de base du réseau. Utilisez les paramètres de domaine disponible du champ lorsque vous souhaitez que les clients créent des sites sous un ou plusieurs domaines d’inscription partagés, tels que `example.com` et `sites.example.com`.

Les domaines de base partagés du formulaire de paiement ne sont pas traités comme des mappages de domaines personnalisés par site. Lorsqu’un client crée un site en sous-répertoire sur l’une de ces bases, Ultimate Multisite ne crée pas d’enregistrement de domaine mappé qui ferait appartenir l’hôte partagé uniquement à ce site. L’hôte partagé reste disponible pour les sites frères qui utilisent la même base de formulaire de paiement.

Réservez les domaines personnalisés aux hôtes mappés propres à chaque client, tels que `customer-example.com`. Réservez les domaines de base du formulaire de paiement aux hôtes d’inscription partagés que de nombreux sites peuvent utiliser.

#### Suppression du champ {#removing-the-field}

Si vous ne proposez pas de modèles de site, supprimez le champ Template Selection de votre formulaire. Les clients recevront alors le modèle par défaut configuré sous **Ultimate Multisite > Settings > Site Templates**.
