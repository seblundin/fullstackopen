import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BlogForm from './BlogForm';

describe('<BlogForm />', () => {
  test('Calls create blog event handler with correct properties', async () => {
    const createBlog = jest.fn();
    const user = userEvent.setup();
    render(<BlogForm submitBlog={createBlog} />);

    const titleInput = screen.getByTestId('title-input');
    await user.type(titleInput, 'a nice title');

    const authorInput = screen.getByTestId('author-input');
    await user.type(authorInput, 'a new author');

    const urlInput = screen.getByTestId('url-input');
    await user.type(urlInput, 'someurl');

    const submitButton = screen.getByTestId('submit-button');
    await user.click(submitButton);

    expect(createBlog.mock.calls[0][0]['title']).toBe('a nice title');
    expect(createBlog.mock.calls[0][0]['author']).toBe('a new author');
    expect(createBlog.mock.calls[0][0]['url']).toBe('someurl');
  });
});
