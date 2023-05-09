        setInterval(time,1000)
        function time(){
        let ans = new Date()
        let hour = ans.getHours()
        let minute = ans.getMinutes()
        let sec = ans.getSeconds()

        const h = hour > 12 ? hour-12 : hour;

        const m = minute < 10 ? 0+""+minute : minute

        const mi = sec < 10 ? 0+""+sec : sec

        const last = hour >12 ? "PM" : "AM"

        time = h + ":" +  m + ":" + mi + " " +last
        document.getElementById("js").textContent=time
        }
        

