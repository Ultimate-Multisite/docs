---
title: Page du compte client
sidebar_position: 14
_i18n_hash: 92f8a44adfaf871b0a881fbc76bc0084
---
# Votre page de compte client (v2)

_**NOTE IMPORTANTE : Cet article fait référence à Ultimate Multisite version 2.x.**_

Lorsque les clients s'abonnent à un plan sur votre réseau, ils obtiennent l'accès à un site Web et à son tableau de bord avec des informations importantes concernant leurs paiements, leurs adhésions, leurs domaines, les limitations du plan, etc...

Dans ce tutoriel, nous vous guiderons à travers la page de compte client et vous verrez ce que vos clients peuvent voir et faire à l'intérieur.

## La page de compte

La page de compte est accessible en cliquant sur **Account** dans le tableau de bord de votre client.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LrGNKCDc8R.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FTDgqcwaO0.png)

Après qu'un client clique dessus, il verra un aperçu de son adhésion, de son adresse de facturation, de ses factures, de ses domaines, des limitations du site, et pourra également changer le **Modèle de site** (si cela est autorisé dans votre réseau).

Ils peuvent également changer l'adhésion vers un autre plan, ou acheter un autre forfait ou service que vous proposez. Examinons chaque section séparément.

### Aperçu de votre adhésion

Le premier bloc juste en dessous du nom du site Web de votre client affiche un aperçu de son plan actuel et des services/forfaits qui ont été achetés avec celui-ci. Le bloc indique également le numéro d'adhésion, le montant initial payé, le coût du plan et de tout service/forfait, ainsi que le nombre de fois que cette adhésion a été facturée. Ils peuvent également voir si l'adhésion est **Active**, **Expiré** ou **Annulé**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-XNTPsXaqzp.png)

Juste en dessous de ce bloc, vos clients peuvent voir les blocs **About This Site** et **Site Limits**. Ces blocs affichent toutes les limitations associées à leur plan : espace disque, publications, pages, visites, etc... Ces limites peuvent être configurées sur chaque page de plan dans **Ultimate Multisite > Products**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6kVmMDoiCU.png)

Sur le côté droit de **Your Membership**, les clients peuvent cliquer sur **Change**. Cela leur montrera tous les plans et forfaits/services disponibles. S'ils choisissent un autre plan, les limitations du plan prendront effet à la place des limitations actuelles de l'adhésion - peu importe s'ils passent à un plan inférieur ou supérieur.

Maintenant, si vos clients choisissent d'acheter des forfaits ou services pour cette adhésion actuelle - comme plus d'espace disque ou de visites - l'adhésion actuelle ne sera pas modifiée, mais seuls les nouveaux forfaits seront ajoutés.

Notez que les codes promo ne peuvent pas être ajoutés sur cette page de changement d'adhésion. Si le client a utilisé un code promo lors de l'achat initial de l'adhésion, le code s'appliquera également à cette nouvelle adhésion.

### Mise à jour de l'adresse de facturation

Sur la page de compte, vos clients peuvent également mettre à jour leur adresse de facturation. Il suffit de cliquer sur **Update** à côté de _Billing Address_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GLQ21kppU2.png)

Une nouvelle fenêtre s'ouvrira pour votre client. Il suffit de remplir la nouvelle adresse et de cliquer sur _Save Changes_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Z2nY05cYvD.png)

### Changement du modèle de site

Pour permettre à vos clients de changer leurs modèles de site, vous devez aller dans **Ultimate Multisite > Settings > Sites** et activer l'option **Allow Template Switching**.

De plus, dans **Ultimate Multisite > Products**, sélectionnez vos plans et accédez à l'onglet **Site Templates**. Assurez-vous que l'option **Allow Site Templates** est activée et que, dans **Site Template Selection Mode**, l'option **Choose Available Site Templates** est sélectionnée.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rjixD7iShD.png)

