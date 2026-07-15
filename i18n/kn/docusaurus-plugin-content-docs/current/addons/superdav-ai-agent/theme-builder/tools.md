---
title: ಸಾಧನಗಳು ಮತ್ತು ಸಂರಚನೆ
sidebar_position: 4
_i18n_hash: 78a3b6062e985598d020eaee28754120
---
# ಸಾಧನಗಳು ಮತ್ತು ಸಂರಚನೆ

Theme Builder ನಿಮ್ಮ WordPress site ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲು, ವಿನ್ಯಾಸಗೊಳಿಸಲು ಮತ್ತು ನಿರ್ಮಿಸಲು ಸಾಧನಗಳ ಸಮೂಹವನ್ನು ಬಳಸುತ್ತದೆ. ಆವೃತ್ತಿ 1.16.0 ನಲ್ಲಿ, **sd-ai-agent/site-scrape ಈಗ ಹಂತ 1 ಸಾಧನವಾಗಿದೆ**, ಆದ್ದರಿಂದ ಇದು Theme Builder ನಲ್ಲಿ ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ ಲಭ್ಯವಿದೆ. Superdav AI Agent v1.18.0 ವಿಶ್ವಾಸಾರ್ಹ ಡೆವಲಪರ್ ಕಾರ್ಯಪ್ರವಾಹಗಳಿಗಾಗಿ ಪ್ರತ್ಯೇಕವಾಗಿ ವಿತರಿಸಲಾದ ಉನ್ನತ ಸಹಪ್ಯಾಕೇಜ್ ಅನ್ನು ಕೂಡ ಪರಿಚಯಿಸುತ್ತದೆ; ಆ ಸಾಧನಗಳು WordPress.org core package ಭಾಗವಲ್ಲ ಮತ್ತು ಅವುಗಳನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಸ್ಥಾಪಿಸಿ ಅನುಮೋದಿಸಬೇಕು.

## ಲಭ್ಯವಿರುವ ಸಾಧನಗಳು {#available-tools}

### ಹಂತ 1 ಸಾಧನಗಳು (ಯಾವಾಗಲೂ ಲಭ್ಯ) {#tier-1-tools-always-available}

ಹಂತ 1 ಸಾಧನಗಳು ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಸಂರಚನೆಯಿಲ್ಲದೆ Theme Builder ನಲ್ಲಿ ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ ಲಭ್ಯವಿವೆ.

#### sd-ai-agent/site-scrape {#sd-ai-agentsite-scrape}

**ಉದ್ದೇಶ:** ವಿನ್ಯಾಸ ಸ್ಫೂರ್ತಿ, ವಿಷಯ ರಚನೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಹೊರತೆಗೆಯಲು ಈಗಿರುವ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುವುದು.

**ಸಾಮರ್ಥ್ಯಗಳು:**

- **ವೆಬ್‌ಸೈಟ್ ವಿಶ್ಲೇಷಣೆ** — ಸ್ಪರ್ಧಿ ಅಥವಾ ಸ್ಫೂರ್ತಿದಾಯಕ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು scrape ಮಾಡಿ ವಿಶ್ಲೇಷಿಸಿ
- **ವಿನ್ಯಾಸ ಹೊರತೆಗೆಯುವುದು** — ಬಣ್ಣಗಳು, fonts, ಮತ್ತು layout ಮಾದರಿಗಳನ್ನು ಗುರುತಿಸಿ
- **ವಿಷಯ ರಚನೆ** — ಪುಟ ವ್ಯವಸ್ಥೆ ಮತ್ತು ಹಂತಕ್ರಮವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ
- **ವೈಶಿಷ್ಟ್ಯ ಪತ್ತೆ** — plugins ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಗುರುತಿಸಿ
- **ಕಾರ್ಯಕ್ಷಮತೆ ವಿಶ್ಲೇಷಣೆ** — ಪುಟ ವೇಗ ಮತ್ತು optimization ಪರಿಶೀಲಿಸಿ
- **SEO ವಿಶ್ಲೇಷಣೆ** — meta tags ಮತ್ತು structured data ಪರಿಶೀಲಿಸಿ

