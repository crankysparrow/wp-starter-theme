<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package sparrow_starter
 */

get_header();
?>

	<main id="primary" class="content-area page-template">

		<?php
		while ( have_posts() ) :
			the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<?php the_content(); ?>

				</article><!-- #post-<?php the_ID(); ?> -->


			<!-- get_template_part( 'template-parts/content', 'page' ); -->


		<?php endwhile; // End of the loop.
		?>

	</main><!-- #primary -->

<?php
// get_sidebar();
get_footer();
