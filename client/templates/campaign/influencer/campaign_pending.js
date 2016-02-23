Template.campaignPending.helpers({
  campaigns: function() {
    return Campaigns.find();
  }
});