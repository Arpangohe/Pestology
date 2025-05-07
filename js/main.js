document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector(".mobile-toggle")
  const navList = document.querySelector(".nav-list")

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      navList.classList.toggle("active")
      this.classList.toggle("active")
    })
  }

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")

  if (testimonials.length > 0 && prevBtn && nextBtn) {
    let currentIndex = 0

    // Hide all testimonials except the first one
    testimonials.forEach((testimonial, index) => {
      if (index !== 0) {
        testimonial.style.display = "none"
      }
    })

    // Show next testimonial
    nextBtn.addEventListener("click", () => {
      testimonials[currentIndex].style.display = "none"
      currentIndex = (currentIndex + 1) % testimonials.length
      testimonials[currentIndex].style.display = "block"
    })

    // Show previous testimonial
    prevBtn.addEventListener("click", () => {
      testimonials[currentIndex].style.display = "none"
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length
      testimonials[currentIndex].style.display = "block"
    })
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item")

  if (faqItems.length > 0) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")

      question.addEventListener("click", () => {
        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active")
            const otherIcon = otherItem.querySelector(".faq-toggle i")
            if (otherIcon.classList.contains("fa-minus")) {
              otherIcon.classList.remove("fa-minus")
              otherIcon.classList.add("fa-plus")
            }
          }
        })

        // Toggle current FAQ item
        item.classList.toggle("active")

        // Change icon
        const icon = item.querySelector(".faq-toggle i")
        if (item.classList.contains("active")) {
          icon.classList.remove("fa-plus")
          icon.classList.add("fa-minus")
        } else {
          icon.classList.remove("fa-minus")
          icon.classList.add("fa-plus")
        }
      })
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Footer Contact Form
  const footerForm = document.getElementById("footer-contact-form")

  if (footerForm) {
    footerForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Simple form validation
      const name = this.querySelector("#footer-name").value
      const email = this.querySelector("#footer-email").value
      const subject = this.querySelector("#footer-subject").value
      const message = this.querySelector("#footer-message").value

      if (name && email && subject && message) {
        // In a real application, you would send this data to a server
        alert("Thank you for your message! We will get back to you soon.")
        this.reset()
      } else {
        alert("Please fill in all fields.")
      }
    })
  }
})

    // iconss msgss

    const mainIcon = document.getElementById("main-icon");
  const msgIcon = document.getElementById("msg-icon");
  const phoneIcon = document.getElementById("phone-icon");

  let isOpen = false;

  mainIcon.addEventListener("click", () => {
    isOpen = !isOpen;
    msgIcon.classList.toggle("show", isOpen);
    phoneIcon.classList.toggle("show", isOpen);
  });

  // htmp popup
  const popupOverlay = document.getElementById("popupOverlay");
    const popupBox = document.getElementById("popupBox");

    function showPopup() {
      popupOverlay.classList.add("active");
    }

    function closePopup() {
      popupOverlay.classList.remove("active");
    }

    function navigateToService(service) {
      console.log("Navigating to service:", service);
      closePopup();
    }

    function navigateToContact() {
      console.log("Navigating to contact page");
      closePopup();
    }

    window.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        showPopup();
        setTimeout(() => {
          closePopup();
        }, 10000); // Auto close after 10 sec
      }, 1000); // Show after 1 sec
    });

    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closePopup();
      }
    });
// ---------------------------------------

