#!/usr/bin/env bash
set -euo pipefail

# Wiki migration script: copies wiki .md files into Docusaurus structure
# and performs automated text replacements.

WIKI_DIR="/home/dave/multisite/ultimate-multisite/.wiki"
EXTRA_WIKI_DIR="/home/dave/multisite/.wiki"
DOCS_DIR="/home/dave/multisite/docs/docs/user-guide"

# Files to skip entirely
SKIP_FILES=(
  "why-is-wp-ultimo-no-longer-sold-at-codecanyon.md"
  "how-to-configure-domain-mapping-v1.md"
  "the-wp-ultimo-affiliate-program.md"
  "_Sidebar.md"
  "Home.md"
  "README.md"
)

# Mapping: source filename -> destination path (relative to DOCS_DIR)
declare -A FILE_MAP=(
  # Getting Started
  ["wp-ultimo-101.md"]="getting-started/ultimate-multisite-101.md"
  ["basic-concepts.md"]="getting-started/basic-concepts.md"
  ["what-is-wordpress-multisite.md"]="getting-started/what-is-wordpress-multisite.md"
  ["wp-ultimo-requirements.md"]="getting-started/requirements.md"
  ["why-wp-ultimo.md"]="getting-started/why-ultimate-multisite.md"
  ["installing-wp-ultimo-v2.md"]="getting-started/installing-ultimate-multisite.md"
  ["how-do-i-install-wordpress-multisite.md"]="getting-started/how-to-install-wordpress-multisite.md"

  # Administration
  ["understanding-the-wp-ultimo-dashboard.md"]="administration/understanding-the-dashboard.md"
  ["understanding-your-dashboard-v2.md"]="administration/dashboard-overview.md"
  ["touring-the-admin-panel.md"]="administration/touring-the-admin-panel.md"
  ["managing-customers.md"]="administration/managing-customers.md"
  ["managing-sites.md"]="administration/managing-sites.md"
  ["managing-memberships-v2.md"]="administration/managing-memberships.md"
  ["managing-payments-and-invoices.md"]="administration/managing-payments-and-invoices.md"
  ["managing-system-emails.md"]="administration/managing-system-emails.md"

  # Configuration
  ["site-templates-v2.md"]="configuration/site-templates.md"
  ["auto-search-and-replace-in-site-templates-v2.md"]="configuration/auto-search-and-replace-in-site-templates.md"
  ["checkout-forms.md"]="configuration/checkout-forms.md"
  ["creating-your-first-subscription-product-v2.md"]="configuration/creating-your-first-subscription-product.md"
  ["creating-discount-codes-v2.md"]="configuration/creating-discount-codes.md"
  ["managing-shareable-links-for-plans.md"]="configuration/managing-shareable-links-for-plans.md"
  ["customizing-your-registration-form.md"]="configuration/customizing-your-registration-form.md"
  ["the-registration-flow-v2.md"]="configuration/the-registration-flow.md"

  # Domain Mapping
  ["how-to-configure-domain-mapping-v2.md"]="domain-mapping/how-to-configure-domain-mapping.md"
  ["setting-the-sunrise-constant-to-true-on-closte.md"]="domain-mapping/setting-the-sunrise-constant-on-closte.md"

  # Host Integrations
  ["Closte-Integration.md"]="host-integrations/closte.md"
  ["Cloudflare-Integration.md"]="host-integrations/cloudflare.md"
  ["Cloudways-Integration.md"]="host-integrations/cloudways.md"
  ["cPanel-Integration.md"]="host-integrations/cpanel.md"
  ["Enhance-Integration.md"]="host-integrations/enhance.md"
  ["GridPane-Integration.md"]="host-integrations/gridpane.md"
  ["Runcloud-Integration.md"]="host-integrations/runcloud.md"
  ["ServerPilot-Integration.md"]="host-integrations/serverpilot.md"
  ["WP-Engine-Integration.md"]="host-integrations/wp-engine.md"
  ["WPMU-DEV-Integration.md"]="host-integrations/wpmu-dev.md"

  # Payment Gateways
  ["setting-up-the-stripe-gateway-v2.md"]="payment-gateways/stripe.md"
  ["setting-up-the-paypal-gateway-v2.md"]="payment-gateways/paypal.md"
  ["setting-up-manual-payments-v2.md"]="payment-gateways/manual-payments.md"
  ["getting-started-with-the-payfast-payment-gateway.md"]="payment-gateways/payfast.md"
  ["getting-started-with-the-gocardless-payment-gateway.md"]="payment-gateways/gocardless.md"
  ["getting-paid-v2.md"]="payment-gateways/getting-paid.md"
  ["tax-handling.md"]="payment-gateways/tax-handling.md"

  # Client Management
  ["your-client-s-account-page-v2.md"]="client-management/account-page.md"
  ["your-client-s-websites-v2.md"]="client-management/client-websites.md"
  ["upgrading-a-plan-v2.md"]="client-management/upgrading-a-plan.md"
  ["downgrading-a-plan-v2.md"]="client-management/downgrading-a-plan.md"
  ["canceling-a-membership-v2.md"]="client-management/canceling-a-membership.md"
  ["how-can-i-access-my-account-page-for-the-first-time.md"]="client-management/accessing-account-page-first-time.md"
  ["how-can-i-cancel-my-subscription.md"]="client-management/how-to-cancel-subscription.md"

  # Integrations
  ["setting-up-the-woocommerce-integration-v2.md"]="integrations/woocommerce.md"
  ["integrating-wp-ultimo-with-zapier.md"]="integrations/zapier.md"
  ["event-register-an-account-via-zapier.md"]="integrations/zapier-register-account.md"
  ["using-wp-ultimo-mailchimp-integration.md"]="integrations/mailchimp.md"
  ["using-wp-ultimo-affiliatewp-integration-to-create-your-own-referral-program-for-wp-ultimo.md"]="integrations/affiliatewp.md"
  ["a-first-look-on-webhooks-v2.md"]="integrations/webhooks.md"

  # Customization
  ["customizing-your-admin-panel-with-pro-theme.md"]="customization/pro-theme.md"
  ["customizing-your-admin-panel-with-material-wp.md"]="customization/material-wp.md"
  ["placing-ads-on-your-network-with-wp-ultimo-ad-injector.md"]="customization/ad-injector.md"
  ["creating-custom-admin-pages-and-sub-pages-using-wp-ultimo-admin-page-creator.md"]="customization/admin-page-creator.md"
  ["editing-plugins-and-themes-meta-information-with-wp-ultimo-plugin-and-theme-manager.md"]="customization/plugin-and-theme-manager.md"

  # Development
  ["wp-ultimo-hooks-and-filters.md"]="development/hooks-and-filters.md"
  ["the-wp-ultimo-register-api-endpoint.md"]="development/register-api-endpoint.md"
  ["how-to-use-wp-ultimo-snippets-on-our-github-repository.md"]="development/github-snippets.md"
  ["code-snippets-for-v2.md"]="development/code-snippets.md"
  ["how-to-get-custom-development-help-from-codeable.md"]="development/custom-development-help.md"

  # Localization
  ["translating-wp-ultimo.md"]="localization/translating.md"
  ["activating-wp-ultimo-language-selector.md"]="localization/language-selector.md"
  ["re-ordering-the-wp-ultimo-country-list.md"]="localization/country-list.md"

  # Troubleshooting
  ["error-installing-the-sunrise-file.md"]="troubleshooting/sunrise-file-error.md"
  ["known-incompatibilities-with-other-plugins.md"]="troubleshooting/known-incompatibilities.md"
  ["how-to-get-help.md"]="troubleshooting/how-to-get-help.md"
  ["how-to-join-wp-ultimo-community.md"]="troubleshooting/community.md"

  # Migration
  ["migrating-from-v1.md"]="migration/migrating-from-v1.md"
  ["how-to-export-and-import-a-site-with-wp-ultimo-site-exporter.md"]="migration/site-exporter.md"

  # Miscellaneous
  ["sending-emails-and-broadcasts-v2.md"]="miscellaneous/sending-emails-and-broadcasts.md"
  ["frequently-asked-questions.md"]="miscellaneous/frequently-asked-questions.md"
)

