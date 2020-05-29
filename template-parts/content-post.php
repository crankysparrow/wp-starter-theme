<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sparrow_starter
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		<?php
		if ( is_singular() ) :
			the_title( '<h1 class="entry-title">', '</h1>' );
		else :
			the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		endif;
		
		?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php 
		
		if ( !is_singular() ) : 
			the_date();
			the_excerpt();
				
			?>
			<a class="read-more" href="<?php the_permalink(); ?>">Read More</a>

		<?php else : 
			the_content(); 
		endif; ?>

	</div><!-- .entry-content -->

</article><!-- #post-<?php the_ID(); ?> -->
