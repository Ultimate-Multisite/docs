---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow

Superdav AI Agent v1.12.0 ಒಂದು ಮಾರ್ಗದರ್ಶಿ **Theme Builder onboarding flow** ಅನ್ನು ಪರಿಚಯಿಸುತ್ತದೆ. ಇದು ನಿಮ್ಮ ಆರಂಭಿಕ ಸೆಟಪ್ ಸಮಯದಲ್ಲಿ ಕಸ್ಟಮ್ ಬ್ಲಾಕ್ ಥೀಮ್ ಅನ್ನು ರಚಿಸಲು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಇದು ಹಳೆಯ Site Builder mode ಅನ್ನು ಹೆಚ್ಚು ಹೊಂದಿಕೊಳ್ಳುವ, agent-assisted ವಿಧಾನದೊಂದಿಗೆ ಬದಲಾಯಿಸುತ್ತದೆ.

## Theme Builder Onboarding Flow ಎಂದರೇನು? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow ಎಂಬುದು ಒಂದು ಸಂವಾದಾತ್ಮಕ ಸೆಟಪ್ ವಿಸಾರ್ಡ್ (interactive setup wizard) ಆಗಿದ್ದು, ಇದು:

- ವಿನ್ಯಾಸ ನಿರ್ಧಾರಗಳ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಕರೆದೊಯ್ಯುತ್ತದೆ (ಬಣ್ಣಗಳು, ಟೈಪೋಗ್ರಫಿ, ಲೇಔಟ್)
- ನಿಮ್ಮ ಸೈಟ್‌ನ ದೃಶ್ಯ ಗುರುತಿನ ಆದ್ಯತೆಗಳನ್ನು ಸೆರೆಹಿಡಿಯುತ್ತದೆ
- ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ತಕ್ಕಂತೆ ಕಸ್ಟಮ್ ಬ್ಲಾಕ್ ಥೀಮ್ ಅನ್ನು ರಚಿಸುತ್ತದೆ
- ಪೂರ್ಣಗೊಂಡಾಗ ಥೀಮ್ ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ

ಈ ಫ್ಲೋಯು **Setup Assistant agent** ನಿಂದ ನಡೆಸಲ್ಪಡುತ್ತದೆ. ಇದು ಸ್ಪಷ್ಟೀಕರಣ ಪ್ರಶ್ನೆಗಳನ್ನು ಕೇಳುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಥೀಮ್ ಅನ್ನು ಕ್ರಮೇಣವಾಗಿ ನಿರ್ಮಿಸುತ್ತದೆ.

## Theme Builder Onboarding ಅನ್ನು ಪ್ರಾರಂಭಿಸುವುದು {#starting-the-theme-builder-onboarding}

### ಮೊದಲ ಬಾರಿಯ ಸೆಟಪ್ (First-Run Setup) {#first-run-setup}

ನೀವು ಹೊಸ WordPress installation ನಲ್ಲಿ Superdav AI Agent ಅನ್ನು ಮೊದಲ ಬಾರಿಗೆ ಪ್ರಾರಂಭಿಸಿದಾಗ, ನಿಮಗೆ ಈ ಕೆಳಗಿನ ಸಂದೇಶವು ಕಾಣಿಸುತ್ತದೆ:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow ಗೆ ಪ್ರವೇಶಿಸಲು **"Build a custom theme"** ಅನ್ನು ಆಯ್ಕೆಮಾಡಿ.

### ಕೈಯಾರೆ ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ (Manual Activation) {#manual-activation}

ನೀವು ಯಾವಾಗ ಬೇಕಾದರೂ ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಕೇಳುವ ಮೂಲಕ Theme Builder onboarding ಅನ್ನು ಪ್ರಾರಂಭಿಸಬಹುದು:

```
"Start the Theme Builder onboarding"
```

ಅಥವಾ

```
"Help me create a custom theme"
```

## Onboarding ಹಂತಗಳು {#the-onboarding-steps}

### ಹಂತ 1: ಮೋಡ್ ಆಯ್ಕೆ (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent ನಿಮ್ಮ ಆದ್ಯತೆಯ ಬಗ್ಗೆ ಕೇಳುತ್ತದೆ:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

