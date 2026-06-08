---
title: ਸਾਈਟ ਬਿਲਡਰ ਸੰਪਰਕ ਫਾਰਮਾਂ
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder Contact Forms

Superdav AI Agent v1.10.0 Site Builder agent ਦੀ ਵਰਤੋਂ ਕਰਕੇ Chat interface ਵਿੱਚੋਂ ਸਿੱਧੇ Contact Forms ਬਣਾਉਣ ਦੀ ਸਮਰੱਥਾ ਜੋੜਦਾ ਹੈ। ਇਸ ਨਾਲ ਤੁਹਾਨੂੰ Chat ਨੂੰ ਸਿਮਾਂਤ ਕੀਤੇ ਬਿਨਾਂ ਕਿਸੇ ਵੀ ਪੇਜ 'ਤੇ ਪੂਰੀ ਤਰ੍ਹਾਂ ਕੰਮ ਕਰਨ ਵਾਲੇ Contact Forms ਜੋੜਨ ਦੀ ਆਗਿਆ ਮਿਲਦੀ ਹੈ।

## Overview

Site Builder contact form ability (`create_contact_form`) ਆਪਣੇ ਆਪ ਤੁਹਾਡੇ ਇੰਸਟਾਲ ਕੀਤੇ ਫਾਰਮ ਪਲੱਗਇਨ ਦਾ ਪਤਾ ਲਗਾ ਲੈਂਦਾ ਹੈ ਅਤੇ ਉਸ ਪਲੱਗਇਨ ਦੀ ਆਪਣੀ ਕਾਬਲੀਅਤਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਇੱਕ Contact Form ਬਣਾਉਂਦਾ ਹੈ। ਸਪੋਰਟ ਕੀਤੇ ਫਾਰਮ ਪਲੱਗਇਨਾਂ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

Assistant ਆਪਣੇ ਸਾਈਟ 'ਤੇ ਉਪਲਬਧ ਸਭ ਤੋਂ ਵਧੀਆ ਫਾਰਮ ਪਲੱਗਇਨ ਆਪਣੇ ਆਪ ਚੁਣ ਲੈਂਦਾ ਹੈ ਅਤੇ ਉਸ ਪਲੱਗਇਨ ਦੇ ਅਨੁਕੂਲ ਇੱਕ Contact Form ਤਿਆਰ ਕਰਦਾ ਹੈ।

## Creating a Contact Form

Site Builder ਦੀ ਵਰਤੋਂ ਕਰਕੇ Contact Form ਬਣਾਉਣ ਲਈ:

1. WordPress admin ਵਿੱਚ **Gratis AI Agent** chat panel ਖੋਲ੍ਹੋ।
2. Chat header ਵਿੱਚ agent icon 'ਤੇ ਕਲਿੱਕ ਕਰਕੇ **Site Builder** agent 'ਤੇ ਸਵਿੱਚ ਕਰੋ।
3. ਉਸ Contact Form ਦਾ ਵਰਣਨ ਕਰੋ ਜੋ ਤੁਸੀਂ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ। ਉਦਾਹਰਨ ਲਈ:

   > "Contact page 'ਤੇ ਇੱਕ contact form ਜੋੜੋ ਜਿਸ ਵਿੱਚ ਨਾਮ (name), ਈਮੇਲ (email), ਮੈਸੇਜ (message), ਅਤੇ ਫੋਨ ਨੰਬਰ (phone number) ਲਈ fields ਹੋਣ।"

   ਜਾਂ ਸਧਾਰਨ ਤੌਰ 'ਤੇ:

   > "Contact page ਲਈ ਇੱਕ contact form ਬਣਾਓ।"

4. Site Builder Contact Form ਤਿਆਰ ਕਰ ਦੇਵੇਗਾ ਅਤੇ ਇੱਕ shortcode ਵਾਪਸ ਕਰੇਗਾ ਜੋ embed ਕਰਨ ਲਈ ਤਿਆਰ ਹੈ।

