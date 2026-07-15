---
title: Comment configurer le mappage de domaine
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Comment configurer le mappage de domaine (v2)

_**NOTE IMPORTANTE : cet article concerne Ultimate Multisite version 2.x.**_

L’une des fonctionnalités les plus puissantes d’un réseau premium est la possibilité d’offrir à nos clients l’occasion d’attacher un domaine de premier niveau à leurs sites. Après tout, qu’est-ce qui paraît le plus professionnel : [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com) ? C’est pourquoi Ultimate Multisite propose cette fonctionnalité intégrée, sans avoir besoin d’utiliser des plugins tiers.

## Qu’est-ce que le mappage de domaine ? {#whats-domain-mapping}

Comme son nom l’indique, le mappage de domaine est la capacité offerte par Ultimate Multisite de recevoir une requête pour un domaine personnalisé et de mapper cette requête au site correspondant dans le réseau auquel ce domaine particulier est attaché.

### Comment configurer le mappage de domaine sur votre réseau Ultimate Multisite {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Le mappage de domaine nécessite une certaine configuration de votre part pour fonctionner. Heureusement, Ultimate Multisite automatise le travail difficile pour vous afin que vous puissiez facilement satisfaire aux exigences.

Pendant l’installation de Ultimate Multisite, l’assistant copiera et installera automatiquement le **sunrise.php** dans le dossier désigné. **L’assistant ne vous permettra pas de continuer tant que cette étape n’est pas terminée**.

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

Cela signifie qu’une fois que l’assistant d’installation de Ultimate Multisite a terminé la configuration de votre réseau, vous pouvez commencer à mapper le domaine personnalisé immédiatement.

Notez que le mappage de domaine dans Ultimate Multisite n’est pas obligatoire. Vous avez la possibilité d’utiliser la fonction native de mappage de domaine de WordPress Multisite ou toute autre solution de mappage de domaine.

Si vous devez désactiver le mappage de domaine de Ultimate Multisite pour laisser la place à d’autres solutions de mappage de domaine, vous pouvez désactiver cette fonctionnalité sous **Ultimate Multisite > Settings > Domain Mapping**.

![Page des paramètres de mappage de domaine affichant la redirection admin, le message de mappage et les options DNS](/img/config/domain-mapping-settings.png)

Juste en dessous de cette option, vous pouvez également voir l’option **Force Admin Redirect**. Cette option vous permet de contrôler si vos clients pourront accéder à leur dashboard d’administration à la fois sur leur domaine personnalisé et leur sous-domaine, ou seulement sur l’un des deux.

Si vous sélectionnez **Force redirect to mapped domain** , vos clients ne pourront accéder à leur dashboard d’administration que sur leurs domaines personnalisés.

L’option **Force redirect to** **network domain** fera exactement l’inverse : vos clients ne seront autorisés à accéder à leurs dashboards que sur leur sous-domaine, même s’ils essaient de se connecter sur leurs domaines personnalisés.

Et l’option **Allow access to the admin by both mapped domain domain and network domain** leur permet d’accéder à leurs dashboards d’administration à la fois sur le sous-domaine et sur le domaine personnalisé.

![Menu déroulant Admin Redirect développé affichant les trois options de redirection](/img/config/domain-mapping-redirect-options.png)

Il existe deux façons de mapper un domaine personnalisé. La première consiste à mapper le nom de domaine depuis le dashboard d’administration de votre réseau en tant que super admin, et la seconde se fait via le dashboard d’administration du sous-site, sur la page Account.

Mais avant de commencer à mapper le domaine personnalisé à l’un des sous-sites de votre réseau, vous devrez vous assurer que les **paramètres DNS** du nom de domaine sont correctement configurés.

###

### S’assurer que les paramètres DNS du domaine sont correctement configurés {#making-sure-the-domain-dns-settings-are-properly-configured}

Pour qu’un mappage fonctionne, vous devez vous assurer que le domaine que vous prévoyez de mapper pointe vers l’adresse IP de votre réseau. Notez que vous avez besoin de l’adresse IP du réseau — l’adresse IP du domaine où Ultimate Multisite est installé — et non de l’adresse IP du domaine personnalisé que vous souhaitez mapper. Pour rechercher l’adresse IP d’un domaine spécifique, nous suggérons d’aller sur [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), par exemple.

