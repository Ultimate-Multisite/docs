---
title: Configurando o PayPal
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Configurando o gateway PayPal (v2)

_**OBSERVAÇÃO IMPORTANTE: Este artigo se refere à versão 2.x do Ultimate Multisite.**_

Você pode ativar até quatro métodos de pagamento na nossa página de configurações de pagamento: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com o **PayPal**.

Assim como Stripe, PayPal é amplamente usado para pagamentos online, especialmente em sites WordPress. Este artigo vai orientar você sobre como usar PayPal como um método de pagamento disponível na sua rede.

Observe que você precisa ter uma **conta PayPal Business** para obter a credencial de API necessária para esta integração.

## Habilitando PayPal na sua rede {#enabling-paypal-on-your-network}

Para habilitar PayPal como um método de pagamento disponível na sua rede, acesse a aba **Ultimate Multisite > Settings > Payments** e marque a caixa ao lado de PayPal.

![Habilitando PayPal nos gateways de pagamento ativos](/img/config/settings-payment-gateways.png)

## Usando o assistente de configuração guiada {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 adiciona um assistente de configuração guiada do PayPal às configurações de gateway de pagamento. Depois de habilitar PayPal, use o assistente em **Ultimate Multisite > Settings > Payments** para escolher como você quer conectar o gateway e confirmar quais credenciais ainda são necessárias antes de salvar.

O assistente oferece suporte a dois caminhos de configuração:

* **Inserção manual de credenciais**: Use este caminho quando você já tiver credenciais de API do PayPal, quando a configuração de OAuth não estiver disponível para sua Account ou quando você preferir copiar as credenciais do PayPal por conta própria. Insira o API Username, API Password e API Signature nos campos do PayPal e, em seguida, salve as configurações de pagamento.
* **Gate de conexão OAuth**: Use este caminho somente quando a opção OAuth estiver disponível e habilitada para sua instalação. O assistente mostra o fluxo OAuth por trás de um feature flag, portanto redes sem o flag continuam usando os campos de inserção manual de credenciais.

Se você não vir a opção OAuth no assistente, conclua o fluxo de inserção manual de credenciais abaixo. O gateway funciona com as mesmas credenciais de API PayPal Business das versões anteriores do Ultimate Multisite 2.x.

## Obtendo as credenciais de API do PayPal {#getting-the-paypal-api-credentials}

Depois que PayPal estiver habilitado como gateway de pagamento, você precisará preencher os campos para PayPal API **Username**, PayPal API **Password** e PayPal API **Signature**.

Você pode obter isso fazendo login na sua Account PayPal [Live](https://www.paypal.com/home) ou [Sandbox](https://www.sandbox.paypal.com/home).

(Lembre-se de que você pode usar o **modo sandbox** para testar pagamentos e ver se o gateway está configurado corretamente. Basta ativar a seção correspondente.)

![Campos de credenciais de API do PayPal e alternância do modo sandbox](/img/config/settings-payment-gateways.png)

Para solicitar credenciais de API Signature ou Certificate para sua Account PayPal:

  1. Acesse suas [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Na seção **Acesso à API**, clique em **Atualizar**.
![PayPal Account Settings com seção de acesso à API](/img/config/settings-payment-gateways.png)

  3. Em **Integração de API NVP/SOAP (Clássica)**, clique em **Gerenciar credenciais de API**.
![Integração de API NVP/SOAP do PayPal Gerenciar credenciais de API](/img/config/settings-payment-gateways.png)

     * Se você já gerou uma API Signature ou Certificate, será redirecionado para uma página onde poderá encontrar suas credenciais.

     * _**Observação:** Se for solicitado que você verifique sua Account PayPal, siga as instruções na tela._

  4. Selecione _uma_ das seguintes opções e clique em **Concordar e enviar**.

     * **Solicitar API Signature** – Selecione para autenticação por API Signature.

     * **Solicitar API Certificate** – Selecione para autenticação por API Certificate.

  5. PayPal gera suas credenciais de API da seguinte forma:
![Credenciais de API geradas pelo PayPal](/img/config/settings-payment-gateways.png)

     * As **credenciais de API Signature** incluem um API Username, API Password e Signature, que não expiram. Esses valores ficam ocultos por padrão para maior segurança. Clique em **Mostrar/Ocultar** para ativá-los e desativá-los. Quando terminar, clique em **Concluído**.

     * As **credenciais de API Certificate** incluem um API Username, API Password e Certificate, que expira automaticamente após três anos. Clique em **Download Certificate** para salvar o API Certificate na sua área de trabalho.

Pronto, sua integração de pagamento PayPal está concluída!

Se você tiver alguma dúvida sobre as configurações do PayPal, consulte a [Central de Ajuda](https://www.paypal.com/br/smarthelp/home) do PayPal.
