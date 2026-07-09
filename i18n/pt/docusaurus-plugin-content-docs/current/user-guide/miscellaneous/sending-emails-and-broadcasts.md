---
title: Envio de e-mails e transmissões
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Enviar Emails e Broadcasts (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à versão 2.x do Ultimate Multisite.**_

Ultimate Multisite inclui uma funcionalidade que lhe permite comunicar com os seus clientes enviando um email para um utilizador específico ou para um grupo de utilizadores, bem como enviar avisos no respetivo Dashboard de administração para transmitir anúncios

## Adicionar avisos de administração ao Dashboard dos seus clientes com Broadcasts

Usando a funcionalidade de broadcast do Ultimate Multisite, pode adicionar **avisos de administração** ao Dashboard de administração do subsite do seu utilizador.

Isto é extremamente útil caso precise de fazer um anúncio, como manutenção do sistema ou a oferta de novos produtos ou serviços aos seus utilizadores existentes. É assim que o aviso de administração aparecerá no Dashboard do seu utilizador.

<!-- Captura de ecrã indisponível: aviso de broadcast de administração mostrado no Dashboard de subsite de um cliente -->

Para iniciar um aviso de administração, vá ao Dashboard de administração da sua rede e, no menu **Ultimate Multisite**, encontrará a opção **Broadcasts**.

![Página da lista de Broadcasts na administração do Ultimate Multisite](/img/admin/broadcasts-list.png)

Também pode editar broadcasts existentes:

![Interface de edição de broadcast](/img/admin/broadcast-edit.png)

A partir desta página, clique no botão **Add Broadcast** no topo.

Isto abrirá a janela modal Add broadcast, onde pode escolher que tipo de broadcast pretende enviar.

Selecione **Message** e depois clique no botão **Next Step**.

![Modal para adicionar broadcast com a opção Message selecionada](/img/admin/broadcast-add-message.png)

A janela seguinte pedirá o **Target customer** ou o **Target product**. Note que pode selecionar mais do que um utilizador ou mais do que um produto.

Para pesquisar uma conta de utilizador ou produto, precisa de começar a escrever a palavra-chave dentro do campo.

No campo **Message type**, pode selecionar a cor do aviso. Isto irá realçar a urgência da sua mensagem.

Depois pode clicar em **Next Step**.

![Campos Target customers, target product e message type para um broadcast de Message](/img/admin/broadcast-message-targets.png)

A janela seguinte é onde pode começar a compor a sua mensagem, introduzindo o assunto e o conteúdo/mensagem que pretende transmitir aos utilizadores.

![Assunto da mensagem de broadcast e editor de conteúdo no passo de composição](/img/admin/broadcast-edit.png)

Depois de criar a sua mensagem, pode então carregar no botão **Send**.

E é isso. O aviso de administração deverá aparecer imediatamente no Dashboard do seu utilizador.

## Enviar emails aos seus clientes

Usando a funcionalidade de broadcast do Ultimate Multisite, pode enviar um email aos seus utilizadores. Tem a opção de enviar o email apenas a utilizadores específicos ou de direcionar um grupo específico de utilizadores com base no produto ou plano ao qual estão subscritos.

Para iniciar um broadcast por email, vá ao Dashboard de administração da sua rede e, no menu Ultimate Multisite, encontrará a opção Broadcast.

![Página da lista de Broadcasts usada como ponto de partida para um broadcast por email](/img/admin/broadcasts-list.png)

A partir desta página, clique no botão **Add broadcast** no topo.

Isto abrirá a janela modal Add broadcast, onde pode escolher que tipo de broadcast pretende enviar. Selecione **Email** e depois clique no botão **Next Step**.

![Modal para adicionar broadcast com a opção Email selecionada](/img/admin/broadcast-add-email.png)

A janela seguinte pedirá o **Target customer** ou o **Target produc** t. Note que pode selecionar mais do que um utilizador ou mais do que um produto.

Para pesquisar uma conta de utilizador ou produto, precisa de começar a escrever a palavra-chave dentro do campo.

Quando o seu público-alvo estiver selecionado, pode clicar em **Next Step**.

![Seleção de clientes-alvo e produto-alvo para um broadcast por Email](/img/admin/broadcast-email-targets.png)

A janela seguinte é onde pode começar a compor o seu email, introduzindo o assunto e o conteúdo/mensagem que pretende enviar aos utilizadores.

<!-- Captura de ecrã indisponível: assunto do broadcast por email e editor de conteúdo no passo de composição -->

Depois de criar a sua mensagem, pode carregar no botão **Send**.

E é assim tão fácil enviar um email aos seus utilizadores finais usando a funcionalidade de broadcast.

## Emails do sistema

Os emails do sistema no Ultimate Multisite são aquelas **notificações automáticas** enviadas pelo sistema após determinadas ações, como registo, pagamento, mapeamento de domínio, etc. Estes emails podem ser editados ou modificados nas definições do Ultimate Multisite. Também inclui uma funcionalidade que lhe permite repor e importar definições existentes de outra instalação do Ultimate Multisite.

### Repor e importar

Novas versões do Ultimate Multisite, bem como add-ons, podem e irão registar novos emails de tempos a tempos.

Para evitar conflitos e outros problemas, **não adicionaremos automaticamente os novos modelos de email como emails do sistema na sua instalação**, a menos que sejam cruciais para o funcionamento correto de uma determinada funcionalidade.

No entanto, super administradores e agentes podem importar estes emails recém-registados através da ferramenta de importação. Esse processo criará um novo email do sistema com o conteúdo e a configuração do novo modelo de email, permitindo ao super administrador fazer quaisquer modificações que pretenda ou mantê-los como estão.

#### Como importar emails do sistema

Vá à página de Definições do Ultimate Multisite e aceda ao separador **Emails**.

![Separador Emails nas definições do Ultimate Multisite mostrando a secção Emails do sistema](/img/config/settings-emails-tab.png)

Depois, na barra lateral, clique no botão **Customize System Emails**.

<!-- Captura de ecrã indisponível: botão Customize System Emails no painel lateral de Emails do sistema -->

Na página Emails do sistema, verá o botão de ação **Reset & Import** no topo. Clicar nesse botão deverá abrir a janela modal de importação e reposição.

![Botão de ação Reset ou Import na página de administração de Emails do sistema](/img/admin/system-emails-reset-import.png)

Depois, pode alternar as opções Import Emails para ver quais emails do sistema estão disponíveis para serem importados.

<!-- Captura de ecrã indisponível: modal Repor e Importar com as opções Importar emails expandidas -->

#### Repor emails do sistema

Noutras ocasiões, irá perceber que as alterações que fez a um determinado modelo de email já não funcionam para si e que gostaria de o repor para o seu **estado predefinido**.

Nesses casos, tem duas opções: pode simplesmente eliminar o email do sistema e importá-lo novamente (usando as instruções acima) — o que irá apagar métricas de envio e outras coisas, tornando este método menos recomendado.

Ou pode usar a **ferramenta Repor e Importar** para repor esse modelo de email.

Para repor um modelo de email, pode seguir os passos acima até chegar à ferramenta Repor e Importar e, depois, ativar a opção **Repor** e selecionar os emails que pretende repor para o respetivo conteúdo predefinido.

<!-- Captura de ecrã indisponível: modal Repor e Importar com as opções Repor emails expandidas -->
