---
title: Frontend Account Example — Full Source
sidebar_position: 16
---

# Frontend account example: full source

Use these exact files with the [complete setup guide](frontend-account-page.md). [Download the installable ZIP](/downloads/frontend-account-example.zip).

This page is generated from the downloadable example. PHP belongs in the example plugin folder; paste the HTML into the page block editor’s Code editor. Do not put PHP in page content or edit Ultimate Multisite itself.

### `ums-account-example.php`

```php
<?php
/**
 * Plugin Name: Ultimate Multisite Account Page Example
 * Description: An optional presentation layer for native Ultimate Multisite shortcodes.
 * Version: 1.0.0
 * License: GPL-2.0-or-later
 * Text Domain: ums-account-example
 */
defined('ABSPATH') || exit;

add_filter('theme_page_templates', function ($templates) {
	$templates['ums-account-canvas.php'] = __('Account workspace (example)', 'ums-account-example');
	return $templates;
});

function ums_account_example_is_page() {
	return is_page() && 'ums-account-canvas.php' === get_page_template_slug(get_queried_object_id());
}

add_filter('template_include', function ($template) {
	return ums_account_example_is_page() ? __DIR__ . '/canvas.php' : $template;
}, 99);

add_action('template_redirect', function () {
	if (ums_account_example_is_page()) {
		nocache_headers();
	}
});

add_action('wp_enqueue_scripts', function () {
	if (ums_account_example_is_page()) {
		wp_enqueue_style('ums-account-example', plugins_url('portal.css', __FILE__), [], '1.0.0');
	}
});
```

### `canvas.php`

```php
<?php
/** Optional page canvas; all account data/actions remain native plugin output. */
defined('ABSPATH') || exit;
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php echo esc_attr(get_bloginfo('charset')); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class('ums-account-canvas'); ?>>
<?php wp_body_open(); ?>
<a class="ums-skip" href="#ums-main"><?php esc_html_e('Skip to account', 'ums-account-example'); ?></a>
<div class="ums-portal">
	<header class="ums-topbar">
		<a class="ums-brand" href="<?php echo esc_url(home_url('/')); ?>"><span class="ums-mark" aria-hidden="true">u</span><span><?php echo esc_html(get_bloginfo('name')); ?></span></a>
		<span class="ums-topbar-label"><?php esc_html_e('Customer workspace', 'ums-account-example'); ?></span>
		<?php if (is_user_logged_in()) : ?>
			<a class="ums-signout" href="<?php echo esc_url(wp_logout_url(get_permalink())); ?>"><?php esc_html_e('Sign out', 'ums-account-example'); ?></a>
		<?php endif; ?>
	</header>
	<?php if (is_user_logged_in()) : ?>
		<main id="ums-main" tabindex="-1"><?php while (have_posts()) : the_post(); the_content(); endwhile; ?></main>
	<?php else : ?>
		<main id="ums-main" class="ums-guest" tabindex="-1">
			<p class="ums-eyebrow"><?php esc_html_e('Your workspace, in one place', 'ums-account-example'); ?></p>
			<h1><?php esc_html_e('Welcome back.', 'ums-account-example'); ?></h1>
			<p><?php esc_html_e('Sign in to manage your sites, membership and billing.', 'ums-account-example'); ?></p>
			<a class="ums-button" href="<?php echo esc_url(wp_login_url(get_permalink())); ?>"><?php esc_html_e('Sign in to your account', 'ums-account-example'); ?></a>
			<a class="ums-quiet" href="<?php echo esc_url(wp_lostpassword_url(get_permalink())); ?>"><?php esc_html_e('Forgot your password?', 'ums-account-example'); ?></a>
		</main>
	<?php endif; ?>
	<footer class="ums-footer"><span><?php echo esc_html(get_bloginfo('name')); ?></span><span><?php esc_html_e('Your sites. Your next chapter.', 'ums-account-example'); ?></span></footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
```

### `portal.css`

