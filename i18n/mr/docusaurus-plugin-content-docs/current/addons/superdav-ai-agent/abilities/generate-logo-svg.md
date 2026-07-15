---
title: लोगो SVG तयार करा
sidebar_position: 1
_i18n_hash: 82c51571104aa5627712094c7cbd7193
---
# लोगो SVG तयार करा

**Generate Logo SVG** ही क्षमता Theme Builder ला तुमच्या WordPress साइटमध्ये कस्टम लोगो SVG तयार करण्याची आणि एम्बेड करण्याची सुविधा देते. यात आपोआप namespace-safe sanitisation देखील होते.

## विहंगावलोकन (Overview) {#overview}

ही क्षमता तुमच्या साइटच्या ब्रँडिंग दिशा आणि डिझाइन प्राधान्यांनुसार स्केलेबल वेक्टर ग्राफिक्स (SVG) लोगो तयार करते. तयार केलेले SVG आपोआप sanitise केले जातात, जेणेकरून ते WordPress मध्ये वापरण्यासाठी सुरक्षित राहतील आणि त्यांची व्हिज्युअल अखंडता (visual integrity) कायम राहील.

## पॅरामीटर्स (Parameters) {#parameters}

| पॅरामीटर | प्रकार (Type) | आवश्यक (Required) | वर्णन (Description) |
|-----------|------|----------|-------------|
| `site_name` | string | होय (Yes) | ज्या साइटसाठी लोगो तयार करायचा आहे त्याचे नाव |
| `style` | string | होय (Yes) | डिझाइन शैली (उदा. "modern", "classic", "minimalist", "playful") |
| `colors` | array | नाही (No) | लोगोमध्ये वापरण्यासाठी हेक्स कलर कोडची ॲरे (उदा. `["#678233", "#ffffff"]`) |
| `width` | number | नाही (No) | पिक्सेलमध्ये SVG रुंदी (default: 200) |
| `height` | number | नाही (No) | पिक्सेलमध्ये SVG उंची (default: 200) |
| `include_text` | boolean | नाही (No) | लोगोमध्ये साइटचे नाव मजकूर म्हणून समाविष्ट करायचे आहे की नाही (default: true) |

## आउटपुट स्वरूप (Output Format) {#output-format}

ही क्षमता खालील संरचनेत (structure) एक SVG string परत करते:

```json
{
  "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\">...</svg>",
  "width": 200,
  "height": 200,
  "colors_used": ["#678233", "#ffffff"],
  "sanitised": true
}
```

## SVG Sanitisation वर्तन (SVG Sanitisation Behaviour) {#svg-sanitisation-behaviour}

तयार केलेल्या SVG वर आपोआप namespace-safe sanitisation होते, ज्यामुळे:

- **असुरक्षित ॲट्रिब्यूट्स काढून टाकणे** — हे इव्हेंट हँडलर्स (event handlers), स्क्रिप्ट्स आणि संभाव्य धोकादायक ॲट्रिब्यूट्स काढून टाकते.
- **namespaces जतन करणे** — योग्य rendering साठी SVG namespaces (xmlns, xlink) कायम ठेवते.
- **संरचना प्रमाणित करणे** — हे सुनिश्चित करते की SVG W3C मानकांचे पालन करतो.
- **एन्टीटी एन्कोड करणे** — मजकूर सामग्रीतील विशेष वर्ण योग्यरित्या escape करते.
- **बाह्य संदर्भ काढून टाकणे** — हे बाह्य stylesheets आणि image references काढून टाकते.

यामुळे हे सुनिश्चित होते की SVG मध्ये अतिरिक्त sanitisation करण्याची गरज न पडता ते थेट WordPress मध्ये एम्बेड करण्यासाठी सुरक्षित आहे.

## वापर उदाहरण (Usage Example) {#usage-example}

**Prompt:**
```
Generate a modern logo for my tech startup called "CloudSync" using blue and white colors.
```

**Result:**
ही क्षमता एक SVG लोगो तयार करते जो:
- "CloudSync" हे साइटचे नाव समाविष्ट करते
- निर्दिष्ट निळे आणि पांढरे रंगसंगती वापरते
- आधुनिक डिझाइन तत्त्वांचे पालन करतो
- आपोआप sanitise केले जाते आणि वापरण्यासाठी तयार असते

## Theme Builder सोबत एकत्रीकरण (Integration with Theme Builder) {#integration-with-theme-builder}

जेव्हा तुम्ही Theme Builder च्या डिझाइन-दिशा निवडीचा वापर करता, तेव्हा Generate Logo SVG क्षमता:

1. तुमच्या डिझाइन दिशा आणि कलर पॅलेटचे विश्लेषण करते.
2. तुमच्या प्राधान्यांनुसार कस्टम SVG लोगो तयार करते.
3. आपोआप लोगो तुमच्या साइटच्या header/branding area मध्ये एम्बेड करते.
4. SVG ला WordPress media मध्ये कस्टम लोगो म्हणून साठवते.

## सर्वोत्तम पद्धती (Best Practices) {#best-practices}

- **स्पष्ट शैली प्राधान्ये द्या** — तुम्हाला कोणत्या प्रकारची डिझाइन शैली हवी आहे याचे वर्णन करा (modern, classic, playful, इत्यादी).
- **रंग निर्दिष्ट करा** — सातत्यासाठी तुमच्या ब्रँड रंगांचा समावेश करा.
- **rendering चाचणी घ्या** — वेगवेगळ्या स्क्रीन आकारांवर लोगो योग्यरित्या दिसतो की नाही याची खात्री करा.
- **अधिक कस्टमायझेशन करा** — आकार आणि प्लेसमेंट समायोजित करण्यासाठी WordPress च्या लोगो कस्टमायझेशन साधनांचा वापर करा.

## मर्यादा (Limitations) {#limitations}

- SVG लोगो स्थिर ग्राफिक्स (animated नाहीत) म्हणून तयार केले जातात.
- अनेक घटकांनी बनलेले जटिल लोगोसाठी मॅन्युअल सुधारणा (manual refinement) आवश्यक असू शकते.
- कस्टम फॉन्टला समर्थन नाही; मजकूर प्रणाली फॉन्ट (system fonts) वापरतो.
- खूप मोठे किंवा खूप लहान आकार गुणवत्तेवर परिणाम करू शकतात.

## संबंधित क्षमता (Related Abilities) {#related-abilities}

- [Validate Palette Contrast](./validate-palette-contrast.md) — ॲक्सेसिबिलिटीसाठी कलर कॉन्ट्रास्ट तपासा.
- [Create Menu](./create-menu.md) — तुमच्या साइटसाठी नेव्हिगेशन मेनू तयार करा.
