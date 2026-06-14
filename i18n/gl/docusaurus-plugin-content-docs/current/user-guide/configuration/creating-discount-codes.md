---
title: Creación de códigos de descuento
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Creación de Códigos de Descuento (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Con Ultimate Multisite puedes crear códigos de descuento para ofrecer descuentos a tus clientes en sus suscripciones. ¡Y crearlos es muy fácil!

## Creación y Edición de Códigos de Descuento

Para crear o editar un código de descuento, ve a **Ultimate Multisite > Discount Codes**.

![Lista de códigos de descuento — estado vacío antes de que existan códigos](/img/config/discount-codes-empty.png)

Allí tendrás una lista de los códigos de descuento que ya has creado.

Puedes hacer clic en **Add Discount Code** (Añadir código de descuento) para crear un cupón nuevo o puedes editar los que tienes pasando el ratón por encima y haciendo clic en **Edit** (Editar).

![Lista de códigos de descuento con acciones al pasar el ratón mostrando enlaces Edit y Delete](/img/config/discount-codes-list-hover.png)

![Botón Add Discount Code en la cabecera de la página](/img/config/discount-codes-add-button.png)

Serás redirigido a la página donde crearás o editarás tu código de cupón. En este ejemplo, crearemos uno nuevo.

![Página de edición del código de descuento con todas las secciones visibles](/img/config/discount-code-edit.png)

Echemos un vistazo a los ajustes disponibles aquí:

**Enter Discount Code (Introduce Código de Descuento):** Este es solo el nombre de tu código de descuento. Este no es el código que tus clientes necesitarán usar en el formulario de pago (*checkout form*).

**Description (Descripción):** Aquí puedes describir brevemente para qué sirve este cupón.

![Campos de nombre y descripción del código de descuento en la parte superior de la página de edición](/img/config/discount-code-description.png)

También puedes ver el código de descuento como activo o inactivo:

![Estado de actividad del código de descuento](/img/config/discount-code-active.png)

**Coupon code (Código de cupón):** Aquí es donde defines el código que tus clientes necesitarán introducir durante el pago (*checkout*).

![Campo de código de cupón donde los clientes introducen el código al pagar](/img/config/discount-code-coupon-field.png)

**Desconto:** Aquí podes establecer un **porcentaje** o un **importe fijo** de dinero para o teu código de desconto.

![Configuración del importe de descuento con menú desplegable de porcentaje o importe fijo](/img/config/discount-code-amount.png)

**Aplicar a renovaciones:** Se desactiva esta opción, este código de desconto só se aplicará ao **primeiro pagamento**. Todos os outros pagamentos non terão desconto. Se esta opción está activada, o código de desconto será válido para todos os pagamentos futuros.

**Desconto de taxa de configuración:** Se desactiva esta opción, o código de cupón **non dará ningún desconto para a taxa de configuración** do pedido. Se esta opción está activada, podes establecer o desconto (porcentaje ou importe fijo) que este código de cupón aplicará á taxa de configuración dos teus plans.

![Opciones de activación para renovações e desconto de taxa de configuração](/img/config/discount-code-renewals.png)

**Activo:** Activa ou desactiva manualmente este código de cupón.

![Toggle de activo para activar ou desativar o código de desconto manualmente](/img/config/discount-code-active.png)

Dentro das **Opciones Avançadas**, temos as seguintes configuracións:

![Opciones avanzadas do código de desconto](/img/config/discount-code-advanced.png)

**Limitar usos:**

  * **Usos:** Aquí podes ver cuántas veces se utilizou o código de desconto.

  * **Máx. usos:** Isto limitará a cantidad de veces que os usuarios poden usar este código de desconto. Por exemplo, se pondes 10 aquí, o cupón só poderá ser usado 10 veces. Despois deste límite, o código de desconto non poderá ser usado máis.

![Configuración de límite de usos con contador de usos actuales e campo de usos máximos](/img/config/discount-code-limit-uses.png)

**Datas de início e de validade:** Aquí podes añadir unha data de inicio e/ou unha data de caducidade ao teu cupón.

![Campos de data de inicio e caducidade para programar o código de desconto](/img/config/discount-code-dates.png)

**Limitar produtos:** Se activas a opción **Select products**, se te mostrarán todos os teus produtos. Terás a opción de seleccionar manualmente (activando ou desactivando) que produto pode aceptar este código de cupón. Os produtos que estén desactivados aquí non moitarán ninguna cambio se os teus clientes intentaren usar este código de cupón para eles.

![Sección Limitar produtos con interruptores por producto](/img/config/discount-code-limit-products.png)

Tras configurar todas estas opcións, pulsa en **Save Discount Code** (Salvar Código de Desconto) para guardar o teu cupón e está feito!

![Botón Save Discount Code na parte inferior da página de edición](/img/config/discount-code-save.png)

O cupón agora está na lista tua e, a partir daí, podes pulsa para **editarlle ou deletelo**.

![Fila do código de desconto na lista con acción hover de Editar e Deletar](/img/config/discount-codes-list-hover.png)

###

### Usando Parámetros URL:

Se queres personalizar as túas tabelas de precios ou crear unha página bonita para o teu código de cupón no teu sitio web e queres aplicar un código de desconto ao formulario de checkout automáticamente, podes facelo mediante os parámetros URL.

En primeiro lugar, necesitas obter o enlace partilhable para o teu plan. Para isto, ve a **Ultimate Multisite > Products** (Produtos) e selecciona un plan.

Pulsa no botón **Click to Copy Shareable Link** (Clic para copiar enlace partilhable). Isto te dará o enlace partilhable a este plan específico. No noso caso, o enlace partilhable dado foi [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Páxina do produto con botón de enlace partilhable](/img/config/products-list.png)

Para aplicar o seu código de desconto a este plano específico, basta adicionar o parâmetro **?discount_code=XXX** à URL. Onde **XXX** é o código do cupón.

No nosso exemplo aqui, vamos aplicar o código de cupón **50OFF** a este produto específico.

A URL para este plano específico com o código de desconto 50OFF aplicada ficará assim: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.
