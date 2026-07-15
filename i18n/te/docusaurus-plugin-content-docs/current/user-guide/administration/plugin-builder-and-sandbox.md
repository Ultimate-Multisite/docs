---
title: ప్లగిన్ బిల్డర్ & శాండ్‌బాక్స్
sidebar_position: 21
_i18n_hash: 74c409a36b52ea261922998822b286d0
---
# Plugin Builder & Sandbox

Gratis AI Agent v1.5.0 ద్వారా **Plugin Builder & Sandbox System** అందుబాటులోకి వచ్చింది. ఇది AI అసిస్టెంట్‌కు మీ నెట్‌వర్క్‌లో WordPress plugins ను రూపొందించడానికి, యాక్టివేట్ చేయడానికి మరియు నిర్వహించడానికి వీలు కల్పిస్తుంది — అంతా ఒక సురక్షితమైన, ఐసోలేటెడ్ sandbox వాతావరణం ద్వారా.

## Overview {#overview}

Plugin Builder అనేది AI అసిస్టెంట్‌కు సహజ భాషా అభ్యర్థనలకు అనుగుణంగా కస్టమ్ WordPress plugins రాయడానికి సహాయపడుతుంది. రూపొందించబడిన plugins లు లైవ్ సైట్ ఫంక్షనాలిటీని ప్రభావితం చేయడానికి ముందే, అవి ధృవీకరించబడతాయి (validated), నిల్వ చేయబడతాయి (stored), మరియు ఒక sandbox layer లో యాక్టివేట్ చేయబడతాయి.

దీనిని ఉపయోగించగల కొన్ని సందర్భాలు:

- డెవలపర్ సహాయం లేకుండా తేలికపాటి యుటిలిటీ plugins ను రూపొందించడం.
- WordPress hooks లేదా కస్టమ్ పోస్ట్ టైప్స్ అవసరమయ్యే ఫీచర్లను ప్రోటోటైప్ చేయడం.
- బ్యాచ్ ఆపరేషన్ల కోసం తక్కువ కాలం పనిచేసే ఆటోమేషన్ స్క్రిప్ట్‌లను సృష్టించడం.

## AI ద్వారా Plugin ను రూపొందించడం {#generating-a-plugin-via-ai}

ఒక plugin ను రూపొందించడానికి, Gratis AI Agent chat interface ను తెరిచి, మీకు ఏమి కావాలో వివరించండి. ఉదాహరణకు:

> "డాష్‌బోర్డ్‌లో కస్టమ్ అడ్మిన్ నోటీసును జోడించే plugin ను సృష్టించండి."

AI ఈ క్రింది పనులు చేస్తుంది:

1. స్ట్రక్చర్డ్ కోడ్ జనరేషన్ ఉపయోగించి plugin PHP కోడ్‌ను ఉత్పత్తి చేస్తుంది.
2. సింటాక్స్ ఎర్రర్స్ మరియు సురక్షితం కాని ప్యాటర్న్స్ కోసం అవుట్‌పుట్‌ను ధృవీకరిస్తుంది (validate).
3. రూపొందించబడిన plugin ను sandbox store లో సేవ్ చేస్తుంది.
4. plugin slug తో పాటు, **Activate in Sandbox** అనే బటన్‌తో ధృవీకరణను తిరిగి ఇస్తుంది.

యాక్టివేట్ చేయడానికి ముందు, మీరు అదే సంభాషణ థ్రెడ్‌లో ఫాలో-అప్ చేయడం ద్వారా ఫలితాన్ని మెరుగుపరచవచ్చు.

## Sandbox Activation {#sandbox-activation}

sandbox లో ఒక plugin ను యాక్టివేట్ చేయడం అనేది లైవ్ నెట్‌వర్క్‌లో యాక్టివేట్ చేయడం కంటే భిన్నమైన ప్రక్రియ. sandbox:

- plugin ను ఒక ఐసోలేటెడ్ WordPress environment (wp-env) లో రన్ చేస్తుంది.
- ఏవైనా PHP ఎర్రర్స్, వార్నింగ్స్ లేదా hook conflicts లను పట్టుకుంటుంది (captures).
- యాక్టివేషన్ ఫలితాన్ని chat interface లో తిరిగి నివేదిస్తుంది.

sandbox లో plugin ను యాక్టివేట్ చేయడానికి, AI chat response లోని **Activate in Sandbox** బటన్‌పై క్లిక్ చేయండి, లేదా ఈ slash command ను ఉపయోగించండి:

```
/activate-plugin <plugin-slug>
```

యాక్టివేషన్ విజయవంతమైందా లేదా విఫలమైందా అని ఒక స్టేటస్ మెసేజ్ నిర్ధారిస్తుంది. విఫలమైతే, ఎర్రర్ లాగ్ chat thread లో ప్రదర్శించబడుతుంది.

## Managing Generated Plugins {#managing-generated-plugins}

రూపొందించబడిన plugins లు **Gratis AI Agent → Plugin Builder → Manage Plugins** లో జాబితా చేయబడతాయి. ఈ స్క్రీన్ నుండి మీరు చేయగలిగేవి:

