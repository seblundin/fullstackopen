import { useState } from 'react';

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState);

  const flip = () => setState((previous) => !previous);
  const resetToggle = () => setState(initialState);

  return [state, flip, resetToggle];
};

export default useToggle;