# Frontmatter titles (derive from sidebar)
declare -A TITLES=(
  ["getting-started/ultimate-multisite-101.md"]="Ultimate Multisite 101"
  ["getting-started/basic-concepts.md"]="Basic Concepts"
  ["getting-started/what-is-wordpress-multisite.md"]="What is WordPress Multisite?"
  ["getting-started/requirements.md"]="Requirements"
  ["getting-started/why-ultimate-multisite.md"]="Why Ultimate Multisite"
  ["getting-started/installing-ultimate-multisite.md"]="Installing Ultimate Multisite"
  ["getting-started/how-to-install-wordpress-multisite.md"]="How to Install WordPress Multisite"
  ["administration/understanding-the-dashboard.md"]="Understanding the Dashboard"
  ["administration/dashboard-overview.md"]="Dashboard Overview"
  ["administration/touring-the-admin-panel.md"]="Touring the Admin Panel"
  ["administration/managing-customers.md"]="Managing Customers"
  ["administration/managing-sites.md"]="Managing Sites"
  ["administration/managing-memberships.md"]="Managing Memberships"
  ["administration/managing-payments-and-invoices.md"]="Managing Payments and Invoices"
  ["administration/managing-system-emails.md"]="Managing System Emails"
  ["configuration/site-templates.md"]="Site Templates"
  ["configuration/auto-search-and-replace-in-site-templates.md"]="Auto Search and Replace in Site Templates"
  ["configuration/checkout-forms.md"]="Checkout Forms"
  ["configuration/creating-your-first-subscription-product.md"]="Creating Your First Subscription Product"
  ["configuration/creating-discount-codes.md"]="Creating Discount Codes"
  ["configuration/managing-shareable-links-for-plans.md"]="Managing Shareable Links for Plans"
  ["configuration/customizing-your-registration-form.md"]="Customizing Your Registration Form"
  ["configuration/the-registration-flow.md"]="The Registration Flow"
  ["domain-mapping/how-to-configure-domain-mapping.md"]="How to Configure Domain Mapping"
  ["domain-mapping/setting-the-sunrise-constant-on-closte.md"]="Setting the Sunrise Constant on Closte"
  ["host-integrations/closte.md"]="Closte Integration"
  ["host-integrations/cloudflare.md"]="Cloudflare Integration"
  ["host-integrations/cloudways.md"]="Cloudways Integration"
  ["host-integrations/cpanel.md"]="cPanel Integration"
  ["host-integrations/enhance.md"]="Enhance Control Panel Integration"
  ["host-integrations/gridpane.md"]="GridPane Integration"
  ["host-integrations/runcloud.md"]="RunCloud Integration"
  ["host-integrations/serverpilot.md"]="ServerPilot Integration"
  ["host-integrations/wp-engine.md"]="WP Engine Integration"
  ["host-integrations/wpmu-dev.md"]="WPMU DEV Integration"
  ["payment-gateways/stripe.md"]="Setting Up Stripe"
  ["payment-gateways/paypal.md"]="Setting Up PayPal"
  ["payment-gateways/manual-payments.md"]="Setting Up Manual Payments"
  ["payment-gateways/payfast.md"]="PayFast Gateway"
  ["payment-gateways/gocardless.md"]="GoCardless Gateway"
  ["payment-gateways/getting-paid.md"]="Getting Paid"
  ["payment-gateways/tax-handling.md"]="Tax Handling"
  ["client-management/account-page.md"]="Client Account Page"
  ["client-management/client-websites.md"]="Client Websites"
  ["client-management/upgrading-a-plan.md"]="Upgrading a Plan"
  ["client-management/downgrading-a-plan.md"]="Downgrading a Plan"
  ["client-management/canceling-a-membership.md"]="Canceling a Membership"
  ["client-management/accessing-account-page-first-time.md"]="Accessing the Account Page"
  ["client-management/how-to-cancel-subscription.md"]="How to Cancel a Subscription"
  ["integrations/woocommerce.md"]="WooCommerce Integration"
  ["integrations/zapier.md"]="Zapier Integration"
  ["integrations/zapier-register-account.md"]="Register an Account via Zapier"
  ["integrations/mailchimp.md"]="MailChimp Integration"
  ["integrations/affiliatewp.md"]="AffiliateWP Integration"
  ["integrations/webhooks.md"]="Webhooks"
  ["customization/pro-theme.md"]="PRO Theme"
  ["customization/material-wp.md"]="Material WP"
  ["customization/ad-injector.md"]="Ad Injector"
  ["customization/admin-page-creator.md"]="Admin Page Creator"
  ["customization/plugin-and-theme-manager.md"]="Plugin and Theme Manager"
  ["development/hooks-and-filters.md"]="Hooks and Filters"
  ["development/register-api-endpoint.md"]="Register API Endpoint"
  ["development/github-snippets.md"]="GitHub Snippets"
  ["development/code-snippets.md"]="Code Snippets"
  ["development/custom-development-help.md"]="Custom Development Help"
  ["localization/translating.md"]="Translating Ultimate Multisite"
  ["localization/language-selector.md"]="Language Selector"
  ["localization/country-list.md"]="Country List"
  ["troubleshooting/sunrise-file-error.md"]="Sunrise File Error"
  ["troubleshooting/known-incompatibilities.md"]="Known Incompatibilities"
  ["troubleshooting/how-to-get-help.md"]="How to Get Help"
  ["troubleshooting/community.md"]="Community"
  ["migration/migrating-from-v1.md"]="Migrating from V1"
  ["migration/site-exporter.md"]="Site Exporter"
  ["miscellaneous/sending-emails-and-broadcasts.md"]="Sending Emails and Broadcasts"
  ["miscellaneous/frequently-asked-questions.md"]="Frequently Asked Questions"
)

