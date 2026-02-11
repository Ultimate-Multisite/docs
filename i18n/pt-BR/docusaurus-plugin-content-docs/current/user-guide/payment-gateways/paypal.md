---
title: Configurando o PayPal
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# Configurando o Gateway PayPal (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Você pode ativar até quatro métodos de pagamento na página de configurações de pagamento: Stripe, Stripe Checkout, PayPal e Manual. Neste artigo, veremos como integrar com **PayPal**.

Assim como o Stripe, o PayPal é amplamente usado para pagamentos online, especialmente em sites WordPress. Este artigo irá guiá-lo sobre como usar o PayPal como método de pagamento disponível em sua rede.

Observe que você precisa ter uma **conta PayPal Business** para obter as credenciais da API necessárias para esta integração.

## Habilitando o PayPal na sua rede

Para habilitar o PayPal como um método de pagamento disponível em sua rede, vá para a aba **Ultimate Multisite > Settings > Payments** e marque a caixa ao lado do PayPal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FhlfHHJLPl.png)

## Obtendo as credenciais da API PayPal

Uma vez que o PayPal esteja habilitado como gateway de pagamento, você precisará preencher os campos para o **Nome de usuário** da API PayPal, **Senha** da API PayPal e **Assinatura** da API PayPal.

Você pode obter isso fazendo login na sua conta PayPal [Live](https://www.paypal.com/home) ou [Sandbox](https://www.sandbox.paypal.com/home).

(Lembre-se de que você pode usar o **modo sandbox** para testar pagamentos e verificar se o gateway está configurado corretamente. Basta ativar a seção correspondente.)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PgTatIgsIm.png)

Para solicitar credenciais de Assinatura ou Certificado da API para sua conta PayPal:

1. Vá para as [Configurações da Conta](https://www.paypal.com/businessmanage/account/accountAccess).

2. Na seção **API access**, clique em **Update**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Dx72ARoKzx.png)

3. Em **NVP/SOAP API integration (Classic)**, clique em **Manage API credentials**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mUoIzsfpMq.png)

   * Se você já gerou uma Assinatura ou Certificado da API, será redirecionado para uma página onde poderá encontrar suas credenciais.

   * _**Nota:** Se você for solicitado a verificar sua conta PayPal, siga as instruções na tela._

4. Selecione _uma_ das opções a seguir, então clique em **Agree and Submit**.

   * **Request API Signature** – Selecione para autenticação de Assinatura da API.

   * **Request API Certificate** – Selecione para autenticação de Certificado da API.

5. O PayPal gera suas credenciais da API da seguinte forma:  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-utEMaS5roo.png)

   * **Credenciais de Assinatura da API** incluem um Nome de usuário da API, Senha da API e Assinatura, que não expira. Esses valores são ocultados por padrão para maior segurança. Clique em **Show/Hide** para alternar entre exibir e ocultar. Quando terminar, clique em **Done**.

   * **Credenciais de Certificado da API** incluem um Nome de usuário da API, Senha da API e Certificado, que expira automaticamente após três anos. Clique em **Download Certificate** para salvar o Certificado da API em seu desktop.

Pronto, sua integração de pagamento PayPal está concluída!

Se você tiver alguma dúvida sobre as configurações do PayPal, pode consultar o [Help Center](https://www.paypal.com/br/smarthelp/home) do PayPal.
