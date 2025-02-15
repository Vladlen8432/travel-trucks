// eslint-disable-next-line react/prop-types
export const BurgerMenuIcon = ({ className, stroke }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className={className}
      >
        <path
          d="M3.5 14H24.5 M3.5 7H24.5 M3.5 21H24.5"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