# Create all target directories
for dest in "${FILE_MAP[@]}"; do
  mkdir -p "$DOCS_DIR/$(dirname "$dest")"
done

# Function to apply text replacements
apply_replacements() {
  local file="$1"

  # Brand name replacements (careful ordering - specific first)
  sed -i 's/WP Ultimo/Ultimate Multisite/g' "$file"
  sed -i 's/WP-Ultimo/Ultimate-Multisite/g' "$file"
  sed -i 's/WP_Ultimo/WP_Ultimo/g' "$file"  # Keep PHP namespace as-is

  # Code/slug references (not inside PHP namespaces or class names)
  # Only replace wp-ultimo when it's a plugin slug, not in code contexts
  sed -i 's|plugins/wp-ultimo|plugins/ultimate-multisite|g' "$file"
  sed -i "s|'wp-ultimo'|'ultimate-multisite'|g" "$file"
  sed -i 's|"wp-ultimo"|"ultimate-multisite"|g' "$file"

  # URL replacements
  sed -i 's|https\?://help\.wpultimo\.com/[^ )]*||g' "$file"
  sed -i 's|help\.wpultimo\.com||g' "$file"
  sed -i 's|wpultimo\.com|ultimatemultisite.com|g' "$file"
  sed -i 's|community\.wpultimo\.com|github.com/Ultimate-Multisite/ultimate-multisite/discussions|g' "$file"

  # Freemius references
  sed -i 's/Freemius[^.]*\./Available free on wordpress.org./g' "$file"
  sed -i '/[Ff]reemius/d' "$file"

  # CodeCanyon references
  sed -i '/[Cc]ode[Cc]anyon/d' "$file"

  # Old addon install instructions
  sed -i 's#install.*from.*the.*add-ons.*page#install through the addon page of your site, or download from https://ultimatemultisite.com/my-account/downloads#ig' "$file"

  # Remove v2 suffixes from internal wiki links
  sed -i 's#-v2)#)#g' "$file"
  sed -i 's|-v2\.md|.md|g' "$file"

  # Clean up empty lines left by deletions (collapse 3+ blank lines to 2)
  sed -i '/^$/N;/^\n$/N;/^\n\n$/d' "$file"
}

