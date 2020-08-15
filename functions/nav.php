<?php 
register_nav_menus( array(
  'nav-top'		=> esc_html__('Top Nav Menu', 'commonwealth')
) );

add_filter('walker_nav_menu_start_el', 'add_arrow', 10, 4);
function add_arrow( $output, $item, $depth, $args ) {
  if ($item->menu_item_parent != 0) {
    $output = substr_replace($output, 'class="sub-menu-item" ', stripos($output, '<a') + 3 , 0);
  }
  if (in_array('menu-item-has-children', $item->classes)) {
    $name = 'sub-menu-toggle-' . $item->ID;
    $list = 'sub-menu-' . $item->ID;
    $title = $item->post_title;
    $output .='<button class="sub-menu-toggle" aria-label="Toggle '.$title.' Sub Menu" aria-expanded="false" aria-controls="'.$list.'" ></button>';
  }
  return $output;
}