<?php
/**
 * Enqueue scripts and styles.
 */
function sparrow_starter_scripts() {
	wp_enqueue_style( 'sparrow_starter-default-stylesheet', get_stylesheet_uri() );

	wp_enqueue_style( 'sparrow_starter-styles', get_template_directory_uri() . '/dist/css/style.css');

	wp_enqueue_script( 'sparrow_starter-scripts', get_template_directory_uri() . '/dist/js/bundle.js', array('jquery'), null, true );
}
add_action( 'wp_enqueue_scripts', 'sparrow_starter_scripts' );