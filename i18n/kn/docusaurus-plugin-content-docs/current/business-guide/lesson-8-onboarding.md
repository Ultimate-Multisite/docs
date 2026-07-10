---
title: 'ಪಾಠ 8: ಗ್ರಾಹಕ ಸೇರ್ಪಡೆ'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# ಪಾಠ 8: ಗ್ರಾಹಕರ Onboarding {#lesson-8-customer-onboarding}

ಒಬ್ಬ ಗ್ರಾಹಕನನ್ನು sign up ಮಾಡಲು ಪ್ರೇರೇಪಿಸುವುದು ಕೇವಲ ಅರ್ಧ ಕೆಲಸ. ಅವರು ಲಾಗಿನ್ ಮಾಡಿ, ಗೊಂದಲಕ್ಕೊಳಗಾಗಿ, ಮತ್ತೆ ಬರದಿದ್ದರೆ, ನೀವು ಅವರನ್ನು ಕಳೆದುಕೊಂಡಿದ್ದೀರಿ ಎಂದರ್ಥ. ಈ ಪಾಠವು ಹೊಸ sign up ಅನ್ನು ಸಕ್ರಿಯ, ತೊಡಗಿಸಿಕೊಂಡ ಗ್ರಾಹಕರನ್ನಾಗಿ ಪರಿವರ್ತಿಸುವ ಅನುಭವವನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸುತ್ತದೆ.

## ನಾವು ಎಲ್ಲಿ ನಿಲ್ಲಿಸಿದ್ದೆವು {#where-we-left-off}

FitSite ಸಂಪೂರ್ಣವಾಗಿ ಬ್ರ್ಯಾಂಡಿಂಗ್ ಮಾಡಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಕಾರ್ಯನಿರ್ವಹಿಸುವ checkout flow ಇದೆ. ಈಗ, ಫಿಟ್‌ನೆಸ್ ಸ್ಟುಡಿಯೋ ಮಾಲೀಕರು sign up ಪೂರ್ಣಗೊಳಿಸಿ, ಮೊದಲ ಬಾರಿಗೆ ತಮ್ಮ ಹೊಸ site ಗೆ ಬಂದ ನಂತರ ಏನಾಗುತ್ತದೆ ಎಂಬುದರ ಮೇಲೆ ನಾವು ಗಮನಹರಿಸುತ್ತೇವೆ.

## Onboarding ಏಕೆ ಮುಖ್ಯ? {#why-onboarding-matters}

sign up ನಂತರದ ಮೊದಲ 30 ನಿಮಿಷಗಳು ಗ್ರಾಹಕರು ಉಳಿಯುತ್ತಾರೋ ಅಥವಾ ಹೊರಹೋಗುತ್ತಾರೋ ಎಂಬುದನ್ನು ನಿರ್ಧರಿಸುತ್ತವೆ. ಒಬ್ಬ ಫಿಟ್‌ನೆಸ್ ಸ್ಟುಡಿಯೋ ಮಾಲೀಕರು:

- ಲಾಗಿನ್ ಮಾಡಿ, ಅದು ಈಗಾಗಲೇ ಫಿಟ್‌ನೆಸ್ ವೆಬ್‌ಸೈಟ್‌ನಂತೆ ಕಾಣುವ site ಅನ್ನು ನೋಡಿದರೆ → ಉಳಿಯುತ್ತಾರೆ
- ಮುಂದೆ ಏನು ಮಾಡಬೇಕೆಂದು ನಿಖರವಾಗಿ ತಿಳಿದಿದ್ದರೆ → ಉಳಿಯುತ್ತಾರೆ
- ಸಾಮಾನ್ಯ WordPress dashboard ನಲ್ಲಿ ಗೊಂದಲಕ್ಕೊಳಗಾದರೆ → ಹೊರಹೋಗುತ್ತಾರೆ

ನಿಮ್ಮ niche templates (ಪಾಠ 4) ಮೊದಲ ಅಂಶವನ್ನು ನಿರ್ವಹಿಸುತ್ತವೆ. ಈ ಪಾಠವು ಎರಡನೇ ಅಂಶವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.

