---
title: Personalizando seu formulário de cadastro
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personalizando seu formulário de cadastro {#customizing-your-registration-form}

Para fazer sua rede parecer única em comparação com todos os outros SaaS criados na plataforma WordPress, Ultimate Multisite permite que você personalize suas páginas de cadastro e login com nosso recurso **Checkout Forms**.

Embora sejam uma forma fácil e flexível de experimentar diferentes abordagens ao tentar converter novos clientes, eles são usados principalmente para criar formulários de cadastro personalizados. Este artigo tem como objetivo mostrar como você pode fazer isso.

## Páginas de login e cadastro: {#login-and-registration-pages}

Após a instalação do Ultimate Multisite, ele cria automaticamente páginas personalizadas de login e cadastro no seu site principal. Você pode alterar essas páginas padrão a qualquer momento acessando sua página **Ultimate Multisite > Settings > Login & Registration**.

![Página de configurações de Login e Cadastro](/img/config/settings-general.png)

Aqui está uma visão completa da página de configurações de login e cadastro:

![Página completa de configurações de Login e Cadastro](/img/config/settings-login-registration-full.png)

Vamos dar uma olhada em cada uma das opções que você pode personalizar na página **Login & Registration**:

  * **Enable registration:** Esta opção ativará ou desativará o cadastro na sua rede. Se ela estiver desativada, seus clientes não poderão se cadastrar nem assinar seus produtos.

  * **Enable email verification:** Se esta opção estiver ativada, clientes que assinarem um plano gratuito ou um plano pago com período de teste receberão um e-mail de verificação e precisarão clicar no link de verificação para que seus sites sejam criados.

  * **Default registration page:** Esta é a página padrão de cadastro. Esta página precisa estar publicada no seu site e ter um formulário de cadastro (também conhecido como checkout form) — onde seus clientes assinarão seus produtos. Você pode criar quantas páginas de cadastro e checkout forms quiser, apenas lembre-se de colocar o shortcode do checkout form na página de cadastro; caso contrário, ele não aparecerá.

  * **Use custom login page:** Esta opção permite que você use uma página de login personalizada, diferente da página padrão wp-login.php. Se esta opção estiver ativada, você poderá selecionar qual página será usada para login na opção **Default login page** (logo abaixo).

  * **Obfuscate the original login url (wp-login.php)** : Se você quiser ocultar a URL de login original, pode ativar esta opção. Isso é útil para prevenir ataques de força bruta. Se esta opção estiver ativada, Ultimate Multisite exibirá um erro 404 quando um usuário tentar acessar o link original wp-login.php

  * **Force synchronous site publication:** Depois que um cliente assina um produto em uma rede, o novo site pendente precisa ser convertido em um site real da rede. O processo de publicação acontece via Job Queue, de forma assíncrona. Ative esta opção para forçar a publicação a acontecer na mesma requisição do cadastro.

Agora, vamos ver outras opções que ainda são relevantes para o processo de login e cadastro. Elas ficam logo abaixo de **Other options** na mesma página de Login & registration:

  * **Default role:** Este é o papel que seus clientes terão no site deles após o processo de cadastro.

  * **Enable Jumper:** Ativa o atalho Jumper na área administrativa. Jumper permite que administradores acessem rapidamente telas do Ultimate Multisite, objetos da rede e outros destinos compatíveis sem navegar por todos os menus. Desative se preferir ocultar essa ferramenta de navegação rápida da interface administrativa.

  * **Add users to the main site as well:** Ativar esta opção também adicionará o usuário ao site principal da sua rede após o processo de cadastro. Se você ativar esta opção, uma opção para definir o **default role** desses usuários no seu site também aparecerá logo abaixo.

  * **Enable multiple accounts:** Permite que usuários tenham contas em diferentes sites da sua rede com o mesmo endereço de e-mail. Se esta opção estiver desativada, seus clientes não poderão criar uma conta em outros sites executados na sua rede com o mesmo endereço de e-mail.

E essas são todas as opções relacionadas a login e cadastro que você pode personalizar! Não se esqueça de salvar suas configurações depois de terminar de editá-las.

## Usando vários formulários de cadastro: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 oferece um editor de checkout form que permite criar quantos formulários você quiser, com diferentes campos, produtos em oferta etc.

Tanto as páginas de login quanto as de cadastro são incorporadas com shortcodes: **[wu_login_form]** na página de login e**[wu_checkout]** para a página de cadastro. Você pode personalizar ainda mais a página de cadastro construindo ou criando checkout forms.

Para acessar este recurso, vá ao menu **Checkout Forms**, na barra lateral esquerda.

![Menu Checkout Forms na barra lateral](/img/config/checkout-forms-list.png)

Nesta página, você pode ver todos os checkout forms que possui.

Se quiser criar um novo, basta clicar em **Add Checkout Form** no topo da página.

Você pode selecionar uma destas três opções como ponto de partida: etapa única, múltiplas etapas ou em branco. Em seguida, clique em **Go to the Editor**.

![Adicionar Checkout Form com opções de etapa única, múltiplas etapas ou em branco](/img/config/checkout-forms-list.png)

Como alternativa, você pode editar ou duplicar os formulários que já possui clicando nas opções abaixo do nome deles. Lá, você também encontrará as opções para copiar o shortcode do formulário ou excluir o formulário.

![Ações ao passar o mouse sobre o checkout form com editar, duplicar e excluir](/img/config/checkout-form-hover-actions.png)

Se você selecionar etapa única ou múltiplas etapas, o checkout form já será pré-preenchido com as etapas básicas para que ele funcione. Então, se quiser, você pode adicionar etapas extras a ele.

### Editando um Checkout Form: {#editing-a-checkout-form}

Como mencionamos antes, você pode criar checkout forms para diferentes finalidades. Neste exemplo, trabalharemos em um formulário de cadastro.

Depois de navegar até o editor de checkout form, dê um nome ao seu formulário (que será usado apenas para referência interna) e um slug (usado para criar shortcakes, por exemplo).

![Editor de formulário de checkout com campos de nome e slug](/img/config/checkout-form-name-slug.png)

Os formulários são feitos de etapas e campos. Você pode adicionar uma nova etapa clicando em **Add New Checkout Step**.

![Botão Add New Checkout Step](/img/config/checkout-form-add-step.png)

Na primeira aba da janela modal, preencha o conteúdo da etapa do seu formulário. Dê a ela um ID, um nome e uma descrição. Esses itens são usados principalmente internamente.

![Aba de conteúdo da etapa de checkout com ID, nome e descrição](/img/config/checkout-form-step-content.png)

Em seguida, defina a visibilidade da etapa. Você pode escolher entre **Always show**, **Only show for logged in users** ou **Only show for guests**.

![Opções de visibilidade da etapa de checkout](/img/config/checkout-form-step-visibility.png)

Por fim, configure o estilo da etapa. Estes são campos opcionais.

![Configuração de estilo da etapa de checkout](/img/config/checkout-form-step-style.png)

Agora, é hora de adicionar campos à nossa primeira etapa. Basta clicar em **Add New Field** e selecionar o tipo de seção que você deseja.

![Botão Add New Field](/img/config/checkout-form-add-field-button.png)![Menu suspenso de seleção de tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

Cada campo tem diferentes parâmetros a serem preenchidos. Para esta primeira entrada, vamos selecionar o campo **Username**.

![Configuração do campo Username](/img/config/checkout-form-username-content.png)![Parâmetros do campo Username](/img/config/checkout-form-username-visibility.png)![Configurações adicionais do campo Username](/img/config/checkout-form-username-style.png)

Você pode adicionar quantas etapas e campos precisar. Para exibir seus produtos para que seus clientes escolham um, use o campo Tabela de Preços. Se você quiser permitir que seus clientes escolham um modelo, adicione o campo Seleção de Modelo. E assim por diante.

![Editor de formulário de checkout com campo de seleção de modelo](/img/config/checkout-form-with-template-field.png)

_**Observação:** Se você criar um produto depois de criar seu formulário de checkout, precisará adicionar o produto na seção Tabela de Preços. Se você não adicioná-lo, o produto não aparecerá para seus clientes na página de registro._

_**Observação 2:** nome de usuário, e-mail, senha, título do site, URL do site, resumo do pedido, pagamento e botão de envio são campos obrigatórios para criar um formulário de checkout._

Enquanto estiver trabalhando no seu formulário de checkout, você sempre pode usar o botão Preview para ver como seus clientes verão o formulário. Você também pode alternar entre visualizar como um usuário existente ou um visitante.

![Botão Preview no editor do formulário de checkout](/img/config/checkout-form-preview-button.png)![Pré-visualização do formulário de checkout como visitante ou usuário existente](/img/config/checkout-form-preview-modal.png)

Por fim, em **Advanced Options**, você pode configurar a mensagem da página de **Thank You**, adicionar snippets para rastrear conversões, adicionar CSS personalizado ao seu formulário de checkout ou restringi-lo a determinados países.

![Advanced Options com página de Thank You, rastreamento de conversões e CSS personalizado](/img/config/checkout-form-advanced.png)

Você também pode ativar ou desativar manualmente seu formulário de checkout alternando esta opção na coluna da direita, ou excluir permanentemente o formulário.

![Alternância de ativo e opção de exclusão para formulário de checkout](/img/config/checkout-form-active.png)

Não se esqueça de salvar seu formulário de checkout!

![Botão Save Checkout Form](/img/config/checkout-form-save.png)

Para obter o shortcode do seu formulário, clique em **Generate Shortcode** e copie o resultado mostrado na janela modal.

![Modal Generate Shortcode com shortcode para copiar](/img/config/checkout-form-editor.png)

_**Observação:** Você precisará adicionar este shortcode à sua página de registro para que este formulário de checkout seja adicionado a ela._

## Pré-selecionando produtos e modelos via parâmetros de URL: {#pre-selecting-products-and-templates-via-url-parameters}

Se você quiser criar tabelas de preços personalizadas para seus produtos e pré-selecionar no formulário de checkout o produto ou modelo que seu cliente escolhe na sua tabela de preços ou página de modelos, você pode usar parâmetros de URL para isso.

### **Para planos:** {#for-plans}

Vá para **Ultimate Multisite > Products > Select a plan**. Você deve ver o botão **Click to copy Shareable Link** no topo da página. Este é o link que você pode usar para pré-selecionar este plano específico no seu formulário de checkout.

![Página de produto com botão de link compartilhável](/img/config/products-list.png)

Observe que este link compartilhável é válido apenas para **Planos**. Você não pode usar links compartilháveis para pacotes ou serviços.

### Para modelos: {#for-templates}

Se você quiser pré-selecionar modelos de site no seu formulário de checkout, você pode usar o parâmetro: **?template_id=X** na URL da sua página de registro. O "X" precisa ser substituído pelo **número de ID do modelo de site**. Para obter esse número, vá para **Ultimate Multisite > Sites**.

Clique em **Manage** logo abaixo do modelo de site que você deseja usar. Você verá o número SITE ID. Basta usar esse número para que esse modelo de site específico seja pré-selecionado no seu formulário de checkout. No nosso caso aqui, o parâmetro de URL seria **?template_id=2**.

![Lista de sites mostrando o ID do modelo de site](/img/config/site-templates-list.png)

Digamos que o site da nossa rede seja [**www.mynetwork.com**](http://www.mynetwork.com) e nossa página de registro com nosso formulário de checkout esteja localizada na página **/register**. A URL completa com este modelo de site pré-selecionado será parecida com [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E se quiser, você pode pré-selecionar tanto produtos quanto modelos no seu formulário de checkout. Tudo o que você precisa fazer é copiar o link compartilhável do plano e colar o parâmetro do modelo no final. Ficará parecido com [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
