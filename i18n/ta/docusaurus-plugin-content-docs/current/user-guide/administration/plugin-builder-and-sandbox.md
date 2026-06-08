---
title: பிளக்இன் பில்டர் மற்றும் சாண்ட்பாக்ஸ்
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 மூலம் அறிமுகப்படுத்தப்பட்ட **Plugin Builder & Sandbox System** என்பது, உங்கள் network-ல் உள்ள WordPress plugins-களை AI assistant மூலம் உருவாக்கவும், செயல்படுத்தவும் (activate), நிர்வகிக்கவும் உதவும். இது அனைத்தும் ஒரு பாதுகாப்பான, தனிமைப்படுத்தப்பட்ட sandbox environment-ல் நடக்கும்.

## Overview

Plugin Builder என்பது AI assistant-க்கு natural language requests-க்கு ஏற்ப custom WordPress plugins-களை எழுத உதவுகிறது. உருவாக்கப்பட்ட plugins-கள், live site functionality-ஐ பாதிக்காமல், sandbox layer-க்குள் சரிபார்க்கப்பட்டு (validated), சேமிக்கப்பட்டு (stored), செயல்படுத்தப்படும் (activated).

இதன் பயன்பாட்டுச் சூழல்கள் (Use cases) சில:

- developer உதவி இல்லாமல் இலகுவான utility plugins-களை உருவாக்குதல்.
- WordPress hooks அல்லது custom post types தேவைப்படும் அம்சங்களை முன்மாதிரியாக (Prototyping) உருவாக்குதல்.
- batch operations-களுக்காக குறுகிய கால ஆட்டோமேஷன் ஸ்கிரிப்ட்களை உருவாக்குதல்.

## AI மூலம் Plugin உருவாக்குதல்

ஒரு plugin-ஐ உருவாக்க, Gratis AI Agent chat interface-ஐ திறந்து, உங்களுக்கு என்ன தேவை என்பதை விவரிக்கவும். உதாரணமாக:

> "dashboard-ல் ஒரு custom admin notice-ஐ சேர்க்கும் ஒரு plugin-ஐ உருவாக்கவும்."

AI என்ன செய்யும்:

1. structured code generation-ஐப் பயன்படுத்தி plugin PHP code-ஐ உருவாக்கும்.
2. syntax errors மற்றும் unsafe patterns-களுக்காக வெளியீட்டைச் சரிபார்க்கும் (Validate).
3. உருவாக்கப்பட்ட plugin-ஐ sandbox store-ல் சேமிக்கும்.
4. plugin slug மற்றும் ஒரு **Activate in Sandbox** பொத்தானுடன் உறுதிப்படுத்தல் செய்தியைத் திருப்பி அனுப்பும்.

செயல்படுத்தும் முன், அதே உரையாடல் thread-ல் follow up செய்வதன் மூலம் நீங்கள் முடிவை மேம்படுத்திக் கொள்ளலாம்.

## Sandbox Activation

sandbox-ல் உருவாக்கப்பட்ட plugin-ஐ செயல்படுத்துவது (activating) என்பது, அதை live network-ல் செயல்படுத்துவதற்கு வேறுபட்டது. sandbox:

- plugin-ஐ ஒரு தனிமைப்படுத்தப்பட்ட WordPress environment-ல் (wp-env) இயக்கும்.
- ஏதேனும் PHP errors, warnings, அல்லது hook conflicts-களைப் பிடிக்கும்.
- activation முடிவை chat interface-ல் மீண்டும் தெரிவிக்கும்.

sandbox-ல் ஒரு plugin-ஐ செயல்படுத்த, AI chat response-ல் உள்ள **Activate in Sandbox** பொத்தானை கிளிக் செய்யவும், அல்லது இந்த slash command-ஐப் பயன்படுத்தவும்:

```
/activate-plugin <plugin-slug>
```

செயல்படுத்தல் வெற்றி பெற்றதா அல்லது தோல்வியடைந்ததா என்பதை ஒரு status message உறுதிப்படுத்தும். தோல்வியடைந்தால், error log chat thread-ல் காட்டப்படும்.

## Generated Plugins-களை நிர்வகித்தல்

உருவாக்கப்பட்ட plugins-கள் **Gratis AI Agent → Plugin Builder → Manage Plugins** என்ற இடத்தில் பட்டியலிடப்பட்டுள்ளன. இந்த screen-ல் இருந்து நீங்கள்:

