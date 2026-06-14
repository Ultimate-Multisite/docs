---
title: Personalizando Seu Formulário de Registro
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Personalizando seu Formulário de Cadastro

Para fazer sua rede se destacar de todos os outros SaaS construídos na plataforma WordPress, o Ultimate Multisite permite que você personalize suas páginas de registro e login com nosso recurso **Checkout Forms**.

Embora sejam uma maneira fácil e flexível de experimentar diferentes abordagens ao tentar converter novos clientes, eles são usados principalmente para criar formulários de registro personalizados. Este artigo visa mostrar como você pode fazer isso.

## Páginas de login e registro:

Após a instalação do Ultimate Multisite, ele cria automaticamente páginas de login e registro personalizadas no seu site principal. Você pode alterar essas páginas padrão a qualquer momento indo na página **Ultimate Multisite > Settings > Login & Registration**.

![Página de configurações de Login e Registro](/img/config/settings-general.png)

Aqui está uma visualização completa da página de configurações de login e registro:

![Página completa de configurações de Login e Registro](/img/config/settings-login-registration-full.png)

Vamos dar uma olhada em cada uma das opções que você pode personalizar na página **Login & Registration**:

  * **Habilitar registro:** Esta opção habilita ou desabilita o registro na sua rede. Se estiver desligada, seus clientes não poderão se registrar e assinar seus produtos.

  * **Habilitar verificação de e-mail:** Se esta opção estiver ativada, os clientes que se inscreverem em um plano gratuito ou pago com período de teste receberão um e-mail de verificação e precisarão clicar no link de verificação para que seus sites sejam criados.

* **Página de registro padrão:** Esta é a página padrão para registro. Esta página precisa ser publicada no seu site e ter um formulário de registro (também conhecido como formulário de checkout) - onde seus clientes se inscreverão nos seus produtos. Você pode criar quantas páginas de registro e formulários de checkout quiser, mas lembre-se de colocar o shortcode do formulário de checkout na página de registro, caso contrário, ele não aparecerá.

* **Usar página de login personalizada:** Esta opção permite que você use uma página de login personalizada, diferente da página padrão wp-login.php. Se esta opção estiver ativada, você poderá selecionar qual página será usada para o login na opção **Página de login padrão** (logo abaixo).

* **Ofuscar a URL de login original (wp-login.php)**: Se você quiser esconder a URL de login original, pode ativar esta opção. Isso é útil para prevenir ataques de força bruta. Se esta opção estiver habilitada, o Ultimate Multisite exibirá um erro 404 quando um usuário tentar acessar o link original wp-login.php.

* **Forçar publicação síncrona do site:** Depois que um cliente se inscreve em um produto em uma rede, o novo site pendente precisa ser convertido em um site de rede real. O processo de publicação acontece via Job Queue, de forma assíncrona. Ative esta opção para forçar a publicação a ocorrer na mesma requisição do cadastro.

Agora, vamos ver outras opções que ainda são relevantes para o processo de login e registro. Elas estão logo abaixo de **Outras opções** na mesma página de Login e registro:

* **Papel padrão:** Este é o papel que seus clientes terão em seu site após o processo de inscrição.

* **Habilitar Jumper:** Habilita o atalho Jumper na área de administração. O Jumper permite que os administradores pulem rapidamente para as telas do Ultimate Multisite, objetos de rede e outros destinos suportados sem ter que navegar por todo o menu. Desative-o se preferir ocultar essa ferramenta de navegação rápida da interface de administração.

* **Adicionar usuários ao site principal também:** Habilitar esta opção também adicionará o usuário ao site principal da sua rede após o processo de cadastro. Se você habilitar esta opção, uma opção para definir o **papel padrão** desses usuários no seu site também aparecerá logo abaixo.

* **Habilitar múltiplas contas:** Permite que os usuários tenham contas em diferentes sites da sua rede com o mesmo endereço de e-mail. Se esta opção estiver desativada, seus clientes não poderão criar uma conta em outros sites rodando na sua rede com o mesmo endereço de e-mail.

E essas são todas as opções relacionadas a login e registro que você pode personalizar! Não se esqueça de salvar suas configurações depois de terminar de editá-las.

## Usando múltiplos formulários de registro:

O Ultimate Multisite 2.0 oferece um editor de formulário de checkout que permite criar quantos formulários quiser, com campos diferentes, produtos oferecidos, etc.

Tanto a página de login quanto a página de registro são incorporadas com shortcodes: **[wu_login_form]** na página de login e **[wu_checkout]** para a página de registro. Você pode personalizar ainda mais a página de registro construindo ou criando formulários de checkout.

Para acessar este recurso, vá ao menu **Checkout Forms**, na barra lateral esquerda.

![Menu Checkout Forms na barra lateral](/img/config/checkout-forms-list.png)

Nesta página, você pode ver todos os seus formulários de checkout.

Se quiser criar um novo, basta clicar em **Adicionar Formulário de Checkout** no topo da página.

Você pode escolher uma destas três opções como ponto de partida: passo único, multi-passo ou vazio. Depois, clique em Ir para o Editor.

![Adicionar Formulário de Checkout com opções de passo único, multi-passo ou vazio](/img/config/checkout-forms-list.png)

Alternativamente, você pode editar ou duplicar os formulários que já possui clicando nas opções abaixo do nome deles. Lá, também encontrará as opções para copiar o shortcode do formulário ou para excluir o formulário.

![Ações ao passar o mouse sobre o formulário de checkout com editar, duplicar e excluir](/img/config/checkout-form-hover-actions.png)

Se você selecionar passo único ou multi-passo, o formulário de checkout já virá pré-preenchido com os passos básicos para que ele funcione. Depois, se desejar, você pode adicionar etapas extras a ele.

