$(document).ready(function(){

	$( "#drag" ).draggable();

	//Constrain movement along an axis:
	$( "#constrain-1" ).draggable({ axis: "y" });
    $( "#constrain-2" ).draggable({ axis: "x" });

    //Or to within another DOM element:
    $( "#constrain-3" ).draggable({ containment: "#containment-wrapper", scroll: false });
    $( "#constrain-4" ).draggable({ containment: "parent" });

    //jquery UI draggable + shortable
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "#drag-short" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });
    $( ".short ul, .short ul li" ).disableSelection();
    //Revert the original & helper
    $( "#revert" ).draggable({ revert: true });
    $( "#helper" ).draggable({ revert: true, helper:"clone" });

    /*droppable start*/

    //Create targets for draggable elements.
    $( "#target" ).draggable();
    $( "#droppable-1" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

    //droppable accept
    $( "#accept, #drag-nonvalid" ).draggable();
    $( "#accept-drop" ).droppable({
      accept: "#accept",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
    //droppable prevent propagation
    $( "#drag-2" ).draggable();
 
    $( "#drop-1-1, #drop-1-1-inner" ).droppable({
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "> p" )
            .html( "Dropped!" );
        return false;
      }
    });
 
    $( "#drop-1-2, #drop-1-2-inner" ).droppable({
      greedy: true,
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "> p" )
            .html( "Dropped!" );
      }
    });

    /*droppable end*/

    /*-------resize start-------*/

    //animation resize
    $("#resizable1").resizable({
    	animate:true
    });
    //constrain resize area
    $("#resizable2").resizable({
    	containment: "#cont"
    });
    //maximum and minimum size
    $("#resizable3").resizable({
    	maxHeight:250,
    	maxWidth:350,
    	minHeight:150,
    	minWidth:200
    });
    //snap to grid reize
    $("#resizable4").resizable({
    	grid:(50)
    });
    //textarea resize
    $( "#resizable5" ).resizable({
      handles: ("se")
    });

    /*-------resize end-------*/

    /*-------selectable start----------*/
    //selectable default
    $( "#selectable1" ).selectable();
    //selectable serialized
    $( "#selectable2" ).selectable({
      stop: function() {
        var result = $( "#select-result" ).empty();
        $( ".ui-selected", this ).each(function() {
          var index = $( "#selectable2 li" ).index( this );
          result.append( " #" + ( index + 1 ) );
        });
      }
    });
    /*----------selectable end----------*/

    /*----------Sortable start----------*/
    //sortable default
    $( "#sortable1" ).sortable();
    $( "#sortable1" ).disableSelection();
    //sortable contact list
    $( "#sortable2, #sortable2-1" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
    /*----------Sortable end----------*/

});