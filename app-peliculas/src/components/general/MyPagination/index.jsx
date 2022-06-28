import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const MyPagination = (count, page, onChange) => {
    return (
        <Stack spacing={2}>
          <Pagination 
              count={count}
              page={page} 
              onchange={onChange}
              variant="outlined" 
              shape="rounded"
          />
      </Stack>


    )
}

export default MyPagination