// دریافت عناصر از HTML
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const resultElement = document.getElementById("result");

// تابع اصلی برای انجام محاسبات
function calculate(operator) {
  // تبدیل مقادیر ورودی به عدد
  const num1 = parseFloat(number1Input.value);
  const num2 = parseFloat(number2Input.value);

  // بررسی اینکه آیا ورودی‌ها اعداد معتبر هستند
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "خطا";
    alert("لطفاً هر دو ورودی را با اعداد معتبر پر کنید.");
    return;
  }

  let result;

  // استفاده از اپراتورها برای محاسبه
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      resultElement.textContent = "خطا";
      alert("تقسیم بر صفر ممکن نیست!");
      return;
    }
    result = num1 / num2;
  }

  // نمایش نتیجه با حداکثر ۲ رقم اعشار
  resultElement.textContent = parseFloat(result.toFixed(2));
}
