---
title: Integració amb Zapier
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Integració d'Ultimate Multisite amb Zapier {#integrating-ultimate-multisite-with-zapier}

En un dels articles, vam parlar de [Webhooks](webhooks.md) i de com es poden utilitzar per integrar-se amb aplicacions de tercers.

Fer servir webhooks és una mica complicat, ja que requereix coneixements avançats de programació i de captura de payloads. Fer servir **Zapier** és una manera d'evitar-ho.

Zapier té integració amb més de 5000 aplicacions, cosa que facilita la comunicació entre diferents aplicacions.

Pots crear **Triggers** que s'activaran quan passin esdeveniments a la teva xarxa (per exemple, es crea un compte i s'activa l'esdeveniment account_create) o generar **Actions** a la teva xarxa reaccionant a esdeveniments externs (per exemple, crear una nova pertinença de compte a la teva xarxa Ultimate Multisite).

Això és possible perquè **els triggers de Ultimate Multisite Zapier** i les actions funcionen amb la [REST API](https://developer.ultimatemultisite.com/api/docs/).

## Com començar {#how-to-start}

Primer, cerca Ultimate Multisite a la llista d'aplicacions de Zapier. Com a alternativa, pots fer clic a [aquest enllaç](https://zapier.com/apps/wp-ultimo/integrations).

Ves al teu Dashboard i prem el botó **+** **Create Zap** de la barra lateral esquerra per configurar un Zap nou.

![Dashboard de Zapier amb el botó Create Zap](/img/admin/webhooks-list.png)

Se't redirigirà a la pàgina de creació del Zap.

Al quadre de cerca, escriu "wp ultimo". Fes clic per triar l'opció de versió **Beta**.

![Cerca de WP Ultimo a la llista d'aplicacions de Zapier](/img/admin/webhooks-list.png)

Després de seleccionar la nostra aplicació, tria l'esdeveniment disponible: **New Ultimate Multisite Event**.

![Selecció del trigger New Ultimate Multisite Event](/img/admin/webhooks-list.png)

Ara hem de donar a Zapier accés a **la teva xarxa**. En fer clic a **Sign in**, s'obrirà una finestra nova que demanarà les **credencials de l'API**.

![Sol·licitud de Sign in de Zapier per a les credencials de l'API](/img/admin/webhooks-list.png)

Ves al tauler d'administració de la teva xarxa i navega a **Ultimate Multisite > Settings** > **API & Webhooks** i busca la secció de configuració de l'API.

Selecciona l'opció **Enable API**, ja que és necessària perquè aquesta connexió funcioni.

![Configuració d'API and Webhooks amb les opcions API Settings i Enable API](/img/admin/settings-api-webhooks.png)

Fes servir la icona **Copy to Clipboard** als camps API Key i API Secret i enganxa aquests valors a la pantalla d'integració.

Al camp URL, posa l'URL completa de la teva xarxa, inclòs el protocol (HTTP o HTTPS).

![Pantalla d'integració de Zapier amb els camps API Key, Secret i URL](/img/admin/webhooks-list.png)

Fes clic al botó **Yes, Continue** per passar al pas següent. Si tot funciona correctament, se't donarà la benvinguda amb el teu nou compte connectat! Fes clic a **Continue** per crear un trigger nou.

## Com crear un Trigger nou {#how-to-create-a-new-trigger}

Ara que el teu compte està connectat, pots veure els esdeveniments disponibles. Triem l'esdeveniment **payment_received** per a aquest tutorial.

![Selecció de l'esdeveniment payment_received al trigger de Zapier](/img/admin/webhooks-list.png)

Un cop seleccionat l'esdeveniment i després de fer clic a **continue** , apareixerà un **pas de prova**.

![Pas de prova de Zapier per al trigger](/img/admin/webhooks-list.png)

En aquesta fase, Zapier provarà si el teu Zap pot **obtenir el payload específic per a aquest esdeveniment**. En esdeveniments futurs del mateix tipus, s'enviarà informació amb aquesta mateixa estructura.

![Prova del trigger de Zapier completada correctament amb el payload](/img/admin/webhooks-list.png)

Al nostre tutorial, la prova es va **completar correctament** i va retornar la informació d'exemple del payload. Aquesta informació d'exemple serà útil per guiar-nos mentre creem actions. El teu trigger ja està creat i a punt per connectar-se a altres aplicacions.

## Com crear Actions {#how-to-create-actions}

Les actions fan servir informació d'altres triggers per crear noves entrades a la teva xarxa.

Al **pas de creació d'una action**, triaràs la **Beta** d'Ultimate Multisite i l'opció **Create Items on Ultimate Multisite**.

![Creació d'una action amb Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

Al pas següent, crearàs la teva autenticació, igual que hem fet a **Com començar** , o seleccionaràs una autenticació creada. En aquest tutorial triarem la mateixa autenticació creada anteriorment.

![Selecció de l'autenticació per a l'action de Zapier](/img/admin/webhooks-list.png)

### Configuració de l'Action {#setting-up-the-action}

Aquest és el **pas principal de l'action** i aquí les coses són una mica diferents. La primera informació que triaràs és l'**Item**. Item és el **model d'informació** de la teva xarxa, com ara **Customers, Payments, Sites, Emails** i altres.

![Tria del tipus d'Item per a l'action de Zapier](/img/admin/webhooks-list.png)

Quan selecciones un item, el formulari es **reorganitzarà per mostrar els camps obligatoris i opcionals** de l'item seleccionat.

Per exemple, quan seleccionis l'item **Customer** , els camps del formulari mostraran tot el que cal emplenar per crear un Customer nou a la xarxa.

![Camps de l'item Customer a la configuració de l'action de Zapier](/img/admin/webhooks-list.png)

Després d'emplenar tots els camps marcats com a **obligatoris** i fer clic a continuar, una última pantalla et mostrarà els camps emplenats i els camps que s'han deixat sense emplenar.

![Prova de l'action de Zapier que mostra els camps emplenats i sense emplenar](/img/admin/webhooks-list.png)

Tan bon punt la prova es completi correctament, l'action estarà configurada. També és important comprovar a la teva xarxa si l'item s'ha creat amb la prova de la teva action.
