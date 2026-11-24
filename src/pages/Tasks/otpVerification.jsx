
import { useState, useEffect, useRef } from "react";

export const OTPVerification = () => {
  // TODO 1: Create a countdown state.
  // Initial value: 30 seconds.

  // TODO 2: Create a state for the verification message.

  // Temporary values. Replace these with state.
  const seconds = 30;
  const message = "";

  // TODO 3: Create four refs using useRef.
  // Store these refs inside an array.

  // TODO 4: Use useEffect to focus the first
  // input when the component mounts.
  // Hint: Use an empty dependency array.

  // TODO 5: Use useEffect to implement the countdown.
  // - Decrease seconds every 1000ms.
  // - Stop when seconds reach zero.
  // - Return a cleanup function.
  // Hint: Use setInterval and clearInterval.

  const handleChange = (e, index) => {
    // TODO 6: Accept only numeric digits.

    // TODO 7: Move focus to the next input
    // when a valid digit is entered.
    // Hint: Use ref.current.focus().
  };

  const handleVerify = (e) => {
    e.preventDefault();

    // TODO 9: Collect values from all four inputs.
    // Hint: Use ref.current.value.

    // TODO 10: Verify the OTP.
    // Correct demo OTP: "1234".
    // Update the verification message.
  };

  const handleResend = () => {
    // TODO 11: Reset the countdown to 30 seconds.

    // TODO 12: Clear all input values.

    // TODO 13: Focus the first input.

    // TODO 14: Clear the verification message.
  };

  const inputClass =
    "h-14 w-14 rounded-xl border border-slate-300 text-center text-2xl font-bold outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <svg
            className="h-8 w-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 12 2 2 4-4"
            />
          </svg>
        </div>

        <h1 className="mt-5 text-2xl font-bold text-slate-900">
          Verify your account
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Enter your 4-digit verification code.
        </p>

        <form onSubmit={handleVerify}>

          {/* OTP inputs */}
          <div className="my-8 flex justify-center gap-3">

            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                aria-label={`OTP digit ${index + 1}`}
                className={inputClass}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}

                // TODO: Connect the corresponding ref.
              />
            ))}

          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
          >
            Verify OTP
          </button>

        </form>

        {/* Verification message */}
        <p
          role="status"
          className="mt-4 text-sm font-medium"
        >
          {message}
        </p>

        <div className="mt-6 border-t border-slate-200 pt-6">

          <p className="text-sm text-slate-500">
            Didn't receive the code?
          </p>

          {/* TODO: Hide countdown when seconds reach zero. */}

          <p className="mt-2 font-mono text-lg font-semibold text-slate-700">
            00:{String(seconds).padStart(2, "0")}
          </p>

          <button
            type="button"
            onClick={handleResend}
            disabled={true}
            className="mt-4 w-full rounded-lg border border-blue-600 py-2.5 font-medium text-blue-600 hover:bg-blue-50 disabled:cursor-not-allowed disabled:border-slate-300 disabled:text-slate-400"

            // TODO: Enable only when countdown reaches zero.
          >
            Resend OTP
          </button>

        </div>

        <div className="mt-6 rounded-lg bg-blue-50 p-3">
          <p className="text-xs text-blue-700">
            Demo verification code: 1234
          </p>
        </div>

      </div>
    </div>
  );
};

export default OTPVerification;
