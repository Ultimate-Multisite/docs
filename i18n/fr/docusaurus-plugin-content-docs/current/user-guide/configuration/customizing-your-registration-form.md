---
title: Personnaliser votre formulaire d'inscription
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# Personnaliser votre formulaire d'inscription

Pour que votre réseau se distingue de tous les autres SaaS construits sur la plateforme WordPress, Ultimate Multisite vous permet de personnaliser vos pages d'inscription et de connexion grâce à notre fonctionnalité **Checkout Forms**.

Bien qu'ils constituent un moyen simple et flexible d'expérimenter différentes approches lors de la conversion de nouveaux clients, ils sont principalement utilisés pour créer des formulaires d'inscription personnalisés. Cet article a pour objectif de vous montrer comment procéder.

## Pages de connexion et d'inscription:

Lors de l'installation d'Ultimate Multisite, celui-ci crée automatiquement des pages de connexion et d'inscription personnalisées sur votre site principal. Vous pouvez modifier ces pages par défaut à tout moment en accédant à votre page **Ultimate Multisite > Settings > Login & Registration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-K3a5Ol4prD.png)

Examinons chacune des options que vous pouvez personnaliser sur la page **Login & Registration** :

  * **Enable registration:** Cette option active ou désactive l'inscription sur votre réseau. Si elle est désactivée, vos clients ne pourront pas s'inscrire et s'abonner à vos produits.

  * **Enable email verification:** Si cette option est activée, les clients qui s'abonnent à un plan gratuit ou à un plan payant avec période d'essai recevront un e‑mail de vérification et devront cliquer sur le lien de vérification pour que leurs sites soient créés.

  * **Default registration page:** Il s'agit de la page par défaut pour l'inscription. Cette page doit être publiée sur votre site Web et comporter un formulaire d'inscription (également appelé formulaire de paiement) – où vos clients s'abonneront à vos produits. Vous pouvez créer autant de pages d'inscription et de formulaires de paiement que vous le souhaitez, mais n'oubliez pas d'insérer le shortcode du formulaire de paiement sur la page d'inscription, sinon il n'apparaîtra pas.

  * **Use custom login page:** Cette option vous permet d'utiliser une page de connexion personnalisée, différente de la page wp-login.php par défaut. Si cette option est activée, vous pouvez choisir la page qui sera utilisée pour la connexion dans l'option **Default login page** (juste en dessous).

  * **Obfuscate the original login url (wp-login.php)** : Si vous souhaitez masquer l'URL de connexion d'origine, vous pouvez activer cette option. Cela permet de prévenir les attaques par force brute. Si cette option est activée, Ultimate Multisite affichera une erreur 404 lorsqu'un utilisateur tentera d'accéder au lien wp-login.php d'origine.

  * **Force synchronous site publication:** Après qu'un client s'abonne à un produit sur un réseau, le nouveau site en attente doit être converti en un vrai site du réseau. Le processus de publication se fait via la file d'attente de tâches, de façon asynchrone. Activez cette option pour forcer la publication à se produire dans la même requête que l'inscription.

Maintenant, voyons les autres options qui restent pertinentes pour le processus de connexion et d'inscription. Elles se trouvent juste en dessous de **Other options** sur la même page Login & registration :

  * **Default role:** Il s'agit du rôle que vos clients auront sur leur site Web après le processus d'inscription.

  * **Add users to the main site as well:** Activer cette option ajoutera également l'utilisateur au site principal de votre réseau après le processus d'inscription. Si vous activez cette option, une option pour définir le **default role** de ces utilisateurs sur votre site Web apparaîtra également juste en dessous.

  * **Enable multiple accounts:** Permet aux utilisateurs d'avoir des comptes sur différents sites de votre réseau avec la même adresse e‑mail. Si cette option est désactivée, vos clients ne pourront pas créer de compte sur d'autres sites fonctionnant sur votre réseau avec la même adresse e‑mail.

Et voilà toutes les options liées à la connexion et à l'inscription que vous pouvez personnaliser ! N'oubliez pas d'enregistrer vos paramètres après avoir terminé les modifications.

## Utiliser plusieurs formulaires d'inscription:

Ultimate Multisite 2.0 propose un éditeur de formulaire de paiement qui vous permet de créer autant de formulaires que vous le souhaitez, avec différents champs, produits proposés, etc.

Les pages de connexion et d'inscription contiennent des shortcodes : **[wu_login_form]** sur la page de connexion et **[wu_checkout]** pour la page d'inscription. Vous pouvez personnaliser davantage la page d'inscription en créant ou en construisant des formulaires de paiement.

Pour accéder à cette fonctionnalité, allez dans le menu **Checkout Forms**, dans la barre latérale gauche.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vvxvSRGAfu.png)

Sur cette page, vous pouvez voir tous les formulaires de paiement que vous avez.

Si vous souhaitez en créer un nouveau, cliquez simplement sur **Add Checkout Form** en haut de la page.

Vous pouvez choisir l'une de ces trois options comme point de départ : single step, multi-step ou blank. Ensuite, cliquez sur **Go to the Editor**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OVx7AlxoX5.png)

Alternativement, vous pouvez modifier ou dupliquer les formulaires que vous avez déjà en cliquant sur les options sous leur nom. Vous y trouverez également les options pour copier le shortcode du formulaire ou supprimer le formulaire.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LdsdAu67WF.png)

Si vous choisissez single step ou multi-step, le formulaire de paiement sera déjà pré-rempli avec les étapes de base pour fonctionner. Ensuite, si vous le souhaitez, vous pouvez ajouter des étapes supplémentaires.

