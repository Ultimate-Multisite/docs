---
title: |-
  E-mails et broadcastus

  (or)

  Admissio epistularum et diffusionum
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Envío de Correos Electrónicos y Difusión (v2)

_**NOTA IMPORTANTE: Este artículo se refiere a Ultimate Multisite versión 2.x.**_

Ultimate Multisite viene con una función que te permitirá comunicarte con tus clientes enviando un correo electrónico a un usuario específico o a un grupo de usuarios, así como enviando avisos en su panel de administración para difundir anuncios.

## Añadir avisos de administrador al panel de control de tus clientes con Difusiones (Broadcasts)

Usando la función de difusión de Ultimate Multisite, puedes añadir **avisos de administrador** al panel de administración del subdominio de tu usuario.

Esto es extremadamente útil si necesitas hacer un anuncio como mantenimiento del sistema o ofrecer nuevos productos o servicios a tus usuarios existentes. Así es como se verá el aviso de administrador en el panel de control de tu usuario.

<!-- Screenshot unavailable: Aviso de difusión de administrador mostrado en el panel de control de un subdominio de cliente -->

Para empezar un aviso de administrador, ve a tu panel de administración de red y bajo el menú **Ultimate Multisite**, encontrarás la opción **Broadcasts** (Difusiones).

![Página de lista de Difusiones en la administración de Ultimate Multisite](/img/admin/broadcasts-list.png)

También puedes editar las difusiones existentes:

![Interfaz de edición de difusión](/img/admin/broadcast-edit.png)

Desde esta página, haz clic en el botón **Add Broadcast** (Añadir Difusión) en la parte superior.

Esto abrirá la ventana modal "Add broadcast" donde podrás elegir qué tipo de difusión deseas enviar.

Selecciona **Message** (Mensaje) y luego haz clic en el botón **Next Step** (Siguiente Paso).

![Ventana modal para añadir difusión con la opción Message seleccionada](/img/admin/broadcast-add-message.png)

La siguiente ventana te preguntará por el **Target customer** (Cliente objetivo) o el **Target product** (Producto objetivo). Ten en cuenta que puedes seleccionar más de un usuario o más de un producto.

Ad rem utrōr in usuāre aut prodūctum quaerere, necne tibi est in campo typis verbum incipere.

Sub campo **Message type**, potes eligere colorem notificationis. Hoc enfatizet urgentiam tuī mississūs.

Postea potes clīdere **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

In window successivoi potes ut mississum componere incipere, inserens subjectum et contentum/missam quam ad utrōr diffundere vis.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Postquam mississum creavit, potes tē **Send** botonem clīdere.

Et hoc est finis. Notitia admin immediata in dashboard utrōris tuī debet apparere.

## Email ad utrōr tuōs diffundere

Utilizans attributum broadcast Ultimate Multisite, possis email ad utrōr tuōs diffundere. Optionem habes ut mississum solum ad utrōr specificos sendis aut unum grupum utrōrum targetes basus prodūcti vel planī sub quo subscribunt.

Ad initium broadcast email, ad dashboard admin network tūm et sub menu Ultimate Multisite, optionem Broadcast invenies.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Ab hoc pagina, clīdere botonem **Add broadcast** in superi parte.

Hoc aperiet modal window Add broadcast ubi potes eligere quid ut generis broadcast diffundere vis. Procede et selecta **Email** deinde clīdere botonem **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

In window successivoi tibi quaeretur aut **Target customer** aut **Target productum**. Nota, quod plures utrōr aut plura prodūctum selecta possis.

Ad rem ut aliquid aut productem vel pro homine utque in campo ipsum initium typus verbum debet.

Cum tu audientia obiectalis selecta est, potes cliquare in **Next Step**.

![Selectio clientum et producti target pro broadcast email](/img/admin/broadcast-email-targets.png)

Fenestra successiva est ubi potes initium componendi epistulam introducendo subjectum et contentum/nuntium quod audientibus enviere vis.

<!-- Screenshot unavailable: Editor subjectus et contenti broadcast email in step compositionis -->

Post creationem nuntii, potes cliquare in boton **Send**.

Et ita facile est epistulam ad usum tuorum finialium enviare per fusionem (broadcast feature).

## Epistulae systemicae (System emails)

Epistulae systemicae in Ultimate Multisite sunt illa **notificiae automaticae** quas systemem post actiones certas, sicut inscriptionem, pagamentum, mappam domini, etc., enviat. Hoc epistulam potest editari vel modifiari ex parametris Ultimate Multisite. Etiam cum ea venit instrumentum quod te permittit redi ut settings existentes a alia installatione Ultimate Multisite importes.

### Redactio et Importatio (Resetting & Importing)

Novae versiones Ultimate Multisite, sicut add-ons, occasionaliter et futura registrare epistulas novas.

Ad conflictus et alios quaestionibus praevenire, **nostra nova formae epistulae non addeamus automatico ut System Emails in installatione tua sint**, salis quod crucialia sunt ad correctam functionem belli operationis datae.

Sed super administratores et agentes possunt estas epistulae novae registrata importare per instrumentum importer. Hoc processus novam epistulam systemicae creabit cum contentu et configuratione formae epistulae novae, permittens super adminem facere omnia modificationes quas vult aut e conservare sicut sunt.

#### Quomodo epistulas systemicae importari

Adveniat ad paginam de Setări Ultimate Multisite și merite la tabul **Emails**.

![Tabula Emails in setari Ultimate Multisite ostendens section System Emails](/img/config/settings-emails-tab.png)

Anule, pe bara lateral, butonul **Customize System Emails**.

<!-- Screenshot unavailable: Buton Customize System Emails pe panoul de lateral al System Emails -->

Pe pagina System Emails vei vedea butonul de acțiune **Reset & Import** în partea de sus. Când faci clic pe acel buton, se va deschide fereastra modală import și reset.

![Buton Reset sau Import pe pagina admin System Emails](/img/admin/system-emails-reset-import.png)

Apoi, poți activa opțiunile de Import Email pentru a vedea care emailuri sistem sunt disponibile pentru import.

<!-- Screenshot unavailable: Modalul Reset și Import cu opțiunile de Import Emails extinse -->

#### Resetarea System Emails

În alte cazuri, vei observa că modificările pe care le-ai făcut unui anumit șablon de email nu mai funcționează pentru tine și dorești să îl setezi la **starea sa implicită**.

În astfel de cazuri ai două opțiuni: poți pur și simplu șterge emailul sistem și să îl importe din nou (folosind instrucțiunile de mai sus) - ceea ce va șterge metricile trimiterii și alte lucruri, făcând această metodă cea mai puțin preferată.

Sau poți folosi **Reset & Import tool** pentru a reseta acel șablon de email.

Pentru a reseta un șablon de email, poți urma pașii de mai sus până când ajungi la Reset & Import tool, apoi activează opțiunea **Reset** și selectează emailurile pe care vrei să le setezi înapoi conținutul lor implicit.

<!-- Screenshot unavailable: Modalul Reset și Import cu opțiunile de Reset Emails extinse -->
