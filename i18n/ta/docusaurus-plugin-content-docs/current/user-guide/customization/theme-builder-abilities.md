---
title: தீம் பில்டர் திறன்கள்
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder திறன்கள்: Scaffold மற்றும் Activate Block Themes

Superdav AI Agent v1.12.0 இரண்டு சக்திவாய்ந்த திறன்களை அறிமுகப்படுத்துகிறது. இவை chat interface-ல் இருந்து நேரடியாக தனிப்பயன் block themes-ஐ உருவாக்கவும், பயன்படுத்தவும் உங்களை அனுமதிக்கின்றன.

## கண்ணோட்டம் (Overview)

**scaffold-block-theme** மற்றும் **activate-theme** ஆகிய திறன்கள், agents-க்கு பின்வரும் செயல்பாடுகளைச் செய்ய உதவுகின்றன:
- உங்கள் விவரக்குறிப்புகளின் அடிப்படையில் முழுமையான, பயன்படுத்தத் தயார் நிலையில் உள்ள block themes-ஐ உருவாக்குதல்
- மனிதத் தலையீடு இல்லாமல் உங்கள் தளத்தில் themes-ஐ தானாகவே செயல்படுத்துதல் (activate செய்தல்)
- வழிகாட்டப்பட்ட வடிவமைப்பு முடிவுகள் மூலம் ஒத்திசைவான காட்சி அடையாளங்களை உருவாக்குதல்

## Block Theme-ஐ உருவாக்குதல் (Scaffold Block Theme)

**scaffold-block-theme** என்ற திறன், ஒரு முழுமையான theme கட்டமைப்பைக் கொண்ட புதிய WordPress block theme-ஐ உருவாக்கும். இதில் அடங்குவன:

- வடிவமைப்பு குறியீடுகளுடன் கூடிய `theme.json` கட்டமைப்பு
- பொதுவான Layout-ங்களுக்கான Block template கோப்புகள்
- தனிப்பயன் block ஸ்டைல்கள் மற்றும் மாறுபாடுகள் (variations)
- Theme மெட்டாடேட்டா மற்றும் ஆதரவு அறிவிப்புகள்

### எப்படிப் பயன்படுத்துவது (How to Invoke)

Superdav AI Agent உடன் நீங்கள் உரையாடும்போது, theme உருவாக்கத்தைக் கோரலாம்:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

agent பின்வரும் செயல்களைச் செய்யும்:
1. உரையாடலின் மூலம் உங்கள் வடிவமைப்பு விருப்பங்களைச் சேகரிக்கும்
2. முழுமையான theme கட்டமைப்பை உருவாக்கும்
3. தேவையான அனைத்து theme கோப்புகளையும் உருவாக்கும்
4. செயல்படுத்துவதற்கு (activation) theme-ஐ தயார் செய்யும்

### எதிர்பார்க்கப்படும் வெளியீடு (Expected Output)

இந்தத் திறன் வெற்றிகரமாகச் செயல்படுத்தப்பட்டால், நீங்கள் காண்பது:

- theme உருவாக்கப்பட்டது என்ற உறுதிப்படுத்தல்
- theme பெயர் மற்றும் இடம்
- பயன்படுத்தப்பட்ட வடிவமைப்பு குறியீடுகளின் (colors, typography, spacing) சுருக்கம்
- உடனடியாகச் செயல்படுத்தத் தயார் என்ற நிலை

உதாரண வெளியீடு:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Theme-ஐ செயல்படுத்துதல் (Activate Theme)

**activate-theme** என்ற திறன், உங்கள் தளத்தை புதிதாக உருவாக்கப்பட்ட அல்லது ஏற்கனவே உள்ள block theme-க்கு மாற்றுகிறது.

### எப்படிப் பயன்படுத்துவது (How to Invoke)

ஒரு theme-ஐ உருவாக்கிய பிறகு, நீங்கள் உடனடியாக அதைச் செயல்படுத்தலாம்:

```
"Activate the Modern Agency theme"
```

அல்லது எந்தவொரு இருக்கும் theme-ஐயும் செயல்படுத்தலாம்:

```
"Switch to the Twentytwentyfour theme"
```

### எதிர்பார்க்கப்படும் வெளியீடு (Expected Output)

செயல்படுத்துதல் வெற்றி பெற்றால்:

- செயல்படும் theme-ன் உறுதிப்படுத்தல்
- முந்தைய theme பெயர் (குறிப்புக்காக)
- theme இப்போது இயங்கும் தளத்தின் URL
- theme-குறிப்பிட்ட அமைப்பு குறிப்புகள் ஏதேனும் இருந்தால்

