<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package sparrow_starter
 */

get_header();
?>

	<div id="primary" class="template-single">
		<main id="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

					<?php if (has_post_thumbnail()) : ?>
						<div class="post-thumbnail">
							<?php the_post_thumbnail('full'); ?>
						</div>
					<?php endif; ?>	

					<div class="post-content">
						<h1><?php the_title(); ?></h1>

						<div class="date h5">
							<?php the_date(); ?>
						</div>

						<div class="categories">
							<?php $cats = get_the_category();
								foreach ($cats as $cat) : ?>
									<span class="category"><?php echo $cat->cat_name ?></span>
								<?php endforeach; ?>
						</div>

						<?php the_content(); ?>
					</div>

				</article>		

			<?php endwhile; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
