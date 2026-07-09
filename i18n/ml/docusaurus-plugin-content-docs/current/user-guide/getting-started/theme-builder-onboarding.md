---
title: Theme Builder Onboarding Flow
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 ഒരു ഗൈഡഡ് ആയ **Theme Builder onboarding flow** അവതരിപ്പിക്കുന്നു. ഇത് നിങ്ങളുടെ ആദ്യ സജ്ജീകരണ സമയത്ത് ഒരു കസ്റ്റം ബ്ലോക്ക് തീം ഉണ്ടാക്കാൻ നിങ്ങളെ സഹായിക്കുന്നു. ഇത് പഴയ Site Builder മോഡിന് പകരമായി, കൂടുതൽ വഴക്കമുള്ളതും agent-ന്റെ സഹായം ലഭിക്കുന്നതുമായ ഒരു സമീപനമാണ്.

## Theme Builder Onboarding Flow എന്നാൽ എന്ത്? {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow എന്നത് ഒരു ഇന്ററാക്ടീവ് സജ്ജീകരണ വിസാർഡ് ആണ്. ഇത് ചെയ്യുന്നത്:

- ഡിസൈൻ തീരുമാനങ്ങളിലൂടെ നിങ്ങളെ നയിക്കുന്നു (നിറങ്ങൾ, ടൈപ്പോഗ്രാഫി, ലേഔട്ട്)
- നിങ്ങളുടെ സൈറ്റിന്റെ വിഷ്വൽ ഐഡന്റിറ്റി ഇഷ്ടങ്ങൾ ശേഖരിക്കുന്നു
- നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് ഒരു കസ്റ്റം ബ്ലോക്ക് തീം ഉണ്ടാക്കുന്നു
- പൂർത്തിയാകുമ്പോൾ തീം ഓട്ടോമാറ്റിക്കായി ആക്ടിവേറ്റ് ചെയ്യുന്നു

ഈ flow പ്രവർത്തിപ്പിക്കുന്നത് **Setup Assistant agent** ആണ്. ഇത് വ്യക്തമാക്കുന്ന ചോദ്യങ്ങൾ ചോദിക്കുകയും നിങ്ങളുടെ തീം ഘട്ടം ഘട്ടമായി നിർമ്മിക്കുകയും ചെയ്യുന്നു.

## Theme Builder Onboarding എങ്ങനെ തുടങ്ങാം {#starting-the-theme-builder-onboarding}

### ആദ്യമായി സജ്ജീകരിക്കുന്നത് (First-Run Setup) {#first-run-setup}

പുതിയ WordPress ഇൻസ്റ്റാളേഷനിൽ Superdav AI Agent ആദ്യമായി പ്രവർത്തിപ്പിക്കുമ്പോൾ, നിങ്ങൾക്ക് ഇത് കാണാം:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Theme Builder onboarding flow-ലേക്ക് പ്രവേശിക്കാൻ **"Build a custom theme"** തിരഞ്ഞെടുക്കുക.

### മാനുവൽ ആക്ടിവേഷൻ (Manual Activation) {#manual-activation}

നിങ്ങൾക്ക് എപ്പോൾ വേണമെങ്കിലും Theme Builder onboarding തുടങ്ങാൻ ആവശ്യപ്പെടാവുന്നതാണ്:

```
"Start the Theme Builder onboarding"
```

അല്ലെങ്കിൽ

```
"Help me create a custom theme"
```

## Onboarding ഘട്ടങ്ങൾ {#the-onboarding-steps}

### ഘട്ടം 1: മോഡ് തിരഞ്ഞെടുക്കൽ (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent നിങ്ങളുടെ ഇഷ്ട്ടം ചോദിക്കുന്നു:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

മിക്ക ഉപയോക്താക്കൾക്കും **Guided mode** ആണ് ശുപാർശ ചെയ്യുന്നത്; നിങ്ങളുടെ വ്യവസായത്തെയും ലക്ഷ്യങ്ങളെയും അടിസ്ഥാനമാക്കി agent ഡിസൈൻ ശുപാർശകൾ നൽകും.

### ഘട്ടം 2: സൈറ്റ് വിവരണം (Site Specification) {#step-2-site-specification}

നിങ്ങളുടെ സൈറ്റിനെക്കുറിച്ച് നിങ്ങളോട് ചോദിക്കും:

- **Site purpose**: ഇ-കൊമേഴ്‌സ്, ബ്ലോഗ്, പോർട്ട്‌ഫോളിയോ, SaaS, തുടങ്ങിയവ.
- **Target audience**: നിങ്ങളുടെ സന്ദർശകർ ആരാണ്?
- **Brand colors**: പ്രാഥമികവും (Primary) രണ്ടാമത്തെയും (Secondary) നിറങ്ങൾ (അല്ലെങ്കിൽ "എനിക്കറിയില്ല")
- **Tone**: പ്രൊഫഷണൽ, ക്രിയേറ്റീവ്, കളിയായ, മിനിമൽ, തുടങ്ങിയവ.

