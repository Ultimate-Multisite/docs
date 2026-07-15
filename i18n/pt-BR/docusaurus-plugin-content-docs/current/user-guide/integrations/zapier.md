---
title: Integração com Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrando Ultimate Multisite com Zapier

Em um dos artigos, discutimos [Webhooks](webhooks.md) e como eles podem ser usados para integrar com aplicativos de terceiros.

Usar webhooks é um pouco complicado, pois exige conhecimento avançado em programação e captura de payloads. Usar **Zapier** é uma forma de contornar isso.

Zapier tem integração com mais de 5000+ apps, o que facilita a comunicação entre diferentes aplicativos.

Você pode criar **Triggers** que serão acionados quando eventos acontecerem na sua rede (por exemplo, uma Account é criada e aciona o evento account_create) ou gerar **Actions** na sua rede reagindo a eventos externos (por exemplo, criar uma nova associação de Account na sua rede Ultimate Multisite).

Isso é possível porque os **triggers do Ultimate Multisite Zapier** e as actions são alimentados pela [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Como começar {#how-to-start}

Primeiro, pesquise por Ultimate Multisite na lista de apps do Zapier. Como alternativa, você pode clicar [neste link](https://zapier.com/apps/wp-ultimo/integrations).

Acesse seu Dashboard e pressione o botão **+** **Criar Zap** na barra lateral esquerda para configurar um novo Zap.

![Dashboard do Zapier com botão Criar Zap](/img/admin/webhooks-list.png)

Você será redirecionado para a página de criação do Zap.

Na caixa de pesquisa, digite "wp ultimo". Clique para escolher a opção de versão **Beta**.

![Pesquisando WP Ultimo na lista de apps do Zapier](/img/admin/webhooks-list.png)

Depois de selecionar nosso app, escolha o evento disponível: **Novo Evento do Ultimate Multisite**.

![Selecionando o trigger Novo Evento do Ultimate Multisite](/img/admin/webhooks-list.png)

Agora precisamos dar ao Zapier acesso à **sua rede**. Clicar em **Sign in** abrirá uma nova janela solicitando as **credenciais da API**.

![Prompt de Sign in do Zapier para credenciais da API](/img/admin/webhooks-list.png)

Vá para o painel de administração da sua rede e navegue até **Ultimate Multisite > Settings** > **API & Webhooks** e procure a seção API Settings.

Selecione a opção **Enable API**, pois ela é necessária para que esta conexão funcione.

![Configurações de API e Webhooks com as opções API Settings e Enable API](/img/admin/settings-api-webhooks.png)

Use o ícone **Copy to Clipboard** nos campos API Key e API Secret e cole esses valores na tela de integração.

No campo URL, coloque a URL completa da sua rede, incluindo o protocolo (HTTP ou HTTPS).

![Tela de integração do Zapier com campos API Key, Secret e URL](/img/admin/webhooks-list.png)

Clique no botão **Yes, Continue** para avançar para a próxima etapa. Se tudo der certo, você deverá ser recebido pela sua nova Account conectada! Clique em **Continue** para criar um novo trigger.

## Como criar um novo Trigger {#how-to-create-a-new-trigger}

Agora que sua Account está conectada, você pode ver os eventos disponíveis. Vamos escolher o evento **payment_received** para este tutorial.

![Selecionando o evento payment_received no trigger do Zapier](/img/admin/webhooks-list.png)

Depois que o evento for selecionado e você clicar em **continue**, uma **etapa de teste** aparecerá.

![Etapa de teste do Zapier para o trigger](/img/admin/webhooks-list.png)

Nesta etapa, o Zapier testará se o seu Zap consegue **buscar o payload específico para esse evento**. Em eventos futuros do mesmo tipo, informações com essa mesma estrutura serão enviadas.

![Teste do trigger do Zapier concluído com sucesso com payload](/img/admin/webhooks-list.png)

No nosso tutorial, o teste foi **concluído com sucesso** e retornou as informações de exemplo do payload. Essas informações de exemplo serão úteis para nos orientar ao criar actions. Seu trigger agora está criado e pronto para ser conectado a outros aplicativos.

## Como criar Actions {#how-to-create-actions}

Actions usam informações de outros triggers para criar novas entradas na sua rede.

Na **etapa de criação de uma action**, você escolherá o Ultimate Multisite **Beta** e a opção **Create Items on Ultimate Multisite**.

![Criando uma action com Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Na próxima etapa, você criará sua autenticação, assim como fizemos em **Como começar**, ou selecionará uma autenticação criada. Neste tutorial, escolheremos a mesma autenticação criada anteriormente.

![Selecionando autenticação para a action do Zapier](/img/admin/webhooks-list.png)

### Configurando a Action {#setting-up-the-action}

Esta é a **etapa principal da action** e aqui as coisas são um pouco diferentes. A primeira informação que você escolherá é o **Item**. Item é o **modelo de informação** da sua rede, como **Customers, Payments, Sites, Emails** e outros.

![Escolhendo o tipo de Item para a action do Zapier](/img/admin/webhooks-list.png)

Ao selecionar um item, o formulário será **reorganizado para trazer os campos obrigatórios e opcionais** do item selecionado.

Por exemplo, ao selecionar o item **Customer**, os campos do formulário trarão tudo o que é necessário preencher para criar um novo Customer na rede.

![Campos do item Customer na configuração da action do Zapier](/img/admin/webhooks-list.png)

Depois de preencher todos os campos marcados como **obrigatórios** e clicar em continuar, uma última tela mostrará os campos preenchidos e os campos que foram deixados em branco.

![Teste da action do Zapier mostrando campos preenchidos e não preenchidos](/img/admin/webhooks-list.png)

Assim que seu teste for concluído e tiver sucesso, sua action estará configurada. Também é importante verificar na sua rede se o item foi criado com o teste da sua action.
