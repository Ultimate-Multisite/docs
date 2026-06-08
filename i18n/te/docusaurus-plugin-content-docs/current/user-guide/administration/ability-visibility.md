---
title: అబిలిటీ విజిబిలిటీ
sidebar_position: 16
_i18n_hash: 5c2956a28cbd9800895f8783ca92e109
---
# Ability Visibility (సామర్థ్య దృశ్యమానం)

Superdav AI Agent v1.12.0 లో **Ability Visibility** కంట్రోల్స్ పరిచయం చేయబడ్డాయి. ఇవి ఏ ఏ సామర్థ్యాలు (abilities) ఏయే ఇంటర్‌ఫేస్‌ల ద్వారా అందుబాటులో ఉండాలో నియంత్రిస్తాయి. దీని ద్వారా అడ్మినిస్ట్రేటర్లు REST APIs, MCP సర్వర్లు, WooCommerce ఇంటిగ్రేషన్లు మరియు ఇతర ఇంటర్‌ఫేస్‌ల ద్వారా ఏ ఏ ఏజెంట్ సామర్థ్యాలు అందుబాటులో ఉండాలో సర్దుబాటు చేయవచ్చు.

## Ability Visibility అంటే ఏమిటి?

Ability Visibility అనేది ఒక అనుమతి వ్యవస్థ (permission system). ఇది ఈ క్రింది వాటిని నియంత్రిస్తుంది:

- ఏ ఏ సామర్థ్యాలు ఏజెంట్ల కోసం అందుబాటులో ఉన్నాయి
- అవి ఎక్కడ అందుబాటులో ఉంటాయి (REST API, MCP, WooCommerce, మొదలైనవి)
- వాటిని ఎవరు యాక్సెస్ చేయగలరు (partner allow-lists ద్వారా)
- వాటిని ఎలా వర్గీకరించారు (recognized vs. unclassified)

ప్రతి సామర్థ్యానికి ఒక visibility level ఉంటుంది. ఇది వివిధ ఇంటర్‌ఫేస్‌లలో దాని లభ్యతను నిర్ణయిస్తుంది.

## Visibility Levels (దృశ్యమాన స్థాయిలు)

### Public (పబ్లిక్)

**Public abilities** అన్ని చోట్లా అందుబాటులో ఉంటాయి:

- REST API ఎండ్‌పాయింట్‌లు
- MCP సర్వర్లు
- WooCommerce ఇంటిగ్రేషన్లు
- Chat ఇంటర్‌ఫేస్‌లు
- అన్ని యూజర్ రోల్స్ (సరైన అనుమతులతో)

ఉదాహరణ: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal (ఇంటర్నల్)

**Internal abilities** మీ WordPress ఇన్‌స్టాలేషన్‌లో మాత్రమే అందుబాటులో ఉంటాయి:

- Chat ఇంటర్‌ఫేస్‌లు
- అడ్మిన్ ప్యానెల్‌లు
- లాగిన్ అయిన యూజర్‌లు మాత్రమే
- REST API లేదా బాహ్య ఇంటిగ్రేషన్ల ద్వారా అందుబాటులో ఉండవు

ఉదాహరణ: `manage-settings`, `view-analytics`, `export-data`

### Partner (పార్ట్‌నర్)

**Partner abilities** కేవలం whitelisted భాగస్వాములకు మాత్రమే అందుబాటులో ఉంటాయి:

- స్పష్టమైన partner allow-list ఎంట్రీ అవసరం
- partner credentials తో REST API ద్వారా అందుబాటులో ఉంటుంది
- partner authentication తో MCP ద్వారా అందుబాటులో ఉంటుంది
- సాధారణ యూజర్లకు అందుబాటులో ఉండదు

ఉదాహరణ: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled (డిసేబుల్డ్)

**Disabled abilities** ఎక్కడా అందుబాటులో ఉండవు:

- ఏ ఇంటర్‌ఫేస్‌లోనూ అందుబాటులో ఉండదు
- చాట్‌లో అందుబాటులో ఉండదు
- అడ్మిన్ ప్యానెల్‌లలో అందుబాటులో ఉండదు
- పాతబడిన (deprecated) లేదా ప్రయోగాత్మక సామర్థ్యాలకు ఉపయోగపడుతుంది

## Ability Visibility ను నిర్వహించడం