**ಬಳಕೆ:**

```
example.com ನ ವಿನ್ಯಾಸವನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ನನ್ನ site ಗೆ ಸ್ಫೂರ್ತಿಯಾಗಿ ಬಳಸಿ.
```

**ಇದು ಹೊರತೆಗೆಯುವುದು:**

- ಬಣ್ಣ palette ಮತ್ತು ಬಣ್ಣ ಬಳಕೆ
- Typography (fonts ಮತ್ತು ಗಾತ್ರಗಳು)
- Layout ರಚನೆ ಮತ್ತು ಅಂತರ
- Navigation ಮಾದರಿಗಳು
- ವಿಷಯ ವ್ಯವಸ್ಥೆ
- ಚಿತ್ರಗಳು ಮತ್ತು media ಬಳಕೆ
- ಸಂವಾದಾತ್ಮಕ ಅಂಶಗಳು
- Mobile responsiveness

**ಮಿತಿಗಳು:**

- Password-protected sites ಅನ್ನು scrape ಮಾಡಲು ಸಾಧ್ಯವಿಲ್ಲ
- robots.txt ಮತ್ತು site ನೀತಿಗಳನ್ನು ಗೌರವಿಸುತ್ತದೆ
- Dynamic content ಅನ್ನು ಹಿಡಿಯದಿರಬಹುದು
- JavaScript-heavy sites ನಲ್ಲಿ ಸೀಮಿತ ವಿಶ್ಲೇಷಣೆ ಇರಬಹುದು
- ದೊಡ್ಡ sites ವಿಶ್ಲೇಷಣೆಗೆ ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳಬಹುದು

### ಹಂತ 2 ಸಾಧನಗಳು (ಐಚ್ಛಿಕ) {#tier-2-tools-optional}

Theme Builder settings ನಲ್ಲಿ ಸ್ಪಷ್ಟವಾಗಿ ಸಕ್ರಿಯಗೊಳಿಸಿದಾಗ ಹಂತ 2 ಸಾಧನಗಳು ಲಭ್ಯವಿರುತ್ತವೆ.

#### ಉನ್ನತ Analytics {#advanced-analytics}

ವಿವರವಾದ ಕಾರ್ಯಕ್ಷಮತೆ metrics ಒದಗಿಸುತ್ತದೆ:

- ಪುಟ load ಸಮಯಗಳು
- Core Web Vitals
- SEO score
- Accessibility score
- Best practices score

#### ವಿಷಯ Optimizer {#content-optimizer}

ಇವುಗಳಿಗೆ ಸುಧಾರಣೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಸೂಚಿಸುತ್ತದೆ:

- ಓದಲು ಸುಲಭತೆ
- SEO optimization
- Keyword ಬಳಕೆ
- ವಿಷಯ ರಚನೆ
- Call-to-action ಸ್ಥಾಪನೆ

### ಹಂತ 3 ಸಾಧನಗಳು (Premium) {#tier-3-tools-premium}

ಹಂತ 3 ಸಾಧನಗಳಿಗೆ ಹೆಚ್ಚುವರಿ ಸಂರಚನೆ ಅಥವಾ premium ವೈಶಿಷ್ಟ್ಯಗಳು ಬೇಕಾಗುತ್ತವೆ.

#### AI ವಿಷಯ Generator {#ai-content-generator}

ಇವುಗಳಿಗಾಗಿ ವಿಷಯ ರಚಿಸುತ್ತದೆ:

- Product ವಿವರಣೆಗಳು
- Service ಪುಟಗಳು
- Blog posts
- Meta descriptions
- Call-to-action copy

#### ಉನ್ನತ ವಿನ್ಯಾಸ ಸಾಧನಗಳು {#advanced-design-tools}

