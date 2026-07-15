---
title: Gestion des taxes
sidebar_position: 4
_i18n_hash: 8b94c58406519f9c55fe837c6addfc12
---
# Gestion des taxes

Ultimate Multisite intègre un module de collecte des taxes dans notre plugin principal ; ainsi, si vous devez collecter des taxes de vente sur vos plans, forfaits et services, vous pouvez le faire facilement sans recourir à l’installation d’extensions.

Pour les entreprises situées en Europe, nous proposons un **module complémentaire** qui ajoute des outils et fonctionnalités afin de mieux **prendre en charge la conformité à la TVA**.

Ultimate Multisite ne déclare ni ne reverse les taxes en votre nom au gouvernement ; nous vous aidons simplement à collecter les taxes appropriées au moment de la transaction. **Vous devrez toujours reverser les taxes vous-même.**

## Activer la collecte des taxes {#enabling-tax-collection}

La collecte des taxes n’est pas activée par défaut. Pour l’activer, vous devez aller dans **Ultimate Multisite > Settings > Taxes** et basculer l’option pour activer le réglage Activer les taxes.

![Bouton d’activation des taxes en haut de la page des réglages de taxes](/img/config/settings-taxes-enable.png)

Voici une vue complète de la page des réglages de taxes :

![Page complète des réglages de taxes](/img/config/settings-taxes-full.png)

Vous pouvez également afficher les réglages de taxes pour des produits individuels :

![Réglages de taxes pour les produits](/img/config/settings-taxes.png)

### Taxes exclues vs. taxes incluses {#tax-excluded-vs-tax-included}

Par défaut, tous les prix de vos produits sont hors taxes, ce qui signifie que les taxes **ne sont pas incluses** dans le prix du produit. Si nous déterminons qu’un client doit payer des taxes sur un achat donné, nous ajouterons les taxes **en plus** du sous-total.

Si vous préférez que les taxes soient incluses dans le prix de votre produit, vous pouvez le faire en activant le réglage **Taxe incluse**.

![Ligne du bouton Taxe incluse sous le réglage Activer les taxes](/img/config/settings-taxes-inclusive.png)

N’oubliez pas d’**enregistrer** les modifications que vous avez apportées.

###

## Créer des taux de taxe {#creating-tax-rates}

Après avoir activé la collecte des taxes, vous devrez créer des taux de taxe pour des emplacements spécifiques à l’aide de notre éditeur de taux de taxe.

Vous pouvez accéder à l’éditeur en cliquant sur le bouton **Gérer les taux de taxe** dans la barre latérale de la page des réglages de taxes.

![Lien Gérer les taux de taxe dans le panneau Taux de taxe sur la page des réglages](/img/config/settings-taxes-manage-rates.png)

Sur la page de l’éditeur de taux de taxe, vous pouvez ajouter de nouveaux taux de taxe en cliquant sur le bouton **Ajouter une nouvelle ligne**.

![Tableau de l’éditeur de taux de taxe avec le bouton Ajouter une nouvelle ligne en haut](/img/config/tax-rates-editor.png)

Vous devrez attribuer à chaque taux de taxe un **titre** (utilisé sur les factures). Vous pouvez ensuite choisir le **pays** (obligatoire), l’**État/la région**, et la **ville** (tous deux facultatifs) où cette taxe sera facturée. Enfin, ajoutez le **taux de taxe en pourcentage**.

### Catégories de taxe {#tax-categories}

Vous pouvez également créer plusieurs catégories de taxe, afin d’ajouter des taux de taxe différents pour différents types de produits.

Cliquez sur **Ajouter une nouvelle catégorie de taxe**, puis saisissez le nom de votre catégorie et appuyez sur **Créer**.

![Bouton Ajouter une nouvelle catégorie de taxe en haut de l’éditeur de taux de taxe](/img/config/tax-categories-add.png)

![Champ de saisie Nom de la catégorie de taxe dans la fenêtre modale de création de catégorie](/img/config/tax-categories-create-modal.png)

Pour parcourir les catégories, cliquez sur **Changer** et sélectionnez la catégorie à laquelle vous souhaitez ajouter de nouvelles taxes.

