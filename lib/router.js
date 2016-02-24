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
Router.route('/admin/completeCampaigns', { name: 'campaignAdminComplete'});

Router.route('/dashboard', { name: 'dashboard' });

Router.route('/campaigns', {name: 'campaignPending'});
Router.route('/campaigns/live', { name: 'campaignLive'});
Router.route('/campaigns/complete', {name: 'campaignInfluencerComplete'});

Router.route('/wallet', {name: 'wallet'});
Router.route('/profile', {name: 'profile'});
Router.route('/social', {name: 'social'});

Router.route('/login', { name: 'login' });
Router.route('/forgotPassword', { name: 'forgotPassword' });
Router.route('/register', { name: 'register' });

Router.route('/influencers/active', { name: 'influencersAllActive'});
Router.route('/influencers/pending', { name: 'influencersPending'});