ಉನ್ನತ ವಿನ್ಯಾಸ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ:

- Custom CSS generation
- Animation creation
- Interactive element design
- Advanced color theory
- Typography optimization

### ಉನ್ನತ ಸಹಚರ ಸಾಧನಗಳು (ಪ್ರತ್ಯೇಕ Package) {#advanced-companion-tools-separate-package}

ಉನ್ನತ ಸಹಪ್ಯಾಕೇಜ್ ಅನ್ನು core Superdav AI Agent release ನಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ವಿತರಿಸಲಾಗುತ್ತದೆ. Administrators ಹೆಚ್ಚಿನ ಪರಿಣಾಮದ tooling ಬಳಸಲು agent ಗೆ ಸ್ಪಷ್ಟವಾಗಿ ಅನುಮತಿಸುವ ವಿಶ್ವಾಸಾರ್ಹ developer ಮತ್ತು site-owner ಪರಿಸರಗಳಿಗೆ ಇದು ಉದ್ದೇಶಿಸಲಾಗಿದೆ.

ಉನ್ನತ ಸಹಚರ ಸಾಮರ್ಥ್ಯಗಳು ಇವುಗಳನ್ನು ಒಳಗೊಂಡಿರಬಹುದು:

- **Filesystem tools** — ವಿಶ್ವಾಸಾರ್ಹ ಪರಿಸರಗಳಲ್ಲಿ ಅನುಮೋದಿತ files ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಬದಲಿಸಿ
- **Database tools** — ಸ್ಪಷ್ಟವಾಗಿ ಅನುಮೋದಿಸಿದಾಗ site data ಅನ್ನು query ಮಾಡಿ ಅಥವಾ update ಮಾಡಿ
- **WP-CLI tools** — WordPress maintenance ಮತ್ತು inspection commands ಚಲಾಯಿಸಿ
- **REST dispatcher tools** — ನಿಯಂತ್ರಿತ dispatch workflows ಮೂಲಕ registered REST endpoints ಕರೆ ಮಾಡಿ
- **Plugin builder tools** — plugin code ಅನ್ನು scaffold ಮಾಡಿ ಮತ್ತು ಪುನರಾವರ್ತಿಸಿ
- **Git snapshot tools** — ಅಪಾಯಕರ developer operations ಮೊದಲು snapshots ರಚಿಸಿ
- **User-management tools** — ಅನುಮತಿ ಇರುವಲ್ಲಿ user records ಪರಿಶೀಲಿಸಲು ಅಥವಾ ಸರಿಹೊಂದಿಸಲು ಸಹಾಯ ಮಾಡಿ
- **Benchmark tools** — development review ಗಾಗಿ performance ಅಥವಾ capability benchmarks ಚಲಾಯಿಸಿ

ಪ್ರತಿ installation ಗಾಗಿ ಇವುಗಳನ್ನು ಸಾಮಾನ್ಯವಾಗಿ ಲಭ್ಯವಿರುವ Theme Builder ಸಾಧನಗಳೆಂದು document ಮಾಡಬೇಡಿ. Advanced companion package ಸ್ಥಾಪಿಸಿ, ಸಕ್ರಿಯಗೊಳಿಸಿ, ವಿಶ್ವಾಸಾರ್ಹ administrators ಗೆ ಮಿತಿಗೊಳಿಸಿದಾಗ ಮಾತ್ರ ಅವು ಲಭ್ಯ.

## ಸಾಧನ ಸಂರಚನೆ {#tool-configuration}

### ಸಾಧನಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವುದು {#enabling-tools}

Theme Builder ನಲ್ಲಿ ಹೆಚ್ಚುವರಿ ಸಾಧನಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು:

1. **Gratis AI Agent → Settings** ಗೆ ಹೋಗಿ
2. **Theme Builder → Tools** ಗೆ ಹೋಗಿ
3. ಅಗತ್ಯವಿರುವಂತೆ ಸಾಧನಗಳನ್ನು on/off ಮಾಡಿ
4. Settings ಉಳಿಸಿ

