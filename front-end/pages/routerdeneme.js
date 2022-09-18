import router from 'next/router';
import { useEffect } from 'react';
function routerdeneme() {
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    console.log(id);
  }, [id]);
  return <div>Enter</div>;
}

export default routerdeneme;
