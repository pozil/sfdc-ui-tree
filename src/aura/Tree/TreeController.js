({
	doInit : function(component, event, helper) {
		// Validate config & set default values
		var config = component.get("v.config");
        if ($A.util.isUndefinedOrNull(config.labelProperties))
            config.labelProperties = ['Name'];
        if ($A.util.isUndefinedOrNull(config.expandProperties))
            config.expandProperties = [];
        if ($A.util.isUndefinedOrNull(config.expandLevel))
            config.expandLevel = 1;
        if ($A.util.isUndefinedOrNull(config.isSelectable))
            config.isSelectable = false;
        if ($A.util.isUndefinedOrNull(config.isNodeSelectionEnabled))
            config.isNodeSelectionEnabled = false;
        component.set("v.config", config);
	}
})