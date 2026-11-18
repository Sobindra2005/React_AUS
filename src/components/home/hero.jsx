"use client";

import { useState } from "react";
import {
  Search,
  ShoppingCart,
  User,
  ArrowRight,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Leaf,
  Truck,
  RefreshCw,
  MessageCircle,
} from "lucide-react";

export default function FashionHero({ slides }) {
  const activeSlides = slides
    .filter((slide) => slide.isActive)
    .sort((a, b) => a.order - b.order);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!activeSlides.length) return null;

  const currentSlide = activeSlides[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + activeSlides.length) % activeSlides.length
    );
  };

  return (
    <section className="fashion-hero">
      {/* Navigation */}
      <header className="fashion-navbar">
        <div className="fashion-navbar-inner">
          <a href="/" className="fashion-logo">
            VOGUE.
          </a>

          <nav className="fashion-nav-links">
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/categories">Categories</a>
            <a href="/events">Events</a>
            <a href="/blog">Blog</a>
          </nav>

          <div className="fashion-nav-actions">
            <button aria-label="Search">
              <Search size={21} />
            </button>

            <button aria-label="Shopping cart" className="cart-button">
              <ShoppingCart size={21} />
              <span className="cart-count">3</span>
            </button>

            <button aria-label="Account">
              <User size={21} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="fashion-hero-content">
        {/* Background image */}
        <div
          className="fashion-hero-image"
          style={{
            backgroundImage: `url("${currentSlide.image}")`,
          }}
        />

        {/* Gradient overlay */}
        <div className="fashion-hero-overlay" />

        {/* Left content */}
        <div className="fashion-content-container">
          <div className="fashion-content">
            <div className="fashion-tagline">
              <span>{currentSlide.tagline}</span>
              <span className="tagline-line" />
            </div>

            <h1>
              {currentSlide.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </h1>

            <p className="fashion-description">
              {currentSlide.description}
            </p>

            <a href="/shop" className="fashion-shop-button">
              Shop Now
              <ArrowRight size={17} />
            </a>

            {/* Benefits */}
            <div className="fashion-benefits">
              <div className="fashion-benefit">
                <Leaf size={17} />
                <div>
                  <strong>Premium Quality</strong>
                  <span>Crafted to last</span>
                </div>
              </div>

              <div className="fashion-benefit">
                <Truck size={17} />
                <div>
                  <strong>Free Shipping</strong>
                  <span>On orders over $100</span>
                </div>
              </div>

              <div className="fashion-benefit">
                <RefreshCw size={17} />
                <div>
                  <strong>Easy Returns</strong>
                  <span>Hassle free</span>
                </div>
              </div>
            </div>

            {/* Slide navigation */}
            <div className="fashion-slider-controls">
              <button
                onClick={previousSlide}
                aria-label="Previous slide"
                className="slider-arrow"
              >
                <ArrowLeft size={17} />
              </button>

              <div className="slider-counter">
                <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                <span className="counter-divider">/</span>
                <span>{String(activeSlides.length).padStart(2, "0")}</span>
              </div>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="slider-arrow"
              >
                <ArrowRightIcon size={17} />
              </button>
            </div>
          </div>

          {/* Handwritten text */}
          <div className="fashion-handwritten">
            {currentSlide.handwritten.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
            <div className="handwritten-underline" />
          </div>
        </div>

        {/* Chat button */}
        <button className="fashion-chat-button" aria-label="Chat with us">
          <MessageCircle size={27} />
        </button>
      </div>
    </section>
  );
}