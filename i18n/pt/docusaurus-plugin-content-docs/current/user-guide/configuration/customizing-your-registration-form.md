---
title: Personalizando o seu formulário de registo
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personalizar o seu Formulário de Registo

Para fazer com que a sua rede pareça única em relação a todos os outros SaaS criados na plataforma WordPress, o Ultimate Multisite permite-lhe personalizar as suas páginas de registo e login com a nossa funcionalidade **Checkout Forms**.

Embora sejam uma forma fácil e flexível de experimentar diferentes abordagens ao tentar converter novos clientes, são sobretudo usados para criar formulários de registo personalizados. Este artigo tem como objetivo mostrar-lhe como o pode fazer.

## Páginas de login e registo:

Após a instalação do Ultimate Multisite, são criadas automaticamente páginas personalizadas de login e registo no seu site principal. Pode alterar estas páginas predefinidas a qualquer momento acedendo à sua página **Ultimate Multisite > Settings > Login & Registration**.

![Página de definições de Login e Registo](/img/config/settings-general.png)

Aqui está uma vista completa da página de definições de login e registo:

![Página completa de definições de Login e Registo](/img/config/settings-login-registration-full.png)

Vamos analisar cada uma das opções que pode personalizar na página **Login & Registration**:

  * **Ativar registo:** Esta opção irá ativar ou desativar o registo na sua rede. Se estiver desativada, os seus clientes não poderão registar-se nem subscrever os seus produtos.

  * **Ativar verificação de email:** Se esta opção estiver ativada, os clientes que subscrevam um plano gratuito ou um plano pago com um período experimental receberão um email de verificação e terão de clicar no link de verificação para que os seus sites sejam criados.

  * **Página de registo predefinida:** Esta é a página predefinida para registo. Esta página tem de estar publicada no seu website e ter um formulário de registo (também conhecido como checkout form) — onde os seus clientes irão subscrever os seus produtos. Pode criar quantas páginas de registo e checkout forms quiser; lembre-se apenas de colocar o shortcode do checkout form na página de registo, caso contrário ele não aparecerá.

  * **Usar página de login personalizada:** Esta opção permite-lhe usar uma página de login personalizada, em vez da página wp-login.php predefinida. Se esta opção estiver ativada, pode selecionar que página será usada para login na opção **Página de login predefinida** (logo abaixo).

  * **Ofuscar o URL de login original (wp-login.php)** : Se quiser ocultar o URL de login original, pode ativar esta opção. Isto é útil para prevenir ataques de força bruta. Se esta opção estiver ativada, o Ultimate Multisite irá apresentar um erro 404 quando um utilizador tentar aceder ao link original wp-login.php

  * **Forçar publicação síncrona do site:** Depois de um cliente subscrever um produto numa rede, o novo site pendente precisa de ser convertido num site real da rede. O processo de publicação acontece através de Job Queue, de forma assíncrona. Ative esta opção para forçar a publicação a acontecer no mesmo pedido que a inscrição.

Agora, vamos ver outras opções que ainda são relevantes para o processo de login e registo. Estão logo abaixo de **Outras opções** na mesma página Login & registration:

  * **Função predefinida:** Esta é a função que os seus clientes terão no respetivo website após o processo de inscrição.

  * **Ativar Jumper:** Ativa o atalho Jumper na área de administração. O Jumper permite que os administradores saltem rapidamente para ecrãs do Ultimate Multisite, objetos da rede e outros destinos suportados sem navegar por todos os menus. Desative-o se preferir ocultar essa ferramenta de navegação rápida da interface de administração.

  * **Adicionar utilizadores também ao site principal:** Ativar esta opção também adicionará o utilizador ao site principal da sua rede após o processo de inscrição. Se ativar esta opção, uma opção para definir a **função predefinida** destes utilizadores no seu website também aparecerá logo abaixo.

  * **Ativar múltiplas contas:** Permite que os utilizadores tenham contas em diferentes sites da sua rede com o mesmo endereço de email. Se esta opção estiver desativada, os seus clientes não poderão criar uma conta noutros websites em execução na sua rede com o mesmo endereço de email.

