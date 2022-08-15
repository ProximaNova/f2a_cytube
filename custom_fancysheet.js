/*!
 **|   Fancy Sheet
 **|
 **@preserve
 */
"use strict";
(function (FancySheet) {
    return FancySheet(window, document, window.jQuery);
})(function (window, document, $, undefined) {
    if (localStorage.getItem(`${CHANNEL.name}_FancySheet`) !== null && parseInt(localStorage.getItem(`${CHANNEL.name}_FancySheet`))) {
        $("<link>").attr("rel", "stylesheet").attr("href", "https://resources.pink.horse/css/fancy.css").attr("id", "fancysheet").appendTo($("head"));
    }
    $("<button>")
        .addClass("btn btn-sm")
        .addClass(parseInt(localStorage.getItem(`${CHANNEL.name}_FancySheet`)) ? "btn-success" : "btn-danger")
        .text("Fancy Mode")
        .attr("id", "fancybutton")
        .on("click", function () {
            if (!$("#fancysheet").length) {
                $("<link>").attr("rel", "stylesheet").attr("href", "https://resources.pink.horse/css/fancy.css").attr("id", "fancysheet").appendTo($("head"));
                localStorage.setItem(`${CHANNEL.name}_FancySheet`, 1);
            } else {
                $("#fancysheet").remove();
                localStorage.setItem(`${CHANNEL.name}_FancySheet`, 0);
            }
            $(this).toggleClass("btn-danger btn-success");
        })
        .prependTo("#leftcontrols");
});