![Bouton de menu déroulant Changer pour passer d’une catégorie de taxe à une autre](/img/config/tax-categories-switch.png)

![Menu déroulant de sélection de catégorie de taxe affichant les catégories disponibles](/img/config/tax-categories-select.png)

Vous pouvez définir la catégorie de taxe pour un produit particulier en allant sur la **page de modification du produit**, puis dans l’onglet Taxes.

![Onglet Taxes du produit avec la catégorie de taxe et le bouton imposable](/img/config/product-taxes.png)

Sur ce même écran, vous pouvez désactiver le bouton **Est imposable ?** pour indiquer à Ultimate Multisite qu’il ne doit pas collecter de taxes sur ce produit donné.

## Prise en charge de la TVA européenne {#european-vat-support}

Comme mentionné précédemment, nous proposons un module complémentaire pour les clients de l’UE qui ont des exigences supplémentaires en raison des réglementations européennes en matière de TVA.

Nos outils de TVA aident pour quelques éléments importants :

  * Chargement facile des taux de TVA de l’UE ;

  * Collecte et validation du numéro de TVA - et autoliquidation pour les entités exonérées de TVA (comme les entreprises disposant de numéros de TVA valides) ;

Pour installer ce module complémentaire, allez dans **Ultimate Multisite > Settings**, puis cliquez sur le lien de barre latérale **Consultez nos modules complémentaires**.

![Barre latérale de la page des réglages avec le lien Consultez nos modules complémentaires](/img/config/settings-taxes-addons-link.png)

Vous serez redirigé vers notre page de modules complémentaires. Là, vous pouvez rechercher le **module complémentaire TVA Ultimate Multisite** et l’installer.

<!-- Capture d’écran indisponible : tuile du module complémentaire TVA sur la page des modules complémentaires -->

<!-- Capture d’écran indisponible : boîte de dialogue Installer maintenant du module complémentaire TVA -->

Ensuite, allez dans **Network Admin > Plugins** et activez ce module complémentaire sur tout le réseau.

<!-- Capture d’écran indisponible : action Activer sur le réseau pour le module complémentaire TVA sur la page des Plugins -->

Si vous retournez dans l’**onglet Réglages de taxes**, vous verrez de nouvelles options disponibles. Activez l’option **Activer la prise en charge de la TVA** pour activer les nouveaux outils de TVA. N’oubliez pas d’**enregistrer** vos réglages !

<!-- Capture d’écran indisponible : bouton Activer la prise en charge de la TVA dans les réglages de taxes après l’activation du module complémentaire -->

### Importer les taux de TVA {#pulling-on-vat-tax-rates}

L’un des outils ajoutés par notre intégration est la possibilité de charger les taux de taxe des États membres de l’UE. Cela peut être fait en visitant la page de l’éditeur de taux de taxe après avoir activé la prise en charge de la TVA de l’UE.

En bas de la page, vous verrez les options d’importation de la TVA. Sélectionner un type de taux et cliquer sur le bouton **Mettre à jour les taux de TVA de l’UE** importera et remplira automatiquement le tableau avec les taux de taxe de chaque État membre de l’UE. Ensuite, il ne vous restera plus qu’à l’enregistrer.

![Bouton Mettre à jour les taux de TVA de l’UE en bas de l’éditeur de taux de taxe](/img/config/tax-rates-vat-pull.png)

Vous pouvez également modifier les valeurs après les avoir importées. Pour ce faire, modifiez simplement la ligne du tableau dont vous avez besoin et cliquez pour enregistrer les nouvelles valeurs.

### Validation de la TVA {#vat-validation}

Lorsque la prise en charge de la TVA est activée, Ultimate Multisite ajoute un champ supplémentaire au formulaire de checkout, sous le champ de l’adresse de facturation. Le champ ne s’affichera que pour les clients situés dans l’UE.

<!-- Capture d’écran indisponible : champ Numéro de TVA sur le formulaire de checkout côté frontend sous l’adresse de facturation -->

Ultimate Multisite validera ensuite le numéro de TVA et, s’il s’avère valide, le mécanisme d’autoliquidation est appliqué et le taux de taxe est fixé à 0 % sur cette commande.
