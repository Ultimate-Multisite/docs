---
title: Personalizar o teu formulario de registo
sidebar_position: 17
_i18n_hash: 13f72671d55f48becd6bd89f6571f111
---
# Personalizar o seu Formulário de Registo

Para que a súa rede se destaque de todos os outros SaaS construídos na plataforma WordPress, Ultimate Multisite permite personalizar as súas páxinas de registo e inicio de sesión con a nosa característica **Checkout Forms**.

A pesar de ser unha forma fácil e flexible de experimentar diferentes enfoques ao intentar converter novos clientes, son principalmente para crear formularios de registo personalizados. Este artigo tem como objetivo mostrarle como podes facelo.

## Páxinas de inicio de sesión e registo:

Ao instalar Ultimate Multisite, se crea automáticamente páxinas personalizadas de inicio de sesión e registo no seu sitio principal. Podes cambiar estas páxinas predeterminadas en cualquier momento indo a **Ultimate Multisite > Settings > Login & Registration**.

![Páxina de configuración de inicio de sesión e registo](/img/config/settings-general.png)

Aquí ten unha vista completa da páxina de configuración de inicio de sesión e registo:

![Páxina completa de configuración de inicio de sesión e registo](/img/config/settings-login-registration-full.png)

Veamos cada unha das opcións que podes personalizar na páxina **Login & Registration**:

  * **Enable registration (Activar o registo):** Esta opción activará ou desativará o registo na súa rede. Se se desactiva, os seus clientes non poderán registarse e suscribirse aos seus produtos.

  * **Enable email verification (Activar a verificación do correo electrónico):** Se esta opción está activada, os clientes que se suscriban a un plan gratuito ou a un plan de pago con período de prueba recibirán un correo electrónico de verificación e deberán clicar no enlace de verificación para que os seus sitios se creen.

* **Página de registo predeterminada:** Esta é a página padrão para o registo. Esta página precisa de ser publicada no seu website e ter um formulário de registo (também conhecido como formulário de checkout) - onde os seus clientes se inscreverão nos seus produtos. Pode criar tantas páginas de registo e formulários de checkout quantos quiser, mas lembre-se de colocar o shortcode do formulário de checkout na página de registo, senão não aparecerá.

* **Usar página de login personalizada:** Esta opção permite que use uma página de login personalizada, diferente da página padrão wp-login.php. Se esta opção estiver ativada, pode selecionar qual página será usada para o login na opção **Página de login predeterminada** (logo abaixo).

* **Ofuscar a URL original de login (wp-login.php)**: Se quiser esconder a URL de login original, pode ativar esta opção. Isto é útil para evitar ataques de força bruta. Se esta opção estiver ativada, o Ultimate Multisite exibirá um erro 404 quando um utilizador tentar aceder ao link original wp-login.php

* **Forçar publicação síncrona do site:** Depois de um cliente subscrever a um produto numa rede, o novo site pendente precisa de ser convertido num site de rede real. O processo de publicação acontece via Job Queue, de forma assíncrona. Ative esta opção para forçar que a publicação aconteça na mesma solicitação do registo.

Agora, vejamos outras opções que ainda são relevantes para o processo de login e registo. Elas estão logo abaixo de **Outras opções** na mesma página de Login & registration:

* **Papel predeterminado:** Este é o papel que os seus clientes terão no seu website depois do processo de registo.

* **Activar Jumper:** Activa o atalho Jumper na área de administración. O Jumper permite que os administradores pasen rapidamente para as telas do Ultimate Multisite, objetos de rede e outros destinos suportados sem ter de navegar por todo o menu. Desative-o se preferir esconder essa ferramenta de navegação rápida da interface de administração.

* **Adicionar utilizadores ao site principal também:** Ao ativar esta opção, o sistema também adicionará o utilizador ao site principal da sua rede após o processo de inscrição. Se ativar esta opção, aparecerá logo abaixo uma opção para definir o **papel padrão** destes utilizadores no seu website.

* **Ativar múltiplas contas:** Permita que os utilizadores tenham contas em diferentes sites da sua rede com a mesma morada de e-mail. Se esta opção estiver desativada, os seus clientes não conseguirão criar uma conta noutros websites que correm na sua rede com a mesma morada de e-mail.

E estas são todas as opções relacionadas com login e registo que pode personalizar! Não se esqueça de guardar as suas definições depois de terminar de as editar.

## Usar múltiplos formulários de registo:

O Ultimate Multisite 2.0 oferece um editor de formulário de checkout que lhe permite criar quantos formulários quiser, com diferentes campos, produtos disponíveis, etc.

Tanto a página de login como a página de registo estão incorporadas com shortcodes: **[wu_login_form]** na página de login e **[wu_checkout]** para a página de registo. Pode personalizar ainda mais a página de registo construindo ou criando formulários de checkout.

Para aceder a esta funcionalidade, vá ao menu **Checkout Forms**, no painel lateral esquerdo.

![Menu Checkout Forms na barra lateral](/img/config/checkout-forms-list.png)

Nesta página, pode ver todos os formulários de checkout que tem.

Se quiser criar um novo, basta clicar em **Add Checkout Form** no topo da página.

Pode seleccionar unha destas tres opción como punto de partida: paso único, multi-paso ou en branco. Aínda que pulse para ir ao **Editor**.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

Alternativamente, podes editar ou duplicar os formularios que ya tes existente pulando sobre as opcións que están abaixo do seu nome. Aínda encontrarás as opcións para copiar o shortcode do formulario ou para deletelo.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

