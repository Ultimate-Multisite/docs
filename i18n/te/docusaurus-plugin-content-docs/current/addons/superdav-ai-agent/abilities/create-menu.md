---
title: మెనూను సృష్టించండి
sidebar_position: 3
_i18n_hash: 916268f55a4ba451a8d8561d077b07f3
---
# మెనూను సృష్టించడం (Create Menu) {#create-menu}

**మెనూను సృష్టించడం** అనే ఫీచర్, పేజీ శీర్షికల నుండి వేరుగా ఉండే ప్రత్యేక నావిగేషన్ లేబుల్స్‌తో వర్డ్‌ప్రెస్ నావిగేషన్ మెనూలను సృష్టించడానికి సహాయపడుతుంది.

## అవలోకనం (Overview) {#overview}

ఈ ఫీచర్, స్టాండర్డ్ మెనూ సృష్టి కార్యాచరణను విస్తరిస్తుంది. దీని ద్వారా `navigation_label` అనే పారామీటర్‌ను పేర్కొనవచ్చు. దీనివల్ల, నావిగేషన్‌లో కనిపించే లేబుల్, పేజీ శీర్షిక కంటే భిన్నంగా ఉండటానికి వీలవుతుంది. ఇది సైట్ నిర్మాణం (site structure) మరియు వినియోగదారు అనుభవాన్ని (user experience) మరింత సౌకర్యవంతంగా మారుస్తుంది.

## పారామీటర్లు (Parameters) {#parameters}

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | మెనూ పేరు, ఉదాహరణకు: `Primary Navigation` |
| `location` | string | No | ఈ మెనూను కేటాయించాల్సిన థీమ్ లొకేషన్, ఉదాహరణకు: `primary` |
| `navigation_label` | string | No | నావిగేషన్‌లో ప్రదర్శించాల్సిన లేబుల్ (పేజీ శీర్షిక నుండి వేరుగా) |

## రిటర్న్ విలువ (Return Value) {#return-value}

```json
{
  "success": true,
  "menu_id": 7,
  "name": "Primary Navigation",
  "navigation_label": "Main Menu"
}
```

## నావిగేషన్ లేబుల్ vs పేజీ శీర్షిక (Navigation Label vs Page Title) {#navigation-label-vs-page-title}

`navigation_label` పారామీటర్, అంతర్గత మెనూ పేరును (internal menu name) వినియోగదారులకు కనిపించే లేబుల్ నుండి వేరు చేయడానికి మిమ్మల్ని అనుమతిస్తుంది:

- **`name`** — వర్డ్‌ప్రెస్ ఉపయోగించే అంతర్గత మెనూ ఐడెంటిఫైయర్ (ఉదాహరణకు, "Primary Navigation")
- **`navigation_label`** — నావిగేషన్‌లో సైట్ సందర్శకులకు కనిపించే లేబుల్ (ఉదాహరణకు, "Main Menu")

ఈ క్రింది సందర్భాలలో ఇది ఉపయోగపడుతుంది:
- మీ అంతర్గత నామకరణ పద్ధతి (internal naming convention) వినియోగదారులకు కనిపించే లేబుల్స్ కంటే భిన్నంగా ఉన్నప్పుడు
- అడ్మిన్ ప్యానెల్‌లో ఉన్న దానికంటే నావిగేషన్‌లో చిన్న లేబుల్స్ కావాలనుకున్నప్పుడు
- వివిధ లేబుల్ పొడవులతో బహుళ భాషలకు మద్దతు ఇవ్వవలసి వచ్చినప్పుడు
- నిర్దిష్ట ప్రాంతాలు లేదా వినియోగదారు సమూహాల కోసం మెనూలను నిర్మిస్తున్నప్పుడు

## వినియోగ ఉదాహరణలు (Usage Examples) {#usage-examples}

### ఉదాహరణ 1: నావిగేషన్ లేబుల్‌తో సాధారణ మెనూ (Simple Menu with Navigation Label) {#example-1-simple-menu-with-navigation-label}

**Prompt:**
```
Create a primary navigation menu called "Main Navigation" with the navigation label "Menu".
```

**Result:**
```json
{
  "success": true,
  "menu_id": 7,
  "name": "Main Navigation",
  "navigation_label": "Menu"
}
```

