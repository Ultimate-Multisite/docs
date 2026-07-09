---
title: સાઇટ બિલ્ડર કોન્ટેક્ટ ફોર્મ્સ
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms {#site-builder-contact-forms}

Superdav AI Agent v1.10.0 નો ઉપયોગ કરીને Site Builder agent દ્વારા સીધા જ chat interface માં contact forms બનાવવાની ક્ષમતા ઉમેરવામાં આવી છે. આનાથી તમે chat છોડ્યા વિના કોઈપણ page પર સંપૂર્ણ રીતે કામ કરતું contact form ઉમેરી શકો છો.

## Overview {#overview}

Site Builder contact form ability (`create_contact_form`) આપમેળે તમારા ઇન્સ્ટોલ કરેલા form plugin ને detect કરે છે અને તે plugin ની native capabilities નો ઉપયોગ કરીને contact form બનાવે છે. સપોર્ટેડ form plugins માં નીચેનાનો સમાવેશ થાય છે:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

assistant આપમેળે તમારી site પર ઉપલબ્ધ શ્રેષ્ઠ form plugin પસંદ કરે છે અને તે plugin ને અનુરૂપ contact form જનરેટ કરે છે.

## Creating a Contact Form {#creating-a-contact-form}

Site Builder નો ઉપયોગ કરીને contact form બનાવવા માટે:

1. WordPress admin માં **Gratis AI Agent** chat panel ખોલો.
2. chat header માં agent icon પર ક્લિક કરીને **Site Builder** agent પર સ્વિચ કરો.
3. તમે જે contact form બનાવવા માંગો છો તેનું વર્ણન કરો. ઉદાહરણ તરીકે:

   > "Contact page પર name, email, message, અને phone number ફીલ્ડ સાથે contact form ઉમેરો."

   અથવા ફક્ત:

   > "Contact page માટે contact form બનાવો."

4. Site Builder contact form જનરેટ કરશે અને તેને embed કરવા માટે તૈયાર shortcode આપશે.

## Using the Generated Shortcode {#using-the-generated-shortcode}

Site Builder દ્વારા contact form બનાવ્યા પછી, તે એક shortcode પરત કરે છે (ઉદાહરણ તરીકે, `[contact-form-7 id="123"]`). તમે આ રીતે ઉપયોગ કરી શકો છો:

1. **તેને page અથવા post માં embed કરો** — shortcode કોપી કરો અને તેને block editor અથવા classic editor નો ઉપયોગ કરીને કોઈપણ page અથવા post માં paste કરો.
2. **Site Builder દ્વારા ઉમેરો** — Site Builder ને પૂછો કે તે form ને ચોક્કસ page પર આપમેળે ઉમેરે:

   > "Contact page પર contact form ઉમેરો."

3. **તેનો template માં ઉપયોગ કરો** — જો તમે PHP માં આરામદાયક હોવ, તો તમે shortcode ને theme template file માં ઉમેરી શકો છો.

## Customizing the Contact Form {#customizing-the-contact-form}

Site Builder દ્વારા contact form બનાવ્યા પછી, તમે તેને વધુ કસ્ટમાઇઝ કરી શકો છો:

### Via the Chat Interface {#via-the-chat-interface}

Site Builder ને form માં ફેરફાર કરવા માટે કહો:

> "subject ફીલ્ડ ઉમેરવા અને message ફીલ્ડ ને required બનાવવા માટે contact form અપડેટ કરો."

Site Builder form અપડેટ કરશે અને અપડેટ કરેલો shortcode પરત કરશે.

### Via the Form Plugin's Admin Interface {#via-the-form-plugins-admin-interface}

તમે તમારા form plugin ની settings માં પણ સીધું form કસ્ટમાઇઝ કરી શકો છો:

1. WordPress admin માં **Contact Form 7** (અથવા તમારું ઇન્સ્ટોલ કરેલું form plugin) પર જાઓ.
2. Site Builder દ્વારા બનાવેલ form શોધો.
3. જરૂર મુજબ form fields, validation rules, અને email notifications edit કરો.

## Form Plugins and Compatibility {#form-plugins-and-compatibility}

Site Builder આપમેળે detect કરે છે કે તમારી site પર કયો form plugin ઇન્સ્ટોલ છે અને contact form બનાવવા માટે તેનો ઉપયોગ કરે છે. જો એક કરતાં વધુ form plugins ઇન્સ્ટોલ હોય, તો Site Builder તેમને આ ક્રમમાં પ્રાથમિકતા આપે છે:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

જો આમાંથી કોઈ plugin ઇન્સ્ટોલ ન હોય, તો Site Builder contact form બનાવતા પહેલા એક ઇન્સ્ટોલ કરવાની ભલામણ કરશે.

## Email Notifications {#email-notifications}

Site Builder દ્વારા બનાવેલા contact forms ડિફોલ્ટ રૂપે site administrator ને email notifications મોકલવા માટે configure થયેલા હોય છે. તમે recipient email address અને notification message ને કસ્ટમાઇઝ કરી શકો છો:

1. તમારા form plugin ના admin interface પર જાઓ.
2. Site Builder દ્વારા બનાવેલ form શોધો.
3. email notification settings edit કરો.

વિગતવાર સૂચનાઓ માટે, તમારા form plugin ના documentation નો સંદર્ભ લો:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases {#example-use-cases}

### Simple Contact Form {#simple-contact-form}

> "name, email, અને message ફીલ્ડ સાથે એક simple contact form બનાવો."

### Multi-Step Form {#multi-step-form}

> "contact information માટે પ્રથમ પગલું અને message અને preferred contact method માટે બીજું પગલું હોય તેવો contact form બનાવો."

### Form with Conditional Logic {#form-with-conditional-logic}

> "contact form બનાવો જે dropdown માં વપરાશકર્તાના selection પર આધારિત અલગ ફીલ્ડ બતાવે."

### Form with File Upload {#form-with-file-upload}

> "contact form બનાવો જે વપરાશકર્તાઓને ફાઇલ અથવા attachment અપલોડ કરવાની મંજૂરી આપે."

:::note
Contact form creation Superdav AI Agent v1.10.0 અને તેના પછીના સંસ્કરણોમાં ઉપલબ્ધ છે. આ ક્ષમતાનો ઉપયોગ કરવા માટે Site Builder agent active હોવો જરૂરી છે.
:::
