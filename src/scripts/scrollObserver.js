let classToAnimate;
const animate = (classToObserve) => {
  const elementList = document.querySelectorAll(classToObserve);
  elementList.forEach((element) => {
    observer.observe(element);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    element.target.classList.toggle(classToAnimate, element.isIntersecting);
    // if (element.isIntersecting) {
    //   observer.unobserve();
    // }
  }, options);
});

const options = {
  root: null,
  // rootMargin: "150px 0px -200px 0px",
};

classToAnimate = "floatUp";
// WhyChooseUstSection
animate(".WhyChooseUstSection_title");
animate(".WhyChooseUstSection_content");
animate(".WhyChooseUstSectionCard");

// aboutUstSection
animate(".aboutUstSection_container");
animate(".aboutUstSection_title");
animate(".aboutUstSection_content");
animate(".aboutUstSection_nav");

// teamSection
animate(".teamSection_title");
animate(".teamSection_content");
animate(".teamSectionCard");

// FAQSection
animate(".faqSection_title");
animate(".faqSection_content");
animate(".faqSections");
animate(".question_section");
animate(".question");
 
// ContactSection
animate(".contactUs_title");
animate(".contactUs_content");
animate(".contactCard");
animate(".form-control");
animate(".form-control-textArea");
animate(".btn_row");

// footerSection
animate(".footerSection .column > *");

