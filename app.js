$(window).on("load", function (event) {
  $(".app").css("height", "unset");
  $(".loader").delay(1000).fadeOut("fast");
  $(".preloading").delay(2000).fadeOut("preloading");
});

// end load trand

$(document).ready(function () {
  $(".counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  //
  const btnChooseOptions = $(".btn-choose");
  var listProject = document.querySelectorAll(".project__list__item");

  function choose(e, args) {
    if (e.classList.contains(args)) {
      e.classList.add("show");
      e.classList.remove("hidden");
    } else {
      e.classList.remove("show");
      e.classList.add("hidden");
    }
  }

  const listHeader = $(".list__header");
  listHeader.click(function () {
    headerNavMenu.removeClass("show");
    $(".list__header.active").removeClass("active");
    $(this).addClass("active");
  });

  btnChooseOptions.click(function () {
    $(".btn-choose.active").removeClass("active");
    $(this).addClass("active");
    switch ($(this).text()) {
      case "All": {
        listProject.forEach((e) => {
          choose(e, "all");
        });
        wrapSlider.css("transform", "unset");
        if ($(".project__list__item.all").length > 6) {
          // $(".project__list__item.all").css("flex", "1 0 16%");
        }
        break;
      }
      case "Website": {
        listProject.forEach((e) => {
          choose(e, "website");
        });
        wrapSlider.css("transform", "unset");
        if ($(".project__list__item.website").length < 6) {
          // $(".project__list__item.website").css("flex", "1 0 30%");
        }
        break;
      }
      case "UX/UI": {
        listProject.forEach((e) => {
          choose(e, "ux_ui");
        });
        wrapSlider.css("transform", "unset");
        if ($(".project__list__item.ux_ui").length < 6) {
          // $(".project__list__item.ux_ui").css("flex", "1 0 30%");
        }

        break;
      }
      default: {
        listProject.forEach((e) => {
          choose(e, "all");
        });
      }
    }
  });

  const iconMyDetails = $(".icon__future");
  const listIconClose = $(".icon__close");
  var isShowDetails = false;
  iconMyDetails.click(function () {
    isShowDetails = !isShowDetails;
    if (isShowDetails) {
      showDetails($(this));
    } else {
      removeShowDetails();
    }
  });

  function showDetails(element) {
    element.parent().children(".detail__my__des").addClass("show");
    element.children(".icon__close").addClass("show");
    element.children(".icon__show").addClass("hidden");
  }

  function removeShowDetails() {
    $(".detail__my__des.show").removeClass("show");
    $(".icon__close.show").removeClass("show");

    $(".icon__show.hidden").removeClass("hidden");
  }

  // icon slider
  const wrapSlider = $(".project__list");
  const iconNext = $(".icon__next__slide");
  const iconPrev = $(".icon__prev__slide");
  const widthItemOfSlider = $(".project__list__item").width();
  const widthAllItem =
    widthItemOfSlider * $(".project__list__item").length -
    widthItemOfSlider * 7;
  let withChange = 0;
  // end

  iconNext.click(function () {
    handleChange(1);
  });
  iconPrev.click(function () {
    handleChange(-1);
  });

  function handleChange(prams) {
    if (prams == -1) {
      console.log(widthItemOfSlider);
      console.log("withChange:" + withChange);
      if (withChange > -widthItemOfSlider) {
        withChange = withChange - widthItemOfSlider;
        console.log(withChange);
        wrapSlider.css("transform", `translateX(${withChange}px)`);
      }
    } else if (prams == 1) {
      if (withChange < widthItemOfSlider) {
        withChange = withChange + widthItemOfSlider;
        console.log(withChange);
        wrapSlider.css("transform", `translateX(${withChange}px)`);
      }
    }
  }

  // handle responsive
  const menuHeader = $(".icon__menu");
  const headerNavMenu = $(".header__nav");
  const btnCLoseMenuHeader = $(".icon__close__header");

  menuHeader.click(function () {
    headerNavMenu.addClass("show");
  });
  $(".btn__contact__me__header").click(function () {
    headerNavMenu.removeClass("show");
  });
  btnCLoseMenuHeader.click(function () {
    headerNavMenu.removeClass("show");
  });
});
