---
title: Integração Zapier
sidebar_position: 12
_i18n_hash: cf4bbd6dfae0fa99b3d009298cad3f19
---
# Integrando Ultimate Multisite com Zapier

Em um dos artigos, discutimos [Webhooks](webhooks.md) e como eles podem ser usados para integrar com aplicações de terceiros.

Usar webhooks é um pouco complicado, pois requer conhecimento avançado em codificação e captura de payloads. Usar **Zapier** é uma forma de contornar isso.

O Zapier tem integração com mais de 5000 apps, o que facilita a comunicação entre diferentes aplicações.

Você pode criar **Triggers** que serão acionados quando eventos ocorrerem em sua rede (ex.: uma conta é criada e dispara o evento `account_create`) ou gerar **Actions** em sua rede reagindo a eventos externos (ex.: criar uma nova assinatura de conta em sua rede Ultimate Multisite).

Isso é possível porque os **triggers do Ultimate Multisite Zapier** e as ações são alimentados pela [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Como começar

Primeiro, procure por Ultimate Multisite na lista de apps do Zapier. Alternativamente, você pode clicar [neste link](https://zapier.com/apps/wp-ultimo/integrations).

Vá para o seu painel e pressione o botão **+** **Create Zap** na barra lateral esquerda para configurar um novo Zap.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kyu5ufUXOv.png)

Você será redirecionado para a página de criação de Zap.

Na caixa de pesquisa digite "wp ultimo". Clique para escolher a opção de versão **Beta**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BrOYbp7dSE.png)

Depois de selecionar nosso app, escolha o evento disponível: **New Ultimate Multisite Event**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-srblXqJnQE.png)

Agora precisamos dar acesso ao Zapier à **sua rede**. Clicar em **Sign in** abrirá uma nova janela exigindo as **API credentials**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HcULsQoFpZ.png)

Vá para o painel de administração da sua rede e navegue até **Ultimate Multisite > Settings** > **API & Webhooks** e procure a seção API Settings.

Selecione a opção **Enable API**, pois é necessária para que essa conexão funcione.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-l7KbeKUkPX.png)

Use o ícone **Copy to Clipboard** nos campos API Key e API Secret e cole esses valores na tela de integração.

No campo URL, coloque a URL completa da sua rede, incluindo o protocolo (HTTP ou HTTPS).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4UVPQAlzYk.png)

Clique no botão **Yes, Continue** para avançar para a próxima etapa. Se tudo funcionar, você será saudado pela sua nova conta conectada! Clique em **Continue** para criar um novo trigger.

## Como criar um novo Trigger

Agora que sua conta está conectada, você pode ver os eventos disponíveis. Vamos escolher o evento **payment_received** para este tutorial.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-jZE7WgSGw8.png)

Depois que o evento for selecionado e você clicar em **continue**, aparecerá uma etapa de **test**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-SWo5wbMkgZ.png)

Nesta etapa, o Zapier testará se seu Zap pode **fetch the specific payload to that event**. Em eventos futuros do mesmo tipo, informações com essa mesma estrutura serão enviadas.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-CVCJxhN3ai.png)

Em nosso tutorial, o teste foi **completed successfully** e retornou as informações de exemplo do payload. Essas informações de exemplo serão úteis para orientar-nos ao criar ações. Seu trigger agora está criado e pronto para ser conectado a outras aplicações.

## Como criar Actions

As Actions usam informações de outros triggers para criar novas entradas em sua rede.

Na etapa **creating an action step** você escolherá o Ultimate Multisite **Beta** e a opção **Create Items on Ultimate Multisite**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-swCbHP8jNG.png)

Na próxima etapa, você criará sua autenticação, assim como fizemos em **How to start**, ou selecionará uma autenticação já criada. Neste tutorial, escolheremos a mesma autenticação criada anteriormente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-iRSFnhpoHv.png)

### Configurando a Action

Esta é a **main step of the action** e aqui as coisas são um pouco diferentes. A primeira informação que você escolherá é o **Item**. O Item é o **information model** da sua rede, como **Customers, Payments, Sites, Emails** e outros.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-GC4iHxBn4e.png)

Ao selecionar um item, o formulário **rearrange to bring the required and optional fields** para o item selecionado.

Por exemplo, ao selecionar o item **Customer**, os campos do formulário trarão tudo que é necessário preencher para criar um novo Customer na rede.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4xpHH5xTaf.png)

Depois de preencher todos os campos marcados como **required** e clicar em continue, uma última tela mostrará os campos preenchidos e os campos que ficaram em branco.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JLPq56npV6.png)

Assim que seu teste for concluído e bem-sucedido, sua action estará configurada. Também é importante verificar em sua rede se o item foi criado com o teste da sua action.