### Ability Visibility సెట్టింగ్‌లను యాక్సెస్ చేయడం

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** కి వెళ్లండి
2. **Abilities** ట్యాబ్‌పై క్లిక్ చేయండి
3. ఇన్‌స్టాల్ చేయబడిన అన్ని సామర్థ్యాల జాబితా మరియు వాటి visibility levels కనిపిస్తాయి

### Ability వివరాలను చూడటం

ఏదైనా ability పై క్లిక్ చేయడం ద్వారా మీరు వీటిని చూడవచ్చు:

- **Name**: సామర్థ్యం యొక్క ఐడెంటిఫైయర్
- **Description**: సామర్థ్యం ఏమి చేస్తుందో వివరణ
- **Current visibility**: Public, Internal, Partner, లేదా Disabled
- **Partner allow-list**: ఏ భాగస్వాములు యాక్సెస్ చేయగలరు (Partner visibility అయితే)
- **Last updated**: visibility చివరిసారిగా ఎప్పుడు మార్చారు
- **Status**: Recognized లేదా Unclassified

### Visibility Levels మార్చడం

ఒక సామర్థ్యం యొక్క visibility మార్చడానికి:

1. జాబితాలో ability పై క్లిక్ చేయండి
2. డ్రాప్‌డౌన్ నుండి కొత్త visibility level ఎంచుకోండి
3. "Partner" ఎంచుకుంటే, allow-list లో భాగస్వామి ఐడెంటిఫైయర్‌లను జోడించండి
4. **Save** పై క్లిక్ చేయండి

ఉదాహరణ:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations (బల్క్ ఆపరేషన్లు)

అనేక సామర్థ్యాల visibility మార్చడానికి:

1. ability పక్కన ఉన్న బాక్స్‌లను టిక్ చేయండి
2. బల్క్ యాక్షన్ డ్రాప్‌డౌన్ నుండి కొత్త visibility level ఎంచుకోండి
3. **Apply** పై క్లిక్ చేయండి

## Partner Allow-List (భాగస్వామి అనుమతి జాబితా)

**partner allow-list** అనేది ఏ బాహ్య భాగస్వాములు Partner-level abilities ను యాక్సెస్ చేయగలరో నియంత్రిస్తుంది.

### భాగస్వాములను జోడించడం

1. **Superdav AI Agent** → **Settings** → **Partners** కి వెళ్లండి
2. **Add Partner** పై క్లిక్ చేయండి
3. భాగస్వామి ఐడెంటిఫైయర్‌ను నమోదు చేయండి (సాధారణంగా API key లేదా organization ID)
4. ఐచ్ఛికంగా భాగస్వామి పేరు మరియు వివరణను జోడించండి
5. **Save** పై క్లిక్ చేయండి

### భాగస్వాములకు సామర్థ్యాలు కేటాయించడం

ఒక భాగస్వామిని జోడించిన తర్వాత:

1. **Abilities** ట్యాబ్‌కి వెళ్లండి
2. Partner visibility ఉన్న ability ను కనుగొనండి
3. ఎడిట్ చేయడానికి క్లిక్ చేయండి
4. "Partner allow-list" విభాగంలో, యాక్సెస్ కలిగి ఉండాల్సిన భాగస్వాముల బాక్స్‌లను టిక్ చేయండి
5. **Save** పై క్లిక్ చేయండి

### భాగస్వామి యాక్సెస్‌ను రద్దు చేయడం

ఒక భాగస్వామి యాక్సెస్‌ను తొలగించడానికి:

1. ability ను ఎడిట్ చేయండి
2. allow-list లో భాగస్వామి బాక్స్‌ను అన్‌టిక్ చేయండి
3. **Save** పై క్లిక్ చేయండి

భాగస్వామికి ఆ సామర్థ్యం యాక్సెస్ వెంటనే రద్దవుతుంది.

## Unclassified Abilities (వర్గీకరించని సామర్థ్యాలు)

మీరు Superdav AI Agent గుర్తించని థర్డ్-పార్టీ ability ను ఇన్‌స్టాల్ చేసినప్పుడు, అది **Unclassified** గా గుర్తించబడుతుంది.

### Unclassified Abilities కోసం అడ్మిన్ నోటీసు

మీకు ఈ అడ్మిన్ నోటీసు కనిపిస్తుంది:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks.
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Unclassified Abilities ను సమీక్షించడం

