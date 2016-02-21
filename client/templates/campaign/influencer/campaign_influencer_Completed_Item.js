Template.campaignInfluencerCompletedItem.helpers({
  MonthAbbreviation: function(month) {
    var abbreviation;

    switch (month){
      case 1:
        abbreviation = "Jan";
        break;
      case 2:
        abbreviation = "Feb";
        break;
      case 3:
        abbreviation = "Mar";
        break;
      case 4:
        abbreviation = "Apr";
        break;
      case 5:
        abbreviation = "May";
        break;
      case 6:
        abbreviation = "Jun";
        break;
      case 7:
        abbreviation = "Jul";
        break;
      case 8:
        abbreviation = "Aug";
        break;
      case 9:
        abbreviation = "Sep";
        break;
      case 10:
        abbreviation = "Oct";
        break;
      case 11:
        abbreviation = "Nov";
        break;
      case 12:
        abbreviation = "Dec";
        break;
    }

    return abbreviation;
  }
});