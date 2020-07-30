const {
  renderPage
} = require('../utils/render-page');

const home = (req, res) => {
  const data = {
    message: 'This is a General Home Page',
    firstName: 'John',
    lastName: 'Doe',
    pageName: 'Home',
  };

  return renderPage(res, 'pages/resetPassword', data, 'Demo Page');
};

module.exports = {
  home
}