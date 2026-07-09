---
title: Isakhono seNkcukacha zeSiza
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Isakhono seNkcazelo yeSayithi

**Isakhono seNkcazelo yeSayithi** yindlela ecwangcisiweyo yokubamba iinjongo zesayithi yakho, abaphulaphuli, kunye nesazisi sophawu. Olu lwazi lugcinwa kwimemori yakho ye-**site_brief**, ethi ii-agent zibhekise kuyo kwiiseshoni ukuze zinike uncedo olungaguquguqukiyo, olunolwazi ngomxholo.

## Yintoni iNkcazelo yeSayithi?

INkcazelo yeSayithi yinkqubo yokubhala phantsi:

- **Injongo yesayithi**: Yintoni eyenziwa yisayithi yakho kwaye kutheni ikhona
- **Abaphulaphuli ekujoliswe kubo**: Ngubani otyelela isayithi yakho kwaye bafuna ntoni
- **Isazisi sophawu**: Imibala yakho, ithoni, kunye nesimbo esibonakalayo
- **Iinjongo zeshishini**: Impumelelo ibonakala njani kwisayithi yakho
- **Ulwakhiwo lomxholo**: Indlela isayithi yakho elungelelaniswe ngayo

Le nkcazelo iba yi-**site_brief** yakho, imemori eqhubekayo esetyenziswa zii-agent ukuze ziqonde umxholo wesayithi yakho.

## Kutheni Usebenzisa iNkcazelo yeSayithi?

### Ukungaguquguquki Kwiiseshoni

Ngaphandle kwe-site_brief, kuya kufuneka uchaze kwakhona injongo yesayithi yakho rhoqo xa uqala iseshoni entsha. Ngayo, ii-agent ziqonda ngoko nangoko:

- Iinjongo zesayithi yakho kunye nabaphulaphuli
- Imibala yophawu lwakho kunye nethoni
- Ulwakhiwo lomxholo wakho
- Iinjongo zeshishini lakho

### Iingcebiso Ezingcono

Ii-agent zisebenzisa i-site_brief yakho ukuze:

- Zicebise iimpawu ezihambelana nenjongo yesayithi yakho
- Zicebise izakhiwo zomxholo ezihambelana neenjongo zakho
- Ziphakamise uyilo olungqinelana nophawu lwakho
- Ziphephe ukucebisa iimpawu ezingahambelaniyo

### Ukuqalisa Ngokukhawuleza

Ii-agent ezintsha (okanye ii-agent kwiiseshoni ezintsha) zinokukhawuleza ziqonde imeko ngokufunda i-site_brief yakho endaweni yokubuza imibuzo yokucacisa.

## Ukuqalisa iNkcazelo yeSayithi

### Ngexesha le-Theme Builder Onboarding

Isakhono seNkcazelo yeSayithi siqalwa ngokuzenzekelayo ngexesha le-**Theme Builder onboarding flow**. I-Setup Assistant agent ibuza imibuzo kwaye yakhe i-site_brief yakho.

### Ukuqalisa Ngesandla

Ungaqalisa iNkcazelo yeSayithi nangaliphi na ixesha:

```
"Let's define my site specification"
```

okanye

```
"Help me create a site brief"
```

## Inkqubo yeNkcazelo yeSayithi

### Inyathelo 1: Injongo yeSayithi

I-agent iyabuza:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Ungakhetha udidi okanye uchaze injongo yakho.

### Inyathelo 2: Abaphulaphuli Ekujoliswe Kubo

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Inyathelo 3: Isazisi Sophawu

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Inyathelo 4: Iinjongo Zeshishini

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Inyathelo 5: Ulwakhiwo Lomxholo

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## Imemori yakho ye-site_brief

Emva kokugqiba iNkcazelo yeSayithi, ulwazi lwakho lugcinwa njenge-**site_brief** kwimemori ye-agent yakho. Le yingxelo ecwangcisiweyo equlathe:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Ukujonga Nokuhlaziya i-site_brief Yakho

### Jonga i-site_brief Yakho

Buza i-agent:

```
"Show me my site brief"
```

okanye

```
"What do you know about my site?"
```

I-agent iya kubonisa inkcazelo yakho egciniweyo.

### Hlaziya i-site_brief Yakho

Ukuba isayithi yakho iyakhula, ungayihlaziya:

```
"Update my site brief: we're now targeting B2B customers"
```

