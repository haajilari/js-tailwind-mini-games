// انتخاب یک عدد تصادفی بین 1 تا 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// دریافت عناصر از HTML
const guessInputElement = document.getElementById("guessInput");
const messageElement = document.getElementById("message");

function checkGuess() {
  // دریافت حدس کاربر و تبدیل آن به عدد
  const userGuess = parseInt(guessInputElement.value);

  // بررسی اینکه آیا ورودی یک عدد معتبر است
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageElement.textContent = "لطفاً یک عدد بین ۱ تا ۱۰۰ وارد کن.";
    messageElement.className = "mt-6 text-xl font-semibold h-8 text-yellow-600";
    return;
  }

  attempts++;

  // مقایسه حدس کاربر با عدد تصادفی
  if (userGuess === randomNumber) {
    messageElement.textContent = `🎉 آفرین! تو در ${attempts} تلاش برنده شدی! 🎉`;
    messageElement.className = "mt-6 text-xl font-semibold h-8 text-green-600";
    guessInputElement.disabled = true; // غیرفعال کردن ورودی پس از برد
  } else if (userGuess > randomNumber) {
    messageElement.textContent = "عددت خیلی بزرگه! یه عدد کوچیک‌تر امتحان کن.";
    messageElement.className = "mt-6 text-xl font-semibold h-8 text-red-600";
  } else {
    messageElement.textContent = "عددت خیلی کوچیکه! یه عدد بزرگ‌تر امتحان کن.";
    messageElement.className = "mt-6 text-xl font-semibold h-8 text-red-600";
  }

  // پاک کردن ورودی برای حدس بعدی
  guessInputElement.value = "";
  guessInputElement.focus();
}

// اجازه دادن به کاربر برای ارسال حدس با کلید Enter
guessInputElement.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});
