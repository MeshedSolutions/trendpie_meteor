Template.register.events ({
  'submit form': function(e){
    e.preventDefault();

    var email = $(e.target).find('[name=email]').val();
    var password = $(e.target).find('[name=password]').val();
    var confirmPassword = $(e.target).find('[name=confirmPassword]').val();

    var profile = {
      firstName: $(e.target).find('[name=firstName]').val(),
      lastName: $(e.target).find('[name=lastName]').val(),
      dob: $(e.target).find('[name=dob]').val(),
      payPalEmail: $(e.target).find('[name=payPalEmail]').val(),
      address1: $(e.target).find('[name=address1]').val(),
      address2: $(e.target).find('[name=address2]').val(),
      country: $(e.target).find('[name=country]').val(),
      state: $(e.target).find('[name=state]').val(),
      zip: $(e.target).find('[name=zip]').val(),
      gender: $(e.target).find('[name=gender]').val(),
      preferredContact: $(e.target).find('[name=preferredContact]').val(),
      amountPerCampaign: '0'
    };

    if(password != confirmPassword){
      // Handle error
      return;
    }

    Accounts.createUser({
      email: email,
      password: password,
      profile: profile
    }, function(error){
      if(error){
        // Handle error
      } else {
        Router.go('dashboard');
      }
    });
  }
});