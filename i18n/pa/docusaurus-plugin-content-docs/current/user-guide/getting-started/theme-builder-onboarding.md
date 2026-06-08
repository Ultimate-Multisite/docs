---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 ਇੱਕ ਗਾਈਡਡ **Theme Builder onboarding flow** ਪੇਸ਼ ਕਰਦਾ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਤੁਹਾਡੇ ਸ਼ੁਰੂਆਤੀ ਸੈਟਅਪ ਦੌਰਾਨ ਇੱਕ ਕਸਟਮ ਬਲਾਕ تھیਮ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। ਇਹ ਪੁਰਾਣੇ Site Builder mode ਦੀ ਥਾਂ ਇੱਕ ਵਧੇਰੇ ਲਚਕੀਲੇ, agent-ਸਹਾਇਤਾ ਵਾਲੇ ਪਹੁੰਚ ਨਾਲ ਕੰਮ ਕਰਦਾ ਹੈ।

## Theme Builder Onboarding Flow ਕੀ ਹੈ?

Theme Builder onboarding flow ਇੱਕ ਇੰਟਰਐਕਟਿਵ ਸੈਟਅਪ ਵਿਜ਼ਾਰਡ ਹੈ ਜੋ:

- ਤੁਹਾਨੂੰ ਡਿਜ਼ਾਈਨ ਦੇ ਫੈਸਲਿਆਂ (ਰੰਗ, ਟਾਈਪੋਗ੍ਰਾਫੀ, ਲੇਆਉਟ) ਵਿੱਚ ਗਾਈਡ ਕਰਦਾ ਹੈ
- ਤੁਹਾਡੀ ਸਾਈਟ ਦੀ ਵਿਜ਼ੂਅਲ ਪਛਾਣ (visual identity) ਦੀਆਂ ਤਰਜੀਹਾਂ ਨੂੰ ਕੈਪਚਰ ਕਰਦਾ ਹੈ
- ਤੁਹਾਡੀਆਂ ਲੋੜਾਂ ਅਨੁਸਾਰ ਇੱਕ ਕਸਟਮ ਬਲਾਕ تھیਮ ਤਿਆਰ ਕਰਦਾ ਹੈ
- ਪੂਰਾ ਹੋਣ 'ਤੇ تھیਮ ਨੂੰ ਆਪਣੇ ਆਪ ਐਕਟੀਵੇਟ ਕਰਦਾ ਹੈ

ਇਹ flow **Setup Assistant agent** ਦੁਆਰਾ ਚਲਾਇਆ ਜਾਂਦਾ ਹੈ, ਜੋ ਸਪੱਸ਼ਟ ਸਵਾਲ ਪੁੱਛਦਾ ਹੈ ਅਤੇ ਤੁਹਾਡੇ تھیਮ ਨੂੰ ਹੌਲੀ-ਹੌਲੀ ਬਣਾਉਂਦਾ ਹੈ।

## Theme Builder Onboarding ਸ਼ੁਰੂ ਕਰਨਾ

### ਪਹਿਲੀ ਵਾਰ ਸੈਟਅਪ (First-Run Setup)

ਜਦੋਂ ਤੁਸੀਂ ਪਹਿਲੀ ਵਾਰ Superdav AI Agent ਨੂੰ ਇੱਕ ਨਵੇਂ WordPress installation 'ਤੇ ਲਾਂਚ ਕਰਦੇ ਹੋ, ਤਾਂ ਤੁਹਾਨੂੰ ਇਹ ਦਿਖਾਈ ਦੇਵੇਗਾ:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow ਵਿੱਚ ਦਾਖਲ ਹੋਣ ਲਈ **"Build a custom theme"** ਚੁਣੋ।

### ਹੱਥੀਂ ਐਕਟੀਵੇਸ਼ਨ (Manual Activation)

ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਮੇਂ Theme Builder onboarding ਸ਼ੁਰੂ ਕਰ ਸਕਦੇ ਹੋ ਇਹ ਕਹਿ ਕੇ:

