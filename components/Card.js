import { useContextTheme } from 'components/ThemeContext';

import Button from '../components/Button';

import React from 'react';
import clsx from 'clsx';

import PropTypes from 'prop-types';

import Image from 'next/image';
function Card({ backgroundImageSource, backgroundImageAltText, children }) {
  const { cardsBackgroundColor, textColor } = useContextTheme();
  return (
    <div className="card filter brightness-105 card-shadow">
      {backgroundImageSource && (
        <figure>
          <Image
            alt={backgroundImageAltText}
            height="280"
            layout="responsive"
            objectFit="cover"
            src={backgroundImageSource}
            width="400"
          />
        </figure>
      )}
      <div
        className={`card-body grid ${cardsBackgroundColor} text-${textColor} gap-y-3 auto-rows-card`}
      >
        {children}
      </div>
      <style jsx>{`
        .card-shadow {
          box-shadow: rgba(14, 30, 37, 0.061) 6px 6px 12px 0px,
            rgba(14, 30, 37, 0.075) 6px 6px 10px 0px;
        }
      `}</style>
    </div>
  );
}

Card.propTypes = {
  backgroundImageSource: PropTypes.string,
  backgroundImageAltText: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export function CardTitle({ children }) {
  const { cardsBackgroundColor } = useContextTheme();
  return (
    <span className={`card-title m-0 ${cardsBackgroundColor}`}>{children}</span>
  );
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardParagraph({ children }) {
  return <span>{children}</span>;
}

CardParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export function CardAction({ children, linkTo, isPending, cardStyle }) {
  return (
    <div className={`pt-5 ${cardStyle}`}>
      {linkTo ? (
        <a className="btn btn-accent" href={linkTo}>
          {children}
        </a>
      ) : (
        <Button
          ariaLabel="card-action-btn"
          btnClasses={clsx('btn btn-accent shadow-md w-full h-auto', {
            loading: isPending,
          })}
          btnLabel={children}
          btnType="button"
        />
      )}
    </div>
  );
}

CardAction.propTypes = {
  children: PropTypes.node,
  isPending: PropTypes.bool,
  linkTo: PropTypes.string,
  style: PropTypes.string,
};

export function CardAddress({ children, label }) {
  return (
    <div className="shaded-text my-auto shadow-md">
      <div className="font-semibold">{label}</div>
      <span>{children}</span>
    </div>
  );
}

CardAddress.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

export function PositionRequirements({ label, children }) {
  return (
    <div className="p-2 mt-auto shaded-text">
      <span className="font-semibold">{label}</span>
      <ul className="list-disc text-left pl-6">
        {React.Children.map(children, (listItem) => (
          <li>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}

PositionRequirements.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
