describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`);
    const user = {
      name: 'jannu',
      username: 'jantteri',
      password: 'salainen',
    };
    cy.request('POST', `${Cypress.env('BACKEND')}/users`, user);
    cy.visit('');
  });

  it('Login form is shown', function () {
    cy.contains('Log into application');
  });

  describe('Login', function () {
    it('succeeds with correct credentials', function () {
      cy.get('#username').type('jantteri');
      cy.get('#password').type('salainen');
      cy.get('#submit-credentials').click();
      cy.contains('blogs');
    });

    it('fails with wrong credentials', function () {
      cy.get('#username').type('jantteri');
      cy.get('#password').type('salasana');
      cy.get('#submit-credentials').click();
      cy.contains('Wrong username or password');
    });
  });

  describe('When logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'jantteri', password: 'salainen' });

      cy.createBlog({
        title: 'A title for a blog',
        author: 'Some writer',
        url: 'google.com',
      });
    });

    it('A blog can be created', function () {
      cy.contains('A title for a blog');
    });

    it('The blog can be liked', function () {
      cy.contains('view').click();
      cy.contains('like').click();
      cy.contains('likes 1');
    });

    it('the blog can be deleted', function () {
      cy.contains('view').click();
      cy.contains('remove').click();
      cy.get('html').should('not.contain', 'A title');
    });

    it('the user can only remove its own blogs', function () {
      const user = {
        name: 'jonne',
        username: 'jonttura',
        password: 'salainen',
      };
      cy.request('POST', `${Cypress.env('BACKEND')}/users`, user);

      cy.login({ username: 'jonttura', password: 'salainen' });

      cy.contains('view').click();
      cy.get('#remove').should('have.css', 'display', 'none');
    });

    it('the blog with the most likes should be the first one in the blog list', function () {
      cy.createBlog({
        title: 'A second blog',
        author: 'Some writer',
        url: 'google.com',
      });
      cy.createBlog({
        title: 'A third blog',
        author: 'Some writer',
        url: 'google.com',
      });
      cy.contains('A third').siblings().contains('view').click();
      cy.get('button:visible').contains('like').click();
      cy.contains('hide').click();
      cy.contains('A second').siblings().contains('view').click();
      cy.get('button:visible').contains('like').click();
      cy.get('button:visible').contains('like').click();
      cy.wait(500);
      cy.get('p').then((blogs) => {
        cy.wrap(blogs[0]).should('contain', 'A second');
      });
    });
  });
});