ഈ വിവരങ്ങൾ നിങ്ങളുടെ **site_brief** മെമ്മറിയിൽ (memory) സൂക്ഷിക്കപ്പെടുന്നു. ഇത് ഭാവി സെഷനുകളിൽ agent-കൾ റഫർ ചെയ്യും.

### ഘട്ടം 3: ഡിസൈൻ സിസ്റ്റം തീരുമാനങ്ങൾ (Design System Decisions) {#step-3-design-system-decisions}

ഡിസൈൻ ടോക്കണുകൾ തിരഞ്ഞെടുക്കുന്നതിലൂടെ agent നിങ്ങളെ നയിക്കുന്നു:

- **Typography**: ഫോണ്ട് കുടുംബം (serif, sans-serif, monospace) ഉം സൈസ് സ്കെയിലും
- **Color palette**: പ്രാഥമികം, രണ്ടാമത്തേത്, ആക്സന്റ്, ന്യൂട്രൽ നിറങ്ങൾ
- **Spacing**: കോംപാക്റ്റ്, നോർമൽ, അല്ലെങ്കിൽ സ്പേസിയസ് ലേഔട്ടുകൾ
- **Motion**: ആനിമേഷനുകളും ട്രാൻസിഷനുകളും (ആവശ്യമെങ്കിൽ)

### ഘട്ടം 4: തീം ജനറേഷൻ (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent നിങ്ങളുടെ കസ്റ്റം ബ്ലോക്ക് തീം താഴെ പറയുന്നവ ഉപയോഗിച്ച് ഉണ്ടാക്കുന്നു:

- നിങ്ങളുടെ എല്ലാ ഡിസൈൻ ടോക്കണുകളും ഉൾക്കൊള്ളുന്ന `theme.json`
- പൊതുവായ ലേഔട്ടുകൾക്കുള്ള ബ്ലോക്ക് ടെംപ്ലേറ്റുകൾ (ഹോംപേജ്, ബ്ലോഗ്, കോൺടാക്റ്റ്)
- നിങ്ങളുടെ ഡിസൈൻ സിസ്റ്റവുമായി പൊരുത്തപ്പെടുന്ന കസ്റ്റം ബ്ലോക്ക് സ്റ്റൈലുകൾ
- തീം മെറ്റാഡാറ്റയും WordPress സപ്പോർട്ട് ഡിക്ലറേഷനുകളും

### ഘട്ടം 5: ആക്ടിവേഷനും പരിശോധനയും (Activation and Verification) {#step-5-activation-and-verification}

തീം ഓട്ടോമാറ്റിക്കായി ആക്ടിവേറ്റ് ചെയ്യപ്പെടും, നിങ്ങൾക്ക് ഇത് കാണാം:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

തീം ശരിയായി കാണിക്കുന്നുണ്ടോ എന്ന് പരിശോധിക്കാൻ നിങ്ങൾക്ക് നിങ്ങളുടെ സൈറ്റ് സന്ദർശിക്കാവുന്നതാണ്.

## Site Specification ഉം site_brief മെമ്മറിയും {#site-specification-and-sitebrief-memory}

Onboarding സമയത്ത്, agent നിങ്ങളുടെ സൈറ്റിന്റെ വിവരങ്ങൾ ഒരു **site_brief** മെമ്മറി വിഭാഗത്തിൽ ശേഖരിക്കുന്നു. ഇതിൽ ഉൾപ്പെടുന്നത്:

- സൈറ്റ് ലക്ഷ്യങ്ങളും ഉദ്ദേശങ്ങളും
- ടാർഗെറ്റ് ഓഡിയൻസ്
- ബ്രാൻഡ് നിറങ്ങളും ടോണും
- ഡിസൈൻ ഇഷ്ടങ്ങൾ
- ഉള്ളടക്ക ഘടന

### site_brief എന്തിനാണ് പ്രധാനം {#why-sitebrief-matters}

ഭാവി സെഷനുകളിൽ, agent-കൾ നിങ്ങളുടെ site_brief റഫർ ചെയ്യുന്നത്:

- മാറ്റങ്ങൾക്കിടയിലും ഡിസൈൻ സ്ഥിരത നിലനിർത്താൻ
- നിങ്ങളുടെ സൈറ്റിന്റെ ലക്ഷ്യവുമായി യോജിച്ച ഫീച്ചറുകൾ നിർദ്ദേശിക്കാൻ
- സന്ദർഭത്തിനനുസരിച്ചുള്ള ശുപാർശകൾ നൽകാൻ
- സജ്ജീകരണ ചോദ്യങ്ങൾ ആവർത്തിക്കുന്നത് ഒഴിവാക്കാൻ

### നിങ്ങളുടെ site_brief കാണുന്നത് എങ്ങനെ {#viewing-your-sitebrief}

നിങ്ങൾക്ക് agent-നോട് ചോദിക്കാവുന്നതാണ്:

```
"Show me my site brief"
```

