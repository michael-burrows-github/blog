import { useState } from 'react';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  function toggle() {
    setVisible(!visible);    
  }
  return {toggle, visible}
};

export default useModal;