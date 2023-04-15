
const from = document.getElementById("from");
        const to = document.getElementById("to");
        const seat = document.getElementById("seat");
        const sdate = document.getElementById("s-date");
        const way = document.querySelector('input [type="radio"]:checked');
        const phase2_enable = document.getElementById("enable-me");
        const r_from = document.getElementById("r_from");
        const r_to = document.getElementById("r_to");

        function display_offer() {
            if (from.value == "") {
                phase2_enable.style.display = "none";
                r_from.style.display = "flex";
            }
            else {
                phase2_enable.style.display = "block";
            }
            if (to.value == "") {
                phase2_enable.style.display = "none";
                r_to.style.display = "flex";
            } else {
                phase2_enable.style.display = "block";
            }
        }

        function hide() {
            if (from.value != "") {
                r_from.style.display = "none";
            } else {
                r_from.style.display = "flex";

            }
        }
        function hide1() {
            if (to.value != "") {
                r_to.style.display = "none";

            } else {
                r_to.style.display = "flex";

            }
        }


        function phase2_none(){
            phase2_enable.style.display = "none";
        }