E estas são todas as opções relacionadas com login e registo que pode personalizar! Não se esqueça de guardar as suas definições depois de terminar de as editar.

## Usar múltiplos formulários de registo:

O Ultimate Multisite 2.0 oferece um editor de checkout form que permite criar quantos formulários quiser, com diferentes campos, produtos em oferta, etc.

Tanto as páginas de login como as de registo são incorporadas com shortcodes: **[wu_login_form]** na página de login e**[wu_checkout]** para a página de registo. Pode personalizar ainda mais a página de registo ao construir ou criar checkout forms.

Para aceder a esta funcionalidade, vá ao menu **Checkout Forms**, na barra lateral esquerda.

![Menu Checkout Forms na barra lateral](/img/config/checkout-forms-list.png)

Nesta página, pode ver todos os checkout forms que tem.

Se quiser criar um novo, basta clicar em **Adicionar Checkout Form** no topo da página.

Pode selecionar uma destas três opções como ponto de partida: passo único, múltiplos passos ou em branco. Depois, clique em **Ir para o Editor**.

![Adicionar Checkout Form com opções de passo único, múltiplos passos ou em branco](/img/config/checkout-forms-list.png)

Em alternativa, pode editar ou duplicar os formulários que já tem clicando nas opções abaixo do respetivo nome. Aí, também encontrará as opções para copiar o shortcode do formulário ou para eliminar o formulário.

![Ações ao passar o cursor sobre o checkout form com editar, duplicar e eliminar](/img/config/checkout-form-hover-actions.png)

Se selecionar passo único ou múltiplos passos, o checkout form já estará pré-preenchido com os passos básicos necessários para funcionar. Depois, se quiser, pode adicionar-lhe passos extra.

### Editar um Checkout Form:

Como mencionámos antes, pode criar checkout forms para diferentes finalidades. Neste exemplo, vamos trabalhar num formulário de registo.

Depois de navegar para o editor de checkout form, dê um nome ao seu formulário (que será usado apenas para referência interna) e um slug (usado para criar shortcakes, por exemplo).

![Editor de formulário de finalização de compra com campos de nome e slug](/img/config/checkout-form-name-slug.png)

Os formulários são feitos de etapas e campos. Pode adicionar uma nova etapa clicando em **Adicionar nova etapa de finalização de compra**.

![Botão Adicionar nova etapa de finalização de compra](/img/config/checkout-form-add-step.png)

No primeiro separador da janela modal, preencha o conteúdo da etapa do seu formulário. Atribua-lhe um ID, um nome e uma descrição. Estes itens são usados sobretudo internamente.

![Separador de conteúdo da etapa de finalização de compra com ID, nome e descrição](/img/config/checkout-form-step-content.png)

Em seguida, defina a visibilidade da etapa. Pode escolher entre **Mostrar sempre** , **Mostrar apenas para utilizadores com sessão iniciada** ou **Mostrar apenas para visitantes**.

![Opções de visibilidade da etapa de finalização de compra](/img/config/checkout-form-step-visibility.png)

Por fim, configure o estilo da etapa. Estes campos são opcionais.

![Configuração de estilo da etapa de finalização de compra](/img/config/checkout-form-step-style.png)

Agora, está na hora de adicionar campos à nossa primeira etapa. Basta clicar em **Adicionar novo campo** e selecionar o tipo de secção que pretende.

