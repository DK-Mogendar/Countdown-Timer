//hier wird die Zeit definiert millisec=sec=min usw

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
       

  //Ich füge diesen Abschnitt hinzu, damit ich diesen teil nicht jedes Jahr aktualisieren muss :-)
 
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "12/09/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //hier wird das datum generiert
  const countDown = new Date(birthday).getTime(),
      z = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        // etwas später tun, wenn das Datum erreicht ist
        if (distance < 0) {
          document.getElementById("headline").innerText = "Ende der Aufgabe!!!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());
  
