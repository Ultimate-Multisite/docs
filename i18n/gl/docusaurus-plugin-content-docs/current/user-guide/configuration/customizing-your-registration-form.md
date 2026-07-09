---
title: Personalizar o teu formulario de rexistro
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# Personalizar o teu formulario de rexistro {#customizing-your-registration-form}

Para facer que a túa rede teña un aspecto único fronte a todos os demais SaaS creados na plataforma WordPress, Ultimate Multisite permíteche personalizar as túas páxinas de rexistro e inicio de sesión coa nosa funcionalidade **Checkout Forms**.

Aínda que son unha forma doada e flexible de experimentar con diferentes enfoques ao tentar converter novos clientes, úsanse principalmente para crear formularios de rexistro personalizados. Este artigo pretende mostrarche como podes facelo.

## Páxinas de inicio de sesión e rexistro: {#login-and-registration-pages}

Ao instalar Ultimate Multisite, créanse automaticamente páxinas personalizadas de inicio de sesión e rexistro no teu sitio principal. Podes cambiar estas páxinas predeterminadas en calquera momento indo á túa páxina **Ultimate Multisite > Settings > Login & Registration**.

![Páxina de axustes de inicio de sesión e rexistro](/img/config/settings-general.png)

Aquí tes unha vista completa da páxina de axustes de inicio de sesión e rexistro:

![Páxina completa de axustes de inicio de sesión e rexistro](/img/config/settings-login-registration-full.png)

Vexamos cada unha das opcións que podes personalizar na páxina **Login & Registration**:

  * **Activar o rexistro:** Esta opción activará ou desactivará o rexistro na túa rede. Se está desactivada, os teus clientes non poderán rexistrarse nin subscribirse aos teus produtos.

  * **Activar a verificación por correo electrónico:** Se esta opción está activada, os clientes que se subscriban a un plan gratuíto ou a un plan de pago cun período de proba recibirán un correo electrónico de verificación e terán que facer clic na ligazón de verificación para que se creen os seus sitios web.

  * **Páxina de rexistro predeterminada:** Esta é a páxina predeterminada para o rexistro. Esta páxina debe estar publicada no teu sitio web e ter un formulario de rexistro (tamén coñecido como formulario de checkout), onde os teus clientes se subscribirán aos teus produtos. Podes crear tantas páxinas de rexistro e formularios de checkout como queiras; lembra simplemente poñer o shortcode do formulario de checkout na páxina de rexistro, ou non aparecerá.

  * **Usar páxina de inicio de sesión personalizada:** Esta opción permíteche usar unha páxina de inicio de sesión personalizada, distinta da páxina predeterminada wp-login.php. Se esta opción está activada, podes seleccionar que páxina se usará para iniciar sesión na opción **Páxina de inicio de sesión predeterminada** (xusto debaixo).

  * **Ofuscar o URL orixinal de inicio de sesión (wp-login.php)** : Se queres ocultar o URL orixinal de inicio de sesión, podes activar esta opción. Isto é útil para previr ataques de forza bruta. Se esta opción está activada, Ultimate Multisite mostrará un erro 404 cando un usuario tente acceder á ligazón orixinal wp-login.php

  * **Forzar a publicación síncrona do sitio:** Despois de que un cliente se subscriba a un produto nunha rede, o novo sitio pendente debe converterse nun sitio real da rede. O proceso de publicación prodúcese mediante Job Queue, de forma asíncrona. Activa esta opción para forzar que a publicación se produza na mesma solicitude que o rexistro.

Agora, vexamos outras opcións que seguen sendo relevantes para o proceso de inicio de sesión e rexistro. Están xusto debaixo de **Outras opcións** na mesma páxina Login & registration:

  * **Rol predeterminado:** Este é o rol que terán os teus clientes no seu sitio web despois do proceso de rexistro.

  * **Activar Jumper:** Activa o atallo Jumper na área de administración. Jumper permite aos administradores saltar rapidamente ás pantallas de Ultimate Multisite, aos obxectos da rede e a outros destinos compatibles sen navegar por todos os menús. Desactívao se prefires ocultar esa ferramenta de navegación rápida da interface de administración.

  * **Engadir usuarios tamén ao sitio principal:** Ao activar esta opción tamén se engadirá o usuario ao sitio principal da túa rede despois do proceso de rexistro. Se activas esta opción, tamén aparecerá xusto debaixo unha opción para definir o **rol predeterminado** destes usuarios no teu sitio web.

  * **Activar múltiples contas:** Permite que os usuarios teñan contas en diferentes sitios da túa rede co mesmo enderezo de correo electrónico. Se esta opción está desactivada, os teus clientes non poderán crear unha conta noutros sitios web que funcionen na túa rede co mesmo enderezo de correo electrónico.

