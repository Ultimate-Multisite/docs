---
title: Comment configurer le mappage de domaine
sidebar_position: 6
_i18n_hash: 749818bf3eca7ddb6e6bfae1ddb7926f
---
# Comment configurer le mappage de domaine (v2)

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

L'une des fonctionnalités les plus puissantes d'un réseau premium est la possibilité d'offrir à nos clients la possibilité d'attacher un domaine de premier niveau à leurs sites. Après tout, quel est plus professionnel : [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) ou [_**joesbikeshop.com**_](http://joesbikeshop.com) ? C'est pourquoi Ultimate Multisite propose cette fonctionnalité intégrée, sans avoir besoin d'utiliser des plugins tiers.

## Qu'est-ce que le mappage de domaine ?

Comme son nom l'indique, le mappage de domaine est la capacité offerte par Ultimate Multisite de recevoir une demande pour un domaine personnalisé et de mapper cette demande au site correspondant dans le réseau avec ce domaine particulier attaché.

### Comment configurer le mappage de domaine sur votre réseau Ultimate Multisite

Le mappage de domaine nécessite une configuration de votre part pour fonctionner. Heureusement, Ultimate Multisite automatise le travail difficile pour vous afin que vous puissiez facilement répondre aux exigences.

Pendant l'installation d'Ultimate Multisite, l'assistant copiera et installera automatiquement le fichier **sunrise.php** dans le dossier désigné. **L'assistant ne vous permettra pas de poursuivre tant que cette étape n'est pas terminée**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zrBdFs13Dy.png)

Cela signifie que dès que l'assistant d'installation d'Ultimate Multisite a terminé la configuration de votre réseau, vous pouvez commencer à mapper le domaine personnalisé immédiatement.

Notez que le mappage de domaine dans Ultimate Multisite n'est pas obligatoire. Vous avez la possibilité d'utiliser la fonction native de mappage de domaine de WordPress Multisite ou toute autre solution de mappage de domaine.

Si vous avez besoin de désactiver le mappage de domaine d'Ultimate Multisite pour laisser place à d'autres solutions de mappage de domaine, vous pouvez désactiver cette fonction sous **Ultimate Multisite > Settings > Domain Mapping**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bbrC47pTcX.png)

Just en dessous de cette option, vous pouvez également voir l'option **Force Admin Redirect**. Cette option vous permet de contrôler si vos clients pourront accéder à leur tableau de bord d'administration à la fois sur leur domaine personnalisé et sur leur sous-domaine ou uniquement sur l'un d'eux.

Si vous sélectionnez **Force redirect to mapped domain**, vos clients ne pourront accéder à leur tableau de bord d'administration que sur leurs domaines personnalisés.

L'option **Force redirect to** **network domain** fera exactement le contraire - vos clients ne seront autorisés à accéder à leurs tableaux de bord que sur leur sous-domaine, même s'ils essaient de se connecter sur leurs domaines personnalisés.

Et l'option **Allow access to the admin by both mapped domain domain and network domain** leur permet d'accéder à leurs tableaux de bord d'administration à la fois sur le sous-domaine et sur le domaine personnalisé.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JYwHPWhYwV.png)

Il existe deux façons de mapper un domaine personnalisé. La première consiste à mapper le nom de domaine depuis votre tableau de bord d'administration réseau en tant que super administrateur, et la seconde via le tableau de bord d'administration du sous-site sous la page de compte.

Mais avant de commencer à mapper le domaine personnalisé à l'un des sous-sites de votre réseau, vous devrez vous assurer que les **paramètres DNS** du nom de domaine sont correctement configurés.

### S'assurer que les paramètres DNS du domaine sont correctement configurés

Pour qu'un mappage fonctionne, vous devez vous assurer que le domaine que vous prévoyez de mapper pointe vers l'adresse IP de votre réseau. Notez que vous avez besoin de l'adresse IP du réseau – l'adresse IP du domaine où Ultimate Multisite est installé – et non de l'adresse IP du domaine personnalisé que vous souhaitez mapper. Pour rechercher l'adresse IP d'un domaine spécifique, nous vous suggérons de vous rendre sur [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html), par exemple.

Pour mapper correctement le domaine, vous devez ajouter un **A RECORD** dans votre configuration **DNS** pointant vers cette **adresse IP**. La gestion du DNS varie considérablement entre les différents registraires de domaine, mais il existe de nombreux tutoriels en ligne couvrant cela si vous recherchez « _Creating A Record on XXXX_ » où XXXX est votre registraire de domaine (ex. : « _Creating A Record on_ _GoDaddy_ »).

Si vous avez du mal à faire fonctionner cela, **contactez le support de votre registraire de domaine** et ils pourront vous aider à ce sujet.

Si vous prévoyez de permettre à vos clients de mapper leurs propres domaines, ils devront effectuer eux-mêmes cette partie. Dirigez-les vers le système de support de leur registraire s'ils ne parviennent pas à créer l'A Record.

### Mapper un nom de domaine personnalisé en tant que Super Admin

