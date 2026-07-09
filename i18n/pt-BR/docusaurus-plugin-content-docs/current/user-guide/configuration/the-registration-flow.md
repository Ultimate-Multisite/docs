---
title: O fluxo de registro
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# O Fluxo de Registro (v2)

_**NOTA IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Os usuários podem se registrar de diferentes maneiras na sua rede. Eles podem usar seu formulário de registro ou um link compartilhável para um plano pré-selecionado. Aqui mostraremos como seus clientes podem se registrar na sua rede usando os caminhos disponíveis e o que acontece depois que eles se registram na sua rede.

## Usando o Formulário de Registro:

Este é o processo de registro padrão. Você cria uma página de registro com um **formulário de finalização de compra** e será nela que seus clientes irão se registrar na sua rede e assinar um plano. Você pode ter várias páginas de registro, cada uma com um formulário de registro diferente, se quiser.

A página padrão para registro é [_**yourdomain.com/register**_](http://yourdomain.com/register), mas você pode alterar isso a qualquer momento em **Ultimate Multisite > Configurações > Login e Registro > Página de Registro Padrão**.

Depois que um usuário chegar à sua página de registro (geralmente clicando em um botão **Entrar** ou **Comprar agora**), ele verá seu formulário de registro ali.

![Formulário de registro exibido na página de registro](/img/frontend/registration-form.png)

Aqui está um exemplo do formulário de finalização de compra como ele aparece no frontend:

![Formulário de registro de finalização de compra no frontend](/img/config/checkout-frontend-registration.png)

Tudo o que eles precisam fazer é preencher todos os campos obrigatórios - email, nome de usuário, senha etc... - e pagar pelo plano ou confirmar o endereço de email se estiverem se registrando em um plano gratuito ou em um plano pago com período de teste sem informações de pagamento.

Na página de "Obrigado", eles verão uma mensagem informando se precisam confirmar o endereço de email ou se o site deles já está ativado e eles podem começar a usá-lo.

![Página de Obrigado após o registro](/img/frontend/registration-thank-you.png)

Se a confirmação do endereço de email for obrigatória, eles precisarão acessar a caixa de entrada do email e clicar no link de verificação. O site deles não será ativado se o endereço de email não for verificado.

Se eles se registraram em um plano pago ou se a verificação de email não for obrigatória na sua rede, o site deles será ativado logo após a finalização da compra e será exibido um link para entrar no dashboard.

![Site ativado com link para entrar no dashboard](/img/frontend/site-activated.png)

## Usando um Link Compartilhável:

O processo de registro usando um link compartilhável é basicamente o mesmo do formulário de registro; a única diferença é que, usando um link compartilhável, seus clientes podem ter um produto ou modelo de site pré-selecionado no formulário de finalização de compra (consulte a seção Pré-selecionando produtos e modelos via parâmetros de URL) ou talvez um código de cupom adicionado (consulte a seção Usando Parâmetros de URL).

O processo de registro será o mesmo: eles precisarão preencher nome, nome de usuário, endereço de email, nome e título do site etc... mas o plano ou modelo de site já estará pré-selecionado para eles.

### Registrando Usando Pagamentos Manuais:

Se você não quiser usar PayPal, Stripe ou qualquer outro gateway de pagamento oferecido pelo Ultimate Multisite ou por suas integrações de add-ons, você pode usar pagamentos manuais para seus clientes. Dessa forma, você pode gerar uma fatura para eles pagarem no processador de pagamento de sua preferência depois que eles se registrarem na sua rede.

O processo de registro será exatamente o mesmo descrito acima, mas na página de registro seus clientes verão uma mensagem informando que receberão um email com mais instruções para concluir o pagamento.

![Mensagem de pagamento manual durante o registro](/img/frontend/registration-manual-notice.png)

E depois que o registro for concluído, eles verão as instruções de pagamento que você definiu (e também as receberão por email).

![Instruções de pagamento exibidas após o registro](/img/frontend/registration-payment-instructions.png)

As instruções de pagamento podem ser alteradas em **Ultimate Multisite > Configurações > Pagamentos** depois de ativar a opção de pagamento **Manual**:

![Alternância de pagamento manual com campo de instruções de pagamento](/img/config/manual-gateway-settings.png)

Depois que seus clientes concluírem o pagamento manual e enviarem a confirmação, você precisa **confirmar manualmente o pagamento** para ativar a associação e o site do cliente.

Para fazer isso, vá para **Ultimate Multisite > Pagamentos** e encontre o pagamento do cliente. Ele ainda deve mostrar um status **Pendente**.

![Lista de pagamentos com pagamento manual pendente](/img/admin/payments-list.png)

Clique no número do pagamento e você poderá alterar o status para **Concluído**.

![Página de detalhes do pagamento](/img/admin/payment-edit.png)

![Alterando o status do pagamento para Concluído](/img/admin/payment-status-completed.png)

Depois de alterar o status para **Concluído** , você deverá ver uma mensagem **Ativar associação**. Ative esta opção **on** para ativar a associação e o site associados a este cliente. Em seguida, clique em **Salvar Pagamento**.

![Alternância Ativar associação e botão Salvar Pagamento](/img/admin/payment-activate-membership.png)

Seu cliente agora deve conseguir acessar o dashboard e todos os recursos que assinou.
