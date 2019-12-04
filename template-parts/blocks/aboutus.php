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

 $id = 'about-us-' . $block['id'];

 $className = 'about-us-block';
 if ( !empty($block['className']) ) {
   $className .= ' ' . $block['className'];
 }

 if ( !empty($block['align']) ) {
   $className .= ' align' . $block['align'];
 }

 ?>

 <div id="<?php echo esc_attr($id); ?>" class="<?php echo esc_attr($className); ?>">
 
  <div class="about-us-image">

  </div>

  <div class="about-us-text">
    <h1>
      <?php echo get_field('headline'); ?>
    </h1>
    <p>
      <?php echo get_field('text'); ?>
    </p>
  </div>

 <style>

  #<?php echo esc_attr($id); ?> .about-us-image {
    background: url('<?php echo get_field("image")["url"]; ?>');
    background-size: cover;
    background-repeat: no-repeat;
  }

 </style>
 
 </div>
