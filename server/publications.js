Meteor.publish('campaigns', function(){
	return Campaigns.find();
});