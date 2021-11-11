import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingPizzaBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="291" rx="5" ry="5" width="280" height="19" />
      <rect x="0" y="321" rx="5" ry="5" width="280" height="70" />
      <rect x="0" y="406" rx="5" ry="5" width="130" height="44" />
      <circle cx="140" cy="140" r="140" />
      <rect x="146" y="406" rx="5" ry="5" width="130" height="44" />
    </ContentLoader>
  );
}

export default LoadingPizzaBlock;
