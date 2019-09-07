/**
 * oLpY DrawIO PlugIns LAB FIRST plugin.
 */
Draw.loadPlugin(function(ui)
{
	// Adds resource for action
	mxResources.parse('myFIRST_LAB_PlugIn=myFIRST_LAB_PlugIn...');

	// Adds action
	ui.actions.addAction('myFIRST_LAB_PlugIn', function()

	// Adds action
	ui.actions.addAction('extractText', function()
	{
		var dlg = new EmbedDialog(ui, ui.editor.graph.getIndexableText(),
			null, null, null, 'Extracted Text by myFIRST_LAB_PlugIn:');
		ui.showDialog(dlg.container, 440, 240, true, true);
		dlg.init();
	});
	
	var menu = ui.menus.get('extras');
	var oldFunct = menu.funct;
	
	menu.funct = function(menu, parent)
	{
		oldFunct.apply(this, arguments);
		
		ui.menus.addMenuItems(menu, ['-', 'myFIRST_LAB_PlugIn'], parent);
	};
});