(function () {                //hier wird die Zeit definiert millisec=sec=min usw
  const second = 1000,        // verwandelt millisecunden in sekuden
        minute = second * 60, // verwandelt Sekunden in Minuten
        hour = minute * 60,   // verwandelt minuten in Stunden
        day = hour * 24;      // verwandelt Stunden in Minuten

//Ich füge diesen Abschnitt hinzu, damit ich diesen teil nicht jedes Jahr aktualisieren muss :-)
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),      //definiert die Tages ausgabe als String
      mm = String(today.getMonth() + 1).padStart(2, "0"), //definiert die Monats ausgabe als String
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,    //zählt wen ein neues Jahr erreicht wird eines dazu
      dayMonth = "12/08/",    // definiert die Monats und Tages Anzeige
      exactTime = " 16:15:00" //definiert die genaue Uhrzeit
      Finalday = dayMonth + yyyy + exactTime; //definiert die Ausgabe
  
  today = mm + "/" + dd + "/" + yyyy; //definiert den wert Tag
  if (today > Finalday) {             // sagt sit der Tag keiner als der Finale Tag
    Finalday = dayMonth ;             // der Finale Tag ist gleich tagMonat
  }
//hier wird das datum generiert
  const countDown = new Date(Finalday).getTime(), // Konstante countdown gleich neues Datum definiert durch Finalday
      x = setInterval(function() {                // x ist das ste Intervall der Funktion

        const now = new Date().getTime(),         // Konstante now ist neues Datum definiert durch die Zeit des Computers
              distance = countDown - now;         //distance ist Countdown minus Now

          document.getElementById("days").innerText = Math.floor(distance / (day)),                  //berechnet den Tag
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),      //berechnet den Stunde
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)), //berechnet die minute
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second); //berechnet die Sekunden

// etwas später tun, wenn das Datum erreicht ist
        if (distance < 30) {                                                          
          document.getElementById("headline").innerText = "Ende der Aufgabe!!!"; //giebt den Text Ende der A... aus
          document.getElementById("countdown").style.display = "none";           //sagt wie der Countdown ausgegeben wird
          document.getElementById("content").style.display = "block";            //sagt wie der contend ausgegeben wird
          clearInterval(x);
        }
//seconds
      },0)
  }());
  
