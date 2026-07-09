---
title: Envío de correos electrónicos e difusións
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Enviar correos electrónicos e difusións (v2)

_**NOTA IMPORTANTE: Este artigo refírese á versión 2.x de Ultimate Multisite.**_

Ultimate Multisite inclúe unha funcionalidade que che permitirá comunicarte cos teus clientes enviando un correo electrónico a un usuario obxectivo ou a un grupo de usuarios, así como enviar avisos no seu Dashboard de administración para difundir anuncios

## Engadir avisos de administración ao Dashboard dos teus clientes con difusións

Usando a funcionalidade de difusión de Ultimate Multisite, podes engadir **avisos de administración** ao Dashboard de administración do subsitio do teu usuario.

Isto é extremadamente útil se precisas facer un anuncio como mantemento do sistema ou ofrecer novos produtos ou servizos aos teus usuarios existentes. Así se verá o aviso de administración no Dashboard do teu usuario.

<!-- Captura de pantalla non dispoñible: aviso de administración de difusión mostrado no Dashboard do subsitio dun cliente -->

Para iniciar un aviso de administración, vai ao Dashboard de administración da túa rede e, baixo o menú **Ultimate Multisite**, atoparás a opción **Difusións**.

![Páxina da lista de difusións na administración de Ultimate Multisite](/img/admin/broadcasts-list.png)

Tamén podes editar difusións existentes:

![Interface de edición de difusión](/img/admin/broadcast-edit.png)

Desde esta páxina, fai clic no botón **Engadir difusión** da parte superior.

Isto abrirá a xanela modal Engadir difusión, onde podes escoller que tipo de difusión desexas enviar.

Continúa e selecciona **Mensaxe** e despois fai clic no botón **Seguinte paso**.

![Modal Engadir difusión coa opción Mensaxe seleccionada](/img/admin/broadcast-add-message.png)

A seguinte xanela pedirache o **Cliente de destino** ou o **Produto de destino**. Ten en conta que podes seleccionar máis dun usuario ou máis dun produto.

Para buscar unha conta de usuario ou un produto, tes que comezar a escribir a palabra clave dentro do campo.

Baixo o campo **Tipo de mensaxe**, podes seleccionar a cor do aviso. Isto enfatizará a urxencia da túa mensaxe.

Despois podes facer clic en **Seguinte paso**.

![Campos de clientes de destino, produto de destino e tipo de mensaxe para unha difusión de Mensaxe](/img/admin/broadcast-message-targets.png)

A seguinte xanela é onde podes comezar a redactar a túa mensaxe introducindo o asunto e o contido/mensaxe que desexas difundir aos usuarios.

![Editor de asunto e contido da mensaxe de difusión no paso de redacción](/img/admin/broadcast-edit.png)

Despois de crear a túa mensaxe, podes premer o botón **Enviar**.

E iso é todo. O aviso de administración debería mostrarse inmediatamente no Dashboard do teu usuario.

## Enviar correos electrónicos aos teus clientes

Usando a funcionalidade de difusión de Ultimate Multisite, podes enviar un correo electrónico aos teus usuarios. Tes a opción de enviar o correo electrónico só a usuarios específicos ou dirixilo a un grupo de usuarios específico segundo o produto ou plan ao que estean subscritos.

Para iniciar unha difusión por correo electrónico, vai ao Dashboard de administración da túa rede e, baixo o menú Ultimate Multisite, atoparás a opción Difusión.

![Páxina da lista de difusións usada como punto de partida para unha difusión por correo electrónico](/img/admin/broadcasts-list.png)

Desde esta páxina, fai clic no botón **Engadir difusión** da parte superior.

Isto abrirá a xanela modal Engadir difusión, onde podes escoller que tipo de difusión desexas enviar. Continúa e selecciona **Correo electrónico** e despois fai clic no botón **Seguinte paso**.

![Modal Engadir difusión coa opción Correo electrónico seleccionada](/img/admin/broadcast-add-email.png)

A seguinte xanela pedirache o **Cliente de destino** ou o **Produto de destino**. Ten en conta que podes seleccionar máis dun usuario ou máis dun produto.

