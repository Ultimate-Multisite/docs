---
title: Personnaliser votre formulaire d’inscription
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personnaliser votre formulaire d’inscription

Pour donner à votre réseau une apparence unique par rapport à tous les autres SaaS construits sur la plateforme WordPress, Ultimate Multisite vous permet de personnaliser vos pages d’inscription et de connexion avec notre fonctionnalité **Checkout Forms**.

Bien qu’ils constituent un moyen simple et flexible d’expérimenter différentes approches lorsque vous essayez de convertir de nouveaux clients, ils sont principalement utilisés pour créer des formulaires d’inscription personnalisés. Cet article vise à vous montrer comment vous pouvez le faire.

## Pages de connexion et d’inscription :

Lors de l’installation de Ultimate Multisite, celui-ci crée automatiquement des pages de connexion et d’inscription personnalisées sur votre site principal. Vous pouvez modifier ces pages par défaut à tout moment en vous rendant sur votre page **Ultimate Multisite > Settings > Login & Registration**.

![Page des réglages de connexion et d’inscription](/img/config/settings-general.png)

Voici une vue complète de la page des réglages de connexion et d’inscription :

![Page complète des réglages de connexion et d’inscription](/img/config/settings-login-registration-full.png)

Examinons chacune des options que vous pouvez personnaliser sur la page **Login & Registration** :

  * **Enable registration :** Cette option activera ou désactivera l’inscription sur votre réseau. Si elle est désactivée, vos clients ne pourront pas s’inscrire ni souscrire à vos produits.

  * **Enable email verification :** Si cette option est activée, les clients qui souscrivent à un plan gratuit ou à un plan payant avec une période d’essai recevront un e-mail de vérification et devront cliquer sur le lien de vérification pour que leurs sites web soient créés.

  * **Default registration page :** Il s’agit de la page par défaut pour l’inscription. Cette page doit être publiée sur votre site web et contenir un formulaire d’inscription (également appelé formulaire de checkout) — où vos clients souscriront à vos produits. Vous pouvez créer autant de pages d’inscription et de formulaires de checkout que vous le souhaitez ; n’oubliez simplement pas de placer le shortcode du formulaire de checkout sur la page d’inscription, sinon il n’apparaîtra pas.

  * **Use custom login page :** Cette option vous permet d’utiliser une page de connexion personnalisée, différente de la page wp-login.php par défaut. Si cette option est activée, vous pouvez sélectionner quelle page sera utilisée pour la connexion dans l’option **Default login page** (juste en dessous).

  * **Obfuscate the original login url (wp-login.php)** : Si vous souhaitez masquer l’URL de connexion d’origine, vous pouvez activer cette option. C’est utile pour prévenir les attaques par force brute. Si cette option est activée, Ultimate Multisite affichera une erreur 404 lorsqu’un utilisateur tentera d’accéder au lien wp-login.php d’origine

  * **Force synchronous site publication :** Après qu’un client a souscrit à un produit sur un réseau, le nouveau site en attente doit être converti en véritable site du réseau. Le processus de publication s’effectue via Job Queue, de manière asynchrone. Activez cette option pour forcer la publication à se produire dans la même requête que l’inscription.

Voyons maintenant d’autres options qui restent pertinentes pour le processus de connexion et d’inscription. Elles se trouvent juste sous **Other options** sur la même page Login & registration :

  * **Default role :** Il s’agit du rôle que vos clients auront sur leur site web après le processus d’inscription.

  * **Enable Jumper :** Active le raccourci Jumper dans la zone d’administration. Jumper permet aux administrateurs d’accéder rapidement aux écrans Ultimate Multisite, aux objets du réseau et à d’autres destinations prises en charge sans parcourir chaque menu. Désactivez-le si vous préférez masquer cet outil de navigation rapide dans l’interface d’administration.

  * **Add users to the main site as well :** L’activation de cette option ajoutera également l’utilisateur au site principal de votre réseau après le processus d’inscription. Si vous activez cette option, une option permettant de définir le **default role** de ces utilisateurs sur votre site web apparaîtra également juste en dessous.

  * **Enable multiple accounts :** Permet aux utilisateurs d’avoir des comptes sur différents sites de votre réseau avec la même adresse e-mail. Si cette option est désactivée, vos clients ne pourront pas créer de compte sur d’autres sites web fonctionnant sur votre réseau avec la même adresse e-mail.

Et voilà toutes les options liées à la connexion et à l’inscription que vous pouvez personnaliser ! N’oubliez pas d’enregistrer vos réglages après avoir terminé de les modifier.

