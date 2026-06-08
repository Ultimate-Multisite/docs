---
title: മാറ്റങ്ങൾ
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Released on 2026-05-20

### New

- **Generate Logo SVG ability** — Theme Builder ഇപ്പോൾ namespace-safe sanitisation സഹിതം കസ്റ്റം ലോഗോ SVG സജ്ജീകരിക്കാനും ഉൾപ്പെടുത്താനും കഴിയും.
- **Photo upload in discovery interview** — കൂടുതൽ സമ്പന്നമായ ഡിസൈൻ സന്ദർഭം ലഭിക്കുന്നതിനായി, Theme Builder discovery interview-ൽ ഇപ്പോൾ ഒരു ഫോട്ടോ അപ്‌ലോഡ് ഘട്ടം ഉൾപ്പെടുത്തിയിരിക്കുന്നു.
- **Validate Palette Contrast ability** — ഒരു തീമിന് ഇത് പ്രയോഗിക്കുന്നതിന് മുമ്പ്, കളർ ജോഡികൾ WCAG അനുരൂപതയ്ക്കായി പരിശോധിക്കാനുള്ള സൗകര്യം.
- **Hospitality menus** — ഹോസ്പിറ്റാലിറ്റി ബിസിനസ്സുകൾക്കായി ഘടനാപരമായ ഭക്ഷണ, പാനീയ മെനു പേജുകൾ സൃഷ്ടിക്കാൻ Theme Builder ഇപ്പോൾ കഴിയും.
- **Desktop and mobile preview rendering** — ഡിസൈൻ ദിശ തിരഞ്ഞെടുക്കുന്ന സമയത്ത് ഡെസ്ക്ടോപ്പ്, മൊബൈൽ ഉപകരണങ്ങളിൽ നിങ്ങളുടെ ഡിസൈൻ പ്രിവ്യൂ ചെയ്യുക.
- **Navigation label parameter** — പേജ് ടൈറ്റിലിൽ നിന്ന് വ്യത്യസ്തമായ ഒരു `navigation_label` പിന്തുണയ്ക്കുന്നതിനായി Create Menu സൗകര്യം ഇപ്പോൾ ലഭ്യമാണ്.
- **Tier 1 tool availability** — sd-ai-agent/site-scrape ഇപ്പോൾ Theme Builder-ൽ ഡിഫോൾട്ടായി ലഭ്യമായ ഒരു Tier 1 ടൂളാണ്.

### Fixed

- **AI Client cache** — ദീർഘകാലം പ്രവർത്തിക്കുന്ന ഏജന്റ് ടാസ്ക്കുകളിൽ ഡാറ്റ നഷ്ടപ്പെടുന്നത് തടയാൻ, ഇപ്പോൾ ട്രാൻസിയന്റ്സ് (transients) ഉപയോഗിച്ച് ബാക്കപ്പ് ചെയ്തിരിക്കുന്നു.
- **Plugin row action links** — വ്യക്തതയ്ക്കായി തിരുത്തുകയും പേര് മാറ്റുകയും ചെയ്തിരിക്കുന്നു.

## 1.10.0 — Released on 2026-05-05

### New

- **Tavily internet search** — Brave Search-നൊപ്പം കൂടുതൽ സമ്പന്നമായ ഇന്റർനെറ്റ് തിരയൽ ഫലങ്ങൾക്കായി Tavily നെ ഒരു സെർച്ച് പ്രൊവൈഡർ ആയി ചേർക്കുക.
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, കൂടാതെ Kadence Theme skill guides എന്നിവ ഇപ്പോൾ പ്ലഗിന്നോടൊപ്പം വരുന്നു.
- **Site builder contact form ability** — ചാറ്റ് ഇന്റർഫേസിൽ നിന്ന് നേരിട്ട് ഏത് പേജിലും ഒരു കോൺടാക്റ്റ് ഫോം ചേർക്കാൻ കഴിയും.

### Improved

- **WooCommerce integration refactored** — മികച്ച വിശ്വാസ്യതയ്ക്കും അനുയോജ്യതയ്ക്കുമായി ഇപ്പോൾ Native WooCommerce APIs ഉപയോഗിക്കുന്നു.
- **Provider list refreshes automatically** — ഏതെങ്കിലും പ്ലഗിൻ ആക്ടിവേറ്റ് ചെയ്യുകയോ ഡിആക്ടിവേറ്റ് ചെയ്യുകയോ ചെയ്യുമ്പോൾ ഇത് സ്വയമേവ പുതുക്കുന്നു.

### Fixed

- **navigate-to ability** — ചില അഡ്മിൻ പേജുകളിൽ無限 റീലോഡ് ലൂപ്പ് (infinite reload loop) വന്ന പ്രശ്നം പരിഹരിച്ചു.
- **list-posts ability** — ഇപ്പോൾ കാറ്റഗറി, ടാഗ് പേരുകൾ ശരിയായി സ്ലഗ്‌സായി (slugs) പരിഹരിക്കുന്നു.
- **WP-CLI commands** — മുൻപത്തെ refactor-ന് ശേഷം നഷ്ടപ്പെട്ട namespace aliases എന്നിവ പുനഃസ്ഥാപിച്ചു.
- **Event automation** — ഓട്ടോമേഷൻ ടേബിളുകൾ ഇതുവരെ സൃഷ്ടിക്കാത്ത സൈറ്റുകൾ കൈകാര്യം ചെയ്യാൻ ഇപ്പോൾ മികച്ച രീതിയിലാണ് ക്രമീകരിച്ചത്.
- **memory-save ability** — സിസ്റ്റം ഇൻസ്ട്രക്ഷൻ ബിൽഡറിൽ ശരിയായ namespace prefix ഉപയോഗിക്കുന്നു.
- **Scalar tool results** — AI-ക്ക് തിരികെ നൽകുന്നതിന് മുമ്പ് ഇപ്പോൾ ശരിയായി റാപ്പ് ചെയ്തിരിക്കുന്നു.
- **Usage statistics** — പഴയ പതിപ്പുകളിൽ നിന്ന് അപ്‌ഗ്രേഡ് ചെയ്യുമ്പോൾ, പഴയ ability key format കൈകാര്യം ചെയ്യാൻ ഇപ്പോൾ ശരിയായി ക്രമീകരിച്ചിരിക്കുന്നു.
