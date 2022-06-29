import View from './View.js'
import preView from './preView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View{
    _parentElement = document.querySelector('.results')
    _errorMessage = `No recipes found. Try a different ingredient.`
    _message = '';

    _generateMarkup() {
      return this._data
      .map(result => preView.render(result, false))
      .join('')
  }
}

export default new ResultsView();