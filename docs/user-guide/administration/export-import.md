---
title: "Export & Import"
sidebar_position: 12
---

# Export & Import

Ultimate Multisite 2.9.0 adds a single-site **Export & Import** tool under **Tools > Export & Import**. Use it when you need to package one WordPress site as a ZIP file, restore that ZIP, or move a site between compatible Ultimate Multisite and single-site WordPress installations.

## Required permissions

You must sign in as an administrator who can access the WordPress **Tools** menu on the site being exported or imported. On a multisite network, use a network administrator account when exporting or importing subsites from network-level Ultimate Multisite tools.

Export ZIP downloads are served through an authenticated download endpoint, so keep the admin session active until the download finishes and do not share generated download URLs publicly.

## Exporting a site to a ZIP

1. In the WordPress admin for the site you want to copy, go to **Tools > Export & Import**.
2. Open the export area and choose the site you want to package.
3. Select the optional content to include, such as uploads, plugins, and themes, when those options are available.
4. Start the export and wait for the process to finish. Large sites may need to finish in the background before the ZIP is ready.
5. Download the finished ZIP from the exports list.

Keep the ZIP in a secure location. It can contain site content, settings, media files, and selected code assets.

## What the export includes

An export ZIP can include:

- The selected site's database content and configuration.
- Uploaded media files when uploads are included.
- Plugins and themes when those options are selected.
- Import metadata used by the Export & Import tool to rebuild the site on the target installation.

The exact ZIP size depends on the amount of media, the selected plugins and themes, and the size of the site's database tables.

## Importing a site from a ZIP

1. Go to **Tools > Export & Import** on the destination WordPress site.
2. Open the import area and upload the ZIP created by the Export & Import tool.
3. Enter a replacement URL if the site should use a new address, or leave the field blank to keep the original URL.
4. Choose whether to delete the uploaded ZIP after the import finishes.
5. Click **Begin Import**.
6. Monitor the pending import until it finishes. Use **Cancel Import** only if you need to stop the process before completion.
7. Review the imported site before allowing normal traffic or customer access.

On a single-site WordPress installation, importing a ZIP replaces the current site with the imported site. Create a full backup of the target site before you begin, and avoid starting multiple imports for the same site at the same time.

## Limitations and compatibility notes

- Very large uploads directories or media libraries can produce large ZIP files. Confirm PHP upload limits, execution limits, disk space, memory, and server timeout settings before exporting or importing large sites.
- Very large media libraries may need to be moved during a low-traffic maintenance window.
- The target WordPress installation should run compatible WordPress, PHP, Ultimate Multisite, plugin, and theme versions.
- A single-site import replaces the target site. It is not a merge tool.
- Multisite-to-single-site and single-site-to-multisite moves are supported only when the target environment can run the exported site's plugins, themes, URLs, and required Ultimate Multisite components.
- Keep the ZIP private. It may contain database content, uploaded files, and configuration details from the exported site.

For older network-level export workflows, see [Site Export](/user-guide/administration/site-export).
