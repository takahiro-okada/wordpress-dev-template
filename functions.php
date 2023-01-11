<?php

//theme set up
function my_setup()
{
  add_theme_support('post-thumbnails');
  add_theme_support('automatic-feed-links');
  add_theme_support('title-tag');
  add_theme_support(
    'html5',
    array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    )
  );
}
add_action('after_setup_theme', 'my_setup');

//load CSS files
function add_styles()
{
  wp_enqueue_style('style', get_template_directory_uri() . '/dist/css/style.css', array(), "1.0", false);
}
add_action('wp_enqueue_scripts', 'add_styles');

//load JS files
function add_script()
{
  wp_enqueue_script('main', get_template_directory_uri() . '/dist/js/main.js', array("jquery"), "1.0", true);
}
add_action('wp_enqueue_scripts', 'add_script');
