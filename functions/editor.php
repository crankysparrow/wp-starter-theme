<?php
/**
 * Gutenberg Allowed Blocks
 */

add_filter('allowed_block_types', 'sparrow_starter_allowed_blocks');

function sparrow_starter_allowed_blocks( $allowed_blocks ) {
	return array(
		'core/image',
		'core/paragraph',
		'core/heading',
		'core/list', 
		'core/shortcode',
	);
}

/**
 * Load editor styles for Gutenberg
 */
function sparrow_starter_block_editor_styles() {
	wp_enqueue_style('sparrow_starter-block-editor-styles', get_template_directory_uri() . '/dist/css/style-editor.css' );
}
add_action( 'enqueue_block_editor_assets', 'sparrow_starter_block_editor_styles' );