### ಸಾಧನ ಅನುಮತಿಗಳು {#tool-permissions}

ಕೆಲವು ಸಾಧನಗಳಿಗೆ ಅನುಮತಿಗಳು ಬೇಕಾಗುತ್ತವೆ:

- **Site scraping** — internet access ಅಗತ್ಯ
- **Analytics** — Google Analytics integration ಅಗತ್ಯ
- **Content generation** — API keys ಅಗತ್ಯ
- **Advanced features** — premium subscription ಬೇಕಾಗಬಹುದು
- **Advanced companion tools** — ಪ್ರತ್ಯೇಕವಾಗಿ ವಿತರಿಸಲಾದ Advanced package ಮತ್ತು ಸ್ಪಷ್ಟ administrator trust ಅಗತ್ಯ

### API Keys ಮತ್ತು Credentials {#api-keys-and-credentials}

ಅವುಗಳನ್ನು ಅಗತ್ಯವಿರುವ ಸಾಧನಗಳಿಗೆ API keys ಸಂರಚಿಸಿ:

1. **Gratis AI Agent → Settings → API Keys** ಗೆ ಹೋಗಿ
2. ಪ್ರತಿ ಸಾಧನಕ್ಕೆ credentials ನಮೂದಿಸಿ
3. Connection ಪರೀಕ್ಷಿಸಿ
4. ಸುರಕ್ಷಿತವಾಗಿ ಉಳಿಸಿ

### ಉನ್ನತ ಸಹಪ್ಯಾಕೇಜ್ ಸ್ಥಾಪಿಸುವುದು {#installing-the-advanced-companion-package}

ಉನ್ನತ ಸಹಪ್ಯಾಕೇಜ್ ಅನ್ನು WordPress.org core ZIP ನಿಂದ ಪ್ರತ್ಯೇಕವಾಗಿ ಬಿಡುಗಡೆ ಮಾಡಲಾಗುತ್ತದೆ. release ಗಾಗಿ ಅಧಿಕೃತ project distribution channel ನಿಂದ ಮಾತ್ರ ಅದನ್ನು ಸ್ಥಾಪಿಸಿ, ನಂತರ ವಿಶ್ವಾಸಾರ್ಹ administrators ಗೆ access ಮಿತಿಗೊಳಿಸಿ. Production site ನಲ್ಲಿ filesystem, database, WP-CLI, REST dispatcher, plugin builder, user-management, ಅಥವಾ benchmark tools ಸಕ್ರಿಯಗೊಳಿಸುವ ಮೊದಲು human approval gates ಮತ್ತು git snapshot behaviour ಪರಿಶೀಲಿಸಿ.

## sd-ai-agent/site-scrape ಬಳಸುವುದು {#using-sd-ai-agentsite-scrape}

### ಮೂಲ ಬಳಕೆ {#basic-usage}

ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲು Theme Builder ಅನ್ನು ಕೇಳಿ:

```
competitor.com ನಲ್ಲಿ ಇರುವ ನನ್ನ ಸ್ಪರ್ಧಿಯ site ವಿನ್ಯಾಸವನ್ನು ವಿಶ್ಲೇಷಿಸಿ
ಮತ್ತು ನನ್ನ site ಗಾಗಿ ವಿನ್ಯಾಸ ಸುಧಾರಣೆಗಳನ್ನು ಸೂಚಿಸಿ.
```

### ನಿರ್ದಿಷ್ಟ ವಿಶ್ಲೇಷಣೆ {#specific-analysis}

ನಿರ್ದಿಷ್ಟ ಪ್ರಕಾರದ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಕೇಳಿ:

```
example.com ನಿಂದ ಬಣ್ಣ palette ಹೊರತೆಗೆಯಿರಿ ಮತ್ತು ಅದನ್ನು ಸ್ಫೂರ್ತಿಯಾಗಿ ಬಳಸಿ.
```

