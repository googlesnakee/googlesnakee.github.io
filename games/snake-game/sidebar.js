const btn = document.getElementById('review');
            btn.addEventListener('click',()=>{
                let typeOfCSR = document.getElementById('typeOfCSR').value;
                let CN = document.getElementById('CN').value;
                let FQDN = document.getElementById('FQDN').value;
                let altName = document.getElementById('altName').value;
                let nameOfCert = document.getElementById('nameOfCert').value;

                document.getElementById('result').textContent =  typeOfCSR +" "+ nameOfCert +" "+ FQDN +" "+ altName +" "+ CN;
            });
            //****adding click events via addEventListener****
            const navopen = document.querySelector('button.openbtn');
            const navclose = document.querySelector('a.closebtn');
            navopen.addEventListener('click', openNav);
            navclose.addEventListener('click', closeNav);
            //****End new block****

            function allowAlphaNumericSpace(thisInput) {
      thisInput.value = thisInput.value.split(/[^a-zA-Z0-9 ]/).join('');
    }

    function openNav() {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "0px";
    }

    function closeNav() {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }