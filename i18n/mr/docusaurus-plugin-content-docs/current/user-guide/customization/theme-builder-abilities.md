---
title: थीम बिल्डर क्षमता
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Theme Builder Abilities: Scaffold and Activate Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 मध्ये दोन शक्तिशाली क्षमता (abilities) जोडल्या आहेत, ज्यामुळे तुम्ही थेट chat interface मधून custom block themes तयार करू शकता आणि ते तुमच्या साइटवर वापरू शकता.

## Overview {#overview}

**scaffold-block-theme** आणि **activate-theme** या क्षमता एजंटला खालील गोष्टी करण्यास मदत करतात:
- तुमच्या गरजेनुसार संपूर्ण, production-ready block themes तयार करणे
- मॅन्युअल हस्तक्षेप न करता तुमच्या साइटवर थीम्स आपोआप सक्रिय (activate) करणे
- योग्य डिझाइन निर्णयांद्वारे एकसंध व्हिज्युअल ओळख (cohesive visual identities) तयार करणे

## Scaffold Block Theme {#scaffold-block-theme}

**scaffold-block-theme** या क्षमतेमुळे एक नवीन WordPress block theme तयार होतो, ज्यामध्ये खालील गोष्टींचा संपूर्ण theme structure समाविष्ट असतो:

- डिझाइन टोकन्ससह `theme.json` कॉन्फिगरेशन
- सामान्य लेआउटसाठी ब्लॉक टेम्पलेट फाइल्स
- कस्टम ब्लॉक स्टाईल्स आणि व्हेरिएशन
- थीम मेटाडेटा आणि सपोर्ट घोषणा

### How to Invoke {#how-to-invoke}

Superdav AI Agent सोबतच्या तुमच्या chat मध्ये, तुम्ही theme generation साठी विनंती करू शकता:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

एजंट खालील गोष्टी करेल:
1. संभाषणातून तुमच्या डिझाइन प्राधान्ये गोळा करेल
2. संपूर्ण theme structure तयार करेल
3. सर्व आवश्यक theme फाइल्स तयार करेल
4. सक्रिय करण्यासाठी theme तयार करेल

### Expected Output {#expected-output}

जेव्हा ही क्षमता यशस्वीरित्या कार्यान्वित होते, तेव्हा तुम्हाला खालील गोष्टी दिसतील:

- theme scaffold झाले याची पुष्टी
- theme चे नाव आणि स्थान (location)
- लागू केलेल्या डिझाइन टोकन्सचा सारांश (रंग, टाइपोग्राफी, स्पेसिंग)
- सक्रिय करण्यासाठी तयार स्थिती (ready-to-activate status)

उदाहरण output:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## Activate Theme {#activate-theme}

**activate-theme** या क्षमतेमुळे तुमची साइट नवीन scaffold केलेल्या किंवा आधीपासून अस्तित्वात असलेल्या block theme वर स्विच होते.

### How to Invoke {#how-to-invoke-1}

theme scaffold केल्यानंतर, तुम्ही ते त्वरित सक्रिय करू शकता:

```
"Activate the Modern Agency theme"
```

किंवा कोणतेही विद्यमान theme सक्रिय करू शकता:

```
"Switch to the Twentytwentyfour theme"
```

### Expected Output {#expected-output-1}

जेव्हा सक्रियण यशस्वी होते:

- सक्रिय theme ची पुष्टी
- मागील theme चे नाव (संदर्भार्थ)
- ज्या ठिकाणी theme आता live आहे, त्या साइटचा URL
- कोणतेही theme-विशिष्ट सेटअप नोट्स

उदाहरण output:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## Workflow: Scaffold and Activate {#workflow-scaffold-and-activate}

एक सामान्य workflow या दोन्ही क्षमतांचा वापर करतो:

1. **theme generation साठी विनंती**: "Create a block theme for my SaaS landing page"
2. **एजंट theme scaffold करतो**: फाइल्स आणि डिझाइन टोकन्स तयार करतो
3. **पुनरावलोकन आणि सुधारणा**: आवश्यक असल्यास डिझाइन बदलांवर चर्चा करणे
4. **Activate**: "Activate the theme now"
5. **Verify**: नवीन डिझाइन live आहे की नाही हे तपासण्यासाठी तुमच्या साइटला भेट द्या

## Design Tokens and Customization {#design-tokens-and-customization}

Scaffold केलेल्या themes मध्ये WordPress design tokens (theme.json द्वारे) खालील गोष्टींसाठी वापरले जातात:

- **Colors**: Primary, secondary, accent, neutral palette
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Padding, margin, gap scales
- **Borders**: Radius and width tokens
- **Shadows**: Elevation levels

हे tokens `theme.json` मध्ये केंद्रीकृत (centralized) असतात, ज्यामुळे एकाच फाइलमधून तुम्ही तुमच्या संपूर्ण डिझाइन सिस्टीममध्ये बदल करणे सोपे होते.

## Limitations and Notes {#limitations-and-notes}

- Themes `/wp-content/themes/` मध्ये scaffold केले जातात आणि त्यांना WordPress naming conventions फॉलो करणे आवश्यक आहे
- सक्रिय करण्यासाठी तुमच्या WordPress साइटवर योग्य परवानग्या (permissions) असणे आवश्यक आहे
- themes मधील कस्टम PHP कोड कमी असतो; जटिल कार्यक्षमतेसाठी प्लगइन्स (plugins) वापरा
- block themes WordPress 5.9 आणि त्यानंतरच्या आवृत्तीसह सर्वोत्तम कार्य करतात

## Troubleshooting {#troubleshooting}

**Scaffolding नंतर theme दिसत नाही**
- theme directory अस्तित्वात आहे आणि योग्य परवानग्या आहेत की तपासा
- `theme.json` वैध JSON आहे की तपासा
- theme चे नाव विद्यमान themes शी संघर्ष करत नाही याची खात्री करा

**Activation अयशस्वी होते**
- तुमच्याकडे administrator permissions आहेत की तपासा
- theme directory WordPress द्वारे वाचता येण्यासारखी (readable) आहे की तपासा
- तपशीलांसाठी WordPress error logs तपासा

**Design tokens लागू होत नाहीत**
- `theme.json` syntax बरोबर आहे की तपासा
- कोणतेही caching plugins clear करा
- तुमचे WordPress version तुम्ही वापरत असलेल्या tokens ला सपोर्ट करते की तपासा

## Next Steps {#next-steps}

तुमचे theme सक्रिय केल्यानंतर, तुम्ही खालील गोष्टी करू शकता:
- टाइपोग्राफी, रंग आणि स्पेसिंग सुधारण्यासाठी **Design System Aesthetics skill** वापरा
- WordPress block editor द्वारे वैयक्तिक ब्लॉक स्टाईल्स कस्टमाइझ करा
- theme च्या `style.css` फाइलमध्ये कस्टम CSS जोडा
- विशिष्ट page types साठी कस्टम ब्लॉक टेम्पलेट्स तयार करा
