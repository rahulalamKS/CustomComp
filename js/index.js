window.onload = function() {
    var input = document.querySelector(".badges");
    input.addEventListener("keyup", function(keyCodeNum) {
        if ((keyCodeNum.keyCode == 13) && (input.value)) {
            var ul = document.querySelector(".resultCont")
            ul.style.paddingTop = "20px";
            var li = document.createElement("li");
            var valueCont = document.createElement("span");
            var img = document.createElement("img");
            var imgCont = document.createElement("span");
            img.src = "../images & Icons/cross.svg"
            var values = document.createTextNode(input.value)
            ul.append(li);
            li.append(valueCont, imgCont);
            imgCont.append(values, img);
            valueCont.append(values);
            li.setAttribute("class", "list")
            imgCont.setAttribute("class", "removeSearch")
            valueCont.setAttribute("class", "values")
            input.value = null;
            imgCont.addEventListener("click", function() {
                this.parentNode.remove();
                if (!ul.hasChildNodes()) {
                    ul.style.paddingTop = "0px";
                }
            })
        }
    });
    // For input badges (End)


    // For uploading file
    var clickFile = document.querySelector(".file-choose");
    var inputFile = document.querySelector(".input-file");
    clickFile.addEventListener("click", function() {
        inputFile.click();
    });
    inputFile.addEventListener("change", function() {
        if (inputFile.value) {
            var ul = document.querySelector(".fileN")
            ul.style.paddingTop = "20px";
            var li = document.createElement("li");
            var valueCont = document.createElement("span");
            var img = document.createElement("img");
            var imgCont = document.createElement("span");
            img.src = "../images & Icons/cross.svg"
            var values = document.createTextNode(inputFile.value.substring(12));
            ul.append(li);
            li.append(valueCont, imgCont);
            imgCont.append(values, img);
            valueCont.append(values);
            li.setAttribute("class", "list")
            imgCont.setAttribute("class", "removeSearch")
            valueCont.setAttribute("class", "values")
            input.value = null;
            imgCont.addEventListener("click", function() {
                this.parentNode.remove();
                if (!ul.hasChildNodes()) {
                    ul.style.paddingTop = "0px";
                } else {

                }
            })
        }
    });
    // For uploading file (End)


    // onclick open the selectBox dropdown
    document.querySelector(".inputBadgeCont").addEventListener("click", function() {
        document.querySelector(".dropdownsSelect").classList.toggle("selectOpen");
        document.querySelector(".aeroIcon").classList.toggle("rotate");
    });
    // onclick open the selectBox dropdown (End)


    // For custom selectBox, trying to get the options and inner text
    document.querySelectorAll('.options').forEach(function(targeting) {
        targeting.addEventListener("click", function() {
            var selected = document.querySelector(".selected");
            if (selected) {
                selected.classList.remove("selected");
            }
            this.classList.add("selected");
            document.querySelector(".texts").innerText = this.innerText;
            document.querySelector(".dropdownsSelect").classList.remove("selectOpen");
            document.querySelector(".aeroIcon").classList.remove("rotate");
            console.log(targeting.innerText.substring(1));
        });
    });
    // For custom selectBox, trying to get the options and inner text (End)


    // Custom Dropdown
    document.querySelectorAll(".dropText").forEach(function(clickEle) {
        clickEle.addEventListener("click", function(currentTarget) {
            currentTarget.stopPropagation();
            var selected = document.querySelector(".selectedMenu");
            this.parentNode.classList.toggle("selectedMenu")
            if (selected) {
                selected.classList.remove("selectedMenu");
            }
            console.log("clicked");
        })
    })

    window.addEventListener("click", function() {
            document.querySelectorAll(".dropCont").forEach(function(removeDrop) {
                if (removeDrop.className == "dropCont selectedMenu") {
                    removeDrop.className = "dropCont";
                }
            })
        })
        // Custom Dropdown (End)


    // OTP Input
    document.querySelectorAll(".otSc").forEach(function(otpEl) {
        otpEl.addEventListener("keyup", backSp);
        otpEl.addEventListener("keypress", function() {
            var nexEl = this.nextElementSibling;
            if (!nexEl) {
                // this.value = " ";
                return;
            }
            nexEl.focus();
        })
    })

    function backSp(backKey) {
        if (backKey.keyCode == 8) {
            var prev = this.previousElementSibling.focus()
        }
    }
    // OTP Input (End)
}