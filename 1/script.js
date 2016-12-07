var person = prompt("Please enter your name", "Valera");
  if (person != null) {
    var time = prompt("Please enter time", "17:00");
    if (time != null) {
      var place = prompt("Please enter place", "Warsaw");
      if (place != null) {
        var even = prompt("Please enter place", "meeting");
        if (even != null) {
          console.log("%s has a %s today at %s somewhere in %s",person, even, time, place);
      }
    }
  }
}
