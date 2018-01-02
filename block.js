/**
 * Static Block Example
 *
 * https://github.com/modularwp/gutenberg-block-static-example
 */
( function() {
	var __ = wp.i18n.__; // The __() function for internationalization.
	var createElement = wp.element.createElement; // The wp.element.createElement() function to create elements.
	var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() function to register blocks.

	/**
	 * Register block
	 *
	 * @param  {string}   name     Block name.
	 * @param  {Object}   settings Block settings.
	 * @return {?WPBlock}          Block itself, if registered successfully,
	 *                             otherwise "undefined".
	 */
	registerBlockType(
		'mdlr/static-block-example', // Block name. Must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
		{
			title: __( 'Static Block Example' ), // Block title. __() function allows for internationalization.
			icon: 'lock', // Block icon from Dashicons. https://developer.wordpress.org/resource/dashicons/.
			category: 'common', // Block category. Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.

			// Defines the block within the editor.
			edit: function( props ) {
				return createElement(
					'p', // Tag type.
					{
						className: props.className,  // Class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
					},
					'Static block example.' // Block content
				);
			},

			// Defines the saved block.
			save: function( props ) {
				return createElement(
					'p', // Tag type.
					{
						className: props.className,  // Class name is generated using the block's name prefixed with wp-block-, replacing the / namespace separator with a single -.
					},
					'Static block example.' // Block content
				);
			},
		}
	);
})();
