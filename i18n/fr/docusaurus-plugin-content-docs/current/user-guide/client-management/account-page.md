---
title: Page Account du client
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# La page Account de votre client (v2)

_**NOTE IMPORTANTE : cet article concerne Ultimate Multisite version 2.x.**_

Lorsque des clients s’abonnent à un plan sur votre réseau, ils obtiennent l’accès à un site web et à son Dashboard avec des informations importantes concernant leurs paiements, abonnements, domaines, limitations du plan, etc...

Dans ce tutoriel, nous allons vous guider à travers la page Account du client, et vous verrez ce que vos clients peuvent y voir et y faire.

## La page Account

La page Account est accessible en cliquant sur **Account** dans le Dashboard de votre client.

![Menu Account dans le Dashboard du client](/img/account-page/account-menu.png)

Sur les réseaux de locataires souverains, Ultimate Multisite v2.13.0 conserve cette expérience de gestion client sur le site principal. Si un client ouvre des actions de compte, de paiement, de facturation, de facture, de gestion de site, de changement de modèle ou de mappage de domaine depuis un locataire souverain, l’action renvoie vers le panneau client du site principal afin que les enregistrements de facturation et d’abonnement du réseau restent la référence.

Lorsque le client arrive depuis un locataire souverain, le panneau client du site principal peut inclure un lien de retour vers le site locataire. Le lien de retour ne s’affiche que lorsque Ultimate Multisite peut valider la cible de retour comme l’un des sites du client, ce qui empêche les redirections arbitraires tout en préservant le flux de travail du locataire.

![Vue d’ensemble de la page de compte client](/img/account-page/overview.png)

Après qu’un client clique dessus, il verra une vue d’ensemble de son abonnement, de son adresse de facturation, de ses factures, de ses domaines, des limitations de son site, et pourra également modifier le ****Modèle de site** (si c’est autorisé sur votre réseau)**.

Il peut aussi changer l’abonnement vers un autre plan, ou acheter un autre forfait ou service que vous proposez. Examinons chaque section séparément.

### Vue d’ensemble de votre abonnement :

Le premier bloc juste sous le nom du site web de vos clients affiche une vue d’ensemble de leur plan actuel et des services/forfaits qui ont été achetés avec celui-ci. Le bloc affiche également le numéro d’abonnement, le montant initial payé, le coût du plan et de tout service/forfait, ainsi que le nombre de fois où ils ont été facturés pour cet abonnement. Ils peuvent aussi voir si l’abonnement est **Actif**, **Expiré** ou **Annulé**.

![Vue d’ensemble de l’abonnement affichant le plan, le montant et les détails de facturation](/img/account-page/membership-card.png)

Juste sous ce bloc, vos clients peuvent voir les blocs **À propos de ce site** et **Limites du site**. Ces blocs leur montrent toutes les limitations liées à leur plan : espace disque, articles, pages, visites, etc... Ces limites peuvent être configurées sur chaque page de plan dans **Ultimate Multisite > Produits**.

![Blocs À propos de ce site et Limites du site affichant les limitations du plan](/img/account-page/site-limits.png)

Sur le côté droit de **Votre abonnement**, les clients peuvent cliquer sur **Modifier**. Cela leur affichera tous les plans et forfaits/services disponibles. S’ils choisissent un autre plan, les limitations de ce plan s’appliqueront à la place des limitations actuelles de l’abonnement, peu importe qu’ils passent à un plan inférieur ou supérieur.

Maintenant, si vos clients choisissent d’acheter des forfaits ou des services pour cet abonnement actuel — comme plus d’espace disque ou de visites — l’abonnement actuel ne sera pas modifié ; seuls les nouveaux forfaits y seront ajoutés.

Notez que les codes de réduction ne peuvent pas être ajoutés sur cette page de changement d’abonnement. Si le client a utilisé un code de réduction lors du premier achat d’abonnement, ce code s’appliquera également à ce nouvel abonnement.

### Mise à jour de l’adresse de facturation :

Sur la page Account, vos clients peuvent également mettre à jour leur adresse de facturation. Ils doivent simplement cliquer sur **Mettre à jour** à côté de _Adresse de facturation_.

![Section Adresse de facturation avec bouton Mettre à jour](/img/account-page/billing-address.png)

Une nouvelle fenêtre apparaîtra pour votre client. Tout ce qu’il doit faire est de saisir la nouvelle adresse et de cliquer sur _Enregistrer les modifications_.

![Formulaire de mise à jour de l’adresse de facturation](/img/account-page/billing-address-form.png)

### Changement du modèle de site :

Pour permettre à vos clients de changer leurs modèles de site, vous devez aller dans **Ultimate Multisite > Réglages > Sites** et activer l’option **Autoriser le changement de modèle**.

De plus, dans **Ultimate Multisite > Produits**, sélectionnez vos plans et allez dans l’onglet **Modèles de site**. Assurez-vous que l’option **Autoriser les modèles de site** est activée et que, dans **Mode de sélection des modèles de site**, l’option **Choisir les modèles de site disponibles** est sélectionnée.

![Onglet des modèles de site du produit avec le mode de sélection des modèles](/img/config/product-site-templates.png)

Vous pourrez voir tous les modèles de site disponibles sur votre site web. Choisissez ceux que vous voulez rendre disponibles et ceux que vous ne voulez pas rendre disponibles pour vos clients abonnés à ce plan. Notez que cette option affecte également le formulaire de paiement, donc tout modèle choisi comme **Non disponible** n’apparaîtra pas sur la page d’inscription pour ce plan.

