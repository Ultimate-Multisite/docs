---
title: Personalizando Seu Formulário de Registro
sidebar_position: 17
_i18n_hash: f060f881656e229e05b8d6f83a85bd84
---
# Personalizando seu Formulário de Registro

Para fazer sua rede parecer única em relação a todos os outros SaaS construídos na plataforma WordPress, o Ultimate Multisite permite que você personalize suas páginas de registro e login com nosso recurso **Formulários de Checkout**.

Embora sejam uma maneira fácil e flexível de experimentar diferentes abordagens ao tentar converter novos clientes, eles são usados principalmente para criar formulários de registro personalizados. Este artigo tem como objetivo mostrar como você pode fazer isso.

## Páginas de login e registro:

Ao instalar o Ultimate Multisite, ele cria automaticamente páginas de login e registro personalizadas em seu site principal. Você pode alterar essas páginas padrão a qualquer momento acessando a página **Ultimate Multisite > Settings > Login & Registro**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-K3a5Ol4prD.png)

Vamos dar uma olhada em cada uma das opções que você pode personalizar na página **Login & Registro**:

  * **Habilitar registro:** Esta opção habilita ou desabilita o registro em sua rede. Se estiver desativada, seus clientes não poderão se registrar e assinar seus produtos.

  * **Habilitar verificação de e‑mail:** Se esta opção estiver ativada, os clientes que se inscreverem em um plano gratuito ou em um plano pago com período de teste receberão um e‑mail de verificação e precisarão clicar no link de verificação para que seus sites sejam criados.

  * **Página padrão de registro:** Esta é a página padrão para registro. Essa página precisa ser publicada em seu site e conter um formulário de registro (também conhecido como formulário de checkout) – onde seus clientes se inscreverão em seus produtos. Você pode criar quantas páginas de registro e formulários de checkout quiser, apenas lembre-se de colocar o shortcode do formulário de checkout na página de registro, caso contrário ele não aparecerá.

  * **Usar página de login personalizada:** Esta opção permite que você use uma página de login personalizada, diferente da página padrão wp-login.php. Se esta opção estiver ativada, você pode selecionar qual página será usada para login na opção **Página padrão de login** (abaixo).

  * **Obfuscar a URL original de login (wp-login.php)** : Se você deseja ocultar a URL original de login, pode ativar esta opção. Isso é útil para prevenir ataques de força bruta. Se esta opção estiver habilitada, o Ultimate Multisite exibirá um erro 404 quando um usuário tentar acessar o link original wp-login.php.

  * **Forçar publicação síncrona do site:** Após um cliente se inscrever em um produto em uma rede, o novo site pendente precisa ser convertido em um site real da rede. O processo de publicação ocorre via Job Queue, de forma assíncrona. Habilite esta opção para forçar a publicação a ocorrer na mesma requisição do cadastro.

Agora, vamos ver outras opções que ainda são relevantes para o processo de login e registro. Elas ficam logo abaixo de **Outras opções** na mesma página Login & Registro:

  * **Função padrão:** Este é o papel que seus clientes terão em seu site após o processo de cadastro.

  * **Adicionar usuários ao site principal também:** Habilitar esta opção também adicionará o usuário ao site principal da sua rede após o processo de cadastro. Se você habilitar esta opção, uma opção para definir a **Função padrão** desses usuários em seu site também aparecerá logo abaixo.

  * **Habilitar múltiplas contas:** Permite que os usuários tenham contas em diferentes sites da sua rede com o mesmo endereço de e‑mail. Se esta opção estiver desativada, seus clientes não poderão criar uma conta em outros sites que executam na sua rede com o mesmo endereço de e‑mail.

E essas são todas as opções relacionadas ao login e registro que você pode personalizar! Não se esqueça de salvar suas configurações após terminar de editá-las.

## Usando vários formulários de registro:

O Ultimate Multisite 2.0 oferece um editor de formulários de checkout que permite criar quantos formulários quiser, com diferentes campos, produtos em oferta, etc.

Tanto as páginas de login quanto de registro são incorporadas com shortcodes: **[wu_login_form]** na página de login e **[wu_checkout]** para a página de registro. Você pode personalizar ainda mais a página de registro construindo ou criando formulários de checkout.

Para acessar este recurso, vá ao menu **Formulários de Checkout**, na barra lateral esquerda.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vvxvSRGAfu.png)

Nesta página, você pode ver todos os formulários de checkout que possui.

Se quiser criar um novo, basta clicar em **Adicionar Formulário de Checkout** no topo da página.

Você pode selecionar uma dessas três opções como ponto de partida: single step, multi-step ou blank. Em seguida, clique em **Ir para o Editor**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OVx7AlxoX5.png)

Alternativamente, você pode editar ou duplicar os formulários que já possui clicando nas opções abaixo do nome. Lá, você também encontrará as opções para copiar o shortcode do formulário ou excluir o formulário.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LdsdAu67WF.png)

Se você selecionar single step ou multi-step, o formulário de checkout já será pré‑preenchido com os passos básicos para funcionar. Em seguida, se desejar, pode adicionar passos extras.