E iso é todo respecto ás opcións relacionadas co inicio de sesión e o rexistro que podes personalizar! Non esquezas gardar os teus axustes cando remates de editalos.

## Usar múltiples formularios de rexistro: {#using-multiple-registration-forms}

Ultimate Multisite 2.0 ofrece un editor de formularios de checkout que che permite crear tantos formularios como queiras, con diferentes campos, produtos en oferta, etc.

Tanto a páxina de inicio de sesión como a de rexistro están incrustadas con shortcodes: **[wu_login_form]** na páxina de inicio de sesión e**[wu_checkout]** para a páxina de rexistro. Podes personalizar aínda máis a páxina de rexistro construíndo ou creando formularios de checkout.

Para acceder a esta funcionalidade, vai ao menú **Checkout Forms**, na barra lateral esquerda.

![Menú Checkout Forms na barra lateral](/img/config/checkout-forms-list.png)

Nesta páxina, podes ver todos os formularios de checkout que tes.

Se queres crear un novo, só tes que facer clic en **Engadir Checkout Form** na parte superior da páxina.

Podes seleccionar unha destas tres opcións como punto de partida: paso único, varios pasos ou en branco. Despois, fai clic en **Ir ao editor**.

![Engadir Checkout Form con opcións de paso único, varios pasos ou en branco](/img/config/checkout-forms-list.png)

Como alternativa, podes editar ou duplicar os formularios que xa tes facendo clic nas opcións baixo o seu nome. Alí tamén atoparás as opcións para copiar o shortcode do formulario ou para eliminar o formulario.

![Accións ao pasar o cursor sobre o formulario de checkout con editar, duplicar e eliminar](/img/config/checkout-form-hover-actions.png)

Se seleccionas paso único ou varios pasos, o formulario de checkout xa estará precargado cos pasos básicos para que funcione. Despois, se queres, podes engadirlle pasos adicionais.

### Editar un Checkout Form: {#editing-a-checkout-form}

Como mencionamos antes, podes crear formularios de checkout para diferentes propósitos. Neste exemplo traballaremos nun formulario de rexistro.

Despois de navegar ao editor de formularios de checkout, dálle un nome ao teu formulario (que se usará só como referencia interna) e un slug (usado para crear shortcakes, por exemplo).

![Editor do formulario de pago con campos de nome e slug](/img/config/checkout-form-name-slug.png)

Os formularios están compostos por pasos e campos. Podes engadir un novo paso facendo clic en **Engadir novo paso de pago**.

![Botón Engadir novo paso de pago](/img/config/checkout-form-add-step.png)

Na primeira lapela da xanela modal, completa o contido do paso do teu formulario. Dálle un ID, un nome e unha descrición. Estes elementos úsanse principalmente internamente.

![Lapela de contido do paso de pago con ID, nome e descrición](/img/config/checkout-form-step-content.png)

A continuación, define a visibilidade do paso. Podes escoller entre **Mostrar sempre** , **Mostrar só para usuarios con sesión iniciada** ou **Mostrar só para convidados**.

![Opcións de visibilidade do paso de pago](/img/config/checkout-form-step-visibility.png)

Finalmente, configura o estilo do paso. Estes campos son opcionais.

![Configuración de estilo do paso de pago](/img/config/checkout-form-step-style.png)

Agora é o momento de engadir campos ao noso primeiro paso. Só tes que facer clic en **Engadir novo campo** e seleccionar o tipo de sección que queres.

![Botón Engadir novo campo](/img/config/checkout-form-add-field-button.png)![Menú despregable de selección do tipo de campo](/img/config/checkout-form-field-type-dropdown.png)

Cada campo ten diferentes parámetros que deben cubrirse. Para esta primeira entrada, seleccionaremos o campo **Nome de usuario**.

![Configuración do campo Nome de usuario](/img/config/checkout-form-username-content.png)![Parámetros do campo Nome de usuario](/img/config/checkout-form-username-visibility.png)![Axustes adicionais do campo Nome de usuario](/img/config/checkout-form-username-style.png)