1. నోటీసులో **Review Abilities** పై క్లిక్ చేయండి
2. ప్రతి unclassified ability కోసం, మీకు ఈ వివరాలు కనిపిస్తాయి:
   - Ability పేరు మరియు వివరణ
   - మూలం (ఏ plugin/addon దీన్ని ఇన్‌స్టాల్ చేసింది)
   - సూచించిన visibility level
   - Security assessment

3. ఒక visibility level ఎంచుకోండి:
   - **Public**: సామర్థ్యంపై నమ్మకం ఉంటే; అన్ని చోట్లా అందుబాటులో ఉంచండి
   - **Internal**: అంతర్గత ఉపయోగం కోసం మాత్రమే పరిమితం చేయండి
   - **Partner**: నిర్దిష్ట భాగస్వాములకు మాత్రమే పరిమితం చేయండి
   - **Disabled**: ఈ సామర్థ్యాన్ని ఉపయోగించవద్దు

4. మీ నిర్ణయాన్ని సేవ్ చేయడానికి **Classify** పై క్లిక్ చేయండి

### Unclassified Abilities ను వర్గీకరించడం ఎందుకు?

సామర్థ్యాలను వర్గీకరించడం వలన:

- **భద్రత మెరుగుపడుతుంది**: ఏది అందుబాటులో ఉంచాలో మీరు స్పష్టంగా ఆమోదిస్తారు
- **అనుకోని ప్రమాదాలు నివారించబడతాయి**: Unclassified abilities డిఫాల్ట్‌గా డిసేబుల్ చేయబడతాయి
- **ఫీచర్లు అందుబాటులోకి వస్తాయి**: వర్గీకరించిన తర్వాత, సామర్థ్యం అందుబాటులోకి వస్తుంది
- **నిర్ణయాలు డాక్యుమెంట్ చేయబడతాయి**: ఆడిట్ ప్రయోజనాల కోసం మీ ఎంపికలు లాగ్ చేయబడతాయి

## Different Surfaces లో Visibility (వివిధ ఇంటర్‌ఫేస్‌లలో దృశ్యమానం)

### REST API

**Public abilities** REST ఎండ్‌పాయింట్‌ల ద్వారా అందుబాటులో ఉంటాయి:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal మరియు Partner abilities** REST API ద్వారా అందుబాటులో ఉండవు.

### MCP Servers

**Public abilities** MCP ద్వారా అందుబాటులో ఉంటాయి:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** MCP ద్వారా ఎక్స్‌పోజ్ చేయబడవు.

**Partner abilities** భాగస్వామి credentials తో మాత్రమే అందుబాటులో ఉంటాయి.

### WooCommerce Integration

WooCommerce కి సంబంధించిన **Public abilities** అందుబాటులో ఉంటాయి:

- Product management
- Order processing
- Customer communication

**Internal abilities** WooCommerce కు అందుబాటులో ఉండవు.

### Chat Interface

**అన్ని abilities** (Public, Internal, Partner) వినియోగదారు అనుమతులపై ఆధారపడి చాట్‌లో అందుబాటులో ఉంటాయి:

- అడ్మినిస్ట్రేటర్లు అన్ని abilities లను చూస్తారు
- సాధారణ యూజర్‌లు Public abilities లను మాత్రమే చూస్తారు
- భాగస్వాములు Public + Partner abilities (whitelisted అయితే) చూస్తారు

## Security Best Practices (భద్రతా ఉత్తమ పద్ధతులు)

### Principle of Least Privilege (కనిష్ట అధికార సూత్రం)

- వాటి ఉపయోగించడానికి ఇంకా అనుమతించే అత్యంత కఠినమైన visibility కు abilities ను సెట్ చేయండి
- సున్నితమైన ఆపరేషన్ల కోసం Partner visibility ను ఉపయోగించండి
- మీరు ఉపయోగించని abilities లను డిసేబుల్ చేయండి

### Regular Audits (నియమమైన ఆడిట్‌లు)

- ప్రతి నెలా ability visibility ను సమీక్షించండి
- unclassified abilities కోసం తనిఖీ చేయండి
- ఉపయోగించని భాగస్వాముల యాక్సెస్‌ను తొలగించండి

