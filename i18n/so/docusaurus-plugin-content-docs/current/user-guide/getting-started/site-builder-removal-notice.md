---
title: Warqabadda ka saarista Mode-ka Dhise-Bixinta Goobta
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# Warbix-kaabka Mode-ga kaabka

**Warbix-kaabka mode-gu Superdav AI Agent v1.12.0-ka kaabka ayaa la saaray.** Haddii aad isticmaalay Warbix-kaabka mode, waa inaad u guurtaa **Setup Assistant agent** si aad u samayso theme iyo in la diyaariyo website-kaaga.

## Maxaa Dhacay? {#what-happened}

### Warbix-kaabka Mode (Legacy) {#site-builder-mode-legacy}

Warbix-kaabka mode-gu wuxuu ahaa interface ku salaysan wizard oo loogu talagalay:

- Website-yada ka samaynaya template-yo
- Dejinta settings-yada asaasiga ah
- Doorka theme-ka
- Diyaarinta macluumaadka hore

### Maxaa Ka Beddelay? {#what-replaced-it}

**Setup Assistant agent** ayaa hadda maamulaya dhammaan waxyaabaha Warbix-kaabka mode-ga iyadoo la isticmaalayo:

- Dejinta iyo diyaarsashada ka fudud oo ay uu tilmaamo agent-ka
- Doorashooyin wanaagsan oo lagu hagaajin karo theme-ka
- Isdhaafsi (Integration) lahayd Theme Builder onboarding
- Xusuusin joogto ah oo ku saabsan site_brief si loo isticmaalo session-yada mustaqbalka

## Haddii Aad U Isticmaalay Warbix-kaabka Mode {#if-you-were-using-site-builder-mode}

### Website-yadaagu Waa Amni Leh {#your-sites-are-safe}

- Website-yada hore ee lagu sameeyay Warbix-kaabka mode-gu waxay sii shaqaynayaan
- Ma jirto luminta macluumaadka ama burburka website-ka
- Waxaad sii wadi kartaa maamulka website-kaaga si caadi ah

### U Guur Setup Assistant Agent {#migrate-to-setup-assistant-agent}

Haddii aad samaynayso website cusub ama aad beddelaysid theme-ka, isticmaal Setup Assistant agent:

```
"Help me set up a new site"
```

ama

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent wuxuu bixiyaa habab la mid ah oo ay ku jiraan fudayd badan.

## Isbarbardhig: Warbix-kaabka vs Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| Tilmaamaha | Warbix-kaabka (La saaray) | Setup Assistant (Cusub) |
|---------|----------------------|----------------------|
| Habka Diyaarinta | Form Wizard | Wada hadal Agent-ka |
| Doorka Theme-ka | Template-yo hore loo qorshay | Wax la sameeyay gaar ah |
| Hagaajinta | Doorasho kooban | Nidaam fulin oo dhammaystiran |
| Site brief | Ma lahayn xusuusin | Xusuusin joogto ah |
| Session-yada Mustaqbalka | Diyaarinta mar kale | Isticmaal site_brief-ka la kaydiyay |
| Fudaydka | Habab la go'aabay | Wada hadal isbeddelaya |

## U Guur Setup Assistant Agent {#migrating-to-setup-assistant-agent}

### Website Cusub {#for-new-sites}

Badba isticmaalida Site Builder mode-ka halkii:

1. Codsi: "Iga hagaajin website cus"
2. Agent-ka Setup Assistant wuxuu ku hagayaa waxyaabaha soo socda:
   - Ujeeddada iyo hadafka website-ka
   - Qofka aad u bartid (Target audience)
   - Macnaha calaamadda (Brand identity)
   - Sameynta theme-ka (Theme generation)
   - Habka hore ee hagaajinta (Initial configuration)

### Websiteoyinka Hore U Socda {#for-existing-sites}

Haddii aad leedahay website hore oo ka soo bilaabmay Site Builder mode:

1. Waxaad sii socotaa isticmaalka sida ay u yahay hadda
2. Si aad theme-ka cusub u beddesho, codsi ku samee: "Dib u qaabey website-kayga" (Redesign my site)
3. Agent-ka Setup Assistant wuxuu kaa caawin doonaa inaad samayso theme cusub
4. Data-da website-kaagu ma isbeddelin

### Isbeddellada Theme-ka {#for-theme-changes}

Halkii aad doorashada theme-ka Site Builder mode:

1. Codsi: "Beddel theme-kayga" (Change my theme)
2. Agent-ka Setup Assistant wuxuu samayn doonaa:
   - Weydiinayaa fikradahaaga qaab-dhismeedka (design preferences)
   - Sameyn theme gaar ah (Generate a custom theme)
   - Ku furaya website-kaaga

