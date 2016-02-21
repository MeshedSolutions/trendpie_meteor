Template.campaignAdminCurrentItem.helpers({
	ActiveText: function(active) {
		if(active == 1)
			return 'Active';
		else
			return 'Inactive';
	},
	Date: function(day, month, year){
		return month + '/' + day + '/' + year;
	}
});