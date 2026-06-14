---
title: Kufamba Kuti Kuondesha Modyu ya Site Builder
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Kufungurwa Kwemabasa YeMabasa (Site Builder Mode)

**Kufungurwa kwemabasa yeMabasa (Site Builder mode) kwanenge vachivayo mu Superdav AI Agent v1.12.0.** Kana wakaendera ku Site Builder mode, unofanira kutamba ku **Setup Assistant agent** kuti uingine umakwana kwe theme nekuvaka site.

## Kufanana Kwakanaka? (What Happened?)

### Site Builder Mode (Legacy)

Site Builder mode ndiri mufundisi wezwi (wizard-based interface) yokuva:

- Sites kubva ku templates
- Kuvera zvinhu zvinokosha (basic settings)
- Kuti uone theme
- Kuvaka nguva yakare ye content

### Chii Chiri Kufamba Kwake? (What Replaced It?)

**Setup Assistant agent** ndiri inozvaka zvose zveSite Builder mode nekuita izvi:

- Kuva nemakore anokwanisa kutaura, uye kuvewe neagent
- Zvinokwanisa kuendesa theme zvakawanda
- Kuti zivimbike neTheme Builder onboarding
- Kuti iwe uone site_brief (memory) inosvika panguva dzine mabhariro

## Kana Wakaendera Ku Site Builder Mode

### Sites Dako Rinobva

- Sites dzakare zvakagadzirwa neSite Builder mode dzinobva kuenda
- Hakuna kunenge kune data kana kusarudza kwe site
- Unogona kutamba kuita zvinobva nesite zako zvakare

### Tamba Ku Setup Assistant Agent

Kuti uingine vakaenderaite setup ye site dzine nguva yakare kana kuti mutambire theme, shandisa Setup Assistant agent:

```
"Help me set up a new site"
```

kana

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent inopa zvinhu zvakawanda nekuita izvi.

## Kufanana Kwakanaka: Site Builder vs. Setup Assistant

| Feature | Site Builder (Chiri Kufamba) | Setup Assistant (Chine Kuva) |
|---------|----------------------|----------------------|
| Setup method | Wizard form | Agent conversation |
| Theme selection | Templates dzakareitwa | Kuti uingine wakaendesa |
| Customization | Zvinokwanisa zvakawanda | Design system chine kuita zvose |
| Site brief | Hakuna kunenge kune memory | Memory inosvika panguva dzine mabhariro |
| Future sessions | Kuita zvinobva nekuendesa nguva yakare | Kutamba site_brief inosvika |
| Flexibility | Workflow inosvika | Conversation inosvika (inokwanisa kuendesa) |

## Kufamba Kwemabasa Ku Setup Assistant Agent

### Kune Sites Dzine Nguva Yakare

Kuti unenge kuita Site Builder mode:

1. Chibvumiro: "Ndinoda kukubatsira kuita site chinhu chinobva"
2. Setup Assistant agent ichakubatsira kuti uone zvinhu izvi:
   - Zvinoda iwe (purpose) uye zvinhu dzinoda (goals)
   - Vana vanofanira (target audience)
   - Mhando yezvinhu dzako (brand identity)
   - Kuita theme (theme generation)
   - Kuratidza zvinhu zvinotanga (initial configuration)

### Kuti Zvinenge Zvinobva (For Existing Sites)

Kana uri nesite yakaita Site Builder mode:

1. Unogona kuenda kunge unenge uine iye
2. Kuti utange theme, ronga: "Rendisa site yangu"
3. Setup Assistant agent ichakubatsira kuita theme yenyu yakatanga
4. Data ya site yako inozuva isingavei

### Kuti Zvinenge Zvinobva (For Theme Changes)

Kuti zvisina Site Builder mode dziri kuita selection ye theme:

1. Ronga: "Rendisa theme yangu"
2. Setup Assistant agent ichakuitira:
   - Kuenda kutaura nezvepfungwa dzinogona dzinoda (design preferences)
   - Kuita theme yenyu yakatanga (Generate a custom theme)
   - Kuratidza iye munyaka wako (Activate it on your site)

