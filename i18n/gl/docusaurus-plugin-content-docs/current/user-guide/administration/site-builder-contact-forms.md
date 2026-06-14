---
title: Formularios de contacto del constructor de sitios
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Formularios de contacto del constructor de sitios

Superdav AI Agent v1.10.0 añade a capacidade de crear formularios de contacto directamente desde la interfaz de chat usando el agente Site Builder. Isto permite que adicione formularios de contacto totalmente funcionais a cualquier página sem sair do chat.

## Visión geral

A capacidad de formulario de contacto do Site Builder (`create_contact_form`) detecta automáticamente o plugin de formulario instalado e crea un formulario de contacto usando as capacidades nativas daquele plugin. Os plugins de formulario soportados son:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

O asistente selecciona automáticamente o mejor plugin de formulario dispoñible no seu sitio e genera un formulario de contacto adaptado a ese plugin.

## Creación de un formulario de contacto

Para crear un formulario de contacto usando o Site Builder:

1. Abra o panel de chat do **Gratis AI Agent** no admin de WordPress.
2. Mude para o agente **Site Builder** facendo clic no ícone do agente no cabeçalho do chat.
3. Descreva o formulario de contacto que quere crear. Por exemplo:

   > "Adicionar un formulario de contacto á página de Contacto con campos para nome, email, mensagem e número de teléfono."

   Ou simplemente:

   > "Crear un formulario de contacto para a página de Contacto."

4. O Site Builder generará o formulario de contacto e devolverá un shortcode listo para incorporar.

## Uso do shortcode generado

Depois de o Site Builder crear o formulario de contacto, devuelve un shortcode (por exemplo, `[contact-form-7 id="123"]`). Pode:

1. **Incorporalo nunha página ou post** — Copie o shortcode e cole-o nunha página ou post usando o block editor ou o editor clásico.
2. **Admdi xá pollem Site Builder** — Pida ao Site Builder que adicione o formulario a unha página específica automáticamente:

   > "Adicionar o formulario de contacto á página de Contacto."

3. **Use na plantilla** — Se te sentes confortável con PHP, podes añadir o shortcode a un archivo de plantilla do tema.

## Personalizar o Formulário de Contacto

Depois de que o Site Builder crie o formulario de contacto, podes personalizalo máis:

### Via a Interface de Chat

Pide ao Site Builder que modifique o formulario:

> "Actualiza o formulario de contacto para añadir un campo de assunto e que o campo da mensagem sea obrigatório."

O Site Builder actualizará o formulario e devolverá o shortcode actualizado.

### Via a Interface de Administración do Plugin de Formularios

Tamén podes personalizar o formulario directamente nas configuración do teu plugin de formularios:

1. Ve a **Contact Form 7** (ou ao teu plugin de formularios instalado) na administración de WordPress.
2. Encontra o formulario criado polo Site Builder.
3. Edita os campos do formulario, as regras de validación e as notificacións de email como necesites.

## Plugins de Formularios e Compatibilidade

O Site Builder detecta automáticamente que plugin de formularios está instalado no teu sitio e usa ese para crear o formulario de contacto. Se hai instalados varios plugins de formularios, o Site Builder prioriza os seguintes na seguinte ordem:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

Se nenhum destes plugins estebar instalado, o Site Builder recomendará instalar uno antes de crear o formulario de contacto.

## Notificacións de Email

Os formularios de contacto creados polo Site Builder están configurados para enviar notificacións de email ao administrador do sitio por defecto. Podes personalizar a dirección de email do destinatario e a mensagem da notificación:

1. Ve á interface de administración do teu plugin de formularios.
2. Encontra o formulario criado polo Site Builder.
3. Edita as configuración das notificacións de email.

Para instrucións detalladas, refiña a documentación do teu plugin de formularios:

- [Notificaciones por Email de Contact Form 7](https://contactform7.com/docs/)
- [Notificaciones por Email de WPForms](https://wpforms.com/docs/)
- [Notificaciones por Email de Fluent Forms](https://fluentforms.com/docs/)
- [Notificaciones por Email de Gravity Forms](https://docs.gravityforms.com/)

## Casos de Uso de Ejemplo

### Formulario de Contacto Simple

> "Crea un formulario de contacto simple con campos para nombre, email y mensaje."

### Formulario de Múltiples Pasos

> "Crea un formulario de contacto con un primer paso para la información de contacto y un segundo paso para el mensaje y el método de contacto preferido."

### Formulario con Lógica Condicional

> "Crea un formulario de contacto que muestre campos diferentes según la selección del usuario en un menú desplegable."

### Formulario con Carga de Archivos

> "Crea un formulario de contacto que permita a los usuarios subir un archivo o adjunto."

:::note
La creación de formularios de contacto está disponible en Superdav AI Agent v1.10.0 y posteriores. El agente Site Builder debe estar activo para usar esta funcionalidad.
:::
