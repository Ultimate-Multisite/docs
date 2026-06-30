---
title: "Tools and Configuration"
sidebar_position: 4
---

# Tools and Configuration

Theme Builder uses a set of tools to analyze, design, and build your WordPress site. In version 1.16.0, **sd-ai-agent/site-scrape is now a Tier 1 tool**, making it available by default in Theme Builder. Superdav AI Agent v1.18.0 also introduces a separately distributed Advanced companion package for trusted developer workflows; those tools are not part of the WordPress.org core package and must be installed and authorised separately.

## Available Tools

### Tier 1 Tools (Always Available)

Tier 1 tools are available by default in Theme Builder without any additional configuration.

#### sd-ai-agent/site-scrape

**Purpose:** Analyze existing websites to extract design inspiration, content structure, and functionality.

**Capabilities:**

- **Website analysis** — scrape and analyze competitor or inspiration websites
- **Design extraction** — identify colors, fonts, and layout patterns
- **Content structure** — understand page organization and hierarchy
- **Feature detection** — identify plugins and functionality
- **Performance analysis** — check page speed and optimization
- **SEO analysis** — review meta tags and structured data

**Usage:**

```
Analyze the design of example.com and use it as inspiration for my site.
```

**What It Extracts:**

- Color palette and color usage
- Typography (fonts and sizes)
- Layout structure and spacing
- Navigation patterns
- Content organization
- Images and media usage
- Interactive elements
- Mobile responsiveness

**Limitations:**

- Cannot scrape password-protected sites
- Respects robots.txt and site policies
- May not capture dynamic content
- JavaScript-heavy sites may have limited analysis
- Large sites may take longer to analyze

### Tier 2 Tools (Optional)

Tier 2 tools are available when explicitly enabled in Theme Builder settings.

#### Advanced Analytics

Provides detailed performance metrics:

- Page load times
- Core Web Vitals
- SEO score
- Accessibility score
- Best practices score

#### Content Optimizer

Analyzes and suggests improvements for:

- Readability
- SEO optimization
- Keyword usage
- Content structure
- Call-to-action placement

### Tier 3 Tools (Premium)

Tier 3 tools require additional configuration or premium features.

#### AI Content Generator

Generates content for:

- Product descriptions
- Service pages
- Blog posts
- Meta descriptions
- Call-to-action copy

#### Advanced Design Tools

Provides advanced design capabilities:

- Custom CSS generation
- Animation creation
- Interactive element design
- Advanced color theory
- Typography optimization

### Advanced Companion Tools (Separate Package)

The Advanced companion package is distributed separately from the core Superdav AI Agent release. It is intended for trusted developer and site-owner environments where administrators explicitly allow the agent to use high-impact tooling.

Advanced companion capabilities can include:

- **Filesystem tools** — inspect and modify approved files in trusted environments
- **Database tools** — query or update site data when explicitly authorised
- **WP-CLI tools** — run WordPress maintenance and inspection commands
- **REST dispatcher tools** — call registered REST endpoints through controlled dispatch workflows
- **Plugin builder tools** — scaffold and iterate on plugin code
- **Git snapshot tools** — create snapshots before risky developer operations
- **User-management tools** — help review or adjust user records where permitted
- **Benchmark tools** — run performance or capability benchmarks for development review

Do not document these as generally available Theme Builder tools for every installation. They are available only when the Advanced companion package is installed, enabled, and restricted to trusted administrators.

## Tool Configuration

### Enabling Tools

To enable additional tools in Theme Builder:

1. Navigate to **Gratis AI Agent → Settings**
2. Go to **Theme Builder → Tools**
3. Toggle tools on/off as needed
4. Save settings

### Tool Permissions

Some tools require permissions:

- **Site scraping** — requires internet access
- **Analytics** — requires Google Analytics integration
- **Content generation** — requires API keys
- **Advanced features** — may require premium subscription
- **Advanced companion tools** — require the separately distributed Advanced package and explicit administrator trust

### API Keys and Credentials

Configure API keys for tools that require them:

1. Go to **Gratis AI Agent → Settings → API Keys**
2. Enter credentials for each tool
3. Test connection
4. Save securely

### Installing the Advanced Companion Package

The Advanced companion package is released separately from the WordPress.org core ZIP. Install it only from the official project distribution channel for the release, then restrict access to trusted administrators. Review human approval gates and git snapshot behaviour before enabling filesystem, database, WP-CLI, REST dispatcher, plugin builder, user-management, or benchmark tools on a production site.

## Using sd-ai-agent/site-scrape

### Basic Usage

Ask Theme Builder to analyze a website:

```
Analyze the design of my competitor's site at competitor.com 
and suggest design improvements for my site.
```

### Specific Analysis

Request specific types of analysis:

```
Extract the color palette from example.com and use it as inspiration.
```

```
Analyze the navigation structure of example.com and apply similar 
organization to my site.
```

```
Check the mobile responsiveness of example.com and ensure my site 
is equally responsive.
```

### Comparison Analysis

Compare multiple sites:

```
Compare the designs of site1.com and site2.com and create a design 
that combines the best elements of both.
```

## Tool Limitations and Considerations

### Rate Limiting

- Scraping is rate-limited to prevent server overload
- Multiple requests to the same site may be throttled
- Large sites may take longer to analyze

### Content Accuracy

- Dynamic content may not be fully captured
- JavaScript-rendered content may be incomplete
- Real-time data may not be reflected
- Some content may be behind paywalls

### Legal and Ethical Considerations

- Respect robots.txt and site policies
- Don't scrape copyrighted content for reproduction
- Use analysis for inspiration, not copying
- Verify you have rights to use extracted content
- Follow terms of service of analyzed sites

### Performance Impact

- Scraping large sites may take time
- Multiple simultaneous scrapes may be slower
- Network connectivity affects speed
- Large datasets may require more processing

## Best Practices

### Using Site Analysis

1. **Analyze multiple sites** — gather inspiration from several sources
2. **Focus on structure** — learn layout and organization patterns
3. **Extract colors** — use color palettes as starting points
4. **Study typography** — identify font combinations you like
5. **Review navigation** — understand menu organization

### Ethical Scraping

1. **Respect robots.txt** — follow site guidelines
2. **Don't copy content** — use analysis for inspiration only
3. **Verify rights** — ensure you can use extracted content
4. **Attribute sources** — credit inspiration sources
5. **Follow terms** — comply with site terms of service

### Maximizing Tool Effectiveness

1. **Be specific** — request specific types of analysis
2. **Provide context** — explain your site's purpose
3. **Set expectations** — describe your design goals
4. **Iterate** — refine based on results
5. **Combine tools** — use multiple tools for comprehensive analysis

## Troubleshooting

### Site Won't Scrape

- Check if site is publicly accessible
- Verify robots.txt allows scraping
- Try a different site
- Check internet connection
- Contact support if issue persists

### Incomplete Analysis

- Site may have dynamic content
- JavaScript may not be fully rendered
- Large sites may timeout
- Try analyzing specific pages instead
- Request specific analysis types

### Slow Performance

- Large sites take longer to analyze
- Multiple simultaneous scrapes are slower
- Network connectivity affects speed
- Try during off-peak hours
- Analyze smaller sections first

## Related Documentation

- [Discovery Interview](./discovery-interview.md) — gather design information
- [Design Direction](./design-direction.md) — refine your design
- [Hospitality Menus](./hospitality-menus.md) — create menu pages
