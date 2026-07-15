---
title: تھیم-آویئر سکلز
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# Theme-Aware Skills (تھیم کے مطابق مہارتیں)

Superdav AI Agent v1.10.0 میں چار نئی theme-aware built-in skills شامل ہیں جو آپ کے فعال WordPress theme کے مطابق خود بخود ڈھل جاتی ہیں۔ یہ skills آپ کے theme کی architecture اور features کے مطابق خصوصی رہنمائی اور صلاحیتیں فراہم کرتی ہیں۔

## What Are Theme-Aware Skills? (Theme-Aware Skills کیا ہیں؟) {#what-are-theme-aware-skills}

Theme-aware skills وہ پہلے سے سیٹ کردہ knowledge bases اور tool sets ہیں جو AI assistant آپ کی سائٹ پر موجود WordPress theme کی بنیاد پر خود بخود منتخب کرتا ہے۔ جب آپ theme تبدیل کرتے ہیں، تو assistant کی دستیاب skills خود بخود اپ ڈیٹ ہو جاتی ہیں — اس کے لیے کسی manual configuration کی ضرورت نہیں ہوتی۔

ہر skill میں شامل ہیں:

- **Theme-specific documentation** — theme کو استعمال کرنے اور customize کرنے کی رہنمائی
- **Block and pattern references** — دستیاب blocks، patterns، اور design options
- **Customization examples** — عام کاموں کے لیے code snippets اور configuration patterns
- **Best practices** — theme کی architecture اور workflow کے لیے بہترین تجاویز

## Available Theme-Aware Skills (دستیاب Theme-Aware Skills) {#available-theme-aware-skills}

### Block Themes (بلاک تھیمز) {#block-themes}

**Applies to:** Themes that use the WordPress block-based (Full Site Editing) architecture. (ان themes پر لاگو ہوتا ہے جو WordPress کی block-based (Full Site Editing) architecture استعمال کرتی ہیں۔)

The Block Themes skill provides guidance on: (یہ skill رہنمائی فراہم کرتی ہے:)

- Creating and editing templates using the block editor (block editor کا استعمال کرتے ہوئے templates بنانا اور edit کرنا)
- Working with block patterns and reusable blocks (block patterns اور reusable blocks کے ساتھ کام کرنا)
- Customizing global styles and theme.json settings (global styles اور theme.json settings کو customize کرنا)
- Using theme blocks and variations (theme blocks اور variations کا استعمال کرنا)
- Building custom block patterns for your site (اپنی سائٹ کے لیے custom block patterns بنانا)

**Automatically activated when:** Your active theme is a block theme (supports `block-templates` feature). (خود بخود فعال ہوتا ہے جب: آپ کا فعال theme ایک block theme ہو (جو `block-templates` feature کو سپورٹ کرتا ہو۔))

### Classic Themes (کلاسیک تھیمز) {#classic-themes}

**Applies to:** Traditional WordPress themes that use PHP templates and the classic editor. (ان themes پر لاگو ہوتا ہے جو PHP templates اور classic editor استعمال کرتے ہیں۔)

The Classic Themes skill provides guidance on: (یہ skill رہنمائی فراہم کرتی ہے:)

- Working with PHP template files and hooks (PHP template files اور hooks کے ساتھ کام کرنا)
- Customizing theme appearance via the Customizer (Customizer کے ذریعے theme کی ظاہری شکل کو customize کرنا)
- Using widget areas and sidebars (widget areas اور sidebars کا استعمال کرنا)
- Modifying CSS and child theme development (CSS کو modify کرنا اور child theme development کرنا)
- Understanding theme hierarchy and template tags (theme hierarchy اور template tags کو سمجھنا)

**Automatically activated when:** Your active theme is a classic (non-block) theme. (خود بخود فعال ہوتا ہے جب: آپ کا فعال theme ایک classic (non-block) theme ہو۔)

### Kadence Blocks (کادنس بلاکس) {#kadence-blocks}

**Applies to:** Sites using the Kadence Blocks plugin for advanced block-based design. (ان سائٹس پر لاگو ہوتا ہے جو advanced block-based design کے لیے Kadence Blocks plugin استعمال کرتی ہیں۔)

The Kadence Blocks skill provides guidance on: (یہ skill رہنمائی فراہم کرتی ہے:)

