---
title: Configuració de l'Agent AI Gratuït
sidebar_position: 22
_i18n_hash: 7b593387e5e7b44903bfd6f0a1ff42ee
---
# Configuració de l'Agent AI Gratis

La pàgina **Configuració → Avançat** de Gratis AI Agent proporciona una configuració de nivell administrador per a les integracions de backend introduïdes en la v1.5.0. Aquesta pàgina documenta els camps de l'**Endpoint de Feedback** i el format que s'espera.

## Accés a la Configuració

1. A l'administració de WordPress, accedeix a **Gratis AI Agent → Configuració**.
2. Fes clic a la pestanya **Avançat**.

## Configuració de l'Endpoint de Feedback

L'endpoint de feedback re}ce}va sol·licituds POST de l'agent AI quan un usuari envia feedback mitjançant el botó de dedit abaix, l'*auto-prompt banner*, o el comodín `/report-issue`.

| Camp | Descripció |
|---|---|
| **Feedback Endpoint URL** | L'URL que re}ce}va les submissións de feedback com a sol·licituds HTTP POST amb un cos JSON. |
| **Feedback API Key** | Un *bearer token* enviat a l'encàfar `Authorization` de cada sol·licitud de feedback. Déu-lo deixar buit si el vostre endpoint no requereix autenticació. |

### Càrrega JSON Esperada

El vostre endpoint de feedback ha de re}ce}var un cos JSON amb almenys els camps següents:

```json
{
  "message_id": "msg_abc123",
  "conversation_id": "conv_xyz789",
  "feedback_text": "La resposta era incorrecta sobre preus.",
  "triage_category": "factual_error"
}
```

Poden existir camps addicionals en la càrrega depenent del context de la conversa.

### Valors de `triage_category`

La capa de triatge (triage) de l'AI assigna un dels valors següents a `triage_category` abans de retransmetre la càrrega:

| Valor | Significat |
|---|---|
| `factual_error` | L'assistència va proporcionar informació factual incorrecta. |
| `unhelpful_answer` | La resposta era tècnicament correcta però no útil. |
| `inappropriate_content` | La resposta contenia contingut que no hauria de mostrar-se als usuaris. |
| `other` | El feedback no coincideix amb una categoria coneguda. |

### Autenticació

Si el vostre endpoint requereix autenticació, configureu el camp **Feedback API Key** amb el vostre *bearer token*. L'agent envia:

```
Authorization: Bearer <your-api-key>
```

Si el camp **Feedback API Key** està buit, no s'envia cap encàfar `Authorization`.

### Desactivació de la Recollida de Feedback

Deixeu els camps **Feedback Endpoint URL** i **Feedback API Key** buits. El botó de dedit abaix i la UI de feedback es mantenen visibles per als usuaris, però les submissións no es retransmeten a cap servei extern.

## Clau API de Brave Search

També a la pestanya **Avançat**, el camp **Brave Search API Key** activa la capacitat de [Cerca a Internet](../configuration/internet-search).

| Camp | Descripció |
|---|---|
| **Brave Search API Key** | La vostra clau API del *dashboard* de desenvolupador de Brave Search. És imprescindible per activar la cerca a Internet a l'assistència AI. |

L'etiqueta del camp inclou un enllaç clicable a la pàgina de registre de Brave Search API. Déu-lo deixar buit per desactivar la cerca a Internet.

Veure [Cerca a Internet](../configuration/internet-search) per a la documentació per a usuaris finals sobre aquesta funcionalitat.

## Banderes de Funcionalitat (Feature Flags)

També introduïdes en la v1.9.0, la pestanya **Configuració → Banderes de Funcionalitat** proporciona interruptors per a funcionalitats opcionals. Cada bandera es pot activar o desactivar a nivell de xarxa; per ara no hi ha sobreescritura per site.

### Accés a les Banderes de Funcionalitat

1. A l'administració de WordPress, accedeix a **Gratis AI Agent → Configuració**.
2. Fes clic a la pestanya **Banderes de Funcionalitat**.

### Banderes de Control d'Accés

| Bandera | Default | Descripció |
|---|---|---|
| **Restrict to Administrators** | Off | Quan està activada, només els usuaris amb el rol `administrator` poden obrir el panell de xat de l'AI Agent. Tots els altres rols veuen un missatge de "Contactegeu amb el vostre administrador". |
| **Restrict to Network Admins** | Off | Quan està activada en una xarxa multisite, només els Super Admins poden utilitzar l'agent. Els admins de site individuals estan bloquejats. Prepondera sobre "Restrict to Administrators" si estan actives ambdues. |
| **Allow Subscriber Access** | Off | Quan està activada, els usuaris amb el rol `subscriber` poden utilitzar la interfície de xat, però estan limitats a habilitats de només lectura (sense crear articles ni canviar configuracions). |
| **Disable for Non-Members** | Off | S'integra amb l'estat de membres de Ultimate Multisite. Quan està activada, el xat es barra per als sites que no tenen una membresia activa. |

### Banderes de Marcatge (Branding)

| Bandera | Default | Descripció |
|---|---|---|
| **Hide "Powered by Gratis AI Agent" Footer** | Off | Elimina la línia d'atribució de marcatge mostrada a la part inferior del widget de xat. Recomanat per implementacions *white-label*. |
| **Custom Agent Name** | *(blank)* | Subministra l'etiqueta predeterminada "Gratis AI Agent" a l'encàfar de xat i al menú d'administració amb el nom del vostre producte. Déu-lo deixar buit per utilitzar el predeterminat. |
| **Hide Agent Picker** | Off | Quan està activada, els usuaris no poden canviar entre els cinc agents integrats. L'agent actual es fixa al que es configura com a predeterminat en Configuració → General. |
| **Use Site Icon as Chat Avatar** | Off | Subministra l'ícone AI predeterminat a l'encàfar del widget de xat amb l'ícone del site de WordPress (configurat a Aparença → Personalitzar → Identitat del Site). |

### Aplicar Canvis

Fes clic a **Save Settings** després de commutar qualsevol bandera. Els canvis prevenen immediatament; no és necessari barrejar la *cache* ni reactivar el *plugin*.
