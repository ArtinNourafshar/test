document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.getElementById('comment').value;
    if (commentText) {
        const commentList = document.getElementById('commentsList');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        document.getElementById('comment').value = '';
    }
});






// افزودن رویداد submit به فرم:

// javascript
// document.getElementById('commentForm').addEventListener('submit', function(event) {
// این خط کد یک رویداد submit به فرم با شناسه commentForm اضافه می‌کند. وقتی فرم ارسال می‌شود، تابعی که به عنوان پارامتر دوم تعریف شده است، اجرا می‌شود.

// جلوگیری از رفتار پیش‌فرض فرم:

// javascript
// event.preventDefault();
// این خط کد از رفتار پیش‌فرض فرم جلوگیری می‌کند. به طور معمول، وقتی فرم ارسال می‌شود، صفحه بارگذاری مجدد می‌شود. با استفاده از event.preventDefault()، از این رفتار جلوگیری می‌شود.

// دریافت متن نظر:

// javascript
// const commentText = document.getElementById('comment').value;
// این خط کد مقدار متن وارد شده در فیلد متنی با شناسه comment را دریافت می‌کند و آن را در متغیری به نام commentText ذخیره می‌کند.

// بررسی وجود متن نظر:

// javascript
// if (commentText) {
// این خط کد بررسی می‌کند که آیا متنی وارد شده است یا خیر. اگر متنی وارد شده باشد، کدهای داخل بلوک if اجرا می‌شوند.

// دریافت لیست نظرات:

// javascript
// const commentList = document.getElementById('commentsList');
// این خط کد عنصر HTML با شناسه commentsList را دریافت می‌کند که قرار است نظرات در آن نمایش داده شوند.

// ایجاد یک عنصر جدید برای نظر:

// javascript
// const newComment = document.createElement('div');
// newComment.classList.add('comment');
// newComment.textContent = commentText;
// این خطوط کد یک عنصر div جدید ایجاد می‌کنند، کلاس comment را به آن اضافه می‌کنند و متن نظر را به عنوان محتوای آن تنظیم می‌کنند.

// افزودن نظر جدید به لیست نظرات:

// javascript
// commentList.appendChild(newComment);
// این خط کد عنصر جدید نظر را به لیست نظرات اضافه می‌کند.

// پاک کردن فیلد متنی نظر:

// javascript
// document.getElementById('comment').value = '';
// این خط کد فیلد متنی نظر را پس از ارسال نظر پاک می‌کند تا آماده دریافت نظر جدید باشد.