## ಮೊದಲ ಲಾಗಿನ್ ಅನುಭವ {#the-first-login-experience}

### Welcome Dashboard Widget {#welcome-dashboard-widget}

ಹೊಸ ಗ್ರಾಹಕರಿಗೆ ಶುಭಾಶಯ ಕೋರುವ ಮತ್ತು ಸೆಟಪ್ ಮೂಲಕ ಮಾರ್ಗದರ್ಶನ ನೀಡುವ ಒಂದು custom dashboard widget ಅನ್ನು ರಚಿಸಿ. ಅವರು ಮೊದಲ ಬಾರಿಗೆ ಲಾಗಿನ್ ಆದಾಗ ಇದು ಪ್ರಮುಖವಾಗಿ ಕಾಣಿಸಿಕೊಳ್ಳಬೇಕು.

**FitSite Quick Start:**

1. **ನಿಮ್ಮ ಸ್ಟುಡಿಯೋ ಹೆಸರು ಮತ್ತು ಲೋಗೋವನ್ನು ಸೇರಿಸಿ** -- Customizer ಅಥವಾ Site Identity ಸೆಟ್ಟಿಂಗ್‌ಗಳಿಗೆ ಲಿಂಕ್
2. **ನಿಮ್ಮ class ವೇಳಾಪಟ್ಟಿಯನ್ನು ನವೀಕರಿಸಿ** -- Classes page editor ಗೆ ನೇರ ಲಿಂಕ್
3. **ನಿಮ್ಮ ತರಬೇತುದಾರರನ್ನು ಸೇರಿಸಿ** -- Trainers page editor ಗೆ ಲಿಂಕ್
4. **ನಿಮ್ಮ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಹೊಂದಿಸಿ** -- Contact page editor ಗೆ ಲಿಂಕ್
5. **ನಿಮ್ಮ site ಅನ್ನು ಪೂರ್ವವೀಕ್ಷಿಸಿ** -- ಫ್ರಂಟ್‌ಎಂಡ್‌ಗೆ ಲಿಂಕ್

ಪ್ರತಿಯೊಂದು ಹಂತವೂ ಸಂಬಂಧಿತ ಪುಟ ಅಥವಾ ಸೆಟ್ಟಿಂಗ್‌ಗೆ ನೇರವಾಗಿ ಲಿಂಕ್ ಆಗಿದೆ. ಮೆನುಗಳಲ್ಲಿ ಹುಡುಕುವ ಅಗತ್ಯವಿಲ್ಲ.

### Dashboard ಅನ್ನು ಸರಳೀಕರಿಸಿ {#simplify-the-dashboard}

ಹೊಸ ಗ್ರಾಹಕರಿಗೆ ಪ್ರತಿ WordPress ಮೆನು ಐಟ็มವನ್ನು ನೋಡುವ ಅಗತ್ಯವಿಲ್ಲ. ಈ ಬಗ್ಗೆ ಪರಿಗಣಿಸಿ:

- ಫಿಟ್‌ನೆಸ್ site ನಿರ್ವಹಣೆಗೆ ಸಂಬಂಧವಿಲ್ಲದ ಮೆನು ಐಟ็มಗಳನ್ನು ಮರೆಮಾಡುವುದು (ಉದಾಹರಣೆಗೆ, ಬಳಸದಿದ್ದರೆ Comments)
- ಹೆಚ್ಚು ಬಳಸುವ ಐಟ็มಗಳನ್ನು ಮೊದಲ ಸ್ಥಾನದಲ್ಲಿ ಇಡಲು ಮೆನುವನ್ನು ಮರುಹೊಂದಿಸುವುದು
- niche ಗೆ ಅರ್ಥವಾಗುವ custom ಮೆನು ಲೇಬಲ್‌ಗಳನ್ನು ಸೇರಿಸುವುದು ("Appearance" ಬದಲಿಗೆ "Your Studio" ಎಂಬಂತೆ)

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon ಗ್ರಾಹಕರು ಏನು ನೋಡುತ್ತಾರೆ ಎಂಬುದನ್ನು ನಿಯಂತ್ರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.