```css
/* Account example only: no plugin or theme files are modified. */
body.ums-account-canvas { margin: 0; background: #f7f8f5; }
.ums-portal { --ink: #1e2e26; --muted: #59675d; --line: #dce2d9; --accent: #365c39; --paper: #fff; color: var(--ink); font: 16px/1.6 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
.ums-portal *, .ums-portal *::before, .ums-portal *::after { box-sizing: border-box; }
.ums-portal a { color: var(--accent); text-underline-offset: .2em; }
.ums-portal a:focus-visible, .ums-portal button:focus-visible, .ums-portal input:focus-visible { outline: 3px solid #b16823; outline-offset: 4px; }
.ums-portal ::selection { color: #18291d; background: #dcebb9; }
.ums-topbar { min-height: 96px; max-width: 1440px; padding: 20px 56px; margin: auto; display: flex; align-items: center; gap: 28px; border-bottom: 1px solid var(--line); }
.ums-brand { display: inline-flex; align-items: center; gap: 12px; font-size: 21px; font-weight: 750; text-decoration: none; letter-spacing: -.04em; }
.ums-mark { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 11px; color: #fff; background: var(--accent); font: 700 28px/1 Georgia, serif; }
.ums-topbar-label { color: var(--muted); padding-left: 28px; border-left: 1px solid var(--line); font-size: 14px; }
.ums-signout { margin-left: auto; padding: 10px 0 10px 16px; font-size: 14px; }
.ums-workspace { display: grid; grid-template-columns: 212px minmax(0, 1fr); gap: 56px; max-width: 1328px; padding: 48px 56px 72px; margin: auto; }
.ums-sidebar { align-self: start; position: sticky; top: 32px; padding-top: 16px; }
.ums-sidebar-label, .ums-eyebrow { font-size: 11px; letter-spacing: .16em; font-weight: 750; margin: 0 0 22px; }
.ums-sidebar-label { color: var(--muted); }
.ums-nav { display: grid; gap: 6px; }
.ums-nav a { display: flex; gap: 15px; align-items: center; min-height: 48px; border-radius: 8px; padding: 10px 12px; margin-left: -12px; text-decoration: none; font-size: 14px; font-weight: 600; }
.ums-nav a:hover { background: #e7ecdf; }
.ums-workspace:not(:has(:target)) .ums-nav a[href="#overview"], .ums-workspace:has(#overview:target) .ums-nav a[href="#overview"], .ums-workspace:has(#sites:target) .ums-nav a[href="#sites"], .ums-workspace:has(#billing:target) .ums-nav a[href="#billing"], .ums-workspace:has(#settings:target) .ums-nav a[href="#settings"] { background: #e3ead8; color: #25452b; }
.ums-nav span { color: #697960; font-size: 11px; font-variant-numeric: tabular-nums; }
.ums-sidebar-note { margin-top: 64px; padding-top: 24px; border-top: 1px solid var(--line); color: var(--muted); font-size: 13px; }
.ums-note-dot { display: block; width: 8px; height: 8px; background: #7c994a; border-radius: 50%; }
.ums-content { min-width: 0; }
.ums-intro { position: relative; padding: 28px 36px; margin-bottom: 30px; background: #e9eedf; border: 1px solid #dce4cc; border-radius: 16px; }
.ums-portal h1 { font: 500 clamp(40px, 4vw, 54px)/1.04 Georgia, "Times New Roman", serif; letter-spacing: -.045em; margin: 0 0 16px; color: var(--ink); }
.ums-intro > p:not(.ums-eyebrow) { max-width: 520px; margin-bottom: 12px; color: #465640; font-size: 16px; }
.ums-text-link { display: inline-flex; align-items: center; gap: 24px; min-height: 44px; font-weight: 650; font-size: 14px; text-decoration: none; border-bottom: 1px solid currentColor; }
.ums-text-link:hover { color: #162f1a; }
.ums-section { margin-top: 38px; scroll-margin-top: 28px; }
.ums-section-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
.ums-section-heading h2 { font-size: 24px; font-weight: 650; letter-spacing: -.045em; margin: 0; }
.ums-section-heading > span { color: var(--muted); font-size: 10px; font-weight: 700; letter-spacing: .13em; }
.ums-section-copy { color: var(--muted); margin: -4px 0 20px; font-size: 14px; max-width: 640px; }
.ums-card { background: var(--paper); border: 1px solid var(--line); border-radius: 12px; overflow-wrap: anywhere; min-width: 0; }
.ums-card:empty { display: none; }
.ums-detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
.ums-site-detail { display: grid; gap: 20px; margin-top: 20px; }
.ums-site-detail > .ums-card:not(:has(.wu-current-site)), .ums-detail-grid > .ums-card:not(:has(.wu-styling)), .ums-invoices:not(:has(.wu-invoices)) { display: none; }
.ums-invoices { margin-top: 20px; }
.ums-portal .wu-styling { font-family: inherit; font-size: 14px; line-height: 1.6; }
.ums-portal .wu-styling h3 { font-size: 16px; color: var(--ink); }
.ums-portal .wu-styling > div { margin-top: 0; }
.ums-portal .wu-styling .wu-rounded, .ums-portal .wu-styling .wu-rounded-lg { border-radius: 8px; }
.ums-portal .wu-styling .wu-bg-gray-100, .ums-portal .wu-styling .wu-bg-gray-200 { background: #f8faf5; }
.ums-portal .wu-styling .button-primary { background: var(--accent); border-color: var(--accent); color: #fff; border-radius: 7px; padding: 8px 14px; min-height: 40px; box-shadow: none; }
.ums-portal .wu-styling .button-primary:hover { background: #244629; border-color: #244629; }
.ums-portal .wu-styling .button { text-decoration: none; }
.ums-portal .wu-styling a:not(.button):hover { text-decoration: underline; }
.ums-portal .wu-styling .wu-my-4, .ums-portal .wu-styling .wu-my-6 { margin-top: 0; margin-bottom: 0; }
.ums-portal .wu-styling .wu-font-bold, .ums-portal .wu-styling .wu-font-semibold { font-weight: 650; }
.ums-portal .wu-styling .wu-text-xs { font-size: 12px; }
.ums-portal .wu-styling .wu-text-sm { font-size: 14px; }
.ums-portal .wu-styling .wu-text-gray-600, .ums-portal .wu-styling .wu-text-gray-500 { color: #59675d; }
.ums-portal .wu-styling table { font-variant-numeric: tabular-nums; }
.ums-footer { border-top: 1px solid var(--line); max-width: 1216px; margin: auto; padding: 24px 0 36px; display: flex; justify-content: space-between; gap: 24px; color: var(--muted); font-size: 12px; }
.ums-guest, .ums-plans { max-width: 940px; margin: 64px auto 96px; padding: 0 32px; }
.ums-guest { min-height: 48vh; }
.ums-guest > p { max-width: 520px; }
.ums-button { display: inline-flex; padding: 12px 22px; border-radius: 8px; background: var(--accent); color: #fff !important; font-weight: 650; text-decoration: none; }
.ums-button:hover { background: #244629; }
.ums-quiet { display: block; width: fit-content; margin-top: 20px; font-size: 14px; }
.ums-plans > .ums-eyebrow { margin-top: 40px; }
.ums-plans > .ums-card { padding: 24px; margin-top: 32px; }
.ums-skip { position: absolute; left: -10000px; }
.ums-skip:focus { position: fixed; top: 8px; left: 8px; z-index: 100000; background: #fff; color: #1e2e26; padding: 12px; }
@media (max-width: 1000px) {
  .ums-topbar { padding: 20px 32px; }
  .ums-workspace { grid-template-columns: 170px minmax(0, 1fr); gap: 32px; padding: 32px; }
  .ums-intro { padding: 30px; }
  .ums-detail-grid { grid-template-columns: minmax(0, 1fr); }
  .ums-footer { margin: 0 32px; }
}
@media (max-width: 700px) {
  .ums-topbar { min-height: 76px; padding: 16px 22px; gap: 12px; }
  .ums-topbar-label { display: none; }
  .ums-workspace { display: block; padding: 20px 20px 48px; }
  .ums-sidebar { position: static; padding: 0; margin-bottom: 24px; }
  .ums-sidebar-label, .ums-sidebar-note { display: none; }
  .ums-nav { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
  .ums-nav a { padding: 8px 10px; margin: 0; background: #edf0e7; font-size: 12px; gap: 8px; }
  .ums-intro { border-radius: 12px; padding: 28px 24px; margin-bottom: 30px; }
  .ums-portal h1 { font-size: 43px; }
  .ums-intro br:not(h1 br) { display: none; }
  .ums-section-heading h2 { font-size: 21px; }
  .ums-section-heading > span { font-size: 9px; }
  .ums-footer { margin: 0 20px; flex-direction: column; gap: 4px; }
  .ums-plans, .ums-guest { padding: 0 22px; margin-top: 40px; }
  .ums-plans > .ums-card { padding: 12px; }
}
```

