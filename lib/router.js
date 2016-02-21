Router.configure({
	layoutTemplate: 'layout',
	waitOn: function(){
		return Meteor.subscribe('campaigns');
	}
});

Router.route('/', {
	name: 'campaignCreate'
});

Router.route('/admin/currentCampaigns', {
  name: 'campaignAdminCurrent',
  data: function() {
  	return Campaigns.find();
  }
});

Router.route('/admin/completeCampaigns', {
  name: 'campaignAdminComplete'
});

Router.route('/liveCampaigns', {
  name: 'campaignLiveList'
});

Router.route('/dashboard', { name: 'dashboard' });
Router.route('/login', { name: 'login' });
Router.route('/forgotPassword', { name: 'forgotPassword' });
Router.route('/register', { name: 'register' });