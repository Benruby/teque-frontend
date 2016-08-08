/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

 CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.contentsLanguage = 'en';
	config.extraAllowedContent = 'a[!href]'
    config.skin = 'minimalist';
// 	config.replace( 'codeSnippet_area', {
//     contentsLangDirection: 'rtl'
// } );
	// config.assets_plugins = ['widget', 'dialog', 'dialogui', 'lineutils', 'codesnippet']
	config.language = 'he';
	config.startupFocus = true;
	config.image_previewText = " ";

	CKEDITOR.on( 'dialogDefinition', function( ev ) {
		ev.data.definition.resizable = CKEDITOR.DIALOG_RESIZE_NONE;
    // Take the dialog name and its definition from the event data.
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    // Check if the definition is from the dialog window you are interested in (the "Link" dialog window).
    if ( dialogName == 'link' ) {
        // Get a reference to the "Link Info" tab.
        var infoTab = dialogDefinition.getContents( 'info' );
        dialogDefinition.removeContents( 'target' );
        dialogDefinition.removeContents( 'advanced' );
        infoTab.remove('protocol');
        infoTab.remove('browse');

        // Set the default value for the URL field.
        var urlField = infoTab.get( 'url' );
        urlField[ 'default' ] = '';

        var linkType = infoTab.get('linkType');
        linkType['default'] = 'url';
        linkType.style = 'display: none';
    }

    if (dialogName == 'image') {
    	dialogDefinition.removeContents( 'advanced' );
    	dialogDefinition.removeContents( 'Link' );

    	var field = dialogDefinition.getContents('info');
    	field.remove('txtAlt');
    	field.remove('browse');
    	field.remove('ratioLock');
    	field.remove('txtBorder');
    	field.remove('txtHSpace');
    	field.remove('txtVSpace');
    	field.remove('cmbAlign');



//     	CKEDITOR.dialog.definition.button
// CKEDITOR.dialog.definition.checkbox
// CKEDITOR.dialog.definition.fileButton
// CKEDITOR.dialog.definition.hbox
// CKEDITOR.dialog.definition.html
// CKEDITOR.dialog.definition.labeledElement
// CKEDITOR.dialog.definition.vbox
}
});

};
