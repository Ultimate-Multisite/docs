---
title: பணம் பெறுதல்
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# பணம் பெறுதல் (v2)

_**முக்கிய குறிப்பு: இந்த கட்டுரை Ultimate Multisite பதிப்பு 2.x ஐ குறிக்கிறது.**_

Ultimate Multisite-ல் உள்ளமைந்த membership மற்றும் billing அமைப்பு உள்ளது. எங்கள் billing அமைப்பு சரியாக செயல்பட, e-commerce-ல் பரவலாக பயன்படுத்தப்படும் payment gateway-களை ஒருங்கிணைத்துள்ளோம். Ultimate Multisite-ல் இயல்பாக வழங்கப்படும் payment gateway-கள் _Stripe_, _PayPal_ மற்றும் Manual Payment ஆகும். இவை தவிர, அந்தந்த add-on-களை நிறுவுவதன் மூலம் _WooCommerce_, _GoCardless_ மற்றும் _Payfast_ வழியாகவும் பணம் பெறலாம்.

## அடிப்படை அமைப்புகள்

இந்த payment gateway-களை Ultimate Multisite payment அமைப்புகளில் configure செய்யலாம். **Ultimate Multisite menu > Settings > Payments** என்று சென்று இதை அணுகலாம்.

![Ultimate Multisite-ல் Payment அமைப்புகள் பக்கம்](/img/config/settings-payment-gateways.png)

உங்கள் payment gateway-ஐ அமைப்பதற்கு முன், நீங்கள் configure செய்யக்கூடிய அடிப்படை payment அமைப்புகளைப் பாருங்கள்:

**Force auto-renew:** பயனர் தேர்வு செய்த billing frequency-க்கு ஏற்ப, ஒவ்வொரு billing cycle முடிவிலும் பணம் தானாகவே வசூலிக்கப்படும் என்பதை இது உறுதி செய்கிறது.

