/**
 * Example Block One
 *
 * https://github.com/modularwp/gutenberg-example-block-one
 */
( function() {
	var __ = wp.i18n.__; // The __() for internationalization.
	var el = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.

	/**
	 * Register block
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          Block itself, if registered successfully,
	 *                             otherwise "undefined".
	 */
	registerBlockType(
		'mdlr/example-block-one', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		{
			title: __( 'Example Block One', 'mdlr_textdomain' ), // Block title. __() function allows for internationalization.
			icon: 'carrot', // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/.
			category: 'common', // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

			// Defines the block withing the editor.
			edit: function() {
				return el(
					'p', // Tag type.
					{ className: 'wp-block-mdlr-example-block-one' }, // The class="wp-block-gb-01-basic" : The class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
					'Example Block One'
				);
			},

			// Defines the saved block.
			save: function() {
				return el(
					'p', // Tag type.
					{ className: 'wp-block-mdlr-example-block-one' }, // The class="wp-block-gb-01-basic" : The class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
					'Example Block One'
				);
			},
		}
	);
})();
