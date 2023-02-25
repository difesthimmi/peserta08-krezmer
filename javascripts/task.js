$(function () {
    "use strict";

    var saveApplication = function () {
        localStorage.setItem("app", $(".task-container").html());
    },
        getApplication = function () {
            return localStorage.getItem("app");
        };
    (function () {
        if (getApplication()) {
            $(".task-container").html(getApplication());
        }
    })();

    var boxs = $(".box"),
        trash = $(".delete"),
        note = $(".tugas"),
        newNote = $(".create");

    note.on("dragstart", noteDragStart);
    note.on("dragend", noteDragEnd);

    boxs.on("dragover", function (e) {
        $(this).addClass("drop-here");
        e.preventDefault();
    });
    boxs.on("dragleave", function () {
        $(this).removeClass("drop-here");
    });
    trash.on("dragover", function (e) {
        e.preventDefault();
        trash.addClass("active");
    });


    boxs.on("drop", function (e) {
        var card = e.originalEvent.dataTransfer.getData("text/plain");
        e.target.appendChild(document.getElementById(card));
        e.preventDefault();
    });

    trash.on("drop", function (e) {
        var card = e.originalEvent.dataTransfer.getData("text/plain");
        if (confirm("Want to delete this note?")) {
            $("#" + card).remove();
            saveApplication();
        }
        e.preventDefault();
    });
    trash.click(function () {
        if (confirm("Want to clear?")) {
            localStorage.clear();
            $(".tugas").remove();
        }
    });

    newNote.click(function () {
        var toDo = prompt("What you have to do?"),
            thisNote;
        if (toDo) {
            thisNote = $("<div id=\"card-" + (note.length + 1) + "\" class=\"tugas\" draggable=\"true\"><h4 title=\"Judul\" contenteditable=\"true\">" + toDo + "</h4><p title=\"Click to edit\" contenteditable=\"true\">Edit Deskripsi</p></div>");
            note.push(thisNote);
            thisNote.on("dragstart", noteDragStart);
            thisNote.on("dragend", noteDragEnd);
            thisNote.on("keyup", noteChange);

            boxs.first().prepend(thisNote);
            saveApplication();
        }
    });

    function noteDragStart(e) {
        e.originalEvent.dataTransfer.setData("text/plain", e.target.getAttribute("id"));
        trash.css({
            opacity: 1
        });
    }

    function noteDragEnd() {
        boxs.removeClass("drop-here");
        trash.css({
            opacity: 0.2
        });
        trash.removeClass("active");
        saveApplication();
    }
    function noteChange() {
        saveApplication();
    }
    $(".tugas").on("keyup", function () {
        saveApplication();
    });

});