Pour mapper correctement le domaine, vous devez ajouter un **A RECORD** dans votre configuration **DNS** pointant vers cette **adresse IP**. La gestion DNS varie considérablement selon les différents bureaux d’enregistrement de domaines, mais il existe de nombreux tutoriels en ligne à ce sujet si vous recherchez « _Creating A Record on XXXX_ », où XXXX est votre bureau d’enregistrement de domaines (ex. : « _Creating A Record on_ _GoDaddy_ »).

Si vous rencontrez des difficultés pour faire fonctionner cela, **contactez le support de votre bureau d’enregistrement de domaines** et il pourra vous aider pour cette partie.

Si vous prévoyez de permettre à vos clients de mapper leurs propres domaines, ils devront faire eux-mêmes le travail pour cette partie. Orientez-les vers le système de support de leur bureau d’enregistrement s’ils n’arrivent pas à créer le A Record.

### Mapper un nom de domaine personnalisé en tant que Super Admin {#mapping-custom-domain-name-as-super-admin}

Lorsque vous êtes connecté en tant que super admin sur votre réseau, vous pouvez facilement ajouter et gérer des noms de domaine personnalisés en allant sous **Ultimate Multisite > Domains**.

![Page de liste des domaines dans Ultimate Multisite](/img/admin/domains-list.png)

Sur cette page, vous pouvez cliquer sur le bouton **Add Domain** en haut, ce qui ouvrira une fenêtre modale où vous pourrez définir et renseigner le **nom de domaine personnalisé** , **le sous-site** auquel vous souhaitez appliquer le nom de domaine personnalisé, et décider si vous voulez le définir comme **nom de domaine principal** ou non (notez que vous pouvez mapper **plusieurs noms de domaine à un seul sous-site**).

![Fenêtre modale Add Domain avec nom de domaine, sélecteur de site et bascule de domaine principal](/img/admin/domain-add-modal.png)

Après avoir saisi toutes les informations, vous pouvez ensuite cliquer sur le bouton **Add Existing Domain** en bas.

Cela lancera le processus de vérification et de récupération des informations DNS du domaine personnalisé. Vous verrez également un journal en bas de la page pour suivre le processus en cours. Ce processus peut prendre quelques minutes.

Ultimate Multisite v2.13.0 crée également automatiquement l’enregistrement de domaine interne lorsqu’un nouveau site est créé sur un hôte qui doit être traité comme un domaine par site. Si l’hôte est le domaine principal du réseau, ou l’un des domaines de base de formulaire de checkout partagés configurés dans un champ **Site URL**, l’enregistrement automatique de domaine mappé est ignoré afin que le domaine de base partagé reste disponible pour chaque site qui l’utilise.

Lorsqu’un client enregistre un nouveau domaine via Domain Seller v1.3.0 ou plus récent, Ultimate Multisite mappe automatiquement le domaine enregistré au site réseau du client par défaut. Les administrateurs n’ont plus besoin d’ajouter un enregistrement de domaine mappé séparé après un enregistrement réussi, sauf s’ils veulent ajuster des options telles que l’indicateur de domaine principal, l’état d’activation ou la gestion SSL.

Le **Stage** ou le statut devrait passer de **Checking DNS** à **Ready** si tout est correctement configuré.

<!-- Screenshot unavailable: Ligne de domaine affichant l’étape Checking DNS dans la liste des domaines -->

<!-- Screenshot unavailable: Ligne de domaine affichant l’étape Ready avec l’indicateur d’état vert -->

Si vous cliquez sur le nom de domaine, vous pourrez voir certaines options à l’intérieur. Jetons-y un coup d’œil rapide :

![Page de détail du domaine avec des bascules pour l’étape, le site, l’état actif, le domaine principal et SSL](/img/admin/domain-edit.png)

**Stage :** Il s’agit de l’étape à laquelle se trouve le domaine. Lorsque vous ajoutez le domaine pour la première fois, il sera probablement à l’étape **Checking DNS**. Le processus vérifiera les entrées DNS et confirmera qu’elles sont correctes. Ensuite, le domaine sera placé à l’étape **Checking SSL**. Ultimate Multisite vérifiera si le domaine dispose de SSL ou non et classera votre domaine comme **Ready** ou **Ready (without SSL)**.