```
example.com ನ navigation ರಚನೆಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಮತ್ತು ಅದೇ ರೀತಿಯ
ವ್ಯವಸ್ಥೆಯನ್ನು ನನ್ನ site ಗೆ ಅನ್ವಯಿಸಿ.
```

```
example.com ನ mobile responsiveness ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನನ್ನ site
ಅಷ್ಟೇ responsive ಆಗಿರುವಂತೆ ಖಚಿತಪಡಿಸಿ.
```

### ಹೋಲಿಕೆ ವಿಶ್ಲೇಷಣೆ {#comparison-analysis}

ಅನೇಕ sites ಹೋಲಿಸಿ:

```
site1.com ಮತ್ತು site2.com ನ ವಿನ್ಯಾಸಗಳನ್ನು ಹೋಲಿಸಿ, ಎರಡರಲ್ಲಿಯೂ ಉತ್ತಮ
ಅಂಶಗಳನ್ನು ಸೇರಿಸಿದ ವಿನ್ಯಾಸವನ್ನು ರಚಿಸಿ.
```

## ಸಾಧನ ಮಿತಿಗಳು ಮತ್ತು ಪರಿಗಣನೆಗಳು {#tool-limitations-and-considerations}

### ದರ ಮಿತಿ {#rate-limiting}

- ಸರ್ವರ್ ಮೇಲಿನ ಅಧಿಕ ಭಾರವನ್ನು ತಡೆಯಲು ಸ್ಕ್ರ್ಯಾಪಿಂಗ್‌ಗೆ ದರ ಮಿತಿ ಇರುತ್ತದೆ
- ಅದೇ siteಗೆ ಅನೇಕ ವಿನಂತಿಗಳನ್ನು throttled ಮಾಡಬಹುದು
- ದೊಡ್ಡ siteಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಹೆಚ್ಚು ಸಮಯ ಬೇಕಾಗಬಹುದು

### ವಿಷಯದ ನಿಖರತೆ {#content-accuracy}

- ಡೈನಾಮಿಕ್ ವಿಷಯ ಸಂಪೂರ್ಣವಾಗಿ ಸೆರೆಹಿಡಿಯಲ್ಪಡದಿರಬಹುದು
- JavaScript ಮೂಲಕ ರೆಂಡರ್ ಮಾಡಿದ ವಿಷಯ ಅಪೂರ್ಣವಾಗಿರಬಹುದು
- ನೈಜ-ಸಮಯದ ಡೇಟಾ ಪ್ರತಿಬಿಂಬಿಸದಿರಬಹುದು
- ಕೆಲವು ವಿಷಯ paywallಗಳ ಹಿಂದೆ ಇರಬಹುದು

### ಕಾನೂನು ಮತ್ತು ನೈತಿಕ ಪರಿಗಣನೆಗಳು {#legal-and-ethical-considerations}

- robots.txt ಮತ್ತು site ನೀತಿಗಳನ್ನು ಗೌರವಿಸಿ
- ಕಾಪಿರೈಟ್ ಹೊಂದಿರುವ ವಿಷಯವನ್ನು ಮರುಪ್ರಕಟಣೆಗೆ ಸ್ಕ್ರ್ಯಾಪ್ ಮಾಡಬೇಡಿ
- ನಕಲಿಸಲು ಅಲ್ಲ, ಪ್ರೇರಣೆಗೆ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಬಳಸಿ
- ತೆಗೆದ ವಿಷಯವನ್ನು ಬಳಸಲು ನಿಮಗೆ ಹಕ್ಕುಗಳಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ವಿಶ್ಲೇಷಿಸಲಾದ siteಗಳ ಸೇವಾ ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಿ

### ಕಾರ್ಯಕ್ಷಮತೆಯ ಪರಿಣಾಮ {#performance-impact}

