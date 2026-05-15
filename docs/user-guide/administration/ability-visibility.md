---
title: "Ability Visibility"
sidebar_position: 16
---

# Ability Visibility

Superdav AI Agent v1.12.0 introduces **Ability Visibility** controls that govern which surfaces expose each ability. This allows administrators to fine-tune which agent capabilities are available through REST APIs, MCP servers, WooCommerce integrations, and other interfaces.

## What is Ability Visibility?

Ability Visibility is a permission system that controls:

- **Which abilities** are available to agents
- **Where they're exposed** (REST API, MCP, WooCommerce, etc.)
- **Who can access them** (via partner allow-lists)
- **How they're classified** (recognized vs. unclassified)

Each ability carries a visibility level that determines its availability across different surfaces.

## Visibility Levels

### Public

**Public abilities** are available everywhere:

- REST API endpoints
- MCP servers
- WooCommerce integrations
- Chat interfaces
- All user roles (with appropriate permissions)

Example: `scaffold-block-theme`, `activate-theme`, `send-email`

### Internal

**Internal abilities** are available only within your WordPress installation:

- Chat interfaces
- Admin panels
- Logged-in users only
- Not exposed via REST API or external integrations

Example: `manage-settings`, `view-analytics`, `export-data`

### Partner

**Partner abilities** are available only to whitelisted partners:

- Requires explicit partner allow-list entry
- Available via REST API with partner credentials
- Available via MCP with partner authentication
- Not available to regular users

Example: `bulk-import-users`, `modify-billing`, `access-analytics`

### Disabled

**Disabled abilities** are not available anywhere:

- Not exposed via any surface
- Not available in chat
- Not available in admin panels
- Useful for deprecated or experimental abilities

## Managing Ability Visibility

### Accessing Ability Visibility Settings

1. Go to **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Click the **Abilities** tab
3. You'll see a list of all installed abilities with their visibility levels

### Viewing Ability Details

Click on any ability to see:

- **Name**: The ability's identifier
- **Description**: What the ability does
- **Current visibility**: Public, Internal, Partner, or Disabled
- **Partner allow-list**: Which partners can access (if Partner visibility)
- **Last updated**: When the visibility was last changed
- **Status**: Recognized or Unclassified

### Changing Visibility Levels

To change an ability's visibility:

1. Click the ability in the list
2. Select a new visibility level from the dropdown
3. If selecting "Partner", add partner identifiers to the allow-list
4. Click **Save**

Example:

```
Ability: bulk-import-users
Current visibility: Public
Change to: Partner
Partner allow-list: partner-123, partner-456
```

### Bulk Operations

To change visibility for multiple abilities:

1. Check the boxes next to the abilities
2. Select a new visibility level from the bulk action dropdown
3. Click **Apply**

## Partner Allow-List

The **partner allow-list** controls which external partners can access Partner-level abilities.

### Adding Partners

1. Go to **Superdav AI Agent** → **Settings** → **Partners**
2. Click **Add Partner**
3. Enter the partner identifier (usually an API key or organization ID)
4. Optionally add a partner name and description
5. Click **Save**

### Assigning Abilities to Partners

After adding a partner:

1. Go to the **Abilities** tab
2. Find an ability with Partner visibility
3. Click to edit
4. In the "Partner allow-list" section, check the boxes for partners who should have access
5. Click **Save**

### Revoking Partner Access

To remove a partner's access:

1. Edit the ability
2. Uncheck the partner's box in the allow-list
3. Click **Save**

The partner will immediately lose access to that ability.

## Unclassified Abilities

When you install a third-party ability that Superdav AI Agent doesn't recognize, it's marked as **Unclassified**.

### Admin Notice for Unclassified Abilities

You'll see an admin notice:

```
⚠️ Unclassified Abilities Detected

The following abilities were installed but are not recognized:
- custom-import-tool
- external-api-wrapper

These abilities may pose security or compatibility risks. 
Please review and classify them.

[Review Abilities] [Dismiss]
```

### Reviewing Unclassified Abilities

1. Click **Review Abilities** in the notice
2. For each unclassified ability, you'll see:
   - Ability name and description
   - Source (which plugin/addon installed it)
   - Suggested visibility level
   - Security assessment

3. Choose a visibility level:
   - **Public**: Trust the ability; expose it everywhere
   - **Internal**: Restrict to internal use only
   - **Partner**: Restrict to specific partners
   - **Disabled**: Don't use this ability

4. Click **Classify** to save your decision

### Why Classify Unclassified Abilities?

Classifying abilities:

- **Improves security**: You explicitly approve what's exposed
- **Prevents accidents**: Unclassified abilities are disabled by default
- **Enables features**: Once classified, the ability becomes available
- **Documents decisions**: Your choices are logged for audit purposes

## Visibility in Different Surfaces

### REST API

**Public abilities** are available via REST endpoints:

```bash
curl -X POST https://yoursite.com/wp-json/superdav/v1/abilities/scaffold-block-theme \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"theme_name": "My Theme"}'
```

**Internal and Partner abilities** are not available via REST API.

### MCP Servers

**Public abilities** are available via MCP:

```
MCP Server: Superdav AI Agent
Available abilities:
- scaffold-block-theme
- activate-theme
- send-email
```

**Internal abilities** are not exposed via MCP.

**Partner abilities** are available only with partner credentials.

### WooCommerce Integration

**Public abilities** related to WooCommerce are available:

- Product management
- Order processing
- Customer communication

**Internal abilities** are not exposed to WooCommerce.

### Chat Interface

**All abilities** (Public, Internal, Partner) are available in chat, depending on user permissions:

- Administrators see all abilities
- Regular users see only Public abilities
- Partners see Public + Partner abilities (if whitelisted)

## Security Best Practices

### Principle of Least Privilege

- Set abilities to the most restrictive visibility that still allows their use
- Use Partner visibility for sensitive operations
- Disable abilities you don't use

### Regular Audits

- Review ability visibility monthly
- Check for unclassified abilities
- Remove access for unused partners

### Logging and Monitoring

- Monitor which abilities are used most
- Track partner access patterns
- Alert on unusual ability usage

### Third-Party Abilities

- Review third-party abilities before enabling
- Classify them explicitly
- Start with Internal or Partner visibility
- Promote to Public only after vetting

## Troubleshooting

**An ability isn't showing in the list**
- Verify the ability is installed and active
- Check that the plugin/addon is enabled
- Refresh the page

**I can't change an ability's visibility**
- Verify you have administrator permissions
- Check that the ability isn't locked by a plugin
- Try disabling conflicting plugins

**A partner can't access an ability**
- Verify the partner is in the allow-list
- Check that the ability's visibility is set to Partner
- Confirm the partner's credentials are correct
- Check API logs for authentication errors

**Unclassified abilities keep appearing**
- Review and classify them in the admin notice
- Check that your classification was saved
- Verify the plugin providing the ability is up to date

## Migration from Legacy Mode

If you're upgrading from an older version of Superdav AI Agent:

- All existing abilities are automatically classified as Public
- Review and adjust visibility as needed
- No action required unless you want to restrict access

See **Third-Party Mode Migration** for more details on the transition to native Abilities API integration.

## Next Steps

After configuring ability visibility:

1. **Review your abilities**: Audit all installed abilities
2. **Classify unclassified abilities**: Respond to admin notices
3. **Set up partners**: Add partners if using Partner visibility
4. **Monitor usage**: Track which abilities are used most
5. **Document decisions**: Keep notes on why you chose each visibility level
