import View from './View.js'
import preView from './preView.js';
import icons from 'url:../../img/icons.svg';

class BookmarksView extends View{
    _parentElement = document.querySelector('.bookmarks__list')
    _errorMessage = `No bookmarks set. Start by finding a recipe you like and bookmarking it.`
    _message = '';

    addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }

    _generateMarkup() {
        return this._data
        .map(bookmark => preView.render(bookmark, false))
        .join('')
    }
}

export default new BookmarksView();