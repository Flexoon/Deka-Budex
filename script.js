const scrollToTop = () => {
  window.onbeforeunload = function() {
    window.scrollTo(0, 0);
  };
};

scrollToTop();
