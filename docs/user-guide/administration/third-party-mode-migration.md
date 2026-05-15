---
title: "Third-Party Mode Migration"
sidebar_position: 17
---

# Third-Party Mode Migration

Superdav AI Agent v1.12.0 changes how third-party abilities are handled. **Third-party mode now defaults to auto**, enabling native WordPress Abilities API integration on WordPress 7.0+ without manual configuration.

## What Changed?

### Before v1.12.0

Third-party abilities required manual configuration:

- You had to explicitly enable "third-party mode"
- Abilities were loaded from a custom registry
- Integration with WordPress Abilities API was optional
- Legacy mode was the default

### After v1.12.0

Third-party abilities work automatically:

- Third-party mode defaults to "auto"
- Abilities integrate natively with WordPress Abilities API
- No manual configuration needed on WordPress 7.0+
- Legacy mode is still available for older WordPress versions

## Who Is Affected?

### New Installations (WordPress 7.0+)

**No action required.** Third-party mode is automatically set to "auto", and abilities work out of the box.

### Existing Installations

**Your settings are preserved.** If you were using:

- **Legacy mode**: You remain in legacy mode (no change)
- **Manual third-party mode**: You remain in manual mode (no change)
- **Auto mode**: You continue with auto mode (no change)

### WordPress Versions Before 7.0

**Legacy mode is still available.** If you're on WordPress 6.x or earlier:

- Third-party mode defaults to "legacy"
- You can manually enable third-party mode if desired
- Upgrade to WordPress 7.0+ to use native Abilities API

## Understanding the Modes

### Auto Mode (New Default)

**Auto mode** uses native WordPress Abilities API integration:

- Abilities are registered via WordPress hooks
- Full compatibility with WordPress 7.0+ Abilities API
- Automatic discovery of third-party abilities
- No manual configuration needed

**When to use**: WordPress 7.0+ with third-party abilities

### Manual Mode

**Manual mode** requires explicit configuration:

- You specify which third-party abilities to load
- Useful for testing or selective ability loading
- Requires editing configuration files
- More control, but more setup

**When to use**: Testing, selective ability loading, or custom configurations

### Legacy Mode

**Legacy mode** uses the old third-party ability system:

- Custom ability registry (not WordPress Abilities API)
- Backward compatible with older WordPress versions
- No native WordPress integration
- Deprecated but still supported

**When to use**: WordPress 6.x or earlier, or when you need legacy compatibility

## Checking Your Current Mode

### Via Admin Panel

1. Go to **WordPress Admin** → **Superdav AI Agent** → **Settings**
2. Look for **Third-Party Mode** setting
3. You'll see your current mode and options to change it

### Via Code

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## Changing Your Mode

### Switch to Auto Mode

If you're on WordPress 7.0+ and want to use auto mode:

1. Go to **Superdav AI Agent** → **Settings**
2. Find **Third-Party Mode**
3. Select **Auto (WordPress Abilities API)**
4. Click **Save**

Superdav AI Agent will automatically discover and register third-party abilities.

### Switch to Manual Mode

If you want to manually control which abilities load:

1. Go to **Superdav AI Agent** → **Settings**
2. Find **Third-Party Mode**
3. Select **Manual**
4. Click **Save**
5. Edit your configuration file to specify which abilities to load

### Switch to Legacy Mode

If you need legacy compatibility:

1. Go to **Superdav AI Agent** → **Settings**
2. Find **Third-Party Mode**
3. Select **Legacy**
4. Click **Save**

## Benefits of Auto Mode

### Automatic Discovery

Abilities are automatically discovered from:

- Installed plugins
- Active theme
- Must-use plugins
- Drop-in plugins

No manual registration needed.

### Native Integration

Abilities integrate with WordPress Abilities API:

- Consistent with WordPress core
- Works with WordPress admin
- Compatible with other plugins using Abilities API
- Future-proof as WordPress evolves

### Simplified Management

- No configuration files to edit
- No manual ability registration
- Ability Visibility controls work automatically
- Admin notices alert you to unclassified abilities

### Better Performance

- Abilities are cached
- Lazy-loaded on demand
- Optimized for WordPress 7.0+

## Migration Path

### If You're on WordPress 6.x

1. **Upgrade to WordPress 7.0+** (when ready)
2. **Update Superdav AI Agent** to v1.12.0+
3. **Change third-party mode to Auto** (optional; legacy mode still works)
4. **Review ability visibility** to ensure proper access controls

### If You're on WordPress 7.0+

1. **Update Superdav AI Agent** to v1.12.0+
2. **Verify third-party mode is set to Auto** (it should be by default)
3. **Review ability visibility** to ensure proper access controls
4. **Test third-party abilities** to confirm they work

## Troubleshooting

### Abilities aren't loading in auto mode

- Verify you're on WordPress 7.0+
- Check that third-party mode is set to "Auto"
- Verify the plugin providing the ability is active
- Check WordPress error logs for registration errors

### I want to keep legacy mode

- Go to **Settings** → **Third-Party Mode**
- Select **Legacy**
- Click **Save**
- Legacy mode will continue to work

### My custom abilities aren't showing

- Verify they're registered via WordPress hooks
- Check that they implement the Abilities API correctly
- Review WordPress error logs
- Use the **Ability Visibility** admin page to see all registered abilities

### I'm getting "unclassified ability" notices

- This is normal for new third-party abilities
- Review and classify them in the admin notice
- See **Ability Visibility** for details on classification

## Backward Compatibility

### Existing Configurations

If you have existing third-party ability configurations:

- **Legacy mode**: Your configuration continues to work
- **Manual mode**: Your configuration continues to work
- **Auto mode**: Your configuration is ignored (auto mode takes over)

To keep your custom configuration, stay in Manual or Legacy mode.

### Deprecation Timeline

- **v1.12.0**: Legacy and Manual modes still fully supported
- **v1.13.0+**: Legacy mode may show deprecation notices
- **v2.0.0**: Legacy mode may be removed (TBD)

## Best Practices

### For New Installations

- Use Auto mode (it's the default)
- Let Superdav AI Agent discover abilities automatically
- Use Ability Visibility to control access

### For Existing Installations

- Upgrade to WordPress 7.0+ when possible
- Switch to Auto mode for simplified management
- Review and classify abilities using Ability Visibility

### For Custom Abilities

- Register abilities via WordPress hooks (Abilities API)
- Avoid custom ability registries
- Test on WordPress 7.0+ with Auto mode

## Next Steps

1. **Check your WordPress version**: Verify you're on 7.0+ for Auto mode
2. **Review your third-party mode**: Go to Settings and check your current mode
3. **Update if needed**: Switch to Auto mode if you're on WordPress 7.0+
4. **Classify abilities**: Review and classify any unclassified abilities
5. **Test**: Verify your third-party abilities work correctly

## Related Topics

- **Ability Visibility**: Control which abilities are exposed where
- **WordPress Abilities API**: Learn about native WordPress ability registration
- **Third-Party Ability Development**: Create abilities that work with Auto mode
