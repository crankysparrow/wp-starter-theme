<?php 

/**
 * Accordion Module
 * 
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 * 
 */

$id = 'accordion-module-' . $block['id'];

 $className = 'accordion-module';
 if ( !empty($block['className']) ) {
   $className .= ' ' . $block['className'];
 }

 $section = array(
   'title'    => 'Traffic Growth',
   'subtitle' => 'Attracting More Visitors',
   'copy'     => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula lorem in diam placerat, nec eleifend sem lobortis. Fusce volutpat, ex vitae scelerisque aliquet, urna odio varius ante, vitae dictum elit erat at ipsum. Nulla semper sem eu erat rutrum, eu tincidunt erat feugiat. In eu viverra lacus. Nulla maximus lectus in varius tristique. Nulla ut tellus non velit imperdiet varius. Nulla justo dolor, luctus a ante vitae, venenatis condimentum orci. ',
 );

 ?>

<?php if ( have_rows('accordion_tabs') ) : 
  $row_id = 0;
  ?>

  <div id="<?php echo $id; ?>" class="<?php echo $className; ?>">

    <div class="accordion-sidebar">
      <ul class="accordion-list">
        <?php while ( have_rows('accordion_tabs') ) : the_row(); 
        $row_id++; ?>
          <li>
            <label class="accordion-sidebar-link" for="<?php echo 'accordion' . __($row_id); ?>"><?php the_sub_field('title'); ?></label>
          </li>
        <?php endwhile;  ?>
      </ul>
    </div>

  <div class="accordion-contents">

  <?php $row_id = 0;
  while ( have_rows('accordion_tabs') ) : the_row(); 
  $row_id++; ?>

    <div class="wrap-collapsible">
      <input id="<?php echo 'accordion' . __($row_id); ?>" class="accordion-trigger" type="checkbox">
      <label for="<?php echo 'accordion' . __($row_id); ?>" class="lbl-toggle"><span class="accordion-title"><?php the_sub_field('title'); ?></span></label>
      <div class="accordion-panel">
        <h2><?php the_sub_field('subtitle'); ?></h2>
        <?php the_sub_field('copy'); ?>
      </div>
    </div>
  
  <?php endwhile; ?>


  </div>

  </div>

<?php endif; ?>