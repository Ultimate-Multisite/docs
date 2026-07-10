---
title: Configuració de Gratis AI Agent
sidebar_position: 22
_i18n_hash: 06c2f7052f5b1a44d525d8446a5403a7
---
# Configuració de Gratis AI Agent {#gratis-ai-agent-settings}

La pantalla **Settings → Advanced** de Gratis AI Agent proporciona configuració de nivell d’administrador per a integracions de backend. Aquesta pàgina documenta el reenviament de feedback, les claus de proveïdors de cerca, la configuració del servei Superdav gestionat, els controls de Google Calendar, la configuració d'SMS de TextBee i les banderes de funcionalitats a tota la xarxa.

## Accés a la configuració {#accessing-settings}

1. A l’administració de WordPress, ves a **Gratis AI Agent → Settings**.
2. Fes clic a la pestanya **Advanced**.

## Configuració de l’endpoint de feedback {#feedback-endpoint-configuration}

L’endpoint de feedback rep sol·licituds POST de l’agent d’AI sempre que un usuari envia feedback mitjançant el botó de polze avall, el bàner d’indicació automàtica o l’ordre `/report-issue`.

| Camp | Descripció |
|---|---|
| **Feedback Endpoint URL** | L’URL que rep enviaments de feedback com a sol·licituds HTTP POST amb un cos JSON. |
| **Feedback API Key** | Un bearer token enviat a l’`Authorization` header de cada sol·licitud de feedback. Deixa-ho en blanc si el teu endpoint no requereix autenticació. |

### Payload JSON esperat {#expected-json-payload}

