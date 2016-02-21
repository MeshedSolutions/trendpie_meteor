Template.campaignCreate.events({
  'submit form': function(e) {
    e.preventDefault();

    var campaign = {
      client: $(e.target).find('[name=client]').val(),
      name: $(e.target).find('[name=name]').val(),
      type: $(e.target).find('[name=type]').val(),
      affiliateLink: $(e.target).find('[name=affiliateLink]').val(),
      startDay: $(e.target).find('[name=startDay]').val(),
      startMonth: $(e.target).find('[name=startMonth]').val(),
      startYear: $(e.target).find('[name=startYear]').val(),
      endDay: $(e.target).find('[name=endDay]').val(),
      endMonth: $(e.target).find('[name=endMonth]').val(),
      endYear: $(e.target).find('[name=endYear]').val(),
      budget: $(e.target).find('[name=budget]').val(),
      image: $(e.target).find('[name=image]').val(),
      active: $(e.target).find('[name=active]').val()
    };

    Meteor.call('campaignInsert', campaign, function(error, result){
      Router.go('campaignAdminCurrent');
    });
  }
});