okanye

```
"Refresh my site specification"
```

Oku kuya kuqhuba kwakhona isakhono seNkcazelo yeSayithi ngolwazi lwakho olukhoyo njengendawo yokuqalisa.

## Indlela Ii-agent Ezisebenzisa Ngayo i-site_brief

### Iingcebiso Zoyilo

Xa ucela utshintsho loyilo, ii-agent zibhekisa kwi-site_brief yakho:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Iingcebiso Zeempawu

Ii-agent zicebisa iimpawu ezihambelana neenjongo zakho:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Ulwakhiwo Lomxholo

Ii-agent ziphakamisa ulungelelwaniso lomxholo olusekelwe kulwakhiwo lwakho:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Ezona Ndlela Zilungileyo

### Cacisa Ngokuthe Ngqo

Endaweni yokuthi "abaphulaphuli ngokubanzi," chaza abaphulaphuli bakho bokwenene:

- ✓ "Abasetyhini abaneminyaka eyi-25-45, abanomdla kwifashoni ezinzileyo"
- ✗ "Wonke umntu"

### Hlaziya Rhoqo

Njengoko isayithi yakho ikhula, hlaziya i-site_brief yakho:

- Xa ujikela kubaphulaphuli abatsha
- Xa wongeza imigca emitsha yeemveliso
- Xa isazisi sophawu lwakho sitshintsha
- Xa iinjongo zeshishini lakho zitshintsha

### Sebenzisa Isigama Esingaguquguqukiyo

Sebenzisa amagama afanayo kwiiseshoni:

- ✓ Hlala usithi "sustainable jewelry" (hayi "eco-friendly jewelry" okanye "green products")
- ✓ Bhekisa kubaphulaphuli bakho ngendlela efanayo rhoqo

### Bandakanya Umxholo

Nika imvelaphi enceda ii-agent ziqonde izigqibo zakho:

- "Sijolise kwiingcali ezixabisa umgangatho ngaphezu kwexabiso"
- "Abaphulaphuli bethu banolwazi lobuchwepheshe kwaye balindele uyilo lwangoku"
- "Siyi-startup exhaswa ngemali yethu, ngoko sifuna izisombululo ezingabizi kakhulu"

## Ubudlelwane noKungeniswa kwe-Theme Builder

Isakhono seNkcazelo Yesayithi sidityaniswe kwi-**Theme Builder onboarding flow**. Xa ugqiba ukungeniswa, i-site_brief yakho yenziwa ngokuzenzekelayo ngolwazi olunikileyo.

Ungaqhuba neNkcazelo Yesayithi ngokuzimeleyo ukuba ufuna uku:

- Phucula inkcazelo yakho emva kokuseta kokuqala
- Hlaziya isishwankathelo sesayithi yakho njengoko isayithi yakho ikhula
- Yenza inkcazelo eneenkcukacha ngaphambi kokuqala i-Theme Builder

## Ukulungisa Iingxaki

**I-site_brief yam ayisetyenziswa**
- Qinisekisa ukuba i-agent inokufikelela kwimemori
- Cela i-agent ukuba "ikhumbule isishwankathelo sesayithi yam"
- Khangela ukuba imemori ivuliwe kwiisetingi zakho

**Ndifuna ukuqala kwakhona nge-site_brief entsha**
- Cela i-agent: "Cima isishwankathelo sesayithi yam uze uqale ngokutsha"
- Emva koko qhuba iNkcazelo Yesayithi kwakhona

**I-agent yenza iingcebiso ezingahambelani ne-site_brief yam**
- Cela i-agent ukuba "iphonononge isishwankathelo sesayithi yam"
- Hlaziya i-site_brief yakho ukuba iphelelwe lixesha
- Nika umxholo owongezelelweyo kwizicelo zakho

## Amanyathelo Alandelayo

Emva kokuchaza inkcazelo yesayithi yakho:

1. **Sebenzisa i-Theme Builder**: Yenza theme elungiselelweyo esekelwe kwi-site_brief yakho
2. **Phucula Uyilo**: Sebenzisa isakhono se-Design System Aesthetics kumsebenzi woyilo oneenkcukacha
3. **Cwangcisa Umxholo**: Cela ii-agent iingcebiso zesakhiwo somxholo
4. **Yakha Iimpawu**: Cela iimpawu ezihambelana neenjongo zeshishini lakho
