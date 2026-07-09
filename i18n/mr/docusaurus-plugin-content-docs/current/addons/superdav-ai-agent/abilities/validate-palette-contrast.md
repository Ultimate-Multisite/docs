---
title: पॅलेट कॉन्ट्रास्ट तपासा
sidebar_position: 2
_i18n_hash: b1be22868f9257a232b89cc2a2c2768d
---
# पॅलेट कॉन्ट्रास्ट तपासा {#validate-palette-contrast}

**Validate Palette Contrast** ही क्षमता तुमच्या डिझाइन पॅलेटमधील रंगांच्या जोड्या WCAG (वेब कंटेंट ॲक्सेसिबिलिटी गाईडलाईन्स) नुसार तपाсить, जेणेकरून तुम्ही ते तुमच्या थीमवर लागू करण्यापूर्वी ते योग्य आहेत की नाही हे कळेल.

## विहंगावलोकन (Overview) {#overview}

ही क्षमता तुमच्या साइटच्या रंगसंगतीला (color scheme) ॲक्सेसिबिलिटी मानकांचे पालन करते की नाही, हे तपासावी यासाठी मदत करते. ती मजकूर आणि पार्श्वभूमी रंगांमधील कॉन्ट्रास्ट रेशो (contrast ratios) तपासते. यामुळे अशा रंगांच्या संयोजनांना टाळता येते, जे दृष्टीदोष असलेल्या वापरकर्त्यांसाठी वाचणे कठीण असू शकतात.

## इनपुट स्वरूप (Input Format) {#input-format}

ही क्षमता इनपुट म्हणून एक कलर पॅलेट स्वीकारते:

```json
{
  "colors": [
    {
      "name": "primary",
      "hex": "#678233"
    },
    {
      "name": "text",
      "hex": "#ffffff"
    },
    {
      "name": "background",
      "hex": "#f5f5f5"
    }
  ],
  "wcag_level": "AA"
}
```

### पॅरामीटर्स (Parameters) {#parameters}

| पॅरामीटर | प्रकार (Type) | आवश्यक (Required) | वर्णन (Description) |
|-----------|------|----------|-------------|
| `colors` | array | होय (Yes) | `name` आणि `hex` प्रॉपर्टीज असलेले रंगांच्या ऑब्जेक्ट्सची ॲरे (Array) |
| `wcag_level` | string | नाही (No) | WCAG अनुपालन स्तर: "A", "AA" (डीफॉल्ट), किंवा "AAA" |
| `pairs_to_check` | array | नाही (No) | तपासण्यासाठी विशिष्ट रंगांच्या जोड्या (उदा. `["primary-text", "background-text"]`) |

## तपासले जाणारे WCAG स्तर (WCAG Levels Checked) {#wcag-levels-checked}

ही क्षमता WCAG मानकांनुसार कॉन्ट्रास्ट रेशो तपासते:

| स्तर (Level) | सामान्य मजकूर (Normal Text) | मोठा मजकूर (Large Text) | किमान रेशो (Minimum Ratio) |
|-------|-------------|------------|---------------|
| **A** | 3:1 | 3:1 | 3:1 |
| **AA** | 4.5:1 | 3:1 | 4.5:1 |
| **AAA** | 7:1 | 4.5:1 | 7:1 |

- **सामान्य मजकूर** — १८pt पेक्षा लहान मजकूर (किंवा १४pt बोल्ड)
- **मोठा मजकूर** — १८pt किंवा त्याहून मोठा मजकूर (किंवा १४pt बोल्ड किंवा त्याहून मोठा)

## आउटपुट स्कीमा (Output Schema) {#output-schema}

ही क्षमता एक तपशीलवार व्हॅलिडेशन रिपोर्ट (validation report) परत करते:

```json
{
  "compliant": true,
  "wcag_level": "AA",
  "pairs": [
    {
      "pair": "primary-text",
      "color1": "#678233",
      "color2": "#ffffff",
      "contrast_ratio": 5.2,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": false,
      "status": "pass"
    },
    {
      "pair": "background-text",
      "color1": "#f5f5f5",
      "color2": "#333333",
      "contrast_ratio": 12.1,
      "wcag_a": true,
      "wcag_aa": true,
      "wcag_aaa": true,
      "status": "pass"
    }
  ],
  "summary": {
    "total_pairs": 2,
    "passing": 2,
    "failing": 0,
    "recommendations": []
  }
}
```

