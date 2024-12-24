export const Title = ({ children }) => {
  return <h1 className="border-b pb-2 my-4 text-center text-6xl">{children}</h1>;
};

export const Subtitle = ({ children }) => {
  return <h2 className="text-4xl">{children}</h2>;
};

export const Heading = ({ children }) => {
  return <h3>{children}</h3>;
};
