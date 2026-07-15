---
title: Integração Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrando o Ultimate Multisite com o Zapier

Em um dos artigos, discutimos [Webhooks](webhooks.md) e como eles podem ser usados para integrar com aplicações de terceiros.

Usar webhooks pode ser um pouco complicado, pois exige conhecimento avançado em programação e na captura de payloads. Usar o **Zapier** é uma maneira de contornar isso.

O Zapier tem integração com mais de 5000+ apps, o que facilita a comunicação entre diferentes aplicações.

Você pode criar **Triggers** (Gatilhos) que serão acionados quando eventos ocorrerem na sua rede (por exemplo, uma conta é criada e dispara o evento `account_create`) ou gerar **Actions** (Ações) na sua rede reagindo a eventos externos (por exemplo, criar um novo membro da associação em sua rede Ultimate Multisite).

Isso é possível porque os **triggers** e **actions** do **Ultimate Multisite Zapier** são alimentados pela [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Como começar {#how-to-start}

Primeiro, procure por Ultimate Multisite na lista de aplicativos do Zapier. Alternativamente, você pode clicar neste [link](https://zapier.com/apps/wp-ultimo/integrations).

Vá para o seu dashboard e pressione o botão **+** **Create Zap** (Criar Zap) na barra lateral esquerda para configurar um novo Zap.

![Zapier dashboard com botão Create Zap](/img/admin/webhooks-list.png)

Você será redirecionado para a página de criação do Zap.

Na caixa de pesquisa, digite "wp ultimo". Clique para escolher a opção **Beta**.

![Procurando WP Ultimo na lista de aplicativos do Zapier](/img/admin/webhooks-list.png)

Após selecionar nosso aplicativo, escolha o evento disponível: **New Ultimate Multisite Event** (Novo Evento Ultimate Multisite).

![Selecionando New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Agora precisamos dar acesso ao Zapier à **sua rede**. Clicar em **Sign in** (Entrar) abrirá uma nova janela que requer as **API credentials** (credenciais de API).

![Prompt de login do Zapier para credenciais de API](/img/admin/webhooks-list.png)

Vá para o painel de administração da sua rede e navegue até **Ultimate Multisite > Configurações** > **API & Webhooks** e procure a seção Configurações de API (API Settings).

Selecione a opção **Habilitar API** (Enable API), pois ela é necessária para que esta conexão funcione.

![Configurações de API e Webhooks com as opções Configurações de API e Habilitar API](/img/admin/settings-api-webhooks.png)

Use o ícone **Copiar para a área de transferência** (Copy to Clipboard) nos campos Chave da API (API Key) e Segredo da API (API Secret) e cole esses valores na tela de integração.

No campo URL, insira o URL completo da sua rede, incluindo o protocolo (HTTP ou HTTPS).

![Tela de integração do Zapier com os campos Chave da API, Segredo e URL](/img/admin/webhooks-list.png)

Clique no botão **Sim, Continuar** (Yes, Continue) para passar para a próxima etapa. Se tudo correr bem, você será recebido pela sua nova conta conectada! Clique em **Continuar** (Continue) para criar um novo gatilho (trigger).

## Como criar um novo Gatilho (Trigger) {#how-to-create-a-new-trigger}

Agora que sua conta está conectada, você pode ver os eventos disponíveis. Vamos escolher o evento **payment_received** (recebimento de pagamento) para este tutorial.

![Selecionando o evento payment_received no gatilho do Zapier](/img/admin/webhooks-list.png)

Depois de selecionar o evento e clicar em **continuar**, uma etapa de teste (test step) aparecerá.

![Etapa de teste do Zapier para o gatilho](/img/admin/webhooks-list.png)

Nesta fase, o Zapier testará se o seu Zap consegue **buscar a carga útil específica (payload) para aquele evento**. Em eventos futuros do mesmo tipo, informações com essa mesma estrutura serão enviadas.

![Teste de gatilho do Zapier concluído com sucesso com a payload](/img/admin/webhooks-list.png)

No nosso tutorial, o teste foi **concluído com sucesso** e retornou informações de exemplo do payload. Essas informações de exemplo serão úteis para nos guiar na criação de ações. Seu trigger já foi criado e está pronto para ser conectado a outras aplicações.

## Como criar Ações {#how-to-create-actions}

As Ações usam informações de outros triggers para criar novas entradas na sua rede.

Na seção **criando um passo de ação**, você escolherá o Ultimate Multisite **Beta** e a opção **Criar Itens no Ultimate Multisite**.

![Criando uma ação com Criar Itens no Ultimate Multisite](/img/admin/webhooks-list.png)

Na próxima etapa, você criará sua autenticação, assim como fizemos em **Como começar**, ou selecionará uma autenticação já criada. Neste tutorial, vamos escolher a mesma autenticação previamente criada.

![Selecionando a autenticação para a ação do Zapier](/img/admin/webhooks-list.png)

### Configurando a Ação {#setting-up-the-action}

Este é o **passo principal da ação** e aqui as coisas são um pouco diferentes. A primeira informação que você escolherá é o **Item**. O Item é o **modelo de informação** da sua rede, como **Clientes, Pagamentos, Sites, E-mails** e outros.

![Escolhendo o tipo de item para a ação do Zapier](/img/admin/webhooks-list.png)

Ao selecionar um item, o formulário **reorganiza-se para trazer os campos obrigatórios e opcionais** para o item selecionado.

Por exemplo, ao selecionar o item **Cliente**, os campos do formulário trarão tudo o que é necessário para preencher e criar um novo Cliente na rede.

![Campos de item de Cliente na configuração da ação do Zapier](/img/admin/webhooks-list.png)

Após preencher todos os campos marcados como **obrigatórios** e clicar em continuar, uma última tela mostrará os campos preenchidos e os campos que ficaram sem preenchimento.

![Teste de ação do Zapier mostrando campos preenchidos e não preenchidos](/img/admin/webhooks-list.png)

Assim que o seu teste for concluído com sucesso, a sua ação estará configurada. Também é importante verificar na sua rede se o item foi criado com o teste da sua ação.
