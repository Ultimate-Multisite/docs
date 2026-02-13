---
title: Formulaires de paiement
sidebar_position: 19
_i18n_hash: 66bfff807dcb07f2c495741a4fa601b9
---
# Formulaires de paiement

Les formulaires de paiement sont un moyen simple et flexible d'expérimenter différentes approches pour convertir de nouveaux clients.

Ultimate Multisite 2.0 propose un éditeur de formulaires de paiement qui vous permet de créer autant de formulaires que vous le souhaitez, avec différents champs, produits proposés, etc.

Pour accéder à cette fonctionnalité, allez dans le menu Formulaires de paiement, dans la barre latérale gauche.

![Checkout Forms list](/img/config/checkout-forms-list.png)

Sur cette page, vous pouvez voir tous les formulaires de paiement que vous avez.

Si vous souhaitez en créer un nouveau, cliquez simplement sur **Ajouter un formulaire de paiement** en haut de la page.

Vous pouvez choisir l'une de ces trois options comme point de départ : étape unique, étape multiple ou vide. Ensuite, cliquez sur **Aller à l'éditeur**.

![Checkout Form editor](/img/config/checkout-form-editor.png)

Vous pouvez également modifier ou dupliquer les formulaires que vous avez déjà en cliquant sur les options sous son nom. Vous y trouverez également les options pour copier le shortcode du formulaire ou supprimer le formulaire.

![Checkout form hover actions](/img/config/checkout-form-hover-actions.png)

### Modifier un formulaire de paiement

Vous pouvez créer des formulaires de paiement pour différentes finalités. Dans cet exemple, nous travaillerons sur un formulaire d'inscription.

Après être arrivé dans l'éditeur de formulaire de paiement, donnez à votre formulaire un nom (qui sera utilisé uniquement à des fins de référence interne) et un slug (utilisé, par exemple, pour créer des shortcodes).

![Checkout Form editor](/img/config/checkout-form-editor.png)

Les formulaires sont composés d'étapes et de champs. Vous pouvez ajouter une nouvelle étape en cliquant sur **Ajouter une nouvelle étape de paiement**.

![Add New Checkout Step](/img/config/checkout-form-add-step.png)

Dans l'onglet premier de la fenêtre modale, remplissez le contenu de l'étape de votre formulaire. Donnez-lui un ID, un nom et une description. Ces éléments sont principalement utilisés en interne.

![Checkout form step](/img/config/checkout-form-step.png)

Ensuite, définissez la visibilité de l'étape. Vous pouvez choisir entre « Toujours afficher », « Afficher uniquement pour les utilisateurs connectés » ou « Afficher uniquement pour les visiteurs ».

![Checkout form step](/img/config/checkout-form-step.png)

Enfin, configurez le style de l'étape. Il s'agit de champs facultatifs.

![Checkout form step](/img/config/checkout-form-step.png)

Il est maintenant temps d'ajouter des champs à notre première étape. Cliquez simplement sur **Ajouter un nouveau champ** et sélectionnez le type de section que vous souhaitez.

![Checkout form step with fields](/img/config/checkout-form-step.png)

Chaque champ possède différents paramètres à remplir. Pour cette première entrée, nous sélectionnerons le champ « Nom d'utilisateur ».

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

![Checkout form step](/img/config/checkout-form-step.png)

Vous pouvez ajouter autant d'étapes et de champs que vous le souhaitez. Pour afficher vos produits afin que vos clients en choisissent un, utilisez le champ Tableau de prix. Si vous souhaitez que vos clients choisissent un modèle, ajoutez le champ Sélection de modèle. Et ainsi de suite.

_**Remarque :** nom d'utilisateur, e‑mail, mot de passe, titre du site, URL du site, résumé de la commande, paiement et bouton d'envoi sont des champs obligatoires pour créer un formulaire de paiement._

Pendant que vous travaillez sur votre formulaire de paiement, vous pouvez toujours utiliser le bouton Aperçu pour voir comment vos clients verront le formulaire. Vous pouvez également alterner entre la vue en tant qu'utilisateur existant ou visiteur

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

Enfin, dans les options avancées, vous pouvez configurer le message de la page « Merci », ajouter des extraits pour suivre les conversions, ajouter du CSS personnalisé à votre formulaire de paiement ou le restreindre à certains pays.

![Advanced Options](/img/config/checkout-form-advanced.png)

Vous pouvez également activer ou désactiver manuellement votre formulaire de paiement en basculant cette option dans la colonne de droite, ou supprimer définitivement le formulaire.

![Active toggle](/img/config/checkout-form-active.png)

N'oubliez pas d'enregistrer votre formulaire de paiement !

![Save button](/img/config/checkout-form-save.png)

Pour obtenir le shortcode de votre formulaire, cliquez sur **Générer le shortcode** et copiez le résultat affiché dans la fenêtre modale.

![Save button with shortcode](/img/config/checkout-form-save.png)
