import View from './View'
import icons from 'url:../../img/icons.svg';
import { RES_PER_PAGE } from '../config';

class PaginationView extends View {
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn--inline');

            if(!btn) return;

            const goToPage = btn.dataset.goto * 1;

            handler(goToPage);
        })
    }

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)

        const prevPage = `
            <button data-goto="${curPage - 1}" class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage - 1}</span>
            </button>`

        const nextPage = `
            <button data-goto="${curPage + 1}"  class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>`

        // Page 1, other pages
        if (this._data.page === 1 && numPages > 1) {
            return nextPage
        }
        
        // Last page
        if (this._data.page === numPages && numPages > 1) {
            return prevPage
        }
        // Other page
        if (this._data.page < numPages) {
            return `${prevPage}${nextPage}`
        }
        // Page 1, no other pages
        return '' // only One page, nothing rendered
    }
}

export default new PaginationView