## Utiliser plusieurs formulaires d’inscription :

Ultimate Multisite 2.0 propose un éditeur de formulaire de checkout qui vous permet de créer autant de formulaires que vous le souhaitez, avec différents champs, produits proposés, etc.

Les pages de connexion et d’inscription sont toutes deux intégrées avec des shortcodes : **[wu_login_form]** sur la page de connexion et**[wu_checkout]** pour la page d’inscription. Vous pouvez personnaliser davantage la page d’inscription en construisant ou en créant des formulaires de checkout.

Pour accéder à cette fonctionnalité, rendez-vous dans le menu **Checkout Forms**, dans la barre latérale gauche.

![Menu Checkout Forms dans la barre latérale](/img/config/checkout-forms-list.png)

Sur cette page, vous pouvez voir tous les formulaires de checkout dont vous disposez.

Si vous voulez en créer un nouveau, cliquez simplement sur **Add Checkout Form** en haut de la page.

Vous pouvez sélectionner l’une de ces trois options comme point de départ : étape unique, multi-étapes ou vierge. Ensuite, cliquez sur **Go to the Editor**.

![Ajouter un Checkout Form avec les options étape unique, multi-étapes ou vierge](/img/config/checkout-forms-list.png)

Vous pouvez également modifier ou dupliquer les formulaires que vous avez déjà en cliquant sur les options sous leur nom. Vous y trouverez aussi les options permettant de copier le shortcode du formulaire ou de supprimer le formulaire.

![Actions au survol du formulaire de checkout avec modifier, dupliquer et supprimer](/img/config/checkout-form-hover-actions.png)

Si vous sélectionnez étape unique ou multi-étapes, le formulaire de checkout sera déjà prérempli avec les étapes de base nécessaires à son fonctionnement. Ensuite, si vous le souhaitez, vous pouvez y ajouter des étapes supplémentaires.

### Modifier un Checkout Form :

Comme nous l’avons mentionné précédemment, vous pouvez créer des formulaires de checkout pour différents objectifs. Dans cet exemple, nous allons travailler sur un formulaire d’inscription.

Après avoir accédé à l’éditeur de formulaire de checkout, donnez un nom à votre formulaire (qui sera utilisé uniquement comme référence interne) et un slug (utilisé pour créer des shortcakes, par exemple).

![Éditeur de formulaire de paiement avec champs de nom et de slug](/img/config/checkout-form-name-slug.png)

Les formulaires sont composés d’étapes et de champs. Vous pouvez ajouter une nouvelle étape en cliquant sur **Ajouter une nouvelle étape de paiement**.

![Bouton Ajouter une nouvelle étape de paiement](/img/config/checkout-form-add-step.png)

Dans le premier onglet de la fenêtre modale, renseignez le contenu de l’étape de votre formulaire. Donnez-lui un ID, un nom et une description. Ces éléments sont principalement utilisés en interne.

![Onglet de contenu de l’étape de paiement avec ID, nom et description](/img/config/checkout-form-step-content.png)

Ensuite, définissez la visibilité de l’étape. Vous pouvez choisir entre **Toujours afficher** , **Afficher uniquement pour les utilisateurs connectés** ou **Afficher uniquement pour les invités**.

![Options de visibilité de l’étape de paiement](/img/config/checkout-form-step-visibility.png)

Enfin, configurez le style de l’étape. Ce sont des champs facultatifs.

![Configuration du style de l’étape de paiement](/img/config/checkout-form-step-style.png)

Maintenant, il est temps d’ajouter des champs à notre première étape. Cliquez simplement sur **Ajouter un nouveau champ** et sélectionnez le type de section souhaité.

![Bouton Ajouter un nouveau champ](/img/config/checkout-form-add-field-button.png)![Menu déroulant de sélection du type de champ](/img/config/checkout-form-field-type-dropdown.png)

Chaque champ a différents paramètres à renseigner. Pour cette première entrée, nous sélectionnerons le champ **Nom d’utilisateur**.

![Configuration du champ Nom d’utilisateur](/img/config/checkout-form-username-content.png)![Paramètres du champ Nom d’utilisateur](/img/config/checkout-form-username-visibility.png)![Paramètres supplémentaires du champ Nom d’utilisateur](/img/config/checkout-form-username-style.png)

Vous pouvez ajouter autant d’étapes et de champs que nécessaire. Pour afficher vos produits afin que vos clients puissent en choisir un, utilisez le champ Tableau des prix. Si vous voulez laisser vos clients choisir un modèle, ajoutez le champ Sélection de modèle. Et ainsi de suite.

