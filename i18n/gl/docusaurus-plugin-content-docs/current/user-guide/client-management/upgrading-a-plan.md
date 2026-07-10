---
title: Actualización de plan
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Actualización de un Plan (v2) {#upgrading-a-plan-v2}

_**NOTA IMPORTANTE: Este artigo refere à versão 2.x do Ultimate Multisite.**_

Os seus clientes podem atualizar os seus planos a qualquer momento. Podem optar por atualizar para outro plano ou comprar quaisquer serviços ou pacotes adicionais que ofereça na sua rede.

Neste tutorial vamos mostrar como eles podem atualizar o seu plano e o que acontece depois do processo de atualização.

Para atualizar o plano, os seus clientes devem aceder ao painel (dashboard) deles e ir para a página **Account** (Conta).

![Painel do subsite do cliente com link do menu Account visível](/img/account-page/account-menu.png)

Na página Account, eles verão a sua adesão atual e o plano associado a ela. Para atualizar para outro plano, devem clicar em **Change** (Alterar) no canto superior direito da secção **Your Membership** (A Sua Adesão).

![Página Account Cartão Your Membership com botão Change](/img/account-page/membership-change-button.png)

Serão redirecionados para um formulário de checkout onde todos os planos disponíveis serão exibidos.

Eles também poderão ver os **serviços e pacotes disponíveis para o seu plano atual**, caso queiram apenas comprar um serviço ou pacote específico (como visitas ilimitadas ou espaço em disco no nosso exemplo aqui), e não atualizar o plano.

![Seletor de atualização mostrando planos e pacotes disponíveis do lado do cliente](/img/account-page/upgrade-picker.png)

Depois de escolher o produto que querem comprar, verão quanto terão de pagar agora — excluindo qualquer crédito existente — e quanto serão cobrados na próxima data de faturação.

Geralmente, se o produto for outro plano e o pagamento for feito entre uma taxa de adesão, receberão um crédito pelo valor pago no primeiro plano.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Se seleccionen un plan ou paquete que non mude nada da suscripción actual, verán unha mensaxe que explíca a situación.

![Aviso cando o plan seleccionado non modifica a suscripción](/img/account-page/upgrade-no-change.png)

Tras completar o checkout, os novos produto(s) se añadirán á conta dos vuestros clientes e todos os límites ou características dos novos produtos se añadirán instantaneamente: visitas, espazo de disco, posts, etc...

##

## Camiños de Actualización e Downgrade {#upgrade-and-downgrade-paths}

En cada un dos vuestros produtos, terás unha pestaña **Up & Downgrades**. A primeira opción nesa pestaña é un campo chamado **Plan Group**.

Os **Plan Groups** son o que permite a Ultimate Multisite saber que certos planos pertenecen á mesma "familia", e por tanto deben ser usados para construir as opción de camiño de actualización/downgrade.

![Pestaña de edición do produto Up and Downgrades con campo Plan Group](/img/config/product-upgrades-plan-group.png)

Por exemplo, tes un **Plan Gratuito**, un **Plan Básico** e un **Plan Premium** dispoñibles. Queres que os usuarios suscritos ao **Plan Gratuito** só poidan actualizar ao **Plan Premium** e non queres que vezan o "Plan Básico" como opción de actualización. Todo o que hai de facer é asignar o mesmo nome de Plan Group tanto para o Plan Gratuito como para o Plan Premium, como se ve nos screenshots abaixo.

![Páxina do produto Plan Gratuito con Plan Group High End asignado](/img/config/product-upgrades-free.png)

![Páxina do produto Plan Premium con Plan Group High End asignado](/img/config/product-upgrades-premium.png)

Isto debe avisar o Ultimate Multisite que existe unha "familia" de planos na rede chamada **High End**. Ao ofrecer actualizacións ou descantacións, só se presentarán opcións para o usuario dos mesmos planos da mesma familia.
