import { CgSpinner } from "react-icons/cg";

function PageLoader({ loading, children, fullHeight, height }) {
  return (
    <div className={`${fullHeight ? "h-screen" : `${height}`}`}>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <CgSpinner className="icon-spin" />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

PageLoader.defaultProps = {
  loading: false,
  fullHeight: false,
  height: undefined,
};

export { PageLoader };