Podes engadir tantos pasos e campos como necesites. Para mostrar os teus produtos para que os teus clientes escollan un, usa o campo Táboa de prezos. Se queres permitir que os teus clientes escollan un modelo, engade o campo Selección de modelos. E así sucesivamente.

![Editor do formulario de pago con campo de selección de modelos](/img/config/checkout-form-with-template-field.png)

_**Nota:** Se creas un produto despois de crear o teu formulario de pago, terás que engadir o produto na sección Táboa de prezos. Se non o engades, o produto non aparecerá aos teus clientes na páxina de rexistro._

_**Nota 2:** nome de usuario, correo electrónico, contrasinal, título do sitio, URL do sitio, resumo do pedido, pagamento e botón de envío son campos obrigatorios para crear un formulario de pago._

Mentres traballas no teu formulario de pago, sempre podes usar o botón Vista previa para ver como verán o formulario os teus clientes. Tamén podes alternar entre velo como usuario existente ou como visitante.

![Botón Vista previa no editor do formulario de pago](/img/config/checkout-form-preview-button.png)![Vista previa do formulario de pago como visitante ou usuario existente](/img/config/checkout-form-preview-modal.png)

Finalmente, en **Opcións avanzadas** podes configurar a mensaxe para a páxina de **Grazas**, engadir snippets para rastrexar conversións, engadir CSS personalizado ao teu formulario de pago ou restrinxilo a determinados países.

![Opcións avanzadas con páxina de Grazas, seguimento de conversións e CSS personalizado](/img/config/checkout-form-advanced.png)

Tamén podes activar ou desactivar manualmente o teu formulario de pago alternando esta opción na columna dereita, ou eliminar permanentemente o formulario.

![Interruptor activo e opción de eliminar para o formulario de pago](/img/config/checkout-form-active.png)

Non esquezas gardar o teu formulario de pago!

![Botón Gardar formulario de pago](/img/config/checkout-form-save.png)

Para obter o shortcode do teu formulario, fai clic en **Xerar Shortcode** e copia o resultado mostrado na xanela modal.

![Modal Xerar Shortcode con shortcode para copiar](/img/config/checkout-form-editor.png)

_**Nota:** Terás que engadir este shortcode á túa páxina de rexistro para que este formulario de pago se engada a ela._

## Preselección de produtos e modelos mediante parámetros de URL: {#pre-selecting-products-and-templates-via-url-parameters}

Se queres crear táboas de prezos personalizadas para os teus produtos e preseleccionar no formulario de pago o produto ou modelo que o teu cliente escolle desde a túa táboa de prezos ou páxina de modelos, podes usar parámetros de URL para isto.

### **Para plans:** {#for-plans}

Vai a **Ultimate Multisite > Produtos > Seleccionar un plan**. Deberías ver o botón **Clic para copiar a ligazón compartible** na parte superior da páxina. Esta é a ligazón que podes usar para preseleccionar este plan específico no teu formulario de pago.

![Páxina de produto con botón de ligazón compartible](/img/config/products-list.png)

Ten en conta que esta ligazón compartible só é válida para **Plans**. Non podes usar ligazóns compartibles para paquetes ou servizos.

### Para modelos: {#for-templates}

Se queres preseleccionar modelos de sitio no teu formulario de pago, podes usar o parámetro: **?template_id=X** no URL da túa páxina de rexistro. O "X" debe substituírse polo **número de ID do modelo de sitio**. Para obter este número, vai a **Ultimate Multisite > Sitios**.

Fai clic en **Xestionar** xusto debaixo do modelo de sitio que queres usar. Verás o número SITE ID. Usa este número para que este modelo de sitio específico estea preseleccionado no teu formulario de pago. No noso caso aquí, o parámetro de URL sería **?template_id=2**.

![Lista de sitios que mostra o ID do modelo de sitio](/img/config/site-templates-list.png)

Digamos que o sitio web da nosa rede é [**www.mynetwork.com**](http://www.mynetwork.com) e a nosa páxina de rexistro co noso formulario de pago está situada na páxina **/register**. O URL completo con este modelo de sitio preseleccionado terá este aspecto: [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

E se queres, podes preseleccionar tanto produtos como modelos no teu formulario de pago. O único que tes que facer é copiar a ligazón compartible do plan e pegar o parámetro do modelo ao final. Terá este aspecto: [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