![Éditeur de formulaire de paiement avec champ de sélection de modèle](/img/config/checkout-form-with-template-field.png)

_**Remarque :** Si vous créez un produit après avoir créé votre formulaire de paiement, vous devrez ajouter le produit dans la section Tableau des prix. Si vous ne l’ajoutez pas, le produit n’apparaîtra pas à vos clients sur la page d’inscription._

_**Remarque 2 :** le nom d’utilisateur, l’e-mail, le mot de passe, le titre du site, l’URL du site, le récapitulatif de commande, le paiement et le bouton d’envoi sont des champs obligatoires pour créer un formulaire de paiement._

Pendant que vous travaillez sur votre formulaire de paiement, vous pouvez toujours utiliser le bouton Aperçu pour voir comment vos clients verront le formulaire. Vous pouvez également alterner entre l’affichage en tant qu’utilisateur existant ou visiteur.

![Bouton Aperçu dans l’éditeur de formulaire de paiement](/img/config/checkout-form-preview-button.png)![Aperçu du formulaire de paiement en tant que visiteur ou utilisateur existant](/img/config/checkout-form-preview-modal.png)

Enfin, dans **Options avancées**, vous pouvez configurer le message de la page **Merci**, ajouter des extraits pour suivre les conversions, ajouter du CSS personnalisé à votre formulaire de paiement ou le restreindre à certains pays.

![Options avancées avec page Merci, suivi des conversions et CSS personnalisé](/img/config/checkout-form-advanced.png)

Vous pouvez également activer ou désactiver manuellement votre formulaire de paiement en basculant cette option dans la colonne de droite, ou supprimer définitivement le formulaire.

![Option d’activation et de suppression du formulaire de paiement](/img/config/checkout-form-active.png)

N’oubliez pas d’enregistrer votre formulaire de paiement !

![Bouton Enregistrer le formulaire de paiement](/img/config/checkout-form-save.png)

Pour obtenir le shortcode de votre formulaire, cliquez sur **Générer un shortcode** et copiez le résultat affiché dans la fenêtre modale.

![Fenêtre modale Générer un shortcode avec shortcode à copier](/img/config/checkout-form-editor.png)

_**Remarque :** Vous devrez ajouter ce shortcode à votre page d’inscription afin que ce formulaire de paiement y soit ajouté._

## Pré-sélection des produits et des modèles via les paramètres d’URL :

Si vous souhaitez créer des tableaux de prix personnalisés pour vos produits et pré-sélectionner dans le formulaire de paiement le produit ou le modèle que votre client choisit depuis votre tableau des prix ou votre page de modèles, vous pouvez utiliser des paramètres d’URL pour cela.

### **Pour les plans :**

Allez dans **Ultimate Multisite > Produits > Sélectionner un plan**. Vous devriez voir le bouton **Cliquer pour copier le lien partageable** en haut de la page. C’est le lien que vous pouvez utiliser pour pré-sélectionner ce plan spécifique dans votre formulaire de paiement.

![Page produit avec bouton de lien partageable](/img/config/products-list.png)

Notez que ce lien partageable n’est valide que pour les **Plans**. Vous ne pouvez pas utiliser de liens partageables pour des forfaits ou des services.

### Pour les modèles :

Si vous souhaitez pré-sélectionner des modèles de site dans votre formulaire de paiement, vous pouvez utiliser le paramètre : **?template_id=X** dans l’URL de votre page d’inscription. Le « X » doit être remplacé par le **numéro d’ID du modèle de site**. Pour obtenir ce numéro, allez dans **Ultimate Multisite > Sites**.

Cliquez sur **Gérer** juste sous le modèle de site que vous souhaitez utiliser. Vous verrez le numéro SITE ID. Utilisez simplement ce numéro pour que ce modèle de site spécifique soit pré-sélectionné dans votre formulaire de paiement. Dans notre cas ici, le paramètre d’URL serait **?template_id=2**.

![Liste des sites montrant l’ID du modèle de site](/img/config/site-templates-list.png)

Disons que le site web de notre réseau est [**www.mynetwork.com**](http://www.mynetwork.com) et que notre page d’inscription avec notre formulaire de paiement se trouve sur la page **/register**. L’URL complète avec ce modèle de site pré-sélectionné ressemblera à [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Et si vous le souhaitez, vous pouvez pré-sélectionner à la fois des produits et des modèles dans votre formulaire de paiement. Il vous suffit de copier le lien partageable du plan et de coller le paramètre du modèle à la fin. Cela ressemblera à [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