## Farqiyada Muhiimka Ah {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
1. Dooro template
2. Doorasho theme
3. Hagaajinta settings-yada asaasiga ah
4. Dhammaystiran
```

### Setup Assistant Agent {#setup-assistant-agent}

```
1. Sharax u sheeg ujeeddada website-kaaga
2. Qeex qofka aad bartid (Target audience)
3. Dooro fikradaha qaab-dhismeedka (Design preferences)
4. Agent-ku samayn doono theme gaar ah
5. Agent-ku furayaa theme-ka
6. Qoraalka kooban ee website-ka waxaa lagu kaydiyaa si loo isticmaalo mar dambe

```

## Faaiidooyinka Setup Assistant Agent {#benefits-of-setup-assistant-agent}

### Waxay U Fiican Tahay (More Flexible) {#more-flexible}

- Website-kaaga sharax sida luuqadda caadiga ah
- Hel talooyin gaar ah oo aad rabto
- Ku habayn baahiyahaaga gaarka ah

### Qaab-dhismeedka Siiro (Better Customization) {#better-customization}

- Sameynta theme gaar ah
- Go'aamada nidaamka qaab-dhismeedka (Design system decisions)
- Tokens-yada qaab-dhismeedka oo sii socda (Persistent design tokens)

### Xusuusta Siiro (Persistent Memory) {#persistent-memory}

- Website_brief-kaagu waxaa lagu kaydiyaa
- Agent-yada mustaqbalka waxay fahmi doonaan website-kaaga
- U baahnayn inaad dib u soo celiso macluumaadka hagaajinta

### Habraacyo Isku Dhafan (Integrated Workflow) {#integrated-workflow}

- Waxbarashada Theme Builder (Theme Builder onboarding)
- Xirfadda estheetaanka Nidaamka Qaab-dhismeedka (Design System Aesthetics skill)
- Awoodda xakamaynta muuqaalka (Ability Visibility controls)
- Dhammaan waxay si isku dhafan u shaqeeyaan

## Waxyaabaha La Dhaqso (Troubleshooting) {#troubleshooting}

### Ma heli karo Site Builder mode? {#i-cant-find-site-builder-mode}

Site Builder mode-ka waxaa laga saaray. Isticmaal Agent-ka Setup Assistant halkii:

"Ina caawin in laabtoob cusub"

### Waxaan rabaa inaan dib u abuuro website ka bilaabmay {#i-want-to-recreate-a-site-from-site-builder}

Waxaad dib u abuuri kartaa iyadoo la isticmaalayo Setup Assistant agent-ka:

1. Codsi: "Ina caawin inaan laabtoob cusub samaysto"
2. Sharax u qor ujeeddada iyo qaabka website-kaaga hore
3. Agent-ku wuxuu soo saari doonaa theme isku mid ah
4. `site_brief` (sharaxda website-kaaga) ayaa lagu kaydinayaa si loo isticmaalo mustaqbalka

### Website-ka Site Builder ee jira ma shaqaynayo {#my-existing-site-builder-site-isnt-working}

Website-yga hore oo la abuuro mode-ka Site Builder wuu shaqeeyaa. Haddii aad la kulanto dhibaatooyin:

1. Hubi in theme-kaagu weli yahay mid la hawlgelinaya
2. Hubi in plugins-kaagu ay si sax ah u fulin yihiin (enabled)
3. Hubi log-yada khaladaadka (error logs) ee WordPress
4. La xiriir taageerada haddii dhibaatooyinka sii socda

### Ma weli ayaan isticmaali karaa qoraallada Site Builder ee hore? {#can-i-still-use-my-old-site-builder-templates}

Qoraallada Site Builder ma aha kuwa la heli karo mar kale. Si kastaba:

- Website-ygaaga jira wuu shaqeeyaa
- Waxaad dib u abuuri kartaa website-yo isku mid ah iyadoo la isticmaalayo Setup Assistant agent-ka
- Setup Assistant agent-ku wuxuu bixiyaa fursado dheeraad ah oo aad ku hagaajin karto

## Tallaabooyinka Xiga {#next-steps}

1. **Website cusub**: Isticmaal Setup Assistant agent-ka
2. **Website hore**: Halkee ay jiraan, sii isticmaal sida ay yihiin
3. **Isbeddellada theme-ka**: Codsi caawimaad ka qaado Setup Assistant agent-ka
4. **Waxyaabaha muuqaalka hagaajinta**: Isticmaal Design System Aesthetics skill-ka

## Mawduucyada La Xidhiidha {#related-topics}

- **Theme Builder Onboarding**: Habka loo sameeyay in la diyaariyo theme-yada gaarka ah
- **Setup Assistant Agent**: Diyaarinta website-ka iyadoo la hagayo agent-ka
- **Site Specification Skill**: Qeex ujeeddada iyo qofka aad ula hadlayso website-kaaga
- **Design System Aesthetics Skill**: Hagaajinta muuqaalka (visual identity) website-kaaga