![Force auto-renew toggle அமைப்பு](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** இந்த விருப்பத்தை இயக்கினால், பதிவு செய்யும்போது உங்கள் வாடிக்கையாளர் எந்த நிதி தகவலையும் சேர்க்க வேண்டியதில்லை. trial காலம் முடிந்த பிறகு மட்டுமே இது தேவைப்படும்.

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** பணம் செலுத்திய பிறகு invoice அனுப்ப வேண்டுமா வேண்டாமா என்பதை இங்கே தீர்மானிக்கலாம். பயனர்கள் தங்கள் subsite dashboard-ல் payment வரலாற்றை அணுகலாம் என்பதை நினைவில் கொள்ளுங்கள். இந்த விருப்பம் Manual Gateway-க்கு பொருந்தாது.

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** இங்கே, payment reference code அல்லது sequential number scheme-ஐ தேர்வு செய்யலாம். உங்கள் invoice-களுக்கு payment reference code பயன்படுத்த விரும்பினால், எதையும் configure செய்ய வேண்டியதில்லை. Sequential number scheme தேர்வு செய்தால், **next invoice number** (இந்த எண் அமைப்பில் அடுத்ததாக உருவாக்கப்படும் invoice-க்கு பயன்படுத்தப்படும். புதிய invoice உருவாக்கப்படும் ஒவ்வொரு முறையும் இது ஒன்று அதிகரிக்கும். இதை மாற்றி சேமித்து, invoice sequential number-ஐ குறிப்பிட்ட மதிப்புக்கு reset செய்யலாம்) மற்றும் **invoice number prefix**-ஐ configure செய்ய வேண்டும்.

![Invoice numbering scheme தேர்வு](/img/config/settings-payment-gateways.png)

![Sequential invoice number மற்றும் prefix அமைப்புகள்](/img/config/settings-payment-gateways.png)

## Gateway-களை எங்கே காணலாம்:

அதே பக்கத்தில் (**Ultimate Multisite > Settings > Payments**) payment gateway-களை அமைக்கலாம். **active payment gateways**-க்கு கீழே _Stripe_, _Stripe Checkout_, _PayPal_ மற்றும் _Manual_ ஆகியவற்றைக் காணலாம்.

![Active payment gateway-கள் பட்டியல்](/img/config/settings-payment-gateways.png)

ஒவ்வொரு payment gateway-க்கும் தனி கட்டுரை உள்ளது, அது அமைப்பதற்கான படிகளை வழிநடத்தும். கீழே உள்ள இணைப்புகளில் அவற்றைக் காணலாம்.

**Stripe gateway அமைத்தல்**

**PayPal gateway அமைத்தல்**

**Manual payments அமைத்தல்**

இப்போது, _WooCommerce_, _GoCardless_ அல்லது _Payfast_-ஐ உங்கள் payment gateway-ஆக பயன்படுத்த விரும்பினால், **அவற்றின் add-on-களை நிறுவி configure செய்ய வேண்டும்**.

### WooCommerce add-on நிறுவுவது எப்படி:

சில நாடுகளில் _Stripe_ மற்றும் _PayPal_ கிடைக்காது என்பதை நாங்கள் புரிந்துகொள்கிறோம், இது Ultimate Multisite பயனர்கள் எங்கள் plugin-ஐ திறம்பட பயன்படுத்துவதை கட்டுப்படுத்துகிறது. எனவே மிகவும் பிரபலமான e-commerce plugin ஆன _WooCommerce_-ஐ ஒருங்கிணைக்க ஒரு add-on உருவாக்கினோம். உலகம் முழுவதும் உள்ள developers பல்வேறு payment gateway-களை இதனுடன் ஒருங்கிணைக்க add-on-கள் உருவாக்கியுள்ளனர். Ultimate Multisite billing அமைப்புடன் பயன்படுத்தக்கூடிய payment gateway-களை விரிவுபடுத்த இதை நாங்கள் பயன்படுத்திக்கொண்டோம்.

_**முக்கியம்:** Ultimate Multisite: WooCommerce Integration-க்கு குறைந்தபட்சம் உங்கள் main site-ல் WooCommerce செயல்படுத்தப்பட்டிருக்க வேண்டும்._

முதலில், add-ons பக்கத்திற்குச் செல்லுங்கள். **Ultimate Multisite > Settings** என்று சென்று இதை அணுகலாம். **Add-ons** அட்டவணையைக் காணலாம். **Check our Add-ons** என்பதைக் கிளிக் செய்யுங்கள்.

![Add-ons பகுதியுடன் Settings பக்கம்](/img/config/settings-general.png)

**Check our Add-ons** கிளிக் செய்த பிறகு, add-ons பக்கத்திற்கு redirect செய்யப்படுவீர்கள். இங்கே அனைத்து Ultimate Multisite add-on-களையும் காணலாம். **Ultimate Multisite: WooCommerce Integration** add-on-ஐ கிளிக் செய்யுங்கள்.

![கிடைக்கும் add-on-களின் பட்டியலுடன் Add-ons பக்கம்](/img/config/settings-general.png)

Add-on விவரங்களுடன் ஒரு window தோன்றும். **Install Now** கிளிக் செய்யுங்கள்.

![WooCommerce add-on install dialog](/img/config/settings-general.png)

நிறுவல் முடிந்ததும், plugins பக்கத்திற்கு redirect செய்யப்படுவீர்கள். இங்கே **Network Activate** கிளிக் செய்தால் WooCommerce add-on உங்கள் network-ல் செயல்படுத்தப்படும்.

![WooCommerce add-on-ஐ Network Activate செய்தல்](/img/config/settings-general.png)

இதை செயல்படுத்திய பிறகு, உங்கள் website-ல் WooCommerce plugin இன்னும் நிறுவப்படவில்லை மற்றும் செயல்படுத்தப்படவில்லை என்றால், நினைவூட்டல் பெறுவீர்கள்.

![WooCommerce செயல்படுத்துதல் நினைவூட்டல் அறிவிப்பு](/img/config/settings-general.png)

WooCommerce Integration add-on பற்றி மேலும் படிக்க, **இங்கே கிளிக் செய்யுங்கள்**.

### GoCardless add-on நிறுவுவது எப்படி:

_GoCardless_ add-on நிறுவும் படிகள் _WooCommerce_ add-on போலவே உள்ளன. Add-ons பக்கத்திற்குச் சென்று **Ultimate Multisite: GoCardless Gateway** add-on-ஐ தேர்வு செய்யுங்கள்.

![கிடைக்கும் add-on-களின் பட்டியலுடன் Add-ons பக்கம்](/img/config/settings-general.png)

Add-on window தோன்றும். **Install Now** கிளிக் செய்யுங்கள்.

![GoCardless add-on install dialog](/img/config/settings-general.png)

நிறுவல் முடிந்ததும், plugins பக்கத்திற்கு redirect செய்யப்படுவீர்கள். இங்கே **Network Activate** கிளிக் செய்தால் _GoCardless_ add-on உங்கள் network-ல் செயல்படுத்தப்படும்.

![GoCardless add-on-ஐ Network Activate செய்தல்](/img/config/settings-general.png)

_GoCardless_ gateway-ஐ தொடங்குவது எப்படி என்று அறிய, **இந்த கட்டுரையைப் படியுங்கள்**.

### Payfast add-on நிறுவுவது எப்படி:

Add-ons பக்கத்திற்குச் சென்று **Ultimate Multisite: Payfast Gateway** add-on-ஐ தேர்வு செய்யுங்கள்.

![கிடைக்கும் add-on-களின் பட்டியலுடன் Add-ons பக்கம்](/img/config/settings-general.png)

Add-on window தோன்றும். **Install Now** கிளிக் செய்யுங்கள்.

![Payfast add-on install dialog](/img/config/settings-general.png)

நிறுவல் முடிந்ததும், plugins பக்கத்திற்கு redirect செய்யப்படுவீர்கள். இங்கே **Network Activate** கிளிக் செய்தால் _Payfast_ add-on உங்கள் network-ல் செயல்படுத்தப்படும்.

![Payfast add-on-ஐ Network Activate செய்தல்](/img/config/settings-general.png)