## Welcome Email Sequence {#welcome-email-sequence}

ಒಂದೇ ಒಂದು welcome email ಸಾಲದು. ಗ್ರಾಹಕರು ತಮ್ಮ ಮೊದಲ ವಾರದಲ್ಲಿ ಅನುಸರಿಸಬೇಕಾದ ಮಾರ್ಗದರ್ಶನವನ್ನು ನೀಡುವ ಒಂದು sequence ಅನ್ನು ಸೆಟ್ ಮಾಡಿ:

### Email 1: Welcome (sign up ಆದ ತಕ್ಷಣ) {#email-1-welcome-immediately-after-signup}

- Subject: "FitSite ಗೆ ಸ್ವಾಗತ -- ನಿಮ್ಮ ಸ್ಟುಡಿಯೋ ವೆಬ್‌ಸೈಟ್ ಲೈವ್ ಆಗಿದೆ"
- Content: ಲಾಗಿನ್ ಲಿಂಕ್, quick start ಹಂತಗಳು, help resources ಗೆ ಲಿಂಕ್
- Tone: ಉತ್ಸಾಹಭರಿತ, ಪ್ರೋತ್ಸಾಹದಾಯಕ, ಫಿಟ್‌ನೆಸ್‌ಗೆ ಸಂಬಂಧಿಸಿದ

### Email 2: Quick Wins (ದಿನ 1) {#email-2-quick-wins-day-1}

- Subject: "ನಿಮ್ಮ FitSite ನಲ್ಲಿ ಮೊದಲು ಮಾಡಬೇಕಾದ 3 ವಿಷಯಗಳು"
- Content: ನಿಮ್ಮ ಲೋಗೋ ಸೇರಿಸಿ, ಹೋಮ್‌ಪೇಜ್ ಹೀರೋ ಇಮೇಜ್ ನವೀಕರಿಸಿ, ನಿಮ್ಮ class ವೇಳಾಪಟ್ಟಿಯನ್ನು ಸೇರಿಸಿ
- ಎಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಬೇಕೆಂದು ತೋರಿಸುವ ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಸೇರಿಸಿ

### Email 3: Make It Yours (ದಿನ 3) {#email-3-make-it-yours-day-3}

- Subject: "ನಿಮ್ಮ ಫಿಟ್‌ನೆಸ್ site ಅನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಕಾಣುವಂತೆ ಮಾಡಿ"
- Content: ಬಣ್ಣಗಳನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಿ, ತರಬೇತುದಾರರ ಫೋಟೋಗಳನ್ನು ಸೇರಿಸಿ, ನಿಮ್ಮ ಸ್ಟುಡಿಯೋ ಕಥೆಯನ್ನು ಬರೆಯಿರಿ
- platform ನಲ್ಲಿರುವ ಉತ್ತಮ ಫಿಟ್‌ನೆಸ್ site ಗಳ ಉದಾಹರಣೆಗಳಿಗೆ ಲಿಂಕ್

### Email 4: Go Live (ದಿನ 7) {#email-4-go-live-day-7}

- Subject: "ನಿಮ್ಮ FitSite ಅನ್ನು ಜಗತ್ತಿನೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲು ಸಿದ್ಧವೇ?"
- Content: ಹಂಚಿಕೊಳ್ಳುವ ಮೊದಲು ಪರಿಶೀಲಿಸಬೇಕಾದ ಚೆಕ್‌ಲಿಸ್ಟ್, custom domain ಅನ್ನು ಹೇಗೆ ಸಂಪರ್ಕಿಸುವುದು (Growth/Pro ನಲ್ಲಿ ಇದ್ದರೆ), social sharing ಸಲಹೆಗಳು