### ఉదాహరణ 2: నిర్దిష్ట థీమ్ లొకేషన్ కోసం మెనూ (Menu for Specific Theme Location) {#example-2-menu-for-specific-theme-location}

**Prompt:**
```
Create a footer menu called "Footer Links" with navigation label "Quick Links" and assign it to the footer location.
```

**Result:**
```json
{
  "success": true,
  "menu_id": 8,
  "name": "Footer Links",
  "navigation_label": "Quick Links",
  "location": "footer"
}
```

## థీమ్ బిల్డర్‌తో అనుసంధానం (Integration with Theme Builder) {#integration-with-theme-builder}

Theme Builderని ఉపయోగిస్తున్నప్పుడు, Create Menu ఫీచర్:

1. అందుబాటులో ఉన్న థీమ్ మెనూ లొకేషన్స్‌ను ఆటోమేటిక్‌గా గుర్తిస్తుంది
2. మీ డిజైన్‌కు తగిన నావిగేషన్ లేబుల్స్‌తో మెనూలను సృష్టిస్తుంది
3. మెనూలను సరైన థీమ్ లొకేషన్స్‌కు కేటాయిస్తుంది
4. సృష్టి చేసిన తర్వాత మెనూ ఐటెమ్‌లను జోడించడానికి మద్దతు ఇస్తుంది

## సంబంధిత ఫీచర్లు (Related Abilities) {#related-abilities}

- **`add_menu_item`** — ఇప్పటికే ఉన్న మెనూకు ఐటెమ్‌లను జోడించడం
- **`update_menu`** — మెనూ పేరు మార్చడం లేదా దానిని థీమ్ లొకేషన్‌కు తిరిగి కేటాయించడం
- **`delete_menu`** — మీ సైట్ నుండి మెనూను తొలగించడం

## ఉత్తమ పద్ధతులు (Best Practices) {#best-practices}

- **స్పష్టమైన నావిగేషన్ లేబుల్స్‌ను ఉపయోగించండి** — వినియోగదారుల కోసం లేబుల్స్‌ను సంక్షిప్తంగా మరియు వివరణాత్మకంగా ఉంచండి
- **థీమ్ లొకేషన్‌లను సరిపోల్చండి** — సరైన ప్రదర్శన కోసం మెనూలను సరైన థీమ్ లొకేషన్‌కు కేటాయించండి
- **మెనూ నిర్మాణాన్ని ప్లాన్ చేయండి** — ఐటెమ్‌లను సృష్టించే ముందు మీ మెనూ హైరార్కీని నిర్ణయించుకోండి
- **రిస్పాన్సివ్‌నెస్‌ను పరీక్షించండి** — మొబైల్ పరికరాలలో మెనూలు సరిగ్గా ప్రదర్శించబడుతున్నాయో లేదో నిర్ధారించుకోండి
- **లేబుల్స్‌ను స్థానికీకరించండి** — వివిధ భాషా వెర్షన్ల కోసం వేర్వేరు నావిగేషన్ లేబుల్స్‌ను ఉపయోగించండి

## పరిమితులు (Limitations) {#limitations}

- నావిగేషన్ లేబుల్స్ కేవలం ప్రదర్శన కోసం మాత్రమే; అంతర్గత `name` అనేది వర్డ్‌ప్రెస్ గుర్తింపు కోసం ఉపయోగించబడుతుంది.
- థీమ్ మద్దతు మారుతూ ఉంటుంది; అన్ని థీమ్‌లు అన్ని మెనూ లొకేషన్స్‌కు మద్దతు ఇవ్వవు.
- మెనూ సృష్టించిన తర్వాత మెనూ ఐటెమ్‌లను విడిగా జోడించాలి.
- నావిగేషన్ లేబుల్‌ను మార్చడానికి మెనూను అప్‌డేట్ చేయాలి.

## సంబంధిత ఫీచర్లు (Related Abilities) {#related-abilities-1}

- [Generate Logo SVG](./generate-logo-svg.md) — మీ సైట్ హెడర్‌ కోసం లోగోలను సృష్టించండి
- [Validate Palette Contrast](./validate-palette-contrast.md) — అందుబాటు గల కలర్ స్కీమ్‌లను నిర్ధారించుకోండి