### Modifier un formulaire de paiement:

Comme nous l'avons mentionné précédemment, vous pouvez créer des formulaires de paiement pour différents usages. Dans cet exemple, nous travaillerons sur un formulaire d'inscription.

Après être arrivé dans l'éditeur de formulaire de paiement, donnez à votre formulaire un nom (qui sera utilisé uniquement pour référence interne) et un slug (utilisé pour créer des shortcodes, par exemple).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RvbtUn4r3w.png)

Les formulaires sont composés d'étapes et de champs. Vous pouvez ajouter une nouvelle étape en cliquant sur **Add New Checkout Step**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9Wgpw8DTj9.png)

Dans l'onglet premier de la fenêtre modale, remplissez le contenu de l'étape de votre formulaire. Donnez-lui un ID, un nom et une description. Ce sont principalement utilisés en interne.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-lr6RKlgll1.png)

Ensuite, définissez la visibilité de l'étape. Vous pouvez choisir entre **Always show**, **Only show for logged in users** ou **Only show for guests**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0Q6LxP9E90.png)

Enfin, configurez le style de l'étape. Ce sont des champs optionnels.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WmBuHXYH7N.png)

Maintenant, il est temps d'ajouter des champs à notre première étape. Cliquez simplement sur **Add New Field** et sélectionnez le type de section que vous souhaitez.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vM8n8QuTzk.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HkNUp6cWRG.png)

Chaque champ possède différents paramètres à remplir. Pour cette première entrée, nous sélectionnerons le champ **Username**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PFaP6RufZU.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U6Mm10qIeF.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Lr1mEi1DlH.png)

Vous pouvez ajouter autant d'étapes et de champs que vous le souhaitez. Pour afficher vos produits afin que vos clients en choisissent un, utilisez le champ Pricing Table. Si vous souhaitez que vos clients choisissent un modèle, ajoutez le champ Template Selection. Et ainsi de suite.

_**Note :** Si vous créez un produit après avoir créé votre formulaire de paiement, vous devrez ajouter le produit dans la section Pricing table. Si vous ne l'ajoutez pas, le produit n'apparaîtra pas à vos clients sur la page d'inscription._

_**Note 2 :** username, email, password, site title, site URL, order summary, payment, and submit button sont des champs obligatoires pour créer un formulaire de paiement._

Pendant que vous travaillez sur votre formulaire de paiement, vous pouvez toujours utiliser le bouton Preview pour voir comment vos clients verront le formulaire. Vous pouvez également alterner entre la vue en tant qu'utilisateur existant ou visiteur.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3zPxZNqzkG.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YXZp7n5Nuw.png)

Enfin, dans **Advanced Options**, vous pouvez configurer le message de la page **Thank You**, ajouter des snippets pour suivre les conversions, ajouter du CSS personnalisé à votre formulaire de paiement ou le restreindre à certains pays.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TVQ9EUbGJ6.png)

Vous pouvez également activer ou désactiver manuellement votre formulaire de paiement en basculant cette option dans la colonne de droite, ou supprimer définitivement le formulaire.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-N5wdel1IIp.png)

N'oubliez pas d'enregistrer votre formulaire de paiement !

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rJPV89yQZt.png)

Pour obtenir le shortcode de votre formulaire, cliquez sur **Generate Shortcode** et copiez le résultat affiché dans la fenêtre modale.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RTJclNTnJZ.png)

_**Note :** Vous devrez ajouter ce shortcode à votre page d'inscription afin d'ajouter ce formulaire de paiement à celle-ci._

## Pré-sélectionner des produits et des modèles via des paramètres d'URL:

Si vous souhaitez créer des tableaux de prix personnalisés pour vos produits et pré-sélectionner sur le formulaire de paiement le produit ou le modèle que votre client choisit depuis votre tableau de prix ou votre page de modèles, vous pouvez utiliser des paramètres d'URL à cet effet.

### **Pour les plans :**

Allez dans **Ultimate Multisite > Products > Select a plan**. Vous devriez voir le bouton **Click to copy Shareable Link** en haut de la page. C'est le lien que vous pouvez utiliser pour pré-sélectionner ce plan spécifique sur votre formulaire de paiement.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bUyOlBEfNj.png)

Notez que ce lien partageable n'est valable que pour les **Plans**. Vous ne pouvez pas utiliser de liens partageables pour les packages ou services.

### Pour les modèles :

Si vous souhaitez pré-sélectionner des modèles de site sur votre formulaire de paiement, vous pouvez utiliser le paramètre : **?template_id=X** dans l'URL de votre page d'inscription. Le « X » doit être remplacé par le **site template ID number**. Pour obtenir ce numéro, allez dans **Ultimate Multisite > Sites**.

Cliquez sur **Manage** juste en dessous du modèle de site que vous souhaitez utiliser. Vous verrez le numéro SITE ID. Utilisez simplement ce numéro pour que ce modèle de site spécifique soit pré-sélectionné sur votre formulaire de paiement. Dans notre cas, le paramètre d'URL serait **?template_id=2**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JEgVAVNYMu.png)

Supposons que notre site réseau soit [**www.mynetwork.com**](http://www.mynetwork.com) et que notre page d'inscription avec notre formulaire de paiement se trouve sur la page **/register**. L'URL complète avec ce modèle de site pré-sélectionné ressemblera à [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

Et si vous le souhaitez, vous pouvez pré-sélectionner à la fois les produits et les modèles sur votre formulaire de paiement. Il vous suffit de copier le lien partageable du plan et d'ajouter le paramètre de modèle à la fin. Cela ressemblera à [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
