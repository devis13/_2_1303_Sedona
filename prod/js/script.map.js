var search_btn = document.querySelector('.search-form__btn--open-form');
var search_modal = document.querySelector('.search-form__main-form');

var field_abults = document.querySelector('#abults');
var field_children = document.querySelector('#children');
var val_abults = 0;
var val_children = 0;
var var_count = 0;
var up_btn_abults = document.querySelector('.field__btn--boost-abults');
var down_btn_abults = document.querySelector('.field__btn--cutDown-abults');
var up_btn_children = document.querySelector('.field__btn--boost-children');
var down_btn_children = document.querySelector('.field__btn--cutDown-children');

//Включение поиска гостиницы

search_btn.addEventListener('click', function (evt) {
evt.preventDefault();
search_modal.classList.toggle('modal-open');
});

//Выбор даты

$( function() {
    $( ".field__input--datapicker-arrival" ).datepicker({
        showOn: "both",
        buttonText: '<i class="icon-calendar"></i>',
        dayNames: ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Инь", "Иль", "Авг", "Сен", "Окт", "Няб", "Дек" ],
        dateFormat:  "dd MM yy",
    });
} );

$( function() {
    $( ".field__input--datapicker-departure" ).datepicker({
        showOn:"both", 
        buttonText: '<i class="icon-calendar"></i>',
        dayNames: ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        monthNames: [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
        monthNamesShort: [ "Янв", "Фев", "Мар", "Апр", "Май", "Инь", "Иль", "Авг", "Сен", "Окт", "Няб", "Дек" ],
        dateFormat:  "dd MM yy",
    });

} );

//Количество людей

up_btn_abults.addEventListener('click', function (evt) {
    evt.preventDefault();
    val_abults += 1;
    field_abults.value = val_abults;
    
});

down_btn_abults.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (val_abults == 0) return
        else val_abults -= 1;
    field_abults.value = val_abults;
});

up_btn_children.addEventListener('click', function (evt) {
    evt.preventDefault();
    val_children += 1;
    field_children.value = val_children;
});

down_btn_children.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (val_children == 0) return
        else val_children -= 1;
    field_children.value = val_children;
});


