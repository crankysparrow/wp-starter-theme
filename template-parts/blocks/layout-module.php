<?php 

/**
 * About Us Block Template
 * 
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 * 
 */

$id = 'layout-module-' . $block['id'];

$columns = get_field('layout_options');

 $className = 'layout-module ' . $columns;
 if ( !empty($block['className']) ) {
   $className .= ' ' . $block['className'];
 }


if ( !empty($block['align']) ) {
   $className .= ' align' . $block['align'];
 }

 ?>

 <div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
  
  <?php if ( have_rows('rows') ) :
    while ( have_rows('rows') ) : the_row(); ?>

      <div class="layout-col-left">
        <?php echo the_sub_field('content'); ?>
      </div>

      <div class="layout-col-right">
        <?php echo the_sub_field('content_2'); ?>
      </div>

  <?php endwhile;
  endif; ?>

 </div>
 