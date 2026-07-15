---
title: O Fluxo de Registro
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# O Fluxo de Cadastro (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Os usuários podem se cadastrar em sua rede de maneiras diferentes. Eles podem usar seu formulário de cadastro ou um link compartilhável para um plano pré-selecionado. Aqui mostraremos como seus clientes podem se cadastrar na sua rede usando os caminhos disponíveis e o que acontece depois que eles se registram na sua rede.

## Usando o Formulário de Cadastro: {#using-the-registration-form}

Este é o processo de registro padrão. Você cria uma página de cadastro com um **formulário de checkout** e é aqui que seus clientes irão se cadastrar na sua rede e assinar um plano. Você pode ter várias páginas de cadastro, cada uma com um formulário diferente se desejar.

A página padrão para registro é [_**seu-dominio.com/register**_](http://yourdomain.com/register), mas você pode mudar isso a qualquer momento em **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Depois que o usuário chegar à sua página de cadastro (geralmente clicando em um botão **Entrar** ou **Compre agora**), ele verá seu formulário de registro lá.

![Formulário de cadastro exibido na página de registro](/img/frontend/registration-form.png)

Aqui está um exemplo do formulário de checkout como ele aparece no frontend:

![Formulário de registro de checkout frontend](/img/config/checkout-frontend-registration.png)

Tudo o que eles precisam fazer é preencher todos os campos obrigatórios - e-mail, nome de usuário, senha, etc... - e pagar pelo plano ou confirmar seu endereço de e-mail se estiver se registrando para um plano gratuito ou um plano pago com período de teste sem informações de pagamento.

Na página "Obrigado", eles verão uma mensagem informando se precisam confirmar o endereço de e-mail ou se o site deles já está ativado e podem começar a usá-lo.

![Página de agradecimento após o registro](/img/frontend/registration-thank-you.png)

Se for necessária uma confirmação de endereço de e-mail, eles precisarão ir para a caixa de entrada do e-mail deles e clicar no link de verificação. O site não será ativado se o endereço de e-mail não for verificado.

Se eles se registraram em um plano pago ou se a verificação de e-mail não é obrigatória na sua rede, o website será ativado logo após o checkout e eles verão um link para fazer login no painel deles.

![Site ativado com link para fazer login no painel](/img/frontend/site-activated.png)

## Usando um Link Compartilhável: {#using-a-shareable-link}

O processo de registro usando um link compartilhável é basicamente o mesmo que o formulário de registro, a única diferença é que, ao usar um link compartilhável, seus clientes podem ter um produto ou modelo de website pré-selecionado no formulário de checkout (consulte a seção Pre-selecting products and templates via URL parameters) ou talvez um código de cupom adicionado (consulte a seção Using URL Parameters).

O processo de registro será o mesmo: eles precisarão preencher nome, nome de usuário, endereço de e-mail, nome do website e título, etc... mas o plano ou modelo de site já estarão pré-selecionados para eles.

### Registrando Usando Pagamentos Manuais: {#registering-using-manual-payments}

Se você não quiser usar PayPal, Stripe ou qualquer outro gateway de pagamento oferecido pelo Ultimate Multisite ou suas integrações adicionais, você pode usar pagamentos manuais para seus clientes. Desta forma, você pode gerar uma fatura para que eles paguem no seu processador de pagamento preferido após se registrarem na sua rede.

O processo de registro será exatamente o mesmo acima, mas na página de registro seus clientes verão uma mensagem dizendo que receberão um e-mail com instruções adicionais para concluir o pagamento.

![Mensagem de pagamento manual durante o registro](/img/frontend/registration-manual-notice.png)

E depois que o registro for concluído, eles verão as instruções de pagamento que você configurou (e também receberão isso por e-mail).

![Instruções de pagamento mostradas após o registro](/img/frontend/registration-payment-instructions.png)

As instruções de pagamento podem ser alteradas em **Ultimate Multisite > Settings > Payments** ativando a opção de pagamento **Manual**:

![Alternador de pagamento manual com campo de instruções de pagamento](/img/config/manual-gateway-settings.png)

Depois que seus clientes concluírem o pagamento manual e enviarem a confirmação para você, você precisa **confirmar manualmente o pagamento** para ativar a associação do cliente e o site.

Para fazer isso, vá em **Ultimate Multisite > Payments** e encontre o pagamento do cliente. Ele ainda deve mostrar o status **Pendente**.

![Lista de pagamentos com pagamento manual pendente](/img/admin/payments-list.png)

Clique no número do pagamento e você poderá mudar o status para **Concluído**.

![Página de detalhes do pagamento](/img/admin/payment-edit.png)

![Mudando o status do pagamento para Concluído](/img/admin/payment-status-completed.png)

Depois de mudar o status para **Concluído**, você verá uma mensagem **Ativar associação**. Ative esta opção **ligando** para ativar a associação e o site associados a este cliente. Em seguida, clique em **Salvar pagamento**.

![Alternador de ativação de associação e botão Salvar Pagamento](/img/admin/payment-activate-membership.png)

Seu cliente agora deverá conseguir acessar o dashboard e todos os recursos aos quais ele se inscreveu.
