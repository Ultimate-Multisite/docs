---
title: Site Builder Mode நீக்கம் அறிவிப்பு
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Site Builder Mode நீக்கப்பட்ட அறிவிப்பு

**Superdav AI Agent v1.12.0 இல் Site Builder mode நீக்கப்பட்டுள்ளது.** நீங்கள் Site Builder mode-ஐப் பயன்படுத்தியிருந்தால், தீம் உருவாக்கம் மற்றும் Site setup-க்கு **Setup Assistant agent**-க்கு மாற வேண்டும்.

## என்ன நடந்தது? {#what-happened}

### Site Builder Mode (பழைய முறை) {#site-builder-mode-legacy}

Site Builder mode என்பது பின்வருவனவற்றிற்கான ஒரு விசாட் (wizard) அடிப்படையிலான இடைமுகமாக இருந்தது:

- டெம்ப்ளேட்களில் இருந்து தளங்களை உருவாக்குதல்
- அடிப்படை அமைப்புகளை உள்ளமைத்தல்
- ஒரு தீம் (theme)-ஐத் தேர்ந்தெடுத்தல்
- ஆரம்ப உள்ளடக்கத்தை அமைத்தல்

### அதற்குப் பதிலாக என்ன வந்தது? {#what-replaced-it}

**Setup Assistant agent** இப்போது Site Builder-ன் அனைத்து செயல்பாடுகளையும் கையாளுகிறது. இது பின்வருவனவற்றைக் கொண்டுள்ளது:

- அதிக நெகிழ்வுத்தன்மை கொண்ட, agent-உதவியுடன் கூடிய setup
- சிறந்த தீம் தனிப்பயனாக்குதல் விருப்பங்கள்
- Theme Builder onboarding உடன் ஒருங்கிணைப்பு
- எதிர்கால அமர்வுகளுக்காக நிரந்தர site_brief நினைவகம்

## நீங்கள் Site Builder Mode பயன்படுத்தியிருந்தால் {#if-you-were-using-site-builder-mode}

### உங்கள் தளங்கள் பாதுகாப்பானவை {#your-sites-are-safe}

- Site Builder mode மூலம் உருவாக்கப்பட்ட இருக்கும் தளங்கள் தொடர்ந்து வேலை செய்யும்
- தரவு இழப்பு அல்லது தளத்தில் எந்த இடையூறும் இல்லை
- நீங்கள் உங்கள் தளங்களை இயல்பாகவே நிர்வகிக்கலாம்

### Setup Assistant Agent-க்கு மாற்றுங்கள் {#migrate-to-setup-assistant-agent}

புதிய தளத்தை அமைக்க அல்லது தீம்களை மாற்ற, Setup Assistant agent-ஐப் பயன்படுத்தவும்:

```
"Help me set up a new site"
```

அல்லது

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent அதிக நெகிழ்வுத்தன்மையுடன் அதே செயல்பாட்டை வழங்குகிறது.

## ஒப்பீடு: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| அம்சம் (Feature) | Site Builder (நீக்கப்பட்டது) | Setup Assistant (புதியது) |
|---------|----------------------|----------------------|
| Setup முறை | Wizard படிவம் | Agent உரையாடல் |
| தீம் தேர்வு | முன் வரையறுக்கப்பட்ட டெம்ப்ளேட்கள் | தனிப்பயன் உருவாக்கம் |
| தனிப்பயனாக்கம் | வரையறுக்கப்பட்ட விருப்பங்கள் | முழு வடிவமைப்பு அமைப்பு (Full design system) |
| Site brief | சேமிக்கப்படவில்லை | நிரந்தர நினைவகம் (Persistent memory) |
| எதிர்கால அமர்வுகள் | மீண்டும் setup செய்ய வேண்டும் | சேமிக்கப்பட்ட site_brief-ஐப் பயன்படுத்தலாம் |
| நெகிழ்வுத்தன்மை | நிலையான செயல்முறை | தகவமைக்கக்கூடிய உரையாடல் |

## Setup Assistant Agent-க்கு மாற்றுவது எப்படி {#migrating-to-setup-assistant-agent}

### புதிய தளங்களுக்காக {#for-new-sites}

Site Builder mode-ஐப் பயன்படுத்துவதற்குப் பதிலாக:

1. கோரிக்கை: "Help me set up a new site" என்று கேட்கவும்
2. Setup Assistant agent பின்வருவனவற்றின் மூலம் உங்களுக்கு வழிகாட்டும்:
   - தளத்தின் நோக்கம் மற்றும் இலக்குகள்
   - இலக்கு பார்வையாளர்கள்
   - பிராண்ட் அடையாளம் (Brand identity)
   - தீம் உருவாக்கம்
   - ஆரம்ப உள்ளமைவு

### இருக்கும் தளங்களுக்காக {#for-existing-sites}

Site Builder mode-ல் இருந்து உங்களுக்கு ஒரு இருக்கும் தளம் இருந்தால்:

1. நீங்கள் அதை அப்படியே பயன்படுத்தலாம்
2. தீமைப் புதுப்பிக்க, "Redesign my site" என்று கோரிக்கை வைக்கவும்
3. Setup Assistant agent உங்களுக்கு ஒரு புதிய தீமை உருவாக்க உதவும்
4. உங்கள் தளத் தரவு மாறாமல் இருக்கும்

### தீம் மாற்றங்களுக்காக {#for-theme-changes}

Site Builder mode-ன் தீம் தேர்வுக்குப் பதிலாக:

1. கோரிக்கை: "Change my theme" என்று கேட்கவும்
2. Setup Assistant agent பின்வருவனவற்றைச் செய்யும்:
   - உங்கள் வடிவமைப்பு விருப்பங்களைப் பற்றி கேட்கும்
   - ஒரு தனிப்பயன் தீமை உருவாக்கும்
   - அதை உங்கள் தளத்தில் செயல்படுத்தும்

