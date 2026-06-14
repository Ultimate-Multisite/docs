---
title: Enviar E-mails e Transmissões em Massa
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Envio de E-mails e Transmissões (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

O Ultimate Multisite vem com um recurso que permite comunicar-se com seus clientes enviando um e-mail para um usuário específico ou para um grupo de usuários, além de enviar avisos no painel administrativo deles para fazer anúncios em massa (broadcasts).

## Adicione avisos administrativos ao dashboard dos seus clientes com Broadcasts

Usando o recurso de broadcast do Ultimate Multisite, você pode adicionar **avisos administrativos** ao painel administrativo do subsite do seu usuário.

Isso é extremamente útil se você precisar fazer um anúncio, como manutenção do sistema ou oferecer novos produtos ou serviços aos seus usuários existentes. É assim que o aviso administrativo aparecer no dashboard do seu usuário.

<!-- Screenshot unavailable: Broadcast de aviso administrativo mostrado no dashboard de um subsite do cliente -->

Para iniciar um aviso administrativo, vá para o painel administrativo da sua rede e, no menu **Ultimate Multisite**, você encontrará a opção **Broadcasts**.

![Página de lista de Broadcasts no admin do Ultimate Multisite](/img/admin/broadcasts-list.png)

Você também pode editar broadcasts existentes:

![Interface de edição de broadcast](/img/admin/broadcast-edit.png)

A partir desta página, clique no botão **Adicionar Broadcast** no topo.

Isso abrirá a janela modal Adicionar broadcast, onde você poderá escolher o tipo de broadcast que deseja enviar.

Prossiga e selecione **Mensagem**, depois clique no botão **Próximo Passo**.

![Modal Adicionar broadcast com a opção Mensagem selecionada](/img/admin/broadcast-add-message.png)

A próxima janela pedirá que você escolha o **Cliente Alvo** ou o **Produto Alvo**. Observe que você pode selecionar mais de um usuário ou mais de um produto.

Para pesquisar um usuário ou produto, você precisa começar a digitar a palavra-chave no campo.

No campo **Tipo de mensagem**, você pode selecionar a cor do aviso. Isso enfatizará a urgência da sua mensagem.

Em seguida, clique em **Próximo Passo**.

![Campos de clientes-alvo, produto-alvo e tipo de mensagem para um broadcast de mensagem](/img/admin/broadcast-message-targets.png)

A próxima janela é onde você pode começar a compor sua mensagem inserindo o assunto e o conteúdo/mensagem que deseja enviar aos usuários.

![Editor de assunto e conteúdo da mensagem de broadcast na etapa de composição](/img/admin/broadcast-edit.png)

Depois de criar sua mensagem, você pode clicar no botão **Enviar**.

E é isso. O aviso do administrador deve aparecer imediatamente no painel do usuário.

## Enviar e-mails para seus clientes

Usando o recurso de broadcast do Ultimate Multisite, você pode enviar um e-mail aos seus usuários. Você tem a opção de enviar o e-mail apenas para usuários específicos ou direcionar um grupo específico de usuários com base no produto ou plano ao qual eles estão inscritos.

Para começar um broadcast de e-mail, vá para o painel do administrador da sua rede e, no menu Ultimate Multisite, você encontrará a opção Broadcast.

![Página de lista de broadcasts usada como ponto de partida para um broadcast de e-mail](/img/admin/broadcasts-list.png)

A partir desta página, clique no botão **Adicionar broadcast** no topo.

Isso abrirá a janela modal Adicionar broadcast, onde você pode escolher o tipo de broadcast que deseja enviar. Prossiga selecionando **E-mail** e clique no botão **Próximo Passo**.

![Modal Adicionar broadcast com a opção E-mail selecionada](/img/admin/broadcast-add-email.png)

A próxima janela pedirá o **Cliente-alvo** ou o **Produto-alvo**. Observe que você pode selecionar mais de um usuário ou mais de um produto.

Para pesquisar um usuário ou produto, você precisa começar a digitar a palavra-chave no campo.

Depois de selecionar seu público-alvo, você pode clicar em **Próximo Passo**.

![Seleção de clientes e produtos-alvo para um broadcast de e-mail](/img/admin/broadcast-email-targets.png)

A próxima janela é onde você pode começar a montar seu e-mail inserindo o assunto e o conteúdo/mensagem que deseja enviar aos usuários.

<!-- Screenshot unavailable: Editor de assunto e conteúdo do broadcast de e-mail na etapa de composição -->

Após criar sua mensagem, você pode clicar no botão **Enviar**.

E é assim fácil enviar um e-mail aos seus usuários finais usando o recurso de broadcast.

## E-mails do sistema

Os e-mails do sistema no Ultimate Multisite são aquelas **notificações automáticas** enviadas pelo sistema após certas ações, como registro, pagamento, mapeamento de domínio, etc. Esses e-mails podem ser editados ou modificados nas configurações do Ultimate Multisite. Ele também vem com um recurso que permitirá redefinir e importar configurações existentes de outra instalação do Ultimate Multisite.

### Redefinindo e Importando

Novas versões do Ultimate Multisite, bem como add-ons, podem e registrar novos e-mails ocasionalmente.

Para evitar conflitos e outros problemas, **nós não adicionaremos os novos modelos de e-mail como E-mails do Sistema na sua instalação automaticamente**, a menos que sejam cruciais para o funcionamento correto de um determinado recurso.

No entanto, super administradores e agentes podem importar esses e-mails recém-registrados através da ferramenta de importação. Esse processo criará um novo e-mail do sistema com o conteúdo e a configuração do novo modelo de e-mail, permitindo que o super administrador faça quaisquer modificações que desejar ou os mantenha como estão.

#### Como importar e-mails do sistema

Vá para a página de Configurações do Ultimate Multisite e acesse a aba **Emails**.

![Aba Emails nas configurações do Ultimate Multisite mostrando a seção System Emails](/img/config/settings-emails-tab.png)

Em seguida, na barra lateral, clique no botão **Customize System Emails** (Personalizar Emails do Sistema).

<!-- Screenshot unavailable: Botão Customize System Emails no painel da barra lateral de System Emails -->

Na página System Emails, você verá o botão de ação **Reset & Import** (Redefinir e Importar) no topo. Clicar nele deve abrir a janela modal de importação e redefinição.

![Botão Reset ou Import na página admin System Emails](/img/admin/system-emails-reset-import.png)

Depois, você pode ativar as opções **Import Emails** (Importar E-mails) para ver quais e-mails do sistema estão disponíveis para serem importados.

<!-- Screenshot unavailable: Modal de Reset e Import com as opções Import Emails expandidas -->

#### Redefinindo E-mails do Sistema

Outras vezes, você perceberá que as alterações que fez em um determinado modelo de e-mail não estão funcionando mais para você e gostaria de redefini-lo para o seu **estado padrão**.

Nesses casos, você tem duas opções: pode simplesmente excluir o e-mail do sistema e importá-lo novamente (usando as instruções acima) — o que apagará métricas de envio e outras coisas, o que torna este método o menos preferido.

Ou você pode usar a **Reset & Import tool** (Ferramenta Redefinir e Importar) para redefinir aquele modelo de e-mail.

Para redefinir um modelo de e-mail, siga os passos acima até chegar na ferramenta Reset & Import, e então, ative a opção **Reset** (Redefinir) e selecione os e-mails que deseja redefinir para o conteúdo padrão deles.

<!-- Screenshot unavailable: Modal de Reset e Import com as opções Reset Emails expandidas -->
