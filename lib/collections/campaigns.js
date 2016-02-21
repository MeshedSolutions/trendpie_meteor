Campaigns = new Mongo.Collection('campaigns');

Meteor.methods({
	campaignInsert: function(campaignAttributes) {
		check(campaignAttributes, {
			client: String,
			name: String,
			type: String,
			affiliateLink: String,
			startDay: String,
			startMonth: String,
			startYear: String,
			endDay: String,
			endMonth: String,
			endYear: String,
			budget: String,
			image: String,
			active: String
		});

		var campaign = _.extend(campaignAttributes, {
			created: new Date(),
			status: 'live'
		});

		var campaignId = Campaigns.insert(campaign);

		return {
			_id: campaignId
		};
	}
});