Vos clients peuvent maintenant cliquer sur **Changer le modèle de site** dans leur page Account.

![Bouton Changer le modèle de site sur la page Account](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 affiche un panneau de changement de modèle repensé. Le panneau commence par une **carte du modèle actuel** afin que les clients puissent voir quel modèle est actif avant de choisir un remplacement.

Une grille persistante des modèles de site disponibles reste visible pendant que les clients examinent leurs options. Cela les aide à comparer les modèles autorisés pour leur plan sans perdre de vue la sélection actuelle.

![Liste des modèles de site disponibles pour le plan](/img/config/site-templates-list.png)

Après avoir sélectionné celui vers lequel ils veulent changer, il leur sera demandé de confirmer le changement.

![Boîte de dialogue de confirmation du changement de modèle de site](/img/account-page/template-switch-confirm.png)

Après avoir activé la confirmation et cliqué sur **Traiter le changement**, le nouveau modèle de site sera utilisé sur le site web de votre client.

Les clients peuvent également utiliser **Reset current template** depuis ce panneau lorsqu’ils doivent réinitialiser le site avec le template actuellement attribué. Comme lors du passage à un autre template, la réinitialisation d’un template peut écraser le contenu du site ; les clients ne doivent donc la confirmer que lorsqu’ils comprennent l’action de réinitialisation.

### Ajout de domaines personnalisés :

Vos clients auront également la possibilité d’ajouter un domaine personnalisé pour cette offre sur leur page Account. Pour permettre à vos clients d’utiliser des domaines personnalisés, allez dans **Ultimate Multisite > Settings >** **Domain Mapping**.

Activez l’option **Enable Domain Mapping**. Cela permettra à vos clients d’utiliser des domaines personnalisés au niveau du réseau.

N’oubliez pas de vérifier également si le Domain Mapping est activé au niveau du produit, car vous pouvez limiter un produit afin de ne pas autoriser vos clients à utiliser des domaines personnalisés.

Allez dans **Ultimate Multisite > Products**. Sélectionnez l’offre de votre choix et allez dans l’onglet **Custom Domains**. Activez l’option **Allow Custom Domains**.

![Onglet Custom Domains avec l’option Allow Custom Domains](/img/config/product-custom-domains.png)

Cela permettra à tous les clients abonnés à cette offre spécifique d’utiliser des domaines personnalisés. Maintenant, sur la page Account, vos clients peuvent ajouter un domaine personnalisé en cliquant sur **Add Domain**.

![Bouton Add Domain sur la page Account](/img/account-page/add-domain-button.png)

La première fenêtre qui s’ouvre affichera à vos clients un message leur indiquant comment mettre à jour leurs enregistrements DNS afin de faire fonctionner ce domaine personnalisé sur votre réseau.

![Instructions DNS affichées lors de l’ajout d’un domaine personnalisé](/img/account-page/add-domain-dns.png)

Ce message peut être modifié (par vous) dans **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![Réglage Add New Domain Instructions dans Domain Mapping](/img/config/settings-domain-mapping.png)

Voici une vue complète de la page des réglages Domain Mapping :

![Page complète des réglages Domain Mapping](/img/config/settings-domain-mapping-full.png)

Après avoir cliqué sur **Next Step** , vos clients peuvent ajouter leur nom de domaine personnalisé et choisir si ce domaine personnalisé sera le domaine principal. Notez que vos clients peuvent utiliser plusieurs domaines personnalisés pour leurs sites Web ; ils peuvent donc choisir lequel sera le principal.

![Saisie du nom de domaine personnalisé avec l’option de domaine principal](/img/account-page/add-domain-primary.png)

Après avoir cliqué sur **Add Domain** , le domaine sera ajouté au compte de votre client. Tout ce qu’il lui reste à faire est de modifier les enregistrements DNS de ce domaine personnalisé auprès de son registrar de domaine.

### Modification du mot de passe :

Dans le Dashboard du compte, vos clients peuvent également modifier leur mot de passe en cliquant sur **Change Password**.

![Bouton Change Password sur la page Account](/img/account-page/change-password-button.png)

Cela affichera une nouvelle fenêtre où vos clients devront saisir leur mot de passe actuel, puis saisir le nouveau mot de passe qu’ils souhaitent utiliser.

![Formulaire de modification du mot de passe avec champs de mot de passe actuel et nouveau mot de passe](/img/account-page/change-password-form.png)

### Zone de danger :

Nous avons également deux options affichées dans la partie **Danger Zone** : **Delete Site** et **Delete Account**. Elles se trouvent toutes deux dans la partie Danger Zone parce que ces deux actions sont irréversibles. Si vos clients suppriment leur site Web ou leur compte, ils ne peuvent pas les récupérer.

![Danger Zone avec les options Delete Site et Delete Account](/img/account-page/danger-zone.png)

Si vos clients cliquent sur l’une de ces deux options, une fenêtre s’affichera dans laquelle ils devront activer l’option pour supprimer le site Web ou le compte, et ils seront avertis que cette action ne peut pas être annulée.

![Boîte de dialogue de confirmation Delete Site](/img/account-page/delete-site-confirm.png)

![Boîte de dialogue de confirmation Delete Account](/img/account-page/delete-account-confirm.png)

S’ils suppriment leur site Web, leur compte et leur abonnement resteront inchangés. Ils perdront simplement tout le contenu de leur site Web. S’ils suppriment leur compte, tous les sites Web, abonnements et informations liés à ce compte seront perdus.
