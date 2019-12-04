<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package revenue_growth
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'revgrowth' ); ?></a>

	<nav id="menu-1" class="top-nav">
		<div class="toggler">
			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
				<em class="hamburger"></em>
			</button>
		</div>

		<div class="menu-brand">
			<a href="<?php echo get_site_url(); ?>">
				<?php $custom_logo_id = get_theme_mod('custom_logo');
				$logo = wp_get_attachment_image_src( $custom_logo_id, 'full' );
				if ( has_custom_logo() ) : ?>
					<img src="<?php echo esc_url( $logo[0] ); ?>" alt="<?php echo get_bloginfo( 'name' ); ?>" class='brand-image' />
				<?php else : 
					get_bloginfo( 'name' );
				endif; ?>
			</a>
		</div>

		<?php wp_nav_menu( array(
			'theme_location'		=> 'menu-1',
			'menu_id'						=> 'topnav-menu',
			'container'					=> 'ul',
		) ); ?>
	</nav>