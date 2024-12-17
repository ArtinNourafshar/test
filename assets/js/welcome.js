// نمایش پیام خوش‌آمدگویی
showWelcomeMessage();

// نمایش پیام خوش‌آمدگویی
function showWelcomeMessage() {
  $("#welcome-message").fadeIn();
  
  setTimeout(function () {
    $("#welcome-message").fadeOut();
  }, 3000); // 3 ثانیه
  }