---
title: Configurando o PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configurando o Gateway PayPal (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à Ultimate Multisite versão 2.x.**_

Você pode ativar até quatro métodos de pagamento na página de configurações de pagamento: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com o **PayPal**.

Assim como o Stripe, o PayPal é amplamente utilizado para pagamentos online, especialmente em sites WordPress. Este artigo irá guiá-lo sobre como usar o PayPal como um método de pagamento disponível na sua rede.

Note que você precisa ter uma **conta Business do PayPal** para obter a credencial da API necessária para esta integração.

## Habilitando o PayPal na sua rede

Para habilitar o PayPal como um método de pagamento disponível na sua rede, vá em **Ultimate Multisite > Settings > Payments** e marque a caixa ao lado de PayPal.

![Habilitando o PayPal nos gateways de pagamento ativos](/img/config/settings-payment-gateways.png)

## Usando o assistente de configuração guiado

O Ultimate Multisite 2.10.0 adiciona um assistente de configuração guiado do PayPal nas configurações do gateway de pagamento. Depois de habilitar o PayPal, use o assistente em **Ultimate Multisite > Settings > Payments** para escolher como deseja conectar o gateway e confirmar quais credenciais ainda são necessárias antes de salvar.

O assistente suporta dois caminhos de configuração:

* **Inserção manual de credenciais**: Use este caminho quando você já tem as credenciais da API do PayPal, quando a configuração OAuth não está disponível para sua conta ou quando prefere copiar as credenciais diretamente do PayPal. Insira o Nome de Usuário da API (API Username), a Senha da API (API Password) e a Assinatura da API (API Signature) nos campos do PayPal e depois salve as configurações de pagamento.
* **Portão de conexão OAuth**: Use este caminho apenas quando a opção OAuth estiver disponível e habilitada para sua instalação. O assistente mostra o fluxo OAuth por trás de um feature flag, então redes sem esse flag continuar usando os campos de inserção manual de credenciais.

Se você não vir a opção OAuth no assistente, complete o fluxo de inserção manual de credenciais abaixo. O gateway funciona com as mesmas credenciais da API do PayPal Business das versões anteriores do Ultimate Multisite 2.x.

## Obtendo as credenciais da API do PayPal

Depois que o PayPal for habilitado como gateway de pagamento, você precisará preencher os campos para **Nome de Usuário da API** (PayPal API Username), **Senha da API** (PayPal API Password) e **Assinatura da API** (PayPal API Signature).

Você pode obter essas credenciais fazendo login na sua conta [Ao Vivo](https://www.paypal.com/home) ou [Sandbox](https://www.sandbox.paypal.com/home) do PayPal.

(Lembre-se de que você pode usar o **modo sandbox** para testar pagamentos e verificar se o gateway está configurado corretamente. Basta ativar a seção correspondente.)

![Campos de credenciais da API do PayPal e alternância do modo sandbox](/img/config/settings-payment-gateways.png)

Para solicitar Assinatura da API ou credenciais de Certificado para sua conta do PayPal:

  1. Vá para suas [Configurações da Conta](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Na seção **Acesso à API** (API access), clique em **Atualizar** (Update).
![Configurações da conta do PayPal com a seção Acesso à API](/img/config/settings-payment-gateways.png)

3. Em **Integração NVP/SOAP API (Clássica)**, clique em **Gerenciar credenciais da API**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Se você já gerou uma Assinatura de API ou Certificado, será redirecionado para uma página onde poderá encontrar suas credenciais.

     * _**Nota:** Se for solicitado que você verifique sua conta PayPal, siga as instruções na tela._

  4. Selecione **uma** das opções abaixo e clique em **Concordar e Enviar**.

     * **Solicitar Assinatura de API (Request API Signature)** – Selecione para autenticação por Assinatura de API.

     * **Solicitar Certificado de API (Request API Certificate)** – Selecione para autenticação por Certificado de API.

  5. O PayPal gera suas credenciais de API da seguinte forma:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **Credenciais de Assinatura de API (API Signature credentials)** incluem um Nome de Usuário de API, uma Senha de API e uma Assinatura, que não expiram. Esses valores estão ocultos por padrão para maior segurança. Clique em **Mostrar/Ocultar** para ligá-los ou desligá-los. Quando terminar, clique em **Concluído**.

     * **Credenciais de Certificado de API (API Certificate credentials)** incluem um Nome de Usuário de API, uma Senha de API e um Certificado, que expira automaticamente após três anos. Clique em **Baixar Certificado** para salvar o Certificado de API no seu desktop.

Pronto, sua integração de pagamento PayPal está completa!

Se tiver alguma dúvida sobre as configurações do PayPal, você pode consultar o [Centro de Ajuda](https://www.paypal.com/br/smarthelp/home) do PayPal.
