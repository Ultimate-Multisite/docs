---
title: Stripe அமைத்தல்
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway-ஐ அமைத்தல் (v2)

_**முக்கிய குறிப்பு: இந்தக் கட்டுரை Ultimate Multisite பதிப்பு 2.x-ஐக் குறிக்கிறது.**_

எங்கள் கட்டணம் அமைப்புகள் பக்கத்தில் நான்கு கட்டண முறைகளை நீங்கள் செயல்படுத்தலாம்: Stripe, Stripe Checkout, PayPal மற்றும் Manual. இந்தக் கட்டுரையில், **Stripe**-உடன் எவ்வாறு இணைப்பது என்று பார்ப்போம்.

## Stripe-ஐ இயக்குதல்

உங்கள் நெட்வொர்க்கில் Stripe-ஐ கிடைக்கக்கூடிய கட்டண வழியாக இயக்க, **Ultimate Multisite > Settings > Payments** செல்லவும், பின்னர் Active Payment Gateways பிரிவில் **Stripe** அல்லது **Stripe Checkout** அருகிலுள்ள டாகிளை டிக் செய்யவும்.

![Active payment gateways-ல் Stripe-ஐ இயக்குதல்](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** இந்த முறை செக்அவுட்டின் போது கிரெடிட் கார்டு எண்ணை உள்ளிட ஒரு இடத்தைக் காட்டும்.

![செக்அவுட்டின் போது Stripe inline கிரெடிட் கார்டு புலம்](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** இந்த முறை செக்அவுட்டின் போது வாடிக்கையாளரை Stripe Checkout பக்கத்திற்கு திருப்பி விடும்.

![செக்அவுட்டின் போது Stripe Checkout திருப்பிவிடல் பக்கம்](/img/config/settings-payment-gateways.png)

உங்கள் Stripe API விசைகளைப் பெறுதல்

Stripe கட்டண வழியாக இயக்கப்பட்டதும், **Stripe Publishable Key** மற்றும் **Stripe Secret Key** புலங்களை நிரப்ப வேண்டும். உங்கள் Stripe கணக்கில் உள்நுழைவதன் மூலம் இதைப் பெறலாம்.

_**குறிப்பு:** கட்டண முறை சரியாக வேலை செய்கிறதா என்று சோதிக்க **Sandbox mode**-ஐ செயல்படுத்தலாம்._

![Stripe API விசை புலங்கள் மற்றும் sandbox mode டாகிள்](/img/config/settings-payment-gateways.png)

உங்கள் Stripe dashboard-ல், மேல்-வலது மூலையில் **Developers**-ஐ கிளிக் செய்யவும், பின்னர் இடது மெனுவில் **API Keys**-ஐ கிளிக் செய்யவும்.

![Stripe dashboard Developers பிரிவு API Keys-உடன்](/img/config/settings-payment-gateways.png)

**Test Data**-ஐ (உங்கள் production தளத்தில் integration வேலை செய்கிறதா என்று சோதிக்க) பயன்படுத்தலாம் அல்லது பயன்படுத்தாமல் விடலாம். இதை மாற்ற, **Viewing test data** டாகிளை மாற்றவும்.

![Stripe Viewing test data டாகிள்](/img/config/settings-payment-gateways.png)

**Token** நெடுவரிசையிலிருந்து **Publishable key** மற்றும் **Secret key** மதிப்புகளை நகலெடுத்து Ultimate Multisite Stripe Gateway புலங்களில் ஒட்டவும். பின்னர் **Save Changes**-ஐ கிளிக் செய்யவும்.

![Stripe publishable மற்றும் secret key மதிப்புகள்](/img/config/settings-payment-gateways.png)

![Ultimate Multisite அமைப்புகளில் Stripe விசைகளை ஒட்டுதல்](/img/config/settings-payment-gateways.png)

## Stripe Webhook-ஐ அமைத்தல்

**உங்கள் Stripe கணக்கில்** எந்த நிகழ்வு நடந்தாலும் Ultimate Multisite-க்கு தெரிவிக்கும் webhook நிகழ்வுகளை Stripe அனுப்புகிறது.

**Developers**-ஐ கிளிக் செய்து, இடது மெனுவில் **Webhooks** உருப்படியைத் தேர்வு செய்யவும். பின்னர் வலது புறத்தில் **Add endpoint**-ஐ கிளிக் செய்யவும்.

![Add endpoint பொத்தானுடன் Stripe Webhooks பக்கம்](/img/config/settings-payment-gateways.png)

உங்களுக்கு ஒரு **Endpoint URL** தேவை. Ultimate Multisite தானாகவே endpoint URL-ஐ உருவாக்குகிறது, இதை **Ultimate Multisite Stripe Gateway** பிரிவில் **Webhook Listener URL** புலத்தின் கீழே காணலாம்.

![Stripe gateway அமைப்புகளில் Webhook Listener URL புலம்](/img/config/settings-payment-gateways.png)

Endpoint URL-ஐ **நகலெடுத்து** Stripe **Endpoint URL** புலத்தில் **ஒட்டவும்**.

![Stripe webhook அமைப்பில் endpoint URL-ஐ ஒட்டுதல்](/img/config/settings-payment-gateways.png)

அடுத்ததாக ஒரு **Event**-ஐ தேர்வு செய்ய வேண்டும். இந்த விருப்பத்தின் கீழ், **Select all events** பெட்டியை டிக் செய்து **Add events**-ஐ கிளிக் செய்யவும். அதன் பிறகு மாற்றங்களைச் சேமிக்க **Add Endpoint**-ஐ கிளிக் செய்யவும்.

![அனைத்து நிகழ்வுகளையும் தேர்ந்தெடுத்து Stripe endpoint-ஐ சேர்த்தல்](/img/config/settings-payment-gateways.png)

அவ்வளவுதான், உங்கள் Stripe கட்டண integration முடிந்தது!
