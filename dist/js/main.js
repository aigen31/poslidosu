"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function changeInputWidth(input, buffer, value) {
  buffer.innerHTML = value;
  var computedStyle = getComputedStyle(buffer),
    inputWidth = buffer.offsetWidth;
  inputWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight) + parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
  input.style.width = inputWidth + 'px';
}
var adminFilter = function adminFilter() {
  var input = document.querySelectorAll('.admin__filter-input'),
    buffer = [],
    cancel = [];
  function clear(filterItem) {
    var input = filterItem.querySelector('.admin__filter-input, .admin__filter-select');
    filterItem.classList.remove("admin__filter-item--active");
    filterItem.classList.remove("admin__filter-item--searching");
    input.style.width = 0;
    input.value = '';
  }
  var _loop = function _loop(i) {
    cancel[i] = document.createElement('div');
    cancel[i].className = "admin__filter-cancel";
    input[i].parentNode.insertBefore(cancel[i], input[i].nextSibling);
    buffer[i] = document.createElement('div');
    buffer[i].className = "input-width-buffer";
    input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);
    cancel[i].onclick = function () {
      clear(this.parentNode);
    };
    input[i].oninput = function () {
      changeInputWidth(input[i], this.nextElementSibling, this.value);
      if (this.value.length) {
        this.parentElement.classList.add("admin__filter-item--searching");
      } else {
        clear(this.parentNode);
        this.parentElement.classList.remove("admin__filter-item--searching");
      }

      // fetch('')
      //     .then(response => response.json())
      //     .then(function (data) {
      //     })
      //     .then(data => input = data)
      //     .catch(error => console.error('Error:', error));
    };

    var filterList = input[i].parentNode.querySelector('.admin__filter-list');
    filterList.addEventListener('click', function (e) {
      if (e.target.classList.contains('admin__filter-list-item') || e.target.parentElement.classList.contains('admin__filter-list-item')) {
        input[i].parentElement.classList.add("admin__filter-item--active");
        input[i].parentElement.classList.remove("admin__filter-item--searching");
        input[i].value = e.target.textContent;
        changeInputWidth(input[i], buffer[i], input[i].value);
      }
    });
  };
  for (var i = 0; input.length > i; i++) {
    _loop(i);
  }
  var filterReset = document.querySelector('.admin__filter-reset');
  if (filterReset) {
    filterReset.addEventListener('click', function (e) {
      var filterItems = document.querySelectorAll('.admin__filter-item');
      for (var _i = 0; filterItems.length > _i; _i++) {
        filterItems[_i].classList.remove('admin__filter-item--active');
        var _input = filterItems[_i].querySelector('.admin__filter-input');
        if (_input) {
          _input.classList.remove('admin__filter-item--active');
          _input.value = '';
          _input.style.width = 0;
        }
        var select = filterItems[_i].querySelector('.admin__filter-select');
        if (select) {
          select.value = 999;
          select.classList.remove('admin__filter-item--active');
        }
      }
    });
  }
};
var customFileInput = function customFileInput() {
  var fileInputs = document.querySelectorAll('.file-input');
  for (var i = 0; i < fileInputs.length; i++) {
    fileInputs[i].addEventListener('change', function (e) {
      var _e$target$files = _slicedToArray(e.target.files, 1),
        file = _e$target$files[0],
        fileNameEl = e.target.parentElement.querySelector('.file-name');
      fileNameEl.textContent = file.name;
      fileNameEl.classList.add('file-name--active');
    });
  }
};
var adminEntityAccordion = function adminEntityAccordion() {
  var acc = document.getElementsByClassName("accordion__btn");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      var accItem = this.closest('.accordion__item');
      accItem.classList.toggle("accordion__item--active");
      var panel = accItem.querySelector('.accordion__body');
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
};
var codemirror = function codemirror() {
  var code = document.getElementById("code");
	var codeLight = document.getElementById("code-light");
  if (code) {
    var editor = CodeMirror.fromTextArea(code, {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      theme: "dracula"
    });
  } else if (codeLight) {
		var editor = CodeMirror.fromTextArea(codeLight, {
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
    });
	}
};
var addMaterialChangeFieldSet = function addMaterialChangeFieldSet() {
  var addSelect = document.getElementById("add-material-type");
  if (addSelect) {
    var addBlocks = document.querySelectorAll('.add-fields');
    addSelect.addEventListener('change', function (e) {
      document.getElementById('add-material-form').classList.add("active");
      for (var i = 0; i < addBlocks.length; i++) {
        addBlocks[i].classList.remove('add-fields--active');
      }
      document.getElementById("add-fields-" + e.target.value).classList.add('add-fields--active');
			document.querySelectorAll('.CodeMirror').forEach(function(e){
				e.CodeMirror.refresh();
			});
    });
		
  }
};
var popupCheckboxesHandle = function popupCheckboxesHandle() {
  // default
  var saveDefaultCheckboxes = function saveDefaultCheckboxes(popupElement, trigger) {
    var popupCheck = popupElement.querySelector(".popup-check"),
      checkBoxes = popupElement.querySelectorAll('.form-check-input'),
      checkedIndexArr = [],
      checkedNamesArr = [];
    for (var j = 0; j < checkBoxes.length; j++) {
      if (checkBoxes[j].checked) {
        checkedIndexArr.push(j);
        var name = checkBoxes[j].closest(".popup-check__item-inner").querySelector('.popup-check-toggle');
        if (typeof name !== 'undefined' && name !== null && name !== '') {
          checkedNamesArr.push(name.textContent.trim());
        }
      }
    }
    if (trigger) {
      trigger.closest('.input-group').querySelector('.form-control span').innerHTML = checkedNamesArr.filter(function (v, i, a) {
        return a.indexOf(v) === i;
      }).join(', ');
    }
    popupCheck.setAttribute('data-default-checked', checkedIndexArr.join(','));
  };
  var setDefaultCheckboxes = function setDefaultCheckboxes(popupElement) {
    var popupCheck = popupElement.querySelector(".popup-check"),
      checkBoxes = popupElement.querySelectorAll('.form-check-input'),
      checkedIndexArr = popupCheck.getAttribute('data-default-checked').split(',');
    for (var j = 0; j < checkBoxes.length; j++) {
      if (checkedIndexArr.includes('' + j)) {
        checkBoxes[j].checked = true;
      } else {
        checkBoxes[j].checked = false;
      }
    }
  };
  // default

  var lists = document.querySelectorAll('.popup-check');
  // fill fake input
  for (var i = 0; i < lists.length; i++) {
    saveDefaultCheckboxes(document.querySelector('[id="' + lists[i].parentElement.getAttribute('id') + '"]'), document.querySelector('[data-src="#' + lists[i].parentElement.getAttribute('id') + '"]'));
    var topCountChecked = lists[i].querySelectorAll('.popup-check--top:checked').length;
    if (topCountChecked > 0) {
      lists[i].querySelector('.popup-toggle--top').checked = true;
    }
    var bottomCountChecked = lists[i].querySelectorAll('.popup-check--bottom:checked').length;
    if (bottomCountChecked > 0) {
      lists[i].querySelector('.popup-toggle--bottom').checked = true;
    }
  }
  var _loop2 = function _loop2(_i2) {
    var checkboxes = lists[_i2].querySelectorAll('.form-check-input'),
      topCount = lists[_i2].querySelectorAll('.popup-check--top').length,
      bottomCount = lists[_i2].querySelectorAll('.popup-check--bottom').length;
    for (var _i6 = 0; _i6 < checkboxes.length; _i6++) {
      checkboxes[_i6].addEventListener('change', function (e) {
        if (e.target.classList.contains('popup-check--top')) {
          var _topCountChecked = document.querySelectorAll('.fancybox__content .popup-check--top:checked').length;
          if (_topCountChecked > 0) {
            document.querySelector('.fancybox__content .popup-toggle--top').checked = true;
          }
          if (topCount === _topCountChecked) {
            document.querySelector('.fancybox__content .popup-toggle--top').classList.add('popup-toggle--filled');
          } else {
            document.querySelector('.fancybox__content .popup-toggle--top').classList.remove('popup-toggle--filled');
          }
        }
        if (e.target.classList.contains('popup-check--bottom')) {
          var _bottomCountChecked = document.querySelectorAll('.fancybox__content .popup-check--bottom:checked').length;
          if (_bottomCountChecked > 0) {
            document.querySelector('.fancybox__content .popup-toggle--bottom').checked = true;
          }
          if (bottomCount === _bottomCountChecked) {
            document.querySelector('.fancybox__content .popup-toggle--bottom').classList.add('popup-toggle--filled');
          } else {
            document.querySelector('.fancybox__content .popup-toggle--bottom').classList.remove('popup-toggle--filled');
          }
        }
      });
    }
  };
  for (var _i2 = 0; _i2 < lists.length; _i2++) {
    _loop2(_i2);
  }
  // fill fake input

  // show / hide
  var popupCheckToggle = document.getElementsByClassName("popup-check-toggle");
  for (var _i3 = 0; _i3 < popupCheckToggle.length; _i3++) {
    if (popupCheckToggle[_i3].querySelector('.icon')) {
      popupCheckToggle[_i3].addEventListener("click", function () {
        var panel = this.closest('.popup-check__item').querySelector('.popup-check__item-child');
        this.classList.toggle("popup-check-toggle--active");
        panel.classList.toggle("popup-check-child--active");
      });
    }
  }
  // show / hide

  // toggle all
  var popupToggle = document.querySelectorAll(".popup-toggle");
  var _loop3 = function _loop3(_i4) {
    popupToggle[_i4].addEventListener('change', function (e) {
      var checkBoxes = e.target.closest(".popup-check").querySelectorAll('.popup-check--bottom');
      if (e.target.classList.contains('popup-toggle--top')) {
        checkBoxes = e.target.closest(".popup-check").querySelectorAll('.popup-check--top');
      }
      for (var j = 0; j < checkBoxes.length; j++) {
        checkBoxes[j].checked = e.currentTarget.checked;
      }
      e.currentTarget.checked ? popupToggle[_i4].classList.add('popup-toggle--filled') : popupToggle[_i4].classList.remove('popup-toggle--filled');
    });
  };
  for (var _i4 = 0; _i4 < popupToggle.length; _i4++) {
    _loop3(_i4);
  }
  // toggle all

  // popup close handle
  var popupCheckClose = document.querySelectorAll('.popup-check-save, .popup-check-dismiss');
  for (var _i5 = 0; _i5 < popupCheckClose.length; _i5++) {
    popupCheckClose[_i5].addEventListener('click', function (e) {
      Fancybox.getInstance().close(e);
    });
  }
  Fancybox.bind("[data-popup-check]", {
    modal: true,
    dragToClose: false,
    autoFocus: false,
    on: {
      done: function done(fancybox, slide) {
        saveDefaultCheckboxes(fancybox.$container, false);
      },
      closing: function closing(fancybox, e) {
        if (typeof e !== 'undefined' && e.target.classList.contains('popup-check-save')) {
          var trigger = document.querySelector('[data-src="#' + fancybox.$container.querySelector('.fancybox__content').getAttribute('id') + '"]');
          saveDefaultCheckboxes(fancybox.$container, trigger);
        } else {
          setDefaultCheckboxes(fancybox.$container);
        }
      }
    }
  });
  // popup close handle
};