Se seleccionas paso único ou multi-paso, o formulario de checkout ya estará preenchido con os pasos básicos para que funcione. Aínda que queiras, podes añadir pasos extra a ele.

### Editar un Formulario de Checkout:

Como mencionamos antes, podes crear formularios de checkout para diferentes propósitos. Neste exemplo traballaremos con un formulario de registo.

Tras navegar ao editor do formulario de checkout, dás o nome ao teu formulario (que se usará só para referencia interna) e un slug (usado para crear shortcodes, por exemplo).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

Os formularios están feitos de pasos e campos. Podés añadir un novo paso pulando sobre **Add New Checkout Step**.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

Na primeira pestaña da ventana modal, preenche o contenido do teu paso do formulario. Dás lle unha ID, un nome e unha descripción. Estes elementos se usan principalmente internamente.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step-content.png)

A continuación, establece a visibilidade do paso. Podés escoller entre **Always show** (Mostrar sempre), **Only show for logged in users** (Mostrar só para usuarios logados) ou **Only show for guests** (Mostrar só para convidados).

![Checkout step visibility options](/img/config/checkout-form-step-visibility.png)

Finalmente, configura o estilo do passo. Estes son campos opcionais.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

Agora, é hora de adicionar campos ao nosso primeiro passo. Basta clicar em **Add New Field** (Adicionar Novo Campo) e selecionar o tipo de secção que queres.

![Add New Field button](/img/config/checkout-form-step-with-fields.png)![Field type selection dropdown](/img/config/checkout-form-field-type-dropdown.png)

Cada campo tem diferentes parâmetros para preencher. Para esta entrada inicial, vamos selecionar o campo **Username** (Nome de Utilizador).

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

Podes adicionar tantos passos e campos quantos precisares. Para mostrar os teus produtos para que os clientes possam escolher um, usa o campo Pricing Table (Tabela de Preços). Se quiseres deixar os teus clientes escolher um template, adiciona o campo Template Selection (Seleção de Template). E assim por diante.

_**Nota:** Se criares un produto depois de criares o teu formulário de checkout, terás de adicionar o produto na secção Pricing Table. Se não o adicionares, o produto não aparecerá aos teus clientes na página de registo._

_**Nota 2:** username (nome de utilizador), email, password (palavra-passe), site title (título do site), site URL (URL do site), order summary (resumo do pedido), payment (pagamento) e submit button (botão de envio) são campos obrigatórios para criar um formulário de checkout._

Enquanto trabalhas no teu formulário de checkout, podes sempre usar o botão Preview (Pré-visualizar) para ver como os teus clientes verão o formulário. Também podes alternar entre ver como utilizador existente ou visitante.

Finalmente, nas **Opción Avançadas** podes configurar a mensagem para a páxina de **Obrigado**, adicionar snippets para rastrexar conversios, añadir CSS personalizado ao teu formulario de checkout ou restringílo a certos países.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

Podes tamén activar ou desativar o teu formulario de checkout manualmente abrindo esta opción na coluna da derecha, ou deletelo permanentemente.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

Non te esqueças de guardar o teu formulario de checkout!

![Save Checkout Form button](/img/config/checkout-form-save.png)

Para obtener o shortcode do teu formulario, pulsa en **Generate Shortcode** e copia o resultado que aparece na ventana modal.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**Nota:** Terás de añadir este shortcode á páxina de rexistro para poder añadir este formulario de checkout a ela._

## Preseleccionar produtos e plantillas mediante parámetros URL:

Se queres crear tablas de precios personalizadas para os teus produtos e preseleccionar no formulario de checkout o produto ou plantilla que o cliente escolle da túa lista de precios ou páxina de plantillas, podes usar parámetros URL para isto.

### **Para planes:**

Ve a **Ultimate Multisite > Products > Select a plan**. Deberás ver o botón **Click to copy Shareable Link** no topo da páxina. Este é o link que podes usar para preseleccionar este plan específico no teu formulario de checkout.

![Product page with shareable link button](/img/config/products-list.png)

Note que este enlace compartible só é válido para **Planos**. Não podes usar links compartilháveis para pacotes ou serviços.

### Para modelos (templates):

Se quiser pré-selecionar modelos de site no teu formulário de checkout, podes usar o parâmetro: **?template_id=X** na URL da tua página de registo. O "X" tem que ser substituído pelo **número do ID do modelo de site**. Para obter este número, vai a **Ultimate Multisite > Sites**.

Clica em **Manage** (Gerir) logo abaixo do modelo de site que queres usar. Vais ver o número SITE ID. Usa apenas este número para este modelo de site específico ser pré-selecionado no teu formulário de checkout. No nosso caso, o parâmetro da URL seria **?template_id=2**.

![Lista de sites mostrando o ID do modelo de site](/img/config/site-templates-list.png)

Digamos que o nosso website da rede é [**www.mynetwork.com**](http://www.mynetwork.com) e a nossa página de registo com o formulário de checkout está localizada na página **/register**. A URL completa com este modelo de site pré-selecionado ficará assim: [**www.mynetwork.com/register/?template**_id=2**.

E se quiseres, podes pré-selecionar tanto os produtos como os modelos no teu formulário de checkout. Tudo o que tens de fazer é copiar o link compartilhável do plano e colar o parâmetro do modelo no final. Vai ficar assim: [**www.mynetwork.com/register/premium-plan/?template**_id=2**.
