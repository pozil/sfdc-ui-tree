({
	doInit : function(component, event, helper) {
        // Parse item
        var children = helper.parseItem(component);
        // Check if this is a node
        if (children.length > 0) {
            // Set default expand icon
            helper.changeIcon(component, "utility:chevrondown");
            // Check if we should collapse based on config and current level
            var config = component.get("v.config");
            var level = component.get("v.level");
            if (level >= config.expandLevel)
                helper.toggleNodeExpand(component);
        }
	},
    
    onToggleExpand : function(component, event, helper) {
        helper.toggleNodeExpand(component);
        // Prevent accidental node selection
        event.stopPropagation();
	},
    
    onSelectNode : function(component, event, helper) {
        var config = component.get("v.config");
        // Check if selection is allowed
        if (!config.isSelectable)
            return;
        // Check if node selection is allowed
        var children = component.get("v.children");
        if (children.length > 0 && !config.isNodeSelectionEnabled)
	        return;
        // Select element
        var selectionEvent = component.getEvent("treeSelectionEvent");
        selectionEvent.setParams({"selection": component.get('v.item')});
        selectionEvent.fire();
	}
})