### Editando um Formulário de Checkout:

Como mencionamos antes, você pode criar formulários de checkout para diferentes finalidades. Neste exemplo, vamos trabalhar em um formulário de registro.

Depois de navegar até o editor do formulário de checkout, dê um nome ao seu formulário (que será usado apenas para referência interna) e um slug (usado para criar shortcodes, por exemplo).

![Editor do formulário de checkout com campos nome e slug](/img/config/checkout-form-editor.png)

Os formulários são feitos de passos e campos. Você pode adicionar uma nova etapa clicando em Adicionar Novo Passo de Checkout.

![Botão Adicionar Novo Passo de Checkout](/img/config/checkout-form-add-step.png)

Na primeira aba da janela modal, preencha o conteúdo do passo do seu formulário. Dê a ele um ID, nome e uma descrição. Estes itens são usados principalmente internamente.

![Aba de conteúdo do passo do checkout com ID, nome e descrição](/img/config/checkout-form-step-content.png)

Em seguida, defina a visibilidade da etapa. Você pode escolher entre Sempre mostrar, Mostrar apenas para usuários logados ou Mostrar apenas para convidados.

![Opções de visibilidade do passo de checkout](/img/config/checkout-form-step-visibility.png)

Finalmente, configure o estilo do passo. Estes são campos opcionais.

![Configuração do estilo do passo de checkout](/img/config/checkout-form-step-style.png)

Agora, é hora de adicionar campos ao nosso primeiro passo. Basta clicar em **Adicionar Novo Campo** e selecionar o tipo de seção que você deseja.

![Botão Adicionar Novo Campo](/img/config/checkout-form-step-with-fields.png)![Menu suspenso de seleção do tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

Cada campo tem parâmetros diferentes para serem preenchidos. Para esta entrada inicial, selecionaremos o campo **Nome de Usuário** (Username).

![Configuração do campo Nome de Usuário](/img/config/checkout-form-username-content.png)![Parâmetros do campo Nome de Usuário](/img/config/checkout-form-username-visibility.png)![Configurações adicionais do campo Nome de Usuário](/img/config/checkout-form-username-style.png)

Você pode adicionar quantos passos e campos precisar. Para exibir seus produtos para que os clientes possam escolher um, use o campo Tabela de Preços (Pricing Table). Se você quiser permitir que seus clientes escolham um modelo, adicione o campo Seleção de Modelo (Template Selection). E assim por diante.

_**Nota:** Se você criar um produto depois de criar seu formulário de checkout, precisará adicioná-lo na seção Tabela de Preços. Se você não o adicionar, o produto não aparecerá para seus clientes na página de registro._

_**Nota 2:** nome de usuário (username), e-mail, senha, título do site, URL do site, resumo do pedido (order summary), pagamento (payment) e botão enviar (submit button) são campos obrigatórios para criar um formulário de checkout._

Enquanto você trabalha no seu formulário de checkout, sempre pode usar o botão Visualizar (Preview) para ver como seus clientes verão o formulário. Você também pode alternar entre a visualização como usuário existente ou visitante.

Finalmente, nas **Opções Avançadas**, você pode configurar a mensagem para a página de **Obrigado** (Thank You), adicionar snippets para rastrear conversões, incluir CSS personalizado no seu formulário de checkout ou restringi-lo a certos países.

Você também pode ativar ou desativar manualmente o seu formulário de checkout alternando esta opção na coluna da direita, ou excluir permanentemente o formulário.

Não se esqueça de salvar o seu formulário de checkout!

Para obter o shortcode do seu formulário, clique em **Gerar Shortcode** e copie o resultado que aparece na janela modal.

_**Nota:** Você precisará adicionar este shortcode à sua página de registro para que este formulário de checkout seja adicionado a ela._

## Pré-selecionando produtos e modelos via parâmetros de URL:

Se você quiser criar tabelas de preços personalizadas para os seus produtos e pré-selecionar no formulário de checkout o produto ou modelo que seu cliente escolhe da sua página de tabela de preços ou modelos, você pode usar parâmetros de URL para isso.

### **Para planos:**

Vá em **Ultimate Multisite > Produtos > Selecionar um plano**. Você verá o botão **Clique para copiar Link Compartilhável** no topo da página. Este é o link que você pode usar para pré-selecionar este plano específico no seu formulário de checkout.

![Página do produto com botão de link compartilhável](/img/config/products-list.png)

Observe que este link compartilhável é válido apenas para **Planos**. Você não pode usar links compartilháveis para pacotes ou serviços.

### Para modelos (templates):

Se você quiser pré-selecionar modelos de site no seu formulário de checkout, pode usar o parâmetro: **?template_id=X** na URL da sua página de registro. O "X" precisa ser substituído pelo **número do ID do modelo de site**. Para obter este número, vá para **Ultimate Multisite > Sites**.

Clique em **Manage** (Gerenciar) logo abaixo do modelo de site que você deseja usar. Você verá o número do SITE ID. Basta usar este número para este modelo de site específico ser pré-selecionado no seu formulário de checkout. No nosso caso, o parâmetro da URL seria **?template_id=2**.

![Lista de sites mostrando o ID do modelo de site](/img/config/site-templates-list.png)

Digamos que nosso site da rede seja [**www.mynetwork.com**](http://www.mynetwork.com) e nossa página de registro com o formulário de checkout esteja localizada na página **/register**. A URL completa com este modelo de site pré-selecionado ficará como [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E se desejar, você pode pré-selecionar tanto os produtos quanto os modelos no seu formulário de checkout. Tudo o que você precisa fazer é copiar o link compartilhável do plano e colar o parâmetro do modelo no final. Ficará como [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