![Botão Adicionar novo campo](/img/config/checkout-form-add-field-button.png)![Menu suspenso de seleção do tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

Cada campo tem parâmetros diferentes a preencher. Para esta primeira entrada, vamos selecionar o campo **Nome de utilizador**.

![Configuração do campo Nome de utilizador](/img/config/checkout-form-username-content.png)![Parâmetros do campo Nome de utilizador](/img/config/checkout-form-username-visibility.png)![Definições adicionais do campo Nome de utilizador](/img/config/checkout-form-username-style.png)

Pode adicionar tantas etapas e campos quantos precisar. Para apresentar os seus produtos para que os seus clientes escolham um, use o campo Tabela de preços. Se quiser permitir que os seus clientes escolham um modelo, adicione o campo Seleção de modelo. E assim por diante.

![Editor de formulário de finalização de compra com campo de seleção de modelo](/img/config/checkout-form-with-template-field.png)

_**Nota:** Se criar um produto depois de criar o seu formulário de finalização de compra, terá de adicionar o produto na secção Tabela de preços. Se não o adicionar, o produto não aparecerá aos seus clientes na página de registo._

_**Nota 2:** nome de utilizador, email, palavra-passe, título do site, URL do site, resumo do pedido, pagamento e botão de envio são campos obrigatórios para criar um formulário de finalização de compra._

Enquanto está a trabalhar no seu formulário de finalização de compra, pode usar sempre o botão Pré-visualizar para ver como os seus clientes verão o formulário. Também pode alternar entre ver como um utilizador existente ou como um visitante.

![Botão Pré-visualizar no editor de formulário de finalização de compra](/img/config/checkout-form-preview-button.png)![Pré-visualização do formulário de finalização de compra como visitante ou utilizador existente](/img/config/checkout-form-preview-modal.png)

Por fim, em **Opções avançadas** pode configurar a mensagem para a página de **Agradecimento**, adicionar snippets para acompanhar conversões, adicionar CSS personalizado ao seu formulário de finalização de compra ou restringi-lo a determinados países.

![Opções avançadas com página de Agradecimento, acompanhamento de conversões e CSS personalizado](/img/config/checkout-form-advanced.png)

Também pode ativar ou desativar manualmente o seu formulário de finalização de compra alternando esta opção na coluna da direita, ou eliminar permanentemente o formulário.

![Alternância de ativo e opção de eliminar para o formulário de finalização de compra](/img/config/checkout-form-active.png)

Não se esqueça de guardar o seu formulário de finalização de compra!

![Botão Guardar formulário de finalização de compra](/img/config/checkout-form-save.png)

Para obter o shortcode do seu formulário, clique em **Gerar shortcode** e copie o resultado apresentado na janela modal.

![Modal Gerar shortcode com shortcode para copiar](/img/config/checkout-form-editor.png)

_**Nota:** Terá de adicionar este shortcode à sua página de registo para que este formulário de finalização de compra seja adicionado a ela._

## Pré-selecionar produtos e modelos através de parâmetros de URL:

Se quiser criar tabelas de preços personalizadas para os seus produtos e pré-selecionar no formulário de finalização de compra o produto ou modelo que o seu cliente escolhe a partir da sua tabela de preços ou página de modelos, pode usar parâmetros de URL para isso.

### **Para planos:**

Vá a **Ultimate Multisite > Produtos > Selecionar um plano**. Deverá ver o botão **Clique para copiar link partilhável** no topo da página. Este é o link que pode usar para pré-selecionar este plano específico no seu formulário de finalização de compra.

![Página de produto com botão de link partilhável](/img/config/products-list.png)

Note que este link partilhável só é válido para **Planos**. Não pode usar links partilháveis para pacotes ou serviços.

### Para modelos:

Se quiser pré-selecionar modelos de site no seu formulário de finalização de compra, pode usar o parâmetro: **?template_id=X** no URL da sua página de registo. O "X" tem de ser substituído pelo **número de ID do modelo de site**. Para obter este número, vá a **Ultimate Multisite > Sites**.

Clique em **Gerir** logo abaixo do modelo de site que pretende usar. Verá o número SITE ID. Basta usar este número para que este modelo de site específico seja pré-selecionado no seu formulário de finalização de compra. No nosso caso aqui, o parâmetro de URL seria **?template_id=2**.

![Lista de sites mostrando o ID do modelo de site](/img/config/site-templates-list.png)

Digamos que o site da nossa rede é [**www.mynetwork.com**](http://www.mynetwork.com) e a nossa página de registo com o nosso formulário de finalização de compra está localizada na página **/register**. O URL completo com este modelo de site pré-selecionado ficará assim: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E, se quiser, pode pré-selecionar tanto produtos como modelos no seu formulário de finalização de compra. Tudo o que precisa de fazer é copiar o link partilhável do plano e colar o parâmetro do modelo no final. Ficará assim: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
