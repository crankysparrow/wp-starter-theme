<?php

function register_acf_block_types() {

  // acf_register_block_type(array(
  //   'name' => 'about-us',
  //   'title' => __('About Us'),
  //   'description' => __('Custom about us block'),
  //   'render_template' => './template-parts/blocks/aboutus.php',
  //   'category' => 'formatting',
  //   'keywords' => array( 'about us', 'text' ),
  //   // 'enqueue_assets' => function() {
  //   //   wp_enqueue_style( 'revgrowth-acf-blocks-css', get_template_directory_uri() . '/dist/css/acf-revgrowth-blocks.css');
  //   // },
  //   'supports' => array(
  //     'align' => false,
  //   )
  // ));

  // acf_register_block_type(array(
  //   'name'              => 'layout-module',
  //   'title'             => __('Layout Module'),
  //   'description'       => __('Custom layout module.'),
  //   'render_template'   => './template-parts/blocks/layout-module.php',
  //   'category'          => 'formatting',
  //   'keywords'          => array( 'layout', 'text' ),
  //   'supports'          => array(
  //     'align' => false,
  //   )
  // ));

  acf_register_block_type(array(
    'name'              => 'accordion',
    'title'             => __('Accordion Module'),
    'description'       => __('Custom layout module.'),
    'render_template'   => './template-parts/blocks/accordion-module.php',
    'category'          => 'formatting',
    'keywords'          => array( 'layout', 'text', 'accordion' ),
    'enqueue_assets'    => function() {
      wp_enqueue_style( 'revgrowth-acf-blocks-css', get_template_directory_uri() . '/dist/css/acf-revgrowth-blocks.css' );
      wp_enqueue_script( 'block-accordion', get_template_directory_uri() . '/dist/js/accordion.js', array('jquery'), '', true );
    },
    'icon'              => array(
      'src'         => 'list-view',
      'foreground'  => '#128040'
    ),
    'supports'          => array(
      'align' => false,
    )
  ));

}

if ( function_exists('acf_register_block_type') ) {
  add_action( 'acf/init', 'register_acf_block_types' );
}

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Header Settings',
		'menu_title'	=> 'Header',
		'parent_slug'	=> 'theme-general-settings',
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Theme Footer Settings',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-general-settings',
	));
	
}