- ದೊಡ್ಡ siteಗಳನ್ನು ಸ್ಕ್ರ್ಯಾಪ್ ಮಾಡಲು ಸಮಯ ಬೇಕಾಗಬಹುದು
- ಒಂದೇ ಸಮಯದಲ್ಲಿ ಅನೇಕ ಸ್ಕ್ರ್ಯಾಪ್‌ಗಳು ನಿಧಾನವಾಗಿರಬಹುದು
- ನೆಟ್‌ವರ್ಕ್ ಸಂಪರ್ಕ ವೇಗದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ
- ದೊಡ್ಡ ಡೇಟಾಸೆಟ್‌ಗಳಿಗೆ ಹೆಚ್ಚಿನ ಸಂಸ್ಕರಣೆ ಬೇಕಾಗಬಹುದು

## ಉತ್ತಮ ಪದ್ಧತಿಗಳು {#best-practices}

### Site ವಿಶ್ಲೇಷಣೆ ಬಳಸುವುದು {#using-site-analysis}

1. **ಅನೇಕ siteಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ** — ಹಲವಾರು ಮೂಲಗಳಿಂದ ಪ್ರೇರಣೆ ಸಂಗ್ರಹಿಸಿ
2. **ರಚನೆಗೆ ಗಮನ ನೀಡಿ** — ಲೇಔಟ್ ಮತ್ತು ಸಂಘಟನಾ ಮಾದರಿಗಳನ್ನು ಕಲಿಯಿರಿ
3. **ಬಣ್ಣಗಳನ್ನು ಹೊರತೆಗೆದು ನೋಡಿ** — ಬಣ್ಣ ಪ್ಯಾಲೆಟ್‌ಗಳನ್ನು ಆರಂಭಿಕ ಬಿಂದುಗಳಾಗಿ ಬಳಸಿ
4. **ಟೈಪೋಗ್ರಫಿ ಅಧ್ಯಯನ ಮಾಡಿ** — ನಿಮಗೆ ಇಷ್ಟವಾದ ಫಾಂಟ್ ಸಂಯೋಜನೆಗಳನ್ನು ಗುರುತಿಸಿ
5. **ನ್ಯಾವಿಗೇಶನ್ ಪರಿಶೀಲಿಸಿ** — ಮೆನು ಸಂಘಟನೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ

### ನೈತಿಕ ಸ್ಕ್ರ್ಯಾಪಿಂಗ್ {#ethical-scraping}

1. **robots.txt ಗೌರವಿಸಿ** — site ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಅನುಸರಿಸಿ
2. **ವಿಷಯವನ್ನು ನಕಲಿಸಬೇಡಿ** — ವಿಶ್ಲೇಷಣೆಯನ್ನು ಕೇವಲ ಪ್ರೇರಣೆಗೆ ಮಾತ್ರ ಬಳಸಿ
3. **ಹಕ್ಕುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ** — ತೆಗೆದ ವಿಷಯವನ್ನು ಬಳಸಲು ನಿಮಗೆ ಸಾಧ್ಯವಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
4. **ಮೂಲಗಳನ್ನು ಉಲ್ಲೇಖಿಸಿ** — ಪ್ರೇರಣೆಯ ಮೂಲಗಳಿಗೆ ಕ್ರೆಡಿಟ್ ನೀಡಿ
5. **ನಿಯಮಗಳನ್ನು ಪಾಲಿಸಿ** — siteಗಳ ಸೇವಾ ನಿಯಮಗಳನ್ನು ಅನುಸರಿಸಿ

### ಸಾಧನದ ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಹೆಚ್ಚಿಸುವುದು {#maximizing-tool-effectiveness}

