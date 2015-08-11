$(document).on("click", "a[data-collapse-target]", function () {
    var v = $(this).attr('data-collapse-target');
    var destinationElement = $('[data-collapse-menu="' + v + '"]');
    var destinationElementGroup = destinationElement.attr('data-collapse-group');

    var openElementsInGroup = $('.in[data-collapse-group="' + destinationElementGroup + '"]');

    openElementsInGroup.collapse('hide');

    destinationElement.collapse('toggle');
});