Para buscar unha conta de usuario ou un produto, tes que comezar a escribir a palabra clave dentro do campo.

Unha vez seleccionado o teu público obxectivo, podes facer clic en **Seguinte paso**.

![Selección de clientes de destino e produto de destino para unha difusión por correo electrónico](/img/admin/broadcast-email-targets.png)

A seguinte xanela é onde podes comezar a redactar o teu correo electrónico introducindo o asunto e o contido/mensaxe que desexas enviar aos usuarios.

<!-- Captura de pantalla non dispoñible: editor de asunto e contido da difusión por correo electrónico no paso de redacción -->

Despois de crear a túa mensaxe, podes premer o botón **Enviar**.

E así de doado é enviar un correo electrónico aos teus usuarios finais usando a funcionalidade de difusión.

## Correos electrónicos do sistema

Os correos electrónicos do sistema en Ultimate Multisite son aquelas **notificacións automáticas** enviadas polo sistema despois de certas accións como rexistro, pagamento, mapeamento de dominio, etc. Estes correos electrónicos pódense editar ou modificar desde a configuración de Ultimate Multisite. Tamén inclúe unha funcionalidade que che permitirá restablecer e importar configuracións existentes desde outra instalación de Ultimate Multisite.

### Restablecemento e importación

As novas versións de Ultimate Multisite, así como os complementos, poden rexistrar e rexistrarán novos correos electrónicos de cando en vez.

Para evitar conflitos e outros problemas, **non engadiremos automaticamente os novos modelos de correo electrónico como Correos electrónicos do sistema na túa instalación** , a menos que sexan cruciais para o funcionamento correcto dunha funcionalidade determinada.

Porén, os superadministradores e axentes poden importar estes correos electrónicos recentemente rexistrados mediante a ferramenta de importación. Ese proceso creará un novo correo electrónico do sistema co contido e a configuración do novo modelo de correo electrónico, permitindo ao superadministrador facer as modificacións que queira ou mantelo tal como está.

#### Como importar correos electrónicos do sistema

Vai á túa páxina de configuración de Ultimate Multisite e diríxete á lapela **Correos electrónicos**.

![Lapela Correos electrónicos na configuración de Ultimate Multisite mostrando a sección Correos electrónicos do sistema](/img/config/settings-emails-tab.png)

Despois, na barra lateral, fai clic no botón **Personalizar correos electrónicos do sistema**.

<!-- Captura de pantalla non dispoñible: botón Personalizar correos electrónicos do sistema no panel lateral de Correos electrónicos do sistema -->

Na páxina Correos electrónicos do sistema, verás o botón de acción **Restablecer e importar** na parte superior. Ao facer clic nese botón debería abrirse a xanela modal de importación e restablecemento.

![Botón de acción Restablecer ou importar na páxina de administración de Correos electrónicos do sistema](/img/admin/system-emails-reset-import.png)

Despois, podes alternar as opcións de Importar correos electrónicos para ver que correos electrónicos do sistema están dispoñibles para importar.

<!-- Captura de pantalla non dispoñible: modal Reset and Import coas opcións de Import Emails expandidas -->

#### Restablecemento dos correos electrónicos do sistema

Outras veces, decataraste de que os cambios que fixeches nun determinado modelo de correo electrónico xa non che funcionan e quererás restablecelo ao seu **estado predeterminado**.

Nestes casos, tes dúas opcións: podes simplemente eliminar o correo electrónico do sistema e importalo de novo (usando as instrucións anteriores), o que borrará as métricas de envío e outras cousas, polo que este método é o menos recomendable.

Ou podes usar a **ferramenta Reset & Import** para restablecer ese modelo de correo electrónico.

Para restablecer un modelo de correo electrónico, podes seguir os pasos anteriores ata chegares á ferramenta Reset & Import e, despois, activar a opción **Reset** e seleccionar os correos electrónicos que queres restablecer ao seu contido predeterminado.

<!-- Captura de pantalla non dispoñible: modal Reset and Import coas opcións de Reset Emails expandidas -->
