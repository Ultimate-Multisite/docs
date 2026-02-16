---
title: Checkout Forms
sidebar_position: 19
_i18n_hash: dfdf572ddbe8772e1d720be52eda83d3
---
# Checkout Forms

புதிய வாடிக்கையாளர்களை மாற்றுவதற்கான வெவ்வேறு அணுகுமுறைகளை சோதிக்க Checkout Forms எளிய மற்றும் நெகிழ்வான வழியாகும்.

Ultimate Multisite 2.0 ஒரு Checkout Form editor வழங்குகிறது, இது உங்களுக்கு தேவையான அளவு படிவங்களை வெவ்வேறு புலங்கள், தயாரிப்புகள் மற்றும் பலவற்றுடன் உருவாக்க அனுமதிக்கிறது.

இந்த அம்சத்தை அணுகுவதற்கு, இடது பக்கப்பட்டியில் உள்ள Checkout Forms மெனுவிற்குச் செல்லவும்.

![Checkout Forms பட்டியல்](/img/config/checkout-forms-list.png)

இந்தப் பக்கத்தில், உங்களிடம் உள்ள அனைத்து checkout படிவங்களையும் காணலாம்.

புதிய படிவத்தை உருவாக்க விரும்பினால், பக்கத்தின் மேலே உள்ள Add Checkout Form என்பதைக் கிளிக் செய்யவும்.

உங்கள் தொடக்கப் புள்ளியாக இந்த மூன்று விருப்பங்களில் ஒன்றைத் தேர்வு செய்யலாம்: single step, multi-step அல்லது blank. பிறகு, Editor-க்கு செல்ல Go to the Editor என்பதைக் கிளிக் செய்யவும்.

![Checkout Form editor](/img/config/checkout-form-editor.png)

மாற்றாக, ஏற்கனவே உங்களிடம் உள்ள படிவங்களை அதன் பெயரின் கீழ் உள்ள விருப்பங்களைக் கிளிக் செய்து திருத்தலாம் அல்லது நகலெடுக்கலாம். அங்கே, படிவத்தின் shortcode-ஐ நகலெடுக்கவும் அல்லது படிவத்தை நீக்கவும் விருப்பங்களைக் காணலாம்.

![Checkout படிவ hover செயல்கள்](/img/config/checkout-form-hover-actions.png)

### Checkout Form-ஐ திருத்துதல்

வெவ்வேறு நோக்கங்களுக்காக checkout படிவங்களை உருவாக்கலாம். இந்த எடுத்துக்காட்டில் registration படிவத்தில் வேலை செய்வோம்.

Checkout form editor-க்கு சென்ற பிறகு, உங்கள் படிவத்திற்கு ஒரு பெயரும் (உள்ளக குறிப்புக்கு மட்டுமே பயன்படுத்தப்படும்) ஒரு slug-ம் (shortcode உருவாக்க பயன்படுத்தப்படும்) கொடுங்கள்.

![Checkout Form editor](/img/config/checkout-form-editor.png)

படிவங்கள் படிகள் மற்றும் புலங்களால் ஆனவை. Add New Checkout Step என்பதைக் கிளிக் செய்து புதிய படியைச் சேர்க்கலாம்.

![புதிய Checkout படியைச் சேர்](/img/config/checkout-form-add-step.png)

modal சாளரத்தின் முதல் tab-ல், உங்கள் படிவ படியின் உள்ளடக்கத்தை நிரப்புங்கள். அதற்கு ஒரு ID, பெயர் மற்றும் விளக்கம் கொடுங்கள். இந்த உருப்படிகள் பெரும்பாலும் உள்ளகமாக பயன்படுத்தப்படுகின்றன.

![Checkout படிவ படி](/img/config/checkout-form-step.png)

அடுத்ததாக, படியின் தெரிவுநிலையை அமைக்கவும். "Always show", "Only show for logged in users" அல்லது "Only show for guests" என்பதில் ஒன்றைத் தேர்வு செய்யலாம்.