உதாரண வெளியீடு:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## செயல்முறை: Scaffold மற்றும் Activate

ஒரு பொதுவான செயல்முறை இந்த இரண்டு திறன்களையும் இணைக்கிறது:

1. **theme உருவாக்கத்தைக் கோருதல்**: "எனது SaaS landing page-க்கு ஒரு block theme-ஐ உருவாக்கவும்"
2. **Agent theme-ஐ உருவாக்குதல்**: கோப்புகள் மற்றும் வடிவமைப்பு குறியீடுகளை உருவாக்கும்
3. **பரிசீலனை மற்றும் செம்மைப்படுத்துதல்**: தேவைப்பட்டால் வடிவமைப்பு மாற்றங்களைப் பற்றி விவாதித்தல்
4. **செயல்படுத்துதல்**: "இப்போது theme-ஐ செயல்படுத்தவும்"
5. **சரிபார்த்தல்**: புதிய வடிவமைப்பு இயங்குகிறதா என்பதை உறுதிப்படுத்த உங்கள் தளத்திற்குச் செல்லவும்

## Design Tokens மற்றும் தனிப்பயனாக்கம் (Customization)

உருவாக்கப்பட்ட themes-கள் WordPress design tokens-ஐ (theme.json மூலம்) பின்வருவனவற்றிற்காகப் பயன்படுத்துகின்றன:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius மற்றும் width tokens
- **Shadows**: Elevation levels

இந்த tokens அனைத்தும் `theme.json`-ல் மையப்படுத்தப்பட்டிருப்பதால், ஒரே கோப்பிலிருந்து உங்கள் முழு வடிவமைப்பு அமைப்பையும் (design system) சரிசெய்வது எளிது.

## வரம்புகள் மற்றும் குறிப்புகள் (Limitations and Notes)

- Themes-கள் `/wp-content/themes/`-ல் உருவாக்கப்படுகின்றன, மேலும் அவை WordPress பெயரிடல் மரபுகளைப் பின்பற்ற வேண்டும்
- செயல்படுத்துவதற்கு உங்கள் WordPress தளத்தில் பொருத்தமான அனுமதிகள் தேவை
- themes-களில் தனிப்பயன் PHP குறியீடு மிகக் குறைவாகவே இருக்கும்; சிக்கலான செயல்பாடுகளுக்கு plugins-ஐப் பயன்படுத்தவும்
- Block themes, WordPress 5.9 மற்றும் அதற்குப் பிந்தைய பதிப்புகளுடன் சிறப்பாகச் செயல்படும்

## சிக்கல் தீர்த்தல் (Troubleshooting)

**Scaffolding செய்த பிறகும் Theme தெரியவில்லை**
- theme directory இருக்கிறதா மற்றும் சரியான அனுமதிகள் உள்ளதா என்பதைச் சரிபார்க்கவும்
- `theme.json` சரியான JSON ஆக உள்ளதா என்பதைச் சரிபார்க்கவும்
- theme பெயர் ஏற்கனவே உள்ள themes-உடன் முரண்படவில்லை என்பதை உறுதிப்படுத்தவும்

**Activation தோல்வியடைதல்**
- உங்களுக்கு administrator அனுமதிகள் உள்ளதா என்பதை உறுதிப்படுத்தவும்
- theme directory WordPress ஆல் படிக்கக்கூடியதாக உள்ளதா என்பதைச் சரிபார்க்கவும்
- விவரங்களுக்காக WordPress error logs-ஐப் பார்க்கவும்

**Design tokens செயல்படவில்லை**
- `theme.json` syntax சரியாக உள்ளதா என்பதைச் சரிபார்க்கவும்
- ஏதேனும் caching plugins இருந்தால் அவற்றை அழிக்கவும்
- நீங்கள் பயன்படுத்தும் tokens-ஐ உங்கள் WordPress பதிப்பு ஆதரிக்கிறதா என்பதைச் சரிபார்க்கவும்

## அடுத்த படிகள் (Next Steps)

உங்கள் theme-ஐச் செயல்படுத்திய பிறகு, நீங்கள் செய்யக்கூடியவை:
- Typography, colors, மற்றும் spacing-ஐ செம்மைப்படுத்த **Design System Aesthetics skill**-ஐப் பயன்படுத்தலாம்
- WordPress block editor மூலம் தனிப்பட்ட block ஸ்டைல்களைத் தனிப்பயனாக்கலாம்
- theme-ன் `style.css` கோப்பில் தனிப்பயன் CSS சேர்க்கலாம்
- குறிப்பிட்ட page types-களுக்காக தனிப்பயன் block templates உருவாக்கலாம்
