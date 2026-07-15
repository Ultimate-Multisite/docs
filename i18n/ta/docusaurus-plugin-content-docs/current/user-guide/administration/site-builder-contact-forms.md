---
title: Site Builder தொடர்பு படிவங்கள்
sidebar_position: 22
_i18n_hash: b8d4d2003a8946f4184ca72fd9529d35
---
# Site Builder தொடர்பு படிவங்கள்

Superdav AI Agent v1.10.0, Site Builder agent-ஐப் பயன்படுத்தி, Chat interface-ல் இருந்தே தொடர்பு படிவங்களை (contact forms) உருவாக்கும் திறனைச் சேர்க்கிறது. இதன் மூலம், Chat-ஐ விட்டு வெளியேறாமல், எந்தப் பக்கத்திலும் முழுமையாகச் செயல்படும் தொடர்பு படிவங்களை நீங்கள் சேர்க்க முடியும்.

## கண்ணோட்டம் (Overview) {#overview}

Site Builder தொடர்பு படிவத் திறன் (`create_contact_form`), நீங்கள் நிறுவியுள்ள படிவ Plugin-ஐ தானாகவே கண்டறிந்து, அந்த Plugin-இன் சொந்த திறன்களைப் பயன்படுத்தி ஒரு தொடர்பு படிவத்தை உருவாக்கும். ஆதரிக்கப்படும் சில படிவ Plugin-கள்:

- Contact Form 7
- WPForms
- Fluent Forms
- Gravity Forms

உதவியாளர் (assistant) உங்கள் தளத்தில் கிடைக்கக்கூடிய சிறந்த படிவ Plugin-ஐ தானாகவே தேர்ந்தெடுத்து, அந்த Plugin-க்கு ஏற்றவாறு ஒரு தொடர்பு படிவத்தை உருவாக்குகிறார்.

## தொடர்பு படிவத்தை உருவாக்குதல் (Creating a Contact Form) {#creating-a-contact-form}

Site Builder-ஐப் பயன்படுத்தி ஒரு தொடர்பு படிவத்தை உருவாக்க:

1. WordPress admin-ல் **Gratis AI Agent** chat panel-ஐத் திறக்கவும்.
2. Chat தலைப்பிலிருக்கும் agent ஐகானைக் கிளிக் செய்து **Site Builder** agent-க்கு மாறவும்.
3. நீங்கள் உருவாக்க விரும்பும் தொடர்பு படிவத்தை விவரிக்கவும். உதாரணமாக:

   > "பெயர், மின்னஞ்சல், செய்தி மற்றும் தொலைபேசி எண் ஆகிய புலங்களுடன் கூடிய தொடர்புப் பக்கத்திற்கு ஒரு தொடர்பு படிவத்தைச் சேர்க்கவும்."

   அல்லது எளிமையாக:

   > "தொடர்புப் பக்கத்திற்கான ஒரு தொடர்பு படிவத்தை உருவாக்கவும்."

4. Site Builder தொடர்பு படிவத்தை உருவாக்கி, உட்பொதிக்கத் (embed) தயாரான ஒரு shortcode-ஐ உங்களுக்குத் திருப்பி அனுப்பும்.

## உருவாக்கப்பட்ட Shortcode-ஐப் பயன்படுத்துதல் (Using the Generated Shortcode) {#using-the-generated-shortcode}

Site Builder தொடர்பு படிவத்தை உருவாக்கிய பிறகு, அது ஒரு shortcode-ஐத் திருப்பி அனுப்பும் (உதாரணமாக, `[contact-form-7 id="123"]`). நீங்கள் இதை:

1. **ஒரு பக்கத்திலோ அல்லது போஸ்டிலோ உட்பொதிக்கலாம்** — shortcode-ஐ நகலெடுத்து, block editor அல்லது classic editor-ஐப் பயன்படுத்தி எந்தப் பக்கத்திலோ அல்லது போஸ்டிலோ ஒட்டவும்.
2. **Site Builder மூலம் சேர்க்கலாம்** — ஒரு குறிப்பிட்ட பக்கத்தில் படிவத்தைச் சேர்க்க Site Builder-விடம் கேட்கவும்:

   > "தொடர்புப் பக்கத்தில் தொடர்பு படிவத்தைச் சேர்க்கவும்."

3. **ஒரு Template-ல் பயன்படுத்தலாம்** — உங்களுக்கு PHP பற்றித் தெரிந்திருந்தால், அந்த shortcode-ஐ ஒரு theme template file-இல் சேர்க்கலாம்.

## தொடர்பு படிவத்தை தனிப்பயனாக்குதல் (Customizing the Contact Form) {#customizing-the-contact-form}

Site Builder தொடர்பு படிவத்தை உருவாக்கிய பிறகு, நீங்கள் அதை மேலும் தனிப்பயனாக்கலாம்:

### Chat Interface மூலம் {#via-the-chat-interface}

படிவத்தை மாற்ற Site Builder-விடம் கேட்கவும்:

> "ஒரு Subject field-ஐச் சேர்க்கவும், மேலும் செய்திப் புலம் (message field) கட்டாயமாக்கவும் (required)."