// language translate
const translations = {
  en: {
    
      
  },
  hi:{
    home: "होम",
    about: "हमारे बारे में",
    services: "सेवाएं",
    contact: "संपर्क करें",
    get_quote: "कोट प्राप्त करें",
    hero_title: "अनुभवी सुविधा समाधान",
    hero_desc: "कीट प्रबंधन से लेकर स्वच्छता समाधान तक, हम आपके रोजमर्रा की समस्याओं के लिए परेशानी मुक्त समाधान प्रदान करते हैं।",
    our_services:"हमारी सेवाएं",
    get_quote: "कोट प्राप्त करें",
    welcome_heading:"The Pestology में आपका स्वागत है",
    welcome_sub:"समग्र सुविधा समाधान हेतु आपका भरोसेमंद और पेशेवर साझेदार",
    who_we_are:"हम कौन हैं?",
    sub_text_p:"हम एक बहुपरकारी समाधान कंपनी हैं, जिसे 2022 में जीवन को आसान बनाने के लिए शुरू किया गया। हम कीट प्रबंधन से लेकर स्वच्छता समाधान तक, रोज़मर्रा की समस्याओं के लिए आसान और प्रभावी समाधान प्रदान करते हैं। हमारी सेवाएं बेहतरीन गुणवत्ता वाले उत्पादों और निर्बाध सेवाओं के माध्यम से प्रदान की जाती हैं, ताकि आपका जीवन सहज और परेशानी मुक्त हो सके।",
    sub_text_p1:"भोपाल, मध्य प्रदेश में स्थित, हम अपने पेशेवर सेवाओं के जरिए आवासीय घरों, व्यवसायिक कार्यालयों, स्कूलों, रेस्तरां, कारखानों और अन्य स्थानों पर उच्च गुणवत्ता वाली सेवाएं प्रदान करते हैं।",
    ISO:"ISO 9001:2015 प्रमाणित",
    PI:"हमारी टीम",
    learn_more: "हमारे बारे में और जानें",
    // services-----------
    our_services:"हमारी सेवाएं",
    srv_sub:"आपकी सभी ज़रूरतों के लिए व्यापक सुविधा समाधान",
    pch:"कीट नियंत्रण",
    pcp:"आपके स्थान को कीट-मुक्त रखने के लिए प्रभावी कीट प्रबंधन समाधान।",
     // Sanitization-----------------
     snh:"सैनिटाइजेशन",
     snp:"हाइजीन बनाए रखने और संक्रमण से बचाव के लिए प्रोफेशनल सैनिटाइजेशन सेवाएं।",
     // Traders
    trh:"विशेषज्ञ व्यापारी",
    trp:"आपकी सभी सुविधा प्रबंधन आवश्यकताओं के लिए उच्च गुणवत्ता वाले उत्पाद और सामग्री।",
    // water
    wph:"जलरोधक समाधान",
    wpp:"आपकी संपत्ति को जल क्षति से सुरक्षित रखने के लिए सर्वोत्तम जलरोधक समाधान।",
    // Warehouse
    wwh:"गोदाम",
    wwp:"व्यापक गोदाम प्रबंधन और कीट नियंत्रण समाधान।",
    // ---------------------------------
    view_all_services: "सभी सेवाएं देखें",
    
    sws:"हम जिन क्षेत्रों में अपनी सेवाएं प्रदान करते हैं",
    sectors_sub: "विभिन्न उद्योगों में समाधान प्रदान करना",
    // ----------------------------------------
    such:"विद्यालय एवं विश्वविद्यालय परिसर",
    csh:"निर्माण स्थल",
    rhh:"आवासीय क्षेत्र",
    coh:"व्यावसायिक कार्यालय",
    rh:"भोजन सेवा प्रतिष्ठान",
    fh:"कारख़ाना",
    // -----------------------------------
    wocsh:"हमारे ग्राहकों के विचार",
    wocsp:"हमारे संतुष्ट ग्राहकों के अनुभव जानें",
    cp:"Pestology ने हमारे ऑफिस के लिए बहुत अच्छे कीट नियंत्रण सेवाएं दीं। उनकी टीम ने हमारी जगह को कीट-मुक्त रखा। हम इनकी सेवाओं की पूरी सिफारिश करते हैं!",
    cp1:"हम अपने रेस्टोरेंट के लिए The Pestology की सैनिटाइजेशन सेवाओं का उपयोग कर रहे हैं, और परिणाम अत्यंत उत्कृष्ट रहे हैं। उनकी बारीकी पर ध्यान देने की क्षमता और उच्च गुणवत्ता वाले उत्पादों का उपयोग हमें सर्वोच्च स्वच्छता मानकों को बनाए रखने में सहायक रहा है।",
    cp2:"The Pestology ने जो वॉटरप्रूफिंग की, उससे हमारी लीकेज की समस्या पूरी तरह ठीक हो गई। टीम ने बढ़िया और समय पर काम किया। उनकी सेवा शानदार है।",
    cta:"क्या आप शुरू करने के लिए तैयार हैं?",
    ctap:"आज ही हमसे संपर्क करें और मुफ्त सलाह लें।",
    Contact_Us:"अभी हमसे संपर्क करें"
  }
}
    // index hinditranslate
    function changeLanguage(lang) {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
      localStorage.setItem("lang", lang);
      document.getElementById("language").value = lang;
    }
    
    document.addEventListener("DOMContentLoaded", () => {
      const savedLang = localStorage.getItem("lang") || "en";
      changeLanguage(savedLang);
    
    
      // if (savedLang === "en") {
      //   setTimeout(() => {
      //     const confirmHindi = confirm("This page is in English. Would you like to translate it to Hindi?");
      //     if (confirmHindi) {
      //       changeLanguage("hi");
      //     }
      //   }, 500); 
      // }
    });