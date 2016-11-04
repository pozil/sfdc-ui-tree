({    
    parseItem : function(component) {
        var config = component.get("v.config");
        var item = component.get("v.item");
        
        var label;
        var children = [];
        
        if (typeof item === 'string')
            label = item;
        else if (Array.isArray(item) && item.length > 0) {
            label = this.getLabelFromArray(item);
            children = item;
        }
        else if (typeof item === 'object') {
            label = this.getLabelFromObject(item, config.labelProperties);
            children = this.getChildrenFromObject(item, config.expandProperties);
        }
        else
            throw "Unknown node type: "+ typeof item;
        
        component.set("v.label", label);
        component.set("v.children", children);
        return children;
    },
    
    getLabelFromArray : function(item) {
        if (item.length == 1)
            return "List of one item";
        return "List of "+ item.length +" items";
    },
    
    getLabelFromObject : function(item, labelProperties) {
        var label = null;
        for (var i=0; label == null && i<labelProperties.length; i++) {
            var value = item[labelProperties[i]];
            if (value !== undefined && typeof value === 'string')
                label = value;
        }
        return (label == null) ? 'Undefined label' : label;
	},
    
    getChildrenFromObject : function(item, expandProperties) {
        var children = null;
        for (var i=0; children == null && i<expandProperties.length; i++) {
            var value = item[expandProperties[i]];
            if (value !== undefined)
                children = value;
        }
        return (children == null) ? [] : children;
	},
    
    toggleNodeExpand : function(component) {
        var toggleExpandIcon = component.get("v.toggleExpandIcon");
        var subTree = component.find('subTree');
        if (toggleExpandIcon == "utility:chevrondown") {
            $A.util.addClass(subTree, 'collapsed');
            this.changeIcon(component, "utility:chevronright");
        }
        else {
			$A.util.removeClass(subTree, 'collapsed');
            this.changeIcon(component, "utility:chevrondown");
        }
    },
    
    changeIcon : function(component, svgIcon) {
        component.set("v.toggleExpandIcon", svgIcon);
    }
})