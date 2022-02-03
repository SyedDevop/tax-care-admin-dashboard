import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export interface PaginationProps {
  totalRows: number;
  pageSize: number;
  pageIndex: number;
  pageOptions: number[];
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  previousPage: () => void;
  canPreviousPage: boolean;
  nextPage: () => void;
  canNextPage: boolean;
}

const Pagination = ({
  canNextPage,
  canPreviousPage,
  gotoPage,
  nextPage,
  pageIndex,
  pageOptions,
  pageSize,
  previousPage,
  totalRows,
}: PaginationProps) => {
  return (
    <div className="page--select">
      <div>
        {pageSize} of {totalRows}
      </div>
      <div>
        <div>
          <p>goto</p>
          <input
            type="number"
            name="page-number"
            defaultValue={1}
            // value={pageIndex + 1}
            min={1}
            max={pageOptions.length}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
          <p>the page you&rsquo;re on</p>
          <p>
            {pageIndex + 1} of {pageOptions.length}
          </p>
        </div>
        <hr />
        <div className="page--select__btn">
          <button
            type="button"
            className="page--select__pre"
            onClick={previousPage}
            disabled={!canPreviousPage}
          >
            <ArrowBackIcon />
          </button>
          <button
            type="button"
            className="page--select__next"
            onClick={nextPage}
            disabled={!canNextPage}
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
