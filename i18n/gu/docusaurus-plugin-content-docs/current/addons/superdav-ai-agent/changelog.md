---
title: ફેરફારની નોંધ
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Changelog

## 1.16.0 — Released on 2026-05-20

### New

- **Generate Logo SVG ability** — Theme Builder હવે નેમસ્પેસ-સેફ સેનિറ്റાઇઝેશન સાથે કસ્ટમ લોગો SVG બનાવી અને એમ્બેડ કરી શકે છે.
- **Photo upload in discovery interview** — Theme Builder discovery interview માં હવે વધુ સમૃદ્ધ ડિઝાઇન સંદર્ભ માટે ફોટો અપલોડ સ્ટેપ શામેલ છે.
- **Validate Palette Contrast ability** — થીમ પર લાગુ કરતાં પહેલાં WCAG પાલન માટે કલર પેરની તપાસ કરો.
- **Hospitality menus** — Theme Builder હવે હોસ્પિટાલિટી વ્યવસાયો માટે માળખાગત ફૂડ અને બેવરેજ મેનુ પેજીસ બનાવી શકે છે.
- **Desktop and mobile preview rendering** — ડિઝાઇન-ડાયરેક્શન પસંદ કરતી વખતે ડેસ્કટોપ અને મોબાઇલ ઉપકરણો પર તમારા ડિઝાઇનનું પ્રિવ્યૂ કરો.
- **Navigation label parameter** — Create Menu ક્ષમતા હવે પેજ ટાઇટલથી અલગ `navigation_label` ને સપોર્ટ કરે છે.
- **Tier 1 tool availability** — sd-ai-agent/site-scrape હવે Theme Builder માં ડિફોલ્ટ રૂપે ઉપલબ્ધ Tier 1 ટૂલ છે.

### Fixed

- **AI Client cache** — હવે cross-request persistence માટે transients દ્વારા સપોર્ટેડ છે, જે લાંબા સમય સુધી ચાલતા agent tasks પર ડેટા ગુમાવતા અટકાવે છે.
- **Plugin row action links** — સ્પષ્ટતા માટે સુધારેલ અને નામ બદલવામાં આવ્યા છે.

## 1.10.0 — Released on 2026-05-05

### New

- **Tavily internet search** — Brave Search ની સાથે વધુ સમૃદ્ધ ઇન્ટરનેટ સર્ચ પરિણામો માટે Tavily ને સર્ચ પ્રોવાઇડર તરીકે ઉમેરો.
- **Theme-aware built-in skills** — Block Themes, Classic Themes, Kadence Blocks, અને Kadence Theme skill guides હવે પ્લગઇન સાથે આવે છે.
- **Site builder contact form ability** — ચેટ ઇન્ટરફેસમાંથી સીધું કોઈપણ પેજ પર કોન્ટેક્ટ ફોર્મ ઉમેરો.

### Improved

- **WooCommerce integration refactored** — હવે વધુ સારી વિશ્વસનીયતા અને સુસંગતતા માટે native WooCommerce APIs નો ઉપયોગ કરે છે.
- **Provider list refreshes automatically** — જ્યારે કોઈ પ્લગઇન એક્ટિવેટ અથવા ડિએક્ટિવેટ કરવામાં આવે છે ત્યારે.

### Fixed

- **navigate-to ability** — કેટલાક એડમિન પેજીસ પર અનંત રિલોડ લૂપ (infinite reload loop) ઠીક કરવામાં આવ્યો છે.
- **list-posts ability** — હવે કેટેગરી અને ટેગના નામોને યોગ્ય રીતે સ્લગ્સ (slugs) માં રિઝોલ્વ કરે છે.
- **WP-CLI commands** — અગાઉના રિફેક્ટર પછી ગુમ થયેલા નેમસ્પેસ એલિઆસ (namespace aliases) પુનઃસ્થાપિત કરવામાં આવ્યા છે.
- **Event automation** — એવા સાઇટ્સને gracefully handle કરે છે જ્યાં ઓટોમેશન ટેબલ હજી બનાવવામાં આવ્યા નથી.
- **memory-save ability** — હવે સિસ્ટમ ઇન્સ્ટ્રક્શન બિલ્ડરમાં સાચો નેમસ્પેસ પ્રિફિક્સ (namespace prefix) નો ઉપયોગ કરે છે.
- **Scalar tool results** — હવે AI ને પાછા આપતા પહેલા યોગ્ય રીતે wrap કરવામાં આવે છે.
- **Usage statistics** — હવે જૂના વર્ઝનમાંથી અપગ્રેડ કરતી વખતે legacy ability key format ને યોગ્ય રીતે હેન્ડલ કરે છે.