Vous pourrez voir tous les modèles de site disponibles sur votre site Web. Choisissez ceux que vous souhaitez rendre disponibles et ceux que vous ne souhaitez pas rendre disponibles aux clients abonnés à ce plan. Notez que ces options affectent également le formulaire de paiement, de sorte que tout modèle choisi comme **Not Available** n'apparaîtra pas sur la page d'inscription pour ce plan.

Maintenant, vos clients peuvent cliquer sur **Change Site Template** dans leur page de compte.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5pdvAuh6h3.png)  
Une liste de tous les modèles de site disponibles pour ce plan apparaîtra à votre client.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bQSA663xNo.png)

Après avoir sélectionné celui qu'ils souhaitent changer, ils seront invités à confirmer le changement.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6azvPydgAU.png)

Après avoir activé la confirmation et cliqué sur **Process Switch**, le nouveau modèle de site sera utilisé sur le site Web de votre client.

### Ajout de domaines personnalisés

Vos clients auront également la possibilité d'ajouter un domaine personnalisé pour ce plan sur leur page de compte. Pour permettre à vos clients d'utiliser des domaines personnalisés, allez dans **Ultimate Multisite > Settings > Domain Mapping**.

Activez l'option **Enable Domain Mapping**. Cela permettra à vos clients d'utiliser des domaines personnalisés au niveau du réseau.

N'oubliez pas de vérifier également si le mappage de domaine est activé au niveau du produit - car vous pouvez limiter un produit pour ne pas autoriser vos clients à utiliser des domaines personnalisés.

Allez dans **Ultimate Multisite > Products**. Sélectionnez le plan de votre choix et accédez à l'onglet **Custom Domains**. Activez l'option **Allow Custom Domains**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J7mrCTfet6.png)

Cela permettra à tous les clients abonnés à ce plan spécifique d'utiliser des domaines personnalisés. Maintenant, sur la page de compte, vos clients peuvent ajouter un domaine personnalisé en cliquant sur **Add Domain**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0mbLgC86SG.png)

La première fenêtre qui s'ouvre affichera à vos clients un message les indiquant comment mettre à jour leurs enregistrements DNS afin que ce domaine personnalisé fonctionne sur votre réseau.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-emhM26Abhn.png)

Ce message peut être modifié (par vous) dans **Ultimate Multisite > Settings > Domain Mapping > Add New Domain Instructions**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-6ZjI8Fk6Gw.png)

Après avoir cliqué sur **Next Step**, vos clients peuvent ajouter leur nom de domaine personnalisé et choisir si ce domaine personnalisé sera le principal. Notez que vos clients peuvent utiliser plus d'un domaine personnalisé pour leurs sites Web, ils peuvent donc choisir lequel sera le principal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-pSzZowjc2a.png)

Après avoir cliqué sur **Add Domain**, le domaine sera ajouté au compte de votre client. Il ne reste plus qu'à modifier les enregistrements DNS de ce domaine personnalisé chez leur registrar.

### Changement de mot de passe

Dans le tableau de bord du compte, vos clients peuvent également changer leur mot de passe en cliquant sur **Change Password**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sihWaIk4B8.png)

Une nouvelle fenêtre s'affichera où vos clients devront saisir leur mot de passe actuel puis le nouveau mot de passe qu'ils souhaitent utiliser.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-5zCgtcHfgB.png)

### Zone de danger

Nous avons également deux options affichées dans la partie **Danger Zone** : **Delete Site** et **Delete Account**. Elles figurent toutes deux dans la zone de danger car ces deux actions sont irréversibles. Si vos clients suppriment leur site Web ou leur compte, ils ne pourront pas les récupérer.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FMNX249rFi.png)

Si vos clients cliquent sur l'une de ces deux options, une fenêtre leur sera affichée où ils devront activer l'option pour supprimer le site Web ou le compte et ils seront avertis que cette action ne peut pas être annulée.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-MRI6taFdJK.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-itpv48GPgY.png)

S'ils suppriment leur site Web, leur compte et leur adhésion resteront inchangés. Ils ne perdront que tout le contenu de leur site Web. S'ils suppriment leur compte, tous les sites Web, les adhésions et les informations concernant ce compte seront perdus.