## Using the Generated Shortcode

Site Builder ਦੁਆਰਾ Contact Form ਬਣਾਉਣ ਤੋਂ ਬਾਅਦ, ਇਹ ਇੱਕ shortcode ਵਾਪਸ ਕਰਦਾ ਹੈ (ਉਦਾਹਰਨ ਲਈ, `[contact-form-7 id="123"]`)। ਤੁਸੀਂ ਇਹ ਕਰ ਸਕਦੇ ਹੋ:

1. **ਇਸਨੂੰ ਕਿਸੇ ਪੇਜ ਜਾਂ ਪੋਸਟ ਵਿੱਚ embed ਕਰੋ** — shortcode ਨੂੰ ਕਾਪੀ ਕਰੋ ਅਤੇ block editor ਜਾਂ classic editor ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਕਿਸੇ ਵੀ ਪੇਜ ਜਾਂ ਪੋਸਟ ਵਿੱਚ ਪੇਸਟ ਕਰੋ।
2. **Site Builder ਰਾਹੀਂ ਜੋੜੋ** — Site Builder ਨੂੰ ਖਾਸ ਪੇਜ 'ਤੇ form ਆਪਣੇ ਆਪ ਜੋੜਨ ਲਈ ਕਹੋ:

   > "Contact page 'ਤੇ contact form ਜੋੜੋ।"

3. **ਇਸਨੂੰ ਇੱਕ template ਵਿੱਚ ਵਰਤੋ** — ਜੇ ਤੁਸੀਂ PHP ਨਾਲ ਆਰਾਮਦਾਇਕ ਹੋ, ਤਾਂ ਤੁਸੀਂ shortcode ਨੂੰ ਇੱਕ theme template file ਵਿੱਚ ਜੋੜ ਸਕਦੇ ਹੋ।

## Customizing the Contact Form

Site Builder ਦੁਆਰਾ Contact Form ਬਣਾਉਣ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ ਇਸਨੂੰ ਹੋਰ ਕਸਟਮਾਈਜ਼ ਕਰ ਸਕਦੇ ਹੋ:

### Via the Chat Interface

Site Builder ਨੂੰ form ਨੂੰ modify ਕਰਨ ਲਈ ਕਹੋ:

> "Contact form ਨੂੰ update ਕਰੋ ਤਾਂ ਜੋ ਇੱਕ subject field ਜੋੜਿਆ ਜਾ ਸਕੇ ਅਤੇ message field ਨੂੰ required ਬਣਾਇਆ ਜਾ ਸਕੇ।"

Site Builder form ਨੂੰ update ਕਰ ਦੇਵੇਗਾ ਅਤੇ update ਕੀਤਾ ਹੋਇਆ shortcode ਵਾਪਸ ਕਰੇਗਾ।

### Via the Form Plugin's Admin Interface

ਤੁਸੀਂ form ਨੂੰ ਸਿੱਧੇ ਆਪਣੇ form plugin ਦੀਆਂ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਵੀ ਕਸਟਮਾਈਜ਼ ਕਰ ਸਕਦੇ ਹੋ:

1. WordPress admin ਵਿੱਚ **Contact Form 7** (ਜਾਂ ਤੁਹਾਡਾ ਇੰਸਟਾਲਡ ਫਾਰਮ ਪਲੱਗਇਨ) 'ਤੇ ਜਾਓ।
2. Site Builder ਦੁਆਰਾ ਬਣਾਇਆ ਗਿਆ form ਲੱਭੋ।
3. ਲੋੜ ਅਨੁਸਾਰ form fields, validation rules, ਅਤੇ email notifications ਨੂੰ edit ਕਰੋ।

## Form Plugins and Compatibility

