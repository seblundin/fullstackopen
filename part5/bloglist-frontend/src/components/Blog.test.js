import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Blog from './Blog';

const someBlog = {
  title: 'a title',
  author: 'blogger',
  likes: 5,
  url: 'url',
};

describe('<Blog />', () => {
  test('at first only renders likes title and author', () => {
    render(
      <Blog blog={someBlog} handleLike={() => {}} handleDelete={() => {}} />
    );
    const div = screen.getByTestId('additional-info');
    expect(div).toHaveStyle('display: none');
  });

  test('when view button is clicked, likes and url are visible', async () => {
    render(
      <Blog blog={someBlog} handleLike={() => {}} handleDelete={() => {}} />
    );
    const user = userEvent.setup();
    const button = screen.getByTestId('hide-button');
    await user.click(button);

    const div = screen.getByTestId('additional-info');
    expect(div).toHaveStyle('display: flex');
  });

  test('event handler is called twice after two "like" clicks', async () => {
    const likeHandler = jest.fn();
    const user = userEvent.setup();
    render(
      <Blog blog={someBlog} handleLike={likeHandler} handleDelete={() => {}} />
    );
    const hideButton = screen.getByTestId('like-button');

    await user.dblClick(hideButton);
    expect(likeHandler.mock.calls).toHaveLength(2);
  });
});
