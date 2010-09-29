function View() {
}

View.prototype.renderList = function(list, dest_list) {
    dest_list.innerHTML = '';
    if (list.length > 0) {
        for (i in list) {
            if (list[i].row_type == 'content') {
                this.renderRow(list[i], dest_list);
            } else if (list[i].row_type == 'header') {
                this.renderHeader(list[i].title, dest_list);
            }
        }
    }
}

View.prototype.reload = function() {
}

View.prototype.renderHeader = function(title, dest_list) {
    var newItem = document.createElement("li")
    newItem.className = 'header_row';
    newItem.innerHTML = title;
    dest_list.appendChild(newItem);
}

View.prototype.setLeftButton = function(button_type, destination) {
    if (typeof button_type != "undefined") {
        $('#leftButton').attr("src", "images/" + button_type + ".svg");
        $('#leftButton').unbind();
        if (button_type == 'back') {
            $('#leftButton').click(function() { application.viewStack.backTo() } );
        } else {
            $('#leftButton').click(function() { application.viewStack.forwardTo(destination) } );
        }
        $('#leftButton').show();
    } else {
        $('#leftButton').hide();
    }   
}

View.prototype.setRightButton = function(button_type, destination) {
    if (button_type == 'reload') {
        func = this.reload;
    }
    if (typeof button_type != "undefined") {
        $('#rightButton').attr("src", "images/" + button_type + ".svg");
        $('#rightButton').unbind();
        $('#rightButton').click(function() { func(); } );
        $('#rightButton').show();
    } else {
        $('#rightButton').hide();
    }    
}

View.prototype.showEmptyResult = function(msg) {
    $('#empty_message').html(msg);
    $('#empty_result').show();
}

View.prototype.hideEmptyResult = function() {
    $('#empty_result').hide();
}

View.prototype.setTitle = function(title) {
    $('#title_text').html(title);
}

View.prototype.setSubtitle = function(subtitle) {
    if (subtitle != '') {
        $('#subtitle_text').html(subtitle);
        $('#subheader').show();
    } else {
        $('#subheader').hide();
    }
}

View.prototype.showProgress = function() {
    $('#load_progress').show();
}

View.prototype.showLocateProgress = function() {
    $('#locate_progress').show();
}

View.prototype.hideProgress = function() {
    $('#load_progress').hide();
}

View.prototype.hideLocateProgress = function() {
    $('#locate_progress').hide();
}

View.prototype.show = function() {
    $('#'+this.containerDiv).show();
}

View.prototype.hide = function() {
    $('#'+this.containerDiv).hide();
}
