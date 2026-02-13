---
title: O Fluxo de Registro
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# O Fluxo de Registro (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Os usuários podem se registrar de diferentes maneiras em sua rede. Eles podem usar seu formulário de registro ou um link compartilhável para um plano pré‑selecionado. Aqui mostraremos como seus clientes podem se registrar em sua rede usando os caminhos disponíveis e o que acontece depois que eles se registram em sua rede.

## Usando o Formulário de Registro:

Este é o processo padrão de registro. Você cria uma página de registro com um **checkout form** e este será o local onde seus clientes irão se registrar em sua rede e assinar um plano. Você pode ter várias páginas de registro, cada uma com um formulário de registro diferente, se desejar.

A página padrão para registro é [_**yourdomain.com/register**_](http://yourdomain.com/register), mas você pode alterá-la a qualquer momento em **Ultimate Multisite > Settings > Login & Registration > Default Registration Page**.

Depois que um usuário chega à sua página de registro (geralmente clicando em um botão **Sign in** ou **Buy now**), ele verá seu formulário de registro lá.

![Registration form displayed on the registration page](/img/config/checkout-forms-list.png)

Tudo que eles precisam fazer é preencher todos os campos obrigatórios - e-mail, nome de usuário, senha, etc... - e pagar pelo plano ou confirmar seu endereço de e‑mail se estiverem se registrando para um plano gratuito ou um plano pago com período de teste sem informações de pagamento.

Na página de "Obrigado", eles verão uma mensagem informando se precisam confirmar seu endereço de e‑mail ou se seu site já está ativado e podem começar a usá-lo.

![Thank You page after registration](/img/config/checkout-form-editor.png)

Se for necessária a confirmação do endereço de e‑mail, eles precisarão acessar sua caixa de entrada e clicar no link de verificação. Seu site não será ativado se o endereço de e‑mail não for verificado.

Se eles se registraram em um plano pago ou a verificação de e‑mail não for obrigatória em sua rede, seu site será ativado imediatamente após o checkout e será exibido um link para fazer login no painel.

![Site activated with link to sign in to dashboard](/img/config/checkout-form-editor.png)

## Usando um Link Compartilhável:

O processo de registro usando um link compartilhável é basicamente o mesmo que o formulário de registro; a única diferença é que, usando um link compartilhável, seus clientes podem ter um produto ou modelo de site pré‑selecionado no formulário de checkout (consulte a seção Pré‑seleção de produtos e modelos via parâmetros de URL) ou talvez um código de cupom adicionado (consulte a seção Usando Parâmetros de URL).

O processo de registro será o mesmo: eles precisarão preencher seu nome, nome de usuário, endereço de e‑mail, nome e título do site, etc..., mas o plano ou modelo de site já estará pré‑selecionado para eles.

### Registrando‑se Usando Pagamentos Manuais:

Se você não deseja usar PayPal, Stripe ou qualquer outro gateway de pagamento oferecido pelo Ultimate Multisite ou suas integrações adicionais, pode usar pagamentos manuais para seus clientes. Dessa forma, você pode gerar uma fatura para que eles paguem em seu processador de pagamento preferido após se registrarem em sua rede.

O processo de registro será exatamente o mesmo que acima, mas na página de registro seus clientes verão uma mensagem informando que receberão um e‑mail com instruções adicionais para concluir o pagamento.

![Manual payment message during registration](/img/config/settings-payment-gateways.png)

E depois que o registro for concluído, eles verão as instruções de pagamento que você definiu (e também as receberão em seu e‑mail).

![Payment instructions shown after registration](/img/config/settings-payment-gateways.png)

As instruções de pagamento podem ser alteradas em **Ultimate Multisite > Settings > Payments** após ativar a opção de pagamento **Manual**:

![Manual payment toggle with payment instructions field](/img/config/settings-payment-gateways.png)

Depois que seus clientes concluírem o pagamento manual e enviarem a confirmação, você precisa **confirmar manualmente o pagamento** para ativar a associação e o site do cliente.

Para fazer isso, vá para **Ultimate Multisite > Payments** e encontre o pagamento do cliente. Ele ainda deve exibir o status **Pending**.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Clique no número do pagamento e você poderá alterar seu status para **Completed**.

![Payment details page](/img/admin/payments-list.png)

![Changing payment status to Completed](/img/admin/payments-list.png)

Depois de alterar seu status para **Completed**, você deve ver uma mensagem **Activate membership**. Ative essa opção **on** para ativar a associação e o site associados a este cliente. Em seguida, clique em **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payments-list.png)

Seu cliente agora deve conseguir acessar o painel e todos os recursos que ele assinou.
