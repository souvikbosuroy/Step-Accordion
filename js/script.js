let accordionTabs = document.querySelectorAll(".accordion_box_wrapper");

accordionTabs.forEach((accTab) => {
    let accordionBtnExp = accTab.querySelector(".expand");
    let accordionBtnCls = accTab.querySelector(".close");
    let accordionContent = accTab.querySelector(".accordion_description");
    let stepCount = accTab.querySelector(".step_count");

    if (accordionBtnExp) {
        accordionBtnExp.addEventListener("click", () => {
            accordionContent.classList.add("open_content");
            accordionBtnCls.classList.add("reverse_btn");
            accordionBtnExp.classList.add("remove_expand");
            stepCount.classList.add("change_color");
        });
    }

    if (accordionBtnCls) {
        accordionBtnCls.addEventListener("click", () => {
            accordionContent.classList.remove("open_content");
            accordionBtnCls.classList.remove("reverse_btn");
            accordionBtnExp.classList.remove("remove_expand");
            stepCount.classList.remove("change_color");
        });
    }
});
