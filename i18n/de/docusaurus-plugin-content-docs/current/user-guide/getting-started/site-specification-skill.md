---
title: Site Specification Skill
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Site Specification Skill

Die **Site Specification Skill** ist ein strukturierter Ansatz, um die Ziele, die Zielgruppe und die Markenidentität Ihrer Website festzuhalten. Diese Informationen werden in Ihrem **site_brief** Speicher abgelegt, auf den die Agents sie über Sitzungen hinweg referenzieren, um eine konsistente, kontextbezogene Unterstützung zu gewährleisten.

## Was ist Site Specification?

Site Specification ist der Prozess der Dokumentation von:

- **Site purpose**: Was Ihre Website tut und warum sie existiert
- **Target audience**: Wer Ihre Website besucht und was diese Menschen benötigen
- **Brand identity**: Ihre Farben, Ihr Ton und Ihr visueller Stil
- **Business goals**: Was für Ihre Website Erfolg bedeutet
- **Content structure**: Wie Ihre Website organisiert ist

Diese Spezifikation wird zu Ihrem **site_brief**, einem persistenten Speicher, den Agents nutzen, um den Kontext Ihrer Website zu verstehen.

## Warum Site Specification nutzen?

### Konsistenz über Sitzungen hinweg

Ohne site_brief müssten Sie den Zweck Ihrer Website jedes Mal neu erklären, wenn Sie eine neue Sitzung starten. Mit ihm verstehen die Agents sofort:

- Die Ziele und die Zielgruppe Ihrer Website
- Ihre Markenfarben und Ihren Ton
- Ihre Content-Struktur
- Ihre Geschäftsziele

### Bessere Empfehlungen

Agents nutzen Ihren site_brief, um:

- Funktionen vorzuschlagen, die zu Ihrem Website-Zweck passen
- Content-Strukturen zu empfehlen, die Ihren Zielen entsprechen
- Designs vorzuschlagen, die mit Ihrer Marke übereinstimmen
- die Vorschlagung inkompatibler Funktionen zu vermeiden

### Schnelleres Onboarding

Neue Agents (oder Agents in neuen Sitzungen) können schnell auf den neuesten Stand gebracht werden, indem sie Ihren site_brief lesen, anstatt klärende Fragen zu stellen.

## Site Specification starten

### Während des Theme Builder Onboardings

Die Site Specification Skill wird automatisch während des **Theme Builder onboarding flow** gestartet. Der Setup Assistant Agent stellt Fragen und erstellt Ihren site_brief.

### Manuelle Initiierung

Sie können die Site Specification jederzeit starten:

```
"Let's define my site specification"
```

oder

```
"Help me create a site brief"
```

## Der Site Specification Prozess

### Schritt 1: Site Purpose

Der Agent fragt:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Sie können eine Kategorie auswählen oder Ihren eigenen Zweck beschreiben.

### Schritt 2: Target Audience

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Schritt 3: Brand Identity

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

### Schritt 4: Business Goals

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

### Schritt 5: Content Structure

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

## Ihr site_brief Speicher

Nach Abschluss der Site Specification wird Ihre Information als **site_brief** in Ihrem Agenten-Speicher gespeichert. Dies ist ein strukturiertes Protokoll, das Folgendes enthält:

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

## Ihren site_brief ansehen und aktualisieren

### Ihren site_brief ansehen

Fragen Sie den Agenten:

```
"Show me my site brief"
```

oder

```
"What do you know about my site?"
```

Der Agent zeigt Ihre gespeicherte Spezifikation an.

### Ihren site_brief aktualisieren

Wenn sich Ihre Website weiterentwickelt, können Sie ihn aktualisieren:

```
"Update my site brief: we're now targeting B2B customers"
```

oder

```
"Refresh my site specification"
```

Dies führt die Site Specification Skill erneut aus, wobei Ihre bestehenden Informationen als Ausgangspunkt dienen.

## Wie Agents site_brief nutzen

### Design-Empfehlungen

Wenn Sie Designänderungen anfordern, referenzieren Agents Ihren site_brief:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Feature-Vorschläge

Agents schlagen Funktionen vor, die zu Ihren Zielen passen:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Content-Struktur

Agents schlagen eine Content-Organisation basierend auf Ihrer Struktur vor:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Best Practices

### Seien Sie spezifisch

Anstatt "general audience" beschreiben Sie Ihre tatsächliche Zielgruppe:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Regelmäßig aktualisieren

Wenn sich Ihre Website weiterentwickelt, aktualisieren Sie Ihren site_brief:

- Wenn Sie zu einer neuen Zielgruppe wechseln
- Wenn Sie neue Produktlinien hinzufügen
- Wenn sich Ihre Markenidentität ändert
- Wenn sich Ihre Geschäftsziele verschieben

### Konsistente Terminologie verwenden

Verwenden Sie über Sitzungen hinweg dieselben Begriffe:

- ✓ Immer "sustainable jewelry" sagen (nicht "eco-friendly jewelry" und "green products")
- ✓ Immer auf Ihre Zielgruppe in der gleichen Weise verweisen

### Kontext einbeziehen

Geben Sie Hintergrundinformationen, die den Agents helfen, Ihre Entscheidungen zu verstehen:

- "Wir zielen auf Fachleute ab, die Qualität über den Preis stellen"
- "Unsere Zielgruppe ist technikaffin und erwartet ein modernes Design"
- "Wir sind ein bootstrapped Startup, daher benötigen wir kosteneffiziente Lösungen"

## Beziehung zum Theme Builder Onboarding

Die Site Specification Skill ist in den **Theme Builder onboarding flow** integriert. Wenn Sie das Onboarding abschließen, wird Ihr site_brief automatisch mit den von Ihnen bereitgestellten Informationen erstellt.

Sie können die Site Specification auch unabhängig ausführen, wenn Sie möchten:

- Ihre Spezifikation nach der anfänglichen Einrichtung verfeinern
- Ihren site_brief aktualisieren, wenn sich Ihre Website weiterentwickelt
- Eine detaillierte Spezifikation erstellen, bevor Sie mit Theme Builder beginnen

## Fehlerbehebung

**Mein site_brief wird nicht verwendet**
- Bestätigen Sie, dass der Agent Zugriff auf den Speicher hat
- Bitten Sie den Agenten, meinen site brief "recall my site brief"
- Überprüfen Sie, ob der Speicher in Ihren Einstellungen aktiviert ist

**Ich möchte mit einem neuen site_brief von vorne beginnen**
- Bitten Sie den Agenten: "Clear my site brief and start fresh"
- Führen Sie dann erneut die Site Specification durch

**Der Agent gibt Empfehlungen, die nicht zu meinem site_brief passen**
- Bitten Sie den Agenten, meinen site brief "review my site brief"
- Aktualisieren Sie Ihren site_brief, wenn er veraltet ist
- Geben Sie zusätzliche Informationen in Ihre Anfragen ein

## Nächste Schritte

Nach der Definition Ihrer Site Specification:

1. **Theme Builder nutzen**: Erstellen Sie ein Custom Theme basierend auf Ihrem site_brief
2. **Design verfeinern**: Verwenden Sie die Design System Aesthetics Skill für detaillierte Designarbeiten
3. **Content planen**: Bitten Sie Agents um Empfehlungen zur Content-Struktur
4. **Features aufbauen**: Fordern Sie Funktionen an, die zu Ihren Geschäftszielen passen
