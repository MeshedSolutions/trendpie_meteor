Template.payoutReportItem.helpers({
  influencers: function(){
    return Meteor.users.find();
  }
});