```
"Start the Theme Builder onboarding"
```

ਜਾਂ

```
"Help me create a custom theme"
```

## Onboarding ਦੇ ਕਦਮ (The Onboarding Steps)

### ਕਦਮ 1: Mode Selection

Setup Assistant agent ਤੁਹਾਡੀ ਤਰਜੀਹ ਬਾਰੇ ਪੁੱਛਦਾ ਹੈ:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** ਜ਼ਿਆਦਾਤਰ ਉਪਭੋਗਤਾਵਾਂ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਜਾਂਦਾ ਹੈ; agent ਤੁਹਾਡੇ ਉਦਯੋਗ ਅਤੇ ਟੀਚਿਆਂ ਦੇ ਆਧਾਰ 'ਤੇ ਡਿਜ਼ਾਈਨ ਦੀਆਂ ਸਿਫਾਰਸ਼ਾਂ ਕਰਦਾ ਹੈ।

### ਕਦਮ 2: Site Specification

ਤੁਹਾਨੂੰ ਤੁਹਾਡੀ ਸਾਈਟ ਬਾਰੇ ਪੁੱਛਿਆ ਜਾਵੇਗਾ:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, ਆਦਿ।
- **Target audience**: ਤੁਹਾਡੇ ਵਿਜ਼ਿਟਰ ਕੌਣ ਹਨ?
- **Brand colors**: ਪ੍ਰਾਇਮਰੀ ਅਤੇ ਸੈਕੰਡਰੀ ਰੰਗ (ਜਾਂ "ਮੈਨੂੰ ਪੱਕਾ ਨਹੀਂ")
- **Tone**: Professional, creative, playful, minimal, ਆਦਿ।

ਇਹ ਜਾਣਕਾਰੀ ਤੁਹਾਡੀ **site_brief** memory ਵਿੱਚ ਸਟੋਰ ਕੀਤੀ ਜਾਂਦੀ ਹੈ, ਜਿਸ ਨੂੰ agents ਭਵਿੱਖ ਦੇ ਸੈਸ਼ਨਾਂ ਵਿੱਚ ਰੈਫਰੈਂਸ ਕਰਦੇ ਹਨ।

### ਕਦਮ 3: Design System Decisions

agent ਤੁਹਾਨੂੰ design token ਚੋਣਾਂ ਰਾਹੀਂ ਗਾਈਡ ਕਰਦਾ ਹੈ:

- **Typography**: ਫੌਂਟ ਫੈਮਿਲੀ (serif, sans-serif, monospace) ਅਤੇ ਸਾਈਜ਼ ਸਕੇਲ
- **Color palette**: ਪ੍ਰਾਇਮਰੀ, ਸੈਕੰਡਰੀ, ਐਕਸੈਂਟ, ਅਤੇ ਨਿਊਟਰਲ ਰੰਗ
- **Spacing**: Compact, normal, ਜਾਂ spacious ਲੇਆਉਟ
- **Motion**: ਐਨੀਮੇਸ਼ਨ ਅਤੇ ਟ੍ਰਾਂਜ਼ੀਸ਼ਨ (ਜੇ ਲੋੜ ਹੋਵੇ)

### ਕਦਮ 4: Theme Generation

Setup Assistant agent ਤੁਹਾਡੇ ਕਸਟਮ ਬਲਾਕ تھیਮ ਨੂੰ ਇਹਨਾਂ ਨਾਲ ਸੈਕਾਫੋਲਡ (scaffolds) ਕਰਦਾ ਹੈ:

- `theme.json` ਜਿਸ ਵਿੱਚ ਤੁਹਾਡੇ ਸਾਰੇ design tokens ਸ਼ਾਮਲ ਹਨ
- ਆਮ ਲੇਆਉਟਾਂ ਲਈ ਬਲਾਕ ਟੈਂਪਲੇਟ (homepage, blog, contact)
- ਤੁਹਾਡੇ design system ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਕਸਟਮ ਬਲਾਕ ਸਟਾਈਲ
- تھیਮ ਮੈਟਾਡੇਟਾ ਅਤੇ WordPress ਸਪੋਰਟ ਡეკਲਰੇਸ਼ਨ