### Editando um Formulário de Checkout:

Como mencionamos antes, você pode criar formulários de checkout para diferentes propósitos. Neste exemplo, trabalharemos em um formulário de registro.

Após navegar até o editor de formulários de checkout, dê um nome ao seu formulário (que será usado apenas para referência interna) e um slug (usado para criar shortcodes, por exemplo).

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RvbtUn4r3w.png)

Os formulários são compostos por etapas e campos. Você pode adicionar uma nova etapa clicando em **Adicionar Nova Etapa de Checkout**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9Wgpw8DTj9.png)

Na primeira aba da janela modal, preencha o conteúdo da etapa do seu formulário. Dê a ela um ID, um nome e uma descrição. Esses itens são usados principalmente internamente.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-lr6RKlgll1.png)

Em seguida, defina a visibilidade da etapa. Você pode escolher entre **Sempre exibir**, **Exibir apenas para usuários logados** ou **Exibir apenas para convidados**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-0Q6LxP9E90.png)

Por fim, configure o estilo da etapa. Esses são campos opcionais.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WmBuHXYH7N.png)

Agora, é hora de adicionar campos à nossa primeira etapa. Basta clicar em **Adicionar Novo Campo** e selecionar o tipo de seção que deseja.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-vM8n8QuTzk.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HkNUp6cWRG.png)

Cada campo tem diferentes parâmetros a serem preenchidos. Para esta primeira entrada, selecionaremos o campo **Nome de usuário**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PFaP6RufZU.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-U6Mm10qIeF.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Lr1mEi1DlH.png)

Você pode adicionar quantas etapas e campos precisar. Para exibir seus produtos para que seus clientes escolham um, use o campo **Tabela de Preços**. Se quiser permitir que seus clientes escolham um modelo, adicione o campo **Seleção de Modelo**. E assim por diante.

_**Nota:** Se você criar um produto depois de criar seu formulário de checkout, precisará adicionar o produto na seção Tabela de Preços. Se não adicioná-lo, o produto não aparecerá para seus clientes na página de registro._

_**Nota 2:** Nome de usuário, e‑mail, senha, título do site, URL do site, resumo do pedido, pagamento e botão de enviar são campos obrigatórios para criar um formulário de checkout._

Enquanto trabalha em seu formulário de checkout, você pode sempre usar o botão Preview para ver como seus clientes verão o formulário. Você também pode alternar entre a visualização como usuário existente ou visitante.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3zPxZNqzkG.png)![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YXZp7n5Nuw.png)

Por fim, em **Opções Avançadas** você pode configurar a mensagem para a página **Obrigado**, adicionar snippets para rastrear conversões, adicionar CSS personalizado ao seu formulário de checkout ou restringi‑lo a determinados países.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TVQ9EUbGJ6.png)

Você também pode habilitar ou desabilitar manualmente seu formulário de checkout alternando esta opção na coluna da direita, ou excluir permanentemente o formulário.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-N5wdel1IIp.png)

Não se esqueça de salvar seu formulário de checkout!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rJPV89yQZt.png)

Para obter o shortcode do seu formulário, clique em **Gerar Shortcode** e copie o resultado exibido na janela modal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RTJclNTnJZ.png)

_**Nota:** Você precisará adicionar este shortcode à sua página de registro para que o formulário de checkout seja adicionado a ela._

## Pré-selecionando produtos e modelos via parâmetros de URL:

Se você deseja criar tabelas de preços personalizadas para seus produtos e pré‑selecionar no formulário de checkout o produto ou modelo que seu cliente escolhe em sua tabela de preços ou página de modelos, pode usar parâmetros de URL para isso.

### **Para planos:**

Vá para **Ultimate Multisite > Products > Select a plan**. Você deve ver o botão **Click to copy Shareable Link** na parte superior da página. Este é o link que você pode usar para pré‑selecionar este plano específico em seu formulário de checkout.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-bUyOlBEfNj.png)

Observe que este link compartilhável é válido apenas para **Plans**. Você não pode usar links compartilháveis para pacotes ou serviços.

### Para modelos:

Se você deseja pré‑selecionar modelos de site em seu formulário de checkout, pode usar o parâmetro: **?template_id=X** na URL da sua página de registro. O “X” deve ser substituído pelo **site template ID number**. Para obter esse número, vá para **Ultimate Multisite > Sites**.

Clique em **Manage** logo abaixo do modelo de site que deseja usar. Você verá o número SITE ID. Basta usar esse número para que este modelo de site específico seja pré‑selecionado em seu formulário de checkout. No nosso caso, o parâmetro de URL seria **?template_id=2**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JEgVAVNYMu.png)

Suponha que nosso site de rede seja [**www.mynetwork.com**](http://www.mynetwork.com) e nossa página de registro com o formulário de checkout esteja localizada na página **/register**. A URL inteira com este modelo de site pré‑selecionado ficará assim: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E se quiser, pode pré‑selecionar tanto produtos quanto modelos em seu formulário de checkout. Tudo que você precisa fazer é copiar o link compartilhável do plano e colar o parâmetro de modelo no final. Ficará assim: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
