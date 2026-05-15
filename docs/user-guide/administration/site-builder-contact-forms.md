---
title: "Site Builder Contact Forms"
sidebar_position: 22
---

# Site Builder Contact Forms

Superdav AI Agent v1.10.0 adds the ability to create contact forms directly from the chat interface using the Site Builder agent. This allows you to add fully functional contact forms to any page without leaving the chat.

## Overview

The Site Builder contact form ability (`create_contact_form`) automatically detects your installed form plugin and creates a contact form using that plugin's native capabilities. Supported form plugins include:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

The assistant automatically selects the best available form plugin on your site and generates a contact form tailored to that plugin.

## Creating a Contact Form

To create a contact form using the Site Builder:

1. Open the **Gratis AI Agent** chat panel in the WordPress admin.
2. Switch to the **Site Builder** agent by clicking the agent icon in the chat header.
3. Describe the contact form you want to create. For example:

   > "Add a contact form to the Contact page with fields for name, email, message, and phone number."

   Or simply:

   > "Create a contact form for the Contact page."

4. The Site Builder will generate the contact form and return a shortcode ready to embed.

## Using the Generated Shortcode

After the Site Builder creates the contact form, it returns a shortcode (for example, `[contact-form-7 id="123"]`). You can:

1. **Embed it in a page or post** — Copy the shortcode and paste it into any page or post using the block editor or classic editor.
2. **Add it via the Site Builder** — Ask the Site Builder to add the form to a specific page automatically:

   > "Add the contact form to the Contact page."

3. **Use it in a template** — If you are comfortable with PHP, you can add the shortcode to a theme template file.

## Customizing the Contact Form

After the Site Builder creates the contact form, you can customize it further:

### Via the Chat Interface

Ask the Site Builder to modify the form:

> "Update the contact form to add a subject field and make the message field required."

The Site Builder will update the form and return the updated shortcode.

### Via the Form Plugin's Admin Interface

You can also customize the form directly in your form plugin's settings:

1. Go to **Contact Form 7** (or your installed form plugin) in the WordPress admin.
2. Find the form created by the Site Builder.
3. Edit the form fields, validation rules, and email notifications as needed.

## Form Plugins and Compatibility

The Site Builder automatically detects which form plugin is installed on your site and uses it to create the contact form. If multiple form plugins are installed, the Site Builder prioritizes them in this order:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

If none of these plugins are installed, the Site Builder will recommend installing one before creating the contact form.

## Email Notifications

Contact forms created by the Site Builder are configured to send email notifications to the site administrator by default. You can customize the recipient email address and notification message:

1. Go to your form plugin's admin interface.
2. Find the form created by the Site Builder.
3. Edit the email notification settings.

For detailed instructions, refer to your form plugin's documentation:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases

### Simple Contact Form

> "Create a simple contact form with name, email, and message fields."

### Multi-Step Form

> "Create a contact form with a first step for contact information and a second step for the message and preferred contact method."

### Form with Conditional Logic

> "Create a contact form that shows different fields based on the user's selection in a dropdown."

### Form with File Upload

> "Create a contact form that allows users to upload a file or attachment."

:::note
Contact form creation is available in Superdav AI Agent v1.10.0 and later. The Site Builder agent must be active to use this ability.
:::