var copyToClipboard = function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
};
Fancybox.defaults.Hash = false;
popupCheckboxesHandle();
Fancybox.bind('[data-fancybox^="popup-rounded"]', {
  modal: true,
  dragToClose: false,
  autoFocus: false,
  mainClass: "fancybox-rounded",
  on: {
    reveal: function reveal(fancybox, slide) {
      $("#popup-terms-description").html(slide.description);
      var btn = $(slide.$trigger).parents('.carousel-item').find('.btn');
      if (btn) {
        $("#popup-terms-buttons").html(btn.clone());
      }
      var existingFancy = $(slide.$content).parents('.fancybox__container');
      if (existingFancy) {
        var existingFancyId = existingFancy.attr('id').replace(/[^\d.]/g, '');
        if (existingFancyId > 1) {
          var prevFancy = Fancybox.getInstance(existingFancyId - 1);
          console.log(prevFancy);
          if (prevFancy !== 'undefined' && prevFancy) {
            prevFancy.close();
          }
        }
      }
    }
  }
});
Fancybox.bind('[data-fancybox="menu"]', {
  modal: true,
  dragToClose: false,
  autoFocus: false,
  mainClass: "fancybox-menu",
  Image: {
    zoom: false
  },
  showClass: "fancybox-slideLeftIn",
  hideClass: "fancybox-slideLeftOut"
});
var burgerBtn = document.getElementById('burger');
burgerBtn.addEventListener('click', function (e) {
  if (Fancybox.getInstance()) {
    Fancybox.getInstance().close();
    e.stopPropagation();
  }
});
adminFilter();
customFileInput();
adminEntityAccordion();
codemirror();
addMaterialChangeFieldSet();
$(document).ready(function () {
  var owlCategories = $('.owl-carousel-categories'),
    owlPlatforms = $('.owl-carousel-platforms'),
    owlPromoCodes = $('.owl-carousel-promo-codes'),
    owlPromotions = $('.owl-carousel-promotions');
  owlCategories.owlCarousel({
    margin: 13,
    loop: false,
    autoWidth: true,
    dots: false,
    items: 1
  });
  owlPlatforms.owlCarousel({
    margin: 14,
    loop: false,
    autoWidth: true,
    dots: false,
    items: 1
  });
  owlPromoCodes.owlCarousel({
    margin: 20,
    loop: false,
    autoWidth: true,
    dots: false,
    items: 1
  });
  owlPromotions.owlCarousel({
    margin: 20,
    loop: false,
    autoWidth: true,
    dots: false,
    items: 1
  });
  $(document).on("click", ".carousel-item-code", function () {
    copyToClipboard($(this).children('.carousel-item-code__inner'));
    $(this).addClass('carousel-item-code--copied');
  });
  $(document).on("keyup keypress change", "#search-input", function () {
    if ($(this).val().length) {
      $("#search-list").addClass("search-list--visible");
    } else {
      $("#search-list").removeClass("search-list--visible");
    }
  });
  $(document).on("click", "#search-reset", function () {
    $("#search-input").val("");
    $("#search-list").removeClass("search-list--visible");
  });
  if ($(".sidebar-menu").length) {
    $($(".sidebar-menu .menu-section").get().reverse()).each(function () {
      $(this).clone().prependTo(".menu-mobile__inner");
    });
  }
  if ($(".header__account-inner").length) {
    var clone = $('.header__account-inner').clone();
    clone.find('[data-fancybox]').each(function () {
      $(this).attr('data-fancybox', $(this).data('fancybox') + '-clone');
    });
    clone.prependTo(".menu-mobile__inner");
  }
  if ($('.entity__btn-more').length) {
    $(document).on("click", ".entity__btn-more", function () {
      $(this).parents('.entity__head-right').toggleClass('active');
    });
  }
  if ($('.admin__filter-select').length) {
    $(document).on("change", ".admin__filter-select", function (e) {
      if ($(this).val() == 999) {
        this.classList.remove('admin__filter-item--active');
      } else {
        this.classList.add('admin__filter-item--active');
      }
    });
  }
  $(".admin__filter-input").each(function () {
    changeInputWidth($(this)[0], $(this).next()[0], $(this).val());
  });
  $(document).click(function (event) {
    if (!$(event.target).is(".admin__filter-item--active")) {
      $(".admin__filter-item").removeClass('admin__filter-item--searching');
    }
  });
});
//# sourceMappingURL=main.js.map