1. **ನಿರ್ದಿಷ್ಟವಾಗಿರಿ** — ನಿರ್ದಿಷ್ಟ ರೀತಿಯ ವಿಶ್ಲೇಷಣೆಯನ್ನು ಕೇಳಿ
2. **ಸಂದರ್ಭ ಒದಗಿಸಿ** — ನಿಮ್ಮ siteನ ಉದ್ದೇಶವನ್ನು ವಿವರಿಸಿ
3. **ನಿರೀಕ್ಷೆಗಳನ್ನು ಹೊಂದಿಸಿ** — ನಿಮ್ಮ ವಿನ್ಯಾಸ ಗುರಿಗಳನ್ನು ವಿವರಿಸಿ
4. **ಪುನರಾವರ್ತಿಸಿ** — ಫಲಿತಾಂಶಗಳ ಆಧಾರದ ಮೇಲೆ ಸುಧಾರಿಸಿ
5. **ಸಾಧನಗಳನ್ನು ಸಂಯೋಜಿಸಿ** — ಸಮಗ್ರ ವಿಶ್ಲೇಷಣೆಗೆ ಅನೇಕ ಸಾಧನಗಳನ್ನು ಬಳಸಿ

## ಸಮಸ್ಯೆ ಪರಿಹಾರ {#troubleshooting}

### Site ಸ್ಕ್ರ್ಯಾಪ್ ಆಗುವುದಿಲ್ಲ {#site-wont-scrape}

- site ಸಾರ್ವಜನಿಕವಾಗಿ ಪ್ರವೇಶಿಸಬಹುದೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- robots.txt ಸ್ಕ್ರ್ಯಾಪಿಂಗ್‌ಗೆ ಅನುಮತಿಸುತ್ತದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ಬೇರೆ site ಪ್ರಯತ್ನಿಸಿ
- ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ
- ಸಮಸ್ಯೆ ಮುಂದುವರಿದರೆ support ಸಂಪರ್ಕಿಸಿ

### ಅಪೂರ್ಣ ವಿಶ್ಲೇಷಣೆ {#incomplete-analysis}

- siteನಲ್ಲಿ ಡೈನಾಮಿಕ್ ವಿಷಯ ಇರಬಹುದು
- JavaScript ಸಂಪೂರ್ಣವಾಗಿ ರೆಂಡರ್ ಆಗದೇ ಇರಬಹುದು
- ದೊಡ್ಡ siteಗಳು timeout ಆಗಬಹುದು
- ಬದಲಾಗಿ ನಿರ್ದಿಷ್ಟ ಪುಟಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಪ್ರಯತ್ನಿಸಿ
- ನಿರ್ದಿಷ್ಟ ವಿಶ್ಲೇಷಣಾ ಪ್ರಕಾರಗಳನ್ನು ಕೇಳಿ

### ನಿಧಾನ ಕಾರ್ಯಕ್ಷಮತೆ {#slow-performance}

- ದೊಡ್ಡ siteಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಲು ಹೆಚ್ಚು ಸಮಯ ಬೇಕಾಗುತ್ತದೆ
- ಒಂದೇ ಸಮಯದಲ್ಲಿ ಅನೇಕ ಸ್ಕ್ರ್ಯಾಪ್‌ಗಳು ನಿಧಾನವಾಗಿರುತ್ತವೆ
- ನೆಟ್‌ವರ್ಕ್ ಸಂಪರ್ಕ ವೇಗದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ
- ಗರಿಷ್ಠ ಬಳಕೆಯ ಸಮಯವಲ್ಲದಾಗ ಪ್ರಯತ್ನಿಸಿ
- ಮೊದಲು ಸಣ್ಣ ವಿಭಾಗಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ

## ಸಂಬಂಧಿತ ದಾಖಲೆಗಳು {#related-documentation}

- [Discovery Interview](./discovery-interview.md) — ವಿನ್ಯಾಸ ಮಾಹಿತಿಯನ್ನು ಸಂಗ್ರಹಿಸಿ
- [Design Direction](./design-direction.md) — ನಿಮ್ಮ ವಿನ್ಯಾಸವನ್ನು ಸುಧಾರಿಸಿ
- [Hospitality Menus](./hospitality-menus.md) — ಮೆನು ಪುಟಗಳನ್ನು ರಚಿಸಿ
