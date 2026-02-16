---
title: PayPal ஐ அமைத்தல்
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway அமைத்தல் (v2)

_**முக்கிய குறிப்பு: இந்த கட்டுரை Ultimate Multisite பதிப்பு 2.x ஐ குறிக்கிறது.**_

எங்கள் payment settings பக்கத்தில் நான்கு வகையான கட்டண முறைகளை நீங்கள் செயல்படுத்தலாம்: Stripe, Stripe Checkout, PayPal மற்றும் Manual. இந்த கட்டுரையில், **PayPal** உடன் எவ்வாறு இணைப்பது என்பதை பார்ப்போம்.

Stripe போலவே, PayPal ஆன்லைன் கட்டணங்களுக்கு பரவலாக பயன்படுத்தப்படுகிறது, குறிப்பாக WordPress வலைத்தளங்களில். உங்கள் நெட்வொர்க்கில் PayPal ஐ கட்டண முறையாக எவ்வாறு பயன்படுத்துவது என்பதை இந்த கட்டுரை உங்களுக்கு வழிகாட்டும்.

இந்த இணைப்புக்கு தேவையான API credential பெற நீங்கள் **PayPal Business கணக்கு** வைத்திருக்க வேண்டும் என்பதை நினைவில் கொள்ளுங்கள்.

## உங்கள் நெட்வொர்க்கில் PayPal ஐ செயல்படுத்துதல்

உங்கள் நெட்வொர்க்கில் PayPal ஐ கிடைக்கக்கூடிய கட்டண முறையாக செயல்படுத்த, **Ultimate Multisite > Settings > Payments** tab க்கு சென்று PayPal அருகில் உள்ள பெட்டியை டிக் செய்யுங்கள்.

![செயலில் உள்ள payment gateway களில் PayPal ஐ செயல்படுத்துதல்](/img/config/settings-payment-gateways.png)

## PayPal API credentials பெறுதல்

PayPal payment gateway ஆக செயல்படுத்தப்பட்டவுடன், PayPal API **Username**, PayPal API **Password** மற்றும் PayPal API **Signature** ஆகிய புலங்களை நிரப்ப வேண்டும்.

உங்கள் PayPal [Live](https://www.paypal.com/home) அல்லது [Sandbox](https://www.sandbox.paypal.com/home) கணக்கில் உள்நுழைந்து இதைப் பெறலாம்.

(கட்டணங்களை சோதிக்கவும், gateway சரியாக அமைக்கப்பட்டுள்ளதா என்பதை பார்க்கவும் **sandbox mode** ஐ பயன்படுத்தலாம் என்பதை நினைவில் கொள்ளுங்கள். தொடர்புடைய பகுதியை toggle on செய்யுங்கள்.)

![PayPal API credentials புலங்கள் மற்றும் sandbox mode toggle](/img/config/settings-payment-gateways.png)

உங்கள் PayPal கணக்கிற்கான API Signature அல்லது Certificate credentials கோர:

  1. உங்கள் [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) க்கு செல்லுங்கள்.

  2. **API access** பகுதியில், **Update** ஐ கிளிக் செய்யுங்கள்.  
![API access பகுதியுடன் PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** கீழ், **Manage API credentials** ஐ கிளிக் செய்யுங்கள்.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * நீங்கள் ஏற்கனவே API Signature அல்லது Certificate உருவாக்கியிருந்தால், உங்கள் credentials ஐ காணக்கூடிய பக்கத்திற்கு திருப்பி விடப்படுவீர்கள்.

     * _**குறிப்பு:** உங்கள் PayPal கணக்கை சரிபார்க்க கேட்கப்பட்டால், திரையில் உள்ள வழிமுறைகளை பின்பற்றுங்கள்._

  4. பின்வரும் விருப்பங்களில் _ஒன்றை_ தேர்ந்தெடுத்து, **Agree and Submit** ஐ கிளிக் செய்யுங்கள்.

     * **Request API Signature** – API Signature authentication க்கு தேர்ந்தெடுக்கவும்.

     * **Request API Certificate** – API Certificate authentication க்கு தேர்ந்தெடுக்கவும்.

  5. PayPal உங்கள் API credentials ஐ பின்வருமாறு உருவாக்குகிறது:  
![PayPal உருவாக்கிய API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** API Username, API Password மற்றும் Signature ஆகியவற்றை உள்ளடக்கியது, இவை காலாவதியாவதில்லை. கூடுதல் பாதுகாப்பிற்காக இந்த மதிப்புகள் இயல்பாக மறைக்கப்பட்டிருக்கும். அவற்றை ஆன் மற்றும் ஆஃப் செய்ய **Show/Hide** ஐ கிளிக் செய்யுங்கள். முடிந்ததும், **Done** ஐ கிளிக் செய்யுங்கள்.

     * **API Certificate credentials** API Username, API Password மற்றும் Certificate ஆகியவற்றை உள்ளடக்கியது, இவை மூன்று ஆண்டுகளுக்குப் பிறகு தானாகவே காலாவதியாகும். API Certificate ஐ உங்கள் டெஸ்க்டாப்பில் சேமிக்க **Download Certificate** ஐ கிளிக் செய்யுங்கள்.

அவ்வளவுதான், உங்கள் PayPal payment integration முடிந்தது!

PayPal settings தொடர்பாக ஏதேனும் கேள்விகள் இருந்தால், PayPal இன் [Help Center](https://www.paypal.com/br/smarthelp/home) ஐ பார்க்கலாம்.
