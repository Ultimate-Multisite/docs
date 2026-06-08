---
title: साईट बिल्डर संपर्क फॉर्म्स
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms

Superdav AI Agent v1.10.0 मध्ये Site Builder agent वापरून थेट chat interface मधून contact forms तयार करण्याची क्षमता जोडली आहे. यामुळे तुम्हाला chat सोडून कोणत्याही page वर पूर्णपणे कार्यक्षम (fully functional) contact forms जोडता येतात.

## Overview

Site Builder contact form ability (`create_contact_form`) आपोआप तुमच्या site वर install केलेल्या form plugin ओळखते आणि त्या plugin च्या मूळ (native) क्षमता वापरून contact form तयार करते. समर्थित form plugins मध्ये खालील गोष्टींचा समावेश आहे:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

assistant आपोआप तुमच्या site वर उपलब्ध सर्वोत्तम form plugin निवडतो आणि त्या plugin साठी अनुरूप (tailored) contact form तयार करतो.

## Creating a Contact Form

Site Builder वापरून contact form कसा तयार करायचा:

1. WordPress admin मध्ये **Gratis AI Agent** chat panel उघडा.
2. chat header मध्ये agent icon वर क्लिक करून **Site Builder** agent वर स्विच करा.
3. तुम्हाला कोणता contact form तयार करायचा आहे याचे वर्णन करा. उदाहरणार्थ:

   > "Contact page वर name, email, message, आणि phone number साठी fields असलेला contact form जोडा."

   किंवा फक्त:

   > "Contact page साठी एक contact form तयार करा."

4. Site Builder contact form तयार करेल आणि embed करण्यासाठी तयार असलेला एक shortcode परत करेल.

## Using the Generated Shortcode

Site Builder ने contact form तयार केल्यानंतर, तो एक shortcode परत करतो (उदाहरणार्थ, `[contact-form-7 id="123"]`). तुम्ही खालील गोष्टी करू शकता:

1. **page किंवा post मध्ये embed करणे** — shortcode कॉपी करा आणि block editor किंवा classic editor वापरून कोणत्याही page किंवा post मध्ये पेस्ट करा.
2. **Site Builder द्वारे जोडणे** — Site Builder ला विशिष्ट page वर फॉर्म आपोआप जोडण्यास सांगा:

   > "Contact page वर contact form जोडा."

3. **template मध्ये वापरणे** — जर तुम्हाला PHP ची माहिती असेल, तर तुम्ही shortcode theme template file मध्ये जोडू शकता.

## Customizing the Contact Form

Site Builder ने contact form तयार केल्यानंतर, तुम्ही त्यात आणखी बदल करू शकता:

### Via the Chat Interface

Site Builder ला फॉर्ममध्ये बदल करण्यास सांगा:

> "subject field जोडण्यासाठी आणि message field अनिवार्य (required) करण्यासाठी contact form अपडेट करा."

Site Builder फॉर्म अपडेट करेल आणि अपडेट केलेला shortcode परत करेल.

### Via the Form Plugin's Admin Interface

तुम्ही तुमच्या form plugin च्या settings मध्ये देखील फॉर्मला थेट customize करू शकता:

1. WordPress admin मध्ये **Contact Form 7** (किंवा तुमचा install केलेला form plugin) वर जा.
2. Site Builder ने तयार केलेला फॉर्म शोधा.
3. आवश्यकतेनुसार form fields, validation rules, आणि email notifications एडिट करा.

## Form Plugins and Compatibility

Site Builder आपोआप ओळखतो की तुमच्या site वर कोणता form plugin install केला आहे आणि contact form तयार करण्यासाठी त्याचा वापर करतो. जर अनेक form plugins install केलेले असतील, तर Site Builder त्यांना या क्रमाने प्राधान्य देतो:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

जर हे कोणतेही plugins install केलेले नसतील, तर Site Builder contact form तयार करण्यापूर्वी त्यापैकी एक install करण्याची शिफारस करेल.

## Email Notifications

Site Builder ने तयार केलेले contact forms आपोआप site administrator ला email notifications पाठवण्यासाठी कॉन्फिगर केलेले असतात. तुम्ही प्राप्तकर्ता email address आणि notification message कस्टमाइझ करू शकता:

1. तुमच्या form plugin च्या admin interface वर जा.
2. Site Builder ने तयार केलेला फॉर्म शोधा.
3. email notification settings एडिट करा.

अधिक तपशीलवार सूचनांसाठी, तुमच्या form plugin च्या documentation चा संदर्भ घ्या:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases

### Simple Contact Form

> "name, email, आणि message fields असलेला एक साधा contact form तयार करा."

### Multi-Step Form

> "contact information साठी पहिले step आणि message आणि preferred contact method साठी दुसरे step असलेला contact form तयार करा."

### Form with Conditional Logic

> "एक contact form तयार करा जो user च्या dropdown मधील निवडीवर आधारित वेगवेगळे fields दाखवतो."

### Form with File Upload

> "एक contact form तयार करा जो users ला file किंवा attachment अपलोड करण्याची परवानगी देतो."

:::note
Contact form creation Superdav AI Agent v1.10.0 आणि त्यानंतर उपलब्ध आहे. ही क्षमता वापरण्यासाठी Site Builder agent सक्रिय (active) असणे आवश्यक आहे.
:::
