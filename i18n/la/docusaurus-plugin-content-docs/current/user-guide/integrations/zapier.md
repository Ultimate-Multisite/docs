---
title: Integratio Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integratio Ultimate Multisite cum Zapier

In uno uitrò, discimus de [Webhooks](webhooks.md) et de modo quo ad application tertiam partes integrari possunt.

Uso webhooks est parum complicatum quia requirit scientiam avangardam in codicibus et captandum payloades. **Zapier** est via quae tibi hoc circumventum dare potest.

Zapier habet integrationem cum plus quam 5000 applicationibus, quae communicationem inter applicationes alios facit easier.

Possuis creare **Triggers** quae quando eventa in network tuo accidunt (e.g. account creatio et trigger events `account_create`) vel **Actions** generare in network tuo reagentes ad eventa externas (e.g. creatio novae membrorum in network Ultimate Multisite tuum).

Dies est possibilis quia **Ultimate Multisite Zapier's triggers** et actions per [REST API](https://developer.ultimatemultisite.com/api/docs/) potestas sunt.

## Quomodo incipere {#how-to-start}

Primum, quaer Ultimate Multisite in lista applicationium Zapier. Alternativam, possuris cliquare in [hanc link](https://zapier.com/apps/wp-ultimo/integrations).

Ad dashboard tuum adere et boton **+** **Create Zap** in laterale sinistro pressare ut novum Zap configurare.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Ad paginam creationis Zapior rediregeris.

In box search type "wp ultimo". Clicare ad eligere optionem versionis **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Post selection applicationis nostrar, eventum disponendum eligas: **New Ultimate Multisite Event**.

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Nunc debemus Zapier accessum ad **network tuum** dare. Clicare in **Sign in** aperiet novam fenestram quae requirit **API credentials**.

![Prompt de inicio de sesión de Zapier para credenciales de API](/img/admin/webhooks-list.png)

Ve a tu panel de administración de red y navega a **Ultimate Multisite > Settings** > **API & Webhooks** y busca la sección de Configuración de API (API Settings).

Selecciona la opción **Enable API** (Habilitar API), ya que es necesaria para que esta conexión funcione.

![Configuración de API y Webhooks con las opciones de Configuración de API y Habilitar API](/img/admin/settings-api-webhooks.png)

Usa el icono **Copy to Clipboard** (Copiar al portapapeles) en los campos API Key y API Secret, y pega esos valores en la pantalla de integración.

En el campo URL, pon tu URL completa de red, incluyendo el protocolo (HTTP o HTTPS).

![Pantalla de integración de Zapier con los campos API Key, Secret y URL](/img/admin/webhooks-list.png)

Haz clic en el botón **Yes, Continue** (Sí, Continuar) para pasar al siguiente paso. Si todo funciona correctamente, ¡deberías ser recibido por tu nueva cuenta conectada! Haz clic en **Continue** (Continuar) para crear un nuevo disparador (trigger).

## Cómo crear un nuevo Trigger (Disparador) {#how-to-create-a-new-trigger}

Ahora que tu cuenta está conectada, puedes ver los eventos disponibles. Elegiremos el evento **payment_received** (pago recibido) para este tutorial.

![Seleccionando el evento payment_received en el trigger de Zapier](/img/admin/webhooks-list.png)

Una vez seleccionado el evento y haces clic en **continue** (continuar), aparecerá un **test step** (paso de prueba).

![Paso de prueba de Zapier para el trigger](/img/admin/webhooks-list.png)

En esta etapa, Zapier probará si tu Zap puede **fetch the specific payload to that event** (obtener la carga útil específica para ese evento). En eventos futuros del mismo tipo, se enviará información con esta misma estructura.

![Prueba de trigger de Zapier completada con el payload](/img/admin/webhooks-list.png)

In nostro tutorial il test è stato **completato con successo** e ha restituito le informazioni di esempio del payload. Queste informazioni saranno utili per guidarci nella creazione delle azioni. Il tuo trigger è ora creato e pronto per essere collegato ad altre applicazioni.

## Come creare Azioni {#how-to-create-actions}

Le Azioni usano informazioni da altri trigger per creare nuove voci nella tua rete.

Nella sezione **creazione di un passo d'azione** sceglierai Ultimate Multisite **Beta** e l'opzione **Crea Elementi su Ultimate Multisite**.

![Creazione di un'azione con Crea Elementi su Ultimate Multisite](/img/admin/webhooks-list.png)

Nel passaggio successivo creerai la tua autenticazione, come abbiamo fatto in **Come iniziare**, oppure selezioni una già creata. In questo tutorial sceglieremo la stessa autenticazione precedentemente creata.

![Selezione dell'autenticazione per l'azione Zapier](/img/admin/webhooks-list.png)

### Configurazione dell'Azione {#setting-up-the-action}

Questo è il **passaggio principale dell'azione** e qui le cose sono un po' diverse. La prima informazione che sceglierai è l'**Elemento**. L'Elemento è il **modello di informazioni** della tua rete, come **Clienti (Customers), Pagamenti (Payments), Siti (Sites), Email**, e altri.

![Scelta del tipo di elemento per l'azione Zapier](/img/admin/webhooks-list.png)

Quando selezioni un elemento, il modulo si **riorganizza per portare i campi richiesti e opzionali** per l'elemento selezionato.

Ad esempio, quando selezioni l'elemento **Cliente (Customer)**, i campi del modulo ti mostreranno tutto il necessario per compilare e creare un nuovo Cliente nella rete.

![Campi dell'elemento Cliente nella configurazione dell'azione Zapier](/img/admin/webhooks-list.png)

Dopo aver compilato tutti i campi contrassegnati come **richiesti** e cliccato su continua, una schermata finale ti mostrerà i campi compilati e quelli che sono rimasti vuoti.

![Test de acción Zapier mostrando campos llenos y vacíos](/img/admin/webhooks-list.png)

Tan pronto como termine tu prueba y sea exitosa, tu acción está configurada. También es importante revisar en tu red si el elemento se creó con la prueba de tu acción.