### ਕਦਮ 5: Activation and Verification

تھیਮ ਆਪਣੇ ਆਪ ਐਕਟੀਵੇਟ ਹੋ ਜਾਂਦਾ ਹੈ, ਅਤੇ ਤੁਹਾਨੂੰ ਇਹ ਦਿਖਾਈ ਦੇਵੇਗਾ:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

ਤੁਸੀਂ ਫਿਰ ਆਪਣੀ ਸਾਈਟ 'ਤੇ ਜਾ ਕੇ ਇਹ ਵੈਰੀਫਾਈ ਕਰ ਸਕਦੇ ਹੋ ਕਿ تھیਮ ਸਹੀ ਢੰਗ ਨਾਲ ਦਿਖਾਈ ਦੇ ਰਿਹਾ ਹੈ।

## Site Specification ਅਤੇ site_brief Memory

Onboarding ਦੌਰਾਨ, agent ਤੁਹਾਡੀ ਸਾਈਟ ਦੀ ਸਪੈਸੀਫਿਕੇਸ਼ਨ ਨੂੰ ਇੱਕ **site_brief** memory category ਵਿੱਚ ਕੈਪਚਰ ਕਰਦਾ ਹੈ। ਇਸ ਵਿੱਚ ਸ਼ਾਮਲ ਹਨ:

- ਸਾਈਟ ਦਾ ਉਦੇਸ਼ ਅਤੇ ਟੀਚੇ
- ਟਾਰਗੇਟ audience
- Brand colors ਅਤੇ tone
- Design preferences
- Content structure

### site_brief ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹੈ

ਭਵਿੱਖ ਦੇ ਸੈਸ਼ਨਾਂ ਵਿੱਚ, agents ਤੁਹਾਡੇ site_brief ਨੂੰ ਇਸ ਲਈ ਰੈਫਰੈਂਸ ਕਰਦੇ ਹਨ:

- ਬਦਲਾਅ ਦੌਰਾਨ ਡਿਜ਼ਾਈਨ ਦੀ ਇਕਸਾਰਤਾ (consistency) ਬਣਾਈ ਰੱਖਣ ਲਈ
- ਤੁਹਾਡੀ ਸਾਈਟ ਦੇ ਉਦੇਸ਼ ਨਾਲ ਮੇਲ ਖਾਂਦੇ فیਚਰ ਸੁਝਾਉਣ ਲਈ
- context-aware ਸਿਫਾਰਸ਼ਾਂ ਦੇਣ ਲਈ
- ਸੈਟਅਪ ਸਵਾਲਾਂ ਨੂੰ ਦੁਹਰਾਉਣ ਤੋਂ ਬਚਣ ਲਈ

### ਆਪਣੇ site_brief ਨੂੰ ਦੇਖਣਾ

ਤੁਸੀਂ agent ਨੂੰ ਪੁੱਛ ਸਕਦੇ ਹੋ:

```
"Show me my site brief"
```

ਜਾਂ

```
"What do you know about my site?"
```

agent ਤੁਹਾਡੀ ਸਟੋਰ ਕੀਤੀ ਸਾਈਟ ਸਪੈਸੀਫਿਕੇਸ਼ਨ ਦਿਖਾਏਗਾ।

## Onboarding ਤੋਂ ਬਾਅਦ ਕਸਟਮਾਈਜ਼ ਕਰਨਾ

Theme Builder onboarding ਪੂਰਾ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਤੁਸੀਂ ਇਹ ਕਰ ਸਕਦੇ ਹੋ:

### Design System Aesthetics Skill ਦੀ ਵਰਤੋਂ ਕਰਨਾ

ਡਿਜ਼ਾਈਨ ਵਿੱਚ ਸੁਧਾਰ ਲਈ ਬੇਨਤੀ ਕਰੋ:

