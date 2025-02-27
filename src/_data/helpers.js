module.exports = {

    // --------------------------------------------------------------------
    // active state and aria label for links

    /**
     * Returns back some attributes based on whether the
     * link is active or a parent of an active item
     *
     * @param {String} itemUrl The link in question
     * @param {String} pageUrl The page context
     * @returns {String} The attributes or empty
     */
    addAriaCurrentState(itemUrl, pageUrl) {
        let response = '';

        if (itemUrl === pageUrl) {
            response = 'aria-current="page"';
        }

        if (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += 'data-state="active"';
        }

        return response;
    },

    addActiveState(itemUrl, pageUrl) {
        if ((itemUrl === pageUrl) || (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0)) {
            return ' active';
        }
    },


    // --------------------------------------------------------------------
    // get current year
    currentYear() {
        const today = new Date();
        return today.getFullYear();
      }
};