### आउटपुट फील्ड्स (Output Fields) {#output-fields}

| फील्ड (Field) | प्रकार (Type) | वर्णन (Description) |
|-------|------|-------------|
| `compliant` | boolean | संपूर्ण पॅलेट निर्दिष्ट WCAG स्तराचे पालन करते की नाही |
| `wcag_level` | string | तपासलेला WCAG स्तर |
| `pairs` | array | प्रत्येक रंगांच्या जोडीचे तपशीलवार परिणाम |
| `contrast_ratio` | number | गणना केलेला कॉन्ट्रास्ट रेशो (1:1 ते 21:1) |
| `status` | string | प्रत्येक जोडीसाठी "pass" किंवा "fail" |
| `recommendations` | array | अयशस्वी झालेल्या जोड्या सुधारण्यासाठी सूचना |

## वापर उदाहरण (Usage Example) {#usage-example}

**प्रॉम्प्ट (Prompt):**
```
Check if my color palette meets WCAG AA standards. I have primary color #678233, text color #ffffff, and background #f5f5f5.
```

**परिणाम (Result):**
ही क्षमता सर्व रंगांच्या संयोजनांची तपासणी करते आणि खालील परिणाम परत करते:
- ✅ प्राथमिक + मजकूर: ५.२:१ रेशो (WCAG AA पास)
- ✅ पार्श्वभूमी + मजकूर: १२.१:१ रेशो (WCAG AAA पास)
- एकूण: WCAG AA नुसार अनुपालन करणारे (Compliant)

## थीम बिल्डरसह एकत्रीकरण (Integration with Theme Builder) {#integration-with-theme-builder}

जेव्हा तुम्ही Theme Builder मधील डिझाइन-दिशा निवड वापरता, तेव्हा Validate Palette Contrast क्षमता:

१. तुमच्या निवडलेल्या कलर पॅलेटचे विश्लेषण करते
२. सर्व मजकूर-पार्श्वभूमी संयोजनांची तपासणी करते
३. तुमच्या निवडलेल्या WCAG स्तराविरुद्ध व्हॅलिडेशन करते
४. अनुपालन न करणाऱ्या जोड्यांसाठी शिफारसी (recommendations) देते
५. ॲक्सेसिबल नसलेल्या रंगसंगती लागू होण्यापासून प्रतिबंधित करते

## सर्वोत्तम पद्धती (Best Practices) {#best-practices}

- **AA स्तरापासून सुरुवात करा** — बहुतेक वेबसाइट्ससाठी WCAG AA हा मानक आहे
- **लागू करण्यापूर्वी चाचणी करा** — डिझाइन निश्चित करण्यापूर्वी तुमच्या पॅलेटची तपासणी करा
- **सर्व संयोजनांची तपासणी करा** — मजकूर, लिंक्स आणि UI घटक सर्व मानकांचे पालन करतात याची खात्री करा
- **वापरकर्त्याच्या प्राधान्याचा विचार करा** — काही वापरकर्त्यांना रंगांची अतिरिक्त संवेदनशीलता असू शकते
- **कॉन्ट्रास्ट चेकर्स वापरा** — पडताळणीसाठी या क्षमतेचा ब्राउझर टूल्ससह वापर करा

## अयशस्वी जोड्या आणि शिफारसी (Failing Pairs and Recommendations) {#failing-pairs-and-recommendations}

जर रंगांची जोडी व्हॅलिडेशनमध्ये अयशस्वी झाली, तर ही क्षमता शिफारसी देते:

```json
{
  "pair": "primary-text",
  "status": "fail",
  "contrast_ratio": 2.8,
  "wcag_aa": false,
  "recommendations": [
    "मजकूर रंग #ffffff पर्यंत हलका करा (रेशो ५.२:१ होईल)",
    "पार्श्वभूमी रंग #556b2f पर्यंत गडद करा (रेशो ४.८:१ होईल)",
    "#4a6b1f सारखा वेगळा प्राथमिक रंग वापरा (रेशो ६.१:१ होईल)"
  ]
}
```

## संबंधित क्षमता (Related Abilities) {#related-abilities}

- [Generate Logo SVG](./generate-logo-svg.md) — तुमच्या व्हॅलिडेशन केलेल्या कलर पॅलेटसह लोगो तयार करा
- [Create Menu](./create-menu.md) — ॲक्सेसिबल रंगांसह नेव्हिगेशन तयार करा
