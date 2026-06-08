---
title: Vještina specifikacije sajta
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Vještina specifikacije sajta

**Vještina specifikacije sajta** je strukturiran pristup za snimanje ciljeva vašeg sajta, publike i identiteta brenda. Ove informacije se pohranjuju u vašu memoriju **site_brief**, koju agenti koriste kroz sesije kako bi pružili dosljednu pomoć koja je svjesna konteksta.

## Šta je specifikacija sajta?

Specifikacija sajta je proces dokumentovanja sljedećeg:

- **Svrha sajta**: Šta vaš sajt radi i zašto postoji
- **Cilna publika**: Ko posjećuje vaš sajt i šta im je potrebno
- **Identitet brenda**: Vaše boje, ton i vizuelni stil
- **Poslovni ciljevi**: Kako izgleda uspjeh za vaš sajt
- **Struktura sadržaja**: Kako je vaš sajt organizovan

Ova specifikacija postaje vaš **site_brief**, trajna memorija koju agenti koriste da bi razumjeli kontekst vašeg sajta.

## Zašto koristiti specifikaciju sajta?

### Dosljednost kroz sesije

Bez site_brief-a, morali biste ponovo objasniti svrhu sajta svaki put kada započnete novu sesiju. Sa njim, agenti odmah razumiju:

- Ciljeve i publiku vašeg sajta
- Boje i ton vašeg brenda
- Strukturu vašeg sadržaja
- Poslovne objektivne ciljeve

### Bolji predlozi

Agenti koriste vaš site_brief za:

- Predlaganje funkcija usklađenih sa svrhom vašeg sajta
- Preporučivanje struktura sadržaja koje odgovaraju vašim ciljevima
- Predlaganje dizajna dosljednog vašem brendu
- Izbjegavanje predlaganja nekompatibilnih funkcija

### Brži uvod u rad

Novi agenti (ili agenti u novim sesijama) mogu brzo ući u rad čitajući vaš site_brief, umjesto da postavljaju pitanja za pojašnjenje.

## Pokretanje specifikacije sajta

### Tijekom onboardinga Theme Builder-a

Vještina specifikacije sajta automatski se pokreće tokom **Theme Builder onboarding flow-a**. Agent Setup Assistant postavlja pitanja i gradi vaš site_brief.

### Ručno pokretanje

Možete započeti specifikaciju sajta bilo kada:

```
"Let's define my site specification"
```

ili

```
"Help me create a site brief"
```

## Proces specifikacije sajta

### Korak 1: Svrha sajta

Agent pita:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Možete odabrati kategoriju ili opisati svoju svrhu.

### Korak 2: Ciljna publika

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Korak 3: Identitet brenda

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

### Korak 4: Poslovni ciljevi

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

### Korak 5: Struktura sadržaja

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

## Vaša site_brief memorija

Nakon završetka specifikacije sajta, vaše informacije se pohranjuju kao **site_brief** u memoriju vašeg agenta. Ovo je strukturirani zapis koji sadrži:

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

## Pregled i ažuriranje site_brief-a

### Pregled vašeg site_brief-a

Pitajte agenta:

```
"Show me my site brief"
```

ili

```
"What do you know about my site?"
```

Agent će prikazati vaš pohranjeni site_brief.

### Ažuriranje vašeg site_brief-a

Ako se vaš sajt razvija, možete ga ažurirati:

```
"Update my site brief: we're now targeting B2B customers"
```

ili

```
"Refresh my site specification"
```

Ovo će ponovo pokrenuti vještinu Specifikacije sajta, koristeći vaše postojeće informacije kao početnu tačku.

## Kako agenti koriste site_brief

### Dizajnerski predlozi

Kada tražite izmjene dizajna, agenti se osvrću na vaš site_brief:

```
Vi: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Predlozi funkcija

Agenti predlažu funkcije usklađene sa vašim ciljevima:

```
Vi: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Struktura sadržaja

Agenti predlažu organizaciju sadržaja na osnovu vaše strukture:

```
Vi: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Najbolje prakse

### Budite specifični

Umjesto "opšta publika," opišite svoju stvarnu publiku:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Ažurirajte redovno

Kako se vaš sajt razvija, ažurirajte svoj site_brief:

- Kada prebacujete fokus na novu publiku
- Kada dodajete nove linije proizvoda
- Kada se vaš identitet brenda mijenja
- Kada se vaši poslovni ciljevi mijenjaju

### Koristite dosljednu terminologiju

Koristite iste termine kroz sesije:

- ✓ Uvijek recite "sustainable jewelry" (a ne "eco-friendly jewelry" i "green products")
- ✓ Dosljedno se referišite na publiku na isti način

### Uključite kontekst

Dostavite pozadinske informacije koje pomažu agentima da razumiju vaše odluke:

- "Ciljana nam su profesionalci koji cijene kvalitet više od cijene"
- "Naša publika je tehnološki pismena i očekuje moderni dizajn"
- "Mi smo startup koji finansira vlastitim sredstvima, pa nam je potrebna rješenja koja su efikasna po pitanju troškova"

## Odnos sa Theme Builder onboarding-om

Vještina specifikacije sajta integrisana je u **Theme Builder onboarding flow**. Kada završite onboarding, vaš site_brief se automatski kreira sa informacijama koje ste dali.

Takođe možete pokrenuti Specifikaciju sajta nezavisno ako želite:

- Da usavršite svoju specifikaciju nakon početnog podešavanja
- Da ažurirate site_brief kako se vaš sajt razvija
- Da kreirate detaljnu specifikaciju prije početka Theme Builder-a

## Rješavanje problema

**Moj site_brief se ne koristi**
- Potvrdite da agent ima pristup memoriji
- Zamolite agenta da "recall my site brief"
- Provjerite da li je memorija omogućena u vašim podešavanjima

**Želim da počnem ispočetka sa novim site_brief-om**
- Pitajte agenta: "Clear my site brief and start fresh"
- Zatim ponovo pokrenite Specifikaciju sajta

**Agent daje predloge koji ne odgovaraju mom site_brief-u**
- Zamolite agenta da "review my site brief"
- Ažurirajte svoj site_brief ako je zastario
- Dostavite dodatni kontekst u svojim zahtjevima

## Sljedeći koraci

Nakon definisanja specifikacije sajta:

1. **Koristite Theme Builder**: Kreirajte custom theme baziran na vašem site_brief-u
2. **Usavršite dizajn**: Koristite Design System Aesthetics skill za detaljan rad na dizajnu
3. **Planirajte sadržaj**: Pitajte agente za preporuke strukture sadržaja
4. **Izgradite funkcije**: Zatražite funkcije usklađene sa vašim poslovnim ciljevima
