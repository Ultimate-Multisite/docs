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
