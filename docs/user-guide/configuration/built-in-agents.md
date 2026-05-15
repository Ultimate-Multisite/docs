---
title: "Built-in Agents"
sidebar_position: 12
---

# Built-in Agents

Gratis AI Agent v1.9.0 ships five built-in agents, each pre-configured with a focused set of tools, a tailored system prompt, and starter suggestions matched to common tasks in that area. Switching between agents changes what the assistant can do and how it responds — without any configuration on your part.

## What Is an Agent?

Each agent is a named configuration profile that combines:

- **Tools** — the abilities the agent is allowed to invoke (e.g. a Content Writer has access to post-creation abilities; a Design Studio has access to CSS and theme.json abilities)
- **System prompt** — instructions that set the agent's tone, priorities, and constraints
- **Suggestions** — pre-written prompts shown in the chat interface to help you get started quickly

## Accessing the Agent Picker

1. Open the **Gratis AI Agent** panel in the WordPress admin sidebar.
2. Click the **agent icon** in the top-left of the chat header (the icon changes to reflect the active agent).
3. The **Agent Picker** opens as a form-table overlay. Each agent is listed with its icon, name, and a one-line description.
4. Click an agent row to activate it. The chat header updates immediately.

You can also switch agents mid-conversation — the new agent's system prompt takes effect from the next message.

## The Five Built-in Agents

### Content Writer

**Focus:** Creating and editing posts, pages, and contact forms.

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**What it does well:**
- Drafting and publishing blog posts from a brief or outline
- Creating batches of landing pages for a new site
- Building contact and enquiry forms
- Setting featured images on posts from a URL or search

**Starter suggestions:**
- *Write a 500-word blog post about the benefits of WordPress multisite.*
- *Create an About, Services, and Contact page and publish them.*
- *Add a booking enquiry form to the Contact page.*

---

### Site Builder

**Focus:** End-to-end website creation from a single prompt.

**Available tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**What it does well:**
- Generating a multi-phase site build plan for a described business type
- Executing each phase autonomously — structure, content, navigation, design
- Recovering from errors mid-plan without requiring manual intervention
- Installing recommended plugins as part of the build
- Creating contact forms directly from the chat interface (Superdav AI Agent v1.10.0+)

**Starter suggestions:**
- *Build a photography portfolio site with a gallery post type, a booking page, and a contact form.*
- *Create a restaurant website with an online menu, opening hours, and a table-booking enquiry form.*
- *Set up a freelance consulting site with service pages, a portfolio section, and a blog.*
- *Add a contact form to the Contact page using the site builder.*

---

### Design Studio

**Focus:** Visual customisation — colours, typography, CSS, and block patterns.

**Available tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**What it does well:**
- Applying named theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- Fine-tuning global typography and colour palettes via theme.json
- Injecting custom CSS for brand-specific overrides
- Taking a screenshot of a page and reviewing it for design issues

**Starter suggestions:**
- *Apply the warm-editorial preset and then set the primary colour to #2d6a4f.*
- *Take a screenshot of the homepage and tell me what you'd improve.*
- *Create a reusable hero block pattern with a full-width background image and centred heading.*

---

### Plugin Manager

**Focus:** Discovering, installing, and managing WordPress plugins.

**Available tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**What it does well:**
- Recommending the best plugin for a described use case
- Installing ability packs from the registry
- Browsing the available ability catalogue by category

**Starter suggestions:**
- *What's the best plugin for a membership directory?*
- *Install the WooCommerce abilities pack.*
- *Show me all available ecommerce ability packs.*

---

### Support Assistant

**Focus:** Answering questions about site content, settings, and WordPress configuration.

**Available tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**What it does well:**
- Looking up current site settings and options
- Explaining what post types, taxonomies, and menus are configured on the site
- Answering "what does this setting do?" questions by reading live values
- Serving as a read-only diagnostic layer before making changes

**Starter suggestions:**
- *What plugins and settings are currently active on this site?*
- *List all the custom post types registered on this site.*
- *What navigation menus exist and where are they assigned?*

---

## Customising Agents

Each built-in agent can be extended or replaced through the `gratis_ai_agent_agents` filter.

### Adding a custom system prompt to an existing agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Registering a new agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

The new agent appears in the Agent Picker immediately after the filter runs.

### Removing a built-in agent

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