:::tip Email Automation
ಈ ಇಮೇಲ್‌ಗಳನ್ನು ನಿಮ್ಮ ಇಮೇಲ್ ಮಾರ್ಕೆಟಿಂಗ್ platform ಮೂಲಕ trigger ಮಾಡಲು [Webhooks](/user-guide/integrations/webhooks) ಅಥವಾ [Zapier](/user-guide/integrations/zapier) ಬಳಸಿ. ಇದು ನಿಮಗೆ ಸಮಯದ ಮೇಲೆ ಹೆಚ್ಚು ನಿಯಂತ್ರಣ ನೀಡುತ್ತದೆ ಮತ್ತು engagement ಅನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.
:::

## Help Resources {#help-resources}

ಫಿಟ್‌ನೆಸ್ ಸ್ಟುಡಿಯೋ ಮಾಲೀಕರು ನಿಜವಾಗಿಯೂ ಕೇಳುವ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುವ niche-specific help content ಅನ್ನು ರಚಿಸಿ:

### Knowledge Base Articles {#knowledge-base-articles}

- "ನಿಮ್ಮ class ವೇಳಾಪಟ್ಟಿಯನ್ನು ಹೇಗೆ ನವೀಕರಿಸುವುದು"
- "ತರಬೇತುದಾರರ ಪ್ರೊಫೈಲ್‌ಗಳನ್ನು ಸೇರಿಸುವುದು ಮತ್ತು ಸಂಪಾದಿಸುವುದು"
- "ನಿಮ್ಮ ಸ್ಟುಡಿಯೋ ಲೋಗೋ ಮತ್ತು ಬಣ್ಣಗಳನ್ನು ಬದಲಾಯಿಸುವುದು"
- "ನಿಮ್ಮದೇ ಆದ ಡೊಮೇನ್ ಹೆಸರನ್ನು ಸಂಪರ್ಕಿಸುವುದು" (Growth/Pro ಗ್ರಾಹಕರಿಗೆ)
- "ನಿಮ್ಮ site ಗೆ ಬೂಕಿಂಗ್ widget ಸೇರಿಸುವುದು"

ಇವುಗಳನ್ನು non-technical ಬಳಕೆದಾರರಿಗಾಗಿ ಬರೆಯಿರಿ. ಸ್ಕ್ರೀನ್‌ಶಾಟ್‌ಗಳನ್ನು ಬಳಸಿ. WordPress ಜಾರ್ಗನ್‌ಗಳನ್ನು ತಪ್ಪಿಸಿ.

### Video Walkthroughs {#video-walkthroughs}

ಸಣ್ಣ (2-3 ನಿಮಿಷ) ಸ್ಕ್ರೀನ್ ರೆಕಾರ್ಡಿಂಗ್‌ಗಳು ಈ ಕೆಳಗಿನವುಗಳನ್ನು ತೋರಿಸುತ್ತವೆ:

- ಮೊದಲ ಲಾಗಿನ್ ಮತ್ತು ಆರಿենಟೇಷನ್
- ಹೋಮ್‌ಪೇಜ್ ಅನ್ನು ಸಂಪಾದಿಸುವುದು
- class ವೇಳಾಪಟ್ಟಿಯನ್ನು ನವೀಕರಿಸುವುದು
- ಹೊಸ ತರಬೇತುದಾರರನ್ನು ಸೇರಿಸುವುದು

ಇವುಗಳು ಪರಿಪೂರ್ಣವಾದ ಪ್ರದರ್ಶನಗಳಾಗಿರಬೇಕಾಗಿಲ್ಲ. ಸ್ಪಷ್ಟ, ಉಪಯುಕ್ತ ಮತ್ತು niche-specific ಆಗಿರುವುದು ಮುಖ್ಯ.

## The Account Page {#the-account-page}

Ultimate Multisite ಗ್ರಾಹಕರಿಗೆ-facing [Account Page](/user-guide/client-management/account-page) ಅನ್ನು ಒಳಗೊಂಡಿದೆ, ಅಲ್ಲಿ ಗ್ರಾಹಕರು ತಮ್ಮ subscription ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತಾರೆ. ಇದನ್ನು ಈ ಕೆಳಗಿನಂತೆ ಕಸ್ಟಮೈಸ್ ಮಾಡಿ:

- ಅವರ ಪ್ರಸ್ತುತ FitSite plan ಅನ್ನು ತೋರಿಸುವುದು
- ಫಿಟ್‌ನೆಸ್-ನಿರ್ದಿಷ್ಟ ಪ್ರಯೋಜನಗಳೊಂದಿಗೆ upgrade ಆಯ್ಕೆಗಳನ್ನು ಪ್ರದರ್ಶಿಸುವುದು
- ಬಿಲ್ಲಿಂಗ್ ಇತಿಹಾಸ ಮತ್ತು ಇನ್‌ವಾಯ್ಸ್ ಡೌನ್‌ಲೋಡ್‌ಗಳನ್ನು ಒದಗಿಸುವುದು
- help resources ಗೆ ಲಿಂಕ್ ನೀಡುವುದು

## Onboarding ಯ ಯಶಸ್ಸನ್ನು ಅಳೆಯುವುದು {#measuring-onboarding-success}

ನಿಮ್ಮ onboarding ಕೆಲಸ ಮಾಡುತ್ತಿದೆಯೇ ಎಂದು ತಿಳಿಯಲು ಈ ಸೂಚಕಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ:

- **Activation rate**: sign up ಮಾಡಿದವರಲ್ಲಿ ಎಷ್ಟು ಶೇಕಡಾವಾರು ಜನರು ಮೊದಲ ವಾರದಲ್ಲಿ ತಮ್ಮ site ಅನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡುತ್ತಾರೆ?
- **First-week logins**: ಹೊಸ ಗ್ರಾಹಕರು ತಮ್ಮ ಮೊದಲ ವಾರದಲ್ಲಿ ಎಷ್ಟು ಬಾರಿ ಲಾಗಿನ್ ಆಗುತ್ತಾರೆ?
- **Support tickets from new customers**: ಹೆಚ್ಚಿನ ಪ್ರಮಾಣದ ಟಿಕೆಟ್‌ಗಳು ಎಂದರೆ ನಿಮ್ಮ onboarding ನಲ್ಲಿ ಕೊರತೆಗಳಿವೆ
- **Trial-to-paid conversion**: ನೀವು ಟ್ರಯಲ್‌ಗಳನ್ನು ನೀಡಿದರೆ, ಎಷ್ಟು ಶೇಕಡಾವಾರು ಜನರು ಪಾವತಿಸುವ ಗ್ರಾಹಕರಾಗುತ್ತಾರೆ?

## The FitSite Network ಇಲ್ಲಿಯವರೆಗೆ {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## ಈ ಪಾಠದಲ್ಲಿ ನಾವು ಏನು ನಿರ್ಮಿಸಿದೆವು {#what-we-built-this-lesson}

- Quick Start widget ಜೊತೆಗೆ **ಮಾರ್ಗದರ್ಶನ ನೀಡುವ ಮೊದಲ ಲಾಗಿನ್ ಅನುಭವ**
- ಫಿಟ್‌ನೆಸ್ site ನಿರ್ವಹಣಾ ಕಾರ್ಯಗಳ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸಿದ **ಸರಳೀಕೃತ dashboard**
- ಗ್ರಾಹಕರು ತಮ್ಮ ಮೊದಲ ವಾರದಲ್ಲಿ ಅನುಸರಿಸಲು ಮಾರ್ಗದರ್ಶನ ನೀಡುವ **welcome email sequence**
- non-technical ಫಿಟ್‌ನೆಸ್ ಸ್ಟುಡಿಯೋ ಮಾಲೀಕರಿಗಾಗಿ ಬರೆದ **niche-specific help resources**
- ಅನುಭವವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ಸುಧಾರಿಸಲು **Onboarding metrics**

---

**ಮುಂದೆ:** [Lesson 9: Pricing for Profit](lesson-9-pricing) -- ಆದಾಯವನ್ನು ಹೆಚ್ಚಿಸಲು ಮತ್ತು churn ಅನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನಾವು pricing strategy ಅನ್ನು ಪರಿಷ್ಕರಿಸುತ್ತೇವೆ.