| Action | Description |
|---|---|
| **View source** | పూర్తి plugin PHP కోడ్‌ను సమీక్షించండి. |
| **Re-activate in sandbox** | sandbox యాక్టివేషన్ చెక్‌ను మళ్లీ రన్ చేయండి. |
| **Install on network** | plugin ను లైవ్ నెట్‌వర్క్‌లో డిప్లాయ్ చేయండి (మాన్యువల్ నిర్ధారణ అవసరం). |
| **Update** | AI ద్వారా కొత్త వెర్షన్‌ను అందించి, ఉన్న కోడ్‌ను భర్తీ చేయండి. |
| **Delete** | plugin ను sandbox store నుండి తొలగించండి. ముందుగా అన్ని సైట్‌ల నుండి డియాక్టివేట్ చేస్తుంది. |

:::warning
**Install on network** అనేది రూపొందించబడిన plugin ను మీ లైవ్ WordPress multisite లో డిప్లాయ్ చేస్తుంది. ముందుకు వెళ్లే ముందు plugin కోడ్‌ను సమీక్షించండి. లైవ్ ఇన్‌స్టాల్ పూర్తి చేయడానికి Gratis AI Agent నిర్ధారణ కోసం అడుగుతుంది.
:::

## Installing a Generated Plugin on the Network {#installing-a-generated-plugin-on-the-network}

sandbox లో ఉన్న plugin తో మీరు సంతృప్తి చెందితే, మీరు దానిని లైవ్ నెట్‌వర్క్‌లో ఇన్‌స్టాల్ చేయవచ్చు:

1. **Gratis AI Agent → Plugin Builder → Manage Plugins** కి వెళ్లండి.
2. మీరు డిప్లాయ్ చేయాలనుకుంటున్న plugin పక్కన ఉన్న **Install on Network** పై క్లిక్ చేయండి.
3. డైలాగ్‌ను నిర్ధారించండి (Confirm). plugin అనేది `wp-content/plugins/` లో ఇన్‌స్టాల్ చేయబడి, నెట్‌వర్క్-యాక్టివేట్ అవుతుంది.

ప్రత్యామ్నాయంగా, chat interface లో slash command ను ఉపయోగించండి:

```
/install-plugin <plugin-slug>
```

## Plugin Updates {#plugin-updates}

రూపొందించబడిన plugin ను అప్‌డేట్ చేయడానికి, కొత్త సంభాషణలో AI అసిస్టెంట్‌కు మార్పును వివరించండి:

> "dashboard-notice plugin ను అడ్మినిస్ట్రేటర్లకు మాత్రమే నోటీసు చూపించేలా అప్‌డేట్ చేయండి."

AI కొత్త వెర్షన్‌ను రూపొందిస్తుంది, ఇది ప్రస్తుత వెర్షన్‌తో పాటు sandbox లో కనిపిస్తుంది. అప్‌డేట్ వర్తింపజేయడానికి ముందు మీరు diff ను సమీక్షించి నిర్ధారించాలి.

## HookScanner Integration {#hookscanner-integration}

Plugin Builder అనేది ప్రతి రూపొందించబడిన plugin ద్వారా రిజిస్టర్ చేయబడిన hooks మరియు filters ను విశ్లేషించడానికి ఒక ఇంటిగ్రేటెడ్ **HookScanner** ను ఉపయోగిస్తుంది. HookScanner అవుట్‌పుట్ chat response లో చూపబడుతుంది మరియు ఇందులో ఇవి ఉంటాయి:

- రిజిస్టర్ చేయబడిన యాక్షన్ hooks (`add_action` కాల్స్).
- రిజిస్టర్ చేయబడిన ఫిల్టర్ hooks (`add_filter` కాల్స్).
- plugin dependencies లో కనుగొనబడిన ఏవైనా hooks (ఇది `vendor/` మరియు `node_modules/` డైరెక్టరీలను దాటుతుంది).

దీని ద్వారా యాక్టివేట్ చేయడానికి ముందు plugin యొక్క ప్రవర్తనను అర్థం చేసుకోవడానికి ఇది సహాయపడుతుంది.

## Security Considerations {#security-considerations}

- రూపొందించబడిన plugins లు మాన్యువల్‌గా ఇన్‌స్టాల్ చేయబడిన plugins ల నుండి వేరుగా నిల్వ చేయబడతాయి మరియు మీరు వాటిని నెట్‌వర్క్‌లో స్పష్టంగా ఇన్‌స్టాల్ చేయనంత వరకు standard WordPress plugin management screen ద్వారా అందుబాటులో ఉండవు.
- plugin ఫైళ్లను రాసేటప్పుడు డైరెక్టరీ ట్రావర్సల్ నిరోధించడానికి sandbox path validation ను ఉపయోగిస్తుంది.
- ప్రమాదకరమైన ఫంక్షన్ కాల్స్ (ఉదా. `eval`, `exec`, `system`) ఉన్న plugins లు ధృవీకరణ సమయంలో ఫ్లాగ్ చేయబడతాయి మరియు యాక్టివేట్ చేయబడవు.