ಹೆಚ್ಚಿನ ಬಳಕೆದಾರರಿಗೆ **Guided mode** ಅನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ; ನಿಮ್ಮ ಉದ್ಯಮ ಮತ್ತು ಗುರಿಗಳ ಆಧಾರದ ಮೇಲೆ agent ವಿನ್ಯಾಸದ ಶಿಫಾರಸುಗಳನ್ನು ನೀಡುತ್ತದೆ.

### ಹಂತ 2: ಸೈಟ್ ವಿವರಣೆ (Site Specification) {#step-2-site-specification}

ನಿಮ್ಮ ಸೈಟ್ ಬಗ್ಗೆ ನಿಮ್ಮನ್ನು ಕೇಳಲಾಗುತ್ತದೆ:

- **Site purpose**: E-commerce, blog, portfolio, SaaS, ಇತ್ಯಾದಿ.
- **Target audience**: ನಿಮ್ಮ ಸಂದರ್ಶಕರು ಯಾರು?
- **Brand colors**: ಪ್ರಾಥಮಿಕ ಮತ್ತು ثೇಕಂದ್ರೀಯ ಬಣ್ಣಗಳು (ಅಥವಾ "ನನಗೆ ಖಚಿತವಿಲ್ಲ")
- **Tone**: ವೃತ್ತಿಪರ, ಸೃಜನಾತ್ಮಕ, ಆಟದಂತಹ, ಕನಿಷ್ಠ (minimal), ಇತ್ಯಾದಿ.

ಈ ಮಾಹಿತಿಯನ್ನು ನಿಮ್ಮ **site_brief** memory ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ, ಇದನ್ನು agent ಭವಿಷ್ಯದ ಸೆಷನ್‌ಗಳಲ್ಲಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.

### ಹಂತ 3: ವಿನ್ಯಾಸ ವ್ಯವಸ್ಥೆ ನಿರ್ಧಾರಗಳು (Design System Decisions) {#step-3-design-system-decisions}

agent ವಿನ್ಯಾಸ ಟೋಕನ್ (design token) ಆಯ್ಕೆಗಳ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಕರೆದೊಯ್ಯುತ್ತದೆ:

- **Typography**: ಫಾಂಟ್ ಕುಟುಂಬ (serif, sans-serif, monospace) ಮತ್ತು ಗಾತ್ರದ ಮಾಪಕ (size scale)
- **Color palette**: ಪ್ರಾಥಮಿಕ, ثೇಕಂದ್ರೀಯ, акಸೆಂಟ್ ಮತ್ತು ನ್ಯೂಟ್ರಲ್ ಬಣ್ಣಗಳು
- **Spacing**: ಸಂಕುಚಿತ (Compact), ಸಾಮಾನ್ಯ (Normal), ಅಥವಾ ವಿಶಾಲ (Spacious) ಲೇಔಟ್‌ಗಳು
- **Motion**: ಅನಿಮೇಷನ್‌ಗಳು ಮತ್ತು ಪರಿವರ್ತನೆಗಳು (ಬೇಕಿದ್ದರೆ)

### ಹಂತ 4: ಥೀಮ್ ರಚನೆ (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent ಈ ಕೆಳಗಿನವುಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಕಸ್ಟಮ್ ಬ್ಲಾಕ್ ಥೀಮ್ ಅನ್ನು ರಚಿಸುತ್ತದೆ:

- ನಿಮ್ಮ ಎಲ್ಲಾ ವಿನ್ಯಾಸ ಟೋಕನ್‌ಗಳನ್ನು ಹೊಂದಿರುವ `theme.json`
- ಸಾಮಾನ್ಯ ಲೇಔಟ್‌ಗಳ ಬ್ಲಾಕ್ ಟೆಂಪ್ಲೇಟ್‌ಗಳು (ಹೋಮ್‌ಪೇಜ್, ಬ್ಲಾಗ್, ಸಂಪರ್ಕ)
- ನಿಮ್ಮ ವಿನ್ಯಾಸ ವ್ಯವಸ್ಥೆಗೆ ಹೊಂದಿಕೆಯಾಗುವ ಕಸ್ಟಮ್ ಬ್ಲಾಕ್ ಶೈಲಿಗಳು
- ಥೀಮ್ ಮೆಟಾಡೇಟಾ ಮತ್ತು WordPress ಬೆಂಬಲ ಘೋಷಣೆಗಳು