- Using Kadence's advanced block library (Hero, Testimonials, Pricing, etc.) (Kadence کی advanced block library استعمال کرنا (Hero, Testimonials, Pricing, وغیرہ))
- Configuring Kadence block settings and responsive options (Kadence block settings اور responsive options کو configure کرنا)
- Building custom layouts with Kadence's grid and container blocks (Kadence کے grid اور container blocks کے ساتھ custom layouts بنانا)
- Integrating Kadence blocks with your theme (Kadence blocks کو اپنے theme کے ساتھ integrate کرنا)
- Leveraging Kadence's design system and presets (Kadence کے design system اور presets کا فائدہ اٹھانا)

**Automatically activated when:** The Kadence Blocks plugin is active on your site. (خود بخود فعال ہوتا ہے جب: Kadence Blocks plugin آپ کی سائٹ پر فعال ہو۔)

### Kadence Theme (کادنس تھیم) {#kadence-theme}

**Applies to:** Sites using the Kadence theme for block-based design and customization. (ان سائٹس پر لاگو ہوتا ہے جو block-based design اور customization کے لیے Kadence theme استعمال کرتی ہیں۔)

The Kadence Theme skill provides guidance on: (یہ skill رہنمائی فراہم کرتی ہے:)

- Customizing the Kadence theme via global styles and theme.json (global styles اور theme.json کے ذریعے Kadence theme کو customize کرنا)
- Using Kadence's built-in block patterns and templates (Kadence کے built-in block patterns اور templates کا استعمال کرنا)
- Configuring Kadence theme settings and options (Kadence theme settings اور options کو configure کرنا)
- Building custom designs with Kadence's design system (Kadence کے design system کے ساتھ custom designs بنانا)
- Integrating Kadence with popular plugins and tools (مشہور plugins اور tools کے ساتھ Kadence کو integrate کرنا)

**Automatically activated when:** The Kadence theme is your active theme. (خود بخود فعال ہوتا ہے جب: Kadence theme آپ کا فعال theme ہو۔)

## How Skills Are Selected (Skills کا انتخاب کیسے ہوتا ہے) {#how-skills-are-selected}

Assistant ہر message پر آپ کے active theme اور installed plugins کا خود بخود پتہ لگاتا ہے۔ اگر کوئی matching theme-aware skill دستیاب ہے، تو اسے خود بخود assistant کے context میں لوڈ کر دیا جاتا ہے۔ آپ کو manually skills کو enable یا switch کرنے کی ضرورت نہیں ہے۔

### Multiple Skills (متعدد skills) {#multiple-skills}

اگر آپ کی سائٹ پر کئی skills لاگو ہوتی ہیں (مثال کے طور پر، اگر آپ کے پاس Kadence Blocks اور Kadence Theme دونوں فعال ہیں)، تو assistant کو تمام قابل اطلاق skills تک رسائی حاصل ہوتی ہے اور وہ ہر ایک سے رہنمائی کا حوالہ دے سکتا ہے۔

### Switching Themes (themes تبدیل کرنا) {#switching-themes}

جب آپ اپنا active theme تبدیل کرتے ہیں، تو assistant کی دستیاب skills اگلے message پر خود بخود اپ ڈیٹ ہو جاتی ہیں۔ مثال کے طور پر:

1. آپ ایک block theme استعمال کر رہے ہیں جس میں **Block Themes** skill فعال ہے۔
2. آپ ایک classic theme پر switch کرتے ہیں۔
3. آپ کے اگلے message پر، **Classic Themes** skill خود بخود لوڈ ہو جاتی ہے، اور **Block Themes** skill مزید دستیاب نہیں رہتی۔

## Using Theme-Aware Skills (Theme-Aware Skills کا استعمال) {#using-theme-aware-skills}

Theme-aware skill کا فائدہ اٹھانے کے لیے، بس chat interface میں describe کریں کہ آپ کیا کرنا چاہتے ہیں۔ assistant خود بخود مناسب skill کی رہنمائی کا حوالہ دے گا۔

### Example Prompts (مثال کے prompts) {#example-prompts}

**For Block Themes:**
> "Create a hero section with a background image and centered text using block patterns."

**For Classic Themes:**
> "Add a custom widget area to the sidebar using a child theme."

**For Kadence Blocks:**
> "Build a testimonials section using the Kadence Testimonials block."

**For Kadence Theme:**
> "Customize the header layout and navigation menu styling."

Assistant آپ کے active theme اور plugins کے مطابق theme-specific رہنمائی اور code examples فراہم کرے گا۔

:::note
Theme-aware skills Superdav AI Agent v1.10.0 اور اس کے بعد کے ورژن میں خود بخود دستیاب ہیں۔ کسی اضافی setup یا configuration کی ضرورت نہیں ہے۔
:::
