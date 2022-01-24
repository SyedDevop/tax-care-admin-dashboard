import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import SearchIcon from '@mui/icons-material/Search';

const GlobalFilter = ({
  filter,
  setFilter,
}: {
  filter: any;
  setFilter: any;
}) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((changedValue: string) => {
    setFilter(changedValue || undefined);
  }, 300);
  return (
    <section id="table__global--filter">
      <SearchIcon />
      <input
        type="search"
        name="search"
        placeholder="search for name,plan type,state....."
        value={value || ''}
        onChange={(e) => {
          onChange(e.target.value);
          setValue(e.target.value);
        }}
      />
    </section>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { GlobalFilter };