```
"Refine the typography to be more modern"
```

ਜਾਂ

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** ਤੁਹਾਨੂੰ ਨਿਸ਼ਾਨਾ ਬਣਾਏ ਡਿਜ਼ਾਈਨ ਅਪਡੇਟਾਂ ਰਾਹੀਂ ਗਾਈਡ ਕਰਦਾ ਹੈ।

### theme.json ਨੂੰ ਸਿੱਧਾ Edit ਕਰਨਾ

Advanced users ਲਈ, Color tokens, Typography scales, Spacing values, ਅਤੇ Border and shadow definitions ਨੂੰ ਐਡਜਸਟ ਕਰਨ ਲਈ `/wp-content/themes/[theme-name]/theme.json` ਨੂੰ edit ਕਰੋ:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### Custom Block Templates ਬਣਾਉਣਾ

WordPress block editor ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਤੁਸੀਂ ਇਹਨਾਂ ਲਈ ਕਸਟਮ ਟੈਂਪਲੇਟ ਬਣਾ ਸਕਦੇ ਹੋ:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## ਤੁਲਨਾ: ਪੁਰਾਣਾ ਬਨਾਮ ਨਵਾਂ Onboarding

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Troubleshooting

**Onboarding flow ਪੂਰਾ ਨਹੀਂ ਹੋਇਆ**
- flow ਨੂੰ ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ: "Start the Theme Builder onboarding"
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡਾ WordPress installation ਅਪ ਟੂ ਡੇਟ ਹੈ
- ਵੈਰੀਫਾਈ ਕਰੋ ਕਿ Setup Assistant agent enable ਹੈ

**ਮੇਰਾ site_brief ਵਰਤਿਆ ਨਹੀਂ ਜਾ ਰਿਹਾ**
- ਪੁਸ਼ਟੀ ਕਰੋ ਕਿ agent ਕੋਲ memory ਤੱਕ ਪਹੁੰਚ ਹੈ
- agent ਨੂੰ "recall my site brief" ਕਹਿ ਕੇ ਪੁੱਛੋ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੀਆਂ ਸੈਟਿੰਗਾਂ ਵਿੱਚ memory enable ਹੈ

**ਤਿਆਰ ਕੀਤਾ ਗਿਆ تھیਮ ਮੇਰੀ ਤਰਜੀਹਾਂ ਨਾਲ ਨਹੀਂ ਮਿਲਦਾ**
- ਇਸਨੂੰ refine ਕਰਨ ਲਈ Design System Aesthetics skill ਦੀ ਵਰਤੋਂ ਕਰੋ
- agent ਨੂੰ "regenerate the theme with [specific changes]" ਕਹਿ ਕੇ ਪੁੱਛੋ
- ਸਹੀ ਕੰਟਰੋਲ ਲਈ theme.json ਨੂੰ ਸਿੱਧਾ edit ਕਰੋ

## Next Steps

Theme Builder onboarding ਪੂਰਾ ਕਰਨ ਤੋਂ ਬਾਅਦ:

1. **ਆਪਣੀ ਸਾਈਟ ਵੈਰੀਫਾਈ ਕਰੋ**: ਨਵਾਂ تھیਮ ਦੇਖਣ ਲਈ ਆਪਣੀ ਸਾਈਟ 'ਤੇ ਜਾਓ
2. **ਡਿਜ਼ਾਈਨ refine ਕਰੋ**: ਐਡਜਸਟਮੈਂਟ ਲਈ Design System Aesthetics skill ਦੀ ਵਰਤੋਂ ਕਰੋ
3. **content ਜੋੜੋ**: ਆਪਣੀ ਸਾਈਟ ਦਾ content ਬਣਾਉਣਾ ਸ਼ੁਰੂ ਕਰੋ
4. **abilities ਖੋਜੋ**: scaffold-block-theme ਅਤੇ activate-theme ਵਰਗੀਆਂ ਹੋਰ agent abilities ਬਾਰੇ ਸਿੱਖੋ
