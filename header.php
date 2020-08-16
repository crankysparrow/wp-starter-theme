<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sparrow_starter
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

		<div class="brand-and-button">
			<div class="toggler">
				<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
					<em class="hamburger"></em>
				</button>
			</div>

			<div class="menu-brand">
					<?php $header_logo = get_field( 'header_logo', 'options' ); ?>
					<?php if ( $header_logo ) : ?>
						<a href="<?php echo get_site_url(); ?>">
							<img src="<?php echo esc_url( $header_logo['url'] ); ?>" alt="<?php echo esc_attr( $header_logo['alt'] ); ?>" />
						</a>
					<?php endif; ?>
			</div>
		</div>

		<?php wp_nav_menu( array(
			'theme_location'		=> 'menu-1',
			'menu_id'						=> 'topnav-menu',
			'container'					=> 'ul',
		) ); ?>
	</nav>