Lorsque vous êtes connecté en tant que super administrateur sur votre réseau, vous pouvez facilement ajouter et gérer des noms de domaine personnalisés en accédant à **Ultimate Multisite > Domains**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5XxtXP622s.png)

Sur cette page, vous pouvez cliquer sur le bouton **Add Domain** en haut, ce qui ouvrira une fenêtre modale où vous pourrez définir et remplir le **nom de domaine personnalisé**, le **sous-site** auquel vous souhaitez appliquer le nom de domaine personnalisé, et décider si vous voulez le définir comme nom de domaine **principal** ou non (notez que vous pouvez mapper **plusieurs noms de domaine à un sous-site**).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rD6fnbzRe9.png)

Après avoir saisi toutes les informations, vous pouvez ensuite cliquer sur le bouton **Add Existing Domain** en bas.

Cela lancera le processus de vérification et de récupération des informations DNS du domaine personnalisé. Vous verrez également un journal en bas de la page pour suivre le processus en cours. Ce processus peut prendre quelques minutes à se terminer.

Le **Stage** ou le statut devrait passer de **Checking DNS** à **Ready** si tout est correctement configuré.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-3g2mkrlk75we98uhscagnr3ini0s)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5dIPdYQfZi.png)

Si vous cliquez sur le nom de domaine, vous pourrez voir certaines options à l'intérieur. Regardons rapidement celles-ci :

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5tCiNUIKih.png)

**Stage :** C'est l'étape à laquelle se trouve le domaine. Lors de l'ajout initial du domaine, il se trouvera probablement à l'étape **Checking DNS**. Le processus vérifiera les entrées DNS et confirmera qu'elles sont correctes. Ensuite, le domaine passera à l'étape **Checking SSL**. Ultimate Multisite vérifiera si le domaine possède un SSL ou non et classera votre domaine comme **Ready** ou **Ready (without SSL)**.

**Site :** Le sous-domaine associé à ce domaine. Le domaine mappé affichera le contenu de ce site spécifique.

**Active :** Vous pouvez activer ou désactiver cette option pour activer ou désactiver le domaine.

**Is Primary Domain? :** Vos clients peuvent avoir plus d'un domaine mappé pour chaque site. Utilisez cette option pour sélectionner si c'est le domaine principal pour le site spécifique.

**Is Secure? :** Même si Ultimate Multisite vérifie si le domaine possède un certificat SSL ou non avant de l'activer, vous pouvez sélectionner manuellement de charger le domaine avec ou sans certificat SSL. Notez que si le site Web ne possède pas de certificat SSL et que vous essayez de le charger en force avec SSL, cela peut vous donner des erreurs.

### Mapper un nom de domaine personnalisé en tant qu'utilisateur de sous-site

Les administrateurs de sous-site peuvent également mapper des noms de domaine personnalisés depuis leur tableau de bord d'administration de sous-site.

Tout d'abord, vous devez vous assurer d'activer cette option dans les paramètres **Domain mapping**. Voir la capture d'écran ci-dessous.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M3MO6RKBWe.png)

Vous pouvez également définir ou configurer cette option au niveau **Plan** ou dans les options produit sur **Ultimate Multisite > Products**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JRqx7Uhqsa.png)

Lorsque l'une de ces options est activée et qu'un utilisateur de sous-site est autorisé à mapper des noms de domaine personnalisés, l'utilisateur de sous-site devrait voir une boîte méta sous la page **Account** appelée **Domains**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-DUeHUY66yP.png)

L'utilisateur peut cliquer sur le bouton **Add Domain** et une fenêtre modale s'ouvrira avec quelques instructions.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-n5mNhDpL38.png)

L'utilisateur peut ensuite cliquer sur **Next Step** et procéder à l'ajout du nom de domaine personnalisé. Il peut également choisir si cela sera le domaine principal ou non.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0vlbs2dcaz.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-zez2zeiqz8mi67o7izkg3d7x43ve)Cliquez sur **Add Domain** lancera le processus de vérification et de récupération des informations DNS du domaine personnalisé.

### À propos de la synchronisation des domaines

La synchronisation des domaines est un processus où Ultimate Multisite ajoute le nom de domaine personnalisé à votre compte d'hébergement en tant que domaine supplémentaire **pour que le mappage de domaine fonctionne**.

La synchronisation des domaines se produit automatiquement si votre fournisseur d'hébergement dispose d'une intégration avec la fonction de mappage de domaine d'Ultimate Multisite. Actuellement, ces fournisseurs d'hébergement sont _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ et _Cpanel._

Vous devrez activer cette intégration dans les paramètres d'Ultimate Multisite sous l'onglet **Integration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-k6i46r4x2yddii0op4x343jizq20)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JMADuxaH62.png)

_Notez que si votre fournisseur d'hébergement n'est pas l'un de ces fournisseurs mentionnés ci-dessus, **vous devrez synchroniser manuellement ou ajouter le nom de domaine** à votre compte d'hébergement._
