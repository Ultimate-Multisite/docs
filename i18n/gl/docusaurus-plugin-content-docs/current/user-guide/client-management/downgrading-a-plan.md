---
title: Reducir un plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Baixar un plan (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à Ultimate Multisite versão 2.x.**_

Baixar ou mudar de plano é unha acción que os vuestros clientes poden facer se tenxen un presupuesto limitado ou se deciden que non necesitan tantos recursos para xerar o seu subsite.

## Como baixar un plan {#how-to-downgrade-a-plan}

Os vuestros clientes poden baixar o seu plan en cualquier momento entrando no dashboard de administración do seu subsite e facendo clic en **Change** (Cambiar) na páxina da súa conta.

![Páxina da conta do cliente con a súa tarjeta de membro e botón Change](/img/account-page/membership-change-button.png)

Ao facer clic no botón **Change**, o usuario/cliente será redirixido á páxina de checkout onde poderá seleccionar o plan que quere cambiar para a súa suscripción.

![Páxina de opción de baixar plan na cara do cliente](/img/account-page/downgrade-picker.png)

Neste exemplo, estamos a baixar o plan de **Premium** a **Free**.

Para continuar, o usuario só necesita facer clic no botón **Complete Checkout** (Completar Checkout). Aínda traerá ao seu conta página mostrando unha mensaxe sobre a cambio pendente para o membro. As moitas terán efecto no **próximo ciclo de facturación** do cliente.

![Páxina da conta mostrando banner de cambio pendiente de membro](/img/account-page/pending-change.png)

### O que acontece cando un usuario baixa o seu plan {#what-happens-when-a-user-downgrades-their-plan}

É importante notar que baixar o plan non altera a configuración existente no subsite do usuario.

Non cambia automáticamente o template do sitio, ya que cambiar o template do sitio borraría e reiniciaría completamente o subsite. Isto é para evitar a pérdida de datos innecesaria. Así, o espazo do disco, os themes, os plugins, etc., permanecerán intactos excepto as publicacións (posts).

Entendemos que a súa principal preocupación serían os límites e as cotas que estableces en cada plan, pero temos que considerar o dano que isto podría causar ao subsite do usuario se deleta ou modifíses calquera das súas configuracións.

Para as publicacións que superen o límite establecido no plan, tes 3 opcións: **Mantemento as publicacións como están** *,* **Mover as publicacións á lixeira** *,* ou **Mover as publicacións ao rascunho** *. Podrás configurar isto aquí nas configuracións de Ultimate Multisite.

![Páxina de configuración do administrador da rede que mostra as opcións de comportamento cando se supera o límite de publicación](/img/account-page/settings-sites-post-limit.png)

### O que acontece ao pagamento {#what-happens-to-the-payment}

Na versión 2.0, non se necesita máis ningún ajuste no pago en termos de prorracionamento.

Isto porque o sistema esperará que a adhesión existente **complete o seu ciclo de facturación antes** de que o novo plan/adhesión entre em vigor. O novo importe de facturación para a nova adhesión se aplicará e cargará automáticamente no próximo ciclo de facturación.
