---
title: Enviando e-mails e transmissões
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Enviando Emails e Broadcasts (v2) {#sending-emails-and-broadcasts-v2}

_**NOTA IMPORTANTE: Este artigo se refere ao Ultimate Multisite versão 2.x.**_

Ultimate Multisite vem com um recurso que permitirá que você se comunique com seus clientes enviando um email para um usuário específico ou um grupo de usuários, bem como enviando avisos no Dashboard administrativo deles para transmitir anúncios

## Adicione avisos administrativos ao Dashboard dos seus clientes com Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Usando o recurso de broadcast do Ultimate Multisite, você pode adicionar **avisos administrativos** ao Dashboard administrativo do subsite do seu usuário.

Isso é extremamente útil caso você precise fazer um anúncio, como manutenção do sistema ou oferta de novos produtos ou serviços aos seus usuários existentes. É assim que o aviso administrativo aparecerá no Dashboard do seu usuário.

<!-- Captura de tela indisponível: Broadcast de aviso administrativo exibido no Dashboard do subsite de um cliente -->

Para iniciar um aviso administrativo, vá até o Dashboard administrativo da sua rede e, no menu **Ultimate Multisite**, você encontrará a opção **Broadcasts**.

![Página de lista de Broadcasts no admin do Ultimate Multisite](/img/admin/broadcasts-list.png)

Você também pode editar broadcasts existentes:

![Interface de edição de broadcast](/img/admin/broadcast-edit.png)

Nesta página, clique no botão **Adicionar Broadcast** na parte superior.

Isso abrirá a janela modal Adicionar broadcast, onde você pode escolher que tipo de broadcast deseja enviar.

Selecione **Mensagem** e então clique no botão **Próxima etapa**.

![Modal de adicionar broadcast com a opção Mensagem selecionada](/img/admin/broadcast-add-message.png)

A próxima janela solicitará o **Cliente-alvo** ou **Produto-alvo**. Observe que você pode selecionar mais de um usuário ou mais de um produto.

Para pesquisar uma conta de usuário ou produto, você precisa começar a digitar a palavra-chave dentro do campo.

No campo **Tipo de mensagem**, você pode selecionar a cor do aviso. Isso enfatizará a urgência da sua mensagem.

Então você pode clicar em **Próxima etapa**.

![Campos de clientes-alvo, produto-alvo e tipo de mensagem para um broadcast de Mensagem](/img/admin/broadcast-message-targets.png)

A próxima janela é onde você pode começar a compor sua mensagem inserindo o assunto e o conteúdo/mensagem que deseja transmitir aos usuários.

![Assunto da mensagem de broadcast e editor de conteúdo na etapa de composição](/img/admin/broadcast-edit.png)

Depois de criar sua mensagem, você pode clicar no botão **Enviar**.

E é isso. O aviso administrativo deve aparecer imediatamente no Dashboard do seu usuário.

## Envie emails aos seus clientes {#send-emails-to-your-customers}

Usando o recurso de broadcast do Ultimate Multisite, você pode enviar um email aos seus usuários. Você tem a opção de enviar o email apenas para usuários específicos ou segmentar um grupo específico de usuários com base no produto ou plano ao qual eles estão inscritos.

Para iniciar um broadcast por email, vá até o Dashboard administrativo da sua rede e, no menu Ultimate Multisite, você encontrará a opção Broadcast.

![Página de lista de Broadcasts usada como ponto de partida para um broadcast por email](/img/admin/broadcasts-list.png)

Nesta página, clique no botão **Adicionar broadcast** na parte superior.

Isso abrirá a janela modal Adicionar broadcast, onde você pode escolher que tipo de broadcast deseja enviar. Selecione **Email** e então clique no botão **Próxima etapa**.

![Modal de adicionar broadcast com a opção Email selecionada](/img/admin/broadcast-add-email.png)

A próxima janela solicitará o **Cliente-alvo** ou **Produto-alvo**. Observe que você pode selecionar mais de um usuário ou mais de um produto.

Para pesquisar uma conta de usuário ou produto, você precisa começar a digitar a palavra-chave dentro do campo.

Depois que seu público-alvo for selecionado, você pode clicar em **Próxima etapa**.

![Seleção de clientes-alvo e produto-alvo para um broadcast por Email](/img/admin/broadcast-email-targets.png)

A próxima janela é onde você pode começar a compor seu email inserindo o assunto e o conteúdo/mensagem que deseja enviar aos usuários.

<!-- Captura de tela indisponível: Assunto do broadcast por email e editor de conteúdo na etapa de composição -->

Depois de criar sua mensagem, você pode clicar no botão **Enviar**.

E é assim que é fácil enviar um email aos seus usuários finais usando o recurso de broadcast.

## Emails do sistema {#system-emails}

Emails do sistema no Ultimate Multisite são aquelas **notificações automáticas** enviadas pelo sistema após determinadas ações, como registro, pagamento, mapeamento de domínio etc. Esses emails podem ser editados ou modificados nas configurações do Ultimate Multisite. Ele também vem com um recurso que permitirá redefinir e importar configurações existentes de outra instalação do Ultimate Multisite.

### Redefinição e importação {#resetting--importing}

Novas versões do Ultimate Multisite, bem como add-ons, podem e irão registrar novos emails de tempos em tempos.

Para evitar conflitos e outros problemas, **não adicionaremos os novos modelos de email como Emails do sistema na sua instalação automaticamente**, a menos que sejam cruciais para o funcionamento correto de um determinado recurso.

No entanto, super administradores e agentes podem importar esses emails recém-registrados por meio da ferramenta de importação. Esse processo criará um novo email do sistema com o conteúdo e a configuração do novo modelo de email, permitindo que o super administrador faça quaisquer modificações que desejar ou os mantenha como estão.

#### Como importar emails do sistema {#how-to-import-system-emails}

Vá para a página de Configurações do Ultimate Multisite e acesse a aba **Emails**.

![Aba Emails nas configurações do Ultimate Multisite mostrando a seção Emails do sistema](/img/config/settings-emails-tab.png)

Em seguida, na barra lateral, clique no botão **Personalizar Emails do sistema**.

<!-- Captura de tela indisponível: Botão Personalizar Emails do sistema no painel lateral de Emails do sistema -->

Na página Emails do sistema, você verá o botão de ação **Redefinir e importar** no topo. Clicar nesse botão deve abrir a janela modal de importação e redefinição.

![Botão de ação Redefinir ou Importar na página administrativa de Emails do sistema](/img/admin/system-emails-reset-import.png)

Então, você pode alternar as opções de Importar Emails para ver quais emails do sistema estão disponíveis para serem importados.

<!-- Captura de tela indisponível: modal Redefinir e Importar com as opções de Importar e-mails expandidas -->

#### Redefinindo e-mails do sistema {#reseting-system-emails}

Em outros momentos, você perceberá que as alterações feitas em um determinado modelo de e-mail não funcionam mais para você e desejará redefini-lo para seu **estado padrão**.

Nesses casos, você tem duas opções: pode simplesmente excluir o e-mail do sistema e importá-lo de volta (usando as instruções acima) — o que apagará métricas de envio e outras coisas, tornando esse método o menos recomendado.

Ou você pode usar a **ferramenta Redefinir e Importar** para redefinir esse modelo de e-mail.

Para redefinir um modelo de e-mail, você pode seguir as etapas acima até chegar à ferramenta Redefinir e Importar e, então, ativar a opção **Redefinir** e selecionar os e-mails que deseja redefinir para o conteúdo padrão deles.

<!-- Captura de tela indisponível: modal Redefinir e Importar com as opções de Redefinir e-mails expandidas -->
