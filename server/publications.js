Meteor.publish('campaigns', function(){
	return Campaigns.find();
});

Meteor.publish('adminUsers', function(){
  return Meteor.users.find({}, {fields: {profile:1}});
});

Meteor.publish('socialMediaAccounts', function(){
  return SocialMediaAccounts.find();
});