const getClass = document.querySelector.bind(document)
const getClasses = document.querySelectorAll.bind(document)

const courses = [
    {image: './assets/img/courses_basic/html_basic.png', title: 'Khóa Học HTML Cơ Bản', coin: 'Miễn phí', typeCourse: 'basic'},
    {image: './assets/img/courses_basic/css_basic.jpg', title: 'Khóa Học CSS Cơ Bản', coin: 'Miễn phí', typeCourse: 'basic'},
    {image: './assets/img/courses_basic/c++_basic.jpg', title: 'Khóa Học C++ Cơ Bản', coin: 'Miễn phí', typeCourse: 'basic'},
    {image: './assets/img/courses_basic/c_sap_basic.jpg', title: 'Khóa Học C# Cơ Bản', coin: 'Miễn phí', typeCourse: 'basic'},
    {image: './assets/img/courses_basic/java_basic.png', title: 'Khóa Học Java Cơ Bản', coin: 'Miễn phí', typeCourse: 'basic'},
    {image: './assets/img/courses_basic/python_basic.jpg', title: 'Khóa Học Python Cơ Bản', coin: 'Miễn phí', typeCourse: 'basic'},

    {image: './assets/img/courses_advance/android_advance.jpg', title: 'Khóa Học Android Nâng Cao', coin: 'Miễn phí', typeCourse: 'advance'},
    {image: './assets/img/courses_advance/php_advance.jpg', title: 'Khóa Học PHP Nâng Cao', coin: 'Miễn phí', typeCourse: 'advance'},
    {image: './assets/img/courses_advance/java_advance.png', title: 'Khóa Học Java Nâng Cao', coin: 'Miễn phí', typeCourse: 'advance'},
    {image: './assets/img/courses_advance/node_advance.jpg', title: 'Khóa Học Node JS Nâng Cao', coin: 'Miễn phí', typeCourse: 'advance'},
    {image: './assets/img/courses_advance/c++_advance.jpg', title: 'Khóa Học C++ Nâng Cao', coin: 'Miễn phí', typeCourse: 'advance'},
    {image: './assets/img/courses_advance/c_sap_advance.jpg', title: 'Khóa Học C# Nâng Cao', coin: 'Miễn phí', typeCourse: 'advance'},
]


function renderCourseBasic(){
    const showCoursesBaisc = getClass('.show_courses_basic')
    const htmls = courses.map(function(course){
        if(course.typeCourse === 'basic'){
            return `<div class="col col-l-4 col-m-6">
            <div class="body-course">
            <div class="course-img">
                <img src="${course.image}" alt="" class="body-course__img">
            </div>
            <div class="body-course__group">
                <div class="body-course__group-title">${course.title}</div>
                <div class="body-course__group-price">
                    <i class="fas fa-dollar-sign"></i>
                    ${course.coin}</div>
            </div>
            </div>
        </div>  `
        }
    }).join('')
    showCoursesBaisc.innerHTML = htmls
}

function renderCourseAdvance(){
    const showCoursesAdvance = getClass('.show_courses_advance')
    const htmls = courses.map(function(course){
        if(course.typeCourse === 'advance'){
            return `<div class="col col-l-4 col-m-6">
            <div class="body-course">
            <div class="course-img">
                <img src="${course.image}" alt="" class="body-course__img">
            </div>
            <div class="body-course__group">
                <div class="body-course__group-title">${course.title}</div>
                <div class="body-course__group-price">
                    <i class="fas fa-dollar-sign"></i>
                    ${course.coin}</div>
            </div>
            </div>
        </div>  `
        }
    }).join('')
    showCoursesAdvance.innerHTML = htmls
}

function headerScroll(){
    const header = getClass('.header')
    window.addEventListener('scroll', function(){
        header.classList.toggle('header_scroll', window.scrollY > 0)
    })
}

function backTop(){
    const backTop = getClass('.back-top')
    window.addEventListener('scroll', function(){
        backTop.style.display = 'block'
        backTop.classList.toggle('back-top', window.scrollY > 300)
    })
    backTop.addEventListener('click', function(){
        // event.preventDefault();
		$('html,body').animate({scrollTop:0}, "slow");
    })
}

function getView(){
    const view = getClass('.view')
    fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        view.innerHTML = 'Tổng lượt truy cập: ' + res.value;
  })
}

function navMobile(){
    const close = getClass('.nav-icon-close')
    const open = getClass('.nav-icon-open')
    const navMoblile = getClass('.nav-mobile')
    const headerVideo = getClass('.header-video')
    const body = getClass('.body')
    open.addEventListener('click', function(){
        navMoblile.classList.add('nav-mobile')
        navMoblile.style.display = 'block'
        close.style.display = 'block'
        open.style.display = 'none'
    })
    headerVideo.addEventListener('click', function(){
        // e.stopPropagation()
        navMoblile.style.display = 'none'
        close.style.display = 'none'
        open.style.display = 'block'
    })
    body.addEventListener('click', function(){
        // e.stopPropagation()
        navMoblile.style.display = 'none'
        close.style.display = 'none'
        open.style.display = 'block'
    })
    close.addEventListener('click', function(){
        navMoblile.classList.remove('nav-mobile')
        close.style.display = 'none'
        open.style.display = 'block'
        navMoblile.style.display = 'none'
    })

}

navMobile()
getView()
renderCourseBasic()
renderCourseAdvance()
headerScroll()
backTop()