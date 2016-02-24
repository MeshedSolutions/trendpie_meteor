Meteor.publish('campaigns', function(){
	return Campaigns.find();
});

Meteor.publish('adminUsers', function(){
  return Users.find();
});