const accordionBtn = document.querySelectorAll(".accordion");

accordionBtn.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("is-open");

        let accordion_content = this.nextElementSibling;
        console.log(accordion_content);

        if (accordion_content.style.maxHeight) {
            //this is if the accordion is open
            accordion_content.style.maxHeight = null;
        } else {
            //if the accordion is currently closed
            accordion_content.style.maxHeight = accordion_content.scrollHeight + "px";
            console.log(accordion_content.style.maxHeight);
        }
    };
});