| Action | Description |
|---|---|
| **View source** | முழு plugin PHP code-ஐ மதிப்பாய்வு செய்யலாம். |
| **Re-activate in sandbox** | sandbox activation check-ஐ மீண்டும் இயக்கலாம். |
| **Install on network** | plugin-ஐ live network-ல் deploy செய்யலாம் (இதற்கு manual confirmation தேவை). |
| **Update** | AI மூலம் ஒரு புதிய பதிப்பை அளித்து, இருக்கும் code-ஐ மாற்றலாம். |
| **Delete** | plugin-ஐ sandbox store-ல் இருந்து நீக்குகிறது. முதலில் அனைத்து sites-களிலிருந்தும் அதைச் செயலிழக்கச் செய்யும். |

:::warning
**Install on network** என்பது உருவாக்கப்பட்ட plugin-ஐ உங்கள் live WordPress multisite-ல் deploy செய்யும். தொடர்வதற்கு முன் plugin code-ஐ மதிப்பாய்வு செய்யவும். live install-ஐ முடிப்பதற்கு முன் Gratis AI Agent உறுதிப்படுத்தல் கேட்கும்.
:::

## Network-ல் Generated Plugin-ஐ நிறுவுதல்

sandbox-ல் உள்ள plugin-ஆல் நீங்கள் திருப்தி அடைந்தால், அதை live network-ல் நிறுவலாம்:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** என்பதற்குச் செல்லவும்.
2. deploy செய்ய விரும்பும் plugin-க்கு அருகில் உள்ள **Install on Network** என்பதை கிளிக் செய்யவும்.
3. dialog-ஐ உறுதிப்படுத்தவும். plugin ஆனது `wp-content/plugins/` என்ற இடத்தில் நிறுவப்பட்டு, network-ல் செயல்படுத்தப்படும்.

மாற்றாக, chat interface-ல் slash command-ஐப் பயன்படுத்தவும்:

```
/install-plugin <plugin-slug>
```

## Plugin Updates

ஒரு உருவாக்கப்பட்ட plugin-ஐப் புதுப்பிக்க, ஒரு புதிய உரையாடலில் AI assistant-க்கு மாற்றத்தை விவரிக்கவும்:

> "dashboard-notice plugin-ஐ நிர்வாகிகளுக்கு (administrators) மட்டுமே notice காட்டும்படி புதுப்பிக்கவும்."

AI ஒரு புதிய பதிப்பை உருவாக்கும், இது sandbox-ல் தற்போதைய பதிப்பிற்கு அருகில் தோன்றும். update பயன்படுத்தப்படுவதற்கு முன், நீங்கள் diff-ஐ மதிப்பாய்வு செய்து உறுதிப்படுத்த வேண்டும்.

## HookScanner Integration

Plugin Builder, ஒவ்வொரு உருவாக்கப்பட்ட plugin-ஆல் பதிவுசெய்யப்பட்ட hooks மற்றும் filters-களைப் பகுப்பாய்வு செய்ய ஒரு ஒருங்கிணைந்த **HookScanner**-ஐப் பயன்படுத்துகிறது. HookScanner வெளியீடு chat response-ல் காட்டப்படும் மற்றும் இதில் பின்வருவன அடங்கும்:

- பதிவுசெய்யப்பட்ட Action hooks (`add_action` அழைப்புகள்).
- பதிவுசெய்யப்பட்ட Filter hooks (`add_filter` அழைப்புகள்).
- plugin dependencies-ல் காணப்படும் ஏதேனும் hooks (இது `vendor/` மற்றும் `node_modules/` கோப்பகங்களைத் தவிர்க்கும்).

இது plugin-ஐ செயல்படுத்துவதற்கு முன் அதன் நடத்தையைப் புரிந்துகொள்ள உங்களுக்கு உதவுகிறது.

## Security Considerations

- உருவாக்கப்பட்ட plugins-கள், கையால் நிறுவப்பட்ட plugins-களிலிருந்து தனித்தனியாக சேமிக்கப்படுகின்றன. நீங்கள் அவற்றை network-ல் வெளிப்படையாக நிறுவாதவரை, அவை standard WordPress plugin management screen-ல் அணுக முடியாது.
- plugin கோப்புகளை எழுதும் போது directory traversal-ஐத் தடுக்க sandbox path validation-ஐப் பயன்படுத்துகிறது.
- ஆபத்தான function அழைப்புகள் (உதாரணமாக, `eval`, `exec`, `system`) கொண்ட plugins-கள் validation சமயத்தில் குறிக்கப்பட்டு, செயல்படுத்தப்படாது.