**Site :** Le sous-domaine associé à ce domaine. Le domaine mappé affichera le contenu de ce site spécifique.

**Active :** Vous pouvez activer ou désactiver cette option pour activer ou désactiver le domaine.

**Is Primary Domain? :** Vos clients peuvent avoir plus d’un domaine mappé pour chaque site. Utilisez cette option pour sélectionner s’il s’agit du domaine principal pour le site spécifique.

**Is Secure? :** Même si Ultimate Multisite vérifie si le domaine possède un certificat SSL ou non avant de l’activer, vous pouvez choisir manuellement de charger le domaine avec ou sans certificat SSL. Notez que si le site web n’a pas de certificat SSL et que vous essayez de forcer son chargement avec SSL, cela peut générer des erreurs.

### Mapper un nom de domaine personnalisé en tant qu’utilisateur de sous-site {#mapping-custom-domain-name-as-subsite-user}

Les administrateurs de sous-site peuvent également mapper des noms de domaine personnalisés depuis le Dashboard d’administration de leur sous-site.

Tout d’abord, vous devez vous assurer d’activer cette option dans les réglages **Domain mapping**. Voir la capture d’écran ci-dessous.

<!-- Screenshot unavailable: Réglages de Domain mapping permettant aux utilisateurs de sous-site de mapper des domaines via la bascule Customer DNS Management -->

Vous pouvez également définir ou configurer cette option au niveau du **Plan** ou dans les options du produit sur **Ultimate Multisite > Products**.

![Section Domaines personnalisés sur la page de modification du produit](/img/config/product-custom-domains.png)

Lorsque l’une de ces options est activée et qu’un utilisateur de sous-site est autorisé à mapper des noms de domaine personnalisés, l’utilisateur de sous-site devrait voir une métabox sur la page **Account** appelée **Domains**.

<!-- Screenshot unavailable: Métabox Domains sur la page Account du sous-site avec le bouton Add Domain -->

L’utilisateur peut cliquer sur le bouton **Add Domain**, ce qui ouvrira une fenêtre modale avec quelques instructions.

<!-- Screenshot unavailable: Modale Add Domain affichant les instructions d’enregistrement A DNS pour les utilisateurs de sous-site -->

L’utilisateur peut ensuite cliquer sur **Next Step** et procéder à l’ajout du nom de domaine personnalisé. Il peut également choisir si ce sera le domaine principal ou non.

<!-- Screenshot unavailable: Formulaire Add Domain avec champ de nom de domaine personnalisé et bascule de domaine principal -->

<!-- Screenshot unavailable: Étape de confirmation Add Domain qui déclenche la vérification DNS -->

Cliquer sur **Add Domain** lancera le processus de vérification et de récupération des informations DNS du domaine personnalisé.

### À propos de la synchronisation des domaines {#about-domain-syncing}

La synchronisation des domaines est un processus par lequel Ultimate Multisite ajoute le nom de domaine personnalisé à votre compte d’hébergement comme domaine additionnel **pour que le mappage de domaine fonctionne**.

La synchronisation des domaines se produit automatiquement si votre fournisseur d’hébergement dispose d’une intégration avec la fonctionnalité de mappage de domaine d’Ultimate Multisite. Actuellement, ces fournisseurs d’hébergement sont _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ et _Cpanel._

Lorsqu’une intégration de fournisseur d’hébergement est active, Ultimate Multisite peut également mettre en file d’attente la tâche de création DNS ou de sous-domaine côté fournisseur pour les sites nouvellement créés. Si aucune intégration n’écoute cette tâche, la tâche d’arrière-plan est ignorée afin d’éviter des entrées de file d’attente sans effet. Les vérifications DNS et SSL pour les domaines mappés continuent de s’exécuter via le processus normal d’étapes de domaine.

Vous devrez activer cette intégration dans les réglages Ultimate Multisite sous l’onglet **Integration**.

![Onglet Integrations dans les réglages Ultimate Multisite affichant les fournisseurs d’hébergement](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Liens Configuration des fournisseurs d’hébergement dans l’onglet de réglages Integrations -->

_Notez que si votre fournisseur d’hébergement ne fait pas partie des fournisseurs mentionnés ci-dessus, **vous devrez synchroniser ou ajouter manuellement le nom de domaine** à votre compte d’hébergement._