![Checkout படிவ படி](/img/config/checkout-form-step.png)

இறுதியாக, படி style-ஐ கட்டமைக்கவும். இவை விருப்பமான புலங்கள்.

![Checkout படிவ படி](/img/config/checkout-form-step.png)

இப்போது, நமது முதல் படிக்கு புலங்களைச் சேர்க்க வேண்டிய நேரம். Add New Field என்பதைக் கிளிக் செய்து நீங்கள் விரும்பும் பிரிவு வகையைத் தேர்வு செய்யவும்.

![புலங்களுடன் Checkout படிவ படி](/img/config/checkout-form-step.png)

ஒவ்வொரு புலத்திற்கும் நிரப்ப வேண்டிய வெவ்வேறு parameters உள்ளன. இந்த முதல் உள்ளீட்டிற்கு, "Username" புலத்தைத் தேர்வு செய்வோம்.

![Checkout படிவ படி](/img/config/checkout-form-step.png)

![Checkout படிவ படி](/img/config/checkout-form-step.png)

![Checkout படிவ படி](/img/config/checkout-form-step.png)

உங்களுக்குத் தேவையான அளவு படிகள் மற்றும் புலங்களைச் சேர்க்கலாம். உங்கள் வாடிக்கையாளர்கள் ஒன்றைத் தேர்வு செய்ய உங்கள் தயாரிப்புகளைக் காட்ட, Pricing Table புலத்தைப் பயன்படுத்துங்கள். உங்கள் வாடிக்கையாளர்கள் ஒரு template தேர்வு செய்ய விரும்பினால், Template Selection புலத்தைச் சேர்க்கவும். இப்படி தொடர்ந்து செய்யலாம்.

_**குறிப்பு:** checkout படிவத்தை உருவாக்க username, email, password, site title, site URL, order summary, payment மற்றும் submit button ஆகியவை கட்டாயமான புலங்களாகும்._

உங்கள் checkout படிவத்தில் வேலை செய்யும்போது, உங்கள் வாடிக்கையாளர்கள் படிவத்தை எப்படிப் பார்ப்பார்கள் என்பதைப் பார்க்க Preview பொத்தானை எப்போதும் பயன்படுத்தலாம். ஏற்கனவே உள்ள பயனராகவோ அல்லது பார்வையாளராகவோ காண மாற்றலாம்.

![Checkout Form save](/img/config/checkout-form-save.png)

![Checkout Form editor](/img/config/checkout-form-editor.png)

இறுதியாக, Advanced Options-ல் "Thank You" பக்கத்திற்கான செய்தியை கட்டமைக்கலாம், மாற்றங்களைக் கண்காணிக்க snippets சேர்க்கலாம், உங்கள் checkout படிவத்திற்கு custom CSS சேர்க்கலாம் அல்லது குறிப்பிட்ட நாடுகளுக்கு மட்டும் கட்டுப்படுத்தலாம்.

![Advanced Options](/img/config/checkout-form-advanced.png)

வலது நெடுவரிசையில் உள்ள இந்த விருப்பத்தை toggle செய்து உங்கள் checkout படிவத்தை கைமுறையாக இயக்கலாம் அல்லது முடக்கலாம், அல்லது படிவத்தை நிரந்தரமாக நீக்கலாம்.

![Active toggle](/img/config/checkout-form-active.png)

உங்கள் checkout படிவத்தை save செய்ய மறக்காதீர்கள்!

![Save பொத்தான்](/img/config/checkout-form-save.png)

உங்கள் படிவத்தின் shortcode-ஐப் பெற Generate Shortcode என்பதைக் கிளிக் செய்து modal சாளரத்தில் காட்டப்படும் முடிவை நகலெடுக்கவும்.

![Shortcode-உடன் Save பொத்தான்](/img/config/checkout-form-save.png)
