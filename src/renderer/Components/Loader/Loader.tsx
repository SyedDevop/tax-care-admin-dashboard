import './Loader.scss';

interface LoaderProps {
  loaderWidth?: string;
  loaderHeight?: string;
}

const Loader = ({ loaderWidth, loaderHeight }: LoaderProps) => {
  return (
    <div
      id="circularLoader"
      style={{ width: loaderWidth, height: loaderHeight }}
    >
      <span />
      <span />
    </div>
  );
};

Loader.defaultProps = {
  loaderWidth: '50px',
  loaderHeight: '50px',
};
export default Loader;
