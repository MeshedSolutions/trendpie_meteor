if(Campaigns.find().count() === 0){
  var now = new Date().getTime();

  // Create a user
  var markId = Meteor.users.insert({
    profile: {
      firstName: 'Mark',
      lastName: 'Brown',
      dob: '10/21/1980',
      payPalEmail: 'markbrown@meshedsolutions.com',
      address1: '283 Willow Green Dr',
      address2: '',
      country: 'United States',
      state: 'Florida',
      zip: '32073',
      gender: 'Male',
      preferredContact: 'Email'
    }
  });
  var mark = Meteor.users.findOne(markId);

  var disneyId = Campaigns.insert({
    client: 'Disney',
    name: 'Toon Town Promotion',
    type: 'standard',
    affiliateLink: '',
    startDay: '1',
    startMonth: '3',
    startYear: '2016',
    endDay: '1',
    endMonth: '3',
    endYear: '2016',
    budget: '2000',
    image: '',
    active: true,
    created: now,
    status: 'live'
  });

}  var aigId = Campaigns.insert({
  client: 'AIG',
  name: 'Fuck You Promotion',
  type: 'affiliate',
  affiliateLink: 'http://www.google.com',
  startDay: '1',
  startMonth: '3',
  startYear: '2016',
  endDay: '1',
  endMonth: '6',
  endYear: '2016',
  budget: '5000',
  image: '',
  active: true,
  created: now,
  status: 'live'
});