---
title: Creare codices adhibendi
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Creare Códigos de Descuento (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Con Ultimate Multisite puedes crear códigos de descuento para ofrecer descuentos a tus clientes en sus suscripciones. ¡Y crearlos es muy fácil!

## Creación y Edición de Códigos de Descuento

Para crear o editar un código de descuento, ve a **Ultimate Multisite > Discount Codes**.

![Lista de códigos de descuento — estado vacío antes de que existan códigos](/img/config/discount-codes-empty.png)

Allí tendrás una lista de los códigos de descuento que ya has creado.

Puedes hacer clic en **Add Discount Code** (Añadir Código de Descuento) para crear un cupón nuevo o puedes editar los que ya tienes pasando el ratón por encima y haciendo clic en **Edit** (Editar).

![Lista de códigos de descuento con acciones al pasar el ratón mostrando enlaces Editar y Eliminar](/img/config/discount-codes-list-hover.png)

![Botón Añadir Código de Descuento en la cabecera de la página](/img/config/discount-codes-add-button.png)

Serás redirigido a la página donde crearás o editarás tu código de cupón. En este ejemplo, crearemos uno nuevo.

![Página de edición del código de descuento con todas las secciones visibles](/img/config/discount-code-edit.png)

Echemos un vistazo a los ajustes disponibles aquí:

**Enter Discount Code (Ingresar Código de Descuento):** Este es solo el nombre de tu código de descuento. Este no es el código que tus clientes necesitarán usar en el formulario de pago.

**Description (Descripción):** Aquí puedes describir brevemente para qué sirve este cupón.

![Campos de nombre y descripción del código de descuento en la parte superior de la página de edición](/img/config/discount-code-description.png)

También puedes ver el código de descuento como activo o inactivo:

![Estado activo del código de descuento](/img/config/discount-code-active.png)

**Coupon code (Código de cupón):** Aquí es donde defines el código que tus clientes deberán introducir durante el pago.

![Campo de código de cupón donde los clientes ingresan el código al pagar](/img/config/discount-code-coupon-field.png)

**Descuento:** Aquí puedes establecer un **porcentaje** o una **cantidad fija** de dinero para tu código de descuento.

![Configuración del monto del descuento con menú desplegable de porcentaje o cantidad fija](/img/config/discount-code-amount.png)

**Aplicar a renovaciones:** Si esta opción está desactivada, este código de descuento solo se aplicará al **primer pago**. Todos los demás pagos no tendrán descuento. Si esta opción está activada, el código de descuento será válido para todos los pagos futuros.

**Descuento por tarifa de configuración (Setup fee discount):** Si esta opción está desactivada, el código de cupón **no dará ningún descuento por la tarifa de configuración** del pedido. Si esta opción está activada, puedes establecer el descuento (porcentaje o cantidad fija) que este código de cupón aplicará a la tarifa de configuración de tus planes.

![Opciones de alternancia para aplicar a renovaciones y descuento por tarifa de configuración](/img/config/discount-code-renewals.png)

**Activo:** Activa o desactiva manualmente este código de cupón.

![Alternador activo para habilitar o deshabilitar el código de descuento manualmente](/img/config/discount-code-active.png)

Bajo **Opciones Avanzadas**, tenemos las siguientes configuraciones:

![Opciones avanzadas del código de descuento](/img/config/discount-code-advanced.png)

**Límite de usos:**

  * **Usos (Uses):** Aquí puedes ver cuántas veces se ha utilizado el código de descuento.

  * **Máximo de usos (Max uses):** Esto limitará la cantidad de veces que los usuarios pueden usar este código de descuento. Por ejemplo, si pones 10 aquí, el cupón solo podrá usarse 10 veces. Después de este límite, el código de descuento ya no se podrá utilizar.

![Configuración del límite de usos con el recuento de usos actuales y el máximo de usos](/img/config/discount-code-limit-uses.png)

**Datas de début et d'expiration :** Ici, vous aurez la possibilité d'ajouter une date de début et/ou une date d'expiration à votre coupon.

![Champs de date de début et d'expiration pour planifier le code de réduction](/img/config/discount-code-dates.png)

**Limiter les produits :** Si vous activez **Sélectionner les produits**, tous vos produits s'afficheront. Vous aurez la possibilité de sélectionner manuellement (en activant ou désactivant) quel produit peut accepter ce code de réduction. Les produits qui sont désactivés ici ne montreront aucun changement si vos clients essaient d'utiliser ce code de réduction pour eux.

![Section Limiter les produits avec interrupteurs par produit](/img/config/discount-code-limit-products.png)

Après avoir configuré toutes ces options, cliquez sur **Enregistrer le code de réduction** pour sauvegarder votre coupon et c'est fait !

![Bouton Enregistrer le code de réduction en bas de la page d'édition](/img/config/discount-code-save.png)

Le coupon est maintenant dans votre liste et, à partir de là, vous pouvez cliquer pour l'**éditer ou le supprimer**.

![Ligne de code de réduction dans la liste avec actions de survol Éditer et Supprimer](/img/config/discount-codes-list-hover.png)

###

### Utilisation des paramètres d'URL :

Si vous souhaitez personnaliser vos tableaux de prix ou créer une belle page de code de réduction pour votre site web et appliquer automatiquement un code de réduction à votre formulaire de paiement, vous pouvez le faire via les paramètres d'URL.

Tout d'abord, vous devez obtenir le lien partageable pour votre plan. Pour ce faire, allez dans **Ultimate Multisite > Produits** et sélectionnez un plan.

Cliquez sur le bouton **Cliquer pour copier le lien partageable**. Cela vous donnera le lien partageable pour ce plan spécifique. Dans notre cas, le lien partageable fourni était [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Page produit avec bouton de lien partageable](/img/config/products-list.png)

Adne codicem de reducere la acest plan specific, doar adăugați parametrul **?discount_code=XXX** în URL. Unde **XXX** este codul couponului.

În exemplul nostru, vom aplica codul couponului **50OFF** acestui produs specific.

URL-ul pentru acest plan specific și cu codul de reducere 50OFF aplicat va arăta astfel: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
