---
title: Feedback i informes d'incidentes de clients
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Feedback i Reportatge de Problemes de l'Usuari

Gratis AI Agent v1.5.0 incorpora un sistema intern de feedback i reportatge de problemes que permet als usuaris finals marcar respostes que no són útils i reportar problemes directament des de l'interfecció de xat. Aquest sistema inclou la gestió del consentiment, un comodín de reportatge automatitzat i un triatge assistit per IA a la capa *backend*.

## Botó de Dits Abaix

Cada missatge enviat pel assistent d'IA mostra un botó de **dits abaix** (👎). Quan un usuari hi fa clic, pot marcar una resposta com a no útil o incorrecta.

- El botó apareix al posar el ratolí sobre cada missatge de l'assistent.
- Fegir-hi clic s'obre el **Modal de Consentiment de Feedback**.
- El feedback es relaciona amb el fil de conversa i el missatge específic.

## Modal de Consentiment de Feedback

Quan un usuari fa clic al botó de dits abaix, apareix un modal de consentiment abans de enviar qualsevol dades. El modal:

- Explica quina informació es recollirà (excerpt de conversa, context del navegador).
- Sol·licita a l'usuari que confirmi el seu consentiment per compartir aquestes dades.
- Proporciona un camp de text lliure perquè l'usuari describi què va fallar.
- Ofereix una opció de **Cancel·lar** per tancar sense enviar.

No es registra cap feedback fins que l'usuari ho confirma explícitament.

## Banner de Feedback d'Auto-Prompt

A la finalització d'una conversa, l'assistent pot mostrar un **banner de feedback d'auto-prompt** — un missatge no intrusiu que pregunta si la sessió va ser útil.

Aquest banner apareix automàticament basat en la longitud i els heurístiques de resultat de la conversa. Enllaça al mateix flux de feedback que el botó de dits abaix. Els usuaris poden tancar el banner sense proporcionar feedback.

## Comandament Slash /report-issue

Els usuaris poden activar el flux de feedback directament escrivint `/report-issue` a la caixa d'entrada del xat. Aquest comodín:

- Obre el Modal de Consentiment de Feedback immediatament.
- Pre-rellente el camp de descripció amb context sobre la conversa actual.
- Permet als usuaris afegir detalls addicionals abans de enviar.

El comodín `/report-issue` està disponible en tots els modes de xat (inline, widget flotant, pantalla completa).

## Triage Assistit per IA

El feedback enviat es dirigeix a una capa de triatge d'IA que:

- Categoritza el report (error fiduciari, resposta no útil, contingut inapropiat, etc.).
- Adjunta metadades de conversa rellevants.
- Reenvia el resum del triatge a l'**Endpoint de Feedback** configurat (veure [Settings > Advanced](#settings-advanced)).

Això redueix el temps de revisió manual, ja que s'identifiquen els problemes més crítics de manera prioritària.

## Settings > Advanced {#settings-advanced}

Per activar el *backend* de feedback, configura els següents camps sota **Gratis AI Agent → Settings → Advanced**:

| Camp | Descripció |
|---|---|
| **Feedback Endpoint URL** | L'URL que rep les sol·liciteves POST amb les càrreigues de feedback (JSON). |
| **Feedback API Key** | Bearer token enviat a l'encàfar `Authorization` per autenticar les enviamentes de feedback. |

Deixa ambdós camps buids per deshabilitar la recollida de feedback. Els botons de feedback individuals es mantenen visibles per als usuaris, però els enviamentes no s'reenviaran.

:::tip
L'endpoint de feedback ha de acceptar un *body* JSON amb almenys els camps `message_id`, `conversation_id`, `feedback_text` i `triage_category`. Consulta la documentació del teu proveïdor d'endpoint per saber el esquema esperat.
:::
