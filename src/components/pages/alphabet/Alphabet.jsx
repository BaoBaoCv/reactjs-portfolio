import React, { useState, useEffect } from "react";
import "./alphabet.scss";
import { Container } from "react-bootstrap";
import alphabetData from "@/constants/alphabet-data.json";
import {
  canPerformAction,
  recordAction,
  getRemainingTimeMs,
  formatRemainingTime
} from "@/utils/cookies";

const AlphabetCard = ({ letter, data, isFlipped, onClick, isRateLimited }) => {
  return (
    <div
      className={`alphabet-card ${isFlipped ? 'flipped' : ''} ${isRateLimited ? 'rate-limited' : ''}`}
      onClick={onClick}
    >
      <div className="alphabet-card__inner">
        <div className="alphabet-card__front">
          <div className="alphabet-card__letter">{letter}</div>
          {isRateLimited && (
            <div className="alphabet-card__rate-limit-overlay">
              <span className="alphabet-card__lock-icon">⏰</span>
            </div>
          )}
        </div>
        <div className="alphabet-card__back">
          <div className="alphabet-card__content">
            <h3 className="alphabet-card__title">{data.title}</h3>
            {/* <p className="alphabet-card__description">{data.description}</p> */}
            {/* <blockquote className="alphabet-card__quote">
              "{data.quote}"
            </blockquote> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Alphabet = () => {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const RATE_LIMIT_COOKIE = 'alphabetFlipTime';
  const RATE_LIMIT_HOURS = 6;

  // Update rate limiting status and remaining time
  const updateRateLimitStatus = () => {
    const remainingMs = getRemainingTimeMs(RATE_LIMIT_COOKIE, RATE_LIMIT_HOURS);
    const canFlip = canPerformAction(RATE_LIMIT_COOKIE, RATE_LIMIT_HOURS);

    setIsRateLimited(!canFlip);
    setRemainingTime(remainingMs);
  };

  // Set up timer to update remaining time every second when rate limited
  useEffect(() => {
    updateRateLimitStatus();

    let interval;
    if (isRateLimited && remainingTime > 0) {
      interval = setInterval(() => {
        const remainingMs = getRemainingTimeMs(RATE_LIMIT_COOKIE, RATE_LIMIT_HOURS);
        if (remainingMs <= 0) {
          setIsRateLimited(false);
          setRemainingTime(0);
          clearInterval(interval);
        } else {
          setRemainingTime(remainingMs);
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRateLimited, remainingTime]);

  const handleCardClick = (letter) => {
    // Check if user can perform action
    if (!canPerformAction(RATE_LIMIT_COOKIE, RATE_LIMIT_HOURS)) {
      return; // Rate limited, don't allow flip
    }

    // Record the action
    recordAction(RATE_LIMIT_COOKIE, RATE_LIMIT_HOURS);

    // Update rate limiting status
    updateRateLimitStatus();

    // Perform the flip
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(letter)) {
        newSet.delete(letter);
      } else {
        newSet.add(letter);
      }
      return newSet;
    });
  };

  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <Container className="alphabet">
      <div className="alphabet__header">
        <h1>Dating activities</h1>
        <p>Click to reveal its hidden activity</p>
        {isRateLimited && remainingTime > 0 && (
          <div className="alphabet__rate-limit-notice">
            <p>⏰ You can flip another card in {formatRemainingTime(remainingTime)}</p>
          </div>
        )}
      </div>

      <div className="alphabet__grid">
        {letters.map(letter => (
          <AlphabetCard
            key={letter}
            letter={letter}
            data={alphabetData[letter]}
            isFlipped={flippedCards.has(letter)}
            onClick={() => handleCardClick(letter)}
            isRateLimited={isRateLimited}
          />
        ))}
      </div>
    </Container>
  );
};

export default Alphabet;