### ಹಂತ 5: ಸಕ್ರಿಯಗೊಳಿಸುವಿಕೆ ಮತ್ತು ಪರಿಶೀಲನೆ (Activation and Verification) {#step-5-activation-and-verification}

ಥೀಮ್ ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗುತ್ತದೆ, ಮತ್ತು ನೀವು ಈ ಕೆಳಗಿನವುಗಳನ್ನು ನೋಡುತ್ತೀರಿ:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

ನಂತರ, ಥೀಮ್ ಸರಿಯಾಗಿ ಪ್ರದರ್ಶನಗೊಳ್ಳುತ್ತಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಲು ನೀವು ನಿಮ್ಮ ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಬಹುದು.

## Site Specification ಮತ್ತು site_brief Memory {#site-specification-and-sitebrief-memory}

Onboarding ಸಮಯದಲ್ಲಿ, agent ನಿಮ್ಮ ಸೈಟ್‌ನ ವಿವರಣೆಯನ್ನು **site_brief** memory ವರ್ಗದಲ್ಲಿ ಸೆರೆಹಿಡಿಯುತ್ತದೆ. ಇದರಲ್ಲಿ ಸೇರಿವೆ:

- ಸೈಟ್ ಉದ್ದೇಶ ಮತ್ತು ಗುರಿಗಳು
- ಟಾರ್ಗೆಟ್ ಆಡಿಯೆನ್ಸ್
- ಬ್ರ್ಯಾಂಡ್ ಬಣ್ಣಗಳು ಮತ್ತು ಟೋನ್
- ವಿನ್ಯಾಸ ಆದ್ಯತೆಗಳು
- ವಿಷಯದ ರಚನೆ

### site_brief ಏಕೆ ಮುಖ್ಯ? {#why-sitebrief-matters}

ಭವಿಷ್ಯದ ಸೆಷನ್‌ಗಳಲ್ಲಿ, agent ನಿಮ್ಮ site_brief ಅನ್ನು ಉಲ್ಲೇಖಿಸಲು:

- ಬದಲಾವಣೆಗಳಾದ್ಯಂತ ವಿನ್ಯಾಸದ ಸ್ಥಿರತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು
- ನಿಮ್ಮ ಸೈಟ್ ಉದ್ದೇಶಕ್ಕೆ ಹೊಂದಿಕೆಯಾಗುವ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಸೂಚಿಸಲು
- ಸಂದರ್ಭ-ಪ್ರಜ್ಞೆಯ ಶಿಫಾರಸುಗಳನ್ನು ನೀಡಲು
- ಸೆಟಪ್ ಪ್ರಶ್ನೆಗಳನ್ನು ಪುನರಾವರ್ತಿಸುವುದನ್ನು ತಪ್ಪಿಸಲು

### ನಿಮ್ಮ site_brief ಅನ್ನು ವೀಕ್ಷಿಸುವುದು {#viewing-your-sitebrief}

ನೀವು agent ನவரிடம் ಕೇಳಬಹುದು:

```
"Show me my site brief"
```

ಅಥವಾ

```
"What do you know about my site?"
```

agent ನಿಮ್ಮ ಸಂಗ್ರಹಿಸಿದ site specification ಅನ್ನು ಪ್ರದರ್ಶಿಸುತ್ತದೆ.

## Onboarding ನಂತರ ಕಸ್ಟಮೈಸ್ ಮಾಡುವುದು {#customizing-after-onboarding}

Theme Builder onboarding ಪೂರ್ಣಗೊಂಡ ನಂತರ, ನೀವು:

### Design System Aesthetics Skill ಅನ್ನು ಬಳಸಿ {#use-the-design-system-aesthetics-skill}

ವಿನ್ಯಾಸದ ಪರಿಷ್ಕರಣೆಗಳನ್ನು ಕೇಳಿ:

```
"Refine the typography to be more modern"
```

ಅಥವಾ

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** ನಿಮಗೆ ಗುರಿ-ನಿರ್ದೇಶಿತ ವಿನ್ಯಾಸದ ಅಪ್ಡೇಟ್‌ಗಳ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ.

