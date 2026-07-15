---
title: Integración Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integrar Ultimate Multisite con Zapier

Nesta unha das கட்டுரas discutimos os [Webhooks](webhooks.md) e como se poden usar para integrar coas aplicacións de terceiros.

Usar webhooks é un pouco complicado porque requiere conocimientos avanzados de codificación e capturar payloads. Usar **Zapier** é unha forma de evitar esa complicación.

Zapier ten integración con máis de 5000+ app, o que facilita a comunicación entre diferentes aplicacións.

Podrás crear **Triggers** (disparadores) que se activan cando ocorren eventos na tua rede (por exemplo, se se crea unha conta e activa o evento `account_create`) ou generar **Actions** (accións) na tua rede reaxando a eventos externos (por exemplo, crear unha nova admisión de membro na pulsa Ultimate Multisite).

Isto é posible porque os **triggers** e as **actions** de Zapier para Ultimate Multisite se basan na [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Como empezar {#how-to-start}

Primeiro, busca Ultimate Multisite na lista de aplicacións de Zapier. Alternativamente, podes clicar en [este enlace](https://zapier.com/apps/wp-ultimo/integrations).

Ve ao teu dashboard e pulsa o botón **+** **Create Zap** (Crear Zap) na barra lateral esquerda para configurar un novo Zap.

![Zapier dashboard con Create Zap button](/img/admin/webhooks-list.png)

Serás redirixido á páxina de creación do Zap.

No cuadro de búsqueda, escribe "wp ultimo". Clica para seleccionar a opción **Beta**.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Tras seleccionar a nosa aplicación, escolhe o evento disponible: **New Ultimate Multisite Event** (Novo Evento Ultimate Multisite).

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Agora necesitamos dar acceso a Zapier á **tua rede**. Clicando en **Sign in** (Iniciar sesión), se abrirá unha nova ventán que requerará as **API credentials** (crendenciais de API).

![Prompt de inicio de sesión de Zapier para credenciais de API](/img/admin/webhooks-list.png)

Vaya ao teu painel de administrador de rede e navega a **Ultimate Multisite > Settings** > **API & Webhooks** e procura a sección de Configuración de API (API Settings).

Seleita a opção **Enable API** (Habilitar API), pois é necesaria para que esta conexión funcione.

![Configurações de API e Webhooks com as opções de Configuração de API e Habilitar API](/img/admin/settings-api-webhooks.png)

Usa o ícone **Copy to Clipboard** (Copiar para a área de transferência) nos campos API Key e API Secret e cola esses valores na tela de integração.

No campo URL, coloca a URL completa da tua rede, incluindo o protocolo (HTTP ou HTTPS).

![Tela de integração Zapier com os campos API Key, Secret e URL](/img/admin/webhooks-list.png)

Clica no botão **Yes, Continue** (Sim, Continuar) para avançar para o próximo passo. Se tudo correr bem, serás recebido pela tua nova conta conectada! Clica em **Continue** (Continuar) para criar um novo gatilho (trigger).

## Como criar um novo Trigger {#how-to-create-a-new-trigger}

Agora que a tua conta está conectada, podes ver os eventos disponíveis. Escolhemos o evento **payment_received** (pagamento recebido) para este tutorial.

![Seleção do evento payment_received no trigger do Zapier](/img/admin/webhooks-list.png)

Depois de seleccionar o evento e clica em **continue**, aparecerá um **test step** (passo de teste).

![Passo de teste do Zapier para o trigger](/img/admin/webhooks-list.png)

Nesta fase, o Zapier irá testar se o teu Zap consegue **fetch the specific payload to that event** (recuperar a carga útil específica para esse evento). Em eventos futuros do mesmo tipo, será enviada informação com esta mesma estrutura.

![Teste de trigger do Zapier concluído com sucesso com a payload](/img/admin/webhooks-list.png)

No noso tutorial o teste foi **concluido con éxito** e devolveu a información de exemplo do payload. Esta información de exemplo será útil para nos guiar ao criar actions. O teu trigger está agora criado e pronto para ser conectado a outras applications.

## Como crear Actions {#how-to-create-actions}

As Actions usam informação de outros triggers para criar novas entradas na tua rede.

Na **criação de um passo de action**, vais escolher o Ultimate Multisite **Beta** e a opção **Create Items on Ultimate Multisite**.

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

No próximo paso, vais criar a tua autenticação, tal como fizemos no **How to start**, ou selecionar unha autenticación criada. Neste tutorial, vamos elegir a mesma autenticación que criamos anteriormente.

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Configurar a Action {#setting-up-the-action}

Este é o **passo principal da action** e aquí as cousas son un pouco diferentes. A primeira informação que vais elegir é o **Item**. O Item é o **modelo de información** da tua rede, como **Customers (Clientes), Payments (Pagamentos), Sites (Sitios), Emails**, e outros.

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

Ao seleccionar un item, o formulario **reorganiza para traer os campos obrigatórios e opcionais** para o item seleccionado.

Por exemplo, ao seleccionar o item **Customer (Cliente)**, os campos do formulario traerán todo o que é necesario para preencher e crear un novo Customer na rede.

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

Depois de preencher todos os campos marcados como **required (obrigatórios)** e clicar en continue, unha última pantalla mostrará os campos preenchidos e os campos que quedaron sem preencher.

![Test de acción Zapier mostrando campos preenchidos e não preenchidos](/img/admin/webhooks-list.png)

Assim que o seu teste terminar com sucesso, a sua ação está configurada. É também importante verificar na sua rede se o item foi criado com o teste da sua ação.