### `account-page.html`

```html
<!-- wp:html -->
<div class="ums-workspace">
  <aside class="ums-sidebar" aria-label="Account sections">
    <p class="ums-sidebar-label">YOUR WORKSPACE</p>
    <nav class="ums-nav" aria-label="On this page">
      <a href="#overview"><span aria-hidden="true">01</span> Overview</a>
      <a href="#sites"><span aria-hidden="true">02</span> My sites</a>
      <a href="#billing"><span aria-hidden="true">03</span> Billing &amp; invoices</a>
      <a href="#settings"><span aria-hidden="true">04</span> Account settings</a>
    </nav>
    <div class="ums-sidebar-note"><span class="ums-note-dot" aria-hidden="true"></span><p>A little less admin.<br>More room to create.</p></div>
  </aside>
  <div class="ums-content">
    <header class="ums-intro" id="overview">
      <p class="ums-eyebrow">MAKE YOURSELF AT HOME</p>
      <h1>Your next chapter<br>starts here.</h1>
      <p>Everything you need to keep your sites moving.<br> Manage your plan, your billing and what comes next.</p>
      <a class="ums-text-link" href="#sites">Go to your sites <span aria-hidden="true">↗</span></a>
    </header>
    <section class="ums-section" aria-labelledby="membership-heading">
      <div class="ums-section-heading"><h2 id="membership-heading">Your membership</h2><span>THE BIG PICTURE</span></div>
      <div class="ums-card ums-membership">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_current_membership title="" display_images="0"]
<!-- /wp:shortcode -->
<!-- wp:html -->
      </div>
    </section>
    <section class="ums-section" id="sites" aria-labelledby="sites-heading">
      <div class="ums-section-heading"><h2 id="sites-heading">Made by you.</h2><span>YOUR SITES</span></div>
      <p class="ums-section-copy">Choose Manage to see a site's details, usage and available actions.</p>
      <div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_my_sites display_images="0"]
<!-- /wp:shortcode -->
<!-- wp:html -->
      </div>
      <div class="ums-site-detail">
        <div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_current_site display_image="0"]
<!-- /wp:shortcode -->
<!-- wp:html -->
        </div>
        <div class="ums-detail-grid">
          <div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_account_summary]
<!-- /wp:shortcode -->
<!-- wp:html -->
          </div><div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_limits]
<!-- /wp:shortcode -->
<!-- wp:html -->
          </div>
        </div>
      </div>
    </section>
    <section class="ums-section" id="billing" aria-labelledby="billing-heading">
      <div class="ums-section-heading"><h2 id="billing-heading">The practical details.</h2><span>BILLING</span></div>
      <div class="ums-detail-grid">
        <div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_billing_info]
<!-- /wp:shortcode -->
<!-- wp:html -->
        </div><div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_payment_methods]
<!-- /wp:shortcode -->
<!-- wp:html -->
        </div>
      </div>
      <div class="ums-card ums-invoices">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_invoices]
<!-- /wp:shortcode -->
<!-- wp:html -->
      </div>
    </section>
    <section class="ums-section" id="settings" aria-labelledby="settings-heading">
      <div class="ums-section-heading"><h2 id="settings-heading">You're in control.</h2><span>SETTINGS</span></div>
      <p class="ums-section-copy">Keep your account up to date. Site-specific actions appear after choosing a site.</p>
      <div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_site_actions]
<!-- /wp:shortcode -->
<!-- wp:html -->
      </div>
    </section>
  </div>
</div>
<!-- /wp:html -->
```

### `plans-page.html`

```html
<!-- wp:html -->
<div class="ums-plans">
  <a class="ums-text-link" href="/account/">← Back to your account</a>
  <p class="ums-eyebrow">ROOM TO GROW</p>
  <h1>A plan for your<br>next chapter.</h1>
  <p>Choose the plan that fits your sites. Review the total before confirming.</p>
  <div class="ums-card">
<!-- /wp:html -->
<!-- wp:shortcode -->
[wu_checkout slug="wu-checkout"]
<!-- /wp:shortcode -->
<!-- wp:html -->
  </div>
</div>
<!-- /wp:html -->
```