Site Builder படிவத்தை மேம்படுத்தி, புதுப்பிக்கப்பட்ட shortcode-ஐத் திருப்பி அனுப்பும்.

### Form Plugin-இன் Admin Interface மூலம் {#via-the-form-plugins-admin-interface}

உங்கள் படிவ Plugin-இன் அமைப்புகளிலும் நீங்கள் நேரடியாகப் படிவத்தை தனிப்பயனாக்க முடியும்:

1. WordPress admin-ல் **Contact Form 7** (அல்லது நீங்கள் நிறுவிய படிவ Plugin) என்பதற்குச் செல்லவும்.
2. Site Builder உருவாக்கிய படிவத்தைக் கண்டறியவும்.
3. தேவைக்கேற்ப படிவப் புலங்கள் (form fields), சரிபார்ப்பு விதிகள் (validation rules), மற்றும் மின்னஞ்சல் அறிவிப்புகளை (email notifications) திருத்தவும்.

## படிவ Plugin-கள் மற்றும் இணக்கத்தன்மை (Form Plugins and Compatibility) {#form-plugins-and-compatibility}

Site Builder உங்கள் தளத்தில் எந்தப் படிவ Plugin நிறுவப்பட்டுள்ளது என்பதைக் தானாகவே கண்டறிந்து, அதைப் பயன்படுத்தி தொடர்பு படிவத்தை உருவாக்கும். பல படிவ Plugin-கள் நிறுவப்பட்டிருந்தால், Site Builder அவற்றை இந்த வரிசையில் முன்னுரிமை அளிக்கும்:

1. Contact Form 7
2. WPForms
3. Fluent Forms
4. Gravity Forms

இந்த Plugin-களில் எதுவும் நிறுவப்படவில்லை என்றால், தொடர்பு படிவத்தை உருவாக்குவதற்கு முன் ஒன்றைப் பொருத்தும்படி Site Builder பரிந்துரைக்கும்.

## மின்னஞ்சல் அறிவிப்புகள் (Email Notifications) {#email-notifications}

Site Builder ஆல் உருவாக்கப்பட்ட தொடர்பு படிவங்கள் இயல்பாகவே (by default) தள நிர்வாகிக்கு மின்னஞ்சல் அறிவிப்புகளை அனுப்பும்படி கட்டமைக்கப்பட்டுள்ளன. நீங்கள் பெறுநர் மின்னஞ்சல் முகவரியையும், அறிவிப்புச் செய்தியையும் தனிப்பயனாக்கலாம்:

1. உங்கள் படிவ Plugin-இன் admin interface-க்குச் செல்லவும்.
2. Site Builder உருவாக்கிய படிவத்தைக் கண்டறியவும்.
3. மின்னஞ்சல் அறிவிப்பு அமைப்புகளைத் திருத்தவும்.

விரிவான வழிமுறைகளுக்கு, உங்கள் படிவ Plugin-இன் ஆவணங்களைப் பார்க்கவும்:

- [Contact Form 7 Email Notifications](https://contactform7.com/docs/)
- [WPForms Email Notifications](https://wpforms.com/docs/)
- [Fluent Forms Email Notifications](https://fluentforms.com/docs/)
- [Gravity Forms Email Notifications](https://docs.gravityforms.com/)

## உதாரணப் பயன்பாட்டு வழக்குகள் (Example Use Cases) {#example-use-cases}

### எளிய தொடர்பு படிவம் (Simple Contact Form) {#simple-contact-form}

> "பெயர், மின்னஞ்சல் மற்றும் செய்தி புலங்களுடன் கூடிய எளிய தொடர்பு படிவத்தை உருவாக்கவும்."

### பல-படி படிவம் (Multi-Step Form) {#multi-step-form}

> "தொடர்புத் தகவலுக்கான முதல் படியையும், செய்தி மற்றும் விருப்பமான தொடர்பு முறைக்கான இரண்டாவது படியையும் கொண்ட ஒரு தொடர்பு படிவத்தை உருவாக்கவும்."

### நிபந்தனைத் தர்க்கம் கொண்ட படிவம் (Form with Conditional Logic) {#form-with-conditional-logic}

> "ஒரு கீழ்தோன்றும் மெனுவில் (dropdown) பயனரின் தேர்வின் அடிப்படையில் வெவ்வேறு புலங்களைக் காட்டும் ஒரு தொடர்பு படிவத்தை உருவாக்கவும்."

### கோப்புப் பதிவேற்றத்துடன் கூடிய படிவம் (Form with File Upload) {#form-with-file-upload}

> "பயனர்கள் ஒரு கோப்பையோ அல்லது இணைப்பையோ பதிவேற்ற அனுமதிக்கும் ஒரு தொடர்பு படிவத்தை உருவாக்கவும்."

:::note
தொடர்பு படிவத்தை உருவாக்குவது Superdav AI Agent v1.10.0 மற்றும் அதற்குப் பிந்தைய பதிப்புகளில் கிடைக்கிறது. இந்தத் திறனைப் பயன்படுத்த Site Builder agent செயல்பட வேண்டியது அவசியம்.
:::
