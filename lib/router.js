Router.configure({
  layoutTemplate: 'loginLayout'
});

Router.route('/', { name: 'login', layoutTemplate: 'loginLayout'});
Router.route('/register', { name: 'register', layoutTemplate: 'loginLayout' });
Router.route('/forgotPassword', { name: 'forgotPassword', layoutTemplate: 'loginLayout' });

Router.configure({
	layoutTemplate: 'layout',
	waitOn: function(){
		return [
      Meteor.subscribe('campaigns'),
      Meteor.subscribe('socialMediaAccounts'),
      Meteor.subscribe('adminUsers')
    ];
	}
});


Router.route('/campaignCreate', {
	name: 'campaignCreate'
});
Router.route('/admin/currentCampaigns', {
  name: 'campaignAdminCurrent',
  data: function() {
  	return Campaigns.find();
  }
});

Router.route('/admin/completeCampaigns', { name: 'campaignAdminComplete'});
Router.route('/admin/payoutReport', { name: 'payoutReport'});

Router.route('/dashboard', { name: 'dashboard' });

Router.route('/campaigns', {name: 'campaignPending'});
Router.route('/campaigns/live', { name: 'campaignLive'});
Router.route('/campaigns/complete', {name: 'campaignInfluencerComplete'});

Router.route('/wallet', {name: 'wallet'});
Router.route('/profile', {name: 'profile'});
Router.route('/social', {name: 'social'});

Router.route('/influencers/active', { name: 'influencersAllActive'});
Router.route('/influencers/pending', { name: 'influencersPending'});