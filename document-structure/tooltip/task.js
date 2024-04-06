const tooltipElements = Array.from(document.getElementsByClassName("has-tooltip"));
let activeIndex;

tooltipElements.forEach((el, index) => {
  let tooltip = document.createElement("div");
  let tooltipText = el.getAttribute("title");
  
  tooltip.classList.add("tooltip");
  tooltip.textContent = tooltipText;
  
  el.insertAdjacentHTML('afterEnd', tooltip.outerHTML);

  el.addEventListener("click", (event) => {
    event.preventDefault();
    let position = el.getBoundingClientRect();
    
    if ((activeIndex != undefined) && (activeIndex != index)) {
      tooltipElements[activeIndex].nextSibling.classList.remove("tooltip_active");
    }
    
    el.nextSibling.setAttribute("style", `position: absolute; left: ${position.left}px`);
    el.nextSibling.classList.toggle("tooltip_active");
    activeIndex = index;
  })
})