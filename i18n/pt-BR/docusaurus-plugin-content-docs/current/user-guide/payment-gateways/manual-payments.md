---
title: Configurando Pagamentos Manuais
sidebar_position: 20
_i18n_hash: a780a809c96da21ceb3ec6bb67a016d7
---
# Configurando Pagamentos Manuais (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Pagamentos manuais são uma forma de oferecer a seus usuários outros métodos de pagamento caso o **Stripe** ou o **PayPal** não estejam disponíveis. Pode ser uma transferência bancária ou outro método de pagamento disponível localmente para seus usuários.

## Como habilitar Pagamentos Manuais

Configurar pagamento manual é muito fácil. Basta habilitá-lo em **Gateways de Pagamento** e inserir instruções detalhadas sobre como o usuário deve enviar o pagamento.

Primeiro, vá em **Ultimate Multisite > Settings > Payments**. Abaixo de **Gateways de Pagamento**, ative **Manual**. Você verá que uma caixa **Instruções de Pagamento** aparecerá para você.

Adicione a essa caixa as informações que seu cliente precisará para fazer o pagamento. Pode ser os detalhes da sua conta bancária e seu e‑mail para que o cliente possa enviar a confirmação de pagamento, por exemplo.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U0K40VsARU.png)

Depois de configurado, basta clicar em **Salvar Configurações** e pronto. Quando os usuários se registrarem na sua rede, eles verão uma mensagem informando que receberão suas instruções para concluir a compra.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-drAYOHh331.png)

E eles também receberão uma mensagem na sua página **Página de Agradecimento** com suas instruções de pagamento.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Nf6HTYbu2g.png)

## Confirmando Pagamentos Manuais

Para confirmar um pagamento manual, vá ao menu **Payments** na barra lateral esquerda. Lá você pode ver todos os pagamentos na sua rede e seus detalhes, incluindo o **status**. Um pagamento manual sempre terá o status **Pendente** até que você o altere manualmente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-C3U9LgT2Ev.png)

Acesse a página de pagamento clicando no **código de referência**. Nessa página você tem todos os detalhes do pagamento pendente, como ID de referência, produtos, timestamps e mais.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sXfbxcYFs6.png)

Na coluna da direita, você pode alterar o status do pagamento. Alterando para **Concluído** e ativando a opção **Ativar Associação** permitirá que o site do seu cliente seja habilitado e a assinatura dele fique ativa.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-q5hHRxdhfg.png)