അല്ലെങ്കിൽ

```
"What do you know about my site?"
```

നിങ്ങൾ സൂക്ഷിച്ച സൈറ്റ് വിവരങ്ങൾ agent പ്രദർശിപ്പിക്കും.

## Onboarding കഴിഞ്ഞ ശേഷം കസ്റ്റമൈസ് ചെയ്യുന്നത് {#customizing-after-onboarding}

Theme Builder onboarding പൂർത്തിയാക്കിയ ശേഷം, നിങ്ങൾക്ക് ചെയ്യാൻ കഴിയുന്നത്:

### Design System Aesthetics Skill ഉപയോഗിക്കുക {#use-the-design-system-aesthetics-skill}

ഡിസൈൻ മെച്ചപ്പെടുത്തലുകൾ ആവശ്യപ്പെടുക:

```
"Refine the typography to be more modern"
```

അല്ലെങ്കിൽ

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** ലക്ഷ്യമിട്ടുള്ള ഡിസൈൻ അപ്‌ഡേറ്റുകളിലൂടെ നിങ്ങളെ നയിക്കുന്നു.

### theme.json നേരിട്ട് എഡിറ്റ് ചെയ്യുക {#edit-themejson-directly}

അഡ്വാൻസ്ഡ് യൂസർമാർക്ക്, താഴെ പറയുന്നവ ക്രമീകരിക്കാൻ `/wp-content/themes/[theme-name]/theme.json` എഡിറ്റ് ചെയ്യുക:

- Color tokens
- Typography scales
- Spacing values
- Border and shadow definitions

### കസ്റ്റം ബ്ലോക്ക് ടെംപ്ലേറ്റുകൾ ഉണ്ടാക്കുക {#create-custom-block-templates}

താഴെ പറയുന്നവയ്ക്കായി കസ്റ്റം ടെംപ്ലേറ്റുകൾ ഉണ്ടാക്കാൻ WordPress ബ്ലോക്ക് എഡിറ്റർ ഉപയോഗിക്കുക:

- Homepage layouts
- Blog post pages
- Product pages
- Contact forms

## താരതമ്യം: പഴയതും പുതിയതുമായ Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## ട്രബിൾഷൂട്ടിംഗ് (Troubleshooting) {#troubleshooting}

**onboarding flow പൂർത്തിയാകാത്തപ്പോൾ**
- flow വീണ്ടും തുടങ്ങുക: "Start the Theme Builder onboarding"
- നിങ്ങളുടെ WordPress ഇൻസ്റ്റാളേഷൻ അപ്‌ഡേറ്റാണെന്ന് പരിശോധിക്കുക
- Setup Assistant agent പ്രവർത്തനക്ഷമമാണോ എന്ന് ഉറപ്പാക്കുക

**എന്റെ site_brief ഉപയോഗിക്കപ്പെടുന്നില്ലെങ്കിൽ**
- agent-ന് മെമ്മറി ആക്സസ് ചെയ്യാൻ കഴിയുന്നുണ്ടോ എന്ന് ഉറപ്പാക്കുക
- agent-നോട് "recall my site brief" എന്ന് ചോദിക്കുക
- നിങ്ങളുടെ സെറ്റിംഗുകളിൽ മെമ്മറി പ്രവർത്തനക്ഷമമാണോ എന്ന് പരിശോധിക്കുക

**ഉണ്ടാക്കിയ തീം എന്റെ ഇഷ്ടങ്ങൾക്കനുസരിച്ചല്ലെങ്കിൽ**
- ഇത് മെച്ചപ്പെടുത്താൻ Design System Aesthetics skill ഉപയോഗിക്കുക
- agent-നോട് "regenerate the theme with [specific changes]" എന്ന് ചോദിക്കുക
- കൃത്യമായ നിയന്ത്രണത്തിനായി theme.json നേരിട്ട് എഡിറ്റ് ചെയ്യുക

## അടുത്ത ഘട്ടങ്ങൾ (Next Steps) {#next-steps}

Theme Builder onboarding പൂർത്തിയാക്കിയ ശേഷം:

1. **നിങ്ങളുടെ സൈറ്റ് പരിശോധിക്കുക**: പുതിയ തീം കാണാൻ നിങ്ങളുടെ സൈറ്റ് സന്ദർശിക്കുക
2. **ഡിസൈൻ മെച്ചപ്പെടുത്തുക**: ക്രമീകരണങ്ങൾക്കായി Design System Aesthetics skill ഉപയോഗിക്കുക
3. **ഉള്ളടക്കം ചേർക്കുക**: നിങ്ങളുടെ സൈറ്റിന്റെ ഉള്ളടക്കം നിർമ്മിക്കാൻ തുടങ്ങുക
4. **അറിവുകൾ പര്യവേക്ഷണം ചെയ്യുക**: scaffold-block-theme, activate-theme പോലുള്ള മറ്റ് agent കഴിവുകളെക്കുറിച്ച് പഠിക്കുക