El teu endpoint de feedback ha d’acceptar un cos JSON amb almenys els camps següents:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "The answer was incorrect about pricing.",
  "triage_category": "factual_error"
}
```

Pot haver-hi camps addicionals al payload en funció del context de la conversa.

### Valors de `triage_category` {#triagecategory-values}

La capa de triatge d’AI assigna un dels valors següents a `triage_category` abans de reenviar el payload:

| Valor | Significat |
|---|---|
| `factual_error` | L’assistent ha proporcionat informació factual incorrecta. |
| `unhelpful_answer` | La resposta era tècnicament correcta però no útil. |
| `inappropriate_content` | La resposta contenia contingut que no s’hauria de mostrar als usuaris. |
| `other` | El feedback no coincidia amb cap categoria coneguda. |

### Autenticació {#authentication}

Si el teu endpoint requereix autenticació, estableix el camp **Feedback API Key** al teu bearer token. L’agent envia:

```
Authorization: Bearer <your-api-key>
```

Si el camp **Feedback API Key** és buit, no s’envia cap `Authorization` header.

### Desactivació de la recollida de feedback {#disabling-feedback-collection}

Deixa en blanc tant el camp **Feedback Endpoint URL** com el camp **Feedback API Key**. El botó de polze avall i la interfície de feedback continuen visibles per als usuaris, però els enviaments no es reenvien a cap servei extern.

## Brave Search API Key {#brave-search-api-key}

També a la pestanya **Advanced**, el camp **Brave Search API Key** habilita la capacitat [Cerca a Internet](../configuration/internet-search).

| Camp | Descripció |
|---|---|
| **Brave Search API Key** | La teva clau d’API del dashboard per a desenvolupadors de Brave Search. Necessària per habilitar la cerca a Internet a l’assistent d’AI. |

L’etiqueta del camp inclou un enllaç clicable a la pàgina de registre de l’API de Brave Search. Deixa-ho en blanc per desactivar la cerca a Internet.

Consulta [Cerca a Internet](../configuration/internet-search) per a la documentació d’usuari final sobre aquesta funcionalitat.

## Servei Superdav gestionat {#managed-superdav-service}

Superdav AI Agent v1.18.0 afegeix endpoints de servei Superdav gestionat i aprovisionament automàtic de connexions per als llocs compatibles. Utilitza aquests controls quan el teu lloc s’hauria de connectar al proveïdor allotjat en lloc d’un endpoint de servei configurat manualment.

| Camp | Descripció |
|---|---|
| **Managed Superdav Service** | Habilita la connexió al servei Superdav allotjat per als llocs compatibles. |
| **Provision Connection** | Inicia l’aprovisionament automàtic de l’endpoint i de les credencials. Utilitza-ho després de confirmar que el lloc hauria d’utilitzar el proveïdor gestionat. |
| **Service Endpoint / Connection Status** | Mostra l’endpoint actual o l’estat de la connexió després de l’aprovisionament. |

Després de l’aprovisionament, desa la configuració i verifica l’estat de la connexió abans de dependre de fluxos de treball de servei gestionat. Si l’aprovisionament falla, revisa les indicacions de reintent mostrades i confirma que el lloc té permís per utilitzar el proveïdor allotjat.

## Configuració de Google Calendar {#google-calendar-configuration}

Quan les funcionalitats de calendari de Superdav AI Agent v1.18.0 estan habilitades, l’agent pot llegir calendaris configurats i detalls d’esdeveniments. Les eines de calendari estan orientades a la lectura i són útils per a recordatoris sensibles a l’horari, seguiment d’assistents i coincidència de contactes.

| Camp | Descripció |
|---|---|
| **Google Calendar Credentials** | Emmagatzema les credencials o la connexió de token necessària per llegir dades de calendari. |
| **Calendar Selection** | Limita quins calendaris configurats pot inspeccionar l’agent. |
| **Calendar Connection Status** | Confirma si les credencials actuals poden llegir calendaris i esdeveniments. |

Mantén les credencials de calendari limitades als calendaris que l’agent necessita. Torna a connectar o rota les credencials si l’estat indica un token caducat.

## Notificacions SMS de TextBee {#textbee-sms-notifications}

Superdav AI Agent v1.18.0 afegeix TextBee com a proveïdor d'SMS per als fluxos de treball de notificacions configurats. Les notificacions SMS s’han de combinar amb portes d’aprovació humana per a missatges sensibles o adreçats als usuaris.

| Camp | Descripció |
|---|---|
| **TextBee API Key** | Autentica les sol·licituds al proveïdor d'SMS TextBee. |
| **TextBee Device / Sender** | Selecciona el remitent o dispositiu de TextBee utilitzat per als missatges sortints, quan el proveïdor ho requereix. |
| **SMS Notifications Enabled** | Permet que els fluxos de treball aprovats enviïn notificacions de missatges de text. Deixa-ho desactivat per evitar enviaments d'SMS. |

Envia un missatge de prova només a un número propietat d’un administrador i després confirma el comportament de les portes d’aprovació abans d’habilitar recordatoris programats o adreçats als assistents.

## Banderes de funcionalitats {#feature-flags}

També introduïda a la v1.9.0, la pestanya **Settings → Feature Flags** proporciona commutadors per a funcionalitat opcional. Cada bandera està habilitada o deshabilitada a tota la xarxa; en aquest moment no hi ha cap substitució per lloc.

### Accés a les banderes de funcionalitats {#accessing-feature-flags}

1. A l’administració de WordPress, ves a **Gratis AI Agent → Settings**.
2. Fes clic a la pestanya **Feature Flags**.

### Banderes de control d’accés {#access-control-flags}

| Indicador | Predeterminat | Descripció |
|---|---|---|
| **Restringeix als administradors** | Desactivat | Quan està activat, només els usuaris amb el rol `administrator` poden obrir el tauler de xat de l’AI Agent. Tots els altres rols veuen un missatge de "Contacteu amb el vostre administrador". |
| **Restringeix als administradors de xarxa** | Desactivat | Quan està activat en una xarxa multisite, només els Super Admins poden utilitzar l’agent. Els administradors de llocs individuals queden bloquejats. Té preferència sobre "Restringeix als administradors" si tots dos estan activats. |
| **Permet l’accés dels subscriptors** | Desactivat | Quan està activat, els usuaris amb el rol `subscriber` poden utilitzar la interfície de xat, però estan limitats a capacitats de només lectura (sense creació d’entrades ni canvis de configuració). |
| **Desactiva per a no membres** | Desactivat | S’integra amb l’estat de membresia d’Ultimate Multisite. Quan està activat, el xat s’oculta per als llocs que no tenen una membresia activa. |

### Indicadors de marca {#branding-flags}

| Indicador | Predeterminat | Descripció |
|---|---|---|
| **Amaga el peu de pàgina "Powered by Gratis AI Agent"** | Desactivat | Elimina la línia d’atribució de marca que es mostra a la part inferior del giny de xat. Recomanat per a desplegaments de marca blanca. |
| **Nom d’agent personalitzat** | *(en blanc)* | Substitueix l’etiqueta predeterminada "Gratis AI Agent" a la capçalera del xat i al menú d’administració pel vostre propi nom de producte. Deixeu-ho en blanc per utilitzar el valor predeterminat. |
| **Amaga el selector d’agents** | Desactivat | Quan està activat, els usuaris no poden canviar entre els cinc agents integrats. L’agent actual queda fixat al que estigui configurat com a predeterminat a Configuració → General. |
| **Utilitza la icona del lloc com a avatar del xat** | Desactivat | Substitueix la icona d’AI predeterminada a la capçalera del giny de xat per la icona del lloc WordPress (definida a Aparença → Personalitza → Identitat del lloc). |

### Indicadors de seguretat d’automatització {#automation-safety-flags}

Superdav AI Agent v1.18.0 introdueix portes d’aprovació humana i registres de recordatoris per a execucions d’automatització més segures. Aquests controls poden aparèixer als indicadors de funcionalitat o a la configuració avançada d’automatització, segons el paquet instal·lat.

| Indicador | Predeterminat | Descripció |
|---|---|---|
| **Requereix aprovació humana** | Recomanat activat | Posa en pausa les automatitzacions sensibles fins que un usuari autoritzat revisi i confirmi l’acció proposada. |
| **Desduplicació de recordatoris** | Activat | Registra els recordatoris enviats perquè els reintents o les execucions programades no enviïn notificacions duplicades. |
| **Activa les eines de calendari** | Desactivat fins que es configuri | Permet a l’agent llegir calendaris i esdeveniments de Google configurats. |
| **Activa les notificacions SMS** | Desactivat fins que es configuri | Permet que els fluxos de treball aprovats enviïn notificacions SMS de TextBee després que es desin les credencials. |

### Aplicació dels canvis {#applying-changes}

Feu clic a **Desa la configuració** després d’activar o desactivar qualsevol indicador. Els canvis tenen efecte immediatament — no cal buidar la memòria cau ni reactivar el plugin.