## முக்கிய வேறுபாடுகள் {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. ஒரு டெம்ப்ளேட்டைத் தேர்வு செய்யவும்
2. ஒரு தீம்-ஐத் தேர்ந்தெடுக்கவும்
3. அடிப்படை அமைப்புகளை உள்ளமைக்கவும்
4. முடிந்தது
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. உங்கள் தளத்தின் நோக்கத்தை விவரிக்கவும்
2. உங்கள் இலக்கு பார்வையாளர்களை வரையறுக்கவும்
3. வடிவமைப்பு விருப்பங்களைத் தேர்வு செய்யவும்
4. Agent தனிப்பயன் தீமை உருவாக்கும்
5. Agent தீமைச் செயல்படுத்தும்
6. எதிர்கால அமர்வுகளுக்காக site brief சேமிக்கப்படும்
```

## Setup Assistant Agent-ன் நன்மைகள் {#benefits-of-setup-assistant-agent}

### அதிக நெகிழ்வுத்தன்மை {#more-flexible}

- உங்கள் தளத்தை இயல்பான மொழியில் விவரிக்கலாம்
- தனிப்பயன் பரிந்துரைகளைப் பெறலாம்
- உங்கள் குறிப்பிட்ட தேவைகளுக்கு ஏற்ப தகவமைத்துக் கொள்ளும்

### சிறந்த தனிப்பயனாக்கம் {#better-customization}

- தனிப்பயன் தீம் உருவாக்கம்
- வடிவமைப்பு அமைப்பு முடிவுகள்
- நிரந்தர வடிவமைப்பு டோக்கன்கள் (Persistent design tokens)

### நிரந்தர நினைவகம் {#persistent-memory}

- உங்கள் site_brief சேமிக்கப்படுகிறது
- எதிர்கால agent-கள் உங்கள் தளத்தைப் புரிந்துகொள்ளும்
- setup தகவலை மீண்டும் சொல்ல வேண்டியதில்லை

### ஒருங்கிணைந்த செயல்முறை {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- அனைத்தும் ஒன்றாகத் தடையின்றி வேலை செய்யும்

## சிக்கல் தீர்க்கும் வழிகாட்டி (Troubleshooting) {#troubleshooting}

### Site Builder mode-ஐ என்னால் கண்டுபிடிக்க முடியவில்லை {#i-cant-find-site-builder-mode}

Site Builder mode நீக்கப்பட்டுள்ளது. அதற்குப் பதிலாக Setup Assistant agent-ஐப் பயன்படுத்தவும்:

```
"Help me set up a new site"
```

### Site Builder-ல் இருந்து ஒரு தளத்தை மீண்டும் உருவாக்க விரும்புகிறேன் {#i-want-to-recreate-a-site-from-site-builder}

நீங்கள் Setup Assistant agent-உடன் அதை மீண்டும் உருவாக்கலாம்:

1. கோரிக்கை: "Help me set up a new site" என்று கேட்கவும்
2. உங்கள் அசல் தளத்தின் நோக்கம் மற்றும் வடிவமைப்பை விவரிக்கவும்
3. agent ஒரு ஒத்த தீமை உருவாக்கும்
4. உங்கள் site_brief எதிர்கால குறிப்புக்காக சேமிக்கப்படும்

### எனது இருக்கும் Site Builder தளம் வேலை செய்யவில்லை {#my-existing-site-builder-site-isnt-working}

Site Builder mode மூலம் உருவாக்கப்பட்ட இருக்கும் தளங்கள் தொடர்ந்து வேலை செய்யும். உங்களுக்கு சிக்கல்கள் ஏற்பட்டால்:

1. உங்கள் தீம் இன்னும் செயலில் உள்ளதா என்று சரிபார்க்கவும்
2. உங்கள் plugins இயக்கப்பட்டுள்ளதா என்று சரிபார்க்கவும்
3. WordPress error logs-ஐச் சரிபார்க்கவும்
4. சிக்கல்கள் தொடர்ந்தால் ஆதரவைத் (support) தொடர்பு கொள்ளவும்

### எனது பழைய Site Builder டெம்ப்ளேட்களை இன்னும் பயன்படுத்த முடியுமா? {#can-i-still-use-my-old-site-builder-templates}

Site Builder டெம்ப்ளேட்கள் இனி கிடைக்காது. இருப்பினும்:

- உங்கள் இருக்கும் தளங்கள் தொடர்ந்து வேலை செய்யும்
- Setup Assistant agent மூலம் நீங்கள் ஒத்த தளங்களை மீண்டும் உருவாக்கலாம்
- Setup Assistant agent அதிக தனிப்பயனாக்க விருப்பங்களை வழங்குகிறது

## அடுத்த படிகள் {#next-steps}

1. **புதிய தளங்களுக்காக**: Setup Assistant agent-ஐப் பயன்படுத்தவும்
2. **ஏற்கனவே உள்ள தளங்களுக்காக**: அப்படியே பயன்படுத்துங்கள்
3. **தீம் மாற்றங்களுக்காக**: Setup Assistant agent-இடமிருந்து உதவி கேட்கவும்
4. **வடிவமைப்பு செம்மைப்படுத்த**: Design System Aesthetics skill-ஐப் பயன்படுத்தவும்

## தொடர்புடைய தலைப்புகள் {#related-topics}

- **Theme Builder Onboarding**: தனிப்பயன் தீம்களுக்கான வழிகாட்டப்பட்ட setup
- **Setup Assistant Agent**: agent-உதவியுடன் கூடிய Site setup
- **Site Specification Skill**: உங்கள் தளத்தின் இலக்குகள் மற்றும் பார்வையாளர்களை வரையறுத்தல்
- **Design System Aesthetics Skill**: உங்கள் தளத்தின் காட்சி அடையாளத்தை செம்மைப்படுத்துதல்
