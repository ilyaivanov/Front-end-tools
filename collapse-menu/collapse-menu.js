$(document).on("click", "a[data-collapse-target]", function () {
    var sourceElement = $(this).attr('data-collapse-target');

    var destinationElement = $('[data-collapse-menu="' + sourceElement + '"]');

    var destinationElementGroup = destinationElement.attr('data-collapse-group');

    var openElementsInGroup = $('.in[data-collapse-group="' + destinationElementGroup + '"]');

    if(openElementsInGroup.length > 0)
        openElementsInGroup.collapse('hide');

    destinationElement.collapse('toggle');
});