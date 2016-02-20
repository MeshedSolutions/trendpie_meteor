Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'campaignCreate'
});

Router.route('/admin/currentCampaigns', {
  name: 'campaignAdminCurrent'
});

Router.route('/admin/completeCampaigns', {
  name: 'campaignAdminComplete'
});