### Logging and Monitoring (లాగింగ్ మరియు పర్యవేక్షణ)

- ఏ abilities ఎక్కువగా ఉపయోగించబడుతున్నాయో పర్యవేక్షించండి
- భాగస్వామి యాక్సెస్ నమూనాలను ట్రాక్ చేయండి
- అసాధారణ ability వినియోగంపై హెచ్చరించండి

### Third-Party Abilities (థర్డ్-పార్టీ సామర్థ్యాలు)

- ఎనేబుల్ చేయడానికి ముందు థర్డ్-పార్టీ abilities లను సమీక్షించండి
- వాటిని స్పష్టంగా వర్గీకరించండి
- Internal లేదా Partner visibility తో ప్రారంభించండి
- తనిఖీ చేసిన తర్వాత మాత్రమే Public కు ప్రమోట్ చేయండి

## Troubleshooting (సమస్య పరిష్కారం)

**జాబితాలో ability కనిపించడం లేదు**
- ability ఇన్‌స్టాల్ చేయబడి మరియు యాక్టివ్‌గా ఉందో లేదో ధృవీకరించండి
- plugin/addon ఎనేబుల్ చేయబడిందో లేదో తనిఖీ చేయండి
- పేజీని రిఫ్రెష్ చేయండి

**ability visibility ను మార్చలేకపోతున్నాను**
- మీకు అడ్మినిస్ట్రేటర్ అనుమతులు ఉన్నాయో లేదో ధృవీకరించండి
- ability ను plugin ద్వారా లాక్ చేయలేదని తనిఖీ చేయండి
- సంఘర్షణ కలిగించే (conflicting) plugins ను డిసేబుల్ చేయడానికి ప్రయత్నించండి

**ఒక భాగస్వామికి ability యాక్సెస్ చేయడం లేదు**
- భాగస్వామి allow-list లో ఉన్నాడో లేదో ధృవీకరించండి
- ability visibility Partner కు సెట్ చేయబడిందో లేదో తనిఖీ చేయండి
- భాగస్వామి credentials సరైనవో నిర్ధారించుకోండి
- authentication లోపాలను తనిఖీ చేయడానికి API logs చూడండి

**Unclassified abilities వస్తూనే ఉన్నాయి**
- అడ్మిన్ నోటీసులో వాటిని సమీక్షించి, వర్గీకరించండి
- మీ వర్గీకరణ సేవ్ చేయబడిందో లేదో తనిఖీ చేయండి
- ability ను అందించే plugin అప్‌డేట్‌గా ఉందో లేదో ధృవీకరించండి

## Migration from Legacy Mode (పాత మోడ్ నుండి మైగ్రేషన్)

మీరు Superdav AI Agent యొక్క పాత వెర్షన్ నుండి అప్‌గ్రేడ్ చేస్తుంటే:

- ఇప్పటికే ఉన్న అన్ని abilities లు ఆటోమేటిక్‌గా Public గా వర్గీకరించబడతాయి
- అవసరమైన విధంగా visibility ను సమీక్షించి, సర్దుబాటు చేయండి
- యాక్సెస్‌ను పరిమితం చేయాలనుకుంటే తప్ప, ఎలాంటి చర్య అవసరం లేదు

Native Abilities API ఇంటిగ్రేషన్‌కు మారడానికి మరింత వివరాల కోసం **Third-Party Mode Migration** చూడండి.

## Next Steps (తదుపరి చర్యలు)

ability visibility ను కాన్ఫిగర్ చేసిన తర్వాత:

1. **మీ abilities ను సమీక్షించండి**: ఇన్‌స్టాల్ చేయబడిన అన్ని abilities లను ఆడిట్ చేయండి
2. **unclassified abilities ను వర్గీకరించండి**: అడ్మిన్ నోటీసులకు ప్రతిస్పందించండి
3. **భాగస్వాములను సెటప్ చేయండి**: Partner visibility ఉపయోగిస్తుంటే భాగస్వాములను జోడించండి
4. **వినియోగం పర్యవేక్షించండి**: ఏ abilities ఎక్కువగా ఉపయోగించబడుతున్నాయో ట్రాక్ చేయండి
5. **నిర్ణయాలను డాక్యుమెంట్ చేయండి**: ప్రతి visibility level ఎందుకు ఎంచుకున్నారో నోట్స్ ఉంచుకోండి
