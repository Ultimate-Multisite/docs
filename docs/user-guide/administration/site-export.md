---
title: "Site Export"
sidebar_position: 11
---

# Site Export

The **Site Export** admin page lets network administrators package one site, or the whole network, into a downloadable archive for migration, backup, or hand-off work.

## Exporting one site

Go to **Ultimate Multisite > Site Export** and choose **Generate new Site Export**. Select the subsite you want to export, then choose whether the archive should include uploads, plugins, and themes.

When the export completes, download the ZIP from the **Existing Exports** list. Export ZIPs now include a self-booting `index.php` and a `readme.txt`, so the archive can be uploaded to a fresh host and started without first installing a separate importer plugin.

## Exporting the whole network

Use **Network Export** on the Site Export page when you need a single archive containing all subsites in the network. This is useful before host migrations, disaster-recovery drills, or staging rebuilds where each subsite needs to travel together.

Because a network export can be much larger than a single-site export, run it during a low-traffic window and confirm the target storage has enough free space for uploads, plugins, themes, and generated ZIP files.

### Network Import Bundles

Starting with Ultimate Multisite 2.12.0, Site Exporter can generate **network import bundles** — specialized archives designed for streamlined network-wide site restoration. A network import bundle contains all the necessary files and metadata to restore multiple sites to a new network installation.

#### Generating a Network Import Bundle

1. Go to **Ultimate Multisite > Site Export**
2. Click **Generate new Network Export**
3. Select **Network Import Bundle** as the export type
4. Choose whether to include uploads, plugins, and themes
5. Click **Generate**
6. Download the bundle ZIP from the **Existing Exports** list

#### Restoring from a Network Import Bundle

To restore sites from a network import bundle:

1. Install Ultimate Multisite on your target host
2. Complete the multisite setup wizard
3. Go to **Ultimate Multisite > Site Export** on the new network
4. Click **Import Network Bundle**
5. Upload the network import bundle ZIP file
6. Follow the on-screen import instructions
7. The import process will restore all sites, their content, and configurations

Network import bundles preserve:
- Site content (posts, pages, custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (if included in the bundle)
- Media uploads (if included in the bundle)
- Custom database tables and data

## Installing a self-booting export ZIP

To restore a self-booting ZIP on a fresh host:

1. Upload the exported ZIP contents to the target web root.
2. Open the uploaded `index.php` in a browser.
3. Follow the on-screen installer instructions from the bundled export package.
4. Review the bundled `readme.txt` for export-specific notes before removing temporary files.

For addon-specific installation and import details, see the [Site Exporter addon documentation](/addons/site-exporter).

For the single-site tool added in Ultimate Multisite 2.9.0, see [Export & Import](/user-guide/administration/export-import).
