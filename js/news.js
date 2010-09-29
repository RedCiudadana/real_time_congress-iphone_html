NewsView.prototype = new View();
function NewsView() {
    var self = this;
    self.containerDiv = 'news_body';
    self.titleString = 'News';
    
    self.loadList = function(news_source, title) {
        localStorage.setItem("current_news_source", news_source);
        localStorage.setItem("current_news_title", title);
        application.viewStack.forwardTo('news_source');
    }

    self.render = function() {
        self.setTitle(self.titleString);
        self.setLeftButton('back');
        self.setRightButton();
        self.show();
    }
}
