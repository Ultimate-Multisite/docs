---
title: |+
  Notifika tal eliminazzjoni tal Mod ta Aħdri

sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Notifika tal-Għaddi tal-Modul ta Bankit (Site Builder Mode)

**Il-Modul ta Bankit (Site Builder mode) huwa eliminat f Superdav AI Agent v1.12.0.** Jekk kien qed tistaqsi l-Modul ta Bankit, għandek tmexxi għall- **Setup Assistant agent** biex tgħmli temi u tistabbilixxi siti.

## X'għadse? {#what-happened}

### Modul ta Bankit (Legacy) {#site-builder-mode-legacy}

Il-Modul ta Bankit kien interface basat fuq wizard għal:

- Kemm il-siti min template
- Konfigurazzjoni tal-setting biex jkun biex
- Elewża tema
- Istawilixxi kontent inizjali

### X'għadse l-li jiddejna? {#what-replaced-it}

L- **Setup Assistant agent** jiddejna kollha l-funzjonalità tal-Site Builder b'mod:

- Setup aktar flessibbli, guidat mill-agent
- Oprezzjoni għall-tema aktar ben
- Integrazzjoni mal-onboarding tal-Theme Builder
- Memoria persistenti ta `site_brief` għall-sessioni futuri

## Jekk kien qed tistaqsi l-Modul ta Bankit (Site Builder Mode) {#if-you-were-using-site-builder-mode}

### Is-Siti Tagħdak Humma Sicuri {#your-sites-are-safe}

- Is-siti esistenti li kien jmung mill-Site Builder mode jmur biex jworku
- Ma jkunx fejn perdita ta dati jew parir għas-siti
- Tistaqsi tkompli tmexxi is-siti tagħdak normalment

### Migra għall-Setup Assistant agent {#migrate-to-setup-assistant-agent}

Biex tistabbilixxi siti ġodda jew tgħmli bidliet fuq il-tema, uża l-Setup Assistant agent:

```
"Help me set up a new site"
```

jew

```
"Start the Theme Builder onboarding"
```

L-Setup Assistant agent jipprovdi l-funzjonalità hija huma, iżda b'mod aktar flessibbli.

## Konparazzjoni: Site Builder vs. Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Caratteristika | Site Builder (Eliminati) | Setup Assistant (Nuwwa) |
|---------|----------------------|----------------------|
| Metodu taqabbil | Form wizard | Konversazzjoni mill-agent |
| Elewża tema | Template predefiniti | Generazzjoni kustom |
| Oprezzjoni | Opzjonijiet limitati | Sistema tal-disjen kollu |
| Site brief | M'għandhomx jkun stabbiliti | Memoria persistenti |
| Sessioni futuri | Setup u rirfora | Uża `site_brief` stabbilit |
| Flessibbiltà | Workflow fix | Konversazzjoni adattattiva |

## Migrazzjoni għall-Setup Assistant agent {#migrating-to-setup-assistant-agent}

### Biex Siti Ġodda {#for-new-sites}

Instead of using Site Builder mode:

1. Request: "Help me set up a new site"
2. The Setup Assistant agent will guide you through:
   - Purpose and goals of the site
   - Target audience
   - Brand identity
   - Theme generation
   - Initial configuration

### For Existing Sites {#for-existing-sites}

If you have an existing site from Site Builder mode:

1. You can continue using it as-is
2. To update the theme, request: "Redesign my site"
3. The Setup Assistant agent will help you create a new theme
4. Your site data remains unchanged

### For Theme Changes {#for-theme-changes}

Instead of Site Builder mode's theme selection:

1. Request: "Change my theme"
2. The Setup Assistant agent will:
   - Ask about your design preferences
   - Generate a custom theme
   - Activate it on your site

## Key Differences {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Choose a template
2. Select a theme
3. Configure basic settings
4. Done
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Describe your site's purpose
2. Define your target audience
3. Choose design preferences
4. Agent generates custom theme
5. Agent activates theme
6. Site brief stored for future sessions
```

## Benefits of Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### More Flexible {#more-flexible}

- Describe your site in natural language
- Get custom recommendations
- Adapt to your specific needs

### Better Customization {#better-customization}

- Custom theme generation
- Design system decisions
- Persistent design tokens

### Persistent Memory {#persistent-memory}

- Your site_brief is stored
- Future agents understand your site
- No need to repeat setup information

### Integrated Workflow {#integrated-workflow}

- Theme Builder onboarding
- Design System Aesthetics skill
- Ability Visibility controls
- All work together seamlessly

## Troubleshooting {#troubleshooting}

### I can't find Site Builder mode {#i-cant-find-site-builder-mode}

Site Builder mode has been removed. Use the Setup Assistant agent instead:

### Jidr il-WordPress {#i-want-to-recreate-a-site-from-site-builder}

#### Jifxebix it-site mill-from-Site Builder {#my-existing-site-builder-site-isnt-working}

Tista' possibbiltà li tista' siti mill-mennu biex tista' l-istruttura tal-Site Builder:

1. **Ixtieq:** "Help me set up a new site" (Ajjuqli siti جديد)
2. **Deskrivi** l-għan u l-disegno tal-siti orignal tiegħek.
3. **L-agent** jġib tema simile.
4. Il-`site_brief` tiegħek se jkun magħall għall-referenza futuri.

#### Il-Site Builder siti esistenti ma qed jaħdem {#can-i-still-use-my-old-site-builder-templates}

Is-siti esistenti li kienu creati b'mod Site Builder jkomplu biex jaħdem. Jekk qed tiffilq problemi:

1. **Verifika** li il-theme tiegħek hija attiva
2. **Verifika** li il-plugins tiegħek għandhom jkunu attivi
3. **Verifika** logġi l-error ta' WordPress (WordPress error logs)
4. **Kontatta** is-support jekk il-problemi jkomplu

#### Għalfeq tista' tista' uża templates tal-Site Builder qed? {#next-steps}

Templates tal-Site Builder ma huma anke disponibbli aktar. Madankoll:

- Is-siti esistenti tiegħek jkomplu biex jaħdem
- Tista' tista' siti mill-menħa biex tista' l-istruttura uża l-Setup Assistant agent
- L-Setup Assistant agent jgħid opzjonijiet ta' personalizzazzjoni aktar

## Prossi Futuri (Next Steps) {#related-topics}

1. **Għal siti nuovi**: Uża l-Setup Assistant agent
2. **Għal siti esistenti**: Kontinua użahom kif hija
3. **Għal bidżi tal-theme**: Ixtieq għall-setup ta' l-Site Builder agent
4. **Għal rifinit tal-disegno**: Uża l-Design System Aesthetics skill

## Temi Relatati (Related Topics)

- **Theme Builder Onboarding**: Setup guidat għall-themes kustomi
- **Setup Assistant Agent**: Setup siti guidat minn l-agent
- **Site Specification Skill**: Defini l-għan u l-audience tal-siti tiegħek
- **Design System Aesthetics Skill**: Rifina l-identità visiva tal-siti tiegħek
