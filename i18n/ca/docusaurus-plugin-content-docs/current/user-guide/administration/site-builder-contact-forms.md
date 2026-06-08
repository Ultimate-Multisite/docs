---
title: Forms de Contacte per a Site Builder
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formularis de Contacte amb Site Builder

Superdav AI Agent v1.10.0 afegeix la possibilitat de crear formularis de contacte directament des de l'interfície de xat utilitzant l'agent Site Builder. Això et permet afegir formularis de contacte completament funcionals a qualsevol pàgina sense haver de sortir del xat.

## Panlló general

La possibilitat de formularis de contacte de Site Builder (`create_contact_form`) detecta automàticament el plugin de formularis que tens instal·lat i crea un formulari de contacte utilitzant les capacitats naturals d'aquest plugin. Els plugins de formularis suportats inclouen:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

L'assistència selecciona automàticament el millor plugin de formularis disponible al teu lloc i genera un formulari de contacte adaptat a aquest plugin.

## Crear un formulari de contacte

Per crear un formulari de contacte utilitzant Site Builder:

1. Obre el panell de xat de **Gratis AI Agent** a l'administració de WordPress.
2. Canvia a l'agent **Site Builder** fent clic a l'ícone de l'agent a l'encabezament del xat.
3. Descriu el formulari de contacte que vols crear. Per exemple:

   > "Afegeix un formulari de contacte a la pàgina de Contacte amb camps per a nom, correu electrònic, missatge i número de telèfon."

   O simplement:

   > "Crea un formulari de contacte per a la pàgina de Contacte."

4. Site Builder generarà el formulari de contacte i et retornarà un shortcode preparat per incorporar.

## Utilitzar el shortcode generat

Després que Site Builder crei el formulari de contacte, et retorna un shortcode (per exemple, `[contact-form-7 id="123"]`). Pots:

1. **Incorporarlo en una pàgina o publicació** — Copia el shortcode i hi cola a qualsevol pàgina o publicació utilitzant l'editor de blocs o l'editor clàssic.
2. **Afegir-lo mitjançant Site Builder** — Pedeu a Site Builder que afegeixi el formulari a una pàgina específica automàticament:

   > "Afegeix el formulari de contacte a la pàgina de Contacte."

3. **Utilitzar-lo en una plantilla** — Si ets còmode amb PHP, pots afegir el shortcode a un fitxer de plantilla del tema.

## Personalitzar el formulari de contacte

Després que Site Builder crei el formulari de contacte, pots personalitzar-lo encara més:

### Mitjançant l'interfície de xat

Pedeu a Site Builder que modifiqui el formulari:

> "Actualitza el formulari de contacte per afegir un camp de subjecte i fer que el camp de missatge sigui obligatori."

Site Builder actualitzarà el formulari i et retornarà el shortcode actualitzat.

### Mitjançant l'interfície d'administració del plugin de formularis

També pots personalitzar el formulari directament a les configuracions del teu plugin de formularis:

1. Navega a **Contact Form 7** (o el teu plugin de formularis instal·lat) a l'administració de WordPress.
2. Troba el formulari creat per Site Builder.
3. Edita els camps del formulari, les regles de validació i les notificacions per correu electrònic segons necessitat.

## Plugins de formularis i compatibilitat

Site Builder detecta automàticament quin plugin de formularis tens instal·lat al teu lloc i l'utilitza per crear el formulari de contacte. Si hi ha múltiples plugins de formularis instal·lats, Site Builder els prioritza en aquest ordre:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Si cap d'aquests plugins estan instal·lats, Site Builder recomanarà instal·lar-ne un abans de crear el formulari de contacte.

## Notificacions per correu electrònic

Els formularis de contacte creats per Site Builder es configuren per enviar notificacions per correu electrònic a l'administrador del lloc per defecte. Pots personalitzar l'adreça de correu electrònic del destinatari i el missatge de notificació:

1. Navega a l'interfície d'administració del teu plugin de formularis.
2. Troba el formulari creat per Site Builder.
3. Edita les configuracions de notificació per correu electrònic.

Per a instruccions detallades, consulta la documentació del teu plugin de formularis:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Casos d'ús d'exemple

### Formulario de contacte senzill

> "Crea un formulari de contacte senzill amb camps per a nom, correu electrònic i missatge."

### Formulario de múltiples passos

> "Crea un formulari de contacte amb un primer pas per a la informació de contacte i un segon pas per al missatge i el mètode de contacte preferit."

### Formulario amb lògica condicional

> "Crea un formulari de contacte que mostri camps diferents basat en la selecció de l'usuari en un desplegable."

### Formulario amb caricatura de fitxer

> "Crea un formulari de contacte que permeti als usuaris carregar un fitxer o un adjunt."

:::note
La creació de formularis de contacte està disponible a partir de Superdav AI Agent v1.10.0. L'agent Site Builder ha de ser actiu per utilitzar aquesta possibilitat.
:::
