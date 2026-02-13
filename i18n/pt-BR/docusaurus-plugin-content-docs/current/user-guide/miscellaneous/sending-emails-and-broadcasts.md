---
title: Enviando Emails e Transmissões
sidebar_position: 11
_i18n_hash: 2c58b558fa68e4dd6e81bec971d52536
---
# Enviando Emails e Transmissões (v2)

_**NOTA IMPORTANTE: Este artigo refere-se à Ultimate Multisite versão 2.x.**_

Ultimate Multisite vem com um recurso que permite que você se comunique com seus clientes enviando um e‑mail para um usuário ou grupo de usuários específicos, bem como enviando avisos em seu painel de administração para transmitir anúncios

## Adicionar avisos de administração ao painel de seus clientes com Transmissões

Usando o recurso de transmissão da Ultimate Multisite, você pode adicionar **avisos de administração** ao painel de administração do subsítio do seu usuário.

Isso é extremamente útil caso você precise fazer um anúncio, como manutenção do sistema ou oferecer novos produtos ou serviços aos seus usuários existentes. Veja como o aviso de administração ficará no painel do seu usuário.

![Admin notice broadcast shown on customer dashboard](/img/admin/broadcasts-list.png)

Para iniciar um aviso de administração, acesse o painel de administração da rede e, no menu **Ultimate Multisite**, você encontrará a opção **Broadcasts**.

![Broadcasts menu in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Nesta página, clique no botão **Add Broadcast** no topo.

Isso abrirá a janela modal de Adicionar Transmissão, onde você pode escolher que tipo de transmissão deseja enviar. Selecione **Message** e clique no botão **Next Step**.

![Add broadcast modal with Message type selected](/img/admin/broadcasts-list.png)

A próxima janela solicitará o **Target customer** ou o **Target product**. Observe que você pode selecionar mais de um usuário ou mais de um produto.

Para pesquisar um usuário ou produto, basta começar a digitar a palavra‑chave no campo.

No campo **Message type**, você pode escolher a cor do aviso. Isso enfatizará a urgência da sua mensagem.

Em seguida, clique em **Next Step**.

![Target customer and product selection for broadcast](/img/admin/broadcasts-list.png)

A próxima janela é onde você pode começar a compor sua mensagem, inserindo o assunto e o conteúdo/mensagem que deseja transmitir aos usuários.

![Broadcast message subject and content editor](/img/admin/broadcasts-list.png)

Depois de criar sua mensagem, clique no botão **Send**.

E pronto. O aviso de administração deve aparecer imediatamente no painel do seu usuário.

## Enviar e‑mails aos seus clientes

Usando o recurso de transmissão da Ultimate Multisite, você pode enviar um e‑mail aos seus usuários. Você tem a opção de enviar o e‑mail apenas para usuários específicos ou direcionar um grupo de usuários com base no produto ou plano ao qual estão assinados.

Para iniciar uma transmissão de e‑mail, acesse o painel de administração da rede e, no menu Ultimate Multisite, você encontrará a opção Broadcast.

![Broadcasts page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Nesta página, clique no botão **Add broadcast** no topo.

Isso abrirá a janela modal de Adicionar Transmissão, onde você pode escolher que tipo de transmissão deseja enviar. Selecione **Email** e clique no botão **Next Step**.

![Add broadcast modal with Email type selected](/img/admin/broadcasts-list.png)

A próxima janela solicitará o **Target customer** ou o **Target produc** t. Observe que você pode selecionar mais de um usuário ou mais de um produto.

Para pesquisar um usuário ou produto, basta começar a digitar a palavra‑chave no campo.

Depois que seu público-alvo for selecionado, clique em **Next Step**.

![Target customer and product selection for email broadcast](/img/admin/broadcasts-list.png)

A próxima janela é onde você pode começar a compor seu e‑mail, inserindo o assunto e o conteúdo/mensagem que deseja enviar aos usuários.

![Email broadcast subject and content editor](/img/admin/broadcasts-list.png)

Depois de criar sua mensagem, clique no botão **Send**.

E é assim que é fácil enviar um e‑mail aos seus usuários finais usando o recurso de transmissão.

## E‑mails do sistema

E‑mails do sistema na Ultimate Multisite são aquelas **notificações automáticas** enviadas pelo sistema após certas ações, como registro, pagamento, mapeamento de domínio, etc. Esses e‑mails podem ser editados ou modificados nas configurações da Ultimate Multisite. Ele também vem com um recurso que permite redefinir e importar configurações existentes de outra instalação da Ultimate Multisite.

### Redefinindo & Importando

Novas versões da Ultimate Multisite, bem como complementos, podem e registrarão novos e‑mails de tempos em tempos.

Para evitar conflitos e outros problemas, **não adicionaremos os novos modelos de e‑mail como E‑mails do Sistema em sua instalação automaticamente**, a menos que sejam cruciais para o funcionamento correto de um determinado recurso.

No entanto, super‑administradores e agentes podem importar esses e‑mails recém‑registrados por meio da ferramenta de importação. Esse processo criará um novo e‑mail do sistema com o conteúdo e a configuração do novo modelo de e‑mail, permitindo que o super‑administrador faça quaisquer modificações desejadas ou os mantenha como estão.

#### Como importar e‑mails do sistema

Acesse a página de Configurações da Ultimate Multisite e vá para a aba **Emails**.

![Emails tab in Ultimate Multisite settings](/img/config/settings-emails.png)

Em seguida, na barra lateral, clique no botão **Customize System Emails**.

![Customize System Emails button on sidebar](/img/config/settings-emails.png)

Na página de E‑mails do Sistema, você verá o botão de ação **Reset & Import** no topo. Clicar nesse botão deve abrir a janela modal de importação e redefinição.

![Reset and Import action button on System Emails page](/img/config/settings-emails.png)

Em seguida, você pode alternar as opções Import Emails para ver quais e‑mails do sistema estão disponíveis para importação.

![Import Emails options showing available system emails](/img/config/settings-emails.png)

#### Redefinindo E‑mails do Sistema

Outras vezes, você perceberá que as alterações feitas em um determinado modelo de e‑mail não estão funcionando mais e desejará redefini-lo para o seu **estado padrão**.

Nesses casos, você tem duas opções: pode simplesmente excluir o e‑mail do sistema e importá‑lo novamente (usando as instruções acima) — o que apagará métricas de envio e outras informações, tornando este método menos preferido.

Ou você pode usar a ferramenta **Reset & Import** para redefinir esse modelo de e‑mail.

Para redefinir um modelo de e‑mail, siga os passos acima até chegar à ferramenta Reset & Import, e então, alterne a opção **Reset** e selecione os e‑mails que deseja redefinir para o conteúdo padrão.

![Reset option to restore email templates to defaults](/img/config/settings-emails.png)
