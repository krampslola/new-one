var allIndex = this.rows.indexOf(row),
		activeIndex = this.activeRows.indexOf(row);
		
		if(activeIndex > -1){
			this.activeRows.splice(activeIndex, 1);
		}
		
		if(allIndex > -1){
			this.rows.splice(allIndex, 1);
		}
		if(displayIndex > -1){
				rows.splice(displayIndex, 1);
			}
		});
		
		if(!blockRedraw){
			this.reRenderInPosition();
		}
		if(this.subscribedExternal("dataChanged")){
			this.dispatchExternal("dataChanged", this.getData());
		}
	}
