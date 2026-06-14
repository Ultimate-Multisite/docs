---
title: Enviar emails e comunicados de masas
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Enviando Emails e Transmissões (v2)

_**NOTA IMPORTANTE: Este artigo refere à versão 2.x do Ultimate Multisite.**_

O Ultimate Multisite vem com uma funcionalidade que lhe permite comunicar com os seus clientes enviando um email a um utilizador específico ou a um grupo de utilizadores, bem como enviar avisos no painel de administração deles para fazer anúncios em massa (broadcasts).

## Adicionar avisos de administrador ao painel do cliente com Broadcasts

Usando a funcionalidade de broadcast do Ultimate Multisite, pode adicionar **avisos de administrador** ao painel de administração do subsite do seu utilizador.

Isto é extremamente útil se precisar fazer um anúncio, como manutenção do sistema ou oferecer novos produtos ou serviços aos seus utilizadores existentes. É assim que o aviso de administrador aparecer no painel do seu utilizador.

<!-- Screenshot unavailable: Broadcast de aviso de administrador mostrado no painel do subsite do cliente -->

Para começar um aviso de administrador, aceda ao painel de administração da sua rede e, no menu **Ultimate Multisite**, encontrará a opção **Broadcasts**.

![Página de lista de Broadcasts no admin Ultimate Multisite](/img/admin/broadcasts-list.png)

Também pode editar broadcasts existentes:

![Interface de edição de broadcast](/img/admin/broadcast-edit.png)

A partir desta página, clique no botão **Add Broadcast** (Adicionar Broadcast) no topo.

Isto abrirá a janela modal Add broadcast onde poderá escolher o tipo de broadcast que deseja enviar.

Vá em frente e selecione **Message** (Mensagem), depois clique no botão **Next Step** (Próximo Passo).

![Modal de adicionar broadcast com a opção Message selecionada](/img/admin/broadcast-add-message.png)

A próxima janela irá pedir-lhe o **Target customer** (Cliente Alvo) ou o **Target product** (Produto Alvo). Note que pode selecionar mais de um utilizador ou mais de um produto.

Para buscar unha conta de usuario ou un producto, hai que empezar a escribir a palabra clave dentro do campo.

No campo **Tipo de mensagem**, podes seleccionar o color do aviso. Isto enfatizará a urgencia da túa mensagem.

Despois podes clicar en **Próximo paso**.

![Campos para clientes al vosso público, producto alvo e tipo de mensagem para un envío de mensagem](/img/admin/broadcast-message-targets.png)

A próxima ventana é onde podes empezar a redactar a túa mensagem introduzindo o asunto e o contenido/mensagem que queres enviar aos usuarios.

![Editor do assunto e contenido da mensagem para o paso de creación](/img/admin/broadcast-edit.png)

Despois de crear a túa mensagem, podes pulsar o botón **Enviar**.

E listo. O aviso administrativo debería aparecer inmediatamente no dashboard do vosso usuario.

## Enviar emails aos vosso clientes

Usando a función de broadcast de Ultimate Multisite, podes enviar un email aos vosso usuarios. Tendes a opción de enviar o email só a usuarios específicos ou de almejar un grupo de usuarios específico basándose no producto ou plano ao que están suscritos.

Para empezar un broadcast de email, diríxase ao seu dashboard de administrador da rede e, no menú Ultimate Multisite, encontrará a opción Broadcast.

![Páxina de lista de broadcasts usada como punto de partida para un broadcast de email](/img/admin/broadcasts-list.png)

De esta páxina, pulsa o botón **Añadir broadcast** na parte superior.

Isto abrirá a ventana modal Añadir broadcast onde podes escoller que tipo de broadcast queres enviar. Decide e selecciona **Email**, despois pulsa o botón **Próximo paso**.

![Ventana modal para añadir broadcast con a opción Email seleccionada](/img/admin/broadcast-add-email.png)

A próxima ventana te pedirá que elijas o **Cliente alvo** ou o **Producto alvo**. Nota que podes seleccionar máis de un usuario ou máis de un producto.

Para buscar unha conta de usuario ou un producto, hai que empezar a escribir a palabra clave dentro do campo.

Una vez que seleccionas o teu público al que queres enviar a información, podes clicar en **Next Step** (Pró paso).

![Selección de clientes e produto alvo para un envío por email](/img/admin/broadcast-email-targets.png)

A próxima ventana é onde podes empezar a redactar o teu email introduzindo o asunto e o contenido/mensaxe que queres enviar aos usuarios.

<!-- Screenshot unavailable: Editor de asunto e contenido do envío por email na fase de composición -->

Tras crear a mensaxe, podes pulsar o botón **Send** (Enviar).

E así é fácil enviar un email aos teus usuarios utilizando a función de broadcast.

## Emails do sistema

Os emails do sistema en Ultimate Multisite son esas **notificacións automáticas** que o sistema envía despois de ciertas accións como o rexistro, o pagamento, a mapeo de dominios, etc. Estes emails poden ser editados ou modificados desde as configuración de Ultimate Multisite. Tamén virá con unha función que te permitirá reiniciar e importar configuración existente de outra instalación de Ultimate Multisite.

### Reiniciar e Importar

As novas versións de Ultimate Multisite, así como os add-ons, poden e virán rexistrando novos emails de vez en tanto.

Para evitar conflitos ou outros problemas, **non incluiremos as novas plantillas de email como Emails do sistema na súa instalación automáticamente**, a menos que sexan cruciais para o funcionamento correcto dun determinado recurso.

Non obstante, os super administradores e agentes poden importar estes emails recién rexistrados vía o *importer tool*. Aquela proseso creará un novo email do sistema con o contenido e a configuración da nova plantilla de email, permitindo ao super administrador hacer as modificacións que deseen ou deixalos como están.

#### Como importar emails do sistema

Vaya á pá, ve a página de Configuración do Ultimate Multisite e diríxase à aba **Emails**.

![Aba Emails nas configuración do Ultimate Multisite mostrando a sección System Emails](/img/config/settings-emails-tab.png)

Despois, na barra lateral, clica no botón **Customize System Emails** (Personalizar Emails).

<!-- Screenshot unavailable: Botón Customize System Emails na panel lateral de System Emails -->

Na página de System Emails, verás o botón de acción **Reset & Import** (Restablecer e Importar) no topo. Clicar neste botón abrirá a ventana modal de importación e restablecimiento.

![Botón Reset or Import na página admin de System Emails](/img/admin/system-emails-reset-import.png)

Despois, podes activar as opción **Import Emails** (Importar Emails) para ver que emails do sistema están dispoñibles para ser importados.

<!-- Screenshot unavailable: Modal de Reset e Import con as opción Import Emails expandidas -->

#### Restablecer System Emails

Outras veces, darás a cabo das moitas que fizeste a unha determinada plantilla de email non te funcionan máis e querrás restablecela ao seu **estado predefinido**.

Nai tales casos, tes dúas opción: podes simplemente deletrear o email do sistema e importalo de volta (usando as instrucións anteriores) - o que borrará as métricas de envío e outras cousas, o que torna este método o menos preferido.

Ou podes usar a **Reset & Import tool** (Herramienta de Restablecer e Importar) para restablecer esa plantilla de email.

Para restablecer unha plantilla de email, podes seguir os pasos anteriores ata que chegas á ferramenta Reset & Import, e despois, activa a opción **Reset** (Restablecer) e selecciona os emails que queres restaurar ao seu contido predefinido.

<!-- Screenshot unavailable: Modal de Reset e Import con as opción Reset Emails expandidas -->