## Zvinosimbisa Kuti Zvisina Site Builder mode dziri kuita selection ye theme:

### Site Builder Mode

```
1. Chibvumiro
2. Select a theme
3. Configure basic settings
4. Done
```

### Setup Assistant Agent

```
1. Describe your site's purpose
2. Define your target audience
3. Choose design preferences
4. Agent generates custom theme
5. Agent activates theme
6. Site brief stored for future sessions
```

## Zvinhu Zvinosimbisa Kuita Setup Assistant Agent

### Kuti Zvinobva (More Flexible)

- Kuratidza site yako nechiitiko chinobva (natural language)
- Kuwana zvinoda kuita (recommendations) zvako
- Kuratidza zvinhu dzinoda dzako

### Kuratidza Zvinhu Zvinogona Kubatsira (Better Customization)

- Kuita theme yenyu yakatanga (Custom theme generation)
- Zvibvunzo zvemfumo ye design (Design system decisions)
- Tokens dzinobva zvinosimbisa (Persistent design tokens)

### Kuti Zvinenge Zvinozuva (Persistent Memory)

- Site_brief yako inozuva isingavei
- Agents dzakare dzichida kuona site yako
- Usina kutaura zvinhu dzinobva zvinotanga

### Workflow Inogara Yese Kubatana (Integrated Workflow)

- Onboarding we Theme Builder
- Skill ya Aesthetics ye Design System
- Kuita Visibility controls
- Zvinhu zvose zvichida kubatana zvakanaka

## Kuti Zvinenge Zvinobva (Troubleshooting)

### Ndinofamba kuona Site Builder mode

Site Builder mode yakadzikwa. Unogona kutamba Setup Assistant agent:

"Ndinirisa kuti ndikwanise kuita site we chinobva"

### Ndinoda kutamba site chinobva kuburikidza neSite Builder

Ungava kutaura iye nekubatsira kwakawanda (Setup Assistant agent):

1. **Kutamba:** "Ndinoda kutamba site chinobva"
2. **Pfungwa:** Ndinenge ndiri munhu wekuti site yako yakanga ine chii uye nzira inokwanisa kuonekwa.
3. **Agent ichagadzira theme inogona kuitwa**
4. **Site_brief yako itaiwe kuti uone mberi.**

### Site Builder yako yakanaka isingazivikanzi

Sites dzakagadzirwa neSite Builder mode dzinobva kunoenda kuenda. Kana uchida kuratidza matambudziko:

1. **Tsvaga kuti theme yako inenge yakachengetedzwa**
2. **Tsvaga kuti plugins dzako dziri ndizivikanzi**
3. **Tsvaga logs dzinobva kuWordPress**
4. **Tsvaga support kana matambudziko akaita zvinhu zvakawanda.**

### Ndinogona kuratidza templates dzangu dzakare?

Templates dzemSite Builder hazvikanzi kuitwa mberi. Asi:

- Sites dzako dzakagadzirwa dzinobva kunoenda kuenda
- Ungava kutamba sites dzakagadzirwa zvinhu zvakasiyi nekubatsira kwakawanda (Setup Assistant agent)
- Setup Assistant agent inopa zvinokwanisa kuitika zvakawanda.

## Zvinhu Zvinotamba Mberi

1. **Kuti usave nesite chinobva:** Shandi Setup Assistant agent
2. **Kuti usave nesite yakanga yakanaka:** Shandi kuenda neine iye
3. **Kuti usave nekuura theme:** Shandi Setup Assistant agent
4. **Kuti usave nekuratidza nzira dzehunhu (design refinement):** Shandi Design System Aesthetics skill

## Zvinotamba Mberi

- **Theme Builder Onboarding**: Kutamba kwakawanda kune themes dzakasiyi
- **Setup Assistant Agent**: Kutamba site kuburikidza nekubatsira kweagent
- **Site Specification Skill**: Kuti unenge uri kuita zvinhu zvinoda neaudience yako
- **Design System Aesthetics Skill**: Kuratidza nzira dzehunhu dzako

---