# Process each mapped file
count=0
for src_file in "${!FILE_MAP[@]}"; do
  dest="${FILE_MAP[$src_file]}"
  title="${TITLES[$dest]:-$(echo "$dest" | sed 's|.*/||;s|\.md$||;s|-| |g')}"

  # Determine source path
  src_path="$WIKI_DIR/$src_file"
  if [[ ! -f "$src_path" ]]; then
    src_path="$EXTRA_WIKI_DIR/$src_file"
  fi

  if [[ ! -f "$src_path" ]]; then
    echo "WARNING: Source file not found: $src_file"
    continue
  fi

  dest_path="$DOCS_DIR/$dest"

  # Extract position from order in category
  category=$(dirname "$dest")
  position=$((count % 20 + 1))

  # Add frontmatter and copy content
  {
    echo "---"
    echo "title: \"$title\""
    echo "sidebar_position: $position"
    echo "---"
    echo ""
    cat "$src_path"
  } > "$dest_path"

  # Apply text replacements
  apply_replacements "$dest_path"

  count=$((count + 1))
  echo "Migrated: $src_file -> $dest"
done

# Handle Hestia from extra wiki dir
if [[ -f "$EXTRA_WIKI_DIR/Hestia-Integration.md" ]]; then
  dest_path="$DOCS_DIR/host-integrations/hestia.md"
  {
    echo "---"
    echo "title: \"Hestia Control Panel Integration\""
    echo "sidebar_position: 7"
    echo "---"
    echo ""
    cat "$EXTRA_WIKI_DIR/Hestia-Integration.md"
  } > "$dest_path"
  apply_replacements "$dest_path"
  echo "Migrated: Hestia-Integration.md (from .wiki/) -> host-integrations/hestia.md"
fi

echo ""
echo "Migration complete. $count files processed."
echo "Run 'npm run build' in /home/dave/multisite/docs/ to verify."