Site Builder ਆਪਣੇ ਆਪ ਪਤਾ ਲਗਾ ਲੈਂਦਾ ਹੈ ਕਿ ਤੁਹਾਡੀ ਸਾਈਟ 'ਤੇ ਕਿਹੜਾ form plugin ਇੰਸਟਾਲ ਹੈ ਅਤੇ Contact Form ਬਣਾਉਣ ਲਈ ਇਸਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਜੇਕਰ ਕਈ form plugins ਇੰਸਟਾਲ ਹਨ, ਤਾਂ Site Builder ਉਨ੍ਹਾਂ ਨੂੰ ਇਸ ਕ੍ਰਮ ਵਿੱਚ ਤਰਜੀਹ (prioritize) ਦਿੰਦਾ ਹੈ:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

ਜੇ ਇਹ ਕੋਈ plugins ਇੰਸਟਾਲ ਨਹੀਂ ਹਨ, ਤਾਂ Site Builder Contact Form ਬਣਾਉਣ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਇੰਸਟਾਲ ਕਰਨ ਦੀ ਸਿਫਾਰਸ਼ ਕਰੇਗਾ।

## Email Notifications

Site Builder ਦੁਆਰਾ ਬਣਾਏ ਗਏ Contact Forms ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ ਸਾਈਟ ਐਡਮਿਨਿਸਟਰੇਟਰ ਨੂੰ email notifications ਭੇਜਣ ਲਈ configure ਕੀਤੇ ਜਾਂਦੇ ਹਨ। ਤੁਸੀਂ ਪ੍ਰਾਪਤਕਰਤਾ (recipient) email address ਅਤੇ notification message ਨੂੰ ਕਸਟਮਾਈਜ਼ ਕਰ ਸਕਦੇ ਹੋ:

1. ਆਪਣੇ form plugin ਦੇ admin interface 'ਤੇ ਜਾਓ।
2. Site Builder ਦੁਆਰਾ ਬਣਾਇਆ ਗਿਆ form ਲੱਭੋ।
3. email notification settings ਨੂੰ edit ਕਰੋ।

ਵਿਸਤ੍ਰਿਤ ਨਿਰਦੇਸ਼ਾਂ ਲਈ, ਆਪਣੇ form plugin ਦੇ documentation 'ਤੇ ਹਵਾਲਾ ਲਓ:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## Example Use Cases

### Simple Contact Form

> "ਨਾਮ, ਈਮੇਲ, ਅਤੇ ਮੈਸੇਜ fields ਨਾਲ ਇੱਕ ਸਧਾਰਨ contact form ਬਣਾਓ।"

### Multi-Step Form

> "ਇੱਕ contact form ਬਣਾਓ ਜਿਸ ਵਿੱਚ ਸੰਪਰਕ ਜਾਣਕਾਰੀ ਲਈ ਪਹਿਲਾ ਕਦਮ (first step) ਅਤੇ ਮੈਸੇਜ ਅਤੇ ਪਸੰਦੀਦਾ ਸੰਪਰਕ ਤਰੀਕੇ ਲਈ ਦੂਜਾ ਕਦਮ (second step) ਹੋਵੇ।"

### Form with Conditional Logic

> "ਇੱਕ contact form ਬਣਾਓ ਜੋ user ਦੇ dropdown ਵਿੱਚ ਚੁਣੇ ਹੋਏ ਵਿਕਲਪ ਦੇ ਆਧਾਰ 'ਤੇ ਵੱਖ-ਵੱਖ fields ਦਿਖਾਵੇ।"

### Form with File Upload

> "ਇੱਕ contact form ਬਣਾਓ ਜੋ users ਨੂੰ ਇੱਕ file ਜਾਂ attachment upload ਕਰਨ ਦੀ ਆਗਿਆ ਦੇਵੇ।"

:::note
Contact form creation Superdav AI Agent v1.10.0 ਅਤੇ ਬਾਅਦ ਦੇ ਸੰਸਕਰਣਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹੈ। ਇਸ ਸਮਰੱਥਾ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ Site Builder agent active ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।
:::