### theme.json ಅನ್ನು ನೇರವಾಗಿ ಸಂಪಾದಿಸಿ {#edit-themejson-directly}

Advanced ಬಳಕೆದಾರರ համար, ಬಣ್ಣ ಟೋಕನ್‌ಗಳು, ಟೈಪೋಗ್ರಫಿ ಮಾಪಕಗಳು, ಸ್ಪೇಸಿಂಗ್ ಮೌಲ್ಯಗಳು, ಬಾರ್ಡರ್ ಮತ್ತು ಶ್ಯಾಡೋ ವ್ಯಾಖ್ಯಾನಗಳನ್ನು ಹೊಂದಿಸಲು `/wp-content/themes/[theme-name]/theme.json` ಅನ್ನು ಸಂಪಾದಿಸಿ:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### ಕಸ್ಟಮ್ ಬ್ಲಾಕ್ ಟೆಂಪ್ಲೇಟ್‌ಗಳನ್ನು ರಚಿಸಿ {#create-custom-block-templates}

ಈ ಕೆಳಗಿನವುಗಳಿಗಾಗಿ ಕಸ್ಟಮ್ ಟೆಂಪ್ಲೇಟ್‌ಗಳನ್ನು ರಚಿಸಲು WordPress ಬ್ಲಾಕ್ ಎಡಿಟರ್ ಬಳಸಿ:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## ಹೋಲಿಕೆ: ಹಳೆಯ vs. ಹೊಸ Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## ಸಮಸ್ಯೆ ಪರಿಹಾರ (Troubleshooting) {#troubleshooting}

**onboarding flow ಪೂರ್ಣಗೊಳ್ಳಲಿಲ್ಲ**
- ಫ್ಲೋ ಅನ್ನು ಮರುಪ್ರಾರಂಭಿಸಿ: "Start the Theme Builder onboarding"
- ನಿಮ್ಮ WordPress installation ನ ಅಪ್ಡೇಟ್ ಆಗಿರುವುದನ್ನು ಪರಿಶೀಲಿಸಿ
- Setup Assistant agent ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ

**ನನ್ನ site_brief ಬಳಸುತ್ತಿಲ್ಲ**
- agent ಗೆ memory ಗೆ ಪ್ರವೇಶ ಇದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
- agent ನவரிடம் "recall my site brief" ಎಂದು ಕೇಳಿ
- ನಿಮ್ಮ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ memory ಸಕ್ರಿಯವಾಗಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ

**ರಚಿಸಲಾದ ಥೀಮ್ ನನ್ನ ಆದ್ಯತೆಗಳಿಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ**
- ಅದನ್ನು ಪರಿಷ್ಕರಿಸಲು Design System Aesthetics skill ಬಳಸಿ
- agent ನவரிடம் "regenerate the theme with [specific changes]" ಎಂದು ಕೇಳಿ
- ನಿಖರ ನಿಯಂತ್ರಣಕ್ಕಾಗಿ theme.json ಅನ್ನು ನೇರವಾಗಿ ಸಂಪಾದಿಸಿ

## ಮುಂದಿನ ಹಂತಗಳು (Next Steps) {#next-steps}

Theme Builder onboarding ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ:

1. **ನಿಮ್ಮ ಸೈಟ್ ಅನ್ನು ಪರಿಶೀಲಿಸಿ**: ಹೊಸ ಥೀಮ್ ಅನ್ನು ನೋಡಲು ನಿಮ್ಮ ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ
2. **ವಿನ್ಯಾಸವನ್ನು ಪರಿಷ್ಕರಿಸಿ**: ಹೊಂದಾಣಿಕೆಗಳಿಗಾಗಿ Design System Aesthetics skill ಬಳಸಿ
3. **ವಿಷಯವನ್ನು ಸೇರಿಸಿ**: ನಿಮ್ಮ ಸೈಟ್‌ನ ವಿಷಯವನ್ನು ನಿರ್ಮಿಸಲು ಪ್ರಾರಂಭಿಸಿ
4. **ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ**: scaffold-block-theme ಮತ್ತು activate-theme ನಂತಹ ಇತರ agent ಸಾಮರ್ಥ್ಯಗಳ ಬಗ್ಗೆ ಕಲಿಯಿರಿ
