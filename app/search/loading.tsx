'use client';

import Box from '@/components/Box';
import { PuffLoader } from 'react-spinners';

const Loading = () => {
  return (
    <Box className='h-full flex items-center justify-center'>
      <PuffLoader color='#22c55e' size={40} />
    </Box>
  );
};

export default Loading;
