<?php
/**
 * @package sparrow_starter
 */

get_header();
?>

	<main id="primary" class="content-area home-template">

    <div style="margin-top: 100px;">
      <h5>This is level 0</h5>    
      <h4>This is level 1</h4>
      <h3>This is level 2</h3>
      <h2>This is level 3</h2>
      <h1>This is level 4</h1>
    </div>

    <div>
      <p class="mst1">This is level 1</p>
      <p class="mst0">This is level 0</p>
      <p class="mst-1">This is level -1</p>
    </div>

    <?php if ( have_posts() ) : ?>

      <div class="blog-cards-container">

        <?php while ( have_posts() ) : 
          the_post(); ?>

          <article id="post-<?php the_ID(); ?>" <?php post_class('blog-card'); ?>>
            <?php if (has_post_thumbnail()) : ?>
              <div class="card-thumbnail">
                <?php the_post_thumbnail('medium_large'); ?>
              </div>
            <?php endif; ?>

            <div class="card-body">
              <h2 class="msh2 title">
                <?php the_title(); ?>
              </h2>

              <div class="date small">
                <?php the_date(); ?>
              </div>

              <div class="card-text">
                <?php the_excerpt(); ?>
              </div>

              <div class="read-more mst1">
                <a href="<?php the_permalink(); ?>">Read More</a>
              </div>
            </div>

          </article><!-- #post-<?php the_ID(); ?> -->

        <?php endwhile; ?>

      </div>

			<?php the_posts_navigation();

		else :

			get_template_part( 'template-parts/content', 'none' );

		endif; ?>

	</main><!-- #primary -->

<?php
// get_sidebar();
get_footer();
